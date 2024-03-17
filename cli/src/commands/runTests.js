// @flow
import colors from 'colors';

import {child_process, fs, os, path} from '../lib/node.js';
import {copyFile, recursiveRmdir} from '../lib/fileUtils.js';
import {gitHubClient} from '../lib/github.js';
import {getNpmLibDefDirFromNested} from '../lib/npm/npmLibDefs';
import {getLibDefs, parseRepoDirItem} from '../lib/libDefs.js';
import {listItem, sectionHeader} from '../lib/logger';
import isInFlowTypedRepo from '../lib/isInFlowTypedRepo';
import {
  toSemverString as flowVerToSemverString,
  extractFlowDirFromFlowDirPath,
} from '../lib/flowVersion';
import {getDefinitionsDiff} from '../lib/git';

import got from 'got';
import * as semver from 'semver';
import StreamZip from 'node-stream-zip';
import typeof Yargs from 'yargs';
import type {FlowVersion} from '../lib/flowVersion.js';
import {ValidationError} from '../lib/ValidationError';

export type Args = {
  path?: mixed, // string
  onlyChanged?: mixed, //boolean
  numberOfFlowVersions?: mixed, // number
  testPatterns: mixed, // Array<string>
  ...
};

/**
 * Used to decide which binary to fetch for each version of Flow.
 *
 * Return type matches the binaries returned by flow releases
 * https://github.com/facebook/flow/releases
 *
 * eg: If the binary for the OS is `flow-linux-arm64-v0.206.0.zip`
 * we will return `linux-arm64`
 */
const BIN_PLATFORM = (() => {
  const arch = os.arch();

  switch (os.type()) {
    case 'Linux':
      if (arch === 'arm') {
        return 'linux-arm64';
      }
      return 'linux64';
    case 'Darwin':
      if (arch === 'arm') {
        return 'osx-arm64';
      }
      return 'osx';
    case 'Windows_NT':
      return 'win64';

    default:
      throw new Error('Unsupported os.type()! ' + os.type());
  }
})();

const PKG_ROOT_DIR = path.join(__dirname, '..', '..');
export const TEST_DIR: string = path.join(PKG_ROOT_DIR, '.test-dir');
const BIN_DIR = path.join(PKG_ROOT_DIR, '.flow-bins-cache');
const P = Promise;

type TestGroup = {
  id: string,
  testFilePaths: Array<string>,
  libDefPath: string,
  flowVersion: FlowVersion,
  /**
   * Object of dependencies and the supported versions of current definition
   */
  deps: {
    [key: string]: Array<string>,
  },
};

/**
 * Scan the definitions/ directory to extract a flat list of TestGroup
 * structs. Each TestGroup represents a Package/PackageVersion/FlowVersion
 * directory.
 */
const basePathRegex = new RegExp(
  'definitions/(npm|environments)/(@[^/]*/)?[^/]*/?',
);

async function getTestGroups(
  repoDirPath: string,
  envDirPath: string,
  onlyChanged: boolean = false,
): Promise<Array<TestGroup>> {
  let libDefs = await getLibDefs(repoDirPath);
  let envDefs = await getLibDefs(envDirPath);
  if (onlyChanged) {
    const diff = await getDefinitionsDiff();
    const baseDiff: string[] = diff
      .map(d => {
        if (d.endsWith('CODEOWNERS')) {
          return '';
        }

        const match = d.match(basePathRegex);
        if (match) {
          return match[0];
        }

        return '';
      })
      .filter(d => d !== '');

    const changedDefs = baseDiff.map(d => {
      const {pkgName, pkgVersion} = parseRepoDirItem(d);
      const {major, minor, patch} = pkgVersion;
      return {
        name: pkgName,
        version: `v${major}.${minor}.${patch}`,
      };
    });
    libDefs = [...libDefs, ...envDefs].filter(def => {
      return changedDefs.some(d => {
        // This is for env defs
        if (d.version === 'vx.x.x') {
          return d.name === def.pkgName;
        }
        // If the definition is a dependant of a changed package
        if (def.configPath) {
          const deps = JSON.parse(fs.readFileSync(def.configPath, 'utf-8'))
            .deps;
          const isDependantOfChanged = Object.keys(deps).some(
            dep => dep === d.name && deps[dep].some(s => s === d.version),
          );
          if (isDependantOfChanged) return true;
        }
        return d.name === def.pkgName && d.version === def.pkgVersionStr;
      });
    });
  }
  return libDefs.map(libDef => {
    const groupID = `${libDef.pkgName}_${libDef.pkgVersionStr}/${libDef.flowVersionStr}`;

    const deps = libDef.configPath
      ? JSON.parse(fs.readFileSync(libDef.configPath, 'utf-8')).deps
      : {};

    return {
      id: groupID,
      testFilePaths: libDef.testFilePaths,
      libDefPath: libDef.path,
      flowVersion: libDef.flowVersion,
      deps,
    };
  });
}

function printSkipMessage(flowVersion: string, githubUrl: string) {
  console.log(
    '==========================================================================================',
  );
  console.log(`We are temporarily skipping ${flowVersion} due to ${githubUrl}`);
  console.log(
    '==========================================================================================',
  );
}

// Once we've fetched flow bin releases they will be cached
// For subsequent tests within the same test run.
let _flowReleases = [];

/**
 * Memoized function that queries the GitHub releases for Flow, downloads the
 * zip for each version, extracts the zip, and moves the binary to
 * TEST_BIN/flow-vXXX for use later when running tests.
 */
async function getOrderedFlowBinVersions(
  numberOfReleases: number,
  flowVersion: FlowVersion,
): Promise<Array<string>> {
  sectionHeader('Fetching flow binaries...');
  const IS_WINDOWS = os.type() === 'Windows_NT';
  const GH_CLIENT = gitHubClient();
  const OS_ARCH_FILTER_RE = new RegExp(`flow-${BIN_PLATFORM}-v`);

  // Fetching all available flow versions
  // before deciding which to run
  if (_flowReleases.length === 0) {
    let foundAllFlowVersions = false;
    let page = 1;
    while (!foundAllFlowVersions) {
      try {
        const pageVersions = await GH_CLIENT.repos.listReleases({
          owner: 'facebook',
          repo: 'flow',
          page,
          per_page: 50,
        });
        listItem(`Fetched page: ${page}`);
        page += 1;
        _flowReleases.push(...pageVersions.data);

        if (pageVersions.data.length === 0) {
          foundAllFlowVersions = true;
        }
      } catch (e) {
        console.error(e);
        foundAllFlowVersions = true;
      }
    }
  }

  const filteredVersions = selectFlowTestVersions(
    _flowReleases.map(o => o.tag_name),
    flowVersion,
    numberOfReleases,
  );

  const flowBins = _flowReleases
    .filter(ver => filteredVersions.includes(ver.tag_name))
    .filter(rel => {
      if (rel.tag_name.endsWith('-rc')) {
        return false;
      }

      if (rel.tag_name === 'v0.67.0') {
        printSkipMessage(
          rel.tag_name,
          'https://github.com/facebook/flow/issues/5922',
        );
        return false;
      } else if (rel.tag_name === 'v0.63.0' || rel.tag_name === 'v0.70.0') {
        printSkipMessage(
          rel.tag_name,
          'https://github.com/flowtype/flow-typed/issues/2422',
        );
        return false;
      } else if (semver.lt(rel.tag_name, '0.53.0')) {
        console.log('flow-typed only supports flow 0.53.0 and newer');
        return false;
      } else if (
        IS_WINDOWS &&
        (semver.eq(rel.tag_name, '0.57.0') ||
          semver.eq(rel.tag_name, '0.57.1') ||
          semver.eq(rel.tag_name, '0.57.2'))
      ) {
        // Because flow 0.57 was broken before 0.57.3 on the Windows platform, we also skip those versions when running on windows.
        return false;
      }
      return true;
    })
    .map(rel => {
      // Find the binary zip in the list of assets
      const binZip = rel.assets
        .filter(({name}) => {
          return OS_ARCH_FILTER_RE.test(name) && !/-latest.zip$/.test(name);
        })
        .map(asset => asset.browser_download_url);

      if (binZip.length !== 1) {
        throw new Error(
          'Unexpected number of ' +
            BIN_PLATFORM +
            ' assets for flow-' +
            rel.tag_name +
            '! ' +
            JSON.stringify(binZip),
        );
      } else {
        const version =
          rel.tag_name[0] === 'v' ? rel.tag_name : 'v' + rel.tag_name;
        return {version, binURL: binZip[0]};
      }
    })
    .sort((a, b) => {
      return semver.lt(a.version, b.version) ? -1 : 1;
    });

  await P.all(
    flowBins.map(async ({version, binURL}) => {
      const zipPath = path.join(BIN_DIR, 'flow-' + version + '.zip');
      const binPath = path.join(
        BIN_DIR,
        'flow-' + version + (IS_WINDOWS ? '.exe' : ''),
      );

      if (await fs.exists(binPath)) {
        return;
      }

      // Download the zip file
      await new Promise((res, rej) => {
        console.log('  Fetching flow-%s...', version);
        got
          .stream(binURL, {
            headers: {
              'User-Agent':
                'flow-typed Test Runner (github.com/flowtype/flow-typed)',
            },
          })
          .on('error', err => rej(err))
          .pipe(
            fs.createWriteStream(zipPath).on('close', () => {
              console.log('    flow-%s finished downloading.', version);
              res();
            }),
          );
      });

      // Extract the flow binary
      const flowBinDirPath = path.join(BIN_DIR, 'TMP-flow-' + version);
      await fs.mkdir(flowBinDirPath);

      console.log('  Extracting flow-%s...', version);
      const zip = new StreamZip.async({file: zipPath});
      const extractedCount = await zip.extract(null, flowBinDirPath);
      console.log('  Extracted %s entries', extractedCount);

      if (IS_WINDOWS) {
        await fs.rename(
          path.join(flowBinDirPath, 'flow', 'flow.exe'),
          path.join(BIN_DIR, 'flow-' + version + '.exe'),
        );
      } else {
        await fs.rename(
          path.join(flowBinDirPath, 'flow', 'flow'),
          path.join(BIN_DIR, 'flow-' + version),
        );

        await child_process.execP(
          ['chmod', '755', path.join(BIN_DIR, 'flow-' + version)].join(' '),
        );
      }

      console.log('  Removing flow-%s artifacts...', version);
      await P.all([recursiveRmdir(flowBinDirPath), fs.unlink(zipPath)]);
      console.log('    flow-%s complete!', version);
    }),
  );

  console.log('Finished fetching Flow binaries.\n');

  return flowBins.map(bin => bin.version);
}

const flowNameRegex = /^flow-v[0-9]+.[0-9]+.[0-9]+(\.exe)?$/;
/**
 * flow filename should be `flow-vx.x.x`
 * @param {string} name
 */
function checkFlowFilename(name: string) {
  return flowNameRegex.test(name);
}

/**
 * Return the sorted list of cached flow binaries that have previously been retrieved from github
 * and cached in the `.flow-bins-cache` directory.  This function is usually called when a failure
 * has occurred when attempting to refresh the flow releases from github, i.e. offline or over
 * API limit.
 */
async function getCachedFlowBinVersions(
  numberOfReleases: number,
  flowVersion: FlowVersion,
): Promise<Array<string>> {
  // read the files with name `flow-vx.x.x` from the bin dir and remove the leading `flow-` prefix
  const versions: any[] = (await fs.readdir(path.join(BIN_DIR)))
    .filter(checkFlowFilename)
    .map(dir => dir.slice('flow-'.length));

  // sort the versions that we have in-place
  // removing the `v` prefix before semver comparison
  versions.sort((a, b) => {
    return semver.lt(a.substring(1), b.substring(1)) ? -1 : 1;
  });

  return selectFlowTestVersions(versions, flowVersion, numberOfReleases);
}

export async function writeFlowConfig(
  repoDirPath: string,
  testDirPath: string,
  libDefPath: string,
  version: string,
  depPaths: Array<string>,
) {
  // /!\---------------------------------------------------------------------/!\
  // Whenever you introduce a new difference depending on the version, don't
  // forget to update the constant array CONFIGURATION_CHANGE_VERSIONS.
  // /!\---------------------------------------------------------------------/!\
  const destFlowConfigPath = path.join(testDirPath, '.flowconfig');

  const flowConfigData = [
    '[libs]',
    ...depPaths,
    path.basename(libDefPath),
    path.join(repoDirPath, '..', '__util__', 'tdd_framework.js'),
    '',
    '[options]',
    'include_warnings=true',
    'server.max_workers=0',
    semver.gte(version, '0.200.0') ? 'exact_by_default=true' : '', // from version 0.202.0 default is true
    // Fixes out of shared memory error for Mac Rosetta 2, see https://github.com/facebook/flow/issues/8538
    'sharedmemory.heap_size=3221225472',
    semver.lt(version, '0.125.0')
      ? 'suppress_comment=\\\\(.\\\\|\\n\\\\)*\\\\$FlowExpectedError'
      : '',
    '',

    // Be sure to ignore stuff in the node_modules directory of the flow-typed
    // CLI repository!
    '[ignore]',
    path.join(testDirPath, '..', '..', 'node_modules'),
    '',
    '[lints]',
    semver.gte(version, '0.104.0') && semver.lt(version, '0.201.0')
      ? 'implicit-inexact-object=error'
      : '',
    semver.gte(version, '0.201.0') ? 'ambiguous-object-type=error' : '',
  ].join('\n');
  await fs.writeFile(destFlowConfigPath, flowConfigData);
}

function testTypeDefinition(flowVer: string, testDirPath: string) {
  return new Promise(res => {
    const IS_WINDOWS = os.type() === 'Windows_NT';
    const child = child_process.exec(
      [
        path.join(BIN_DIR, 'flow-' + flowVer + (IS_WINDOWS ? '.exe' : '')),
        'check',
        '--strip-root',
        '--all',
        testDirPath,
      ].join(' '),
    );

    let stdErrOut = '';
    child.stdout.on('data', data => (stdErrOut += data));
    child.stderr.on('data', data => (stdErrOut += data));

    child.on('error', execError => {
      res({stdErrOut, errCode: null, execError});
    });

    child.on('close', errCode => {
      res({stdErrOut, errCode, execError: null});
    });
  });
}

async function runFlowTypeDefTests(
  flowVersionsToRun: Array<string>,
  groupId: string,
  testDirPath: string,
) {
  const errors = [];
  while (flowVersionsToRun.length > 0) {
    // Run tests in batches to avoid saturation
    const testBatch = flowVersionsToRun
      .slice(0, Math.min(flowVersionsToRun.length, 5))
      .map(group => (flowVersionsToRun.shift(), group));

    await P.all(
      testBatch.map(async flowVer => {
        const testRunId = groupId + ' (flow-' + flowVer + ')';

        console.log('Testing %s...', testRunId);

        const {stdErrOut, errCode, execError} = await testTypeDefinition(
          flowVer,
          testDirPath,
        );

        if (execError !== null) {
          errors.push(
            testRunId + ': Error executing Flow process: ' + execError.stack,
          );
        } else if (!stdErrOut.endsWith('Found 0 errors\n')) {
          errors.push(
            testRunId +
              ': Unexpected Flow errors (' +
              String(errCode) +
              '):\n\n' +
              stdErrOut,
          );
        }
      }),
    );
  }
  return errors;
}

async function testLowestCapableFlowVersion(
  lowerVersions: Array<string>,
  testDirPath: string,
  lowestFlowVersionRan: string,
) {
  let lowerFlowVersionsToRun: Array<string> = lowerVersions;
  let lowestCapableFlowVersion = lowestFlowVersionRan;
  while (lowerFlowVersionsToRun.length > 0) {
    const lowerTestBatch = lowerFlowVersionsToRun
      .slice(0, Math.min(lowerFlowVersionsToRun.length, 5))
      .map(group => (lowerFlowVersionsToRun.shift(), group));

    await P.all(
      lowerTestBatch.map(async flowVer => {
        const {stdErrOut, execError} = await testTypeDefinition(
          flowVer,
          testDirPath,
        );

        if (execError !== null || !stdErrOut.endsWith('Found 0 errors\n')) {
          lowerFlowVersionsToRun = [];
        } else {
          lowestCapableFlowVersion = semver.lt(
            lowestCapableFlowVersion,
            flowVer,
          )
            ? lowestCapableFlowVersion
            : flowVer;
        }
      }),
    );
  }
  return lowestCapableFlowVersion;
}

async function findLowestCapableFlowVersion(
  repoDirPath: string,
  orderedFlowVersions: Array<string>,
  lowestFlowVersionRan: string,
  testDirPath: string,
  libDefPath: string,
  depPaths: Array<string>,
) {
  let lowerFlowVersionsToRun = orderedFlowVersions.filter(flowVer => {
    return semver.lt(flowVer, lowestFlowVersionRan);
  });
  lowerFlowVersionsToRun.reverse();
  await writeFlowConfig(
    repoDirPath,
    testDirPath,
    libDefPath,
    lowestFlowVersionRan,
    depPaths,
  );
  return await testLowestCapableFlowVersion(
    lowerFlowVersionsToRun,
    testDirPath,
    lowestFlowVersionRan,
  );
}

/**
 * Remove all files except flow instances
 */
async function removeTrashFromBinDir() {
  (await fs.readdir(path.join(BIN_DIR)))
    .filter(name => !checkFlowFilename(name))
    .forEach(async el => {
      const dir = path.resolve(BIN_DIR, el);
      if (!fs.exists(dir)) {
        await fs.unlink(dir);
      }
    });
}

// These versions introduce a change in the .flowconfig file. We need to make
// sure that the flowconfig file is rewritten when reaching these versions.
// MAKE SURE TO PREPEND THE VERSION WITH "v".
const CONFIGURATION_CHANGE_VERSIONS = [
  'v0.104.0', // Adding lint
  'v0.125.0', // Remove suppress_comments
  'v0.200.0', // exact_by_default become required
];

/**
 * This function splits a list of flow versions into a list of lists of versions
 * where the flowconfig configuration is compatible.
 * The list of versions need to be sorted for this function to work properly.
 */
function partitionListOfFlowVersionsPerConfigChange(
  flowVersions: $ReadOnlyArray<string>,
): Array<Array<string>> {
  const result = [];
  let lastIndex = 0;

  for (const pivotVersion of CONFIGURATION_CHANGE_VERSIONS) {
    const index = flowVersions.indexOf(pivotVersion, lastIndex + 1);
    if (index < 0) {
      continue;
    }

    // We extract a new group up to the pivot version excluded (because the
    // pivot version introduced the configuration incompatibility).
    result.push(flowVersions.slice(lastIndex, index));
    lastIndex = index;
  }

  result.push(flowVersions.slice(lastIndex));

  return result;
}

/**
 * Map through every dependency + their versions and replace with
 * the definition's path,
 * recursively including those dependency's dependencies.
 *
 * Then shuffle to create a new Array<Array<>> that will test
 * All dependencies across various supported versions.
 */
function getDepTestGroups(testGroup: TestGroup) {
  const flowDirVersion = extractFlowDirFromFlowDirPath(testGroup.id);
  const depBasePath = getNpmLibDefDirFromNested(testGroup.libDefPath);

  const getMappedDepPaths = (deps: {
    [key: string]: Array<string>,
  }): Array<
    Array<{
      main: string,
      deps: Array<string>,
    }>,
  > => {
    return Object.keys(deps).map(depName => {
      const nameSplit = depName.split('/');
      const scope = nameSplit.length > 1 ? `${nameSplit[0]}/` : '';
      const packageName = nameSplit.length > 1 ? nameSplit[1] : depName;

      return deps[depName].map(version => {
        const flowDirPath = `${depBasePath}${scope}${packageName}_${version}/${flowDirVersion}`;
        const defPath = `${flowDirPath}/${packageName}_${version}.js`;

        if (!fs.existsSync(defPath)) {
          throw new Error(
            colors.red(
              `${depName}@${version} cannot be a dependency of ${testGroup.id} because either the dependency@version does't exist or they do not have matching flow version ranges`,
            ),
          );
        }

        // For the current dependency check if it has nested dependencies
        let defDeps;
        try {
          defDeps = JSON.parse(
            fs.readFileSync(`${flowDirPath}/config.json`, 'utf-8'),
          ).deps;
        } catch (e) {}

        return {
          main: defPath,
          // Create a recursive list of main def and def dep paths
          // that are later used to inject into the test group so that
          // dependencies can resolve their dependencies.
          //
          // Note: This strategy doesn't create an exhaustive list validating
          // a dependency to each dep version of dependency's dependency.
          // That isn't necessary in this instance and would be tested by
          // the dependency's own test group.
          deps: [
            ...(defDeps
              ? getMappedDepPaths(defDeps).reduce((acc, cur) => {
                  return [...acc, cur[0].main, ...cur[0].deps];
                }, [])
              : []),
          ],
        };
      });
    });
  };
  const mappedDepPaths = getMappedDepPaths(testGroup.deps);

  const longestDep = mappedDepPaths.reduce((acc, cur) => {
    if (cur.length > acc) {
      return cur.length;
    }
    return acc;
  }, 0);

  const depGroup = [];
  for (let i = 0, len = longestDep; i < len; i++) {
    const newGroup = [];
    mappedDepPaths.forEach(o => {
      if (!o[i]) {
        newGroup.push(o[0].main, ...o[0].deps);
      } else {
        newGroup.push(o[i].main, ...o[i].deps);
      }
    });
    depGroup.push(newGroup);
  }
  return depGroup;
}

/**
 * Given a TestGroup structure determine all versions of Flow that match the
 * FlowVersion specification and, for each, run `flow check` on the test
 * directory.
 */
async function runTestGroup(
  repoDirPath: string,
  testGroup: TestGroup,
  orderedFlowVersions: Array<string>,
): Promise<Array<string>> {
  // Some older versions of Flow choke on ">"/"<"/"="
  const testDirName = testGroup.id
    .replace(/\//g, '--')
    .replace(/>/g, 'gt')
    .replace(/</g, 'lt')
    .replace(/=/g, 'eq');

  const testDirPath = path.join(TEST_DIR, testDirName);
  if (await fs.exists(testDirPath)) {
    throw new Error(
      `Trying to run ${testGroup.id}, but test dir already exists! ` +
        `Bailing out!`,
    );
  }

  try {
    await fs.mkdir(testDirPath);

    // Copy files into the test dir
    const destLibDefPath = path.join(
      testDirPath,
      path.basename(testGroup.libDefPath),
    );
    const copiedFileNames = new Set();
    await P.all([
      P.all(
        testGroup.testFilePaths.map(async (filePath, idx) => {
          // Because there could be multiple test files with the same basename,
          // we disambiguate each one with a locally-unique index.
          //
          // i.e. underscore/v1.x.x/test-underscore.js
          //      underscore/v1.x.x/flow-v0.22.x/test-underscore.js
          //
          // Only mangles the name when there's a naming collision. Otherwise, uses the original.
          const fileName = path.basename(filePath);
          const destBasename = copiedFileNames.has(fileName)
            ? `${idx}-${fileName}`
            : fileName;
          copiedFileNames.add(destBasename);
          await copyFile(filePath, path.join(testDirPath, destBasename));
        }),
      ),
      await copyFile(testGroup.libDefPath, destLibDefPath),
    ]);

    // For each compatible version of Flow, run `flow check` and verify there
    // are no errors.
    const testGrpFlowSemVerRange = flowVerToSemverString(testGroup.flowVersion);
    const flowVersionsToRun = orderedFlowVersions.filter(flowVer => {
      return semver.satisfies(flowVer, testGrpFlowSemVerRange);
    });

    // Windows hasn't flow < 30.0 but we have tests for flow < 30.0. We need skip it. Example: redux_v3
    if (!flowVersionsToRun.length) {
      return [];
    }

    const groups = partitionListOfFlowVersionsPerConfigChange(
      flowVersionsToRun,
    );

    const flowErrors = [];

    const executeTests = async (depPaths: Array<string> = []) => {
      for (const sublistOfFlowVersions of groups) {
        const lowestFlowVersionRanInThisGroup = sublistOfFlowVersions[0];
        await writeFlowConfig(
          repoDirPath,
          testDirPath,
          testGroup.libDefPath,
          lowestFlowVersionRanInThisGroup,
          depPaths,
        );
        const flowErrorsForThisGroup = await runFlowTypeDefTests(
          [...sublistOfFlowVersions],
          testGroup.id,
          testDirPath,
        );
        flowErrors.push(...flowErrorsForThisGroup);
      }

      const lowestFlowVersionRan = flowVersionsToRun[0];
      const lowestCapableFlowVersion = await findLowestCapableFlowVersion(
        repoDirPath,
        orderedFlowVersions,
        lowestFlowVersionRan,
        testDirPath,
        testGroup.libDefPath,
        depPaths,
      );

      if (lowestCapableFlowVersion !== lowestFlowVersionRan) {
        console.log(`Tests for ${testGroup.id} ran successfully on flow ${lowestCapableFlowVersion}.
        Consider setting ${lowestCapableFlowVersion} as the lower bound!`);
      }
    };

    if (Object.keys(testGroup.deps).length > 0) {
      const depsTestGroups = getDepTestGroups(testGroup);

      for (const depPaths of depsTestGroups) {
        await executeTests(depPaths);
      }
    } else {
      await executeTests();
    }

    return flowErrors;
  } finally {
    if (await fs.exists(testDirPath)) {
      await recursiveRmdir(testDirPath);
    }
  }
}

/**
 * Takes a list of ordered flow version string in the format of
 * `vx.x.x` from latest to oldest and returns a filtered list of flow versions
 * depending on the definitions testing requirements
 */
export function selectFlowTestVersions(
  orderedFlowVersions: Array<string>,
  flowVersion: FlowVersion,
  numberOfFlowVersions: number,
): Array<string> {
  // This retains original logic in cases
  // where we want all or specific flow versions for testing.
  // This is a pretty uncommon use case though.
  if (flowVersion.kind === 'all' || flowVersion.kind === 'specific') {
    return orderedFlowVersions.slice(0, numberOfFlowVersions);
  }

  const {upper, lower} = flowVersion;

  const selectedFlowVersions = [];

  const findSelectedFlowVersions = (flowVersions: Array<string>) => {
    let versionExceedsLower = false;
    while (
      selectedFlowVersions.length < numberOfFlowVersions &&
      !versionExceedsLower
    ) {
      const version = flowVersions[selectedFlowVersions.length];

      const [major, minor, patch] = version.substring(1).split('.');
      if (
        lower &&
        (lower.major === 'x' || lower.major <= Number(major)) &&
        (lower.minor === 'x' || lower.minor <= Number(minor)) &&
        (lower.patch === 'x' || lower.patch <= Number(patch))
      ) {
        selectedFlowVersions.push(version);
      } else {
        versionExceedsLower = true;
      }
    }
  };

  if (upper == null) {
    findSelectedFlowVersions(orderedFlowVersions);
  } else {
    // If upper exists we should find the first version that satisfies
    // upper and find the first `numberOfFlowVersions` until we hit the
    // lower boundary.
    const upperFlowVersion = orderedFlowVersions.findIndex(o => {
      const [major, minor, patch] = o.substring(1).split('.');
      if (
        (upper.major === 'x' || upper.major >= Number(major)) &&
        (upper.minor === 'x' || upper.minor >= Number(minor)) &&
        (upper.patch === 'x' || upper.patch >= Number(patch))
      ) {
        return true;
      }
    });
    const upperBoundFlowVersions = orderedFlowVersions.slice(upperFlowVersion);
    findSelectedFlowVersions(upperBoundFlowVersions);
  }

  return selectedFlowVersions;
}

async function runTests(
  repoDirPath: string,
  envDirPath: string,
  testPatterns: Array<string>,
  onlyChanged?: boolean,
  numberOfFlowVersions: number,
): Promise<Map<string, Array<string>>> {
  const testPatternRes = testPatterns.map(patt => new RegExp(patt, 'g'));
  const testGroups = (
    await getTestGroups(repoDirPath, envDirPath, onlyChanged)
  ).filter(testGroup => {
    if (testPatternRes.length === 0) {
      return true;
    }

    for (var i = 0; i < testPatternRes.length; i++) {
      const pattern = testPatternRes[i];
      if (testGroup.id.match(pattern) != null) {
        return true;
      }

      // For a definition, if their dependencies have modifications
      // we should run tests against the definition to ensure changes
      // to the dependency has not broken it's dependents
      // by adding the matched definition to the test group.
      const depsList = Object.keys(testGroup.deps);
      if (depsList.length > 0) {
        return depsList.some(dep => {
          return testGroup.deps[dep].some(o => `${dep}_${o}`.match(pattern));
        });
      }
    }

    return false;
  });

  try {
    // Create a temp dir to copy files into to run the tests
    if (await fs.exists(TEST_DIR)) {
      await recursiveRmdir(TEST_DIR);
    }
    await fs.mkdir(TEST_DIR);

    const results = new Map();
    while (testGroups.length > 0) {
      const testGroup = testGroups.shift();
      // Prepare bin folder to collect flow instances
      await removeTrashFromBinDir();
      let orderedFlowVersions;
      try {
        orderedFlowVersions = await getOrderedFlowBinVersions(
          numberOfFlowVersions,
          testGroup.flowVersion,
        );
      } catch (e) {
        orderedFlowVersions = await getCachedFlowBinVersions(
          numberOfFlowVersions,
          testGroup.flowVersion,
        );
      }

      const testGroupErrors = await runTestGroup(
        repoDirPath,
        testGroup,
        orderedFlowVersions,
      );
      if (testGroupErrors.length > 0) {
        const errors = results.get(testGroup.id) || [];
        testGroupErrors.forEach(err => errors.push(err));
        results.set(testGroup.id, errors);
      }
    }
    return results;
  } finally {
    if (await fs.exists(TEST_DIR)) {
      await recursiveRmdir(TEST_DIR);
    }
  }
}

export const name = 'run-tests [testPatterns...]';
export const description =
  'Run definition tests for library definitions in the flow-typed project';

export function setup(yargs: Yargs): Yargs {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .positional('testPatterns', {
      describe: 'Test patterns',
      default: [],
    })
    .options({
      path: {
        describe:
          'Override default path for libdef root (Mainly for testing purposes)',
        type: 'string',
        demandOption: false,
      },
      onlyChanged: {
        type: 'boolean',
        description: 'Run only changed definition tests',
        demandOption: false,
      },
      numberOfFlowVersions: {
        type: 'number',
        description: 'Only run against the latest X versions of flow',
        demandOption: false,
      },
    });
}

export async function run(argv: Args): Promise<number> {
  if (!(await fs.exists(BIN_DIR))) {
    await fs.mkdir(BIN_DIR);
  }

  if (!isInFlowTypedRepo()) {
    console.log(
      'This command only works in a clone of flowtype/flow-typed. ' +
        'It is a tool used to run tests of the library definitions in the flow-typed project.',
    );
    return 1;
  }
  const testPatterns = Array.isArray(argv.testPatterns)
    ? argv.testPatterns.map(String)
    : [];
  const onlyChanged = Boolean(argv.onlyChanged);
  const numberOfFlowVersions = Number(argv.numberOfFlowVersions) || 15;

  const cwd = process.cwd();
  const basePath = argv.path ? String(argv.path) : cwd;
  const cwdDefsNPMPath = path.join(basePath, 'definitions', 'npm');
  const repoDirPath = (await fs.exists(cwdDefsNPMPath))
    ? cwdDefsNPMPath
    : path.join(__dirname, '..', '..', '..', 'definitions', 'npm');
  const cwdDefsEnvPath = path.join(basePath, 'definitions', 'environments');
  const envDirPath = (await fs.exists(cwdDefsEnvPath))
    ? cwdDefsEnvPath
    : path.join(__dirname, '..', '..', '..', 'definitions', 'environments');

  console.info(
    `Running ${
      onlyChanged ? 'changed' : ''
    } definition tests against latest ${colors.green(
      numberOfFlowVersions.toString(),
    )} flow versions in ${path.join(repoDirPath, '..')}...\n`,
  );

  let results;
  try {
    results = await runTests(
      repoDirPath,
      envDirPath,
      testPatterns,
      onlyChanged,
      numberOfFlowVersions,
    );
  } catch (e) {
    if (e instanceof ValidationError) {
      console.error(e.message);
      return 1;
    } else {
      throw e;
    }
  }

  Array.from(results).forEach(([testGroupName, errors]) => {
    console.log('ERROR: %s', testGroupName);
    errors.forEach(err =>
      console.log(
        '* %s\n',
        err
          .split('\n')
          .map((line, idx) => {
            return idx === 0 ? line : '    ' + line;
          })
          .join('\n'),
      ),
    );
  });
  if (results.size === 0) {
    console.log('\n ✨ All tests passed!');
    return 0;
  }
  return 1;
}

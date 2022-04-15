// @flow

import {child_process, fs, os, path} from '../lib/node.js';
import {copyFile, recursiveRmdir} from '../lib/fileUtils.js';
import {gitHubClient} from '../lib/github.js';
import {getLibDefs, parseRepoDirItem} from '../lib/libDefs.js';
import isInFlowTypedRepo from '../lib/isInFlowTypedRepo';
import {toSemverString as flowVerToSemverString} from '../lib/flowVersion';
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

// Used to decide which binary to fetch for each version of Flow
const BIN_PLATFORM = (_ => {
  switch (os.type()) {
    case 'Linux':
      return 'linux64';
    case 'Darwin':
      return 'osx';
    case 'Windows_NT':
      return 'win64';

    default:
      throw new Error('Unsupported os.type()! ' + os.type());
  }
})();
const PKG_ROOT_DIR = path.join(__dirname, '..', '..');
const TEST_DIR = path.join(PKG_ROOT_DIR, '.test-dir');
const BIN_DIR = path.join(PKG_ROOT_DIR, '.flow-bins-cache');
const P = Promise;

type TestGroup = {
  id: string,
  testFilePaths: Array<string>,
  libDefPath: string,
  flowVersion: FlowVersion,
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
  repoDirPath,
  envDirPath,
  onlyChanged: boolean = false,
): Promise<Array<TestGroup>> {
  let libDefs = await getLibDefs(repoDirPath);
  let envDefs = await getLibDefs(envDirPath);
  if (onlyChanged) {
    const diff = await getDefinitionsDiff();
    const baseDiff: string[] = diff
      .map(d => {
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
    libDefs = [...libDefs, ...envDefs].filter(def =>
      changedDefs.some(d => {
        if (d.version === 'vx.x.x') {
          return d.name === def.pkgName;
        }
        return d.name === def.pkgName && d.version === def.pkgVersionStr;
      }),
    );
  }
  return libDefs.map(libDef => {
    const groupID = `${libDef.pkgName}_${libDef.pkgVersionStr}/${libDef.flowVersionStr}`;
    return {
      id: groupID,
      testFilePaths: libDef.testFilePaths,
      libDefPath: libDef.path,
      flowVersion: libDef.flowVersion,
    };
  });
}

function printSkipMessage(flowVersion, githubUrl) {
  console.log(
    '==========================================================================================',
  );
  console.log(`We are temporarily skipping ${flowVersion} due to ${githubUrl}`);
  console.log(
    '==========================================================================================',
  );
}

/**
 * Memoized function that queries the GitHub releases for Flow, downloads the
 * zip for each version, extracts the zip, and moves the binary to
 * TEST_BIN/flow-vXXX for use later when running tests.
 */
let _flowBinVersionPromise = null;
async function getOrderedFlowBinVersions(
  numberOfReleases: number = 15,
): Promise<Array<string>> {
  if (_flowBinVersionPromise !== null) {
    return _flowBinVersionPromise;
  }
  return (_flowBinVersionPromise = (async function() {
    console.log('Fetching all Flow binaries...');
    const IS_WINDOWS = os.type() === 'Windows_NT';
    const GH_CLIENT = gitHubClient();
    // We only test against the latest numberOfReleases Versions
    const QUERY_PAGE_SIZE = numberOfReleases;
    const OS_ARCH_FILTER_RE = new RegExp(`flow-${BIN_PLATFORM}`);

    let page = 0;
    const apiPayload = await GH_CLIENT.repos.listReleases({
      owner: 'facebook',
      repo: 'flow',
      page: page++,
      per_page: QUERY_PAGE_SIZE,
    });

    const flowBins = apiPayload.data
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
                  'flow-typed Test Runner ' +
                  '(github.com/flowtype/flow-typed)',
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
  })());
}

const flowNameRegex = /^flow-v[0-9]+.[0-9]+.[0-9]+(\.exe)?$/;
/**
 * flow filename should be `flow-vx.x.x`
 * @param {string} name
 */
function checkFlowFilename(name) {
  return flowNameRegex.test(name);
}

/**
 * Return the sorted list of cached flow binaries that have previously been retrieved from github
 * and cached in the `.flow-bins-cache` directory.  This function is usually called when a failure
 * has occurred when attempting to refresh the flow releases from github, i.e. offline or over
 * API limit.
 */
async function getCachedFlowBinVersions(
  numberOfReleases: number = 15,
): Promise<Array<string>> {
  // read the files with name `flow-vx.x.x` from the bin dir and remove the leading `flow-v` prefix
  const versions: any[] = (await fs.readdir(path.join(BIN_DIR)))
    .filter(checkFlowFilename)
    .map(dir => dir.slice(6));

  // sort the versions that we have inplace
  versions.sort((a, b) => {
    return semver.lt(a, b) ? -1 : 1;
  });

  versions.splice(0, versions.length - numberOfReleases);

  // return the versions with a leading 'v' to satisfy the expected return value
  return versions.map(version => `v${version}`);
}

async function writeFlowConfig(repoDirPath, testDirPath, libDefPath, version) {
  // /!\---------------------------------------------------------------------/!\
  // Whenever you introduce a new difference depending on the version, don't
  // forget to update the constant array CONFIGURATION_CHANGE_VERSIONS.
  // /!\---------------------------------------------------------------------/!\
  const destFlowConfigPath = path.join(testDirPath, '.flowconfig');

  const flowConfigData = [
    '[libs]',
    path.basename(libDefPath),
    path.join(repoDirPath, '..', '__util__', 'tdd_framework.js'),
    '',
    '[options]',
    'include_warnings=true',
    'server.max_workers=0',
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
    semver.gte(version, '0.104.0') ? 'implicit-inexact-object=error' : '',
  ].join('\n');
  await fs.writeFile(destFlowConfigPath, flowConfigData);
}

function testTypeDefinition(flowVer, testDirPath) {
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

async function runFlowTypeDefTests(flowVersionsToRun, groupId, testDirPath) {
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
  lowerVersions,
  testDirPath,
  lowestFlowVersionRan,
) {
  let lowerFlowVersionsToRun = lowerVersions;
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
  repoDirPath,
  orderedFlowVersions,
  lowestFlowVersionRan,
  testDirPath,
  libDefPath,
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
      await fs.unlink(path.resolve(BIN_DIR, el));
    });
}

// These versions introduce a change in the .flowconfig file. We need to make
// sure that the flowconfig file is rewritten when reaching these versions.
// MAKE SURE TO PREPEND THE VERSION WITH "v".
const CONFIGURATION_CHANGE_VERSIONS = [
  'v0.104.0', // Adding lint
  'v0.125.0', // Remove suppress_comments
];

// This function splits a list of flow versions into a list of lists of versions
// where the flowconfig configuration is compatible.
// The list of versions need to be sorted for this function to work properly.
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
      copyFile(testGroup.libDefPath, destLibDefPath),
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
    for (const sublistOfFlowVersions of groups) {
      const lowestFlowVersionRanInThisGroup = sublistOfFlowVersions[0];
      await writeFlowConfig(
        repoDirPath,
        testDirPath,
        testGroup.libDefPath,
        lowestFlowVersionRanInThisGroup,
      );
      const flowErrorsForThisGroup = await runFlowTypeDefTests(
        sublistOfFlowVersions,
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
    );

    if (lowestCapableFlowVersion !== lowestFlowVersionRan) {
      console.log(`Tests for ${testGroup.id} ran successfully on flow ${lowestCapableFlowVersion}.
        Consider setting ${lowestCapableFlowVersion} as the lower bound!`);
    }

    return flowErrors;
  } finally {
    if (await fs.exists(testDirPath)) {
      await recursiveRmdir(testDirPath);
    }
  }
}

async function runTests(
  repoDirPath: string,
  envDirPath: string,
  testPatterns: Array<string>,
  onlyChanged?: boolean,
  numberOfFlowVersions?: number,
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
      //Prepare bin folder to collect flow instances
      await removeTrashFromBinDir();
      let orderedFlowVersions;
      try {
        orderedFlowVersions = await getOrderedFlowBinVersions(
          numberOfFlowVersions,
        );
      } catch (e) {
        orderedFlowVersions = await getCachedFlowBinVersions(
          numberOfFlowVersions,
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
    : path.join(__dirname, '..', '..', '..', 'definitions', 'npm');

  if (onlyChanged) {
    console.log(
      'Running changed definition tests against latest %s flow versions in %s...\n',
      numberOfFlowVersions,
      path.join(repoDirPath, '..'),
    );
  } else {
    console.log(
      'Running definition tests against latest %s flow versions in %s...\n',
      numberOfFlowVersions,
      path.join(repoDirPath, '..'),
    );
  }

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
  console.log(' ');
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
    console.log('All tests passed!');
    return 0;
  }
  return 1;
}

// @flow

import {child_process, fs, os, path} from '../lib/node.js';
import {copyFile, recursiveRmdir} from '../lib/fileUtils.js';
import {gitHubClient} from '../lib/github.js';
import {getLibDefs, parseRepoDirItem} from '../lib/libDefs.js';
import isInFlowTypedRepo from '../lib/isInFlowTypedRepo';
import {toSemverString as flowVerToSemverString} from '../lib/flowVersion';
import {getDiff} from '../lib/git';

import got from 'got';
import * as semver from 'semver';
import * as unzip from 'unzipper';
import typeof Yargs from 'yargs';
import type {FlowVersion} from '../lib/flowVersion.js';

export type Args = {
  _: Array<string>,
  path?: string,
  onlyChanged?: boolean,
  numberOfFlowVersions?: number,
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
const basePathRegex = new RegExp('definitions/npm/(@[^/]*/)?[^/]*/?');
async function getTestGroups(
  repoDirPath,
  onlyChanged: boolean = false,
): Promise<Array<TestGroup>> {
  let libDefs = await getLibDefs(repoDirPath);
  if (onlyChanged) {
    const diff = await getDiff();
    let changedDefs;
    // $FlowFixMe
    const baseDiff: string[] = diff
      .map(d => {
        const match = d.match(basePathRegex);
        if (match) {
          return match[0];
        }
      })
      .filter(d => d != null);
    changedDefs = baseDiff.map(d => parseRepoDirItem(d).pkgName);
    libDefs = libDefs.filter(def => changedDefs.includes(def.pkgName));
  }
  return libDefs.map(libDef => {
    const groupID = `${libDef.pkgName}_${libDef.pkgVersionStr}/${
      libDef.flowVersionStr
    }`;
    return {
      id: groupID,
      testFilePaths: libDef.testFilePaths,
      libDefPath: libDef.path,
      flowVersion: libDef.flowVersion,
    };
  });
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
  if (_flowBinVersionPromise === null) {
    _flowBinVersionPromise = (async function() {
      console.log('Fetching all Flow binaries...');
      const IS_WINDOWS = os.type() === 'Windows_NT';
      const FLOW_BIN_VERSION_ORDER = [];
      const GH_CLIENT = gitHubClient();
      // We only test against the latest numberOfReleases Versions
      const QUERY_PAGE_SIZE = numberOfReleases;
      const OS_ARCH_FILTER_RE = new RegExp(`flow-${BIN_PLATFORM}`);

      let binURLs = new Map();
      let apiPayload = null;
      let page = 0;
      while (
        apiPayload === null /* || apiPayload.length === QUERY_PAGE_SIZE*/
      ) {
        apiPayload = await new Promise((res, rej) => {
          GH_CLIENT.releases.listReleases(
            {
              owner: 'facebook',
              repo: 'flow',
              page: page++,
              per_page: QUERY_PAGE_SIZE,
            },
            (err, result) => {
              if (err) {
                rej(err);
              } else {
                res(result);
              }
            },
          );
        });

        apiPayload.forEach(rel => {
          // Temporary fix for https://github.com/facebook/flow/issues/5922
          if (rel.tag_name === 'v0.67.0') {
            console.log(
              '==========================================================================================',
            );
            console.log(
              'We are tempoarily skipping v0.67.0 due to https://github.com/facebook/flow/issues/5922',
            );
            console.log(
              '==========================================================================================',
            );
            return;
          }

          // We only test against versions since 0.15.0 because it has proper
          // [ignore] fixes (which are necessary to run tests)
          // Because Windows was only supported starting with version 0.30.0, we also skip version prior to that when running on windows.
          if (semver.lt(rel.tag_name, IS_WINDOWS ? '0.30.0' : '0.15.0')) {
            return;
          }
          // Because flow 0.57 was broken before 0.57.3 on the Windows platform, we also skip those versions when running on windows.
          if (
            IS_WINDOWS &&
            (semver.eq(rel.tag_name, '0.57.0') ||
              semver.eq(rel.tag_name, '0.57.1') ||
              semver.eq(rel.tag_name, '0.57.2'))
          ) {
            return;
          }

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

            FLOW_BIN_VERSION_ORDER.push(version);
            binURLs.set(version, binZip[0]);
          }
        });
      }

      FLOW_BIN_VERSION_ORDER.sort((a, b) => {
        return semver.lt(a, b) ? -1 : 1;
      });

      await P.all(
        Array.from(binURLs).map(async ([version, binURL]) => {
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
          await new Promise((res, rej) => {
            const unzipExtractor = unzip.Extract({path: flowBinDirPath});
            unzipExtractor.on('error', function(err) {
              rej(err);
            });
            unzipExtractor.on('close', function() {
              res();
            });
            fs.createReadStream(zipPath).pipe(unzipExtractor);
          });
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

      return FLOW_BIN_VERSION_ORDER;
    })();
  }
  return _flowBinVersionPromise;
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

async function writeFlowConfig(
  repoDirPath,
  testDirPath,
  libDefPath,
  includeWarnings,
) {
  const destFlowConfigPath = path.join(testDirPath, '.flowconfig');

  const flowConfigData = [
    '[libs]',
    path.basename(libDefPath),
    path.join(repoDirPath, '..', '__util__', 'tdd_framework.js'),
    '',
    '[options]',
    'suppress_comment=\\\\(.\\\\|\\n\\\\)*\\\\$ExpectError',
    includeWarnings ? 'include_warnings=true' : '',
    '',

    // Be sure to ignore stuff in the node_modules directory of the flow-typed
    // CLI repository!
    '[ignore]',
    path.join(testDirPath, '..', '..', 'node_modules'),
  ].join('\n');
  await fs.writeFile(destFlowConfigPath, flowConfigData);
}

function testTypeDefinition(flowVer, testDirPath) {
  return new Promise(res => {
    const child = child_process.exec(
      [
        path.join(BIN_DIR, 'flow-' + flowVer),
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
              ': Unexpected Flow errors(' +
              String(errCode) +
              '):\n' +
              stdErrOut +
              '\n' +
              String(execError),
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
  const lowerLowVersions = lowerFlowVersionsToRun.filter(flowVer =>
    semver.lt(flowVer, '0.53.0'),
  );
  const higherLowVersions = lowerFlowVersionsToRun.filter(flowVer =>
    semver.gte(flowVer, '0.53.0'),
  );
  await writeFlowConfig(repoDirPath, testDirPath, libDefPath, true);
  const lowestOfHigherVersions = await testLowestCapableFlowVersion(
    higherLowVersions,
    testDirPath,
    lowestFlowVersionRan,
  );
  await writeFlowConfig(repoDirPath, testDirPath, libDefPath, false);
  return await testLowestCapableFlowVersion(
    lowerLowVersions,
    testDirPath,
    lowestOfHigherVersions,
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

/**
 * Given a TestGroup structure determine all versions of Flow that match the
 * FlowVersion specification and, for each, run `flow check` on the test
 * directory.
 */
async function runTestGroup(
  repoDirPath: string,
  testGroup: TestGroup,
  numberOfFlowVersions: number = 15,
  errors = [],
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
      `Trying to run ${testGroup.id}, but test dir already exists! I'm` +
        `confused... Bailing out!`,
    );
  }

  if (!await fs.exists(BIN_DIR)) {
    await fs.mkdir(BIN_DIR);
  }

  //Prepare bin folder to collect flow instances
  await removeTrashFromBinDir();
  let orderedFlowVersions;
  try {
    orderedFlowVersions = await getOrderedFlowBinVersions(numberOfFlowVersions);
  } catch (e) {
    orderedFlowVersions = await getCachedFlowBinVersions(numberOfFlowVersions);
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
    let lowestFlowVersionRan = flowVersionsToRun[0];

    const lowerVersions = flowVersionsToRun.filter(flowVer =>
      semver.lt(flowVer, '0.53.0'),
    );
    const higherVersions = flowVersionsToRun.filter(flowVer =>
      semver.gte(flowVer, '0.53.0'),
    );

    await writeFlowConfig(
      repoDirPath,
      testDirPath,
      testGroup.libDefPath,
      false,
    );
    const lowerVersionErrors = await runFlowTypeDefTests(
      lowerVersions,
      testGroup.id,
      testDirPath,
    );

    await writeFlowConfig(repoDirPath, testDirPath, testGroup.libDefPath, true);
    const higherVersionErrors = await runFlowTypeDefTests(
      higherVersions,
      testGroup.id,
      testDirPath,
    );

    errors.push(...higherVersionErrors, ...lowerVersionErrors);
    const lowestCapableFlowVersion = await findLowestCapableFlowVersion(
      repoDirPath,
      orderedFlowVersions,
      lowestFlowVersionRan,
      testDirPath,
      testGroup.libDefPath,
    );

    if (lowestCapableFlowVersion !== lowestFlowVersionRan) {
      console.log(`Tests for ${
        testGroup.id
      } ran successfully on flow ${lowestCapableFlowVersion}.
        Consider setting ${lowestCapableFlowVersion} as the lower bound!`);
    }

    return errors;
  } finally {
    if (await fs.exists(testDirPath)) {
      await recursiveRmdir(testDirPath);
    }
  }
}

async function runTests(
  repoDirPath: string,
  testPatterns: Array<string>,
  onlyChanged?: boolean,
  numberOfFlowVersions?: number,
): Promise<Map<string, Array<string>>> {
  const testPatternRes = testPatterns.map(patt => new RegExp(patt, 'g'));
  const testGroups = (await getTestGroups(repoDirPath, onlyChanged)).filter(
    testGroup => {
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
    },
  );

  try {
    // Create a temp dir to copy files into to run the tests
    if (await fs.exists(TEST_DIR)) {
      await recursiveRmdir(TEST_DIR);
    }
    await fs.mkdir(TEST_DIR);

    const results = new Map();
    while (testGroups.length > 0) {
      const testGroup = testGroups.shift();
      const testGroupErrors = await runTestGroup(
        repoDirPath,
        testGroup,
        numberOfFlowVersions,
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

export const name = 'run-tests';
export const description =
  'Run definition tests for library definitions in the flow-typed project';

export function setup(yargs: Yargs) {
  return yargs.usage(`$0 ${name} - ${description}`).options({
    path: {
      describe:
        'Override default path for libdef root (Mainly for testing purposes)',
      type: 'string',
      demand: false,
    },
    onlyChanged: {
      type: 'boolean',
      description: 'Run only changed definition tests',
      demand: false,
    },
    numberOfFlowVersions: {
      type: 'number',
      description: 'Only run against the latest X versions of flow',
      demand: false,
    },
  });
}

export async function run(argv: Args): Promise<number> {
  if (!isInFlowTypedRepo()) {
    console.log(
      'This command only works in a clone of flowtype/flow-typed. ' +
        'It is a tool used to run tests of the library definitions in the flow-typed project.',
    );
    return 1;
  }
  const testPatterns = argv._.slice(1);
  const onlyChanged = Boolean(argv.onlyChanged);
  const numberOfFlowVersions = Number(argv.numberOfFlowVersions) || 15;

  const cwd = process.cwd();
  const basePath = argv.path ? String(argv.path) : cwd;
  const cwdDefsNPMPath = path.join(basePath, 'definitions', 'npm');
  let repoDirPath = (await fs.exists(cwdDefsNPMPath))
    ? cwdDefsNPMPath
    : path.join(__dirname, '..', '..', '..', 'definitions', 'npm');

  if (onlyChanged) {
    console.log(
      'Running changed definition tests against latest %s flow versions in %s...\n',
      numberOfFlowVersions,
      repoDirPath,
    );
  } else {
    console.log(
      'Running definition tests against latest %s flow versions in %s...\n',
      numberOfFlowVersions,
      repoDirPath,
    );
  }

  const results = await runTests(
    repoDirPath,
    testPatterns,
    onlyChanged,
    numberOfFlowVersions,
  );
  console.log(' ');
  Array.from(results).forEach(([testGroupName, errors]) => {
    console.log('ERROR: %s', testGroupName);
    errors.forEach(err =>
      console.log(
        ' * %s\n',
        err
          .split('\n')
          .map((line, idx) => {
            return idx === 0 ? line : '   ' + line;
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

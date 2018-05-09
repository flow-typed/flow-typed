// @flow

import {fs, path} from '../lib/node.js';
import {copyFile, recursiveRmdir} from '../lib/fileUtils.js';
import {getLibDefs, parseRepoDirItem} from '../lib/libDefs.js';
import isInFlowTypedRepo from '../lib/isInFlowTypedRepo';
import {toSemverString as flowVerToSemverString} from '../lib/flowVersion';
import {getDiff} from '../lib/git';
import {getFlowBinaries, type Flow} from '../lib/binaries';

import * as semver from 'semver';
import typeof Yargs from 'yargs';
import type {FlowVersion} from '../lib/flowVersion.js';

export type Args = {
  _: Array<string>,
  path?: string,
  onlyChanged?: boolean,
  numberOfFlowVersions?: number,
};

const PKG_ROOT_DIR = path.join(__dirname, '..', '..');
const TEST_DIR = path.join(PKG_ROOT_DIR, '.test-dir');
const BIN_DIR = path.join(PKG_ROOT_DIR, '.flow-bins-cache');
const NUMBER_OF_FLOW_VERSIONS = 15;

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

async function runFlowTypeDefTests(flowsToRun, groupId, testDirPath) {
  const errors: Array<string> = [];
  while (flowsToRun.length > 0) {
    // Run tests in batches to avoid saturation
    const testBatch = flowsToRun
      .slice(0, Math.min(flowsToRun.length, 5))
      .map(group => (flowsToRun.shift(), group));

    await Promise.all(
      testBatch.map(async flow => {
        const testRunId = groupId + ' (flow-' + flow.version + ')';

        console.log('Testing %s...', testRunId);

        const {stdErrOut, errCode, execError} = await flow.runTests(
          testDirPath,
        );

        if (execError) {
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
  lowestFlowRan,
) {
  let lowerFlowVersionsToRun = lowerVersions;
  let lowestCapableFlow = lowestFlowRan;
  while (lowerFlowVersionsToRun.length > 0) {
    const lowerTestBatch = lowerFlowVersionsToRun
      .slice(0, Math.min(lowerFlowVersionsToRun.length, 5))
      .map(group => (lowerFlowVersionsToRun.shift(), group));

    await Promise.all(
      lowerTestBatch.map(async flow => {
        const {stdErrOut, execError} = await flow.runTests(testDirPath);

        if (execError !== null || !stdErrOut.endsWith('Found 0 errors\n')) {
          lowerFlowVersionsToRun = [];
        } else {
          lowestCapableFlow = semver.lt(lowestCapableFlow.version, flow.version)
            ? lowestCapableFlow
            : flow;
        }
      }),
    );
  }
  return lowestCapableFlow;
}

async function findLowestCapableFlowVersion(
  repoDirPath,
  flows,
  lowestFlowRan,
  testDirPath,
  libDefPath,
) {
  let lowerFlowsToRun = flows.filter(flow => {
    return semver.lt(flow.version, lowestFlowRan.version);
  });
  lowerFlowsToRun.reverse();
  const lowerLowFlow = lowerFlowsToRun.filter(flow =>
    semver.lt(flow.version, '0.53.0'),
  );
  const higherLowFlows = lowerFlowsToRun.filter(flow =>
    semver.gte(flow.version, '0.53.0'),
  );
  await writeFlowConfig(repoDirPath, testDirPath, libDefPath, true);
  const lowestOfHigherFlow = await testLowestCapableFlowVersion(
    higherLowFlows,
    testDirPath,
    lowestFlowRan,
  );
  await writeFlowConfig(repoDirPath, testDirPath, libDefPath, false);
  return await testLowestCapableFlowVersion(
    lowerLowFlow,
    testDirPath,
    lowestOfHigherFlow,
  );
}

/**
 * Given a TestGroup structure determine all versions of Flow that match the
 * FlowVersion specification and, for each, run `flow check` on the test
 * directory.
 */
async function runTestGroup(
  repoDirPath: string,
  testGroup: TestGroup,
  flowBins: Array<Flow>,
): Promise<Array<string>> {
  const errors = [];
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

  try {
    await fs.mkdir(testDirPath);

    // Copy files into the test dir
    const destLibDefPath = path.join(
      testDirPath,
      path.basename(testGroup.libDefPath),
    );
    const copiedFileNames = new Set();
    await Promise.all([
      Promise.all(
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
    const flowsToRun = flowBins.filter(flow => {
      return semver.satisfies(flow.version, testGrpFlowSemVerRange);
    });

    if (!flowsToRun.length) {
      return [];
    }
    let lowestFlowRan = flowsToRun[0];

    const lowerVersions = flowsToRun.filter(flow =>
      semver.lt(flow.version, '0.53.0'),
    );
    const higherVersions = flowsToRun.filter(flow =>
      semver.gte(flow.version, '0.53.0'),
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
    const lowestCapableFlow = await findLowestCapableFlowVersion(
      repoDirPath,
      flowBins,
      lowestFlowRan,
      testDirPath,
      testGroup.libDefPath,
    );

    if (lowestCapableFlow.version !== lowestFlowRan.version) {
      console.log(`Tests for ${testGroup.id} ran successfully on flow ${
        lowestCapableFlow.version
      }.
        Consider setting ${lowestCapableFlow.version} as the lower bound!`);
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
  flowBins: Array<Flow>,
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
        flowBins,
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
  const numberOfFlowVersions =
    Number(argv.numberOfFlowVersions) || NUMBER_OF_FLOW_VERSIONS;

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

  const flowBins = await getFlowBinaries(BIN_DIR, numberOfFlowVersions);
  const results = await runTests(
    repoDirPath,
    testPatterns,
    onlyChanged,
    flowBins,
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

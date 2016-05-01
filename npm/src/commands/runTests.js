// @flow

import {child_process, fs, path} from "../lib/node.js";
import {copyFile, recursiveRmdir} from "../lib/fileUtils.js";
import {gitHubClient} from "../lib/github.js";
import {
  getLocalLibDefs,
  getLocalLibDefFlowVersions,
} from "../lib/libDef.js";
import {versionToString} from "../lib/semver.js";
import {getOrderedFlowBinVersions} from '../lib/flowVersions.js';

import GitHub from "github";
import request from "request";
import * as semver from "semver";

import type {Version} from "../lib/semver.js";


const PKG_ROOT_DIR = path.join(__dirname, "..", "..");
const TEST_DIR = path.join(PKG_ROOT_DIR, "test-dir");
const BIN_DIR = path.join(PKG_ROOT_DIR, "flow-bins");
const P = Promise;

type TestGroup = {
  id: string,
  testFilePaths: Array<string>,
  libDefPath: string,
  flowVersion: Version,
};

/**
 * Scan the definitions/ directory to extract a flat list of TestGroup
 * structs. Each TestGroup represents a Package/PackageVersion/FlowVersion
 * directory.
 */
async function getTestGroups(): Promise<Array<TestGroup>> {
  const libDefs = await getLocalLibDefs();
  const libDefFlowVersions = await getLocalLibDefFlowVersions(libDefs);
  return libDefFlowVersions.map(libDefFlowVer => {
    const libDef = libDefFlowVer.libDef;
    const groupID =
      `${libDef.pkgName}_${libDef.pkgVersionStr}--flow_` +
      `${versionToString(libDefFlowVer.flowVersion)}`;
    return {
      id: groupID,
      testFilePaths: libDefFlowVer.testFiles,
      libDefPath: libDefFlowVer.libDefPath,
      flowVersion: libDefFlowVer.flowVersion,
    };
  });
}

/**
 * Memoized function that queries the GitHub releases for Flow, downloads the
 * zip for each version, extracts the zip, and moves the binary to
 * TEST_BIN/flow-vXXX for use later when running tests.
 */


/**
 * Given a TestGroup structure determine all versions of Flow that match the
 * FlowVersion specification and, for each, run `flow check` on the test
 * directory.
 */
async function runTestGroup(
  testGroup: TestGroup,
  errors = []
): Promise<Array<string>> {
  // Some older versions of Flow choke on ">"/"<"/"="
  const testDirName = testGroup.id
    .replace(/>/g, "gt")
    .replace(/</g, "lt")
    .replace(/=/g, "eq");

  const testDirPath = path.join(TEST_DIR, testDirName);
  if (await fs.exists(testDirPath)) {
    throw new Error(
      `Trying to run ${testGroup.id}, but test dir already exists! I'm` +
      `confused... Bailing out!`
    );
  }

  const orderedFlowVersions = await getOrderedFlowBinVersions();

  try {
    await fs.mkdir(testDirPath);

    // Copy files into the test dir
    const destLibDefPath = path.join(
      testDirPath,
      path.basename(testGroup.libDefPath)
    );
    await P.all([
      P.all(testGroup.testFilePaths.map(async (filePath, idx) => {
        // Because there could be multiple test files with the same basename,
        // we disambiguate each one with a locally-unique index.
        //
        // i.e. underscore/v1.x.x/test-underscore.js
        //      underscore/v1.x.x/flow-v0.22.x/test-underscore.js
        const destBasename = idx + "-" + path.basename(filePath);
        await copyFile(filePath, path.join(testDirPath, destBasename));
      })),
      copyFile(testGroup.libDefPath, destLibDefPath),
    ]);

    // Write out a .flowconfig
    const destFlowConfigPath = path.join(testDirPath, ".flowconfig");
    const flowConfigData = [
      "[libs]",
      path.basename(testGroup.libDefPath),
      "",
      "[options]",
      "suppress_comment=\\\\(.\\\\|\\n\\\\)*\\\\$ExpectError",
      "",

      // Be sure to ignore stuff in the node_modules directory of the flow-typed
      // CLI repository!
      "[ignore]",
      path.join(testDirPath, "..", "..", "node_modules"),
    ].join("\n");
    await fs.writeFile(destFlowConfigPath, flowConfigData);

    // For each compatible version of Flow, run `flow check` and verify there
    // are no errors.
    const flowVersionsToRun = orderedFlowVersions.filter(flowVer => {
      if (testGroup.flowVersion === "all") {
        return true;
      }

      const testGrpUpperBound = testGroup.flowVersion.upperBound;
      testGroup.flowVersion.upperBound = undefined;
      const testGrpLowerBoundStr = versionToString(testGroup.flowVersion);
      const testGrpUpperBoundStr = testGrpUpperBound
        ? versionToString(testGrpUpperBound)
        : undefined;
      testGroup.flowVersion.upperBound = testGrpUpperBound;

      if (semver.satisfies(flowVer, testGrpLowerBoundStr)) {
        if (testGrpUpperBoundStr) {
          return semver.satisfies(flowVer, testGrpUpperBoundStr);
        } else{
          return true;
        }
      }

      return false;
    });

    while (flowVersionsToRun.length > 0) {
      // Run tests in batches to avoid saturation
      const testBatch = flowVersionsToRun
        .slice(0, Math.min(flowVersionsToRun.length, 5))
        .map(group => (flowVersionsToRun.shift(), group));

      await P.all(testBatch.map(async (flowVer) => {
        const testRunId = testGroup.id + " (flow-" + flowVer + ")";

        console.log("Testing %s...", testRunId);

        const {
          stdErrOut,
          errCode,
          execError
        } = await new Promise(res => {
          const child = child_process.exec([
            path.join(BIN_DIR, "flow-" + flowVer),
            "check",
            "--strip-root",
            testDirPath
          ].join(" "));

          let stdErrOut = "";
          child.stdout.on("data", data => stdErrOut += data);
          child.stderr.on("data", data => stdErrOut += data);

          child.on("error", execError => {
            res({stdErrOut, errCode: null, execError});
          });

          child.on("close", errCode => {
            res({stdErrOut, errCode, execError: null});
          });
        });

        if (execError !== null) {
          errors.push(
            testRunId + ": Error executing Flow process: " + execError.stack
          );
        } else if (errCode !== 0) {
          errors.push(
            testRunId + ": Unexpected Flow errors(" + String(errCode) + "):\n" +
            stdErrOut + "\n" +
            String(execError)
          );
        }
      }));
    }

    return errors;
  } finally {
    if (await fs.exists(testDirPath)) {
      await recursiveRmdir(testDirPath);
    }
  }
}

async function runTests(
  testPatterns: Array<string>
): Promise<Map<string, Array<string>>> {
  const testPatternRes = testPatterns.map(patt => new RegExp(patt, "g"));
  const testGroups = (await getTestGroups()).filter(testGroup => {
    if (testPatternRes.length === 0) {
      return true;
    }

    for (var i = 0; i < testPatternRes.length; i++) {
      if (testPatternRes[i].test(testGroup.id)) {
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
      const testGroupErrors = await runTestGroup(testGroup);
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

export const name = "run-tests";
export const description = "Run definition tests";
export async function run(argv: Object): Promise<number> {
  const testPatterns = argv._.slice(1);
  const results = await runTests(testPatterns);
  console.log(" ");
  Array.from(results).forEach(([testGroupName, errors]) => {
    console.log("ERROR: %s", testGroupName);
    errors.forEach(err => console.log(
      " * %s\n", err.split("\n").map((line, idx) => {
        return idx === 0 ? line : "   " + line;
      }).join("\n")
    ));
  });
  if (results.size === 0) {
    console.log("All tests passed!");
    return 0;
  }
  return 1;
};

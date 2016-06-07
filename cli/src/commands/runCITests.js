// @flow

import Git from "nodegit";
import GitKit from "nodegit-kit";
import {path} from "../lib/node.js";
import {parseRepoDirItem} from "../lib/libDefs.js";
import {versionToString} from "../lib/semver.js";
import type {Version} from "../lib/semver.js";

import {run as runValidateDefs} from "./validateDefs.js";
import {printRunTestsErrorResults, runTests} from "./runTests.js";

export const name = "run-ci-tests";
export const description = "Run continuous-integration validation tests";
export async function run(argv: {_: Array<string>}) {
  if (argv._.length !== 2) {
    throw new Error(
      'Please specify the path to the root of the git repo to run CI-tests on!'
    );
  }
  const [_, gitPath] = argv._;

  console.log(' * Validating definitions directories...');
  const validateDefsResult = await runValidateDefs();
  if (validateDefsResult !== 0) {
    return validateDefsResult;
  }

  // Get a handle on the repo
  const resolvedGitPath = await Git.Repository.discover(gitPath, 0, '');
  const repoRoot = path.resolve(resolvedGitPath, '..');
  console.log(' * Git dir resolved to %s', resolvedGitPath);
  const repo  = await Git.Repository.open(resolvedGitPath);

  // Find the files that've changed since master
  const diffsFromMaster = await GitKit.diff(repo, 'HEAD', 'origin/master');
  const changedFiles = diffsFromMaster.map(diff => diff.path);
  console.log(' * Found %d changed files:', changedFiles.length);

  // For each file that changed, determine the kinds of tests that need to run
  const DEF_PATH_RE = /^(definitions\/npm\/([^\/]*))\/.*/;
  const CLI_PATH_RE = /^cli\//;
  const libDefsToTest: Map<string, [string, Version]> = new Map();
  changedFiles.forEach(relFilePath => {
    // Stuff that doesn't require any special CI tests.
    // We keep a whitelist to ensure that Travis always fails for unexpected
    // changes (since unexpected changes could be things we assumed would be
    // tested by Travis). The fix, of course, is to simply add anything new to
    // this list if it explicitly doesn't require any special Travis checks.
    switch (relFilePath) {
      case '.gitignore':
      case '.travis.yml':
      case 'CONTRIBUTING.md':
      case 'LICENSE':
      case 'README.md':
      case 'flow-typed-logo.png':
      case 'run_def_tests.sh':
      case 'travis.sh':
        return;
    }

    // libdef changes
    const defPathMatches = relFilePath.match(DEF_PATH_RE);
    if (defPathMatches) {
      const [_, pkgDirPath, pkgDirName] = defPathMatches;
      const {pkgName, pkgVersion} = parseRepoDirItem(pkgDirPath);
      console.log(
        `   - LibDef File Changed: ` +
        `${pkgName}@${versionToString(pkgVersion)}: ${relFilePath}`
      );
      if (!libDefsToTest.has(pkgDirName)) {
        libDefsToTest.set(pkgDirName, [pkgName, pkgVersion]);
      }
      return;
    }

    // CLI changes
    if (CLI_PATH_RE.test(relFilePath)) {
      console.log(`   - CLI File Changed: ${relFilePath}`);
      return;
    }

    throw new Error(
      `Unexpected file changed! Not sure how to run CI tests for ` +
      `${relFilePath}! If this is a new file, decide if it needs to be ` +
      `tested in Travis. If it does, update cli/src/commands/runCITests.js. ` +
      `If it does not need to be tested in CI, add the new file to the ` +
      `whitelist in runCITests.js`
    );
  });

  if (libDefsToTest.size > 0) {
    console.log(' * Running libdef tests...\n');
    const libDefPkgNames = Array.from(libDefsToTest.values()).map(
      ([pkgName]) => pkgName
    );
    const results = await runTests(
      path.join(repoRoot, 'definitions', 'npm'),
      libDefPkgNames,
      /*stopOnFirstError=*/true,
    );
    printRunTestsErrorResults(results);
    if (results.size > 0) {
      return 1;
    }
  }

  console.log(' * All CI tests passed!');

  return 0;
};

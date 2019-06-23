#!/usr/bin/env node

const fs = require('fs-extra');
const glob = require('glob');
const mkdirp = require('mkdirp');
const path = require('path');
const rimraf = require('rimraf');
const semver = require('semver');
const flowVersion = require('../../../../../../dist/lib/flowVersion');

/**
 * Create a structure like the following in `experimental/definitions`. This is
 * a step towards a Yarn workspaces / Lerna setup for the flow-typed libdefs.
 *
 * ➜  ~/libraries/flow-typed $ tree experimental/definitions
 * experimental/definitions
 * ├── alasql
 * │   └── alasql_v0.3.x
 * │       └── flow_v0.25.x-
 * │           └── index.js
 * ...
 * └── yargs
 *    ├── yargs_v10.x.x
 *    │   └── flow_v0.54.x-
 *    │       └── index.js
 * ...
 *    └── yargs_v9.x.x
 *        └── flow_v0.42.x-
 *            └── index.js
 */
function copyLibdefs(srcDefinitionsRoot, destDefinitionsRoot) {
  const versions = {};
  glob.sync('**/!(test_)*.js', {cwd: srcDefinitionsRoot}).forEach(libdef => {
    const parts = libdef.split('/');

    // TODO: Figure out how to deal with scoped libdefs!
    if (!parts[0].startsWith('@')) {
      parts.unshift(undefined);
    }

    const [
      scopeName = '',
      libraryNameAndVersionRange,
      flowVersionRange,
    ] = parts;
    const [libraryName, versionRange] = libraryNameAndVersionRange.split('_v');
    const libdefBase = path.join(
      srcDefinitionsRoot,
      scopeName,
      libraryNameAndVersionRange,
    );
    const tests = glob
      .sync('**/test_*.js', {cwd: libdefBase})
      .filter(test =>
        test.includes('/') ? test.startsWith(flowVersionRange) : true,
      );

    // Create a dir like `experimental/definitions/yargs/yargs_v10.x.x/flow_v0.54.x-`.
    const libDefDir = path.join(
      destDefinitionsRoot,
      scopeName,
      libraryName,
      libraryNameAndVersionRange,
      flowVersionRange,
    );
    const packageName = `@flowtyped/${
      scopeName ? `${scopeName.substr(1)}__${libraryName}` : libraryName
    }`;
    const range = new semver.Range(versionRange);
    if (!versions[packageName + versionRange]) {
      versions[packageName + versionRange] = range.set[0][0].semver.version;
    } else {
      versions[packageName + versionRange] = semver.inc(
        versions[packageName + versionRange],
        'patch',
      );
    }
    const lowerVersion = versions[packageName + versionRange];
    mkdirp.sync(libDefDir);
    const isLatest =
      flowVersionRange.endsWith('-') || flowVersionRange === 'flow_all';
    const packageJson = `{
  "name": "${packageName}",
  "version": "${lowerVersion}",
  "flowVersion": "${flowVersionRange}",
  "dependencies": {},
  "files": [
    "index.js"
  ],
  "publishConfig": {
    "access": "public",
    "tag": "${isLatest ? 'latest' : flowVersionRange}"
  }
}`;
    // Create a libdef like `yelp-flow-typed/definitions/yargs/yargs_v10.x.x/flow_v0.54.x-/index.js`.
    // fs.writeFileSync(path.join(libDefDir, 'package.json'), packageJson);
    fs.writeFileSync(
      path.join(libDefDir, 'index.js'),
      fs.readFileSync(`${srcDefinitionsRoot}/${libdef}`).toString(),
    );
    mkdirp.sync(path.join(libDefDir, 'tests'));
    tests.forEach(test => {
      const testParts = test.split('/');
      fs.writeFileSync(
        path.join(libDefDir, 'tests', testParts.pop()),
        fs.readFileSync(`${libdefBase}/${test}`).toString(),
      );
    });
  });
}

async function main() {
  const projectRoot = path.dirname(require.resolve('./sync-definitions.js'));
  // const browserDefinitionsRoot = path.resolve(
  //   projectRoot,
  //   './definitions/browser',
  // );
  // const npmDefinitionsRoot = path.resolve(projectRoot, './definitions/npm');
  // const destDefinitionsRoot = path.resolve(
  //   projectRoot,
  //   './experimental/definitions',
  // );

  // Blow away the `experiments/definitions` dir. This is mainly to account for
  // libdefs being deleted or moved in <ROOT>/definitions/npm. TODO: Figure out
  // a better solution for these cases for when we have monorepo things set up.
  // rimraf.sync(destDefinitionsRoot);

  const dirs = await fs.readdir(projectRoot, {withFileTypes: true});
  for (const dir of dirs) {
    if (dir.isDirectory()) {
      const definitionsRoot = path.join(
        projectRoot,
        dir.name,
        'definitions/npm',
      );
      const destDefinitionsRoot = path.join(
        projectRoot,
        dir.name,
        'experimental/definitions',
      );
      rimraf.sync(destDefinitionsRoot);
      copyLibdefs(definitionsRoot, destDefinitionsRoot);
    }
  }

  // copyLibdefs(browserDefinitionsRoot, destDefinitionsRoot);
  // copyLibdefs(npmDefinitionsRoot, destDefinitionsRoot);
}

if (require.main === module) {
  main();
}

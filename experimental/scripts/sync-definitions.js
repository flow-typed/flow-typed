#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const path = require('path');
const rimraf = require('rimraf');

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
  glob.sync('**/!(test_)*.js', { cwd: srcDefinitionsRoot }).forEach(libdef => {
    const parts = libdef.split('/');

    // TODO: Figure out how to deal with scoped libdefs!
    if (parts[0].startsWith('@')) {
      return;
    }

    const [libraryNameAndVersionRange, flowVersionRange] = parts;
    const libraryName = libraryNameAndVersionRange.split('_v')[0];

    // Create a dir like `experimental/definitions/yargs/yargs_v10.x.x/flow_v0.54.x-`.
    const libDefDir = path.join(
      destDefinitionsRoot,
      libraryName,
      libraryNameAndVersionRange,
      flowVersionRange,
    );

    mkdirp.sync(libDefDir);

    // Create a libdef like `yelp-flow-typed/definitions/yargs/yargs_v10.x.x/flow_v0.54.x-/index.js`.
    fs.writeFileSync(path.join(libDefDir, 'index.js'),
      fs.readFileSync(`${srcDefinitionsRoot}/${libdef}`).toString(),
    );
  });
}

function main() {
  const projectRoot = path.dirname(require.resolve('../../package.json'));
  const browserDefinitionsRoot = path.resolve(projectRoot, './definitions/browser');
  const npmDefinitionsRoot = path.resolve(projectRoot, './definitions/npm');
  const destDefinitionsRoot = path.resolve(projectRoot, './experimental/definitions')

  // Blow away the `experiments/definitions` dir. This is mainly to account for
  // libdefs being deleted or moved in <ROOT>/definitions/npm. TODO: Figure out
  // a better solution for these cases for when we have monorepo things set up.
  rimraf.sync(destDefinitionsRoot);

  copyLibdefs(browserDefinitionsRoot, destDefinitionsRoot);
  copyLibdefs(npmDefinitionsRoot, destDefinitionsRoot);
}

if (require.main === module) {
  main();
}

#!/usr/bin/env node
// @flow

if (!global.__flowTypedBabelPolyfill) {
  require('babel-polyfill');
  global.__flowTypedBabelPolyfill = true;
}

import yargs from 'yargs';
import {fs, path} from './lib/node.js';

import * as Install from './commands/install.js';
import * as CreateStub from './commands/create-stub.js';
import * as RunTests from './commands/runTests.js';
import * as Search from './commands/search.js';
import * as Update from './commands/update.js';
import * as UpdateCache from './commands/update-cache';
import * as ValidateDefs from './commands/validateDefs.js';
import * as Version from './commands/version.js';

import type {Argv} from 'yargs';
import typeof Yargs from 'yargs';

const identity = <T>(x: T): T => x;

export function runCLI() {
  type CommandModule = {
    name: string,
    description: string,
    setup?: (yargs: Yargs) => Yargs,
    // $FlowFixMe
    run: (argv: Argv) => Promise<number>,
  };
  const commands: Array<CommandModule> = [
    CreateStub,
    Install,
    RunTests,
    Search,
    Update,
    UpdateCache,
    ValidateDefs,
    Version,
  ];

  commands
    .reduce(
      (cmdYargs, cmd) =>
        cmdYargs.command(
          cmd.name,
          cmd.description,
          cmd.setup || identity,
          args =>
            cmd
              .run(args, yargs)
              .catch(err => {
                if (err.stack) {
                  console.log('UNCAUGHT ERROR: %s', err.stack);
                } else if (typeof err === 'object' && err !== null) {
                  console.log(
                    'UNCAUGHT ERROR: %s',
                    JSON.stringify(err, null, 2),
                  );
                } else {
                  console.log('UNCAUGHT ERROR:', err);
                }
                process.exit(1);
              })
              .then(code => process.exit(code)),
        ),
      yargs,
    )
    .demand(1)
    .strict()
    .help('h')
    .alias('h', 'help').argv;
}

/**
 * Look to see if the CWD is within an npm project. If it is, and that project
 * has a flow-typed CLI `npm install`ed, use that version instead of the global
 * version of the CLI.
 */
if (require.main === module) {
  const CWD = process.cwd();
  let currDir = CWD;
  let lastDir = null;
  while (currDir !== lastDir) {
    const localCLIPath = path.join(
      currDir,
      'node_modules',
      '.bin',
      'flow-typed',
    );
    try {
      if (fs.statSync(localCLIPath).isFile()) {
        runCLI = require.call(null, localCLIPath).runCLI;
        break;
      }
    } catch (e) {
      /* File doesn't exist, move up a dir... */
    }
    lastDir = currDir;
    currDir = path.resolve(currDir, '..');
  }
  runCLI();
}

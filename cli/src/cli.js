#!/usr/bin/env node
// @flow

if (!global.__flowTypedBabelPolyfill) {
  require("babel-polyfill");
  global.__flowTypedBabelPolyfill = true;
}

import yargs from "yargs";
import {fs, path} from "./lib/node.js";

import * as Install from "./commands/install.js";
import * as RunTests from "./commands/runTests.js";
import * as Search from "./commands/search.js";
import * as ValidateDefs from "./commands/validateDefs.js";
import * as UpdateCache from "./commands/update-cache";
import * as Version from "./commands/version.js";

export function runCLI() {
  type CommandModule = {
    name: string,
    description: string,
    setup?: (yargs: Object) => Object,
    run: (argv: typeof yargs) => Promise<number>,
  };
  const commands: Array<CommandModule> = [
    Install,
    RunTests,
    Search,
    ValidateDefs,
    Version,
    UpdateCache,
  ];

  commands
    .reduce((cmdYargs, cmd) => cmdYargs.command(
      cmd.name,
      cmd.description,
      typeof cmd.setup === 'function' ? cmd.setup : yargs => yargs,
      args => cmd.run(args, yargs).catch(err => {
        if (err.stack) {
          console.log('UNCAUGHT ERROR: %s', err.stack);
        } else if (typeof err === 'object' && err !== null) {
          console.log("UNCAUGHT ERROR: %s", JSON.stringify(err, null, 2));
        } else {
          console.log("UNCAUGHT ERROR:", err);
        }
        process.exit(1);
      }).then((code) => process.exit(code))
    ), yargs)
    .demand(1)
    .strict()
    .argv;
}

/**
 * Look to see if the CWD is within an npm project. If it is, and that project
 * has a flow-typed CLI `npm install`ed, use that version instead of the global
 * version of the CLI.
 */
// $FlowIssue: Need to teach Flow about `require.main`
if (require.main === module) {
  const CWD = process.cwd();
  let currDir = CWD;
  let lastDir = null;
  while (currDir !== lastDir) {
    const localCLIPath = path.join(currDir, 'node_modules', '.bin', 'flow-typed');
    try {
      if (fs.statSync(localCLIPath).isFile()) {
        runCLI = require.call(null, localCLIPath).runCLI;
        break;
      }
    } catch (e) { /* File doesn't exist, move up a dir... */ }
    lastDir = currDir;
    currDir = path.resolve(currDir, '..');
  }
  runCLI();
}

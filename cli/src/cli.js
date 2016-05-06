// @flow

import "babel-polyfill";

import * as yargs from "yargs";

import * as Install from "./commands/install.js";
import * as RunTests from "./commands/runTests.js";
import * as Search from "./commands/search.js";
import * as ValidateDefs from "./commands/validateDefs.js";

type CommandModule = {
  name: string,
  description: string,
  setup?: (yargs: Object) => Object,
  run: (argv: Object) => Promise<number>,
};
const commands: Array<CommandModule> = [
  Install,
  RunTests,
  Search,
  ValidateDefs,
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

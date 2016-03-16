// @flow

import "babel-polyfill";

import * as yargs from "yargs";

import * as ValidateDefs from "./commands/validateDefinitions.js";
import * as RunTests from "./commands/runTests.js";

type CommandModule = {
  name: string,
  description: string,
  options: Object,
  run: (argv: Object) => Promise<number>
};
const commands: Array<CommandModule> = [
  RunTests,
  ValidateDefs,
];

commands
  .reduce((yargs, cmd) => yargs.command(
    cmd.name,
    cmd.description,
    cmd.options,
    (...args) => cmd.run(...args).catch(err => {
      if (err.stack) {
        console.log(err.stack);
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

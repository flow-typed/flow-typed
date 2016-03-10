// @flow

import "babel-polyfill";

import * as yargs from "yargs";

import * as Validate from "./commands/validateDefinitions.js";

type CommandModule = {
  name: string,
  description: string,
  options: Object,
  run: (argv: Object) => Promise<void>
};
const commands: Array<CommandModule> = [
  Validate,
];

commands
  .reduce((yargs, cmd) => yargs.command(
    cmd.name,
    cmd.description,
    cmd.options,
    cmd.run
  ), yargs)
  .demand(1)
  .strict()
  .argv;

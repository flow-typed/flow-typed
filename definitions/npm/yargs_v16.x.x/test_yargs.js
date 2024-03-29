// @flow

import yargs from "yargs";
import { resolve } from "path";

yargs.parse();
yargs.parse("-x");
yargs.parse(["-x"]);
yargs.parse(["-x"], {});
yargs.parse(["-x"], {}, (err, argv, output) => {});
yargs.parse(["-x"], (err, argv, output) => {});
// $FlowExpectedError[incompatible-call]
yargs.parse(["-x"], {}, {});

const argv = yargs
  .usage("Usage: $0 <cmd> [options]")
  .command("install", "install a package (name@version)")
  .command(
    "publish",
    "publish the package inside the current working directory"
  )
  .option("f", {
    array: true,
    description: "an array of files",
    default: "test.js",
    alias: "file"
  })
  .alias("f", "fil")
  .option("h", {
    alias: "help",
    description: "display help message"
  })
  .string(["user", "pass"])
  .implies("user", "pass")
  .help("help")
  .demand("q")
  .version("1.0.1", "version", "display version information")
  .alias("version", "v")
  .example("npm install npm@latest -g", "install the latest version of npm")
  .epilog("for more information visit https://github.com/chevex/yargs")
  .showHelpOnFail(false, "whoops, something went wrong! run with --help").argv;

const argv2 = yargs(["-x"])
  .usage("Usage: $0 <cmd> [options]")
  .command({
    command: "test1",
    desc: "a",
    builder: yargsInstance => ""
  })
  .command({
    command: "test2",
    describe: "a",
    handler: argv => {}
  })
  .command({
    command: "test3",
    aliases: ["subtest"],
    description: false
  })
  .command("install", "install a package (name@version)")
  .command(
    "publish",
    "publish the package inside the current working directory"
  )
  .option("f", {
    array: true,
    description: "an array of files",
    default: "test.js",
    alias: "file"
  })
  .alias("f", "fil")
  .option("h", {
    alias: "help",
    description: "display help message"
  })
  .options({
    config: {
      alias: "c",
      description: "the config file",
      default: "config.json",
      coerce: file => {
        if (typeof file === "string") {
          return resolve(file);
        }
        return file;
      },
      hidden: false,
    }
  })
  .string(["user", "pass"])
  .implies("user", "pass")
  .help("help")
  .demand("q")
  .demandOption("a")
  .demandOption(["a", "b"], "msg")
  .demandCommand(1, 2)
  .demandCommand(2)
  .demandCommand(2, "")
  .version("1.0.1", "version", "display version information")
  .alias("version", "v")
  .example("npm install npm@latest -g", "install the latest version of npm")
  .epilog("for more information visit https://github.com/chevex/yargs")
  .onFinishCommand(() => { console.log('finished'); })
  .showHelpOnFail(false, "whoops, something went wrong! run with --help").argv;

yargs(["-x"])
  // $FlowExpectedError[incompatible-call]
  .demandCommand("a")

yargs(["-x"])
  // $FlowExpectedError[incompatible-call]
  .onFinishCommand()

yargs(["-x"])
  // $FlowExpectedError[incompatible-call]
  .alias(true, []);

yargs(["-x"])
  // $FlowExpectedError[incompatible-call]
  .help(() => {});

// $FlowExpectedError[prop-missing]
yargs.nope;

// $FlowExpectedError[incompatible-call]
yargs.coerce({
  date: "foo"
});

import meow from "meow";

/**
 * Breaking changes from v3 -> v4:
 * https://github.com/sindresorhus/meow/releases/tag/v4.0.0
 */

// Copied from test_meow_v3... This style is no longer supported
const oldCli = meow(`
  Usage
      $ foo <input>

    Options
      -r, --rainbow  Include a rainbow

    Examples
      $ foo unicorns --rainbow
      🌈 unicorns 🌈
  `,
  // $ExpectError (Minimist options should be passed through `flags` now)
  {
    alias: {
      r: "rainbow"
    }
  }
);

const newCli = meow(`
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
  `,
  {
    flags: {
      rainbow: {
        type: "boolean",
        alias: "r"
      }
    }
  }
);

// $ExpectError (Needs at least 1 arg)
const badCli1 = meow();
const goodCli1 = meow("Help");

// $ExpectError (Arg should be a help string or options object)
const badCli2 = meow(10);
const goodCli2 = meow({ help: "Help" });

// $ExpectError (version should be a string or boolean)
const badCli3 = meow("Help", { version: 1 });
const goodCli3 = meow("Help", { version: "1" });

// $ExpectError (Exact object type used for Options to prevent old signature, so can't add additional props)
const badCli4 = meow({ description: "bad", someProp: "this should not exist" });
const goodCli4 = meow({ description: "good" });

const badCli5 = meow({
  description: "version string",
  help: "help string",
  flags: {
    // $ExpectError (`alias` should be a string or Array<string>)
    unicorn: { type: "string", alias: 10 }
  }
});

const goodCli5 = meow({
  description: "version string",
  help: "help string",
  flags: {
    unicorn: { type: "string", alias: "u" }
  }
});

const badCli6 = meow({
  description: "version string",
  help: "help string",
  flags: {
    // $ExpectError (props should have value of "string", "boolean", or the object type in goodCli5)
    unicorn: "number"
  }
});

const goodCli6 = meow({
  description: "version string",
  help: "help string",
  flags: {
    unicorn: "string"
  }
});

const badCli7 = meow({
  description: "version string",
  help: "help string",
  flags: {
    // $ExpectError (`type` should be "string" or "boolean")
    unicorn: { type: "number", alias: "u" }
  }
});

const goodCli7 = meow({
  description: "version string",
  help: "help string",
  flags: {
    unicorn: { type: "string", alias: "u" }
  }
});

const goodCli8 = meow({
  description: "version string",
  help: "help string",
  version: "1.0.0",
  pkg: {},
  argv: ["foo", "bar"],
  inferType: true,
  autoHelp: true,
  autoVersion: true,
  flags: {
    unicorn: {
      type: "boolean",
      alias: "u"
    },
    fooBar: {
      type: "string",
      default: "foo"
    },
    "--": false
  }
});

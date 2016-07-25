import meow from 'meow';

const cliBasic = meow('Do stuff');

const cli = meow(`
  Usage
      $ foo <input>

    Options
      -r, --rainbow  Include a rainbow

    Examples
      $ foo unicorns --rainbow
      🌈 unicorns 🌈
`, {
  alias: {
    r: 'rainbow'
  }
});

if (cli.flags.rainbow) {
  cli.input.forEach(function(word) {
    console.log(word + '🌈');
  });
} else {
  cli.showHelp();
}

// $ExpectError
meow(42, {
  alias: {
    r: 'rainbow'
  }
});

// $ExpectError
meow('asdf', 42);

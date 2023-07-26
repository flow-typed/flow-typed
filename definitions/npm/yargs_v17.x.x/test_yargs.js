// @flow

import { describe, it, test } from 'flow-typed-test';
import yargs from 'yargs';

describe('command()', () => {
  it('command', () => {
    yargs.command('fetch', 'Download files');
    yargs.command(
      'fetch',
      'Download files',
      (yargs) => yargs,
      (argv) => {}
    );
    yargs.command('fetch', 'Download files', {
      builder: (yargs: any) => yargs,
      handler: (argv: any) => {},
    });
    yargs.command({
      command: 'fetch',
      aliases: ['download'],
      describe: 'Download files',
      builder: (yargs) => yargs,
      handler: (argv) => {},
    });
  });

  it('demandCommand', () => {
    yargs.demandCommand();
    yargs.demandCommand(1, 'Command not provided');
    yargs.demandCommand(1, 3, 'Command not provided', 'Too many commands');

    // $FlowExpectedError[incompatible-call]
    yargs.demandCommand('fetch');
  });

  it('example', () => {
    yargs.example('fetch', 'fetch [...files]');
    yargs.example([['fetch', 'fetch [...files]']]);
  });
});

test('epilog() and epilogue()', () => {
  yargs.epilog('For more information...');
  // $FlowExpectedError[incompatible-call]
  yargs.epilog();

  yargs.epilogue('For more information...');
  // $FlowExpectedError[incompatible-call]
  yargs.epilogue();
});

test('help()', () => {
  yargs.help();
  yargs.help('help');
  yargs.help('help', 'Display help message');

  // $FlowExpectedError[incompatible-call]
  yargs.help(() => {});
});

test('epilog() and epilogue()', () => {
  yargs.epilog('For more information...');
  // $FlowExpectedError[incompatible-call]
  yargs.epilog();

  yargs.epilogue('For more information...');
  // $FlowExpectedError[incompatible-call]
  yargs.epilogue();
});

describe('option()', () => {
  it('option', () => {
    yargs.option('f', {
      alias: 'file',
      coerce: (file) => {
        if (typeof file === 'string') {
          return require('path').resolve(file);
        }
        return file;
      },
      demandOption: true,
      default: 'http://example.com/path/to/file',
      describe: 'File to download',
      hidden: false,
      type: 'string',
    });
  });

  it('alias', () => {
    yargs.alias('f', 'file');

    // $FlowExpectedError[incompatible-call]
    yargs.alias();
    // $FlowExpectedError[incompatible-call]
    yargs.alias('f', []);
  });

  it('coerce', () => {
    yargs.coerce('file', (file) => {
      if (typeof file === 'string') {
        return require('path').resolve(file);
      }
      return file;
    });

    // $FlowExpectedError[incompatible-call]
    yargs.coerce('file', {});
  });

  it('demandOption', () => {
    yargs.demandOption('file');
    yargs.demandOption('file', 'Provide a file');
    yargs.demandOption(['username', 'password']);
    yargs.demandOption(['username', 'password'], 'Provide authentication');

    // $FlowExpectedError[incompatible-call]
    yargs.demandOption();
  });

  it('implies', () => {
    yargs.string('username');
    yargs.string(['username', 'password']);
  });

  it('string', () => {
    yargs.string('file');
  });
});

describe('parse()', () => {
  it('accepts arguments', () => {
    yargs.parse();
    yargs.parse('-x');
    yargs.parse(['-x']);
    yargs.parse(['-x'], {});
    yargs.parse(['-x'], {}, (err, argv, output) => {});
    yargs.parse(['-x'], (err, argv, output) => {});
  });

  it('requires the 3rd argument to be a callback', () => {
    // $FlowExpectedError[incompatible-call]
    yargs.parse(['-x'], {}, {});
  });
});

test('showHelpOnFail()', () => {
  yargs.showHelpOnFail(false);
  yargs.showHelpOnFail(false, 'Specify --help for available options');

  // $FlowExpectedError[incompatible-call]
  yargs.showHelpOnFail('Specify --help for available options');
});

test('usage()', () => {
  yargs.usage('Usage: $0 <cmd> [options]');
});

test('version()', () => {
  yargs.version();
  yargs.version('1.0');
  yargs.version(false);
  yargs.version('1.0.1', 'version', 'Display version');
});

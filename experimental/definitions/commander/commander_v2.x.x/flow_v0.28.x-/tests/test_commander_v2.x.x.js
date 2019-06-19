import program from 'commander';

new program.Command('support to use class');

const parseResult: {
  args: Array<string>,
  rawArgs: Array<string>,
  foo?: string,
  bar?: boolean,
} = program
  .version('1.0.0')
  .arguments('<cmd> [env]')
  .usage('[options] <file ...>')
    .option('-f, --foo', 'Make it foo')
    .option('-b, --bar', 'Make it bar')
  .command('foo')
    .alias('f')
    .description('Do that foo thing')
    .action(function() {
      console.log('Foooooo');
    })
  .parse(process.argv);

// $ExpectError
program.command(2);

// $ExpectError
const commandName: string = program.command('bar');

// $ExpectError
program.command('foo').alias().description('bar');

const parseOptionsResult: {
  args: Array<string>,
  unknown: Array<string>,
} = program.parseOptions(process.argv);

const description: string = program.description();
const alias: string = program.alias();
const usage: string = program.usage();
const programName: string = program.name();

const opts: { [key: string]: any } = program.opts();

program.outputHelp((defaultHelp: string) => `output: ${defaultHelp}`);
program.outputHelp();
program.outputHelp(() => `output`);
program.help();

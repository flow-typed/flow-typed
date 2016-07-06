import program from 'commander';

program
  .version('1.0.0')
  .usage('[options] <file ...>')
    .option('-f, --foo', 'Make it foo')
    .option('-b, --bar', 'Make it bar')
  .command('foo')
    .description('Do that foo thing')
    .action(function() {
      console.log('Foooooo');
    })
  .parse(process.argv);

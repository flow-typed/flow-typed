/* @flow */

var exec = require('child_process').exec;

// callback only.
exec('ls', function(error, stdout, stderr) {
  console.info(stdout);
});

// options only.
exec('ls', {timeout: 250});

// options + callback.
exec('ls', {maxBuffer: 100}, function(error, stdout, stderr) {
  console.info(stdout);
});

var execFile = require('child_process').execFile;

// args only.
execFile('ls', ['-lh']);

// callback only.
execFile('ls', function(error, stdout, stderr) {
  console.info(stdout);
});

// options only.
execFile('wc', {timeout: 250});

// args + callback.
execFile('ls', ['-l'], function(error, stdout, stderr) {
  console.info(stdout);
});

// args + options.
execFile('ls', ['-l'], {timeout: 250});

// Put it all together.
execFile('ls', ['-l'], {timeout: 250}, function(error, stdout, stderr) {
  console.info(stdout);
});


var child_process = require('child_process');

var ls = child_process.spawn('ls');
var wc = child_process.spawn('wc', ['-l']);

// args + options.
child_process.spawn('echo', ['-n', '"Testing..."'], {env: {TEST: 'foo'}});

// options only.
child_process.spawn('echo', {env: {FOO: 2}});

ls.stdout.on('data', function(data) {
  wc.stdin.write(data);
});

ls.stderr.on('data', function(data) {
  console.warn(data);
});

ls.on('close', function(code) {
  if (code !== 0) {
    console.warn('`ls` exited with code %s', code);
  }
  wc.stdin.end();
});

wc.stdout.pipe(process.stdout);
wc.stderr.pipe(process.stderr);

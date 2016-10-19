import fs from 'graceful-fs';

// Grabbed the examples from node.js docs
fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});

fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});
fs.stat('/tmp/world', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});

fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  fs.stat('/tmp/world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});

// Example when handled through fs.watch listener
fs.watch('./tmp', {encoding: 'buffer'}, (eventType, filename) => {
  if (filename)
    console.log(filename);
    // Prints: <Buffer ...>
});

fs.access('/etc/passwd', fs.R_OK | fs.W_OK, (err) => {
  console.log(err ? 'no access!' : 'can read/write');
});

fs.open('myfile', 'wx', (err, fd) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.error('myfile already exists');
      return;
    } else {
      throw err;
    }
  }

  (fd:number)
});

function readMyData(fd) {
}

fs.open('myfile', 'r', (err, fd) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error('myfile does not exist');
      return;
    } else {
      throw err;
    }
  }
// $ExpectError
  (fd: string)
});

fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

fs.appendFile('message.txt', 'data to append', 'utf8', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

fs.createReadStream('sample.txt', {start: 90, end: 99});

// This method is *CORRECT*:
const tmpDir = 'foo/bar';
const path = require('path');
fs.mkdtemp(tmpDir + path.sep, (err, folder) => {
  if (err) throw err;
  console.log(folder);
    // Will print something similar to `/tmp/abc123`.
    // A new temporary directory is created within
    // the /tmp directory.
});

fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.readFile('/etc/passwd', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// $ExpectError
var fail = fs.readFile('/etc/passwd', 'utf8');

fs.symlink('./foo', './new-port');

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

fs.writeFile('message.txt', 'Hello Node.js', 'utf8', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

fs.writeFile('message.txt', 'Hello Node.js', {encoding: 'utf8'}, (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

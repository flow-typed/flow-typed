/* @flow */

var child_process = require('child_process');
var fs = require('fs');
var stream = require('stream');
var ls = child_process.spawn('ls');

var data = 'foo';

ls.stdin.write(data);
ls.stdin.write(data, 'utf-8');
ls.stdin.write(data, () => {});
ls.stdin.write(data, 'utf-8', () => {});

ls.stdin.end();
ls.stdin.end(data);
ls.stdin.end(data, 'utf-8');
ls.stdin.end(data, () => {});
ls.stdin.end(data, 'utf-8', () => {});

var ws = fs.createWriteStream('/dev/null');
ls.stdout.pipe(ws).end();

class MyReadStream extends stream.Readable {}
class MyWriteStream extends stream.Writable {}
class MyDuplex extends stream.Duplex {}
class MyTransform extends stream.Duplex {}

var pipe = new MyReadStream()
  .pipe(new MyDuplex())
  .pipe(new MyTransform())
  .pipe(new MyWriteStream());

pipe as stream.Writable;
pipe as MyWriteStream;
// $FlowExpectedError[incompatible-type]
pipe as MyDuplex; // error

var pipeline = stream.pipeline(
  new MyReadStream(),
  new MyDuplex(),
  new MyTransform(),
  new MyWriteStream(),
  error => {
    error as ?Error;
    // $FlowExpectedError[incompatible-type]
    error as null; // error
  },
);

pipeline as MyWriteStream;
// $FlowExpectedError[incompatible-type]
pipeline as MyDuplex; // error

// $FlowExpectedError[incompatible-type]
stream.pipeline(
  new MyWriteStream(), // error - first stream must be Readable
  new MyDuplex(),
  () => {},
);

// $FlowExpectedError[incompatible-type]
stream.pipeline(
  new MyDuplex(),
  new MyWriteStream(), // error - middle stream must be Duplex
  new MyDuplex(),
  () => {},
);

// $FlowExpectedError[incompatible-type]
stream.pipeline(
  new MyDuplex(),
  new MyDuplex(),
  new MyReadStream(), // error - last stream must be Writable
  () => {},
);

new MyReadStream()
  .on('error', () => {})
  .pipe(new MyDuplex())
  .once('close', () => {});

async function* generator() {
  yield 'hello';
  yield 'streams';
}

stream.Readable.from(generator());

// $FlowExpectedError[incompatible-type]
stream.Readable.from('banana'); // ERROR
// $FlowExpectedError[incompatible-type]
stream.Readable.from(101); // error - TypeError [ERR_INVALID_ARG_TYPE]: The "iterable" argument must be an instance of Iterable. Received type number (101)
// $FlowExpectedError[incompatible-type]
stream.Readable.from(null); // error - TypeError [ERR_INVALID_ARG_TYPE]: The "iterable" argument must be an instance of Iterable. Received null

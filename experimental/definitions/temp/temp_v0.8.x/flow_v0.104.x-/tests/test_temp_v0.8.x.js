// @flow

import fs from 'fs';
import temp from 'temp';

(temp.dir: string);

// Test that "track" is chainable:
temp
  .track()
  .mkdirSync();
temp
  .track()
  // $ExpectError
  .nonExistentMethod();

// Note: Even on failure, the callbacks receive the path was attempted to
// be created.

temp.mkdir(null, (err, dirPath) => {
  (err: ?ErrnoError);
  (dirPath: string);
});

(temp.mkdirSync(): string);

fs.createReadStream('somefile')
  .pipe(temp.createWriteStream({prefix: 'prefix'}));

temp.open('filename', (err, info) => {
  (err: ?ErrnoError);
  (info.path: string);
  (info.fd: ?number);
});

// $ExpectError callback should not be the first arg.
temp.mkdir((err, dirPath) => {
  (err: ?ErrnoError);
  (dirPath: string);
});

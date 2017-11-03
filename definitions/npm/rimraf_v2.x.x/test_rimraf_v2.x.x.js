import rimraf from 'rimraf';

rimraf('/tmp/foo/bar/baz', {glob: true}, (err: ?Error) => {});
rimraf('/tmp/foo/bar/baz', (err: ?Error) => {});

// $ExpectError
rimraf(1);

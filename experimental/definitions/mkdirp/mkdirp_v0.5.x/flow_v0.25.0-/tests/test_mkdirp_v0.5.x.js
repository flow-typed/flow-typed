import mkdirp from 'mkdirp';
import fs from 'fs';

mkdirp('/tmp/foo/bar/baz');
mkdirp('/tmp/foo/bar/baz', (err: ?Error) => {});
mkdirp('/tmp/foo/bar/baz', 493);
mkdirp('/tmp/foo/bar/baz', 493, (err: ?Error) => {});
mkdirp('/tmp/foo/bar/baz', {});
mkdirp('/tmp/foo/bar/baz', { mode: 493 });
mkdirp('/tmp/foo/bar/baz', { fs: fs });
mkdirp('/tmp/foo/bar/baz', { mode: 493, fs: fs });
mkdirp('/tmp/foo/bar/baz', { mode: 493, fs: fs }, (err: ?Error) => {});

mkdirp.sync('/tmp/foo/bar/baz');
mkdirp.sync('/tmp/foo/bar/baz', 493);
mkdirp.sync('/tmp/foo/bar/baz', {});
mkdirp.sync('/tmp/foo/bar/baz', { mode: 493 });
mkdirp.sync('/tmp/foo/bar/baz', { fs: fs });
mkdirp.sync('/tmp/foo/bar/baz', { mode: 493, fs: fs });

// $ExpectError
mkdirp();

// $ExpectError
mkdirp(1);

// $ExpectError
mkdirp.sync();

// $ExpectError
mkdirp.sync(1);

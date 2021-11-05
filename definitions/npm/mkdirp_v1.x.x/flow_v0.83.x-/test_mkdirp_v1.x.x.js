import mkdirp from 'mkdirp';
import fs from 'fs';

mkdirp('/tmp/foo/bar/baz').then((res) => {
  // $FlowExpectedError[incompatible-use] is void or string
  res.toString();
  if (res) {
    res.toString();
  }
});
mkdirp('/tmp/foo/bar/baz').catch((err: ?Error) => {});
mkdirp('/tmp/foo/bar/baz', 493);
mkdirp('/tmp/foo/bar/baz', 493).catch((err: ?Error) => {});
mkdirp('/tmp/foo/bar/baz', {});
mkdirp('/tmp/foo/bar/baz', { mode: 493 });
mkdirp('/tmp/foo/bar/baz', { fs: fs });
mkdirp('/tmp/foo/bar/baz', { mode: 493, fs: fs });
mkdirp('/tmp/foo/bar/baz', { mode: 493, fs: fs }).catch((err: ?Error) => {});

mkdirp.sync('/tmp/foo/bar/baz');
mkdirp.sync('/tmp/foo/bar/baz', 493);
mkdirp.sync('/tmp/foo/bar/baz', {});
mkdirp.sync('/tmp/foo/bar/baz', { mode: 493 });
mkdirp.sync('/tmp/foo/bar/baz', { fs: fs });
mkdirp.sync('/tmp/foo/bar/baz', { mode: 493, fs: fs });

// $FlowExpectedError[incompatible-call]
mkdirp();

// $FlowExpectedError[incompatible-call]
mkdirp(1);

// $FlowExpectedError[incompatible-call]
mkdirp.sync();

// $FlowExpectedError[incompatible-call]
mkdirp.sync(1);

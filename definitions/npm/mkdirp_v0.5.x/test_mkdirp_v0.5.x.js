// @flow

import mkdirp from 'mkdirp';

function callback(err) {
  console.log('Done!')
}

const fs = {
  stat: (path, cb) => {},
  mkdir: (path, mode) => {}
}

const fsSync = {
  statSync: (path: string) => {},
  mkdirSync: (path: string, mode: string) => {}
}

mkdirp('/tmp/foot/bar/baz', callback)
mkdirp('/tmp/foo/bar/baz', {}, callback)
mkdirp('/tmp/foo/bar/baz', {mode: "0777"}, callback)
mkdirp('/tmp/foo/bar/baz', {fs: fs})

mkdirp.sync('/tmp/foot/bar/baz')
mkdirp.sync('/tmp/foo/bar/baz', {})
mkdirp.sync('/tmp/foo/bar/baz', {mode: "0777"})
mkdirp.sync('/tmp/foo/bar/baz', {fs: fsSync})

// $ExpectError
mkdirp(null)

// $ExpectError
mkdirp(2, callback)

// $ExpectError
mkdirp("2", 2, callback)

// $ExpectError
mkdirp("2", "2")

// $ExpectError
mkdirp('/tmp/foo/bar/baz', {fs: {}}, callback)

// $ExpectError
mkdirp.sync('/tmp/foo/bar/baz', callback)

// $ExpectError
mkdirp.sync('/tmp/foo/bar/baz', {fs: fs})

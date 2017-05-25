// @flow

import cpy from 'cpy';

cpy('foo.js', 'dest').then(function() {});
cpy(['foo.js'], 'dest');

cpy('foo.js', 'dest', {
  cwd: 'what',
  parents: true,
  rename: 'test',
  // additional cp-file options
  overwrite: true,
  // additional node-glob options
  root: 'test',
  dot: true,
  nomount: 'test',
  mark: true,
  nosort: true,
  stat: true,
  silent: true,
  strict: true,
  cache: {},
  statCache: {},
  symlinks: {},
  nounique: true,
  nonull: true,
  debug: true,
  nobrace: true,
  noglobstar: true,
  noext: true,
  nocase: true,
  matchBase: true,
  nodir: true,
  ignore: 'test',
  follow: true,
  realpath: true,
  absolute: true,
});

cpy('foo.js', 'dest', {
  cwd: 'what',
  parents: true,
  rename: (basename) => 'what',
  ignore: ['bar.js'],
});

cpy('foo.js', 'dest', {});

// $ExpectError
cpy();
// $ExpectError
cpy('foo.js');
// $ExpectError
cpy(2, 1);
// $ExpectError
(cpy(2, 1): void);

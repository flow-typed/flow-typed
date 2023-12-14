import rimraf from 'rimraf';

rimraf('/tmp/foo/bar/baz', {glob: true});
rimraf('/tmp/foo/bar/baz');

// $FlowExpectedError[incompatible-call]
rimraf(1);

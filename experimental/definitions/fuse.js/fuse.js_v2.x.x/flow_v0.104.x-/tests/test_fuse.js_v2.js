// @flow
import Fuse from 'fuse.js';

const fuse: Fuse<number> = Fuse([1, 2]);
fuse.search('foo');

// $ExpectError
const A: number[] = fuse.search(1);

fuse.set([1, 2, 3, 4]);
// $ExpectError
fuse.set(1);

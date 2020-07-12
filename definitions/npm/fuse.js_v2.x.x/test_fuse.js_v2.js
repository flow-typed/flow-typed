// @flow
import Fuse from 'fuse.js';

const fuse: Fuse<number> = Fuse([1, 2]);
fuse.search('foo');

// $FlowExpectedError
const A: number[] = fuse.search(1);

fuse.set([1, 2, 3, 4]);
// $FlowExpectedError
fuse.set(1);

// @flow
import Fuse from "fuse.js";

const fuse: Fuse<number> = new Fuse([1, 2]);
fuse.search("foo");

// $FlowExpectedError
const A: number[] = fuse.search(1);

fuse.setCollection([1, 2, 3, 4]);
// $FlowExpectedError
fuse.setCollection(1);

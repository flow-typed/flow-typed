import arrayUniq from 'array-uniq';

const a: Array<number> = arrayUniq([1, 1, 2, 3, 3]);
//=> [1, 2, 3]

const b: Array<string> = arrayUniq(['foo', 'foo', 'bar', 'foo']);
//=> ['foo', 'bar']

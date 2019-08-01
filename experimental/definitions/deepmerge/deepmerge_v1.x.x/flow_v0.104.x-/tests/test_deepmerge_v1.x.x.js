 // @flow
import deepmerge from 'deepmerge'

const a = {a: 1};
const b = {b: 2};

const merged1: Object = deepmerge(a, b);
const merged2 = deepmerge(a, b, { clone: true });
const merged3 = deepmerge.all([a, b]);
const merged4 = deepmerge.all([a, b], { clone: true });

const arrA = [1, 2, 3];
const arrB = ['a', 'b', 'c'];

const arrayMerge = (a, b) => a.concat(b);

const mergedArr1: Array<number | string> = deepmerge(arrA, arrB);
const mergedArr2 = deepmerge(arrA, arrB, { clone: true });
const mergedArr20 = deepmerge(arrA, arrB, { clone: true, arrayMerge });
const mergedArr21 = deepmerge(arrA, arrB, { arrayMerge });
const mergedArr3 = deepmerge.all([arrA, arrB]);
const mergedArr4 = deepmerge.all([arrA, arrB], { clone: true, });
const mergedArr40 = deepmerge.all([arrA, arrB], { clone: true, arrayMerge });
const mergedArr41 = deepmerge.all([arrA, arrB], { arrayMerge });

// $ExpectError
deepmerge(1, 2);
// $ExpectError
deepmerge({});
// $ExpectError
deepmerge({}, {}, { arrayMerge: (a: Object, b: Object) => ({ ...a, ...b }) });

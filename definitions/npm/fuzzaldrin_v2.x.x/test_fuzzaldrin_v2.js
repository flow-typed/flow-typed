// @flow
import { filter, score } from 'fuzzaldrin';
import fuzzaldrin from 'fuzzaldrin';

const a: string[] = filter(['a', 'b', 'c'], 'b');
const b: Object[] = fuzzaldrin.filter([{}, {}], 'f');

const c: number = score('abc', 'a');
const d: number = fuzzaldrin.score('asd', 'q');

// $ExpectError
filter([1, 2, 3]);
// $ExpectError
filter(['a', 'b', 'c'], 2);
// $ExpectError
score(1, 'a');
// $ExpectError
score('a', 2);

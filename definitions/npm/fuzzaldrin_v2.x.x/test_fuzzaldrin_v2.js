// @flow
import { filter, score } from 'fuzzaldrin';
import fuzzaldrin from 'fuzzaldrin';

const a: string[] = filter(['a', 'b', 'c'], 'b');
const b: Object[] = fuzzaldrin.filter([{}, {}], 'f');

const c: number = score('abc', 'a');
const d: number = fuzzaldrin.score('asd', 'q');

// $FlowExpectedError
filter([1, 2, 3]);
// $FlowExpectedError
filter(['a', 'b', 'c'], 2);
// $FlowExpectedError
score(1, 'a');
// $FlowExpectedError
score('a', 2);

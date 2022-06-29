// @flow
import { describe, test } from 'flow-typed-test';
import humanIdMain, {
  humanId,
  poolSize,
  maxLength,
  minLength,
  adjectives,
  nouns,
  verbs,
  adverbs,
} from 'human-id';

describe('human-id', () => {
  test('humanId', () => {
    humanIdMain();
    humanId();

    humanId({
      separator: '-',
      capitalize: false,
      adjectiveCount: 1,
      addAdverb: true,
    });
    humanId('test');
    humanId(true);

    // $FlowExpectedError[incompatible-call]
    humanId({
      foo: 'bar',
    });
    // $FlowExpectedError[incompatible-call]
    humanId({
      separator: true,
    });
    // $FlowExpectedError[incompatible-call]
    humanId({
      capitalize: 'test',
    });
    // $FlowExpectedError[incompatible-call]
    humanId({
      adjectiveCount: 'test',
    });
    // $FlowExpectedError[incompatible-call]
    humanId({
      addAdverb: 'test',
    });
    // $FlowExpectedError[incompatible-call]
    humanId(123);
  });

  test('poolSize', () => {
    (poolSize(): number);
    poolSize({
      separator: '-',
      capitalize: false,
      adjectiveCount: 1,
      addAdverb: true,
    });

    // $FlowExpectedError[incompatible-cast]
    (poolSize(): string);
    // $FlowExpectedError[prop-missing]
    poolSize({
      foo: 'bar',
    });
    poolSize({
      // $FlowExpectedError[incompatible-call]
      separator: true,
    });
    poolSize({
      // $FlowExpectedError[incompatible-call]
      capitalize: 'test',
    });
    poolSize({
      // $FlowExpectedError[incompatible-call]
      adjectiveCount: 'test',
    });
    poolSize({
      // $FlowExpectedError[incompatible-call]
      addAdverb: 'test',
    });
  });

  test('maxLength', () => {
    (maxLength(): number);
    maxLength({
      separator: '-',
      capitalize: false,
      adjectiveCount: 1,
      addAdverb: true,
    });

    // $FlowExpectedError[incompatible-cast]
    (maxLength(): string);
    // $FlowExpectedError[prop-missing]
    maxLength({
      foo: 'bar',
    });
    maxLength({
      // $FlowExpectedError[incompatible-call]
      separator: true,
    });
    maxLength({
      // $FlowExpectedError[incompatible-call]
      capitalize: 'test',
    });
    maxLength({
      // $FlowExpectedError[incompatible-call]
      adjectiveCount: 'test',
    });
    maxLength({
      // $FlowExpectedError[incompatible-call]
      addAdverb: 'test',
    });
  });

  test('minLength', () => {
    (minLength(): number);
    minLength({
      separator: '-',
      capitalize: false,
      adjectiveCount: 1,
      addAdverb: true,
    });

    // $FlowExpectedError[incompatible-cast]
    (minLength(): string);
    // $FlowExpectedError[prop-missing]
    minLength({
      foo: 'bar',
    });
    minLength({
      // $FlowExpectedError[incompatible-call]
      separator: true,
    });
    minLength({
      // $FlowExpectedError[incompatible-call]
      capitalize: 'test',
    });
    minLength({
      // $FlowExpectedError[incompatible-call]
      adjectiveCount: 'test',
    });
    minLength({
      // $FlowExpectedError[incompatible-call]
      addAdverb: 'test',
    });
  });

  test('constants', () => {
    (adjectives: Array<string>);
    (nouns: Array<string>);
    (verbs: Array<string>);
    (adverbs: Array<string>);
  });
});

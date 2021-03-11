// @flow
import { describe, it } from 'flow-typed-test';

import { mockUserAgent, clear } from 'jest-useragent-mock';

describe('jest-useragent-mock', () => {
  it('mockUserAgent', () => {
    // can take no params
    (mockUserAgent(): void);
    // can take null
    mockUserAgent(null);
    // can take one param
    mockUserAgent('test');
    // $FlowExpectedError[incompatible-call] must be string
    mockUserAgent(1);
    // $FlowExpectedError[extra-arg] takes a max of one arg
    mockUserAgent('test', 'test2');
  });

  it('clear', () => {
    (clear(): void);
    // $FlowExpectedError[extra-arg] takes no args
    clear('test');
  });
});

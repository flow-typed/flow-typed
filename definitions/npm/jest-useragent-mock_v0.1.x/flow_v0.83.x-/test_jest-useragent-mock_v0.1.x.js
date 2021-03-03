// @flow
import { describe, it } from 'flow-typed-test';

import { mockUserAgent, clear } from 'jest-useragent-mock';

describe('jest-useragent-mock', () => {
  it('mockUserAgent', () => {
    // can take no params
    (mockUserAgent(): void);
    // can take one param
    mockUserAgent('test');
    // $FlowExpectedError must be string
    mockUserAgent(1);
    // $FlowExpectedError takes a max of one arg
    mockUserAgent('test', 'test2');
  });

  it('clear', () => {
    (clear(): void);
    // $FlowExpectedError takes no args
    clear('test');
  });
});

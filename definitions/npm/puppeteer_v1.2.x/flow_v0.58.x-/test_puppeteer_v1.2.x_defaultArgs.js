// @flow

import { defaultArgs } from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('defaultArgs', () => {
  it('should return a string array', () => {
    (defaultArgs(): Array<string>);
  });
  it('should complain if passed args', () => {
    // $ExpectError
    (defaultArgs('testing...'): Array<string>);
  });
});

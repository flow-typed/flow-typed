// @flow

import { executablePath } from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('executablePath', () => {
  it('should return a string', () => {
    (executablePath(): string);
  });
  it('should complain if passed args', () => {
    // $ExpectError
    (executablePath('testing...'): string);
  });
});

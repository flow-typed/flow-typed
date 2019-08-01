// @flow

import { executablePath } from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('executablePath', () => {
  it('should return a string', () => {
    (executablePath(): string);
  });
  it('should complain if passed args', () => {
    // $ExpectError no arguments are expected by function type
    (executablePath('testing...'): string);
  });
});

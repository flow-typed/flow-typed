// @flow

import puppeteer from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('puppeteer.executablePath', () => {
  it('should return a string', () => {
    (puppeteer.executablePath(): string);
  });
  it('should complain if passed args', () => {
    // $FlowExpectedError no arguments are expected by function type
    (puppeteer.executablePath('testing...'): string);
  });
});

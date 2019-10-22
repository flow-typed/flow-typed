// @flow

import puppeteer from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('puppeteer.defaultArgs', () => {
  it('should return a string array', () => {
    (puppeteer.defaultArgs(): Array<string>);
  });
  it('should complain if passed args', () => {
    // $ExpectError no arguments are expected by function type
    (puppeteer.defaultArgs('testing...'): Array<string>);
  });
});

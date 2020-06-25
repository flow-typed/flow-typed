// @flow

import puppeteer from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('puppeteer.defaultArgs', () => {
  it('should return a string array', () => {
    (puppeteer.defaultArgs(): Array<string>);
  });
  it('should complain if passed args', () => {
    // $FlowExpectedError no arguments are expected by function type
    (puppeteer.defaultArgs('testing...'): Array<string>);
  });
});

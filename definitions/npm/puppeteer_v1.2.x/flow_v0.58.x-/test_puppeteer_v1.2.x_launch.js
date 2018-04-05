// @flow

import { launch } from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('launch', () => {
  it('should return Promise<$npm$puppeteer$Browser>', () => {
    (launch(): Promise<$npm$puppeteer$Browser>);
  });
  it('should complain if you pass in a string arg', () => {
    // $ExpectError
    (launch('testing...'): Promise<$npm$puppeteer$Browser>);
  });
  it('should complain if an option arg key is of the wrong type', () => {
    // $ExpectError
    (launch({ headless: 'testing...' }): Promise<$npm$puppeteer$Browser>);
  });
});

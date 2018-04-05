// @flow

import { connect } from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('connect', () => {
  it('should return Promise<$npm$puppeteer$Browser>', () => {
    (connect(): Promise<$npm$puppeteer$Browser>);
  });
  it('should complain if you pass in a string arg', () => {
    // $ExpectError
    (connect('testing...'): Promise<$npm$puppeteer$Browser>);
  });
  it('should complain if an option arg key is of the wrong type', () => {
    //$ExpectError
    (connect({ ignoreHTTPSErrors: 'testing...' }): Promise<$npm$puppeteer$Browser>);
  });
});

// @flow

import { launch } from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('launch', () => {
  it('should complain if you pass in a string arg', () => {
    // $ExpectError string is incompatible with `LaunchOptions`
    launch('testing...');
  });
  it('should complain if an option arg key is of the wrong type', () => {
    // $ExpectError string is incompatible with boolean inproperty `headless`
    launch({ headless: 'testing...' });
  });
  it('should preserve the Browser type', () => {
    launch().then(browser => {
      // $ExpectError string is incompatible with enum
      browser.on('response');
      browser.newPage().then(page => {
        page.on('request', request => {
          request.url();
          // $ExpectError property `testing` is missing in `Request`
          request.testing();
        });
      });
    });
  });
  it('should preserver Page type through launch, etc.', () => {
    launch().then(browser =>
      browser.newPage().then(page => {
        // $ExpectError string is incompatible with enum in type argument `K`
        page.on('testing...');
        page.on('request', request => {
          request.url();
          // $ExpectError property `testing` is missing in `Request`
          request.testing();
        });
        page.on('response', response => {
          response.request.url();
          // $ExpectError property `testing` is missing in `Response`
          response.testing();
        });
      })
    );
  });
});

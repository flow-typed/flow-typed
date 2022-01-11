// @flow

import puppeteer from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('puppeteer.launch', () => {
  it('should complain if you pass in a string arg', () => {
    // $FlowExpectedError string is incompatible with `LaunchOptions`
    puppeteer.launch('testing...');
  });
  it('should complain if an option arg key is of the wrong type', () => {
    // $FlowExpectedError string is incompatible with boolean inproperty `headless`
    puppeteer.launch({ headless: 'testing...' });
  });
  it('should preserve the Browser type', () => {
    puppeteer.launch().then(browser => {
      // $FlowExpectedError string is incompatible with enum
      browser.on('response');
      browser.newPage().then(page => {
        page.on('request', request => {
          request.url();
          // $FlowExpectedError property `testing` is missing in `Request`
          request.testing();
        });
      });
    });
  });
  it('should preserver Page type through launch, etc.', () => {
    puppeteer.launch().then(browser =>
      browser.newPage().then(page => {
        // $FlowExpectedError string is incompatible with enum in type argument `K`
        page.on('testing...');
        page.on('request', request => {
          request.url();
          // $FlowExpectedError property `testing` is missing in `Request`
          request.testing();
        });
        page.on('response', response => {
          response.request().url();
          // $FlowExpectedError property `testing` is missing in `Response`
          response.testing();
        });
      })
    );
  });
});

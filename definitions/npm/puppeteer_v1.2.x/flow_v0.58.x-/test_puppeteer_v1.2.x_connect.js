// @flow

import { connect } from 'puppeteer';
import { describe, it } from 'flow-typed-test';

describe('connect', () => {
  it('should complain if you pass in a string arg', () => {
    // $ExpectError string is incompatible with `ConnectOptions`
    connect('testing...');
  });
  it('should complain if an option arg key is of the wrong type', () => {
    // $ExpectError string is incompatible with boolean in property `ignoreHTTPSErrors`
    connect({ ignoreHTTPSErrors: 'testing...' });
  });
  it('should preserve Browser type', () => {
    connect().then(browser => {
      // $ExpectError string is incompatible with enum
      browser.on('response');
      browser.newPage().then(page => {
        page.on('request', request => {
          request.url();
          // $ExpectError property `testing` is missing in `Request`
          request.testing();
        });
      });
      browser.on('targetcreated', target => {
        target.createCDPSession().then(cdpSession => {
          // $ExpectError property `connect` is missing in `CDPSession`
          cdpSession.connect();
          cdpSession.detach();
        });
      });
    });
  });
  it('should preserve Page type', () => {
    connect().then(browser =>
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

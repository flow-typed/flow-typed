// @flow

import { describe, it } from 'flow-typed-test';
import fetch from 'node-fetch';
import type { AbortSignal, Response } from 'node-fetch';
import type { Readable } from 'stream';
import type http from 'http';
import type https from 'https';
import type { URL } from 'url';

describe('RequestInit', () => {
  it('should accept method option', () => {
    fetch('http://github.com', { method: 'GET' });
    // $FlowExpectedError
    fetch('http://github.com', { method: null });
  });
  it('should accept headers option', () => {
    fetch('http://github.com', { headers: { 'Accept-Encoding': 'gzip,deflate' } });
    // $FlowExpectedError
    fetch('http://github.com', { headers: null });
    // $FlowExpectedError
    fetch('http://github.com', { headers: { 'Accept-Encoding': 3 } });
  });
  it('should accept body option', (stream: Readable, blob: Blob) => {
    fetch('http://github.com', { body: 'Hello World' });
    fetch('http://github.com', { body: null });
    fetch('http://github.com', { body: Buffer.from('Hello World') });
    fetch('http://github.com', { body: blob });
    // $FlowExpectedError
    fetch('http://github.com', { body: 34 });
  });
  it('should accept redirect option', () => {
    fetch('http://github.com', { redirect: 'error' });
    fetch('http://github.com', { redirect: 'follow' });
    fetch('http://github.com', { redirect: 'manual' });
    // $FlowExpectedError
    fetch('http://github.com', { redirect: 'noop' });
  });
  it('should accept signal option', (signal: AbortSignal) => {
    fetch('http://github.com', { signal: null });
    fetch('http://github.com', { signal });

    class MySignal {
      aborted = true;
      onabort() {}
      addEventListener(name: string, cb: () => mixed) {}
      removeEventListener(name: string, cb: () => mixed) {};
      dispatchEvent() {}
    }

    fetch('http://github.com', { signal: new MySignal() });

    class InvalidSignal {
      aborted = true;
      onabort() {}
    }

    // $FlowExpectedError
    fetch('http://github.com', { signal: new InvalidSignal() });
  });
  it('should accept agent option', (httpAgent: http.Agent, httpsAgent: https.Agent) => {
    fetch('http://github.com', { agent: httpAgent });
    fetch('http://github.com', { agent: httpsAgent });
    fetch('http://github.com', { agent: null });
    fetch('http://github.com', {
      agent: (_parsedURL: URL) => {
        if (_parsedURL.protocol == 'http:') {
            return httpAgent;
        } else {
            return httpsAgent;
        }
      }
    });
    // $FlowExpectedError
    fetch('http://github.com', { agent: {} });
  });
  it('should accept compress option', () => {
    fetch('http://github.com', { compress: true });
    fetch('http://github.com', { compress: false });
    // $FlowExpectedError
    fetch('http://github.com', { compress: 'none' });
  });
  it('should accept follow option', () => {
    fetch('http://github.com', { follow: 42 });
    // $FlowExpectedError
    fetch('http://github.com', { follow: false });
  });
  it('should accept size option', () => {
    fetch('http://github.com', { size: 42 });
    // $FlowExpectedError
    fetch('http://github.com', { size: false });
  });
  it('should accept timeout option', () => {
    fetch('http://github.com', { timeout: 42 });
    // $FlowExpectedError
    fetch('http://github.com', { timeout: false });
  });
});

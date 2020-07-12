import { describe, it } from 'flow-typed-test';

import {
  OK,
  getStatusText,
  getStatusCode
} from 'http-status-codes';

describe('http-status-codes', () => {
  it('status code 200 is OK', () => {
    (OK: 200);
    // $FlowExpectedError
    (OK: 201);
  });

  it('status text by code', () => {
    (getStatusText(200): string);
    // $FlowExpectedError
    (getStatusText(200): boolean);
    // $FlowExpectedError
    getStatusText("200");
  });

  it('code by status text', () => {
    (getStatusCode("OK"): number);
    // $FlowExpectedError
    (getStatusCode("OK"): boolean);
    // $FlowExpectedError
    getStatusCode(200);
  });
});

import { describe, it } from 'flow-typed-test';

import {
  OK,
  getStatusText,
  getStatusCode
} from 'http-status-codes';

describe('http-status-codes', () => {
  it('status code 200 is OK', () => {
    (OK: 200);
    // $ExpectError
    (OK: 201);
  });

  it('status text by code', () => {
    (getStatusText(200): string);
    // $ExpectError
    (getStatusText(200): boolean);
    // $ExpectError
    getStatusText("200");
  });

  it('code by status text', () => {
    (getStatusCode("OK"): number);
    // $ExpectError
    (getStatusCode("OK"): boolean);
    // $ExpectError
    getStatusCode(200);
  });
});

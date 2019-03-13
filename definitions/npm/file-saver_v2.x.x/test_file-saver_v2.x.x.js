// @flow

import { describe, it } from 'flow-typed-test';
import saveAs from 'file-saver';

let blob = new Blob(['']);
let file = new File([''], '');

describe('The `data` parameter', () => {
  it('should accept a Blob', () => {
    saveAs(blob);
  });

  it('should accept a File', () => {
    saveAs(file);
  });

  it('should accept a string', () => {
    saveAs('');
  });

  it('should error on invalid usage', () => {
    // $ExpectError
    saveAs();
    // $ExpectError
    saveAs([]);
  });
});

describe('The `filename` parameter', () => {
  it('should accept a string', () => {
    saveAs('', '');
  });

  it('should error on invalid usage', () => {
    // $ExpectError
    saveAs('', blob);
    // $ExpectError
    saveAs('', []);
  });
});

describe('The `options` parameter', () => {
  it('should accept a, object', () => {
    saveAs('', '', { autoBom: true });
  });

  it('should error on invalid usage', () => {
    // $ExpectError
    saveAs('', '', {});
    // $ExpectError
    saveAs('', '', { test: true });
    // $ExpectError
    saveAs('', '', blob);
    // $ExpectError
    saveAs('', '', '');
  });
});

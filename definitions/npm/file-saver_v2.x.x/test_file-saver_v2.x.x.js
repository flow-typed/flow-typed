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
    // $FlowExpectedError
    saveAs();
    // $FlowExpectedError
    saveAs([]);
  });
});

describe('The `filename` parameter', () => {
  it('should accept a string', () => {
    saveAs('', '');
  });

  it('should error on invalid usage', () => {
    // $FlowExpectedError
    saveAs('', blob);
    // $FlowExpectedError
    saveAs('', []);
  });
});

describe('The `options` parameter', () => {
  it('should accept a, object', () => {
    saveAs('', '', { autoBom: true });
  });

  it('should error on invalid usage', () => {
    // $FlowExpectedError
    saveAs('', '', {});
    // $FlowExpectedError
    saveAs('', '', { test: true });
    // $FlowExpectedError
    saveAs('', '', blob);
    // $FlowExpectedError
    saveAs('', '', '');
  });
});

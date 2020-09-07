import request from 'cb-fetch';
import { describe, it } from 'flow-typed-test';

describe('responseType', () => {
  it('supports json', () => {
    request({ responseType: "json" });
  })
  it("doesn't support ms-stream yet", () => {
    // $FlowExpectedError
    request({ responseType: "ms-stream" });
  })
});

describe('HTTP verbs', () => {
  it('supports post', () => {
    request().post();
  })
  it("doesn't support trace", () => {
    // $FlowExpectedError
    request().trace();
  })
});

describe('hooks', () => {
  it('supports download', () => {
    request().hook('download', () => {});
  })
  it("doesn't support upload yet", () => {
    // $FlowExpectedError
    request().hook('upload', () => {});
  })
});

describe('get method', () => {
  it('has a query method', () => {
    request().get().query();
  })
  it("doesn't have a send method", () => {
    // $FlowExpectedError
    request().get().send();
  })
});

describe('response', () => {
  describe('success', () => {
    it("doesn't require refinement before using headers", () => {
        request().done({
            success(response) {
                response.headers.hasOwnProperty();
            }
        });
    })
  });
  describe('error', () => {
    it("requires refinement before using headers", () => {
        request().done({
            error(response) {
                // $FlowExpectedError
                response.headers.hasOwnProperty();
            }
        });
    })
  });
});
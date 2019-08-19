import request from 'cb-fetch';
import { describe, it } from 'flow-typed-test';

describe('responseType', () => {
  it('supports json', () => {
    request({ responseType: "json" });
  })
  it("doesn't support ms-stream yet", () => {
    // $ExpectError
    request({ responseType: "ms-stream" });
  })
});

describe('HTTP verbs', () => {
  it('supports post', () => {
    request().post();
  })
  it("doesn't support trace", () => {
    // $ExpectError
    request().trace();
  })
  describe('get method', () => {
    it("doesn't return a send method", () => {
      // $ExpectError
      request().get().send();
    })
    it('returns a query method', () => {
      request().get().query();
    })
    it('cannot be followed by more than one query method', () => {
      // $ExpectError
      request().get().query().query();
    })
  });
});

describe('hook method', () => {
  it('supports download', () => {
    request().hook('download', () => {});
  })
  it("doesn't support upload yet", () => {
    // $ExpectError
    request().hook('upload', () => {});
  })
  it("returns this", () => {
    request().post().hook('loadstart', () => {}).send();
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
                // $ExpectError
                response.headers.hasOwnProperty();
            }
        });
    })
  });
});
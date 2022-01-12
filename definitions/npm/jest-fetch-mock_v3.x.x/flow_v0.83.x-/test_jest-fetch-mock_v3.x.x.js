// @flow
import { describe, it } from 'flow-typed-test';

const fetchMockImported = require('jest-fetch-mock');


describe('jest-fetch-mock', () => {
  it('setup file usage', () => {
    require('jest-fetch-mock').enableMocks();
  });

  describe('imported', () => {
    it('mockResponse', () => {
      fetchMockImported.mockResponse(() => {});
    });

    it('mockResponseOnce', () => {
      fetchMockImported.mockResponseOnce(() => {});
    });

    it('mockResponse', () => {
      fetchMockImported.mockResponse(() => {});
    });

    it('once', () => {
      fetchMockImported.once(() => {});
    });

    it('mockResponses', () => {
      fetchMockImported.mockResponses(() => {});
    });

    it('mockReject', () => {
      fetchMockImported.mockReject(() => {});
    });

    it('mockRejectOnce', () => {
      fetchMockImported.mockRejectOnce(() => {});
    });

    it('mockAbort', () => {
      fetchMockImported.mockAbort(() => {});
    });

    it('mockAbortOnce', () => {
      fetchMockImported.mockAbortOnce(() => {});
    });

    it('isMocking', () => {
      fetchMockImported.isMocking(() => {});
    });

    it('doMock', () => {
      fetchMockImported.doMock(() => {});
    });

    it('doMockOnce', () => {
      fetchMockImported.doMockOnce(() => {});
    });

    it('mockOnce', () => {
      fetchMockImported.mockOnce(() => {});
    });

    it('doMockIf', () => {
      fetchMockImported.doMockIf(() => {});
    });

    it('mockIf', () => {
      fetchMockImported.mockIf(() => {});
    });

    it('doMockOnceIf', () => {
      fetchMockImported.doMockOnceIf(() => {});
    });

    it('mockOnceIf', () => {
      fetchMockImported.mockOnceIf(() => {});
    });

    it('dontMock', () => {
      fetchMockImported.dontMock(() => {});
    });

    it('dontMockOnce', () => {
      fetchMockImported.dontMockOnce(() => {});
    });

    it('dontMockIf', () => {
      fetchMockImported.dontMockIf(() => {});
    });

    it('dontMockOnceIf', () => {
      fetchMockImported.dontMockOnceIf(() => {});
    });

    it('resetMocks', () => {
      fetchMockImported.resetMocks(() => {});
    });

    it('enableMocks', () => {
      fetchMockImported.enableMocks(() => {});
    });

    it('disableMocks', () => {
      fetchMockImported.disableMocks(() => {});
    });
  });

  describe('global', () => {

  });
});

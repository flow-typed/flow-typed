// @flow
import { describe, it } from 'flow-typed-test';

const fetchMockImported = require('jest-fetch-mock');


describe('jest-fetch-mock', () => {
  it('setup file usage', () => {
    require('jest-fetch-mock').enableMocks();
  });

  describe('imported', () => {
    it('mockResponse', () => {
      fetchMockImported.mockResponse(() => '',).disableMocks();
      fetchMockImported.mockResponse('test');
      fetchMockImported.mockResponse('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockResponse();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockResponse(123);
    });

    it('mockResponseOnce', () => {
      fetchMockImported.mockResponseOnce(() => '',).disableMocks();
      fetchMockImported.mockResponseOnce('test');
      fetchMockImported.mockResponseOnce('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockResponseOnce();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockResponseOnce(123);
    });

    it('once', () => {
      fetchMockImported.once(() => '',).disableMocks();
      fetchMockImported.once('test');
      fetchMockImported.once('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.once();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.once(123);
    });

    it('mockResponses', () => {
      fetchMockImported.mockResponses();
      fetchMockImported.mockResponses(
        'test',
        () => '',
        'test',
        ['test', { statusText: 'test' }],
      ).disableMocks();
      fetchMockImported.mockResponses(
        () => '',
        ['test', { statusText: 'test' }],
        'test',
        'test',
        );

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockResponses(123);
    });

    it('mockReject', () => {
      fetchMockImported.mockReject().disableMocks();
      fetchMockImported.mockReject(() => Promise.resolve());
      fetchMockImported.mockReject(new Error());

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockReject('test');
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockReject(() => {});
    });

    it('mockRejectOnce', () => {
      fetchMockImported.mockRejectOnce().disableMocks();
      fetchMockImported.mockRejectOnce(() => Promise.resolve());
      fetchMockImported.mockRejectOnce(new Error());

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockRejectOnce('test');
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockRejectOnce(() => {});
    });

    it('mockAbort', () => {
      fetchMockImported.mockAbort().disableMocks();

      // $FlowExpectedError[extra-arg]
      fetchMockImported.mockAbort('test');
    });

    it('mockAbortOnce', () => {
      fetchMockImported.mockAbortOnce().disableMocks();

      // $FlowExpectedError[extra-arg]
      fetchMockImported.mockAbortOnce('test');
    });

    it('isMocking', () => {
      (fetchMockImported.isMocking('test'): boolean);
      fetchMockImported.isMocking(new Request('test'));

      // $FlowExpectedError[prop-missing]
      fetchMockImported.isMocking('test').disableMocks();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.isMocking();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.isMocking(123);
    });

    it('doMock', () => {
      fetchMockImported.doMock().disableMocks();
      fetchMockImported.doMock(() => '',).disableMocks();
      fetchMockImported.doMock('test');
      fetchMockImported.doMock('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.doMock(123);
    });

    it('doMockOnce', () => {
      fetchMockImported.doMockOnce().disableMocks();
      fetchMockImported.doMockOnce(() => '',).disableMocks();
      fetchMockImported.doMockOnce('test');
      fetchMockImported.doMockOnce('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.doMockOnce(123);
    });

    it('mockOnce', () => {
      fetchMockImported.mockOnce().disableMocks();
      fetchMockImported.mockOnce(() => '',).disableMocks();
      fetchMockImported.mockOnce('test');
      fetchMockImported.mockOnce('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockOnce(123);
    });

    it('doMockIf', () => {
      fetchMockImported.doMockIf('test').disableMocks();
      fetchMockImported.doMockIf(/ /g);
      fetchMockImported.doMockIf((input: Request) => true);
      fetchMockImported.doMockIf('test', () => '');
      fetchMockImported.doMockIf('test', 'test');
      fetchMockImported.doMockIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.doMockIf();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.doMockIf(123);
    });

    it('mockIf', () => {
      fetchMockImported.mockIf('test').disableMocks();
      fetchMockImported.mockIf(/ /g);
      fetchMockImported.mockIf((input: Request) => true);
      fetchMockImported.mockIf('test', () => '');
      fetchMockImported.mockIf('test', 'test');
      fetchMockImported.mockIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockIf();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockIf(123);
    });

    it('doMockOnceIf', () => {
      fetchMockImported.doMockOnceIf('test').disableMocks();
      fetchMockImported.doMockOnceIf(/ /g);
      fetchMockImported.doMockOnceIf((input: Request) => true);
      fetchMockImported.doMockOnceIf('test', () => '');
      fetchMockImported.doMockOnceIf('test', 'test');
      fetchMockImported.doMockOnceIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.doMockOnceIf();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.doMockOnceIf(123);
    });

    it('mockOnceIf', () => {
      fetchMockImported.mockOnceIf('test').disableMocks();
      fetchMockImported.mockOnceIf(/ /g);
      fetchMockImported.mockOnceIf((input: Request) => true);
      fetchMockImported.mockOnceIf('test', () => '');
      fetchMockImported.mockOnceIf('test', 'test');
      fetchMockImported.mockOnceIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockOnceIf();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.mockOnceIf(123);
    });

    it('dontMock', () => {
      fetchMockImported.dontMock().disableMocks();
      fetchMockImported.dontMock(() => '',).disableMocks();
      fetchMockImported.dontMock('test');
      fetchMockImported.dontMock('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.dontMock(123);
    });

    it('dontMockOnce', () => {
      fetchMockImported.dontMockOnce().disableMocks();
      fetchMockImported.dontMockOnce(() => '',).disableMocks();
      fetchMockImported.dontMockOnce('test');
      fetchMockImported.dontMockOnce('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.dontMockOnce(123);
    });

    it('dontMockIf', () => {
      fetchMockImported.dontMockIf('test').disableMocks();
      fetchMockImported.dontMockIf(/ /g);
      fetchMockImported.dontMockIf((input: Request) => true);
      fetchMockImported.dontMockIf('test', () => '');
      fetchMockImported.dontMockIf('test', 'test');
      fetchMockImported.dontMockIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.dontMockIf();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.dontMockIf(123);
    });

    it('dontMockOnceIf', () => {
      fetchMockImported.dontMockOnceIf('test').disableMocks();
      fetchMockImported.dontMockOnceIf(/ /g);
      fetchMockImported.dontMockOnceIf((input: Request) => true);
      fetchMockImported.dontMockOnceIf('test', () => '');
      fetchMockImported.dontMockOnceIf('test', 'test');
      fetchMockImported.dontMockOnceIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMockImported.dontMockOnceIf();
      // $FlowExpectedError[incompatible-call]
      fetchMockImported.dontMockOnceIf(123);
    });

    it('resetMocks', () => {
      (fetchMockImported.resetMocks(): void);

      // $FlowExpectedError[extra-arg]
      fetchMockImported.resetMocks('test');
    });

    it('enableMocks', () => {
      (fetchMockImported.enableMocks(): void);

      // $FlowExpectedError[extra-arg]
      fetchMockImported.enableMocks('test');
    });

    it('disableMocks', () => {
      (fetchMockImported.disableMocks(): void);

      // $FlowExpectedError[extra-arg]
      fetchMockImported.disableMocks('test');
    });
  });

  describe('global', () => {
    it('mockResponse', () => {
      fetchMock.mockResponse(() => '',).disableMocks();
      fetchMock.mockResponse('test');
      fetchMock.mockResponse('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.mockResponse();
      // $FlowExpectedError[incompatible-call]
      fetchMock.mockResponse(123);
    });

    it('mockResponseOnce', () => {
      fetchMock.mockResponseOnce(() => '',).disableMocks();
      fetchMock.mockResponseOnce('test');
      fetchMock.mockResponseOnce('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.mockResponseOnce();
      // $FlowExpectedError[incompatible-call]
      fetchMock.mockResponseOnce(123);
    });

    it('once', () => {
      fetchMock.once(() => '',).disableMocks();
      fetchMock.once('test');
      fetchMock.once('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.once();
      // $FlowExpectedError[incompatible-call]
      fetchMock.once(123);
    });

    it('mockResponses', () => {
      fetchMock.mockResponses();
      fetchMock.mockResponses(
        'test',
        () => '',
        'test',
        ['test', { statusText: 'test' }],
      ).disableMocks();
      fetchMock.mockResponses(
        () => '',
        ['test', { statusText: 'test' }],
        'test',
        'test',
        );

      // $FlowExpectedError[incompatible-call]
      fetchMock.mockResponses(123);
    });

    it('mockReject', () => {
      fetchMock.mockReject().disableMocks();
      fetchMock.mockReject(() => Promise.resolve());
      fetchMock.mockReject(new Error());

      // $FlowExpectedError[incompatible-call]
      fetchMock.mockReject('test');
      // $FlowExpectedError[incompatible-call]
      fetchMock.mockReject(() => {});
    });

    it('mockRejectOnce', () => {
      fetchMock.mockRejectOnce().disableMocks();
      fetchMock.mockRejectOnce(() => Promise.resolve());
      fetchMock.mockRejectOnce(new Error());

      // $FlowExpectedError[incompatible-call]
      fetchMock.mockRejectOnce('test');
      // $FlowExpectedError[incompatible-call]
      fetchMock.mockRejectOnce(() => {});
    });

    it('mockAbort', () => {
      fetchMock.mockAbort().disableMocks();

      // $FlowExpectedError[extra-arg]
      fetchMock.mockAbort('test');
    });

    it('mockAbortOnce', () => {
      fetchMock.mockAbortOnce().disableMocks();

      // $FlowExpectedError[extra-arg]
      fetchMock.mockAbortOnce('test');
    });

    it('isMocking', () => {
      (fetchMock.isMocking('test'): boolean);
      fetchMock.isMocking(new Request('test'));

      // $FlowExpectedError[prop-missing]
      fetchMock.isMocking('test').disableMocks();
      // $FlowExpectedError[incompatible-call]
      fetchMock.isMocking();
      // $FlowExpectedError[incompatible-call]
      fetchMock.isMocking(123);
    });

    it('doMock', () => {
      fetchMock.doMock().disableMocks();
      fetchMock.doMock(() => '',).disableMocks();
      fetchMock.doMock('test');
      fetchMock.doMock('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.doMock(123);
    });

    it('doMockOnce', () => {
      fetchMock.doMockOnce().disableMocks();
      fetchMock.doMockOnce(() => '',).disableMocks();
      fetchMock.doMockOnce('test');
      fetchMock.doMockOnce('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.doMockOnce(123);
    });

    it('mockOnce', () => {
      fetchMock.mockOnce().disableMocks();
      fetchMock.mockOnce(() => '',).disableMocks();
      fetchMock.mockOnce('test');
      fetchMock.mockOnce('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.mockOnce(123);
    });

    it('doMockIf', () => {
      fetchMock.doMockIf('test').disableMocks();
      fetchMock.doMockIf(/ /g);
      fetchMock.doMockIf((input: Request) => true);
      fetchMock.doMockIf('test', () => '');
      fetchMock.doMockIf('test', 'test');
      fetchMock.doMockIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.doMockIf();
      // $FlowExpectedError[incompatible-call]
      fetchMock.doMockIf(123);
    });

    it('mockIf', () => {
      fetchMock.mockIf('test').disableMocks();
      fetchMock.mockIf(/ /g);
      fetchMock.mockIf((input: Request) => true);
      fetchMock.mockIf('test', () => '');
      fetchMock.mockIf('test', 'test');
      fetchMock.mockIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.mockIf();
      // $FlowExpectedError[incompatible-call]
      fetchMock.mockIf(123);
    });

    it('doMockOnceIf', () => {
      fetchMock.doMockOnceIf('test').disableMocks();
      fetchMock.doMockOnceIf(/ /g);
      fetchMock.doMockOnceIf((input: Request) => true);
      fetchMock.doMockOnceIf('test', () => '');
      fetchMock.doMockOnceIf('test', 'test');
      fetchMock.doMockOnceIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.doMockOnceIf();
      // $FlowExpectedError[incompatible-call]
      fetchMock.doMockOnceIf(123);
    });

    it('mockOnceIf', () => {
      fetchMock.mockOnceIf('test').disableMocks();
      fetchMock.mockOnceIf(/ /g);
      fetchMock.mockOnceIf((input: Request) => true);
      fetchMock.mockOnceIf('test', () => '');
      fetchMock.mockOnceIf('test', 'test');
      fetchMock.mockOnceIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.mockOnceIf();
      // $FlowExpectedError[incompatible-call]
      fetchMock.mockOnceIf(123);
    });

    it('dontMock', () => {
      fetchMock.dontMock().disableMocks();
      fetchMock.dontMock(() => '',).disableMocks();
      fetchMock.dontMock('test');
      fetchMock.dontMock('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.dontMock(123);
    });

    it('dontMockOnce', () => {
      fetchMock.dontMockOnce().disableMocks();
      fetchMock.dontMockOnce(() => '',).disableMocks();
      fetchMock.dontMockOnce('test');
      fetchMock.dontMockOnce('test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.dontMockOnce(123);
    });

    it('dontMockIf', () => {
      fetchMock.dontMockIf('test').disableMocks();
      fetchMock.dontMockIf(/ /g);
      fetchMock.dontMockIf((input: Request) => true);
      fetchMock.dontMockIf('test', () => '');
      fetchMock.dontMockIf('test', 'test');
      fetchMock.dontMockIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.dontMockIf();
      // $FlowExpectedError[incompatible-call]
      fetchMock.dontMockIf(123);
    });

    it('dontMockOnceIf', () => {
      fetchMock.dontMockOnceIf('test').disableMocks();
      fetchMock.dontMockOnceIf(/ /g);
      fetchMock.dontMockOnceIf((input: Request) => true);
      fetchMock.dontMockOnceIf('test', () => '');
      fetchMock.dontMockOnceIf('test', 'test');
      fetchMock.dontMockOnceIf('test', 'test', { statusText: 'test' });

      // $FlowExpectedError[incompatible-call]
      fetchMock.dontMockOnceIf();
      // $FlowExpectedError[incompatible-call]
      fetchMock.dontMockOnceIf(123);
    });

    it('resetMocks', () => {
      (fetchMock.resetMocks(): void);

      // $FlowExpectedError[extra-arg]
      fetchMock.resetMocks('test');
    });

    it('enableMocks', () => {
      (fetchMock.enableMocks(): void);

      // $FlowExpectedError[extra-arg]
      fetchMock.enableMocks('test');
    });

    it('disableMocks', () => {
      (fetchMock.disableMocks(): void);

      // $FlowExpectedError[extra-arg]
      fetchMock.disableMocks('test');
    });
  });
});

import * as Sentry from '@sentry/browser';
import type {
  Breadcrumb, BreadcrumbHint,
  SentryEvent, EventHint,
} from '@sentry/browser';
import { it, describe } from 'flow-typed-test';

describe('@sentry/browser', () => {
  describe('Top-level API', () => {
    it('Sentry.init', () => {
      Sentry.init({});
      Sentry.init({ dsn: 'dsn_value' });

      // $FlowExpectedError
      Sentry.init({ dsn: 123 });
      // $FlowExpectedError
      Sentry.init({ dsn: null });
    });

    it('Sentry.init callbacks', () => {
      // You can either return the object (can modify it on the way)
      // or return null to suppress the event
      Sentry.init({
        beforeBreadcrumb(breadcrumb: Breadcrumb, hint?: BreadcrumbHint) {
          return null;
        },
      });
      Sentry.init({
        beforeBreadcrumb(breadcrumb: Breadcrumb, hint?: BreadcrumbHint) {
          return breadcrumb;
        },
      });

      Sentry.init({
        beforeSend(event: SentryEvent, hint?: EventHint) {
          return null;
        },
      });
      Sentry.init({
        beforeSend(event: SentryEvent, hint?: EventHint) {
          return event;
        },
      });
      Sentry.init({
        async beforeSend(event: SentryEvent, hint?: EventHint) {
          return event;
        },
      });


      Sentry.init({
        // $FlowExpectedError must return null not false
        beforeBreadcrumb(breadcrumb: Breadcrumb, hint?: BreadcrumbHint) {
          return false;
        },
      });
      Sentry.init({
        // $FlowExpectedError cannot be Promise
        async beforeBreadcrumb(breadcrumb: Breadcrumb, hint?: BreadcrumbHint) {
          return breadcrumb;
        },
      });
      Sentry.init({
        // $FlowExpectedError must return null not false
        beforeSend(event: SentryEvent, hint?: EventHint) {
          return false;
        },
      });
    });

    it('Sentry.captureException', () => {
      Sentry.captureException(new Error('Something broke'));
      Sentry.captureException('Something broke');
      Sentry.captureException(new Map());
      Sentry.captureException(undefined);

      // $FlowExpectedError: Too many args
      Sentry.captureException('Something broke', {}, null);
    });

    it('Sentry.setExtra', () => {
      Sentry.setExtra('character_name', 'Mighty Fighter');
      Sentry.setExtra('character_name', {
        foo: { bar: new Map() },
        baz: undefined,
        err: new Error(),
      });

      // $FlowExpectedError
      Sentry.setExtra();
      // $FlowExpectedError
      Sentry.setExtra(null, 'foo');
    });

    it('Sentry.setExtras', () => {
      const narrowerType: { [string]: string, ... } = { narrower: 'type' };
      Sentry.setExtras(narrowerType);

      // $FlowExpectedError
      Sentry.setExtras(null);
    });

    it('Sentry.setUser', () => {
      Sentry.setUser({ email: 'john.doe@example.com' });
      Sentry.setUser({ email: 'john.doe@example.com', arbitrary: 'value' });
      Sentry.setUser({ id: 'abcd-efgh' });
      Sentry.setUser({ id: 3 });

      // $FlowExpectedError
      Sentry.setUser();
      // $FlowExpectedError
      Sentry.setUser({ id: new Date() });
    });

    it('Sentry.withScope', () => {
      Sentry.withScope(scope => {
        scope.setUser({ email: 'john.doe@example.com' });
      });

      // $FlowExpectedError
      Sentry.withScope(null);
    });

    it('Sentry.configureScope', () => {
      Sentry.configureScope(scope => {
        scope.clear();
      });
      Sentry.configureScope(scope => {
        scope.setLevel(Sentry.Severity.Warning);
      });
      Sentry.configureScope(scope => {
        scope.setFingerprint(['my-view-function']);
      });

      // $FlowExpectedError
      Sentry.configureScope(null);
    });

    it('Sentry.setTag', () => {
      Sentry.setTag('page_locale', 'de-at');

      // $FlowExpectedError
      Sentry.setTag();
      // $FlowExpectedError
      Sentry.setTag('page_locale', null);
    });

    it('Sentry.captureMessage', () => {
      Sentry.captureMessage('This is a debug message', 'debug');

      // $FlowExpectedError
      Sentry.captureMessage('This is a debug message', 'invalid_severity');
    });

    it('Sentry.addBreadcrumb', () => {
      Sentry.addBreadcrumb({
        category: 'ui',
        message: 'Breadcrumb message',
        level: 'info',
      });
      Sentry.addBreadcrumb({
        data: { foo: new Map() },
      });

      // $FlowExpectedError
      Sentry.addBreadcrumb(null);
      // $FlowExpectedError
      Sentry.addBreadcrumb({ other: 'value' });
    });
  });

  describe('Lazy Loading', () => {
    it('Sentry.forceLoad', () => {
      Sentry.forceLoad();

      // $FlowExpectedError
      Sentry.forceLoad(null);
    });

    it('Sentry.onLoad', () => {
      Sentry.onLoad(() => {});

      // $FlowExpectedError
      Sentry.onLoad(null);
    });
  });

  describe('Advanced Usage', () => {
    it('BrowserClient', () => {
      new Sentry.BrowserClient({ dsn: 'dsn_value ' });

      // $FlowExpectedError
      new Sentry.BrowserClient({ unexpected: 'config' });
    });

    it('Hub', () => {
      const client = new Sentry.BrowserClient({ dsn: 'dsn_value ' });
      new Sentry.Hub(client);

      // $FlowExpectedError
      new Sentry.Hub();
    });
  });

  describe('Integrations', () => {
    it('Includes Core integrations', () => {
      new Sentry.Integrations.FunctionToString();

      // $FlowExpectedError
      new Sentry.Integrations.OnUnhandledRejection(); // Node-specific integration, not in Browser
    });

    it('Includes Browser-specific integrations', () => {
      new Sentry.Integrations.UserAgent();
      new Sentry.Integrations.Breadcrumbs({ console: false });

      // $FlowExpectedError
      new Sentry.Integrations.OnUnhandledRejection(); // Node-specific integration, not in Browser
    });

    it('Accepts custom integrations', () => {
      class CustomIntegration {
        constructor() {}
        name = 'CustomIntegration';
        setupOnce(addGlobalEventProcessor, getCurrentHub) {}
      }

      new Sentry.init({ integrations: [new CustomIntegration()] });
    });

  });

  describe('Transports', () => {
    it('Includes transports', () => {
      new Sentry.Transports.FetchTransport({ dsn: 'dsn_value' });
      new Sentry.Transports.XHRTransport({
        dsn: 'dsn_value',
        headers: { foo: 'bar' },
      });

      // $FlowExpectedError
      new Sentry.Transports.InvalidTransport({ dsn: 'dsn_value' });
      // $FlowExpectedError
      new Sentry.Transports.FetchTransport({}); // Missing `dsn` option
    });
  });
});

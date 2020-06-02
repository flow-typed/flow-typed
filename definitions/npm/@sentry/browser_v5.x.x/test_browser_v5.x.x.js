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

      // $ExpectError
      Sentry.init({ dsn: 123 });
      // $ExpectError
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
        // $ExpectError must return null not false
        beforeBreadcrumb(breadcrumb: Breadcrumb, hint?: BreadcrumbHint) {
          return false;
        },
      });
      Sentry.init({
        // $ExpectError cannot be Promise
        async beforeBreadcrumb(breadcrumb: Breadcrumb, hint?: BreadcrumbHint) {
          return breadcrumb;
        },
      });
      Sentry.init({
        // $ExpectError must return null not false
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

      // $ExpectError: Too many args
      Sentry.captureException('Something broke', {}, null);
    });

    it('Sentry.setExtra', () => {
      Sentry.setExtra('character_name', 'Mighty Fighter');
      Sentry.setExtra('character_name', {
        foo: { bar: new Map() },
        baz: undefined,
        err: new Error(),
      });

      // $ExpectError
      Sentry.setExtra();
      // $ExpectError
      Sentry.setExtra(null, 'foo');
    });

    it('Sentry.setExtras', () => {
      const narrowerType: { [string]: string, ... } = { narrower: 'type' };
      Sentry.setExtras(narrowerType);

      // $ExpectError
      Sentry.setExtras(null);
    });

    it('Sentry.setUser', () => {
      Sentry.setUser({ email: 'john.doe@example.com' });
      Sentry.setUser({ email: 'john.doe@example.com', arbitrary: 'value' });
      Sentry.setUser({ id: 'abcd-efgh' });
      Sentry.setUser({ id: 3 });

      // $ExpectError
      Sentry.setUser();
      // $ExpectError
      Sentry.setUser({ id: new Date() });
    });

    it('Sentry.withScope', () => {
      Sentry.withScope(scope => {
        scope.setUser({ email: 'john.doe@example.com' });
      });

      // $ExpectError
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

      // $ExpectError
      Sentry.configureScope(null);
    });

    it('Sentry.setTag', () => {
      Sentry.setTag('page_locale', 'de-at');

      // $ExpectError
      Sentry.setTag();
      // $ExpectError
      Sentry.setTag('page_locale', null);
    });

    it('Sentry.captureMessage', () => {
      Sentry.captureMessage('This is a debug message', 'debug');

      // $ExpectError
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

      // $ExpectError
      Sentry.addBreadcrumb(null);
      // $ExpectError
      Sentry.addBreadcrumb({ other: 'value' });
    });
  });

  describe('Lazy Loading', () => {
    it('Sentry.forceLoad', () => {
      Sentry.forceLoad();

      // $ExpectError
      Sentry.forceLoad(null);
    });

    it('Sentry.onLoad', () => {
      Sentry.onLoad(() => {});

      // $ExpectError
      Sentry.onLoad(null);
    });
  });

  describe('Advanced Usage', () => {
    it('BrowserClient', () => {
      new Sentry.BrowserClient({ dsn: 'dsn_value ' });

      // $ExpectError
      new Sentry.BrowserClient({ unexpected: 'config' });
    });

    it('Hub', () => {
      const client = new Sentry.BrowserClient({ dsn: 'dsn_value ' });
      new Sentry.Hub(client);

      // $ExpectError
      new Sentry.Hub();
    });
  });

  describe('Integrations', () => {
    it('Includes Core integrations', () => {
      new Sentry.Integrations.FunctionToString();

      // $ExpectError
      new Sentry.Integrations.OnUnhandledRejection(); // Node-specific integration, not in Browser
    });

    it('Includes Browser-specific integrations', () => {
      new Sentry.Integrations.UserAgent();
      new Sentry.Integrations.Breadcrumbs({ console: false });

      // $ExpectError
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

      // $ExpectError
      new Sentry.Transports.InvalidTransport({ dsn: 'dsn_value' });
      // $ExpectError
      new Sentry.Transports.FetchTransport({}); // Missing `dsn` option
    });
  });
});

import * as Integrations from '@sentry/integrations';
import { it, describe } from 'flow-typed-test';

describe('@sentry/integrations', () => {
  it('Angular', () => {
    new Integrations.Angular();

    // $ExpectError
    new Integrations.Angular(null);
  });

  it('CaptureConsole', () => {
    new Integrations.CaptureConsole();
    new Integrations.CaptureConsole({ levels: ['info', 'error'] });

    // $ExpectError
    new Integrations.CaptureConsole({ invalidProperty: null });
    // $ExpectError
    new Integrations.CaptureConsole({ levels: ['invalid_level'] });
  });

  it('Debug', () => {
    new Integrations.Debug();
    new Integrations.Debug({ debugger: false, stringify: true });

    // $ExpectError
    new Integrations.Debug({ stringify: null });
    // $ExpectError
    new Integrations.Debug({ invalidPropety: false });
  });

  it('Dedupe', () => {
    new Integrations.Dedupe();

    // $ExpectError
    new Integrations.Dedupe(null);
  });

  it('Ember', () => {
    new Integrations.Ember();

    // $ExpectError
    new Integrations.Ember(null);
  });

  it('ExtraErrorData', () => {
    new Integrations.ExtraErrorData();
    new Integrations.ExtraErrorData({ depth: 3 });

    // $ExpectError
    new Integrations.ExtraErrorData({ depth: false });
    // $ExpectError
    new Integrations.ExtraErrorData({ invalidProperty: false });
  });

  it('ReportingObserver', () => {
    new Integrations.ReportingObserver();
    new Integrations.ReportingObserver({
      types: ['crash', 'deprecation', 'intervention'],
    });

    // $ExpectError
    new Integrations.ReportingObserver({ types: ['invalid_type'] });
    // $ExpectError
    new Integrations.ReportingObserver({ invalidProperty: false });
  });

  it('RewriteFrames', () => {
    new Integrations.RewriteFrames();
    new Integrations.RewriteFrames({ root: 'foo', iteratee: frame => 'bar' });

    // $ExpectError
    new Integrations.RewriteFrames({ root: null });
    // $ExpectError
    new Integrations.RewriteFrames({ invalidProperty: false });
  });

  it('SessionTiming', () => {
    new Integrations.SessionTiming();

    // $ExpectError
    new Integrations.SessionTiming(null);
  });

  it('Transaction', () => {
    new Integrations.Transaction();

    // $ExpectError
    new Integrations.Transaction(null);
  });

  it('Vue', () => {
    new Integrations.Vue({
      Vue: { some: 'object' },
      attachProps: true,
      logErrors: false,
    });

    // $ExpectError
    new Integrations.Vue({ attachProps: 123 });
    // $ExpectError
    new Integrations.Vue({ invalidProperty: null });
  });
});

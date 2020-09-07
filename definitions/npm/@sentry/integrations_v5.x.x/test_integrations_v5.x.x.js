import * as Integrations from '@sentry/integrations';
import { it, describe } from 'flow-typed-test';

describe('@sentry/integrations', () => {
  it('Angular', () => {
    new Integrations.Angular();

    // $FlowExpectedError
    new Integrations.Angular(null);
  });

  it('CaptureConsole', () => {
    new Integrations.CaptureConsole();
    new Integrations.CaptureConsole({ levels: ['info', 'error'] });

    // $FlowExpectedError
    new Integrations.CaptureConsole({ invalidProperty: null });
    // $FlowExpectedError
    new Integrations.CaptureConsole({ levels: ['invalid_level'] });
  });

  it('Debug', () => {
    new Integrations.Debug();
    new Integrations.Debug({ debugger: false, stringify: true });

    // $FlowExpectedError
    new Integrations.Debug({ stringify: null });
    // $FlowExpectedError
    new Integrations.Debug({ invalidPropety: false });
  });

  it('Dedupe', () => {
    new Integrations.Dedupe();

    // $FlowExpectedError
    new Integrations.Dedupe(null);
  });

  it('Ember', () => {
    new Integrations.Ember();

    // $FlowExpectedError
    new Integrations.Ember(null);
  });

  it('ExtraErrorData', () => {
    new Integrations.ExtraErrorData();
    new Integrations.ExtraErrorData({ depth: 3 });

    // $FlowExpectedError
    new Integrations.ExtraErrorData({ depth: false });
    // $FlowExpectedError
    new Integrations.ExtraErrorData({ invalidProperty: false });
  });

  it('ReportingObserver', () => {
    new Integrations.ReportingObserver();
    new Integrations.ReportingObserver({
      types: ['crash', 'deprecation', 'intervention'],
    });

    // $FlowExpectedError
    new Integrations.ReportingObserver({ types: ['invalid_type'] });
    // $FlowExpectedError
    new Integrations.ReportingObserver({ invalidProperty: false });
  });

  it('RewriteFrames', () => {
    new Integrations.RewriteFrames();
    new Integrations.RewriteFrames({ root: 'foo', iteratee: frame => 'bar' });

    // $FlowExpectedError
    new Integrations.RewriteFrames({ root: null });
    // $FlowExpectedError
    new Integrations.RewriteFrames({ invalidProperty: false });
  });

  it('SessionTiming', () => {
    new Integrations.SessionTiming();

    // $FlowExpectedError
    new Integrations.SessionTiming(null);
  });

  it('Transaction', () => {
    new Integrations.Transaction();

    // $FlowExpectedError
    new Integrations.Transaction(null);
  });

  it('Vue', () => {
    new Integrations.Vue({
      Vue: { some: 'object' },
      attachProps: true,
      logErrors: false,
    });

    // $FlowExpectedError
    new Integrations.Vue({ attachProps: 123 });
    // $FlowExpectedError
    new Integrations.Vue({ invalidProperty: null });
  });
});

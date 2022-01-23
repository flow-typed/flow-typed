// @flow
import { describe, it } from 'flow-typed-test';
import BrowserInteractionTime from 'browser-interaction-time';

describe('browser-interaction-time', () => {
  const timer = new BrowserInteractionTime({
    timeIntervalEllapsedCallbacks: [],
    absoluteTimeEllapsedCallbacks: [],
    browserTabInactiveCallbacks: [],
    browserTabActiveCallbacks: [],
    idleTimeoutMs: 3000,
    checkCallbacksIntervalMs: 250
  });

  it('startTimer', () => {
    timer.startTimer();

    // $FlowExpectedError[extra-arg]
    timer.startTimer('test');
  });

  it('stopTimer', () => {
    timer.stopTimer();

    // $FlowExpectedError[extra-arg]
    timer.stopTimer('test');
  });

  it('addTimeIntervalEllapsedCallback', () => {
    const cb = {
      multiplier: time => time * 2,
      timeInMilliseconds: 1000,
      callback: () => console.log('callback'),
    };
    timer.addTimeIntervalEllapsedCallback(cb);

    // $FlowExpectedError[incompatible-call]
    timer.addTimeIntervalEllapsedCallback();
    // $FlowExpectedError[prop-missing]
    timer.addTimeIntervalEllapsedCallback({});
  });

  it('addAbsoluteTimeEllapsedCallback', () => {
    const cb = {
      timeInMilliseconds: 1000,
      callback: () => console.log('callback'),
      pending: true,
    };
    timer.addAbsoluteTimeEllapsedCallback(cb);

    // $FlowExpectedError[incompatible-call]
    timer.addAbsoluteTimeEllapsedCallback();
    // $FlowExpectedError[prop-missing]
    timer.addAbsoluteTimeEllapsedCallback({});
  });

  it('addBrowserTabInactiveCallback', () => {
    const callback = (timeInMs) => {
      timeInMs.toFixed(2);
      // $FlowExpectedError[prop-missing] is a number
      timeInMs.toLowerCase();
    };
    timer.addBrowserTabInactiveCallback(callback);

    // $FlowExpectedError[incompatible-call]
    timer.addBrowserTabInactiveCallback();
    // $FlowExpectedError[prop-missing]
    timer.addBrowserTabInactiveCallback({});
  });

  it('addBrowserTabActiveCallback', () => {
    const callback = (timeInMs) => {
      timeInMs.toFixed(2);
      // $FlowExpectedError[prop-missing] is a number
      timeInMs.toLowerCase();
    };
    timer.addBrowserTabActiveCallback(callback);

    // $FlowExpectedError[incompatible-call]
    timer.addBrowserTabActiveCallback();
    // $FlowExpectedError[prop-missing]
    timer.addBrowserTabActiveCallback({});
  });

  it('addIdleCallback', () => {
    const callback = (timeInMs) => {
      timeInMs.toFixed(2);
      // $FlowExpectedError[prop-missing] is a number
      timeInMs.toLowerCase();
    };
    timer.addIdleCallback(callback);

    // $FlowExpectedError[incompatible-call]
    timer.addIdleCallback();
    // $FlowExpectedError[prop-missing]
    timer.addIdleCallback({});
  });

  it('addActiveCallback', () => {
    const callback = (timeInMs) => {
      timeInMs.toFixed(2);
      // $FlowExpectedError[prop-missing] is a number
      timeInMs.toLowerCase();
    };
    timer.addActiveCallback(callback);

    // $FlowExpectedError[incompatible-call]
    timer.addActiveCallback();
    // $FlowExpectedError[prop-missing]
    timer.addActiveCallback({});
  });

  it('getTimeInMilliseconds', () => {
    (timer.getTimeInMilliseconds(): number);

    // $FlowExpectedError[extra-arg]
    timer.getTimeInMilliseconds(2);
  });

  it('isRunning', () => {
    (timer.isRunning(): boolean);

    // $FlowExpectedError[extra-arg]
    timer.isRunning(2);
  });

  it('isIdle', () => {
    (timer.isIdle(): boolean);

    // $FlowExpectedError[extra-arg]
    timer.isIdle(2);
  });

  it('reset', () => {
    (timer.reset(): void);

    // $FlowExpectedError[extra-arg]
    timer.reset(2);
  });

  it('destroy', () => {
    (timer.destroy(): void);

    // $FlowExpectedError[extra-arg]
    timer.destroy(2);
  });

  it('mark', () => {
    (timer.mark('a-mark'): void);

    // $FlowExpectedError[incompatible-call]
    timer.mark();
  });

  it('getMarks', () => {
    const marks = timer.getMarks('a-mark');

    if (marks) {
      marks[0].time.toFixed(2);
    }
  });

  it('measure', () => {
    timer.measure('a-measure', 'a-mark', 'b-mark');

    // $FlowExpectedError[incompatible-call]
    timer.measure();
    // $FlowExpectedError[incompatible-call]
    timer.measure('a-measure');
    // $FlowExpectedError[incompatible-call]
    timer.measure('a-measure', 'a-mark');
  });

  it('getMeasures', () => {
    const measures = timer.getMeasures('a-measure');

    if (measures) {
      measures[0].name.toLowerCase();
    }
  });
});

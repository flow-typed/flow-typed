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
  });

  it('addAbsoluteTimeEllapsedCallback', () => {
    const cb = {
      timeInMilliseconds: 1000,
      callback: () => console.log('callback'),
      pending: true,
    };
    timer.addAbsoluteTimeEllapsedCallback(cb);
  });

  it('addBrowserTabInactiveCallback', () => {
    const callback = () => console.log('some callback');
    timer.addBrowserTabInactiveCallback(callback);
  });

  it('addBrowserTabActiveCallback', () => {
    const callback = () => console.log('some callback');
    timer.addBrowserTabActiveCallback(callback);
  });

  it('addIdleCallback', () => {
    const callback = () => console.log('some callback');
    timer.addIdleCallback(callback);
  });

  it('addActiveCallback', () => {
    const callback = () => console.log('some callback');
    timer.addActiveCallback(callback);
  });

  it('getTimeInMilliseconds', () => {
    (timer.getTimeInMilliseconds(): number);
  });

  it('isRunning', () => {
    (timer.isRunning(): boolean);
  });

  it('isIdle', () => {
    (timer.isIdle(): boolean);
  });

  it('reset', () => {
    timer.reset();
  });

  it('destroy', () => {
    timer.destroy();
  });

  it('mark', () => {
    timer.mark('a-mark');
  });

  it('getMarks', () => {
    const marks = timer.getMarks('a-mark');

    if (marks) {
      marks[0].time.toFixed(2);
    }
  });

  it('measure', () => {
    timer.measure('a-measure', 'a-mark', 'b-mark');
  });

  it('getMeasures', () => {
    const measures = timer.getMeasures('a-measure');

    if (measures) {
      measures[0].name.toLowerCase();
    }
  });
});

import { describe, it } from "flow-typed-test";
import { throttle, debounce } from 'throttle-debounce';

describe('throttle', () => {
  it('should create throttled function', () => {
    const func: () => string = throttle(1, () => '');
  });

  it('can be called', () => {
    it('with 4 args: delay, noTrailing, callback, debounceMode', () => {
      throttle(1, true, () => '', true);
    });

    it('with 3 args: delay, noTrailing, callback', () => {
      throttle(1, true, () => '');
    });

    it('with 3 args: delay, callback, debounceMode', () => {
      throttle(1, () => '', true);
    });

    it('with 2 args: delay, callback', () => {
      throttle(1, () => '');
    });
  });

  it('can not be called with incorrect options', () => {
    // $FlowExpectedError
    throttle(() => '');

    // $FlowExpectedError
    throttle('1', () => '');
  });
});

describe('debounce', () => {
  it('should create debounce function', () => {
    const func: () => number = debounce(1, () => 1);
  });

  it('can be called', () => {
    it('with 3 args: delay, atBegin, callback', () => {
      debounce(1, true, () => 1);
    });

    it('with 2 args: delay, callback', () => {
      debounce(1, () => 1);
    });
  });

  it('can not be called with incorrect options', () => {
    // $FlowExpectedError
    debounce(() => 1);

    // $FlowExpectedError
    debounce('1', () => 1);
  });
});

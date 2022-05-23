// @flow
import { describe, it, test } from 'flow-typed-test';
import { throttle, debounce, type Throttle, type Debounce } from 'throttle-debounce';

type Proc = () => void;
const proc: Proc = () => {};

type Func = (x: number) => string;
const func: Func = (x: number) => '';

describe('throttle-debounce', () => {
  describe('throttle', () => {
    it('works', () => {
      throttle(1, proc);
      throttle(2, proc, {});
      throttle(3, proc, { noTrailing: true });
      throttle(4, proc, { noTrailing: false });
      throttle(5, proc, { noLeading: true });
      throttle(6, proc, { noLeading: false });
      throttle(7, proc, { debounceMode: true });
      throttle(8, proc, { debounceMode: false });
      throttle(9, proc, { noTrailing: false, noLeading: false, debounceMode: false });
    });

    it('fails', () => {
      // $FlowExpectedError[incompatible-call]
      throttle();
      // $FlowExpectedError[incompatible-call]
      throttle(func);
      // $FlowExpectedError[incompatible-call]
      throttle('', func);
      // $FlowExpectedError[incompatible-call]
      throttle(0);
      // $FlowExpectedError[incompatible-call]
      throttle(0, 0);
      // $FlowExpectedError[incompatible-call]
      throttle(0, func, { noTrailing: 0 });
      // $FlowExpectedError[incompatible-call]
      throttle(0, func, { noLeading: 0 });
      // $FlowExpectedError[incompatible-call]
      throttle(0, func, { debounceMode: 0 });
    });

    test('return types', () => {
      // Throttled functions should be subtype of `typeof callback` if `callback` will not return value.
      const proc2: Proc = throttle(1, proc);

      const proc3: Throttle<Proc> = throttle(1, proc);
      (proc3(): void);
      (proc3.cancel(): void);

      // ---

      // $FlowExpectedError[incompatible-call] Throttled functions should not be subtype of `typeof callback` if `callback` will return value.
      const func2: Func = throttle(1, func);

      // $FlowExpectedError[incompatible-type-arg]
      // $FlowExpectedError[incompatible-call]
      const func3: Throttle<Func> = throttle(1, func);

      // Throttled function should accept arguments if `callback` accept them.
      func3(100);
      // $FlowExpectedError[incompatible-call] Throttled function should reject arguments if `callback` reject them.
      func3('abc');
      // $FlowExpectedError[incompatible-call]
      func3();
      // Throttled function should have `cancel`.
      (func3.cancel(): void);
    });
  });

  describe('debounce', () => {
    it('works', () => {
      const debounceWithoutCancel1: Proc = debounce(42, proc);
      debounceWithoutCancel1();
      // $FlowExpectedError[prop-missing]
      debounceWithoutCancel1.cancel();
      const debounceWithCancel1: Debounce<Proc> = debounce(42, proc);
      debounceWithCancel1();
      debounceWithCancel1.cancel();
    });

    test('cancel options', () => {
      const proc4 = debounce(1, proc);
      proc4.cancel();
      proc4.cancel({ upcomingOnly: true });
      // $FlowExpectedError[incompatible-call]
      proc4.cancel({ upcomingOnly: 'true' });
      // $FlowExpectedError[incompatible-call]
      proc4.cancel({ upcomingOnly: 0 });
      // $FlowExpectedError[incompatible-call]
      proc4.cancel(true);
    });
  });
});

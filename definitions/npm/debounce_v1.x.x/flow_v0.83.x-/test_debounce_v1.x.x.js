// @flow
import { describe, it } from 'flow-typed-test';
import debounce, { debounce as namedDebounce } from 'debounce';

declare function func(value: string): boolean;

describe('debounce', () => {
  it('returns the debounced function', () => {
    (debounce(func, 100): typeof func);
    // $FlowExpectedError[incompatible-cast]
    (debounce(func, 100): boolean);
  });

  it('takes immediate param', () => {
    debounce(func, 100, true);
    // $FlowExpectedError[incompatible-call]
    debounce(func, 100, 'string');
  });

  it('requires params', () => {
    // $FlowExpectedError[incompatible-call]
    debounce(func);
    // $FlowExpectedError[incompatible-call]
    debounce();
  });

  it('can flush', () => {
    (debounce(func, 100).flush(): void);
  });

  it('can cancel', () => {
    (debounce(func, 100).cancel(): void);
  });

  it('contains debounce as a named export', () => {
    (namedDebounce(func, 100): typeof func);
    // $FlowExpectedError[incompatible-cast]
    (namedDebounce(func, 100): boolean);
  });

  it('contains debounce within debounce', () => {
    (debounce.debounce(func, 100): typeof func);
    // $FlowExpectedError[incompatible-cast]
    (debounce.debounce(func, 100): boolean);
  });
});

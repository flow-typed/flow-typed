// @flow
import { describe, it } from 'flow-typed-test';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

declare var element: HTMLElement;
declare var inputElement: HTMLInputElement;

describe('body-scroll-lock', () => {
  it('disableBodyScroll', () => {
    (disableBodyScroll(element): void);
    disableBodyScroll(inputElement);
    // $FlowExpectedError[incompatible-call]
    disableBodyScroll();
  });

  it('enableBodyScroll', () => {
    (enableBodyScroll(element): void);
    enableBodyScroll(inputElement);
    // $FlowExpectedError[incompatible-call]
    enableBodyScroll();
  });

  it('clearAllBodyScrollLocks', () => {
    (clearAllBodyScrollLocks(): void);
    // $FlowExpectedError[extra-arg]
    clearAllBodyScrollLocks('');
  });
});

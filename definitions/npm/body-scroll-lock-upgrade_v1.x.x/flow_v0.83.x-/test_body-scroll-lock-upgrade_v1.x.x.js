// @flow
import { describe, it } from 'flow-typed-test';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock-upgrade';

declare var element: HTMLElement;
declare var inputElement: HTMLInputElement;

describe('body-scroll-lock', () => {
  it('disableBodyScroll', () => {
    (disableBodyScroll(element): void);
    disableBodyScroll(inputElement);
    // $FlowExpectedError[incompatible-call]
    disableBodyScroll();
  });

  it('disableBodyScroll with options', () => {
    disableBodyScroll(element, {
      reserveScrollBarGap: true,
      allowTouchMove: (el) => true,
    });
    disableBodyScroll(element, {
      reserveScrollBarGap: true,
    });
    disableBodyScroll(element, {
      allowTouchMove: (el) => true,
    });
    // $FlowExpectedError[prop-missing]
    disableBodyScroll(element, {
      random: true,
    });
  });

  it('enableBodyScroll', () => {
    (enableBodyScroll(element): void);
    enableBodyScroll(inputElement);
    // $FlowExpectedError[incompatible-call]
    enableBodyScroll();
    // $FlowExpectedError[extra-arg]
    enableBodyScroll(element, {});
  });

  it('clearAllBodyScrollLocks', () => {
    (clearAllBodyScrollLocks(): void);
    // $FlowExpectedError[extra-arg]
    clearAllBodyScrollLocks('');
  });
});

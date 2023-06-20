// @flow
import { describe, test } from 'flow-typed-test';
import {
  lock,
  unlock,
  clearBodyLocks,
} from 'tua-body-scroll-lock';

describe('tua-body-scroll-lock', () => {
  test('lock', () => {
    declare var htmlElement: HTMLElement;

    (lock(): void);
    lock(null);
    lock(htmlElement);
    lock([htmlElement]);

    // $FlowExpectedError[incompatible-call]
    lock('');
    // $FlowExpectedError[incompatible-cast]
    (unlock(): number);
  });

  test('unlock', () => {
    declare var htmlElement: HTMLElement;

    (unlock(): void);
    unlock(null);
    unlock(htmlElement);
    unlock([htmlElement]);

    // $FlowExpectedError[incompatible-call]
    unlock('');
    // $FlowExpectedError[incompatible-cast]
    (unlock(): number);
  });

  test('clearBodyLocks', () => {
    (clearBodyLocks(): void);

    // $FlowExpectedError[extra-arg]
    clearBodyLocks('');
  });
});

// @flow
import { describe, test } from 'flow-typed-test';
import {
  aria,
  dom,
  elementRoles,
  roles,
  roleElements,
} from 'aria-query';

describe('aria-query', () => {
  test('aria', () => {
    const value = aria.get('aria-activedescendant');
    if (value) {
      value.type.toLowerCase();
      if (value.values) {
        (value.values[0]: string | boolean);
      }
    }

    // $FlowExpectedError[incompatible-call]
    aria.get('foo')
  });

  test('dom', () => {

  });

  test('elementRoles', () => {

  });

  test('roles', () => {

  });

  test('roleElements', () => {

  });
});

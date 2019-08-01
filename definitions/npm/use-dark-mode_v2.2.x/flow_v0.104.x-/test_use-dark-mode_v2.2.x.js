// @flow

import { describe, it } from 'flow-typed-test';

import React from 'react';
import useDarkMode from 'use-dark-mode';

function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <>
      <button type="button" onClick={darkMode.disable} />
      <input
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <button type="button" onClick={darkMode.enable} />
    </>
  );
}

describe('The `useDarkMode` hook', () => {
  it('should accept booleans as initialState', () => {
    useDarkMode();
    useDarkMode(false);
    useDarkMode(true);
    // $ExpectError
    useDarkMode('');
  });

  it('should validate the config object', () => {
    useDarkMode(false, {
      classNameDark: '',
      classNameLight: '',
      element: document.createElement('div'),
      onChange: value => {
        (value: boolean);
      },
    });

    // $ExpectError
    useDarkMode(false, false);
    // $ExpectError
    useDarkMode({}, false);
    // $ExpectError
    useDarkMode(false, {
      classNameDark: true,
      element: () => <div />,
    });
  });

  it('should validate the return object', () => {
    const darkMode = useDarkMode();

    (darkMode.value: boolean);
    darkMode.enable();
    darkMode.disable();
    darkMode.toggle();

    // $ExpectError
    darkMode.value = true;
    // $ExpectError
    darkMode.enable = false;
  });
});

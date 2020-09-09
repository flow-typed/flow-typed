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
    // $FlowExpectedError
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

    // $FlowExpectedError
    useDarkMode(false, false);
    // $FlowExpectedError
    useDarkMode({}, false);
    // $FlowExpectedError
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

    // $FlowExpectedError
    darkMode.value = true;
    // $FlowExpectedError
    darkMode.enable = false;
  });
});

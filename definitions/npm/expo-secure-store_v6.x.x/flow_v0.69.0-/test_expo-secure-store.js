// @flow
import { it, describe } from 'flow-typed-test';

import {
  AFTER_FIRST_UNLOCK,
  AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY,
  ALWAYS,
  WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
  ALWAYS_THIS_DEVICE_ONLY,
  WHEN_UNLOCKED,
  WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  deleteItemAsync,
  getItemAsync,
  setItemAsync,
} from 'expo-secure-store';

describe('deleteItemAsync', () => {
  it('should passes when used properly', () => {
    deleteItemAsync('KEY').then(result => {
      (result: void);

      // $FlowExpectedError: check any
      (result: number);
    });
    deleteItemAsync('KEY', {});
    deleteItemAsync('KEY', { keychainService: 'kService' });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    deleteItemAsync();
    // $FlowExpectedError: first argument must be a number
    deleteItemAsync(69);
    // $FlowExpectedError: second argument must be an object
    deleteItemAsync('', 69);
  });
});

describe('getItemAsync', () => {
  it('should passes when used properly', () => {
    getItemAsync('KEY').then(result => {
      if (result !== null) {
        (result: string);
      } else {
        (result: null);
      }

      // $FlowExpectedError: check any
      (result: number);
    });
    getItemAsync('KEY', {});
    getItemAsync('KEY', { keychainService: 'kService' });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    getItemAsync();
    // $FlowExpectedError: first argument must be a number
    getItemAsync(69);
    // $FlowExpectedError: second argument must be an object
    getItemAsync('', 69);
  });
});

describe('setItemAsync', () => {
  it('should passes when used properly', () => {
    setItemAsync('KEY', 'VALUE').then(result => {
      (result: void);

      // $FlowExpectedError: check any
      (result: number);
    });
    setItemAsync('KEY', 'VALUE', {});
    setItemAsync('KEY', 'VALUE', { keychainService: 'kService' });
    setItemAsync('KEY', 'VALUE', {
      keychainService: 'kService',
      keychainAccessible: AFTER_FIRST_UNLOCK,
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    setItemAsync();
    // $FlowExpectedError: first argument must be a number
    setItemAsync(69);
    // $FlowExpectedError: second argument is required
    setItemAsync('KEY');
    // $FlowExpectedError: second argument is must be a string
    setItemAsync('KEY', 69);
    // $FlowExpectedError: third argument is must be an object
    setItemAsync('KEY', 69);

    setItemAsync('KEY', 'VALUE', {
      // $FlowExpectedError: invalid value
      keychainAccessible: 1,
    });
  });
});

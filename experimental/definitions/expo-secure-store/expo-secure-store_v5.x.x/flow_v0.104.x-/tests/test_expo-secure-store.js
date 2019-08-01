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

      // $ExpectError: check any
      (result: number);
    });
    deleteItemAsync('KEY', {});
    deleteItemAsync('KEY', { keychainService: 'kService' });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    deleteItemAsync();
    // $ExpectError: first argument must be a number
    deleteItemAsync(69);
    // $ExpectError: second argument must be an object
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

      // $ExpectError: check any
      (result: number);
    });
    getItemAsync('KEY', {});
    getItemAsync('KEY', { keychainService: 'kService' });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    getItemAsync();
    // $ExpectError: first argument must be a number
    getItemAsync(69);
    // $ExpectError: second argument must be an object
    getItemAsync('', 69);
  });
});

describe('setItemAsync', () => {
  it('should passes when used properly', () => {
    setItemAsync('KEY', 'VALUE').then(result => {
      (result: void);

      // $ExpectError: check any
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
    // $ExpectError: first argument is required
    setItemAsync();
    // $ExpectError: first argument must be a number
    setItemAsync(69);
    // $ExpectError: second argument is required
    setItemAsync('KEY');
    // $ExpectError: second argument is must be a string
    setItemAsync('KEY', 69);
    // $ExpectError: third argument is must be an object
    setItemAsync('KEY', 69);

    setItemAsync('KEY', 'VALUE', {
      // $ExpectError: invalid value
      keychainAccessible: 1,
    });
  });
});

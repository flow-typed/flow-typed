// @flow
import { it, describe } from 'flow-typed-test';

import {
  CAMERA,
  CAMERA_ROLL,
  AUDIO_RECORDING,
  LOCATION,
  USER_FACING_NOTIFICATIONS,
  NOTIFICATIONS,
  CONTACTS,
  CALENDAR,
  REMINDERS,
  SYSTEM_BRIGHTNESS,
  getAsync,
  askAsync,
} from 'expo-permissions';

describe('askAsync', () => {
  it('should passes when used properly', () => {
    askAsync(CAMERA);
    askAsync(
      CAMERA,
      CAMERA_ROLL,
      AUDIO_RECORDING,
      LOCATION,
      USER_FACING_NOTIFICATIONS,
      NOTIFICATIONS,
      CONTACTS,
      CALENDAR,
      REMINDERS,
      SYSTEM_BRIGHTNESS
    );

    askAsync().then(result => {
      // $ExpectError: check any
      (result: number);

      (result.status: 'undetermined' | 'granted' | 'denied');
      (result.expires: 'never' | number);
      (result.permissions: {});
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: invalid argument
    askAsync(69);
  });
});

describe('getAsync', () => {
  it('should passes when used properly', () => {
    getAsync(CAMERA);
    getAsync(
      CAMERA,
      CAMERA_ROLL,
      AUDIO_RECORDING,
      LOCATION,
      USER_FACING_NOTIFICATIONS,
      NOTIFICATIONS,
      CONTACTS,
      CALENDAR,
      REMINDERS,
      SYSTEM_BRIGHTNESS
    );

    getAsync().then(result => {
      // $ExpectError: check any
      (result: number);

      (result.status: 'undetermined' | 'granted' | 'denied');
      (result.expires: 'never' | number);
      (result.permissions: {});
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: invalid argument
    getAsync(69);
  });
});

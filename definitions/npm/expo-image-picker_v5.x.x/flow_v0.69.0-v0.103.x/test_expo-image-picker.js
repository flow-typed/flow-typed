// @flow
import { it, describe } from 'flow-typed-test';

import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker';

describe('launchImageLibraryAsync', () => {
  it('should passes when used properly', () => {
    launchImageLibraryAsync();
    launchImageLibraryAsync({});
    launchImageLibraryAsync({
      mediaTypes: 'Videos',
      allowsEditing: false,
      aspect: [3, 4],
      quality: 1,
      base64: false,
      exif: false,
    });

    launchImageLibraryAsync().then(result => {
      (result.cancelled: boolean);

      // $FlowExpectedError: check any
      (result.cancelled: number);

      if (result.cancelled) {
        (result.cancelled: boolean);
      } else {
        (result.uri: string);
        (result.width: number);
        (result.height: number);
        if (result.type) {
          (result.type: 'image' | 'video');
        }
      }
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument must be an object
    launchImageLibraryAsync(69);

    launchImageLibraryAsync({
      // $FlowExpectedError: `Videos__` is missing in emun
      mediaTypes: 'Videos__',
      // $FlowExpectedError
      allowsEditing: 'need boolean',
      aspect: [
        3,
        // $FlowExpectedError
        'need number',
      ],
      // $FlowExpectedError
      quality: 'need number',
      // $FlowExpectedError
      base64: 'need boolean',
      // $FlowExpectedError
      exif: 'need boolean',
    });
  });
});

describe('launchCameraAsync', () => {
  it('should passes when used properly', () => {
    launchCameraAsync();
    launchCameraAsync({});
    launchCameraAsync({
      mediaTypes: 'Videos',
      allowsEditing: false,
      aspect: [3, 4],
      quality: 1,
      base64: false,
      exif: false,
    });

    launchCameraAsync().then(result => {
      (result.cancelled: boolean);

      // $FlowExpectedError: check any
      (result.cancelled: number);

      if (result.cancelled) {
        (result.cancelled: boolean);
      } else {
        (result.uri: string);
        (result.width: number);
        (result.height: number);
      }
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument must be an object
    launchCameraAsync(69);

    launchCameraAsync({
      // $FlowExpectedError: `Videos__` is missing in emun
      mediaTypes: 'Videos__',
      // $FlowExpectedError
      allowsEditing: 'need boolean',
      aspect: [
        3,
        // $FlowExpectedError
        'need number',
      ],
      // $FlowExpectedError
      quality: 'need number',
      // $FlowExpectedError
      base64: 'need boolean',
      // $FlowExpectedError
      exif: 'need boolean',
    });
  });
});

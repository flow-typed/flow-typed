// @flow
import { it, describe } from 'flow-typed-test';

import { Asset } from 'react-native-unimodules';

describe('static methods', () => {
  describe('loadAsync', () => {
    it('should passes when used properly', () => {
      Asset.loadAsync(1);
      Asset.loadAsync([1, 2]);
    });

    it('should raise an error when call with invalid argument', () => {
      // $ExpectError: first argument must be number or array if numbers
      Asset.loadAsync('');

      Asset.loadAsync([
        1,
        // $ExpectError: must be number
        '',
      ]);
    });
  });

  describe('fromURI', () => {
    it('should passes when used properly', () => {
      Asset.fromURI('uri').downloadAsync();
    });

    it('should raise an error when call with invalid argument', () => {
      // $ExpectError: first argument must be a string
      Asset.fromURI(1);
    });
  });

  describe('fromModule', () => {
    it('should passes when used properly', () => {
      Asset.fromModule('uri').downloadAsync();
      Asset.fromModule(1).downloadAsync();
    });

    it('should raise an error when call with invalid argument', () => {
      // $ExpectError: first argument must be a string or a number
      Asset.fromModule(true);
    });
  });

  describe('fromMetadata', () => {
    it('should passes when used properly', () => {
      const requiredMeta = {
        hash: 'str',
        name: 'str',
        type: 'str',
        scales: [1, 2],
        httpServerLocation: 'str',
      };
      Asset.fromMetadata(requiredMeta).downloadAsync();

      Asset.fromMetadata({
        width: 1,
        height: 1,
        uri: 'str',
        fileHashes: ['str'],
        fileUris: ['str'],
        ...requiredMeta,
      }).downloadAsync();

      Asset.fromMetadata({
        width: undefined,
        height: undefined,
        uri: undefined,
        fileHashes: undefined,
        fileUris: undefined,
        ...requiredMeta,
      }).downloadAsync();
    });

    it('should raise an error when call with invalid argument', () => {
      // $ExpectError: first argument must be an object
      Asset.fromMetadata(true);
      // $ExpectError: missing required props
      Asset.fromMetadata({});
    });
  });
});

describe('class properties', () => {
  const requiredAssetOptions = {
    name: 'str',
    type: 'str',
    uri: 'str',
  };

  it('should passes when used properly', () => {
    const a = new Asset(requiredAssetOptions);
    const b = new Asset({
      hash: 'string',
      width: 1,
      height: 1,
      ...requiredAssetOptions,
    });
    const c = new Asset({
      hash: null,
      width: null,
      height: null,
      ...requiredAssetOptions,
    });
  });
});

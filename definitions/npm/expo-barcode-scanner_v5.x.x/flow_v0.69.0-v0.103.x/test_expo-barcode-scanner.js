// @flow
import React from 'react';
import { it, describe } from 'flow-typed-test';

import { BarCodeScanner, type BarCodeTypeValues } from 'expo-barcode-scanner';

const { Constants } = BarCodeScanner;

const requiredProps = { onBarCodeScanned: () => {} };

describe('opaque props', () => {
  it('should passes when used properly', () => {
    <BarCodeScanner
      {...requiredProps}
      type={Constants.Type.front}
      barCodeTypes={[Constants.BarCodeType.qr]}
    />;
  });

  it('should passes when check the platform dependent BarCodeType', () => {
    // iOS
    if (Constants.BarCodeType.code138) {
      <BarCodeScanner
        {...requiredProps}
        barCodeTypes={[Constants.BarCodeType.code138]}
      />;
    }

    // Android
    if (Constants.BarCodeType.rss14) {
      <BarCodeScanner
        {...requiredProps}
        barCodeTypes={[Constants.BarCodeType.rss14]}
      />;
    }
  });

  it('should raises an error when pass the platform dependent BarCodeType', () => {
    <BarCodeScanner
      {...requiredProps}
      // $FlowExpectedError: code138 is iOS only code type, on Android is would be undefined
      barCodeTypes={[Constants.BarCodeType.code138]}
    />;
  });

  it('should raises an error when pass not supported type', () => {
    <BarCodeScanner
      {...requiredProps}
      // $FlowExpectedError
      type={0}
      // $FlowExpectedError
      barCodeTypes={[0]}
    />;
  });
});

describe('other props', () => {
  it('should passes when used properly', () => {
    <BarCodeScanner
      onBarCodeScanned={async ({ data, type }) => {
        (data: string);
        (type: BarCodeTypeValues);

        // $FlowExpectedError: check any
        (type: boolean);
        // $FlowExpectedError: check any
        (data: boolean);
      }}
    />;

    <BarCodeScanner onBarCodeScanned={() => {}} />;
  });

  it('should raises an error when pass not supported type', () => {
    <BarCodeScanner
      // $FlowExpectedError
      onBarCodeScanned={'need function'}
    />;
  });
});

describe('static methods', () => {
  describe('scanFromURLAsync()', () => {
    it('should pass when call with one argument', () => {
      BarCodeScanner.scanFromURLAsync('url');
    });

    it('should pass when call with valid array of BarCodeType', () => {
      BarCodeScanner.scanFromURLAsync('url', [
        Constants.BarCodeType.qr,
        Constants.BarCodeType.aztec,
      ]);
    });

    it('should raises an error when call with invalid args', () => {
      // $FlowExpectedError: first argument is required
      BarCodeScanner.scanFromURLAsync();

      // $FlowExpectedError: first argument must be a string
      BarCodeScanner.scanFromURLAsync(123);

      // $FlowExpectedError: second argument must be an array
      BarCodeScanner.scanFromURLAsync('url', 123);

      BarCodeScanner.scanFromURLAsync('url', [
        // $FlowExpectedError: invalid barcode type
        123,
      ]);
    });
  });
});

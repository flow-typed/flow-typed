// @flow
import { it, describe } from 'flow-typed-test';

import Constants from 'expo-constants';

describe('NativeConstants', () => {
  describe('platform', () => {
    describe('Android', () => {
      it('should have versionCode prop', () => {
        if (Constants.platform && Constants.platform.android) {
          (Constants.platform.android.versionCode: number);

          // $ExpectError: check any
          (Constants.platform.android.versionCode: boolean);
        }
      });
    });

    describe('iOS', () => {
      it('should have specific ios props', () => {
        if (Constants.platform && Constants.platform.ios) {
          (Constants.platform.ios.buildNumber: string);
          (Constants.platform.ios.platform: string);
          (Constants.platform.ios.model: string);
          (Constants.platform.ios.userInterfaceIdiom:
            | 'handset'
            | 'tablet'
            | 'unsupported');
          (Constants.platform.ios.systemVersion: string);
        }
      });
      it('should raise an error when lead to an incompatible type', () => {
        if (Constants.platform && Constants.platform.ios) {
          // $ExpectError
          (Constants.platform.ios.buildNumber: number);
          // $ExpectError
          (Constants.platform.ios.platform: number);
          // $ExpectError
          (Constants.platform.ios.model: number);
          // $ExpectError
          (Constants.platform.ios.userInterfaceIdiom: number);
          // $ExpectError
          (Constants.platform.ios.systemVersion: number);
        }
      });
    });
  });

  describe('getWebViewUserAgentAsync method', () => {
    it('should passes when used properly', () => {
      Constants.getWebViewUserAgentAsync().then(ua => {
        if (ua !== null) {
          (ua: string);

          // $ExpectError: check any
          (ua: number);
        } else {
          (ua: null);
        }
      });
    });
  });

  describe('props with primitive types', () => {
    it('should passes when used properly', () => {
      (Constants.debugMode: boolean);
      (Constants.deviceName: ?string);
      (Constants.deviceYearClass: number | null);
      (Constants.experienceUrl: string);
      (Constants.expoRuntimeVersion: string);
      (Constants.expoVersion: string);
      (Constants.isDetached: ?boolean);
      (Constants.intentUri: ?string);
      (Constants.installationId: string);
      (Constants.isDevice: boolean);
      (Constants.isHeadless: boolean);
      (Constants.linkingUri: string);
      (Constants.sessionId: string);
      (Constants.statusBarHeight: number);
      (Constants.systemVersion: ?number);
      (Constants.systemFonts: Array<string>);
    });

    it('should raise an error when lead to an incompatible type', () => {
      // $ExpectError
      (Constants.debugMode: 'ups...');
      // $ExpectError
      (Constants.deviceName: 'ups...');
      // $ExpectError
      (Constants.deviceYearClass: 'ups...');
      // $ExpectError
      (Constants.experienceUrl: 'ups...');
      // $ExpectError
      (Constants.expoRuntimeVersion: 'ups...');
      // $ExpectError
      (Constants.expoVersion: 'ups...');
      // $ExpectError
      (Constants.isDetached: 'ups...');
      // $ExpectError
      (Constants.intentUri: 'ups...');
      // $ExpectError
      (Constants.installationId: 'ups...');
      // $ExpectError
      (Constants.isDevice: 'ups...');
      // $ExpectError
      (Constants.isHeadless: 'ups...');
      // $ExpectError
      (Constants.linkingUri: 'ups...');
      // $ExpectError
      (Constants.sessionId: 'ups...');
      // $ExpectError
      (Constants.statusBarHeight: 'ups...');
      // $ExpectError
      (Constants.systemVersion: 'ups...');
      // $ExpectError
      (Constants.systemFonts: 'ups...');
    });
  });
});

describe('Constants', () => {
  it('should have other props', () => {
    (Constants.deviceId: ?string);
    (Constants.linkingUrl: ?string);
  });

  it('should raise an error when lead to an incompatible type', () => {
    // $ExpectError
    (Constants.deviceId: boolean);
    // $ExpectError
    (Constants.linkingUrl: boolean);
  });
});

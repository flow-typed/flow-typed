// @flow
import { it, describe } from 'flow-typed-test';

import { Constants } from 'react-native-unimodules';

describe('NativeConstants', () => {
  describe('platform', () => {
    describe('Android', () => {
      it('should have versionCode prop', () => {
        if (Constants.platform && Constants.platform.android) {
          (Constants.platform.android.versionCode: number);

          // $FlowExpectedError: check any
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
          // $FlowExpectedError
          (Constants.platform.ios.buildNumber: number);
          // $FlowExpectedError
          (Constants.platform.ios.platform: number);
          // $FlowExpectedError
          (Constants.platform.ios.model: number);
          // $FlowExpectedError
          (Constants.platform.ios.userInterfaceIdiom: number);
          // $FlowExpectedError
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

          // $FlowExpectedError: check any
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
      // $FlowExpectedError
      (Constants.debugMode: 'ups...');
      // $FlowExpectedError
      (Constants.deviceName: 'ups...');
      // $FlowExpectedError
      (Constants.deviceYearClass: 'ups...');
      // $FlowExpectedError
      (Constants.experienceUrl: 'ups...');
      // $FlowExpectedError
      (Constants.expoRuntimeVersion: 'ups...');
      // $FlowExpectedError
      (Constants.expoVersion: 'ups...');
      // $FlowExpectedError
      (Constants.isDetached: 'ups...');
      // $FlowExpectedError
      (Constants.intentUri: 'ups...');
      // $FlowExpectedError
      (Constants.installationId: 'ups...');
      // $FlowExpectedError
      (Constants.isDevice: 'ups...');
      // $FlowExpectedError
      (Constants.isHeadless: 'ups...');
      // $FlowExpectedError
      (Constants.linkingUri: 'ups...');
      // $FlowExpectedError
      (Constants.sessionId: 'ups...');
      // $FlowExpectedError
      (Constants.statusBarHeight: 'ups...');
      // $FlowExpectedError
      (Constants.systemVersion: 'ups...');
      // $FlowExpectedError
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
    // $FlowExpectedError
    (Constants.deviceId: boolean);
    // $FlowExpectedError
    (Constants.linkingUrl: boolean);
  });
});

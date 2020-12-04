// @flow
import { describe, it } from 'flow-typed-test';
import * as React from 'react';
import WebView, { type NavigationType } from 'react-native-webview';

describe('WebView methods', () => {
  const instanceWebView = new WebView({});

  it('should passes when use properly', () => {
    WebView.extraNativeComponentConfig();

    (instanceWebView.goBack(): void);
    (instanceWebView.goForward(): void);
    (instanceWebView.reload(): void);
    (instanceWebView.stopLoading(): void);
    (instanceWebView.injectJavaScript('alert(1);'): void);
  });

  it('should raises an error when call injectJavaScript without arguments', () => {
    // $FlowExpectedError: first argument is required
    instanceWebView.injectJavaScript();
  });

  it('should raises an error when call injectJavaScript with not string', () => {
    // $FlowExpectedError: first argument must be string
    instanceWebView.injectJavaScript(11);
  });
});

describe('WebView props', () => {
  describe('source', () => {
    it('should passes when use properly', () => {
      <WebView source={{ uri: '' }} />;
      <WebView source={{ html: '' }} />;
      <WebView source={{ uri: '', headers: { a: 'a' } }} />;
    });

    it('should raises an error when use an invalid type for options props', () => {
      // $FlowExpectedError: `uri` must be string
      <WebView source={{ uri: 1, headers: [] }} />;
      // $FlowExpectedError: `html` must be string
      <WebView source={{ html: 1 }} />;
      // $FlowExpectedError: `headers` must be object
      <WebView source={{ uri: '', headers: [] }} />;
    });
  });

  describe('events', () => {
    it('should passes when use properly', () => {
      <WebView
        onScroll={event => {
          (event.zoomScale: number);

          // $FlowExpectedError: check any type
          (event.zoomScale: boolean);
        }}
        onLoad={event => {
          (event.nativeEvent.navigationType: NavigationType);
        }}
        onLoadEnd={event => {
          (event.nativeEvent.url: string);
        }}
        onLoadStart={event => {
          (event.nativeEvent.navigationType: NavigationType);
        }}
        onError={event => {
          (event.nativeEvent.code: number);
          (event.nativeEvent.description: string);
        }}
        onNavigationStateChange={event => {
          (event.navigationType: NavigationType);
        }}
        onMessage={event => {
          (event.nativeEvent.data: string);
        }}
        onLoadProgress={event => {
          (event.nativeEvent.progress: number);
        }}
      />;
    });

    it('should passes when use async event handler', () => {
      <WebView
        onScroll={async e => {}}
        onLoad={async e => {}}
        onLoadEnd={async e => {}}
        onLoadStart={async e => {}}
        onError={async e => {}}
        onNavigationStateChange={async e => {}}
        onMessage={async e => {}}
        onLoadProgress={async e => {}}
      />;
    });

    it('should raises an error when you try write to event', () => {
      <WebView
        onLoad={event => {
          // $FlowExpectedError: readonly
          event.nativeEvent.title = '';
          // $FlowExpectedError: readonly
          event.nativeEvent = {};
        }}
      />;
    });
  });

  describe('Android props', () => {
    it('should passes when use properly', () => {
      <WebView
        allowsFullscreenVideo={false}
        overScrollMode={'content'}
        geolocationEnabled={false}
        allowUniversalAccessFromFileURLs={false}
        allowFileAccess={false}
        saveFormDataDisabled={false}
        urlPrefixesForDefaultIntent={['str']}
        javaScriptEnabled={false}
        androidHardwareAccelerationDisabled={false}
        thirdPartyCookiesEnabled={false}
        domStorageEnabled={false}
        mixedContentMode={'compatibility'}
        textZoom={1}
      />;
    });

    it('should raise an error when passing incompatible types', () => {
      <WebView
        // $FlowExpectedError
        allowsFullscreenVideo={'need boolean'}
        // $FlowExpectedError: `__content` missing in enum
        overScrollMode={'__content'}
        // $FlowExpectedError
        geolocationEnabled={'need boolean'}
        // $FlowExpectedError
        allowUniversalAccessFromFileURLs={'need boolean'}
        // $FlowExpectedError
        allowFileAccess={'need boolean'}
        // $FlowExpectedError
        saveFormDataDisabled={'need boolean'}
        // $FlowExpectedError: need array of strings
        urlPrefixesForDefaultIntent={[1]}
        // $FlowExpectedError
        javaScriptEnabled={'need boolean'}
        // $FlowExpectedError
        androidHardwareAccelerationDisabled={'need boolean'}
        // $FlowExpectedError
        thirdPartyCookiesEnabled={'need boolean'}
        // $FlowExpectedError
        domStorageEnabled={'need boolean'}
        // $FlowExpectedError
        textZoom={'need number'}
        // $FlowExpectedError: `__compatibility` missing in enum
        mixedContentMode={'__compatibility'}
      />;
    });
  });

  describe('iOS props', () => {
    it('should passes when use properly', () => {
      <WebView
        useWebKit={false}
        incognito={false}
        bounces={false}
        decelerationRate={1}
        scrollEnabled={false}
        pagingEnabled={false}
        automaticallyAdjustContentInsets={false}
        contentInset={{ top: 1 }}
        dataDetectorTypes={'phoneNumber'}
        allowsInlineMediaPlayback={false}
        hideKeyboardAccessoryView={false}
        allowsBackForwardNavigationGestures={false}
        useSharedProcessPool={false}
        allowsLinkPreview={false}
        sharedCookiesEnabled={false}
        directionalLockEnabled={false}
        keyboardDisplayRequiresUserAction={false}
      />;

      <WebView
        decelerationRate={'fast'}
        dataDetectorTypes={['phoneNumber', 'calendarEvent']}
      />;
    });

    it('should raise an error when passing incompatible types', () => {
      <WebView
        // $FlowExpectedError
        useWebKit={'need boolean'}
        // $FlowExpectedError
        incognito={'need boolean'}
        // $FlowExpectedError
        bounces={'need boolean'}
        // $FlowExpectedError: need number or value from enum
        decelerationRate={false}
        // $FlowExpectedError
        scrollEnabled={'need boolean'}
        // $FlowExpectedError
        pagingEnabled={'need boolean'}
        // $FlowExpectedError
        automaticallyAdjustContentInsets={'need boolean'}
        // $FlowExpectedError: need object
        contentInset={false}
        // $FlowExpectedError: `__phoneNumber` missing in enum
        dataDetectorTypes={'__phoneNumber'}
        // $FlowExpectedError
        allowsInlineMediaPlayback={'need boolean'}
        // $FlowExpectedError
        hideKeyboardAccessoryView={'need boolean'}
        // $FlowExpectedError
        allowsBackForwardNavigationGestures={'need boolean'}
        // $FlowExpectedError
        useSharedProcessPool={'need boolean'}
        // $FlowExpectedError
        allowsLinkPreview={'need boolean'}
        // $FlowExpectedError
        sharedCookiesEnabled={'need boolean'}
        // $FlowExpectedError
        directionalLockEnabled={'need boolean'}
        // $FlowExpectedError
        keyboardDisplayRequiresUserAction={'need boolean'}
      />;
    });
  });
});

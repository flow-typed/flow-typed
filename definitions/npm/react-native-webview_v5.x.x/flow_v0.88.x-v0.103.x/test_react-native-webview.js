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
    // $ExpectError: first argument is required
    instanceWebView.injectJavaScript();
  });

  it('should raises an error when call injectJavaScript with not string', () => {
    // $ExpectError: first argument must be string
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
      // $ExpectError: `uri` must be string
      <WebView source={{ uri: 1, headers: [] }} />;
      // $ExpectError: `html` must be string
      <WebView source={{ html: 1 }} />;
      // $ExpectError: `headers` must be object
      <WebView source={{ uri: '', headers: [] }} />;
    });
  });

  describe('events', () => {
    it('should passes when use properly', () => {
      <WebView
        onScroll={event => {
          (event.zoomScale: number);

          // $ExpectError: check any type
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
          // $ExpectError: readonly
          event.nativeEvent.title = '';
          // $ExpectError: readonly
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
        textZoom={1}
        mixedContentMode={'compatibility'}
      />;
    });

    it('should raise an error when passing incompatible types', () => {
      <WebView
        // $ExpectError
        allowsFullscreenVideo={'need boolean'}
        // $ExpectError: `__content` missing in enum
        overScrollMode={'__content'}
        // $ExpectError
        geolocationEnabled={'need boolean'}
        // $ExpectError
        allowUniversalAccessFromFileURLs={'need boolean'}
        // $ExpectError
        allowFileAccess={'need boolean'}
        // $ExpectError
        saveFormDataDisabled={'need boolean'}
        // $ExpectError: need array of strings
        urlPrefixesForDefaultIntent={[1]}
        // $ExpectError
        javaScriptEnabled={'need boolean'}
        // $ExpectError
        androidHardwareAccelerationDisabled={'need boolean'}
        // $ExpectError
        thirdPartyCookiesEnabled={'need boolean'}
        // $ExpectError
        domStorageEnabled={'need boolean'}
        // $ExpectError
        textZoom={'need number'}
        // $ExpectError: `__compatibility` missing in enum
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
        // $ExpectError
        useWebKit={'need boolean'}
        // $ExpectError
        incognito={'need boolean'}
        // $ExpectError
        bounces={'need boolean'}
        // $ExpectError: need number or value from enum
        decelerationRate={false}
        // $ExpectError
        scrollEnabled={'need boolean'}
        // $ExpectError
        pagingEnabled={'need boolean'}
        // $ExpectError
        automaticallyAdjustContentInsets={'need boolean'}
        // $ExpectError: need object
        contentInset={false}
        // $ExpectError: `__phoneNumber` missing in enum
        dataDetectorTypes={'__phoneNumber'}
        // $ExpectError
        allowsInlineMediaPlayback={'need boolean'}
        // $ExpectError
        hideKeyboardAccessoryView={'need boolean'}
        // $ExpectError
        allowsBackForwardNavigationGestures={'need boolean'}
        // $ExpectError
        useSharedProcessPool={'need boolean'}
        // $ExpectError
        allowsLinkPreview={'need boolean'}
        // $ExpectError
        sharedCookiesEnabled={'need boolean'}
        // $ExpectError
        directionalLockEnabled={'need boolean'}
        // $ExpectError
        keyboardDisplayRequiresUserAction={'need boolean'}
      />;
    });
  });
});

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
});

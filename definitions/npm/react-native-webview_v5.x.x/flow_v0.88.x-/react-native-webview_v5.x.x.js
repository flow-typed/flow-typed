/*
 * The next module declaration need to show which types was copy from `react-native`
 */
declare module 'react-native-webview/@@react-native' {
  declare export type NativeScrollRectangle = {
    left: number,
    top: number,
    bottom: number,
    right: number,
    ...
  };

  declare export type NativeScrollPoint = {
    x: number,
    y: number,
    ...
  };

  declare export type NativeScrollVelocity = {
    x: number,
    y: number,
    ...
  };

  declare export type NativeScrollSize = {
    height: number,
    width: number,
    ...
  };

  declare export type NativeScrollEvent = {
    contentInset: NativeScrollRectangle,
    contentOffset: NativeScrollPoint,
    contentSize: NativeScrollSize,
    layoutMeasurement: NativeScrollSize,
    velocity?: NativeScrollVelocity,
    zoomScale: number,
    ...
  };

  declare export type NativeSyntheticEvent<T> = { +nativeEvent: T, ... };
}

declare module 'react-native-webview' {
  import type {
    NativeScrollEvent,
    NativeSyntheticEvent,
  } from 'react-native-webview/@@react-native';

  declare export type MixedContentMode = 'never' | 'always' | 'compatibility';
  declare export type DecelerationRateConstant = 'normal' | 'fast';
  declare export type OverScrollModeType = 'always' | 'content' | 'never';
  declare export type NavigationType =
    | 'click'
    | 'formsubmit'
    | 'backforward'
    | 'reload'
    | 'formresubmit'
    | 'other';
  declare export type DataDetectorTypes =
    | 'phoneNumber'
    | 'link'
    | 'address'
    | 'calendarEvent'
    | 'trackingNumber'
    | 'flightNumber'
    | 'lookupSuggestion'
    | 'none'
    | 'all';

  declare export type WebViewNativeEvent = $ReadOnly<{|
    url: string,
    loading: boolean,
    title: string,
    canGoBack: boolean,
    canGoForward: boolean,
    lockIdentifier: number,
  |}>;

  declare export type WebViewNavigation = $ReadOnly<{|
    ...WebViewNativeEvent,
    navigationType: NavigationType,
  |}>;

  declare export type WebViewNativeProgressEvent = $ReadOnly<{|
    ...WebViewNativeEvent,
    progress: number,
  |}>;

  declare export type WebViewMessage = $ReadOnly<{|
    ...WebViewNativeEvent,
    data: string,
  |}>;

  declare export type WebViewError = $ReadOnly<{|
    ...WebViewNativeEvent,
    domain?: string,
    code: number,
    description: string,
  |}>;

  declare export type ContentInsetProp = {|
    top?: number,
    left?: number,
    bottom?: number,
    right?: number,
  |};

  declare export type WebViewSourceUri = {|
    uri?: string,
    method?: string,
    headers?: { [string]: string, ... },
    body?: string,
  |};

  declare export type WebViewSourceHtml = {|
    html?: string,
    baseUrl?: string,
  |};

  declare export type WebViewSource = {|
    ...WebViewSourceUri,
    ...WebViewSourceHtml,
  |};

  declare export type WebViewNativeConfig = {|
    component?: React$ComponentType<WebViewSharedProps>,
    props?: {...},
    viewManager?: {...},
  |};

  declare export type WebViewEvent = NativeSyntheticEvent<WebViewNativeEvent>;
  declare export type WebViewNavigationEvent = NativeSyntheticEvent<WebViewNavigation>;
  declare export type WebViewMessageEvent = NativeSyntheticEvent<WebViewMessage>;
  declare export type WebViewErrorEvent = NativeSyntheticEvent<WebViewError>;
  declare export type WebViewProgressEvent = NativeSyntheticEvent<WebViewNativeProgressEvent>;
  declare export type OnShouldStartLoadWithRequest = (
    event: WebViewNavigation
  ) => boolean;

  declare export type IOSWebViewProps = {
    useWebKit?: boolean,
    incognito?: boolean,
    bounces?: boolean,
    decelerationRate?: DecelerationRateConstant | number,
    scrollEnabled?: boolean,
    pagingEnabled?: boolean,
    automaticallyAdjustContentInsets?: boolean,
    contentInset?: ContentInsetProp,
    dataDetectorTypes?: DataDetectorTypes | Array<DataDetectorTypes>,
    allowsInlineMediaPlayback?: boolean,
    hideKeyboardAccessoryView?: boolean,
    allowsBackForwardNavigationGestures?: boolean,
    useSharedProcessPool?: boolean,
    allowsLinkPreview?: boolean,
    sharedCookiesEnabled?: boolean,
    directionalLockEnabled?: boolean,
    keyboardDisplayRequiresUserAction?: boolean,
    ...
  } & WebViewSharedProps;

  declare export type AndroidWebViewProps = {
    onContentSizeChange?: WebViewEvent => mixed,
    overScrollMode?: OverScrollModeType,
    geolocationEnabled?: boolean,
    allowUniversalAccessFromFileURLs?: boolean,
    allowsFullscreenVideo?: boolean,
    allowFileAccess?: boolean,
    saveFormDataDisabled?: boolean,
    urlPrefixesForDefaultIntent?: Array<string>,
    javaScriptEnabled?: boolean,
    androidHardwareAccelerationDisabled?: boolean,
    thirdPartyCookiesEnabled?: boolean,
    domStorageEnabled?: boolean,
    textZoom?: number,
    mixedContentMode?: MixedContentMode,
    ...
  } & WebViewSharedProps;

  declare export type WebViewSharedProps = {
    source?: WebViewSource,
    renderError?: (
      errorDomain: ?string,
      errorCode: number,
      errorDesc: string
    ) => React$Element<any>,
    renderLoading?: () => React$Element<any>,
    onScroll?: NativeScrollEvent => mixed,
    onLoad?: WebViewNavigationEvent => mixed,
    onLoadEnd?: (WebViewNavigationEvent | WebViewErrorEvent) => mixed,
    onLoadStart?: WebViewNavigationEvent => mixed,
    onError?: WebViewErrorEvent => mixed,
    onNavigationStateChange?: WebViewNavigation => mixed,
    onMessage?: WebViewMessageEvent => mixed,
    onLoadProgress?: WebViewProgressEvent => mixed,
    startInLoadingState?: boolean,
    injectedJavaScript?: string,
    showsHorizontalScrollIndicator?: boolean,
    showsVerticalScrollIndicator?: boolean,
    scalesPageToFit?: boolean,
    mediaPlaybackRequiresUserAction?: boolean,
    originWhitelist?: Array<string>,
    onShouldStartLoadWithRequest?: OnShouldStartLoadWithRequest,
    nativeConfig?: WebViewNativeConfig,
    cacheEnabled?: boolean,
    userAgent?: string,
    ...
  };

  declare export type WebViewProps = IOSWebViewProps & AndroidWebViewProps;

  declare export class WebView extends React$Component<WebViewProps> {
    static extraNativeComponentConfig(): any;

    goBack(): void;
    goForward(): void;
    reload(): void;
    stopLoading(): void;
    injectJavaScript(script: string): void;
  }

  declare export default typeof WebView;
}

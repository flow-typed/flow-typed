declare module 'react-native-url-polyfill' {
  import typeof { URL as NativeURL, URLSearchParams as NativeURLSearchParams } from 'url';

  declare export var URL: NativeURL;

  declare export var URLSearchParams: NativeURLSearchParams;

  declare export function setupURLPolyfill(): void;
}

declare module 'react-native-url-polyfill/auto' {
  declare module.exports: void;
}

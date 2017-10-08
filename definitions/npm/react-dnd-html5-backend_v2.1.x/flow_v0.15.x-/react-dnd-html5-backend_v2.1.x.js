
declare type $npm$reactDnd$NativeTypes$FILE = '__NATIVE_FILE__';
declare type $npm$reactDnd$NativeTypes$URL = '__NATIVE_URL__';
declare type $npm$reactDnd$NativeTypes$TEXT = '__NATIVE_TEXT__';
declare type $npm$reactDnd$NativeTypes =
  $npm$reactDnd$NativeTypes$FILE
  | $npm$reactDnd$NativeTypes$URL
  | $npm$reactDnd$NativeTypes$TEXT

declare module 'react-dnd-html5-backend' {
  declare var exports: {
    getEmptyImage(): Image,
    NativeTypes: {
      FILE: $npm$reactDnd$NativeTypes$FILE,
      URL: $npm$reactDnd$NativeTypes$URL,
      TEXT: $npm$reactDnd$NativeTypes$TEXT,
    }
  };
}

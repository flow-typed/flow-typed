declare module 'matchmedia' {
  declare type TypeValue =
    | 'all'
    | 'aural'
    | 'braille'
    | 'embossed'
    | 'grid'
    | 'handheld'
    | 'print'
    | 'projection'
    | 'screen'
    | 'tty'
    | 'tv';
  declare type OrientationValue =
    | 'portait'
    | 'landscape';
  declare type ScanValue =
    | 'interlace'
    | 'progressive';
  declare type Values = {
    type?: TypeValue;
    'aspect-ratio'?: string;
    width?: string;
    height?: string;
    orientation?: OrientationValue;
    'device-width'?: string;
    'device-height'?: string;
    'device-aspect-ratio'?: string;
    color?: number | boolean;
    'color-index'?: number | boolean;
    monochrome?: number | boolean;
    resolution?: string;
    scan?: ScanValue;
    grid?: number | boolean;
  };

  declare type MediaQueryListListener = (list: MediaQueryList) => void;
  declare type MediaQueryList = {
    addListener(listener: MediaQueryListListener): void;
    removeListener(listener: MediaQueryListListener): void;
    matches: boolean;
    media: string;
  };

  declare function exports(
    query: string,
    values?: Values
  ): MediaQueryList;
}

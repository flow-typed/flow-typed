declare module 'react-responsive' {
  declare export type MediaQueryTypes = {|
    all?: boolean,
    grid?: boolean,
    aural?: boolean,
    braille?: boolean,
    handheld?: boolean,
    print?: boolean,
    projection?: boolean,
    screen?: boolean,
    tty?: boolean,
    tv?: boolean,
    embossed?: boolean,
  |};

  declare export type MediaQueryType = $Keys<MediaQueryTypes>;

  declare export type MediaQueryMatchers = {|
    aspectRatio?: string,
    deviceAspectRatio?: string,
    height?: number | string,
    deviceHeight?: number | string,
    width?: number | string,
    deviceWidth?: number | string,
    color?: boolean,
    colorIndex?: boolean,
    monochrome?: boolean,
    resolution?: number | string,
    orientation?: 'portrait' | 'landscape',
    scan?: 'progressive' | 'interlace',
    type?: MediaQueryType,
  |};

  declare export type MediaQueryFeatures = {|
    ...MediaQueryMatchers,
    minAspectRatio?: string,
    maxAspectRatio?: string,
    minDeviceAspectRatio?: string,
    maxDeviceAspectRatio?: string,
    minHeight?: number | string,
    maxHeight?: number | string,
    minDeviceHeight?: number | string,
    maxDeviceHeight?: number | string,
    minWidth?: number | string,
    maxWidth?: number | string,
    minDeviceWidth?: number | string,
    maxDeviceWidth?: number | string,
    minColor?: number,
    maxColor?: number,
    minColorIndex?: number,
    maxColorIndex?: number,
    minMonochrome?: number,
    maxMonochrome?: number,
    minResolution?: number | string,
    maxResolution?: number | string,
  |};

  declare export type MediaQueryAllQueryable = {|
    ...MediaQueryFeatures,
    ...MediaQueryTypes,
  |};

  declare export type MediaQuerySettings = {|
    ...MediaQueryAllQueryable,
    query?: string,
  |};

  declare export var useMediaQuery: (
    settings: MediaQuerySettings,
    device?: MediaQueryMatchers,
    onChange?: ((matches: boolean) => void),
  ) => boolean;

  declare export var toQuery: (obj: MediaQueryAllQueryable) => string;

  declare export var Context: React$Context<MediaQueryAllQueryable | void>;

  declare type MediaQuery = React$ComponentType<{|
    ...MediaQueryAllQueryable,
    component?: React$Node,
    children?: React$Node | ((matches: boolean) => React$Node),
    query?: string,
    style?: { ... },
    className?: string,
    device?: MediaQueryMatchers,
    values?: MediaQueryMatchers,
    onBeforeChange?: (matches: boolean) => void,
    onChange?: (matches: boolean) => void,
  |}>;

  declare export default MediaQuery;
}

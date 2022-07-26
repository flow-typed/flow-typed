declare module '@mapbox/mapbox-gl-supported' {
  declare type OptionsT = {|
    failIfMajorPerformanceCaveat: boolean,
  |};
  declare module.exports: {|
    supported: (options?: OptionsT) => boolean,
    notSupportedReason: (options?: OptionsT) => ?string,
  |};
}

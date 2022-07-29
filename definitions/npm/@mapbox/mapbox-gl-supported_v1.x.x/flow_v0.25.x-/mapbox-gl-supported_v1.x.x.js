declare module '@mapbox/mapbox-gl-supported' {
  declare type OptionsT = {|
    failIfMajorPerformanceCaveat: boolean,
  |};
  declare module.exports: (options?: OptionsT) => boolean;
}

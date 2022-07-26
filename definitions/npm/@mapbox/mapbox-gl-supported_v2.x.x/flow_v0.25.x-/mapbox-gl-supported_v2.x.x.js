declare module '@mapbox/mapbox-gl-supported' {
  declare type OptionsT = {
    failIfMajorPerformanceCaveat: boolean,
    ...
  };
  declare export function supported(options?: OptionsT): boolean;
  declare export function notSupportedReason(options?: OptionsT): ?string;
}

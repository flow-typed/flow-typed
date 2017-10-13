// @flow

type $npm$Turf$Distance$Point = {
  type: 'Point',
  coordinates: [number, number],
  bbox?: Array<number>,
  crs?: { type: string, properties: mixed }
};

type $npm$Turf$Distance$FeaturePoint = {
  type: 'Feature',
  geometry: $npm$Turf$Destination$Point,
  properties: ?{ [key: string]: ?mixed },
  bbox?: Array<number>,
  crs?: { type: string, properties: mixed }
};

declare module '@turf/distance' {
  declare var exports: (
    from: $npm$Turf$Distance$FeaturePoint,
    to: $npm$Turf$Distance$FeaturePoint,
    units?: 'miles' | 'meters' | 'kilometers' | 'degrees' | 'radians'
  ) => number;
}

// @flow

type $npm$Turf$Point$Point = {
  type: 'Point',
  coordinates: [number, number],
  bbox?: Array<number>,
  crs?: { type: string, properties: mixed }
};

type $npm$Turf$Destination$FeaturePoint<Properties: Object> = {
  type: 'Feature',
  geometry: $npm$Turf$Point$Point,
  properties: ?{ [key: string]: ?Properties },
  bbox?: Array<number>,
  crs?: { type: string, properties: mixed }
};

declare module 'turf-point' {
  declare var exports: <Properties: Object>(
    coordinates: [number, number],
    properties?: Properties
  ) => $npm$Turf$Destination$FeaturePoint<Properties>;
}

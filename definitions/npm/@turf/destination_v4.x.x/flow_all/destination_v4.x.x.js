// @flow

type $npm$Turf$Destination$Point = {
  type: 'Point',
  coordinates: [number, number],
  bbox?: Array<number>,
  crs?: { type: string, properties: mixed }
};

type $npm$Turf$Destination$FeaturePoint = {
  type: 'Feature',
  geometry: $npm$Turf$Destination$Point,
  properties: ?{ [key: string]: ?mixed },
  bbox?: Array<number>,
  crs?: { type: string, properties: mixed }
};

declare module '@turf/destination' {
  declare var exports: (
    point: $npm$Turf$Destination$FeaturePoint,
    radius: number,
    resolution: number,
    units: 'miles' | 'meters' | 'kilometers' | 'degrees' | 'radians'
  ) => $npm$Turf$Destination$FeaturePoint;
}

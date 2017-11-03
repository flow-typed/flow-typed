// @flow

type $npm$turfPolygon$LineRing = Array<[number, number]>;

type $npm$turfPolygon$Polygon = {
  type: 'Polygon',
  coordinates: Array<$npm$turfPolygon$LineRing>,
  bbox?: Array<number>,
  crs?: { type: string, properties: mixed }
};

type $npm$turfPolygon$FeaturePolygon<Properties: Object> = {
  type: 'Feature',
  geometry: $npm$turfPolygon$Polygon,
  properties: ?{ [key: string]: ?Properties },
  bbox?: Array<number>,
  crs?: { type: string, properties: mixed }
};

declare module 'turf-polygon' {
  declare var exports: <Properties: Object>(
    Array<Array<[number, number]>>,
    properties?: Properties
  ) => $npm$turfPolygon$FeaturePolygon;
}

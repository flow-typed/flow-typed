/* @flow */

declare module "latlon-geohash" {
  declare type GeoPoint = {
    lat: number,
    lon: number
  };
  declare type GeoBounds = {
    ne: GeoPoint,
    sw: GeoPoint
  };
  declare type GeoDirection = "N" | "S" | "E" | "W" | "n" | "s" | "e" | "w";
  declare type GeoHashNeighbours = {
    n: string,
    ne: string,
    e: string,
    se: string,
    s: string,
    sw: string,
    w: string,
    nw: string
  };

  declare module.exports: {
    adjacent: (geohash: string, direction: GeoDirection) => string,
    bounds: (geohash: string) => GeoBounds,
    decode: (geohash: string) => GeoPoint,
    encode: (lat: number, lon: number, precision?: number) => string,
    neighbours: (geohash: string) => GeoHashNeighbours
  };
}

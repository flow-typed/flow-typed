/* @flow */

import Geohash from "latlon-geohash";

const validGeohash: string = "stq4s2xh1tf57j1n2";

const adjResGeohashUpperCase: string = Geohash.adjacent(validGeohash, "N");
const adjResGeohashLowerCase: string = Geohash.adjacent(validGeohash, "n");
const {
  ne: { lat: neLat, lon: neLon },
  sw: { lat: swLat, lon: swLon }
} = Geohash.bounds(validGeohash);
const point: { lat: number, lon: number } = Geohash.decode(validGeohash);
const resGeohash: string = Geohash.encode(0, 0, 12);
const resGeohashOptional: string = Geohash.encode(0, 0);
const {
  n: nNbr,
  ne: neNbr,
  e: eNbr,
  se: seNbr,
  s: sNbr,
  sw: swNbr,
  w: wNbr,
  nw: nwNbr
}: {
  n: string,
  ne: string,
  e: string,
  se: string,
  s: string,
  sw: string,
  w: string,
  nw: string
} = Geohash.neighbours(validGeohash);

let dummyString: string = "dummy";
let dummyPoint: { lat: number, lon: number } = { lat: 0, lon: 0 };

// $ExpectError
Geohash.adjacent(validGeohash, "a");
// $ExpectError
Geohash.adjacent(2, "n");
// $ExpectError
Geohash.bounds(2);
// $ExpectError
Geohash.decode(2);
// $ExpectError
Geohash.encode("2");
// $ExpectError
Geohash.neighbours(2);

// $ExpectError
dummyPoint = Geohash.adjacent(validGeohash, "n");
// $ExpectError
dummyString = Geohash.bounds(validGeohash);
// $ExpectError
dummyString = Geohash.decode(validGeohash);
// $ExpectError
dummyPoint = Geohash.encode(0, 0, 12);
// $ExpectError
dummyString = Geohash.neighbours(validGeohash);

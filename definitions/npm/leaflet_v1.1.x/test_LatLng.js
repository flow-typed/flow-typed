// @flow

import Leaflet from 'leaflet';

const invalid: Symbol = Symbol();

const latlngA: Leaflet.LatLng = new Leaflet.LatLng(0, 0);
const latlngB: Leaflet.LatLng = new Leaflet.LatLng(0, 0, 0);
// $ExpectError
const latlngC: typeof invalid = new Leaflet.LatLng();
// $ExpectError
new Leaflet.LatLng();
// $ExpectError
new Leaflet.LatLng(invalid, invalid);

const lat1: number = latlngA.lat;
// $ExpectError
const lat2: typeof invalid = latlngA.lat;

const lng1: number = latlngA.lng;
// $ExpectError
const lng2: typeof invalid = latlngA.lng;

const alt1: number = latlngA.alt;
// $ExpectError
const alt2: typeof invalid = latlngA.alt;

const equalsResult1: boolean = latlngA.equals(latlngB);
const equalsResult2: boolean = latlngA.equals(latlngB, 1);
// $ExpectError
const equalsResult5: typeof invalid = latlngA.equals(latlngB);
// $ExpectError
latlngA.equals(invalid);
// $ExpectError
latlngA.equals(latlngB, invalid);

const toStringResult1: string = latlngA.toString();
// $ExpectError
const toStringResult2: typeof invalid = latlngA.toString();
// $ExpectError
latlngA.toString(invalid);

const distanceToResult1: number = latlngA.distanceTo(latlngB);
// $ExpectError
const distanceToResult2: typeof invalid = latlngA.distanceTo(latlngB);
// $ExpectError
latlngA.distanceTo(invalid);

const wrapResult1: Leaflet.LatLng = latlngA.wrap();
// $ExpectError
const wrapResult2: typeof invalid = latlngA.wrap();
// $ExpectError
latlngA.wrap(invalid);

const toBoundsResult1: Leaflet.LatLngBounds = latlngA.toBounds(1);
// $ExpectError
const toBoundsResult2: typeof invalid = latlngA.toBounds(1);
// $ExpectError
latlngA.toBounds(invlalid);

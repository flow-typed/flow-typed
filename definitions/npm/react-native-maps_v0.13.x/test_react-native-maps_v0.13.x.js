import MapView, { Polyline, Polygon, Circle } from 'react-native-maps';

// $ExpectError only null undefined of "google allowed"
const A = <MapView provider="invalid" />
const A = <MapView provider="google" />
// $ExpectError coordinates required
const B = <Polyline />
// $ExpectError coordinates required
const C = <Polygon />

// $ExpectError radius required
const D = <Circle center={{ latitude: 10000, longitude: 1000 }} />

// $ExpectError center required
const E = <Circle radius={100} />

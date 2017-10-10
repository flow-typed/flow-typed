import MapView from 'react-native-maps';

// $ExpectError
const A = <MapView initialRegion="mexico" />;

const B = <MapView />;

// $ExpectError
const C = <MapView.Marker />;

const D = <MapView.Marker coordinate={{ latitude: 50, longitude: 50 }} />;

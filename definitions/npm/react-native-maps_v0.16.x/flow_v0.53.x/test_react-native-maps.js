import MapView from 'react-native-maps';

// $ExpectError
<MapView initialRegion="mexico" />

<MapView />

// $ExpectError
<MapView.Marker />

<MapView.Marker coordinate={{ latitude: 50, longitude: 50 }} />

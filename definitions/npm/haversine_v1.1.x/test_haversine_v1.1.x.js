import haversine from 'haversine'

haversine([2, 3], [3, 2], { format: '[lat,lon]' })
haversine({ lat: 2, lon: 3 }, { lat: 3, lon: 2 }, { format: '{lat,lon}' })
haversine({ latitude: 2, longitude: 3 }, { latitude: 3, longitude: 2 })
haversine({ latitude: 2, longitude: 3 }, { latitude: 3, longitude: 2 }, {})
haversine({ latitude: 2, longitude: 3 }, { latitude: 3, longitude: 2 }, { unit: 'km' })
const a: number = haversine({ type: 'Feature', coordinates: [2, 3] }, { type: 'Feature', coordinates: [2, 3] }, { format: 'geojson' })
const b: boolean = haversine({ type: 'Feature', coordinates: [2, 3] }, { type: 'Feature', coordinates: [2, 3] }, { format: 'geojson', threshold: 30 })

// $FlowExpectedError
haversine([2, 3])
// $FlowExpectedError
haversine([2, 3], [3, 2])
// $FlowExpectedError
haversine({ lat: 2, lon: 3 }, { lat: 3, lon: 2 })
// $FlowExpectedError
haversine({ latitude: 2, longitude: 3 }, { latitude: 3, longitude: 2 }, { format: '[lat,lon]'})
// $FlowExpectedError
const c: number = haversine({ type: 'Feature', coordinates: [2, 3] }, { type: 'Feature', coordinates: [2, 3] }, { format: 'geojson', threshold: 1 })
// $FlowExpectedError
const d: boolean = haversine({ type: 'Feature', coordinates: [2, 3] }, { type: 'Feature', coordinates: [2, 3] }, { format: 'geojson'})
// $FlowExpectedError
haversine([2])
// $FlowExpectedError
haversine([2, 3, 4])

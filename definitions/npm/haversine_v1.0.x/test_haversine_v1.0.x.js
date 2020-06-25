import haversine from 'haversine'

haversine({ latitude: 2, longitude: 3 }, { latitude: 3, longitude: 2 })
haversine({ latitude: 2, longitude: 3 }, { latitude: 3, longitude: 2 }, {})

// $FlowExpectedError
haversine([2, 3])
// $FlowExpectedError
haversine([2, 3], [3, 2])
// $FlowExpectedError
haversine({ lat: 2, lon: 3 }, { lat: 3, lon: 2 })
// $FlowExpectedError
const a: number = haversine({ latitude: 2, longitude: 3 }, { latitude: 3, longitude: 2 }, { threshold: 1 })
// $FlowExpectedError
const b: boolean = haversine({ latitude: 2, longitude: 3 }, { latitude: 3, longitude: 2 })

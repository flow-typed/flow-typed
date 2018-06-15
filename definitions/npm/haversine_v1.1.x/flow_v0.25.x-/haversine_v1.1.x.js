// @flow

type $npm$haversine$Unit = 'km' | 'mile' | 'meter' | 'nmi'

type $npm$haversine$ArrayCoordinates = Array<number>
type $npm$haversine$LatitudeLongitudeCoordinates = { latitude: number, longitude: number }
type $npm$haversine$LatLonCoordinates = { lat: number, lon: number }
type $npm$haversine$GeojsonCoordinates = { coordinates: Array<number> }

type $npm$haversine$haversineWithoutThresholdWithArrayCoordinates = (
  startCoordinates: $npm$haversine$ArrayCoordinates,
  endCoordinates: $npm$haversine$ArrayCoordinates,
  options: {|
    unit?: $npm$haversine$Unit,
    format: '[lat,lon]' | '[lon,lat]'
  |}
) => number

type $npm$haversine$haversineWithoutThresholdWithLatLonCoordinates = (
  startCoordinates: $npm$haversine$LatLonCoordinates,
  endCoordinates: $npm$haversine$LatLonCoordinates,
  options: {|
    unit?: $npm$haversine$Unit,
    format: '{lat,lon}'
  |}
) => number

type $npm$haversine$haversineWithoutThresholdWithGeojsonCoordinates = (
  startCoordinates: $npm$haversine$GeojsonCoordinates,
  endCoordinates: $npm$haversine$GeojsonCoordinates,
  options: {|
    unit?: $npm$haversine$Unit,
    format: 'geojson'
  |}
) => number

type $npm$haversine$haversineWithoutThresholdWithLatitudeLongitudeCoordinates = (
  startCoordinates: $npm$haversine$LatitudeLongitudeCoordinates,
  endCoordinates: $npm$haversine$LatitudeLongitudeCoordinates,
  options?: {|
    unit?: $npm$haversine$Unit,
  |}
) => number

type $npm$haversine$haversineWithThresholdWithArrayCoordinates = (
  startCoordinates: $npm$haversine$ArrayCoordinates,
  endCoordinates: $npm$haversine$ArrayCoordinates,
  options: {|
    threshold: number,
    unit?: $npm$haversine$Unit,
    format: '[lat,lon]' | '[lon,lat]'
  |}
) => boolean

type $npm$haversine$haversineWithThresholdWithLatLonCoordinates = (
  startCoordinates: $npm$haversine$LatLonCoordinates,
  endCoordinates: $npm$haversine$LatLonCoordinates,
  options: {|
    threshold: number,
    unit?: $npm$haversine$Unit,
    format: '{lat,lon}'
  |}
) => boolean

type $npm$haversine$haversineWithThresholdWithGeojsonCoordinates = (
  startCoordinates: $npm$haversine$GeojsonCoordinates,
  endCoordinates: $npm$haversine$GeojsonCoordinates,
  options: {|
    threshold: number,
    unit?: $npm$haversine$Unit,
    format: 'geojson'
  |}
) => boolean

type $npm$haversine$haversineWithThresholdWithLatitudeLongitudeCoordinates = (
  startCoordinates: $npm$haversine$LatitudeLongitudeCoordinates,
  endCoordinates: $npm$haversine$LatitudeLongitudeCoordinates,
  options: {|
    threshold: number,
    unit?: $npm$haversine$Unit,
  |}
) => boolean

declare module 'haversine' {
  declare module.exports:
    & $npm$haversine$haversineWithoutThresholdWithArrayCoordinates
    & $npm$haversine$haversineWithoutThresholdWithLatLonCoordinates
    & $npm$haversine$haversineWithoutThresholdWithGeojsonCoordinates
    & $npm$haversine$haversineWithoutThresholdWithLatitudeLongitudeCoordinates
    & $npm$haversine$haversineWithThresholdWithArrayCoordinates
    & $npm$haversine$haversineWithThresholdWithLatLonCoordinates
    & $npm$haversine$haversineWithThresholdWithGeojsonCoordinates
    & $npm$haversine$haversineWithThresholdWithLatitudeLongitudeCoordinates
}

// @flow

type $npm$haversine$Unit = 'km' | 'mile' | 'meter' | 'nmi'
type $npm$haversine$Coordinates = { latitude: number, longitude: number }

type $npm$haversine$haversineWithoutThreshold = (
  startCoordinates: $npm$haversine$Coordinates,
  endCoordinates: $npm$haversine$Coordinates,
  options?: {|
    unit?: $npm$haversine$Unit,
  |}
) => number

type $npm$haversine$haversineWithThreshold = (
  startCoordinates: $npm$haversine$Coordinates,
  endCoordinates: $npm$haversine$Coordinates,
  options: {|
    threshold: number,
    unit?: $npm$haversine$Unit,
  |}
) => boolean

declare module 'haversine' {
  declare module.exports:
    & $npm$haversine$haversineWithoutThreshold
    & $npm$haversine$haversineWithThreshold
}

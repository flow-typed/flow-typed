// @flow
declare module 'react-native-maps' {
  declare type Region = {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
  }

  declare type LatLng = {
    latitude: Number,
    longitude: Number,
  }

  declare type MapType = "standard" | "satellite" | "hybrid" | "terrain";

  declare type Point = {
    x: number,
    y: number,
  }

  declare type EdgePadding = {
    top: number,
    right: number,
    bottom: number,
    left: number
  }

  declare type EdgeInsets = {
    top: number,
    left: number,
    bottom: number,
    right: number,
  }

  declare export type onInteractWithMapEvent = SyntheticEvent & {
    nativeEvent: { coordinate: LatLng, position: Point }
  }

  declare type MapViewProps = {
    provider?: ?"google",
    region?: Region,
    initialRegion?: Region,
    liteMode?: boolean,
    mapType?: MapType,
    showsUserLocation?: boolean,
    followsUserLocation?: boolean,
    showsMyLocationButton?: boolean,
    showsPointsOfInterest?: boolean,
    showsCompass?: boolean,
    showsScale?: boolean,
    showsBuildings?: boolean,
    showsTraffic?: boolean,
    showsIndoors?: boolean,
    zoomEnabled?: boolean,
    rotateEnabled?: boolean,
    scrollEnabled?: boolean,
    pitchEnabled?: boolean,
    toolbarEnabled?: boolean,
    cacheEnabled?: boolean,
    loadingEnabled?: boolean,
    loadingIndicatorColor?: string,
    loadingBackgroundColor?: string,
    moveOnMarkerPress?: Boolean,
    legalLabelInsets?: EdgeInsets,
    onRegionChange?: (region: Region) => any,
    onRegionChangeComplete?: (region: Region) => any,
    onPress?: (event: onInteractWithMapEvent) => any,
    onPanDrag?: (event: onInteractWithMapEvent) => any,
    onLongPress?: (event: onInteractWithMapEvent) => any,
    onMarkerPress?: (event: SyntheticEvent) => any,
    onMarkerSelect?: (event: SyntheticEvent) => any,
    onMarkerDeselect?: (event: SyntheticEvent) => any,
    onCalloutPress?: (event: SyntheticEvent) => any,
    onMarkerDragStart?: (event: onInteractWithMapEvent) => any,
    onMarkerDrag?: (event: onInteractWithMapEvent) => any,
    onMarkerDragEnd?: (event: onInteractWithMapEvent) => any,
  }

  declare type ImageSourcePropType = number | {
    uri: string,
    width?: number,
    height?: number,
    scale?: number,
  }

  declare type MarkerProps = {
    title?: string,
    description?: string,
    image?: ImageSourcePropType,
    pinColor?: string,
    coordinate: LatLng,
    centerOffset?: Point,
    calloutOffset?: Point,
    anchor?: Point,
    calloutAnchor?: Point,
    flat?: Boolean,
    identifier?: String,
    rotation?: number,
    draggable?: ?boolean,
    onPress?: (event: onInteractWithMapEvent) => any,
    onSelect?: (event: onInteractWithMapEvent) => any,
    onDeselect?: (event: onInteractWithMapEvent) => any,
    onCalloutPress?: (event: SyntheticEvent) => any,
    onDragStart?: (event: onInteractWithMapEvent) => any,
    onDrag?: (event: onInteractWithMapEvent) => any,
    onDragEnd?: (event: onInteractWithMapEvent) => any,

  }

  declare type CalloutProps = {
    tooltip?: boolean,
    onPress?: (event: SyntheticEvent) => void,
  }

  declare export class Callout extends React$Component {
    props: CalloutProps,
  }

  declare export class Marker extends React$Component {
    props: MarkerProps,
    showCallout: () => void,
    hideCallout: () => void,
  }

  declare type PolygonProps = {
    coordinates: LatLng[],
    strokeWidth?: number,
    strokeColor?: string,
    fillColor?: string,
    lineCap?: string,
    lineJoin?: LatLng[],
    miterLimit?: number,
    geodesic?: boolean,
    lineDashPhase?: number,
    lineDashPattern?: number[],
    onPress?: (event: SyntheticEvent) => any,
  }

  declare export class Polygon extends React$Component {
    props: PolygonProps,
  }

  declare type PolylineProps = {
    coordinates: LatLng[],
    strokeWidth?: number,
    strokeColor?: string,
    lineCap?: string,
    lineJoin?: LatLng[],
    miterLimit?: number,
    geodesic?: boolean,
    lineDashPhase?: number,
    lineDashPattern?: number[],
    onPress?: (event: SyntheticEvent) => any,
  }

  declare export class Polyline extends React$Component {
    props: PolygonProps,
  }

  declare type CircleProps = {
    center: LatLng,
    radius: number,
    strokeWidth?: number,
    strokeColor?: string,
    fillColor?: string,
    zIndex?: number,
    lineCap?: string,
    lineJoin?: LatLng[],
    miterLimit?: number,
    geodesic?: boolean,
    lineDashPhase?: number,
    lineDashPattern?: number[],
  }

  declare export class Circle extends React$Component {
    props: CircleProps,
  }

  declare export default class MapView extends React$Component {
    props: MapViewProps,
    animateToRegion: (region: Region, duration: number) => void,
    animateToCoordinate: (coordinate: LatLng, duration: number) => void,
    fitToElements: (animated: boolean) => void,
    fitToSuppliedMarkers: (markerIDs: string[], animated: boolean) => void,
    fitToCoordinates: (coordinates: LatLng[], options: {
       edgePadding: EdgePadding, animated: boolean }) => void,
  }
}

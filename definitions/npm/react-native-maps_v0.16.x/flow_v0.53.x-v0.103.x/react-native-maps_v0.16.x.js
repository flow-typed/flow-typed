declare module 'react-native-maps' {
  declare export type Region = {|
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
  |};

  declare export type LatLng = {|
    latitude: number,
    longitude: number,
  |};

  declare export type MapType = 'standard' | 'satellite' | 'hybrid' | 'terrain';

  declare export type Point = {|
    x: number,
    y: number,
  |};

  declare export type EdgePadding = {|
    top: number,
    right: number,
    bottom: number,
    left: number,
  |};

  declare export type EdgeInsets = {|
    top: number,
    left: number,
    bottom: number,
    right: number,
  |};

  declare class EventWithCoordinateAndPosition extends Event {
    coordinate: LatLng;
    position: Point;
  }

  declare export class InteractWithMapEvent extends Event {
    nativeEvent: EventWithCoordinateAndPosition;
  }

  declare type MapViewProps = {
    provider?: ?'google',
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
    onRegionChange?: (region: Region) => void,
    onRegionChangeComplete?: (region: Region) => void,
    onPress?: (event: InteractWithMapEvent) => void,
    onPanDrag?: (event: InteractWithMapEvent) => void,
    onLongPress?: (event: InteractWithMapEvent) => void,
    onMarkerPress?: (event: SyntheticEvent<*>) => void,
    onMarkerSelect?: (event: SyntheticEvent<*>) => void,
    onMarkerDeselect?: (event: SyntheticEvent<*>) => void,
    onCalloutPress?: (event: SyntheticEvent<*>) => void,
    onMarkerDragStart?: (event: InteractWithMapEvent) => void,
    onMarkerDrag?: (event: InteractWithMapEvent) => void,
    onMarkerDragEnd?: (event: InteractWithMapEvent) => void,
  };

  declare type ImageSourcePropType =
    | number
    | {
        uri: string,
        width?: number,
        height?: number,
        scale?: number,
      };

  declare type CalloutProps = {
    tooltip?: boolean,
    onPress?: (event: SyntheticEvent<*>) => void,
  };

  declare class Callout extends React$Component<CalloutProps> {}

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
    onPress?: (event: InteractWithMapEvent) => void,
    onSelect?: (event: InteractWithMapEvent) => void,
    onDeselect?: (event: InteractWithMapEvent) => void,
    onCalloutPress?: (event: SyntheticEvent<*>) => void,
    onDragStart?: (event: InteractWithMapEvent) => void,
    onDrag?: (event: InteractWithMapEvent) => void,
    onDragEnd?: (event: InteractWithMapEvent) => void,
  };

  declare class Marker extends React$Component<MarkerProps> {
    showCallout: () => void;
    hideCallout: () => void;
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
    onPress?: (event: SyntheticEvent<*>) => void,
  };

  declare class Polygon extends React$Component<PolygonProps> {}

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
    onPress?: (event: SyntheticEvent<*>) => void,
  };

  declare class Polyline extends React$Component<PolylineProps> {}

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
  };

  declare class Circle extends React$Component<CircleProps> {}

  declare class MapView extends React$Component<MapViewProps> {
    static Marker: typeof Marker;
    static Callout: typeof Callout;
    static Polygon: typeof Polygon;
    static Polyline: typeof Polyline;
    static Circle: typeof Circle;

    animateToRegion: (region: Region, duration?: number) => void;
    animateToCoordinate: (coordinate: LatLng, duration?: number) => void;
    fitToElements: (animated: boolean) => void;
    fitToSuppliedMarkers: (markerIDs: string[], animated: boolean) => void;
    fitToCoordinates: (
      coordinates: LatLng[],
      options?: {
        edgePadding?: EdgePadding,
        animated?: boolean,
      },
    ) => void;
  }

  declare export default typeof MapView
}

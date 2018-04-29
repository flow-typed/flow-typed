declare module 'leaflet' {

  // http://leafletjs.com/reference-1.2.0.html#featuregroup
  declare class FeatureGroup {
    bringToFront(): this;
    bringToBack(): this;
    getBounds(): LatLngBounds;
  }

  // http://leafletjs.com/reference-1.2.0.html#domevent
  declare class DomEvent {

  }

  declare class Control {}

  //
  // UI Layers
  //

  // http://leafletjs.com/reference-1.2.0.html#marker
  declare class Marker {
    toGeoJSON(): Point;
  }

  // http://leafletjs.com/reference-1.2.0.html#popup
  declare class Popup {

  }
  // http://leafletjs.com/reference-1.2.0.html#tooltip
  declare class Tooltip {

  }

  //
  // Vector Layers
  //

  // http://leafletjs.com/reference-1.2.0.html#path
  declare class Path {}

  //
  // Other Layers
  //

  // http://leafletjs.com/reference-1.2.0.html#geojson
  declare class GeoJSON extends FeatureGroup {}

  //
  // Basic Types
  //


  // http://leafletjs.com/reference-1.2.0.html#latlng
  declare class LatLng {
    toBounds(sizeInMeters: number): LatLngBounds;

    lat: number;
    lng: number;
    alt?: number;
  }

  // http://leafletjs.com/reference-1.2.0.html#latlngbounds
  declare class LatLngBounds {
    extend(latlng: LatLng): this,
    extend(otherBounds: LatLngBounds): this,
    getCenter(): LatLng;
    getSouthWest(): LatLng;
    getNorthEast(): LatLng;
    getNorthWest(): LatLng;
    getSouthEast(): LatLng;
    getWest():	number;
    getSouth():	number;
    getEast():	number;
    getNorth(): number;
    pad(bufferRatio: number): LatLngBounds,
    isValid(): boolean,
  }

  // http://leafletjs.com/reference-1.2.0.html#point
  declare class Point {
    clone(): this;
    floor(): this;
    round(): this;
    ceil(): this;

    x: number;
    y: number;
  }

  //
  // Controls
  //

  declare class Zoom {}

  //
  // DOM Utility
  //

  // http://leafletjs.com/reference-1.2.0.html#domevent
  declare class DomEvent {
    static stop(ev: *): this;
  }

  //
  // Base classes
  //

  // http://leafletjs.com/reference-1.2.0.html#crs
  declare class CRS {
  }

  // misc
  declare class LayerGroup {}
  declare class DivIcon {}
  declare class DomUtil {}

  //
  // top level
  //
  declare class Leaflet {
    CRS: typeof CRS;
    Point: typeof Point;
    Control: typeof Control;
    LayerGroup: typeof LayerGroup;
    DivIcon: typeof DivIcon;
    LatLng: typeof LatLng;
    LatLngBounds: typeof LatLngBounds;
    Marker: typeof Marker;
    Popup: typeof Popup;
    Tooltip: typeof Tooltip;
    DomEvent: typeof DomEvent;
    DomUtil: typeof DomUtil;

    latLng(latitude: number, longitude: number, altitude?: number): LatLng;
    latLng(coords: Array<[number, number]>): LatLng;
    latLng(coords: {lat: number, lng: number, alt?: number}): LatLng;

    latLngBounds(corner1: LatLng, corner2: LatLng): LatLngBounds;
    latLngBounds(latlngs: LatLng[]): LatLngBounds;
    marker(latlng: LatLng, options?: Object): Marker;
    point(x: number, y: number): Point;
    point(coords: number[], round?: boolean): Point;
    point(coords: Object): Point;
    popup(*): Popup;
    svg(*): Path;
    geoJson(*): GeoJSON;
  }

  declare module.exports: Leaflet;
}

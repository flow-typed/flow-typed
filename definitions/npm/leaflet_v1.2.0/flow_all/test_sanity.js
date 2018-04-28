/* @flow */

import leaflet from "leaflet";
import type { LatLng, LatLngBounds } from "leaflet";

const corner1: LatLng = leaflet.latLng(1, 2);
const corner2: LatLng = leaflet.latLng(3, 4);

const bounds: LatLngBounds = leaflet.latLngBounds(corner1, corner2);

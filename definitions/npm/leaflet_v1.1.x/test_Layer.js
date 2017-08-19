// @flow

import Leaflet from 'leaflet';

const invalid: Symbol = Symbol();
const layer: Leaflet.Layer = new Leaflet.Layer();

(layer.addTo(new Leaflet.Map('')): Leaflet.Layer);
(layer.addTo(new Leaflet.LayerGroup([])): Leaflet.Layer);
// $ExpectError
(layer.addTo(new Leaflet.Map('')): typeof invalid);
// $ExpectError
layer.addTo();
// $ExpectError
layer.addTo(null);
// $ExpectError
layer.addTo(invalid);

(layer.remove(): Leaflet.Layer);
// $ExpectError
(layer.remove(): typeof invalid);
// $ExpectError
layer.remove(null);
// $ExpectError
layer.remove(invalid);

(layer.removeFrom(new Leaflet.Map('')): Leaflet.Layer);
// $ExpectError
(layer.removeFrom(new Leaflet.Map('')): typeof invalid);
// $ExpectError
layer.removeFrom();
// $ExpectError
layer.removeFrom(null);
// $ExpectError
layer.removeFrom(invalid);

(layer.getPane(): HTMLElement);
(layer.getPane('name'): HTMLElement);
// $ExpectError
(layer.getPane(): typeof invalid);
// $ExpectError
layer.getPane(null);
// $ExpectError
layer.getPane(invalid);

(layer.getAttribution(): string);
// $ExpectError
(layer.getAttribution(): typeof invalid);
// $ExpectError
layer.getAttribution(null);
// $ExpectError
layer.getAttribution(invalid);

(layer.onAdd(new Leaflet.Map('')): Leaflet.Layer);
// $ExpectError
(layer.onAdd(new Leaflet.Map('')): typeof invalid);
// $ExpectError
layer.onAdd();
// $ExpectError
layer.onAdd(null);
// $ExpectError
layer.onAdd(invalid);

(layer.onRemove(new Leaflet.Map('')): Leaflet.Layer);
// $ExpectError
(layer.onRemove(new Leaflet.Map('')): typeof invalid);
// $ExpectError
layer.onRemove();
// $ExpectError
layer.onRemove(null);
// $ExpectError
layer.onRemove(invalid);

(layer.getEvents(): Object);
// $ExpectError
(layer.getEvents(): typeof invalid);
// $ExpectError
layer.getEvents(null);
// $ExpectError
layer.getEvents(invalid);

(layer.beforeAdd(new Leaflet.Map('')): Leaflet.Layer);
// $ExpectError
(layer.beforeAdd(new Leaflet.Map('')): typeof invalid);
// $ExpectError
layer.beforeAdd();
// $ExpectError
layer.beforeAdd(null);
// $ExpectError
layer.beforeAdd(invalid);

(layer.bindPopup('content'): Leaflet.Layer);
(layer.bindPopup('content', {}): Leaflet.Layer);
(layer.bindPopup(new HTMLElement()): Leaflet.Layer);
(layer.bindPopup(new Leaflet.Popup()): Leaflet.Layer);
(layer.bindPopup(() => 'content'): Leaflet.Layer);
(layer.bindPopup(() => new HTMLElement): Leaflet.Layer);
// $ExpectError
(layer.bindPopup('content'): typeof invalid);
// $ExpectError
layer.bindPopup();
// $ExpectError
layer.bindPopup(null);
// $ExpectError
layer.bindPopup(invalid);
// $ExpectError
layer.bindPopup('content', null);

(layer.unbindPopup(): Leaflet.Layer);
// $ExpectError
(layer.unbindPopup(): typeof invalid);
// $ExpectError
layer.unbindPopup(null);
// $ExpectError
layer.unbindPopup(invalid);

(layer.openPopup(): Leaflet.Layer);
(layer.openPopup(new Leaflet.LatLng(0, 0)): Leaflet.Layer);
// $ExpectError
(layer.openPopup(): typeof invalid);
// $ExpectError
layer.openPopup(null);
// $ExpectError
layer.openPopup(invalid);

(layer.closePopup(): Leaflet.Layer);
// $ExpectError
(layer.closePopup(): typeof invalid);
// $ExpectError
layer.closePopup(null);
// $ExpectError
layer.closePopup(invalid);

(layer.togglePopup(): Leaflet.Layer);
// $ExpectError
(layer.togglePopup(): typeof invalid);
// $ExpectError
layer.togglePopup(null);
// $ExpectError
layer.togglePopup(invalid);

(layer.isPopupOpen(): boolean);
// $ExpectError
(layer.isPopupOpen(): typeof invalid);
// $ExpectError
layer.isPopupOpen(null);
// $ExpectError
layer.isPopupOpen(invalid);

(layer.setPopupContent('content'): Leaflet.Layer);
(layer.setPopupContent(new HTMLElement()): Leaflet.Layer);
(layer.setPopupContent(new Leaflet.Popup()): Leaflet.Layer);
// $ExpectError
(layer.setPopupContent('content'): typeof invalid);
// $ExpectError
layer.setPopupContent();
// $ExpectError
layer.setPopupContent(null);
// $ExpectError
layer.setPopupContent(invalid);

(layer.getPopup(): Leaflet.Popup);
// $ExpectError
(layer.getPopup(): typeof invalid);
// $ExpectError
layer.getPopup(null);
// $ExpectError
layer.getPopup(invalid);

/*
layer.bindTooltip(content: TooltipContent | ContentFactory, options?: TooltipOptions): this;
layer.unbindTooltip(): this;
layer.openTooltip(latlng?: LatLng): this;
layer.closeTooltip(): this;
layer.toggleTooltip(): this;
layer.isTooltipOpen(): boolean;
layer.setTooltipContent(content: TooltipContent): this;
layer.getTooltip(): Tooltip;
*/

(layer.bindTooltip('content'): Leaflet.Layer);
(layer.bindTooltip('content', {}): Leaflet.Layer);
(layer.bindTooltip(new HTMLElement()): Leaflet.Layer);
(layer.bindTooltip(new Leaflet.Tooltip()): Leaflet.Layer);
(layer.bindTooltip(() => 'content'): Leaflet.Layer);
(layer.bindTooltip(() => new HTMLElement): Leaflet.Layer);
// $ExpectError
(layer.bindTooltip('content'): typeof invalid);
// $ExpectError
layer.bindTooltip();
// $ExpectError
layer.bindTooltip(null);
// $ExpectError
layer.bindTooltip(invalid);
// $ExpectError
layer.bindTooltip('content', null);

(layer.unbindTooltip(): Leaflet.Layer);
// $ExpectError
(layer.unbindTooltip(): typeof invalid);
// $ExpectError
layer.unbindTooltip(null);
// $ExpectError
layer.unbindTooltip(invalid);

(layer.openTooltip(): Leaflet.Layer);
(layer.openTooltip(new Leaflet.LatLng(0, 0)): Leaflet.Layer);
// $ExpectError
(layer.openTooltip(): typeof invalid);
// $ExpectError
layer.openTooltip(null);
// $ExpectError
layer.openTooltip(invalid);

(layer.closeTooltip(): Leaflet.Layer);
// $ExpectError
(layer.closeTooltip(): typeof invalid);
// $ExpectError
layer.closeTooltip(null);
// $ExpectError
layer.closeTooltip(invalid);

(layer.toggleTooltip(): Leaflet.Layer);
// $ExpectError
(layer.toggleTooltip(): typeof invalid);
// $ExpectError
layer.toggleTooltip(null);
// $ExpectError
layer.toggleTooltip(invalid);

(layer.isTooltipOpen(): boolean);
// $ExpectError
(layer.isTooltipOpen(): typeof invalid);
// $ExpectError
layer.isTooltipOpen(null);
// $ExpectError
layer.isTooltipOpen(invalid);

(layer.setTooltipContent('content'): Leaflet.Layer);
(layer.setTooltipContent(new HTMLElement()): Leaflet.Layer);
(layer.setTooltipContent(new Leaflet.Tooltip()): Leaflet.Layer);
// $ExpectError
(layer.setTooltipContent('content'): typeof invalid);
// $ExpectError
layer.setTooltipContent();
// $ExpectError
layer.setTooltipContent(null);
// $ExpectError
layer.setTooltipContent(invalid);

(layer.getTooltip(): Leaflet.Popup);
// $ExpectError
(layer.getTooltip(): typeof invalid);
// $ExpectError
layer.getTooltip(null);
// $ExpectError
layer.getTooltip(invalid);

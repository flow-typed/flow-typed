// @flow

import Leaflet from 'leaflet';

const invalid: Symbol = new Symbol();
const popup: Leaflet.Popup = new Leaflet.Popup();

new Leaflet.Popup({});
new Leaflet.Popup({}, new Leaflet.Layer());

(popup.getLatLng(): Leaflet.LatLng);
// $ExpectError
(popup.getLatLng(): typeof invalid);
// $ExpectError
popup.getLatLng(null);
// $ExpectError
popup.getLatLng(invalid);

(popup.setLatLng(new Leaflet.LatLng(0, 0)): Leaflet.Popup);
// $ExpectError
(popup.setLatLng(new Leaflet.LatLng(0, 0)): typeof invalid);
// $ExpectError
popup.setLatLng();
// $ExpectError
popup.setLatLng(null);
// $ExpectError
popup.setLatLng(invalid);

(popup.getContent(): string | HTMLElement);
// $ExpectError
(popup.getContent(): typeof invalid);
// $ExpectError
popup.getContent(null);
// $ExpectError
popup.getContent(invalid);

popup.setContent('content');
popup.setContent(new HTMLElement());
popup.setContent(() => 'content');
popup.setContent(() => new HTMLElement);
(popup.setContent(''): Leaflet.Popup);
// $ExpectError
(popup.setContent(''): typeof invalid);
// $ExpectError
popup.setContent();
// $ExpectError
popup.setContent(null);
// $ExpectError
popup.setContent(invalid);

(popup.getElement(): string | HTMLElement);
// $ExpectError
(popup.getElement(): typeof invalid);
// $ExpectError
popup.getElement(null);
// $ExpectError
popup.getElement(invalid);

(popup.update(): null);
// $ExpectError
(popup.update(): typeof invalid);
// $ExpectError
popup.update(null);
// $ExpectError
popup.update(invalid);

(popup.isOpen(): boolean);
// $ExpectError
(popup.isOpen(): typeof invalid);
// $ExpectError
popup.isOpen(null);
// $ExpectError
popup.isOpen(invalid);

(popup.bringToFront(): Leaflet.Popup);
// $ExpectError
(popup.bringToFront(): typeof invalid);
// $ExpectError
popup.bringToFront(null);
// $ExpectError
popup.bringToFront(invalid);

(popup.bringToBack(): Leaflet.Popup);
// $ExpectError
(popup.bringToBack(): typeof invalid);
// $ExpectError
popup.bringToBack(null);
// $ExpectError
popup.bringToBack(invalid);

(popup.openOn(new Leaflet.Map('')): Leaflet.Popup);
// $ExpectError
(popup.openOn(new Leaflet.Map('')): typeof invalid);
// $ExpectError
popup.openOn();
// $ExpectError
popup.openOn(null);
// $ExpectError
popup.openOn(invalid);

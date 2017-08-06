// @flow

import Leaflet from 'leaflet';

const invalid: Symbol = Symbol();

const evented: Leaflet.Evented = new Leaflet.Evented();

const onResult1: Leaflet.Evented = evented.on('type', () => null);
const onResult2: Leaflet.Evented = evented.on('type', () => null, {});
const onResult3: Leaflet.Evented = evented.on({ 'type': () => null });
// $ExpectError
const onResult4: typeof invalid = evented.on('type', () => null);
// $ExpectError
evented.on();
// $ExpectError
evented.on(0);
// $ExpectError
evented.on('type', 0);
// $ExpectError
evented.on('type', () => null, 0);
// $ExpectError
evented.on({ [invalid]: () => null });
// $ExpectError
evented.on({ 'type': invalid });

const offResult1: Leaflet.Evented = evented.off('type', () => null);
const offResult2: Leaflet.Evented = evented.off('type', () => null, {});
const offResult3: Leaflet.Evented = evented.off({ 'type': () => null });
const offResult4: Leaflet.Evented = evented.off();
// $ExpectError
const offResult5: typeof invalid = evented.off();
// $ExpectError
evented.off(0);
// $ExpectError
evented.off('type', 0);
// $ExpectError
evented.off('type', () => null, 0);
// $ExpectError
evented.off({ [invalid]: () => null });
// $ExpectError
evented.off({ 'type': invalid });

const fireResult1: Leaflet.Evented = evented.fire('type');
const fireResult2: Leaflet.Evented = evented.fire('type', {});
const fireResult3: Leaflet.Evented = evented.fire('type', {}, true);
// $ExpectError
const fireResult4: typeof invalid = evented.fire('type');
// $ExpectError
evented.fire();
// $ExpectError
evented.fire(0);
// $ExpectError
evented.fire('type', 0);
// $ExpectError
evented.fire('type', {}, 0);

const listensResult1: boolean = evented.listens('type');
// $ExpectError
const listensResult2: typeof invalid = evented.listens('type');
// $ExpectError
evented.listens();
// $ExpectError
evented.listens(invalid);

const onceResult1: Leaflet.Evented = evented.once('type', () => null);
const onceResult2: Leaflet.Evented = evented.once('type', () => null, {});
const onceResult3: Leaflet.Evented = evented.once({ 'type': () => null });
// $ExpectError
const onceResult4: typeof invalid = evented.once('type', () => null);
// $ExpectError
evented.once();
// $ExpectError
evented.once(0);
// $ExpectError
evented.once('type', 0);
// $ExpectError
evented.once('type', () => null, 0);
// $ExpectError
evented.once({ [invalid]: () => null });
// $ExpectError
evented.once({ 'type': invalid });

const addEventParentResult1: Leaflet.Evented = evented.addEventParent(new Leaflet.Evented());
// $ExpectError
const addEventParentResult2: typeof invalid = evented.addEventParent(new Leaflet.Evented());
// $ExpectError
evented.addEventParent();
// $ExpectError
evented.addEventParent(invalid);

const removeEventParentResult1: Leaflet.Evented = evented.removeEventParent(new Leaflet.Evented());
// $ExpectError
const removeEventParentResult2: typeof invalid = evented.removeEventParent(new Leaflet.Evented());
// $ExpectError
evented.removeEventParent();
// $ExpectError
evented.removeEventParent(invalid);

const addEventListenerResult1: Leaflet.Evented = evented.addEventListener('type', () => null);
const addEventListenerResult2: Leaflet.Evented = evented.addEventListener('type', () => null, {});
const addEventListenerResult3: Leaflet.Evented = evented.addEventListener({ 'type': () => null });
// $ExpectError
const addEventListenerResult4: typeof invalid = evented.addEventListener('type', () => null);
// $ExpectError
evented.addEventListener();
// $ExpectError
evented.addEventListener(0);
// $ExpectError
evented.addEventListener('type', 0);
// $ExpectError
evented.addEventListener('type', () => null, 0);
// $ExpectError
evented.addEventListener({ [invalid]: () => null });
// $ExpectError
evented.addEventListener({ 'type': invalid });

const removeEventListenerResult1: Leaflet.Evented = evented.removeEventListener('type', () => null);
const removeEventListenerResult2: Leaflet.Evented = evented.removeEventListener('type', () => null, {});
const removeEventListenerResult3: Leaflet.Evented = evented.removeEventListener({ 'type': () => null });
const removeEventListenerResult4: Leaflet.Evented = evented.removeEventListener();
// $ExpectError
const removeEventListenerResult5: typeof invalid = evented.removeEventListener();
// $ExpectError
evented.removeEventListener(0);
// $ExpectError
evented.removeEventListener('type', 0);
// $ExpectError
evented.removeEventListener('type', () => null, 0);
// $ExpectError
evented.removeEventListener({ [invalid]: () => null });
// $ExpectError
evented.removeEventListener({ 'type': invalid });

const clearAllEventListenersResult1: Leaflet.Evented = evented.clearAllEventListeners();
// $ExpectError
const clearAllEventListenersResult2: typeof invalid = evented.clearAllEventListeners();
// $ExpectError
evented.clearAllEventListeners(invalid);

const addOneTimeEventListenerResult1: Leaflet.Evented = evented.addOneTimeEventListener('type', () => null);
const addOneTimeEventListenerResult2: Leaflet.Evented = evented.addOneTimeEventListener('type', () => null, {});
const addOneTimeEventListenerResult3: Leaflet.Evented = evented.addOneTimeEventListener({ 'type': () => null });
// $ExpectError
const addOneTimeEventListenerResult4: typeof invalid = evented.addOneTimeEventListener('type', () => null);
// $ExpectError
evented.addOneTimeEventListener();
// $ExpectError
evented.addOneTimeEventListener(0);
// $ExpectError
evented.addOneTimeEventListener('type', 0);
// $ExpectError
evented.addOneTimeEventListener('type', () => null, 0);
// $ExpectError
evented.addOneTimeEventListener({ [invalid]: () => null });
// $ExpectError
evented.addOneTimeEventListener({ 'type': invalid });

const fireEventResult1: Leaflet.Evented = evented.fireEvent('type');
const fireEventResult2: Leaflet.Evented = evented.fireEvent('type', {});
const fireEventResult3: Leaflet.Evented = evented.fireEvent('type', {}, true);
// $ExpectError
const fireEventResult4: typeof invalid = evented.fireEvent('type');
// $ExpectError
evented.fireEvent();
// $ExpectError
evented.fireEvent(0);
// $ExpectError
evented.fireEvent('type', 0);
// $ExpectError
evented.fireEvent('type', {}, 0);

const hasEventListenersResult1: boolean = evented.hasEventListeners('type');
// $ExpectError
const hasEventListenersResult2: typeof invalid = evented.hasEventListeners('type');
// $ExpectError
evented.hasEventListeners();
// $ExpectError
evented.hasEventListeners(invalid);

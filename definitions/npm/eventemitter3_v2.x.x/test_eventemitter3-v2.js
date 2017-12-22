// @flow
import EventEmitter from 'eventemitter3';
import type { ListenerFn } from 'eventemitter3'

class A extends EventEmitter { }

const a: EventEmitter = new A();

a.on('test', () => {});
// $ExpectError
a.on('test');

a.off('test');
// $ExpectError
a.off();

a.removeListener('test');
// $ExpectError
a.removeListener();

a.once('test', () => {});
// $ExpectError
a.once('test');

a.emit('test', 'something');
a.emit('test');

// a.emit(); Supposedly a bug in Flow, should expect an error here

// Although the library has a stub for this for compatibility, I ignored
// it from the definition
// $ExpectError
a.setMaxListeners();

// $ExpectError
a.getMaxListeners();

(a.listeners('emit', true): boolean);

(a.listeners('emit', false): ListenerFn[]);

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

// $ExpectError
a.setMaxListeners();

// $ExpectError
a.getMaxListeners();

(a.listeners('emit'): ListenerFn[]);

// appears in v3.x

(a.listenerCount(Symbol(42)): number);

// Breaks compatibility with v2.x
// $ExpectError
(a.listeners('emit', true): boolean);

// $ExpectError
(a.listeners('emit', false): ListenerFn[]);

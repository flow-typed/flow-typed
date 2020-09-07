// @flow
import EventEmitter from 'eventemitter3';
import type { ListenerFn } from 'eventemitter3'

class A extends EventEmitter { }

const a: EventEmitter = new A();

a.on('test', async () => {});
a.on('test', () => {});
// $FlowExpectedError
a.on('test');

a.off('test');
// $FlowExpectedError
a.off();

a.removeListener('test');
// $FlowExpectedError
a.removeListener();

a.once('test', () => {});
// $FlowExpectedError
a.once('test');

a.emit('test', 'something');
a.emit('test');

// a.emit(); Supposedly a bug in Flow, should expect an error here

// $FlowExpectedError
a.setMaxListeners();

// $FlowExpectedError
a.getMaxListeners();

(a.listeners('emit'): ListenerFn[]);

// appears in v3.x

(a.listenerCount(Symbol(42)): number);

// Breaks compatibility with v2.x
// $FlowExpectedError
(a.listeners('emit', true): boolean);

// $FlowExpectedError
(a.listeners('emit', false): ListenerFn[]);

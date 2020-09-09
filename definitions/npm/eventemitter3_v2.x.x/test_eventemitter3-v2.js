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

// Although the library has a stub for this for compatibility, I ignored
// it from the definition
// $FlowExpectedError
a.setMaxListeners();

// $FlowExpectedError
a.getMaxListeners();

(a.listeners('emit', true): boolean);

(a.listeners('emit', false): ListenerFn[]);

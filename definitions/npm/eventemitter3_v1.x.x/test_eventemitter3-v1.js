// @flow
import EventEmitter from 'eventemitter3';

class A extends EventEmitter {
}

const a: EventEmitter = new A();
a.on('test', () => {});
a.off('test');
// $ExpectError
a.off();

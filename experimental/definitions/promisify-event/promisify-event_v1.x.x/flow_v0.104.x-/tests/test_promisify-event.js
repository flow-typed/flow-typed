// @flow
import emitted from 'promisify-event';
import EventEmitter from 'events';

const emitter = new EventEmitter();

emitted(emitter, 'foo').then((value: number) => {}).catch((error: Error) => {});
emitted(emitter, 'foo').cancel();

// $ExpectError
emitted(emitter, 2);
// $ExpectError
emitted(emitter, null);
// $ExpectError
emitted(emitter);
// $ExpectError
emitted('foo', emitter);


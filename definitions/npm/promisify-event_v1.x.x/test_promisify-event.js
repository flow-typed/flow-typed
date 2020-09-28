// @flow
import emitted from 'promisify-event';
import EventEmitter from 'events';

const emitter = new EventEmitter();

emitted(emitter, 'foo').then((value: number) => {}).catch((error: Error) => {});
emitted(emitter, 'foo').cancel();

// $FlowExpectedError
emitted(emitter, 2);
// $FlowExpectedError
emitted(emitter, null);
// $FlowExpectedError
emitted(emitter);
// $FlowExpectedError
emitted('foo', emitter);


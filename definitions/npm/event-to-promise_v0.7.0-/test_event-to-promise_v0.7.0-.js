/* @flow */

import eventToPromise from 'event-to-promise';
import EventEmitter from 'events';

const emitter = new EventEmitter();

// $ExpectError
eventToPromise(emitter);

const waitForData: Promise<Buffer> = eventToPromise(emitter, 'data');
const waitForDataNoClose: Promise<Buffer> = eventToPromise(emitter, 'data', {error: 'close'});
const waitForDataOrEnd: Promise<?Buffer> = eventToPromise.multi(emitter, ['data', 'end'], ['error', 'close']);
const waitForFailure: Promise<Error> = eventToPromise(emitter, 'error', {ignoreErrors: true});
const waitForMultiple: Promise<Array<*>> = eventToPromise(emitter, 'data', {array: true});

const cancelable = eventToPromise(emitter, 'data');
cancelable.cancel();

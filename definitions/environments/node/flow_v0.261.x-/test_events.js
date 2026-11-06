/* @flow */

const EventEmitter = require('events');
const emitter = new EventEmitter();
const noop = function() {}

emitter.addListener('foo', noop);         // ok
emitter.addListener('bar', noop).addListener('baz', noop); // ok: supports chaining
// $FlowExpectedError[incompatible-type]
emitter.addListener();                    // err: both args are required
// $FlowExpectedError[incompatible-type]
emitter.addListener(123, {});             // err: `event` and `handler `type mismatch

emitter.emit('foo', 'bar', {}, [], noop); // ok: emits `foo` with any args
emitter.emit('foo');                      // ok: emits `foo` with no event data
// $FlowExpectedError[incompatible-type]
emitter.emit({});                         // err: `event` must be a string

emitter.eventNames().pop();               // ok: returns string[]
// $FlowExpectedError[extra-arg]
emitter.eventNames('foo')                 // err: does not process args

emitter.listeners('foo').pop();           // ok: returns Function[]
// $FlowExpectedError[not-a-function]
emitter.listeners('foo').pop()();         // err: Function | void
emitter.listeners('foo').pop()?.();       // ok: optional chaining of Function | void
// $FlowExpectedError[incompatible-type]
emitter.listeners();                      // err: requires `event`

emitter.listenerCount('foo').toFixed();   // ok: returns a number
// $FlowExpectedError[incompatible-type]
emitter.listenerCount();                  // err: requires `event`

emitter.on('foo', noop);                  // ok
emitter.on('bar', noop).on('baz', noop);  // ok: chaining
// $FlowExpectedError[incompatible-type]
emitter.on(123, []);                      // err: `event` and `handler `type mismatch

emitter.once('foo', noop);                // ok
emitter.once('bar', noop).on('baz', noop);  // ok: chaining
// $FlowExpectedError[incompatible-type]
emitter.once(123, []);                    // err: `event` and `handler `type mismatch

emitter.prependListener('foo', noop);     // ok
emitter.prependListener('bar', noop).prependListener('baz', noop); // ok: supports chaining
// $FlowExpectedError[incompatible-type]
emitter.prependListener();                // err: both args are required
// $FlowExpectedError[incompatible-type]
emitter.prependListener(123, {});         // err: `event` and `handler `type mismatch

emitter.prependOnceListener('foo', noop); // ok
emitter.prependOnceListener('bar', noop).prependOnceListener('baz', noop); // ok: supports chaining
// $FlowExpectedError[incompatible-type]
emitter.prependOnceListener();            // err: both args are required
// $FlowExpectedError[incompatible-type]
emitter.prependOnceListener(123, {});     // err: `event` and `handler `type mismatch

emitter.removeAllListeners('foo');        // ok
emitter.removeAllListeners();             // ok
emitter.removeAllListeners().removeAllListeners(); // ok: supports chaining
// $FlowExpectedError[incompatible-type]
emitter.removeAllListeners(123);          // err: `event` must be a string

emitter.removeListener('foo', noop);      // ok
emitter.removeListener('foo', noop).removeListener('foo', noop); // ok: supports chaining
// $FlowExpectedError[incompatible-type]
emitter.removeListener();                 // err: both args are required
// $FlowExpectedError[incompatible-type]
emitter.removeListener(123, {});          // `event` and `handler `type mismatch

emitter.off('foo', noop);                 // ok
emitter.off('foo', noop).off('foo', noop); // ok: supports chaining
// $FlowExpectedError[incompatible-type]
emitter.off();                            // err: both args are required
// $FlowExpectedError[incompatible-type]
emitter.off(123, {});                     // `event` and `handler `type mismatch

emitter.setMaxListeners(5);               // ok
// $FlowExpectedError[incompatible-type]
emitter.setMaxListeners('foo');           // err: numeric arg is required

emitter.getMaxListeners().toFixed();      // ok
// $FlowExpectedError[extra-arg]
emitter.getMaxListeners('foo');           // err: does not process args

emitter.rawListeners('foo').pop();        // ok: returns Function[]
// $FlowExpectedError[not-a-function]
emitter.rawListeners('foo').pop()();      // err: Function | void
emitter.rawListeners('foo').pop()?.();    // ok: optional chaining of Function | void
// $FlowExpectedError[incompatible-type]
emitter.rawListeners();                   // err: requires `event`

EventEmitter.defaultMaxListeners.toFixed() // ok

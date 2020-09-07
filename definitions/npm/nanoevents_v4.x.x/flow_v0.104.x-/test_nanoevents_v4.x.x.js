import createNanoEvents from 'nanoevents';

const defaultEmitter = createNanoEvents();

defaultEmitter.emit('any');
// $FlowExpectedError event name is missing.
defaultEmitter.emit();
defaultEmitter.on('any', arg => {
  (arg: number);
});
// $FlowExpectedError event handler is missing
defaultEmitter.on('any');

const emitter = createNanoEvents<{|
  event1: [number],
  event2: [],
|}>();

emitter.emit('event1', 0);
// $FlowExpectedError should be number
emitter.emit('event1', 'string');
emitter.emit('event2');
// $FlowExpectedError no parameters expected
emitter.emit('event2', 'string');

emitter.on('event1', (arg: number) => {});
// $FlowExpectedError should be number
emitter.on('event1', (arg: string) => {});

emitter.on('event2', () => {});
// $FlowExpectedError no parameters expected
emitter.on('event2', (arg: number) => {});

const unbind = emitter.on('event1', () => {});
unbind();

// $FlowExpectedError no parameters expected
unbind(0);

emitter.events.event1;
// $FlowExpectedError not defined event
emitter.events.event3;
// $FlowExpectedError can be undefined
(emitter.events.event1: Array<(number) => void>);
(emitter.events.event1: Array<(number) => void> | void);

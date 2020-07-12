import { describe, it } from 'flow-typed-test';
import { EventEmitter } from 'fbemitter';

const emitter = new EventEmitter();

it('should not allow constructor args', () => {
  // $FlowExpectedError: no args required
  new EventEmitter('foo');
});

describe('#emit()', () => {
  it('should emit', () => {
    emitter.emit('foo');
    emitter.emit('bar', 'baz', 'fiz');
  });

  it('should require arguments', () => {
    // $FlowExpectedError: args required
    emitter.emit();
  });
});

describe('#addListener()', () => {
  it('should add listener', () => {
    emitter.addListener('foo', () => {});
  });

  it('should require two args', () => {
    // $FlowExpectedError: args required
    emitter.addListener();
    // $FlowExpectedError: args required
    emitter.addListener('foo');
    // $FlowExpectedError: string, fn required
    emitter.addListener(() => {}, 'foo');
  });

  it('should return subscription instance', () => {
    const subscription = emitter.addListener('foo', () => {});

    subscription.remove();
    // $FlowExpectedError: no args required
    subscription.remove('foo');
  });
});

describe('#once()', () => {
  it('should add listener', () => {
    emitter.once('foo', () => {});
  });

  it('should require two args', () => {
    // $FlowExpectedError: args required
    emitter.once();
    // $FlowExpectedError: args required
    emitter.once('foo');
    // $FlowExpectedError: string, fn required
    emitter.once(() => {}, 'foo');
  });

  it('should return subscription instance', () => {
    const subscription = emitter.addListener('foo', () => {});

    subscription.remove();
    // $FlowExpectedError: no args required
    subscription.remove('foo');
  });
});

describe('#listeners()', () => {
  it('should list listeners', () => {
    const listeners = emitter.listeners('foo');
    if (listeners.length) {
      listeners.forEach(cb => cb() || cb('foo', 'bar'));
    }
    // $FlowExpectedError: args required
    emitter.listeners();
  });
});

describe('#removeAllListeners()', () => {
  it('should remove all listeners', () => {
    emitter.removeAllListeners();
  });

  it('should remove listeners by event type', () => {
    emitter.removeAllListeners('foo');
  });

  it('should accept only strings', () => {
    // $FlowExpectedError: string required
    emitter.removeAllListeners({ foo: 1 });
    // $FlowExpectedError: only one arg is possible
    emitter.removeAllListeners('foo', { foo: 1 });
  });
});

it('should allow subclassing', () => {
  class MyEventEmitter extends EventEmitter {
    __emitToSubscription(subscription, eventType, ...args) {
      const start = Date.now();
      subscription.listener.apply(subscription.context, args);

      const time = Date.now() - start;
      console.log('callback-time', { eventType, time });
    }
  }
});

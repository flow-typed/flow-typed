import { describe, it } from "flow-typed-test";
import NanoEvents from "nanoevents";

describe("default", () => {
  it("should create instance", () => {
    // $FlowExpectedError: call a constructor
    NanoEvents();

    // $FlowExpectedError: not accept arguments
    new NanoEvents(1);

    const emitter = new NanoEvents();

    emitter.emit("message");

    // $FlowExpectedError: allow only string as event name
    emitter.emit(1);

    emitter.emit("event", {});
    emitter.emit("event", 1);
    emitter.emit("event", "");
    emitter.emit("event", true);

    emitter.on("event", () => {});

    emitter.on("event", arg => {
      console.log(arg);
    });

    // $FlowExpectedError: allow only string as even name
    emitter.on(1, () => {});

    // $FlowExpectedError: allow only functions as callback
    emitter.on("event", 1);
  });

  it('should throw error on emit wrong type', () => {
    const emitter = new NanoEvents<{ message: 'message-1' | 'message-2', error: Error, ... }>();

    // $FlowExpectedError: allow only message-1 or message-2 strings
    emitter.emit('message', 1);
    emitter.emit('message', 'message-1');
    emitter.emit('message', 'message-2');

    // $FlowExpectedError: allow only Error
    emitter.emit('error', 'error message');
    emitter.emit('error', new Error('error message'));

    // $FlowExpectedError: allow only message or string events
    emitter.emit('wrong event');
  });

  it('should throw error on handle wrong event type or wrong handler type', () => {
    const emitter = new NanoEvents<{ message: 'message-1' | 'message-2', error: Error, ... }>();

    emitter.on('message', message => {
      // $FlowExpectedError: allow only message-1 or message-2 strings
      (message: 'wrong message');
      (message: 'message-1' | 'message-2');
    });

    emitter.on('error', error => {
      // $FlowExpectedError: allow only Error instance
      (error: string);
      (error: Error);
    })
  });
});

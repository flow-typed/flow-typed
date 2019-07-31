import { describe, it } from "flow-typed-test";
import NanoEvents from "nanoevents";

describe("default", () => {
  it("should create instance", () => {
    // $ExpectError: call a constructor
    NanoEvents();

    // $ExpectError: not accept arguments
    new NanoEvents(1);

    const emitter = new NanoEvents();

    emitter.emit("message");

    // $ExpectError: allow only string as event name
    emitter.emit(1);

    emitter.emit("event", {});
    emitter.emit("event", 1);
    emitter.emit("event", "");
    emitter.emit("event", true);

    emitter.on("event", () => {});

    emitter.on("event", arg => {
      console.log(arg);
    });

    // $ExpectError: allow only string as even name
    emitter.on(1, () => {});

    // $ExpectError: allow only functions as callback
    emitter.on("event", 1);
  });

  it('should throw error on emit wrong type', () => {
    const emitter = new NanoEvents<{ message: 'message-1' | 'message-2', error: Error, ... }>();

    // $ExpectError: allow only message-1 or message-2 strings
    emitter.emit('message', 1);
    emitter.emit('message', 'message-1');
    emitter.emit('message', 'message-2');

    // $ExpectError: allow only Error
    emitter.emit('error', 'error message');
    emitter.emit('error', new Error('error message'));

    // $ExpectError: allow only message or string events
    emitter.emit('wrong event');
  });

  it('should throw error on handle wrong event type or wrong handler type', () => {
    const emitter = new NanoEvents<{ message: 'message-1' | 'message-2', error: Error, ... }>();

    emitter.on('message', message => {
      // $ExpectError: allow only message-1 or message-2 strings
      (message: 'wrong message');
      (message: 'message-1' | 'message-2');
    });

    emitter.on('error', error => {
      // $ExpectError: allow only Error instance
      (error: string);
      (error: Error);
    })
  });
});

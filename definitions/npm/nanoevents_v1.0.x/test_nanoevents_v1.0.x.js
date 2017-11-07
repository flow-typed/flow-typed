import NanoEvents from "nanoevents";

// $ExpectError: call a constructor
NanoEvents();

// $ExpectError: not accept arguments
new NanoEvents(1);

const emitter = new NanoEvents();

emitter.emit("event");

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

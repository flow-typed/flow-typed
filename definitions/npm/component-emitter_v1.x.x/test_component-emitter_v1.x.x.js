import Emitter from "component-emitter";

Emitter();
Emitter({});
Emitter({ foo: "bar" });

const e = Emitter();
e ===
  e
    .on("on", ok => {})
    .addEventListener("addEventListener", ok => {})
    .once("once", ok => {})
    .off("off", ok => {})
    .removeListener("removeListener", ok => {})
    .removeAllListeners("removeAllListeners", ok => {})
    .removeEventListener("removeEventListener", ok => {})
    .emit("foo", { bar: "baz" });

e.listeners("foo").length;
e.hasListeners("foo");

// $ExpectError
Emitter(5);

import io from "socket.io-client";

io("foo");
io("foo", {});
io("foo", { forceNew: true });

const socket = io("foo")
  .open()
  .connect()
  .send({ foo: "bar" }, { bar: "baz" })
  .emit("bar", { foo: "bar" }) // overrides Emitter#emit
  .close()
  .disconnect()
  .compress(true)
  .on("foo", () => {})
  .addEventListener("foo", () => {})
  .once("foo", () => {})
  .off("foo", () => {})
  .removeListener("foo", () => {})
  .removeAllListeners("foo", () => {})
  .removeEventListener("foo", () => {});

const callbacks = socket.listeners("foo");
const hasFooListener = socket.hasListeners("foo");

const manager = socket.io
  .reconnection(true)
  .reconnectionAttempts(5)
  .reconnectionDelay(5)
  .randomizationFactor(5)
  .reconnectionDelayMax(5)
  .timeout(5)
  .open(err => {}, {})
  .connect(() => {}, {})
  .on("foo", () => {})
  .addEventListener("foo", () => {})
  .once("foo", () => {})
  .off("foo", () => {})
  .removeListener("foo", () => {})
  .removeAllListeners("foo", () => {})
  .removeEventListener("foo", () => {})
  .emit("foo", { bar: "baz" });

manager.socket("/baz", {});

// $ExpectError
io("foo", { invalid_key: 5 });

// $ExpectError
io(5);

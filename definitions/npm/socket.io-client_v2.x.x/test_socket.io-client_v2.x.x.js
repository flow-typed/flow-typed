import io from "socket.io-client";

io("foo");
io("foo", {});
io("foo", { forceNew: true, path: "/foobar", transports: ["websocket"] });

io.connect("foo");
io.connect("foo", {});
io.connect("foo", { forceNew: false, path: "/barbaz", transports: ["polling"] });

// $ExpectError
io("foo", { invalid_key: 5 });

// $ExpectError
io("foo", { transports: ["invalid transport"] });

// $ExpectError
io(5);


// test Socket
const socket = io("foo");
socket.hasListeners("event");
socket.listeners("event");
socket
  .open()
  .connect()
  .send("any", "number", "of", "args")
  .emit("event", "any", "number", "of", "args")
  .close()
  .disconnect()
  .compress(false)
  .on("event", cb => {})
  .addEventListener("event", cb => {})
  .once("event", cb => {})
  .off("event", cb => {})
  .removeListener("event", cb => {})
  .removeAllListeners("event", cb => {})
  .removeEventListener("event", cb => {});

// test Manager
const manager = socket.io;
manager
  .reconnection(true)
  .reconnectionAttempts(4)
  .reconnectionDelay(10)
  .randomizationFactor(100)
  .reconnectionDelayMax(2000)
  .timeout(60000)
  .open(err => {})
  .connect(err => {})
  .socket("/nsp", { query: "foo" })
  .on("event", cb => {})
  .addEventListener("event", cb => {})
  .once("event", cb => {})
  .off("event", cb => {})
  .removeListener("event", cb => {})
  .removeAllListeners("event", cb => {})
  .removeEventListener("event", cb => {})
  .emit("event", { payload: true });

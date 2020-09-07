// @flow

import SockJS from "sockjs-client";

const sock = new SockJS("some url");

new SockJS("some url", null, {});

new SockJS("some url", null, {
  server: "ABCD",
  transports: "iframe-eventsource",
  sessionId: 4
});

new SockJS("some url", undefined, {
  server: "ABCD"
});

// sessionId generator
new SockJS("some url", null, {
  sessionId: () => "X"
});

new SockJS("some url", null, { transports: "jsonp-polling" });
new SockJS("some url", null, { transports: "xdr-streaming" });
new SockJS("some url", null, { transports: "xdr-polling" });
new SockJS("some url", null, { transports: "iframe-htmlfile" });
new SockJS("some url", null, { transports: "iframe-xhr-polling" });
new SockJS("some url", null, { transports: "xhr-streaming" });
new SockJS("some url", null, { transports: "xhr-polling" });
new SockJS("some url", null, { transports: "iframe-eventsource" });

sock.onopen = function() {
  console.log("open");
  sock.send("test");
};

sock.onmessage = function(e) {
  e.data;
};

sock.onclose = function() {
  console.log("close");
};

sock.close();

sock.close(4);

sock.close(4, "reason");

sock.send("data");
sock.send(new Blob(["blob"]));
sock.send(new ArrayBuffer(1));
sock.send(new DataView(new ArrayBuffer(1)));

// $FlowExpectedError
new SockJS(null);

// $FlowExpectedError
new SockJS("some url", null, { transports: "this-is-not-a-transport" });

// $FlowExpectedError
new SockJS("some url", {
  server: "ABCD",
  transports: "iframe-eventsource",
  sessionId: 4
});

// $FlowExpectedError
new SockJS("some url", null, { sessionId: () => 4 });

// $FlowExpectedError
sock.onopen = 4;

// $FlowExpectedError
sock.onmessage = 4;

sock.onmessage = function(e) {
  // $FlowExpectedError
  e.notHere;
};

// $FlowExpectedError
sock.onclose = 4;

// $FlowExpectedError
sock.close("wrong reason");

// @flow

var dns = require("dns");

/* lookup */

dns.lookup("test.com", (err, address, family) => {
  (err: ?Error);
  (address: string);
  (family: number);
});

dns.lookup("test.com", 6, (err, address, family) => {
  (err: ?Error);
  (address: string);
  (family: number);
});

dns.lookup("test.com", { family: 6 }, (err, address, family) => {
  (err: ?Error);
  (address: string);
  (family: number);
});

// $FlowExpectedError[incompatible-type]
dns.lookup(); // error

// $FlowExpectedError[incompatible-type]
dns.lookup("test.com"); // error

// $FlowExpectedError[incompatible-type]
dns.lookup("test.com", 4); // error

// $FlowExpectedError[incompatible-type]
dns.lookup("test.com", { family: 6 }); // error

// $FlowExpectedError[incompatible-type]
dns.lookup("test.com", null, (err: mixed, address: mixed, family: mixed) => {}); // error

// $FlowExpectedError[incompatible-type]
dns.lookup((err: mixed, address: mixed, family: mixed) => {}); // error

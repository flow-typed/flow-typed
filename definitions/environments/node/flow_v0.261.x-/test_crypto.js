/* @flow */

const crypto = require('crypto');

let tests = [
  // Hmac is a duplex stream
  function () {
    const hmac = crypto.createHmac('sha256', 'a secret');

    hmac.on('readable', () => {
      hmac.read() as ?(string | Buffer);
      // $FlowExpectedError[incompatible-cast]
      hmac.read() as number; // 4 errors: null, void, string, Buffer
    });

    hmac.write('some data to hash');
    // $FlowExpectedError[incompatible-call]
    hmac.write(123); // 2 errors: not a string or a Buffer
    hmac.end();
  },

  // Hmac supports update and digest functions too
  function (buf: Buffer) {
    const hmac = crypto.createHmac('sha256', 'a secret');

    hmac.update('some data to hash');
    hmac.update('foo', 'utf8');
    // $FlowExpectedError[incompatible-call]
    hmac.update('foo', 'bogus'); // 1 error
    hmac.update(buf);
    hmac.update(buf, 'utf8');
    // $FlowExpectedError[incompatible-call]
    hmac.update(buf, 'bogus'); // 1 error

    // it's also chainable
    hmac.update('some data to hash').update(buf).digest() as Buffer;

    hmac.digest('hex') as string;
    hmac.digest() as Buffer;
    // $FlowExpectedError[incompatible-cast]
    hmac.digest('hex') as void; // 1 error
    // $FlowExpectedError[incompatible-cast]
    hmac.digest() as void; // 1 error
  },
];

// @flow

import jwt from 'jsonwebtoken'

const payload = {
  foo: 'bar'
};

// $ExpectError
jwt.sign(payload);

jwt.sign(payload, 'secret');

// $ExpectError
jwt.sign(payload, 'secret', (err: number) => undefined);

jwt.sign(payload, 'secret', (err: Error, token: string) => undefined);

jwt.sign(payload, Buffer.from('secret'));

jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256'
});

jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256'
});

// $ExpectError
jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256',
  mutatePayload: 1,
});

// $ExpectError
jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'PEMDAS'
});

// $ExpectError
jwt.sign(payload, { key: 'foo', passphrase: 'bar' });

// $ExpectError
jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, { subject: 'missing algo' });

// $ExpectError
jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, (foo) => undefined);

jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, { algorithm: 'ES512' }, (err: Error) => undefined);

jwt.verify('token', 'secret');

jwt.verify('token', 'secret', err => undefined);

// $ExpectError
jwt.verify('token', { key: 'secret', passphrase: 'foo' });

// $ExpectError
jwt.verify('token', { key: 'secret', passphrase: 'foo' }, { algorithms: ['not-real'] });

jwt.verify('token', { key: 'secret', passphrase: 'foo' }, { algorithms: ['ES512'] });

jwt.decode('foo');

jwt.decode('foo', {
  json: true
});

// $ExpectError
jwt.decode(1234);

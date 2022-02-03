// @flow

import jwt from 'jsonwebtoken'

const payload = {
  foo: 'bar'
};

// $FlowExpectedError[incompatible-call]
jwt.sign(payload);

jwt.sign(payload, 'secret');

// $FlowExpectedError[incompatible-call]
jwt.sign(payload, 'secret', (token: number) => undefined);

jwt.sign(payload, 'secret', (token: Error | string) => undefined);

jwt.sign(payload, Buffer.from('secret'));

jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256'
});

// $FlowExpectedError[incompatible-call]
jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'PEMDAS'
});

// $FlowExpectedError[incompatible-call]
jwt.sign(payload, { key: 'foo', passphrase: 'bar' });

// $FlowExpectedError[incompatible-call]
jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, { subject: 'missing algo' });

// $FlowExpectedError[incompatible-call]
jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, (foo) => undefined);

jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, { algorithm: 'ES512' }, (foo) => undefined);

jwt.verify('token', 'secret');

jwt.verify('token', 'secret', (foo) => undefined);

// $FlowExpectedError[incompatible-call]
jwt.verify('token', { key: 'secret', passphrase: 'foo' });

// $FlowExpectedError[incompatible-call]
jwt.verify('token', { key: 'secret', passphrase: 'foo' }, { algorithms: ['not-real'] });

jwt.verify('token', { key: 'secret', passphrase: 'foo' }, { algorithms: ['ES512'] });

jwt.decode('foo');

jwt.decode('foo', {
  json: true
});

// $FlowExpectedError[incompatible-call]
jwt.decode(1234);

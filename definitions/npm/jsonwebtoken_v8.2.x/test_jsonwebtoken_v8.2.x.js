// @flow

import jwt from 'jsonwebtoken'

const payload = {
  foo: 'bar'
};

// $FlowExpectedError
jwt.sign(payload);

jwt.sign(payload, 'secret');

// $FlowExpectedError
jwt.sign(payload, 'secret', (err: number) => undefined);

jwt.sign(payload, 'secret', (err: Error, token: string) => undefined);

jwt.sign(payload, Buffer.from('secret'));

jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256'
});

jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256'
});

// $FlowExpectedError
jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256',
  mutatePayload: 1,
});

// $FlowExpectedError
jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'PEMDAS'
});

// $FlowExpectedError
jwt.sign(payload, { key: 'foo', passphrase: 'bar' });

// $FlowExpectedError
jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, { subject: 'missing algo' });

// $FlowExpectedError
jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, (foo) => undefined);

jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, { algorithm: 'ES512' }, (err: Error) => undefined);

jwt.verify('token', 'secret');

jwt.verify('token', 'secret', err => undefined);

// $FlowExpectedError
jwt.verify('token', { key: 'secret', passphrase: 'foo' });

// $FlowExpectedError
jwt.verify('token', { key: 'secret', passphrase: 'foo' }, { algorithms: ['not-real'] });

jwt.verify('token', { key: 'secret', passphrase: 'foo' }, { algorithms: ['ES512'] });

jwt.decode('foo');

jwt.decode('foo', {
  json: true
});

// $FlowExpectedError
jwt.decode(1234);

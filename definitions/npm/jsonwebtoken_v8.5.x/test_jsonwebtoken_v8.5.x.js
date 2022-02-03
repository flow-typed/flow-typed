// @flow

import jwt from 'jsonwebtoken'

const payload = {
  foo: 'bar'
};

// $FlowExpectedError[incompatible-call]
jwt.sign(payload);

jwt.sign(payload, 'secret');

// $FlowExpectedError[incompatible-call]
jwt.sign(payload, 'secret', (err: number) => undefined);

jwt.sign(payload, 'secret', (err: Error, token: string) => undefined);

jwt.sign(payload, Buffer.from('secret'));

jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256'
});

jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256'
});

// $FlowExpectedError[incompatible-call]
jwt.sign(payload, Buffer.from('secret'), {
  algorithm: 'RS256',
  mutatePayload: 1,
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

jwt.sign(payload, { key: 'foo', passphrase: 'bar' }, { algorithm: 'ES512' }, (err: Error) => undefined);

jwt.verify('token', 'secret');

jwt.verify('token', 'secret', err => undefined);

// $FlowExpectedError[incompatible-call]
jwt.verify('token', { key: 'secret', passphrase: 'foo' });

// $FlowExpectedError[incompatible-call]
jwt.verify('token', { key: 'secret', passphrase: 'foo' }, { algorithms: ['not-real'] });

jwt.verify('token', { key: 'secret', passphrase: 'foo' }, { algorithms: ['ES512'] });

function getKey(header, callback){
  callback(null, "foobar")
}

// $FlowExpectedError[incompatible-call]
jwt.verify('token', getKey, { algorithms: ['RS256'] })

jwt.verify('token', getKey, { algorithms: ['RS256'] }, (err) => undefined)

// $FlowExpectedError[incompatible-call]
jwt.verify('token', getKey)

jwt.verify('token', getKey, (err) => undefined)

jwt.decode('foo');

jwt.decode('foo', {
  json: true
});

// $FlowExpectedError[incompatible-call]
jwt.decode(1234);

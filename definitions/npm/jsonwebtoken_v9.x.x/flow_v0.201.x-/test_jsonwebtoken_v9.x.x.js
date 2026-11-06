// @flow
import jwt from 'jsonwebtoken';
import {
  sign,
  verify,
  decode,
  JsonWebTokenError,
  TokenExpiredError,
  NotBeforeError,
} from 'jsonwebtoken';

const KEY = 'secret';

const token: string = jwt.sign({ foo: 'bar' }, KEY);
const s2: string = sign('a-string-payload', KEY);
const s3: string = sign({ foo: 'bar' }, KEY, {
  algorithm: 'HS256',
  expiresIn: '1h',
});
const s4: string = sign({ foo: 'bar' }, KEY, {
  algorithm: 'ES256',
  expiresIn: 3600,
  issuer: 'me',
  audience: ['a', 'b'],
  keyid: 'kid-1',
  header: { kid: 'kid-1' },
});
sign({ foo: 'bar' }, KEY, (err, encoded) => {
  const e: Error | null = err;
  const en: string | void = encoded;
});
sign({ foo: 'bar' }, KEY, { algorithm: 'RS256' }, (err, encoded) => {});

verify(token, KEY);
verify(token, KEY, { algorithms: ['RS256'], issuer: 'me' });
verify(
  token,
  (header, cb) => {
    const kid: string | void = header.kid;
    cb(null, 'pem-string');
  },
  { algorithms: ['RS256'] },
  (err, payload) => {
    const e: JsonWebTokenError | NotBeforeError | TokenExpiredError | null = err;
  },
);

decode(token);
decode(token, { complete: true });

const maybeError: mixed = null;
if (maybeError instanceof TokenExpiredError) {
  const expiredAt: Date = maybeError.expiredAt;
}
if (maybeError instanceof NotBeforeError) {
  const date: Date = maybeError.date;
}
if (maybeError instanceof JsonWebTokenError) {
  const inner: Error = maybeError.inner;
}

// $FlowExpectedError[incompatible-type] - token must be a string
verify(123, KEY);
// $FlowExpectedError[incompatible-type] - invalid algorithm
sign({ foo: 'bar' }, KEY, { algorithm: 'NOPE' });
// $FlowExpectedError[incompatible-type] - secret/key is required
sign({ foo: 'bar' });

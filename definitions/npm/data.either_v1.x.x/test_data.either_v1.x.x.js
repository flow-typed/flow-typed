// @flow

import Either from 'data.either';

// Warning: this should be improved...

const a = Either.Left('fail');
const b = Either.Right(5);
const c = Either.Right(10);

b.map(x => x + 5)
.chain(x => x < 5 ? Either.Right(x + 5) : Either.Left('too big'));

const x: number = b.getOrElse(10);

// $ExpectError
b.chain(x => x + x);

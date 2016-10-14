// @flow

import uuid from 'uuid';

uuid.v1();
uuid.v4();

const buffer = new Buffer();
uuid.v1({ clockseq: 1});
uuid.v1(
  { clockseq: 1 },
  buffer,
);
uuid.v1(
  { clockseq: 1 },
  buffer,
  2,
);

uuid.v1({ rng: () => 42});
uuid.v4(
  { random: [1, 2, 3] },
  buffer,
);


// $ExpectError
uuid.v2()
// $ExpectError
uuid.v1({
  foo: 'bar',
});
// $ExpectError
uuid.v4({
  random: 99,
});
// $ExpectError
uuid.v1({
  node: 99,
});
// $ExpectError
uuid.v1({
  clockseq: [1,2,3,4],
});
clockseq: 1
// $ExpectError
uuid.v1({ rng: () => 'blah'});

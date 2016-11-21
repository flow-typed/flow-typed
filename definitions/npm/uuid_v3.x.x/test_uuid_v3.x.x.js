// @flow
import uuid from 'uuid';

(uuid.v1(): string);
(uuid.v4(): string);

uuid.v1({
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date('2011-11-01').getTime(),
  nsecs: 5678
});

// $ExpectError
uuid.v1({ yolo: true })
// $ExpectError
uuid.v4({ yolo: true })

const arr = new Array(32);

uuid.v4({
  random: [
    0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
    0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
  ],
  // Fake random number generator
  rng: () => [42, 42]
});

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

// $FlowExpectedError
uuid.v1({ yolo: true });
// $FlowExpectedError
uuid.v4({ yolo: true });

const arr = new Array(32);

uuid.unparse(arr);
uuid.unparse(arr, 16);
// $FlowExpectedError
uuid.unparse('yoloista');
// $FlowExpectedError
uuid.unparse(arr, { super: man });

uuid.v4({
  random: [
    0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
    0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
  ]
});

uuid.v4({
  // Fake random number generator
  rng: () => [
    0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
    0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
  ]
});

uuid.v4({
  // Fake random number generator
  rng: () => Buffer.alloc(16)
});

// $FlowExpectedError
uuid.v4({
  rng: () => 'bla'
});

// $FlowExpectedError
uuid.parse([23]);
const buffer1 = uuid.parse('797ff043-11eb-11e1-80d6-510998755d10');
uuid.unparse(buffer1);

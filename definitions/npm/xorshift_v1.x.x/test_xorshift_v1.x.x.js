import xorshift from 'xorshift';

(xorshift.random(): number);
(xorshift.randomint(): [number, number]);

// $FlowExpectedError number. This type is incompatible with string
(xorshift.random(): string);

// $FlowExpectedError tuple type. This type is incompatible with number
(xorshift.randomint(): number);

const XorShift = xorshift.constructor;
const rng = new XorShift([1, 0, 2, 0]);

(rng.random(): number);
(rng.randomint(): [number, number]);

// $FlowExpectedError number. This type is incompatible with string
(rng.random(): string);

// $FlowExpectedError tuple type. This type is incompatible with number
(rng.randomint(): number);

// $FlowExpectedError
const rng1 = new XorShift();

// $FlowExpectedError array literal. This type is incompatible with a tuple type that expects a 4th element of non-optional type
const rng2 = new XorShift([1, 0, 2]);

// $FlowExpectedError number. This type is incompatible with the expected param type of tuple type
const rng3 = new XorShift(1);

// $FlowExpectedError string. This type is incompatible with the expected param type of tuple type
const rng4 = new XorShift('abc');

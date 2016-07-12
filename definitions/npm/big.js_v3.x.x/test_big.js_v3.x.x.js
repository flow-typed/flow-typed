// @flow

import Big from "big.js";

// Properties
(Big.DP: number);
(Big.RM: number);
// $ExpectError
(Big.DP: string);
// $ExpectError
(Big.RM: string);
Big.RM = 0;
Big.RM = 1;
Big.RM = 2;
Big.RM = 3;
// $ExpectError
Big.RM = 4;
// $ExpectError
Big.RM = -1;

// Constructors
(new Big(1): Big);
(new Big('1'): Big);
(new Big(new Big(5)): Big);

(Big(1): Big);
(Big('1'): Big);
(Big(Big(5)): Big);

// $ExpectError
(new Big({}): Big);
// $ExpectError
(new Big([]): Big);
// $ExpectError
(Big({}): Big);
// $ExpectError
(Big([]): Big);
// $ExpectError
Big()
// $ExpectError
Big().nope;

// Methods
let b: Big = Big('2');

(b.abs(): Big);
(b.cmp(b): number);
(b.div(b): Big);
(b.eq(b): boolean);
(b.gt(b): boolean);
(b.gte(b): boolean);
(b.lt(b): boolean);
(b.lte(b): boolean);
(b.minus(b): Big);
(b.mod(b): Big);
(b.plus(b): Big);
(b.pow(2): Big);
(b.round(): Big);
(b.round(1): Big);
(b.round(1, 2): Big);
// $ExpectError
(b.round(1, 4): Big);
(b.sqrt(): Big);
(b.times(b): Big);
(b.toExponential(): string);
(b.toExponential(7): string);
(b.toFixed(): string);
(b.toFixed(7): string);
(b.toPrecision(): string);
(b.toPrecision(): string);
(b.toPrecision(7): string);
(b.toString(): string);
(b.valueOf(): string);
(b.toJSON(): string);

// Properties
(b.c.length + 2);
// $ExpectError
b.c + 2;
(b.e: number);
(b.s: number);
// $ExpectError
(b.s: string);

// @flow

import Decimal from 'decimal.js-light';

// $ExpectError
Decimal.set({ precision: '2' });
// $ExpectError
Decimal.set({ rounding: '2' });
// $ExpectError
Decimal.set({ toExpNeg: '2' });
// $ExpectError
Decimal.set({ toExpPos: '2' });
// $ExpectError
Decimal.set({ LN10: [] });

Decimal.set({
  precision: 8, rounding: 8, toExpNeg: 9, toExpPos: 10, LN10: 2
});

// $ExpectError
Decimal.config({ precision: '2' });
// $ExpectError
Decimal.config({ rounding: '2' });
// $ExpectError
Decimal.config({ toExpNeg: '2' });
// $ExpectError
Decimal.config({ toExpPos: '2' });
// $ExpectError
Decimal.config({ LN10: [] });

Decimal.config({
  precision: 8, rounding: 8, toExpNeg: 9, toExpPos: 10, LN10: 2
});

// $ExpectError
Decimal.clone({ precision: '2' });
// $ExpectError
Decimal.clone({ rounding: '2' });
// $ExpectError
Decimal.clone({ toExpNeg: '2' });
// $ExpectError
Decimal.clone({ toExpPos: '2' });
// $ExpectError
Decimal.clone({ LN10: [] });

Decimal.clone({
  precision: 8, rounding: 8, toExpNeg: 9, toExpPos: 10, LN10: 2
});

const precision: number = Decimal.precision;
const rounding: number = Decimal.rounding;
const ROUND_UP: number = Decimal.ROUND_UP;
const ROUND_DOWN: number = Decimal.ROUND_DOWN;
const ROUND_CEIL: number = Decimal.ROUND_CEIL;
const ROUND_FLOOR: number = Decimal.ROUND_FLOOR;
const ROUND_HALF_UP: number = Decimal.ROUND_HALF_UP;
const ROUND_HALF_DOWN: number = Decimal.ROUND_HALF_DOWN;
const ROUND_HALF_EVEN: number = Decimal.ROUND_HALF_EVEN;
const ROUND_HALF_CEIL: number = Decimal.ROUND_HALF_CEIL;
const ROUND_HALF_FLOOR: number = Decimal.ROUND_HALF_FLOOR;
const toExpNeg: number = Decimal.toExpNeg;
const toExpPos: number = Decimal.toExpPos;
const LN10: Decimal = Decimal.LN10;

// $ExpectError
new Decimal({})
// $ExpectError
new Decimal({})

new Decimal(1);
new Decimal('2');
new Decimal(new Decimal(1));

const sample = new Decimal(1);
const abs1: Decimal = sample.absoluteValue();
const abs2: Decimal = sample.abs();

const cmp1: 1 | 0 | -1 = sample.comparedTo(2);
const cmp2: 1 | 0 | -1 = sample.cmp(2);
// $ExpectError
sample.comparedTo({});
// $ExpectError
sample.cmp({});

const dp1: number = sample.decimalPlaces();
const dp2: number = sample.dp();

const div1: Decimal = sample.dividedBy(1);
sample.dividedBy('2');
sample.dividedBy(new Decimal(1));
// $ExpectError
sample.dividedBy({});
const div2: Decimal = sample.div(1);
sample.div('2');
sample.div(new Decimal(1));
// $ExpectError
sample.div({});

const idiv1: Decimal = sample.dividedToIntegerBy(1);
sample.dividedToIntegerBy('2');
sample.dividedToIntegerBy(new Decimal(1));
// $ExpectError
sample.dividedToIntegerBy({});
const idiv2: Decimal = sample.idiv(1);
sample.idiv('2');
sample.idiv(new Decimal(1));
// $ExpectError
sample.idiv({});

const eq1: boolean = sample.equals(1);
sample.equals('2');
sample.equals(new Decimal(3));
// $ExpectError
sample.equals({});

const eq2: boolean = sample.eq(1);
sample.eq('2');
sample.eq(new Decimal(3));
// $ExpectError
sample.eq({});

const exp: number = sample.exponent();

const b1: boolean = sample.isInteger();
const b2: boolean = sample.isint();
const b3: boolean = sample.isNegative();
const b4: boolean = sample.isneg();
const b5: boolean = sample.isPositive();
const b6: boolean = sample.ispos();
const b7: boolean = sample.isZero();
const b8: boolean = sample.lessThan(1);
sample.lessThan('2');
sample.lessThan(new Decimal(3));
// $ExpectError
sample.lessThan({});
const b9: boolean = sample.lt(1);
sample.lt('2');
sample.lt(new Decimal(3));
// $ExpectError
sample.lt({});
const b10: boolean = sample.lessThanOrEqualTo(1);
sample.lessThanOrEqualTo('2');
sample.lessThanOrEqualTo(new Decimal(3));
// $ExpectError
sample.lessThanOrEqualTo({});
const b11: boolean = sample.lte(1);
sample.lte('2');
sample.lte(new Decimal(3));
// $ExpectError
sample.lte({});
const b12: boolean = sample.greaterThan(1);
sample.greaterThan('2');
sample.greaterThan(new Decimal(3));
// $ExpectError
sample.greaterThan({});
const b13: boolean = sample.gt(1);
sample.gt('2');
sample.gt(new Decimal(3));
// $ExpectError
sample.gt({});
const b14: boolean = sample.greaterThanOrEqualTo(1);
sample.greaterThanOrEqualTo('2');
sample.greaterThanOrEqualTo(new Decimal(3));
// $ExpectError
sample.greaterThanOrEqualTo({});
const b15: boolean = sample.gte(1);
sample.gte('2');
sample.gte(new Decimal(3));
// $ExpectError
sample.gte({});

const min1: Decimal = sample.minus(1);
sample.minus('2');
sample.minus(new Decimal(1));
// $ExpectError
sample.minus({});
const min2: Decimal = sample.sub(1);
sample.sub('2');
sample.sub(new Decimal(1));
// $ExpectError
sample.sub({});

const add1: Decimal = sample.plus(1);
sample.plus('2');
sample.plus(new Decimal(1));
// $ExpectError
sample.plus({});
const add2: Decimal = sample.add(1);
sample.add('2');
sample.add(new Decimal(1));
// $ExpectError
sample.add({});

const mod1: Decimal = sample.modulo(1);
sample.modulo('2');
sample.modulo(new Decimal(1));
// $ExpectError
sample.modulo({});
const mod2: Decimal = sample.mod(1);
sample.mod('2');
sample.mod(new Decimal(1));
// $ExpectError
sample.mod({});

const tm1: Decimal = sample.times(1);
sample.times('2');
sample.times(new Decimal(1));
// $ExpectError
sample.times({});
const tm2: Decimal = sample.mul(1);
sample.mul('2');
sample.mul(new Decimal(1));
// $ExpectError
sample.mul({});

const pow1: Decimal = sample.toPower(1);
sample.toPower('2');
sample.toPower(new Decimal(1));
// $ExpectError
sample.toPower({});
const pow2: Decimal = sample.pow(1);
sample.pow('2');
sample.pow(new Decimal(1));
// $ExpectError
sample.pow({});

const log1: Decimal = sample.logarithm(1);
sample.logarithm('2');
sample.logarithm(new Decimal(1));
sample.logarithm();
// $ExpectError
sample.logarithm({});
const log2: Decimal = sample.log(1);
sample.log('2');
sample.log(new Decimal(1));
sample.log();
// $ExpectError
sample.log({});

const exp2: Decimal = sample.naturalExponetial();
const exp3: Decimal = sample.exp();
const ln1: Decimal = sample.naturalLogarithm();
const ln2: Decimal = sample.ln();
const neg1: Decimal = sample.negated();
const neg2: Decimal = sample.neg();
const sqrt1: Decimal = sample.squareRoot();
const sqrt2: Decimal = sample.sqrt();
const int1: Decimal = sample.toInteger();
const int2: Decimal = sample.toint();
const num: number = sample.toNumber();

const pre1: number = sample.precision(true);
sample.precision(1);
// $ExpectError
sample.precision('2');
// $ExpectError
sample.precision({});
const pre2: number = sample.sd(true);
sample.sd(1);
// $ExpectError
sample.sd('2');
// $ExpectError
sample.sd({});

const str: string = sample.toString();
const val1: string = sample.valueOf();
const val2: string = sample.val();
const js: string = sample.toJSON();

const dp3: Decimal = sample.toDecimalPlaces();
sample.toDecimalPlaces(1);
sample.toDecimalPlaces(1, 2);
// $ExpectError
sample.toDecimalPlaces('1', '2');
const dp4: Decimal = sample.todp();
sample.todp(1);
sample.todp(1, 2);
// $ExpectError
sample.todp('1', '2');

const te1: string = sample.toExponential();
sample.toExponential(1);
sample.toExponential(1, 2);
// $ExpectError
sample.toExponential('1', '2');

const f1: string = sample.toFixed();
sample.toFixed(1);
sample.toFixed(1, 2);
// $ExpectError
sample.toFixed('1', '2');

const pre3: string = sample.toPrecision();
sample.toPrecision(1);
sample.toPrecision(1, 2);
// $ExpectError
sample.toPrecision('1', '2');

const sd1: Decimal = sample.toSignificantDigits();
sample.toSignificantDigits(1);
sample.toSignificantDigits(1, 2);
// $ExpectError
sample.toSignificantDigits('1', '2');
const sd2: Decimal = sample.tosd();
sample.tosd(1);
sample.tosd(1, 2);
// $ExpectError
sample.tosd('1', '2');

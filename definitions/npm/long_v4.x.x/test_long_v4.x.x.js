// @flow
import { describe, it } from 'flow-typed-test'
import long from 'long'

describe('constructor', () => {
    it('can construct', () => {
        new long(1, 2);
        new long(1, 2, true);
    })
})

describe('fields', () => {
    it('has fields', () => {
        const n = new long(1, 2);
        const low: number = n.low;
        const high: number = n.high;
        const unsigned: boolean = n.unsigned;
    })
})

describe('methods', () => {
    it('has lots of methods', () => {
        const n = new long(1, 2);

        let method;
        method = n.toNumber;
        method = n.add;
        method = n.and;
        method = n.compare;
        method = n.comp;
        method = n.divide;
        method = n.div;
        method = n.equals;
        method = n.eq;
        method = n.getHighBits;
        method = n.getHighBitsUnsigned;
        method = n.getLowBits;
        method = n.getLowBitsUnsigned;
        method = n.getNumBitsAbs;
        method = n.greaterThan;
        method = n.gt;
        method = n.greaterThanOrEqual;
        method = n.gte;
        method = n.ge;
        method = n.isEven;
        method = n.isNegative;
        method = n.isOdd;
        method = n.isPositive;
        method = n.isZero;
        method = n.eqz;
        method = n.lessThan;
        method = n.lt;
        method = n.lessThanOrEqual;
        method = n.lte;
        method = n.le;
        method = n.modulo;
        method = n.mod;
        method = n.rem;
        method = n.multiply;
        method = n.mul;
        method = n.negate;
        method = n.neg;
        method = n.not;
        method = n.notEquals;
        method = n.neq;
        method = n.ne;
        method = n.or;
        method = n.shiftLeft;
        method = n.shl;
        method = n.shiftRight;
        method = n.shr;
        method = n.shiftRightUnsigned;
        method = n.shru;
        method = n.shr_u;
        method = n.subtract;
        method = n.sub;
        method = n.toBytes;
        method = n.toBytesLE;
        method = n.toBytesBE;
        method = n.toInt;
        method = n.toNumber;
        method = n.toSigned;
        method = n.toUnsigned;
        method = n.xor;
    })
})

describe('constants', () => {
    it('has several constants', () => {
        let n: long;

        n = long.ZERO;
        n = long.ONE;
        n = long.NEG_ONE;
        n = long.UZERO;
        n = long.UONE;
        n = long.MAX_VALUE;
        n = long.MIN_VALUE;
        n = long.MAX_UNSIGNED_VALUE;
    })
})

describe('static methods', () => {
    it('has several static methods', () => {
        let func;
        func = long.isLong;
        func = long.fromBits;
        func = long.fromBytes;
        func = long.fromBytesLE;
        func = long.fromBytesBE;
        func = long.fromInt;
        func = long.fromNumber;
        func = long.fromString;
        func = long.fromString;
        func = long.fromValue;
    })
})

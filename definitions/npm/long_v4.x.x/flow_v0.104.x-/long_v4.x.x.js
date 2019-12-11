declare module 'long' {
    declare class Long {
        constructor(low: number, high: number, unsigned?: boolean): Long;

        // Fields
        low: number;
        high: number;
        unsigned: boolean;

        // Methods
        toNumber(): number;
        add(addend: Long | number | string): Long;
        and(other: Long | number | string): Long;
        compare(other: Long | number | string): number;
        comp(other: Long | number | string): number;
        divide(divisor: Long | number | string): Long;
        div(divisor: Long | number | string): Long;
        equals(other: Long | number | string): boolean;
        eq(other: Long | number | string): boolean;
        getHighBits(): number;
        getHighBitsUnsigned(): number;
        getLowBits(): number;
        getLowBitsUnsigned(): number;
        getNumBitsAbs(): number;
        greaterThan(other: Long | number | string): boolean;
        gt(other: Long | number | string): boolean;
        greaterThanOrEqual(other: Long | number | string): boolean;
        gte(other: Long | number | string): boolean;
        ge(other: Long | number | string): boolean;
        isEven(): boolean;
        isNegative(): boolean;
        isOdd(): boolean;
        isPositive(): boolean;
        isZero(): boolean;
        eqz(): boolean;
        lessThan(other: Long | number | string): boolean;
        lt(other: Long | number | string): boolean;
        lessThanOrEqual(other: Long | number | string): boolean;
        lte(other: Long | number | string): boolean;
        le(other: Long | number | string): boolean;
        modulo(divisor: Long | number | string): Long;
        mod(divisor: Long | number | string): Long;
        rem(divisor: Long | number | string): Long;
        multiply(multiplier: Long | number | string): Long;
        mul(multiplier: Long | number | string): Long;
        negate(): Long;
        neg(): Long;
        not(): Long;
        notEquals(other: Long | number | string): boolean;
        neq(other: Long | number | string): boolean;
        ne(other: Long | number | string): boolean;
        or(other: Long | number | string): Long;
        shiftLeft(numBits: Long | number | string): Long;
        shl(numBits: Long | number | string): Long;
        shiftRight(numBits: Long | number | string): Long;
        shr(numBits: Long | number | string): Long;
        shiftRightUnsigned(numBits: Long | number | string): Long;
        shru(numBits: Long | number | string): Long;
        shr_u(numBits: Long | number | string): Long;
        subtract(subtrahend: Long | number | string): Long;
        sub(subtrahend: Long | number | string): Long;
        toBytes(le?: boolean): number[];
        toBytesLE(): number[];
        toBytesBE(): number[];
        toInt(): number;
        toNumber(): number;
        toSigned(): Long;
        // TODO: fix this. Uncommenting will break spreading for some reason... (e.g. {...new Long(1)})
        // toString(radix?: number): string;
        toUnsigned(): Long;
        xor(other: Long | number | string): Long;

        // Constants
        static ZERO: Long;
        static ONE: Long;
        static NEG_ONE: Long;
        static UZERO: Long;
        static UONE: Long;
        static MAX_VALUE: Long;
        static MIN_VALUE: Long;
        static MAX_UNSIGNED_VALUE: Long;

        // Static methods
        static isLong(obj: mixed): boolean;
        static fromBits(
            lowBits: number,
            highBits: number,
            unsigned?: boolean
        ): Long;
        static fromBytes(bytes: number[], unsigned?: boolean, le?: boolean): Long;
        static fromBytesLE(bytes: number[], unsigned?: boolean): Long;
        static fromBytesBE(bytes: number[], unsigned?: boolean): Long;
        static fromInt(value: number, unsigned?: boolean): Long;
        static fromNumber(value: number, unsigned?: boolean): Long;
        static fromString(str: string, unsigned?: boolean, radix?: number): Long;
        static fromString(str: string, radix: number): Long;
        static fromValue(val: mixed, unsigned?: boolean): Long;
    }

    declare module.exports: typeof Long;
}

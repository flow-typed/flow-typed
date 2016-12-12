

declare module 'jsbn' {
					
}

declare module 'npm$namespace$jsbn' {
		declare interface RandomGenerator {
		nextBytes(bytes: number[]): void
	}

	declare interface Reduction {
		convert(x: BigInteger): BigInteger,
		revert(x: BigInteger): BigInteger,
		reduce(x: BigInteger): void,
		mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void,
		sqrTo(x: BigInteger, r: BigInteger): void
	}

		declare export class BigInteger  {
		constructor(a: number, c: RandomGenerator): this;
		constructor(a: number, b: number, c: RandomGenerator): this;
		constructor(a: string, b?: number): this;
		constructor(a: number[], b?: number): this;
		constructor(a: BigInteger): this;
		s: number;
		t: number;
		data: number[];
		DB: number;
		DM: number;
		DV: number;
		FV: number;
		F1: number;
		F2: number;
		am(i: number, x: number, w: BigInteger, j: number, c: number, n: number): number;
		copyTo(r: BigInteger): void;
		fromInt(x: number): void;
		fromString(x: string, b: number): void;
		clamp(): void;
		toString(b?: number): string;
		negate(): BigInteger;
		abs(): BigInteger;
		compareTo(a: BigInteger): number;
		bitLength(): number;
		dlShiftTo(n: number, r: BigInteger): void;
		drShiftTo(n: number, r: BigInteger): void;
		lShiftTo(n: number, r: BigInteger): void;
		rShiftTo(n: number, r: BigInteger): void;
		subTo(a: BigInteger, r: BigInteger): void;
		multiplyTo(a: BigInteger, r: BigInteger): void;
		squareTo(r: BigInteger): void;
		divRemTo(m: BigInteger, q: BigInteger, r: BigInteger): void;
		mod(a: BigInteger): BigInteger;
		invDigit(): number;
		isEven(): boolean;
		exp(e: number, z: Reduction): BigInteger;
		modPowInt(e: number, m: BigInteger): BigInteger;
		clone(): BigInteger;
		intValue(): number;
		byteValue(): number;
		shortValue(): number;
		chunkSize(r: number): number;
		signum(): number;
		toRadix(b: number): string;
		fromRadix(s: string, b: number): void;
		fromNumber(a: number, b?: number, c?: number): void;
		toByteArray(): number[];
		equals(a: BigInteger): boolean;
		min(a: BigInteger): BigInteger;
		max(a: BigInteger): BigInteger;
		bitwiseTo(a: BigInteger, op: (x: number, y: number) => number, r: BigInteger): void;
		and(a: BigInteger): BigInteger;
		or(a: BigInteger): BigInteger;
		xor(a: BigInteger): BigInteger;
		andNot(a: BigInteger): BigInteger;
		not(): BigInteger;
		shiftLeft(n: number): BigInteger;
		shiftRight(n: number): BigInteger;
		getLowestSetBit(): number;
		bitCount(): number;
		testBit(n: number): boolean;
		changeBit(n: number, op: (x: number, y: number) => number): BigInteger;
		setBit(n: number): BigInteger;
		clearBit(n: number): BigInteger;
		flipBit(n: number): BigInteger;
		addTo(a: BigInteger, r: BigInteger): void;
		add(a: BigInteger): BigInteger;
		subtract(a: BigInteger): BigInteger;
		multiply(a: BigInteger): BigInteger;
		square(): BigInteger;
		divide(a: BigInteger): BigInteger;
		remainder(a: BigInteger): BigInteger;
		divideAndRemainder(a: BigInteger): BigInteger[];
		dMultiply(n: number): void;
		dAddOffset(n: number, w: number): void;
		pow(e: number): BigInteger;
		multiplyLowerTo(a: BigInteger, n: number, r: BigInteger): void;
		multiplyUpperTo(a: BigInteger, n: number, r: BigInteger): void;
		modPow(e: BigInteger, m: BigInteger): BigInteger;
		gcd(a: BigInteger): BigInteger;
		modInt(n: number): number;
		modInverse(m: BigInteger): BigInteger;
		isProbablePrime(t: number): boolean;
		millerRabin(t: number): boolean;
		ZERO: BigInteger;
		ONE: BigInteger
	}

	
}
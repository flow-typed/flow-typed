// @flow

var BigInteger = require('bigi');

(BigInteger('12345'): BigInteger);
(new BigInteger('12345'): BigInteger);
(BigInteger('12345', 16): BigInteger);
(new BigInteger('12345', 16): BigInteger);
(BigInteger([1, 2, 3]): BigInteger);
(new BigInteger([1, 2, 3]): BigInteger);
(BigInteger([1, 2, 3], 16): BigInteger);
(new BigInteger([1, 2, 3], 16): BigInteger);

var b = new BigInteger('1');

(b.toString(): string);
(b.toString(16): string);
(b.toByteArray(): Array<number>);
(b.bitLength(): number);
(b.byteLength(): number);

(b.add(b): BigInteger);
(b.subtract(b): BigInteger);
(b.multiply(b): BigInteger);
(b.divide(b): BigInteger);
(b.mod(b): BigInteger);
(b.modInverse(b): BigInteger);

(b.shiftLeft(3): BigInteger);
(b.shiftRight(3): BigInteger);

(b.isProbablePrime(): boolean);

// $ExpectError
(BigInteger(12345): BigInteger);

// $ExpectError
(new BigInteger(1, 2, 3): BigInteger);

// $ExpectError
(b.toString('foobar'): string);
// $ExpectError
(b.toString('foobar'): number);
// $ExpectError
(b.toByteArray(): Buffer);

// $ExpectError
(b.add(b): number);

// $ExpectError
(b.shiftLeft(b): BigInteger);


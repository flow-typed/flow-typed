// @flow

import {Curve, Point, getCurveByName} from 'ecurve';
var BigInteger = require('bigi');


var pi = new BigInteger('1');
var a = new BigInteger('1');
var b = new BigInteger('1');
var Gx = new BigInteger('1');
var Gy = new BigInteger('1');
var n = new BigInteger('1');
var h = new BigInteger('1');
(new Curve(pi, a, b, Gx, Gy, n, h): Curve);

// $ExpectError
(new Curve(pi, b, Gx, Gy, n, h): Curve);

var curve: Curve = new Curve(pi, a, b, Gx, Gy, n, h); 

(curve.a: BigInteger);
(curve.b: BigInteger);
(curve.n: BigInteger);
(curve.h: BigInteger);

// $ExpectError
(curve.Gx: BigInteger);
// $ExpectError
(curve.Gy: BigInteger);

(curve.G: Point);
(curve.infinity: Point);

var p: Point = curve.G;

(curve.isInfinity(p): boolean);
// $ExpectError
(p.isInfinity(curve): boolean);

(curve.G.multiply(a): Point);

// $ExpectError
(curve.G.multiply(a): BigInteger);

// $ExpectError
(curve.G.multiply(p): Point);

(getCurveByName("name"): ?Curve);

// $ExpectError
(getCurveByName("name"): Curve);

// $ExpectError
(Curve.getCurveByName("name"): Curve);

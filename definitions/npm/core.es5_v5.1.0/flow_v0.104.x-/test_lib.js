// @flow strict

// $ExpectError
var x:string = NaN
// $ExpectError
var y:string = Number.MAX_VALUE;
// $ExpectError
var z:number = new TypeError().name;
// $ExpectError
var w:string = parseInt("...");
// $ExpectError
const ra: $ReadOnlyArray<number> = Object.freeze({q:2});

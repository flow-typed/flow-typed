// @flow strict

// $FlowExpectedError[incompatible-type]
var x:string = NaN
// $FlowExpectedError[incompatible-type]
var y:string = Number.MAX_VALUE;
// $FlowExpectedError[incompatible-type]
var z:number = new TypeError().name;
// $FlowExpectedError[incompatible-type]
var w:string = parseInt("...");
// $FlowExpectedError[incompatible-type]
const ra: $ReadOnlyArray<number> = Object.freeze({q:2});

// @flow strict

// $FlowExpectedError
var x:string = NaN
// $FlowExpectedError
var y:string = Number.MAX_VALUE;
// $FlowExpectedError
var z:number = new TypeError().name;
// $FlowExpectedError
var w:string = parseInt("...");
// $FlowExpectedError
const ra: $ReadOnlyArray<number> = Object.freeze({q:2});

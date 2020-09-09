// @flow

import P from 'bluebird-promisell';
import type { Bluebird$Promise } from 'bluebird-promisell';

// purep
var purepOK: Promise<number> = P.purep(2);

// $FlowExpectedError
var purepError: Promise<string> = P.purep(2);

// liftp1
var liftp1OK = P.liftp1(function(a: number): number {
  return a + 1;
})(P.purep(1));

var liftp1OK2: (pa: Promise<number>) => Promise<number> = P.liftp1(function(a: number): number {
  return a + 1;
});

// $FlowExpectedError
var liftp1Error = P.liftp1(function(a: string) { return '2'; })(P.purep(1));

// secondp
var secondpOK: Promise<string> = P.secondp(P.purep(1), P.purep('1'));
// $FlowExpectedError
var secondpError: Promise<number> = P.secondp(P.purep(1), P.purep('1'));

// firstp
var firstpOK: Promise<number> = P.firstp(P.purep(1), P.purep('1'));
// $FlowExpectedError
var firstpError: Promise<string> = P.firstp(P.purep(1), P.purep('1'));

// filterp
var filterpOK: Promise<Array<number>> = P.filterp(function(a: number) {
  return a > 2;
})([P.purep(3), P.purep(1)]);

var filterpOK2: (xs: Array<Promise<number>>) => Promise<Array<number>> = P.filterp(function(a: number) {
  return a > 2;
});
// $FlowExpectedError
var filterpError: (xs: Array<Promise<number>>) => Promise<Array<string>> = P.filterp(function(a: number) {
  return a > 2;
});
// $FlowExpectedError
var filterpError2: Promise<Array<number>> = P.filterp(function(a: number) {
  return a > 2;
})([P.purep(3), P.purep('1')]);

// $FlowExpectedError
var filterpError3: Promise<Array<number>> = P.filterp(function(a: number) {
  return '2';
})([P.purep(3), P.purep(1)]);

// traversep
var traversed: Promise<Array<number>> = P.traversep(function(n: number) {
  return P.purep(n + 1);
})([1,2,3]);

// $FlowExpectedError
var traversed: Promise<Array<string>> = P.traversep(function(n: number) {
  return P.purep(n + 1);
})([1,2,3]);

// sequencep
var sequenceOK: Promise<Array<number>> = P.sequencep([P.purep(1), P.purep(2)]);

// $FlowExpectedError
var sequenceError1: Promise<Array<number>> = P.sequencep([P.purep(1), P.purep('2')]);
// $FlowExpectedError
var sequenceError2: Promise<Array<string>> = P.sequencep([P.purep(1), P.purep(2)]);

// foldp
var foldpOK: Promise<number> = P.foldp(function(b: number, a: number) {
  return P.purep(b + a);
})(1)([2,3,4]);

// $FlowExpectedError
var foldpError1: Promise<string> = P.foldp(function(b: number, a: number) {
  return P.purep(b + a);
})(1)([2,3,4]);

// $FlowExpectedError
var foldpError2: Promise<number> = P.foldp(function(b: number, a: number): Promise<string> {
  return P.purep(b + a);
})(1)([2,3,4]);

// toPromise
var toPromiseOK: Promise<number> = P.toPromise(function(n: number) {
  return n > 2;
}, function(n: number) {
  return new Error('number should greater than 2');
})(10);

// $FlowExpectedError
var toPromiseError: Promise<string> = P.toPromise(function(n: number) {
  return n > 2;
}, function(n: number) {
  return new Error('number should greater than 2');
})(10);

// $FlowExpectedError
var toPromiseError: Promise<string> = P.toPromise(function(n: number) {
  return n > 2;
}, function(n: number) {
  return 1;
})(10);

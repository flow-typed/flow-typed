/* @flow */

import Deque from "double-ended-queue";

function expectMaybeString(s: ?string): void {}
function expectString(s: string): void {}
function expectStringArray(sa: Array<string>): void {}

function expectMaybeNumber(n: ?number): void {}
function expectNumber(n: number): void {}

function newDequeString(): Deque<string> {
  return new Deque();
}

const q = newDequeString();
expectStringArray(q.toArray());
q.push("abc");
expectMaybeString(q.pop());
q.unshift("def");
expectMaybeString(q.shift());
expectMaybeString(q.peekBack());
expectMaybeString(q.peekFront());
expectMaybeString(q.get(0));
if (q.isEmpty()) {
}
q.clear();
expectString(q.toString());

expectString(q.valueOf());
expectMaybeString(q.removeFront());
expectMaybeString(q.removeBack());
q.insertFront("ghi");
q.insertBack("jkl");
q.enqueue("mno");
expectMaybeString(q.dequeue());
expectStringArray(q.toJSON());

// $ExpectError
q.push(3);
// $ExpectError
expectMaybeNumber(q.pop());
// $ExpectError
q.unshift(6);
// $ExpectError
expectMaybeNumber(q.shift());
// $ExpectError
expectMaybeNumber(q.peekBack());
// $ExpectError
expectMaybeNumber(q.peekFront());
// $ExpectError
expectMaybeNumber(q.get(0));
// $ExpectError
expectNumber(q.toNumber());

// $ExpectError
expectNumber(q.valueOf());
// $ExpectError
expectMaybeNumber(q.removeFront());
// $ExpectError
expectMaybeNumber(q.removeBack());
// $ExpectError
q.insertFront(9);
// $ExpectError
q.insertBack(12);
// $ExpectError
q.enqueue(15);
// $ExpectError
expectMaybeNumber(q.dequeue());

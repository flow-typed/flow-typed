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

// $FlowExpectedError
q.push(3);
// $FlowExpectedError
expectMaybeNumber(q.pop());
// $FlowExpectedError
q.unshift(6);
// $FlowExpectedError
expectMaybeNumber(q.shift());
// $FlowExpectedError
expectMaybeNumber(q.peekBack());
// $FlowExpectedError
expectMaybeNumber(q.peekFront());
// $FlowExpectedError
expectMaybeNumber(q.get(0));
// $FlowExpectedError
expectNumber(q.toNumber());

// $FlowExpectedError
expectNumber(q.valueOf());
// $FlowExpectedError
expectMaybeNumber(q.removeFront());
// $FlowExpectedError
expectMaybeNumber(q.removeBack());
// $FlowExpectedError
q.insertFront(9);
// $FlowExpectedError
q.insertBack(12);
// $FlowExpectedError
q.enqueue(15);
// $FlowExpectedError
expectMaybeNumber(q.dequeue());

// @flow

import Delta from "quill-delta";

// copy for testing
type Operation = {
  insert?: string | Object,
  retain?: number,
  delete?: number,
  attributes?: Object,
  ...
};

(new Delta(): Delta);

(new Delta([
  { insert: "text" },
  { insert: "text", attributes: { bold: true } },
  { insert: { image: "foo.png" } },
  { insert: { image: "foo.png" }, attributes: { width: 100 } },
  { delete: 10 },
  { retain: 10 },
  { retain: 10, attributes: { bold: true } }
]): Delta);

(new Delta({
  ops: [
    { insert: "text" },
    { insert: "text", attributes: { bold: true } },
    { insert: { image: "foo.png" } },
    { insert: { image: "foo.png" }, attributes: { width: 100 } },
    { delete: 10 },
    { retain: 10 },
    { retain: 10, attributes: { bold: true } }
  ]
}): Delta);

(new Delta().ops: Operation[]);

// $FlowExpectedError
(new Delta().ops: string[]);

// $FlowExpectedError
(new Delta("invalid"): Delta);

(new Delta().insert("text"): Delta);

(new Delta().insert("text", { bold: true }): Delta);

(new Delta().insert({ image: "foo.png" }): Delta);

(new Delta().insert({ image: "foo.png" }, { bold: true }): Delta);

// $FlowExpectedError
(new Delta().insert(): Delta);

// $FlowExpectedError
(new Delta().insert(1): Delta);

// $FlowExpectedError
(new Delta().insert("text", "invalid"): Delta);

// $FlowExpectedError
(new Delta().insert({ image: "foo.png" }, "invalid"): Delta);

(new Delta().delete(10): Delta);

// $FlowExpectedError
(new Delta().delete("invalid"): Delta);

(new Delta().retain(10): Delta);

(new Delta().retain(10, { bold: true }): Delta);

// $FlowExpectedError
(new Delta().retain("invalid"): Delta);

// $FlowExpectedError
(new Delta().retain(10, "invalid"): Delta);

(new Delta().concat(new Delta()): Delta);

// $FlowExpectedError
(new Delta().concat("invalid"): Delta);

(new Delta().diff(new Delta()): Delta);

(new Delta().diff(new Delta(), 10): Delta);

// $FlowExpectedError
(new Delta().diff("invalid"): Delta);

// $FlowExpectedError
(new Delta().diff(new Delta(), "invalid"): Delta);

(new Delta().eachLine(function(
  line: Delta,
  attributes: Object,
  i: number
): void {
  console.log(line, attributes, i);
}): void);

(new Delta().eachLine(function(
  line: Delta,
  attributes: Object,
  i: number
): void {
  console.log(line, attributes, i);
}, "\n"): void);

(new Delta().eachLine(
  // $FlowExpectedError
  function(line: string, attributes: Object, i: number): void {
    console.log(line, attributes, i);
  }
): void);

(new Delta().eachLine(
  // $FlowExpectedError
  function(line: Delta, attributes: string, i: number): void {
    console.log(line, attributes, i);
  }
): void);

(new Delta().eachLine(
  // $FlowExpectedError
  function(line: Delta, attributes: Object, i: string): void {
    console.log(line, attributes, i);
  }
): void);

(new Delta().eachLine(
  function(line: Delta, attributes: Object, i: number): void {
    console.log(line, attributes, i);
  },
  // $FlowExpectedError
  1
): void);

(new Delta().filter(function(op: Operation): boolean {
  return typeof op.insert === "string";
}): Operation[]);

(new Delta().filter(
  // $FlowExpectedError
  function(op: string): boolean {
    return op.length > 0;
  }
): Operation[]);

(new Delta().forEach(function(op: Operation): void {
  console.log(op);
}): void);

(new Delta().forEach(
  // $FlowExpectedError
  function(op: string): void {
    console.log(op);
  }
): void);

(new Delta().length(): number);

(new Delta().map(function(op: Operation): number {
  return typeof op.insert === "string" ? op.insert.length : 0;
}): number[]);

(new Delta().map(
  // $FlowExpectedError
  function(op: string): number {
    return op.length;
  }
): number[]);

(new Delta().partition(function(op: Operation): boolean {
  return typeof op.insert === "string";
}): [Operation[], Operation[]]);

(new Delta().partition(
  // $FlowExpectedError
  function(op: string): boolean {
    return op.length > 0;
  }
): [Operation[], Operation[]]);

(new Delta().reduce(function(sum: number, op: Operation): number {
  return sum + (typeof op.insert === "string" ? op.insert.length : 0);
}, 0): number);

(new Delta().reduce(
  // $FlowExpectedError
  function(sum: number, op: string): number {
    return sum + op.length;
  },
  0
): number);

(new Delta().slice(): Delta);

(new Delta().slice(10): Delta);

(new Delta().slice(10, 20): Delta);

// $FlowExpectedError
(new Delta().slice("invalid"): Delta);

// $FlowExpectedError
(new Delta().slice(10, "invalid"): Delta);

(new Delta().compose(new Delta()): Delta);

// $FlowExpectedError
(new Delta().compose("invalid"): Delta);

(new Delta().transform(new Delta()): Delta);

(new Delta().transform(new Delta(), true): Delta);

(new Delta().transform(10): number);

// $FlowExpectedError
(new Delta().transform("invalid"): Delta);

// $FlowExpectedError
(new Delta().transform(new Delta(), "invalid"): Delta);

(new Delta().transformPosition(10): number);

// $FlowExpectedError
(new Delta().transformPosition("invalid"): number);

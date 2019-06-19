// @flow

import objectAssign from "object-assign";

const extendsExistingFields: { a: number, b: string } = objectAssign(
  {},
  { a: 1 },
  { b: "hi" }
);

// $ExpectError
const extendsExistingFieldsSoundly: { a: number, b: string } = objectAssign(
  {},
  { a: "one" },
  { b: "hi" }
);

// $ExpectError
const resultIsObject: string = objectAssign({});

// TODO(facebook/flow#6856): The following should be valid, but is not,
// due to a bug in Flow. The same behavior occurs with `Object.assign`.
// If this is fixed, then this expect-success test case should be
// reinstated.
/*
const sourcesMayHaveVaryingType = objectAssign({}, null, 2, {}, []);
*/

// TODO(facebook/flow#6857): The following should raise a type error
// (because it raises a runtime error), but does not, due to a bug in
// Flow. The same behavior occurs with `Object.assign`. If this is
// fixed, then this expect-error test case should be reinstated.
/*
const nullTargetDisallowed = objectAssign(null);
const voidTargetDisallowed = objectAssign(undefined);
*/

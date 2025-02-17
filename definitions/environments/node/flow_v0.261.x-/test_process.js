/* @flow */

/* emitWarning */

process.emitWarning('blah');
process.emitWarning(new Error('blah'));
process.emitWarning('blah', 'blah');
process.emitWarning('blah', 'blah', () => {});

// $FlowExpectedError[incompatible-call]
process.emitWarning(); // error
// $FlowExpectedError[incompatible-call]
process.emitWarning(42); // error
// $FlowExpectedError[incompatible-call]
process.emitWarning('blah', 42); // error
// $FlowExpectedError[incompatible-call]
process.emitWarning('blah', 'blah', 42); // error
// $FlowExpectedError[incompatible-cast]
process.emitWarning('blah') as string; // error


process.nextTick(() => {});

process.nextTick(
  (a: string, b: number, c: boolean) => {},
  'z',
  1,
  true
);

process.nextTick(
  // $FlowExpectedError[incompatible-call]
  (a: string, b: number, c: boolean) => {},
  0, // Error: number ~> string
  1,
  null // Error: null ~> boolean
);

process.nextTick(
  // $FlowExpectedError[incompatible-call]
  (a: string, b: number, c: boolean) => {},
  'z',
  'y', // Error: string ~> number
  true
);

process.nextTick(
  // $FlowExpectedError[incompatible-call]
  (a: string, b: number, c: boolean) => {} // Error: too few arguments
);

process.allowedNodeEnvironmentFlags as Set<string>;

// $FlowExpectedError[incompatible-cast]
process.allowedNodeEnvironmentFlags as string; // error

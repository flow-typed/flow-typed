/* @flow */
import {
  createSelector,
  defaultMemoize,
  createSelectorCreator,
  createStructuredSelector
} from "reselect";

// TEST: Should pass for 2 selectors given as arguments
type State = {
  x: number,
  y: number
};

const test1Selector = createSelector(
  (state: State) => state.x,
  (state: State) => state.y,
  (x, y) => {
    return x + y;
  }
)({ x: 100, y: 200 });
// END TEST

// TEST: Should pass for 2 selectors given as array
createSelector(
  [(state: State) => state.x, (state: State) => state.y],
  (x, y) => {
    return x + y;
  }
)({ x: 100, y: 200 });
// END TEST

// TEST: Should pass when selectors have additional Props argument
type TestProps = {
  x: number
};

createSelector(
  (state: State, props: TestProps) => state.x + props.x,
  (state: State, props: TestProps) => state.y + props.x,
  (x, y) => {
    return x + y;
  }
)(
  { x: 100, y: 200 },
  {
    x: 10
  }
);
// END TEST

// TEST: Should pass for additional arguments
createSelector(
  (state: State, props: TestProps, test) => state.x + props.x + test,
  (state: State, props: TestProps, test) => state.y + props.x + test,
  (x, y) => {
    return x + y;
  }
)(
  { x: 100, y: 200 },
  {
    x: 10
  },
  10
);
// END TEST

defaultMemoize((a: number) => a + 1)(2);
defaultMemoize((a: number) => a + 1, (a, b) => a === b)(2);

// TEST 8: Should treat newly created selector as normal one
let x = createSelectorCreator(defaultMemoize)(
  state => state.x,
  state => state.y,
  (x, y) => {
    return x + y;
  }
);

x({
  x: 10,
  y: 20
});
// END TEST

createStructuredSelector({
  first: state => state.x,
  second: state => state.y
})({
  x: 10,
  y: 20
});

// Nested structured selector
let structured = createStructuredSelector({
  combination: createStructuredSelector({
    sum: (state: number[]) => state.reduce((a, b) => a + b, 0),
    product: (state: number[]) => state.reduce((a, b) => a * b, 1)
  }),
  multiples: createStructuredSelector({
    two: (state: number[]) => state.filter(n => n % 2 === 0),
    three: (state: number[]) => state.filter(n => n % 3 === 0)
  })
});

let data = structured([1, 2, 3, 4, 5, 6, 7]);
// $ExpectError: Should not pass when invoked with a different state shape
let data2 = structured([""]);

type TestState1 = {
  x: number,
  y: number
};

type TestState2 = {
  d: number
};

createSelector(
  (state: TestState1) => state.x,
  // $ExpectError: Should not pass when selectors handle different states
  (state: TestState2) => state.y,
  (x, y) => {
    return x + y;
  }
)({ x: 100, y: 200 });

createSelector(
  // $ExpectError: Should not pass when selectors handle different states
  (state, props) => state.x + props.d,
  state => state.y,
  (x, y) => {
    return x + y;
  }
)({ x: 100, y: 200 }, { x: 20 });

// $ExpectError: Should not result do not include property
createSelector(
  state => state.x,
  state => state.y,
  (x, y) => {
    return {
      x,
      y
    };
  }
)({ x: 100, y: 200 }, { x: 20 }).d;

// $ExpectError
defaultMemoize((a: number) => a + 1)("");
// $ExpectError
defaultMemoize((a: number) => a + 1, (a, b) => "")(2);

createSelectorCreator(defaultMemoize)(
  state => state.x,
  // $ExpectError: Should fail when state don't have good properties
  state => state.y,
  (x, y) => {
    return x + y;
  }
)({
  x: 10,
  d: 20
});

createStructuredSelector({
  // $ExpectError: Should fail when state don't have good properties
  first: state => state.d,
  second: state => state.y
})({
  x: 10,
  y: 20
});

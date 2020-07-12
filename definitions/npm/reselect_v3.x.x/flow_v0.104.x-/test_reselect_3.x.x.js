/* @flow */
import { it } from "flow-typed-test";
import {
  createSelector,
  defaultMemoize,
  createSelectorCreator,
  createStructuredSelector
} from "reselect";

type State = {
  x: number,
  y: number,
  ...
};

type TestProps = {
  x: number,
  ...
};

it('Should pass for 2 selectors given as arguments', () => {
  const test1Selector = createSelector(
    (state: State) => state.x,
    (state: State) => state.y,
    (x, y) => {
      return x + y;
    }
  )({ x: 100, y: 200 });
});

it('Should pass for 2 selectors given as array', () => {
  createSelector(
    [(state: State) => state.x, (state: State) => state.y],
    (x, y) => {
      return x + y;
    }
  )({ x: 100, y: 200 });
});

it('Should pass when selectors have additional Props argument', () => {
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
});

it('Should pass for additional arguments', () => {
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
});

it('Should work when using another selector as functions', () => {
  const simpleSelector = (state: State): string => "foo";
  const resultSelector = (arg: string): string => "foo";

  const combinedSelector1 = createSelector(simpleSelector, resultSelector);

  const combinedSelector2: (state: State) => string = createSelector(
    combinedSelector1,
    resultSelector
  );
});

it('Should work when using more complex selectors as functions', () => {
  const resultFunc = (param1: string, param2: number): number => 42;
  const simpleSelector = (state: State): string => "foo";
  const compoundSelector = createSelector(simpleSelector, () => 42);
  const func: State => number = createSelector(
    simpleSelector,
    compoundSelector,
    resultFunc
  );

  const result: number = func({ x: 42, y: 42 });
});

defaultMemoize((a: number) => a + 1)(2);
defaultMemoize((a: number) => a + 1, (a, b) => a + b)(2);

it('Should threat newly created selector as normal one', () => {
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
});

createStructuredSelector({
  first: state => state.x,
  second: state => state.y
})({
  x: 10,
  y: 20
});

type TestState1 = {
  x: number,
  y: number,
  ...
};

type TestState2 = {
  d: number,
  ...
};

createSelector(
  (state: TestState1) => state.x,
  // $FlowExpectedError: Should not pass when selectors handle different states
  (state: TestState2) => state.y,
  (x, y) => {
    return x + y;
  }
// $FlowExpectedError: property `d` is missing state but exists in TestState2
)({ x: 100, y: 200 });

createSelector(
  // $FlowExpectedError: Should not pass when selectors handle different states
  (state, props) => state.x + props.d,
  state => state.y,
  (x, y) => {
    return x + y;
  }
)({ x: 100, y: 200 }, { x: 20 });

createSelector(
  state => state.x,
  state => state.y,
  (x, y) => {
    return {
      x,
      y
    };
  }
// $FlowExpectedError: property `d` is missing createSelector() return object
)({ x: 100, y: 200 }, { x: 20 }).d;

// $FlowExpectedError
defaultMemoize((a: number) => a + 1)("");
// $FlowExpectedError
defaultMemoize((a: number) => a + 1, (a, b) => "")(2);

createSelectorCreator(defaultMemoize)(
  state => state.x,
  // $FlowExpectedError: Should fail when state don't have good properties
  state => state.y,
  (x, y) => {
    return x + y;
  }
)({
  x: 10,
  d: 20
});

createStructuredSelector({
  // $FlowExpectedError: Should fail when state don't have good properties
  first: state => state.d,
  second: state => state.y
})({
  x: 10,
  y: 20
});

// $FlowExpectedError: Cannot call `createSelector` because property `third` is missing in createStructuredSelector() result
createSelector(
  createStructuredSelector({
    first: (state) => state.x,
    second: (state) => state.y
  }),
  // $FlowExpectedError: Should fail when property names not in the input selectors object
  ({first, third}: {first: number, third: number}) => first + third
)({
  x: 10,
  y: 20
});

createSelector(
  createStructuredSelector({
    first: (state) => state.x,
    second: (state) => state.y
  }),
  // $FlowExpectedError: Return types of input selectors propagate
  ({first, second}: {first: number, second: number}) => first + second
)({
  x: 10,
  y: false
});

it('Should pass for accessing selector recomputations', () => {
  createSelector(
    (state: State, props: TestProps, test) => state.x + props.x + test,
    (state: State, props: TestProps, test) => state.y + props.x + test,
    (x, y) => {
      return x + y;
    }
  ).recomputations() + 5;
});

it('Should pass for reseting selector recomputations', () => {
  createSelector(
    (state: State, props: TestProps, test) => state.x + props.x + test,
    (state: State, props: TestProps, test) => state.y + props.x + test,
    (x, y) => {
      return x + y;
    }
  ).resetRecomputations();
});

it('Should pass for accessing selector resultFunc', () => {
  createSelector(
    (state: State, props: TestProps, test) => state.x + props.x + test,
    (state: State, props: TestProps, test) => state.y + props.x + test,
    (x, y) => {
      return x + y;
    }
  ).resultFunc(
    100,
    200,
  ) + 15;
});

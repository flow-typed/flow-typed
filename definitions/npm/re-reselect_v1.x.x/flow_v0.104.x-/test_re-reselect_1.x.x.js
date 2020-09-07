/* @flow */
import { it } from 'flow-typed-test';
import createCachedSelector from "re-reselect";

type State = {
  x: number,
  y: number,
  ...
};

it('Should pass for 2 selectors given as arguments', () => {
  const test1Selector = createCachedSelector(
    (state: State) => state.x,
    (state: State) => state.y,
    (x, y) => {
      return x + y;
    }
  )(() => 1)

  test1Selector({ x: 100, y: 200 });
  // $FlowExpectedError invalid state
  test1Selector({ x: 100 });
});

it('Should pass for 2 selectors given as array', () => {
  const test2Selector = createCachedSelector(
    [(state: State) => state.x, (state: State) => state.y],
    (x, y) => {
      return x + y;
    }
  )(() => 2)

  test2Selector({ x: 100, y: 200 });
  // $FlowExpectedError invalid state
  test2Selector({ x: 100 });
});

it('Should pass when selectors have additional Props argument', () => {
  type TestProps = {
    x: number,
    ...
  };

  const test3Selector = createCachedSelector(
    (state: State, props: TestProps) => state.x + props.x,
    (state: State, props: TestProps) => state.y + props.x,
    (x, y) => {
      return x + y;
    }
  // $FlowExpectedError property `x` is missing in object in `test3Selector({ x: 100, y: 200 }, { y: 10 })`
  )((state, props) => props.x)

  test3Selector(
    { x: 100, y: 200 },
    { x: 10 }
  );
  // $FlowExpectedError invalid state
  test3Selector({ x: 100 }, { x: 10 });
  // $FlowExpectedError invalid props
  test3Selector({ x: 100, y: 200 }, { y: 10 });
});

it('Should work when using another selector as functions', () => {
  const simpleSelector = (state: State): string => "foo";
  const resultSelector = (arg: string): string => "foo";

  const combinedSelector1 = createCachedSelector(simpleSelector, resultSelector)(() => 1);
  const combinedSelector2: (state: State) => string = createCachedSelector(
    combinedSelector1,
    resultSelector
  )(() => 2);

  combinedSelector1({ x: 100, y: 200 })
  // $FlowExpectedError invalid state
  combinedSelector1({ x: 100 })
});

it('Should work when using more complex selectors as functions', () => {
  const resultFunc = (param1: string, param2: number): number => 42;
  const simpleSelector = (state: State): string => "foo";
  const compoundSelector = createCachedSelector(simpleSelector, () => 42)(() => 1);
  const selector = createCachedSelector(
    simpleSelector,
    compoundSelector,
    resultFunc
  )(() => 2);

  const result: number = selector({ x: 42, y: 42 });
  // $FlowExpectedError invalid state
  selector({ x: 42 });
});

it('Should validate parameters based on the return values of nested', () => {
  // selectors.
  createCachedSelector(
    // $FlowExpectedError x is a number, not a string.
    (state: State) => state.x,
    (state: State) => state.y,
    (x: string, y: number) => "foo"
  )
});

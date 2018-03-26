/* @flow */
import createCachedSelector from "re-reselect";

// TEST: Should pass for 2 selectors given as arguments
type State = {
  x: number,
  y: number
};

const test1Selector = createCachedSelector(
  (state: State) => state.x,
  (state: State) => state.y,
  (x, y) => {
    return x + y;
  }
)(() => 1)

test1Selector({ x: 100, y: 200 });
// $ExpectError invalid state
test1Selector({ x: 100 });
// END TEST

// TEST: Should pass for 2 selectors given as array
const test2Selector = createCachedSelector(
  [(state: State) => state.x, (state: State) => state.y],
  (x, y) => {
    return x + y;
  }
)(() => 2)

test2Selector({ x: 100, y: 200 });
// $ExpectError invalid state
test2Selector({ x: 100 });
// END TEST

// TEST: Should pass when selectors have additional Props argument
type TestProps = {
  x: number
};

const test3Selector = createCachedSelector(
  (state: State, props: TestProps) => state.x + props.x,
  (state: State, props: TestProps) => state.y + props.x,
  (x, y) => {
    return x + y;
  }
)((state, props) => props.x)

test3Selector(
  { x: 100, y: 200 },
  { x: 10 }
);
// $ExpectError invalid state
test3Selector({ x: 100 }, { x: 10 });
// $ExpectError invalid props
test3Selector({ x: 100, y: 200 }, { y: 10 });
// END TEST

// TEST: Should work when using another selector as functions
{
  const simpleSelector = (state: State): string => "foo";
  const resultSelector = (arg: string): string => "foo";

  const combinedSelector1 = createCachedSelector(simpleSelector, resultSelector)(() => 1);
  const combinedSelector2: (state: State) => string = createCachedSelector(
    combinedSelector1,
    resultSelector
  )(() => 2);

  combinedSelector1({ x: 100, y: 200 })
  // $ExpectError invalid state
  combinedSelector1({ x: 100 })
}
// END TEST

// TEST: Should work when using more complex selectors as functions
{
  const resultFunc = (param1: string, param2: number): number => 42;
  const simpleSelector = (state: State): string => "foo";
  const compoundSelector = createCachedSelector(simpleSelector, () => 42)(() => 1);
  const selector = createCachedSelector(
    simpleSelector,
    compoundSelector,
    resultFunc
  )(() => 2);

  const result: number = selector({ x: 42, y: 42 });
  // $ExpectError invalid state
  selector({ x: 42 });
}
// END TEST

// TEST: Should validate parameters based on the return values of nested
// selectors.
createCachedSelector(
  (state: State) => state.x,
  (state: State) => state.y,
  // $ExpectError first argument will be a number, not a string.
  (x: string, y: number) => "foo"
)
// END TEST

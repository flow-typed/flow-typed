// @flow
import memoizeOne from "memoize-one";
import { it, describe } from "flow-typed-test";

describe('memoize-one', () => {
  type GenericComputer<T> = (a: number, b: string) => () => T;

  type Thing = {|
    +reason: string,
  |};

  const computation: GenericComputer<Thing> = (a, b) => {
    return () => ({ reason: `${a * 3} times 3: ${ b }` });
  }

  it('captures correct function type', () => {
    const memoized = memoizeOne(computation);
    // $ExpectError function type should match
    (memoized: () => void);
    (memoized: GenericComputer<Thing>);
    (memoized: (number, string) => () => Thing);

    // $ExpectError calling without correct arguments
    memoized();

    const thing: Thing = memoized(5, 'whatever')();

  })
});

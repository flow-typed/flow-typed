// @flow
import Maybe from "data.maybe";

const concat = x => y => x + y;

const a = Maybe.Nothing();
const b = Maybe.Just(5);
const c = Maybe.Just(10);
const d = Maybe.fromNullable(null);
const e = Maybe.of(concat);

b.map(x => x + 5);
b.chain(x => (x < 5 ? Maybe.Just(x + 5) : Maybe.Nothing()));
d.map(x => `is ${x}`);

const x: number = b.getOrElse(10);
const y: string = d.getOrElse("boo");
const z: Maybe<string> = e.ap(Maybe.of("a")).ap(Maybe.of("b"));

const xy: Maybe<string> = Maybe.fromNullable(null).orElse(() =>
  Maybe.Just("foo")
);

// --- Errors
// $ExpectError
b.chain(x => x + x);

// $ExpectError
const _z = e.ap("a");

// $ExpectError
const _xy: Maybe<string> = Maybe.fromNullable(null).orElse("foo");

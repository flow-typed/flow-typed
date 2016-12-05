// @flow
import Maybe from 'data.maybe';



let a = Maybe.Nothing();
let b = Maybe.Just(5);
let c = Maybe.Just(10);

b.map(x => x + 5);
b.chain(x => x < 5 ? Maybe.Just(x + 5) : Maybe.Nothing());

const x : number = b.getOrElse(10);

// $ExpectError
b.chain(x => x + x);

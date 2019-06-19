// @flow
import inRange from 'in-range';

let a: boolean = inRange(2, 3, 4)
a = inRange(2, 4)

// $ExpectError
const s: string = inRange(2, 3, 4)

// $ExpectError
inRange(2)

// $ExpectError
inRange(2, "2", 2)

// $ExpectError
inRange(true, 2, 2)

// $ExpectError
inRange(2, 2, "2")

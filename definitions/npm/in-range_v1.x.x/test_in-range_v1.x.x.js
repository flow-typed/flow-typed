// @flow
import inRange from 'in-range';

let a: boolean = inRange(2, 3, 4)
a = inRange(2, 4)

// $FlowExpectedError
const s: string = inRange(2, 3, 4)

// $FlowExpectedError
inRange(2)

// $FlowExpectedError
inRange(2, "2", 2)

// $FlowExpectedError
inRange(true, 2, 2)

// $FlowExpectedError
inRange(2, 2, "2")

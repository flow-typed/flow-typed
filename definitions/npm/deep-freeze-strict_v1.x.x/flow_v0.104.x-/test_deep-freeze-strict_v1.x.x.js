// @flow
import freeze from 'deep-freeze-strict'

const a = {a: 1}

const frozen = freeze(a)

const b: number = frozen.a

// $FlowExpectedError
const c: string = frozen.a

// $FlowExpectedError
frozen.b

// $FlowExpectedError
frozen.a = 2

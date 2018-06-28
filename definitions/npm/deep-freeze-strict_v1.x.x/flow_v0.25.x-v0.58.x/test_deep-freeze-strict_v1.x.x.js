// @flow
import freeze from 'deep-freeze-strict'

const a = {a: 1}

const frozen = freeze(a)

const b: number = frozen.a

// $ExpectError
const c: string = frozen.a

// $ExpectError
frozen.b

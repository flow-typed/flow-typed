/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import _, {
  compose,
  curry,
  filter,
  find,
  is,
  pipe,
  repeat,
  zipWith,
} from 'ramda'

import { describe, it } from 'flow-typed-test';

const ns: Array<number> = [ 1, 2, 3, 4, 5 ]
const ss: Array<string> = [ 'one', 'two', 'three', 'four' ]
const obj: {[k:string]:number} = { a: 1, c: 2 }
const objMixed: {[k:string]:mixed} = { a: 1, c: 'd' }
const os: Array<{[k:string]: *}> = [ { a: 1, c: 'd' }, { b: 2 } ]
const str: string = 'hello world'


// Math
{
  const partDiv: (a: number) => number = _.divide(6)
  const div: number = _.divide(6, 2)
  //$FlowExpectedError
  const div2: number = _.divide(6, true)
}

// String
{
  const ss: Array<string|void> = _.match(/h/, 'b')
  const ss3: string = _.replace(',', '|', 'b,d,d')
  const ss2: Array<string> = _.split(',', 'b,d,d')
  const ss1: boolean = _.test(/h/, 'b')
  const s: string = _.trim('s')
  const x: string = _.head('one')
  const sss: string = _.concat('H','E')
  const sss1: string = _.concat('H')('E')
  const ssss: string = _.drop(1,'EF')
  const ssss1: string = _.drop(1)('E')
  const ssss2: string = _.dropLast(1,'EF')
  const ys: string = _.nth(2, 'curry')
  const ys1: string = _.nth(2)('curry')
}
//Type
{
  const x1: boolean = _.isNil(1)
  const x2: boolean = _.propIs(1, 'num', { num: 1 })
}

describe('is', () => {
  it('allows testing a value against a type', () => {
    // Lifted right out of the examples.
    // See https://ramdajs.com/docs/#is
    is(Object, {}); //=> true
    is(Number, 1); //=> true
    is(Object, 1); //=> false
    is(String, 's'); //=> true
    is(String, new String('')); //=> true
    is(Object, new String('')); //=> true
    is(Object, 's'); //=> false
    is(Number, {}); //=> false
  })

  it('does not allow non-types for the first argument', () => {
    // $FlowExpectedError
    is({}, 1)
  })
})

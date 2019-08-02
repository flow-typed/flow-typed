/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/

import { describe, it } from 'flow-typed-test';
import {
  subtract,
} from 'ramda'

describe('subtract', () => {
  it('works with two numbers', () => {
    const result: number = subtract(1, 2)
  })

  // To see Ramda working with various date combinations, see:

  it('works with dates to produce a number', () => {
    const result: number = subtract(new Date(), new Date())
  })

  it('works with a date and a number to produce a number', () => {
    const result: number = subtract(new Date(), 1000)
  })

  it('works with a number and a date to produce a number', () => {
    const result: number = subtract(1000, new Date())
  })

  it('does not accept strings as inputs', () => {
    // $ExpectError
    const result: number = subtract('foo', 'o')
  })
})

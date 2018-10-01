/* @flow */

import { Effects } from 'redux-loop'
import type { Effect } from 'redux-loop'

//
// Effects.none
//

// ok
const none: Effect = Effects.none()


//
// Effects.constant
//

// ok
const constant: Effect = Effects.constant({ type: 'foo' })

// $ExpectError
Effects.constant({ noTypeProp: 'foo' })


//
// Effects.call
//

function zeroArg() {
  return { type: 'zeroArg' }
}

function string(x: string) {
  return { type: 'string', x }
}

function numberString(x: number, y: string) {
  return { type: 'numberString', x, y }
}

// ok
const callEffect: Effect = Effects.call(zeroArg)

// ok
Effects.call(string, 'one')

// ok
Effects.call(numberString, 1, 'two')

// $ExpectError
Effects.call(string, 1)

// $ExpectError
Effects.call(string, 1)

// ok
Effects.call(string, 'one', 'two')


//
// Effects.promise
//

function asyncActionCreator(x: string, y: number) {
  return Promise.resolve({
    type: 'asyncAction', x, y
  })
}

// ok
Effects.promise(asyncActionCreator, 'one', 2)

// $ExpectError
Effects.promise(asyncActionCreator, 1, 'two')


//
// Effects.batch
//

// ok
Effects.batch([
  Effects.call(zeroArg),
  Effects.promise(asyncActionCreator, 'one', 2),
])


//
// Effects.lift
//

function nestedAction(time: Date, action: { type: $Subtype<string> }) {
  return { type: 'NESTED_ACTION', payload: action, time };
}

function nestedActionWrongArgOrder(action: { type: $Subtype<string> }, time: Date) {
  return { type: 'NESTED_ACTION', payload: action, time };
}

const nestedEffect = Effects.call(zeroArg)

// ok
Effects.lift(nestedEffect, nestedAction, new Date)

// $ExpectError
Effects.lift(nestedEffect, nestedActionWrongArgOrder, new Date)

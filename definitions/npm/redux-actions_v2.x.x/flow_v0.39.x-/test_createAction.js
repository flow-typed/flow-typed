/* @flow */

import { createAction } from 'redux-actions'

const INCREMENT = 'INCREMENT'


function test_createAction() {
  const action = createAction(INCREMENT)
  const a = action("foo")

  assert(a.payload, (x: string) => {})

  // $ExpectError
  assert(a.payload, (x: number) => {})

  // Verify that Flow can refine types based on the `type` property of the
  // action
  if (a.type === 'NOT INCREMENT') {
    // This assertion passes type-checking because Flow knows that this block is
    // not reachable.
    assert(a.payload, (x: number) => {})
  }

  if (a.type === INCREMENT) {
    // $ExpectError
    assert(a.payload, (x: number) => {})
  }
}

function test_createAction_givenPayloadType() {
  const action = createAction(INCREMENT, (x: Date) => x)
  const a = action(new Date)

  // $ExpectError
  action("foo")

  assert(a.payload, (x: Date) => {})

  // $ExpectError
  assert(a.payload, (x: string) => {})

  const action2 = createAction(INCREMENT, (x: Date) => x, x => x)
  const a2 = action2(new Date)

  assert(a2.meta, (x: Date) => {})

  assert(a2.meta, (x: string) => {})
}

function test_createAction_withPayloadCreator() {
  const action = createAction(INCREMENT, x => [x, x])
  const a = action("foo")

  assert(a.payload, (x: [string, string]) => {})

  // $ExpectError
  assert(a.payload, (x: string) => {})

  // Accept multiple arguments to the action creator
  const action2 = createAction(INCREMENT, (x, y, z) => [x, x])
  const a2 = action("foo", 2, 3)

  assert(a.payload, (x: [string, string]) => {})

  // $ExpectError
  assert(a.payload, (x: string) => {})
}

function test_createAction_withPayloadCreatorAndMeta() {
  const action = createAction(INCREMENT, x => [x, x], x => 1)
  const a = action("foo")

  assert(a.meta, (x: number) => {})

  // $ExpectError
  assert(a.meta, (x: string) => {})
}

function test_createAction_withMeta() {
  const action = createAction(INCREMENT, null, x => 1)
  const a = action("foo")

  assert(a.meta, (x: number) => {})

  // $ExpectError
  assert(a.meta, (x: string) => {})
}

// Helper to assert that the type of the first argument is compatible with the
// argument type of the second argument.
function assert<T>(actual: T, expected: (_: T) => void) {}

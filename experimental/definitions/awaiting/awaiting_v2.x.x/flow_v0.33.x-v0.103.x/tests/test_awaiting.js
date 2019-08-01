/* @flow */

import * as a       from 'awaiting'
import EventEmitter from 'events'

function testErrorList() {
  const err = new Error('oops')

  const el = new a.ErrorList('errors contained within')
  el.add(err)

  // $ExpectError
  el.add(3)

  const name: string = el.name
  const message: string = el.message
  const stack: string = el.stack

  for (const e of el) {
    const e1: Error = e

    // $ExpectError
    const e2: Date = e
  }
}

async function testLimit() {
  const goal    = Promise.resolve('done')
  const limiter = Promise.resolve('nope')

  const l1: string = await a.limit(goal, limiter)
  const l2: string = await a.limit(goal, 300)

  // $ExpectError
  const l3: number = await a.limit(goal, limiter)
}

async function testEvent() {
  const emitter = new EventEmitter

  const e1: string[] = await a.event(emitter, 'data')

  // $ExpectError
  const e2: string = await a.event(emitter, 'data')
}

function testCallback() {
  function onZeroArgs(fn: (err: ?Error, result: ?number) => void) {
    fn(null, 3)
  }

  function onOneArg<T>(x: T, fn: (err: ?Error, result: ?T) => void) {
    fn(null, x)
  }

  const z1: Promise<number> = a.callback(onZeroArgs)

  // $ExpectError
  const z2: Promise<string> = a.callback(onZeroArgs)

  const o1: Promise<number> = a.callback(onOneArg, 3)

  // $ExpectError
  const o2: Promise<string> = a.callback(onOneArg, 3)
}

async function testSingle() {
  const ps = [Promise.resolve(1), Promise.resolve(2)]

  const s1: number = await a.single(ps)
  const s2: number = await a.single(ps, 1)
}

async function testObject() {
  const obj = await a.object({
    a: Promise.resolve('a'),
    b: Promise.resolve(3),
    c: new Date(),
  })

  const o1: string = obj.a
  const o2: number = obj.b
  const o3: Date   = obj.c

  // $ExpectError
  const o4: number = obj.a

  const map: { [key: string]: number } = await a.object({}, 4)

  const m1: number = map.foo

  // $ExpectError
  const m2: string = map.bar
}

async function testMap() {
  const list = ['foo', 'bar']

  const m1: number[] = await a.map(list, 1, s => Promise.resolve(s.length))
  const m2: number[] = await a.map(list, s => Promise.resolve(s.length))

  // $ExpectError
  const m3: string[] = await a.map(list, s => Promise.resolve(s.length))
}

/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import _, { compose, pipe, uncurryN, curry, pipeP, tryCatch } from 'ramda'
// Function
const ns: Array<number> = [ 1, 2, 3, 4, 5 ]
const ss: Array<string> = [ 'one', 'two', 'three', 'four' ]
const obj: {[k:string]:number} = { a: 1, c: 2 }
const objMixed: {[k:string]:mixed} = { a: 1, c: 'd' }
const os: Array<{[k:string]: *}> = [ { a: 1, c: 'd' }, { b: 2 } ]
const str: string = 'hello world'

// TODO: "Gap" Functions: Started failing in v31...
// const g = _.propIs
// const __ = _.__
// const g1: boolean = g(1, '2', {p: 3})
// const g2: boolean = g(__, '2', {p: 3})(1)
// const g3: boolean = g(__, __, {p: 3})(1)('2')
// const g4: boolean = g(__, __, {p: 3})(1, '2')
// const g5: boolean = g(__, '2', __)(1, {p: 3})
// const g6: boolean = g(__, '2')(1)({p: 3})
// const g7: boolean = g(__, '2')(1, {p: 3})
// const g8: boolean = g(__, '2')(__, {p: 3})(1)

type R = {
  sum: number,
  nested: { mul: number },
}
// TODO: "Gap" Functions: Started failing in v31...
// const greet: string = _.replace('{name}', _.__, 'Hello, {name}!')('John')
const truth: boolean = _.T('ddd')
const lie: boolean = _.F('ddd')
const mapIndexed = _.addIndex(_.map)

const mi: Array<string> = mapIndexed((val, idx) => idx + '-' + val, [ 'f', 'o', 'o', 'b', 'a', 'r' ])

const t: string = _.always('Tee')()
const app: Array<number> = _.ap([ _.multiply(2), _.add(3) ], [ 1,2,3 ])
const app1: Array<string|number> = _.ap([ _.toString, _.add(3) ], [ 1,2,3 ])

const nums = [ 1, 2, 3, -99, 42, 6, 7 ]
const applied: number = _.apply(Math.max, nums)
const spec = {
  sum: _.add,
  nested: { mul: _.multiply },
}
const getMetrics = _.applySpec(spec)
const apspec: $Shape<R> = getMetrics(2, 2)

const cmp: (x: Object, y: Object) => number = _.comparator((a, b) => a.age < b.age)
const compf: number = _.compose(_.inc, _.negate)(2)

const fn = compose(_.add)
const fn1: (n: number) => number = fn(2)
const add2 = _.compose(_.add(2))
const four: number = add2(2)
const str0: Array<string|void> = _.compose(_.match(/2/), _.toLower, _.trim)(' 1,2,3 ')
const str1: Array<string> = _.compose(_.split(','), _.toLower, _.trim)(' 1,2,3 ')
const str2: string = _.compose(_.replace('3', '4'), _.toLower, _.trim)(' 1,2,3 ')

const fn2:(n: number) => (n: number) => number = pipe(_.add)
const fn3: (n: number) => number = fn2(2)
const add2p = _.pipe(_.add(2))
const b: number = add2p(2)
const fail: string = _.pipe(_.trim)('h')
const str3: Array<string|void> = _.pipe(_.toLower, _.trim, _.match(/2/))(' 1,2,3 ')
const str4: Array<string> = _.pipe(_.toLower, _.trim, _.split(','))(' 1,2,3 ')
const str5: string = _.pipe(_.replace('3', '4'), _.toLower, _.trim)(' 1,2,3 ')

// --- Curry ---
declare var bar1: (string) => 'bar1'
declare var bar2: (string, number) => 'bar2'
declare var bar6: (string, number, boolean, null, {}, []) => 'bar6'

const foo1 = curry(bar1)
const foo2 = curry(bar2)
const foo6 = curry(bar6)

const foo1_1: 'bar1' = foo1('')
const foo2_1: 'bar2' = foo2('', 0)
const foo2_2: 'bar2' = foo2('')(0)

const foo6_1: 'bar6' = foo6('', 0, true, null, {}, [])
const foo6_2: 'bar6' = foo6('')(0, true, null, {}, [])
const foo6_3: 'bar6' = foo6('', 0)(true, null, {}, [])
const foo6_4: 'bar6' = foo6('', 0, true)(null, {}, [])
const foo6_5: 'bar6' = foo6('', 0, true, null)({}, [])
const foo6_6: 'bar6' = foo6('', 0, true, null, {})([])
const foo6_7: 'bar6' = foo6('')(0)(true, null, {}, [])
const foo6_8: 'bar6' = foo6('', 0)(true)(null, {}, [])
const foo6_9: 'bar6' = foo6('', 0, true)(null)({}, [])
const foo6_10: 'bar6' = foo6('', 0, true, null)({})([])
const foo6_11: 'bar6' = foo6('')(0, true)(null, {}, [])
const foo6_12: 'bar6' = foo6('', 0)(true, null)({}, [])
const foo6_13: 'bar6' = foo6('', 0, true)(null, {})([])
const foo6_14: 'bar6' = foo6('')(0, true, null)({}, [])
const foo6_15: 'bar6' = foo6('', 0)(true, null, {})([])
const foo6_16: 'bar6' = foo6('')(0, true, null, {})([])

// $ExpectError
const foo6_1_Error1: 'bar6' = foo6(false, 0, true, null, {}, [])
// $ExpectError
const foo6_2_Error1: 'bar6' = foo6(false)(0, true, null, {}, [])
// $ExpectError
const foo6_3_Error1: 'bar6' = foo6(false, 0)(true, null, {}, [])
// $ExpectError
const foo6_4_Error1: 'bar6' = foo6(false, 0, true)(null, {}, [])
// $ExpectError
const foo6_5_Error1: 'bar6' = foo6(false, 0, true, null)({}, [])
// $ExpectError
const foo6_6_Error1: 'bar6' = foo6(false, 0, true, null, {})([])
// $ExpectError
const foo6_7_Error1: 'bar6' = foo6(false)(0)(true, null, {}, [])
// $ExpectError
const foo6_8_Error1: 'bar6' = foo6(false, 0)(true)(null, {}, [])
// $ExpectError
const foo6_9_Error1: 'bar6' = foo6(false, 0, true)(null)({}, [])
// $ExpectError
const foo6_10_Error1: 'bar6' = foo6(false, 0, true, null)({})([])
// $ExpectError
const foo6_11_Error1: 'bar6' = foo6(false)(0, true)(null, {}, [])
// $ExpectError
const foo6_12_Error1: 'bar6' = foo6(false, 0)(true, null)({}, [])
// $ExpectError
const foo6_13_Error1: 'bar6' = foo6(false, 0, true)(null, {})([])
// $ExpectError
const foo6_14_Error1: 'bar6' = foo6(false)(0, true, null)({}, [])
// $ExpectError
const foo6_15_Error1: 'bar6' = foo6(false, 0)(true, null, {})([])
// $ExpectError
const foo6_16_Error1: 'bar6' = foo6(false)(0, true, null, {})([])

// $ExpectError
const foo6_1_Error2: 'bar6' = foo6('', 0, true, '', {}, [])
// $ExpectError
const foo6_2_Error2: 'bar6' = foo6('')(0, true, '', {}, [])
// $ExpectError
const foo6_3_Error2: 'bar6' = foo6('', 0)(true, '', {}, [])
// $ExpectError
const foo6_4_Error2: 'bar6' = foo6('', 0, true)('', {}, [])
// $ExpectError
const foo6_5_Error2: 'bar6' = foo6('', 0, true, '')({}, [])
// $ExpectError
const foo6_6_Error2: 'bar6' = foo6('', 0, true, '', {})([])
// $ExpectError
const foo6_7_Error2: 'bar6' = foo6('')(0)(true, '', {}, [])
// $ExpectError
const foo6_8_Error2: 'bar6' = foo6('', 0)(true)('', {}, [])
// $ExpectError
const foo6_9_Error2: 'bar6' = foo6('', 0, true)('')({}, [])
// $ExpectError
const foo6_10_Error2: 'bar6' = foo6('', 0, true, '')({})([])
// $ExpectError
const foo6_11_Error2: 'bar6' = foo6('')(0, true)('', {}, [])
// $ExpectError
const foo6_12_Error2: 'bar6' = foo6('', 0)(true, '')({}, [])
// $ExpectError
const foo6_13_Error2: 'bar6' = foo6('', 0, true)('', {})([])
// $ExpectError
const foo6_14_Error2: 'bar6' = foo6('')(0, true, '')({}, [])
// $ExpectError
const foo6_15_Error2: 'bar6' = foo6('', 0)(true, '', {})([])
// $ExpectError
const foo6_16_Error2: 'bar6' = foo6('')(0, true, '', {})([])

// $ExpectError
const foo6_1_Error3: 'bar6' = foo6('', 0, true, null, {}, '')
// $ExpectError
const foo6_2_Error3: 'bar6' = foo6('')(0, true, null, {}, '')
// $ExpectError
const foo6_3_Error3: 'bar6' = foo6('', 0)(true, null, {}, '')
// $ExpectError
const foo6_4_Error3: 'bar6' = foo6('', 0, true)(null, {}, '')
// $ExpectError
const foo6_5_Error3: 'bar6' = foo6('', 0, true, null)({}, '')
// $ExpectError
const foo6_6_Error3: 'bar6' = foo6('', 0, true, null, {})('')
// $ExpectError
const foo6_7_Error3: 'bar6' = foo6('')(0)(true, null, {}, '')
// $ExpectError
const foo6_8_Error3: 'bar6' = foo6('', 0)(true)(null, {}, '')
// $ExpectError
const foo6_9_Error3: 'bar6' = foo6('', 0, true)(null)({}, '')
// $ExpectError
const foo6_10_Error3: 'bar6' = foo6('', 0, true, null)({})('')
// $ExpectError
const foo6_11_Error3: 'bar6' = foo6('')(0, true)(null, {}, '')
// $ExpectError
const foo6_12_Error3: 'bar6' = foo6('', 0)(true, null)({}, '')
// $ExpectError
const foo6_13_Error3: 'bar6' = foo6('', 0, true)(null, {})('')
// $ExpectError
const foo6_14_Error3: 'bar6' = foo6('')(0, true, null)({}, '')
// $ExpectError
const foo6_15_Error3: 'bar6' = foo6('', 0)(true, null, {})('')
// $ExpectError
const foo6_16_Error3: 'bar6' = foo6('')(0, true, null, {})('')

// $ExpectError
const foo6_1_Error4: 'error' = foo6('', 0, true, null, {}, [])
// $ExpectError
const foo6_2_Error4: 'error' = foo6('')(0, true, null, {}, [])
// $ExpectError
const foo6_3_Error4: 'error' = foo6('', 0)(true, null, {}, [])
// $ExpectError
const foo6_4_Error4: 'error' = foo6('', 0, true)(null, {}, [])
// $ExpectError
const foo6_5_Error4: 'error' = foo6('', 0, true, null)({}, [])
// $ExpectError
const foo6_6_Error4: 'error' = foo6('', 0, true, null, {})([])
// $ExpectError
const foo6_7_Error4: 'error' = foo6('')(0)(true, null, {}, [])
// $ExpectError
const foo6_8_Error4: 'error' = foo6('', 0)(true)(null, {}, [])
// $ExpectError
const foo6_9_Error4: 'error' = foo6('', 0, true)(null)({}, [])
// $ExpectError
const foo6_10_Error4: 'error' = foo6('', 0, true, null)({})([])
// $ExpectError
const foo6_11_Error4: 'error' = foo6('')(0, true)(null, {}, [])
// $ExpectError
const foo6_12_Error4: 'error' = foo6('', 0)(true, null)({}, [])
// $ExpectError
const foo6_13_Error4: 'error' = foo6('', 0, true)(null, {})([])
// $ExpectError
const foo6_14_Error4: 'error' = foo6('')(0, true, null)({}, [])
// $ExpectError
const foo6_15_Error4: 'error' = foo6('', 0)(true, null, {})([])
// $ExpectError
const foo6_16_Error4: 'error' = foo6('')(0, true, null, {})([])

// -------------

const currfn1: (y: number) => number = _.curryN(2, (x: number, y: number): number => x + y)(2)

const flipped: (x: number, y: boolean, z: string) => number = _.flip((x: boolean, y: number, z: string) => 1)
const flipped2: (x: number, y: boolean) => (z: string) => number = _.flip((x: boolean, y: number, z: string) => 1)
const obb = {
  doStuff(x: string, y: number, z: boolean) {
    return 1
  },
  doLessStuff(x: string, y: number) {
    return 'hello'
  },
  doEvenLessStuff(x: string) {
    return true
  },
}
const doStuff: (x: string, y: number, z: boolean, obj: typeof obb) => number = _.invoker(3, 'doStuff')
//$ExpectError
const doLessStuff: (x: string, y: number, z: boolean, obj: typeof obb) => number = _.invoker(3, 'doLStuff')
const stuffDone: number = doStuff('dd', 1, true, obb)

const range = _.juxt([ _.toString, Math.min, Math.max ])
const ju: Array<number|string> = range(3, 4, 9, -3)

let count = 0
const factorial = _.memoize(n => {
  count += 1
  return _.product(_.range(1, n + 1))
})
const mem: number = factorial(5)

const narg:string|number = _.nthArg(1)(1, 'b', 'c')

const oof: Array<Array<number>> = _.of([ 42 ])

const unap: string = _.unapply(JSON.stringify)(1, 2, 3)

const greetName = name => 'Hello ' + name

const shoutedGreet: boolean = _.wrap(greetName, (gr, name) => gr(name) === 'Hello Anna')('Anna')
const shoutedGreet2: string = _.wrap(greetName, (gr, name) => name && 'Hello Anna')(true)

// Uncurry
const needs3: string => string => string => string = a => b => c => a + b + c

//$ExpectError
const needs3_error1: number = uncurryN(3, needs3)('', '', '')

//$ExpectError
const needs3_error2: string => string = uncurryN(3, needs3)('', '', '')

//$ExpectError
const needs3_error3: string => string => string = uncurryN(3, needs3)('', '', '')

const needs3_no_error: string = uncurryN(3, needs3)('', '', '')

// --- PipeP ---
const pAdd: (number) => (number) => Promise<number> = (a) => (b) => Promise.resolve(a + b)
const pAppend: (string) => (string) => Promise<string> = (a) => (b) => Promise.resolve(a + b)
const pToString: (number) => Promise<string> = (n) => Promise.resolve(String(n))
const pFn1: (number) => Promise<number> =  pipeP(pAdd(2))
const pFoo1: Promise<number> = pFn1(2)
const pFn2: (number) => Promise<string> =  pipeP(pAdd(2), pToString)
const pFoo2: Promise<string> = pFn2(2)
const pFn3: (number) => Promise<string> =  pipeP(pAdd(2), pToString, pAppend('A'))
const pFoo3: Promise<string> = pFn3(2)
const pFn4: (number) => Promise<string> =  pipeP(pAdd(2), pToString, pAppend('A'), pAppend('B'))
const pFoo4: Promise<string> = pFn4(2)
const pFn5: (number) => Promise<string> =  pipeP(pAdd(2), pToString, pAppend('A'), pAppend('B'), pAppend('C'))
const pFoo5: Promise<string> = pFn5(2)
const pFn6: (number) => Promise<string> =  pipeP(pAdd(2), pToString, pAppend('A'), pAppend('B'), pAppend('C'), pAppend('D'))
const pFoo6: Promise<string> = pFn6(2)

//$ExpectError
const pipeP_error1: number => Promise<number> = _.pipeP(_.add(2))
//$ExpectError
const pipeP_error2: number => Promise<string> = _.pipeP(pAdd(2), String)
//$ExpectError
const pipeP_error3: (number) => Promise<number> =  pipeP(pAdd(2), pToString, pAdd(2))
//$ExpectError
const pipeP_error4: (number) => Promise<string> =  pipeP(pAdd(2), pToString, pAppend('A'), pAdd(2))
//$ExpectError
const pipeP_error5: (number) => Promise<string> =  pipeP(pAdd(2), pToString, pAppend('A'), pAppend('B'), pAdd(2))
//$ExpectError
const pipeP_error6: (number) => Promise<string> =  pipeP(pAdd(2), pToString, pAppend('A'), pAppend('B'), pAppend('C'), pAdd(2))

// -------------

// --- TyrCatch ---
const tryFn: (boolean) => string =
  (a) => String(a)

const tryFn_2: (boolean) => boolean =
  (a) => a

const catchFn: (Error, boolean) => string =
  (e, a) => e.message

const catchFn_2: (Error, boolean) => boolean =
  (e, a) => a

const tc1: string = tryCatch(tryFn, catchFn, true);
const tc2: boolean => string = tryCatch(tryFn, catchFn);
const tc3: string = tc2(true);
//const tc7: string = tryCatch(tryFn)(catchFn)(true);
const tc4: string = tryCatch(tryFn)(catchFn, true);
const tc5: string = tryCatch(tryFn)(catchFn)(true);

//$ExpectError
const tc_error1: boolean = tryCatch(tryFn, catchFn, true);
//$ExpectError
const tc_error2: boolean = tryCatch(tryFn, catchFn)(true);
//$ExpectError
const tc_error3: boolean = tryCatch(tryFn)(catchFn, true);
//$ExpectError
const tc_error4: boolean = tryCatch(tryFn)(catchFn)(true);
//$ExpectError
const tc_error5: string = tryCatch(tryFn_2, catchFn, 'string');
//$ExpectError
const tc_error6: string = tryCatch(tryFn_2, catchFn)('string');
//$ExpectError
const tc_error7: string = tryCatch(tryFn_2)(catchFn, 'string');
//$ExpectError
const tc_error8: string = tryCatch(tryFn_2)(catchFn)('string');
//$ExpectError
const tc_error9: string = tryCatch(tryFn_2, catchFn, true);
//$ExpectError
const tc_error10: string = tryCatch(tryFn_2, catchFn)(true);
//$ExpectError
const tc_error11: string = tryCatch(tryFn_2)(catchFn, true);
//$ExpectError
const tc_error12: string = tryCatch(tryFn_2)(catchFn)(true);
//$ExpectError
const tc_error13: string = tryCatch(tryFn, catchFn_2, true);
//$ExpectError
const tc_error14: string = tryCatch(tryFn, catchFn_2)(true);
//$ExpectError
const tc_error15: string = tryCatch(tryFn)(catchFn_2, true);
//$ExpectError
const tc_error16: string = tryCatch(tryFn)(catchFn_2)(true);

// -------------

/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import _, { compose, pipe } from 'ramda'
// Function
const ns: Array<number> = [ 1, 2, 3, 4, 5 ]
const ss: Array<string> = [ 'one', 'two', 'three', 'four' ]
const obj: {[k:string]:number} = { a: 1, c: 2 }
const objMixed: {[k:string]:mixed} = { a: 1, c: 'd' }
const os: Array<{[k:string]: *}> = [ { a: 1, c: 'd' }, { b: 2 } ]
const str: string = 'hello world'

type R = {
  sum: number,
  nested: { mul: number },
}
const greet: string = _.replace('{name}', _.__, 'Hello, {name}!')('John')
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
const b: number = add2(2)
const fail: string = _.pipe(_.trim)('h')
const str3: Array<string|void> = _.pipe(_.toLower, _.trim, _.match(/2/))(' 1,2,3 ')
const str4: Array<string> = _.pipe(_.toLower, _.trim, _.split(','))(' 1,2,3 ')
const str5: string = _.pipe(_.replace('3', '4'), _.toLower, _.trim)(' 1,2,3 ')

const currfn: (y: number) => number = _.curry((x: number, y: number): number => x + y)(2)
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

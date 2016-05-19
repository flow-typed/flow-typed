/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
'use strict'
const _ = require('ramda')
function describe(tag, fn) {
  fn()
}

function it(tag, fn) {
  fn()
}

describe('Functions', () => {
  it('T and F', () => {
    const num1: boolean = _.T()
    const num2: boolean = _.F()
  })
  it('should typecheck pipe', () => {
    const f = _.compose(_.add)
    const m: (a: number) => number = f(2)
    const a = _.compose(_.add(2))
    const b: number = a(2)
    const fail: string = _.pipe(_.trim)('h')
    const str: Array<string|void> = _.pipe(_.toLower, _.trim, _.match(/2/))(' 1,2,3 ')
    const str1: Array<string> = _.pipe(_.toLower, _.trim, _.split(','))(' 1,2,3 ')
    const str2: string = _.pipe(_.replace('3', '4'), _.toLower, _.trim)(' 1,2,3 ')
  })
  it('should typecheck composition', () => {
    const f = _.pipe(_.add)
    const m: (a: number) => number = f(2)
    const a = _.pipe(_.add(2))
    const b: number = a(2)
    const fail: string = _.pipe(_.trim)('h')
    const str: Array<string|void> = _.compose(_.match(/2/), _.toLower, _.trim)(' 1,2,3 ')
    const str1: Array<string> = _.compose(_.split(','), _.toLower, _.trim)(' 1,2,3 ')
    const str2: string = _.compose(_.replace('3', '4'), _.toLower, _.trim)(' 1,2,3 ')
  })
})

describe('Math', () => {
  it('typechecks unary', () => {
    const n1: number = _.inc(1)
    const n2: number = _.dec(1)
  })
  it('typechecks binary', () => {
    const n1: number = _.divide(2, 4)
    const n2: (b: number) => number = _.divide(2)
    const n3: number = n2(2)
    const n4: number = _.add(2, 1)
    const n5: (b: number) => number = _.add(2)
    const n6: number = n5(2)
  })

  it('mean/median/product/sum', () => {
    const n1: number = _.mean([ 1, 2 ])
    const n2: number = _.median([ 1, 2 ])
    const n3: number = _.product([ 1, 2 ])
    const n4: number = _.sum([ 1, 2 ])
  })
})

describe('List', () => {
  it('typechecks adjust', () => {
    const a = [ 1, 2, 3 ]
    const b: Array<number> = _.adjust(_.add(2), _.__, a)(2)
    const c = [ 1, 2, 3 ]
    const d: Array<number|boolean> = _.adjust(_.T, 2, a)
    const adjustByAdd = _.adjust(_.add(2))
    const adjustSecondElemByAdd = adjustByAdd(2, a)
    const result: Array<number> = adjustSecondElemByAdd(a)
    const a1: boolean = _.all((x: number) => x < 1, [ 2,3,4 ])
  })
  it('typechecks insert', () => {
    const a = [ 1, 2, 3 ]
    const b: Array<number> = _.insert(1, _.__, a)(2)
    const c = [ 1, 2, 3 ]
    const b1: Array<number> = _.insertAll(1, c, a)
    const d: Array<number> = _.insert(0, 2, a)
    const insertAtOne = _.insert(1)
    const insertMe: Array<number> = insertAtOne(2)(a)
  })
  it('should typecheck all', function () {
    const a1: boolean = _.all((x: number) => x < 1, [ 2,3,4 ])
  })
  it('should typecheck chain', () => {
    const ch: Array<string> = _.chain(x => [ x + 'ss' ], [ 's', 'w' ])
  })
  it('should typecheck concat', () => {
    const s: Array<number> = _.concat([ 1 ],[ 2 ])
    const s1: Array<number> = _.concat([ 1 ])([ 2 ])
  })
  it('should typecheck contains', () => {
    const c: boolean = _.contains(1, [ 1,2 ])
    const c1: (xs: Array<number>) => boolean = _.contains(1)
    const c2: boolean = c1([ 1,2 ])
  })
  it('should typecheck drop', () => {
    const s: Array<number> = _.drop(1,[ 1, 2 ])
    const s1: Array<number> = _.drop(1)([ 1, 2 ])
    const s3: Array<number> = _.dropWhile(x => x > 1, [ 1,2,3 ])
    const s4: Array<string> = _.dropWhile(x => x === '2', [ '1','2' ])
  })
  it('should typecheck filter/find', () => {
    const s: Array<number> = _.filter(x => x > 1,[ 1, 2 ])
    const s1: Array<string> = _.filter(x => x === '2', [ '2', '3' ])
    const s3: {[key: string]: string} = _.filter(x => x === '2', { a:'2', b:'3' })
    const s4: ?string = _.find(x => x === '2', [ '1', '2' ])
    const s5: ?{[key: string]: number} = _.find(x => x === '2', { a:1, b:2 })
    const s6: number = _.findIndex(x => x === '2', [ '1', '2' ])
    const s7: number = _.findIndex(x => x === '2', { a:'1', b:'2' })
  })
  it('should typecheck flatten', function () {
    const s: Array<number> = _.flatten([ 1, [ 2 ], [ '1', [ 2, [ 3 ] ] ] ])
    const s1: Array<number> = _.flatten([ [ '1' ], [ '1', '2' ], [ '1', [ '2', [ '3' ] ] ] ])
  })

  it('should typecheck forEach', function () {
    const s: Array<number> = _.forEach(x => console.log(x), [ 1,2,3 ])
    const logEach: (x: Array<number>) => Array<number> = _.forEach(x => console.log(x))
  })

  it('should typecheck fromPairs', function () {
    const s: {[key: string]: number} = _.fromPairs([ [ 'hello', 1 ], [ 'bye', 2 ] ])
    const s1: {[key: string]: string} = _.fromPairs([ [ '1', 'hello' ], [ '2', 'bye' ] ])
  })

  it('should typecheck groupBy', function () {
    const s: {[key: string]: Array<number>} = _.groupBy(x => x > 1 ? 'A' : 'B', [ 0, 1, 2 ])
    const s1: {[key: string]: Array<Object>} = _.groupBy(x => x.n > 1 ? 'A' : 'B', [ { n:1 },{ n:2 } ])
  })

  it('should typecheck groupWith', function () {
    const s: Array<Array<number>> = _.groupWith((x,y) => x === y, [ 0, 1, 2 ])
    const s1: Array<string> = _.groupWith((x,y) => x === y, 'fffdahgs')
  })
  it('should typecheck head', function () {
    const s: ?number = _.head([ 1,2,3 ])
    const s1: ?string = _.head('hhhh')
  })
  it('should typecheck xprod', function () {
    const s: Array<[string, number]> = _.xprod([ 's', 'f' ], [ 1, 2 ])
    const s1: Array<[number, Object]> = _.xprod([ 1, 1 ], [ {}, {} ])
  })
  it('should typecheck map', () => {
    const ys: Array<string> = _.map((x) => x.toString(), [ 1, 2, 3 ])
    const zs: {[key: string]: string} = _.map((x) => x.toString(), { a: 1, b: 2, c: 3 })
    //$ExpectError
    const ys1: Array<number> = _.map((x) => x.toString(), [ 1, 2, 3 ])
    const ys2: Array<string> = _.map((x) => x.toString())([ 1, 2, 3 ])
  })
  it('should typecheck mapAccum', () => {
    let digits = [ '1', '2', '3', '4' ]
    let appender = (a, b) => [ a + b, a + b ]
    const res: [string, Array<string>] = _.mapAccum(appender, '0', digits)
  })
  it('should typecheck pluck', () => {
    const res: Array<number> = _.pluck('a')([ { a: 1 }, { a: 2 } ])
    const res1: Array<number> = _.pluck(0)([ [ 1, 2 ], [ 3, 4 ] ])
    const res2: Array<number|string> = _.pluck(0)([ [ '1', 2 ], [ 3, 4 ] ])
  })
  it('should typecheck splitAt, splitEvery', () => {
    const res: [Array<number>, Array<number>] = _.splitAt(1, [ 1, 2, 3 ])
    const res1: [string, string] = _.splitAt(5, 'hello world')
    const res2: [string, string] = _.splitAt(-1, 'foobar')
    const res3: Array<Array<number>> = _.splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])
    const res4: Array<string> = _.splitEvery(3, 'foobarbaz')
  })
  it('should typecheck transpose', () => {
    const res: Array<Array<number|string>> = _.transpose([ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ])
  })
  it('should typecheck zipWith', () => {
    const res: Array<string> = _.zipWith((x, y) => x + y, [ 1, 2, 3 ], [ 'a', 'b', 'c' ])
  })
  it('should typecheck nth', () => {
    const ys: ?number = _.nth(2, [ 1, 2, 3 ])
    const ys1: ?number = _.nth(2)([ 1, 2, 3 ])
    //$ExpectError
    const ys2: ?string = _.nth(2, [ 1, 2, 3 ])
  })
  it('should typecheck reduce', () => {
    const reduced: Array<number> = _.reduce((acc, x) => [ ...acc, x ], [], [ 1, 2, 3 ])
    const reducedStr: string = _.reduce((acc, x) => acc + x, '', [ 1, 2, 3 ])
    const reducedObj: {[key: string]: number} = _.reduce((acc, x) => { return { ...acc, [x]: x } }, {}, [ 1, 2, 3 ])
    //$ExpectError
    const reducedErr: Array<string> = _.reduce((acc, x) => [ ...acc, x ], [], [ 1, 2, 3 ])
    //$ExpectError
    const reducedStrErr: Array<number> = _.reduce((acc, x) => acc + x, '', [ 1, 2, 3 ])
  })
  it('should typecheck scan', () => {
    const reduced: Array<number> = _.scan(_.add, 1, [ 1, 2, 3 ])
    const reduced1: Array<number> = _.scan(_.add, 1)([ 1, 2, 3 ])
    const reduced2: Array<number> = _.scan(_.add)(1, [ 1, 2, 3 ])
    //$ExpectError
    const reduced4: Array<number> = _.scan(_.add, '1', [ 1, 2, 3 ])
  })
  it('should typecheck reduceBy', () => {
    let reduceToNamesBy = _.reduceBy((acc: Array<string>, student: {name: string, score: number}): Array<string> => acc.concat(student.name), [])
    let namesByGrade = reduceToNamesBy((student) => {
      let score = student.score
      return score < 65 ? 'F' :
      score < 70 ? 'D' :
      score < 80 ? 'C' :
      score < 90 ? 'B' : 'A'
    })
    let students = [
      { name: 'Lucy', score: 92 },
      { name: 'Drew', score: 85 },
      { name: 'Bart', score: 62 },
    ]
    const res: {[key: string]: Array<string>} = namesByGrade(students)
  })
})

describe('String', () => {
  it('should trim', () => {
    const s: string = _.trim('s')
  })
  it('should match/test', () => {
    const ss: Array<string|void> = _.match(/h/, 'b')
    const ss1: boolean = _.test(/h/, 'b')
    const ss2: Array<string> = _.split(',', 'b,d,d')
    const ss3: string = _.replace(',', '|', 'b,d,d')
  })
  it('should typecheck concat', () => {
    const s: string = _.concat('H','E')
    const s1: string = _.concat('H')('E')
  })
  it('should typecheck drop', () => {
    const s: string = _.drop(1,'EF')
    const s1: string = _.drop(1)('E')
    const s3: string = _.dropLast(1,'EF')
  })
  it('should typecheck nth', () => {
    const ys: string = _.nth(2, 'curry')
    const ys1: string = _.nth(2)('curry')
    //$ExpectError
    const ys2: string = _.nth(2, [ 1, 2, 3 ])
  })
})


describe('Object', () => {
  it('should typecheck evolve', () => {
    const s: Object = _.evolve({
      n: _.add(2),
    }, { n: 1 })
    const s1 = _.evolve({
      n: x => `${x}`,
    }, { n: 1, d: 2 })
  })
  it('should typecheck objOf', function () {
    const obj: {[key: string]: number} = _.objOf('key', 1)
    const obj1: {[key: string]: number} = _.objOf('key')(1)
  })
  it('should typecheck propOr', () => {
    const x: string | number = _.propOr(2, 'a', { b: 2, c: 'dd' })
    const x1: string | number = _.propOr(2, 'a')({ b: 2 })
    const x2: string | number = _.propOr(2)('a', { b: 2 })
    const x3: string | number = _.propOr(2)('a')({ b: 2, c: 'dd' })
    //$ExpectError
    const x4: number = _.propOr('a')('a')({ b: 2 })
  })
  it('should typecheck map', () => {
    //$ExpectError
    const ys: {[key: string]: number} = _.map((x) => x.toString(), { a: 1, b: 2, c: 3 })
    const ys1: {[key: string]: string} = _.map((x) => x.toString())({ a: 1, b: 2, c: 3 })
  })
})

describe('Logic', () => {
  it('should typecheck pathSatisfies', function () {
    const obj: boolean = _.pathSatisfies(y => y > 1, [ 'x', 'y' ], { x: { y: 2 } })
    const obj1: boolean = _.pathSatisfies(y => y > 1)([ 'x', 'y' ])({ x: { y: 2 } })
    const obj2: boolean = _.pathSatisfies(y => y > 1, [ 'x', 'y' ])({ x: { y: 2 } })
    const obj3: boolean = _.pathSatisfies(y => y > 1)([ 'x', 'y' ], { x: { y: 2 } })
  })
  it('should typecheck propSatisfies', function () {
    const obj: boolean = _.propSatisfies(y => y > 1, 'y', { x: { y: 2 } })
    const obj1: boolean = _.propSatisfies(y => y > 1)('y')({ x: { y: 2 } })
    const obj2: boolean = _.propSatisfies(y => y > 1, 'y')({ x: { y: 2 } })
    const obj3: boolean = _.propSatisfies(y => y > 1)('y', { x: { y: 2 } })
  })
})

describe('Function', function () {
  it('should typecheck curry', function () {
    const fn: (y: number) => number = _.curry((x: number, y: number): number => x + y)(2)
  })
  it('should typecheck is', function () {
    const x = _.is(Number, 1)
  })
})

describe('transducers', () => {
  it('should typecheck into', () => {
    const transducer: (xs: Array<number>) => Array<number> = _.compose(_.map(_.add(1)), _.tail)
    const arr: Array<number> = _.into([], transducer, [ 1, 2, 3, 4 ])
    const transducer2: (xs: Array<string>) => Array<string> = _.compose(_.map(_.toUpper), _.map(_.toLower))
    const arr2: string = _.into('', transducer2, [ 'a', 'b', 'c' ])
    const transformer: Transformer<Array<number>, Array<string>> = {
      '@@transducer/step': (a, e) => {
        return _.prepend(e, a)
      },
      '@@transducer/init': () => {
        return [ 2 ]
      },
      '@@transducer/result': (r) => {
        return r
      },
    }
    const transducer1= _.compose(_.map(_.toString), _.map(_.toUpper))
    const arr1 = _.into(transformer, transducer1, [ 1, 2, 3 ])

  })
})

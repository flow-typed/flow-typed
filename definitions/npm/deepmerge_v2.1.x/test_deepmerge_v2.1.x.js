const deepmerge = require("deepmerge");

const m1: { a: string, b: string } = deepmerge({a: ''}, { b: '' })

const m2: { a: string, b: string } = deepmerge.all([ {a: ''}, { b: '' } ])

// $ExpectError
const m3: { a: number, b: string } = deepmerge({a: ''}, { b: '' })

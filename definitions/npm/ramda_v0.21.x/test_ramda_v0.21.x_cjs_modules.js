/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
const _ = require('ramda')
const { compose, match, toLower, trim, zipWith } = _

// $ExpectError
inc()

const str: Array<string|void> = compose(match(/2/), toLower, trim)(' 1,2,3 ')
const str1: Array<string> = _.compose(_.split(','), _.toLower, _.trim)(' 1,2,3 ')
const str2: string = _.compose(_.replace('3', '4'), _.toLower, _.trim)(' 1,2,3 ')

const zipped: Array<{s: number, y: string}> = _.zipWith((a, b) => ({ s: a, y: b }), [ 1, 2, 3 ], [ '1', '2', '3' ])
const zipped2: Array<{s: number, y: string}> = zipWith((a, b) => ({ s: a, y: b }), [ 1, 2, 3 ])([ '1', '2', '3' ])
const zipped3: Array<{s: number, y: string}> = _.zipWith((a, b) => ({ s: a, y: b }))([ 1, 2, 3 ])([ '1', '2', '3' ])

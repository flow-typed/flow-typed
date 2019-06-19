/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import _, { compose, match, toLower, trim } from 'ramda'

//$ExpectError
inc()

const str: Array<string|void> = compose(match(/2/), toLower, trim)(' 1,2,3 ')
const str1: Array<string> = _.compose(_.split(','), _.toLower, _.trim)(' 1,2,3 ')
const str2: string = _.compose(_.replace('3', '4'), _.toLower, _.trim)(' 1,2,3 ')

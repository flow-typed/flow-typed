/* @flow */

import unified from 'unified'

var process = unified()

unified.data('foo', 'bar')

// $ExpectError Array. This type is incompatible with data
process.data([],[])
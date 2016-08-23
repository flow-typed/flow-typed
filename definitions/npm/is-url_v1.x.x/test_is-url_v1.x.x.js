// @flow

import isUrl from 'is-url'

(isUrl("http://flowtype.org"): boolean)

// $ExpectError
isUrl({})

// $ExpectError
isUrl(null)

// $ExpectError
const t: string = isUrl("http://flowtype.org")

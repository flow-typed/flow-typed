// @flow

import isUrl from 'is-url'

(isUrl("http://flowtype.org"): boolean)

// $FlowExpectedError
isUrl({})

// $FlowExpectedError
isUrl(null)

// $FlowExpectedError
const t: string = isUrl("http://flowtype.org")

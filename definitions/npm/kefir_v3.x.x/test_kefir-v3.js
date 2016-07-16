/* @flow */

import * as Kefir from 'kefir'

const prop = Kefir.constant(1)

prop.onValue(x => {
  const n: number = x
  // $ExpectError number. This type is incompatible with string
  const s: string = x
})

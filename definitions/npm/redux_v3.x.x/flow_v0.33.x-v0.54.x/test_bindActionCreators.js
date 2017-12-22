// @flow
import type { Dispatch } from 'redux'
import { bindActionCreators } from 'redux'

type Action = { type: 'A' } | { type: 'B' };
declare var dispatch: Dispatch<Action>;

//
// bindActionCreators API (one action creator)
//

const ac1 = bindActionCreators((n: number) => ({ type: 'A' }), dispatch)
ac1(1)
// $ExpectError
ac3('wrong') // wrong argument
// $ExpectError
const ac2 = bindActionCreators(() => 'wrong', dispatch) // wrong return value
const ac3 = bindActionCreators((n: number, s: string) => ({ type: 'A' }), dispatch)
ac3(1, 'ok')
// $ExpectError
ac3(1, 2) // wrong argument

//
// bindActionCreators API (dictionary of action creators)
//

const acs1 = bindActionCreators({
  a: (n: number) => ({ type: 'A' }),
  b: (n: number, s: string) => ({ type: 'B' })
}, dispatch)
acs1.a(1)
acs1.b(1, 's')
// $ExpectError
acs1.a('s')
// $ExpectError
acs1.b(1, 2)
const acs2 = bindActionCreators({
  a: () => ({ type: 'A' }),
  // $ExpectError
  b: () => 'wrong' // wrong return value
}, dispatch)

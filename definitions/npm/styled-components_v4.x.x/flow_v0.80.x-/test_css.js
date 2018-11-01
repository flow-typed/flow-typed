import * as React from 'react'
import {
  css,
  type CSSRules
} from 'styled-components'

const styles1 : CSSRules = css`
  color: pink;
`

// This shoudl error, but I guess flow doesn't understnad yet how template literals expand?
const styles2 = css`
  color: ${{}};
`

// OK
const styles3 = css(['color: '], 'pink')
const styles4 = css(['color: '], () => 'salmon')

// $ExpectError - array is not a valid interpolation
const styles5 = css(['color: '], [])
// $ExpectError - object is not a valid inerpolation
const styles6 = css(['color: '], {})

// @NOTE not sure what better way to test this...

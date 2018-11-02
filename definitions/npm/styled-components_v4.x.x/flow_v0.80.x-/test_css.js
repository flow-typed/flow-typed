// @flow
import * as React from 'react'
import {
  css,
  keyframes,
  type CSSRules
} from 'styled-components'

const styles1 : CSSRules = css`
  color: pink;
`

// This shoudl error, but I guess flow doesn't understnad yet how template literals expand?
const styles2 = css`
  color: ${{}};
`

const anim = keyframes`
  from {}
  to {}
`

const additonalStyles = css`
  background: ${'pink'};
`

// OK
const styles3 = css(['color: ', ';'], 'pink')
const styles4 = css(['color: ', ';'], () => 'salmon')
const styles5 = css(['animation: ', ';'], anim)
const styles6 = css(['color: ', ';'], 'pink', additonalStyles)

// $ExpectError - object is not a valid inerpolation
const styles7 = css(['color: ', ';'], {})

// @NOTE not sure what better way to test this...

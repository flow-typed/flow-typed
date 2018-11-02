// @flow

import * as React from 'react'
import styled from 'styled-components'

const ref1 : { current : HTMLInputElement | null } = React.createRef()


const Input = styled.input``
const Span = styled.span``

const input = <Input ref={ref1} />
// $ExpectError - Complain about HTMLSpanElement not being compatible wiht HTMLInputElement
const span = <Span ref={ref1} />

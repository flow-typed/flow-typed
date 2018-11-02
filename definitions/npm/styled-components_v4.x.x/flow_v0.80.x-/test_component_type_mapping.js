// @flow
import * as React from 'react'
import styled from 'styled-components'
import type {
  StyledElementType
} from 'styled-components'

// Tests that we correctly map types correctly
const Span1 : StyledElementType<'span'> = styled.span``
const Span2 : StyledElementType<'span'> = styled('span')``
const Div3 : StyledElementType<'div'> = styled('div')``

// Test that we don't accidentally map incorrectly
// $ExpectError - Wrong component type
const Div2 : StyledElementType<'span'> = styled.div``
// $ExpectError - Wrong component type
const Div3 : StyledElementType<'span'> = styled('div')``


// Test it renders as the correct element
const span1 : React.Element<'span'> = <Span1 />
const span2 : React.Element<'span'> = <Span2 />
// $ExpectError - Wrong element type
const div3 : React.Element<'span'> = <Div3 />

// $ExpectError - test for non-existent element
const derp1 = styled.derp``

// $ExpectError - test for non-existent element
const derp2 = styled('derp')``

// Test we don't "accidentally style" something else:
// $ExpectError
const derp3 = styled(null)``

// $ExpectError
const derp3 = styled({})``

// $ExpectError
const derp3 = styled(1)``

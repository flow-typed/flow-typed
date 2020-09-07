// @flow
import * as React from 'react'
// import * as ReactNative from 'react-native'
import styled from 'styled-components/native'

// Test that we can create native components
const Text1 = styled.Text``
const Text2 = styled('Text')``

// $FlowExpectedError - test for non-existent element
const derp1 = styled.derp``

// $FlowExpectedError - test for non-existent element
const derp2 = styled('derp')``

// Test we don't "accidentally style" something else:
// $FlowExpectedError
const derp3 = styled(null)``

// $FlowExpectedError
const derp3 = styled({})``

// $FlowExpectedError
const derp3 = styled(1)``

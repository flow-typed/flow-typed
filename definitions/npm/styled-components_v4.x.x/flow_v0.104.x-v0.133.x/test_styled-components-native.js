// @flow
import * as React from 'react';
// import * as ReactNative from 'react-native'
import styled from 'styled-components/native';

// Test that we can create native components
const Text1 = styled.Text``;
const Text2 = styled('Text')``;

// $FlowExpectedError[incompatible-use] - test for non-existent element
const derp1 = styled.derp``;

// $FlowExpectedError[incompatible-call] - test for non-existent element
const derp2 = styled('derp')``;

// Test we don't "accidentally style" something else:
// $FlowExpectedError[incompatible-call]
const derp3 = styled(null)``;

// $FlowExpectedError[incompatible-call]
const derp4 = styled({})``;

// $FlowExpectedError[incompatible-call]
const derp5 = styled(1)``;

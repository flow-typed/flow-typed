// @flow
import * as React from 'react';
import { it } from 'flow-typed-test';
import { Swipeable } from 'react-native-gesture-handler';

it('should pass when use properly', () => {
  <Swipeable
    childrenContainerStyle={{ color: 'black' }}
    containerStyle={{ color: 'black' }}
    friction={69}
    leftThreshold={69}
    onSwipeableClose={() => {}}
    onSwipeableLeftOpen={() => {}}
    onSwipeableLeftWillOpen={() => {}}
    onSwipeableOpen={() => {}}
    onSwipeableRightOpen={() => {}}
    onSwipeableRightWillOpen={() => {}}
    onSwipeableWillClose={() => {}}
    onSwipeableWillOpen={() => {}}
    overshootFriction={69}
    overshootLeft={false}
    overshootRight={false}
    renderLeftActions={() => null}
    renderRightActions={() => null}
    rightThreshold={69}
    useNativeAnimations={false}
  />;
});

it('should raises an error when use incompatible values', () => {
  <Swipeable
    // $FlowExpectedError: need number
    friction={''}
    // $FlowExpectedError: need number
    leftThreshold={''}
    // $FlowExpectedError: need function
    onSwipeableClose={true}
    // $FlowExpectedError: need function
    onSwipeableLeftOpen={true}
    // $FlowExpectedError: need function
    onSwipeableLeftWillOpen={true}
    // $FlowExpectedError: need function
    onSwipeableOpen={true}
    // $FlowExpectedError: need function
    onSwipeableRightOpen={true}
    // $FlowExpectedError: need function
    onSwipeableRightWillOpen={true}
    // $FlowExpectedError: need function
    onSwipeableWillClose={true}
    // $FlowExpectedError: need function
    onSwipeableWillOpen={true}
    // $FlowExpectedError: need number
    overshootFriction={''}
    // $FlowExpectedError: need boolean
    overshootLeft={[false]}
    // $FlowExpectedError: need boolean
    overshootRight={[false]}
    // $FlowExpectedError: need function which return React.Node
    renderLeftActions={() => {}}
    // $FlowExpectedError: need function which return React.Node
    renderRightActions={() => {}}
    // $FlowExpectedError: need number
    rightThreshold={''}
    // $FlowExpectedError: need boolean
    useNativeAnimations={[false]}
  />;
});

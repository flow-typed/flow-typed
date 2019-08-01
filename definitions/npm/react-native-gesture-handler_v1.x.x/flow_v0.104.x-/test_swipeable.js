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
    // $ExpectError: need number
    friction={''}
    // $ExpectError: need number
    leftThreshold={''}
    // $ExpectError: need function
    onSwipeableClose={true}
    // $ExpectError: need function
    onSwipeableLeftOpen={true}
    // $ExpectError: need function
    onSwipeableLeftWillOpen={true}
    // $ExpectError: need function
    onSwipeableOpen={true}
    // $ExpectError: need function
    onSwipeableRightOpen={true}
    // $ExpectError: need function
    onSwipeableRightWillOpen={true}
    // $ExpectError: need function
    onSwipeableWillClose={true}
    // $ExpectError: need function
    onSwipeableWillOpen={true}
    // $ExpectError: need number
    overshootFriction={''}
    // $ExpectError: need boolean
    overshootLeft={[false]}
    // $ExpectError: need boolean
    overshootRight={[false]}
    // $ExpectError: need function which return React.Node
    renderLeftActions={() => {}}
    // $ExpectError: need function which return React.Node
    renderRightActions={() => {}}
    // $ExpectError: need number
    rightThreshold={''}
    // $ExpectError: need boolean
    useNativeAnimations={[false]}
  />;
});

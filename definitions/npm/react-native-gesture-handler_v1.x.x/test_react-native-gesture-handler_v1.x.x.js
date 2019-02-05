import { describe, it } from 'flow-typed-test';
import {
  PanGestureHandler,
  DrawerLayout,
  type PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import React from 'react';

describe('react-native-gesture-handler', () => {
  const noop = () => {};
  const percentCrop = { x: 0, y: 0, width: 100, height: 100 };
  const aspectCrop = { ...percentCrop, aspect: 3 / 2 };

  describe('PanGestureHandler', () => {
    it('should not show error when valid props are set', () => {
      <PanGestureHandler
        activeOffsetY={10}
        activeOffsetX={[-10, 20]}
        failOffsetY={10}
        failOffsetX={[-10, 20]}
        minDist={10}
        minVelocity={10}
        minVelocityX={10}
        minVelocityY={10}
        minPointers={10}
        maxPointers={10}
        avgTouches
        onGestureEvent={(event: PanGestureHandlerGestureEvent) =>
          event.nativeEvent.x
        }
        onHandlerStateChange={(event: PanGestureHandlerGestureEvent) =>
          event.nativeEvent.state
        }
        id="pan"
        enabled={false}
        waitFor={ref}
        shouldCancelWhenOutside
        hitSlop={20}
      />;
    });

    it('should error with invalid props', () => {
      <PanGestureHandler activeOffsetY="x" />;
    });
  });

  describe('DrawerLayout', () => {
    it('should not show error when valid props are set', () => {
      <DrawerLayout openDrawer={() => {}} closeDrawer={() => {}} />
    });

    it('should error with invalid props', () => {
      <DrawerLayout openDrawer={(something: number) => 'string'} closeDrawer={() => {}} />;
    });
  });
});

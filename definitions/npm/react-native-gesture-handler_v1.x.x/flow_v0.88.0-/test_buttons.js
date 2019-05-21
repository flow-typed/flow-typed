// @flow
import * as React from 'react';
import { describe, it } from 'flow-typed-test';
import {
  BaseButton,
  RectButton,
  BorderlessButton,
} from 'react-native-gesture-handler';

describe('common part', () => {
  const Buttons = [BaseButton, RectButton, BorderlessButton];

  describe('props', () => {
    it('should pass when use properly', () => {
      Buttons.forEach(Button => {
        <Button
          testID={'testID'}
          shouldActivateOnStart={true}
          disallowInterruption={false}
          onPress={() => {}}
          onActiveStateChange={() => {}}
          rippleColor={'white'}
          exclusive={true}
        />;
      });
    });

    it('should pass when render component without props', () => {
      Buttons.forEach(Button => {
        <Button />;
      });
    });

    it('should raises an error when pass incompatible types', () => {
      Buttons.forEach(Button => {
        <Button
          // $ExpectError: need boolean
          shouldActivateOnStart={'true'}
          // $ExpectError: need boolean
          exclusive={'true'}
          // $ExpectError: need string
          rippleColor={true}
        />;
      });
    });
  });
});

describe('BorderlessButton', () => {
  it('should have additional props', () => {
    <BorderlessButton borderless={true} activeOpacity={13} />;
  });

  it('should raises an error when use incompatible values for additional props', () => {
    <BorderlessButton
      // $ExpectError: need number
      activeOpacity={'void'}
      // $ExpectError: need boolean
      borderless={69}
    />;
  });
});

describe('RectButton', () => {
  it('should have additional props', () => {
    <RectButton underlayColor={'pink'} activeOpacity={0.5} />;
  });

  it('should raises an error when use incompatible values for additional props', () => {
    <RectButton
      // $ExpectError: need number
      activeOpacity={'void'}
      // $ExpectError: need string
      underlayColor={true}
    />;
  });
});

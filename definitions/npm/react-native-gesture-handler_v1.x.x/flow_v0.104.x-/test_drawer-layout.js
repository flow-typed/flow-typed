// @flow
import * as React from 'react';
import { it } from 'flow-typed-test';
import { DrawerLayout } from 'react-native-gesture-handler';

it('should raises an error when do not pass required props', () => {
  // $ExpectError: property `renderNavigationView` is missing in props
  <DrawerLayout />;
});

it('should raises an error when do not pass required props', () => {
  // $ExpectError: undefined is not React.Node
  <DrawerLayout renderNavigationView={() => {}} />;
});

it('should pass when use properly', () => {
  <DrawerLayout renderNavigationView={() => <div />} />;

  <DrawerLayout
    renderNavigationView={() => null}
    contentContainerStyle={{ color: 'black' }}
    drawerBackgroundColor="pink"
    drawerContainerStyle={{ width: 1 }}
    drawerLockMode="locked-open"
    drawerPosition="right"
    drawerType="slide"
    drawerWidth={69}
    edgeWidth={69}
    hideStatusBar={false}
    keyboardDismissMode="on-drag"
    minSwipeDistance={69}
    onDrawerClose={() => {}}
    onDrawerOpen={() => {}}
    onDrawerStateChanged={() => {}}
    overlayColor="pink"
    statusBarAnimation="fade"
    useNativeAnimations={false}
  />;
});

it('should raises an error when use incompatible values', () => {
  <DrawerLayout
    renderNavigationView={() => null}
    // $ExpectError: not supporter LockMode
    drawerLockMode="usps..."
    // $ExpectError: not supporter Position
    drawerPosition="top"
    // $ExpectError: not supporter Type
    drawerType="game"
    // $ExpectError: need string
    drawerBackgroundColor={123}
    // $ExpectError: need number
    drawerWidth={'123'}
    // $ExpectError: need number
    edgeWidth={'123'}
    // $ExpectError: need boolean
    hideStatusBar={123}
    // $ExpectError: need valid DismissMode
    keyboardDismissMode="..."
    // $ExpectError: need number
    minSwipeDistance={false}
    // $ExpectError: need function
    onDrawerClose={[]}
    // $ExpectError: need function
    onDrawerOpen={[]}
    // $ExpectError: need function
    onDrawerStateChanged={[]}
    // $ExpectError: need string
    overlayColor={123}
    // $ExpectError: need valid type Animation
    statusBarAnimation={'AAAA'}
    // $ExpectError: need boolean
    useNativeAnimations="да"
  />;
});

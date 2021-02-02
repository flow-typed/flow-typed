// @flow
import * as React from 'react';
import { it } from 'flow-typed-test';
import { DrawerLayout } from 'react-native-gesture-handler';

it('should raises an error when do not pass required props', () => {
  // $FlowExpectedError: property `renderNavigationView` is missing in props
  <DrawerLayout />;
});

it('should raises an error when do not pass required props', () => {
  // $FlowExpectedError: undefined is not React.Node
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
    // $FlowExpectedError: not supporter LockMode
    drawerLockMode="usps..."
    // $FlowExpectedError: not supporter Position
    drawerPosition="top"
    // $FlowExpectedError: not supporter Type
    drawerType="game"
    // $FlowExpectedError: need string
    drawerBackgroundColor={123}
    // $FlowExpectedError: need number
    drawerWidth={'123'}
    // $FlowExpectedError: need number
    edgeWidth={'123'}
    // $FlowExpectedError: need boolean
    hideStatusBar={123}
    // $FlowExpectedError: need valid DismissMode
    keyboardDismissMode="..."
    // $FlowExpectedError: need number
    minSwipeDistance={false}
    // $FlowExpectedError: need function
    onDrawerClose={[]}
    // $FlowExpectedError: need function
    onDrawerOpen={[]}
    // $FlowExpectedError: need function
    onDrawerStateChanged={[]}
    // $FlowExpectedError: need string
    overlayColor={123}
    // $FlowExpectedError: need valid type Animation
    statusBarAnimation={'AAAA'}
    // $FlowExpectedError: need boolean
    useNativeAnimations="да"
  />;
});

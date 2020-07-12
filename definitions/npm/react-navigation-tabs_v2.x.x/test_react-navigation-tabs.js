// @flow

import type {
  NavigationRoute,
  NavigationTabProp,
} from 'react-navigation-tabs';

import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import React from 'react';

/**
 * Screens
 */

const FunctionalScreenComponent = (
  { navigation }: {| navigation: NavigationTabProp<NavigationRoute> |},
) => {
  return "Test";
};
createMaterialTopTabNavigator({
  Test1: { screen: FunctionalScreenComponent },
});

class ClassScreenComponent extends React.Component<*> {
  render() {
    return "Test";
  }
}

// $FlowExpectedError you need a screen!
createBottomTabNavigator({
  Test1: { blah: "test" },
});

/**
 * Configs
 */

createBottomTabNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  // $FlowExpectedError tab not drawer!
  {
    drawerBackgroundColor: "green",
  },
);

createMaterialTopTabNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  {
    initialRouteName: "Test1",
  },
);

/**
 * Nested
 */

const innerRouteConfig = {
  Test1: { screen: FunctionalScreenComponent },
};
const nestedNavigator = createBottomTabNavigator(innerRouteConfig);
const outerRouteConfig = {
  Test2: { screen: nestedNavigator },
  Test3: { screen: ClassScreenComponent },
};
createMaterialTopTabNavigator(outerRouteConfig);

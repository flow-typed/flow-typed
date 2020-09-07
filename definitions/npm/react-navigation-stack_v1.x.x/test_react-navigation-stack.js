// @flow

import type {
  NavigationRoute,
  NavigationStackProp,
} from 'react-navigation-stack';

import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

/**
 * Screens
 */

const FunctionalScreenComponent = (
  { navigation }: {| navigation: NavigationStackProp<NavigationRoute> |},
) => {
  return "Test";
};

class ClassScreenComponent extends React.Component<*> {
  render() {
    return "Test";
  }
}

createStackNavigator({
  Test1: { screen: ClassScreenComponent },
});

// $FlowExpectedError numbers can never be components
createStackNavigator({
  Test1: { screen: 5 },
});

/**
 * Configs
 */

createStackNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  {
    mode: "card",
    initialRouteName: "Test1",
    cardShadowEnabled: false,
    cardOverlayEnabled: false,
  },
);

createStackNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  // $FlowExpectedError stack not drawer!
  {
    initialRouteName: "Test1",
    drawerBackgroundColor: "green",
  },
);

/**
 * Nav options
 */

createStackNavigator({
  Test1: {
    screen: FunctionalScreenComponent,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
});

class ComponentWithNavOptions extends React.Component<*> {
  static navigationOptions = {
    headerTitle: "Home",
  };
  render() {
    return "Test";
  }
}
createStackNavigator({
  Test1: { screen: ComponentWithNavOptions },
});

/**
 * Nested
 */

const innerRouteConfig = {
  Test1: { screen: FunctionalScreenComponent },
};
const nestedNavigator = createStackNavigator(innerRouteConfig);
const outerRouteConfig = {
  Test2: { screen: nestedNavigator },
  Test3: { screen: ClassScreenComponent },
};
createStackNavigator(outerRouteConfig);

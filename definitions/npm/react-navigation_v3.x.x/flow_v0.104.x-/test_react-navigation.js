// @flow

import type {
  NavigationScreenProp,
} from 'react-navigation';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  StackRouter,
  TabRouter,
} from 'react-navigation';
import React from 'react';

/**
 * Screens
 */

const FunctionalScreenComponent = (
  { navigation }: { navigation: NavigationScreenProp<*>, ... },
) => {
  return "Test";
};
createBottomTabNavigator({
  Test1: { screen: FunctionalScreenComponent },
});

class ClassScreenComponent extends React.Component<*> {
  render() {
    return "Test";
  }
}
createStackNavigator({
  Test1: { screen: ClassScreenComponent },
});

// $ExpectError numbers can never be components
createStackNavigator({
  Test1: { screen: 5 },
});

// $ExpectError you need a screen!
createBottomTabNavigator({
  Test1: { blah: "test" },
});

createDrawerNavigator({
  Test1: { getScreen: () => FunctionalScreenComponent },
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
  // $ExpectError stack not drawer!
  {
    initialRouteName: "Test1",
    drawerBackgroundColor: "green",
  },
);

createBottomTabNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  // $ExpectError tab not drawer!
  {
    drawerBackgroundColor: "green",
  },
);

createBottomTabNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  {
    initialRouteName: "Test1",
  },
);

createDrawerNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  {
    drawerBackgroundColor: "green",
  },
);

createDrawerNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  // $ExpectError drawer not tab!
  {
    tabBarPosition: "top",
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

class ComponentWithFunctionalNavOptions extends React.Component<*> {
  static navigationOptions = (
    { navigation }: { navigation: NavigationScreenProp<*>, ... },
  ) => ({
    headerTitle: navigation.state.routeName,
  });
  render() {
    return "Test";
  }
}

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
createStackNavigator(outerRouteConfig);

/**
 * StackRouter
 */

const stackRouter = StackRouter(innerRouteConfig);
const stackNavigateAction = {
  type: "Navigation/NAVIGATE",
  routeName: "Test3",
};
stackRouter.getStateForAction(stackNavigateAction, null);

/**
 * TabRouter
 */

const tabRouter = TabRouter(innerRouteConfig);
const tabNavigateAction = {
  type: "Navigation/NAVIGATE",
  routeName: "Test1",
};
tabRouter.getStateForAction(tabNavigateAction, null);

const fakeNavigateAction = {
  fake: "Navigation/NAVIGATE",
  blah: "Test1",
};
// $ExpectError not a valid action!
tabRouter.getStateForAction(fakeNavigateAction, null);

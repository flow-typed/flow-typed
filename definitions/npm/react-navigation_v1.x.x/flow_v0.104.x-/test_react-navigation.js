// @flow

import type {
  NavigationScreenProp,
} from 'react-navigation';

import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
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
TabNavigator({
  Test1: { screen: FunctionalScreenComponent },
});

class ClassScreenComponent extends React.Component<*> {
  render() {
    return "Test";
  }
}
StackNavigator({
  Test1: { screen: ClassScreenComponent },
});

// $FlowExpectedError numbers can never be components
StackNavigator({
  Test1: { screen: 5 },
});

// $FlowExpectedError you need a screen!
TabNavigator({
  Test1: { blah: "test" },
});

DrawerNavigator({
  Test1: { getScreen: () => FunctionalScreenComponent },
});

/**
 * Configs
 */

StackNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  {
    mode: "card",
    initialRouteName: "Test1",
  },
);

StackNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  // $FlowExpectedError stack not drawer!
  {
    initialRouteName: "Test1",
    drawerBackgroundColor: "green",
  },
);

TabNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  // $FlowExpectedError tab not drawer!
  {
    drawerBackgroundColor: "green",
  },
);

TabNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  {
    initialRouteName: "Test1",
  },
);

DrawerNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  {
    drawerBackgroundColor: "green",
  },
);

DrawerNavigator(
  {
    Test1: { screen: FunctionalScreenComponent },
  },
  // $FlowExpectedError drawer not tab!
  {
    tabBarPosition: "top",
  },
);

/**
 * Nav options
 */

StackNavigator({
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
StackNavigator({
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

const nestedNavigator = TabNavigator({
  Test1: { screen: FunctionalScreenComponent },
});
StackNavigator({
  Test2: { screen: nestedNavigator },
  Test3: { screen: ClassScreenComponent },
});

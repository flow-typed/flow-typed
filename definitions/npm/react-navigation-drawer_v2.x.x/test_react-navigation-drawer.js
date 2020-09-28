// @flow

import type {
  NavigationRoute,
  NavigationDrawerProp,
} from 'react-navigation-drawer';

import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';

/**
 * Screens
 */

const FunctionalScreenComponent = (
  { navigation }: {| navigation: NavigationDrawerProp<NavigationRoute> |},
) => {
  return "Test";
};

createDrawerNavigator({
  Test1: { getScreen: () => FunctionalScreenComponent },
});

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
  // $FlowExpectedError drawer not tab!
  {
    tabBarPosition: "top",
  },
);

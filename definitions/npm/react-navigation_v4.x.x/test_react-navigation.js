// @flow

import type {
  NavigationRoute,
  NavigationScreenProp,
} from 'react-navigation';

import { StackRouter, TabRouter } from 'react-navigation';
import React from 'react';

/**
 * Screens
 */

const FunctionalScreenComponent = (
  { navigation }: {| navigation: NavigationScreenProp<NavigationRoute> |},
) => {
  return "Test";
};

const innerRouteConfig = {
  Test1: { screen: FunctionalScreenComponent },
};

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
// $FlowExpectedError not a valid action!
tabRouter.getStateForAction(fakeNavigateAction, null);

// @flow

import type {
  NavigationScreenProp,
} from '@react-navigation/core';

import {
  StackRouter,
  TabRouter,
} from '@react-navigation/core';
import React from 'react';

const FunctionalScreenComponent = (
  { navigation }: { navigation: NavigationScreenProp<*>, ... },
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
// $ExpectError not a valid action!
tabRouter.getStateForAction(fakeNavigateAction, null);

// @flow

import * as React from 'react';
import {
  createMaterialBottomTabNavigator,
  type NavigationProp,
  type MaterialBottomTabNavigationProp,
  type LeafRoute,
  type TabNavigationState,
  type MaterialBottomTabOptions,
  type MaterialBottomTabNavigationEventMap,
} from '@react-navigation/material-bottom-tabs';

/**
 * Navigator setup
 */

type LocalParamList = {|
  One: {| hey: string |},
  Two: void,
  Three: ?{| sup: number |},
|};

type GlobalParamList = {|
  ...LocalParamList,
  Another: void,
|};

type NavProp<
  RouteName: $Keys<LocalParamList> = $Keys<LocalParamList>,
> = MaterialBottomTabNavigationProp<GlobalParamList, RouteName>;
type NavRoute<
  RouteName: $Keys<LocalParamList> = $Keys<LocalParamList>,
> = {|
  ...LeafRoute<RouteName>,
  +params: $ElementType<LocalParamList, RouteName>,
|};

const Tab = createMaterialBottomTabNavigator<
  GlobalParamList,
  LocalParamList,
  NavProp<>,
>();

/**
 * Screens
 */

function ValidScreen(props: {|
  navigation: NavProp<'One'>,
  route: NavRoute<'One'>,
|}) {
  props.navigation.navigate('Another');
  // $FlowExpectedError invalid params
  props.navigation.navigate('Another', {});
  // $FlowExpectedError invalid route
  props.navigation.navigate('test', { sup: true, yo: null });
  props.navigation.jumpTo('Three');
  (props.navigation: NavigationProp<
    GlobalParamList,
    'One',
    TabNavigationState,
    MaterialBottomTabOptions,
    MaterialBottomTabNavigationEventMap,
  >);
  return null;
}

function InvalidScreen(props: {|
  navigation: NavProp<'One'>,
  route: number,
|}) {
  props.navigation.setOptions({
    title: 'sup',
    tabBarLabel: 'SUP',
    tabBarBadge: true,
  });
  // $FlowExpectedError invalid navigator props
  props.navigation.setOptions({ fake: 12 });
  React.useEffect(() => {
    return props.navigation.addListener(
      'tabPress',
      e => {
        (e.type: 'tabPress');
        e.preventDefault();
      },
    );
  });
  return null;
}

<Tab.Screen name="One" component={ValidScreen} />;
// $FlowExpectedError non-matching component
<Tab.Screen name="Two" component={ValidScreen} />;
// $FlowExpectedError invalid route name
<Tab.Screen name="Four" component={ValidScreen} />;
// $FlowExpectedError invalid params
<Tab.Screen name="One" component={ValidScreen} initialParams={{ hey: 5 }} />;
// $FlowExpectedError non-local route
<Tab.Screen name="Another" component={ValidScreen} />;
// $FlowExpectedError invalid screen props
<Tab.Screen name="One" component={InvalidScreen} />;

/**
 * Navigator
 */

<Tab.Navigator shifting={true} />;
<Tab.Navigator activeColor="blah" />;
// $FlowExpectedError invalid navigator props
<Tab.Navigator
  // $FlowExpectedError invalid navigator props
  shifting={5}
  someOtherProp="fake"
/>;

// @flow

import * as React from 'react';
import {
  createDrawerNavigator,
  type NavigationProp,
  type DrawerNavigationProp,
  type LeafRoute,
  type DrawerNavigationState,
  type DrawerOptions,
  type DrawerNavigationEventMap,
} from '@react-navigation/drawer';

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
> = DrawerNavigationProp<GlobalParamList, RouteName>;
type NavRoute<
  RouteName: $Keys<LocalParamList> = $Keys<LocalParamList>,
> = {|
  ...LeafRoute<RouteName>,
  +params: $ElementType<LocalParamList, RouteName>,
|};

const Drawer = createDrawerNavigator<
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
  // $ExpectError invalid params
  props.navigation.navigate('Another', {});
  // $ExpectError invalid route
  props.navigation.navigate('test', { sup: true, yo: null });
  props.navigation.jumpTo('Three');
  props.navigation.openDrawer();
  props.navigation.closeDrawer();
  props.navigation.toggleDrawer();
  (props.navigation: NavigationProp<
    GlobalParamList,
    'One',
    DrawerNavigationState,
    DrawerOptions,
    DrawerNavigationEventMap,
  >);
  return null;
}

function InvalidScreen(props: {|
  navigation: NavProp<'One'>,
  route: number,
|}) {
  props.navigation.setOptions({
    title: 'sup',
    drawerLabel: 'ayyyy',
    gestureEnabled: false,
    swipeEnabled: false,
  });
  // $ExpectError invalid navigator props
  props.navigation.setOptions({ fake: 12 });
  React.useEffect(() => {
    return props.navigation.addListener(
      'drawerOpen',
      e => {
        (e.type: 'drawerOpen');
        // $ExpectError swipeStart doesn't support preventDefault
        e.preventDefault();
      },
    );
  });
  return null;
}

<Drawer.Screen name="One" component={ValidScreen} />;
// $ExpectError non-matching component
<Drawer.Screen name="Two" component={ValidScreen} />;
// $ExpectError invalid route name
<Drawer.Screen name="Four" component={ValidScreen} />;
// $ExpectError invalid params
<Drawer.Screen name="One" component={ValidScreen} initialParams={{ hey: 5 }} />;
// $ExpectError non-local route
<Drawer.Screen name="Another" component={ValidScreen} />;
// $ExpectError invalid screen props
<Drawer.Screen name="One" component={InvalidScreen} />;

/**
 * Navigator
 */

<Drawer.Navigator drawerPosition="left" hideStatusBar={true} />;
<Drawer.Navigator drawerType="front" edgeWidth={5} />;
// $ExpectError invalid navigator props
<Drawer.Navigator
  // $ExpectError invalid navigator props
  edgeWidth="string"
  someOtherProp="fake"
/>;

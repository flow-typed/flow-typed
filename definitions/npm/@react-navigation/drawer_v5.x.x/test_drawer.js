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
  // $FlowFixMe[incompatible-call] invalid params
  props.navigation.navigate('Another', {});
  // $FlowFixMe[incompatible-call] invalid route
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
  // $FlowFixMe[prop-missing] invalid navigator props
  props.navigation.setOptions({ fake: 12 });
  React.useEffect(() => {
    return props.navigation.addListener(
      'drawerOpen',
      e => {
        (e.type: 'drawerOpen');
        // $FlowFixMe[prop-missing] swipeStart doesn't support preventDefault
        e.preventDefault();
      },
    );
  });
  return null;
}

<Drawer.Screen name="One" component={ValidScreen} />;
// $FlowFixMe[incompatible-type] non-matching component
<Drawer.Screen name="Two" component={ValidScreen} />;
// $FlowFixMe[incompatible-type] invalid route name
<Drawer.Screen name="Four" component={ValidScreen} />;
// $FlowFixMe[incompatible-type] invalid params
<Drawer.Screen name="One" component={ValidScreen} initialParams={{ hey: 5 }} />;
// $FlowFixMe[incompatible-type] non-local route
<Drawer.Screen name="Another" component={ValidScreen} />;
// $FlowFixMe[incompatible-type] invalid screen props
<Drawer.Screen name="One" component={InvalidScreen} />;

/**
 * Navigator
 */

<Drawer.Navigator drawerPosition="left" hideStatusBar={true} />;
<Drawer.Navigator drawerType="front" edgeWidth={5} />;
// $FlowFixMe[prop-missing] invalid navigator props
<Drawer.Navigator
  // $FlowFixMe[incompatible-type] invalid navigator props
  edgeWidth="string"
  someOtherProp="fake"
/>;

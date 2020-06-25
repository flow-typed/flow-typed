// @flow

import * as React from 'react';
import {
  createStackNavigator,
  type NavigationProp,
  type StackNavigationProp,
  type LeafRoute,
  type StackNavigationState,
  type StackOptions,
  type StackNavigationEventMap,
} from '@react-navigation/stack';

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
> = StackNavigationProp<GlobalParamList, RouteName>;
type NavRoute<
  RouteName: $Keys<LocalParamList> = $Keys<LocalParamList>,
> = {|
  ...LeafRoute<RouteName>,
  +params: $ElementType<LocalParamList, RouteName>,
|};

const Stack = createStackNavigator<
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
  props.navigation.push('One', { hey: 'sup' });
  props.navigation.pop(5);
  props.navigation.popToTop();
  (props.navigation: NavigationProp<
    GlobalParamList,
    'One',
    StackNavigationState,
    StackOptions,
    StackNavigationEventMap,
  >);
  return null;
}

function InvalidScreen(props: {|
  navigation: NavProp<'One'>,
  route: number,
|}) {
  props.navigation.setOptions({
    title: 'sup',
    headerTitle: 'ayyyy',
    headerStatusBarHeight: 5,
  });
  // $FlowExpectedError invalid navigator props
  props.navigation.setOptions({ fake: 12 });
  React.useEffect(() => {
    return props.navigation.addListener(
      'transitionStart',
      e => {
        (e.type: 'transitionStart');
        // $FlowExpectedError swipeStart doesn't support preventDefault
        e.preventDefault();
      },
    );
  });
  return null;
}

<Stack.Screen name="One" component={ValidScreen} />;
// $FlowExpectedError non-matching component
<Stack.Screen name="Two" component={ValidScreen} />;
// $FlowExpectedError invalid route name
<Stack.Screen name="Four" component={ValidScreen} />;
// $FlowExpectedError invalid params
<Stack.Screen name="One" component={ValidScreen} initialParams={{ hey: 5 }} />;
// $FlowExpectedError non-local route
<Stack.Screen name="Another" component={ValidScreen} />;
// $FlowExpectedError invalid screen props
<Stack.Screen name="One" component={InvalidScreen} />;

/**
 * Navigator
 */

<Stack.Navigator
  mode="card"
  headerMode="float"
  keyboardHandlingEnabled={true}
/>;
// $FlowExpectedError invalid navigator props
<Stack.Navigator
  // $FlowExpectedError invalid navigator props
  mode="FAKE"
  headerMode="float"
  keyboardHandlingEnabled={true}
  someOtherProp="fake"
/>;

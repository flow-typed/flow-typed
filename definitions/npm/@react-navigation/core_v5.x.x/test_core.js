// @flow

import * as React from 'react';
import {
  type NavigationProp,
  type NavigationState,
  type ParamListBase,
  type StackRouterOptions,
  type DefaultRouterOptions,
  type Router,
  type CommonAction,
  type NavigatorPropsBase,
  type ExtraNavigatorPropsBase,
  type LeafRoute,
  CommonActions,
  BaseRouter,
  StackRouter,
  TabRouter,
  useNavigationBuilder,
  createNavigatorFactory,
} from '@react-navigation/core';

/**
 * Navigation prop
 */

type LocalParamList = {|
  CoolScreen: {|
    sup: boolean,
    yo: ?string,
  |},
  another: ?{|
    eh: string,
  |},
|};
type GlobalParamList = {|
  ...LocalParamList,
  globalRoute: void,
|};

declare var navProp: NavigationProp<
  GlobalParamList,
  'CoolScreen',
  NavigationState,
  {||},
  {|
    +test: {| +data: boolean, +canPreventDefault: true |},
    +another: {| +data: string, +canPreventDefault: false |},
    +third: {| +data: void, +canPreventDefault: true |},
  |},
>;

const removeListener = navProp.addListener('test', e => {
  (e.type: 'test');
  (e.data: boolean);
  e.preventDefault();
});
removeListener();
navProp.addListener('another', e => {
  (e.type: 'another');
  (e.data: string);
  // $FlowExpectedError canPreventDefault set to false
  e.preventDefault();
});
navProp.addListener('third', e => {
  (e.type: 'third');
  (e.target: ?string);
  // $FlowExpectedError there's no data field on this event
  e.data;
  e.preventDefault();
});
navProp.setParams({ sup: false });

navProp.navigate('CoolScreen', { sup: true, yo: null });
// $FlowExpectedError CoolScreen route needs params
navProp.navigate('CoolScreen');
navProp.navigate({ name: 'CoolScreen', params: { sup: true, yo: null } });
navProp.navigate('another');
navProp.navigate('another', { eh: 'hello' });
// $FlowExpectedError wrong params
navProp.navigate('another', { eh: 'yo', fake: 'hello' });
// $FlowExpectedError not a valid route name
navProp.navigate('another2');

navProp.dispatch(CommonActions.goBack());

declare var inexactNavProp: NavigationProp<
  {
    ...ParamListBase,
    CoolScreen: {
      sup: boolean,
      yo: ?string,
      ...
    },
    another?: {
      eh: string,
      ...
    },
    ...
  },
  'test',
  NavigationState,
  {||},
  {||},
>;
inexactNavProp.navigate('another2');
// $FlowExpectedError CoolScreen route needs params
inexactNavProp.navigate('CoolScreen');
inexactNavProp.navigate('another', { eh: 'yo', fake: 'hello' });

/**
 * Custom router & navigator setup
 */

function CustomRouter(
  routerOptions: DefaultRouterOptions,
): Router<NavigationState, CommonAction> {
  const {
    actionCreators: baseActionCreators,
    ...rest
  } = BaseRouter(routerOptions);
  return {
    ...rest,
    actionCreators: {
      ...baseActionCreators,
      goBackOnce: () => state => ({
       ...CommonActions.goBack(),
       target: state.key,
     }),
    },
  };
}

type CustomRouterNavigationProp<
  ParamList: ParamListBase = ParamListBase,
  RouteName: string = string,
> = {|
  ...$Exact<NavigationProp<ParamList, RouteName, NavigationState, {||}, {||}>>,
  +goBackOnce: () => void,
|};

type CustomNavigatorProps = $Exact<NavigatorPropsBase<
  {||},
  CustomRouterNavigationProp<>,
>>;
function CustomNavigator(props: CustomNavigatorProps) {
  const { initialRouteName, screenOptions, children } = props;
  const { state, descriptors, navigation } = useNavigationBuilder(
    CustomRouter,
    {
      children,
      screenOptions,
      initialRouteName,
    },
  );

  const currentRouteKey = state.routes[state.index].key;
  const descriptor = descriptors[currentRouteKey];

  return descriptor.render();
}

const createCustomNavigator = createNavigatorFactory<
  NavigationState,
  {||},
  {||},
  CustomRouterNavigationProp<>,
  ExtraNavigatorPropsBase,
>(CustomNavigator);

type ExampleNavigationProp<
  RouteName: $Keys<LocalParamList> = $Keys<LocalParamList>,
> = CustomRouterNavigationProp<GlobalParamList, RouteName>;
type ExampleRoute<
  RouteName: $Keys<LocalParamList> = $Keys<LocalParamList>,
> = {|
  ...LeafRoute<RouteName>,
  +params: $ElementType<LocalParamList, RouteName>,
|};

const Example = createCustomNavigator<
  GlobalParamList,
  LocalParamList,
  ExampleNavigationProp<>,
>();

function CoolScreen(props: {|
  navigation: ExampleNavigationProp<'CoolScreen'>,
  route: ExampleRoute<'CoolScreen'>,
|}) {
  return null;
}

function BadlyTypedCoolScreen(props: {|
  navigation: ExampleNavigationProp<'CoolScreen'>,
  route: number,
|}) {
  return null;
}

<Example.Screen name="CoolScreen" component={CoolScreen} />;
// $FlowExpectedError invalid route name
<Example.Screen name="Fake" component={CoolScreen} />;
// $FlowExpectedError invalid screen props
<Example.Screen name="CoolScreen" component={BadlyTypedCoolScreen} />;

/**
 * Routers
 */

const someState = {
  routes: [],
  index: 0,
  routeNames: [],
  key: '',
  stale: false,
  history: [],
};
const routerConfigOptions = {
  routeNames: [],
  routeParamList: {},
};

const stackRouter = StackRouter({});
const stackState = { ...someState, type: 'stack' };
stackRouter.getStateForAction(
  stackState,
  { type: 'NAVIGATE', payload: { name: 'Test3' } },
  routerConfigOptions,
);
stackRouter.getStateForAction(
  stackState,
  { type: 'PUSH', payload: { name: 'Test3' } },
  routerConfigOptions,
);

const tabRouter = TabRouter({});
const tabState = { ...someState, type: 'tab' };
tabRouter.getStateForAction(
  tabState,
  { type: 'NAVIGATE', payload: { name: 'Test1' } },
  routerConfigOptions,
);
tabRouter.getStateForAction(
  tabState,
  { type: 'JUMP_TO', payload: { name: 'Test1' } },
  routerConfigOptions,
);
tabRouter.getStateForAction(
  tabState,
  // $FlowExpectedError not a valid action!
  { fake: 'NAVIGATE', blah: 'Test1' },
  routerConfigOptions,
);

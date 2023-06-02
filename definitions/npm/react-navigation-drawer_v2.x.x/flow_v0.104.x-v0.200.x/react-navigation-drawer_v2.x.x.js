// @flow

declare module 'react-navigation-drawer' {

  //---------------------------------------------------------------------------
  // SECTION 1: IDENTICAL TYPE DEFINITIONS
  // This section is identical across all React Navigation libdefs and contains
  // shared definitions. We wish we could make it DRY and import from a shared
  // definition, but that isn't yet possible.
  //---------------------------------------------------------------------------

  /**
   * SECTION 1A
   * We start with some definitions that we have copy-pasted from React Native
   * source files.
   */

  // This is a bastardization of the true StyleObj type located in
  // react-native/Libraries/StyleSheet/StyleSheetTypes. We unfortunately can't
  // import that here, and it's too lengthy (and consequently too brittle) to
  // copy-paste here either.
  declare type StyleObj =
    | null
    | void
    | number
    | false
    | ''
    | $ReadOnlyArray<StyleObj>
    | { [name: string]: any, ... };
  declare type ViewStyleProp = StyleObj;
  declare type TextStyleProp = StyleObj;
  declare type AnimatedViewStyleProp = StyleObj;
  declare type AnimatedTextStyleProp = StyleObj;

  /**
   * SECTION 1B
   * The following are type declarations for core types necessary for every
   * React Navigation libdef.
   */

  /**
   * Navigation State + Action
   */

  declare export type NavigationParams = { [key: string]: mixed, ... };

  declare export type NavigationBackAction = {|
    type: 'Navigation/BACK',
    key?: ?string,
  |};
  declare export type NavigationInitAction = {|
    type: 'Navigation/INIT',
    params?: NavigationParams,
  |};
  declare export type NavigationNavigateAction = {|
    type: 'Navigation/NAVIGATE',
    routeName: string,
    params?: NavigationParams,

    // The action to run inside the sub-router
    action?: NavigationNavigateAction,

    key?: string,
  |};
  declare export type NavigationSetParamsAction = {|
    type: 'Navigation/SET_PARAMS',

    // The key of the route where the params should be set
    key: string,

    // The new params to merge into the existing route params
    params: NavigationParams,
  |};

  declare export type NavigationPopAction = {|
    +type: 'Navigation/POP',
    +n?: number,
    +immediate?: boolean,
  |};
  declare export type NavigationPopToTopAction = {|
    +type: 'Navigation/POP_TO_TOP',
    +immediate?: boolean,
    +key?: string,
  |};
  declare export type NavigationPushAction = {|
    +type: 'Navigation/PUSH',
    +routeName: string,
    +params?: NavigationParams,
    +action?: NavigationNavigateAction,
    +key?: string,
  |};
  declare export type NavigationResetAction = {|
    type: 'Navigation/RESET',
    index: number,
    key?: ?string,
    actions: Array<NavigationNavigateAction>,
  |};
  declare export type NavigationReplaceAction = {|
    +type: 'Navigation/REPLACE',
    +key: string,
    +routeName: string,
    +params?: NavigationParams,
    +action?: NavigationNavigateAction,
  |};
  declare export type NavigationCompleteTransitionAction = {|
    +type: 'Navigation/COMPLETE_TRANSITION',
    +key?: string,
    +toChildKey?: string,
  |};

  declare export type NavigationOpenDrawerAction = {|
    +type: 'Navigation/OPEN_DRAWER',
    +key?: string,
  |};
  declare export type NavigationCloseDrawerAction = {|
    +type: 'Navigation/CLOSE_DRAWER',
    +key?: string,
  |};
  declare export type NavigationToggleDrawerAction = {|
    +type: 'Navigation/TOGGLE_DRAWER',
    +key?: string,
  |};
  declare export type NavigationDrawerOpenedAction = {|
    +type: 'Navigation/DRAWER_OPENED',
    +key?: string,
  |};
  declare export type NavigationDrawerClosedAction = {|
    +type: 'Navigation/DRAWER_CLOSED',
    +key?: string,
  |};

  declare export type NavigationJumpToAction = {|
    +type: 'Navigation/JUMP_TO';
    +preserveFocus: boolean,
    +routeName: string,
    +key?: string,
    +params?: NavigationParams,
  |};

  declare export type NavigationAction =
    | NavigationBackAction
    | NavigationInitAction
    | NavigationNavigateAction
    | NavigationSetParamsAction
    | NavigationPopAction
    | NavigationPopToTopAction
    | NavigationPushAction
    | NavigationResetAction
    | NavigationReplaceAction
    | NavigationCompleteTransitionAction
    | NavigationOpenDrawerAction
    | NavigationCloseDrawerAction
    | NavigationToggleDrawerAction
    | NavigationDrawerOpenedAction
    | NavigationDrawerClosedAction
    | NavigationJumpToAction;

  /**
   * NavigationState is a tree of routes for a single navigator, where each
   * child route may either be a NavigationScreenRoute or a
   * NavigationRouterRoute. NavigationScreenRoute represents a leaf screen,
   * while the NavigationRouterRoute represents the state of a child navigator.
   *
   * NOTE: NavigationState is a state tree local to a single navigator and
   * its child navigators (via the routes field).
   * If we're in navigator nested deep inside the app, the state will only be
   * the state for that navigator.
   * The state for the root navigator of our app represents the whole navigation
   * state for the whole app.
   */
  declare export type NavigationState = {
    /**
     * Index refers to the active child route in the routes array.
     */
    index: number,
    routes: Array<NavigationRoute>,
    isTransitioning?: bool,
    ...
  };

  declare export type NavigationRoute =
    | NavigationLeafRoute
    | NavigationStateRoute;

  declare export type NavigationLeafRoute = {|
    /**
     * React's key used by some navigators. No need to specify these manually,
     * they will be defined by the router.
     */
    key: string,
    /**
     * For example 'Home'.
     * This is used as a key in a route config when creating a navigator.
     */
    routeName: string,
    /**
     * Path is an advanced feature used for deep linking and on the web.
     */
    path?: string,
    /**
     * Params passed to this route when navigating to it,
     * e.g. `{ car_id: 123 }` in a route that displays a car.
     */
    params?: NavigationParams,
  |};

  declare export type NavigationStateRoute = {|
    ...NavigationLeafRoute,
    ...$Exact<NavigationState>,
  |};

  /**
   * Router
   */

  declare export type NavigationScreenProps = { [key: string]: mixed, ... };

  declare export type NavigationScreenOptionsGetter<Options: {...}> = (
    navigation: NavigationScreenProp<NavigationRoute>,
    screenProps: ?NavigationScreenProps,
    theme: SupportedThemes,
  ) => Options;

  declare export type NavigationRouter<State: NavigationState, Options: {...}> = {
    /**
     * The reducer that outputs the new navigation state for a given action,
     * with an optional previous state. When the action is considered handled
     * but the state is unchanged, the output state is null.
     */
    getStateForAction: (action: NavigationAction, lastState: ?State) => ?State,
    /**
     * Maps a URI-like string to an action. This can be mapped to a state
     * using `getStateForAction`.
     */
    getActionForPathAndParams: (
      path: string,
      params?: NavigationParams
    ) => ?NavigationAction,
    getPathAndParamsForState: (
      state: State
    ) => {
      path: string,
      params?: NavigationParams,
      ...
    },
    getComponentForRouteName: (routeName: string) => NavigationComponent,
    getComponentForState: (state: State) => NavigationComponent,
    /**
     * Gets the screen navigation options for a given screen.
     *
     * For example, we could get the config for the 'Foo' screen when the
     * `navigation.state` is:
     *
     *  {routeName: 'Foo', key: '123'}
     */
    getScreenOptions: NavigationScreenOptionsGetter<Options>,
    ...
  };

  declare export type NavigationScreenOptions = { title?: string, ... };

  declare export type SupportedThemes = 'light' | 'dark';

  declare export type NavigationScreenConfigProps = $Shape<{|
    navigation: NavigationScreenProp<NavigationRoute>,
    screenProps: NavigationScreenProps,
    theme: SupportedThemes,
  |}>;

  declare export type NavigationScreenConfig<Options> =
    | Options
    | (({|
        ...NavigationScreenConfigProps,
        navigationOptions: Options,
      |}) => Options);

  declare export type NavigationComponent =
    | NavigationScreenComponent<NavigationRoute, any, any>
    | NavigationNavigator<any, any, any>;

  declare interface withOptionalNavigationOptions<Options> {
    navigationOptions?: NavigationScreenConfig<Options>;
  }

  declare export type NavigationScreenComponent<
    Route: NavigationRoute,
    Options: {...},
    Props: NavigationNavigatorProps<Options, Route>,
  > = React$ComponentType<Props> &
    withOptionalNavigationOptions<Options>;

  declare interface withRouter<State, Options> {
    router: NavigationRouter<State, Options>;
  }

  declare export type NavigationNavigator<
    State: NavigationState,
    Options: {...},
    Props: NavigationNavigatorProps<Options, State>,
  > = React$ComponentType<Props> &
    withRouter<State, Options> &
    withOptionalNavigationOptions<Options>;

  declare type _NavigationRouteConfigCore = {|
    navigationOptions?: NavigationScreenConfig<any>,
    params?: NavigationParams,
    path?: string,
  |};
  declare export type NavigationRouteConfig =
    | NavigationComponent
    | {| ..._NavigationRouteConfigCore, screen: NavigationComponent |}
    | {| ..._NavigationRouteConfigCore, getScreen: () => NavigationComponent |};

  declare export type NavigationRouteConfigMap = { [routeName: string]: NavigationRouteConfig, ... };

  /**
   * Navigator Prop
   */

  declare export type NavigationDispatch = (
    action: NavigationAction
  ) => boolean;

  declare export type EventType =
    | 'willFocus'
    | 'didFocus'
    | 'willBlur'
    | 'didBlur'
    | 'action';

  declare export type NavigationEventPayload = {|
    type: EventType,
    action: NavigationAction,
    state: NavigationState,
    lastState: ?NavigationState,
  |};

  declare export type NavigationEventCallback = (
    payload: NavigationEventPayload
  ) => void;

  declare export type NavigationEventSubscription = {| remove: () => void |};

  declare export type NavigationScreenProp<+S> = {
    +state: S,
    dispatch: NavigationDispatch,
    addListener: (
      eventName: string,
      callback: NavigationEventCallback
    ) => NavigationEventSubscription,
    getParam: <ParamName: string>(
      paramName: ParamName,
      fallback?: $ElementType<
        $PropertyType<
          {|
            ...{| params: {...} |},
            ...$Exact<S>,
          |},
          'params'
        >,
        ParamName
      >
    ) => $ElementType<
      $PropertyType<
        {|
          ...{| params: {...} |},
          ...$Exact<S>,
        |},
        'params'
      >,
      ParamName
    >,
    dangerouslyGetParent: () => ?NavigationScreenProp<NavigationState>,
    isFocused: () => boolean,
    goBack: (routeKey?: ?string) => boolean,
    dismiss: () => boolean,
    navigate: (
      routeName:
        | string
        | {
            routeName: string,
            params?: NavigationParams,
            action?: NavigationNavigateAction,
            key?: string,
            ...
          },
      params?: NavigationParams,
      action?: NavigationNavigateAction
    ) => boolean,
    setParams: (newParams: NavigationParams) => boolean,
    ...
  };

  declare export type NavigationNavigatorProps<O: {...}, S: {...}> = $Shape<{
    navigation: NavigationScreenProp<S>,
    screenProps?: NavigationScreenProps,
    navigationOptions?: O,
    theme?: SupportedThemes | 'no-preference',
    detached?: boolean,
    ...
  }>;

  /**
   * Navigation container
   */

  declare export type NavigationContainer<
    State: NavigationState,
    Options: {...},
    Props: NavigationContainerProps<Options, State>,
  > = React$ComponentType<Props> &
    withRouter<State, Options> &
    withOptionalNavigationOptions<Options>;

  declare export type NavigationContainerProps<S: {...}, O: {...}> = $Shape<{
    uriPrefix?: string | RegExp,
    onNavigationStateChange?: ?(
      NavigationState,
      NavigationState,
      NavigationAction
    ) => void,
    navigation?: NavigationScreenProp<S>,
    persistenceKey?: ?string,
    renderLoadingExperimental?: React$ComponentType<{...}>,
    screenProps?: NavigationScreenProps,
    navigationOptions?: O,
    ...
  }>;

  /**
   * NavigationDescriptor
   */

  declare export type NavigationDescriptor = {
    key: string,
    state: NavigationRoute,
    navigation: NavigationScreenProp<NavigationRoute>,
    getComponent: () => NavigationComponent,
    ...
  };

  declare export type NavigationDescriptorMap = {
    [key: string]: NavigationDescriptor,
    ...
  };

  //---------------------------------------------------------------------------
  // SECTION 2: SHARED TYPE DEFINITIONS
  // This section too is copy-pasted, but it's not identical across all React
  // Navigation libdefs. We pick out bits and pieces that we need.
  //---------------------------------------------------------------------------

  /**
   * SECTION 2A
   * We start with definitions we have copy-pasted, either from in-package
   * types, other Flow libdefs, or from TypeScript types somewhere.
   */

  // This is copied from react-native-renimated's Typescript libdef
  // https://github.com/kmagiera/react-native-reanimated/blob/master/react-native-reanimated.d.ts
  declare class AnimatedNode<T> {
    constructor(
      nodeConfig: {...},
      inputNodes?: $ReadOnlyArray<AnimatedNode<any>>,
    ): void;
    isNativelyInitialized(): boolean;
  }

  /**
   * SECTION 2B
   * This section usually contains exported types that are shared by some but
   * not all react-navigation libdefs. However, react-navigation-drawer has no
   * such types.
   */

  //---------------------------------------------------------------------------
  // SECTION 3: UNIQUE TYPE DEFINITIONS
  // This section contains exported types that are not present in any other
  // React Navigation libdef.
  //---------------------------------------------------------------------------

  /**
   * DrawerRouter
   */

  declare export type NavigationDrawerProp<+S> =
    & NavigationScreenProp<S>
    & {
        jumpTo: (routeName: string, key?: string) => void,
        openDrawer: () => boolean,
        closeDrawer: () => boolean,
        toggleDrawer: () => boolean,
        ...
      };

  declare type _Scene = {|
    route: NavigationRoute,
    index: number,
    focused: boolean,
    tintColor?: string,
  |};
  declare type _ThemedColor =
    | string
    | {| light: string, dark: string |};
  declare type _DrawerNavigatorItemsProps = {|
    items: NavigationRoute[],
    activeItemKey?: ?string,
    activeTintColor?: _ThemedColor,
    activeBackgroundColor?: _ThemedColor,
    inactiveTintColor?: _ThemedColor,
    inactiveBackgroundColor?: _ThemedColor,
    getLabel: (scene: _Scene) => React$Node,
    renderIcon: (scene: _Scene) => React$Node,
    onItemPress: (scene: {|
      route: NavigationRoute,
      focused: boolean,
    |}) => void,
    itemsContainerStyle?: ViewStyleProp,
    itemStyle?: ViewStyleProp,
    labelStyle?: TextStyleProp,
    activeLabelStyle?: TextStyleProp,
    inactiveLabelStyle?: TextStyleProp,
    iconContainerStyle?: ViewStyleProp,
    drawerPosition: 'left' | 'right',
  |};

  declare type _NavigationDrawerState =
    & NavigationState
    & { isDrawerOpen: boolean, ... };
  declare type _DrawerContentComponentProps = {|
    ..._DrawerNavigatorItemsProps,
    +navigation: NavigationDrawerProp<_NavigationDrawerState>,
    descriptors: NavigationDescriptorMap,
    drawerOpenProgress: AnimatedNode<number>,
    screenProps: NavigationScreenProps,
  |};

  declare export type NavigationDrawerRouterConfig = {|
    navigationOptions?: NavigationScreenConfig<any>,
    defaultNavigationOptions?: NavigationScreenConfig<any>,
    unmountInactiveRoutes?: boolean,
    resetOnBlur?: boolean,
    initialRouteName?: string,
    contentComponent?: React$ComponentType<_DrawerContentComponentProps>,
    contentOptions?: {...},
    backBehavior?: 'none' | 'initialRoute' | 'history',
  |};

  declare export type NavigationDrawerScreenOptions = {|
    ...$Exact<NavigationScreenOptions>,
    drawerIcon?:
      | React$Node
      | ((options: {| tintColor: ?string, focused: boolean |}) => ?React$Node),
    drawerLabel?:
      | React$Node
      | ((options: {| tintColor: ?string, focused: boolean |}) => ?React$Node),
    drawerLockMode?: 'unlocked' | 'locked-closed' | 'locked-open',
  |};

  /**
   * DrawerView
   */

  declare type _DrawerViewProps = {|
    edgeWidth: number,
    drawerWidth: number | (() => number),
    drawerPosition: 'left' | 'right',
    drawerType: 'front' | 'back' | 'slide',
    statusBarAnimation: 'slide' | 'none' | 'fade',
  |};
  declare type _DrawerViewOptionalProps = {|
    minSwipeDistance?: number,
    drawerLockMode?: 'unlocked' | 'locked-closed' | 'locked-open',
    keyboardDismissMode?: 'none' | 'on-drag',
    hideStatusBar?: boolean,
    drawerBackgroundColor?: _ThemedColor,
    overlayColor?: _ThemedColor,
    style?: ViewStyleProp,
    sceneContainerStyle?: ViewStyleProp,
    onDrawerClose?: () => void,
    onDrawerOpen?: () => void,
    gestureHandlerProps?: {...},
  |};
  declare type _DrawerViewConfig = {|
    ...NavigationDrawerRouterConfig,
    ..._DrawerViewProps,
    ..._DrawerViewOptionalProps,
  |};

  declare type DrawerViewProps = {|
    lazy: boolean,
    navigation: NavigationDrawerProp<_NavigationDrawerState>,
    descriptors: NavigationDescriptorMap,
    navigationConfig: _DrawerViewConfig,
    screenProps?: NavigationScreenProps,
  |};

  /**
   * DrawerNavigator
   */

  declare type _Partial<T> = $Rest<T, {...}>;
  declare export type DrawerNavigatorConfig = {|
    ...NavigationDrawerRouterConfig,
    ..._Partial<_DrawerViewProps>,
    ..._DrawerViewOptionalProps,
  |};

  //---------------------------------------------------------------------------
  // SECTION 4: EXPORTED MODULE
  // This is the only section that types exports. Other sections export types,
  // but this section types the module's exports.
  //---------------------------------------------------------------------------

  declare export function createDrawerNavigator(
    routeConfigs: NavigationRouteConfigMap,
    config?: DrawerNavigatorConfig
  ): NavigationNavigator<any, any, any>;

  declare export var DrawerActions: {|
    OPEN_DRAWER: 'Navigation/OPEN_DRAWER',
    CLOSE_DRAWER: 'Navigation/CLOSE_DRAWER',
    TOGGLE_DRAWER: 'Navigation/TOGGLE_DRAWER',
    DRAWER_OPENED: 'Navigation/DRAWER_OPENED',
    DRAWER_CLOSED: 'Navigation/DRAWER_CLOSED',

    openDrawer: (payload: {| key?: string |}) => NavigationOpenDrawerAction,
    closeDrawer: (payload: {| key?: string |}) => NavigationCloseDrawerAction,
    toggleDrawer: (payload: {| key?: string |}) => NavigationToggleDrawerAction,
  |};

  declare export function DrawerRouter(
    routeConfigs: NavigationRouteConfigMap,
    stackConfig?: NavigationDrawerRouterConfig
  ): NavigationRouter<any, NavigationDrawerScreenOptions>;

  declare type _DrawerScene = {|
    route: NavigationRoute,
    focused: boolean,
    index: number,
    tintColor?: string,
  |};
  declare type _DrawerItemsProps = {|
    navigation: NavigationDrawerProp<_NavigationDrawerState>,
    descriptors: NavigationDescriptorMap,
    drawerOpenProgress: AnimatedNode<number>,
    screenProps?: NavigationScreenProps,
    items: NavigationRoute[],
    activeItemKey?: ?string,
    activeTintColor?: _ThemedColor,
    activeBackgroundColor?: _ThemedColor,
    inactiveTintColor?: _ThemedColor,
    inactiveBackgroundColor?: _ThemedColor,
    getLabel: (scene: _DrawerScene) => React$Node,
    renderIcon: (scene: _DrawerScene) => React$Node,
    onItemPress: (info: {|
      route: NavigationRoute,
      focused: boolean,
    |}) => void,
    itemsContainerStyle?: ViewStyleProp,
    itemStyle?: ViewStyleProp,
    labelStyle?: TextStyleProp,
    activeLabelStyle?: TextStyleProp,
    inactiveLabelStyle?: TextStyleProp,
    iconContainerStyle?: ViewStyleProp,
    drawerPosition: 'left' | 'right',
  |};
  declare export var DrawerNavigatorItems: React$ComponentType<_DrawerItemsProps>;

  declare type _DrawerSidebarProps = {|
    contentComponent?: React$ComponentType<_DrawerContentComponentProps>,
    contentOptions?: {...},
    screenProps?: NavigationScreenProps,
    navigation: NavigationDrawerProp<_NavigationDrawerState>,
    descriptors: NavigationDescriptorMap,
    drawerOpenProgress: AnimatedNode<number>,
    drawerPosition: 'left' | 'right',
    style?: ViewStyleProp,
  |};
  declare export var DrawerSidebar: React$ComponentType<_DrawerSidebarProps>;

  declare export var DrawerView: React$ComponentType<DrawerViewProps>;

  declare export var DrawerGestureContext: React$Context<?React$Ref<any>>;

}

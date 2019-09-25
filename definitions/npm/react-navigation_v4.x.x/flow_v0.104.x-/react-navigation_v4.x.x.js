// @flow

declare module 'react-navigation' {

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
    ncreenProps: ?NavigationScreenProps,
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
    | NavigationScreenComponent<NavigationRoute, *, *>
    | NavigationNavigator<*, *, *>;

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
    navigationOptions?: NavigationScreenConfig<*>,
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

  // This is copied from
  // react-native/Libraries/Animated/src/nodes/AnimatedInterpolation.js
  declare type ExtrapolateType = 'extend' | 'identity' | 'clamp';
  declare type InterpolationConfigType = {
    inputRange: Array<number>,
    outputRange: Array<number> | Array<string>,
    easing?: (input: number) => number,
    extrapolate?: ExtrapolateType,
    extrapolateLeft?: ExtrapolateType,
    extrapolateRight?: ExtrapolateType,
    ...
  };
  declare class AnimatedInterpolation {
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
  }

  // This is copied from
  // react-native/Libraries/Animated/src/animations/Animation.js
  declare type EndResult = { finished: boolean, ... };
  declare type EndCallback = (result: EndResult) => void;
  declare class Animation {
    start(
      fromValue: number,
      onUpdate: (value: number) => void,
      onEnd: ?EndCallback,
      previousAnimation: ?Animation,
      animatedValue: AnimatedValue,
    ): void;
    stop(): void;
  }

  // This is vaguely copied from
  // react-native/Libraries/Animated/src/nodes/AnimatedTracking.js
  declare class AnimatedTracking {
    constructor(
      value: AnimatedValue,
      parent: any,
      animationClass: any,
      animationConfig: Object,
      callback?: ?EndCallback,
    ): void;
    update(): void;
  }

  // This is vaguely copied from
  // react-native/Libraries/Animated/src/nodes/AnimatedValue.js
  declare type ValueListenerCallback = (state: { value: number, ... }) => void;
  declare class AnimatedValue {
    constructor(value: number): void;
    setValue(value: number): void;
    setOffset(offset: number): void;
    flattenOffset(): void;
    extractOffset(): void;
    addListener(callback: ValueListenerCallback): string;
    removeListener(id: string): void;
    removeAllListeners(): void;
    stopAnimation(callback?: ?(value: number) => void): void;
    resetAnimation(callback?: ?(value: number) => void): void;
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
    animate(animation: Animation, callback: ?EndCallback): void;
    stopTracking(): void;
    track(tracking: AnimatedTracking): void;
  }

  /**
   * SECTION 2B
   * The following are the actually useful definitions in Section 2, that are
   * used below in section 3, but also in other libdefs.
   */

  declare export type NavigationPathsConfig = { [routeName: string]: string, ... };

  /**
   * SafeAreaView
   */

  declare type _SafeAreaViewForceInsetValue = 'always' | 'never' | number;
  declare type _SafeAreaViewInsets = $Shape<{|
    top: _SafeAreaViewForceInsetValue,
    bottom: _SafeAreaViewForceInsetValue,
    left: _SafeAreaViewForceInsetValue,
    right: _SafeAreaViewForceInsetValue,
    vertical: _SafeAreaViewForceInsetValue,
    horizontal: _SafeAreaViewForceInsetValue,
  |}>;

  /**
   * Interpolation
   */

  declare export type NavigationStackInterpolatorProps = $Shape<{|
    layout: NavigationStackLayout,
    scene: NavigationStackScene,
    scenes: NavigationStackScene[],
    position: AnimatedInterpolation,
    navigation: NavigationStackProp<NavigationState>,
    mode?: HeaderMode,
    shadowEnabled?: boolean,
    cardOverlayEnabled?: boolean,
  |}>;

  declare type _InterpolationResult = { [key: string]: mixed, ... };
  declare export type NavigationStackInterpolator =
    (props: NavigationStackInterpolatorProps) => _InterpolationResult;

  /**
   * Header
   */

  declare export type HeaderMode = 'float' | 'screen' | 'none';

  declare export type HeaderProps = {|
    layout: NavigationStackLayout,
    scene: NavigationStackScene,
    scenes: NavigationStackScene[],
    position: AnimatedInterpolation,
    navigation: NavigationStackProp<NavigationState>,
    mode: HeaderMode,
    leftInterpolator?: NavigationStackInterpolator,
    titleInterpolator?: NavigationStackInterpolator,
    rightInterpolator?: NavigationStackInterpolator,
    backgroundInterpolator?: NavigationStackInterpolator,
    layoutPreset: 'left' | 'center',
    transitionPreset?: 'fade-in-place' | 'uikit',
    backTitleVisible?: boolean,
    isLandscape: boolean,
  |};

  /**
   * StackRouter
   */

  declare export type NavigationStackProp<+S> =
    & NavigationScreenProp<S>
    & {
        pop: (n?: number, params?: {| immediate?: boolean |}) => boolean,
        popToTop: (params?: {| immediate?: boolean |}) => boolean,
        push: (
          routeName: string,
          params?: NavigationParams,
          action?: NavigationNavigateAction
        ) => boolean,
        replace: (
          routeName: string,
          params?: NavigationParams,
          action?: NavigationNavigateAction
        ) => boolean,
        reset: (actions: NavigationAction[], index: number) => boolean,
        ...
      };

  declare export type NavigationStackScreenOptions = NavigationScreenOptions & {
    header?: ?(React$Node | (HeaderProps => React$Node)),
    headerTransparent?: boolean,
    headerTitle?: string | React$Node | React$ElementType,
    headerTitleStyle?: AnimatedTextStyleProp,
    headerTitleAllowFontScaling?: boolean,
    headerTintColor?: string,
    headerLeft?: React$Node | React$ElementType,
    headerBackTitle?: string,
    headerBackImage?: React$Node | React$ElementType,
    headerTruncatedBackTitle?: string,
    headerBackTitleStyle?: TextStyleProp,
    headerPressColorAndroid?: string,
    headerRight?: React$Node,
    headerStyle?: ViewStyleProp,
    headerForceInset?: _SafeAreaViewInsets,
    headerBackground?: React$Node | React$ElementType,
    gesturesEnabled?: boolean,
    gestureResponseDistance?: {|
      vertical?: number,
      horizontal?: number,
    |},
    gestureDirection?: 'default' | 'inverted',
    ...
  };

  declare export type NavigationStackRouterConfig = {|
    initialRouteName?: string,
    initialRouteParams?: NavigationParams,
    paths?: NavigationPathsConfig,
    navigationOptions?: NavigationScreenConfig<*>,
    defaultNavigationOptions?: NavigationScreenConfig<*>,
    initialRouteKey?: string,
  |};

  /**
   * Stack Gestures, Animations, and Interpolators
   */

  declare export type NavigationStackLayout = {
    height: AnimatedValue,
    initHeight: number,
    initWidth: number,
    isMeasured: boolean,
    width: AnimatedValue,
    ...
  };

  declare export type NavigationStackScene = {
    index: number,
    isActive: boolean,
    isStale: boolean,
    key: string,
    route: NavigationRoute,
    descriptor: ?NavigationDescriptor,
    ...
  };

  /**
   * SwitchRouter
   */

  declare export type NavigationSwitchRouterConfig = {|
    initialRouteName?: string,
    initialRouteParams?: NavigationParams,
    paths?: NavigationPathsConfig,
    navigationOptions?: NavigationScreenConfig<*>,
    defaultNavigationOptions?: NavigationScreenConfig<*>,
    // todo: type these as the real route names rather than 'string'
    order?: string[],
    // Does the back button cause the router to switch to the initial tab
    backBehavior?: 'none' | 'initialRoute' | 'history' | 'order', // defaults `initialRoute`
    resetOnBlur?: boolean,
  |};

  /**
   * TabRouter
   */

  declare export type NavigationTabProp<+S> =
    & NavigationScreenProp<S>
    & { jumpTo: (routeName: string, key?: string) => void, ... };

  declare export type NavigationTabRouterConfig = NavigationSwitchRouterConfig;

  declare export type NavigationTabScreenOptions = {
    ...$Exact<NavigationScreenOptions>,
    tabBarLabel?: React$Node,
    tabBarVisible?: boolean,
    tabBarAccessibilityLabel?: string,
    tabBarTestID?: string,
    tabBarIcon?:
      | React$Node
      | ((props: {|
          focused: boolean,
          tintColor?: string,
          horizontal?: boolean,
        |}) => React$Node),
    tabBarOnPress?: (props: {|
      navigation: NavigationTabProp<NavigationRoute>,
      defaultHandler: () => void,
    |}) => void,
    tabBarOnLongPress?: (props: {|
      navigation: NavigationTabProp<NavigationRoute>,
      defaultHandler: () => void,
    |}) => void,
    ...
  };

  //---------------------------------------------------------------------------
  // SECTION 3: UNIQUE TYPE DEFINITIONS
  // This section normally contains exported types that are not present in any
  // other React Navigation libdef. But the main react-navigation libdef doesn't
  // have any, so it's empty here.
  //---------------------------------------------------------------------------

  //---------------------------------------------------------------------------
  // SECTION 4: EXPORTED MODULE
  // This is the only section that types exports. Other sections export types,
  // but this section types the module's exports.
  //---------------------------------------------------------------------------

  declare export var StateUtils: {
    get: (state: NavigationState, key: string) => ?NavigationRoute,
    indexOf: (state: NavigationState, key: string) => number,
    has: (state: NavigationState, key: string) => boolean,
    push: (state: NavigationState, route: NavigationRoute) => NavigationState,
    pop: (state: NavigationState) => NavigationState,
    jumpToIndex: (state: NavigationState, index: number) => NavigationState,
    jumpTo: (state: NavigationState, key: string) => NavigationState,
    back: (state: NavigationState) => NavigationState,
    forward: (state: NavigationState) => NavigationState,
    replaceAt: (
      state: NavigationState,
      key: string,
      route: NavigationRoute
    ) => NavigationState,
    replaceAtIndex: (
      state: NavigationState,
      index: number,
      route: NavigationRoute
    ) => NavigationState,
    reset: (
      state: NavigationState,
      routes: Array<NavigationRoute>,
      index?: number
    ) => NavigationState,
    ...
  };

  declare export function getNavigation<State: NavigationState, Options: {...}>(
    router: NavigationRouter<State, Options>,
    state: State,
    dispatch: NavigationDispatch,
    actionSubscribers: Set<NavigationEventCallback>,
    getScreenProps: () => {...},
    getCurrentNavigation: () => ?NavigationScreenProp<State>
  ): NavigationScreenProp<State>;

  declare type _NavigationView<O, S, N: NavigationScreenProp<S>> = React$ComponentType<{
    descriptors: NavigationDescriptorMap,
    navigation: N,
    navigationConfig: *,
    ...
  }>;
  declare export function createNavigator<O: *, S: *, NavigatorConfig: *, N: NavigationScreenProp<S>>(
    view: _NavigationView<O, S, N>,
    router: NavigationRouter<S, O>,
    navigatorConfig?: NavigatorConfig
  ): NavigationNavigator<S, O, *>;

  declare export var NavigationContext: React$Context<
    ?NavigationScreenProp<NavigationState | NavigationRoute>,
  >;
  declare export var NavigationProvider: $PropertyType<typeof NavigationContext, 'Provider'>;
  declare export var NavigationConsumer: $PropertyType<typeof NavigationContext, 'Consumer'>;

  declare type _SwitchNavigatorConfig = NavigationSwitchRouterConfig;
  declare export function createSwitchNavigator(
    routeConfigs: NavigationRouteConfigMap,
    config?: _SwitchNavigatorConfig
  ): NavigationNavigator<*, *, *>;

  declare export var ThemeContext: React$Context<SupportedThemes>;
  declare export var ThemeProvider: $PropertyType<typeof ThemeContext, 'Provider'>;
  declare export var ThemeConsumer: $PropertyType<typeof ThemeContext, 'Consumer'>;
  declare export var ThemeColors: { [theme: SupportedThemes]: { [key: string]: string, ... }, ... };
  declare export function useTheme(): SupportedThemes;

  declare export var NavigationActions: {|
    BACK: 'Navigation/BACK',
    INIT: 'Navigation/INIT',
    NAVIGATE: 'Navigation/NAVIGATE',
    SET_PARAMS: 'Navigation/SET_PARAMS',
    back: (payload?: {| key?: ?string |}) => NavigationBackAction,
    init: (payload?: {| params?: NavigationParams |}) => NavigationInitAction,
    navigate: (payload: {|
      routeName: string,
      params?: ?NavigationParams,
      action?: ?NavigationNavigateAction,
      key?: string,
    |}) => NavigationNavigateAction,
    setParams: (payload: {|
      key: string,
      params: NavigationParams,
    |}) => NavigationSetParamsAction,
  |};

  declare export var StackActions: {|
    POP: 'Navigation/POP',
    POP_TO_TOP: 'Navigation/POP_TO_TOP',
    PUSH: 'Navigation/PUSH',
    RESET: 'Navigation/RESET',
    REPLACE: 'Navigation/REPLACE',
    COMPLETE_TRANSITION: 'Navigation/COMPLETE_TRANSITION',
    pop: (payload: {|
      n?: number,
      immediate?: boolean,
    |}) => NavigationPopAction,
    popToTop: (payload: {| immediate?: boolean |}) => NavigationPopToTopAction,
    push: (payload: {|
      routeName: string,
      params?: NavigationParams,
      action?: NavigationNavigateAction,
      key?: string,
    |}) => NavigationPushAction,
    reset: (payload: {|
      index: number,
      key?: ?string,
      actions: Array<NavigationNavigateAction>,
    |}) => NavigationResetAction,
    replace: (payload: {|
      key?: string,
      routeName: string,
      params?: NavigationParams,
      action?: NavigationNavigateAction,
    |}) => NavigationReplaceAction,
    completeTransition: (payload: {|
      key?: string,
      toChildKey?: string,
    |}) => NavigationCompleteTransitionAction,
  |};

  declare export var SwitchActions: {|
    JUMP_TO: 'Navigation/JUMP_TO',
    jumpTo: (payload: {|
      routeName: string,
      key?: string,
      params?: NavigationParams,
    |}) => NavigationJumpToAction,
  |};

  declare export function StackRouter(
    routeConfigs: NavigationRouteConfigMap,
    stackConfig?: NavigationStackRouterConfig
  ): NavigationRouter<*, NavigationStackScreenOptions>;

  declare export function TabRouter(
    routeConfigs: NavigationRouteConfigMap,
    config?: NavigationTabRouterConfig
  ): NavigationRouter<*, NavigationTabScreenOptions>;

  declare export function SwitchRouter(
    routeConfigs: NavigationRouteConfigMap,
    stackConfig?: NavigationSwitchRouterConfig
  ): NavigationRouter<*, {| |}>;

  declare export function getActiveChildNavigationOptions<
    State: NavigationState,
    Options: {...}
  >(
    navigation: NavigationScreenProp<State>,
    screenProps?: NavigationScreenProps,
    theme?: SupportedThemes,
  ): Options;

  declare type _SceneViewProps = {
    component: React$ComponentType<{
      screenProps: ?NavigationScreenProps,
      navigation: NavigationScreenProp<NavigationRoute>,
      ...
    }>,
    screenProps: ?NavigationScreenProps,
    navigation: NavigationScreenProp<NavigationRoute>,
    ...
  };
  declare export var SceneView: React$ComponentType<_SceneViewProps>;

  declare type _NavigationEventsProps = {
    navigation?: NavigationScreenProp<NavigationState>,
    onWillFocus?: NavigationEventCallback,
    onDidFocus?: NavigationEventCallback,
    onWillBlur?: NavigationEventCallback,
    onDidBlur?: NavigationEventCallback,
    ...
  };
  declare export var NavigationEvents: React$ComponentType<
    _NavigationEventsProps
  >;

  declare export function withNavigation<Props: {...}, ComponentType: React$ComponentType<Props>>(
    Component: ComponentType
  ): React$ComponentType<
    $Diff<
      React$ElementConfig<ComponentType>,
      {| navigation: NavigationScreenProp<NavigationStateRoute> |}
    >
  >;
  declare export function withNavigationFocus<Props: {...}, ComponentType: React$ComponentType<Props>>(
    Component: ComponentType
  ): React$ComponentType<$Diff<React$ElementConfig<ComponentType>, {| isFocused: ?boolean |}>>;

  declare export function createAppContainer<S: NavigationState, O: {...}>(
    Component: NavigationNavigator<S, O, *>
  ): NavigationContainer<S, O, *>;

  declare export function createKeyboardAwareNavigator<Props: {...}>(
    Comp: React$ComponentType<Props>,
    stackConfig: {...}
  ): React$ComponentType<Props>;

  declare export function withOrientation<Props: {...}, ComponentType: React$ComponentType<Props>>(
    Component: ComponentType
  ): React$ComponentType<$Diff<React$ElementConfig<ComponentType>, {| isLandscape: boolean |}>>;

  declare type _SafeAreaViewProps = {
    forceInset?: _SafeAreaViewInsets,
    children?: React$Node,
    style?: AnimatedViewStyleProp,
    ...
  };
  declare export var SafeAreaView: React$ComponentType<_SafeAreaViewProps>;

  // These components take the same props that their React Native primitives do
  // Typing them correctly would be extremely brittle
  // We await the day we can import types from libraries in flow-typed libdefs
  declare export var ScrollView: React$ComponentType<{...}>;
  declare export var FlatList: React$ComponentType<{...}>;
  declare export var SectionList: React$ComponentType<{...}>;
  declare export var Themed: {|
    StatusBar: React$ComponentType<{...}>,
    Text: React$ComponentType<{...}>,
    TextInput: React$ComponentType<{...}>,
  |};

}

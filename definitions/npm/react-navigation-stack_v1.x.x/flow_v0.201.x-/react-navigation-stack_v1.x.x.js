// @flow

declare module 'react-navigation-stack' {

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

  declare type _HeaderBackButtonProps = {|
    disabled?: boolean,
    onPress: () => void,
    pressColorAndroid?: string,
    tintColor?: ?string,
    backImage?: React$ComponentType<{
      tintColor: string,
      title?: ?string,
      ...
    }>,
    title?: ?string,
    truncatedTitle?: ?string,
    backTitleVisible?: boolean,
    allowFontScaling?: boolean,
    titleStyle?: ?TextStyleProp,
    width?: ?number,
  |};

  declare export type NavigationStackScreenOptions = NavigationScreenOptions & {
    header?: ?(React$Node | (HeaderProps => React$Node)),
    headerTransparent?: boolean,
    headerTitle?: (props: { children: ?string, ... }) => React$Node | React$Node,
    headerTitleStyle?: AnimatedTextStyleProp,
    headerTitleAllowFontScaling?: boolean,
    headerTintColor?: string,
    headerLeft?: ((props: _HeaderBackButtonProps) => React$Node) | React$Node,
    headerBackTitle?: ?string,
    headerBackImage?: (props: {|
      tintColor?: string,
      title?: ?string,
    |}) => React$Node,
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
    navigationOptions?: NavigationScreenConfig<any>,
    defaultNavigationOptions?: NavigationScreenConfig<any>,
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

  //---------------------------------------------------------------------------
  // SECTION 3: UNIQUE TYPE DEFINITIONS
  // This section contains exported types that are not present in any other
  // React Navigation libdef.
  //---------------------------------------------------------------------------

  /**
   * NavigationStackTransitionProps
   */

  declare export type NavigationStackTransitionProps = $Shape<{|
    // The layout of the screen container
    layout: NavigationStackLayout,
    // The destination navigation state of the transition
    navigation: NavigationStackProp<NavigationState>,
    // The progressive index of the transitioner's navigation state.
    position: AnimatedValue,
    // All the scenes of the transitioner.
    scenes: Array<NavigationStackScene>,
    // The active scene, corresponding to the route at
    // `navigation.state.routes[navigation.state.index]`. When rendering
    // NavigationSceneRendererPropsIndex, the scene does not refer to the active
    // scene, but instead the scene that is being rendered. The index always
    // is the index of the scene
    scene: NavigationStackScene,
    index: number,
  |}>;


  /**
   * StackNavigator
   */

  declare type _NavigationTransitionConfigurer = (
    transitionProps: NavigationStackTransitionProps,
    prevTransitionProps: ?NavigationStackTransitionProps,
    isModal: boolean
  ) => TransitionConfig;

  declare export type NavigationStackViewConfig = {|
    mode?: 'card' | 'modal',
    headerMode?: HeaderMode,
    headerLayoutPreset?: 'left' | 'center',
    headerTransitionPreset?: 'fade-in-place' | 'uikit',
    headerBackgroundTransitionPreset?: 'translate' | 'fade' | 'toggle',
    headerBackTitleVisible?: boolean,
    disableKeyboardHandling?: boolean,
    cardShadowEnabled?: boolean,
    cardOverlayEnabled?: boolean,
    onTransitionStart?: (
      transitionProps: NavigationStackTransitionProps,
      prevTransitionProps: ?NavigationStackTransitionProps,
    ) => void,
    onTransitionEnd?: (
      transitionProps: NavigationStackTransitionProps,
      prevTransitionProps: ?NavigationStackTransitionProps,
    ) => void,
    cardStyle?: ViewStyleProp,
    transitionConfig?: _NavigationTransitionConfigurer,
    transparentCard?: boolean,
  |};

  declare export type StackNavigatorConfig = $Shape<{|
    ...NavigationStackViewConfig,
    ...NavigationStackRouterConfig,
  |}>;

  /**
   * Transitioner
   */

  declare export type NavigationTransitionSpec = {
    // A timing function such as `Animated.timing`.
    timing: (value: AnimatedValue, config: any) => any,
    duration?: number,
    // An easing function from `Easing`.
    easing?: (t: number) => number,
    ...
  };

  // Describes a visual transition from one screen to another.
  declare export type TransitionConfig = {|
    // The basics properties of the animation, such as duration and easing
    transitionSpec: NavigationTransitionSpec,
    // How to animate position and opacity of the screen
    // based on the value generated by the transitionSpec
    screenInterpolator: NavigationStackInterpolator,
    // How to animate position and opacity of the header components
    // based on the value generated by the transitionSpec
    headerLeftInterpolator?: NavigationStackInterpolator,
    headerLeftLabelInterpolator?: NavigationStackInterpolator,
    headerLeftButtonInterpolator?: NavigationStackInterpolator,
    headerTitleFromLeftInterpolator?: NavigationStackInterpolator,
    headerTitleInterpolator?: NavigationStackInterpolator,
    headerRightInterpolator?: NavigationStackInterpolator,
    headerBackgroundInterpolator?: NavigationStackInterpolator,
    headerLayoutInterpolator?: NavigationStackInterpolator,
    // The style of the container. Useful when a scene doesn't have
    // 100% opacity and the underlying container is visible.
    containerStyle?: ViewStyleProp,
    containerStyleLight?: ViewStyleProp,
    containerStyleDark?: ViewStyleProp,
  |};

  //---------------------------------------------------------------------------
  // SECTION 4: EXPORTED MODULE
  // This is the only section that types exports. Other sections export types,
  // but this section types the module's exports.
  //---------------------------------------------------------------------------

  declare export function createStackNavigator(
    routeConfigMap: NavigationRouteConfigMap,
    stackConfig?: StackNavigatorConfig
  ): NavigationNavigator<any, any, any>;

  declare export var Header: React$ComponentType<HeaderProps> & { HEIGHT: number, ... };

  declare export var HeaderBackButton: React$ComponentType<
    _HeaderBackButtonProps
  >;

  declare type _HeaderTitleProps = {|
    children: React$Node,
    style?: AnimatedTextStyleProp,
  |};
  declare export var HeaderTitle: React$ComponentType<_HeaderTitleProps>;

  declare export var HeaderStyleInterpolator: {|
    forLayout: NavigationStackInterpolator,
    forLeft: NavigationStackInterpolator,
    forLeftButton: NavigationStackInterpolator,
    forLeftLabel: NavigationStackInterpolator,
    forCenterFromLeft: NavigationStackInterpolator,
    forCenter: NavigationStackInterpolator,
    forRight: NavigationStackInterpolator,
    forBackground: NavigationStackInterpolator,
    forBackgroundWithInactiveHidden: NavigationStackInterpolator,
    forBackgroundWithFade: NavigationStackInterpolator,
    forBackgroundWithTranslation: NavigationStackInterpolator,
  |};

  declare type _StackViewProps = {|
    navigation: NavigationStackProp<NavigationState>,
    descriptors: NavigationDescriptorMap,
    navigationConfig: NavigationStackViewConfig,
    onTransitionStart?: (
      transitionProps: NavigationStackTransitionProps,
      prevTransitionProps: ?NavigationStackTransitionProps
    ) => void,
    onGestureBegin?: () => void,
    onGestureCanceled?: () => void,
    onGestureEnd?: () => void,
    screenProps?: NavigationScreenProps,
  |};
  declare export var StackView: React$ComponentType<_StackViewProps>;

  declare type _StackViewCardProps = {|
    ...$Exact<_PointerEventsInputProps>,
    style: ViewStyleProp,
    animatedStyle: any,
    position: AnimatedInterpolation,
    transparent?: boolean,
    children: React$Node,
  |};
  declare export var StackViewCard: React$ComponentType<_StackViewCardProps>;

  declare type _StackViewLayoutProps = {|
    mode?: 'card' | 'modal',
    headerMode?: HeaderMode,
    headerLayoutPreset?: 'left' | 'center',
    headerTransitionPreset?: 'fade-in-place' | 'uikit',
    headerBackgroundTransitionPreset?: 'translate' | 'fade' | 'toggle',
    headerBackTitleVisible?: boolean,
    shadowEnabled?: boolean,
    cardStyle?: ViewStyleProp,
    transitionConfig?: _NavigationTransitionConfigurer,
    transparentCard?: boolean,
    transitionProps: NavigationStackTransitionProps,
    lastTransitionProps: ?NavigationStackTransitionProps,
    onGestureBegin?: () => void,
    onGestureEnd?: () => void,
    onGestureCanceled?: () => void,
    screenProps?: NavigationScreenProps,
  |};
  declare export var StackViewLayout: React$ComponentType<_StackViewLayoutProps>;

  declare export var StackViewStyleInterpolator: {|
    forHorizontal: NavigationStackInterpolator,
    forVertical: NavigationStackInterpolator,
    forFadeFromBottomAndroid: NavigationStackInterpolator,
    forFadeToBottomAndroid: NavigationStackInterpolator,
    forFade: NavigationStackInterpolator,
    forNoAnimation: NavigationStackInterpolator,
  |};

  declare export var StackViewTransitionConfigs: {|
    defaultTransitionConfig: _NavigationTransitionConfigurer,
    getTransitionConfig: (
      transitionConfigurer: ?_NavigationTransitionConfigurer,
      transitionProps: NavigationStackTransitionProps,
      prevTransitionProps: ?NavigationStackTransitionProps,
      isModal: boolean
    ) => TransitionConfig,
    SlideFromRightIOS: TransitionConfig,
    ModalSlideFromBottomIOS: TransitionConfig,
    FadeInFromBottomAndroid: TransitionConfig,
    FadeOutToBottomAndroid: TransitionConfig,
    NoAnimation: TransitionConfig,
  |};

  declare type _PointerEventsInputProps = {
    scene: NavigationStackScene,
    navigation: NavigationStackProp<NavigationState>,
    realPosition: AnimatedValue,
    ...
  };
  declare type _PointerEventsInjectedProps = {
    pointerEvents: 'box-only' | 'none' | 'auto',
    onComponentRef: (ref: any) => void,
    ...
  };
  declare export function createPointerEventsContainer<
    Props: _PointerEventsInputProps & _PointerEventsInjectedProps,
    ComponentType: React$ComponentType<Props>,
  >(
    Component: ComponentType
  ): React$ComponentType<$Diff<React$ElementConfig<ComponentType>, _PointerEventsInjectedProps>>;

  declare type _TransitionerProps = {|
    render: (
      transitionProps: NavigationStackTransitionProps,
      prevTransitionProps: ?NavigationStackTransitionProps
    ) => React$Node,
    configureTransition?: (
      transitionProps: NavigationStackTransitionProps,
      prevTransitionProps: ?NavigationStackTransitionProps
    ) => NavigationTransitionSpec,
    onTransitionStart?: (
      transitionProps: NavigationStackTransitionProps,
      prevTransitionProps: ?NavigationStackTransitionProps
    ) => void,
    onTransitionEnd?: (
      transitionProps: NavigationStackTransitionProps,
      prevTransitionProps: ?NavigationStackTransitionProps
    ) => void,
    navigation: NavigationStackProp<NavigationState>,
    descriptors: NavigationDescriptorMap,
    screenProps?: NavigationScreenProps,
  |};
  declare export var Transitioner: React$ComponentType<_TransitionerProps>;

  declare export function ScenesReducer(
    scenes: $ReadOnlyArray<NavigationStackScene>,
    nextState: NavigationState,
    prevState: ?NavigationState,
    descriptors: NavigationDescriptorMap
  ): NavigationStackScene[];

  declare export var StackGestureContext: React$Context<?React$Ref<any>>;

}

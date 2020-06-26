declare module '@react-navigation/bottom-tabs' {

  //---------------------------------------------------------------------------
  // SECTION 1: IDENTICAL TYPE DEFINITIONS
  // This section is identical across all React Navigation libdefs and contains
  // shared definitions. We wish we could make it DRY and import from a shared
  // definition, but that isn't yet possible.
  //---------------------------------------------------------------------------

  /**
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

  // Vaguely copied from
  // react-native/Libraries/Animated/src/animations/Animation.js
  declare type EndResult = { finished: boolean, ... };
  declare type EndCallback = (result: EndResult) => void;
  declare interface Animation {
    start(
      fromValue: number,
      onUpdate: (value: number) => void,
      onEnd: ?EndCallback,
      previousAnimation: ?Animation,
      animatedValue: AnimatedValue,
    ): void;
    stop(): void;
  }
  declare type AnimationConfig = {
    isInteraction?: boolean,
    useNativeDriver: boolean,
    onComplete?: ?EndCallback,
    iterations?: number,
    ...
  };

  // Vaguely copied from
  // react-native/Libraries/Animated/src/nodes/AnimatedTracking.js
  declare interface AnimatedTracking {
    constructor(
      value: AnimatedValue,
      parent: any,
      animationClass: any,
      animationConfig: Object,
      callback?: ?EndCallback,
    ): void;
    update(): void;
  }

  // Vaguely copied from
  // react-native/Libraries/Animated/src/nodes/AnimatedValue.js
  declare type ValueListenerCallback = (state: { value: number, ... }) => void;
  declare interface AnimatedValue {
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

  // Copied from
  // react-native/Libraries/Animated/src/animations/TimingAnimation.js
  declare type TimingAnimationConfigSingle = AnimationConfig & {
    toValue: number | AnimatedValue,
    easing?: (value: number) => number,
    duration?: number,
    delay?: number,
    ...
  };

  // Copied from
  // react-native/Libraries/Animated/src/animations/SpringAnimation.js
  declare type SpringAnimationConfigSingle = AnimationConfig & {
    toValue: number | AnimatedValue,
    overshootClamping?: boolean,
    restDisplacementThreshold?: number,
    restSpeedThreshold?: number,
    velocity?: number,
    bounciness?: number,
    speed?: number,
    tension?: number,
    friction?: number,
    stiffness?: number,
    damping?: number,
    mass?: number,
    delay?: number,
    ...
  };

  // Copied from react-native/Libraries/Types/CoreEventTypes.js
  declare type SyntheticEvent<T> = $ReadOnly<{|
    bubbles: ?boolean,
    cancelable: ?boolean,
    currentTarget: number,
    defaultPrevented: ?boolean,
    dispatchConfig: $ReadOnly<{|
      registrationName: string,
    |}>,
    eventPhase: ?number,
    preventDefault: () => void,
    isDefaultPrevented: () => boolean,
    stopPropagation: () => void,
    isPropagationStopped: () => boolean,
    isTrusted: ?boolean,
    nativeEvent: T,
    persist: () => void,
    target: ?number,
    timeStamp: number,
    type: ?string,
  |}>;
  declare type Layout = $ReadOnly<{|
    x: number,
    y: number,
    width: number,
    height: number,
  |}>;
  declare type LayoutEvent = SyntheticEvent<
    $ReadOnly<{|
      layout: Layout,
    |}>,
  >;
  declare type BlurEvent = SyntheticEvent<
    $ReadOnly<{|
      target: number,
    |}>,
  >;
  declare type FocusEvent = SyntheticEvent<
    $ReadOnly<{|
      target: number,
    |}>,
  >;
  declare type ResponderSyntheticEvent<T> = $ReadOnly<{|
    ...SyntheticEvent<T>,
    touchHistory: $ReadOnly<{|
      indexOfSingleActiveTouch: number,
      mostRecentTimeStamp: number,
      numberActiveTouches: number,
      touchBank: $ReadOnlyArray<
        $ReadOnly<{|
          touchActive: boolean,
          startPageX: number,
          startPageY: number,
          startTimeStamp: number,
          currentPageX: number,
          currentPageY: number,
          currentTimeStamp: number,
          previousPageX: number,
          previousPageY: number,
          previousTimeStamp: number,
        |}>,
      >,
    |}>,
  |}>;
  declare type PressEvent = ResponderSyntheticEvent<
    $ReadOnly<{|
      changedTouches: $ReadOnlyArray<$PropertyType<PressEvent, 'nativeEvent'>>,
      force: number,
      identifier: number,
      locationX: number,
      locationY: number,
      pageX: number,
      pageY: number,
      target: ?number,
      timestamp: number,
      touches: $ReadOnlyArray<$PropertyType<PressEvent, 'nativeEvent'>>,
    |}>,
  >;

  // Vaguely copied from
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
  declare interface AnimatedInterpolation {
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
  }

  // Copied from react-native/Libraries/Components/View/ViewAccessibility.js
  declare type AccessibilityRole =
    | 'none'
    | 'button'
    | 'link'
    | 'search'
    | 'image'
    | 'keyboardkey'
    | 'text'
    | 'adjustable'
    | 'imagebutton'
    | 'header'
    | 'summary'
    | 'alert'
    | 'checkbox'
    | 'combobox'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'scrollbar'
    | 'spinbutton'
    | 'switch'
    | 'tab'
    | 'tablist'
    | 'timer'
    | 'toolbar';
  declare type AccessibilityActionInfo = $ReadOnly<{
    name: string,
    label?: string,
    ...
  }>;
  declare type AccessibilityActionEvent = SyntheticEvent<
    $ReadOnly<{actionName: string, ...}>,
  >;
  declare type AccessibilityState = {
    disabled?: boolean,
    selected?: boolean,
    checked?: ?boolean | 'mixed',
    busy?: boolean,
    expanded?: boolean,
    ...
  };
  declare type AccessibilityValue = $ReadOnly<{|
    min?: number,
    max?: number,
    now?: number,
    text?: string,
  |}>;

  // Copied from
  // react-native/Libraries/Components/Touchable/TouchableWithoutFeedback.js
  declare type Stringish = string;
  declare type EdgeInsetsProp = $ReadOnly<$Shape<EdgeInsets>>;
  declare type TouchableWithoutFeedbackProps = $ReadOnly<{|
    accessibilityActions?: ?$ReadOnlyArray<AccessibilityActionInfo>,
    accessibilityElementsHidden?: ?boolean,
    accessibilityHint?: ?Stringish,
    accessibilityIgnoresInvertColors?: ?boolean,
    accessibilityLabel?: ?Stringish,
    accessibilityLiveRegion?: ?('none' | 'polite' | 'assertive'),
    accessibilityRole?: ?AccessibilityRole,
    accessibilityState?: ?AccessibilityState,
    accessibilityValue?: ?AccessibilityValue,
    accessibilityViewIsModal?: ?boolean,
    accessible?: ?boolean,
    children?: ?React$Node,
    delayLongPress?: ?number,
    delayPressIn?: ?number,
    delayPressOut?: ?number,
    disabled?: ?boolean,
    focusable?: ?boolean,
    hitSlop?: ?EdgeInsetsProp,
    importantForAccessibility?: ?('auto' | 'yes' | 'no' | 'no-hide-descendants'),
    nativeID?: ?string,
    onAccessibilityAction?: ?(event: AccessibilityActionEvent) => mixed,
    onBlur?: ?(event: BlurEvent) => mixed,
    onFocus?: ?(event: FocusEvent) => mixed,
    onLayout?: ?(event: LayoutEvent) => mixed,
    onLongPress?: ?(event: PressEvent) => mixed,
    onPress?: ?(event: PressEvent) => mixed,
    onPressIn?: ?(event: PressEvent) => mixed,
    onPressOut?: ?(event: PressEvent) => mixed,
    pressRetentionOffset?: ?EdgeInsetsProp,
    rejectResponderTermination?: ?boolean,
    testID?: ?string,
    touchSoundDisabled?: ?boolean,
  |}>;

  // Copied from react-native/Libraries/Image/ImageSource.js
  declare type ImageURISource = $ReadOnly<{
    uri?: ?string,
    bundle?: ?string,
    method?: ?string,
    headers?: ?Object,
    body?: ?string,
    cache?: ?('default' | 'reload' | 'force-cache' | 'only-if-cached'),
    width?: ?number,
    height?: ?number,
    scale?: ?number,
    ...
  }>;

  /**
   * The following is copied from react-native-gesture-handler's libdef
   */

  declare type $EventHandlers<ExtraProps: {...}> = {|
    onGestureEvent?: ($Event<ExtraProps>) => mixed,
    onHandlerStateChange?: ($Event<ExtraProps>) => mixed,
    onBegan?: ($Event<ExtraProps>) => mixed,
    onFailed?: ($Event<ExtraProps>) => mixed,
    onCancelled?: ($Event<ExtraProps>) => mixed,
    onActivated?: ($Event<ExtraProps>) => mixed,
    onEnded?: ($Event<ExtraProps>) => mixed,
  |};

  declare type HitSlop =
    | number
    | {|
        left?: number,
        top?: number,
        right?: number,
        bottom?: number,
        vertical?: number,
        horizontal?: number,
        width?: number,
        height?: number,
      |}
    | {|
        width: number,
        left: number,
      |}
    | {|
        width: number,
        right: number,
      |}
    | {|
        height: number,
        top: number,
      |}
    | {|
        height: number,
        bottom: number,
      |};

  declare type $GestureHandlerProps<
    AdditionalProps: {...},
    ExtraEventsProps: {...}
  > = $ReadOnly<{|
    ...$Exact<AdditionalProps>,
    ...$EventHandlers<ExtraEventsProps>,
    id?: string,
    enabled?: boolean,
    waitFor?: React$Ref<any> | Array<React$Ref<any>>,
    simultaneousHandlers?: React$Ref<any> | Array<React$Ref<any>>,
    shouldCancelWhenOutside?: boolean,
    minPointers?: number,
    hitSlop?: HitSlop,
    children?: React$Node,
  |}>;

  declare type PanGestureHandlerProps = $GestureHandlerProps<
    {
      activeOffsetY?: number | [number, number],
      activeOffsetX?: number | [number, number],
      failOffsetY?: number | [number, number],
      failOffsetX?: number | [number, number],
      minDist?: number,
      minVelocity?: number,
      minVelocityX?: number,
      minVelocityY?: number,
      minPointers?: number,
      maxPointers?: number,
      avgTouches?: boolean,
      ...
    },
    {
      x: number,
      y: number,
      absoluteX: number,
      absoluteY: number,
      translationX: number,
      translationY: number,
      velocityX: number,
      velocityY: number,
      ...
    }
  >;

  /**
   * MAGIC
   */

  declare type $If<Test: boolean, Then, Else = empty> = $Call<
    ((true, Then, Else) => Then) & ((false, Then, Else) => Else),
    Test,
    Then,
    Else,
  >;
  declare type $IsA<X, Y> = $Call<
    (Y => true) & (mixed => false),
    X,
  >;
  declare type $IsUndefined<X> = $IsA<X, void>;

  declare type $Partial<T> = $Rest<T, {...}>;

  /**
   * Actions, state, etc.
   */

  declare export type ScreenParams = { +[key: string]: mixed, ... };

  declare export type BackAction = {|
    +type: 'GO_BACK',
    +source?: string,
    +target?: string,
  |};
  declare export type NavigateAction = {|
    +type: 'NAVIGATE',
    +payload:
      | {| +key: string, +params?: ScreenParams |}
      | {| +name: string, +key?: string, +params?: ScreenParams |},
    +source?: string,
    +target?: string,
  |};
  declare export type ResetAction = {|
    +type: 'RESET',
    +payload: StaleNavigationState,
    +source?: string,
    +target?: string,
  |};
  declare export type SetParamsAction = {|
    +type: 'SET_PARAMS',
    +payload: {| +params?: ScreenParams |},
    +source?: string,
    +target?: string,
  |};
  declare export type CommonAction =
    | BackAction
    | NavigateAction
    | ResetAction
    | SetParamsAction;

  declare type NavigateActionCreator = {|
    (routeName: string, params?: ScreenParams): NavigateAction,
    (
      | {| +key: string, +params?: ScreenParams |}
      | {| +name: string, +key?: string, +params?: ScreenParams |},
    ): NavigateAction,
  |};
  declare export type CommonActionsType = {|
    +navigate: NavigateActionCreator,
    +goBack: () => BackAction,
    +reset: (state: PossiblyStaleNavigationState) => ResetAction,
    +setParams: (params: ScreenParams) => SetParamsAction,
  |};

  declare export type GenericNavigationAction = {|
    +type: string,
    +payload?: { +[key: string]: mixed, ... },
    +source?: string,
    +target?: string,
  |};

  declare export type LeafRoute<RouteName: string = string> = {|
    +key: string,
    +name: RouteName,
    +params?: ScreenParams,
  |};
  declare export type StateRoute<RouteName: string = string> = {|
    ...LeafRoute<RouteName>,
    +state: NavigationState | StaleNavigationState,
  |};
  declare export type Route<RouteName: string = string> =
    | LeafRoute<RouteName>
    | StateRoute<RouteName>;

  declare export type NavigationState = {|
    +key: string,
    +index: number,
    +routeNames: $ReadOnlyArray<string>,
    +history?: $ReadOnlyArray<mixed>,
    +routes: $ReadOnlyArray<Route<>>,
    +type: string,
    +stale: false,
  |};

  declare export type StaleLeafRoute<RouteName: string = string> = {|
    +key?: string,
    +name: RouteName,
    +params?: ScreenParams,
  |};
  declare export type StaleStateRoute<RouteName: string = string> = {|
    ...StaleLeafRoute<RouteName>,
    +state: StaleNavigationState,
  |};
  declare export type StaleRoute<RouteName: string = string> =
    | StaleLeafRoute<RouteName>
    | StaleStateRoute<RouteName>;
  declare export type StaleNavigationState = {|
    // It's possible to pass React Nav a StaleNavigationState with an undefined
    // index, but React Nav will always return one with the index set. This is
    // the same as for the type property below, but in the case of index we tend
    // to rely on it being set more...
    +index: number,
    +history?: $ReadOnlyArray<mixed>,
    +routes: $ReadOnlyArray<StaleRoute<>>,
    +type?: string,
    +stale?: true,
  |};

  declare export type PossiblyStaleNavigationState =
    | NavigationState
    | StaleNavigationState;
  declare export type PossiblyStaleRoute<RouteName: string = string> =
    | Route<RouteName>
    | StaleRoute<RouteName>;

  /**
   * Routers
   */

  declare type ActionCreators<
    State: NavigationState,
    Action: GenericNavigationAction,
  > = {
    +[key: string]: (...args: any) => (Action | State => Action),
    ...
  };

  declare export type DefaultRouterOptions = {
    +initialRouteName?: string,
    ...
  };

  declare export type RouterFactory<
    State: NavigationState,
    Action: GenericNavigationAction,
    RouterOptions: DefaultRouterOptions,
  > = (options: RouterOptions) => Router<State, Action>;

  declare export type ParamListBase = { +[key: string]: ?ScreenParams, ... };

  declare export type RouterConfigOptions = {|
    +routeNames: $ReadOnlyArray<string>,
    +routeParamList: ParamListBase,
  |};

  declare export type Router<
    State: NavigationState,
    Action: GenericNavigationAction,
  > = {|
    +type: $PropertyType<State, 'type'>,
    +getInitialState: (options: RouterConfigOptions) => State,
    +getRehydratedState: (
      partialState: PossibleStaleNavigationState,
      options: RouterConfigOptions,
    ) => State,
    +getStateForRouteNamesChange: (
      state: State,
      options: RouterConfigOptions,
    ) => State,
    +getStateForRouteFocus: (state: State, key: string) => State,
    +getStateForAction: (
      state: State,
      action: Action,
      options: RouterConfigOptions,
    ) => ?PossiblyStaleNavigationState;
    +shouldActionChangeFocus: (action: GenericNavigationAction) => boolean,
    +actionCreators?: ActionCreators<State, Action>,
  |};

  /**
   * Stack actions and router
   */

  declare export type StackNavigationState = {|
    ...NavigationState,
    +type: 'stack',
  |};

  declare export type ReplaceAction = {|
    +type: 'REPLACE',
    +payload: {| +name: string, +key?: ?string, +params?: ScreenParams |},
    +source?: string,
    +target?: string,
  |};
  declare export type PushAction = {|
    +type: 'PUSH',
    +payload: {| +name: string, +key?: ?string, +params?: ScreenParams |},
    +source?: string,
    +target?: string,
  |};
  declare export type PopAction = {|
    +type: 'POP',
    +payload: {| +count: number |},
    +source?: string,
    +target?: string,
  |};
  declare export type PopToTopAction = {|
    +type: 'POP_TO_TOP',
    +source?: string,
    +target?: string,
  |};
  declare export type StackAction =
    | CommonAction
    | ReplaceAction
    | PushAction
    | PopAction
    | PopToTopAction;

  declare export type StackActionsType = {|
    +replace: (routeName: string, params?: ScreenParams) => ReplaceAction,
    +push: (routeName: string, params?: ScreenParams) => PushAction,
    +pop: (count?: number) => PopAction,
    +popToTop: () => PopToTopAction,
  |};

  declare export type StackRouterOptions = $Exact<DefaultRouterOptions>;

  /**
   * Tab actions and router
   */

  declare export type TabNavigationState = {|
    ...NavigationState,
    +type: 'tab',
    +history: $ReadOnlyArray<{| type: 'route', key: string |}>,
  |};

  declare export type JumpToAction = {|
    +type: 'JUMP_TO',
    +payload: {| +name: string, +params?: ScreenParams |},
    +source?: string,
    +target?: string,
  |};
  declare export type TabAction =
    | CommonAction
    | JumpToAction;

  declare export type TabActionsType = {|
    +jumpTo: string => JumpToAction,
  |};

  declare export type TabRouterOptions = {|
    ...$Exact<DefaultRouterOptions>,
    +backBehavior?: 'initialRoute' | 'order' | 'history' | 'none',
  |};

  /**
   * Drawer actions and router
   */

  declare type DrawerHistoryEntry =
    | {| +type: 'route', +key: string |}
    | {| +type: 'drawer' |};
  declare export type DrawerNavigationState = {|
    ...NavigationState,
    +type: 'drawer',
    +history: $ReadOnlyArray<DrawerHistoryEntry>,
  |};

  declare export type OpenDrawerAction = {|
    +type: 'OPEN_DRAWER',
    +source?: string,
    +target?: string,
  |};
  declare export type CloseDrawerAction = {|
    +type: 'CLOSE_DRAWER',
    +source?: string,
    +target?: string,
  |};
  declare export type ToggleDrawerAction = {|
    +type: 'TOGGLE_DRAWER',
    +source?: string,
    +target?: string,
  |};
  declare export type DrawerAction =
    | TabAction
    | OpenDrawerAction
    | CloseDrawerAction
    | ToggleDrawerAction;

  declare export type DrawerActionsType = {|
    ...TabActionsType,
    +openDrawer: () => OpenDrawerAction,
    +closeDrawer: () => CloseDrawerAction,
    +toggleDrawer: () => ToggleDrawerAction,
  |};

  declare export type DrawerRouterOptions = {|
    ...TabRouterOptions,
    +openByDefault?: boolean,
  |};

  /**
   * Events
   */

  declare export type EventMapBase = {
    +[name: string]: {|
      +data?: mixed,
      +canPreventDefault?: boolean,
    |},
    ...
  };
  declare type EventPreventDefaultProperties<Test: boolean> = $If<
    Test,
    {| +defaultPrevented: boolean, +preventDefault: () => void |},
    {| |},
  >;
  declare type EventDataProperties<Data> = $If<
    $IsUndefined<Data>,
    {| |},
    {| +data: Data |},
  >;
  declare type EventArg<
    EventName: string,
    CanPreventDefault: ?boolean = false,
    Data = void,
  > = {|
    ...EventPreventDefaultProperties<CanPreventDefault>,
    ...EventDataProperties<Data>,
    +type: EventName,
    +target?: string,
  |};
  declare type GlobalEventMap<State: PossiblyStaleNavigationState> = {|
    +state: {| +data: {| +state: State |}, +canPreventDefault: false |},
  |};
  declare type EventMapCore<State: PossiblyStaleNavigationState> = {|
    ...GlobalEventMap<State>,
    +focus: {| +data: void, +canPreventDefault: false |},
    +blur: {| +data: void, +canPreventDefault: false |},
  |};
  declare type EventListenerCallback<
    EventName: string,
    State: PossiblyStaleNavigationState = NavigationState,
    EventMap: EventMapBase = EventMapCore<State>,
  > = (e: EventArg<
    EventName,
    $PropertyType<
      $ElementType<
        {| ...EventMap, ...EventMapCore<State> |},
        EventName,
      >,
      'canPreventDefault',
    >,
    $PropertyType<
      $ElementType<
        {| ...EventMap, ...EventMapCore<State> |},
        EventName,
      >,
      'data',
    >,
  >) => mixed;

  /**
   * Navigation prop
   */

  declare export type SimpleNavigate<ParamList> =
    <DestinationRouteName: $Keys<ParamList>>(
      routeName: DestinationRouteName,
      params: $ElementType<ParamList, DestinationRouteName>,
    ) => void;

  declare export type Navigate<ParamList> =
    & SimpleNavigate<ParamList>
    & <DestinationRouteName: $Keys<ParamList>>(
        route:
          | {|
              key: string,
              params?: $ElementType<ParamList, DestinationRouteName>,
            |}
          | {|
              name: DestinationRouteName,
              key?: string,
              params?: $ElementType<ParamList, DestinationRouteName>,
            |},
      ) => void;

  declare type NavigationHelpers<
    ParamList: ParamListBase,
    State: PossiblyStaleNavigationState = PossiblyStaleNavigationState,
    EventMap: EventMapBase = EventMapCore<State>,
  > = {
    +navigate: Navigate<ParamList>,
    +dispatch: (
      action:
        | GenericNavigationAction
        | (State => GenericNavigationAction),
    ) => void,
    +reset: PossiblyStaleNavigationState => void,
    +goBack: () => void,
    +isFocused: () => boolean,
    +canGoBack: () => boolean,
    +dangerouslyGetParent: <Parent: NavigationProp<ParamListBase>>() => ?Parent,
    +dangerouslyGetState: () => NavigationState,
    +addListener: <EventName: $Keys<
      {| ...EventMap, ...EventMapCore<State> |},
    >>(
      name: EventName,
      callback: EventListenerCallback<EventName, State, EventMap>,
    ) => () => void,
    +removeListener: <EventName: $Keys<
      {| ...EventMap, ...EventMapCore<State> |},
    >>(
      name: EventName,
      callback: EventListenerCallback<EventName, State, EventMap>,
    ) => void,
    ...
  };

  declare export type NavigationProp<
    ParamList: ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    State: PossiblyStaleNavigationState = PossiblyStaleNavigationState,
    ScreenOptions: {...} = {...},
    EventMap: EventMapBase = EventMapCore<State>,
  > = {
    ...$Exact<NavigationHelpers<
      ParamList,
      State,
      EventMap,
    >>,
    +setOptions: (options: $Shape<ScreenOptions>) => void,
    +setParams: (
      params: $If<
        $IsUndefined<$ElementType<ParamList, RouteName>>,
        empty,
        $Shape<$NonMaybeType<$ElementType<ParamList, RouteName>>>,
      >,
    ) => void,
    ...
  };

  /**
   * CreateNavigator
   */

  declare export type RouteProp<
    ParamList: ParamListBase,
    RouteName: $Keys<ParamList>,
  > = {|
    ...LeafRoute<RouteName>,
    +params: $ElementType<ParamList, RouteName>,
  |};

  declare export type ScreenListeners<
    EventMap: EventMapBase = EventMapCore<State>,
    State: NavigationState = NavigationState,
  > = $ObjMapi<
    {| [name: $Keys<EventMap>]: empty |},
    <K: $Keys<EventMap>>(K, empty) => EventListenerCallback<K, State, EventMap>,
  >;

  declare type BaseScreenProps<
    ParamList: ParamListBase,
    NavProp,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    State: NavigationState = NavigationState,
    ScreenOptions: {...} = {...},
    EventMap: EventMapBase = EventMapCore<State>,
  > = {|
    +name: RouteName,
    +options?:
      | ScreenOptions
      | ({|
          route: RouteProp<ParamList, RouteName>,
          navigation: NavProp,
        |}) => ScreenOptions,
    +listeners?:
      | ScreenListeners<EventMap, State>
      | ({|
          route: RouteProp<ParamList, RouteName>,
          navigation: NavProp,
        |}) => ScreenListeners<EventMap, State>,
    +initialParams?: $Shape<$ElementType<ParamList, RouteName>>,
  |};

  declare export type ScreenProps<
    ParamList: ParamListBase,
    NavProp,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    State: NavigationState = NavigationState,
    ScreenOptions: {...} = {...},
    EventMap: EventMapBase = EventMapCore<State>,
  > =
    | {|
        ...BaseScreenProps<
          ParamList,
          NavProp,
          RouteName,
          State,
          ScreenOptions,
          EventMap,
        >,
        +component: React$ComponentType<{|
          route: RouteProp<ParamList, RouteName>,
          navigation: NavProp,
        |}>,
      |}
    | {|
        ...BaseScreenProps<
          ParamList,
          NavProp,
          RouteName,
          State,
          ScreenOptions,
          EventMap,
        >,
        +children: ({|
          route: RouteProp<ParamList, RouteName>,
          navigation: NavProp,
        |}) => React$Node,
      |};

  declare export type ScreenComponent<
    GlobalParamList: ParamListBase,
    ParamList: ParamListBase,
    State: NavigationState = NavigationState,
    ScreenOptions: {...} = {...},
    EventMap: EventMapBase = EventMapCore<State>,
  > = <
    RouteName: $Keys<ParamList>,
    NavProp: NavigationProp<
      GlobalParamList,
      RouteName,
      State,
      ScreenOptions,
      EventMap,
    >,
  >(props: ScreenProps<
    ParamList,
    NavProp,
    RouteName,
    State,
    ScreenOptions,
    EventMap,
  >) => React$Node;

  declare type ScreenOptionsProp<ScreenOptions: {...}, NavProp> = {|
    +screenOptions?:
      | ScreenOptions
      | ({| route: LeafRoute<>, navigation: NavProp |}) => ScreenOptions,
  |};
  declare export type ExtraNavigatorPropsBase = {
    ...$Exact<DefaultRouterOptions>,
    +children?: React$Node,
    ...
  };
  declare export type NavigatorPropsBase<ScreenOptions: {...}, NavProp> = {
    ...$Exact<ExtraNavigatorPropsBase>,
    ...ScreenOptionsProp<ScreenOptions, NavProp>,
    ...
  };

  declare export type CreateNavigator<
    State: NavigationState,
    ScreenOptions: {...},
    EventMap: EventMapBase,
    ExtraNavigatorProps: ExtraNavigatorPropsBase,
  > = <
    GlobalParamList: ParamListBase,
    ParamList: ParamListBase,
    NavProp: NavigationHelpers<
      GlobalParamList,
      State,
      EventMap,
    >,
  >() => {|
    +Screen: ScreenComponent<
      GlobalParamList,
      ParamList,
      State,
      ScreenOptions,
      EventMap,
    >,
    +Navigator: React$ComponentType<{|
      ...$Exact<ExtraNavigatorProps>,
      ...ScreenOptionsProp<ScreenOptions, NavProp>,
    |}>,
  |};

  declare export type CreateNavigatorFactory = <
    State: NavigationState,
    ScreenOptions: {...},
    EventMap: EventMapBase,
    NavProp: NavigationHelpers<
      ParamListBase,
      State,
      EventMap,
    >,
    ExtraNavigatorProps: ExtraNavigatorPropsBase,
  >(
    navigator: React$ComponentType<{|
      ...$Exact<ExtraNavigatorPropsBase>,
      ...ScreenOptionsProp<ScreenOptions, NavProp>,
    |}>,
  ) => CreateNavigator<State, ScreenOptions, EventMap, ExtraNavigatorProps>;

  /**
   * useNavigationBuilder
   */

  declare export type Descriptor<
    NavProp,
    ScreenOptions: {...} = {...},
  > = {|
    +render: () => React$Node,
    +options: $ReadOnly<ScreenOptions>,
    +navigation: NavProp,
  |};

  declare export type UseNavigationBuilder = <
    State: NavigationState,
    Action: GenericNavigationAction,
    ScreenOptions: {...},
    RouterOptions: DefaultRouterOptions,
    NavProp,
  >(
    routerFactory: RouterFactory<State, Action, RouterOptions>,
    options: {|
      ...$Exact<RouterOptions>,
      ...ScreenOptionsProp<ScreenOptions, NavProp>,
      +children?: React$Node,
    |},
  ) => {|
    +state: State,
    +descriptors: {| +[key: string]: Descriptor<NavProp, ScreenOptions> |},
    +navigation: NavProp,
  |};

  /**
   * EdgeInsets
   */

  declare type EdgeInsets = {|
    +top: number,
    +right: number,
    +bottom: number,
    +left: number,
  |};

  /**
   * TransitionPreset
   */

  declare export type TransitionSpec =
    | {|
        animation: 'spring',
        config: $Diff<
          SpringAnimationConfigSingle,
          { toValue: number | AnimatedValue, ... },
        >,
      |}
    | {|
        animation: 'timing',
        config: $Diff<
          TimingAnimationConfigSingle,
          { toValue: number | AnimatedValue, ... },
        >,
      |};

  declare export type StackCardInterpolationProps = {|
    +current: {|
      +progress: AnimatedInterpolation,
    |},
    +next?: {|
      +progress: AnimatedInterpolation,
    |},
    +index: number,
    +closing: AnimatedInterpolation,
    +swiping: AnimatedInterpolation,
    +inverted: AnimatedInterpolation,
    +layouts: {|
      +screen: {| +width: number, +height: number |},
    |},
    +insets: EdgeInsets,
  |};
  declare export type StackCardInterpolatedStyle = {|
    containerStyle?: AnimatedViewStyleProp,
    cardStyle?: AnimatedViewStyleProp,
    overlayStyle?: AnimatedViewStyleProp,
    shadowStyle?: AnimatedViewStyleProp,
  |};
  declare export type StackCardStyleInterpolator = (
    props: StackCardInterpolationProps,
  ) => StackCardInterpolatedStyle;

  declare export type StackHeaderInterpolationProps = {|
    +current: {|
      +progress: AnimatedInterpolation,
    |},
    +next?: {|
      +progress: AnimatedInterpolation,
    |},
    +layouts: {|
      +header: {| +width: number, +height: number |},
      +screen: {| +width: number, +height: number |},
      +title?: {| +width: number, +height: number |},
      +leftLabel?: {| +width: number, +height: number |},
    |},
  |};
  declare export type StackHeaderInterpolatedStyle = {|
    leftLabelStyle?: AnimatedViewStyleProp,
    leftButtonStyle?: AnimatedViewStyleProp,
    rightButtonStyle?: AnimatedViewStyleProp,
    titleStyle?: AnimatedViewStyleProp,
    backgroundStyle?: AnimatedViewStyleProp,
  |};
  declare export type StackHeaderStyleInterpolator = (
    props: StackHeaderInterpolationProps,
  ) => StackHeaderInterpolatedStyle;

  declare type GestureDirection =
    | 'horizontal'
    | 'horizontal-inverted'
    | 'vertical'
    | 'vertical-inverted';

  declare export type TransitionPreset = {|
    +gestureDirection: GestureDirection,
    +transitionSpec: {|
      +open: TransitionSpec,
      +close: TransitionSpec,
    |},
    +cardStyleInterpolator: StackCardStyleInterpolator,
    +headerStyleInterpolator: StackHeaderStyleInterpolator,
  |};

  /**
   * Stack options
   */

  declare export type StackDescriptor = Descriptor<
    StackNavigationProp<>,
    StackOptions,
  >;

  declare type Scene<T> = {|
    +route: T,
    +descriptor: StackDescriptor,
    +progress: {|
      +current: AnimatedInterpolation,
      +next?: AnimatedInterpolation,
      +previous?: AnimatedInterpolation,
    |},
  |};

  declare export type StackHeaderProps = {|
    +mode: 'float' | 'screen',
    +layout: {| +width: number, +height: number |},
    +insets: EdgeInsets,
    +scene: Scene<Route<>>,
    +previous?: Scene<Route<>>,
    +navigation: StackNavigationProp<ParamListBase>,
    +styleInterpolator: StackHeaderStyleInterpolator,
  |};

  declare export type StackHeaderLeftButtonProps = $Shape<{|
    +onPress: (() => void),
    +pressColorAndroid: string;
    +backImage: (props: {| tintColor: string |}) => React$Node,
    +tintColor: string,
    +label: string,
    +truncatedLabel: string,
    +labelVisible: boolean,
    +labelStyle: AnimatedTextStyleProp,
    +allowFontScaling: boolean,
    +onLabelLayout: LayoutEvent => void,
    +screenLayout: {| +width: number, +height: number |},
    +titleLayout: {| +width: number, +height: number |},
    +canGoBack: boolean,
  |}>;

  declare type StackHeaderTitleInputBase = {
    +onLayout: LayoutEvent => void,
    +children: string,
    +allowFontScaling: ?boolean,
    +tintColor: ?string,
    +style: ?AnimatedTextStyleProp,
    ...
  };

  declare export type StackHeaderTitleInputProps =
    $Exact<StackHeaderTitleInputBase>;

  declare export type StackOptions = $Shape<{|
    +title: string,
    +header: StackHeaderProps => React$Node,
    +headerShown: boolean,
    +cardShadowEnabled: boolean,
    +cardOverlayEnabled: boolean,
    +cardOverlay: {| style: ViewStyleProp |} => React$Node,
    +cardStyle: ViewStyleProp,
    +animationEnabled: boolean,
    +animationTypeForReplace: 'push' | 'pop',
    +gestureEnabled: boolean,
    +gestureResponseDistance: {| vertical?: number, horizontal?: number |},
    +gestureVelocityImpact: number,
    +safeAreaInsets: $Shape<EdgeInsets>,
    // Transition
    ...TransitionPreset,
    // Header
    +headerTitle: string | (StackHeaderTitleInputProps => React$Node),
    +headerTitleAlign: 'left' | 'center',
    +headerTitleStyle: AnimatedTextStyleProp,
    +headerTitleContainerStyle: ViewStyleProp,
    +headerTintColor: string,
    +headerTitleAllowFontScaling: boolean,
    +headerBackAllowFontScaling: boolean,
    +headerBackTitle: string | null,
    +headerBackTitleStyle: TextStyleProp,
    +headerBackTitleVisible: boolean,
    +headerTruncatedBackTitle: string,
    +headerLeft: StackHeaderLeftButtonProps => React$Node,
    +headerLeftContainerStyle: ViewStyleProp,
    +headerRight: {| tintColor?: string |} => React$Node,
    +headerRightContainerStyle: ViewStyleProp,
    +headerBackImage: $PropertyType<StackHeaderLeftButtonProps, 'backImage'>,
    +headerPressColorAndroid: string,
    +headerBackground: ({| style: ViewStyleProp |}) => React$Node,
    +headerStyle: ViewStyleProp,
    +headerTransparent: boolean,
    +headerStatusBarHeight: number,
  |}>;

  /**
   * Stack navigation prop
   */

  declare export type StackNavigationEventMap = {|
    ...EventMapCore<StackNavigationState>,
    +transitionStart: {|
      +data: {| +closing: boolean |},
      +canPreventDefault: false,
    |},
    +transitionEnd: {|
      +data: {| +closing: boolean |},
      +canPreventDefault: false,
    |},
  |};

  declare type InexactStackNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = StackOptions,
    EventMap: EventMapBase = StackNavigationEventMap,
  > = {
    ...$Exact<NavigationProp<
      ParamList,
      RouteName,
      StackNavigationState,
      Options,
      EventMap,
    >>,
    +replace: SimpleNavigate<ParamList>,
    +push: SimpleNavigate<ParamList>,
    +pop: (count?: number) => void,
    +popToTop: () => void,
    ...
  };

  declare export type StackNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = StackOptions,
    EventMap: EventMapBase = StackNavigationEventMap,
  > = $Exact<InexactStackNavigationProp<
    ParamList,
    RouteName,
    Options,
    EventMap,
  >>;

  /**
   * Miscellaneous stack exports
   */

  declare type StackNavigationConfig = {|
    +mode?: 'card' | 'modal',
    +headerMode?: 'float' | 'screen' | 'none',
    +keyboardHandlingEnabled?: boolean,
  |};

  declare export type ExtraStackNavigatorProps = {|
    ...$Exact<ExtraNavigatorPropsBase>,
    ...StackRouterOptions,
    ...StackNavigationConfig,
  |};

  declare export type StackNavigatorProps<
    NavProp: InexactStackNavigationProp<> = StackNavigationProp<>,
  > = {|
    ...ExtraStackNavigatorProps,
    ...ScreenOptionsProp<StackOptions, NavProp>,
  |};

  /**
   * Bottom tab options
   */

  declare export type BottomTabBarButtonProps = {|
    ...$Diff<
      TouchableWithoutFeedbackProps,
      {| onPress?: ?(event: PressEvent) => mixed |},
    >,
    +to?: string,
    +children: React$Node,
    +onPress?: (MouseEvent | PressEvent) => void,
  |};

  declare export type BottomTabOptions = $Shape<{|
    +title: string,
    +tabBarLabel:
      | string
      | ({| focused: boolean, color: string |}) => React$Node,
    +tabBarIcon: ({|
      focused: boolean,
      color: string,
      size: number,
    |}) => React$Node,
    +tabBarAccessibilityLabel: string,
    +tabBarTestID: string,
    +tabBarVisible: boolean,
    +tabBarButton: BottomTabBarButtonProps => React$Node,
    +unmountOnBlur: boolean,
  |}>;

  /**
   * Bottom tab navigation prop
   */

  declare export type BottomTabNavigationEventMap = {|
    ...EventMapCore<TabNavigationState>,
    +tabPress: {| +data: void, +canPreventDefault: true |},
    +tabLongPress: {| +data: void, +canPreventDefault: false |},
  |};

  declare type InexactTabNavigationProp<
    ParamList: ParamListBase,
    RouteName: $Keys<ParamList>,
    Options: {...},
    EventMap: EventMapBase,
  > = {
    ...$Exact<NavigationProp<
      ParamList,
      RouteName,
      TabNavigationState,
      Options,
      EventMap,
    >>,
    +jumpTo: SimpleNavigate<ParamList>,
    ...
  };

  declare export type InexactBottomTabNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = BottomTabOptions,
    EventMap: EventMapBase = BottomTabNavigationEventMap,
  > = InexactTabNavigationProp<
    ParamList,
    RouteName,
    Options,
    EventMap,
  >;

  declare export type BottomTabNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = BottomTabOptions,
    EventMap: EventMapBase = BottomTabNavigationEventMap,
  > = $Exact<InexactBottomTabNavigationProp<
    ParamList,
    RouteName,
    Options,
    EventMap,
  >>;

  /**
   * Miscellaneous bottom tab exports
   */

  declare export type BottomTabDescriptor = Descriptor<
    BottomTabNavigationProp<>,
    BottomTabOptions,
  >;

  declare export type BottomTabBarOptions = $Shape<{|
    +keyboardHidesTabBar: boolean,
    +activeTintColor: string,
    +inactiveTintColor: string,
    +activeBackgroundColor: string,
    +inactiveBackgroundColor: string,
    +allowFontScaling: boolean,
    +showLabel: boolean,
    +showIcon: boolean,
    +labelStyle: TextStyleProp,
    +iconStyle: TextStyleProp,
    +tabStyle: ViewStyleProp,
    +labelPosition: 'beside-icon' | 'below-icon',
    +adaptive: boolean,
    +safeAreaInsets: $Shape<EdgeInsets>,
    +style: ViewStyleProp,
  |}>;

  declare type BottomTabNavigationBuilderResult = {|
    +state: TabNavigationState,
    +navigation: BottomTabNavigationProp<>,
    +descriptors: {| +[key: string]: BottomTabDescriptor |},
  |};

  declare export type BottomTabBarProps = {|
    ...BottomTabBarOptions,
    ...BottomTabNavigationBuilderResult,
  |}

  declare type BottomTabNavigationConfig = {|
    +lazy?: boolean,
    +tabBar?: BottomTabBarProps => React$Node,
    +tabBarOptions?: BottomTabBarOptions,
  |};

  declare export type ExtraBottomTabNavigatorProps = {|
    ...$Exact<ExtraNavigatorPropsBase>,
    ...TabRouterOptions,
    ...BottomTabNavigationConfig,
  |};

  declare export type BottomTabNavigatorProps<
    NavProp: InexactBottomTabNavigationProp<> = BottomTabNavigationProp<>,
  > = {|
    ...ExtraBottomTabNavigatorProps,
    ...ScreenOptionsProp<BottomTabOptions, NavProp>,
  |};

  /**
   * Material bottom tab options
   */

  declare export type MaterialBottomTabOptions = $Shape<{|
    +title: string,
    +tabBarColor: string,
    +tabBarLabel: string,
    +tabBarIcon:
      | string
      | ({| +focused: boolean, +color: string |}) => React$Node,
    +tabBarBadge: boolean | number | string,
    +tabBarAccessibilityLabel: string,
    +tabBarTestID: string,
  |}>;

  /**
   * Material bottom tab navigation prop
   */

  declare export type MaterialBottomTabNavigationEventMap = {|
    ...EventMapCore<TabNavigationState>,
    +tabPress: {| +data: void, +canPreventDefault: true |},
  |};

  declare export type InexactMaterialBottomTabNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = MaterialBottomTabOptions,
    EventMap: EventMapBase = MaterialBottomTabNavigationEventMap,
  > = InexactTabNavigationProp<
    ParamList,
    RouteName,
    Options,
    EventMap,
  >;

  declare export type MaterialBottomTabNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = MaterialBottomTabOptions,
    EventMap: EventMapBase = MaterialBottomTabNavigationEventMap,
  > = $Exact<InexactMaterialBottomTabNavigationProp<
    ParamList,
    RouteName,
    Options,
    EventMap,
  >>;

  /**
   * Miscellaneous material bottom tab exports
   */

  declare export type PaperFont = {|
    +fontFamily: string,
    +fontWeight?:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900',
  |};

  declare export type PaperFonts = {|
    +regular: Font,
    +medium: Font,
    +light: Font,
    +thin: Font,
  |};

  declare export type PaperTheme = {|
    +dark: boolean,
    +mode?: 'adaptive' | 'exact',
    +roundness: number,
    +colors: {|
      +primary: string,
      +background: string,
      +surface: string,
      +accent: string,
      +error: string,
      +text: string,
      +onSurface: string,
      +onBackground: string,
      +disabled: string,
      +placeholder: string,
      +backdrop: string,
      +notification: string,
    |},
    +fonts: PaperFonts,
    +animation: {|
      +scale: number,
    |},
  |};

  declare export type PaperRoute = {|
    +key: string,
    +title?: string,
    +icon?: any,
    +badge?: string | number | boolean,
    +color?: string,
    +accessibilityLabel?: string,
    +testID?: string,
  |};

  declare export type PaperTouchableProps = {|
    ...TouchableWithoutFeedbackProps,
    +key: string,
    +route: PaperRoute,
    +children: React$Node,
    +borderless?: boolean,
    +centered?: boolean,
    +rippleColor?: string,
  |};

  declare export type MaterialBottomTabNavigationConfig = {|
    +shifting?: boolean,
    +labeled?: boolean,
    +renderTouchable?: PaperTouchableProps => React$Node,
    +activeColor?: string,
    +inactiveColor?: string,
    +sceneAnimationEnabled?: boolean,
    +keyboardHidesNavigationBar?: boolean,
    +barStyle?: ViewStyleProp,
    +style?: ViewStyleProp,
    +theme?: PaperTheme,
  |};

  declare export type ExtraMaterialBottomTabNavigatorProps = {|
    ...$Exact<ExtraNavigatorPropsBase>,
    ...TabRouterOptions,
    ...MaterialBottomTabNavigationConfig,
  |};

  declare export type MaterialBottomTabNavigatorProps<
    NavProp: InexactMaterialBottomTabNavigationProp<> =
      MaterialBottomTabNavigationProp<>,
  > = {|
    ...ExtraMaterialBottomTabNavigatorProps,
    ...ScreenOptionsProp<MaterialBottomTabOptions, NavProp>,
  |};

  /**
   * Material top tab options
   */

  declare export type MaterialTopTabOptions = $Shape<{|
    +title: string,
    +tabBarLabel:
      | string
      | ({| +focused: boolean, +color: string |}) => React$Node,
    +tabBarIcon: ({| +focused: boolean, +color: string |}) => React$Node,
    +tabBarAccessibilityLabel: string,
    +tabBarTestID: string,
  |}>;

  /**
   * Material top tab navigation prop
   */

  declare export type MaterialTopTabNavigationEventMap = {|
    ...EventMapCore<TabNavigationState>,
    +tabPress: {| +data: void, +canPreventDefault: true |},
    +tabLongPress: {| +data: void, +canPreventDefault: false |},
    +swipeStart: {| +data: void, +canPreventDefault: false |},
    +swipeEnd: {| +data: void, +canPreventDefault: false |},
  |};

  declare export type InexactMaterialTopTabNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = MaterialTopTabOptions,
    EventMap: EventMapBase = MaterialTopTabNavigationEventMap,
  > = InexactTabNavigationProp<
    ParamList,
    RouteName,
    Options,
    EventMap,
  >;

  declare export type MaterialTopTabNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = MaterialTopTabOptions,
    EventMap: EventMapBase = MaterialTopTabNavigationEventMap,
  > = $Exact<InexactMaterialTopTabNavigationProp<
    ParamList,
    RouteName,
    Options,
    EventMap,
  >>;

  /**
   * Miscellaneous material top tab exports
   */

  declare type MaterialTopTabPagerCommonProps = {|
    +keyboardDismissMode: 'none' | 'on-drag' | 'auto',
    +swipeEnabled: boolean,
    +swipeVelocityImpact?: number,
    +springVelocityScale?: number,
    +springConfig: $Shape<{|
      +damping: number,
      +mass: number,
      +stiffness: number,
      +restSpeedThreshold: number,
      +restDisplacementThreshold: number,
    |}>,
    +timingConfig: $Shape<{|
      +duration: number,
    |}>,
  |};

  declare export type MaterialTopTabPagerProps = {|
    ...MaterialTopTabPagerCommonProps,
    +onSwipeStart?: () => void,
    +onSwipeEnd?: () => void,
    +onIndexChange: (index: number) => void,
    +navigationState: TabNavigationState,
    +layout: {| +width: number, +height: number |},
    +removeClippedSubviews: boolean,
    +children: ({|
      +addListener: (type: 'enter', listener: number => void) => void,
      +removeListener: (type: 'enter', listener: number => void) => void,
      +position: any, // Reanimated.Node<number>
      +render: React$Node => React$Node,
      +jumpTo: string => void,
    |}) => React$Node,
    +gestureHandlerProps: PanGestureHandlerProps,
  |};

  declare export type MaterialTopTabBarIndicatorProps = {|
    +navigationState: TabNavigationState,
    +width: string,
    +style?: ViewStyleProp,
    +getTabWidth: number => number,
  |};

  declare export type MaterialTopTabBarOptions = $Shape<{|
    +scrollEnabled: boolean,
    +bounces: boolean,
    +pressColor: string,
    +pressOpacity: number,
    +getAccessible: ({| +route: Route<> |}) => boolean,
    +renderBadge: ({| +route: Route<> |}) => React$Node,
    +renderIndicator: MaterialTopTabBarIndicatorProps => React$Node,
    +tabStyle: ViewStyleProp,
    +indicatorStyle: ViewStyleProp,
    +indicatorContainerStyle: ViewStyleProp,
    +labelStyle: TextStyleProp,
    +contentContainerStyle: ViewStyleProp,
    +style: ViewStyleProp,
    +activeTintColor: string,
    +inactiveTintColor: string,
    +iconStyle: ViewStyleProp,
    +labelStyle: TextStyleProp,
    +showLabel: boolean,
    +showIcon: boolean,
    +allowFontScaling: boolean,
  |}>;

  declare export type MaterialTopTabDescriptor = Descriptor<
    MaterialBottomTabNavigationProp<>,
    MaterialBottomTabOptions,
  >;

  declare type MaterialTopTabNavigationBuilderResult = {|
    +state: TabNavigationState,
    +navigation: MaterialTopTabNavigationProp<>,
    +descriptors: {| +[key: string]: MaterialTopTabDescriptor |},
  |};

  declare export type MaterialTopTabBarProps = {|
    ...MaterialTopTabBarOptions,
    ...MaterialTopTabNavigationBuilderResult,
    +layout: {| +width: number, +height: number |},
    +position: any, // Reanimated.Node<number>
    +jumpTo: string => void,
  |};

  declare export type MaterialTopTabNavigationConfig = {|
    ...$Partial<MaterialTopTabPagerCommonProps>,
    +position?: any, // Reanimated.Value<number>
    +tabBarPosition?: 'top' | 'bottom',
    +initialLayout?: $Shape<{| +width: number, +height: number |}>,
    +lazy?: boolean,
    +lazyPreloadDistance?: number,
    +removeClippedSubviews?: boolean,
    +sceneContainerStyle?: ViewStyleProp,
    +style?: ViewStyleProp,
    +gestureHandlerProps?: PanGestureHandlerProps,
    +pager?: MaterialTopTabPagerProps => React$Node,
    +lazyPlaceholder?: ({| +route: Route<> |}) => React$Node,
    +tabBar?: MaterialTopTabBarProps => React$Node,
    +tabBarOptions?: MaterialTopTabBarOptions,
  |};

  declare export type ExtraMaterialTopTabNavigatorProps = {|
    ...$Exact<ExtraNavigatorPropsBase>,
    ...TabRouterOptions,
    ...MaterialTopTabNavigationConfig,
  |};

  declare export type MaterialTopTabNavigatorProps<
    NavProp: InexactMaterialTopTabNavigationProp<> =
      MaterialTopTabNavigationProp<>,
  > = {|
    ...ExtraMaterialTopTabNavigatorProps,
    ...ScreenOptionsProp<MaterialTopTabOptions, NavProp>,
  |};

  /**
   * Drawer options
   */

  declare export type DrawerOptions = $Shape<{|
    title: string,
    drawerLabel:
      | string
      | ({| +color: string, +focused: boolean |}) => React$Node,
    drawerIcon: ({|
      +color: string,
      +size: number,
      +focused: boolean,
    |}) => React$Node,
    gestureEnabled: boolean,
    swipeEnabled: boolean,
    unmountOnBlur: boolean,
  |}>;

  /**
   * Drawer navigation prop
   */

  declare export type DrawerNavigationEventMap = {|
    ...EventMapCore<DrawerNavigationState>,
    +drawerOpen: {| +data: void, +canPreventDefault: false |},
    +drawerClose: {| +data: void, +canPreventDefault: false |},
  |};

  declare export type InexactDrawerNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = DrawerOptions,
    EventMap: EventMapBase = DrawerNavigationEventMap,
  > = {
    ...$Exact<NavigationProp<
      ParamList,
      RouteName,
      DrawerNavigationState,
      Options,
      EventMap,
    >>,
    +jumpTo: SimpleNavigate<ParamList>,
    +openDrawer: () => void,
    +closeDrawer: () => void,
    +toggleDrawer: () => void,
    ...
  };

  declare export type DrawerNavigationProp<
    ParamList: ParamListBase = ParamListBase,
    RouteName: $Keys<ParamList> = $Keys<ParamList>,
    Options: {...} = DrawerOptions,
    EventMap: EventMapBase = DrawerNavigationEventMap,
  > = $Exact<InexactDrawerNavigationProp<
    ParamList,
    RouteName,
    Options,
    EventMap,
  >>;

  /**
   * Miscellaneous drawer exports
   */

  declare export type DrawerDescriptor = Descriptor<
    DrawerNavigationProp<>,
    DrawerOptions,
  >;

  declare export type DrawerItemListBaseOptions = $Shape<{|
    +activeTintColor: string,
    +activeBackgroundColor: string,
    +inactiveTintColor: string,
    +inactiveBackgroundColor: string,
    +itemStyle: ViewStyleProp,
    +labelStyle: TextStyleProp,
  |}>;

  declare export type DrawerContentOptions = $Shape<{|
    ...DrawerItemListBaseOptions,
    +contentContainerStyle: ViewStyleProp,
    +style: ViewStyleProp,
  |}>;

  declare type DrawerNavigationBuilderResult = {|
    +state: DrawerNavigationState,
    +navigation: DrawerNavigationProp<>,
    +descriptors: {| +[key: string]: DrawerDescriptor |},
  |};

  declare export type DrawerContentProps = {|
    ...DrawerContentOptions,
    ...DrawerNavigationBuilderResult,
    +progress: any, // Reanimated.Node<number>
  |};

  declare export type DrawerNavigationConfig = {|
    +drawerPosition?: 'left' | 'right',
    +drawerType?: 'front' | 'back' | 'slide' | 'permanent',
    +edgeWidth?: number,
    +hideStatusBar?: boolean,
    +keyboardDismissMode?: 'on-drag' | 'none',
    +minSwipeDistance?: number,
    +overlayColor?: string,
    +statusBarAnimation?: 'slide' | 'none' | 'fade',
    +gestureHandlerProps?: PanGestureHandlerProps,
    +lazy?: boolean,
    +drawerContent?: DrawerContentProps => React$Node,
    +drawerContentOptions?: DrawerContentOptions,
    +sceneContainerStyle?: ViewStyleProp,
    +drawerStyle?: ViewStyleProp,
  |};

  declare export type ExtraDrawerNavigatorProps = {|
    ...$Exact<ExtraNavigatorPropsBase>,
    ...DrawerRouterOptions,
    ...DrawerNavigationConfig,
  |};

  declare export type DrawerNavigatorProps<
    NavProp: InexactDrawerNavigationProp<> = DrawerNavigationProp<>,
  > = {|
    ...ExtraDrawerNavigatorProps,
    ...ScreenOptionsProp<DrawerOptions, NavProp>,
  |};

  /**
   * BaseNavigationContainer
   */

  declare export type BaseNavigationContainerProps = {|
    +children: React$Node,
    +initialState?: PossiblyStaleNavigationState,
    +onStateChange?: (state: ?PossiblyStaleNavigationState) => void,
    +independent?: boolean,
  |};

  declare export type ContainerEventMap = {|
    ...GlobalEventMap<PossiblyStaleNavigationState>,
    +options: {|
      +data: {| +options: { +[key: string]: mixed, ... } |},
      +canPreventDefault: false,
    |},
    +__unsafe_action__: {|
      +data: {|
        +action: GenericNavigationAction,
        +noop: boolean,
      |},
      +canPreventDefault: false,
    |},
  |};

  declare export type BaseNavigationContainerInterface = {|
    ...$Exact<NavigationHelpers<
      ParamListBase,
      PossiblyStaleNavigationState,
      ContainerEventMap,
    >>,
    +setParams: (params: ScreenParams) => void,
    +resetRoot: (state?: ?PossiblyStaleNavigationState) => void,
    +getRootState: () => PossiblyStaleNavigationState,
  |};

  /**
   * State utils
   */

  declare export type GetStateFromPath = (
    path: string,
    options?: LinkingConfig,
  ) => PossiblyStaleNavigationState;

  declare export type GetPathFromState = (
    state?: ?PossiblyStaleNavigationState,
    options?: LinkingConfig,
  ) => string;

  declare export type GetFocusedRouteNameFromRoute =
    PossiblyStaleRoute<string> => ?string;

  /**
   * Linking
   */

  declare export type ScreenLinkingConfig = {|
    +path?: string,
    +exact?: boolean,
    +parse?: {| +[param: string]: string => mixed |},
    +stringify?: {| +[param: string]: mixed => string |},
    +screens?: ScreenLinkingConfigMap,
    +initialRouteName?: string,
  |};

  declare export type ScreenLinkingConfigMap = {|
    +[routeName: string]: string | ScreenLinkingConfig,
  |};

  declare export type LinkingConfig = {|
    +initialRouteName?: string,
    +screens: ScreenLinkingConfigMap,
  |};

  declare export type LinkingOptions = {|
    +enabled?: boolean,
    +prefixes: $ReadOnlyArray<string>,
    +config?: LinkingConfig,
    +getStateFromPath?: GetStateFromPath,
    +getPathFromState?: GetPathFromState,
  |};

  /**
   * NavigationContainer
   */

  declare export type Theme = {|
    +dark: boolean,
    +colors: {|
      +primary: string,
      +background: string,
      +card: string,
      +text: string,
      +border: string,
    |},
  |};

  declare export type NavigationContainerType = React$AbstractComponent<
    {|
      ...BaseNavigationContainerProps,
      +theme?: Theme,
      +linking?: LinkingOptions,
      +fallback?: React$Node,
      +onReady?: () => mixed,
    |},
    BaseNavigationContainerInterface,
  >;

  //---------------------------------------------------------------------------
  // SECTION 2: EXPORTED MODULE
  // This section defines the module exports and contains exported types that
  // are not present in any other React Navigation libdef.
  //---------------------------------------------------------------------------

  /**
   * createBottomTabNavigator
   */

  declare export var createBottomTabNavigator: CreateNavigator<
    TabNavigationState,
    BottomTabOptions,
    BottomTabNavigationEventMap,
    ExtraBottomTabNavigatorProps,
  >;

  /**
   * BottomTabBar
   */

  declare export var BottomTabBar: React$ComponentType<BottomTabBarProps>;

  /**
   * BottomTabView
   */

  declare export type BottomTabViewProps = {|
    ...BottomTabNavigationConfig,
    ...BottomTabNavigationBuilderResult,
  |};
  declare export var BottomTabView: React$ComponentType<BottomTabViewProps>;

}

// Since now there is no possibility to import types from other libraries I had to use such a crutch
declare module 'react-native-gesture-handler/@react-native' {
  // https://github.com/facebook/react-native/blob/1151c096dab17e5d9a6ac05b61aacecd4305f3db/flow/Stringish.js#L14
  declare export type Stringish = string;

  // https://github.com/facebook/react-native/blob/1aeac1c62528004d994200664368dc85fba1795d/Libraries/Components/View/ViewAccessibility.js#L14
  declare export type AccessibilityRole = string;

  // https://github.com/facebook/react-native/blob/1aeac1c62528004d994200664368dc85fba1795d/Libraries/Components/View/ViewAccessibility.js#L44
  declare export type AccessibilityStates = Array<string>;

  // https://github.com/facebook/react-native/blob/f68b0c9d79fc23eb1f4955b746f52123a773e521/Libraries/StyleSheet/EdgeInsetsPropType.js#L13-L18
  declare export type EdgeInsetsProp = $ReadOnly<{|
    top?: ?number,
    left?: ?number,
    bottom?: ?number,
    right?: ?number,
  |}>;

  declare export type TouchableProps = {|
    accessible?: ?boolean,
    accessibilityLabel?: Stringish,
    accessibilityHint?: Stringish,
    accessibilityIgnoresInvertColors?: boolean,
    accessibilityRole?: AccessibilityRole,
    accessibilityStates?: AccessibilityStates,
    children?: React$Node,
    delayLongPress?: number,
    delayPressIn?: number,
    delayPressOut?: number,
    disabled?: boolean,
    hitSlop?: EdgeInsetsProp,
    nativeID?: string,
    onLayout?: (event: LayoutEvent) => mixed,
    onLongPress?: (event: PressEvent) => mixed,
    onPress?: (event: PressEvent) => mixed,
    onPressIn?: (event: PressEvent) => mixed,
    onPressOut?: (event: PressEvent) => mixed,

    rejectResponderTermination?: boolean,
    testID?: string,

    // https://kmagiera.github.io/react-native-gesture-handler/docs/component-touchables.html
    // pressRetentionOffset?: EdgeInsetsProp,

    // https://github.com/kmagiera/react-native-gesture-handler/blob/c801818299e3c1119f3fe81977d2885610678684/touchables/GenericTouchable.js#L20-L21
    //onBlur?: ?(e: BlurEvent) => void,
    //onFocus?: ?(e: FocusEvent) => void,
  |};

  declare export type AnimatedValue = any;
  declare export type ViewStyle = any;
  declare export type LayoutEvent = any;
  declare export type PressEvent = any;
}

declare module 'react-native-gesture-handler/Directions' {
  // https://github.com/kmagiera/react-native-gesture-handler/blob/c5c1cfbfade75beea3746ebf13814f505aa1ec01/android/lib/src/main/java/com/swmansion/gesturehandler/GestureHandler.java#L26-L29
  declare export type DirectionRight = 1;
  declare export type DirectionLeft = 2;
  declare export type DirectionUp = 4;
  declare export type DirectionDown = 8;

  declare export default {|
    RIGHT: DirectionRight,
    LEFT: DirectionLeft,
    UP: DirectionUp,
    DOWN: DirectionDown,
  |};
}
declare module 'react-native-gesture-handler/State' {
  // https://github.com/kmagiera/react-native-gesture-handler/blob/c5c1cfbfade75beea3746ebf13814f505aa1ec01/android/lib/src/main/java/com/swmansion/gesturehandler/GestureHandler.java#L10-L15
  declare export type StateUndetermined = 0;
  declare export type StateFailed = 1;
  declare export type StateBegan = 2;
  declare export type StateCancelled = 3;
  declare export type StateActive = 4;
  declare export type StateEnd = 5;
  declare export type State =
    | StateUndetermined
    | StateFailed
    | StateBegan
    | StateCancelled
    | StateActive
    | StateEnd;
  declare export default {|
    UNDETERMINED: StateUndetermined,
    FAILED: StateFailed,
    BEGAN: StateBegan,
    CANCELLED: StateCancelled,
    ACTIVE: StateActive,
    END: StateEnd,
  |};
}

declare module 'react-native-gesture-handler/DrawerLayout' {
  import type {
    AnimatedValue,
    ViewStyle,
  } from 'react-native-gesture-handler/@react-native';
  declare export type StatusBarAnimation = 'slide' | 'none' | 'fade';
  declare export type DrawerLockMode =
    | 'unlocked'
    | 'locked-closed'
    | 'locked-open';
  declare export type DrawerPosition = 'left' | 'right';

  declare export type DrawerState = 'Idle' | 'Dragging' | 'Settling';

  declare export type DrawerType = 'front' | 'back' | 'slide';

  declare export type DrawerKeyboardDismissMode = 'none' | 'on-drag';

  declare export type DrawerLayoutProps = $ReadOnly<{
    renderNavigationView: (progressAnimatedValue: AnimatedValue) => React$Node,

    contentContainerStyle?: ViewStyle,
    drawerBackgroundColor?: string,
    drawerContainerStyle?: ViewStyle,
    drawerLockMode?: DrawerLockMode,
    drawerPosition?: DrawerPosition,
    drawerType?: DrawerType,
    drawerWidth?: number,
    edgeWidth?: number,
    hideStatusBar?: boolean,
    keyboardDismissMode?: DrawerKeyboardDismissMode,
    minSwipeDistance?: number,
    onDrawerClose?: () => mixed,
    onDrawerOpen?: () => mixed,
    onDrawerStateChanged?: (
      newState: DrawerState,
      drawerWillShow: boolean
    ) => mixed,
    onGestureRef?: (ref: any) => void,
    overlayColor?: string,
    statusBarAnimation?: StatusBarAnimation,
    useNativeAnimations?: boolean,
  }>;

  declare export type DrawerMovementOptionType = {|
    velocity?: number,
  |};

  declare export type DrawerLayoutState = {|
    dragX: AnimatedValue,
    touchX: AnimatedValue,
    drawerTranslation: AnimatedValue,
    containerWidth: number,
  |};

  declare export default class DrawerLayout extends React$Component<
    DrawerLayoutProps,
    DrawerLayoutState
  > {
    openDrawer(options?: DrawerMovementOptionType): void;
    closeDrawer(options?: DrawerMovementOptionType): void;
    static positions: {|
      Left: 'left',
      Right: 'right',
    |};
  }
}
declare module 'react-native-gesture-handler/Swipeable' {
  import type {
    AnimatedValue,
    ViewStyle,
  } from 'react-native-gesture-handler/@react-native';
  declare export type SwipeableState = {|
    dragX: AnimatedValue,
    rowTranslation: AnimatedValue,
    rowState: number,
    leftWidth: ?number,
    rightOffset: ?number,
    rowWidth: ?number,
  |};

  declare export type SwipeableProps = $ReadOnly<{
    animationOptions?: {},
    childrenContainerStyle?: ViewStyle,
    containerStyle?: ViewStyle,
    friction?: number,
    leftThreshold?: number,
    onSwipeableClose?: () => mixed,
    onSwipeableLeftOpen?: () => mixed,
    onSwipeableLeftWillOpen?: () => mixed,
    onSwipeableOpen?: () => mixed,
    onSwipeableRightOpen?: () => mixed,
    onSwipeableRightWillOpen?: () => mixed,
    onSwipeableWillClose?: () => mixed,
    onSwipeableWillOpen?: () => mixed,
    overshootFriction?: number,
    overshootLeft?: boolean,
    overshootRight?: boolean,
    renderLeftActions?: (
      progressAnimatedValue: AnimatedValue,
      dragAnimatedValue: AnimatedValue
    ) => React$Node,
    renderRightActions?: (
      progressAnimatedValue: AnimatedValue,
      dragAnimatedValue: AnimatedValue
    ) => React$Node,
    rightThreshold?: number,
    useNativeAnimations?: boolean,
  }>;

  declare export default class Swipeable extends React$Component<
    SwipeableProps,
    SwipeableState
  > {
    close(): void;
    openLeft(): void;
    openRight(): void;
  }
}

declare module 'react-native-gesture-handler/gestureHandlerRootHOC' {
  import type { ViewStyle } from 'react-native-gesture-handler/@react-native';

  declare export default {
    <Config: {}>(
      Component: React$ComponentType<Config>,
      containerStyles: ?ViewStyle
    ): React$ComponentType<Config>,
  };
}

declare module 'react-native-gesture-handler/touchables/TouchableNativeFeedback' {
  import type { TouchableProps } from 'react-native-gesture-handler/@react-native';

  declare type TouchableNativeFeedbackProps = $ReadOnly<{
    ...TouchableProps,
  }>;

  declare export default class TouchableNativeFeedback extends React$Component<TouchableNativeFeedbackProps> {
    static SelectableBackground(): {| type: 'SelectableBackground' |};
    static SelectableBackgroundBorderless(): {|
      type: 'SelectableBackgroundBorderless',
    |};
    static Ripple(
      color: string,
      borderless: boolean
    ): {|
      type: 'Ripple',
      color: string,
      borderless: boolean,
    |};
    static canUseNativeForeground(): boolean;
  }
}
declare module 'react-native-gesture-handler/touchables/TouchableWithoutFeedback' {
  import type { TouchableProps } from 'react-native-gesture-handler/@react-native';

  declare type TouchableWithoutFeedbackProps = $ReadOnly<{
    ...TouchableProps,
  }>;

  declare export default class TouchableWithoutFeedback extends React$Component<TouchableWithoutFeedbackProps> {}
}
declare module 'react-native-gesture-handler/touchables/TouchableOpacity' {
  import type {
    TouchableProps,
    ViewStyle,
  } from 'react-native-gesture-handler/@react-native';

  declare type TouchableOpacityProps = $ReadOnly<{
    ...TouchableProps,
    style?: ViewStyle,
    activeOpacity?: number,
  }>;

  declare export default class TouchableOpacity extends React$Component<TouchableOpacityProps> {}
}
declare module 'react-native-gesture-handler/touchables/TouchableHighlight' {
  import type {
    TouchableProps,
    ViewStyle,
  } from 'react-native-gesture-handler/@react-native';

  declare type TouchableHighlightProps = $ReadOnly<{
    ...TouchableProps,
    activeOpacity?: number,
    underlayColor?: string,
    style?: ViewStyle,
    onShowUnderlay?: () => mixed,
    onHideUnderlay?: () => mixed,
  }>;

  declare export default class TouchableHighlight extends React$Component<TouchableHighlightProps> {}
}
declare module 'react-native-gesture-handler/touchables' {
  declare export {
    default as TouchableNativeFeedback,
  } from 'react-native-gesture-handler/touchables/TouchableNativeFeedback';
  declare export {
    default as TouchableWithoutFeedback,
  } from 'react-native-gesture-handler/touchables/TouchableWithoutFeedback';
  declare export {
    default as TouchableOpacity,
  } from 'react-native-gesture-handler/touchables/TouchableOpacity';
  declare export {
    default as TouchableHighlight,
  } from 'react-native-gesture-handler/touchables/TouchableHighlight';
}

declare module 'react-native-gesture-handler/GestureHandler' {
  import type { State } from 'react-native-gesture-handler/State';
  import type { ViewStyle } from 'react-native-gesture-handler/@react-native';

  /////////////////////////////////////////////////////////////////////////////
  // Utils for *GestureHandler

  declare type $SyntheticEvent<T: {}> = {
    +nativeEvent: $ReadOnly<$Exact<T>>,
  };

  declare type $Event<T: {}> = $SyntheticEvent<{
    handlerTag: number,
    numberOfPointers: number,
    state: State,
    oldState: State,
    ...$Exact<T>,
  }>;

  declare type $EventHandlers<ExtraProps: {}> = {|
    onGestureEvent?: ($Event<ExtraProps>) => mixed,
    onHandlerStateChange?: ($Event<ExtraProps>) => mixed,
    onBegan?: ($Event<ExtraProps>) => mixed,
    onFailed?: ($Event<ExtraProps>) => mixed,
    onCancelled?: ($Event<ExtraProps>) => mixed,
    onActivated?: ($Event<ExtraProps>) => mixed,
    onEnded?: ($Event<ExtraProps>) => mixed,
  |};

  declare type $GestureHandlerProps<
    AdditionalProps: {},
    ExtraEventsProps: {}
  > = $ReadOnly<{|
    ...$Exact<AdditionalProps>,
    ...$EventHandlers<ExtraEventsProps>,
    id?: string,
    enabled?: boolean,
    waitFor?: React$Ref<any> | Array<React$Ref<any>>,
    simultaneousHandlers?: React$Ref<any> | Array<React$Ref<any>>,
    shouldCancelWhenOutside?: boolean,
    minPointers?: number,
    hitSlop?:
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
        |},
  |}>;

  /////////////////////////////////////////////////////////////////////////////
  // NativeView
  declare export type NativeViewGestureHandlerProps = $GestureHandlerProps<
    {
      shouldActivateOnStart?: boolean,
      disallowInterruption?: boolean,
    },
    {
      pointerInside: boolean,
    }
  >;

  declare export class NativeViewGestureHandler extends React$Component<NativeViewGestureHandlerProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // Tap

  declare export type TapGestureHandlerProps = $GestureHandlerProps<
    {
      maxDurationMs?: number,
      maxDelayMs?: number,
      numberOfTaps?: number,
      maxDeltaX?: number,
      maxDeltaY?: number,
      maxDist?: number,
      minPointers?: number,
    },
    {
      x: number,
      y: number,
      absoluteX: number,
      absoluteY: number,
    }
  >;

  declare export class TapGestureHandler extends React$Component<TapGestureHandlerProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // Fling

  declare export type FlingGestureHandlerProps = $GestureHandlerProps<
    {
      numberOfPointers?: number,
      direction?: number,
    },
    {
      x: number,
      y: number,
      absoluteX: number,
      absoluteY: number,
    }
  >;

  declare export class FlingGestureHandler extends React$Component<FlingGestureHandlerProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // ForceTouch

  declare export type ForceTouchGestureHandlerProps = $GestureHandlerProps<
    {
      minForce?: number,
      maxForce?: number,
      feedbackOnActivation?: boolean,
    },
    {
      force: number,
    }
  >;

  declare export class ForceTouchGestureHandler extends React$Component<ForceTouchGestureHandlerProps> {
    static forceTouchAvailable(): boolean;
  }

  /////////////////////////////////////////////////////////////////////////////
  // LongPress

  declare export type LongPressGestureHandlerProps = $GestureHandlerProps<
    {
      minDurationMs?: number,
      maxDist?: number,
    },
    {
      x: number,
      y: number,
      absoluteX: number,
      absoluteY: number,
    }
  >;

  declare export class LongPressGestureHandler extends React$Component<LongPressGestureHandlerProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // PanGesture

  declare export type PanGestureHandlerProps = $GestureHandlerProps<
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
    }
  >;

  declare export class PanGestureHandler extends React$Component<PanGestureHandlerProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // Pinch

  declare export type PinchGestureHandlerProps = $GestureHandlerProps<
    {},
    {
      scale: number,
      focalX: number,
      focalY: number,
      velocity: number,
    }
  >;

  declare export class PinchGestureHandler extends React$Component<PinchGestureHandlerProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // Rotation

  declare export type RotationGestureHandlerProps = $GestureHandlerProps<
    {},
    {
      rotation: number,
      anchorX: number,
      anchorY: number,
      velocity: number,
    }
  >;

  declare export class RotationGestureHandler extends React$Component<RotationGestureHandlerProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // RawButton
  declare export type RawButtonProps = {
    ...NativeViewGestureHandlerProps,
    testID?: string,
  };

  declare export class RawButton extends React$Component<RawButtonProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // BaseButton
  declare export type BaseButtonProps = {
    ...$Exact<RawButtonProps>,
    style?: ViewStyle,
    onPress?: (active: boolean) => mixed,
    onActiveStateChange?: (active: boolean) => mixed,
    // Android only
    rippleColor?: string,
    // iOS only
    exclusive?: boolean,
  };

  declare export class BaseButton extends React$Component<BaseButtonProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // RectButton
  declare export type RectButtonProps = {
    ...$Exact<BaseButtonProps>,
    underlayColor?: string,
    // iOS only
    activeOpacity?: number,
  };
  declare export class RectButton extends React$Component<RectButtonProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // BorderlessButton
  declare export type BorderlessButtonProps = {
    ...$Exact<BaseButtonProps>,
    borderless?: boolean,
    // iOS only
    activeOpacity?: number,
  };
  declare export class BorderlessButton extends React$Component<BorderlessButtonProps> {}

  /////////////////////////////////////////////////////////////////////////////
  // Other

  declare export {
    default as gestureHandlerRootHOC,
  } from 'react-native-gesture-handler/gestureHandlerRootHOC';
  declare export { default as State } from 'react-native-gesture-handler/State';
  declare export {
    default as Directions,
  } from 'react-native-gesture-handler/Directions';

  declare export var FlatList: React$ComponentType<any>;
  declare export var ScrollView: React$ComponentType<any>;
  declare export var Switch: React$ComponentType<any>;
  declare export var TextInput: React$ComponentType<any>;
  declare export var ToolbarAndroid: React$ComponentType<any>;
  declare export var DrawerLayoutAndroid: React$ComponentType<any>;
  declare export var PureNativeButton: React$ComponentType<any>;

  declare export function createNativeWrapper<Config: {}>(
    Com: React$ComponentType<Config>,
    config?: {}
  ): React$ComponentType<{
    ...NativeViewGestureHandlerProps,
    ...$Exact<Config>,
  }>;
}

declare module 'react-native-gesture-handler' {
  declare export {
    default as Swipeable,
  } from 'react-native-gesture-handler/Swipeable';
  declare export {
    default as DrawerLayout,
  } from 'react-native-gesture-handler/DrawerLayout';
  declare export * from 'react-native-gesture-handler/GestureHandler'
  declare export * from 'react-native-gesture-handler/touchables'
}

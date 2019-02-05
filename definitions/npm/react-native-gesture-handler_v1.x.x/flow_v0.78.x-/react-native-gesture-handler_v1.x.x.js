declare module 'react-native-gesture-handler' {
  // Mocked React Native

  declare type StyleObj =
    | null
    | void
    | number
    | false
    | ''
    | $ReadOnlyArray<StyleObj>
    | { [name: string]: any };
  declare type ViewStyleProp = StyleObj;
  declare type TextStyleProp = StyleObj;
  declare type AnimatedViewStyleProp = StyleObj;
  declare type AnimatedTextStyleProp = StyleObj;
  declare type StyleProp<T> = StyleObj;
  declare type AnimatedValue = Object;
  declare type DrawerLayoutAndroidProperties = any;
  declare type FlatListProperties = any;
  declare type ScrollViewProperties = any;
  declare type SliderProperties = any;
  declare type StatusBarAnimation = any;
  declare type SwitchProperties = any;
  declare type TextInputProperties = any;
  declare type ToolbarAndroidProperties = any;
  declare type TouchableHighlightProperties = any;
  declare type TouchableNativeFeedbackProperties = any;
  declare type TouchableOpacityProperties = any;
  declare type TouchableWithoutFeedbackProperties = any;
  declare type ViewPagerAndroidProperties = any;
  declare type ViewStyle = any;
  declare type WebViewProperties = any;

  // React Native Gesture Handler

  declare export var Directions: {
    RIGHT: 1,
    LEFT: 2,
    UP: 4,
    DOWN: 8,
  };

  declare export type Direction = $Values<typeof Directions>;

  declare export var State: {
    UNDETERMINED: 0,
    FAILED: 1,
    BEGAN: 2,
    CANCELLED: 3,
    ACTIVE: 4,
    END: 5,
  };

  declare export type StateValue = $Values<typeof State>;

  declare export interface GestureHandlerGestureEventNativeEvent {
    handlerTag: number;
    numberOfPointers: number;
    state: StateValue;
  }

  declare export interface GestureHandlerStateChangeNativeEvent {
    handlerTag: number;
    numberOfPointers: number;
    state: StateValue;
    oldState: StateValue;
  }

  declare export interface GestureHandlerStateChangeEvent {
    nativeEvent: GestureHandlerStateChangeNativeEvent;
  }

  declare export interface GestureHandlerGestureEvent {
    nativeEvent: GestureHandlerGestureEventNativeEvent;
  }

  declare interface NativeViewGestureHandlerEventExtra {
    pointerInside?: boolean;
  }

  declare export type NativeViewGestureHandlerStateChangeEvent = {
    nativeEvent: GestureHandlerStateChangeNativeEvent & NativeViewGestureHandlerEventExtra,
  } & GestureHandlerStateChangeEvent;

  declare export type NativeViewGestureHandlerGestureEvent = {
    nativeEvent: GestureHandlerGestureEventNativeEvent & NativeViewGestureHandlerEventExtra,
  } & GestureHandlerGestureEvent;

  declare interface TapGestureHandlerEventExtra {
    x: number;
    y: number;
    absoluteX: number;
    absoluteY: number;
  }

  declare interface ForceTouchGestureHandlerEventExtra {
    x: number;
    y: number;
    absoluteX: number;
    absoluteY: number;
    force: number;
  }

  declare export type TapGestureHandlerStateChangeEvent = {
    nativeEvent: GestureHandlerStateChangeNativeEvent & TapGestureHandlerEventExtra,
  } & GestureHandlerStateChangeEvent;

  declare export type TapGestureHandlerGestureEvent = {
    nativeEvent: GestureHandlerGestureEventNativeEvent & TapGestureHandlerEventExtra,
  } & GestureHandlerGestureEvent;

  declare export type ForceTouchGestureHandlerGestureEvent = {
    nativeEvent: GestureHandlerGestureEventNativeEvent & ForceTouchGestureHandlerEventExtra,
  } & GestureHandlerGestureEvent;

  declare export type LongPressGestureHandlerStateChangeEvent = {
    nativeEvent: GestureHandlerStateChangeNativeEvent & LongPressGestureHandlerEventExtra,
  } & GestureHandlerStateChangeEvent;

  declare export type ForceTouchGestureHandlerStateChangeEvent = {
    nativeEvent: GestureHandlerStateChangeNativeEvent & ForceTouchGestureHandlerEventExtra,
  } & GestureHandlerStateChangeEvent;

  declare interface LongPressGestureHandlerEventExtra {
    x: number;
    y: number;
    absoluteX: number;
    absoluteY: number;
  }

  declare interface PanGestureHandlerEventExtra {
    x: number;
    y: number;
    absoluteX: number;
    absoluteY: number;
    translationX: number;
    translationY: number;
    velocityX: number;
    velocityY: number;
  }

  declare export type PanGestureHandlerStateChangeEvent = {
    nativeEvent: GestureHandlerStateChangeNativeEvent & PanGestureHandlerEventExtra,
  } & GestureHandlerStateChangeEvent;

  declare export type PanGestureHandlerGestureEvent = {
    nativeEvent: GestureHandlerGestureEventNativeEvent & PanGestureHandlerEventExtra,
  } & GestureHandlerGestureEvent;

  declare interface PinchGestureHandlerEventExtra {
    scale: number;
    focalX: number;
    focalY: number;
    velocity: number;
  }

  declare export type PinchGestureHandlerStateChangeEvent = {
    nativeEvent: GestureHandlerStateChangeNativeEvent & PinchGestureHandlerEventExtra,
  } & GestureHandlerStateChangeEvent;

  declare export type PinchGestureHandlerGestureEvent = {
    nativeEvent: GestureHandlerGestureEventNativeEvent & PinchGestureHandlerEventExtra,
  } & GestureHandlerGestureEvent;

  declare interface RotationGestureHandlerEventExtra {
    rotation: number;
    anchorX: number;
    anchorY: number;
    velocity: number;
  }

  declare export type RotationGestureHandlerStateChangeEvent = {
    nativeEvent: GestureHandlerStateChangeNativeEvent & RotationGestureHandlerEventExtra,
  } & GestureHandlerStateChangeEvent;

  declare export type RotationGestureHandlerGestureEvent = {
    nativeEvent: GestureHandlerGestureEventNativeEvent & RotationGestureHandlerEventExtra,
  } & GestureHandlerGestureEvent;

  declare export type FlingGestureHandlerStateChangeEvent = {
    nativeEvent: GestureHandlerStateChangeNativeEvent & FlingGestureHandlerEventExtra,
  } & GestureHandlerStateChangeEvent;

  declare export type FlingGestureHandlerGestureEvent = {
    nativeEvent: GestureHandlerGestureEventNativeEvent,
  } & GestureHandlerGestureEvent;

  declare interface FlingGestureHandlerEventExtra {
    x: number;
    y: number;
    absoluteX: number;
    absoluteY: number;
  }

  declare export interface GestureHandlerProperties {
    id?: string;
    enabled?: boolean;
    waitFor?: React$Ref<any> | React$Ref<any>[];
    simultaneousHandlers?: React$Ref<any> | React$Ref<any>[];
    shouldCancelWhenOutside?: boolean;
    hitSlop?:
      | number
      | {
          left?: number,
          right?: number,
          top?: number,
          bottom?: number,
          vertical?: number,
          horizontal?: number,
        };
  }

  declare export type NativeViewGestureHandlerProperties = {
    shouldActivateOnStart?: boolean,
    disallowInterruption?: boolean,
    onGestureEvent?: (event: NativeViewGestureHandlerGestureEvent) => void,
    onHandlerStateChange?: (event: NativeViewGestureHandlerStateChangeEvent) => void,
  } & GestureHandlerProperties;

  declare export type TapGestureHandlerProperties = {
    minPointers?: number,
    maxDurationMs?: number,
    maxDelayMs?: number,
    numberOfTaps?: number,
    maxDeltaX?: number,
    maxDeltaY?: number,
    maxDist?: number,
    onGestureEvent?: (event: TapGestureHandlerGestureEvent) => void,
    onHandlerStateChange?: (event: TapGestureHandlerStateChangeEvent) => void,
  } & GestureHandlerProperties;

  declare export type ForceTouchGestureHandlerProperties = {
    minForce?: number,
    maxForce?: number,
    feedbackOnActivation?: boolean,
    onGestureEvent?: (event: ForceTouchGestureHandlerGestureEvent) => void,
    onHandlerStateChange?: (event: ForceTouchGestureHandlerStateChangeEvent) => void,
  } & GestureHandlerProperties;

  declare export type LongPressGestureHandlerProperties = {
    minDurationMs?: number,
    maxDist?: number,
    onGestureEvent?: (event: GestureHandlerGestureEvent) => void,
    onHandlerStateChange?: (event: LongPressGestureHandlerStateChangeEvent) => void,
  } & GestureHandlerProperties;

  declare export type PanGestureHandlerProperties = {
    // @deprecated use activeOffsetX
    minDeltaX?: number,

    // @deprecated use activeOffsetY
    minDeltaY?: number,

    // @deprecated use failOffsetX
    maxDeltaX?: number,

    // @deprecated use failOffsetY
    maxDeltaY?: number,

    // @deprecated use activeOffsetX
    minOffsetX?: number,

    // @deprecated use failOffsetY
    minOffsetY?: number,
    activeOffsetY?: number | number[],
    activeOffsetX?: number | number[],
    failOffsetY?: number | number[],
    failOffsetX?: number | number[],
    minDist?: number,
    minVelocity?: number,
    minVelocityX?: number,
    minVelocityY?: number,
    minPointers?: number,
    maxPointers?: number,
    avgTouches?: boolean,
    onGestureEvent?: (event: PanGestureHandlerGestureEvent) => void,
    onHandlerStateChange?: (event: PanGestureHandlerStateChangeEvent) => void,
  } & GestureHandlerProperties;

  declare export type PinchGestureHandlerProperties = {
    onGestureEvent?: (event: PinchGestureHandlerGestureEvent) => void,
    onHandlerStateChange?: (event: PinchGestureHandlerStateChangeEvent) => void,
  } & GestureHandlerProperties;

  declare export type RotationGestureHandlerProperties = {
    onGestureEvent?: (event: RotationGestureHandlerGestureEvent) => void,
    onHandlerStateChange?: (event: RotationGestureHandlerStateChangeEvent) => void,
  } & GestureHandlerProperties;

  declare export type FlingGestureHandlerProperties = {
    direction?: number,
    numberOfPointers?: number,
    onGestureEvent?: (event: FlingGestureHandlerGestureEvent) => void,
    onHandlerStateChange?: (event: FlingGestureHandlerStateChangeEvent) => void,
  } & GestureHandlerProperties;

  declare export class NativeViewGestureHandler mixins React$Component<NativeViewGestureHandlerProperties> {}
  declare export class TapGestureHandler mixins React$Component<TapGestureHandlerProperties> {}
  declare export class LongPressGestureHandler mixins React$Component<LongPressGestureHandlerProperties> {}
  declare export class PanGestureHandler mixins React$Component<PanGestureHandlerProperties> {}
  declare export class PinchGestureHandler mixins React$Component<PinchGestureHandlerProperties> {}
  declare export class RotationGestureHandler mixins React$Component<RotationGestureHandlerProperties> {}
  declare export class FlingGestureHandler mixins React$Component<FlingGestureHandlerProperties> {}
  declare export class ForceTouchGestureHandler mixins React$Component<ForceTouchGestureHandlerProperties> {}

  declare export type RawButtonProperties = {
    testID?: string,
  } & NativeViewGestureHandlerProperties;

  declare export type BaseButtonProperties = {
    onPress?: (pointerInside: boolean) => void,
    onActiveStateChange?: (active: boolean) => void,
    style?: StyleObj,
  } & RawButtonProperties;

  declare export type RectButtonProperties = {
    underlayColor?: string,
    activeOpacity?: number,
  } & BaseButtonProperties;

  declare export type BorderlessButtonProperties = {
    borderless?: boolean,
  } & BaseButtonProperties;

  declare export class RawButton mixins React$Component<RawButtonProperties> {}
  declare export class BaseButton mixins React$Component<BaseButtonProperties> {}
  declare export class RectButton mixins React$Component<RectButtonProperties> {}
  declare export class BorderlessButton mixins React$Component<BorderlessButtonProperties> {}
  declare export class TouchableHighlight mixins React$Component<TouchableHighlightProperties> {}
  declare export class TouchableNativeFeedback mixins React$Component<TouchableNativeFeedbackProperties> {}
  declare export class TouchableOpacity mixins React$Component<TouchableOpacityProperties> {}
  declare export class TouchableWithoutFeedback mixins React$Component<TouchableWithoutFeedbackProperties> {}
  declare export class ScrollView mixins React$Component<NativeViewGestureHandlerProperties & ScrollViewProperties> {}
  declare export class Slider mixins React$Component<NativeViewGestureHandlerProperties & SliderProperties> {}
  declare export class Switch mixins React$Component<NativeViewGestureHandlerProperties & SwitchProperties> {}
  declare export class TextInput mixins React$Component<NativeViewGestureHandlerProperties & TextInputProperties> {}
  declare export class ToolbarAndroid
    mixins React$Component<NativeViewGestureHandlerProperties & ToolbarAndroidProperties> {}
  declare export class ViewPagerAndroid
    mixins React$Component<NativeViewGestureHandlerProperties & ViewPagerAndroidProperties> {}
  declare export class DrawerLayoutAndroid
    mixins React$Component<NativeViewGestureHandlerProperties & DrawerLayoutAndroidProperties> {}
  declare export class WebView mixins React$Component<NativeViewGestureHandlerProperties & WebViewProperties> {}
  declare export class FlatList mixins React$Component<NativeViewGestureHandlerProperties & FlatListProperties<any>> {}

  declare export function gestureHandlerRootHOC(
    Component: React$ComponentType<any>,
    containerStyles?: StyleObj
  ): React$ComponentType<any>;

  declare interface SwipeableProperties {
    friction?: number;
    leftThreshold?: number;
    rightThreshold?: number;
    overshootLeft?: boolean;
    overshootRight?: boolean;
    overshootFriction?: number;
    onSwipeableLeftOpen?: () => void;
    onSwipeableRightOpen?: () => void;
    onSwipeableOpen?: () => void;
    onSwipeableClose?: () => void;
    onSwipeableLeftWillOpen?: () => void;
    onSwipeableRightWillOpen?: () => void;
    onSwipeableWillOpen?: () => void;
    onSwipeableWillClose?: () => void;
    renderLeftActions?: (progressAnimatedValue: AnimatedValue, dragAnimatedValue: AnimatedValue) => React$Node;
    renderRightActions?: (progressAnimatedValue: AnimatedValue, dragAnimatedValue: AnimatedValue) => React$Node;
    useNativeAnimations?: boolean;
  }

  declare export default class Swipeable mixins React$Component<SwipeableProperties> {
    close: () => void;
    openLeft: () => void;
    openRight: () => void;
  }

  declare interface DrawerLayoutProperties {
    renderNavigationView: (progressAnimatedValue: AnimatedValue) => React$Node;
    drawerPosition?: 'left' | 'right';
    drawerWidth?: number;
    drawerBackgroundColor?: string;
    keyboardDismissMode?: 'none' | 'on-drag';
    onDrawerClose?: () => void;
    onDrawerOpen?: () => void;
    onDrawerStateChanged?: (newState: 'Idle' | 'Dragging' | 'Settling', drawerWillShow: boolean) => void;
    useNativeAnimations?: boolean;
    drawerType?: 'front' | 'back' | 'slide';
    edgeWidth?: number;
    minSwipeDistance?: number;
    hideStatusBar?: boolean;
    statusBarAnimation?: StatusBarAnimation;
    overlayColor?: string;
    containerStyle?: StyleObj;
  }

  declare interface DrawerMovementOptionType {
    velocity?: number;
  }

  declare export default class DrawerLayout mixins React$Component<DrawerLayoutProperties> {
    openDrawer: (options?: DrawerMovementOptionType) => void;
    closeDrawer: (options?: DrawerMovementOptionType) => void;
  }
}

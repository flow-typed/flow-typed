import type { GlobalStatic } from 'npm$namespace$___React'

declare module 'react-native' {
			declare function require(name: string): any

		declare module.exports: undefined


}

declare module 'npm$namespace$___React' {
	declare export type MeasureOnSuccessCallback = (
		x: number, y: number, width: number, height: number, pageX: number, pageY: number
	) => void;

	declare export type MeasureInWindowOnSuccessCallback = (x: number, y: number, width: number, height: number) => void;

	declare export type MeasureLayoutOnSuccessCallback = (left: number, top: number, width: number, height: number) => void;

	declare export type Runnable = (appParameters: any) => void;

	declare export type ComponentProvider = () => React.ComponentClass<any>;

	declare export type AppConfig = {
		appKey: string,
		component?: ComponentProvider,
		run?: Runnable
	};

	declare export type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch";

	declare export type FlexJustifyType = "flex-start" | "flex-end" | "center" | "space-between" | "space-around";

	declare export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

	declare type GetCurrentPositionOptions = {
		timeout: number,
		maximumAge: number,
		enableHighAccuracy: boolean,
		distanceFilter: number
	};

	declare type WatchPositionOptions = {
		timeout: number,
		maximumAge: number,
		enableHighAccuracy: boolean,
		distanceFilter: number
	};

	declare type GeolocationReturnType = {
		coords: {
		latitude: number,
		longitude: number,
		altitude?: number,
		accuracy?: number,
		altitudeAccuracy?: number,
		heading?: number,
		speed?: number
	},
		timestamp: number
	};

	declare type DataDetectorTypes = "phoneNumber" | "link" | "address" | "calendarEvent" | "none" | "all";

	declare export type KeyboardType = "default" | "email-address" | "numeric" | "phone-pad";

	declare export type KeyboardTypeIOS = "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search";

	declare export type ReturnKeyType = "done" | "go" | "next" | "search" | "send";

	declare export type ReturnKeyTypeAndroid = "none" | "previous";

	declare export type ReturnKeyTypeIOS = "default" | "google" | "join" | "route" | "yahoo" | "emergency-call";

	declare export type ToolbarAndroidAction = {
		title: string,
		icon?: ImageURISource,
		show?: "always" | "ifRoom" | "never",
		showWithText?: boolean
	};

	declare export type ImageResizeMode = "contain" | "cover" | "stretch" | "center" | "repeat";

	declare type ViewAccessibilityTraits = "none" | "button" | "link" | "header" | "search" | "image" | "selected" | "plays" | "key" | "text" | "summary" | "disabled" | "frequentUpdates" | "startsMedia" | "adjustable" | "allowsDirectInteraction" | "pageTurn";

	declare type BackgroundPropType = RippleBackgroundPropType | ThemeAttributeBackgroundPropType;

	declare export type PlatformOSType = "ios" | "android";

	declare export type SimpleTask = {
		name: string,
		gen: () => void
	};

	declare export type PromiseTask = {
		name: string,
		gen: () => Promise<any>
	};

	declare export type Handle = number;

	declare export type ShareContent = {
		title?: string,
		message: string
	} | {
		title?: string,
		url: string
	};

	declare export type ShareOptions = {
		dialogTitle?: string,
		excludeActivityTypes?: Array<string>,
		tintColor?: string
	};

	declare export type AlertType = "default" | "plain-text" | "secure-text" | "login-password";

	declare export type AppStateEvent = "change" | "memoryWarning";

	declare export type AppStateStatus = "active" | "background" | "inactive";

	declare export type BackPressEventName = "hardwareBackPress";

	declare export type CameraRollGroupType = "Album" | "All" | "Event" | "Faces" | "Library" | "PhotoStream" | "SavedPhotos";

	declare export type CameraRollAssetType = "All" | "Videos" | "Photos";

	declare export type NetInfoReturnType = "none" | "wifi" | "cell" | "unknown" | "NONE" | "MOBILE" | "WIFI" | "MOBILE_MMS" | "MOBILE_SUPL" | "MOBILE_DUN" | "MOBILE_HIPRI" | "WIMAX" | "BLUETOOTH" | "DUMMY" | "ETHERNET" | "MOBILE_FOTA" | "MOBILE_IMS" | "MOBILE_CBS" | "WIFI_P2P" | "MOBILE_IA" | "MOBILE_EMERGENCY" | "PROXY" | "VPN" | "UNKNOWN";

	declare export type Permission = "android.permission.READ_CALENDAR" | "android.permission.WRITE_CALENDAR" | "android.permission.CAMERA" | "android.permission.READ_CONTACTS" | "android.permission.WRITE_CONTACTS" | "android.permission.GET_ACCOUNTS" | "android.permission.ACCESS_FINE_LOCATION" | "android.permission.ACCESS_COARSE_LOCATION" | "android.permission.RECORD_AUDIO" | "android.permission.READ_PHONE_STATE" | "android.permission.CALL_PHONE" | "android.permission.READ_CALL_LOG" | "android.permission.WRITE_CALL_LOG" | "com.android.voicemail.permission.ADD_VOICEMAIL" | "android.permission.USE_SIP" | "android.permission.PROCESS_OUTGOING_CALLS" | "android.permission.BODY_SENSORS" | "android.permission.SEND_SMS" | "android.permission.RECEIVE_SMS" | "android.permission.READ_SMS" | "android.permission.RECEIVE_WAP_PUSH" | "android.permission.RECEIVE_MMS" | "android.permission.READ_EXTERNAL_STORAGE" | "android.permission.WRITE_EXTERNAL_STORAGE";

	declare type PresentLocalNotificationDetails = {
		alertBody: string,
		alertAction: string,
		soundName?: string,
		category?: string,
		userInfo?: Object,
		applicationIconBadgeNumber?: number
	};

	declare type ScheduleLocalNotificationDetails = {
		fireDate: Date,
		alertBody: string,
		alertAction: string,
		soundName?: string,
		category?: string,
		userInfo?: Object,
		applicationIconBadgeNumber?: number
	};

	declare export type PushNotificationEventName = "notification" | "localNotification" | "register" | "registrationError";

	declare export type StatusBarStyle = "default" | "light-content";

	declare export type StatusBarAnimation = "none" | "fade" | "slide";

	declare type TimePickerAndroidOpenOptions = {
		hour?: number,
		minute?: number,
		is24Hour?: boolean
	};

	declare export type EasingFunction = (value: number) => number;

	declare export type ImagePickerResult = [string, number, number];

	declare export type fetch = (url: string, options?: Object) => Promise<any>;

	declare export type timedScheduler = (fn: string | Function, time: number) => number;

	declare export type untimedScheduler = (fn: string | Function) => number;

	declare export type setTimeout = timedScheduler;

	declare export type setInterval = timedScheduler;

	declare export type setImmediate = untimedScheduler;

	declare export type requestAnimationFrame = untimedScheduler;

	declare export type schedulerCanceller = (id: number) => void;

	declare export type clearTimeout = schedulerCanceller;

	declare export type clearInterval = schedulerCanceller;

	declare export type clearImmediate = schedulerCanceller;

	declare export type cancelAnimationFrame = schedulerCanceller;

	declare export type TabsReducerFunction = (params: any) => any;

	declare export type NavigationRenderer = (
		route: NavigationState, onNavigate: (action: NavigationAction) => boolean
	) => JSX.Element;

	declare export type NavigationAnimatedValue = Animated.Value;

	declare export type NavigationGestureDirection = "horizontal" | "vertical";

	declare export type NavigationLayout = {
		height: NavigationAnimatedValue,
		initHeight: number,
		initWidth: number,
		isMeasured: boolean,
		width: NavigationAnimatedValue
	};

	declare export type NavigationScene = {
		index: number,
		isActive: boolean,
		isStale: boolean,
		key: string,
		route: NavigationRoute
	};

	declare export type NavigationTransitionProps = {
		layout: NavigationLayout,
		navigationState: NavigationState,
		position: NavigationAnimatedValue,
		progress: NavigationAnimatedValue,
		scenes: Array<NavigationScene>,
		scene: NavigationScene,
		gestureResponseDistance?: number
	};

	declare export type NavigationTransitionSpec = {
		duration?: number,
		easing?: () => any,
		timing?: (value: NavigationAnimatedValue, config: any) => any
	};

	declare type RCTNativeAppEventEmitter = DeviceEventEmitterStatic;

	declare export type ActivityIndicator = ActivityIndicatorStatic;

	declare export type ActivityIndicatorIOS = ActivityIndicatorIOSStatic;

	declare export type DatePickerIOS = DatePickerIOSStatic;

	declare export type DrawerLayoutAndroid = DrawerLayoutAndroidStatic;

	declare export type Image = ImageStatic;

	declare export type ImagePickerIOS = ImagePickerIOSStatic;

	declare export type LayoutAnimation = LayoutAnimationStatic;

	declare export type ListView = ListViewStatic;

	declare export type MapView = MapViewStatic;

	declare export type Modal = ModalStatic;

	declare export type Navigator = NavigatorStatic;

	declare export type NavigatorIOS = NavigatorIOSStatic;

	declare export type Picker = PickerStatic;

	declare export type PickerIOS = PickerIOSStatic;

	declare export type ProgressBarAndroid = ProgressBarAndroidStatic;

	declare export type ProgressViewIOS = ProgressViewIOSStatic;

	declare export type RefreshControl = RefreshControlStatic;

	declare export type RecyclerViewBackedScrollView = RecyclerViewBackedScrollViewStatic;

	declare export type SegmentedControlIOS = SegmentedControlIOSStatic;

	declare export type Slider = SliderStatic;

	declare export type SliderIOS = SliderStatic;

	declare export type StatusBar = StatusBarStatic;

	declare export type ScrollView = ScrollViewStatic;

	declare export type SnapshotViewIOS = SnapshotViewIOSStatic;

	declare export type Systrace = SystraceStatic;

	declare export type SwipeableListView = SwipeableListViewStatic;

	declare export type Switch = SwitchStatic;

	declare export type SwitchIOS = SwitchIOSStatic;

	declare export type TabBarIOS = TabBarIOSStatic;

	declare export type Text = TextStatic;

	declare export type TextInput = TextInputStatic;

	declare export type ToolbarAndroid = ToolbarAndroidStatic;

	declare export type TouchableHighlight = TouchableHighlightStatic;

	declare export type TouchableNativeFeedback = TouchableNativeFeedbackStatic;

	declare export type TouchableOpacity = TouchableOpacityStatic;

	declare export type TouchableWithoutFeedback = TouchableWithoutFeedbackStatic;

	declare export type View = ViewStatic;

	declare export type ViewPagerAndroid = ViewPagerAndroidStatic;

	declare export type WebView = WebViewStatic;

	declare export type ActionSheetIOS = ActionSheetIOSStatic;

	declare export type Share = ShareStatic;

	declare export type AdSupportIOS = AdSupportIOSStatic;

	declare export type Alert = AlertStatic;

	declare export type AlertAndroid = AlertAndroidStatic;

	declare export type AlertIOS = AlertIOSStatic;

	declare export type AppState = AppStateStatic;

	declare export type AppStateIOS = AppStateStatic;

	declare export type AsyncStorage = AsyncStorageStatic;

	declare export type BackAndroid = BackAndroidStatic;

	declare export type CameraRoll = CameraRollStatic;

	declare export type Clipboard = ClipboardStatic;

	declare export type DatePickerAndroid = DatePickerAndroidStatic;

	declare export type Geolocation = GeolocationStatic;

	declare export type I18nManager = I18nManagerStatic;

	declare export type ImageEditor = ImageEditorStatic;

	declare export type ImageStore = ImageStoreStatic;

	declare export type IntentAndroid = IntentAndroidStatic;

	declare export type KeyboardAvoidingView = KeyboardAvoidingViewStatic;

	declare export type Linking = LinkingStatic;

	declare export type LinkingIOS = LinkingIOSStatic;

	declare export type NativeMethodsMixin = NativeMethodsMixinStatic;

	declare export type NativeComponent = NativeMethodsMixinStatic;

	declare export type NetInfo = NetInfoStatic;

	declare export type PanResponder = PanResponderStatic;

	declare export type PermissionsAndroid = PermissionsAndroidStatic;

	declare export type PushNotificationIOS = PushNotificationIOSStatic;

	declare export type Settings = SettingsStatic;

	declare export type StatusBarIOS = StatusBarIOSStatic;

	declare export type TimePickerAndroid = TimePickerAndroidStatic;

	declare export type ToastAndroid = ToastAndroidStatic;

	declare export type UIManager = UIManagerStatic;

	declare export type VibrationIOS = VibrationIOSStatic;

	declare export type Vibration = VibrationStatic;

	declare export type NavigationExperimental = NavigationExperimentalStatic;

	declare export type Easing = EasingStatic;

	declare interface EventSubscription {
		eventType: string,
		key: number,
		subscriber: EventSubscriptionVendor,
		new (subscriber: EventSubscriptionVendor): EventSubscription,
		remove(): void
	}

	declare interface EventSubscriptionVendor {
		constructor(): EventSubscriptionVendor,
		addSubscription(eventType: string, subscription: EventSubscription): EventSubscription,
		removeAllSubscriptions(eventType?: string): void,
		removeSubscription(subscription: any): void,
		getSubscriptionsForType(eventType: string): EventSubscription[]
	}

	declare interface EmitterSubscription {
		emitter: EventEmitter,
		listener: () => any,
		context: any,
		new (
		emitter: EventEmitter, subscriber: EventSubscriptionVendor, listener: () => any, context: any
	): EmitterSubscription,
		remove(): void
	}

	declare interface EventEmitter {
		new (subscriber?: EventSubscriptionVendor): EventEmitter,
		addListener(
		eventType: string, listener: (...args: any[]) => any, context: any
	): EmitterSubscription,
		once(
		eventType: string, listener: (...args: any[]) => any, context: any
	): EmitterSubscription,
		removeAllListeners(eventType?: string): void,
		removeCurrentListener(): void,
		removeSubscription(subscription: EmitterSubscription): void,
		listeners(eventType: string): EmitterSubscription[],
		emit(eventType: string): void,
		removeListener(eventType: string, listener: (...args: any[]) => any): void
	}

	declare export interface NativeMethodsMixinStatic {
		measure(callback: MeasureOnSuccessCallback): void,
		measureInWindow(callback: MeasureInWindowOnSuccessCallback): void,
		measureLayout(
		relativeToNativeNode: number, onSuccess: MeasureLayoutOnSuccessCallback, onFail: () => void
	): void,
		setNativeProps(nativeProps: Object): void,
		focus(): void,
		blur(): void,
		refs: {
		[key: string]: Component<any, any>
	}
	}

	declare interface NativeSyntheticEvent<T> {
		bubbles: boolean,
		cancelable: boolean,
		currentTarget: EventTarget,
		defaultPrevented: boolean,
		eventPhase: number,
		isTrusted: boolean,
		nativeEvent: T,
		preventDefault(): void,
		stopPropagation(): void,
		target: EventTarget,
		timeStamp: Date,
		type: string
	}

	declare export interface NativeTouchEvent {
		changedTouches: NativeTouchEvent[],
		identifier: string,
		locationX: number,
		locationY: number,
		pageX: number,
		pageY: number,
		target: string,
		timestamp: number,
		touches: NativeTouchEvent[]
	}

	declare export interface GestureResponderEvent {
		
	}

	declare export interface PointProperties {
		x: number,
		y: number
	}

	declare export interface Insets {
		top?: number,
		left?: number,
		bottom?: number,
		right?: number
	}

	declare export interface Touchable {
		onTouchStart?: (event: GestureResponderEvent) => void,
		onTouchMove?: (event: GestureResponderEvent) => void,
		onTouchEnd?: (event: GestureResponderEvent) => void,
		onTouchCancel?: (event: GestureResponderEvent) => void,
		onTouchEndCapture?: (event: GestureResponderEvent) => void
	}

	declare export interface LayoutAnimationTypes {
		spring: string,
		linear: string,
		easeInEaseOut: string,
		easeIn: string,
		easeOut: string
	}

	declare export interface LayoutAnimationProperties {
		opacity: string,
		scaleXY: string
	}

	declare export interface LayoutAnimationAnim {
		duration?: number,
		delay?: number,
		springDamping?: number,
		initialVelocity?: number,
		type?: string,
		property?: string
	}

	declare export interface LayoutAnimationConfig {
		duration: number,
		create?: LayoutAnimationAnim,
		update?: LayoutAnimationAnim,
		delete?: LayoutAnimationAnim
	}

	declare export interface LayoutAnimationStatic {
		configureNext: (config: LayoutAnimationConfig, onAnimationDidEnd?: () => void) => void,
		create: (
		duration: number, type?: string, creationProp?: string
	) => LayoutAnimationConfig,
		Types: LayoutAnimationTypes,
		Properties: LayoutAnimationProperties,
		configChecker: (shapeTypes: {
		[key: string]: any
	}) => any,
		Presets: {
		easeInEaseOut: LayoutAnimationConfig,
		linear: LayoutAnimationConfig,
		spring: LayoutAnimationConfig
	},
		easeInEaseOut: (config: LayoutAnimationConfig, onAnimationDidEnd?: () => void) => void,
		linear: (config: LayoutAnimationConfig, onAnimationDidEnd?: () => void) => void,
		spring: (config: LayoutAnimationConfig, onAnimationDidEnd?: () => void) => void
	}

	declare export interface FlexStyle {
		alignItems?: FlexAlignType,
		alignSelf?: "auto" | FlexAlignType,
		borderBottomWidth?: number,
		borderLeftWidth?: number,
		borderRightWidth?: number,
		borderTopWidth?: number,
		borderWidth?: number,
		bottom?: number,
		flex?: number,
		flexGrow?: number,
		flexShrink?: number,
		flexBasis?: number,
		flexDirection?: FlexDirection,
		flexWrap?: "wrap" | "nowrap",
		height?: number,
		justifyContent?: FlexJustifyType,
		left?: number,
		minWidth?: number,
		maxWidth?: number,
		minHeight?: number,
		maxHeight?: number,
		margin?: number,
		marginBottom?: number,
		marginHorizontal?: number,
		marginLeft?: number,
		marginRight?: number,
		marginTop?: number,
		marginVertical?: number,
		overflow?: "visible" | "hidden" | "scroll",
		padding?: number,
		paddingBottom?: number,
		paddingHorizontal?: number,
		paddingLeft?: number,
		paddingRight?: number,
		paddingTop?: number,
		paddingVertical?: number,
		position?: "absolute" | "relative",
		right?: number,
		top?: number,
		width?: number,
		zIndex?: number
	}

	declare export interface ShadowPropTypesIOSStatic {
		shadowColor: string,
		shadowOffset: {
		width: number,
		height: number
	},
		shadowOpacity: number,
		shadowRadius: number
	}

	declare export interface TransformsStyle {
		transform?: [{
		perspective: number
	}, {
		rotate: string
	}, {
		rotateX: string
	}, {
		rotateY: string
	}, {
		rotateZ: string
	}, {
		scale: number
	}, {
		scaleX: number
	}, {
		scaleY: number
	}, {
		translateX: number
	}, {
		translateY: number
	}, {
		skewX: string
	}, {
		skewY: string
	}],
		transformMatrix?: Array<number>,
		rotation?: number,
		scaleX?: number,
		scaleY?: number,
		translateX?: number,
		translateY?: number
	}

	declare export interface StyleSheetProperties {
		hairlineWidth: number,
		flatten<T>(style: T): T
	}

	declare export interface LayoutRectangle {
		x: number,
		y: number,
		width: number,
		height: number
	}

	declare export interface LayoutChangeEvent {
		nativeEvent: {
		layout: LayoutRectangle
	}
	}

	declare export interface TextStyleIOS {
		letterSpacing?: number,
		textDecorationColor?: string,
		textDecorationStyle?: "solid" | "double" | "dotted" | "dashed",
		writingDirection?: "auto" | "ltr" | "rtl"
	}

	declare export interface TextStyleAndroid {
		textAlignVertical?: "auto" | "top" | "bottom" | "center"
	}

	declare export interface TextStyle {
		color?: string,
		fontFamily?: string,
		fontSize?: number,
		fontStyle?: "normal" | "italic",
		fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
		letterSpacing?: number,
		lineHeight?: number,
		textAlign?: "auto" | "left" | "right" | "center",
		textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through",
		textDecorationStyle?: "solid" | "double" | "dotted" | "dashed",
		textDecorationColor?: string,
		textShadowColor?: string,
		textShadowOffset?: {
		width: number,
		height: number
	},
		textShadowRadius?: number,
		testID?: string
	}

	declare export interface TextPropertiesIOS {
		allowFontScaling?: boolean,
		adjustsFontSizeToFit?: boolean,
		minimumFontScale?: number,
		suppressHighlighting?: boolean
	}

	declare export interface TextPropertiesAndroid {
		selectable?: boolean
	}

	declare export interface TextProperties {
		accessible?: boolean,
		ellipsizeMode?: "head" | "middle" | "tail" | "clip",
		lineBreakMode?: "head" | "middle" | "tail" | "clip",
		numberOfLines?: number,
		onLayout?: (event: LayoutChangeEvent) => void,
		onPress?: () => void,
		onLongPress?: () => void,
		style?: TextStyle,
		testID?: string
	}

	declare export interface TextStatic {
		
	}

	declare export interface DocumentSelectionState {
		new (anchor: number, focus: number): DocumentSelectionState,
		update(anchor: number, focus: number): void,
		constrainLength(maxLength: number): void,
		focus(): void,
		blur(): void,
		hasFocus(): boolean,
		isCollapsed(): boolean,
		isBackward(): boolean,
		getAnchorOffset(): number,
		getFocusOffset(): number,
		getStartOffset(): number,
		getEndOffset(): number,
		overlaps(start: number, end: number): boolean
	}

	declare export interface TextInputIOSProperties {
		clearButtonMode?: "never" | "while-editing" | "unless-editing" | "always",
		clearTextOnFocus?: boolean,
		dataDetectorTypes?: DataDetectorTypes | DataDetectorTypes[],
		enablesReturnKeyAutomatically?: boolean,
		keyboardAppearance?: "default" | "light" | "dark",
		onKeyPress?: (key: string) => void,
		selectionState?: DocumentSelectionState
	}

	declare export interface TextInputAndroidProperties {
		inlineImageLeft?: string,
		inlineImagePadding?: number,
		numberOfLines?: number,
		returnKeyLabel?: string,
		underlineColorAndroid?: string
	}

	declare export interface TextInputProperties {
		autoCapitalize?: "none" | "sentences" | "words" | "characters",
		autoCorrect?: boolean,
		autoFocus?: boolean,
		blurOnSubmit?: boolean,
		defaultValue?: string,
		editable?: boolean,
		keyboardType?: KeyboardType | KeyboardTypeIOS,
		maxLength?: number,
		multiline?: boolean,
		onBlur?: () => void,
		onChange?: (event: {
		nativeEvent: {
		text: string
	}
	}) => void,
		onChangeText?: (text: string) => void,
		onContentSizeChange?: (
		event: {
		nativeEvent: {
		contentSize: {
		width: number,
		height: number
	}
	}
	}
	) => void,
		onEndEditing?: (event: {
		nativeEvent: {
		text: string
	}
	}) => void,
		onFocus?: () => void,
		onSelectionChange?: () => void,
		onSubmitEditing?: (event: {
		nativeEvent: {
		text: string
	}
	}) => void,
		placeholder?: string,
		placeholderTextColor?: string,
		returnKeyType?: ReturnKeyType | ReturnKeyTypeAndroid | ReturnKeyTypeIOS,
		secureTextEntry?: boolean,
		selectTextOnFocus?: boolean,
		selection?: {
		start: number,
		end?: number
	},
		selectionColor?: string,
		style?: TextStyle,
		testID?: string,
		value?: string,
		ref?: Ref<ViewStatic & TextInputStatic>
	}

	declare interface TextInputState {
		currentlyFocusedField(): number,
		focusTextInput(textFieldID?: number): void,
		blurTextInput(textFieldID?: number): void
	}

	declare export interface TextInputStatic {
		State: TextInputState,
		isFocused: () => boolean,
		clear: () => void
	}

	declare export interface ToolbarAndroidProperties {
		actions?: ToolbarAndroidAction[],
		contentInsetEnd?: number,
		contentInsetStart?: number,
		logo?: ImageURISource,
		navIcon?: ImageURISource,
		onActionSelected?: (position: number) => void,
		onIconClicked?: () => void,
		overflowIcon?: ImageURISource,
		rtl?: boolean,
		subtitle?: string,
		subtitleColor?: string,
		testID?: string,
		title?: string,
		titleColor?: string,
		ref?: Ref<ToolbarAndroidStatic>
	}

	declare export interface ToolbarAndroidStatic {
		
	}

	declare export interface GestureResponderHandlers {
		onStartShouldSetResponder?: (event: GestureResponderEvent) => boolean,
		onMoveShouldSetResponder?: (event: GestureResponderEvent) => boolean,
		onResponderEnd?: (event: GestureResponderEvent) => void,
		onResponderGrant?: (event: GestureResponderEvent) => void,
		onResponderReject?: (event: GestureResponderEvent) => void,
		onResponderMove?: (event: GestureResponderEvent) => void,
		onResponderRelease?: (event: GestureResponderEvent) => void,
		onResponderStart?: (event: GestureResponderEvent) => void,
		onResponderTerminationRequest?: (event: GestureResponderEvent) => boolean,
		onResponderTerminate?: (event: GestureResponderEvent) => void,
		onStartShouldSetResponderCapture?: (event: GestureResponderEvent) => boolean,
		onMoveShouldSetResponderCapture?: () => void
	}

	declare export interface ViewStyle {
		backfaceVisibility?: "visible" | "hidden",
		backgroundColor?: string,
		borderBottomColor?: string,
		borderBottomLeftRadius?: number,
		borderBottomRightRadius?: number,
		borderBottomWidth?: number,
		borderColor?: string,
		borderLeftColor?: string,
		borderRadius?: number,
		borderRightColor?: string,
		borderRightWidth?: number,
		borderStyle?: "solid" | "dotted" | "dashed",
		borderTopColor?: string,
		borderTopLeftRadius?: number,
		borderTopRightRadius?: number,
		borderTopWidth?: number,
		opacity?: number,
		overflow?: "visible" | "hidden",
		shadowColor?: string,
		shadowOffset?: {
		width: number,
		height: number
	},
		shadowOpacity?: number,
		shadowRadius?: number,
		elevation?: number,
		testID?: string
	}

	declare export interface ViewPropertiesIOS {
		accessibilityTraits?: ViewAccessibilityTraits | ViewAccessibilityTraits[],
		shouldRasterizeIOS?: boolean
	}

	declare export interface ViewPropertiesAndroid {
		accessibilityComponentType?: "none" | "button" | "radiobutton_checked" | "radiobutton_unchecked",
		accessibilityLiveRegion?: "none" | "polite" | "assertive",
		collapsable?: boolean,
		importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants",
		needsOffscreenAlphaCompositing?: boolean,
		renderToHardwareTextureAndroid?: boolean
	}

	declare export interface ViewProperties {
		accessibilityLabel?: string,
		accessible?: boolean,
		hitSlop?: Insets,
		onAcccessibilityTap?: () => void,
		onLayout?: (event: LayoutChangeEvent) => void,
		onMagicTap?: () => void,
		pointerEvents?: "box-none" | "none" | "box-only" | "auto",
		removeClippedSubviews?: boolean,
		style?: ViewStyle,
		testID?: string
	}

	declare export interface ViewStatic {
		AccessibilityTraits: ["none", "button", "link", "header", "search", "image", "selected", "plays", "key", "text", "summary", "disabled", "frequentUpdates", "startsMedia", "adjustable", "allowsDirectInteraction", "pageTurn"],
		AccessibilityComponentType: ["none", "button", "radiobutton_checked", "radiobutton_unchecked"],
		forceTouchAvailable: boolean
	}

	declare export interface ViewPagerAndroidOnPageScrollEventData {
		position: number,
		offset: number
	}

	declare export interface ViewPagerAndroidOnPageSelectedEventData {
		position: number
	}

	declare export interface ViewPagerAndroidProperties {
		initialPage?: number,
		scrollEnabled?: boolean,
		onPageScroll?: (event: NativeSyntheticEvent<ViewPagerAndroidOnPageScrollEventData>) => void,
		onPageSelected?: (event: NativeSyntheticEvent<ViewPagerAndroidOnPageSelectedEventData>) => void,
		onPageScrollStateChanged?: (state: "Idle" | "Dragging" | "Settling") => void,
		keyboardDismissMode?: "none" | "on-drag",
		pageMargin?: number
	}

	declare export interface ViewPagerAndroidStatic {
		setPage(selectedPage: number): void,
		setPageWithoutAnimation(selectedPage: number): void
	}

	declare export interface KeyboardAvoidingViewStatic {
		
	}

	declare export interface KeyboardAvoidingViewProps {
		behavior?: "height" | "position" | "padding",
		contentContainerStyle: ViewStyle,
		keyboardVerticalOffset: number,
		ref?: Ref<KeyboardAvoidingViewStatic & ViewStatic>
	}

	declare export interface NavState {
		url?: string,
		title?: string,
		loading?: boolean,
		canGoBack?: boolean,
		canGoForward?: boolean,
		[key: string]: any
	}

	declare export interface WebViewPropertiesAndroid {
		javaScriptEnabled?: boolean,
		domStorageEnabled?: boolean
	}

	declare export interface WebViewIOSLoadRequestEvent {
		target: number,
		canGoBack: boolean,
		lockIdentifier: number,
		loading: boolean,
		title: string,
		canGoForward: boolean,
		navigationType: "other" | "click",
		url: string
	}

	declare export interface WebViewPropertiesIOS {
		allowsInlineMediaPlayback?: boolean,
		bounces?: boolean,
		decelerationRate?: "normal" | "fast" | number,
		onShouldStartLoadWithRequest?: (event: WebViewIOSLoadRequestEvent) => boolean,
		scrollEnabled?: boolean
	}

	declare export interface WebViewUriSource {
		uri?: string,
		method?: string,
		headers?: any,
		body?: string
	}

	declare export interface WebViewHtmlSource {
		html: string,
		baseUrl?: string
	}

	declare export interface WebViewProperties {
		automaticallyAdjustContentInsets?: boolean,
		contentInset?: Insets,
		html?: string,
		injectedJavaScript?: string,
		onError?: (event: NavState) => void,
		onLoad?: (event: NavState) => void,
		onLoadEnd?: (event: NavState) => void,
		onLoadStart?: (event: NavState) => void,
		onNavigationStateChange?: (event: NavState) => void,
		renderError?: () => React.ReactElement<ViewProperties>,
		renderLoading?: () => React.ReactElement<ViewProperties>,
		startInLoadingState?: boolean,
		style?: ViewStyle,
		url?: string,
		source?: WebViewUriSource | WebViewHtmlSource | number,
		mediaPlaybackRequiresUserAction?: boolean,
		scalesPageToFit?: boolean,
		ref?: Ref<WebViewStatic & ViewStatic>
	}

	declare export interface WebViewStatic {
		goBack: () => void,
		goForward: () => void,
		reload: () => void,
		stopLoading(): void,
		getWebViewHandle: () => any
	}

	declare export interface NativeSegmentedControlIOSChangeEvent {
		value: string,
		selectedSegmentIndex: number,
		target: number
	}

	declare export interface SegmentedControlIOSProperties {
		enabled?: boolean,
		momentary?: boolean,
		onChange?: (event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => void,
		onValueChange?: (value: string) => void,
		selectedIndex?: number,
		tintColor?: string,
		values?: string[],
		ref?: Ref<SegmentedControlIOSStatic>
	}

	declare export interface SegmentedControlIOSStatic {
		
	}

	declare export interface NavigatorIOSProperties {
		barTintColor?: string,
		initialRoute: Route,
		itemWrapperStyle?: ViewStyle,
		interactivePopGestureEnabled?: boolean,
		navigationBarHidden?: boolean,
		shadowHidden?: boolean,
		tintColor?: string,
		titleTextColor?: string,
		translucent?: boolean,
		style?: ViewStyle
	}

	declare export interface NavigationIOS {
		push: (route: Route) => void,
		pop: () => void,
		popN: (n: number) => void,
		replace: (route: Route) => void,
		replacePrevious: (route: Route) => void,
		replacePreviousAndPop: (route: Route) => void,
		resetTo: (route: Route) => void,
		popToRoute(route: Route): void,
		popToTop(): void
	}

	declare export interface NavigatorIOSStatic {
		
	}

	declare export interface ActivityIndicatorProperties {
		animating?: boolean,
		color?: string,
		hidesWhenStopped?: boolean,
		size?: number | "small" | "large",
		style?: ViewStyle,
		ref?: Ref<ActivityIndicatorStatic>
	}

	declare export interface ActivityIndicatorStatic {
		
	}

	declare export interface ActivityIndicatorIOSProperties {
		animating?: boolean,
		color?: string,
		hidesWhenStopped?: boolean,
		onLayout?: (
		event: {
		nativeEvent: {
		layout: {
		x: number,
		y: number,
		width: number,
		height: number
	}
	}
	}
	) => void,
		size?: "small" | "large",
		style?: ViewStyle,
		ref?: Ref<ActivityIndicatorIOSStatic>
	}

	declare export interface ActivityIndicatorIOSStatic {
		
	}

	declare export interface DatePickerIOSProperties {
		date: Date,
		maximumDate?: Date,
		minimumDate?: Date,
		minuteInterval?: number,
		mode?: "date" | "time" | "datetime",
		onDateChange: (newDate: Date) => void,
		timeZoneOffsetInMinutes?: number,
		ref?: Ref<DatePickerIOSStatic & ViewStatic>
	}

	declare export interface DatePickerIOSStatic {
		
	}

	declare export interface DrawerSlideEvent {
		
	}

	declare export interface DrawerLayoutAndroidProperties {
		drawerBackgroundColor?: string,
		drawerLockMode?: "unlocked" | "locked-closed" | "locked-open",
		drawerPosition?: any,
		drawerWidth?: number,
		keyboardDismissMode?: "none" | "on-drag",
		onDrawerClose?: () => void,
		onDrawerOpen?: () => void,
		onDrawerSlide?: (event: DrawerSlideEvent) => void,
		onDrawerStateChanged?: (event: "Idle" | "Dragging" | "Settling") => void,
		renderNavigationView: () => JSX.Element,
		statusBarBackgroundColor?: string,
		ref?: Ref<DrawerLayoutAndroidStatic & ViewStatic>
	}

	declare export interface DrawerLayoutAndroidStatic {
		openDrawer(): void,
		closeDrawer(): void
	}

	declare export interface PickerIOSItemProperties {
		value?: string | number,
		label?: string
	}

	declare export interface PickerIOSItemStatic {
		
	}

	declare export interface PickerItemProperties {
		label: string,
		value?: any
	}

	declare export interface PickerItemStatic {
		
	}

	declare export interface PickerPropertiesIOS {
		itemStyle?: ViewStyle,
		ref?: Ref<PickerStatic & ViewStatic>
	}

	declare export interface PickerPropertiesAndroid {
		enabled?: boolean,
		mode?: "dialog" | "dropdown",
		prompt?: string,
		ref?: Ref<PickerStatic & ViewStatic>
	}

	declare export interface PickerProperties {
		onValueChange?: (itemValue: any, itemPosition: number) => void,
		selectedValue?: any,
		style?: ViewStyle,
		testId?: string,
		ref?: Ref<PickerStatic>
	}

	declare export interface PickerStatic {
		MODE_DIALOG: string,
		MODE_DROPDOWN: string,
		Item?: PickerItemStatic
	}

	declare export interface PickerIOSProperties {
		itemStyle?: TextStyle,
		onValueChange?: (value: string | number) => void,
		selectedValue?: string | number,
		ref?: Ref<PickerIOSStatic & ViewStatic>
	}

	declare export interface PickerIOSStatic {
		Item: PickerIOSItemStatic
	}

	declare export interface ProgressBarAndroidProperties {
		styleAttr?: "Horizontal" | "Normal" | "Small" | "Large" | "Inverse" | "SmallInverse" | "LargeInverse",
		indeterminate?: boolean,
		progress?: number,
		color?: string,
		testID?: string,
		ref?: Ref<ProgressBarAndroidStatic>
	}

	declare export interface ProgressBarAndroidStatic {
		
	}

	declare export interface ProgressViewIOSProperties {
		progressViewStyle?: "default" | "bar",
		progress?: number,
		progressTintColor?: string,
		trackTintColor?: string,
		progressImage?: ImageURISource | ImageURISource[],
		trackImage?: ImageURISource | ImageURISource[],
		ref?: Ref<ProgressViewIOSStatic>
	}

	declare export interface ProgressViewIOSStatic {
		
	}

	declare export interface RefreshControlPropertiesIOS {
		tintColor?: string,
		title?: string,
		titleColor?: string,
		ref?: Ref<RefreshControlStatic & ViewStatic>
	}

	declare export interface RefreshControlPropertiesAndroid {
		colors?: string[],
		enabled?: boolean,
		progressBackgroundColor?: string,
		size?: number,
		progressViewOffset?: number,
		ref?: Ref<RefreshControlStatic & ViewStatic>
	}

	declare export interface RefreshControlProperties {
		onRefresh?: () => void,
		refreshing: boolean,
		ref?: Ref<RefreshControlStatic>
	}

	declare export interface RefreshControlStatic {
		SIZE: Object
	}

	declare export interface RecyclerViewBackedScrollViewProperties {
		ref?: Ref<RecyclerViewBackedScrollViewProperties & ScrollViewProperties>
	}

	declare export interface RecyclerViewBackedScrollViewStatic {
		scrollTo(
		y?: number | {
		x?: number,
		y?: number,
		animated?: boolean
	}, x?: number, animated?: boolean
	): void,
		getScrollResponder(): JSX.Element
	}

	declare export interface SliderPropertiesIOS {
		maximumTrackImage?: ImageURISource,
		maximumTrackTintColor?: string,
		minimumTrackImage?: ImageURISource,
		minimumTrackTintColor?: string,
		thumbImage?: ImageURISource,
		trackImage?: ImageURISource,
		ref?: Ref<SliderStatic>
	}

	declare export interface SliderProperties {
		disabled?: boolean,
		maximumValue?: number,
		minimumValue?: number,
		onSlidingComplete?: (value: number) => void,
		onValueChange?: (value: number) => void,
		step?: number,
		style?: ViewStyle,
		testID?: string,
		value?: number
	}

	declare export interface SliderStatic {
		
	}

	declare export interface SwitchIOSProperties {
		disabled?: boolean,
		onTintColor?: string,
		onValueChange?: (value: boolean) => void,
		thumbTintColor?: string,
		tintColor?: string,
		value?: boolean,
		ref?: Ref<SwitchIOSStatic>
	}

	declare export interface SwitchIOSStatic {
		
	}

	declare export interface ImageResizeModeStatic {
		contain: ImageResizeMode,
		cover: ImageResizeMode,
		stretch: ImageResizeMode,
		center: ImageResizeMode,
		repeat: ImageResizeMode
	}

	declare export interface ShadowStyleIOS {
		shadowColor?: string,
		shadowOffset?: {
		width: number,
		height: number
	},
		shadowOpacity?: number,
		shadowRadius?: number
	}

	declare export interface ImageStyle {
		resizeMode?: ImageResizeMode,
		backfaceVisibility?: "visible" | "hidden",
		borderBottomLeftRadius?: number,
		borderBottomRightRadius?: number,
		backgroundColor?: string,
		borderColor?: string,
		borderWidth?: number,
		borderRadius?: number,
		borderTopLeftRadius?: number,
		borderTopRightRadius?: number,
		overflow?: "visible" | "hidden",
		overlayColor?: string,
		tintColor?: string,
		opacity?: number
	}

	declare export interface ImagePropertiesIOS {
		accessibilityLabel?: string,
		accessible?: boolean,
		blurRadius?: number,
		capInsets?: Insets,
		defaultSource?: ImageURISource | number,
		onError?: (error: {
		nativeEvent: any
	}) => void,
		onProgress?: () => void,
		onPartialLoad?: () => void
	}

	declare interface ImageURISource {
		uri?: string,
		bundle?: string,
		method?: string,
		headers?: {
		[key: string]: string
	},
		body?: string,
		width?: number,
		height?: number,
		scale?: number
	}

	declare export interface ImageProperties {
		fadeDuration?: number,
		onLayout?: (event: LayoutChangeEvent) => void,
		onLoad?: () => void,
		onLoadEnd?: () => void,
		onLoadStart?: () => void,
		progressiveRenderingEnabled?: boolean,
		resizeMode?: "cover" | "contain" | "stretch" | "center",
		resizeMethod?: "auto" | "resize" | "scale",
		source: ImageURISource | ImageURISource[],
		loadingIndicatorSource?: ImageURISource,
		style?: ImageStyle,
		testID?: string
	}

	declare export interface ImageStatic {
		resizeMode: ImageResizeMode,
		getSize(
		uri: string, success: (width: number, height: number) => void, failure: (error: any) => void
	): any,
		prefetch(url: string): any,
		abortPrefetch(requestId: number): void,
		queryCache(urls: string[]): Promise<Map<string, "memory" | "disk">>
	}

	declare export interface ListViewProperties {
		dataSource: ListViewDataSource,
		enableEmptySections?: boolean,
		initialListSize?: number,
		onChangeVisibleRows?: (
		visibleRows: Array<{
		[sectionId: string]: {
		[rowID: string]: boolean
	}
	}>, changedRows: Array<{
		[sectionId: string]: {
		[rowID: string]: boolean
	}
	}>
	) => void,
		onEndReached?: () => void,
		onEndReachedThreshold?: number,
		pageSize?: number,
		removeClippedSubviews?: boolean,
		renderFooter?: () => React.ReactElement<any>,
		renderHeader?: () => React.ReactElement<any>,
		renderRow: (
		rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean
	) => React.ReactElement<any>,
		renderScrollComponent?: (props: ScrollViewProperties) => React.ReactElement<ScrollViewProperties>,
		renderSectionHeader?: (sectionData: any, sectionId: string | number) => React.ReactElement<any>,
		renderSeparator?: (
		sectionID: string | number, rowID: string | number, adjacentRowHighlighted?: boolean
	) => React.ReactElement<any>,
		scrollRenderAheadDistance?: number,
		stickyHeaderIndices?: number[],
		ref?: Ref<ListViewStatic & ScrollViewStatic & ViewStatic>
	}

	declare interface TimerMixin {
		setTimeout: typeof setTimeout,
		clearTimeout: typeof clearTimeout,
		setInterval: typeof setInterval,
		clearInterval: typeof clearInterval,
		setImmediate: typeof setImmediate,
		clearImmediate: typeof clearImmediate,
		requestAnimationFrame: typeof requestAnimationFrame,
		cancelAnimationFrame: typeof cancelAnimationFrame
	}

	declare export interface ListViewStatic {
		DataSource: ListViewDataSource,
		getMetrics: (
		
	) => {
		contentLength: number,
		totalRows: number,
		renderedRows: number,
		visibleRows: number
	},
		getScrollResponder: () => any,
		scrollTo: (
		y?: number | {
		x?: number,
		y?: number,
		animated?: boolean
	}, x?: number, animated?: boolean
	) => void
	}

	declare export interface MapViewAnnotation {
		latitude: number,
		longitude: number,
		animateDrop?: boolean,
		draggable?: boolean,
		onDragStateChange?: () => any,
		onFocus?: () => any,
		onBlur?: () => any,
		title?: string,
		subtitle?: string,
		leftCalloutView?: ReactElement<any>,
		rightCalloutView?: ReactElement<any>,
		detailCalloutView?: ReactElement<any>,
		tintColor?: string,
		image?: ImageURISource,
		view?: ReactElement<any>,
		hasLeftCallout?: boolean,
		hasRightCallout?: boolean,
		onLeftCalloutPress?: () => void,
		onRightCalloutPress?: () => void,
		id?: string
	}

	declare export interface MapViewRegion {
		latitude: number,
		longitude: number,
		latitudeDelta?: number,
		longitudeDelta?: number
	}

	declare export interface MapViewOverlay {
		coordinates: ({
		latitude: number,
		longitude: number
	})[],
		lineWidth?: number,
		strokeColor?: string,
		fillColor?: string,
		id?: string
	}

	declare export interface MapViewProperties {
		showsPointsOfInterest?: boolean,
		annotations?: MapViewAnnotation[],
		followUserLocation?: boolean,
		legalLabelInsets?: Insets,
		mapType?: "standard" | "satellite" | "hybrid",
		maxDelta?: number,
		minDelta?: number,
		overlays?: MapViewOverlay[],
		showsCompass?: boolean,
		onAnnotationPress?: () => void,
		onRegionChange?: (region: MapViewRegion) => void,
		onRegionChangeComplete?: (region: MapViewRegion) => void,
		pitchEnabled?: boolean,
		region?: MapViewRegion,
		rotateEnabled?: boolean,
		scrollEnabled?: boolean,
		showsUserLocation?: boolean,
		style?: ViewStyle,
		zoomEnabled?: boolean,
		ref?: Ref<MapViewStatic & ViewStatic>
	}

	declare export interface MapViewStatic {
		PinColors: {
		RED: string,
		GREEN: string,
		PURPLE: string
	}
	}

	declare export interface ModalProperties {
		animated?: boolean,
		animationType?: "none" | "slide" | "fade",
		transparent?: boolean,
		visible?: boolean,
		onRequestClose?: () => void,
		onShow?: (event: NativeSyntheticEvent<any>) => void,
		supportedOrientations: ("portrait" | "portrait-upside-down" | "landscape" | "landscape-left" | "landscape-right")[],
		onOrientationChange: () => void
	}

	declare export interface ModalStatic {
		
	}

	declare interface TouchableMixin {
		touchableHandleActivePressIn(e: Event): void,
		touchableHandleActivePressOut(e: Event): void,
		touchableHandlePress(e: Event): void,
		touchableHandleLongPress(e: Event): void,
		touchableGetPressRectOffset(): Insets,
		touchableGetHighlightDelayMS(): number,
		touchableGetLongPressDelayMS(): number,
		touchableGetPressOutDelayMS(): number,
		touchableGetHitSlop(): Insets
	}

	declare export interface TouchableWithoutFeedbackAndroidProperties {
		accessibilityComponentType?: "none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"
	}

	declare export interface TouchableWithoutFeedbackIOSProperties {
		accessibilityTraits?: ViewAccessibilityTraits | ViewAccessibilityTraits[]
	}

	declare export interface TouchableWithoutFeedbackProperties {
		accessible?: boolean,
		delayLongPress?: number,
		delayPressIn?: number,
		delayPressOut?: number,
		disabled?: boolean,
		hitSlop?: Insets,
		onLayout?: (event: LayoutChangeEvent) => void,
		onLongPress?: () => void,
		onPress?: () => void,
		onPressIn?: () => void,
		onPressOut?: () => void,
		style?: ViewStyle,
		pressRetentionOffset?: Insets
	}

	declare export interface TouchableWithoutFeedbackProps {
		
	}

	declare export interface TouchableWithoutFeedbackStatic {
		
	}

	declare export interface TouchableHighlightProperties {
		activeOpacity?: number,
		onHideUnderlay?: () => void,
		onShowUnderlay?: () => void,
		style?: ViewStyle,
		underlayColor?: string
	}

	declare export interface TouchableHighlightStatic {
		
	}

	declare export interface TouchableOpacityProperties {
		activeOpacity?: number
	}

	declare export interface TouchableOpacityStatic {
		setOpacityTo: (value: number) => void
	}

	declare interface BaseBackgroundPropType {
		type: string
	}

	declare interface RippleBackgroundPropType {
		type: "RippleAndroid",
		color?: number,
		borderless?: boolean
	}

	declare interface ThemeAttributeBackgroundPropType {
		type: "ThemeAttrAndroid",
		attribute: string
	}

	declare export interface TouchableNativeFeedbackProperties {
		background?: BackgroundPropType
	}

	declare export interface TouchableNativeFeedbackStatic {
		SelectableBackground(): ThemeAttributeBackgroundPropType,
		SelectableBackgroundBorderless(): ThemeAttributeBackgroundPropType,
		Ripple(color: string, borderless?: boolean): RippleBackgroundPropType
	}

	declare export interface LeftToRightGesture {
		isDetachable: boolean,
		gestureDetectMovement: number,
		notMoving: number,
		directionRatio: number,
		snapVelocity: number,
		edgeHitWidth: number,
		stillCompletionRatio: number,
		fullDistance: any,
		direction: string
	}

	declare export interface JumpGesture {
		overswipe: {
		frictionConstant: number,
		frictionByDistance: number
	}
	}

	declare export interface SceneConfig {
		gestures?: {
		pop?: LeftToRightGesture
	},
		springFriction: number,
		springTension: number,
		defaultTransitionVelocity: number,
		animationInterpolators: {
		into: () => boolean,
		out: () => boolean
	}
	}

	declare export interface JumpSceneConfig {
		gestures: {
		jumpBack: JumpGesture,
		jumpForward: JumpGesture
	}
	}

	declare export interface SceneConfigs {
		PushFromRight: SceneConfig,
		PushFromLeft: SceneConfig,
		FloatFromRight: SceneConfig,
		FloatFromLeft: SceneConfig,
		FloatFromBottom: SceneConfig,
		FloatFromBottomAndroid: SceneConfig,
		FadeAndroid: SceneConfig,
		HorizontalSwipeJump: SceneConfig,
		HorizontalSwipeJumpFromRight: SceneConfig,
		VerticalUpSwipeJump: SceneConfig,
		VerticalDownSwipeJump: SceneConfig
	}

	declare export interface Route {
		component?: React.ComponentClass<ViewProperties>,
		id?: string,
		title?: string,
		passProps?: Object,
		[key: string]: any,
		backButtonTitle?: string,
		content?: string,
		message?: string,
		index?: number,
		onRightButtonPress?: () => void,
		rightButtonTitle?: string,
		sceneConfig?: SceneConfig,
		wrapperStyle?: any
	}

	declare export interface NavigatorProperties {
		configureScene?: (route: Route, routeStack: Route[]) => SceneConfig,
		initialRoute?: Route,
		initialRouteStack?: Route[],
		navigationBar?: React.ReactElement<NavigatorStatic.NavigationBarProperties>,
		navigator?: Navigator,
		onDidFocus?: Function,
		onWillFocus?: Function,
		renderScene: (route: Route, navigator: Navigator) => React.ReactElement<ViewProperties>,
		sceneStyle?: ViewStyle
	}

	declare export interface NavigationContext {
		parent: NavigationContext,
		top: NavigationContext,
		currentRoute: any,
		appendChild(childContext: NavigationContext): void,
		addListener(
		eventType: string, listener: () => void, useCapture?: boolean
	): NativeEventSubscription,
		emit(eventType: string, data: any, didEmitCallback?: () => void): void,
		dispose(): void
	}

	declare interface InteractionMixin {
		createInteractionHandle(): number,
		clearInteractionHandle(clearHandle: number): void,
		runAfterInteractions(callback: () => any): void
	}

	declare interface SubscribableMixin {
		addListenerOn(eventEmitter: any, eventType: string, listener: () => any, context: any): void
	}

	declare export interface NavigatorStatic {
		SceneConfigs: SceneConfigs,
		NavigationBar: NavigatorStatic.NavigationBarStatic,
		BreadcrumbNavigationBar: NavigatorStatic.BreadcrumbNavigationBarStatic,
		navigationContext: NavigationContext,
		getCurrentRoutes(): Route[],
		jumpBack(): void,
		jumpForward(): void,
		jumpTo(route: Route): void,
		push(route: Route): void,
		pop(): void,
		popN(n: number): void,
		replace(route: Route): void,
		replaceAtIndex(route: Route, index: number): void,
		replacePrevious(route: Route): void,
		immediatelyResetRouteStack(routes: Route[]): void,
		popToRoute(route: Route): void,
		popToTop(): void,
		replacePreviousAndPop(route: Route): void,
		resetTo(route: Route): void
	}

	declare export interface RelayProfiler {
		attachProfileHandler(name: string, handler: (name: string, state?: any) => () => void): void,
		attachAggregateHandler(name: string, handler: (name: string, callback: () => void) => void): void
	}

	declare export interface SystraceStatic {
		setEnabled(enabled: boolean): void,
		beginEvent(profileName?: any, args?: any): void,
		endEvent(): void,
		beginAsyncEvent(profileName?: any): any,
		endAsyncEvent(profileName?: any, cookie?: any): void,
		counterEvent(profileName?: any, value?: any): void,
		attachToRelayProfiler(relayProfiler: RelayProfiler): void,
		swizzleJSON(): void,
		measureMethods(object: any, objectName: string, methodNames: Array<string>): void,
		measure(objName: string, fnName: string, func: Function): Function
	}

	declare export interface DataSourceAssetCallback {
		rowHasChanged?: (r1: any, r2: any) => boolean,
		sectionHeaderHasChanged?: (h1: any, h2: any) => boolean,
		getRowData?: <T>(dataBlob: any, sectionID: number | string, rowID: number | string) => T,
		getSectionHeaderData?: <T>(dataBlob: any, sectionID: number | string) => T
	}

	declare export interface ListViewDataSource {
		new (onAsset: DataSourceAssetCallback): ListViewDataSource,
		cloneWithRows<T>(
		dataBlob: Array<any> | {
		[key: string]: any
	}, rowIdentities?: Array<string | number>
	): ListViewDataSource,
		cloneWithRowsAndSections(
		dataBlob: Array<any> | {
		[key: string]: any
	}, sectionIdentities?: Array<string | number>, rowIdentities?: Array<Array<string | number>>
	): ListViewDataSource,
		getRowCount(): number,
		getRowAndSectionCount(): number,
		rowShouldUpdate(sectionIndex: number, rowIndex: number): boolean,
		getRowData(sectionIndex: number, rowIndex: number): any,
		getRowIDForFlatIndex(index: number): string,
		getSectionIDForFlatIndex(index: number): string,
		getSectionLengths(): Array<number>,
		sectionHeaderShouldUpdate(sectionIndex: number): boolean,
		getSectionHeaderData(sectionIndex: number): any
	}

	declare export interface TabBarItemProperties {
		badge?: string | number,
		icon?: ImageURISource,
		onPress?: () => void,
		renderAsOriginal?: boolean,
		selected?: boolean,
		selectedIcon?: ImageURISource,
		style?: ViewStyle,
		systemIcon?: "bookmarks" | "contacts" | "downloads" | "favorites" | "featured" | "history" | "more" | "most-recent" | "most-viewed" | "recents" | "search" | "top-rated",
		title?: string,
		ref?: Ref<TabBarItemStatic & ViewStatic>
	}

	declare export interface TabBarItemStatic {
		
	}

	declare export interface TabBarIOSProperties {
		barTintColor?: string,
		itemPositioning?: "fill" | "center" | "auto",
		tintColor?: string,
		translucent?: boolean,
		unselectedTintColor?: string,
		ref?: Ref<TabBarIOSStatic & ViewStatic>
	}

	declare export interface TabBarIOSStatic {
		Item: TabBarItemStatic
	}

	declare export interface PixelRatioStatic {
		get(): number,
		getFontScale(): number,
		getPixelSizeForLayoutSize(layoutSize: number): number,
		roundToNearestPixel(layoutSize: number): number,
		startDetecting(): void
	}

	declare interface PlatformStatic {
		OS: PlatformOSType,
		Version?: number,
		select<T>(specifics: {
		ios?: T,
		android?: T
	}): T
	}

	declare interface DeviceEventEmitterStatic {
		sharedSubscriber: EventSubscriptionVendor,
		new (): DeviceEventEmitterStatic,
		addListener<T>(
		type: string, listener: (data: T) => void, context?: any
	): EmitterSubscription
	}

	declare export interface ScaledSize {
		width: number,
		height: number,
		scale: number,
		fontScale: number
	}

	declare export interface Dimensions {
		get(dim: "window" | "screen"): ScaledSize,
		set(dims: {
		[key: string]: any
	}): void
	}

	declare export interface InteractionManagerStatic {
		Events: {
		interactionStart: string,
		interactionComplete: string
	},
		addListener(eventType: string, listener: Function, context?: Object): EmitterSubscription,
		runAfterInteractions(
		task: Function | SimpleTask | PromiseTask
	): {
		then: Function,
		done: Function,
		cancel: Function
	},
		createInteractionHandle(): Handle,
		clearInteractionHandle(handle: Handle): void,
		setDeadline(deadline: number): void
	}

	declare export interface ScrollViewStyle {
		backfaceVisibility?: "visible" | "hidden",
		backgroundColor?: string,
		borderColor?: string,
		borderTopColor?: string,
		borderRightColor?: string,
		borderBottomColor?: string,
		borderLeftColor?: string,
		borderRadius?: number,
		borderTopLeftRadius?: number,
		borderTopRightRadius?: number,
		borderBottomLeftRadius?: number,
		borderBottomRightRadius?: number,
		borderStyle?: "solid" | "dotted" | "dashed",
		borderWidth?: number,
		borderTopWidth?: number,
		borderRightWidth?: number,
		borderBottomWidth?: number,
		borderLeftWidth?: number,
		opacity?: number,
		overflow?: "visible" | "hidden",
		shadowColor?: string,
		shadowOffset?: {
		width: number,
		height: number
	},
		shadowOpacity?: number,
		shadowRadius?: number,
		elevation?: number
	}

	declare interface ScrollResponderMixin {
		scrollResponderHandleScrollShouldSetResponder(): boolean,
		scrollResponderHandleStartShouldSetResponder(): boolean,
		scrollResponderHandleStartShouldSetResponderCapture(e: Event): boolean,
		scrollResponderHandleResponderReject(): any,
		scrollResponderHandleTerminationRequest(): boolean,
		scrollResponderHandleTouchEnd(e: Event): void,
		scrollResponderHandleResponderRelease(e: Event): void,
		scrollResponderHandleScroll(e: Event): void,
		scrollResponderHandleResponderGrant(e: Event): void,
		scrollResponderHandleScrollBeginDrag(e: Event): void,
		scrollResponderHandleScrollEndDrag(e: Event): void,
		scrollResponderHandleMomentumScrollBegin(e: Event): void,
		scrollResponderHandleMomentumScrollEnd(e: Event): void,
		scrollResponderHandleTouchStart(e: Event): void,
		scrollResponderHandleTouchMove(e: Event): void,
		scrollResponderIsAnimating(): boolean,
		scrollResponderGetScrollableNode(): any,
		scrollResponderScrollTo(
		x?: number | {
		x?: number,
		y?: number,
		animated?: boolean
	}, y?: number, animated?: boolean
	): void,
		scrollResponderZoomTo(
		rect: {
		x: number,
		y: number,
		width: number,
		height: number,
		animated?: boolean
	}, animated?: boolean
	): void,
		scrollResponderScrollNativeHandleToKeyboard(
		nodeHandle: any, additionalOffset?: number, preventNegativeScrollOffset?: boolean
	): void,
		scrollResponderInputMeasureAndScrollToKeyboard(left: number, top: number, width: number, height: number): void,
		scrollResponderTextInputFocusError(e: Event): void,
		componentWillMount(): void,
		scrollResponderKeyboardWillShow(e: Event): void,
		scrollResponderKeyboardWillHide(e: Event): void,
		scrollResponderKeyboardDidShow(e: Event): void,
		scrollResponderKeyboardDidHide(e: Event): void
	}

	declare export interface ScrollViewPropertiesIOS {
		alwaysBounceHorizontal?: boolean,
		alwaysBounceVertical?: boolean,
		automaticallyAdjustContentInsets?: boolean,
		bounces?: boolean,
		bouncesZoom?: boolean,
		canCancelContentTouches?: boolean,
		centerContent?: boolean,
		contentInset?: Insets,
		contentOffset?: PointProperties,
		decelerationRate?: "fast" | "normal" | number,
		directionalLockEnabled?: boolean,
		indicatorStyle?: "default" | "black" | "white",
		maximumZoomScale?: number,
		minimumZoomScale?: number,
		onScrollAnimationEnd?: () => void,
		scrollEnabled?: boolean,
		scrollEventThrottle?: number,
		scrollIndicatorInsets?: Insets,
		scrollsToTop?: boolean,
		snapToAlignment?: "start" | "center" | "end",
		snapToInterval?: number,
		stickyHeaderIndices?: number[],
		zoomScale?: number
	}

	declare export interface ScrollViewPropertiesAndroid {
		endFillColor?: string,
		scrollPerfTag?: string
	}

	declare export interface ScrollViewProperties {
		contentContainerStyle?: ViewStyle,
		horizontal?: boolean,
		keyboardDismissMode?: string,
		keyboardShouldPersistTaps?: boolean,
		onScroll?: (event?: {
		nativeEvent: NativeScrollEvent
	}) => void,
		pagingEnabled?: boolean,
		removeClippedSubviews?: boolean,
		showsHorizontalScrollIndicator?: boolean,
		showsVerticalScrollIndicator?: boolean,
		style?: ScrollViewStyle,
		refreshControl?: React.ReactElement<RefreshControlProperties>,
		ref?: Ref<ScrollViewStatic & ViewStatic>
	}

	declare export interface ScrollViewProps {
		ref?: Ref<ScrollViewStatic>
	}

	declare interface ScrollViewStatic {
		scrollTo(
		y?: number | {
		x?: number,
		y?: number,
		animated?: boolean
	}, x?: number, animated?: boolean
	): void,
		getScrollResponder(): JSX.Element,
		getScrollableNode(): any,
		getInnerViewNode(): any,
		scrollWithoutAnimationTo?: (y: number, x: number) => void
	}

	declare export interface NativeScrollRectangle {
		left: number,
		top: number,
		bottom: number,
		right: number
	}

	declare export interface NativeScrollPoint {
		x: number,
		y: number
	}

	declare export interface NativeScrollSize {
		height: number,
		width: number
	}

	declare export interface NativeScrollEvent {
		contentInset: NativeScrollRectangle,
		contentOffset: NativeScrollPoint,
		contentSize: NativeScrollSize,
		layoutMeasurement: NativeScrollSize,
		zoomScale: number
	}

	declare export interface SnapshotViewIOSProperties {
		onSnapshotReady(): any,
		testIdentifier: string,
		ref?: Ref<ViewStatic & SnapshotViewIOSStatic>
	}

	declare export interface SnapshotViewIOSStatic {
		
	}

	declare export interface SwipeableListViewDataSource {
		cloneWithRowsAndSections(
		dataBlob: any, sectionIdentities?: Array<string>, rowIdentities?: Array<Array<string>>
	): SwipeableListViewDataSource,
		getDataSource(): ListViewDataSource,
		getOpenRowID(): string,
		getFirstRowID(): string,
		setOpenRowID(rowID: string): SwipeableListViewDataSource
	}

	declare export interface SwipeableListViewProps {
		bounceFirstRowOnMount: boolean,
		dataSource: SwipeableListViewDataSource,
		maxSwipeDistance: number,
		renderRow: (
		rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean
	) => React.ReactElement<any>,
		renderQuickActions(
		rowData: any, sectionID: string | number, rowID: string | number
	): React.ReactElement<any>
	}

	declare export interface SwipeableListViewStatic {
		getNewDataSource(): SwipeableListViewDataSource
	}

	declare export interface ActionSheetIOSOptions {
		title?: string,
		options: string[],
		cancelButtonIndex?: number,
		destructiveButtonIndex?: number,
		message?: string
	}

	declare export interface ShareActionSheetIOSOptions {
		message?: string,
		url?: string,
		subject?: string,
		excludedActivityTypes?: string[]
	}

	declare export interface ActionSheetIOSStatic {
		showActionSheetWithOptions: (
		options: ActionSheetIOSOptions, callback: (buttonIndex: number) => void
	) => void,
		showShareActionSheetWithOptions: (
		options: ShareActionSheetIOSOptions, failureCallback: (error: Error) => void, successCallback: (success: boolean, method: string) => void
	) => void
	}

	declare export interface ShareStatic {
		share(content: ShareContent, options: ShareOptions): Promise<Object>,
		sharedAction: string,
		dismissedAction: string
	}

	declare export interface AlertButton {
		text?: string,
		onPress?: () => void,
		style?: "default" | "cancel" | "destructive"
	}

	declare interface AlertOptions {
		cancelable?: boolean
	}

	declare export interface AlertStatic {
		alert: (
		title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions, type?: string
	) => void
	}

	declare export interface AlertAndroidStatic {
		alert: (
		title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions
	) => void
	}

	declare export interface AdSupportIOSStatic {
		getAdvertisingId: (onSuccess: (deviceId: string) => void, onFailure: (err: Error) => void) => void,
		getAdvertisingTrackingEnabled: (
		onSuccess: (hasTracking: boolean) => void, onFailure: (err: Error) => void
	) => void
	}

	declare interface AlertIOSButton {
		text: string,
		onPress?: () => void,
		style?: "default" | "cancel" | "destructive"
	}

	declare export interface AlertIOSStatic {
		alert: (
		title: string, message?: string, callbackOrButtons?: (() => void) | Array<AlertIOSButton>, type?: AlertType
	) => void,
		prompt: (
		title: string, message?: string, callbackOrButtons?: ((value: string) => void) | Array<AlertIOSButton>, type?: AlertType, defaultValue?: string
	) => void
	}

	declare export interface AppStateStatic {
		currentState: string,
		addEventListener(type: AppStateEvent, listener: (state: AppStateStatus) => void): void,
		removeEventListener(type: AppStateEvent, listener: (state: AppStateStatus) => void): void
	}

	declare export interface AsyncStorageStatic {
		getItem(
		key: string, callback?: (error?: Error, result?: string) => void
	): Promise<string>,
		setItem(
		key: string, value: string, callback?: (error?: Error) => void
	): Promise<string>,
		removeItem(key: string, callback?: (error?: Error) => void): Promise<string>,
		mergeItem(
		key: string, value: string, callback?: (error?: Error) => void
	): Promise<string>,
		clear(callback?: (error?: Error) => void): Promise<string>,
		getAllKeys(callback?: (error?: Error, keys?: string[]) => void): Promise<string>,
		multiGet(
		keys: string[], callback?: (errors?: Error[], result?: string[][]) => void
	): Promise<string>,
		multiSet(
		keyValuePairs: string[][], callback?: (errors?: Error[]) => void
	): Promise<string>,
		multiRemove(keys: string[], callback?: (errors?: Error[]) => void): Promise<string>,
		multiMerge(
		keyValuePairs: string[][], callback?: (errors?: Error[]) => void
	): Promise<string>
	}

	declare export interface BackAndroidStatic {
		exitApp(): void,
		addEventListener(eventName: BackPressEventName, handler: () => void): void,
		removeEventListener(eventName: BackPressEventName, handler: () => void): void
	}

	declare export interface CameraRollFetchParams {
		first: number,
		after?: string,
		groupTypes?: CameraRollGroupType,
		groupName?: string,
		assetType?: CameraRollAssetType
	}

	declare export interface CameraRollNodeInfo {
		image: Image,
		group_name: string,
		timestamp: number,
		location: any
	}

	declare export interface CameraRollEdgeInfo {
		node: CameraRollNodeInfo
	}

	declare export interface CameraRollAssetInfo {
		edges: CameraRollEdgeInfo[],
		page_info: {
		has_next_page: boolean,
		end_cursor: string
	}
	}

	declare export interface GetPhotosParamType {
		first: number,
		after?: string,
		groupTypes?: CameraRollGroupType,
		groupName?: string,
		assetType?: CameraRollAssetType,
		mimeTypes?: string[]
	}

	declare export interface GetPhotosReturnType {
		edges: {
		node: {
		type: string,
		group_name: string,
		image: {
		uri: string,
		height: number,
		width: number,
		isStored?: boolean
	},
		timestamp: number,
		location: {
		latitude: number,
		longitude: number,
		altitude: number,
		heading: number,
		speed: number
	}
	}
	}[],
		page_info: {
		has_next_page: boolean,
		start_cursor?: string,
		end_cursor?: string
	}
	}

	declare export interface CameraRollStatic {
		GroupTypesOptions: CameraRollGroupType[],
		AssetTypeOptions: CameraRollAssetType[],
		saveImageWithTag(tag: string): Promise<string>,
		saveToCameraRoll(tag: string, type?: "photo" | "video"): Promise<string>,
		getPhotos(params: GetPhotosParamType): Promise<GetPhotosReturnType>
	}

	declare export interface ClipboardStatic {
		getString(): Promise<string>,
		setString(content: string): void
	}

	declare export interface DatePickerAndroidOpenOption {
		date?: Date | number,
		minDate?: Date | number,
		maxDate?: Date | number
	}

	declare export interface DatePickerAndroidOpenReturn {
		action: string,
		year?: number,
		month?: number,
		day?: number
	}

	declare export interface DatePickerAndroidStatic {
		open(options?: DatePickerAndroidOpenOption): Promise<DatePickerAndroidOpenReturn>,
		dateSetAction: string,
		dismissedAction: string
	}

	declare export interface FetchableListenable<T> {
		fetch: () => Promise<T>,
		addEventListener: (eventName: string, listener: (result: T) => void) => void,
		removeEventListener: (eventName: string, listener: (result: T) => void) => void
	}

	declare export interface IntentAndroidStatic {
		openURL(url: string): void,
		canOpenURL(url: string, callback: (supported: boolean) => void): void,
		getInitialURL(callback: (url: string) => void): void
	}

	declare export interface LinkingStatic {
		addEventListener(type: string, handler: (event: {
		url: string
	}) => void): void,
		removeEventListener(type: string, handler: (event: {
		url: string
	}) => void): void,
		openURL(url: string): Promise<any>,
		canOpenURL(url: string): Promise<boolean>,
		getInitialURL(): Promise<string>
	}

	declare export interface LinkingIOSStatic {
		addEventListener(type: string, handler: (event: {
		url: string
	}) => void): void,
		removeEventListener(type: string, handler: (event: {
		url: string
	}) => void): void,
		openURL(url: string): void,
		canOpenURL(url: string, callback: (supported: boolean) => void): void,
		popInitialURL(): string
	}

	declare export interface NetInfoStatic {
		isConnected: FetchableListenable<boolean>,
		isConnectionExpensive: Promise<boolean>
	}

	declare export interface PanResponderGestureState {
		stateID: number,
		moveX: number,
		moveY: number,
		x0: number,
		y0: number,
		dx: number,
		dy: number,
		vx: number,
		vy: number,
		numberActiveTouches: number,
		_accountsForMovesUpTo: number
	}

	declare export interface PanResponderCallbacks {
		onMoveShouldSetPanResponder?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean,
		onStartShouldSetPanResponder?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void,
		onPanResponderGrant?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void,
		onPanResponderMove?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void,
		onPanResponderRelease?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void,
		onPanResponderTerminate?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void,
		onMoveShouldSetPanResponderCapture?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean,
		onStartShouldSetPanResponderCapture?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean,
		onPanResponderReject?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void,
		onPanResponderStart?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void,
		onPanResponderEnd?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void,
		onPanResponderTerminationRequest?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean
	}

	declare export interface PanResponderInstance {
		panHandlers: GestureResponderHandlers
	}

	declare export interface PanResponderStatic {
		create(config: PanResponderCallbacks): PanResponderInstance
	}

	declare export interface Rationale {
		title: string,
		message: string
	}

	declare export interface PermissionsAndroidStatic {
		PERMISSIONS: {
		[key: string]: Permission
	},
		new (): PermissionsAndroidStatic,
		checkPermission(permission: Permission): Promise<boolean>,
		requestPermission(permission: Permission, rationale?: Rationale): Promise<boolean>
	}

	declare export interface PushNotificationPermissions {
		alert?: boolean,
		badge?: boolean,
		sound?: boolean
	}

	declare export interface PushNotification {
		getMessage(): string | Object,
		getSound(): string,
		getAlert(): string | Object,
		getBadgeCount(): number,
		getData(): Object
	}

	declare export interface PushNotificationIOSStatic {
		presentLocalNotification(details: PresentLocalNotificationDetails): void,
		scheduleLocalNotification(details: ScheduleLocalNotificationDetails): void,
		cancelAllLocalNotifications(): void,
		cancelLocalNotifications(userInfo: Object): void,
		setApplicationIconBadgeNumber(number: number): void,
		getApplicationIconBadgeNumber(callback: (badge: number) => void): void,
		getScheduledLocalNotifications(callback: (notifications: ScheduleLocalNotificationDetails[]) => void): void,
		addEventListener(
		type: PushNotificationEventName, handler: (notification: PushNotification) => void
	): void,
		removeEventListener(
		type: PushNotificationEventName, handler: (notification: PushNotification) => void
	): void,
		requestPermissions(
		permissions?: PushNotificationPermissions
	): Promise<PushNotificationPermissions>,
		abandonPermissions(): void,
		checkPermissions(callback: (permissions: PushNotificationPermissions) => void): void,
		getInitialNotification(): PushNotification
	}

	declare export interface SettingsStatic {
		get(key: string): any,
		set(settings: Object): void,
		watchKeys(keys: string | Array<string>, callback: (() => void)): number,
		clearWatch(watchId: number): void
	}

	declare export interface StatusBarPropertiesIOS {
		barStyle?: StatusBarStyle,
		networkActivityIndicatorVisible?: boolean,
		showHideTransition?: "fade" | "slide"
	}

	declare export interface StatusBarPropertiesAndroid {
		backgroundColor?: string,
		translucent?: boolean
	}

	declare export interface StatusBarProperties {
		animated?: boolean,
		hidden?: boolean
	}

	declare export interface StatusBarStatic {
		currentHeight?: number,
		setHidden: (hidden: boolean, animation?: StatusBarAnimation) => void,
		setBarStyle: (style: StatusBarStyle, animated?: boolean) => void,
		setNetworkActivityIndicatorVisible: (visible: boolean) => void,
		setBackgroundColor: (color: string, animated?: boolean) => void,
		setTranslucent: (translucent: boolean) => void
	}

	declare export interface StatusBarIOSStatic {
		
	}

	declare export interface TimePickerAndroidStatic {
		open(
		options: TimePickerAndroidOpenOptions
	): Promise<{
		action: string,
		hour: number,
		minute: number
	}>,
		timeSetAction: string,
		dismissedAction: string
	}

	declare export interface ToastAndroidStatic {
		show(message: string, duration: number): void,
		showWithGravity(message: string, duration: number, gravity: number): void,
		SHORT: number,
		LONG: number,
		TOP: number,
		BOTTOM: number,
		CENTER: number
	}

	declare export interface UIManagerStatic {
		takeSnapshot: (
		view?: "window" | ReactElement<any> | number, options?: {
		width?: number,
		height?: number,
		format?: "png" | "jpeg",
		quality?: number
	}
	) => Promise<string>
	}

	declare export interface SwitchPropertiesIOS {
		onTintColor?: string,
		thumbTintColor?: string,
		tintColor?: string,
		ref?: Ref<SwitchStatic>
	}

	declare export interface SwitchProperties {
		disabled?: boolean,
		onValueChange?: (value: boolean) => void,
		testID?: string,
		value?: boolean,
		style?: ViewStyle
	}

	declare export interface SwitchStatic {
		
	}

	declare export interface VibrationIOSStatic {
		vibrate(): void
	}

	declare export interface VibrationStatic {
		vibrate(pattern: number | number[], repeat: boolean): void,
		cancel(): void
	}

	declare export interface EasingStatic {
		step0: EasingFunction,
		step1: EasingFunction,
		linear: EasingFunction,
		ease: EasingFunction,
		quad: EasingFunction,
		cubic: EasingFunction,
		poly: EasingFunction,
		sin: EasingFunction,
		circle: EasingFunction,
		exp: EasingFunction,
		elastic: EasingFunction,
		back(s: number): EasingFunction,
		bounce: EasingFunction,
		bezier(x1: number, y1: number, x2: number, y2: number): EasingFunction,
		in(easing: EasingFunction): EasingFunction,
		out(easing: EasingFunction): EasingFunction,
		inOut(easing: EasingFunction): EasingFunction
	}

	declare export interface I18nManagerStatic {
		isRTL: boolean,
		allowRTL: (allowRTL: boolean) => {
		
	},
		forceRTL: (forceRTL: boolean) => {
		
	}
	}

	declare export interface GeolocationStatic {
		getCurrentPosition(
		geo_success: (position: GeolocationReturnType) => void, geo_error?: (error: Error) => void, geo_options?: GetCurrentPositionOptions
	): void,
		watchPosition(
		success: (position: Geolocation) => void, error?: (error: Error) => void, options?: WatchPositionOptions
	): void,
		clearWatch(watchID: number): void,
		stopObserving(): void
	}

	declare export interface OpenCameraDialogOptions {
		videoMode?: boolean
	}

	declare export interface OpenSelectDialogOptions {
		showImages?: boolean,
		showVideos?: boolean
	}

	declare export interface ImagePickerIOSStatic {
		canRecordVideos(callback: (value: boolean) => void): void,
		canUseCamera(callback: (value: boolean) => void): void,
		openCameraDialog(
		config: OpenCameraDialogOptions, successCallback: (args: ImagePickerResult) => void, cancelCallback: (args: any[]) => void
	): void,
		openSelectDialog(
		config: OpenSelectDialogOptions, successCallback: (args: ImagePickerResult) => void, cancelCallback: (args: any[]) => void
	): void
	}

	declare export interface ImageStoreStatic {
		hasImageForTag(uri: string, callback: (hasImage: boolean) => void): void,
		removeImageForTag(uri: string): void,
		addImageFromBase64(
		base64ImageData: string, success: (uri: string) => void, failure: (error: any) => void
	): void,
		getBase64ForTag(
		uri: string, success: (base64ImageData: string) => void, failure: (error: any) => void
	): void
	}

	declare export interface TabsReducerStatic {
		JumpToAction(index: number): any
	}

	declare export interface NavigationTab {
		key: string
	}

	declare export interface NavigationAction {
		type: string
	}

	declare export interface NavigationRoute {
		key: string
	}

	declare export interface NavigationState {
		index: number,
		routes: NavigationRoute[]
	}

	declare export interface NavigationHeaderProps {
		renderTitleComponent(props: Object): JSX.Element,
		renderLeftComponent(props: Object): JSX.Element,
		renderRightComponent(props: Object): JSX.Element,
		onNavigateBack(): void,
		style?: ViewStyle,
		viewProps?: any,
		statusBarHeight?: number | NavigationAnimatedValue
	}

	declare export interface NavigationHeaderStatic {
		Title: () => JSX.ElementClass,
		HEIGHT: number
	}

	declare export interface NavigationCardStackProps {
		cardStyle?: ViewStyle,
		direction?: "horizontal" | "vertical",
		gestureResponseDistance?: number,
		enableGestures?: boolean,
		navigationState: NavigationState,
		onNavigateBack?: Function,
		renderHeader?: Function,
		renderScene: Function,
		style?: ViewStyle
	}

	declare export interface NavigationSceneRendererProps {
		layout: NavigationLayout,
		navigationState: NavigationState,
		position: NavigationAnimatedValue,
		progress: NavigationAnimatedValue,
		scenes: Array<NavigationScene>,
		scene: NavigationScene,
		gestureResponseDistance?: number
	}

	declare export interface NavigationSceneRenderer {
		
	}

	declare export interface NavigationPropTypes {
		extractSceneRendererProps(props: NavigationSceneRendererProps): NavigationSceneRendererProps,
		SceneRendererProps: {
		layout: string,
		navigationState: string,
		position: string,
		progress: string,
		scene: string,
		scenes: NavigationScene[]
	},
		SceneRenderer: any,
		action: NavigationAction,
		navigationState: NavigationState,
		navigationRoute: NavigationRoute,
		panHandlers: GestureResponderHandlers
	}

	declare export interface NavigationCardProps {
		onComponentRef: (ref: any) => void,
		onNavigateBack: Function,
		panHandlers: GestureResponderHandlers,
		pointerEvents: string,
		renderScene: NavigationSceneRenderer,
		style: any
	}

	declare export interface NavigationCardStackStatic {
		
	}

	declare export interface NavigationCardStatic {
		
	}

	declare export interface NavigationStateUtils {
		get(state: NavigationState, key: string): NavigationRoute,
		indexOf(state: NavigationState, key: string): number,
		has(state: NavigationState, key: string): boolean,
		push(state: NavigationState, route: NavigationRoute): NavigationState,
		pop(state: NavigationState): NavigationState,
		jumpToIndex(state: NavigationState, index: number): NavigationState,
		jumpTo(state: NavigationState, key: string): NavigationState,
		back(state: NavigationState): NavigationState,
		forward(state: NavigationState): NavigationState,
		replaceAt(state: NavigationState, key: string, route: NavigationRoute): NavigationState,
		replaceAtIndex(state: NavigationState, index: number, route: NavigationRoute): NavigationState,
		reset(
		state: NavigationState, routes: Array<NavigationRoute>, index?: number
	): NavigationState
	}

	declare export interface NavigationTransitionerProps {
		configureTransition: (
		a: NavigationTransitionProps, b?: NavigationTransitionProps
	) => NavigationTransitionSpec,
		navigationState: NavigationState,
		onTransitionEnd: () => void,
		onTransitionStart: () => void,
		render: (a: NavigationTransitionProps, b?: NavigationTransitionProps) => any,
		style: any
	}

	declare export interface NavigationTransitioner {
		
	}

	declare export interface NavigationCard {
		
	}

	declare export interface NavigationExperimentalStatic {
		StateUtils: NavigationStateUtils,
		Transitioner: NavigationTransitioner,
		Card: NavigationCard,
		CardStack: NavigationCardStackStatic,
		Header: NavigationHeaderStatic,
		PropTypes: NavigationPropTypes
	}

	declare export interface NativeEventSubscription {
		remove(): void
	}

	declare interface ImageCropData {
		offset: {
		x: number,
		y: number
	},
		size: {
		width: number,
		height: number
	},
		displaySize?: {
		width: number,
		height: number
	},
		resizeMode?: "contain" | "cover" | "stretch"
	}

	declare interface ImageEditorStatic {
		cropImage(
		uri: string, cropData: ImageCropData, success: (uri: string) => void, failure: (error: Object) => void
	): void
	}

	declare export interface NativeEventEmitter {
		
	}

	declare export interface ComponentInterface<P> {
		name?: string,
		displayName?: string,
		propTypes: P
	}

	declare export interface GlobalStatic {
		requestAnimationFrame(fn: () => void): void
	}

	declare export function createElement<P>(
		type: React.ReactType, props?: P, ...children: React.ReactNode[]
	): React.ReactElement<P>

	declare export function requireNativeComponent<P>(
		viewName: string, componentInterface?: ComponentInterface<P>, extraConfig?: {
		nativeOnly?: any
	}
	): React.ComponentClass<P>

	declare export function processColor(color: any): number

	declare export function ___spread(target: any, ...sources: any[]): any

	declare export class AppRegistry  {
		registerConfig(config: AppConfig[]): void;
		registerComponent(appKey: string, getComponentFunc: ComponentProvider): string;
		registerRunnable(appKey: string, func: Runnable): string;
		getAppKeys(): string[];
		unmountApplicationComponentAtRootTag(rootTag: number): void;
		runApplication(appKey: string, appParameters: any): void
	}

	
}

declare module 'NavigatorStatic' {
	declare export type NavigationBar = NavigationBarStatic;

	declare export type BreadcrumbNavigationBar = BreadcrumbNavigationBarStatic;

	declare export interface NavState {
		routeStack: Route[],
		presentedIndex: number
	}

	declare export interface NavigationBarStyle {
		General: {
		NavBarHeight: number,
		StatusBarHeight: number,
		TotalNavHeight: number
	},
		Interpolators: {
		RightToCenter: () => boolean,
		CenterToLeft: () => boolean,
		RightToLeft: () => boolean
	},
		Stages: {
		Left: {
		Title: FlexStyle,
		LeftButton: FlexStyle,
		RightButton: FlexStyle
	},
		Center: {
		Title: FlexStyle,
		LeftButton: FlexStyle,
		RightButton: FlexStyle
	},
		Right: {
		Title: FlexStyle,
		LeftButton: FlexStyle,
		RightButton: FlexStyle
	}
	}
	}

	declare export interface NavigationBarRouteMapper {
		Title: (
		route: Route, nav: Navigator, index: number, navState: NavState
	) => React.ReactElement<any>,
		LeftButton: (
		route: Route, nav: Navigator, index: number, navState: NavState
	) => React.ReactElement<any>,
		RightButton: (
		route: Route, nav: Navigator, index: number, navState: NavState
	) => React.ReactElement<any>
	}

	declare export interface NavigationBarProperties {
		navigator?: Navigator,
		routeMapper?: NavigationBarRouteMapper,
		navState?: NavState,
		navigationStyles?: NavigationBarStyle,
		style?: ViewStyle
	}

	declare export interface NavigationBarStatic {
		Styles: NavigationBarStyle,
		StylesAndroid: NavigationBarStyle,
		StylesIOS: NavigationBarStyle,
		immediatelyRefresh(): void
	}

	declare export interface BreadcrumbNavigationBarStyle {
		
	}

	declare export interface BreadcrumbNavigationBarRouteMapper {
		rightContentForRoute: (route: Route, navigator: Navigator) => React.ReactElement<any>,
		titleContentForRoute: (route: Route, navigator: Navigator) => React.ReactElement<any>,
		iconForRoute: (route: Route, navigator: Navigator) => React.ReactElement<any>,
		separatorForRoute: (route: Route, navigator: Navigator) => React.ReactElement<any>
	}

	declare export interface BreadcrumbNavigationBarProperties {
		navigator?: Navigator,
		routeMapper?: BreadcrumbNavigationBarRouteMapper,
		navState?: NavState,
		style?: ViewStyle
	}

	declare export interface BreadcrumbNavigationBarStatic {
		Styles: BreadcrumbNavigationBarStyle,
		immediatelyRefresh(): void
	}

			
}

declare module 'StyleSheet' {
	declare type Style = ViewStyle | TextStyle | ImageStyle;

		declare export function create<T>(styles: T): T

	declare export function flatten(style?: Style | Style[]): Style

		
}

declare module 'Animated' {
	declare type AnimatedValue = Animated;

	declare type AnimatedValueXY = ValueXY;

	declare type Base = Animated;

	declare type ExtrapolateType = "extend" | "identity" | "clamp";

	declare type InterpolationConfigType = {
		inputRange: number[],
		outputRange: (number[] | string[]),
		easing?: ((input: number) => number),
		extrapolate?: ExtrapolateType,
		extrapolateLeft?: ExtrapolateType,
		extrapolateRight?: ExtrapolateType
	};

	declare type ValueListenerCallback = (state: {
		value: number
	}) => void;

	declare type ValueXYListenerCallback = (value: {
		x: number,
		y: number
	}) => void;

	declare type EndResult = {
		finished: boolean
	};

	declare type EndCallback = (result: EndResult) => void;

	declare type ParallelConfig = {
		stopTogether?: boolean
	};

	declare type Mapping = {
		[key: string]: Mapping
	} | AnimatedValue;

	declare interface CompositeAnimation {
		start: (callback?: EndCallback) => void,
		stop: () => void
	}

	declare interface AnimationConfig {
		isInteraction?: boolean,
		useNativeDriver?: boolean
	}

	declare interface DecayAnimationConfig {
		velocity: number | {
		x: number,
		y: number
	},
		deceleration?: number
	}

	declare interface TimingAnimationConfig {
		toValue: number | AnimatedValue | {
		x: number,
		y: number
	} | AnimatedValueXY,
		easing?: (value: number) => number,
		duration?: number,
		delay?: number
	}

	declare interface SpringAnimationConfig {
		toValue: number | AnimatedValue | {
		x: number,
		y: number
	} | AnimatedValueXY,
		overshootClamping?: boolean,
		restDisplacementThreshold?: number,
		restSpeedThreshold?: number,
		velocity?: number | {
		x: number,
		y: number
	},
		bounciness?: number,
		speed?: number,
		tension?: number,
		friction?: number
	}

	declare interface EventConfig {
		listener?: Function
	}

	declare export function decay(
		value: AnimatedValue | AnimatedValueXY, config: DecayAnimationConfig
	): CompositeAnimation

	declare export function add(a: Animated, b: Animated): AnimatedAddition

	declare export function multiply(a: Animated, b: Animated): AnimatedMultiplication

	declare export function modulo(a: Animated, modulus: number): AnimatedModulo

	declare export function diffClamp(a: Animated, min: number, max: number): AnimatedDiffClamp

	declare export function delay(time: number): CompositeAnimation

	declare export function sequence(animations: Array<CompositeAnimation>): CompositeAnimation

	declare export function stagger(time: number, animations: Array<CompositeAnimation>): CompositeAnimation

	declare export function spring(
		value: AnimatedValue | AnimatedValueXY, config: SpringAnimationConfig
	): CompositeAnimation

	declare export function parallel(
		animations: Array<CompositeAnimation>, config?: ParallelConfig
	): CompositeAnimation

	declare export function event(argMapping: Mapping[], config?: EventConfig): (...args: any[]) => void

	declare export function createAnimatedComponent(component: any): any

	declare class Animated  {
		
	}

	declare class AnimatedWithChildren extends Animated {
		
	}

	declare class AnimatedInterpolation extends AnimatedWithChildren {
		interpolate(config: InterpolationConfigType): AnimatedInterpolation
	}

	declare export class Value extends AnimatedWithChildren {
		constructor(value: number): this;
		setValue(value: number): void;
		setOffset(offset: number): void;
		flattenOffset(): void;
		addListener(callback: ValueListenerCallback): string;
		removeListener(id: string): void;
		removeAllListeners(): void;
		stopAnimation(callback?: (value: number) => void): void;
		interpolate(config: InterpolationConfigType): AnimatedInterpolation
	}

	declare export class ValueXY extends AnimatedWithChildren {
		x: AnimatedValue;
		y: AnimatedValue;
		constructor(valueIn?: {
		x: number | AnimatedValue,
		y: number | AnimatedValue
	}): this;
		setValue(value: {
		x: number,
		y: number
	}): void;
		setOffset(offset: {
		x: number,
		y: number
	}): void;
		flattenOffset(): void;
		stopAnimation(callback?: (value: {
		x: number,
		y: number
	}) => void): void;
		addListener(callback: ValueXYListenerCallback): string;
		removeListener(id: string): void;
		getLayout(): {
		[key: string]: AnimatedValue
	};
		getTranslateTransform(): {
		[key: string]: AnimatedValue
	}[]
	}

	declare class AnimatedAddition extends AnimatedInterpolation {
		
	}

	declare class AnimatedMultiplication extends AnimatedInterpolation {
		
	}

	declare class AnimatedModulo extends AnimatedInterpolation {
		
	}

	declare class AnimatedDiffClamp extends AnimatedInterpolation {
		
	}

	
}

declare module 'addons' {
	declare export type TestModule = TestModuleStatic;

	declare export interface TestModuleStatic {
		verifySnapshot: (done: (indicator?: any) => void) => void,
		markTestPassed: (indicator: any) => void,
		markTestCompleted: () => void
	}

			
}
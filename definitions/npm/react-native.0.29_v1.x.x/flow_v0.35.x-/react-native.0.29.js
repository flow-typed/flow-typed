import type { GlobalStatic } from 'npm$namespace$___React'

declare module 'react-native.0.29' {
			declare function require(name: string): any

		
}

declare module 'NativeMethodsMixin' {
	declare type MeasureOnSuccessCallback = (
		x: number, y: number, width: number, height: number, pageX: number, pageY: number
	) => void;

	declare type MeasureInWindowOnSuccessCallback = (x: number, y: number, width: number, height: number) => void;

	declare type MeasureLayoutOnSuccessCallback = (left: number, top: number, width: number, height: number) => void;

				
}

declare module 'npm$namespace$___React' {
	declare export type Runnable = (appParameters: any) => void;

	declare export type AppConfig = {
		appKey: string,
		component: ReactClass<any, any, any>,
		run?: Runnable
	};

	declare export type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch";

	declare export type FlexJustifyType = "flex-start" | "flex-end" | "center" | "space-between" | "space-around";

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
		longitude: number
	}
	};

	declare export type ToolbarAndroidAction = {
		title: string,
		icon?: any,
		show?: "always" | "ifRoom" | "never",
		showWithText?: boolean
	};

	declare export type PlatformOSType = "ios" | "android";

	declare export type PromiseTask = {
		gen: () => Promise<any>
	};

	declare export type Handle = number;

	declare export type AppStateEvent = "change" | "memoryWarning";

	declare export type AppStateStatus = "active" | "background" | "inactive";

	declare export type NetInfoReturnType = "none" | "wifi" | "cell" | "unknown" | "NONE" | "MOBILE" | "WIFI" | "MOBILE_MMS" | "MOBILE_SUPL" | "MOBILE_DUN" | "MOBILE_HIPRI" | "WIMAX" | "BLUETOOTH" | "DUMMY" | "ETHERNET" | "MOBILE_FOTA" | "MOBILE_IMS" | "MOBILE_CBS" | "WIFI_P2P" | "MOBILE_IA" | "MOBILE_EMERGENCY" | "PROXY" | "VPN" | "UNKNOWN";

	declare type PresentLocalNotificationDetails = {
		alertBody: string,
		alertAction: string,
		soundName?: string,
		category?: string,
		userInfo?: Object
	};

	declare type ScheduleLocalNotificationDetails = {
		fireDate: Date,
		alertBody: string,
		alertAction: string,
		soundName?: string,
		category?: string,
		userInfo?: Object
	};

	declare export type StatusBarStyle = "default" | "light-content";

	declare type StatusBarAnimation = "none" | "fade" | "slide";

	declare type TimePickerAndroidOpenOptions = {
		hour?: number,
		minute?: number,
		is24Hour?: boolean
	};

	declare export type EasingFunction = (value: number) => number;

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

	declare export type ActivityIndicator = ActivityIndicatorStatic;

	declare export type ActivityIndicatorIOS = ActivityIndicatorIOSStatic;

	declare export type DatePickerIOS = DatePickerIOSStatic;

	declare export type DrawerLayoutAndroid = DrawerLayoutAndroidStatic;

	declare export type Image = ImageStatic;

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

	declare export type Slider = SliderIOS;

	declare export type SliderIOS = SliderIOSStatic;

	declare export type StatusBar = StatusBarStatic;

	declare export type ScrollView = ScrollViewStatic;

	declare export type StyleSheet = StyleSheetStatic;

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

	declare export type AdSupportIOS = AdSupportIOSStatic;

	declare export type Alert = AlertStatic;

	declare export type AlertIOS = AlertIOSStatic;

	declare export type AppState = AppStateStatic;

	declare export type AppStateIOS = AppStateStatic;

	declare export type AsyncStorage = AsyncStorageStatic;

	declare export type BackAndroid = BackAndroidStatic;

	declare export type CameraRoll = CameraRollStatic;

	declare export type Clipboard = ClipboardStatic;

	declare export type DatePickerAndroid = DatePickerAndroidStatic;

	declare export type IntentAndroid = IntentAndroidStatic;

	declare export type KeyboardAvoidingView = KeyboardAvoidingViewStatic;

	declare export type Linking = LinkingStatic;

	declare export type LinkingIOS = LinkingIOSStatic;

	declare export type NetInfo = NetInfoStatic;

	declare export type PanResponder = PanResponderStatic;

	declare export type PushNotificationIOS = PushNotificationIOSStatic;

	declare export type StatusBarIOS = StatusBarIOSStatic;

	declare export type TimePickerAndroid = TimePickerAndroidStatic;

	declare export type ToastAndroid = ToastAndroidStatic;

	declare export type VibrationIOS = VibrationIOSStatic;

	declare export type Vibration = VibrationStatic;

	declare export type NavigationExperimental = NavigationExperimentalStatic;

	declare export type NavigationContainer = NavigationContainerStatic;

	declare export type NavigationRootContainer = NavigationRootContainerStatic;

	declare export type NavigationReducer = NavigationReducerStatic;

	declare export type Easing = EasingStatic;

	declare export type SegmentedControlIOS = SegmentedControlIOSStatic;

	declare export type DeviceEventSubscription = DeviceEventSubscriptionStatic;

	declare export type Geolocation = GeolocationStatic;

	declare export interface NativeComponent {
		measure(callback: NativeMethodsMixin.MeasureOnSuccessCallback): void,
		measureInWindow(callback: NativeMethodsMixin.MeasureInWindowOnSuccessCallback): void,
		measureLayout(
		relativeToNativeNode: number, onSuccess: NativeMethodsMixin.MeasureLayoutOnSuccessCallback, onFail: () => void
	): void,
		setNativeProps(nativeProps: Object): void,
		focus(): void,
		blur(): void,
		refs: {
		[key: string]: Component<any, any>
	}
	}

	declare export interface ReactClass<D, P, S> {
		
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
		configureNext: (
		config: LayoutAnimationConfig, onAnimationDidEnd?: () => void, onError?: (error?: any) => void
	) => void,
		create: (
		duration: number, type?: string, creationProp?: string
	) => LayoutAnimationConfig,
		Types: LayoutAnimationTypes,
		Properties: LayoutAnimationProperties,
		configChecker: (conf: {
		config: LayoutAnimationConfig
	}, name: string, next: string) => void,
		Presets: {
		easeInEaseOut: LayoutAnimationConfig,
		linear: LayoutAnimationConfig,
		spring: LayoutAnimationConfig
	}
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
		flexDirection?: "row" | "column" | "row-reverse" | "column-reverse",
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
		allowFontScaling: boolean,
		suppressHighlighting?: boolean
	}

	declare export interface TextProperties {
		allowFontScaling?: boolean,
		lineBreakMode?: "head" | "middle" | "tail" | "clip",
		numberOfLines?: number,
		onLayout?: (event: LayoutChangeEvent) => void,
		onPress?: () => void,
		style?: TextStyle,
		testID?: string
	}

	declare export interface TextStatic {
		
	}

	declare export interface TextInputIOSProperties {
		clearButtonMode?: string,
		clearTextOnFocus?: boolean,
		enablesReturnKeyAutomatically?: boolean,
		onKeyPress?: () => void,
		selectionState?: any
	}

	declare export interface TextInputAndroidProperties {
		numberOfLines?: number,
		returnKeyLabel?: string,
		textAlign?: string,
		textAlignVertical?: string,
		underlineColorAndroid?: string
	}

	declare export interface TextInputProperties {
		autoCapitalize?: "none" | "sentences" | "words" | "characters",
		autoCorrect?: boolean,
		autoFocus?: boolean,
		blurOnSubmit?: boolean,
		defaultValue?: string,
		editable?: boolean,
		keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search",
		maxLength?: number,
		multiline?: boolean,
		onBlur?: () => void,
		onChange?: (event: {
		nativeEvent: {
		text: string
	}
	}) => void,
		onChangeText?: (text: string) => void,
		onEndEditing?: (event: {
		nativeEvent: {
		text: string
	}
	}) => void,
		onFocus?: () => void,
		onLayout?: (
		event: {
		nativeEvent: {
		x: number,
		y: number,
		width: number,
		height: number
	}
	}
	) => void,
		onSelectionChange?: () => void,
		onSubmitEditing?: (event: {
		nativeEvent: {
		text: string
	}
	}) => void,
		password?: boolean,
		placeholder?: string,
		placeholderTextColor?: string,
		returnKeyType?: "default" | "go" | "google" | "join" | "next" | "route" | "search" | "send" | "yahoo" | "done" | "emergency-call",
		secureTextEntry?: boolean,
		selectTextOnFocus?: boolean,
		selectionColor?: string,
		style?: TextStyle,
		testID?: string,
		value?: string
	}

	declare export interface TextInputStatic {
		isFocused: () => boolean,
		clear: () => void,
		blur: () => void,
		focus: () => void
	}

	declare export interface ToolbarAndroidProperties {
		actions?: ToolbarAndroidAction[],
		contentInsetEnd?: number,
		contentInsetStart?: number,
		logo?: any,
		navIcon?: any,
		onActionSelected?: (position: number) => void,
		onIconClicked?: () => void,
		overflowIcon?: any,
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
		onResponderGrant?: (event: GestureResponderEvent) => void,
		onResponderReject?: (event: GestureResponderEvent) => void,
		onResponderMove?: (event: GestureResponderEvent) => void,
		onResponderRelease?: (event: GestureResponderEvent) => void,
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
		accessibilityTraits?: string | string[],
		shouldRasterizeIOS?: boolean
	}

	declare export interface ViewPropertiesAndroid {
		accessibilityComponentType?: string,
		accessibilityLiveRegion?: string,
		collapsable?: boolean,
		importantForAccessibility?: string,
		needsOffscreenAlphaCompositing?: boolean,
		renderToHardwareTextureAndroid?: boolean
	}

	declare export interface ViewProperties {
		accessibilityLabel?: string,
		accessible?: boolean,
		hitSlop?: {
		top: number,
		left: number,
		bottom: number,
		right: number
	},
		onAcccessibilityTap?: () => void,
		onLayout?: (event: LayoutChangeEvent) => void,
		onMagicTap?: () => void,
		pointerEvents?: "box-none" | "none" | "box-only" | "autoViewStyle",
		removeClippedSubviews?: boolean,
		style?: ViewStyle,
		testID?: string
	}

	declare export interface ViewStatic {
		
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
		setPage: (selectedPage: number) => void,
		setPageWithoutAnimation: (selectedPage: number) => void
	}

	declare export interface KeyboardAvoidingViewStatic {
		
	}

	declare export interface KeyboardAvoidingViewProps {
		behavior?: "height" | "position" | "padding",
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
		bounces?: boolean,
		contentInset?: Insets,
		html?: string,
		injectedJavaScript?: string,
		onError?: (event: NavState) => void,
		onLoad?: (event: NavState) => void,
		onLoadEnd?: (event: NavState) => void,
		onLoadStart?: (event: NavState) => void,
		onNavigationStateChange?: (event: NavState) => void,
		onShouldStartLoadWithRequest?: () => boolean,
		renderError?: () => React.ReactElement<ViewProperties>,
		renderLoading?: () => React.ReactElement<ViewProperties>,
		scrollEnabled?: boolean,
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
		initialRoute?: Route,
		itemWrapperStyle?: ViewStyle,
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
		size?: "small" | "large",
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
		date?: Date,
		maximumDate?: Date,
		minimumDate?: Date,
		minuteInterval?: number,
		mode?: "date" | "time" | "datetime",
		onDateChange?: (newDate: Date) => void,
		timeZoneOffsetInMinutes?: number,
		ref?: Ref<DatePickerIOSStatic>
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
		renderNavigationView?: () => JSX.Element,
		statusBarBackgroundColor?: any,
		ref?: Ref<DrawerLayoutAndroidStatic & ViewStatic>
	}

	declare export interface DrawerLayoutAndroidStatic {
		positions: {
		Left: number,
		Right: number
	},
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
		value?: any,
		color?: string,
		testID?: string
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
		Item: PickerItemStatic
	}

	declare export interface PickerIOSProperties {
		itemStyle?: ViewStyle
	}

	declare export interface PickerIOSStatic {
		Item: PickerIOSItemStatic
	}

	declare export interface ProgressBarAndroidProperties {
		style?: ViewStyle,
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
		style?: ViewStyle,
		progressViewStyle?: "default" | "bar",
		progress?: number,
		progressTintColor?: string,
		trackTintColor?: string,
		progressImage?: any,
		trackImage?: any,
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
		refreshing?: boolean,
		ref?: Ref<RefreshControlStatic>
	}

	declare export interface RefreshControlStatic {
		SIZE: Object
	}

	declare export interface SliderPropertiesIOS {
		maximumTrackImage?: any,
		maximumTrackTintColor?: string,
		minimumTrackImage?: string,
		minimumTrackTintColor?: string,
		thumbImage?: any,
		trackImage?: any,
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

	declare export interface SliderIOSProperties {
		disabled?: boolean,
		maximumValue?: number,
		maximumTrackTintColor?: string,
		minimumValue?: number,
		minimumTrackImage?: any,
		minimumTrackTintColor?: string,
		onSlidingComplete?: () => void,
		onValueChange?: (value: number) => void,
		step?: number,
		style?: ViewStyle,
		value?: number,
		ref?: Ref<SliderIOSStatic>
	}

	declare export interface SliderIOSStatic {
		
	}

	declare export interface SwitchIOSStyle {
		height?: number,
		width?: number
	}

	declare export interface SwitchIOSProperties {
		disabled?: boolean,
		onTintColor?: string,
		onValueChange?: (value: boolean) => void,
		thumbTintColor?: string,
		tintColor?: string,
		value?: boolean,
		style?: SwitchIOSStyle
	}

	declare export interface SwitchIOSStatic {
		
	}

	declare export interface ImageResizeModeStatic {
		contain: string,
		cover: string,
		stretch: string
	}

	declare export interface ImageStyle {
		resizeMode?: string,
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
		capInsets?: Insets,
		defaultSource?: {
		uri: string
	} | number,
		onError?: (error: {
		nativeEvent: any
	}) => void,
		onProgress?: () => void
	}

	declare export interface ImageProperties {
		onLayout?: (event: LayoutChangeEvent) => void,
		onLoad?: () => void,
		onLoadEnd?: () => void,
		onLoadStart?: () => void,
		resizeMode?: "cover" | "contain" | "stretch",
		source: {
		uri: string
	} | string,
		style?: ImageStyle,
		testID?: string
	}

	declare export interface ImageStatic {
		uri: string,
		resizeMode: ImageResizeModeStatic,
		getSize(
		uri: string, success: (width: number, height: number) => void, failure: (error: any) => void
	): any,
		prefetch(url: string): any
	}

	declare export interface ListViewProperties {
		dataSource?: ListViewDataSource,
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
		renderRow?: (
		rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean
	) => React.ReactElement<any>,
		renderScrollComponent?: (props: ScrollViewProperties) => React.ReactElement<ScrollViewProperties>,
		renderSectionHeader?: (sectionData: any, sectionId: string | number) => React.ReactElement<any>,
		renderSeparator?: (
		sectionID: string | number, rowID: string | number, adjacentRowHighlighted?: boolean
	) => React.ReactElement<any>,
		scrollRenderAheadDistance?: number,
		ref?: Ref<ListViewStatic & ScrollViewStatic & ViewStatic>
	}

	declare export interface ListViewStatic {
		DataSource: ListViewDataSource
	}

	declare export interface MapViewAnnotation {
		latitude?: number,
		longitude?: number,
		animateDrop?: boolean,
		title?: string,
		subtitle?: string,
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
		strokeColor?: Object,
		fillColor?: Object,
		id?: string
	}

	declare export interface MapViewPropertiesIOS {
		showsPointsOfInterest?: boolean,
		annotations?: MapViewAnnotation[],
		followUserLocation?: boolean,
		legalLabelInsets?: Insets,
		mapType?: string,
		maxDelta?: number,
		minDelta?: number,
		overlays: MapViewOverlay[],
		showsCompass?: boolean
	}

	declare export interface MapViewPropertiesAndroid {
		active?: boolean
	}

	declare export interface MapViewProperties {
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
		
	}

	declare export interface ModalProperties {
		animated?: boolean,
		animationType?: "none" | "slide" | "fade",
		transparent?: boolean,
		visible?: boolean,
		onRequestClose?: () => void,
		onShow?: (event: NativeSyntheticEvent<any>) => void
	}

	declare export interface ModalStatic {
		
	}

	declare export interface TouchableWithoutFeedbackAndroidProperties {
		accessibilityComponentType?: string
	}

	declare export interface TouchableWithoutFeedbackIOSProperties {
		accessibilityTraits?: string | string[]
	}

	declare export interface TouchableWithoutFeedbackProperties {
		accessible?: boolean,
		delayLongPress?: number,
		delayPressIn?: number,
		delayPressOut?: number,
		disabled?: boolean,
		hitSlop?: {
		top: number,
		left: number,
		bottom: number,
		right: number
	},
		onLayout?: (event: LayoutChangeEvent) => void,
		onLongPress?: () => void,
		onPress?: () => void,
		onPressIn?: () => void,
		onPressOut?: () => void,
		style?: ViewStyle,
		pressRetentionOffset?: {
		top: number,
		left: number,
		bottom: number,
		right: number
	}
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

	declare export interface TouchableNativeFeedbackProperties {
		background?: any
	}

	declare export interface TouchableNativeFeedbackStatic {
		SelectableBackground: () => TouchableNativeFeedbackStatic,
		SelectableBackgroundBorderless: () => TouchableNativeFeedbackStatic,
		Ripple: (color: string, borderless?: boolean) => TouchableNativeFeedbackStatic
	}

	declare export interface LeftToRightGesture {
		
	}

	declare export interface AnimationInterpolator {
		
	}

	declare export interface SceneConfig {
		gestures: {
		pop: LeftToRightGesture
	},
		springFriction: number,
		springTension: number,
		defaultTransitionVelocity: number,
		animationInterpolators: {
		into: AnimationInterpolator,
		out: AnimationInterpolator
	}
	}

	declare export interface SceneConfigs {
		PushFromRight: SceneConfig,
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
		renderScene?: (route: Route, navigator: Navigator) => React.ReactElement<ViewProperties>,
		sceneStyle?: ViewStyle,
		debugOverlay?: boolean
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

	declare export interface NavigatorStatic {
		SceneConfigs: SceneConfigs,
		NavigationBar: NavigatorStatic.NavigationBarStatic,
		BreadcrumbNavigationBar: NavigatorStatic.BreadcrumbNavigationBarStatic,
		navigationContext: NavigationContext,
		getContext(self: any): NavigatorStatic,
		getCurrentRoutes(): Route[],
		jumpBack(): void,
		jumpForward(): void,
		jumpTo(route: Route): void,
		push(route: Route): void,
		pop(): void,
		replace(route: Route): void,
		replaceAtIndex(route: Route, index: number): void,
		replacePrevious(route: Route): void,
		immediatelyResetRouteStack(routes: Route[]): void,
		popToRoute(route: Route): void,
		popToTop(): void,
		replacePreviousAndPop(route: Route): void,
		resetTo(route: Route): void
	}

	declare export interface StyleSheetStatic {
		create<T>(styles: T): T,
		flatten(style: Object): Object,
		hairlineWidth: number,
		absoluteFill: number,
		absoluteFillObject: {
		position: string,
		left: number,
		right: number,
		top: number,
		bottom: number
	}
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
		getRowData(sectionIndex: number, rowIndex: number): any,
		getRowIDForFlatIndex(index: number): string,
		getSectionIDForFlatIndex(index: number): string,
		getSectionLengths(): Array<number>,
		sectionHeaderShouldUpdate(sectionIndex: number): boolean,
		getSectionHeaderData(sectionIndex: number): any
	}

	declare export interface TabBarItemProperties {
		badge?: string | number,
		icon?: {
		uri: string
	} | string,
		onPress?: () => void,
		selected?: boolean,
		selectedIcon?: {
		uri: string
	} | string,
		style?: ViewStyle,
		systemIcon: "bookmarks" | "contacts" | "downloads" | "favorites" | "featured" | "history" | "more" | "most-recent" | "most-viewed" | "recents" | "search" | "top-rated",
		title?: string,
		ref?: Ref<TabBarItemStatic & ViewStatic>
	}

	declare export interface TabBarItemStatic {
		
	}

	declare export interface TabBarIOSProperties {
		barTintColor?: string,
		style?: ViewStyle,
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

	declare export interface PlatformStatic {
		OS: PlatformOSType,
		select<T>(specifics: {
		ios?: T,
		android?: T
	}): T
	}

	declare export interface DeviceEventSubscriptionStatic {
		remove(): void
	}

	declare export interface DeviceEventEmitterStatic {
		addListener<T>(type: string, onReceived: (data: T) => void): DeviceEventSubscription,
		removeListener(eventType: String, listener: Function): void
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
	}[]): void
	}

	declare export interface InteractionManagerStatic {
		runAfterInteractions(
		fn: () => void | PromiseTask
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
		onRefreshStart?: () => void,
		onScrollAnimationEnd?: () => void,
		scrollEnabled?: boolean,
		scrollEventThrottle?: number,
		scrollIndicatorInsets?: Insets,
		scrollsToTop?: boolean,
		snapToAlignment?: string,
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
		endRefreshing?: () => void,
		scrollTo(
		y?: number | {
		x?: number,
		y?: number,
		animated?: boolean
	}, x?: number, animated?: boolean
	): void,
		getScrollResponder(): JSX.Element,
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

	declare export interface SwipeableListViewDataSource {
		cloneWithRowsAndSections(
		dataBlob: any, sectionIdentities: Array<string>, rowIdentities: Array<Array<string>>
	): SwipeableListViewDataSource,
		getDataSource(): ListViewDataSource,
		getOpenRowID(): string,
		setOpenRowID(rowID: string): ListViewDataSource
	}

	declare export interface SwipeableListViewProps {
		dataSource: SwipeableListViewDataSource,
		maxSwipeDistance?: number,
		renderRow: (
		rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean
	) => React.ReactElement<any>,
		renderQuickActions(rowData: Object, sectionID: string, rowID: string): React.ReactElement<any>
	}

	declare export interface SwipeableListViewStatic {
		getNewDataSource(): SwipeableListViewDataSource
	}

	declare export interface ActionSheetIOSOptions {
		title?: string,
		options?: string[],
		cancelButtonIndex?: number,
		destructiveButtonIndex?: number,
		message?: string
	}

	declare export interface ShareActionSheetIOSOptions {
		message?: string,
		url?: string
	}

	declare export interface ActionSheetIOSStatic {
		showActionSheetWithOptions: (
		options: ActionSheetIOSOptions, callback: (buttonIndex: number) => void
	) => void,
		showShareActionSheetWithOptions: (
		options: ShareActionSheetIOSOptions, failureCallback: (error: Error) => void, successCallback: (success: boolean, method: string) => void
	) => void
	}

	declare export interface AlertButton {
		text?: string,
		onPress?: () => void,
		style?: "default" | "cancel" | "destructive"
	}

	declare export interface AlertStatic {
		alert: (
		title: string, message?: string, buttons?: AlertButton[], type?: string
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
		title: string, message?: string, callbackOrButtons?: (value: string) => void | Array<AlertIOSButton>, type?: string
	) => void,
		prompt: (
		title: string, value?: string, callbackOrButtons?: (value: string) => void | Array<AlertIOSButton>, type?: string, defaultValue?: string
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
		addEventListener(eventName: string, handler: () => void): void,
		removeEventListener(eventName: string, handler: () => void): void
	}

	declare export interface CameraRollFetchParams {
		first: number,
		after?: string,
		groupTypes: string,
		groupName?: string,
		assetType?: string
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
		after: string,
		groupTypes: "Album" | "All" | "Event" | "Faces" | "Library" | "PhotoStream" | "SavedPhotos",
		groupName: string,
		assetType: "All" | "Videos" | "Photos",
		mimeTypes: string[]
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
		GroupTypesOptions: string[],
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
		openURL(url: string): Promise<boolean>,
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
		isConnectionExpensive: FetchableListenable<boolean>
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
		addEventListener(type: string, handler: (notification: PushNotification) => void): void,
		requestPermissions(
		permissions?: PushNotificationPermissions[]
	): Promise<PushNotificationPermissions>,
		abandonPermissions(): void,
		checkPermissions(callback: (permissions: PushNotificationPermissions) => void): void,
		removeEventListener(type: string, handler: (notification: PushNotification) => void): void,
		popInitialNotification(): PushNotification
	}

	declare export interface StatusBarPropertiesIOS {
		barStyle?: StatusBarStyle,
		networkActivityIndicatorVisible?: boolean,
		showHideTransition?: "fade" | "slide"
	}

	declare export interface StatusBarPropertiesAndroid {
		backgroundColor?: any,
		translucent?: boolean
	}

	declare export interface StatusBarProperties {
		animated?: boolean,
		hidden?: boolean
	}

	declare export interface StatusBarStatic {
		setHidden: (hidden: boolean, animation: StatusBarAnimation) => void,
		setBarStyle: (style: StatusBarStyle, animated: boolean) => void,
		setNetworkActivityIndicatorVisible: (visible: boolean) => void,
		setBackgroundColor: (color: string, animated: boolean) => void,
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
		SHORT: number,
		LONG: number
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
		style?: ViewStyle,
		ref?: Ref<SwitchStatic>
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

	declare export interface TabsReducerStatic {
		JumpToAction(index: number): any
	}

	declare export interface NavigationReducerStatic {
		TabsReducer: any
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

	declare export interface NavigationAnimatedViewStaticProps {
		route?: any,
		style?: ViewStyle,
		renderOverlay(props: Object): JSX.Element,
		applyAnimation(pos: any, navState: Object): void,
		renderScene(props: Object): JSX.Element
	}

	declare export interface NavigationAnimatedViewStatic {
		
	}

	declare export interface NavigationHeaderProps {
		renderTitleComponent(props: Object): JSX.Element,
		onNavigateBack(): void
	}

	declare export interface NavigationHeaderStatic {
		Title: JSX.Element,
		HEIGHT: number
	}

	declare export interface NavigationCardStackProps {
		direction?: "horizontal" | "vertical",
		style?: ViewStyle,
		route?: any,
		renderScene(props: any): JSX.Element,
		onNavigateBack(): void
	}

	declare export interface NavigationCardStackStatic {
		
	}

	declare export interface NavigationExperimentalStatic {
		AnimatedView: NavigationAnimatedViewStatic,
		CardStack: NavigationCardStackStatic,
		Header: NavigationHeaderStatic,
		Reducer: NavigationReducerStatic
	}

	declare export interface NavigationContainerProps {
		tabs: NavigationTab[],
		index: number
	}

	declare export interface NavigationContainerStatic {
		create(inClass: any): any
	}

	declare export interface NavigationRootContainerProps {
		renderNavigation: NavigationRenderer,
		reducer: NavigationReducerStatic,
		persistenceKey?: string
	}

	declare export interface NavigationRootContainerStatic {
		getBackAction(): NavigationAction,
		handleNavigation(action: NavigationAction): boolean
	}

	declare export interface NativeEventSubscription {
		remove(): void
	}

	declare export interface NativeAppEventEmitterStatic {
		addListener(event: string, handler: (data: any) => void): NativeEventSubscription
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
		nativeOnly: Object
	}
	): React.ComponentClass<P>

	declare export function ___spread(target: any, ...sources: any[]): any

	declare export class AppRegistry  {
		registerConfig(config: AppConfig[]): void;
		registerComponent(appKey: string, getComponentFunc: () => React.ComponentClass<any>): string;
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
		idStack: number[],
		presentedIndex: number
	}

	declare export interface NavigationBarStyle {
		
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
		style?: ViewStyle
	}

	declare export interface NavigationBarStatic {
		Styles: NavigationBarStyle
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
		Styles: BreadcrumbNavigationBarStyle
	}

			
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

	declare export function delay(time: number): CompositeAnimation

	declare export function sequence(animations: Array<CompositeAnimation>): CompositeAnimation

	declare export function stagger(time: number, animations: Array<CompositeAnimation>): CompositeAnimation

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
		stopAnimation(callback?: () => number): void;
		addListener(callback: ValueXYListenerCallback): string;
		removeListener(id: string): void;
		getLayout(): {
		left: AnimatedValue,
		top: AnimatedValue
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

	
}

declare module 'addons' {
	declare export type TestModule = TestModuleStatic;

	declare export interface TestModuleStatic {
		verifySnapshot: (done: (indicator?: any) => void) => void,
		markTestPassed: (indicator: any) => void,
		markTestCompleted: () => void
	}

			
}

declare module 'react-native' {
					declare module.exports: undefined


}
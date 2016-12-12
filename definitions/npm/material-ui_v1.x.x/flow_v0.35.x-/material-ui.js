

declare module 'material-ui' {
	declare export type TouchTapEvent = ___MaterialUI.TouchTapEvent;

	declare export type TouchTapEventHandler = ___MaterialUI.TouchTapEventHandler;

				
}

declare module 'npm$namespace$___MaterialUI' {
	declare type AutoCompleteDataItem = {
		text: string,
		value: React.ReactNode
	} | string;

	declare type AutoCompleteDataSource = {
		text: string,
		value: React.ReactNode
	}[] | string[];

	declare interface ReactLink<T> {
		value: T,
		requestChange(newValue: T): void
	}

	declare interface TouchTapEvent {
		altKey: boolean,
		ctrlKey: boolean,
		getModifierState(key: string): boolean,
		metaKey: boolean,
		shiftKey: boolean
	}

	declare interface TouchTapEventHandler {
		
	}

	declare interface ThemeWrapperProps {
		theme: Styles.MuiTheme
	}

	declare interface AppBarProps {
		className?: string,
		iconClassNameLeft?: string,
		iconClassNameRight?: string,
		iconElementLeft?: React.ReactElement<any>,
		iconElementRight?: React.ReactElement<any>,
		iconStyleRight?: React.CSSProperties,
		iconStyleLeft?: React.CSSProperties,
		onLeftIconButtonTouchTap?: TouchTapEventHandler,
		onRightIconButtonTouchTap?: TouchTapEventHandler,
		onTitleTouchTap?: TouchTapEventHandler,
		showMenuIconButton?: boolean,
		style?: React.CSSProperties,
		title?: React.ReactNode,
		titleStyle?: React.CSSProperties,
		zDepth?: number
	}

	declare interface AppCanvasProps {
		
	}

	declare interface AutoCompleteProps {
		anchorOrigin?: propTypes.origin,
		animated?: boolean,
		animation?: React.ComponentClass<Popover.PopoverAnimationProps>,
		dataSource: AutoCompleteDataSource,
		disableFocusRipple?: boolean,
		errorStyle?: React.CSSProperties,
		errorText?: string,
		filter?: (searchText: string, key: string, item: AutoCompleteDataItem) => boolean,
		floatingLabelText?: React.ReactNode,
		fullWidth?: boolean,
		hintText?: string,
		listStyle?: React.CSSProperties,
		maxSearchResults?: number,
		menuCloseDelay?: number,
		menuProps?: any,
		menuStyle?: React.CSSProperties,
		onBlur?: React.FocusEventHandler,
		onFocus?: React.FocusEventHandler,
		onKeyDown?: React.KeyboardEventHandler,
		onNewRequest?: (chosenRequest: string, index: number) => void,
		onUpdateInput?: (searchText: string, dataSource: AutoCompleteDataSource) => void,
		open?: boolean,
		openOnFocus?: boolean,
		popoverProps?: Popover.PopoverProps,
		searchText?: string,
		style?: React.CSSProperties,
		targetOrigin?: propTypes.origin,
		textFieldStyle?: React.CSSProperties
	}

	declare interface AvatarProps {
		backgroundColor?: string,
		className?: string,
		color?: string,
		icon?: React.ReactElement<any>,
		size?: number,
		src?: string,
		style?: React.CSSProperties
	}

	declare interface BadgeProps {
		badgeContent: React.ReactNode,
		badgeStyle?: React.CSSProperties,
		className?: string,
		primary?: boolean,
		secondary?: boolean,
		style?: React.CSSProperties
	}

	declare interface BeforeAfterWrapperProps {
		afterElementType?: string,
		afterStyle?: React.CSSProperties,
		beforeElementType?: string,
		beforeStyle?: React.CSSProperties,
		elementType?: string,
		style?: React.CSSProperties
	}

	declare interface SharedEnhancedButtonProps<T> {
		centerRipple?: boolean,
		disableFocusRipple?: boolean,
		disableKeyboardFocus?: boolean,
		disableTouchRipple?: boolean,
		focusRippleColor?: string,
		focusRippleOpacity?: number,
		href?: string,
		keyboardFocused?: boolean,
		onBlur?: React.FocusEventHandler,
		onFocus?: React.FocusEventHandler,
		onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void,
		onKeyDown?: React.KeyboardEventHandler,
		onKeyUp?: React.KeyboardEventHandler,
		onTouchTap?: TouchTapEventHandler,
		onClick?: React.MouseEventHandler,
		style?: React.CSSProperties,
		tabIndex?: number,
		target?: string,
		touchRippleColor?: string,
		touchRippleOpacity?: number,
		type?: string,
		containerElement?: React.ReactNode | string
	}

	declare interface EnhancedButtonProps {
		containerElement?: React.ReactNode | string,
		disabled?: boolean
	}

	declare interface FlatButtonProps {
		backgroundColor?: string,
		disabled?: boolean,
		hoverColor?: string,
		icon?: React.ReactNode,
		label?: React.ReactNode,
		labelPosition?: "before" | "after",
		labelStyle?: React.CSSProperties,
		linkButton?: boolean,
		onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		onTouchStart?: React.TouchEventHandler,
		primary?: boolean,
		rippleColor?: string,
		secondary?: boolean,
		style?: React.CSSProperties
	}

	declare interface RaisedButtonProps {
		backgroundColor?: string,
		buttonStyle?: React.CSSProperties,
		className?: string,
		disabled?: boolean,
		disabledBackgroundColor?: string,
		disabledLabelColor?: string,
		fullWidth?: boolean,
		icon?: React.ReactNode,
		label?: React.ReactNode,
		labelColor?: string,
		labelPosition?: "before" | "after",
		labelStyle?: React.CSSProperties,
		linkButton?: boolean,
		onMouseDown?: React.MouseEventHandler,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		onMouseUp?: React.MouseEventHandler,
		onTouchEnd?: React.TouchEventHandler,
		onTouchStart?: React.TouchEventHandler,
		primary?: boolean,
		rippleStyle?: React.CSSProperties,
		secondary?: boolean,
		style?: React.CSSProperties
	}

	declare interface FloatingActionButtonProps {
		backgroundColor?: string,
		className?: string,
		disabled?: boolean,
		disabledColor?: string,
		iconClassName?: string,
		iconStyle?: React.CSSProperties,
		mini?: boolean,
		onMouseDown?: React.MouseEventHandler,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		onMouseUp?: React.MouseEventHandler,
		onTouchEnd?: React.TouchEventHandler,
		onTouchStart?: React.TouchEventHandler,
		secondary?: boolean,
		style?: React.CSSProperties,
		zDepth?: number
	}

	declare interface IconButtonProps {
		className?: string,
		disableTouchRipple?: boolean,
		disabled?: boolean,
		iconClassName?: string,
		iconStyle?: React.CSSProperties,
		onBlur?: React.FocusEventHandler,
		onFocus?: React.FocusEventHandler,
		onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		onMouseOut?: React.MouseEventHandler,
		style?: React.CSSProperties,
		tooltip?: React.ReactNode | string,
		tooltipPosition?: propTypes.cornersAndCenter,
		tooltipStyles?: React.CSSProperties,
		touch?: boolean
	}

	declare interface ChipProps {
		backgroundColor?: string,
		className?: string,
		labelColor?: string,
		labelStyle?: React.CSSProperties,
		onRequestDelete?: React.TouchEventHandler,
		onTouchTap?: React.TouchEventHandler,
		style?: React.CSSProperties
	}

	declare interface DialogProps {
		actions?: React.ReactElement<any> | React.ReactElement<any>[],
		actionsContainerClassName?: string,
		actionsContainerStyle?: React.CSSProperties,
		autoDetectWindowHeight?: boolean,
		autoScrollBodyContent?: boolean,
		bodyClassName?: string,
		bodyStyle?: React.CSSProperties,
		className?: string,
		contentClassName?: string,
		contentStyle?: React.CSSProperties,
		modal?: boolean,
		onRequestClose?: (buttonClicked: boolean) => void,
		open: boolean,
		overlayClassName?: string,
		overlayStyle?: React.CSSProperties,
		repositionOnUpdate?: boolean,
		style?: React.CSSProperties,
		title?: React.ReactNode,
		titleClassName?: string,
		titleStyle?: React.CSSProperties
	}

	declare interface DividerProps {
		className?: string,
		inset?: boolean,
		style?: React.CSSProperties
	}

	declare interface DrawerProps {
		className?: string,
		containerClassName?: string,
		containerStyle?: React.CSSProperties,
		disableSwipeToOpen?: boolean,
		docked?: boolean,
		onRequestChange?: (opening: boolean, reason: string) => void,
		open?: boolean,
		openSecondary?: Boolean,
		overlayClassName?: string,
		overlayStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		swipeAreaWidth?: number,
		width?: number,
		zDepth?: number
	}

	declare interface FontIconProps {
		color?: string,
		hoverColor?: string,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		style?: React.CSSProperties
	}

	declare interface SvgIconProps {
		color?: string,
		hoverColor?: string,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		style?: React.CSSProperties,
		viewBox?: string
	}

	declare interface PaperProps {
		circle?: boolean,
		rounded?: boolean,
		style?: React.CSSProperties,
		transitionEnabled?: boolean,
		zDepth?: number
	}

	declare interface CircularProgressProps {
		color?: string,
		innerStyle?: React.CSSProperties,
		max?: number,
		min?: number,
		mode?: "determinate" | "indeterminate",
		size?: number,
		style?: React.CSSProperties,
		thickness?: number,
		value?: number
	}

	declare interface LinearProgressProps {
		color?: string,
		max?: number,
		min?: number,
		mode?: "determinate" | "indeterminate",
		style?: React.CSSProperties,
		value?: number
	}

	declare interface RefreshIndicatorProps {
		color?: string,
		left: number,
		loadingColor?: string,
		percentage?: number,
		size?: number,
		status?: "ready" | "loading" | "hide",
		style?: React.CSSProperties,
		top: number
	}

	declare interface SelectFieldProps {
		autoWidth?: boolean,
		disabled?: boolean,
		errorStyle?: React.CSSProperties,
		errorText?: React.ReactNode,
		floatingLabelFixed?: boolean,
		floatingLabelStyle?: React.CSSProperties,
		floatingLabelText?: React.ReactNode,
		fullWidth?: boolean,
		hintStyle?: React.CSSProperties,
		hintText?: React.ReactNode,
		iconStyle?: React.CSSProperties,
		id?: string,
		labelStyle?: React.CSSProperties,
		maxHeight?: number,
		menuStyle?: any,
		onBlur?: React.FocusEventHandler,
		onChange?: (e: TouchTapEvent, index: number, menuItemValue: any) => void,
		onFocus?: React.FocusEventHandler,
		style?: React.CSSProperties,
		underlineDisabledStyle?: React.CSSProperties,
		underlineFocusStyle?: React.CSSProperties,
		underlineStyle?: React.CSSProperties,
		value?: any
	}

	declare interface SliderProps {
		axis?: "x" | "x-reverse" | "y" | "y-reverse",
		defaultValue?: number,
		description?: string,
		disableFocusRipple?: boolean,
		disabled?: boolean,
		error?: string,
		max?: number,
		min?: number,
		name?: string,
		onBlur?: React.FocusEventHandler,
		onChange?: (e: React.MouseEvent, value: number) => void,
		onDragStart?: React.MouseEventHandler,
		onDragStop?: React.MouseEventHandler,
		onFocus?: React.FocusEventHandler,
		required?: boolean,
		sliderStyle?: React.CSSProperties,
		step?: number,
		style?: React.CSSProperties,
		value?: number
	}

	declare interface SnackbarProps {
		action?: React.ReactNode,
		autoHideDuration?: number,
		bodyStyle?: React.CSSProperties,
		className?: string,
		contentStyle?: React.CSSProperties,
		message: React.ReactNode,
		onActionTouchTap?: React.TouchEventHandler,
		onRequestClose: (reason: string) => void,
		open: boolean,
		style?: React.CSSProperties
	}

	declare interface SubheaderProps {
		inset?: boolean,
		style?: React.CSSProperties
	}

	declare interface TextFieldProps {
		className?: string,
		defaultValue?: string | number,
		disabled?: boolean,
		errorStyle?: React.CSSProperties,
		errorText?: React.ReactNode,
		floatingLabelFixed?: boolean,
		floatingLabelFocusStyle?: React.CSSProperties,
		floatingLabelStyle?: React.CSSProperties,
		floatingLabelText?: React.ReactNode,
		fullWidth?: boolean,
		hintStyle?: React.CSSProperties,
		hintText?: React.ReactNode,
		id?: string,
		inputStyle?: React.CSSProperties,
		multiLine?: boolean,
		name?: string,
		onBlur?: React.FocusEventHandler,
		onChange?: React.FormEventHandler,
		onFocus?: React.FocusEventHandler,
		onKeyDown?: React.KeyboardEventHandler,
		rows?: number,
		rowsMax?: number,
		style?: React.CSSProperties,
		textareaStyle?: React.CSSProperties,
		type?: string,
		underlineDisabledStyle?: React.CSSProperties,
		underlineFocusStyle?: React.CSSProperties,
		underlineShow?: boolean,
		underlineStyle?: React.CSSProperties,
		value?: string | number
	}

	declare interface TimePickerProps {
		autoOk?: boolean,
		cancelLabel?: React.ReactNode,
		defaultTime?: Date,
		dialogBodyStyle?: React.CSSProperties,
		dialogStyle?: React.CSSProperties,
		disabled?: boolean,
		format?: "ampm" | "24hr",
		okLabel?: React.ReactNode,
		onChange?: (e: any, time: Date) => void,
		onDismiss?: () => void,
		onFocus?: React.FocusEventHandler,
		onShow?: () => void,
		onTouchTap?: TouchTapEventHandler,
		pedantic?: boolean,
		style?: React.CSSProperties,
		textFieldStyle?: React.CSSProperties,
		value?: Date,
		className?: string,
		defaultValue?: string | number,
		errorStyle?: React.CSSProperties,
		errorText?: React.ReactNode,
		floatingLabelFixed?: boolean,
		floatingLabelFocusStyle?: React.CSSProperties,
		floatingLabelStyle?: React.CSSProperties,
		floatingLabelText?: React.ReactNode,
		fullWidth?: boolean,
		hintStyle?: React.CSSProperties,
		hintText?: React.ReactNode,
		id?: string,
		inputStyle?: React.CSSProperties,
		multiLine?: boolean,
		name?: string,
		onBlur?: React.FocusEventHandler,
		onKeyDown?: React.KeyboardEventHandler,
		rows?: number,
		rowsMax?: number,
		textareaStyle?: React.CSSProperties,
		type?: string,
		underlineDisabledStyle?: React.CSSProperties,
		underlineFocusStyle?: React.CSSProperties,
		underlineShow?: boolean,
		underlineStyle?: React.CSSProperties
	}

		declare export class ThemeWrapper extends React$Component<ThemeWrapperProps, {
		
	}> {
		
	}

	declare export class AppBar extends React$Component<AppBarProps, {
		
	}> {
		
	}

	declare export class AppCanvas extends React$Component<AppCanvasProps, {
		
	}> {
		
	}

	declare export class AutoComplete extends React$Component<AutoCompleteProps, {
		
	}> {
		noFilter: () => boolean;
		defaultFilter: (searchText: string, key: string) => boolean;
		caseSensitiveFilter: (searchText: string, key: string) => boolean;
		caseInsensitiveFilter: (searchText: string, key: string) => boolean;
		levenshteinDistanceFilter(distanceLessThan: number): (searchText: string, key: string) => boolean;
		fuzzyFilter: (searchText: string, key: string) => boolean;
		Item: Menus.MenuItem;
		Divider: Divider
	}

	declare export class Avatar extends React$Component<AvatarProps, {
		
	}> {
		
	}

	declare export class Badge extends React$Component<BadgeProps, {
		
	}> {
		
	}

	declare export class BeforeAfterWrapper extends React$Component<BeforeAfterWrapperProps, {
		
	}> {
		
	}

	declare export class EnhancedButton extends React$Component<EnhancedButtonProps, {
		
	}> {
		
	}

	declare export class FlatButton extends React$Component<FlatButtonProps, {
		
	}> {
		
	}

	declare export class RaisedButton extends React$Component<RaisedButtonProps, {
		
	}> {
		
	}

	declare export class FloatingActionButton extends React$Component<FloatingActionButtonProps, {
		
	}> {
		
	}

	declare export class IconButton extends React$Component<IconButtonProps, {
		
	}> {
		
	}

	declare export class Chip extends React$Component<ChipProps, {
		
	}> {
		
	}

	declare export class Dialog extends React$Component<DialogProps, {
		
	}> {
		
	}

	declare export class Divider extends React$Component<DividerProps, {
		
	}> {
		
	}

	declare export class Drawer extends React$Component<DrawerProps, {
		
	}> {
		
	}

	declare export class FontIcon extends React$Component<FontIconProps, {
		
	}> {
		
	}

	declare export class SvgIcon extends React$Component<SvgIconProps, {
		
	}> {
		
	}

	declare export class Paper extends React$Component<PaperProps, {
		
	}> {
		
	}

	declare export class CircularProgress extends React$Component<CircularProgressProps, {
		
	}> {
		
	}

	declare export class LinearProgress extends React$Component<LinearProgressProps, {
		
	}> {
		
	}

	declare export class RefreshIndicator extends React$Component<RefreshIndicatorProps, {
		
	}> {
		
	}

	declare export class SelectField extends React$Component<SelectFieldProps, {
		
	}> {
		
	}

	declare export class Slider extends React$Component<SliderProps, {
		
	}> {
		
	}

	declare export class Snackbar extends React$Component<SnackbarProps, {
		
	}> {
		
	}

	declare export class Subheader extends React$Component<SubheaderProps, {
		
	}> {
		
	}

	declare export class TextField extends React$Component<TextFieldProps, {
		
	}> {
		blur(): void;
		focus(): void;
		select(): void;
		getValue(): string;
		getInputNode(): HTMLInputElement
	}

	declare export class TimePicker extends React$Component<TimePickerProps, {
		
	}> {
		focus(): void;
		openDialog(): void
	}

	
}

declare module 'Styles' {
		declare interface Spacing {
		iconSize?: number,
		desktopGutter?: number,
		desktopGutterMore?: number,
		desktopGutterLess?: number,
		desktopGutterMini?: number,
		desktopKeylineIncrement?: number,
		desktopDropDownMenuItemHeight?: number,
		desktopDropDownMenuFontSize?: number,
		desktopLeftNavMenuItemHeight?: number,
		desktopSubheaderHeight?: number,
		desktopToolbarHeight?: number
	}

	declare interface ThemePalette {
		primary1Color?: string,
		primary2Color?: string,
		primary3Color?: string,
		accent1Color?: string,
		accent2Color?: string,
		accent3Color?: string,
		textColor?: string,
		alternateTextColor?: string,
		canvasColor?: string,
		borderColor?: string,
		disabledColor?: string,
		pickerHeaderColor?: string,
		clockCircleColor?: string,
		shadowColor?: string
	}

	declare interface MuiTheme {
		spacing?: Spacing,
		fontFamily?: string,
		palette?: ThemePalette,
		isRtl?: boolean,
		userAgent?: string,
		zIndex?: zIndex,
		baseTheme?: RawTheme,
		rawTheme?: RawTheme,
		appBar?: {
		color?: string,
		textColor?: string,
		height?: number,
		titleFontWeight?: number,
		padding?: number
	},
		avatar?: {
		color?: string,
		backgroundColor?: string,
		borderColor?: string
	},
		badge?: {
		color?: string,
		textColor?: string,
		primaryColor?: string,
		primaryTextColor?: string,
		secondaryColor?: string,
		secondaryTextColor?: string,
		fontWeight?: number
	},
		button?: {
		height?: number,
		minWidth?: number,
		iconButtonSize?: number
	},
		card?: {
		titleColor?: string,
		subtitleColor?: string,
		fontWeight?: number
	},
		cardMedia?: {
		color?: string,
		overlayContentBackground?: string,
		titleColor?: string,
		subtitleColor?: string
	},
		cardText?: {
		textColor?: string
	},
		checkbox?: {
		boxColor?: string,
		checkedColor?: string,
		requiredColor?: string,
		disabledColor?: string,
		labelColor?: string,
		labelDisabledColor?: string
	},
		chip?: {
		backgroundColor?: string,
		deleteIconColor?: string,
		textColor?: string,
		fontSize?: number,
		fontWeight?: number,
		shadow?: string
	},
		datePicker?: {
		color?: string,
		textColor?: string,
		calendarTextColor?: string,
		selectColor?: string,
		selectTextColor?: string,
		calendarYearBackgroundColor?: string
	},
		dialog?: {
		titleFontSize?: number,
		bodyFontSize?: number,
		bodyColor?: string
	},
		dropDownMenu?: {
		accentColor?: string
	},
		enhancedButton?: {
		tapHighlightColor?: string
	},
		flatButton?: {
		color?: string,
		buttonFilterColor?: string,
		disabledTextColor?: string,
		textColor?: string,
		primaryTextColor?: string,
		secondaryTextColor?: string,
		fontSize?: number,
		fontWeight?: number
	},
		floatingActionButton?: {
		buttonSize?: number,
		miniSize?: number,
		color?: string,
		iconColor?: string,
		secondaryColor?: string,
		secondaryIconColor?: string,
		disabledTextColor?: string,
		disabledColor?: string
	},
		gridTile?: {
		textColor?: string
	},
		icon?: {
		color?: string,
		backgroundColor?: string
	},
		inkBar?: {
		backgroundColor?: string
	},
		drawer?: {
		width?: number,
		color?: string
	},
		listItem?: {
		nestedLevelDepth?: number,
		secondaryTextColor?: string,
		leftIconColor?: string,
		rightIconColor?: string
	},
		menu?: {
		backgroundColor?: string,
		containerBackgroundColor?: string
	},
		menuItem?: {
		dataHeight?: number,
		height?: number,
		hoverColor?: string,
		padding?: number,
		selectedTextColor?: string,
		rightIconDesktopFill?: string
	},
		menuSubheader?: {
		padding?: number,
		borderColor?: string,
		textColor?: string
	},
		overlay?: {
		backgroundColor?: string
	},
		paper?: {
		color?: string,
		backgroundColor?: string,
		zDepthShadows?: string[]
	},
		radioButton?: {
		borderColor?: string,
		backgroundColor?: string,
		checkedColor?: string,
		requiredColor?: string,
		disabledColor?: string,
		size?: number,
		labelColor?: string,
		labelDisabledColor?: string
	},
		raisedButton?: {
		color?: string,
		textColor?: string,
		primaryColor?: string,
		primaryTextColor?: string,
		secondaryColor?: string,
		secondaryTextColor?: string,
		disabledColor?: string,
		disabledTextColor?: string,
		fontSize?: number,
		fontWeight?: number
	},
		refreshIndicator?: {
		strokeColor?: string,
		loadingStrokeColor?: string
	},
		ripple?: {
		color?: string
	},
		slider?: {
		trackSize?: number,
		trackColor?: string,
		trackColorSelected?: string,
		handleSize?: number,
		handleSizeDisabled?: number,
		handleSizeActive?: number,
		handleColorZero?: string,
		handleFillColor?: string,
		selectionColor?: string,
		rippleColor?: string
	},
		snackbar?: {
		textColor?: string,
		backgroundColor?: string,
		actionColor?: string
	},
		subheader?: {
		color?: string,
		fontWeight?: number
	},
		stepper?: {
		backgroundColor?: string,
		hoverBackgroundColor?: string,
		iconColor?: string,
		hoveredIconColor?: string,
		inactiveIconColor?: string,
		textColor?: string,
		disabledTextColor?: string,
		connectorLineColor?: string
	},
		svgIcon?: {
		color?: string
	},
		table?: {
		backgroundColor?: string
	},
		tableFooter?: {
		borderColor?: string,
		textColor?: string
	},
		tableHeader?: {
		borderColor?: string
	},
		tableHeaderColumn?: {
		textColor?: string,
		height?: number,
		spacing?: number
	},
		tableRow?: {
		hoverColor?: string,
		stripeColor?: string,
		selectedColor?: string,
		textColor?: string,
		borderColor?: string,
		height?: number
	},
		tableRowColumn?: {
		height?: number,
		spacing?: number
	},
		tabs?: {
		backgroundColor?: string,
		textColor?: string,
		selectedTextColor?: string
	},
		textField?: {
		textColor?: string,
		hintColor?: string,
		floatingLabelColor?: string,
		disabledTextColor?: string,
		errorColor?: string,
		focusColor?: string,
		backgroundColor?: string,
		borderColor?: string
	},
		timePicker?: {
		color?: string,
		textColor?: string,
		accentColor?: string,
		clockColor?: string,
		clockCircleColor?: string,
		headerColor?: string,
		selectColor?: string,
		selectTextColor?: string
	},
		toggle?: {
		thumbOnColor?: string,
		thumbOffColor?: string,
		thumbDisabledColor?: string,
		thumbRequiredColor?: string,
		trackOnColor?: string,
		trackOffColor?: string,
		trackDisabledColor?: string,
		labelColor?: string,
		labelDisabledColor?: string,
		trackRequiredColor?: string
	},
		toolbar?: {
		color?: string,
		hoverColor?: string,
		backgroundColor?: string,
		height?: number,
		titleFontSize?: number,
		iconColor?: string,
		separatorColor?: string,
		menuHoverColor?: string
	},
		tooltip?: {
		color?: string,
		rippleBackgroundColor?: string
	}
	}

	declare interface zIndex {
		menu: number,
		appBar: number,
		drawerOverlay: number,
		drawer: number,
		dialogOverlay: number,
		dialog: number,
		layer: number,
		popover: number,
		snackbar: number,
		tooltip: number
	}

	declare interface RawTheme {
		spacing?: Spacing,
		fontFamily?: string,
		palette?: ThemePalette
	}

	declare interface MuiThemeProviderProps {
		muiTheme?: Styles.MuiTheme
	}

	declare interface Transitions {
		easeOut(
		duration?: string, property?: string | string[], delay?: string, easeFunction?: string
	): string,
		create(
		duration?: string, property?: string, delay?: string, easeFunction?: string
	): string,
		easeOutFunction: string,
		easeInOutFunction: string
	}

	declare interface Typography {
		textFullBlack: string,
		textDarkBlack: string,
		textLightBlack: string,
		textMinBlack: string,
		textFullWhite: string,
		textDarkWhite: string,
		textLightWhite: string,
		fontWeightLight: number,
		fontWeightNormal: number,
		fontWeightMedium: number,
		fontStyleButtonFontSize: number
	}

	declare interface Colors {
		red50: string,
		red100: string,
		red200: string,
		red300: string,
		red400: string,
		red500: string,
		red600: string,
		red700: string,
		red800: string,
		red900: string,
		redA100: string,
		redA200: string,
		redA400: string,
		redA700: string,
		pink50: string,
		pink100: string,
		pink200: string,
		pink300: string,
		pink400: string,
		pink500: string,
		pink600: string,
		pink700: string,
		pink800: string,
		pink900: string,
		pinkA100: string,
		pinkA200: string,
		pinkA400: string,
		pinkA700: string,
		purple50: string,
		purple100: string,
		purple200: string,
		purple300: string,
		purple400: string,
		purple500: string,
		purple600: string,
		purple700: string,
		purple800: string,
		purple900: string,
		purpleA100: string,
		purpleA200: string,
		purpleA400: string,
		purpleA700: string,
		deepPurple50: string,
		deepPurple100: string,
		deepPurple200: string,
		deepPurple300: string,
		deepPurple400: string,
		deepPurple500: string,
		deepPurple600: string,
		deepPurple700: string,
		deepPurple800: string,
		deepPurple900: string,
		deepPurpleA100: string,
		deepPurpleA200: string,
		deepPurpleA400: string,
		deepPurpleA700: string,
		indigo50: string,
		indigo100: string,
		indigo200: string,
		indigo300: string,
		indigo400: string,
		indigo500: string,
		indigo600: string,
		indigo700: string,
		indigo800: string,
		indigo900: string,
		indigoA100: string,
		indigoA200: string,
		indigoA400: string,
		indigoA700: string,
		blue50: string,
		blue100: string,
		blue200: string,
		blue300: string,
		blue400: string,
		blue500: string,
		blue600: string,
		blue700: string,
		blue800: string,
		blue900: string,
		blueA100: string,
		blueA200: string,
		blueA400: string,
		blueA700: string,
		lightBlue50: string,
		lightBlue100: string,
		lightBlue200: string,
		lightBlue300: string,
		lightBlue400: string,
		lightBlue500: string,
		lightBlue600: string,
		lightBlue700: string,
		lightBlue800: string,
		lightBlue900: string,
		lightBlueA100: string,
		lightBlueA200: string,
		lightBlueA400: string,
		lightBlueA700: string,
		cyan50: string,
		cyan100: string,
		cyan200: string,
		cyan300: string,
		cyan400: string,
		cyan500: string,
		cyan600: string,
		cyan700: string,
		cyan800: string,
		cyan900: string,
		cyanA100: string,
		cyanA200: string,
		cyanA400: string,
		cyanA700: string,
		teal50: string,
		teal100: string,
		teal200: string,
		teal300: string,
		teal400: string,
		teal500: string,
		teal600: string,
		teal700: string,
		teal800: string,
		teal900: string,
		tealA100: string,
		tealA200: string,
		tealA400: string,
		tealA700: string,
		green50: string,
		green100: string,
		green200: string,
		green300: string,
		green400: string,
		green500: string,
		green600: string,
		green700: string,
		green800: string,
		green900: string,
		greenA100: string,
		greenA200: string,
		greenA400: string,
		greenA700: string,
		lightGreen50: string,
		lightGreen100: string,
		lightGreen200: string,
		lightGreen300: string,
		lightGreen400: string,
		lightGreen500: string,
		lightGreen600: string,
		lightGreen700: string,
		lightGreen800: string,
		lightGreen900: string,
		lightGreenA100: string,
		lightGreenA200: string,
		lightGreenA400: string,
		lightGreenA700: string,
		lime50: string,
		lime100: string,
		lime200: string,
		lime300: string,
		lime400: string,
		lime500: string,
		lime600: string,
		lime700: string,
		lime800: string,
		lime900: string,
		limeA100: string,
		limeA200: string,
		limeA400: string,
		limeA700: string,
		yellow50: string,
		yellow100: string,
		yellow200: string,
		yellow300: string,
		yellow400: string,
		yellow500: string,
		yellow600: string,
		yellow700: string,
		yellow800: string,
		yellow900: string,
		yellowA100: string,
		yellowA200: string,
		yellowA400: string,
		yellowA700: string,
		amber50: string,
		amber100: string,
		amber200: string,
		amber300: string,
		amber400: string,
		amber500: string,
		amber600: string,
		amber700: string,
		amber800: string,
		amber900: string,
		amberA100: string,
		amberA200: string,
		amberA400: string,
		amberA700: string,
		orange50: string,
		orange100: string,
		orange200: string,
		orange300: string,
		orange400: string,
		orange500: string,
		orange600: string,
		orange700: string,
		orange800: string,
		orange900: string,
		orangeA100: string,
		orangeA200: string,
		orangeA400: string,
		orangeA700: string,
		deepOrange50: string,
		deepOrange100: string,
		deepOrange200: string,
		deepOrange300: string,
		deepOrange400: string,
		deepOrange500: string,
		deepOrange600: string,
		deepOrange700: string,
		deepOrange800: string,
		deepOrange900: string,
		deepOrangeA100: string,
		deepOrangeA200: string,
		deepOrangeA400: string,
		deepOrangeA700: string,
		brown50: string,
		brown100: string,
		brown200: string,
		brown300: string,
		brown400: string,
		brown500: string,
		brown600: string,
		brown700: string,
		brown800: string,
		brown900: string,
		blueGrey50: string,
		blueGrey100: string,
		blueGrey200: string,
		blueGrey300: string,
		blueGrey400: string,
		blueGrey500: string,
		blueGrey600: string,
		blueGrey700: string,
		blueGrey800: string,
		blueGrey900: string,
		grey50: string,
		grey100: string,
		grey200: string,
		grey300: string,
		grey400: string,
		grey500: string,
		grey600: string,
		grey700: string,
		grey800: string,
		grey900: string,
		black: string,
		white: string,
		transparent: string,
		fullBlack: string,
		darkBlack: string,
		lightBlack: string,
		minBlack: string,
		faintBlack: string,
		fullWhite: string,
		darkWhite: string,
		lightWhite: string
	}

	declare export function muiThemeable<TComponent, P, S>(): (component: TComponent) => TComponent

	declare export function getMuiTheme(...muiTheme: MuiTheme[]): MuiTheme

	declare export class MuiThemeProvider extends React$Component<MuiThemeProviderProps, {
		
	}> {
		
	}

	
}

declare module 'propTypes' {
	declare type horizontal = "left" | "middle" | "right";

	declare type vertical = "top" | "center" | "bottom";

	declare type direction = "left" | "right" | "up" | "down";

	declare type corners = "bottom-left" | "bottom-right" | "top-left" | "top-right";

	declare type cornersAndCenter = "bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right";

	declare interface origin {
		horizontal: horizontal,
		vertical: vertical
	}

			
}

declare module 'Card' {
		declare interface CardProps {
		className?: string,
		actAsExpander?: boolean,
		containerStyle?: React.CSSProperties,
		expandable?: boolean,
		expanded?: boolean,
		initiallyExpanded?: boolean,
		onExpandChange?: (isExpanded: boolean) => void,
		showExpandableButton?: boolean,
		style?: React.CSSProperties
	}

	declare interface CardActionsProps {
		actAsExpander?: boolean,
		expandable?: boolean,
		showExpandableButton?: boolean,
		style?: React.CSSProperties
	}

	declare interface CardExpandableProps {
		expanded?: boolean,
		onExpanding?: (isExpanded: boolean) => void,
		style?: React.CSSProperties
	}

	declare interface CardHeaderProps {
		actAsExpander?: boolean,
		avatar?: React.ReactNode,
		expandable?: boolean,
		showExpandableButton?: boolean,
		style?: React.CSSProperties,
		subtitle?: React.ReactNode,
		subtitleColor?: string,
		subtitleStyle?: React.CSSProperties,
		textStyle?: React.CSSProperties,
		title?: React.ReactNode,
		titleColor?: string,
		titleStyle?: React.CSSProperties
	}

	declare interface CardMediaProps {
		actAsExpander?: boolean,
		expandable?: boolean,
		mediaStyle?: React.CSSProperties,
		overlay?: React.ReactNode,
		overlayContainerStyle?: React.CSSProperties,
		overlayContentStyle?: React.CSSProperties,
		overlayStyle?: React.CSSProperties,
		style?: React.CSSProperties
	}

	declare interface CardTextProps {
		actAsExpander?: boolean,
		color?: string,
		expandable?: boolean,
		style?: React.CSSProperties
	}

	declare interface CardTitleProps {
		actAsExpander?: boolean,
		expandable?: boolean,
		showExpandableButton?: boolean,
		style?: React.CSSProperties,
		subtitle?: React.ReactNode,
		subtitleColor?: string,
		subtitleStyle?: React.CSSProperties,
		title?: React.ReactNode,
		titleColor?: string,
		titleStyle?: React.CSSProperties
	}

		declare export class Card extends React$Component<CardProps, {
		
	}> {
		
	}

	declare export class CardActions extends React$Component<CardActionsProps, {
		
	}> {
		
	}

	declare export class CardExpandable extends React$Component<CardExpandableProps, {
		
	}> {
		
	}

	declare export class CardHeader extends React$Component<CardHeaderProps, {
		
	}> {
		
	}

	declare export class CardMedia extends React$Component<CardMediaProps, {
		
	}> {
		
	}

	declare export class CardText extends React$Component<CardTextProps, {
		
	}> {
		
	}

	declare export class CardTitle extends React$Component<CardTitleProps, {
		
	}> {
		
	}

	
}

declare module 'DatePicker' {
		declare interface DatePickerProps {
		DateTimeFormat?: Intl.DateTimeFormat,
		autoOk?: boolean,
		cancelLabel?: React.ReactNode,
		container?: "dialog" | "inline",
		defaultDate?: Date,
		dialogContainerStyle?: React.CSSProperties,
		disableYearSelection?: boolean,
		disabled?: boolean,
		firstDayOfWeek?: number,
		formatDate?: (date: Date) => string,
		locale?: string,
		maxDate?: Date,
		minDate?: Date,
		mode?: "portrait" | "landscape",
		okLabel?: React.ReactNode,
		onChange?: (e: any, date: Date) => void,
		onDismiss?: () => void,
		onFocus?: React.FocusEventHandler,
		onShow?: () => void,
		onTouchTap?: React.TouchEventHandler,
		shouldDisableDate?: (day: Date) => boolean,
		style?: React.CSSProperties,
		textFieldStyle?: React.CSSProperties,
		value?: Date,
		className?: string,
		defaultValue?: string,
		errorStyle?: React.CSSProperties,
		errorText?: React.ReactNode,
		floatingLabelStyle?: React.CSSProperties,
		floatingLabelText?: React.ReactNode,
		fullWidth?: boolean,
		hintStyle?: React.CSSProperties,
		hintText?: React.ReactNode,
		id?: string,
		inputStyle?: React.CSSProperties,
		name?: string,
		onBlur?: React.FocusEventHandler,
		onKeyDown?: React.KeyboardEventHandler,
		type?: string,
		underlineDisabledStyle?: React.CSSProperties,
		underlineFocusStyle?: React.CSSProperties,
		underlineShow?: boolean,
		underlineStyle?: React.CSSProperties
	}

	declare interface DatePickerDialogProps {
		DateTimeFormat?: Intl.DateTimeFormat,
		animation?: React.ComponentClass<Popover.PopoverAnimationProps>,
		autoOk?: boolean,
		cancelLabel?: React.ReactNode,
		container?: "dialog" | "inline",
		disableYearSelection?: boolean,
		firstDayOfWeek?: number,
		initialDate?: Date,
		locale?: string,
		maxDate?: Date,
		minDate?: Date,
		mode?: "portrait" | "landscape",
		okLabel?: React.ReactNode,
		onAccept?: (d: Date) => void,
		onDismiss?: () => void,
		onShow?: () => void,
		shouldDisableDate?: (day: Date) => boolean,
		style?: React.CSSProperties
	}

		declare export class DatePicker extends React$Component<DatePickerProps, {
		
	}> {
		
	}

	declare export class DatePickerDialog extends React$Component<DatePickerDialogProps, {
		
	}> {
		
	}

	
}

declare module 'GridList' {
		declare interface GridListProps {
		cellHeight?: number,
		cols?: number,
		padding?: number,
		style?: React.CSSProperties
	}

	declare interface GridTileProps {
		actionIcon?: React.ReactElement<any>,
		actionPosition?: "left" | "right",
		cols?: number,
		containerElement?: string | React.ReactElement<any> | React.ComponentClass<any>,
		rows?: number,
		style?: React.CSSProperties,
		subtitle?: React.ReactNode,
		title?: React.ReactNode,
		titleBackground?: string,
		titlePosition?: "top" | "bottom"
	}

		declare export class GridList extends React$Component<GridListProps, {
		
	}> {
		
	}

	declare export class GridTile extends React$Component<GridTileProps, {
		
	}> {
		
	}

	
}

declare module 'List' {
		declare interface ListProps {
		style?: React.CSSProperties
	}

	declare interface ListItemProps {
		autoGenerateNestedIndicator?: boolean,
		disableKeyboardFocus?: boolean,
		disabled?: boolean,
		initiallyOpen?: boolean,
		innerDivStyle?: React.CSSProperties,
		insetChildren?: boolean,
		leftAvatar?: React.ReactElement<any>,
		leftCheckbox?: React.ReactElement<any>,
		leftIcon?: React.ReactElement<any>,
		nestedItems?: React.ReactElement<ListItemProps>[],
		nestedLevel?: number,
		nestedListStyle?: React.CSSProperties,
		onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		onNestedListToggle?: (item: ListItem) => void,
		onTouchStart?: React.TouchEventHandler,
		onTouchTap?: TouchTapEventHandler,
		open?: boolean,
		primaryText?: React.ReactNode,
		primaryTogglesNestedList?: boolean,
		rightAvatar?: React.ReactElement<any>,
		rightIcon?: React.ReactElement<any>,
		rightIconButton?: React.ReactElement<any>,
		rightToggle?: React.ReactElement<any>,
		secondaryText?: React.ReactNode,
		secondaryTextLines?: number,
		style?: React.CSSProperties
	}

	declare interface SelectableProps {
		onChange?: (e: TouchTapEvent, value: any) => void,
		selectedItemStyle?: React.CSSProperties,
		value?: any
	}

	declare export function makeSelectable<P>(
		component: React.ComponentClass<P>
	): React.ComponentClass<P & SelectableProps>

	declare export class List extends React$Component<ListProps, {
		
	}> {
		
	}

	declare export class ListItem extends React$Component<ListItemProps, {
		
	}> {
		
	}

	
}

declare module 'Menus' {
		declare interface MenuProps {
		autoWidth?: boolean,
		desktop?: boolean,
		disableAutoFocus?: boolean,
		initiallyKeyboardFocused?: boolean,
		listStyle?: React.CSSProperties,
		maxHeight?: number,
		multiple?: boolean,
		onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void,
		onEscKeyDown?: React.KeyboardEventHandler,
		onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void,
		onKeyDown?: React.KeyboardEventHandler,
		selectedMenuItemStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		value?: any | any[],
		valueLink?: ReactLink<any | any[]>,
		width?: string | number
	}

	declare interface MenuItemProps {
		animation?: React.ComponentClass<Popover.PopoverAnimationProps>,
		checked?: boolean,
		desktop?: boolean,
		disabled?: boolean,
		focusState?: string,
		innerDivStyle?: React.CSSProperties,
		insetChildren?: boolean,
		leftIcon?: React.ReactElement<any>,
		menuItems?: React.ReactNode,
		onTouchTap?: TouchTapEventHandler,
		primaryText?: React.ReactNode,
		rightIcon?: React.ReactElement<any>,
		secondaryText?: React.ReactNode,
		style?: React.CSSProperties,
		value?: any
	}

	declare interface IconMenuProps {
		anchorOrigin?: propTypes.origin,
		animation?: React.ComponentClass<Popover.PopoverAnimationProps>,
		className?: string,
		iconButtonElement: React.ReactElement<IconButtonProps>,
		iconStyle?: React.CSSProperties,
		menuStyle?: React.CSSProperties,
		onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void,
		onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void,
		onMouseDown?: React.MouseEventHandler,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		onMouseUp?: React.MouseEventHandler,
		onRequestChange?: (opening: boolean, reason: string) => void,
		onTouchTap?: TouchTapEventHandler,
		open?: boolean,
		style?: React.CSSProperties,
		targetOrigin?: propTypes.origin,
		touchTapCloseDelay?: number,
		useLayerForClickAway?: boolean,
		animated?: boolean,
		autoWidth?: boolean,
		desktop?: boolean,
		listStyle?: React.CSSProperties,
		maxHeight?: number,
		multiple?: boolean,
		onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void,
		onKeyDown?: React.KeyboardEventHandler,
		selectedMenuItemStyle?: React.CSSProperties,
		value?: any | any[],
		valueLink?: ReactLink<any | any[]>,
		width?: string | number
	}

	declare interface DropDownMenuProps {
		animated?: boolean,
		animation?: React.ComponentClass<Popover.PopoverAnimationProps>,
		autoWidth?: boolean,
		className?: string,
		disabled?: boolean,
		iconStyle?: React.CSSProperties,
		labelStyle?: React.CSSProperties,
		listStyle?: React.CSSProperties,
		maxHeight?: number,
		menuStyle?: React.CSSProperties,
		onChange?: (e: TouchTapEvent, index: number, menuItemValue: any) => void,
		openImmediately?: boolean,
		style?: React.CSSProperties,
		underlineStyle?: React.CSSProperties,
		value?: any
	}

		declare export class Menu extends React$Component<MenuProps, {
		
	}> {
		
	}

	declare export class MenuItem extends React$Component<MenuItemProps, {
		
	}> {
		
	}

	declare export class IconMenu extends React$Component<IconMenuProps, {
		
	}> {
		
	}

	declare export class DropDownMenu extends React$Component<DropDownMenuProps, {
		
	}> {
		
	}

	
}

declare module 'Popover' {
		declare interface PopoverAnimationProps {
		open: boolean,
		style?: React.CSSProperties
	}

	declare interface PopoverProps {
		anchorEl?: React.ReactInstance,
		anchorOrigin?: propTypes.origin,
		animated?: boolean,
		animation?: React.ComponentClass<PopoverAnimationProps>,
		autoCloseWhenOffScreen?: boolean,
		canAutoPosition?: boolean,
		className?: string,
		onRequestClose?: (reason: string) => void,
		open?: boolean,
		style?: React.CSSProperties,
		targetOrigin?: propTypes.origin,
		useLayerForClickAway?: boolean,
		zDepth?: number
	}

	declare interface PopoverAnimationVerticalProps {
		className?: string,
		targetOrigin?: propTypes.origin,
		zDepth?: number
	}

	declare interface PopoverAnimationDefaultProps {
		className?: string,
		targetOrigin?: propTypes.origin,
		zDepth?: number
	}

		declare export class Popover extends React$Component<PopoverProps, {
		
	}> {
		
	}

	declare export class PopoverAnimationVertical extends React$Component<PopoverAnimationVerticalProps, {
		
	}> {
		
	}

	declare export class PopoverAnimationDefault extends React$Component<PopoverAnimationDefaultProps, {
		
	}> {
		
	}

	
}

declare module 'Switches' {
		declare interface CommonEnhancedSwitchProps<T> {
		
	}

	declare interface CheckboxProps {
		checked?: boolean,
		checkedIcon?: React.ReactElement<{
		style?: React.CSSProperties
	}>,
		defaultChecked?: boolean,
		disabled?: boolean,
		iconStyle?: React.CSSProperties,
		labelPosition?: "left" | "right",
		labelStyle?: React.CSSProperties,
		onCheck?: (event: React.MouseEvent, checked: boolean) => void,
		style?: React.CSSProperties,
		uncheckedIcon?: React.ReactElement<{
		style?: React.CSSProperties
	}>,
		valueLink?: ReactLink<boolean>
	}

	declare interface RadioButtonProps {
		checkedIcon?: React.ReactElement<{
		style?: React.CSSProperties
	}>,
		disabled?: boolean,
		iconStyle?: React.CSSProperties,
		inputStyle?: React.CSSProperties,
		labelStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		uncheckedIcon?: React.ReactElement<{
		style?: React.CSSProperties
	}>,
		value?: any
	}

	declare interface RadioButtonGroupProps {
		className?: string,
		defaultSelected?: any,
		labelPosition?: "left" | "right",
		name: string,
		onChange?: (e: React.FormEvent, selected: string) => void,
		style?: React.CSSProperties,
		valueSelected?: any
	}

	declare interface ToggleProps {
		defaultToggled?: boolean,
		disabled?: boolean,
		elementStyle?: React.CSSProperties,
		iconStyle?: React.CSSProperties,
		inputStyle?: React.CSSProperties,
		label?: string,
		labelPosition?: "left" | "right",
		labelStyle?: React.CSSProperties,
		onToggle?: (e: React.MouseEvent, isInputChecked: boolean) => void,
		rippleStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		thumbStyle?: React.CSSProperties,
		thumbSwitchedStyle?: React.CSSProperties,
		trackSwitchedStyle?: React.CSSProperties,
		toggled?: boolean,
		trackStyle?: React.CSSProperties,
		valueLink?: ReactLink<boolean>
	}

		declare export class Checkbox extends React$Component<CheckboxProps, {
		
	}> {
		isChecked(): void;
		setChecked(newCheckedValue: boolean): void
	}

	declare export class RadioButton extends React$Component<RadioButtonProps, {
		
	}> {
		isChecked(): boolean;
		getValue(): string
	}

	declare export class RadioButtonGroup extends React$Component<RadioButtonGroupProps, {
		
	}> {
		clearValue(): void;
		getSelectedValue(): string;
		setSelectedValue(newSelectionValue: string): void
	}

	declare export class Toggle extends React$Component<ToggleProps, {
		
	}> {
		isToggled(): boolean;
		setToggled(newToggledValue: boolean): void
	}

	
}

declare module 'Stepper' {
		declare interface StepProps {
		active?: boolean,
		completed?: boolean,
		disabled?: boolean,
		style?: React.CSSProperties
	}

	declare interface StepButtonProps {
		active?: boolean,
		completed?: boolean,
		disabled?: boolean,
		icon?: React.ReactNode | string | number,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		onTouchStart?: React.TouchEventHandler,
		style?: React.CSSProperties
	}

	declare interface StepContentProps {
		active?: boolean,
		last?: boolean,
		style?: React.CSSProperties
	}

	declare interface StepLabelProps {
		active?: boolean,
		completed?: boolean,
		disabled?: boolean,
		icon?: React.ReactNode | string | number,
		style?: React.CSSProperties
	}

	declare interface StepperProps {
		activeStep?: number,
		linear?: boolean,
		orientation?: "horizontal" | "vertical",
		style?: React.CSSProperties
	}

		declare export class Step extends React$Component<StepProps, {
		
	}> {
		
	}

	declare export class StepButton extends React$Component<StepButtonProps, {
		
	}> {
		
	}

	declare export class StepContent extends React$Component<StepContentProps, {
		
	}> {
		
	}

	declare export class StepLabel extends React$Component<StepLabelProps, {
		
	}> {
		
	}

	declare export class Stepper extends React$Component<StepperProps, {
		
	}> {
		
	}

	
}

declare module 'Table' {
		declare interface TableProps {
		allRowsSelected?: boolean,
		bodyStyle?: React.CSSProperties,
		className?: string,
		fixedFooter?: boolean,
		fixedHeader?: boolean,
		footerStyle?: React.CSSProperties,
		headerStyle?: React.CSSProperties,
		height?: string,
		multiSelectable?: boolean,
		onCellClick?: (row: number, column: number) => void,
		onCellHover?: (row: number, column: number) => void,
		onCellHoverExit?: (row: number, column: number) => void,
		onRowHover?: (row: number) => void,
		onRowHoverExit?: (row: number) => void,
		onRowSelection?: (selectedRows: number[] | string) => void,
		selectable?: boolean,
		style?: React.CSSProperties,
		wrapperStyle?: React.CSSProperties
	}

	declare interface TableRowProps {
		className?: string,
		displayBorder?: boolean,
		hoverable?: boolean,
		hovered?: boolean,
		onCellClick?: (e: React.MouseEvent, row: number, column: number) => void,
		onCellHover?: (e: React.MouseEvent, row: number, column: number) => void,
		onCellHoverExit?: (e: React.MouseEvent, row: number, column: number) => void,
		onRowClick?: (e: React.MouseEvent, row: number) => void,
		onRowHover?: (e: React.MouseEvent, row: number) => void,
		onRowHoverExit?: (e: React.MouseEvent, row: number) => void,
		rowNumber?: number,
		selectable?: boolean,
		selected?: boolean,
		striped?: boolean,
		style?: React.CSSProperties
	}

	declare interface TableRowColumnProps {
		className?: string,
		columnNumber?: number,
		hoverable?: boolean,
		key?: string,
		onClick?: (e: React.MouseEvent, column: number) => void,
		onHover?: (e: React.MouseEvent, column: number) => void,
		onHoverExit?: (e: React.MouseEvent, column: number) => void,
		style?: React.CSSProperties,
		colSpan?: number
	}

	declare interface TableHeaderProps {
		adjustForCheckbox?: boolean,
		className?: string,
		displaySelectAll?: boolean,
		enableSelectAll?: boolean,
		onSelectAll?: (checked: boolean) => void,
		selectAllSelected?: boolean,
		style?: React.CSSProperties
	}

	declare interface TableHeaderColumnProps {
		className?: string,
		columnNumber?: number,
		onClick?: (e: React.MouseEvent, column: number) => void,
		style?: React.CSSProperties,
		tooltip?: string,
		tooltipStyle?: React.CSSProperties,
		colSpan?: number
	}

	declare interface TableBodyProps {
		allRowsSelected?: boolean,
		className?: string,
		deselectOnClickaway?: boolean,
		displayRowCheckbox?: boolean,
		multiSelectable?: boolean,
		onCellClick?: (row: number, column: number) => void,
		onCellHover?: (row: number, column: number) => void,
		onCellHoverExit?: (row: number, column: number) => void,
		onRowHover?: (row: number) => void,
		onRowHoverExit?: (row: number) => void,
		onRowSelection?: (selectedRows: number[] | string) => void,
		preScanRows?: boolean,
		selectable?: boolean,
		showRowHover?: boolean,
		stripedRows?: boolean,
		style?: React.CSSProperties
	}

	declare interface TableFooterProps {
		adjustForCheckbox?: boolean,
		className?: string,
		style?: React.CSSProperties
	}

		declare export class Table extends React$Component<TableProps, {
		
	}> {
		
	}

	declare export class TableRow extends React$Component<TableRowProps, {
		
	}> {
		
	}

	declare export class TableRowColumn extends React$Component<TableRowColumnProps, {
		
	}> {
		
	}

	declare export class TableHeader extends React$Component<TableHeaderProps, {
		
	}> {
		
	}

	declare export class TableHeaderColumn extends React$Component<TableHeaderColumnProps, {
		
	}> {
		
	}

	declare export class TableBody extends React$Component<TableBodyProps, {
		
	}> {
		
	}

	declare export class TableFooter extends React$Component<TableFooterProps, {
		
	}> {
		
	}

	
}

declare module 'Tabs' {
		declare interface TabsProps {
		className?: string,
		contentContainerClassName?: string,
		contentContainerStyle?: React.CSSProperties,
		initialSelectedIndex?: number,
		inkBarStyle?: React.CSSProperties,
		onChange?: (value: any, e: React.FormEvent, tab: Tab) => void,
		style?: React.CSSProperties,
		tabItemContainerStyle?: React.CSSProperties,
		tabTemplate?: React.ComponentClass<any>,
		value?: any
	}

	declare interface TabProps {
		className?: string,
		icon?: React.ReactNode,
		label?: React.ReactNode,
		onActive?: (tab: Tab) => void,
		style?: React.CSSProperties,
		value?: any,
		disabled?: boolean
	}

		declare export class Tabs extends React$Component<TabsProps, {
		
	}> {
		
	}

	declare export class Tab extends React$Component<TabProps, {
		
	}> {
		
	}

	
}

declare module 'Toolbar' {
		declare interface ToolbarProps {
		className?: string,
		noGutter?: boolean,
		style?: React.CSSProperties
	}

	declare interface ToolbarGroupProps {
		className?: string,
		firstChild?: boolean,
		float?: "left" | "right",
		lastChild?: boolean,
		style?: React.CSSProperties
	}

	declare interface ToolbarSeparatorProps {
		className?: string,
		style?: React.CSSProperties
	}

	declare interface ToolbarTitleProps {
		className?: string,
		style?: React.CSSProperties,
		text?: string
	}

		declare export class Toolbar extends React$Component<ToolbarProps, {
		
	}> {
		
	}

	declare export class ToolbarGroup extends React$Component<ToolbarGroupProps, {
		
	}> {
		
	}

	declare export class ToolbarSeparator extends React$Component<ToolbarSeparatorProps, {
		
	}> {
		
	}

	declare export class ToolbarTitle extends React$Component<ToolbarTitleProps, {
		
	}> {
		
	}

	
}

declare module 'ColorManipulator' {
		declare interface MuiColorObject {
		type: string,
		values: number[]
	}

	declare function convertColorToString(color: any): string

	declare function convertHexToRGB(color: string): string

	declare function decomposeColor(color: string): MuiColorObject

	declare function getContrastRatio(foreground: string, background: string): number

	declare function getLuminance(color: string): number

	declare function emphasize(color: string, coefficient?: number): string

	declare function fade(color: string, value: number): string

	declare function darken(color: string, coefficient: number): string

	declare function lighten(color: string, coefficient: number): string

		
}

declare module 'Utils' {
		declare interface Dom {
		addClass(el: Element, className: string): void,
		forceRedraw(el: HTMLElement): void,
		getStyleAttributeAsNumber(el: HTMLElement, attr: string): number,
		hasClass(el: Element, className: string): boolean,
		isDescendant(parent: Node, child: Node): boolean,
		offset(el: Element): {
		top: number,
		left: number
	},
		removeClass(el: Element, className: string): void,
		toggleClass(el: Element, className: string): void,
		withoutTransition(el: HTMLElement, callback: () => void): void
	}

	declare interface Events {
		isKeyboard(e: Event): boolean,
		off(el: Element, type: string, callback: EventListener): void,
		on(el: Element, type: string, callback: EventListener): void,
		once(el: Element, type: string, callback: EventListener): void
	}

			
}

declare module 'material-ui/AppBar' {
					declare module.exports: undefined


}

declare module 'material-ui/AutoComplete' {
					declare module.exports: undefined


}

declare module 'material-ui/Avatar' {
					declare module.exports: undefined


}

declare module 'material-ui/Badge' {
					declare module.exports: undefined


}

declare module 'material-ui/Card' {
					declare module.exports: undefined


}

declare module 'material-ui/Card/Card' {
					declare module.exports: undefined


}

declare module 'material-ui/Card/CardActions' {
					declare module.exports: undefined


}

declare module 'material-ui/Card/CardExpandable' {
					declare module.exports: undefined


}

declare module 'material-ui/Card/CardHeader' {
					declare module.exports: undefined


}

declare module 'material-ui/Card/CardMedia' {
					declare module.exports: undefined


}

declare module 'material-ui/Card/CardText' {
					declare module.exports: undefined


}

declare module 'material-ui/Card/CardTitle' {
					declare module.exports: undefined


}

declare module 'material-ui/Checkbox' {
					declare module.exports: undefined


}

declare module 'material-ui/Chip' {
					declare module.exports: undefined


}

declare module 'material-ui/CircularProgress' {
					declare module.exports: undefined


}

declare module 'material-ui/DatePicker' {
					declare module.exports: undefined


}

declare module 'material-ui/Dialog' {
					declare module.exports: undefined


}

declare module 'material-ui/Divider' {
					declare module.exports: undefined


}

declare module 'material-ui/Drawer' {
					declare module.exports: undefined


}

declare module 'material-ui/DropDownMenu' {
					declare module.exports: undefined


}

declare module 'material-ui/FlatButton' {
					declare module.exports: undefined


}

declare module 'material-ui/FloatingActionButton' {
					declare module.exports: undefined


}

declare module 'material-ui/FontIcon' {
					declare module.exports: undefined


}

declare module 'material-ui/GridList' {
					declare module.exports: undefined


}

declare module 'material-ui/GridList/GridList' {
					declare module.exports: undefined


}

declare module 'material-ui/GridList/GridTile' {
					declare module.exports: undefined


}

declare module 'material-ui/IconButton' {
					declare module.exports: undefined


}

declare module 'material-ui/IconMenu' {
					declare module.exports: undefined


}

declare module 'material-ui/LinearProgress' {
					declare module.exports: undefined


}

declare module 'material-ui/List' {
					declare module.exports: undefined


}

declare module 'material-ui/List/List' {
					declare module.exports: undefined


}

declare module 'material-ui/List/ListItem' {
					declare module.exports: undefined


}

declare module 'material-ui/List/makeSelectable' {
					declare module.exports: undefined


}

declare module 'material-ui/Menu' {
					declare module.exports: undefined


}

declare module 'material-ui/MenuItem' {
					declare module.exports: undefined


}

declare module 'material-ui/Paper' {
					declare module.exports: undefined


}

declare module 'material-ui/Popover' {
					declare module.exports: undefined


}

declare module 'material-ui/Popover/Popover' {
					declare module.exports: undefined


}

declare module 'material-ui/Popover/PopoverAnimationDefault' {
					declare module.exports: undefined


}

declare module 'material-ui/Popover/PopoverAnimationVertical' {
					declare module.exports: undefined


}

declare module 'material-ui/RadioButton' {
					declare module.exports: undefined


}

declare module 'material-ui/RadioButton/RadioButtonGroup' {
					declare module.exports: undefined


}

declare module 'material-ui/RaisedButton' {
					declare module.exports: undefined


}

declare module 'material-ui/RefreshIndicator' {
					declare module.exports: undefined


}

declare module 'material-ui/SelectField' {
					declare module.exports: undefined


}

declare module 'material-ui/Slider' {
					declare module.exports: undefined


}

declare module 'material-ui/Snackbar' {
					declare module.exports: undefined


}

declare module 'material-ui/Subheader' {
					declare module.exports: undefined


}

declare module 'material-ui/SvgIcon' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/work' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/camera-enhance' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/flip-to-back' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/feedback' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/assignment-turned-in' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/track-changes' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-stream' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/open-in-browser' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-headline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/alarm-add' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/history' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/perm-device-information' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/reorder' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/assignment' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/shopping-cart' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/face' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/event' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-week' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/rounded-corner' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-carousel' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/toll' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/home' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/subject' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/lock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/visibility-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/opacity' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/dns' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/open-with' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/system-update-alt' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/picture-in-picture-alt' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/bookmark-border' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/dashboard' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/done-all' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/aspect-ratio' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/verified-user' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/update' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/query-builder' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/supervisor-account' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/polymer' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/accessible' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/highlight-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/power-settings-new' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/chrome-reader-mode' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/perm-camera-mic' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/touch-app' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/receipt' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/assignment-late' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/alarm-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/toc' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-bluetooth' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-brightness' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/donut-small' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/zoom-out' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/loyalty' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/search' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/account-balance-wallet' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/date-range' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/alarm-on' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-quilt' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/launch' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/visibility' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/flight-land' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/card-travel' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/get-app' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/markunread-mailbox' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-agenda' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/timeline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-remote' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/input' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/record-voice-over' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/backup' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/language' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/play-for-work' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/gif' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/theaters' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/offline-pin' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/assignment-return' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/print' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-overscan' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/store' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/exit-to-app' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/account-balance' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/grade' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/picture-in-picture' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/copyright' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/donut-large' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/lock-open' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/perm-media' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/all-out' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/check-circle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/swap-vertical-circle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-input-svideo' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/watch-later' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/question-answer' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/assignment-ind' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/code' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/turned-in-not' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/line-weight' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/restore' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/tab' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/open-in-new' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/turned-in' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-input-hdmi' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/favorite-border' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/done' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/payment' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/announcement' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/find-in-page' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/thumbs-up-down' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/explore' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/today' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-power' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/gavel' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/build' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/rowing' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/label' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/card-giftcard' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/thumb-up' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/shopping-basket' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/swap-horiz' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/help-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/pregnant-woman' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/help' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-input-antenna' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/find-replace' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/shop' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/change-history' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/info' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/trending-down' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/flight-takeoff' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/alarm' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/spellcheck' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-input-component' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-applications' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/room' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/book' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/class' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/group-work' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/hourglass-full' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/assessment' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/youtube-searched-for' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/eject' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/trending-up' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/http' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/stars' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/autorenew' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-ethernet' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/label-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-phone' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/info-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/lock-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-input-composite' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/invert-colors' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/bookmark' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/add-shopping-cart' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/bug-report' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/cached' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-day' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/fingerprint' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/accessibility' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/perm-data-setting' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-backup-restore' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/zoom-in' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/perm-identity' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/favorite' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/thumb-down' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/assignment-returned' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/account-box' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/extension' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/pageview' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/https' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/translate' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/three-d-rotation' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/tab-unselected' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/description' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/note-add' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/perm-scan-wifi' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/pets' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-array' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/shop-two' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/line-style' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/lightbulb-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/report-problem' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/swap-vert' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/list' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-voice' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-list' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/pan-tool' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/important-devices' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/redeem' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/flip-to-front' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/android' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/account-circle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/event-seat' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/perm-contact-calendar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/perm-phone-msg' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/delete' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/card-membership' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/hourglass-empty' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/schedule' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/trending-flat' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/motorcycle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-column' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/settings-cell' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/credit-card' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/view-module' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/compare-arrows' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/action/speaker-notes' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/person' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/notifications-none' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/domain' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/notifications-paused' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/person-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/plus-one' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/notifications-active' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/share' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/whatshot' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/poll' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/pages' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/notifications-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/notifications' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/school' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/cake' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/people-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/location-city' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/public' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/mood-bad' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/people' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/mood' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/party-mode' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/group' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/person-add' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/social/group-add' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/edit-location' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-airport' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-phone' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions-car' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-drink' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-gas-station' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/store-mall-directory' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/add-location' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-laundry-service' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-hotel' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-pizza' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/person-pin-circle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/terrain' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions-subway' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-car-wash' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/restaurant-menu' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/near-me' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/my-location' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-convenience-store' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-offer' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-florist' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-shipping' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-taxi' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions-walk' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-hospital' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/layers' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions-run' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/rate-review' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-dining' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-post-office' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/pin-drop' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions-boat' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-see' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/map' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/flight' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/person-pin' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/satellite' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-printshop' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/navigation' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions-railway' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-atm' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions-transit' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-parking' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-cafe' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-mall' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/zoom-out-map' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-activity' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-grocery-store' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-pharmacy' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-movies' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/place' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/layers-clear' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/hotel' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions-bike' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-library' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/local-play' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/directions-bus' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/traffic' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/maps/beenhere' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/call-received' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/dialpad' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/forum' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/no-sim' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/chat' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/stay-primary-landscape' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/phonelink-setup' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/ring-volume' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/phonelink-lock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/contacts' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/call-missed' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/contact-mail' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/portable-wifi-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/call-merge' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/tact-mail' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/stop-screen-share' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/vpn-key' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/swap-calls' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/dialer-sip' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/business' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/phonelink-erase' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/call' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/screen-share' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/clear-all' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/chat-bubble-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/call-missed-outgoing' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/stay-primary-portrait' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/stay-current-portrait' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/voicemail' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/speaker-phone' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/call-split' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/live-help' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/call-made' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/phone' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/textsms' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/message' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/import-export' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/import-contacts' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/phonelink-ring' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/present-to-all' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/contact-phone' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/invert-colors-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/comment' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/chat-bubble' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/mail-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/location-on' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/stay-current-landscape' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/location-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/email' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/communication/call-end' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/toggle/check-box' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/toggle/star-half' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/toggle/check-box-outline-blank' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/toggle/star' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/toggle/star-border' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/toggle/radio-button-unchecked' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/toggle/indeterminate-check-box' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/toggle/radio-button-checked' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/index' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/index-generator' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/alert/warning' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/alert/add-alert' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/alert/error-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/alert/error' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/file-upload' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/cloud-upload' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/cloud-done' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/folder-open' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/cloud-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/cloud-queue' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/folder-shared' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/cloud-circle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/folder' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/attachment' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/create-new-folder' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/cloud-download' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/cloud' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/file/file-download' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation-arrow-drop-right' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/toys' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/dock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/headset' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-voice' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/phonelink-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/speaker-group' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/desktop-windows' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/laptop-mac' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-return' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/gamepad' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-up' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/laptop' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/phone-iphone' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/memory' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/security' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-capslock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/sim-card' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/devices-other' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/tablet-android' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-right' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-tab' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/watch' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/speaker' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/phonelink' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/laptop-windows' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/tv' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/headset-mic' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/videogame-asset' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-down' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-hide' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/scanner' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/laptop-chromebook' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/tablet-mac' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/cast' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/cast-connected' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-arrow-left' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/phone-android' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/computer' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/power-input' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/smartphone' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/router' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/keyboard-backspace' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/developer-board' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/device-hub' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/mouse' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/desktop-mac' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/hardware/tablet' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/add-box' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/filter-list' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/save' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/unarchive' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/link' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/sort' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/text-format' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/add' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/send' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/gesture' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/archive' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/weekend' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/markunread' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/create' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/content-cut' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/clear' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/redo' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/block' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/forward' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/mail' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/inbox' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/remove-circle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/move-to-inbox' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/flag' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/reply-all' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/remove' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/next-week' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/undo' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/font-download' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/remove-circle-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/backspace' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/reply' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/report' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/add-circle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/content-copy' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/content-paste' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/select-all' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/add-circle-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/content/drafts' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/wrap-text' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-size' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/functions' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-bold' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-align-center' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/mode-comment' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/money-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-textdirection-r-to-l' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/insert-drive-file' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/highlight' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-clear' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-style' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-shapes' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-paint' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/linear-scale' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/insert-photo' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/drag-handle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/merge-type' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/attach-money' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-vertical' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-indent-decrease' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/insert-emoticon' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/insert-invitation' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-color-fill' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/mode-edit' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/vertical-align-bottom' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-align-justify' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/attach-file' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/space-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-clear' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/short-text' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/insert-link' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-list-numbered' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-quote' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-left' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-underlined' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/text-fields' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-italic' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/publish' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-top' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-indent-increase' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-bottom' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-align-right' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-right' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/insert-comment' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/strikethrough-s' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-strikethrough' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/insert-chart' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-color-reset' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-inner' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-color-text' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-horizontal' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-list-bulleted' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-outer' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-align-left' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-color' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-textdirection-l-to-r' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/vertical-align-center' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/vertical-align-top' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/format-line-spacing' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/editor/border-all' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/screen-lock-portrait' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/bluetooth-searching' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-3-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/network-cell' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-no-sim' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-2-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/devices' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-90' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-charging-80' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/location-searching' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/wallpaper' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/screen-lock-rotation' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/screen-lock-landscape' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-charging-20' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/usb' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/airplanemode-active' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/network-wifi' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/graphic-eq' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/bluetooth-connected' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/gps-fixed' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/brightness-medium' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-3-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-3-bar-lock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-80' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/wifi-lock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-2-bar-lock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/bluetooth' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/access-time' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-charging-30' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/dvr' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-60' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/access-alarm' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/nfc' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/data-usage' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/access-alarms' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-full' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-charging-full' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/settings-system-daydream' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-std' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-unknown' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/add-alarm' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/storage' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-charging-90' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/screen-rotation' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-4-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-charging-50' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-30' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-0-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-alert' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-1-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-4-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/wifi-tethering' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-0-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/brightness-auto' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/location-disabled' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-3-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/gps-not-fixed' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-1-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-charging-60' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/gps-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-null' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/brightness-low' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/sd-storage' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/airplanemode-inactive' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/widgets' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/brightness-high' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-20' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/bluetooth-disabled' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-4-bar-lock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/developer-mode' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/battery-50' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-2-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-cellular-0-bar' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/device/signal-wifi-1-bar-lock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/arrow-forward' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/unfold-more' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/arrow-drop-down' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/arrow-back' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/arrow-downward' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/fullscreen' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/unfold-less' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/chevron-right' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/arrow-drop-down-circle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/check' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/fullscreen-exit' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/chevron-left' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/menu' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/apps' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/arrow-upward' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/close' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/more-horiz' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/cancel' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/subdirectory-arrow-right' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/expand-more' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/arrow-drop-up' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/subdirectory-arrow-left' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/expand-less' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/refresh' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/navigation/more-vert' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/rv-hookup' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/no-encryption' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/phone-forwarded' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/airline-seat-flat-angled' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/time-to-leave' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/airline-seat-legroom-extra' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/airline-seat-recline-extra' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/airline-seat-individual-suite' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/vibration' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/sim-card-alert' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/sms-failed' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/airline-seat-flat' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/do-not-disturb' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/sync-problem' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/event-available' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/network-check' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/sms' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/disc-full' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/do-not-disturb-alt' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/system-update' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/phone-bluetooth-speaker' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/ondemand-video' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/power' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/phone-locked' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/sd-card' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/event-busy' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/personal-video' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/airline-seat-legroom-normal' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/phone-in-talk' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/airline-seat-legroom-reduced' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/phone-paused' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/sync-disabled' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/enhanced-encryption' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/mms' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/drive-eta' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/voice-chat' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/wifi' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/airline-seat-recline-normal' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/more' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/vpn-lock' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/event-note' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/confirmation-number' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/network-locked' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/adb' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/bluetooth-audio' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/wc' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/tap-and-play' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/folder-special' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/live-tv' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/sync' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/notification/phone-missed' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/skip-previous' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/volume-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/subscriptions' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/play-arrow' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/play-circle-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/replay-30' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/videocam' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/replay-5' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/forward-10' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/recent-actors' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/replay-10' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/repeat' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/queue-music' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/fiber-pin' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/new-releases' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/fiber-new' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/fiber-manual-record' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/hearing' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/loop' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/volume-up' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/high-quality' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/surround-sound' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/equalizer' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/music-video' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/shuffle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/volume-down' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/radio' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/web-asset' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/replay' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/queue-play-next' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/closed-caption' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/fiber-dvr' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/explicit' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/games' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/videocam-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/hd' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/fast-rewind' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/add-to-queue' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/movie' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/library-books' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/art-track' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/web' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/play-circle-filled' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/snooze' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/forward-5' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/sort-by-alpha' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/pause-circle-filled' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/fiber-smart-record' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/stop' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/playlist-play' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/library-add' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/volume-mute' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/skip-next' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/forward-30' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/playlist-add' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/album' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/video-library' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/library-music' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/not-interested' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/playlist-add-check' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/mic-none' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/pause' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/remove-from-queue' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/slow-motion-video' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/subtitles' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/mic-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/repeat-one' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/queue' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/fast-forward' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/mic' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/av-timer' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/pause-circle-outline' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/av/airplay' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/camera-rear' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/add-a-photo' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/portrait' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/looks' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/exposure-neg-2' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/wb-cloudy' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/switch-video' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/wb-auto' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-center-focus' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-7-5' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-3-2' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/assistant-photo' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/looks-one' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/collections-bookmark' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/image-aspect-ratio' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/brush' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/linked-camera' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-1' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/edit' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/timelapse' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/nature' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/monochrome-photos' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/brightness-6' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/music-note' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/collections' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/wb-sunny' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/hdr-strong' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/panorama-vertical' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/navigate-next' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/looks-4' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-4' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/brightness-1' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/exposure-plus-1' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/timer-3' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/exposure-zero' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/blur-linear' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/photo-library' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-drama' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/dehaze' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/control-point-duplicate' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/image' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/flash-auto' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/rotate-90-degrees-ccw' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/blur-circular' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-3' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/exposure-plus-2' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/flash-on' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/view-comfy' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/colorize' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/brightness-4' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-free' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/vignette' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/tag-faces' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/brightness-7' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/healing' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/nature-people' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/gradient' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/flash-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/movie-creation' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/leak-add' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-5' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/photo' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/color-lens' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/broken-image' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/looks-6' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/picture-as-pdf' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/palette' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-landscape' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/grid-on' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/slideshow' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/brightness-3' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/style' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-vintage' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/tune' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/camera' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/timer' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/landscape' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-16-9' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/add-to-photos' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/wb-incandescent' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/hdr-weak' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/details' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/view-compact' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/brightness-5' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/center-focus-weak' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/adjust' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/camera-front' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/transform' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/grain' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-9-plus' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/looks-5' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/hdr-on' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/audiotrack' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/compare' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/texture' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/movie-filter' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/exposure' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-b-and-w' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/photo-size-select-actual' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-5-4' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/brightness-2' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/tonality' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/panorama-wide-angle' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/flip' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-9' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/blur-on' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/assistant' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/lens' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/switch-camera' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/photo-filter' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/wb-iridescent' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-square' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/timer-10' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/rotate-right' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/grid-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-7' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/loupe' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-6' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-tilt-shift' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-din' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/center-focus-strong' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/rotate-left' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-hdr' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/timer-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/straighten' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/exposure-neg-1' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/navigate-before' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/iso' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/photo-album' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-rotate' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/remove-red-eye' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-portrait' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/camera-alt' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/control-point' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/panorama' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/panorama-fish-eye' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-8' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/looks-two' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/panorama-horizontal' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/looks-3' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-none' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/photo-size-select-large' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/blur-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/camera-roll' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/leak-remove' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-frames' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/flare' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/photo-size-select-small' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/photo-camera' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/hdr-off' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/filter-2' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/image/crop-original' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/kitchen' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/spa' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/all-inclusive' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/ac-unit' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/child-care' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/golf-course' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/business-center' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/free-breakfast' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/fitness-center' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/pool' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/child-friendly' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/casino' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/hot-tub' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/smoke-free' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/room-service' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/smoking-rooms' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/beach-access' {
					declare module.exports: undefined


}

declare module 'material-ui/svg-icons/places/airport-shuttle' {
					declare module.exports: undefined


}

declare module 'material-ui/styles' {
	declare export type MuiTheme = ___MaterialUI.Styles.MuiTheme;

				
}

declare module 'material-ui/styles/getMuiTheme' {
					declare module.exports: undefined


}

declare module 'material-ui/styles/muiThemeable' {
					declare module.exports: undefined


}

declare module 'material-ui/styles/MuiThemeProvider' {
					declare module.exports: undefined


}

declare module 'material-ui/styles/spacing' {
	declare type Spacing = ___MaterialUI.Styles.Spacing;

				declare module.exports: Spacing


}

declare module 'material-ui/styles/transitions' {
					declare module.exports: undefined


}

declare module 'material-ui/styles/typography' {
					declare module.exports: undefined


}

declare module 'material-ui/styles/baseThemes/lightBaseTheme' {
					declare module.exports: undefined


}

declare module 'material-ui/styles/baseThemes/darkBaseTheme' {
					declare module.exports: undefined


}

declare module 'material-ui/styles/zIndex' {
					declare module.exports: undefined


}

declare module 'material-ui/Table' {
					declare module.exports: undefined


}

declare module 'material-ui/Table/Table' {
					declare module.exports: undefined


}

declare module 'material-ui/Table/TableBody' {
					declare module.exports: undefined


}

declare module 'material-ui/Table/TableFooter' {
					declare module.exports: undefined


}

declare module 'material-ui/Table/TableHeader' {
					declare module.exports: undefined


}

declare module 'material-ui/Table/TableHeaderColumn' {
					declare module.exports: undefined


}

declare module 'material-ui/Table/TableRow' {
					declare module.exports: undefined


}

declare module 'material-ui/Table/TableRowColumn' {
					declare module.exports: undefined


}

declare module 'material-ui/Tabs' {
					declare module.exports: undefined


}

declare module 'material-ui/Tabs/Tab' {
					declare module.exports: undefined


}

declare module 'material-ui/Tabs/Tabs' {
					declare module.exports: undefined


}

declare module 'material-ui/TextField' {
					declare module.exports: undefined


}

declare module 'material-ui/TimePicker' {
					declare module.exports: undefined


}

declare module 'material-ui/Toggle' {
					declare module.exports: undefined


}

declare module 'material-ui/Toolbar' {
					declare module.exports: undefined


}

declare module 'material-ui/Toolbar/Toolbar' {
					declare module.exports: undefined


}

declare module 'material-ui/Toolbar/ToolbarGroup' {
					declare module.exports: undefined


}

declare module 'material-ui/Toolbar/ToolbarSeparator' {
					declare module.exports: undefined


}

declare module 'material-ui/Toolbar/ToolbarTitle' {
					declare module.exports: undefined


}

declare module 'material-ui/utils/dom' {
					declare module.exports: undefined


}

declare module 'material-ui/utils/events' {
					declare module.exports: undefined


}

declare module 'material-ui/utils/withWidth' {
		declare interface Options {
		largeWidth?: number,
		mediumWidth?: number,
		resizeInterval?: number
	}

	declare export default function withWidth<C>(options?: Options): (component: C) => C

		
}

declare module 'material-ui/internal/AppCanvas' {
		declare interface AppCanvasProps {
		
	}

		declare class AppCanvas extends ___React$Component<AppCanvasProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/AutoLockScrolling' {
		declare interface AutoLockScrollingProps {
		lock: boolean
	}

		declare class AutoLockScrolling extends ___React$Component<AutoLockScrollingProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/BeforeAfterWrapper' {
		declare interface BeforeAfterWrapperProps {
		afterElementType?: string,
		afterStyle?: ___React.CSSProperties,
		beforeElementType?: string,
		beforeStyle?: ___React.CSSProperties,
		elementType?: string,
		style?: ___React.CSSProperties
	}

		declare class BeforeAfterWrapper extends ___React$Component<BeforeAfterWrapperProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/CircleRipple' {
		declare interface CircleRippleProps {
		aborted?: boolean,
		color?: string,
		opacity?: number,
		style?: ___React.CSSProperties
	}

		declare class CircleRipple extends ___React$Component<CircleRippleProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/ClearFix' {
		declare interface ClearFixProps {
		style?: ___React.CSSProperties
	}

		declare class ClearFix extends ___React$Component<ClearFixProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/ClickAwayListener' {
		declare interface ClickAwayListenerProps {
		onClickAway?: any
	}

		declare class ClickAwayListener extends ___React$Component<ClickAwayListenerProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/EnhancedButton' {
		declare interface EnhancedButtonProps {
		
	}

		declare class EnhancedButton extends ___React$Component<EnhancedButtonProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/EnhancedSwitch' {
		declare interface EnhancedSwitchProps {
		
	}

		declare class EnhancedSwitch extends ___React$Component<EnhancedSwitchProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/ExpandTransition' {
		declare interface ExpandTransitionProps {
		enterDelay?: number,
		loading?: boolean,
		open?: boolean,
		style?: ___React.CSSProperties,
		transitionDelay?: number,
		transitionDuration?: number
	}

		declare class ExpandTransition extends ___React$Component<ExpandTransitionProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/ExpandTransitionChild' {
		declare interface ExpandTransitionChildProps {
		enterDelay?: number,
		style?: ___React.CSSProperties,
		transitionDelay?: number,
		transitionDuration?: number
	}

		declare class ExpandTransitionChild extends ___React$Component<ExpandTransitionChildProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/FocusRipple' {
		declare interface FocusRippleProps {
		color?: string,
		innerStyle?: ___React.CSSProperties,
		opacity?: number,
		show?: boolean,
		style?: ___React.CSSProperties
	}

		declare class FocusRipple extends ___React$Component<FocusRippleProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/Overlay' {
		declare interface OverlayProps {
		autoLockScrolling?: boolean,
		show: boolean,
		style?: ___React.CSSProperties,
		transitionEnabled?: boolean
	}

		declare class Overlay extends ___React$Component<OverlayProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/RenderToLayer' {
		declare interface RenderToLayerProps {
		componentClickAway?: Function,
		open: boolean,
		render: Function,
		useLayerForClickAway?: boolean
	}

		declare class RenderToLayer extends ___React$Component<RenderToLayerProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/ScaleIn' {
		declare interface ScaleInProps {
		childStyle?: ___React.CSSProperties,
		enterDelay?: number,
		maxScale?: number,
		minScale?: number
	}

		declare class ScaleIn extends ___React$Component<ScaleInProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/ScaleInChild' {
		declare interface ScaleInChildProps {
		enterDelay?: number,
		maxScale?: number,
		minScale?: number,
		style?: ___React.CSSProperties
	}

		declare class ScaleInChild extends ___React$Component<ScaleInChildProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/SlideIn' {
		declare interface SlideInProps {
		childStyle?: ___React.CSSProperties,
		direction?: ___MaterialUI.propTypes.direction,
		enterDelay?: number,
		style?: ___React.CSSProperties
	}

		declare class SlideIn extends ___React$Component<SlideInProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/SlideInChild' {
		declare interface SlideInChildProps {
		direction?: string,
		enterDelay?: number,
		getLeaveDirection: Function,
		style?: ___React.CSSProperties
	}

		declare class SlideInChild extends ___React$Component<SlideInChildProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/Tooltip' {
		declare interface TooltipProps {
		className?: string,
		horizontalPosition?: ___MaterialUI.propTypes.horizontal,
		label: any,
		show?: boolean,
		style?: ___React.CSSProperties,
		touch?: boolean,
		verticalPosition?: ___MaterialUI.propTypes.vertical
	}

		declare class Tooltip extends ___React$Component<TooltipProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'material-ui/internal/TouchRipple' {
		declare interface TouchRippleProps {
		abortOnScroll?: boolean,
		centerRipple?: boolean,
		color?: string,
		opacity?: number,
		style?: ___React.CSSProperties
	}

		declare class TouchRipple extends ___React$Component<TouchRippleProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}
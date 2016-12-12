

declare module 'material-ui-0.11.1' {
					
}

declare module 'npm$namespace$___MaterialUI' {
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

	declare interface AppBarProps {
		iconClassNameLeft?: string,
		iconClassNameRight?: string,
		iconElementLeft?: React.ReactElement<any>,
		iconElementRight?: React.ReactElement<any>,
		iconStyleRight?: string,
		style?: React.CSSProperties,
		showMenuIconButton?: boolean,
		title?: React.ReactNode,
		zDepth?: number,
		onLeftIconButtonTouchTap?: TouchTapEventHandler,
		onRightIconButtonTouchTap?: TouchTapEventHandler
	}

	declare interface AppCanvasProps {
		
	}

	declare interface AvatarProps {
		icon?: React.ReactElement<any>,
		backgroundColor?: string,
		color?: string,
		size?: number,
		src?: string,
		style?: React.CSSProperties
	}

	declare interface BeforeAfterWrapperProps {
		beforeStyle?: React.CSSProperties,
		afterStyle?: React.CSSProperties,
		beforeElementType?: string,
		afterElementType?: string,
		elementType?: string
	}

	declare interface CommonEnhancedSwitchProps<T> {
		id?: string,
		iconStyle?: React.CSSProperties,
		labelStyle?: React.CSSProperties,
		rippleStyle?: React.CSSProperties,
		thumbStyle?: React.CSSProperties,
		trackStyle?: React.CSSProperties,
		name?: string,
		value?: string,
		label?: string,
		required?: boolean,
		disabled?: boolean,
		defaultSwitched?: boolean,
		disableFocusRipple?: boolean,
		disableTouchRipple?: boolean
	}

	declare interface EnhancedSwitchProps {
		inputType: string,
		switchElement: React.ReactElement<any>,
		onParentShouldUpdate: (isInputChecked: boolean) => void,
		switched: boolean,
		rippleColor?: string,
		onSwitch?: (e: React.MouseEvent, isInputChecked: boolean) => void,
		labelPosition?: string
	}

	declare interface CheckboxProps {
		checkedIcon?: React.ReactElement<{
		style?: React.CSSProperties
	}>,
		defaultChecked?: boolean,
		iconStyle?: React.CSSProperties,
		label?: string,
		labelStyle?: React.CSSProperties,
		labelPosition?: string,
		style?: React.CSSProperties,
		checked?: boolean,
		unCheckedIcon?: React.ReactElement<{
		style?: React.CSSProperties
	}>,
		disabled?: boolean,
		valueLink?: ReactLink<boolean>,
		checkedLink?: ReactLink<boolean>,
		onCheck?: (event: React.MouseEvent, checked: boolean) => void
	}

	declare interface CircularProgressProps {
		mode?: string,
		value?: number,
		min?: number,
		max?: number,
		size?: number,
		color?: string,
		innerStyle?: React.CSSProperties
	}

	declare interface ClearFixProps {
		
	}

	declare export interface DialogAction {
		text: string,
		ref?: string,
		onTouchTap?: TouchTapEventHandler,
		onClick?: React.MouseEventHandler
	}

	declare interface DialogProps {
		actions?: Array<DialogAction | React.ReactElement<any>>,
		actionFocus?: string,
		autoDetectWindowHeight?: boolean,
		autoScrollBodyContent?: boolean,
		bodyStyle?: React.CSSProperties,
		contentClassName?: string,
		contentInnerStyle?: React.CSSProperties,
		contentStyle?: React.CSSProperties,
		modal?: boolean,
		openImmediately?: boolean,
		repositionOnUpdate?: boolean,
		title?: React.ReactNode,
		onClickAway?: () => void,
		onDismiss?: () => void,
		onShow?: () => void
	}

	declare interface DropDownIconProps {
		menuItems: Menu.MenuItemRequest[],
		closeOnMenuItemTouchTap?: boolean,
		iconStyle?: React.CSSProperties,
		iconClassName?: string,
		iconLigature?: string,
		onChange?: Menu.ItemTapEventHandler
	}

	declare interface DropDownMenuProps {
		displayMember?: string,
		valueMember?: string,
		autoWidth?: boolean,
		menuItems: Menu.MenuItemRequest[],
		menuItemStyle?: React.CSSProperties,
		selectedIndex?: number,
		underlineStyle?: React.CSSProperties,
		iconStyle?: React.CSSProperties,
		labelStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		disabled?: boolean,
		valueLink?: ReactLink<any>,
		value?: number,
		onChange?: Menu.ItemTapEventHandler
	}

	declare interface SharedEnhancedButtonProps<T> {
		centerRipple?: boolean,
		containerElement?: string | React.ReactElement<any>,
		disabled?: boolean,
		disableFocusRipple?: boolean,
		disableKeyboardFocus?: boolean,
		disableTouchRipple?: boolean,
		keyboardFocused?: boolean,
		linkButton?: boolean,
		focusRippleColor?: string,
		focusRippleOpacity?: number,
		touchRippleOpacity?: number,
		tabIndex?: number,
		onBlur?: React.FocusEventHandler,
		onFocus?: React.FocusEventHandler,
		onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void,
		onKeyDown?: React.KeyboardEventHandler,
		onKeyUp?: React.KeyboardEventHandler,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		onTouchStart?: React.TouchEventHandler,
		onTouchEnd?: React.TouchEventHandler,
		onTouchTap?: TouchTapEventHandler
	}

	declare interface EnhancedButtonProps {
		touchRippleColor?: string,
		focusRippleColor?: string,
		style?: React.CSSProperties
	}

	declare interface FlatButtonProps {
		hoverColor?: string,
		label?: string,
		labelPosition?: string,
		labelStyle?: React.CSSProperties,
		linkButton?: boolean,
		primary?: boolean,
		secondary?: boolean,
		rippleColor?: string,
		style?: React.CSSProperties
	}

	declare interface FloatingActionButtonProps {
		backgroundColor?: string,
		disabled?: boolean,
		disabledColor?: string,
		iconClassName?: string,
		iconStyle?: React.CSSProperties,
		mini?: boolean,
		secondary?: boolean,
		style?: React.CSSProperties
	}

	declare interface FontIconProps {
		color?: string,
		hoverColor?: string,
		onMouseLeave?: React.MouseEventHandler,
		onMouseEnter?: React.MouseEventHandler,
		style?: React.CSSProperties,
		className?: string
	}

	declare interface IconButtonProps {
		iconClassName?: string,
		iconStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		tooltip?: string,
		tooltipPosition?: string,
		tooltipStyles?: React.CSSProperties,
		touch?: boolean,
		onBlur?: React.FocusEventHandler,
		onFocus?: React.FocusEventHandler
	}

	declare interface LeftNavProps {
		disableSwipeToOpen?: boolean,
		docked?: boolean,
		header?: React.ReactElement<any>,
		menuItems: Menu.MenuItemRequest[],
		onChange?: Menu.ItemTapEventHandler,
		onNavOpen?: () => void,
		onNavClose?: () => void,
		openRight?: Boolean,
		selectedIndex?: number,
		menuItemClassName?: string,
		menuItemClassNameSubheader?: string,
		menuItemClassNameLink?: string
	}

	declare interface LinearProgressProps {
		mode?: string,
		value?: number,
		min?: number,
		max?: number
	}

	declare interface OverlayProps {
		autoLockScrolling?: boolean,
		show?: boolean,
		transitionEnabled?: boolean
	}

	declare interface PaperProps {
		circle?: boolean,
		rounded?: boolean,
		transitionEnabled?: boolean,
		zDepth?: number
	}

	declare interface RadioButtonProps {
		defaultChecked?: boolean,
		iconStyle?: React.CSSProperties,
		label?: string,
		labelStyle?: React.CSSProperties,
		labelPosition?: string,
		style?: React.CSSProperties,
		value?: string,
		onCheck?: (e: React.FormEvent, selected: string) => void
	}

	declare interface RadioButtonGroupProps {
		defaultSelected?: string,
		labelPosition?: string,
		name: string,
		style?: React.CSSProperties,
		valueSelected?: string,
		onChange?: (e: React.FormEvent, selected: string) => void
	}

	declare interface RaisedButtonProps {
		className?: string,
		disabled?: boolean,
		label?: string,
		primary?: boolean,
		secondary?: boolean,
		labelStyle?: React.CSSProperties,
		backgroundColor?: string,
		labelColor?: string,
		disabledBackgroundColor?: string,
		disabledLabelColor?: string,
		fullWidth?: boolean
	}

	declare interface RefreshIndicatorProps {
		left: number,
		percentage?: number,
		size?: number,
		status?: string,
		top: number
	}

	declare interface SelectFieldProps {
		errorStyle?: React.CSSProperties,
		errorText?: string,
		floatingLabelText?: string,
		floatingLabelStyle?: React.CSSProperties,
		fullWidth?: boolean,
		hintText?: string | React.ReactElement<any>,
		displayMember?: string,
		valueMember?: string,
		autoWidth?: boolean,
		menuItems: Menu.MenuItemRequest[],
		menuItemStyle?: React.CSSProperties,
		selectedIndex?: number,
		underlineStyle?: React.CSSProperties,
		iconStyle?: React.CSSProperties,
		labelStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		disabled?: boolean,
		valueLink?: ReactLink<any>,
		value?: number,
		onChange?: Menu.ItemTapEventHandler,
		onEnterKeyDown?: React.KeyboardEventHandler,
		selectFieldRoot?: string,
		multiLine?: boolean,
		type?: string,
		rows?: number,
		inputStyle?: React.CSSProperties
	}

	declare interface SliderProps {
		name: string,
		defaultValue?: number,
		description?: string,
		error?: string,
		max?: number,
		min?: number,
		required?: boolean,
		step?: number,
		value?: number
	}

	declare interface SvgIconProps {
		color?: string,
		hoverColor?: string,
		viewBox?: string
	}

	declare interface NavigationMenuProps {
		
	}

	declare interface NavigationChevronLeftProps {
		
	}

	declare interface NavigationChevronRightProps {
		
	}

	declare interface SnackbarProps {
		message: string,
		action?: string,
		autoHideDuration?: number,
		onActionTouchTap?: React.TouchEventHandler,
		onShow?: () => void,
		onDismiss?: () => void,
		openOnMount?: boolean
	}

	declare interface ThemeProps {
		theme: Styles.CustomTheme
	}

	declare interface ToggleProps {
		elementStyle?: React.CSSProperties,
		labelStyle?: React.CSSProperties,
		onToggle?: (e: React.MouseEvent, isInputChecked: boolean) => void,
		toggled?: boolean,
		defaultToggled?: boolean
	}

	declare interface TimePickerProps {
		defaultTime?: Date,
		format?: string,
		pedantic?: boolean,
		onFocus?: React.FocusEventHandler,
		onTouchTap?: TouchTapEventHandler,
		onChange?: (e: any, time: Date) => void,
		onShow?: () => void,
		onDismiss?: () => void
	}

	declare interface TextFieldProps {
		errorStyle?: React.CSSProperties,
		errorText?: string,
		floatingLabelText?: string,
		floatingLabelStyle?: React.CSSProperties,
		fullWidth?: boolean,
		hintText?: string | React.ReactElement<any>,
		id?: string,
		inputStyle?: React.CSSProperties,
		multiLine?: boolean,
		onEnterKeyDown?: React.KeyboardEventHandler,
		style?: React.CSSProperties,
		rows?: number,
		underlineStyle?: React.CSSProperties,
		underlineFocusStyle?: React.CSSProperties,
		underlineDisabledStyle?: React.CSSProperties,
		type?: string,
		disabled?: boolean,
		isRtl?: boolean,
		value?: string,
		defaultValue?: string,
		valueLink?: ReactLink<string>,
		onBlur?: React.FocusEventHandler,
		onChange?: React.FormEventHandler,
		onFocus?: React.FocusEventHandler,
		onKeyDown?: React.KeyboardEventHandler
	}

	declare interface TooltipProps {
		label: string,
		show?: boolean,
		touch?: boolean,
		verticalPosition?: string,
		horizontalPosition?: string
	}

		declare export class AppBar extends React$Component<AppBarProps, {
		
	}> {
		
	}

	declare export class AppCanvas extends React$Component<AppCanvasProps, {
		
	}> {
		
	}

	declare export class Avatar extends React$Component<AvatarProps, {
		
	}> {
		
	}

	declare export class BeforeAfterWrapper extends React$Component<BeforeAfterWrapperProps, {
		
	}> {
		
	}

	declare export class EnhancedSwitch extends React$Component<EnhancedSwitchProps, {
		
	}> {
		isSwitched(): boolean;
		setSwitched(newSwitchedValue: boolean): void;
		getValue(): any;
		isKeyboardFocused(): boolean
	}

	declare export class Checkbox extends React$Component<CheckboxProps, {
		
	}> {
		isChecked(): void;
		setChecked(newCheckedValue: boolean): void
	}

	declare export class CircularProgress extends React$Component<CircularProgressProps, {
		
	}> {
		
	}

	declare export class ClearFix extends React$Component<ClearFixProps, {
		
	}> {
		
	}

	declare export class Dialog extends React$Component<DialogProps, {
		
	}> {
		dismiss(): void;
		show(): void
	}

	declare export class DropDownIcon extends React$Component<DropDownIconProps, {
		
	}> {
		
	}

	declare export class DropDownMenu extends React$Component<DropDownMenuProps, {
		
	}> {
		
	}

	declare export class EnhancedButton extends React$Component<EnhancedButtonProps, {
		
	}> {
		
	}

	declare export class FlatButton extends React$Component<FlatButtonProps, {
		
	}> {
		
	}

	declare export class FloatingActionButton extends React$Component<FloatingActionButtonProps, {
		
	}> {
		
	}

	declare export class FontIcon extends React$Component<FontIconProps, {
		
	}> {
		
	}

	declare export class IconButton extends React$Component<IconButtonProps, {
		
	}> {
		
	}

	declare export class LeftNav extends React$Component<LeftNavProps, {
		
	}> {
		
	}

	declare export class LinearProgress extends React$Component<LinearProgressProps, {
		
	}> {
		
	}

	declare export class Overlay extends React$Component<OverlayProps, {
		
	}> {
		
	}

	declare export class Paper extends React$Component<PaperProps, {
		
	}> {
		
	}

	declare export class RadioButton extends React$Component<RadioButtonProps, {
		
	}> {
		
	}

	declare export class RadioButtonGroup extends React$Component<RadioButtonGroupProps, {
		
	}> {
		getSelectedValue(): string;
		setSelectedValue(newSelectionValue: string): void;
		clearValue(): void
	}

	declare export class RaisedButton extends React$Component<RaisedButtonProps, {
		
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

	declare export class SvgIcon extends React$Component<SvgIconProps, {
		
	}> {
		
	}

	declare export class NavigationMenu extends React$Component<NavigationMenuProps, {
		
	}> {
		
	}

	declare export class NavigationChevronLeft extends React$Component<NavigationChevronLeftProps, {
		
	}> {
		
	}

	declare export class NavigationChevronRight extends React$Component<NavigationChevronRightProps, {
		
	}> {
		
	}

	declare export class Snackbar extends React$Component<SnackbarProps, {
		
	}> {
		
	}

	declare export class Theme extends React$Component<ThemeProps, {
		
	}> {
		theme(
		customTheme: Styles.CustomTheme
	): <P>(Component: React.ComponentClass<P>) => React.ComponentClass<P>
	}

	declare export class Toggle extends React$Component<ToggleProps, {
		
	}> {
		isToggled(): boolean;
		setToggled(newToggledValue: boolean): void
	}

	declare export class TimePicker extends React$Component<TimePickerProps, {
		
	}> {
		
	}

	declare export class TextField extends React$Component<TextFieldProps, {
		
	}> {
		blur(): void;
		clearValue(): void;
		focus(): void;
		getValue(): string;
		setErrorText(newErrorText: string): void;
		setValue(newValue: string): void
	}

	declare export class Tooltip extends React$Component<TooltipProps, {
		
	}> {
		
	}

	
}

declare module 'Card' {
		declare interface CardProps {
		expandable?: boolean,
		initiallyExpanded?: boolean,
		onExpandedChange?: (isExpanded: boolean) => void,
		style?: React.CSSProperties
	}

	declare interface CardActionsProps {
		expandable?: boolean,
		showExpandableButton?: boolean
	}

	declare interface CardExpandableProps {
		onExpanding?: (isExpanded: boolean) => void,
		expanded?: boolean
	}

	declare interface CardHeaderProps {
		expandable?: boolean,
		showExpandableButton?: boolean,
		title?: string | React.ReactElement<any>,
		titleColor?: string,
		titleStyle?: React.CSSProperties,
		subtitle?: string | React.ReactElement<any>,
		subtitleColor?: string,
		subtitleStyle?: React.CSSProperties,
		textStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		avatar: React.ReactElement<any> | string
	}

	declare interface CardMediaProps {
		expandable?: boolean,
		overlay?: React.ReactNode,
		overlayStyle?: React.CSSProperties,
		overlayContainerStyle?: React.CSSProperties,
		overlayContentStyle?: React.CSSProperties,
		mediaStyle?: React.CSSProperties,
		style?: React.CSSProperties
	}

	declare interface CardTextProps {
		expandable?: boolean,
		color?: string,
		style?: React.CSSProperties
	}

	declare interface CardTitleProps {
		expandable?: boolean,
		showExpandableButton?: boolean,
		title?: string | React.ReactElement<any>,
		titleColor?: string,
		titleStyle?: React.CSSProperties,
		subtitle?: string | React.ReactElement<any>,
		subtitleColor?: string,
		subtitleStyle?: React.CSSProperties,
		textStyle?: React.CSSProperties,
		style?: React.CSSProperties
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
		autoOk?: boolean,
		defaultDate?: Date,
		formatDate?: string,
		hideToolbarYearChange?: boolean,
		maxDate?: Date,
		minDate?: Date,
		mode?: string,
		onDismiss?: () => void,
		onChange?: (e: any, d: Date) => void,
		onFocus?: React.FocusEventHandler,
		onShow?: () => void,
		onTouchTap?: React.TouchEventHandler,
		shouldDisableDate?: (day: Date) => boolean,
		showYearSelector?: boolean,
		textFieldStyle?: React.CSSProperties
	}

	declare interface DatePickerDialogProps {
		disableYearSelection?: boolean,
		initialDate?: Date,
		maxDate?: Date,
		minDate?: Date,
		onAccept?: (d: Date) => void,
		onClickAway?: () => void,
		onDismiss?: () => void,
		onShow?: () => void,
		shouldDisableDate?: (day: Date) => boolean,
		showYearSelector?: boolean
	}

		declare export class DatePicker extends React$Component<DatePickerProps, {
		
	}> {
		
	}

	declare export class DatePickerDialog extends React$Component<DatePickerDialogProps, {
		
	}> {
		
	}

	
}

declare module 'Lists' {
		declare interface ListProps {
		insetSubheader?: boolean,
		subheader?: string,
		subheaderStyle?: React.CSSProperties,
		zDepth?: number
	}

	declare interface ListDividerProps {
		inset?: boolean
	}

	declare interface ListItemProps {
		autoGenerateNestedIndicator?: boolean,
		disableKeyboardFocus?: boolean,
		initiallyOpen?: boolean,
		innerDivStyle?: React.CSSProperties,
		insetChildren?: boolean,
		innerStyle?: React.CSSProperties,
		leftAvatar?: React.ReactElement<any>,
		leftCheckbox?: React.ReactElement<any>,
		leftIcon?: React.ReactElement<any>,
		nestedLevel?: number,
		nestedItems?: React.ReactElement<any>[],
		onKeyboardFocus?: React.FocusEventHandler,
		onNestedListToggle?: (item: ListItem) => void,
		rightAvatar?: React.ReactElement<any>,
		rightIcon?: React.ReactElement<any>,
		rightIconButton?: React.ReactElement<any>,
		rightToggle?: React.ReactElement<any>,
		primaryText?: React.ReactNode,
		secondaryText?: React.ReactNode,
		secondaryTextLines?: number
	}

		declare export class List extends React$Component<ListProps, {
		
	}> {
		
	}

	declare export class ListDivider extends React$Component<ListDividerProps, {
		
	}> {
		
	}

	declare export class ListItem extends React$Component<ListItemProps, {
		
	}> {
		
	}

	
}

declare module 'Menu' {
		declare interface ItemTapEventHandler {
		(e: TouchTapEvent, index: number, menuItem: MenuItemRequest): void
	}

	declare interface MenuItemRequest {
		type?: string,
		text?: string,
		data?: string,
		payload?: string,
		icon?: React.ReactElement<any>,
		attribute?: string,
		number?: string,
		toggle?: boolean,
		onTouchTap?: TouchTapEventHandler,
		isDisabled?: boolean,
		items?: MenuItemRequest[],
		[propertyName: string]: any
	}

	declare interface MenuProps {
		index: number,
		text?: string,
		menuItems: MenuItemRequest[],
		zDepth?: number,
		active?: boolean,
		onItemTap?: ItemTapEventHandler,
		menuItemStyle?: React.CSSProperties
	}

	declare interface MenuItemProps {
		index: number,
		icon?: React.ReactElement<any>,
		iconClassName?: string,
		iconRightClassName?: string,
		iconStyle?: React.CSSProperties,
		iconRightStyle?: React.CSSProperties,
		attribute?: string,
		number?: string,
		data?: string,
		toggle?: boolean,
		onTouchTap?: (e: React.MouseEvent, key: number) => void,
		onToggle?: (e: React.MouseEvent, key: number, toggled: boolean) => void,
		selected?: boolean,
		active?: boolean
	}

		declare export class Menu extends React$Component<MenuProps, {
		
	}> {
		
	}

	declare export class MenuItem extends React$Component<MenuItemProps, {
		
	}> {
		Types: {
		LINK: string,
		SUBHEADER: string,
		NESTED: string
	}
	}

	
}

declare module 'Mixins' {
		declare interface ClickAwayable {
		
	}

	declare interface WindowListenable {
		
	}

	declare interface StylePropable {
		
	}

	declare interface StyleResizable {
		
	}

			
}

declare module 'Ripples' {
		declare interface CircleRippleProps {
		color?: string,
		opacity?: number
	}

	declare interface FocusRippleProps {
		color?: string,
		innerStyle?: React.CSSProperties,
		opacity?: number,
		show?: boolean
	}

	declare interface TouchRippleProps {
		centerRipple?: boolean,
		color?: string,
		opacity?: number
	}

		declare export class CircleRipple extends React$Component<CircleRippleProps, {
		
	}> {
		
	}

	declare export class FocusRipple extends React$Component<FocusRippleProps, {
		
	}> {
		
	}

	declare export class TouchRipple extends React$Component<TouchRippleProps, {
		
	}> {
		
	}

	
}

declare module 'Styles' {
		declare interface AutoPrefix {
		all(styles: React.CSSProperties): React.CSSProperties,
		set(style: React.CSSProperties, key: string, value: string | number): void,
		single(key: string): string,
		singleHyphened(key: string): string
	}

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
		canvasColor?: string,
		borderColor?: string,
		disabledColor?: string
	}

	declare interface Theme {
		appBar?: {
		color?: string,
		textColor?: string,
		height?: number
	},
		button?: {
		height?: number,
		minWidth?: number,
		iconButtonSize?: number
	},
		checkbox?: {
		boxColor?: string,
		checkedColor?: string,
		requiredColor?: string,
		disabledColor?: string,
		labelColor?: string,
		labelDisabledColor?: string
	},
		datePicker?: {
		color?: string,
		textColor?: string,
		calendarTextColor?: string,
		selectColor?: string,
		selectTextColor?: string
	},
		dropDownMenu?: {
		accentColor?: string
	},
		flatButton?: {
		color?: string,
		textColor?: string,
		primaryTextColor?: string,
		secondaryTextColor?: string,
		disabledColor?: string
	},
		floatingActionButton?: {
		buttonSize?: number,
		miniSize?: number,
		color?: string,
		iconColor?: string,
		secondaryColor?: string,
		secondaryIconColor?: string,
		disabledColor?: string,
		disabledTextColor?: string
	},
		leftNav?: {
		width?: number,
		color?: string
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
		selectedTextColor?: string
	},
		menuSubheader?: {
		padding?: number,
		borderColor?: string,
		textColor?: string
	},
		paper?: {
		backgroundColor?: string
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
		disabledTextColor?: string
	},
		slider?: {
		trackSize?: number,
		trackColor?: string,
		trackColorSelected?: string,
		handleSize?: number,
		handleSizeActive?: number,
		handleSizeDisabled?: number,
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
		toggle?: {
		thumbOnColor?: string,
		thumbOffColor?: string,
		thumbDisabledColor?: string,
		thumbRequiredColor?: string,
		trackOnColor?: string,
		trackOffColor?: string,
		trackDisabledColor?: string,
		trackRequiredColor?: string,
		labelColor?: string,
		labelDisabledColor?: string
	},
		toolbar?: {
		backgroundColor?: string,
		height?: number,
		titleFontSize?: number,
		iconColor?: string,
		separatorColor?: string,
		menuHoverColor?: string
	}
	}

	declare interface CustomTheme {
		spacing?: Spacing,
		contentFontFamily?: string,
		getPalette(): ThemePalette,
		getComponentThemes(palette: ThemePalette, spacing: Spacing): Theme
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

		declare export class ThemeManager  {
		static: boolean;
		spacing: Spacing;
		palette: ThemePalette;
		component: Theme;
		contentFontFamily: string;
		template: CustomTheme;
		types: {
		LIGHT: CustomTheme,
		DARK: CustomTheme
	};
		getCurrentTheme(): ThemeManager;
		setContentFontFamily(newContentFontFamily: string): void;
		setTheme(newTheme: CustomTheme): void;
		setSpacing(newSpacing: Spacing): void;
		setPalette(newPalette: ThemePalette): void;
		setComponentThemes(overrides: Theme): void;
		setIsRtl(isRtl: boolean): void
	}

	
}

declare module 'Tabs' {
		declare interface TabProps {
		label?: string,
		value?: string,
		selected?: boolean,
		width?: string,
		onActive?: (tab: Tab) => void,
		onTouchTap?: (value: string, e: TouchTapEvent, tab: Tab) => void
	}

	declare interface TabsProps {
		contentContainerStyle?: React.CSSProperties,
		initialSelectedIndex?: number,
		inkBarStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		tabItemContainerStyle?: React.CSSProperties,
		tabWidth?: number,
		value?: string | number,
		onChange?: (value: string | number, e: React.FormEvent, tab: Tab) => void
	}

		declare export class Tab extends React$Component<TabProps, {
		
	}> {
		
	}

	declare export class Tabs extends React$Component<TabsProps, {
		
	}> {
		
	}

	
}

declare module 'Table' {
		declare interface TableProps {
		allRowsSelected?: boolean,
		fixedFooter?: boolean,
		fixedHeader?: boolean,
		height?: string,
		multiSelectable?: boolean,
		onCellClick?: (row: number, column: number) => void,
		onCellHover?: (row: number, column: number) => void,
		onCellHoverExit?: (row: number, column: number) => void,
		onRowHover?: (row: number) => void,
		onRowHoverExit?: (row: number) => void,
		onRowSelection?: (selectedRows: number[]) => void,
		selectable?: boolean
	}

	declare interface TableBodyProps {
		allRowsSelected?: boolean,
		deselectOnClickaway?: boolean,
		displayRowCheckbox?: boolean,
		multiSelectable?: boolean,
		onCellClick?: (row: number, column: number) => void,
		onCellHover?: (row: number, column: number) => void,
		onCellHoverExit?: (row: number, column: number) => void,
		onRowHover?: (row: number) => void,
		onRowHoverExit?: (row: number) => void,
		onRowSelection?: (selectedRows: number[]) => void,
		preScanRows?: boolean,
		selectable?: boolean,
		showRowHover?: boolean,
		stripedRows?: boolean
	}

	declare interface TableFooterProps {
		adjustForCheckbox?: boolean
	}

	declare interface TableHeaderProps {
		adjustForCheckbox?: boolean,
		displaySelectAll?: boolean,
		enableSelectAll?: boolean,
		onSelectAll?: (event: React.MouseEvent) => void,
		selectAllSelected?: boolean
	}

	declare interface TableHeaderColumnProps {
		columnNumber?: number,
		onClick?: (e: React.MouseEvent, column: number) => void,
		tooltip?: string,
		tooltipStyle?: React.CSSProperties
	}

	declare interface TableRowProps {
		displayBorder?: boolean,
		hoverable?: boolean,
		onCellClick?: (e: React.MouseEvent, row: number, column: number) => void,
		onCellHover?: (e: React.MouseEvent, row: number, column: number) => void,
		onCellHoverExit?: (e: React.MouseEvent, row: number, column: number) => void,
		onRowClick?: (e: React.MouseEvent, row: number) => void,
		onRowHover?: (e: React.MouseEvent, row: number) => void,
		onRowHoverExit?: (e: React.MouseEvent, row: number) => void,
		rowNumber?: number,
		selectable?: boolean,
		selected?: boolean,
		striped?: boolean
	}

	declare interface TableRowColumnProps {
		columnNumber?: number,
		hoverable?: boolean,
		onHover?: (e: React.MouseEvent, column: number) => void,
		onHoverExit?: (e: React.MouseEvent, column: number) => void
	}

		declare export class Table extends React$Component<TableProps, {
		
	}> {
		
	}

	declare export class TableBody extends React$Component<TableBodyProps, {
		
	}> {
		
	}

	declare export class TableFooter extends React$Component<TableFooterProps, {
		
	}> {
		
	}

	declare export class TableHeader extends React$Component<TableHeaderProps, {
		
	}> {
		
	}

	declare export class TableHeaderColumn extends React$Component<TableHeaderColumnProps, {
		
	}> {
		
	}

	declare export class TableRow extends React$Component<TableRowProps, {
		
	}> {
		
	}

	declare export class TableRowColumn extends React$Component<TableRowColumnProps, {
		
	}> {
		
	}

	
}

declare module 'Toolbar' {
		declare interface ToolbarProps {
		
	}

	declare interface ToolbarGroupProps {
		float?: string
	}

	declare interface ToolbarSeparatorProps {
		
	}

	declare interface ToolbarTitleProps {
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

declare module 'Utils' {
		declare interface ContrastLevel {
		range: [number, number],
		color: string
	}

	declare interface ColorManipulator {
		fade(color: string, amount: string | number): string,
		lighten(color: string, amount: string | number): string,
		darken(color: string, amount: string | number): string,
		contrastRatio(background: string, foreground: string): number,
		contrastRatioLevel(background: string, foreground: string): ContrastLevel
	}

	declare interface CssEvent {
		transitionEndEventName(): string,
		animationEndEventName(): string,
		onTransitionEnd(el: Element, callback: () => void): void,
		onAnimationEnd(el: Element, callback: () => void): void
	}

	declare interface Dom {
		isDescendant(parent: Node, child: Node): boolean,
		offset(el: Element): {
		top: number,
		left: number
	},
		getStyleAttributeAsNumber(el: HTMLElement, attr: string): number,
		addClass(el: Element, className: string): void,
		removeClass(el: Element, className: string): void,
		hasClass(el: Element, className: string): boolean,
		toggleClass(el: Element, className: string): void,
		forceRedraw(el: HTMLElement): void,
		withoutTransition(el: HTMLElement, callback: () => void): void
	}

	declare interface Events {
		once(el: Element, type: string, callback: EventListener): void,
		on(el: Element, type: string, callback: EventListener): void,
		off(el: Element, type: string, callback: EventListener): void,
		isKeyboard(e: Event): boolean
	}

	declare interface ImmutabilityHelper {
		merge(base: any, ...args: any[]): any,
		mergeItem(obj: any, key: any, newValueObject: any): any,
		push(array: any[], obj: any): any[],
		shift(array: any[]): any[]
	}

	declare interface KeyCode {
		DOWN: number,
		ESC: number,
		ENTER: number,
		LEFT: number,
		RIGHT: number,
		SPACE: number,
		TAB: number,
		UP: number
	}

	declare interface KeyLine {
		Desktop: {
		GUTTER: number,
		GUTTER_LESS: number,
		INCREMENT: number,
		MENU_ITEM_HEIGHT: number
	},
		getIncrementalDim(dim: number): number
	}

	declare interface UniqueId {
		generate(): string
	}

	declare interface Styles {
		mergeAndPrefix(base: any, ...args: any[]): React.CSSProperties
	}

	declare function Extend<T, S1>(base: T, override: S1): (T & S1)

		
}

declare module 'Menus' {
		declare interface IconMenuProps {
		closeOnItemTouchTap?: boolean,
		desktop?: boolean,
		iconButtonElement: React.ReactElement<IconButtonProps>,
		openDirection?: string,
		menuStyle?: React.CSSProperties,
		multiple?: boolean,
		value?: string | Array<string>,
		width?: string | number,
		touchTapCloseDelay?: number,
		onKeyboardFocus?: React.FocusEventHandler,
		onItemTouchTap?: (e: TouchTapEvent, item: React.ReactElement<any>) => void,
		onChange?: (e: React.FormEvent, value: string | Array<string>) => void
	}

	declare interface MenuProps {
		animated?: boolean,
		autoWidth?: boolean,
		desktop?: boolean,
		listStyle?: React.CSSProperties,
		maxHeight?: number,
		multiple?: boolean,
		openDirection?: string,
		value?: string | Array<string>,
		width?: string | number,
		zDepth?: number
	}

	declare interface MenuItemProps {
		checked?: boolean,
		desktop?: boolean,
		disabled?: boolean,
		innerDivStyle?: React.CSSProperties,
		insetChildren?: boolean,
		leftIcon?: React.ReactElement<any>,
		primaryText?: string | React.ReactElement<any>,
		rightIcon?: React.ReactElement<any>,
		secondaryText?: React.ReactNode,
		value?: string,
		onEscKeyDown?: React.KeyboardEventHandler,
		onItemTouchTap?: (e: TouchTapEvent, item: React.ReactElement<any>) => void,
		onChange?: (e: React.FormEvent, value: string) => void
	}

	declare interface MenuDividerProps {
		inset?: boolean,
		style?: React.CSSProperties
	}

		declare export class IconMenu extends React$Component<IconMenuProps, {
		
	}> {
		
	}

	declare export class Menu extends React$Component<MenuProps, {
		
	}> {
		
	}

	declare export class MenuItem extends React$Component<MenuItemProps, {
		
	}> {
		
	}

	declare export class MenuDivider extends React$Component<MenuDividerProps, {
		
	}> {
		
	}

	
}

declare module 'material-ui/lib/app-bar' {
					


}

declare module 'material-ui/lib/app-canvas' {
					


}

declare module 'material-ui/lib/avatar' {
					


}

declare module 'material-ui/lib/before-after-wrapper' {
					


}

declare module 'material-ui/lib/card/card' {
					


}

declare module 'material-ui/lib/card/card-actions' {
					


}

declare module 'material-ui/lib/card/card-expandable' {
					


}

declare module 'material-ui/lib/card/card-header' {
					


}

declare module 'material-ui/lib/card/card-media' {
					


}

declare module 'material-ui/lib/card/card-text' {
					


}

declare module 'material-ui/lib/card/card-title' {
					


}

declare module 'material-ui/lib/checkbox' {
					


}

declare module 'material-ui/lib/circular-progress' {
					


}

declare module 'material-ui/lib/clearfix' {
					


}

declare module 'material-ui/lib/date-picker/date-picker' {
					


}

declare module 'material-ui/lib/date-picker/date-picker-dialog' {
					


}

declare module 'material-ui/lib/dialog' {
					


}

declare module 'material-ui/lib/drop-down-icon' {
					


}

declare module 'material-ui/lib/drop-down-menu' {
					


}

declare module 'material-ui/lib/enhanced-button' {
					


}

declare module 'material-ui/lib/flat-button' {
					


}

declare module 'material-ui/lib/floating-action-button' {
					


}

declare module 'material-ui/lib/font-icon' {
					


}

declare module 'material-ui/lib/icon-button' {
					


}

declare module 'material-ui/lib/left-nav' {
					


}

declare module 'material-ui/lib/linear-progress' {
					


}

declare module 'material-ui/lib/lists/list' {
					


}

declare module 'material-ui/lib/lists/list-divider' {
					


}

declare module 'material-ui/lib/lists/list-item' {
					


}

declare module 'material-ui/lib/menu/menu' {
					


}

declare module 'material-ui/lib/menu/menu-item' {
					


}

declare module 'material-ui/lib/mixins/click-awayable' {
					


}

declare module 'material-ui/lib/mixins/window-listenable' {
					


}

declare module 'material-ui/lib/mixins/style-propable' {
					


}

declare module 'material-ui/lib/mixins/style-resizable' {
					


}

declare module 'material-ui/lib/overlay' {
					


}

declare module 'material-ui/lib/paper' {
					


}

declare module 'material-ui/lib/radio-button' {
					


}

declare module 'material-ui/lib/radio-button-group' {
					


}

declare module 'material-ui/lib/raised-button' {
					


}

declare module 'material-ui/lib/refresh-indicator' {
					


}

declare module 'material-ui/lib/select-field' {
					


}

declare module 'material-ui/lib/slider' {
					


}

declare module 'material-ui/lib/svg-icon' {
					


}

declare module 'material-ui/lib/svg-icons/navigation/menu' {
					


}

declare module 'material-ui/lib/svg-icons/navigation/chevron-left' {
					


}

declare module 'material-ui/lib/svg-icons/navigation/chevron-right' {
					


}

declare module 'material-ui/lib/styles/auto-prefix' {
					


}

declare module 'material-ui/lib/styles/spacing' {
					declare module.exports: Spacing


}

declare module 'material-ui/lib/styles/theme-manager' {
					


}

declare module 'material-ui/lib/styles/transitions' {
					


}

declare module 'material-ui/lib/styles/typography' {
					


}

declare module 'material-ui/lib/snackbar' {
					


}

declare module 'material-ui/lib/tabs/tab' {
					


}

declare module 'material-ui/lib/tabs/tabs' {
					


}

declare module 'material-ui/lib/table/table' {
					


}

declare module 'material-ui/lib/table/table-body' {
					


}

declare module 'material-ui/lib/table/table-footer' {
					


}

declare module 'material-ui/lib/table/table-header' {
					


}

declare module 'material-ui/lib/table/table-header-column' {
					


}

declare module 'material-ui/lib/table/table-row' {
					


}

declare module 'material-ui/lib/table/table-row-column' {
					


}

declare module 'material-ui/lib/theme' {
					


}

declare module 'material-ui/lib/toggle' {
					


}

declare module 'material-ui/lib/time-picker' {
					


}

declare module 'material-ui/lib/text-field' {
					


}

declare module 'material-ui/lib/toolbar/toolbar' {
					


}

declare module 'material-ui/lib/toolbar/toolbar-group' {
					


}

declare module 'material-ui/lib/toolbar/toolbar-separator' {
					


}

declare module 'material-ui/lib/toolbar/toolbar-title' {
					


}

declare module 'material-ui/lib/tooltip' {
					


}

declare module 'material-ui/lib/utils/color-manipulator' {
					


}

declare module 'material-ui/lib/utils/css-event' {
					


}

declare module 'material-ui/lib/utils/dom' {
					


}

declare module 'material-ui/lib/utils/events' {
					


}

declare module 'material-ui/lib/utils/extend' {
					


}

declare module 'material-ui/lib/utils/immutability-helper' {
					


}

declare module 'material-ui/lib/utils/key-code' {
					


}

declare module 'material-ui/lib/utils/key-line' {
					


}

declare module 'material-ui/lib/utils/unique-id' {
					


}

declare module 'material-ui/lib/utils/styles' {
					


}

declare module 'material-ui/lib/menus/icon-menu' {
					


}

declare module 'material-ui/lib/menus/menu' {
					


}

declare module 'material-ui/lib/menus/menu-item' {
					


}

declare module 'material-ui/lib/menus/menu-divider' {
					


}

declare module 'material-ui/lib/styles/colors' {
					


}
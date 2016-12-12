

declare module 'react-mdl' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___ReactMDL' {
	declare type ___MDLClassProps = React.ClassAttributes<any>;

	declare type ___MDLOtherProps = React.HTMLProps<any>;

	declare interface ShadowedComponent {
		shadow?: number
	}

	declare interface RippleComponent {
		ripple?: boolean
	}

	declare interface CustomRenderedComponent {
		component?: string | JSX.Element | Function
	}

	declare interface MDLHTMLAttributes {
		defaultChecked?: boolean,
		defaultValue?: string | string[],
		accept?: string,
		acceptCharset?: string,
		accessKey?: string,
		action?: string,
		allowFullScreen?: boolean,
		allowTransparency?: boolean,
		alt?: string,
		async?: boolean,
		autoComplete?: string,
		autoFocus?: boolean,
		autoPlay?: boolean,
		capture?: boolean,
		cellPadding?: number | string,
		cellSpacing?: number | string,
		charSet?: string,
		challenge?: string,
		checked?: boolean,
		classID?: string,
		className?: string,
		cols?: number,
		colSpan?: number,
		content?: string,
		contentEditable?: boolean,
		contextMenu?: string,
		controls?: boolean,
		coords?: string,
		crossOrigin?: string,
		dateTime?: string,
		default?: boolean,
		defer?: boolean,
		dir?: string,
		disabled?: boolean,
		download?: any,
		draggable?: boolean,
		encType?: string,
		form?: string,
		formAction?: string,
		formEncType?: string,
		formMethod?: string,
		formNoValidate?: boolean,
		formTarget?: string,
		frameBorder?: number | string,
		headers?: string,
		height?: number | string,
		hidden?: boolean,
		high?: number,
		href?: string,
		hrefLang?: string,
		htmlFor?: string,
		httpEquiv?: string,
		id?: string,
		inputMode?: string,
		integrity?: string,
		is?: string,
		keyParams?: string,
		keyType?: string,
		kind?: string,
		lang?: string,
		list?: string,
		loop?: boolean,
		low?: number,
		manifest?: string,
		marginHeight?: number,
		marginWidth?: number,
		max?: number | string,
		maxLength?: number,
		media?: string,
		mediaGroup?: string,
		method?: string,
		min?: number | string,
		minLength?: number,
		multiple?: boolean,
		muted?: boolean,
		nonce?: string,
		noValidate?: boolean,
		open?: boolean,
		optimum?: number,
		pattern?: string,
		placeholder?: string,
		poster?: string,
		preload?: string,
		radioGroup?: string,
		readOnly?: boolean,
		rel?: string,
		required?: boolean,
		reversed?: boolean,
		role?: string,
		rowSpan?: number,
		sandbox?: string,
		scope?: string,
		scoped?: boolean,
		scrolling?: string,
		seamless?: boolean,
		selected?: boolean,
		shape?: string,
		sizes?: string,
		span?: number,
		spellCheck?: boolean,
		src?: string,
		srcDoc?: string,
		srcLang?: string,
		srcSet?: string,
		start?: number,
		step?: number | string,
		style?: React.CSSProperties,
		summary?: string,
		tabIndex?: number,
		target?: string,
		type?: string,
		useMap?: string,
		width?: number | string,
		wmode?: string,
		wrap?: string,
		about?: string,
		datatype?: string,
		inlist?: any,
		prefix?: string,
		property?: string,
		resource?: string,
		typeof?: string,
		vocab?: string,
		autoCapitalize?: string,
		autoCorrect?: string,
		autoSave?: string,
		color?: string,
		itemProp?: string,
		itemScope?: boolean,
		itemType?: string,
		itemID?: string,
		itemRef?: string,
		results?: number,
		security?: string,
		unselectable?: boolean,
		[key: string]: any
	}

	declare interface MDLDOMAttributes {
		children?: React.ReactNode,
		dangerouslySetInnerHTML?: {
		___html: string
	},
		onCopy?: React.ClipboardEventHandler,
		onCut?: React.ClipboardEventHandler,
		onPaste?: React.ClipboardEventHandler,
		onCompositionEnd?: React.CompositionEventHandler,
		onCompositionStart?: React.CompositionEventHandler,
		onCompositionUpdate?: React.CompositionEventHandler,
		onFocus?: React.FocusEventHandler,
		onBlur?: React.FocusEventHandler,
		onInput?: React.FormEventHandler,
		onSubmit?: React.FormEventHandler,
		onLoad?: React.ReactEventHandler,
		onError?: React.ReactEventHandler,
		onKeyDown?: React.KeyboardEventHandler,
		onKeyPress?: React.KeyboardEventHandler,
		onKeyUp?: React.KeyboardEventHandler,
		onAbort?: React.ReactEventHandler,
		onCanPlay?: React.ReactEventHandler,
		onCanPlayThrough?: React.ReactEventHandler,
		onDurationChange?: React.ReactEventHandler,
		onEmptied?: React.ReactEventHandler,
		onEncrypted?: React.ReactEventHandler,
		onEnded?: React.ReactEventHandler,
		onLoadedData?: React.ReactEventHandler,
		onLoadedMetadata?: React.ReactEventHandler,
		onLoadStart?: React.ReactEventHandler,
		onPause?: React.ReactEventHandler,
		onPlay?: React.ReactEventHandler,
		onPlaying?: React.ReactEventHandler,
		onProgress?: React.ReactEventHandler,
		onRateChange?: React.ReactEventHandler,
		onSeeked?: React.ReactEventHandler,
		onSeeking?: React.ReactEventHandler,
		onStalled?: React.ReactEventHandler,
		onSuspend?: React.ReactEventHandler,
		onTimeUpdate?: React.ReactEventHandler,
		onVolumeChange?: React.ReactEventHandler,
		onWaiting?: React.ReactEventHandler,
		onContextMenu?: React.MouseEventHandler,
		onDoubleClick?: React.MouseEventHandler,
		onDrag?: React.DragEventHandler,
		onDragEnd?: React.DragEventHandler,
		onDragEnter?: React.DragEventHandler,
		onDragExit?: React.DragEventHandler,
		onDragLeave?: React.DragEventHandler,
		onDragOver?: React.DragEventHandler,
		onDragStart?: React.DragEventHandler,
		onDrop?: React.DragEventHandler,
		onMouseDown?: React.MouseEventHandler,
		onMouseEnter?: React.MouseEventHandler,
		onMouseLeave?: React.MouseEventHandler,
		onMouseMove?: React.MouseEventHandler,
		onMouseOut?: React.MouseEventHandler,
		onMouseOver?: React.MouseEventHandler,
		onMouseUp?: React.MouseEventHandler,
		onSelect?: React.ReactEventHandler,
		onTouchCancel?: React.TouchEventHandler,
		onTouchEnd?: React.TouchEventHandler,
		onTouchMove?: React.TouchEventHandler,
		onTouchStart?: React.TouchEventHandler,
		onScroll?: React.UIEventHandler,
		onWheel?: React.WheelEventHandler
	}

	declare interface BadgeProps {
		text: string | number,
		className?: string,
		noBackground?: boolean,
		overlap?: boolean
	}

	declare interface ChipProps {
		onClick?: React.MouseEventHandler,
		onClose?: React.MouseEventHandler
	}

	declare interface ButtonProps {
		accent?: boolean,
		colored?: boolean,
		primary?: boolean
	}

	declare interface StandardButtonProps {
		raised?: boolean
	}

	declare interface FABButtonProps {
		mini?: boolean
	}

	declare interface IconButtonProps {
		name?: string,
		raised?: boolean
	}

	declare interface CardProps {
		
	}

	declare interface CardActionProps {
		border?: boolean
	}

	declare interface CardTitleProps {
		expand?: boolean
	}

	declare interface CheckboxProps {
		checked?: boolean,
		disabled?: boolean,
		label?: string
	}

	declare interface UndecoratedTableProps {
		rows: Array<any>,
		rowKeyColumn?: string,
		name?: string,
		title?: string
	}

	declare interface TableProps {
		sortable?: boolean,
		selectable?: boolean,
		onSelectionChanged?: (row: any) => any
	}

	declare interface TableHeaderProps {
		name: string,
		title?: string,
		cellFormatter?: (value: any, row: any, index: number) => React.ReactNode,
		numeric?: boolean,
		nosort?: boolean,
		onClick?: (e: React.MouseEvent, name: string) => any,
		sortFn?: (a: any, b: any, isAsc: boolean) => number,
		tooltip?: React.ReactNode
	}

	declare interface DialogProps {
		open?: boolean
	}

	declare interface DialogActionsProps {
		fullWidth?: boolean
	}

	declare interface DialogTitleProps {
		
	}

	declare interface GridProps {
		noSpacing?: boolean
	}

	declare interface CellProps {
		col: number,
		align?: string,
		phone?: number,
		tablet?: number,
		hideDesktop?: boolean,
		hidePhone?: boolean,
		hideTablet?: boolean
	}

	declare interface IconProps {
		name: string
	}

	declare interface IconToggleProps {
		name: string,
		checked?: boolean,
		disabled?: boolean
	}

	declare interface ContentProps {
		
	}

	declare interface DrawerProps {
		title?: string
	}

	declare interface HeaderProps {
		title?: string,
		scroll?: boolean,
		seamed?: boolean,
		transparent?: boolean,
		waterfall?: boolean,
		hideTop?: boolean,
		hideSpacer?: boolean
	}

	declare interface HeaderRowProps {
		title?: string,
		hideSpacer?: boolean
	}

	declare interface HeaderTabsProps {
		activeTab?: number,
		onChange?: React.FormEventHandler
	}

	declare interface LayoutProps {
		fixedDrawer?: boolean,
		fixedHeader?: boolean,
		fixedTabse?: boolean
	}

	declare interface NavigationProps {
		
	}

	declare interface FooterProps {
		size?: string,
		title?: string
	}

	declare interface FooterDropDownSectionProps {
		size?: string,
		title: React.ReactNode
	}

	declare interface FooterLinkListProps {
		size?: string,
		title?: string
	}

	declare interface FooterSectionProps {
		size?: string,
		type?: string,
		logo?: React.ReactNode,
		title?: string
	}

	declare interface ListItemProps {
		twoLine?: boolean,
		threeLine?: boolean
	}

	declare interface ListItemActionProps {
		info?: string
	}

	declare interface ListItemContentProps {
		avatar?: string | JSX.Element,
		icon?: string | JSX.Element,
		subtitle?: React.ReactNode,
		useBodyClass?: boolean
	}

	declare interface MenuProps {
		target: string,
		align?: string,
		valign?: string
	}

	declare interface ProgressBarProps {
		buffer?: number,
		indeterminate?: boolean,
		progress?: number
	}

	declare interface RadioProps {
		value: string | number,
		checked?: boolean,
		disabled?: boolean,
		name?: string,
		onChange?: React.FormEventHandler,
		label?: string
	}

	declare interface RadioGroupProps {
		name: string,
		value: string | number,
		childContainer?: string,
		container?: string,
		onChange?: React.FormEventHandler,
		label?: string
	}

	declare interface SliderProps {
		max: number,
		min: number,
		onChange?: React.FormEventHandler,
		value?: number
	}

	declare interface SnackbarProps {
		active: boolean,
		onTimeout: () => any,
		action?: string,
		onActionClick?: React.MouseEventHandler,
		timeout?: number
	}

	declare interface SpinnerProps {
		singleColor?: boolean
	}

	declare interface SwitchProps {
		checked?: boolean,
		disabled?: boolean,
		onChange?: React.FormEventHandler
	}

	declare interface TabProps {
		active?: boolean,
		cssPrefix?: string,
		onTabClick?: (tabId: number) => any,
		tabId?: number
	}

	declare interface TabBarProps {
		cssPrefix: string,
		activeTab?: number,
		onChange?: (tabId: number) => any,
		name?: string,
		title?: string,
		onClick?: React.MouseEventHandler
	}

	declare interface TabsProps {
		activeTab?: number,
		onChange?: (tabId: number) => any,
		tabBarProps?: TabBarProps,
		name?: string,
		title?: string,
		onClick?: React.MouseEventHandler
	}

	declare interface TextfieldProps {
		label: string,
		disabled?: boolean,
		error?: React.ReactNode,
		expandable?: boolean,
		expandableIcon?: string,
		floatingLabel?: boolean,
		id?: string,
		inputClassName?: string,
		maxRows?: number,
		onChange?: React.FormEventHandler,
		pattern?: string,
		required?: boolean,
		rows?: number,
		value?: string | number,
		name?: string,
		title?: string
	}

	declare interface TooltipProps {
		label: React.ReactNode,
		large?: boolean,
		position?: string,
		name?: string,
		title?: string
	}

		declare class ___MDLComponent<P> extends React$Component<P, {
		
	}> {
		
	}

	declare class ___MDLBasicComponent extends ___MDLComponent<___MDLOtherProps> {
		
	}

	declare class Badge extends ___MDLComponent<BadgeProps> {
		
	}

	declare class Chip extends ___MDLComponent<ChipProps> {
		
	}

	declare class ChipContact extends ___MDLComponent<___MDLOtherProps> {
		
	}

	declare class Button extends ___MDLComponent<StandardButtonProps> {
		
	}

	declare class FABButton extends ___MDLComponent<FABButtonProps> {
		
	}

	declare class IconButton extends ___MDLComponent<IconButtonProps> {
		
	}

	declare class Card extends ___MDLComponent<CardProps> {
		
	}

	declare class CardActions extends ___MDLComponent<CardActionProps> {
		
	}

	declare class CardTitle extends ___MDLComponent<CardTitleProps> {
		
	}

	declare class CardText extends ___MDLBasicComponent {
		
	}

	declare class CardMenu extends ___MDLBasicComponent {
		
	}

	declare class CardMedia extends ___MDLBasicComponent {
		
	}

	declare class Checkbox extends ___MDLComponent<CheckboxProps> {
		
	}

	declare class Table extends ___MDLComponent<TableProps> {
		
	}

	declare class TableHeader extends ___MDLComponent<TableHeaderProps> {
		
	}

	declare class UndecoratedTable extends ___MDLComponent<UndecoratedTableProps> {
		
	}

	declare class DataTable extends Table {
		
	}

	declare class Dialog extends ___MDLComponent<DialogProps> {
		
	}

	declare class DialogActions extends ___MDLComponent<DialogActionsProps> {
		
	}

	declare class DialogTitle extends ___MDLComponent<DialogTitleProps> {
		
	}

	declare class DialogContent extends ___MDLBasicComponent {
		
	}

	declare class Grid extends ___MDLComponent<GridProps> {
		
	}

	declare class Cell extends ___MDLComponent<CellProps> {
		
	}

	declare class Icon extends ___MDLComponent<IconProps> {
		
	}

	declare class IconToggle extends ___MDLComponent<IconToggleProps> {
		
	}

	declare class Content extends ___MDLComponent<ContentProps> {
		
	}

	declare class Drawer extends ___MDLComponent<DrawerProps> {
		
	}

	declare class Header extends ___MDLComponent<HeaderProps> {
		
	}

	declare class HeaderRow extends ___MDLComponent<HeaderRowProps> {
		
	}

	declare class HeaderTabs extends ___MDLComponent<HeaderTabsProps> {
		
	}

	declare class Layout extends ___MDLComponent<LayoutProps> {
		
	}

	declare class Navigation extends ___MDLComponent<NavigationProps> {
		
	}

	declare class Spacer extends ___MDLBasicComponent {
		
	}

	declare class Footer extends ___MDLComponent<FooterProps> {
		
	}

	declare class FooterDropDownSection extends ___MDLComponent<FooterDropDownSectionProps> {
		
	}

	declare class FooterLinkList extends ___MDLComponent<FooterLinkListProps> {
		
	}

	declare class FooterSection extends ___MDLComponent<FooterSectionProps> {
		
	}

	declare class List extends ___MDLBasicComponent {
		
	}

	declare class ListItem extends ___MDLComponent<ListItemProps> {
		
	}

	declare class ListItemAction extends ___MDLComponent<ListItemActionProps> {
		
	}

	declare class ListItemContent extends ___MDLComponent<ListItemContentProps> {
		
	}

	declare class Menu extends ___MDLComponent<MenuProps> {
		
	}

	declare class MenuItem extends ___MDLBasicComponent {
		
	}

	declare class ProgressBar extends ___MDLComponent<ProgressBarProps> {
		
	}

	declare class Radio extends ___MDLComponent<RadioProps> {
		
	}

	declare class RadioGroup extends ___MDLComponent<RadioGroupProps> {
		
	}

	declare class Slider extends ___MDLComponent<SliderProps> {
		
	}

	declare class Snackbar extends ___MDLComponent<SnackbarProps> {
		
	}

	declare class Spinner extends ___MDLComponent<SpinnerProps> {
		
	}

	declare class Switch extends ___MDLComponent<SwitchProps> {
		
	}

	declare class Tab extends ___MDLComponent<TabProps> {
		
	}

	declare class TabBar extends ___MDLComponent<TabBarProps> {
		
	}

	declare class Tabs extends ___MDLComponent<TabsProps> {
		
	}

	declare class Textfield extends ___MDLComponent<TextfieldProps> {
		
	}

	declare class Tooltip extends ___MDLComponent<TooltipProps> {
		
	}

	
}
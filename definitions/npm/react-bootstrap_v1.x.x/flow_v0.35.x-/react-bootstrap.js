

declare module 'react-bootstrap' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactBootstrap' {
	declare type Sizes = "xs" | "xsmall" | "sm" | "small" | "lg" | "large";

	declare type Accordion = React.ClassicComponent<AccordionProps, {
		
	}>;

	declare type Breadcrumb = React.ClassicComponent<BreadcrumbProps, {
		
	}>;

	declare type BreadcrumbItem = React.ClassicComponent<BreadcrumbItemProps, {
		
	}>;

	declare type Button = React.ClassicComponent<ButtonProps, {
		
	}>;

	declare type ButtonToolbar = React.ClassicComponent<ButtonToolbarProps, {
		
	}>;

	declare type ButtonGroup = React.ClassicComponent<ButtonGroupProps, {
		
	}>;

	declare type SafeAnchor = React.ClassicComponent<SafeAnchorProps, {
		
	}>;

	declare type DropdownProps = DropdownBaseProps & React.HTMLProps<Dropdown>;

	declare type DropdownButtonProps = DropdownButtonBaseProps & React.HTMLProps<DropdownButton>;

	declare type Panel = React.ClassicComponent<PanelProps, {
		
	}>;

	declare type PanelGroup = React.ClassicComponent<PanelGroupProps, {
		
	}>;

	declare type ModalDialog = React.ClassicComponent<ModalDialogProps, {
		
	}>;

	declare type Modal = React.ClassicComponent<ModalProps, {
		
	}>;

	declare type OverlayTrigger = React.ClassicComponent<OverlayTriggerProps, {
		
	}>;

	declare type Tooltip = React.ClassicComponent<TooltipProps, {
		
	}>;

	declare type Popover = React.ClassicComponent<PopoverProps, {
		
	}>;

	declare type NavItem = React.ClassicComponent<NavItemProps, {
		
	}>;

	declare type NavbarCollapse = React.ClassicComponent<NavbarCollapseProps, {
		
	}>;

	declare type NavbarHeader = React.ClassicComponent<NavbarHeaderProps, {
		
	}>;

	declare type NavbarToggle = React.ClassicComponent<NavbarToggleProps, {
		
	}>;

	declare type Navbar = React.ClassicComponent<NavbarProps, {
		
	}>;

	declare type NavDropdownProps = NavDropdownBaseProps & React.HTMLProps<NavDropdown>;

	declare type Tabs = React.ClassicComponent<TabsProps, {
		
	}>;

	declare type Tab = TabClass;

	declare type TabContainer = React.ClassicComponentClass<TabContainerProps>;

	declare type TabPane = React.ClassicComponentClass<TabPaneProps>;

	declare type Pager = React.ClassicComponent<PagerProps, {
		
	}>;

	declare type PageItem = React.ClassicComponent<PageItemProps, {
		
	}>;

	declare type Pagination = React.ClassicComponent<PaginationProps, {
		
	}>;

	declare type Alert = React.ClassicComponent<AlertProps, {
		
	}>;

	declare type Carousel = React.ClassicComponent<CarouselProps, {
		
	}>;

	declare type CarouselItem = React.ClassicComponent<CarouselItemProps, {
		
	}>;

	declare type CarouselCaption = React.ClassicComponent<CarouselCaptionProps, {
		
	}>;

	declare type Grid = React.ClassicComponent<GridProps, {
		
	}>;

	declare type Row = React.ClassicComponent<RowProps, {
		
	}>;

	declare type Col = React.ClassicComponent<ColProps, {
		
	}>;

	declare type Thumbnail = React.ClassicComponent<ThumbnailProps, {
		
	}>;

	declare type Badge = React.ClassicComponent<BadgeProps, {
		
	}>;

	declare type Jumbotron = React.ClassicComponent<JumbotronProps, {
		
	}>;

	declare type Image = React.ClassicComponent<ImageProps, {
		
	}>;

	declare type Glyphicon = React.ClassicComponent<GlyphiconProps, {
		
	}>;

	declare type Table = React.ClassicComponent<TableProps, {
		
	}>;

	declare type InputGroup = React.Component<InputGroupProps, {
		
	}>;

	declare type InputGroupAddon = React.ClassicComponent<InputGroupAddonProps, {
		
	}>;

	declare type InputGroupButton = React.ClassicComponent<InputGroupButtonProps, {
		
	}>;

	declare type FormControl = React.Component<FormControlProps, {
		
	}>;

	declare type Portal = React.ClassicComponent<PortalProps, {
		
	}>;

	declare type MediaLeft = React.ClassicComponent<MediaLeftProps, {
		
	}>;

	declare type MediaRight = React.ClassicComponent<MediaRightProps, {
		
	}>;

	declare type MediaHeading = React.ClassicComponent<MediaHeadingProps, {
		
	}>;

	declare type MediaBody = React.ClassicComponent<MediaBodyProps, {
		
	}>;

	declare type MediaList = React.ClassicComponent<MediaListProps, {
		
	}>;

	declare type MediaListItem = React.ClassicComponent<MediaListItemProps, {
		
	}>;

	declare type Media = React.ClassicComponent<MediaProps, {
		
	}>;

	declare interface SelectCallback {
		(eventKey: any, e: React.SyntheticEvent): void,
		(e: React.MouseEvent): void
	}

	declare interface TransitionCallbacks {
		onEnter?: Function,
		onEntered?: Function,
		onEntering?: Function,
		onExit?: Function,
		onExited?: Function,
		onExiting?: Function
	}

	declare interface AccordionProps {
		bsSize?: Sizes,
		bsStyle?: string,
		collapsible?: boolean,
		defaultExpanded?: boolean,
		eventKey?: any,
		expanded?: boolean,
		footer?: any,
		header?: any
	}

	declare interface BreadcrumbProps {
		bsClass?: string
	}

	declare interface BreadcrumbClass {
		Item: typeof BreadcrumbItem
	}

	declare interface BreadcrumbItemProps {
		active?: boolean,
		id?: string | number,
		href?: string,
		title?: React.ReactNode,
		target?: string
	}

	declare interface ButtonProps {
		active?: boolean,
		block?: boolean,
		bsStyle?: string,
		bsSize?: Sizes,
		componentClass?: React.ReactType
	}

	declare interface ButtonToolbarProps {
		block?: boolean,
		bsSize?: Sizes,
		bsStyle?: string,
		justified?: boolean,
		vertical?: boolean
	}

	declare interface ButtonGroupProps {
		block?: boolean,
		bsSize?: Sizes,
		bsStyle?: string,
		justified?: boolean,
		vertical?: boolean
	}

	declare interface SafeAnchorProps {
		href?: string,
		onClick?: React.MouseEventHandler,
		disabled?: boolean,
		role?: string,
		componentClass?: React.ReactType
	}

	declare interface CheckboxProps {
		bsClass?: string,
		disabled?: boolean,
		inline?: boolean,
		inputRef?: (instance: HTMLInputElement) => void,
		validationState?: "success" | "warning" | "error"
	}

	declare interface ClearfixProps {
		componentClass?: React.ReactType,
		visibleXsBlock?: boolean,
		visibleSmBlock?: boolean,
		visibleMdBlock?: boolean,
		visibleLgBlock?: boolean
	}

	declare interface CollapseProps {
		dimension?: "height" | "width" | {
		(): string
	},
		getDimensionValue?: (dimension: number, element: React.ReactElement<any>) => number,
		in?: boolean,
		timeout?: number,
		transitionAppear?: boolean,
		unmountOnExit?: boolean
	}

	declare interface DropdownBaseProps {
		bsClass?: string,
		componentClass?: React.ReactType,
		disabled?: boolean,
		dropup?: boolean,
		id: string,
		onClose?: Function,
		onSelect?: SelectCallback,
		onToggle?: (isOpen: boolean) => void,
		open?: boolean,
		pullRight?: boolean,
		role?: string
	}

	declare interface DropdownButtonBaseProps {
		bsSize?: Sizes,
		bsStyle?: string,
		navItem?: boolean,
		noCaret?: boolean,
		pullRight?: boolean
	}

	declare interface DropdownMenuProps {
		labelledBy?: string | number,
		onClose?: Function,
		onSelect?: SelectCallback,
		open?: boolean,
		pullRight?: boolean
	}

	declare interface DropdownToggleProps {
		bsRole?: string,
		noCaret?: boolean,
		open?: boolean,
		title?: string,
		useAnchor?: boolean,
		bsClass?: string
	}

	declare interface FadeProps {
		in?: boolean,
		timeout?: number,
		transitionAppear?: boolean,
		unmountOnExit?: boolean
	}

	declare interface MenuItemProps {
		active?: boolean,
		bsClass?: string,
		disabled?: boolean,
		divider?: boolean,
		eventKey?: any,
		header?: boolean,
		onClick?: React.MouseEventHandler,
		onSelect?: SelectCallback,
		target?: string,
		title?: string
	}

	declare interface PanelProps {
		bsClass?: string,
		bsSize?: Sizes,
		bsStyle?: string,
		collapsible?: boolean,
		defaultExpanded?: boolean,
		eventKey?: any,
		expanded?: boolean,
		footer?: React.ReactNode,
		header?: React.ReactNode,
		onSelect?: SelectCallback
	}

	declare interface PanelGroupProps {
		accordion?: boolean,
		activeKey?: any,
		bsSize?: Sizes,
		bsStyle?: string,
		defaultActiveKey?: any,
		onSelect?: SelectCallback
	}

	declare interface SplitButtonProps {
		bsStyle?: string,
		bsSize?: Sizes,
		dropdownTitle?: any,
		dropup?: boolean,
		pullRight?: boolean
	}

	declare interface ModalDialogProps {
		
	}

	declare interface ModalHeaderProps {
		closeButton?: boolean,
		modalClassName?: string,
		onHide?: Function
	}

	declare interface ModalTitleProps {
		modalClassName?: string
	}

	declare interface ModalBodyProps {
		modalClassName?: string
	}

	declare interface ModalFooterProps {
		modalClassName?: string
	}

	declare interface ModalProps {
		onHide: Function,
		animation?: boolean,
		backdrop?: boolean | string,
		bsSize?: Sizes,
		container?: any,
		dialogClassName?: string,
		dialogComponent?: any,
		enforceFocus?: boolean,
		keyboard?: boolean,
		onEnter?: (node: HTMLElement) => any,
		onEntered?: (node: HTMLElement) => any,
		onEntering?: (node: HTMLElement) => any,
		onExit?: (node: HTMLElement) => any,
		onExited?: (node: HTMLElement) => any,
		onExiting?: (node: HTMLElement) => any,
		show?: boolean
	}

	declare interface ModalClass {
		Body: typeof ModalBody,
		Header: typeof ModalHeader,
		Title: typeof ModalTitle,
		Footer: typeof ModalFooter,
		Dialog: typeof ModalDialog
	}

	declare interface OverlayTriggerProps {
		overlay: any,
		animation?: any,
		container?: any,
		containerPadding?: number,
		defaultOverlayShown?: boolean,
		delay?: number,
		delayHide?: number,
		delayShow?: number,
		onEnter?: Function,
		onEntered?: Function,
		onEntering?: Function,
		onExit?: Function,
		onExited?: Function,
		onExiting?: Function,
		placement?: string,
		rootClose?: boolean,
		trigger?: string | string[]
	}

	declare interface TooltipProps {
		arrowOffsetLeft?: number | string,
		arrowOffsetTop?: number | string,
		bsSize?: Sizes,
		bsStyle?: string,
		placement?: string,
		positionLeft?: number,
		positionTop?: number
	}

	declare interface PopoverProps {
		arrowOffsetLeft?: number | string,
		arrowOffsetTop?: number | string,
		bsSize?: Sizes,
		bsStyle?: string,
		placement?: string,
		positionLeft?: number | string,
		positionTop?: number | string
	}

	declare interface OverlayProps {
		animation?: any,
		container?: any,
		containerPadding?: number,
		onEnter?: Function,
		onEntered?: Function,
		onEntering?: Function,
		onExit?: Function,
		onExited?: Function,
		onExiting?: Function,
		onHide?: Function,
		placement?: string,
		rootClose?: boolean,
		show?: boolean,
		target?: Function,
		shouldUpdatePosition?: boolean
	}

	declare interface ProgressBarProps {
		active?: boolean,
		bsSize?: Sizes,
		bsStyle?: string,
		interpolatedClass?: any,
		max?: number,
		min?: number,
		now?: number,
		srOnly?: boolean,
		striped?: boolean
	}

	declare interface NavProps {
		activeHref?: string,
		activeKey?: any,
		bsSize?: Sizes,
		bsStyle?: string,
		collapsible?: boolean,
		eventKey?: any,
		expanded?: boolean,
		justified?: boolean,
		navbar?: boolean,
		pullRight?: boolean,
		right?: boolean,
		stacked?: boolean,
		ulClassName?: string,
		ulId?: string
	}

	declare interface NavItemProps {
		active?: boolean,
		brand?: any,
		bsSize?: Sizes,
		bsStyle?: string,
		componentClass?: React.ReactType,
		defaultNavExpanded?: boolean,
		eventKey?: any,
		fixedBottom?: boolean,
		fixedTop?: boolean,
		fluid?: boolean,
		inverse?: boolean,
		linkId?: string,
		navExpanded?: boolean,
		onSelect?: SelectCallback,
		onToggle?: Function,
		staticTop?: boolean,
		toggleButton?: any,
		toggleNavKey?: string | number
	}

	declare interface NavbarBrandProps {
		
	}

	declare interface NavbarCollapseProps {
		
	}

	declare interface NavbarHeaderProps {
		
	}

	declare interface NavbarToggleProps {
		
	}

	declare interface NavbarProps {
		brand?: any,
		bsSize?: Sizes,
		bsStyle?: string,
		componentClass?: React.ReactType,
		defaultNavExpanded?: boolean,
		fixedBottom?: boolean,
		fixedTop?: boolean,
		fluid?: boolean,
		inverse?: boolean,
		navExpanded?: boolean,
		onToggle?: Function,
		staticTop?: boolean,
		toggleButton?: any,
		toggleNavKey?: string | number
	}

	declare interface NavbarClass {
		Brand: typeof NavbarBrand,
		Collapse: typeof NavbarCollapse,
		Header: typeof NavbarHeader,
		Toggle: typeof NavbarToggle
	}

	declare interface NavDropdownBaseProps {
		active?: boolean,
		noCaret?: boolean
	}

	declare interface TabsProps {
		activeKey?: any,
		animation?: boolean,
		bsStyle?: string,
		defaultActiveKey?: any,
		onSelect?: SelectCallback,
		paneWidth?: any,
		position?: string,
		tabWidth?: any,
		unmountOnExit?: boolean
	}

	declare interface TabProps {
		animation?: boolean,
		eventKey?: any
	}

	declare interface TabClass {
		Container: TabContainer,
		Pane: TabPane,
		Content: TabClass
	}

	declare interface TabContainerProps {
		activeKey?: any,
		defaultActiveKey?: any,
		generateChildId?: (eventKey: any, type: any) => string
	}

	declare interface TabPaneProps {
		animation?: boolean | React.ComponentClass<any>,
		aria-labelledby?: string,
		bsClass?: string,
		eventKey?: any,
		onEnter?: Function,
		onEntered?: Function,
		onEntering?: Function,
		onExit?: Function,
		onExited?: Function,
		onExiting?: Function,
		unmountOnExit?: boolean
	}

	declare interface PagerProps {
		onSelect?: SelectCallback
	}

	declare interface PagerClass {
		Item: typeof PageItem
	}

	declare interface PageItemProps {
		disabled?: boolean,
		eventKey?: any,
		next?: boolean,
		onSelect?: SelectCallback,
		previous?: boolean,
		target?: string
	}

	declare interface PaginationProps {
		activePage?: number,
		bsSize?: Sizes,
		bsStyle?: string,
		boundaryLinks?: boolean,
		buttonComponentClass?: React.ReactType,
		ellipsis?: React.ReactNode,
		first?: React.ReactNode,
		items?: number,
		last?: React.ReactNode,
		maxButtons?: number,
		next?: React.ReactNode,
		onSelect?: SelectCallback,
		prev?: React.ReactNode
	}

	declare interface AlertProps {
		bsSize?: Sizes,
		bsStyle?: string,
		closeLabel?: string,
		dismissAfter?: number,
		onDismiss?: Function
	}

	declare interface CarouselProps {
		activeIndex?: number,
		bsSize?: Sizes,
		bsStyle?: string,
		controls?: boolean,
		defaultActiveIndex?: number,
		direction?: string,
		indicators?: boolean,
		interval?: number,
		nextIcon?: React.ReactNode,
		onSelect?: SelectCallback,
		onSlideEnd?: Function,
		pauseOnHover?: boolean,
		prevIcon?: React.ReactNode,
		slide?: boolean
	}

	declare interface CarouselClass {
		Caption: typeof CarouselCaption,
		Item: typeof CarouselItem
	}

	declare interface CarouselItemProps {
		active?: boolean,
		animtateIn?: boolean,
		animateOut?: boolean,
		direction?: string,
		index?: number,
		onAnimateOutEnd?: Function
	}

	declare interface CarouselCaptionProps {
		componentClass?: React.ReactType
	}

	declare interface GridProps {
		componentClass?: React.ReactType,
		fluid?: boolean
	}

	declare interface RowProps {
		componentClass?: React.ReactType
	}

	declare interface ColProps {
		componentClass?: React.ReactType,
		lg?: number,
		lgHidden?: boolean,
		lgOffset?: number,
		lgPull?: number,
		lgPush?: number,
		md?: number,
		mdHidden?: boolean,
		mdOffset?: number,
		mdPull?: number,
		mdPush?: number,
		sm?: number,
		smHidden?: boolean,
		smOffset?: number,
		smPull?: number,
		smPush?: number,
		xs?: number,
		xsHidden?: boolean,
		xsOffset?: number,
		xsPull?: number,
		xsPush?: number
	}

	declare interface ThumbnailProps {
		bsSize?: Sizes,
		bsStyle?: string
	}

	declare interface ListGroupProps {
		componentClass?: React.ReactType,
		fill?: boolean
	}

	declare interface ListGroupItemProps {
		active?: any,
		bsSize?: Sizes,
		bsStyle?: string,
		eventKey?: any,
		header?: any,
		key?: any,
		listItem?: boolean
	}

	declare interface LabelProps {
		bsSize?: Sizes,
		bsStyle?: string
	}

	declare interface BadgeProps {
		pullRight?: boolean
	}

	declare interface JumbotronProps {
		componentClass?: React.ReactType
	}

	declare interface ImageProps {
		circle?: boolean,
		responsive?: boolean,
		rounded?: boolean,
		thumbnail?: boolean
	}

	declare interface PageHeaderProps {
		
	}

	declare interface WellProps {
		bsSize?: Sizes,
		bsStyle?: string
	}

	declare interface GlyphiconProps {
		glyph: string
	}

	declare interface TableProps {
		bordered?: boolean,
		condensed?: boolean,
		hover?: boolean,
		responsive?: boolean,
		striped?: boolean
	}

	declare interface InputGroupProps {
		bsClass?: string,
		bsSize?: Sizes
	}

	declare interface InputGroupClass {
		Addon: typeof InputGroupAddon,
		Button: typeof InputGroupButton
	}

	declare interface InputGroupAddonProps {
		
	}

	declare interface InputGroupButtonProps {
		
	}

	declare interface FormProps {
		bsClass?: string,
		componentClass?: React.ReactType,
		horizontal?: boolean,
		inline?: boolean
	}

	declare interface FormGroupProps {
		bsClass?: string,
		bsSize?: Sizes,
		controlId?: string,
		validationState?: "success" | "warning" | "error"
	}

	declare interface ControlLabelProps {
		bsClass?: string,
		htmlFor?: string,
		srOnly?: boolean
	}

	declare interface FormControlProps {
		bsClass?: string,
		componentClass?: React.ReactType,
		id?: string,
		type?: string
	}

	declare interface FormControlClass {
		Feedback: typeof FormControlFeedback,
		Static: typeof FormControlStatic
	}

	declare interface FormControlFeedbackProps {
		
	}

	declare interface FormControlStaticProps {
		bsClass?: string,
		componentClass?: React.ReactType
	}

	declare interface HelpBlockProps {
		bsClass?: string
	}

	declare interface RadioProps {
		bsClass?: string,
		disabled?: boolean,
		inline?: boolean,
		inputRef?: (instance: HTMLInputElement) => void,
		validationState?: "success" | "warning" | "error"
	}

	declare interface PortalProps {
		dimension?: string | Function,
		getDimensionValue?: Function,
		in?: boolean,
		onEnter?: Function,
		onEntered?: Function,
		onEntering?: Function,
		onExit?: Function,
		onExited?: Function,
		onExiting?: Function,
		role?: string,
		timeout?: number,
		transitionAppear?: boolean,
		unmountOnExit?: boolean
	}

	declare interface PositionProps {
		dimension?: string | Function,
		getDimensionValue?: Function,
		in?: boolean,
		role?: string,
		timeout?: number,
		transitionAppear?: boolean,
		unmountOnExit?: boolean
	}

	declare interface MediaLeftProps {
		align?: string
	}

	declare interface MediaRightProps {
		align?: string
	}

	declare interface MediaHeadingProps {
		componentClass?: React.ReactType
	}

	declare interface MediaBodyProps {
		componentClass?: React.ReactType
	}

	declare interface MediaListProps {
		
	}

	declare interface MediaListItemProps {
		componentClass?: React.ReactType
	}

	declare interface MediaProps {
		componentClass?: React.ReactType
	}

	declare interface MediaClass {
		Left: typeof MediaLeft,
		Right: typeof MediaRight,
		Heading: typeof MediaHeading,
		Body: typeof MediaBody,
		List: typeof MediaList,
		ListItem: typeof MediaListItem
	}

	declare interface bootstrapUtilsType {
		
	}

	declare interface ValidComponentChildrenType {
		map: (children: any, func: any, context: any) => any,
		forEach: (children: any, func: any, context: any) => any,
		count: (children: any) => number,
		filter: (children: any, func: any, context: any) => any,
		find: (children: any, func: any, context: any) => any,
		every: (children: any, func: any, context: any) => any,
		some: (children: any, func: any, context: any) => any,
		toArray: (children: any) => any
	}

	declare function createChainedFunctionType(...funcs: Function[]): Function

	declare class Checkbox extends React$Component<CheckboxProps, {
		
	}> {
		
	}

	declare class Clearfix extends React$Component<ClearfixProps, {
		
	}> {
		
	}

	declare class Collapse extends React$Component<CollapseProps, {
		
	}> {
		
	}

	declare class Dropdown extends React$Component<DropdownProps, any> {
		Menu: typeof DropdownMenu;
		Toggle: typeof DropdownToggle
	}

	declare class DropdownButton extends React$Component<DropdownButtonProps, {
		
	}> {
		
	}

	declare class DropdownMenu extends React$Component<DropdownMenuProps, any> {
		
	}

	declare class DropdownToggle extends React$Component<DropdownToggleProps, any> {
		
	}

	declare class Fade extends React$Component<FadeProps, {
		
	}> {
		
	}

	declare class MenuItem extends React$Component<MenuItemProps, {
		
	}> {
		
	}

	declare class SplitButton extends React$Component<SplitButtonProps, {
		
	}> {
		
	}

	declare class ModalHeader extends React$Component<ModalHeaderProps, {
		
	}> {
		
	}

	declare class ModalTitle extends React$Component<ModalTitleProps, {
		
	}> {
		
	}

	declare class ModalBody extends React$Component<ModalBodyProps, {
		
	}> {
		
	}

	declare class ModalFooter extends React$Component<ModalFooterProps, {
		
	}> {
		
	}

	declare class Overlay extends React$Component<OverlayProps, {
		
	}> {
		
	}

	declare class ProgressBar extends React$Component<ProgressBarProps, {
		
	}> {
		
	}

	declare class Nav extends React$Component<NavProps, {
		
	}> {
		
	}

	declare class NavbarBrand extends React$Component<NavbarBrandProps, {
		
	}> {
		
	}

	declare class NavDropdown extends React$Component<NavDropdownProps, {
		
	}> {
		
	}

	declare class ListGroup extends React$Component<ListGroupProps, {
		
	}> {
		
	}

	declare class ListGroupItem extends React$Component<ListGroupItemProps, {
		
	}> {
		
	}

	declare class Label extends React$Component<LabelProps, {
		
	}> {
		
	}

	declare class PageHeader extends React$Component<PageHeaderProps, {
		
	}> {
		
	}

	declare class Well extends React$Component<WellProps, {
		
	}> {
		
	}

	declare class Form extends React$Component<FormProps, {
		
	}> {
		
	}

	declare class FormGroup extends React$Component<FormGroupProps, {
		
	}> {
		
	}

	declare class ControlLabel extends React$Component<ControlLabelProps, {
		
	}> {
		
	}

	declare class FormControlFeedback extends React$Component<FormControlFeedbackProps, {
		
	}> {
		
	}

	declare class FormControlStatic extends React$Component<FormControlStaticProps, {
		
	}> {
		
	}

	declare class HelpBlock extends React$Component<HelpBlockProps, {
		
	}> {
		
	}

	declare class Radio extends React$Component<RadioProps, {
		
	}> {
		
	}

	declare class Position extends React$Component<PositionProps, {
		
	}> {
		
	}

	declare class utils  {
		bootstrapUtils: bootstrapUtilsType;
		createChainedFunction: typeof createChainedFunctionType;
		ValidComponentChildren: ValidComponentChildrenType
	}

	
}
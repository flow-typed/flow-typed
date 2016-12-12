

declare module 'rebass' {
	declare type ArrowClass = React.StatelessComponent<ArrowProps>;

	declare type AvatarClass = React.StatelessComponent<AvatarProps>;

	declare type BadgeClass = React.StatelessComponent<BadgeProps>;

	declare type BannerClass = React.StatelessComponent<BannerProps>;

	declare type BlockClass = React.StatelessComponent<BlockProps>;

	declare type BlockquoteClass = React.StatelessComponent<BlockquoteProps>;

	declare type BreadcrumbsClass = React.StatelessComponent<BreadcrumbsProps>;

	declare type ButtonClass = React.StatelessComponent<ButtonProps>;

	declare type ButtonCircleClass = React.StatelessComponent<ButtonCircleProps>;

	declare type ButtonOutlineClass = React.StatelessComponent<ButtonOutlineProps>;

	declare type CardClass = React.StatelessComponent<CardProps>;

	declare type CardImageClass = React.StatelessComponent<CardImageProps>;

	declare type CheckboxClass = React.StatelessComponent<CheckboxProps>;

	declare type CloseClass = React.StatelessComponent<CloseProps>;

	declare type ContainerClass = React.StatelessComponent<ContainerProps>;

	declare type DividerClass = React.StatelessComponent<DividerProps>;

	declare type DonutClass = React.StatelessComponent<DonutProps>;

	declare type DotIndicatorClass = React.StatelessComponent<DotIndicatorProps>;

	declare type DrawerClass = React.StatelessComponent<DrawerProps>;

	declare type DropdownClass = React.StatelessComponent<DropdownProps>;

	declare type DropdownMenuClass = React.StatelessComponent<DropdownMenuProps>;

	declare type EmbedClass = React.StatelessComponent<EmbedProps>;

	declare type FixedClass = React.StatelessComponent<FixedProps>;

	declare type FooterClass = React.StatelessComponent<FooterProps>;

	declare type HeadingClass = React.StatelessComponent<HeadingProps>;

	declare type HeadingLinkClass = React.StatelessComponent<HeadingLinkProps>;

	declare type InlineFormClass = React.StatelessComponent<InlineFormProps>;

	declare type InputClass = React.StatelessComponent<InputProps>;

	declare type LabelClass = React.StatelessComponent<LabelProps>;

	declare type LinkBlockClass = React.StatelessComponent<LinkBlockProps>;

	declare type MediaClass = React.StatelessComponent<MediaProps>;

	declare type MenuClass = React.StatelessComponent<MenuProps>;

	declare type MessageClass = React.StatelessComponent<MessageProps>;

	declare type NavItemClass = React.StatelessComponent<NavItemProps>;

	declare type OverlayClass = React.StatelessComponent<OverlayProps>;

	declare type PageHeaderClass = React.StatelessComponent<PageHeaderProps>;

	declare type PanelClass = React.StatelessComponent<PanelProps>;

	declare type PanelFooterClass = React.StatelessComponent<PanelFooterProps>;

	declare type PanelHeaderClass = React.StatelessComponent<PanelHeaderProps>;

	declare type PreClass = React.StatelessComponent<PreProps>;

	declare type ProgressClass = React.StatelessComponent<ProgressProps>;

	declare type RadioClass = React.StatelessComponent<RadioProps>;

	declare type RatingClass = React.StatelessComponent<RatingProps>;

	declare type SectionClass = React.StatelessComponent<SectionProps>;

	declare type SectionHeaderClass = React.StatelessComponent<SectionHeaderProps>;

	declare type SelectClass = React.StatelessComponent<SelectProps>;

	declare type SequenceMapClass = React.StatelessComponent<SequenceMapProps>;

	declare type SequenceMapStepClass = React.StatelessComponent<SequenceMapStepProps>;

	declare type SliderClass = React.StatelessComponent<SliderProps>;

	declare type SpaceClass = React.StatelessComponent<SpaceProps>;

	declare type StatClass = React.StatelessComponent<StatProps>;

	declare type SwitchClass = React.StatelessComponent<SwitchProps>;

	declare type TableClass = React.StatelessComponent<TableProps>;

	declare type TextClass = React.StatelessComponent<TextProps>;

	declare type TextareaClass = React.StatelessComponent<TextareaProps>;

	declare type ToolbarClass = React.StatelessComponent<ToolbarProps>;

	declare type TooltipClass = React.StatelessComponent<TooltipProps>;

	declare export interface BaseProps<C> {
		tagName?: string,
		className?: string,
		baseStyle?: Object,
		style?: Object,
		m?: number,
		mt?: number,
		mr?: number,
		mb?: number,
		ml?: number,
		mx?: number,
		my?: number,
		p?: number,
		pt?: number,
		pr?: number,
		pb?: number,
		pl?: number,
		px?: number,
		py?: number,
		color?: string,
		backgroundColor?: string,
		inverted?: boolean,
		rounded?: boolean | "top" | "right" | "bottom" | "left",
		circle?: boolean,
		pill?: boolean
	}

	declare export interface ArrowProps {
		direction?: "up" | "down"
	}

	declare export interface AvatarProps {
		size?: number,
		src?: string
	}

	declare export interface BadgeProps {
		theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error",
		rounded?: boolean | "top" | "right" | "bottom" | "left",
		pill?: boolean,
		circle?: boolean
	}

	declare export interface BannerProps {
		align?: "left" | "center" | "right",
		backgroundImage: string
	}

	declare export interface BlockProps {
		m?: number,
		mt?: number,
		mr?: number,
		mb?: number,
		ml?: number,
		mx?: number,
		my?: number,
		p?: number,
		pt?: number,
		pr?: number,
		pb?: number,
		pl?: number,
		px?: number,
		py?: number,
		color?: string,
		backgroundColor?: string,
		borderColor?: string,
		border?: boolean,
		borderTop?: boolean,
		borderRight?: boolean,
		borderBottom?: boolean,
		borderLeft?: boolean,
		rounded?: boolean | "top" | "right" | "bottom" | "left"
	}

	declare export interface BlockquoteProps {
		source: string,
		href: string
	}

	declare export interface BreadcrumbsProps {
		links: {
		children: any,
		href: string
	}[]
	}

	declare export interface ButtonProps {
		href?: string,
		color?: string,
		backgroundColor?: string,
		rounded?: boolean | "top" | "right" | "bottom" | "left",
		pill?: boolean,
		big?: boolean,
		theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error"
	}

	declare export interface ButtonCircleProps {
		title?: string,
		href?: string,
		color?: string,
		backgroundColor?: string,
		size?: number
	}

	declare export interface ButtonOutlineProps {
		href?: string,
		color?: string,
		rounded?: boolean | "top" | "right" | "bottom" | "left",
		pill?: boolean,
		big?: boolean
	}

	declare export interface CardProps {
		width?: number | string
	}

	declare export interface CardImageProps {
		src?: string
	}

	declare export interface CheckboxProps {
		label?: string,
		checked?: boolean,
		name?: string,
		readOnly?: boolean,
		theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error"
	}

	declare export interface CloseProps {
		
	}

	declare export interface ContainerProps {
		
	}

	declare export interface DividerProps {
		width?: number
	}

	declare export interface DonutProps {
		value?: number,
		size?: number,
		strokeWidth?: number,
		color?: string
	}

	declare export interface DotIndicatorProps {
		length?: number,
		active?: number,
		onClick?: Function
	}

	declare export interface DrawerProps {
		size?: number,
		open?: boolean,
		position?: "top" | "right" | "bottom" | "left",
		onDismiss?: Function
	}

	declare export interface DropdownProps {
		
	}

	declare export interface DropdownMenuProps {
		open?: boolean,
		right?: boolean,
		top?: boolean,
		onDismiss?: Function
	}

	declare export interface EmbedProps {
		ratio?: number
	}

	declare export interface FixedProps {
		top?: boolean,
		right?: boolean,
		bottom?: boolean,
		left?: boolean,
		zIndex?: number
	}

	declare export interface FooterProps {
		
	}

	declare export interface HeadingProps {
		big?: boolean,
		level?: number,
		size?: number,
		alt?: boolean
	}

	declare export interface HeadingLinkProps {
		level?: number,
		size?: number,
		href?: string
	}

	declare export interface InlineFormProps {
		label?: string,
		name?: string,
		value?: number | string,
		placeholder?: string,
		onChange?: Function,
		buttonLabel?: string,
		onClick?: Function
	}

	declare export interface InputProps {
		label?: string,
		name?: string,
		type?: string,
		message?: string,
		hideLabel?: boolean,
		rounded?: boolean | "top" | "right" | "bottom" | "left",
		placeholder?: string
	}

	declare export interface LabelProps {
		hide?: boolean
	}

	declare export interface LinkBlockProps {
		is?: string | Object | Function,
		href?: string
	}

	declare export interface MediaProps {
		img?: string,
		right?: boolean,
		align?: "top" | "center" | "bottom"
	}

	declare export interface MenuProps {
		
	}

	declare export interface MessageProps {
		theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error"
	}

	declare export interface NavItemProps {
		small?: boolean,
		is?: string | Object | Function
	}

	declare export interface OverlayProps {
		open?: boolean,
		dark?: boolean,
		box?: boolean,
		fullWidth?: boolean,
		onDismiss?: Function
	}

	declare export interface PageHeaderProps {
		heading?: string,
		description?: string
	}

	declare export interface PanelProps {
		theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error"
	}

	declare export interface PanelFooterProps {
		theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error"
	}

	declare export interface PanelHeaderProps {
		theme?: "primary" | "secondary" | "default" | "info" | "success" | "warning" | "error"
	}

	declare export interface PreProps {
		
	}

	declare export interface ProgressProps {
		value?: number,
		color?: string
	}

	declare export interface RadioProps {
		checked?: boolean,
		group?: string,
		label?: string,
		name?: string,
		readOnly?: boolean
	}

	declare export interface RatingProps {
		value?: number,
		onClick?: Function
	}

	declare export interface SectionProps {
		
	}

	declare export interface SectionHeaderProps {
		heading?: string,
		href?: string,
		description?: string
	}

	declare export interface SelectProps {
		label?: string,
		name?: string,
		options?: {
		children: any,
		value: any
	}[],
		message?: string,
		hideLabel?: boolean
	}

	declare export interface SequenceMapProps {
		steps?: {
		children: any,
		href: string
	}[],
		active?: number
	}

	declare export interface SequenceMapStepProps {
		width?: string,
		first?: boolean,
		active?: boolean
	}

	declare export interface SliderProps {
		label?: string,
		name?: string,
		fill?: boolean,
		hideLabel?: boolean,
		value?: number,
		defaultValue?: number,
		readOnly?: boolean
	}

	declare export interface SpaceProps {
		x?: number,
		auto?: boolean
	}

	declare export interface StatProps {
		value?: number | string,
		unit?: string,
		label?: string,
		topLabel?: boolean
	}

	declare export interface SwitchProps {
		checked?: boolean
	}

	declare export interface TableProps {
		headings?: any[],
		data?: any[][]
	}

	declare export interface TextProps {
		small?: boolean,
		bold?: boolean
	}

	declare export interface TextareaProps {
		label?: string,
		name?: string,
		message?: string,
		hideLabel?: boolean
	}

	declare export interface ToolbarProps {
		
	}

	declare export interface TooltipProps {
		title?: string
	}

			
}
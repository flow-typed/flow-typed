

declare module 'rc-tooltip' {
				declare class Tooltip extends ___React$Component<Tooltip.Props, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$Tooltip' {
	declare export type Trigger = "hover" | "click" | "focus";

	declare export type Placement = "left" | "right" | "top" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

	declare export interface Props {
		overlayClassName?: string,
		trigger?: Trigger[],
		mouseEnterDelay?: number,
		mouseLeaveDelay?: number,
		overlayStyle?: React.CSSProperties,
		prefixCls?: string,
		transitionName?: string,
		onVisibleChange?: () => void,
		visible?: boolean,
		defaultVisible?: boolean,
		placement?: Placement | Object,
		align?: Object,
		onPopupAlign?: (popupDomNode: Element, align: Object) => void,
		overlay: React.ReactElement<any> | (() => React.ReactElement<any>),
		arrowContent?: React.ReactNode,
		getTooltipContainer?: () => Element,
		destroyTooltipOnHide?: boolean
	}

			
}
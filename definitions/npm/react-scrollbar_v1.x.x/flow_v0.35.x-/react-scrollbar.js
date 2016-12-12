

declare module 'react-scrollbar' {
		declare interface ScrollAreaProps {
		className?: string,
		style?: ___React.CSSProperties,
		speed?: number,
		contentClassName?: string,
		contentStyle?: ___React.CSSProperties,
		vertical?: boolean,
		verticalContainerStyle?: ___React.CSSProperties,
		verticalScrollbarStyle?: ___React.CSSProperties,
		horizontal?: boolean,
		horizontalContainerStyle?: ___React.CSSProperties,
		horizontalScrollbarStyle?: ___React.CSSProperties,
		onScroll?: (
		value: {
		leftPosition: number,
		topPosition: number,
		containerHeight: number,
		containerWidth: number,
		realHeight: number,
		realWidth: number
	}
	) => void,
		contentWindow?: any,
		ownerDocument?: any,
		smoothScrolling?: boolean,
		minScrollSize?: number,
		swapWheelAxes?: boolean
	}

		declare class ScrollArea extends ___React$Component<ScrollAreaProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}
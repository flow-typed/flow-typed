

declare module 'react-swipeable-views' {
					


}

declare module 'npm$namespace$ReactSwipeableViews' {
		declare export interface SwipeableViewsProps {
		containerStyle?: React.CSSProperties,
		disabled?: boolean,
		index?: number,
		onChangeIndex?: (indexNew: number, indexLatest: number) => void,
		onSwitching?: (index: number) => void,
		resistance?: boolean,
		slideStyle?: React.CSSProperties,
		style?: React.CSSProperties,
		threshold?: number
	}

	declare interface SwipeableViewsState {
		indexCurrent?: number,
		indexLatest?: number,
		isDragging?: boolean,
		isFirstRender?: boolean,
		heightLatest?: number
	}

		declare export class SwipeableViews extends React$Component<SwipeableViewsProps, SwipeableViewsState> {
		
	}

	
}
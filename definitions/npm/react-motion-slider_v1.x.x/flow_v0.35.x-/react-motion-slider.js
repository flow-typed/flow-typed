

declare module 'react-motion-slider' {
		declare export interface SliderProps {
		currentKey?: string | number,
		currentIndex?: number,
		slidesToShow?: number,
		slidesToMove?: number,
		autoHeight?: boolean,
		align?: "left" | "center" | "right",
		swipe?: boolean | "touch" | "mouse",
		swipeThreshold?: number,
		flickTimeout?: number,
		springConfig?: OpaqueConfig,
		beforeSlide?: (currentIndex: number, nextIndex: number) => void,
		afterSlide?: (currentIndex: number) => void
	}

		declare export default class Slider extends React$Component<SliderProps, {
		
	}> {
		next(): void;
		prev(): void
	}

	
}
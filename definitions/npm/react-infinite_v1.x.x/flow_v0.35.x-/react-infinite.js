

declare module 'react-infinite' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactInfinite' {
		declare interface InfiniteProps {
		elementHeight: number | number[],
		containerHeight?: number,
		preloadBatchSize?: number | Object,
		preloadAdditionalHeight?: number | Object,
		handleScroll?: (node: React.ReactElement<any>) => void,
		infiniteLoadBeginBottomOffset?: number,
		infiniteLoadBeginEdgeOffset?: number,
		onInfiniteLoad?: () => void,
		loadingSpinnerDelegate?: React.ReactElement<any>,
		isInfiniteLoading?: boolean,
		timeScrollStateLastsForAfterUserScrolls?: number,
		className?: string,
		useWindowAsScrollContainer?: boolean,
		displayBottomUpwards?: boolean
	}

		declare export class Infinite extends React$Component<InfiniteProps, {
		
	}> {
		containerHeightScaleFactor(n: number): any
	}

	
}
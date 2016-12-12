

declare module 'wordcloud' {
			declare function WordCloud(elements: HTMLElement | HTMLElement[], options: WordCloud.Options): void

		
}

declare module 'npm$namespace$WordCloud' {
	declare type ListEntry = [string, number];

	declare type EventCallback = (item: ListEntry, dimension: Dimension, event: MouseEvent) => void;

	declare interface Options {
		list?: Array<ListEntry> | any[],
		fontFamily?: string,
		fontWeight?: string | number,
		color?: string | ((
		word: string, weight: string | number, fontSize: number, distance: number, theta: number
	) => string),
		minSize?: number,
		weightFactor?: number | ((weight: number) => number),
		clearCanvas?: boolean,
		backgroundColor?: string,
		gridSize?: number,
		origin?: [number, number],
		drawMask?: boolean,
		maskColor?: string,
		maskGapWidth?: number,
		wait?: number,
		abortThreshold?: number,
		abort?: Function,
		minRotation?: number,
		maxRotation?: number,
		shuffle?: boolean,
		rotateRatio?: number,
		shape?: string | ((theta: number) => number),
		ellipticity?: number,
		hover?: EventCallback,
		click?: EventCallback
	}

	declare interface Dimension {
		x: number,
		y: number,
		w: number,
		h: number
	}

			
}
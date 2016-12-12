

declare module 'heatmap' {
		declare interface HeatmapConfiguration {
		backgroundColor?: string,
		blur?: number,
		gradient?: any,
		latField?: string,
		lngField?: string,
		maxOpacity?: number,
		minOpacity?: number,
		opacity?: number,
		radius?: number,
		scaleRadius?: boolean,
		useLocalExtrema?: boolean,
		valueField?: string
	}

	declare interface HeatmapDataPoint {
		[index: string]: number
	}

	declare interface HeatmapData {
		data: HeatmapDataPoint[],
		max?: number,
		min?: number
	}

		declare class HeatmapOverlay  {
		constructor(configuration: HeatmapConfiguration): this;
		onAdd(map: L.Map): void;
		onRemove(map: L.Map): void;
		setData(data: HeatmapData): void
	}

	
}
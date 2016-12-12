

declare module 'plotly.js' {
		declare interface PlotlyConfig {
		staticPlot?: boolean,
		editable?: boolean,
		autosizable?: boolean,
		fillFrame?: boolean,
		frameMargins?: number,
		scrollZoom?: boolean,
		doubleClick?: string,
		showTips?: boolean,
		showLink?: boolean,
		sendData?: boolean,
		linkText?: string,
		showSources?: boolean,
		displayModeBar?: string | boolean,
		modeBarButtonsToRemove?: any[],
		modeBarButtonsToAdd?: any[],
		modeBarButtons?: boolean,
		displaylogo?: boolean,
		plotGlPixelRatio?: number,
		setBackground?: any,
		topojsonURL?: string,
		mapboxAccessToken?: string,
		logging?: boolean
	}

	declare interface PlotlyStatic {
		newPlot(
		divid: string | HTMLElement, data: any[], layout?: any, config?: PlotlyConfig
	): void
	}

			declare module.exports: PlotlyStatic


}
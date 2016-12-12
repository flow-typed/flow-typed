

declare module 'dojox.charting' {
					
}

declare module 'charting' {
				declare class Chart  {
		constructor(node: HTMLElement, kwArgs?: Object): this;
		addAxis(name: String, kwArgs: Object): any;
		addPlot(name: String, kwArgs: Object): any;
		addSeries(name: String, data: any[], kwArgs: Object): any;
		addSeries(name: String, data: Object, kwArgs: Object): any;
		calculateGeometry(): any;
		connectToPlot(name: String, object: Object, method: Function): any;
		delayedRender(): any;
		destroy(): void;
		fireEvent(seriesName: String, eventName: String, index: number): any;
		formatTruncatedLabel(element: any, label: any, labelType: any): void;
		fullGeometry(): any;
		fullRender(): any;
		getAxis(name: String): any;
		getCoords(): any;
		getGeometry(): any;
		getPlot(name: String): any;
		getPlotOrder(): any;
		getSeries(name: String): any;
		getSeriesOrder(plotName: String): any;
		movePlotToBack(name: String): any;
		movePlotToFront(name: String): any;
		moveSeriesToBack(name: String): any;
		moveSeriesToFront(name: String): any;
		removeAxis(name: String): any;
		removePlot(name: String): any;
		removeSeries(name: String): any;
		render(): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		setAxisWindow(name: String, scale: number, offset: number, zoom: boolean): any;
		setAxisWindow(name: String, scale: number, offset: number, zoom: Object): any;
		setDir(dir: any): Function;
		setPlotOrder(newOrder: any[]): any;
		setSeriesOrder(newOrder: any[]): any;
		setTheme(theme: dojox.charting.SimpleTheme): any;
		setWindow(sx: number, sy: number, dx: number, dy: number, zoom: boolean): any;
		setWindow(sx: number, sy: number, dx: number, dy: number, zoom: Object): any;
		updateSeries(name: String, data: any[], offsets: boolean): any;
		updateSeries(name: String, data: Object, offsets: boolean): any;
		zoomIn(name: String, range: any[], delayed: any): void
	}

	declare class Chart2D  {
		constructor(node: HTMLElement, kwArgs?: Object): this;
		addAxis(name: String, kwArgs: Object): any;
		addPlot(name: String, kwArgs: Object): any;
		addSeries(name: String, data: any[], kwArgs: Object): any;
		addSeries(name: String, data: Object, kwArgs: Object): any;
		calculateGeometry(): any;
		connectToPlot(name: String, object: Object, method: Function): any;
		delayedRender(): any;
		destroy(): void;
		fireEvent(seriesName: String, eventName: String, index: number): any;
		formatTruncatedLabel(element: any, label: any, labelType: any): void;
		fullGeometry(): any;
		fullRender(): any;
		getAxis(name: String): any;
		getCoords(): any;
		getGeometry(): any;
		getPlot(name: String): any;
		getPlotOrder(): any;
		getSeries(name: String): any;
		getSeriesOrder(plotName: String): any;
		movePlotToBack(name: String): any;
		movePlotToFront(name: String): any;
		moveSeriesToBack(name: String): any;
		moveSeriesToFront(name: String): any;
		removeAxis(name: String): any;
		removePlot(name: String): any;
		removeSeries(name: String): any;
		render(): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		setAxisWindow(name: String, scale: number, offset: number, zoom: boolean): any;
		setAxisWindow(name: String, scale: number, offset: number, zoom: Object): any;
		setDir(dir: any): Function;
		setPlotOrder(newOrder: any[]): any;
		setSeriesOrder(newOrder: any[]): any;
		setTheme(theme: dojox.charting.SimpleTheme): any;
		setWindow(sx: number, sy: number, dx: number, dy: number, zoom: boolean): any;
		setWindow(sx: number, sy: number, dx: number, dy: number, zoom: Object): any;
		updateSeries(name: String, data: any[], offsets: boolean): any;
		updateSeries(name: String, data: Object, offsets: boolean): any;
		zoomIn(name: String, range: any[], delayed: any): void
	}

	declare class Chart3D  {
		constructor(node: any, lights: any, camera: any, theme: any): this;
		addPlot(plot: any): any;
		addWall(wall: any): any;
		generate(): any;
		invalidate(): Function;
		removePlot(plot: any): any;
		removeWall(wall: any): any;
		render(): Function;
		setDir(dir: String): Function
	}

	declare class DataChart extends undefined$Chart2D {
		constructor(node: HTMLElement, kwArgs: Object): this;
		chartTheme: Object;
		comparative: boolean;
		displayRange: number;
		fieldName: string;
		label: string;
		minHeight: number;
		minWidth: number;
		query: string;
		queryOptions: string;
		scroll: boolean;
		showing: boolean;
		stretchToFit: boolean;
		addAxis(name: String, kwArgs: Object): any;
		addPlot(name: String, kwArgs: Object): any;
		addSeries(name: String, data: any[], kwArgs: Object): any;
		addSeries(name: String, data: Object, kwArgs: Object): any;
		calculateGeometry(): any;
		connectToPlot(name: String, object: Object, method: Function): any;
		convertLabels(axis: any): any;
		delayedRender(): any;
		destroy(): void;
		fetch(): void;
		fireEvent(seriesName: String, eventName: String, index: number): any;
		formatTruncatedLabel(element: any, label: any, labelType: any): void;
		fullGeometry(): any;
		fullRender(): any;
		getAxis(name: String): any;
		getCoords(): any;
		getGeometry(): any;
		getPlot(name: String): any;
		getPlotOrder(): any;
		getProperty(item: Object, prop: any): any;
		getSeries(name: String): any;
		getSeriesOrder(plotName: String): any;
		hide(): void;
		movePlotToBack(name: String): any;
		movePlotToFront(name: String): any;
		moveSeriesToBack(name: String): any;
		moveSeriesToFront(name: String): any;
		removeAxis(name: String): any;
		removePlot(name: String): any;
		removeSeries(name: String): any;
		render(): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		resizeChart(dim: Object): void;
		seriesLabels(val: number): any;
		setAxisWindow(name: String, scale: number, offset: number, zoom: boolean): any;
		setAxisWindow(name: String, scale: number, offset: number, zoom: Object): any;
		setDir(dir: any): Function;
		setPlotOrder(newOrder: any[]): any;
		setSeriesOrder(newOrder: any[]): any;
		setStore(store: Object, query: String, fieldName: String, queryOptions: Object): void;
		setTheme(theme: dojox.charting.SimpleTheme): any;
		setWindow(sx: number, sy: number, dx: number, dy: number, zoom: boolean): any;
		setWindow(sx: number, sy: number, dx: number, dy: number, zoom: Object): any;
		show(): void;
		updateSeries(name: String, data: any[], offsets: boolean): any;
		updateSeries(name: String, data: Object, offsets: boolean): any;
		zoomIn(name: String, range: any[], delayed: any): void;
		onData(items: any[]): void;
		onDataReceived(items: any[]): void;
		onError(err: Error): void;
		onSet(item: Object): void
	}

	declare class DataSeries  {
		constructor(store: Object, kwArgs: Object, value: Function): this;
		destroy(): void;
		fetch(): void;
		setSeriesObject(series: dojox.charting.Series): void;
		onFetchError(errorData: any, request: any): void
	}

	declare class Element  {
		constructor(chart: dojox.charting.Chart): this;
		chart: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		cleanGroup(creator: dojox.gfx.shape.Surface): any;
		destroy(): void;
		destroyHtmlElements(): void;
		getGroup(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		purgeGroup(): any
	}

	declare class Series extends undefined$Element {
		constructor(chart: dojox.charting.Chart, data: any[], kwArgs?: Object): this;
		chart: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		cleanGroup(creator: dojox.gfx.shape.Surface): any;
		clear(): void;
		destroy(): void;
		destroyHtmlElements(): void;
		getGroup(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		purgeGroup(): any;
		update(data: any[]): void;
		update(data: Object): void
	}

	declare class SimpleTheme  {
		constructor(kwArgs: any): this;
		defaultColors: any[];
		defaultMarkers: Object;
		defaultTheme: Object;
		shapeSpaces: Object;
		addMarker(name: String, segment: String): void;
		addMixin(
		theme: dojox.charting.SimpleTheme, elementType: String, mixin: Object, doPost: boolean
	): any;
		addMixin(
		theme: dojox.charting.SimpleTheme, elementType: String, mixin: any[], doPost: boolean
	): any;
		clear(): void;
		clone(): any;
		getTick(name: String, mixin: Object): any;
		inspectObjects(f: any): void;
		next(elementType: String, mixin: Object, doPost: boolean): any;
		post(theme: dojox.charting.SimpleTheme, elementType: String): any;
		reverseFills(): void;
		setMarkers(obj: Object): void;
		skip(): void
	}

	declare class StoreSeries  {
		constructor(store: Object, kwArgs: Object, value: Function): this;
		destroy(): void;
		fetch(): void;
		setSeriesObject(series: dojox.charting.Series): void
	}

	declare class Theme extends undefined$SimpleTheme {
		constructor(kwArgs: any): this;
		defaultColors: any[];
		defaultMarkers: Object;
		defaultTheme: Object;
		shapeSpaces: Object;
		addMarker(name: String, segment: String): void;
		addMixin(
		theme: dojox.charting.SimpleTheme, elementType: String, mixin: Object, doPost: boolean
	): any;
		addMixin(
		theme: dojox.charting.SimpleTheme, elementType: String, mixin: any[], doPost: boolean
	): any;
		clear(): void;
		clone(): any;
		defineColors(kwArgs: Object): any;
		generateGradient(fillPattern: any, colorFrom: any, colorTo: any): any;
		generateHslColor(color: any, luminance: any): any;
		generateHslGradient(color: any, fillPattern: any, lumFrom: any, lumTo: any): any;
		getTick(name: String, mixin: Object): any;
		inspectObjects(f: any): void;
		next(elementType: String, mixin: Object, doPost: boolean): any;
		post(theme: dojox.charting.SimpleTheme, elementType: String): any;
		reverseFills(): void;
		setMarkers(obj: Object): void;
		skip(): void
	}

	
}

declare module 'SimpleTheme' {
		declare interface defaultMarkers {
		CIRCLE: string,
		CROSS: string,
		DIAMOND: string,
		SQUARE: string,
		TRIANGLE: string,
		TRIANGLE_INVERTED: string,
		X: string
	}

	declare interface defaultTheme {
		axis: Object,
		chart: Object,
		indicator: Object,
		marker: Object,
		plotarea: Object,
		series: Object
	}

			
}

declare module 'Theme' {
		declare interface defaultMarkers {
		CIRCLE: string,
		CROSS: string,
		DIAMOND: string,
		SQUARE: string,
		TRIANGLE: string,
		TRIANGLE_INVERTED: string,
		X: string
	}

	declare interface defaultTheme {
		axis: Object,
		chart: Object,
		indicator: Object,
		marker: Object,
		plotarea: Object,
		series: Object
	}

			
}

declare module 'action2d' {
				declare class _IndicatorElement extends undefined$Indicator {
		constructor(chart: any, kwArgs: any): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: any): void;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: dojox.gfx.Surface): any;
		clear(): void;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(): void;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		stopTrack(): void;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Base extends dojo$Evented {
		constructor(chart: dojox.charting.Chart, plot?: String): this;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any
	}

	declare class ChartAction extends undefined$Base {
		constructor(chart: dojox.charting.Chart, plot?: String): this;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any
	}

	declare class Highlight extends undefined$PlotAction {
		constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object): this;
		defaultParams: Object;
		optionalParams: Object;
		overOutEvents: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		process(o: dojox.gfx.shape.Shape): void;
		reset(): void
	}

	declare class Magnify extends undefined$PlotAction {
		constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object): this;
		defaultParams: Object;
		optionalParams: Object;
		overOutEvents: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		process(o: dojox.gfx.shape.Shape): void;
		reset(): void
	}

	declare class MouseIndicator extends undefined$ChartAction {
		constructor(chart: dojox.charting.Chart, plot: any, kwArgs?: Object): this;
		defaultParams: Object;
		optionalParams: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		onChange(event: any): void;
		onMouseDown(event: any): void;
		onMouseMove(event: any): void;
		onMouseUp(event: any): void
	}

	declare class MouseZoomAndPan extends undefined$ChartAction {
		constructor(chart: dojox.charting.Chart, plot: any, kwArgs?: Object): this;
		defaultParams: Object;
		optionalParams: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		onDoubleClick(event: any): void;
		onKeyPress(event: any): void;
		onMouseDown(event: any): void;
		onMouseMove(event: any): void;
		onMouseUp(event: any): void;
		onMouseWheel(event: any): void
	}

	declare class MoveSlice extends undefined$PlotAction {
		constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object): this;
		defaultParams: Object;
		optionalParams: Object;
		overOutEvents: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		process(o: dojox.gfx.shape.Shape): void;
		reset(): void
	}

	declare class PlotAction extends undefined$Base {
		constructor(chart: dojox.charting.Chart, plot?: String, kwargs?: Object): this;
		overOutEvents: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		reset(): void
	}

	declare class Shake extends undefined$PlotAction {
		constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object): this;
		defaultParams: Object;
		optionalParams: Object;
		overOutEvents: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		process(o: dojox.gfx.shape.Shape): void;
		reset(): void
	}

	declare class Tooltip extends undefined$PlotAction {
		constructor(chart: dojox.charting.Chart, plot?: String, kwArgs?: Object): this;
		defaultParams: Object;
		optionalParams: Object;
		overOutEvents: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		process(o: dojox.gfx.shape.Shape): void;
		reset(): void;
		onClick(): void
	}

	declare class TouchIndicator extends undefined$ChartAction {
		constructor(chart: dojox.charting.Chart, plot: any, kwArgs?: Object): this;
		defaultParams: Object;
		optionalParams: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		onChange(event: any): void;
		onTouchEnd(event: any): void;
		onTouchMove(event: any): void;
		onTouchStart(event: any): void
	}

	declare class TouchZoomAndPan extends undefined$ChartAction {
		constructor(chart: dojox.charting.Chart, plot: any, kwArgs?: Object): this;
		defaultParams: Object;
		optionalParams: Object;
		connect(): void;
		destroy(): void;
		disconnect(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		onDoubleTap(event: any): void;
		onTouchEnd(event: any): void;
		onTouchMove(event: any): void;
		onTouchStart(event: any): void
	}

	declare class Tooltip  {
		constructor(): this
	}

	declare class ZoomAndPan  {
		constructor(): this
	}

	
}

declare module 'axis2d' {
		declare interface common {
		createText: Object
	}

		declare class Base extends undefined$Element {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		chart: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		calculate(min: any, max: any, span: any): any;
		cleanGroup(creator: dojox.gfx.shape.Surface): any;
		clear(): any;
		destroy(): void;
		destroyHtmlElements(): void;
		getGroup(): any;
		getOffsets(): any;
		getScaler(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		getTicks(): any;
		initialized(): any;
		purgeGroup(): any;
		render(dim: any, offsets: any): any
	}

	declare class Default extends undefined$Invisible {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		offset: number;
		opt: Object;
		optionalParams: Object;
		scale: number;
		scaler: Object;
		ticks: Object;
		calculate(min: any, max: any, span: any): Function;
		cleanGroup(creator: any): void;
		clear(): any;
		createLine(creator: any, params: any): any;
		createText(
		labelType: any, creator: any, x: any, y: any, align: any, textContent: any, font: any, fontColor: any, labelWidth: any
	): any;
		dependOnData(): boolean;
		destroy(): void;
		destroyHtmlElements(): void;
		getGroup(): any;
		getOffsets(): any;
		getScaler(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		getTicks(): any;
		getWindowOffset(): number;
		getWindowScale(): number;
		initialized(): any;
		labelTooltip(
		elem: any, chart: any, label: any, truncatedLabel: any, font: any, elemType: any
	): void;
		purgeGroup(): any;
		render(dim: Object, offsets: Object): any;
		setWindow(scale: number, offset: number): any
	}

	declare class Invisible extends undefined$Base {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		calculate(min: number, max: number, span: number): any;
		cleanGroup(creator: dojox.gfx.shape.Surface): any;
		clear(): any;
		dependOnData(): boolean;
		destroy(): void;
		destroyHtmlElements(): void;
		getGroup(): any;
		getOffsets(): any;
		getScaler(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		getTicks(): any;
		getWindowOffset(): number;
		getWindowScale(): number;
		initialized(): any;
		purgeGroup(): any;
		render(dim: any, offsets: any): any;
		setWindow(scale: number, offset: number): any
	}

	declare class Default  {
		constructor(): this;
		labelTooltip(
		elem: any, chart: any, label: any, truncatedLabel: any, font: any, elemType: any
	): void
	}

	
}

declare module 'common' {
		declare interface createText {
		gfx(
		chart: dojox.charting.Chart, creator: Object, x: number, y: number, align: String, text: String, font: String, fontColor: String
	): dojox.gfx.Text,
		gfx(
		chart: dojox.charting.Chart, creator: Object, x: number, y: number, align: String, text: String, font: String, fontColor: dojo._base.Color
	): dojox.gfx.Text,
		html(
		chart: dojox.charting.Chart, creator: Object, x: number, y: number, align: String, text: String, font: String, fontColor: String, labelWidth: number
	): HTMLElement,
		html(
		chart: dojox.charting.Chart, creator: Object, x: number, y: number, align: String, text: String, font: String, fontColor: dojo._base.Color, labelWidth: number
	): HTMLElement
	}

	declare interface defaultStats {
		hmax: Object,
		hmin: Object,
		vmax: Object,
		vmin: Object
	}

			
}

declare module 'bidi' {
		declare interface _bidiutils {
		reverseMatrix(plot: any, dim: any, offsets: any, rtl: any): void
	}

		declare class Chart  {
		constructor(): this;
		dir: string;
		isMirrored: boolean;
		textDir: string;
		applyMirroring(plot: any, dim: any, offsets: any): Function;
		formatTruncatedLabel(element: any, label: any, labelType: any): void;
		getTextDir(text: any): any;
		isRightToLeft(): boolean;
		render(): Function;
		setDir(dir: any): Function;
		setTextDir(newTextDir: any, obj: any): Function
	}

	declare class Chart3D  {
		constructor(): this;
		direction: string;
		isMirrored: boolean;
		applyMirroring(plot: any, dim: any, offsets: any): Function;
		generate(): Function;
		isRightToLeft(): boolean;
		postscript(
		node: HTMLElement, lights: any, camera: Object, theme: Object, direction: String
	): void;
		setDir(dir: any): Function
	}

	
}

declare module 'widget' {
				declare class Chart  {
		constructor(): this;
		postMixInProperties(): void
	}

	declare class Legend  {
		constructor(): this
	}

	declare class Chart extends dijit$_WidgetBase {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		margins: Object;
		set(property: "margins", value: Object): void;
		get(property: "margins"): Object;
		watch(
		property: "margins", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		theme: Object;
		set(property: "theme", value: Object): void;
		get(property: "theme"): Object;
		watch(
		property: "theme", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		fill(): any;
		get(name: any): any;
		getChildren(): any[];
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		resize(box: any): void;
		set(name: any, value: any): any;
		startup(): void;
		stroke(): any;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onFocus(): void
	}

	declare class Chart2D extends dijit$_WidgetBase {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		margins: Object;
		set(property: "margins", value: Object): void;
		get(property: "margins"): Object;
		watch(
		property: "margins", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		theme: Object;
		set(property: "theme", value: Object): void;
		get(property: "theme"): Object;
		watch(
		property: "theme", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		fill(): any;
		get(name: any): any;
		getChildren(): any[];
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		resize(box: any): void;
		set(name: any, value: any): any;
		startup(): void;
		stroke(): any;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onFocus(): void
	}

	declare class Legend extends dijit$_WidgetBase {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		chartRef: string;
		set(property: "chartRef", value: string): void;
		get(property: "chartRef"): string;
		watch(
		property: "chartRef", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		horizontal: boolean;
		set(property: "horizontal", value: boolean): void;
		get(property: "horizontal"): boolean;
		watch(
		property: "horizontal", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		legendBody: Object;
		set(property: "legendBody", value: Object): void;
		get(property: "legendBody"): Object;
		watch(
		property: "legendBody", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		swatchSize: number;
		set(property: "swatchSize", value: number): void;
		get(property: "swatchSize"): number;
		watch(
		property: "swatchSize", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		refresh(): void;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onFocus(): void
	}

	declare class SelectableLegend extends undefined$Legend {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		chartRef: string;
		set(property: "chartRef", value: string): void;
		get(property: "chartRef"): string;
		watch(
		property: "chartRef", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		horizontal: boolean;
		set(property: "horizontal", value: boolean): void;
		get(property: "horizontal"): boolean;
		watch(
		property: "horizontal", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		legendBody: Object;
		set(property: "legendBody", value: Object): void;
		get(property: "legendBody"): Object;
		watch(
		property: "legendBody", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		outline: boolean;
		set(property: "outline", value: boolean): void;
		get(property: "outline"): boolean;
		watch(
		property: "outline", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		swatchSize: number;
		set(property: "swatchSize", value: number): void;
		get(property: "swatchSize"): number;
		watch(
		property: "swatchSize", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		transitionFill: Object;
		set(property: "transitionFill", value: Object): void;
		get(property: "transitionFill"): Object;
		watch(
		property: "transitionFill", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		transitionStroke: Object;
		set(property: "transitionStroke", value: Object): void;
		get(property: "transitionStroke"): Object;
		watch(
		property: "transitionStroke", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		refresh(): void;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onFocus(): void
	}

	
}

declare module 'plot2d' {
		declare interface common {
		defaultStats: Object,
		augmentColor(target: any, color: any): any,
		augmentFill(fill: any, color: any): any,
		augmentStroke(stroke: any, color: any): any,
		calculateBarSize(availableSize: number, opt: Object, clusterSize: number): Object,
		collectSimpleStats(series: any): any,
		collectStackedStats(series: any): any,
		curve(a: number[], tension: number): any,
		curve(a: number[], tension: String): any,
		doIfLoaded(moduleName: any, ifloaded: any, ifnotloaded: any): any,
		getLabel(number: number, fixed: boolean, precision: number): any,
		makeStroke(stroke: any): any
	}

	declare interface commonStacked {
		collectStats(series: any): any,
		getIndexValue(series: any, i: any, index: any): any[],
		getValue(series: any, i: any, x: any): any[]
	}

		declare class _PlotEvents  {
		constructor(): this;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		destroy(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		plotEvent(o: Object): void;
		raiseEvent(o: Object): void;
		resetEvents(): void
	}

	declare class Areas extends undefined$Default {
		constructor(): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		buildSegments(i: any, indexed: any): any[];
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createPath(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Bars extends undefined$CartesianBase, undefined$_PlotEvents {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createRect(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getBarProperties(): Object;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		getValue(value: any, j: any, seriesIndex: any, indexed: any): Object;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Base extends undefined$Element {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		chart: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: dojox.gfx.shape.Surface): any;
		clear(): any;
		destroy(): void;
		destroyHtmlElements(): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(): Function;
		isDataDirty(): any;
		purgeGroup(): any;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		setAxis(axis: dojox.charting.axis2d.Base): any
	}

	declare class Bubble extends undefined$CartesianBase, undefined$_PlotEvents {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Candlesticks extends undefined$CartesianBase, undefined$_PlotEvents {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		collectStats(series: dojox.charting.Series): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		tooltipFunc(o: any): String;
		toPage(coord: Object): any
	}

	declare class CartesianBase extends undefined$Base {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip?: any): void;
		clear(): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		destroy(): void;
		destroyHtmlElements(): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim?: Object, stats?: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		purgeGroup(): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class ClusteredBars extends undefined$Bars {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createRect(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getBarProperties(): Object;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		getValue(value: any, j: any, seriesIndex: any, indexed: any): Object;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class ClusteredColumns extends undefined$Columns {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createRect(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getBarProperties(): Object;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		getValue(value: any, j: any, seriesIndex: any, indexed: any): Object;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Columns extends undefined$CartesianBase, undefined$_PlotEvents {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createRect(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getBarProperties(): Object;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		getValue(value: any, j: any, seriesIndex: any, indexed: any): Object;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Default extends undefined$CartesianBase, undefined$_PlotEvents {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		buildSegments(i: any, indexed: any): any[];
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createPath(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Grid extends undefined$CartesianBase {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: any): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(): void;
		clear(): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createLine(creator: any, params: any): any;
		createRect(creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		purgeGroup(): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Indicator extends undefined$CartesianBase, undefined$_PlotEvents {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: any): void;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): void;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: any, offsets: any): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Lines extends undefined$Default {
		constructor(): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		buildSegments(i: any, indexed: any): any[];
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createPath(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Markers extends undefined$Default {
		constructor(): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		buildSegments(i: any, indexed: any): any[];
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createPath(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class MarkersOnly extends undefined$Default {
		constructor(): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		buildSegments(i: any, indexed: any): any[];
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createPath(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class OHLC extends undefined$CartesianBase, undefined$_PlotEvents {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		collectStats(series: dojox.charting.Series[]): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Pie extends undefined$Base, undefined$_PlotEvents {
		constructor(chart: any, kwArgs: any): this;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: any): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: dojox.gfx.shape.Surface): any;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): number;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(): Function;
		isDataDirty(): any;
		plotEvent(o: Object): void;
		purgeGroup(): any;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: any): any
	}

	declare class Scatter extends undefined$CartesianBase, undefined$_PlotEvents {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class Spider extends undefined$Base, undefined$_PlotEvents {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: dojox.gfx.shape.Surface): any;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(): Function;
		isDataDirty(): any;
		plotEvent(o: Object): void;
		purgeGroup(): any;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: any): any;
		tooltipFunc(o: any): any
	}

	declare class Stacked extends undefined$Default {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		buildSegments(i: any, indexed: any): any[];
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createPath(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class StackedAreas extends undefined$Stacked {
		constructor(): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		buildSegments(i: any, indexed: any): any[];
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createPath(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class StackedBars extends undefined$Bars {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createRect(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getBarProperties(): Object;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		getValue(value: any, index: any, seriesIndex: any, indexed: any): Object;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class StackedColumns extends undefined$Columns {
		constructor(chart: dojox.charting.Chart, kwArgs?: Object): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createRect(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getBarProperties(): Object;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		getValue(value: any, index: any, seriesIndex: any, indexed: any): Object;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	declare class StackedLines extends undefined$Stacked {
		constructor(): this;
		baseParams: Object;
		chart: Object;
		defaultParams: Object;
		dirty: boolean;
		group: Object;
		htmlElement: any[];
		htmlElements: Object;
		optionalParams: Object;
		addSeries(run: dojox.charting.Series): any;
		assignAxes(axes: any[]): void;
		buildSegments(i: any, indexed: any): any[];
		calculateAxes(dim: Object): any;
		cleanGroup(creator: any, noClip: any): void;
		clear(): any;
		connect(object: Object, method: String): any;
		connect(object: Object, method: Function): any;
		createLabel(group: any, value: any, bbox: any, theme: any): void;
		createPath(run: any, creator: any, params: any): any;
		destroy(): void;
		destroyHtmlElements(): void;
		events(): any;
		fireEvent(
		seriesName: String, eventName: String, index: number, eventObject: Object
	): void;
		getGroup(): any;
		getRequiredColors(): any;
		getSeriesStats(): any;
		getTextWidth(s: any, font: any): number;
		getTextWithLimitCharCount(s: String, font: String, wcLimit: number, truncated: boolean): any;
		getTextWithLimitLength(s: String, font: String, limitWidth: number, truncated: boolean): any;
		initializeScalers(dim: Object, stats: Object): any;
		isDataDirty(): any;
		isDirty(): any;
		performZoom(dim: Object, offsets: Object): any;
		plotEvent(o: Object): void;
		purgeGroup(): void;
		raiseEvent(o: Object): void;
		render(dim: Object, offsets: Object): any;
		renderLabel(
		group: any, x: any, y: any, label: any, theme: any, block: any, align: any
	): any;
		resetEvents(): void;
		setAxis(axis: dojox.charting.axis2d.Base): any;
		toData(coord: Object): any;
		toPage(coord: Object): any
	}

	
}

declare module 'plot3d' {
				declare class Bars extends undefined$Base {
		constructor(width: any, height: any, kwArgs: any): this;
		generate(chart: any, creator: any): Function;
		getDepth(): any;
		setData(data: any): Function
	}

	declare class Base  {
		constructor(width: any, height: any, kwArgs: any): this;
		generate(chart: any, creator: any): void;
		getDepth(): any;
		setData(data: any): Function
	}

	declare class Cylinders extends undefined$Base {
		constructor(width: any, height: any, kwArgs: any): this;
		generate(chart: any, creator: any): Function;
		getDepth(): any;
		setData(data: any): Function
	}

	
}

declare module 'scaler' {
		declare interface common {
		doIfLoaded(moduleName: any, ifloaded: any, ifnotloaded: any): any,
		getNumericLabel(number: number, precision: number, kwArgs: Object): any
	}

	declare interface linear {
		buildScaler(
		min: number, max: number, span: number, kwArgs: Object, delta: number, minorDelta: number
	): any,
		buildTicks(scaler: Object, kwArgs: Object): any,
		getTransformerFromModel(scaler: Object): Function,
		getTransformerFromPlot(scaler: Object): Function
	}

	declare interface primitive {
		buildScaler(min: number, max: number, span: number, kwArgs: Object): Object,
		buildTicks(scaler: Object, kwArgs: Object): Object,
		getTransformerFromModel(scaler: Object): Function,
		getTransformerFromPlot(scaler: Object): Function
	}

			
}

declare module 'PlotKit' {
		declare interface base {
		Adobebricks: Object,
		Algae: Object,
		Bahamation: Object,
		base: Object,
		blue: Object,
		BlueDusk: Object,
		Charged: Object,
		Chris: Object,
		Claro: Object,
		CubanShirts: Object,
		cyan: Object,
		Desert: Object,
		Distinctive: Object,
		Dollar: Object,
		Electric: Object,
		Grasshopper: Object,
		Grasslands: Object,
		green: Object,
		GreySkies: Object,
		Harmony: Object,
		IndigoNation: Object,
		Ireland: Object,
		Julie: Object,
		MiamiNice: Object,
		Midwest: Object,
		Minty: Object,
		orange: Object,
		PrimaryColors: Object,
		purple: Object,
		PurpleRain: Object,
		red: Object,
		Renkoo: Object,
		RoyalPurples: Object,
		SageToLime: Object,
		Shrooms: Object,
		Tom: Object,
		Tufte: Object,
		WatersEdge: Object,
		Wetland: Object,
		generateFills(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number): void,
		generateGradientByIntensity(color: dojo._base.Color, intensityMap: any[]): void,
		generateMiniTheme(
		colors: any[], fillPattern: Object, lumFrom: number, lumTo: number, lumStroke: number
	): void,
		updateFills(themes: any[], fillPattern: Object, lumFrom: number, lumTo: number): void
	}

			
}

declare module 'themes' {
		declare interface common {
		Adobebricks: Object,
		Algae: Object,
		Bahamation: Object,
		base: Object,
		blue: Object,
		BlueDusk: Object,
		Charged: Object,
		Chris: Object,
		Claro: Object,
		CubanShirts: Object,
		cyan: Object,
		Desert: Object,
		Distinctive: Object,
		Dollar: Object,
		Electric: Object,
		Grasshopper: Object,
		Grasslands: Object,
		green: Object,
		GreySkies: Object,
		Harmony: Object,
		IndigoNation: Object,
		Ireland: Object,
		Julie: Object,
		MiamiNice: Object,
		Midwest: Object,
		Minty: Object,
		orange: Object,
		PrimaryColors: Object,
		purple: Object,
		PurpleRain: Object,
		red: Object,
		Renkoo: Object,
		RoyalPurples: Object,
		SageToLime: Object,
		Shrooms: Object,
		Tom: Object,
		Tufte: Object,
		WatersEdge: Object,
		Wetland: Object,
		generateFills(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number): void,
		generateGradientByIntensity(color: dojo._base.Color, intensityMap: any[]): void,
		generateMiniTheme(
		colors: any[], fillPattern: Object, lumFrom: number, lumTo: number, lumStroke: number
	): void,
		updateFills(themes: any[], fillPattern: Object, lumFrom: number, lumTo: number): void
	}

	declare interface gradientGenerator {
		Adobebricks: Object,
		Algae: Object,
		Bahamation: Object,
		base: Object,
		blue: Object,
		BlueDusk: Object,
		Charged: Object,
		Chris: Object,
		Claro: Object,
		CubanShirts: Object,
		cyan: Object,
		Desert: Object,
		Distinctive: Object,
		Dollar: Object,
		Electric: Object,
		Grasshopper: Object,
		Grasslands: Object,
		green: Object,
		GreySkies: Object,
		Harmony: Object,
		IndigoNation: Object,
		Ireland: Object,
		Julie: Object,
		MiamiNice: Object,
		Midwest: Object,
		Minty: Object,
		orange: Object,
		PrimaryColors: Object,
		purple: Object,
		PurpleRain: Object,
		red: Object,
		Renkoo: Object,
		RoyalPurples: Object,
		SageToLime: Object,
		Shrooms: Object,
		Tom: Object,
		Tufte: Object,
		WatersEdge: Object,
		Wetland: Object,
		generateFills(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number): void,
		generateGradientByIntensity(color: dojo._base.Color, intensityMap: any[]): void,
		generateMiniTheme(
		colors: any[], fillPattern: Object, lumFrom: number, lumTo: number, lumStroke: number
	): void,
		updateFills(themes: any[], fillPattern: Object, lumFrom: number, lumTo: number): void
	}

			
}

declare module 'dojox/charting/Chart3D' {
					declare module.exports: Chart3D


}

declare module 'dojox/charting/Chart2D' {
					declare module.exports: Chart2D


}

declare module 'dojox/charting/DataSeries' {
					declare module.exports: DataSeries


}

declare module 'dojox/charting/Chart' {
					declare module.exports: Chart


}

declare module 'dojox/charting/DataChart' {
					declare module.exports: DataChart


}

declare module 'dojox/charting/Element' {
					declare module.exports: Element


}

declare module 'dojox/charting/Series' {
					declare module.exports: Series


}

declare module 'dojox/charting/StoreSeries' {
					declare module.exports: StoreSeries


}

declare module 'dojox/charting/SimpleTheme' {
					declare module.exports: SimpleTheme


}

declare module 'dojox/charting/SimpleTheme.defaultMarkers' {
					declare module.exports: defaultMarkers


}

declare module 'dojox/charting/SimpleTheme.defaultTheme' {
					declare module.exports: defaultTheme


}

declare module 'dojox/charting/Theme' {
					declare module.exports: Theme


}

declare module 'dojox/charting/Theme.defaultMarkers' {
					declare module.exports: defaultMarkers


}

declare module 'dojox/charting/Theme.defaultTheme' {
					declare module.exports: defaultTheme


}

declare module 'dojox/charting/action2d/Base' {
					declare module.exports: Base


}

declare module 'dojox/charting/action2d/ChartAction' {
					declare module.exports: ChartAction


}

declare module 'dojox/charting/action2d/_IndicatorElement' {
					declare module.exports: _IndicatorElement


}

declare module 'dojox/charting/action2d/Highlight' {
					declare module.exports: Highlight


}

declare module 'dojox/charting/action2d/Magnify' {
					declare module.exports: Magnify


}

declare module 'dojox/charting/action2d/MouseZoomAndPan' {
					declare module.exports: MouseZoomAndPan


}

declare module 'dojox/charting/action2d/MouseIndicator' {
					declare module.exports: MouseIndicator


}

declare module 'dojox/charting/action2d/MoveSlice' {
					declare module.exports: MoveSlice


}

declare module 'dojox/charting/action2d/PlotAction' {
					declare module.exports: PlotAction


}

declare module 'dojox/charting/action2d/Tooltip' {
					declare module.exports: Tooltip


}

declare module 'dojox/charting/action2d/Shake' {
					declare module.exports: Shake


}

declare module 'dojox/charting/action2d/TouchZoomAndPan' {
					declare module.exports: TouchZoomAndPan


}

declare module 'dojox/charting/action2d/TouchIndicator' {
					declare module.exports: TouchIndicator


}

declare module 'dojox/charting/axis2d/common' {
					declare module.exports: common


}

declare module 'dojox/charting/axis2d/common.createText' {
					declare module.exports: createText


}

declare module 'dojox/charting/axis2d/Base' {
					declare module.exports: Base


}

declare module 'dojox/charting/axis2d/Invisible' {
					declare module.exports: Invisible


}

declare module 'dojox/charting/axis2d/Default' {
					declare module.exports: Default


}

declare module 'dojox/charting/bidi/_bidiutils' {
					declare module.exports: _bidiutils


}

declare module 'dojox/charting/bidi/Chart' {
					declare module.exports: Chart


}

declare module 'dojox/charting/bidi/Chart3D' {
					declare module.exports: Chart3D


}

declare module 'dojox/charting/bidi/action2d/Tooltip' {
					declare module.exports: Tooltip


}

declare module 'dojox/charting/bidi/action2d/ZoomAndPan' {
					declare module.exports: ZoomAndPan


}

declare module 'dojox/charting/bidi/axis2d/Default' {
					declare module.exports: Default


}

declare module 'dojox/charting/bidi/widget/Chart' {
					declare module.exports: Chart


}

declare module 'dojox/charting/bidi/widget/Legend' {
					declare module.exports: Legend


}

declare module 'dojox/charting/plot2d/common' {
					declare module.exports: common


}

declare module 'dojox/charting/plot2d/common.defaultStats' {
					declare module.exports: defaultStats


}

declare module 'dojox/charting/plot2d/commonStacked' {
					declare module.exports: commonStacked


}

declare module 'dojox/charting/plot2d/_PlotEvents' {
					declare module.exports: _PlotEvents


}

declare module 'dojox/charting/plot2d/Areas' {
					declare module.exports: Areas


}

declare module 'dojox/charting/plot2d/Bars' {
					declare module.exports: Bars


}

declare module 'dojox/charting/plot2d/Base' {
					declare module.exports: Base


}

declare module 'dojox/charting/plot2d/Bubble' {
					declare module.exports: Bubble


}

declare module 'dojox/charting/plot2d/CartesianBase' {
					declare module.exports: CartesianBase


}

declare module 'dojox/charting/plot2d/Candlesticks' {
					declare module.exports: Candlesticks


}

declare module 'dojox/charting/plot2d/ClusteredBars' {
					declare module.exports: ClusteredBars


}

declare module 'dojox/charting/plot2d/ClusteredColumns' {
					declare module.exports: ClusteredColumns


}

declare module 'dojox/charting/plot2d/Columns' {
					declare module.exports: Columns


}

declare module 'dojox/charting/plot2d/Grid' {
					declare module.exports: Grid


}

declare module 'dojox/charting/plot2d/Default' {
					declare module.exports: Default


}

declare module 'dojox/charting/plot2d/Indicator' {
					declare module.exports: Indicator


}

declare module 'dojox/charting/plot2d/Lines' {
					declare module.exports: Lines


}

declare module 'dojox/charting/plot2d/Markers' {
					declare module.exports: Markers


}

declare module 'dojox/charting/plot2d/Pie' {
					declare module.exports: Pie


}

declare module 'dojox/charting/plot2d/MarkersOnly' {
					declare module.exports: MarkersOnly


}

declare module 'dojox/charting/plot2d/OHLC' {
					declare module.exports: OHLC


}

declare module 'dojox/charting/plot2d/Scatter' {
					declare module.exports: Scatter


}

declare module 'dojox/charting/plot2d/Stacked' {
					declare module.exports: Stacked


}

declare module 'dojox/charting/plot2d/Spider' {
					declare module.exports: Spider


}

declare module 'dojox/charting/plot2d/StackedAreas' {
					declare module.exports: StackedAreas


}

declare module 'dojox/charting/plot2d/StackedBars' {
					declare module.exports: StackedBars


}

declare module 'dojox/charting/plot2d/StackedColumns' {
					declare module.exports: StackedColumns


}

declare module 'dojox/charting/plot2d/StackedLines' {
					declare module.exports: StackedLines


}

declare module 'dojox/charting/plot3d/Bars' {
					declare module.exports: Bars


}

declare module 'dojox/charting/plot3d/Base' {
					declare module.exports: Base


}

declare module 'dojox/charting/plot3d/Cylinders' {
					declare module.exports: Cylinders


}

declare module 'dojox/charting/scaler/common' {
					declare module.exports: common


}

declare module 'dojox/charting/scaler/primitive' {
					declare module.exports: primitive


}

declare module 'dojox/charting/scaler/linear' {
					declare module.exports: linear


}

declare module 'dojox/charting/themes/common' {
					declare module.exports: common


}

declare module 'dojox/charting/themes/gradientGenerator' {
					declare module.exports: gradientGenerator


}

declare module 'dojox/charting/themes/PlotKit/base' {
					declare module.exports: base


}

declare module 'dojox/charting/widget/Chart2D' {
					declare module.exports: Chart2D


}

declare module 'dojox/charting/widget/Chart' {
					declare module.exports: Chart


}

declare module 'dojox/charting/widget/Legend' {
					declare module.exports: Legend


}

declare module 'dojox/charting/widget/SelectableLegend' {
					declare module.exports: SelectableLegend


}
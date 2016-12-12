

declare module 'plottable' {
					
}

declare module 'Math' {
			declare function inRange(x: number, a: number, b: number): boolean

	declare function clamp(x: number, min: number, max: number): number

	declare function max<C>(array: C[], defaultValue: C): C

	declare function max<T, C>(array: T[], accessor: (t?: T, i?: number) => C, defaultValue: C): C

	declare function min<C>(array: C[], defaultValue: C): C

	declare function min<T, C>(array: T[], accessor: (t?: T, i?: number) => C, defaultValue: C): C

	declare function isNaN(n: any): boolean

	declare function isValidNumber(n: any): boolean

	declare function range(start: number, stop: number, step?: number): number[]

	declare function distanceSquared(p1: Point, p2: Point): number

		
}

declare module 'Utils' {
				declare class Map<K, V>  {
		constructor(): this;
		set(key: K, value: V): Map<K, V>;
		get(key: K): V;
		has(key: K): boolean;
		forEach(callbackFn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
		delete(key: K): boolean
	}

	declare class Set<T>  {
		size: number;
		constructor(): this;
		add(value: T): Set<T>;
		delete(value: T): boolean;
		has(value: T): boolean;
		forEach(callback: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void
	}

	declare class CallbackSet<CB> extends Set<CB> {
		callCallbacks(...args: any[]): CallbackSet<CB>
	}

	declare class ClientToSVGTranslator  {
		getTranslator(elem: SVGElement): ClientToSVGTranslator;
		constructor(svg: SVGElement): this;
		computePosition(clientX: number, clientY: number): Point;
		insideSVG(e: Event): boolean
	}

	
}

declare module 'DOM' {
			declare function elementBBox(element: d3.Selection<any>): SVGRect

	declare function requestAnimationFramePolyfill(callback: () => void): void

	declare function elementWidth(element: Element): number

	declare function elementHeight(element: Element): number

	declare function translate(selection: d3.Selection<any>): [number, number]

	declare function translate(selection: d3.Selection<any>, x: number, y: number): d3.Selection<any>

	declare function clientRectsOverlap(clientRectA: ClientRect, clientRectB: ClientRect): boolean

	declare function clientRectInside(innerClientRect: ClientRect, outerClientRect: ClientRect): boolean

	declare function boundingSVG(element: SVGElement): SVGElement

	declare function generateUniqueClipPathId(): string

	declare function intersectsBBox(
		xValOrRange: number | Range, yValOrRange: number | Range, bbox: SVGRect, tolerance?: number
	): boolean

		
}

declare module 'Color' {
			declare function contrast(a: string, b: string): number

	declare function lightenColor(color: string, factor: number): string

	declare function colorTest(colorTester: d3.Selection<void>, className: string): string

		
}

declare module 'Array' {
			declare function add(aList: number[], bList: number[]): number[]

	declare function uniq<T>(arr: T[]): T[]

	declare function flatten<T>(a: T[][]): T[]

	declare function createFilledArray<T>(value: T | ((index?: number) => T), count: number): T[]

		
}

declare module 'Stacking' {
	declare type StackedDatum = {
		value: number,
		offset: number
	};

	declare type StackingResult = Utils.Map<Dataset, Utils.Map<string, StackedDatum>>;

		declare function stack(
		datasets: Dataset[], keyAccessor: Accessor<any>, valueAccessor: Accessor<number>
	): StackingResult

	declare function stackedExtent(
		stackingResult: StackingResult, keyAccessor: Accessor<any>, filter: Accessor<boolean>
	): number[]

	declare function normalizeKey(key: any): string

		
}

declare module 'Window' {
			declare function warn(warning: string): void

	declare function setTimeout(f: Function, time: number, ...args: any[]): number

	declare function deprecated(callingMethod: string, version: string, message?: string): void

		
}

declare module 'npm$namespace$Plottable' {
	declare type DatasetCallback = (dataset: Dataset) => void;

	declare type Projector = (datum: any, index: number, dataset: Dataset) => any;

	declare type AttributeToProjector = {
		[attr: string]: Projector
	};

	declare type AppliedProjector = (datum: any, index: number) => any;

	declare type AttributeToAppliedProjector = {
		[attr: string]: AppliedProjector
	};

	declare type SpaceRequest = {
		minWidth: number,
		minHeight: number
	};

	declare type Range = {
		min: number,
		max: number
	};

	declare type Point = {
		x: number,
		y: number
	};

	declare type Bounds = {
		topLeft: Point,
		bottomRight: Point
	};

	declare type Formatter = (d: any) => string;

	declare type SymbolFactory = (symbolSize: number) => string;

	declare type ComponentCallback = (component: Component) => void;

	declare type ClickCallback = (point: Point) => void;

	declare type KeyCallback = (keyCode: number) => void;

	declare type PointerCallback = (point: Point) => void;

	declare type DragCallback = (start: Point, end: Point) => void;

	declare type DragBoxCallback = (bounds: Bounds) => void;

	declare interface Accessor<T> {
		(datum: any, index: number, dataset: Dataset): T
	}

	declare interface Entity<C> {
		datum: any,
		position: Point,
		selection: d3.Selection<any>,
		component: C
	}

	declare interface ScaleCallback<S> {
		(scale: S): any
	}

	declare interface Animator {
		animate(
		selection: d3.Selection<any>, attrToAppliedProjector: AttributeToAppliedProjector
	): d3.Selection<any> | d3.Transition<any>,
		totalTime(numberOfIterations: number): number
	}

		declare class Dataset  {
		constructor(data?: any[], metadata?: any): this;
		onUpdate(callback: DatasetCallback): Dataset;
		offUpdate(callback: DatasetCallback): Dataset;
		data(): any[];
		data(data: any[]): Dataset;
		metadata(): any;
		metadata(metadata: any): Dataset
	}

	declare class Scale<D, R>  {
		constructor(): this;
		extentOfValues(values: D[]): D[];
		_getAllIncludedValues(): D[];
		_getExtent(): D[];
		onUpdate(callback: ScaleCallback<Scale<D, R>>): Scale<D, R>;
		offUpdate(callback: ScaleCallback<Scale<D, R>>): Scale<D, R>;
		_dispatchUpdate(): void;
		autoDomain(): Scale<D, R>;
		_autoDomainIfAutomaticMode(): void;
		scale(value: D): R;
		domain(): D[];
		domain(values: D[]): Scale<D, R>;
		_getDomain(): void;
		_setDomain(values: D[]): void;
		_setBackingScaleDomain(values: D[]): void;
		range(): R[];
		range(values: R[]): Scale<D, R>;
		_getRange(): void;
		_setRange(values: R[]): void;
		addIncludedValuesProvider(provider: Scales.IncludedValuesProvider<D>): Scale<D, R>;
		removeIncludedValuesProvider(provider: Scales.IncludedValuesProvider<D>): Scale<D, R>
	}

	declare class QuantitativeScale<D> extends Scale<D, number> {
		_DEFAULT_NUM_TICKS: number;
		constructor(): this;
		autoDomain(): QuantitativeScale<D>;
		_autoDomainIfAutomaticMode(): void;
		_getExtent(): D[];
		addPaddingExceptionsProvider(provider: Scales.PaddingExceptionsProvider<D>): QuantitativeScale<D>;
		removePaddingExceptionsProvider(provider: Scales.PaddingExceptionsProvider<D>): QuantitativeScale<D>;
		padProportion(): number;
		padProportion(padProportion: number): QuantitativeScale<D>;
		_expandSingleValueDomain(singleValueDomain: D[]): D[];
		invert(value: number): D;
		domain(): D[];
		domain(values: D[]): QuantitativeScale<D>;
		domainMin(): D;
		domainMin(domainMin: D): QuantitativeScale<D>;
		domainMax(): D;
		domainMax(domainMax: D): QuantitativeScale<D>;
		extentOfValues(values: D[]): D[];
		_setDomain(values: D[]): void;
		defaultTicks(): D[];
		ticks(): D[];
		_niceDomain(domain: D[], count?: number): D[];
		_defaultExtent(): D[];
		tickGenerator(): Scales.TickGenerators.TickGenerator<D>;
		tickGenerator(generator: Scales.TickGenerators.TickGenerator<D>): QuantitativeScale<D>
	}

	declare class Drawer  {
		_svgElementName: string;
		_className: string;
		constructor(dataset: Dataset): this;
		renderArea(): d3.Selection<void>;
		renderArea(area: d3.Selection<void>): Drawer;
		remove(): void;
		_applyDefaultAttributes(selection: d3.Selection<any>): void;
		totalDrawTime(data: any[], drawSteps: Drawers.DrawStep[]): number;
		draw(data: any[], drawSteps: Drawers.DrawStep[]): Drawer;
		selection(): d3.Selection<any>;
		selector(): string;
		selectionForIndex(index: number): d3.Selection<any>
	}

	declare class Component  {
		_boundingBox: d3.Selection<void>;
		_clipPathEnabled: boolean;
		_isSetup: boolean;
		_isAnchored: boolean;
		constructor(): this;
		anchor(selection: d3.Selection<void>): Component;
		onAnchor(callback: ComponentCallback): Component;
		offAnchor(callback: ComponentCallback): Component;
		_setup(): void;
		requestedSpace(availableWidth: number, availableHeight: number): SpaceRequest;
		computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Component;
		_sizeFromOffer(
		availableWidth: number, availableHeight: number
	): {
		width: number,
		height: number
	};
		render(): Component;
		renderImmediately(): Component;
		redraw(): Component;
		renderTo(element: String | d3.Selection<void>): Component;
		xAlignment(): string;
		xAlignment(xAlignment: string): Component;
		yAlignment(): string;
		yAlignment(yAlignment: string): Component;
		hasClass(cssClass: string): boolean;
		addClass(cssClass: string): Component;
		removeClass(cssClass: string): Component;
		fixedWidth(): boolean;
		fixedHeight(): boolean;
		detach(): Component;
		onDetach(callback: ComponentCallback): Component;
		offDetach(callback: ComponentCallback): Component;
		parent(): ComponentContainer;
		parent(parent: ComponentContainer): Component;
		destroy(): void;
		width(): number;
		height(): number;
		origin(): Point;
		originToSVG(): Point;
		foreground(): d3.Selection<void>;
		content(): d3.Selection<void>;
		background(): d3.Selection<void>
	}

	declare class ComponentContainer extends Component {
		constructor(): this;
		anchor(selection: d3.Selection<void>): ComponentContainer;
		render(): ComponentContainer;
		has(component: Component): boolean;
		_adoptAndAnchor(component: Component): void;
		remove(component: Component): ComponentContainer;
		_remove(component: Component): boolean;
		_forEach(callback: (component: Component) => void): void;
		destroy(): void
	}

	declare class Axis<D> extends Component {
		END_TICK_MARK_CLASS: string;
		TICK_MARK_CLASS: string;
		TICK_LABEL_CLASS: string;
		_tickMarkContainer: d3.Selection<void>;
		_tickLabelContainer: d3.Selection<void>;
		_baseline: d3.Selection<void>;
		_scale: Scale<D, number>;
		_computedWidth: number;
		_computedHeight: number;
		constructor(scale: Scale<D, number>, orientation: string): this;
		destroy(): void;
		_isHorizontal(): boolean;
		_computeWidth(): number;
		_computeHeight(): number;
		requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
		fixedHeight(): boolean;
		fixedWidth(): boolean;
		_rescale(): void;
		computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Axis<D>;
		_setup(): void;
		_getTickValues(): D[];
		renderImmediately(): Axis<D>;
		_generateBaselineAttrHash(): {
		[key: string]: number
	};
		_generateTickMarkAttrHash(isEndTickMark?: boolean): {
		[key: string]: number | ((d: any) => number)
	};
		redraw(): Component;
		_setDefaultAlignment(): void;
		formatter(): Formatter;
		formatter(formatter: Formatter): Axis<D>;
		tickLength(): number;
		tickLength(length: number): Axis<D>;
		innerTickLength(): number;
		innerTickLength(length: number): Axis<D>;
		endTickLength(): number;
		endTickLength(length: number): Axis<D>;
		_maxLabelTickLength(): number;
		tickLabelPadding(): number;
		tickLabelPadding(padding: number): Axis<D>;
		margin(): number;
		margin(size: number): Axis<D>;
		orientation(): string;
		orientation(orientation: string): Axis<D>;
		showEndTickLabels(): boolean;
		showEndTickLabels(show: boolean): Axis<D>
	}

	declare class Plot extends Component {
		_ANIMATION_MAX_DURATION: number;
		_renderArea: d3.Selection<void>;
		_renderCallback: ScaleCallback<Scale<any, any>>;
		_propertyExtents: d3.Map<any[]>;
		_propertyBindings: d3.Map<Plots.AccessorScaleBinding<any, any>>;
		constructor(): this;
		anchor(selection: d3.Selection<void>): Plot;
		_setup(): void;
		destroy(): void;
		addDataset(dataset: Dataset): Plot;
		_createNodesForDataset(dataset: Dataset): Drawer;
		_createDrawer(dataset: Dataset): Drawer;
		_getAnimator(key: string): Animator;
		_onDatasetUpdate(): void;
		attr<A>(attr: string): Plots.AccessorScaleBinding<A, number | string>;
		attr(
		attr: string, attrValue: number | string | Accessor<number> | Accessor<string>
	): Plot;
		attr<A>(
		attr: string, attrValue: A | Accessor<A>, scale: Scale<A, number | string>
	): Plot;
		_bindProperty(property: string, value: any, scale: Scale<any, any>): void;
		_generateAttrToProjector(): AttributeToProjector;
		renderImmediately(): Plot;
		animated(): boolean;
		animated(willAnimate: boolean): Plot;
		detach(): Plot;
		_updateExtents(): void;
		_updateExtentsForProperty(property: string): void;
		_filterForProperty(property: string): Accessor<boolean>;
		_extentsForProperty(property: string): any[];
		animator(animatorKey: string): Animator;
		animator(animatorKey: string, animator: Animator): Plot;
		removeDataset(dataset: Dataset): Plot;
		_removeDatasetNodes(dataset: Dataset): void;
		datasets(): Dataset[];
		datasets(datasets: Dataset[]): Plot;
		_getDrawersInOrder(): Drawer[];
		_generateDrawSteps(): Drawers.DrawStep[];
		_additionalPaint(time: number): void;
		_getDataToDraw(): Utils.Map<Dataset, any[]>;
		selections(datasets?: Dataset[]): d3.Selection<any>;
		entities(datasets?: Dataset[]): Plots.PlotEntity[];
		entityNearest(queryPoint: Point): Plots.PlotEntity;
		_visibleOnPlot(datum: any, pixelPoint: Point, selection: d3.Selection<void>): boolean;
		_entityVisibleOnPlot(pixelPoint: Point, datum: any, index: number, dataset: Dataset): boolean;
		_uninstallScaleForKey(scale: Scale<any, any>, key: string): void;
		_installScaleForKey(scale: Scale<any, any>, key: string): void;
		_propertyProjectors(): AttributeToProjector;
		_scaledAccessor<D, R>(binding: Plots.AccessorScaleBinding<D, R>): Accessor<any>;
		_pixelPoint(datum: any, index: number, dataset: Dataset): Point;
		_animateOnNextRender(): boolean
	}

	declare class XYPlot<X, Y> extends Plot {
		_X_KEY: string;
		_Y_KEY: string;
		constructor(): this;
		deferredRendering(): boolean;
		deferredRendering(deferredRendering: boolean): XYPlot<X, Y>;
		x(): Plots.AccessorScaleBinding<X, number>;
		x(x: number | Accessor<number>): XYPlot<X, Y>;
		x(x: X | Accessor<X>, xScale: Scale<X, number>): XYPlot<X, Y>;
		y(): Plots.AccessorScaleBinding<Y, number>;
		y(y: number | Accessor<number>): XYPlot<X, Y>;
		y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): XYPlot<X, Y>;
		_filterForProperty(property: string): (datum: any, index: number, dataset: Dataset) => boolean;
		_uninstallScaleForKey(scale: Scale<any, any>, key: string): void;
		_installScaleForKey(scale: Scale<any, any>, key: string): void;
		destroy(): XYPlot<X, Y>;
		autorangeMode(): string;
		autorangeMode(autorangeMode: string): XYPlot<X, Y>;
		computeLayout(
		origin?: Point, availableWidth?: number, availableHeight?: number
	): XYPlot<X, Y>;
		showAllData(): XYPlot<X, Y>;
		_projectorsReady(): boolean;
		_pixelPoint(datum: any, index: number, dataset: Dataset): Point;
		_getDataToDraw(): Utils.Map<Dataset, any[]>
	}

	declare class Dispatcher  {
		_eventToCallback: {
		[eventName: string]: (e: Event) => any
	};
		_callbacks: Utils.CallbackSet<Function>[];
		_setCallback(callbackSet: Utils.CallbackSet<Function>, callback: Function): void;
		_unsetCallback(callbackSet: Utils.CallbackSet<Function>, callback: Function): void
	}

	declare class Interaction  {
		_componentAttachedTo: Component;
		_anchor(component: Component): void;
		_unanchor(): void;
		attachTo(component: Component): Interaction;
		detachFrom(component: Component): Interaction;
		enabled(): boolean;
		enabled(enabled: boolean): Interaction;
		_translateToComponentSpace(p: Point): Point;
		_isInsideComponent(p: Point): boolean
	}

	
}

declare module 'RenderPolicies' {
		declare interface RenderPolicy {
		render(): any
	}

		declare class Immediate extends RenderPolicy {
		render(): void
	}

	declare class AnimationFrame extends RenderPolicy {
		render(): void
	}

	declare class Timeout extends RenderPolicy {
		render(): void
	}

	
}

declare module 'RenderController' {
			declare function renderPolicy(): RenderPolicies.RenderPolicy

	declare function renderPolicy(renderPolicy: string): void

	declare function registerToRender(component: Component): void

	declare function registerToComputeLayout(component: Component): void

	declare function flush(): void

		
}

declare module 'Formatters' {
			declare function currency(precision?: number, symbol?: string, prefix?: boolean): (d: any) => string

	declare function fixed(precision?: number): (d: any) => string

	declare function general(precision?: number): (d: any) => string

	declare function identity(): (d: any) => string

	declare function percentage(precision?: number): (d: any) => string

	declare function siSuffix(precision?: number): (d: any) => string

	declare function multiTime(): (d: any) => string

	declare function time(specifier: string): Formatter

	declare function relativeDate(baseValue?: number, increment?: number, label?: string): (d: any) => string

		
}

declare module 'SymbolFactories' {
			declare function circle(): SymbolFactory

	declare function square(): SymbolFactory

	declare function cross(): SymbolFactory

	declare function diamond(): SymbolFactory

	declare function triangleUp(): SymbolFactory

	declare function triangleDown(): SymbolFactory

		
}

declare module 'Scales' {
		declare interface IncludedValuesProvider<D> {
		(scale: Scale<D, any>): D[]
	}

	declare interface PaddingExceptionsProvider<D> {
		(scale: QuantitativeScale<D>): D[]
	}

		declare class Linear extends QuantitativeScale<number> {
		constructor(): this;
		_defaultExtent(): number[];
		_expandSingleValueDomain(singleValueDomain: number[]): number[];
		scale(value: number): number;
		_getDomain(): number[];
		_setBackingScaleDomain(values: number[]): void;
		_getRange(): number[];
		_setRange(values: number[]): void;
		invert(value: number): number;
		defaultTicks(): number[];
		_niceDomain(domain: number[], count?: number): number[]
	}

	declare class ModifiedLog extends QuantitativeScale<number> {
		constructor(base?: number): this;
		scale(x: number): number;
		invert(x: number): number;
		_getDomain(): number[];
		_setDomain(values: number[]): void;
		_setBackingScaleDomain(values: number[]): void;
		ticks(): number[];
		_niceDomain(domain: number[], count?: number): number[];
		_defaultExtent(): number[];
		_expandSingleValueDomain(singleValueDomain: number[]): number[];
		_getRange(): number[];
		_setRange(values: number[]): void;
		defaultTicks(): number[]
	}

	declare class Category extends Scale<string, number> {
		constructor(): this;
		extentOfValues(values: string[]): string[];
		_getExtent(): string[];
		domain(): string[];
		domain(values: string[]): Category;
		_setDomain(values: string[]): void;
		range(): [number, number];
		range(values: [number, number]): Category;
		rangeBand(): number;
		stepWidth(): number;
		innerPadding(): number;
		innerPadding(innerPadding: number): Category;
		outerPadding(): number;
		outerPadding(outerPadding: number): Category;
		scale(value: string): number;
		_getDomain(): string[];
		_setBackingScaleDomain(values: string[]): void;
		_getRange(): number[];
		_setRange(values: number[]): void
	}

	declare class Color extends Scale<string, string> {
		constructor(scaleType?: string): this;
		extentOfValues(values: string[]): string[];
		_getExtent(): string[];
		invalidateColorCache(): void;
		scale(value: string): string;
		_getDomain(): string[];
		_setBackingScaleDomain(values: string[]): void;
		_getRange(): string[];
		_setRange(values: string[]): void
	}

	declare class Time extends QuantitativeScale<Date> {
		constructor(): this;
		tickInterval(interval: string, step?: number): Date[];
		_setDomain(values: Date[]): void;
		_defaultExtent(): Date[];
		_expandSingleValueDomain(singleValueDomain: Date[]): Date[];
		scale(value: Date): number;
		_getDomain(): Date[];
		_setBackingScaleDomain(values: Date[]): void;
		_getRange(): number[];
		_setRange(values: number[]): void;
		invert(value: number): Date;
		defaultTicks(): Date[];
		_niceDomain(domain: Date[]): Date[];
		timeIntervalToD3Time(timeInterval: string): d3.time.Interval
	}

	declare class InterpolatedColor extends Scale<number, string> {
		REDS: string[];
		BLUES: string[];
		POSNEG: string[];
		constructor(scaleType?: string): this;
		extentOfValues(values: number[]): number[];
		autoDomain(): InterpolatedColor;
		scale(value: number): string;
		_getDomain(): number[];
		_setBackingScaleDomain(values: number[]): void;
		_getRange(): string[];
		_setRange(range: string[]): void
	}

	
}

declare module 'TickGenerators' {
		declare interface TickGenerator<D> {
		(scale: Plottable.QuantitativeScale<D>): D[]
	}

	declare function intervalTickGenerator(interval: number): TickGenerator<number>

	declare function integerTickGenerator(): TickGenerator<number>

		
}

declare module 'Drawers' {
	declare type DrawStep = {
		attrToProjector: AttributeToProjector,
		animator: Animator
	};

	declare type AppliedDrawStep = {
		attrToAppliedProjector: AttributeToAppliedProjector,
		animator: Animator
	};

			declare class Line extends Drawer {
		constructor(dataset: Dataset): this;
		_applyDefaultAttributes(selection: d3.Selection<any>): void;
		selectionForIndex(index: number): d3.Selection<any>
	}

	declare class Area extends Drawer {
		constructor(dataset: Dataset): this;
		_applyDefaultAttributes(selection: d3.Selection<any>): void;
		selectionForIndex(index: number): d3.Selection<any>
	}

	declare class Rectangle extends Drawer {
		constructor(dataset: Dataset): this
	}

	declare class Arc extends Drawer {
		constructor(dataset: Dataset): this
	}

	declare class Symbol extends Drawer {
		constructor(dataset: Dataset): this
	}

	declare class Segment extends Drawer {
		constructor(dataset: Dataset): this
	}

	
}

declare module 'Components' {
				declare class Alignment  {
		TOP: string;
		BOTTOM: string;
		LEFT: string;
		RIGHT: string;
		CENTER: string
	}

	declare class Group extends ComponentContainer {
		constructor(components?: Component[]): this;
		_forEach(callback: (component: Component) => any): void;
		has(component: Component): boolean;
		requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
		computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Group;
		_sizeFromOffer(
		availableWidth: number, availableHeight: number
	): {
		width: number,
		height: number
	};
		fixedWidth(): boolean;
		fixedHeight(): boolean;
		components(): Component[];
		append(component: Component): Group;
		_remove(component: Component): boolean
	}

	declare class Label extends Component {
		constructor(displayText?: string, angle?: number): this;
		requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
		_setup(): void;
		text(): string;
		text(displayText: string): Label;
		angle(): number;
		angle(angle: number): Label;
		padding(): number;
		padding(padAmount: number): Label;
		fixedWidth(): boolean;
		fixedHeight(): boolean;
		renderImmediately(): Label
	}

	declare class TitleLabel extends Label {
		TITLE_LABEL_CLASS: string;
		constructor(text?: string, angle?: number): this
	}

	declare class AxisLabel extends Label {
		AXIS_LABEL_CLASS: string;
		constructor(text?: string, angle?: number): this
	}

	declare class Legend extends Component {
		LEGEND_ROW_CLASS: string;
		LEGEND_ENTRY_CLASS: string;
		LEGEND_SYMBOL_CLASS: string;
		constructor(colorScale: Scales.Color): this;
		_setup(): void;
		maxEntriesPerRow(): number;
		maxEntriesPerRow(maxEntriesPerRow: number): Legend;
		comparator(): (a: string, b: string) => number;
		comparator(comparator: (a: string, b: string) => number): Legend;
		colorScale(): Scales.Color;
		colorScale(colorScale: Scales.Color): Legend;
		destroy(): void;
		requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
		entitiesAt(p: Point): Entity<Legend>[];
		renderImmediately(): Legend;
		symbol(): (datum: any, index: number) => SymbolFactory;
		symbol(symbol: (datum: any, index: number) => SymbolFactory): Legend;
		fixedWidth(): boolean;
		fixedHeight(): boolean
	}

	declare class InterpolatedColorLegend extends Component {
		LEGEND_LABEL_CLASS: string;
		constructor(interpolatedColorScale: Scales.InterpolatedColor): this;
		destroy(): void;
		formatter(): Formatter;
		formatter(formatter: Formatter): InterpolatedColorLegend;
		orientation(): string;
		orientation(orientation: string): InterpolatedColorLegend;
		fixedWidth(): boolean;
		fixedHeight(): boolean;
		_setup(): void;
		requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
		renderImmediately(): InterpolatedColorLegend
	}

	declare class Gridlines extends Component {
		constructor(xScale: QuantitativeScale<any>, yScale: QuantitativeScale<any>): this;
		destroy(): Gridlines;
		_setup(): void;
		renderImmediately(): Gridlines
	}

	declare class Table extends ComponentContainer {
		constructor(rows?: Component[][]): this;
		_forEach(callback: (component: Component) => any): void;
		has(component: Component): boolean;
		add(component: Component, row: number, col: number): Table;
		_remove(component: Component): boolean;
		requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
		computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Table;
		rowPadding(): number;
		rowPadding(rowPadding: number): Table;
		columnPadding(): number;
		columnPadding(columnPadding: number): Table;
		rowWeight(index: number): number;
		rowWeight(index: number, weight: number): Table;
		columnWeight(index: number): number;
		columnWeight(index: number, weight: number): Table;
		fixedWidth(): boolean;
		fixedHeight(): boolean
	}

	declare class SelectionBoxLayer extends Component {
		_box: d3.Selection<void>;
		constructor(): this;
		_setup(): void;
		_sizeFromOffer(
		availableWidth: number, availableHeight: number
	): {
		width: number,
		height: number
	};
		bounds(): Bounds;
		bounds(newBounds: Bounds): SelectionBoxLayer;
		_setBounds(newBounds: Bounds): void;
		renderImmediately(): SelectionBoxLayer;
		boxVisible(): boolean;
		boxVisible(show: boolean): SelectionBoxLayer;
		fixedWidth(): boolean;
		fixedHeight(): boolean
	}

	declare class DragBoxLayer extends Components$SelectionBoxLayer {
		_hasCorners: boolean;
		constructor(): this;
		_setup(): void;
		renderImmediately(): DragBoxLayer;
		detectionRadius(): number;
		detectionRadius(r: number): DragBoxLayer;
		resizable(): boolean;
		resizable(canResize: boolean): DragBoxLayer;
		_setResizableClasses(canResize: boolean): void;
		onDragStart(callback: DragBoxCallback): DragBoxLayer;
		offDragStart(callback: DragBoxCallback): DragBoxLayer;
		onDrag(callback: DragBoxCallback): DragBoxLayer;
		offDrag(callback: DragBoxCallback): DragBoxLayer;
		onDragEnd(callback: DragBoxCallback): DragBoxLayer;
		offDragEnd(callback: DragBoxCallback): DragBoxLayer;
		dragInteraction(): Interactions.Drag;
		enabled(enabled: boolean): DragBoxLayer;
		enabled(): boolean
	}

	declare class XDragBoxLayer extends DragBoxLayer {
		constructor(): this;
		computeLayout(
		origin?: Point, availableWidth?: number, availableHeight?: number
	): XDragBoxLayer;
		_setBounds(newBounds: Bounds): void;
		_setResizableClasses(canResize: boolean): void
	}

	declare class YDragBoxLayer extends DragBoxLayer {
		constructor(): this;
		computeLayout(
		origin?: Point, availableWidth?: number, availableHeight?: number
	): YDragBoxLayer;
		_setBounds(newBounds: Bounds): void;
		_setResizableClasses(canResize: boolean): void
	}

	
}

declare module 'Axes' {
	declare type TimeAxisTierConfiguration = {
		interval: string,
		step: number,
		formatter: Formatter
	};

	declare type TimeAxisConfiguration = TimeAxisTierConfiguration[];

			declare class Time extends Axis<Date> {
		TIME_AXIS_TIER_CLASS: string;
		constructor(scale: Scales.Time, orientation: string): this;
		tierLabelPositions(): string[];
		tierLabelPositions(newPositions: string[]): Time;
		axisConfigurations(): TimeAxisConfiguration[];
		axisConfigurations(configurations: TimeAxisConfiguration[]): Time;
		orientation(): string;
		orientation(orientation: string): Time;
		_computeHeight(): number;
		_sizeFromOffer(
		availableWidth: number, availableHeight: number
	): {
		width: number,
		height: number
	};
		_setup(): void;
		_getTickValues(): any[];
		renderImmediately(): Time
	}

	declare class Numeric extends Axis<number> {
		constructor(scale: QuantitativeScale<number>, orientation: string): this;
		_setup(): void;
		_computeWidth(): number;
		_computeHeight(): number;
		_getTickValues(): number[];
		_rescale(): void;
		renderImmediately(): Numeric;
		tickLabelPosition(): string;
		tickLabelPosition(position: string): Numeric
	}

	declare class Category extends Axis<string> {
		constructor(scale: Scales.Category, orientation: string): this;
		_setup(): void;
		_rescale(): Component;
		requestedSpace(offeredWidth: number, offeredHeight: number): SpaceRequest;
		_getTickValues(): string[];
		tickLabelAngle(): number;
		tickLabelAngle(angle: number): Category;
		renderImmediately(): Category;
		computeLayout(
		origin?: Point, availableWidth?: number, availableHeight?: number
	): Axis<string>
	}

	
}

declare module 'Plots' {
		declare interface PlotEntity {
		dataset: Dataset,
		index: number,
		component: Plot
	}

	declare interface AccessorScaleBinding<D, R> {
		accessor: Accessor<any>,
		scale?: Scale<D, R>
	}

		declare class Pie extends Plot {
		constructor(): this;
		computeLayout(origin?: Point, availableWidth?: number, availableHeight?: number): Pie;
		addDataset(dataset: Dataset): Pie;
		removeDataset(dataset: Dataset): Pie;
		_onDatasetUpdate(): void;
		_createDrawer(dataset: Dataset): Drawers.Arc;
		entities(datasets?: Dataset[]): PlotEntity[];
		sectorValue<S>(): AccessorScaleBinding<S, number>;
		sectorValue(sectorValue: number | Accessor<number>): Plots.Pie;
		sectorValue<S>(sectorValue: S | Accessor<S>, scale: Scale<S, number>): Plots.Pie;
		innerRadius<R>(): AccessorScaleBinding<R, number>;
		innerRadius(innerRadius: number | Accessor<number>): Plots.Pie;
		innerRadius<R>(innerRadius: R | Accessor<R>, scale: Scale<R, number>): Plots.Pie;
		outerRadius<R>(): AccessorScaleBinding<R, number>;
		outerRadius(outerRadius: number | Accessor<number>): Plots.Pie;
		outerRadius<R>(outerRadius: R | Accessor<R>, scale: Scale<R, number>): Plots.Pie;
		labelsEnabled(): boolean;
		labelsEnabled(enabled: boolean): Pie;
		labelFormatter(): Formatter;
		labelFormatter(formatter: Formatter): Pie;
		entitiesAt(queryPoint: Point): PlotEntity[];
		_propertyProjectors(): AttributeToProjector;
		_getDataToDraw(): Utils.Map<Dataset, any[]>;
		_pixelPoint(datum: any, index: number, dataset: Dataset): {
		x: number,
		y: number
	};
		_additionalPaint(time: number): void
	}

	declare class Rectangle<X, Y> extends XYPlot<X, Y> {
		constructor(): this;
		_createDrawer(dataset: Dataset): Drawers.Rectangle;
		_generateAttrToProjector(): {
		[attr: string]: (datum: any, index: number, dataset: Dataset) => any
	};
		_generateDrawSteps(): Drawers.DrawStep[];
		_updateExtentsForProperty(property: string): void;
		_filterForProperty(property: string): (datum: any, index: number, dataset: Dataset) => boolean;
		x(): AccessorScaleBinding<X, number>;
		x(x: number | Accessor<number>): Plots.Rectangle<X, Y>;
		x(x: X | Accessor<X>, xScale: Scale<X, number>): Plots.Rectangle<X, Y>;
		x2(): AccessorScaleBinding<X, number>;
		x2(x2: number | Accessor<number> | X | Accessor<X>): Plots.Rectangle<X, Y>;
		y(): AccessorScaleBinding<Y, number>;
		y(y: number | Accessor<number>): Plots.Rectangle<X, Y>;
		y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): Plots.Rectangle<X, Y>;
		y2(): AccessorScaleBinding<Y, number>;
		y2(y2: number | Accessor<number> | Y | Accessor<Y>): Plots.Rectangle<X, Y>;
		_propertyProjectors(): AttributeToProjector;
		_pixelPoint(datum: any, index: number, dataset: Dataset): {
		x: any,
		y: any
	};
		_getDataToDraw(): Utils.Map<Dataset, any[]>
	}

	declare class Scatter<X, Y> extends XYPlot<X, Y> {
		constructor(): this;
		_createDrawer(dataset: Dataset): Drawers.Symbol;
		size<S>(): AccessorScaleBinding<S, number>;
		size(size: number | Accessor<number>): Plots.Scatter<X, Y>;
		size<S>(size: S | Accessor<S>, scale: Scale<S, number>): Plots.Scatter<X, Y>;
		symbol(): AccessorScaleBinding<any, any>;
		symbol(symbol: Accessor<SymbolFactory>): Plots.Scatter<X, Y>;
		_generateDrawSteps(): Drawers.DrawStep[];
		_visibleOnPlot(datum: any, pixelPoint: Point, selection: d3.Selection<void>): boolean;
		_entityVisibleOnPlot(pixelPoint: Point, datum: any, index: number, dataset: Dataset): boolean;
		_propertyProjectors(): AttributeToProjector
	}

	declare class Bar<X, Y> extends XYPlot<X, Y> {
		ORIENTATION_VERTICAL: string;
		ORIENTATION_HORIZONTAL: string;
		_isVertical: boolean;
		constructor(orientation?: string): this;
		x(): Plots.AccessorScaleBinding<X, number>;
		x(x: number | Accessor<number>): Bar<X, Y>;
		x(x: X | Accessor<X>, xScale: Scale<X, number>): Bar<X, Y>;
		y(): Plots.AccessorScaleBinding<Y, number>;
		y(y: number | Accessor<number>): Bar<X, Y>;
		y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): Bar<X, Y>;
		orientation(): string;
		render(): Bar<X, Y>;
		_createDrawer(dataset: Dataset): Drawers.Rectangle;
		_setup(): void;
		baselineValue(): X | Y;
		baselineValue(value: X | Y): Bar<X, Y>;
		addDataset(dataset: Dataset): Bar<X, Y>;
		removeDataset(dataset: Dataset): Bar<X, Y>;
		labelsEnabled(): boolean;
		labelsEnabled(enabled: boolean): Bar<X, Y>;
		labelFormatter(): Formatter;
		labelFormatter(formatter: Formatter): Bar<X, Y>;
		_createNodesForDataset(dataset: Dataset): Drawer;
		_removeDatasetNodes(dataset: Dataset): void;
		entityNearest(queryPoint: Point): PlotEntity;
		_visibleOnPlot(datum: any, pixelPoint: Point, selection: d3.Selection<void>): boolean;
		_entityVisibleOnPlot(pixelPoint: Point, datum: any, index: number, dataset: Dataset): boolean;
		entitiesAt(p: Point): PlotEntity[];
		entitiesIn(bounds: Bounds): PlotEntity[];
		entitiesIn(xRange: Range, yRange: Range): PlotEntity[];
		_additionalPaint(time: number): void;
		_generateDrawSteps(): Drawers.DrawStep[];
		_generateAttrToProjector(): {
		[attr: string]: (datum: any, index: number, dataset: Dataset) => any
	};
		_getBarPixelWidth(): number;
		entities(datasets?: Dataset[]): PlotEntity[];
		_pixelPoint(datum: any, index: number, dataset: Dataset): {
		x: any,
		y: any
	};
		_uninstallScaleForKey(scale: Scale<any, number>, key: string): void;
		_getDataToDraw(): Utils.Map<Dataset, any[]>
	}

	declare class Line<X> extends XYPlot<X, number> {
		constructor(): this;
		_createDrawer(dataset: Dataset): Drawer;
		_getResetYFunction(): (d: any, i: number, dataset: Dataset) => number;
		_generateDrawSteps(): Drawers.DrawStep[];
		_generateAttrToProjector(): {
		[attr: string]: (datum: any, index: number, dataset: Dataset) => any
	};
		entityNearest(queryPoint: Point): PlotEntity;
		_propertyProjectors(): AttributeToProjector;
		_constructLineProjector(
		xProjector: Projector, yProjector: Projector
	): (datum: any, index: number, dataset: Dataset) => string;
		_getDataToDraw(): Utils.Map<Dataset, any[]>
	}

	declare class Area<X> extends Line<X> {
		constructor(): this;
		_setup(): void;
		y(): Plots.AccessorScaleBinding<number, number>;
		y(y: number | Accessor<number>): Area<X>;
		y(y: number | Accessor<number>, yScale: QuantitativeScale<number>): Area<X>;
		y0(): Plots.AccessorScaleBinding<number, number>;
		y0(y0: number | Accessor<number>): Area<X>;
		_onDatasetUpdate(): void;
		addDataset(dataset: Dataset): Area<X>;
		_removeDatasetNodes(dataset: Dataset): void;
		_additionalPaint(): void;
		_createDrawer(dataset: Dataset): Drawers.Area;
		_generateDrawSteps(): Drawers.DrawStep[];
		_updateYScale(): void;
		_getResetYFunction(): Accessor<any>;
		_propertyProjectors(): AttributeToProjector;
		selections(datasets?: Dataset[]): d3.Selection<any>;
		_constructAreaProjector(
		xProjector: Projector, yProjector: Projector, y0Projector: Projector
	): (datum: any[], index: number, dataset: Dataset) => string
	}

	declare class ClusteredBar<X, Y> extends Bar<X, Y> {
		constructor(orientation?: string): this;
		_generateAttrToProjector(): {
		[attr: string]: (datum: any, index: number, dataset: Dataset) => any
	};
		_getDataToDraw(): Utils.Map<Dataset, any[]>
	}

	declare class StackedArea<X> extends Area<X> {
		constructor(): this;
		_getAnimator(key: string): Animator;
		_setup(): void;
		x(): Plots.AccessorScaleBinding<X, number>;
		x(x: number | Accessor<number>): StackedArea<X>;
		x(x: X | Accessor<X>, xScale: Scale<X, number>): StackedArea<X>;
		y(): Plots.AccessorScaleBinding<number, number>;
		y(y: number | Accessor<number>): StackedArea<X>;
		y(
		y: number | Accessor<number>, yScale: QuantitativeScale<number>
	): StackedArea<X>;
		_additionalPaint(): void;
		_updateYScale(): void;
		_onDatasetUpdate(): StackedArea<X>;
		_updateExtentsForProperty(property: string): void;
		_extentsForProperty(attr: string): any[];
		_propertyProjectors(): AttributeToProjector;
		_pixelPoint(datum: any, index: number, dataset: Dataset): Point
	}

	declare class StackedBar<X, Y> extends Bar<X, Y> {
		constructor(orientation?: string): this;
		x(): Plots.AccessorScaleBinding<X, number>;
		x(x: number | Accessor<number>): StackedBar<X, Y>;
		x(x: X | Accessor<X>, xScale: Scale<X, number>): StackedBar<X, Y>;
		y(): Plots.AccessorScaleBinding<Y, number>;
		y(y: number | Accessor<number>): StackedBar<X, Y>;
		y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): StackedBar<X, Y>;
		_generateAttrToProjector(): {
		[attr: string]: (datum: any, index: number, dataset: Dataset) => any
	};
		_onDatasetUpdate(): StackedBar<X, Y>;
		_updateExtentsForProperty(property: string): void;
		_extentsForProperty(attr: string): any[]
	}

	declare class Segment<X, Y> extends XYPlot<X, Y> {
		constructor(): this;
		_createDrawer(dataset: Dataset): Drawers.Segment;
		_generateDrawSteps(): Drawers.DrawStep[];
		_updateExtentsForProperty(property: string): void;
		_filterForProperty(property: string): (datum: any, index: number, dataset: Dataset) => boolean;
		x(): AccessorScaleBinding<X, number>;
		x(x: number | Accessor<number>): Plots.Segment<X, Y>;
		x(x: X | Accessor<X>, xScale: Scale<X, number>): Plots.Segment<X, Y>;
		x2(): AccessorScaleBinding<X, number>;
		x2(x2: number | Accessor<number> | X | Accessor<X>): Plots.Segment<X, Y>;
		y(): AccessorScaleBinding<Y, number>;
		y(y: number | Accessor<number>): Plots.Segment<X, Y>;
		y(y: Y | Accessor<Y>, yScale: Scale<Y, number>): Plots.Segment<X, Y>;
		y2(): AccessorScaleBinding<Y, number>;
		y2(y2: number | Accessor<number> | Y | Accessor<Y>): Plots.Segment<X, Y>;
		_propertyProjectors(): AttributeToProjector
	}

	declare class Waterfall<X, Y> extends Bar<X, number> {
		constructor(): this;
		connectorsEnabled(): boolean;
		connectorsEnabled(enabled: boolean): Waterfall<X, Y>;
		total<T>(): Plots.AccessorScaleBinding<T, boolean>;
		total(total: Accessor<boolean>): Waterfall<X, Y>;
		_additionalPaint(time: number): void;
		_createNodesForDataset(dataset: Dataset): Drawer;
		_extentsForProperty(attr: string): any[];
		_generateAttrToProjector(): {
		[attr: string]: (datum: any, index: number, dataset: Dataset) => any
	};
		_onDatasetUpdate(): Waterfall<X, Y>
	}

	
}

declare module 'Animators' {
				declare class Null extends Animator {
		totalTime(selection: any): number;
		animate(
		selection: d3.Selection<any>, attrToAppliedProjector: AttributeToAppliedProjector
	): d3.Selection<any>
	}

	declare class Easing extends Animator {
		constructor(): this;
		totalTime(numberOfSteps: number): number;
		animate(
		selection: d3.Selection<any>, attrToAppliedProjector: AttributeToAppliedProjector
	): d3.Transition<any>;
		startDelay(): number;
		startDelay(startDelay: number): Easing;
		stepDuration(): number;
		stepDuration(stepDuration: number): Easing;
		stepDelay(): number;
		stepDelay(stepDelay: number): Easing;
		maxTotalDuration(): number;
		maxTotalDuration(maxTotalDuration: number): Easing;
		easingMode(): string;
		easingMode(easingMode: string): Easing
	}

	
}

declare module 'Dispatchers' {
	declare type MouseCallback = (p: Point, event: MouseEvent) => void;

	declare type TouchCallback = (
		ids: number[], idToPoint: {
		[id: number]: Point
	}, event: TouchEvent
	) => void;

	declare type KeyCallback = (keyCode: number, event: KeyboardEvent) => void;

			declare class Mouse extends Dispatcher {
		getDispatcher(elem: SVGElement): Dispatchers.Mouse;
		constructor(svg: SVGElement): this;
		onMouseMove(callback: MouseCallback): Dispatchers.Mouse;
		offMouseMove(callback: MouseCallback): Dispatchers.Mouse;
		onMouseDown(callback: MouseCallback): Dispatchers.Mouse;
		offMouseDown(callback: MouseCallback): Dispatchers.Mouse;
		onMouseUp(callback: MouseCallback): Dispatchers.Mouse;
		offMouseUp(callback: MouseCallback): Dispatchers.Mouse;
		onWheel(callback: MouseCallback): Dispatchers.Mouse;
		offWheel(callback: MouseCallback): Dispatchers.Mouse;
		onDblClick(callback: MouseCallback): Dispatchers.Mouse;
		offDblClick(callback: MouseCallback): Dispatchers.Mouse;
		lastMousePosition(): Point
	}

	declare class Touch extends Dispatcher {
		getDispatcher(elem: SVGElement): Dispatchers.Touch;
		constructor(svg: SVGElement): this;
		onTouchStart(callback: TouchCallback): Dispatchers.Touch;
		offTouchStart(callback: TouchCallback): Dispatchers.Touch;
		onTouchMove(callback: TouchCallback): Dispatchers.Touch;
		offTouchMove(callback: TouchCallback): Dispatchers.Touch;
		onTouchEnd(callback: TouchCallback): Dispatchers.Touch;
		offTouchEnd(callback: TouchCallback): Dispatchers.Touch;
		onTouchCancel(callback: TouchCallback): Dispatchers.Touch;
		offTouchCancel(callback: TouchCallback): Dispatchers.Touch
	}

	declare class Key extends Dispatcher {
		getDispatcher(): Dispatchers.Key;
		constructor(): this;
		onKeyDown(callback: KeyCallback): Key;
		offKeyDown(callback: KeyCallback): Key
	}

	
}

declare module 'Interactions' {
				declare class Click extends Interaction {
		_anchor(component: Component): void;
		_unanchor(): void;
		onClick(callback: ClickCallback): Click;
		offClick(callback: ClickCallback): Click
	}

	declare class DoubleClick extends Interaction {
		_anchor(component: Component): void;
		_unanchor(): void;
		onDoubleClick(callback: ClickCallback): DoubleClick;
		offDoubleClick(callback: ClickCallback): DoubleClick
	}

	declare class Key extends Interaction {
		_anchor(component: Component): void;
		_unanchor(): void;
		onKeyPress(keyCode: number, callback: KeyCallback): Key;
		offKeyPress(keyCode: number, callback: KeyCallback): Key
	}

	declare class Pointer extends Interaction {
		_anchor(component: Component): void;
		_unanchor(): void;
		onPointerEnter(callback: PointerCallback): Pointer;
		offPointerEnter(callback: PointerCallback): Pointer;
		onPointerMove(callback: PointerCallback): Pointer;
		offPointerMove(callback: PointerCallback): Pointer;
		onPointerExit(callback: PointerCallback): Pointer;
		offPointerExit(callback: PointerCallback): Pointer
	}

	declare class PanZoom extends Interaction {
		constructor(xScale?: QuantitativeScale<any>, yScale?: QuantitativeScale<any>): this;
		_anchor(component: Component): void;
		_unanchor(): void;
		xScales(): QuantitativeScale<any>[];
		xScales(xScales: QuantitativeScale<any>[]): Interactions.PanZoom;
		yScales(): QuantitativeScale<any>[];
		yScales(yScales: QuantitativeScale<any>[]): Interactions.PanZoom;
		addXScale(xScale: QuantitativeScale<any>): PanZoom;
		removeXScale(xScale: QuantitativeScale<any>): PanZoom;
		addYScale(yScale: QuantitativeScale<any>): PanZoom;
		removeYScale(yScale: QuantitativeScale<any>): PanZoom;
		minDomainExtent<D>(quantitativeScale: QuantitativeScale<D>): D;
		minDomainExtent<D>(
		quantitativeScale: QuantitativeScale<D>, minDomainExtent: D
	): Interactions.PanZoom;
		maxDomainExtent<D>(quantitativeScale: QuantitativeScale<D>): D;
		maxDomainExtent<D>(
		quantitativeScale: QuantitativeScale<D>, maxDomainExtent: D
	): Interactions.PanZoom
	}

	declare class Drag extends Interaction {
		_anchor(component: Component): void;
		_unanchor(): void;
		constrainedToComponent(): boolean;
		constrainedToComponent(constrainedToComponent: boolean): Drag;
		onDragStart(callback: DragCallback): Drag;
		offDragStart(callback: DragCallback): Drag;
		onDrag(callback: DragCallback): Drag;
		offDrag(callback: DragCallback): Drag;
		onDragEnd(callback: DragCallback): Drag;
		offDragEnd(callback: DragCallback): Drag
	}

	
}
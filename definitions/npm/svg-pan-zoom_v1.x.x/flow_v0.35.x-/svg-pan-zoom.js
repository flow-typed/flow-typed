import type { Instance } from 'npm$namespace$SvgPanZoom'

declare module 'svg-pan-zoom' {
					declare module.exports: Instance


}

declare module 'npm$namespace$SvgPanZoom' {
		declare interface Options {
		viewportSelector?: string | HTMLElement | SVGElement,
		panEnabled?: boolean,
		controlIconsEnabled?: boolean,
		zoomEnabled?: boolean,
		dblClickZoomEnabled?: boolean,
		mouseWheelZoomEnabled?: boolean,
		preventMouseEventsDefault?: boolean,
		zoomScaleSensitivity?: number,
		minZoom?: number,
		maxZoom?: number,
		fit?: boolean,
		contain?: boolean,
		center?: boolean,
		refreshRate?: number | "auto",
		beforeZoom?: (oldScale: number, newScale: number) => boolean,
		onZoom?: (newScale: number) => void,
		beforePan?: (oldPan: Point, newPan: Point) => boolean | PointModifier,
		onPan?: (newPan: Point) => void,
		customEventsHandler?: CustomEventHandler,
		eventsListenerElement?: SVGElement
	}

	declare interface CustomEventHandler {
		haltEventListeners: string[],
		init: (options: CustomEventOptions) => void,
		destroy: Function
	}

	declare interface CustomEventOptions {
		svgElement: SVGSVGElement,
		instance: Instance
	}

	declare interface Point {
		x: number,
		y: number
	}

	declare interface PointModifier {
		x: number | boolean,
		y: number | boolean
	}

	declare interface Instance {
		(svg: string | HTMLElement | SVGElement, options?: Options): Instance,
		enablePan(): Instance,
		disablePan(): Instance,
		isPanEnabled(): boolean,
		setBeforePan(fn: (point: Point) => void): Instance,
		setOnPan(fn: (x: number, y: number) => void): Instance,
		pan(point: Point): Instance,
		panBy(point: Point): Instance,
		getPan(): Point,
		resetPan(): Instance,
		enableZoom(): Instance,
		disableZoom(): Instance,
		isZoomEnabled(): boolean,
		enableControlIcons(): Instance,
		disableControlIcons(): Instance,
		isControlIconsEnabled(): boolean,
		enableDblClickZoom(): Instance,
		disableDblClickZoom(): Instance,
		isDblClickZoomEnabled(): boolean,
		enableMouseWheelZoom(): Instance,
		disableMouseWheelZoom(): Instance,
		isMouseWheelZoomEnabled(): boolean,
		setZoomScaleSensitivity(scale: number): Instance,
		setMinZoom(zoom: number): Instance,
		setMaxZoom(zoom: number): Instance,
		setBeforeZoom(fn: (scale: number) => void): Instance,
		setOnZoom(fn: (scale: number) => void): Instance,
		zoom(scale: number): void,
		zoomIn(): Instance,
		zoomOut(): Instance,
		zoomBy(scale: number): Instance,
		zoomAtPoint(scale: number, point: Point): Instance,
		zoomAtPointBy(scale: number, point: Point): Instance,
		resetZoom(): Instance,
		getZoom(): number,
		fit(): Instance,
		contain(): Instance,
		center(): Instance,
		resize(): Instance,
		reset(): Instance,
		updateBBox(): Instance,
		destroy(): void
	}

			
}
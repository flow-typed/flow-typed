import type { ISvgPanZoom } from 'npm$namespace$SvgPanZoom'

declare module 'svg-pan-zoom-2.3.9' {
					
}

declare module 'npm$namespace$SvgPanZoom' {
		declare interface OptionConfig {
		panEnabled?: boolean,
		controlIconsEnabled?: boolean,
		zoomEnabled?: boolean,
		dblClickZoomEnabled?: boolean,
		zoomScaleSensitivity?: number,
		minZoom?: number,
		maxZoom?: number,
		fit?: boolean,
		center?: boolean,
		beforeZoom?: (scale: number) => void,
		onZoom?: (scale: number) => void,
		beforePan?: (point: IPoint) => void,
		onPan?: (x: number, y: number) => void,
		refreshRate?: any
	}

	declare interface IPoint {
		x: number,
		y: number
	}

	declare interface ISvgPanZoom {
		(svg: any, options?: OptionConfig): ISvgPanZoom,
		enablePan(): void,
		disablePan(): void,
		isPanEnabled(): boolean,
		setBeforePan(fn: (point: IPoint) => void): void,
		setOnPan(fn: (x: number, y: number) => void): void,
		enableZoom(): void,
		disableZoom(): void,
		isZoomEnabled(): boolean,
		enableControlIcons(): void,
		disableControlIcons(): void,
		isControlIconsEnabled(): boolean,
		enableDblClickZoom(): void,
		disableDblClickZoom(): void,
		setZoomScaleSensitivity(scale: number): void,
		setMinZoom(zoom: number): void,
		setMaxZoom(zoom: number): void,
		setBeforeZoom(fn: (scale: number) => void): void,
		setOnZoom(fn: (scale: number) => void): void,
		zoom(scale: number): void,
		zoomIn(): void,
		zoomOut(): void,
		zoomBy(scale: number): void,
		resetZoom(): void,
		getZoom(): number,
		fit(dropCache?: boolean): void,
		center(dropCache?: boolean): void,
		resize(): void,
		pan(point: IPoint): void,
		panBy(point: IPoint): void,
		getPan(): IPoint,
		zoomAtPoint(scale: number, point: IPoint): boolean,
		zoomAtPointBy(scale: number, point: IPoint): boolean
	}

			
}
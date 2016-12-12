

declare module 'jquery-cropbox' {
		declare interface JQuery {
		cropbox(params?: jQueryCropBox.CropboxOptions): jQueryCropBox.Cropbox
	}

	declare interface JQueryStatic {
		cropbox(params?: jQueryCropBox.CropboxOptions): jQueryCropBox.Cropbox
	}

			
}

declare module 'npm$namespace$jQueryCropBox' {
	declare type EventCallback = (e: Event, data: any, img: jQueryCropBox.Cropbox) => void;

	declare interface CropboxArea {
		cropX: number,
		cropY: number,
		cropW: number,
		cropH: number
	}

	declare interface CropboxOptions {
		width?: number,
		height?: number,
		zoom?: number,
		maxZoom?: number,
		controls?: any,
		result?: CropboxArea,
		showControls?: ShowControls
	}

	declare interface CropboxDragOptions {
		startX: number,
		startY: number,
		dx: number,
		dy: number
	}

	declare interface CropboxSetCropOptions {
		cropX: number,
		cropY: number,
		cropW: number,
		cropH: number
	}

	declare interface Cropbox {
		zoomIn(): void,
		zoomOut(): void,
		zoom(percent: number): void,
		drag(options: CropboxDragOptions): void,
		setCrop(options: CropboxSetCropOptions): void,
		update(): void,
		getDataURL(): string,
		getBlob(): any,
		remove(): void,
		on(event: string, callback: jQueryCropBox.EventCallback): void
	}

			
}
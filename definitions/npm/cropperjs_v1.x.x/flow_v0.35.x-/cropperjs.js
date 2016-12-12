

declare module 'cropperjs' {
		declare export interface CropperCustomEvent {
		detail: Data
	}

	declare export interface CropperOptions {
		crop?: (event: CropperCustomEvent) => void,
		cropstart?: (event: CropperCustomEvent) => void,
		cropmove?: (event: CropperCustomEvent) => void,
		cropend?: (event: CropperCustomEvent) => void,
		viewMode?: CropperViewMods,
		dragMode?: string,
		aspectRatio?: number,
		data?: Object,
		preview?: string,
		responsive?: boolean,
		checkCrossOrigin?: boolean,
		modal?: boolean,
		guides?: boolean,
		center?: boolean,
		highlight?: boolean,
		background?: boolean,
		autoCrop?: boolean,
		autoCropArea?: number,
		movable?: boolean,
		rotatable?: boolean,
		scalable?: boolean,
		zoomable?: boolean,
		zoomOnTouch?: boolean,
		zoomOnWheel?: boolean,
		wheelZoomRatio?: number,
		cropBoxMovable?: boolean,
		cropBoxResizable?: boolean,
		toggleDragModeOnDblclick?: boolean,
		minContainerWidth?: number,
		minContainerHeight?: number,
		minCanvasWidth?: number,
		minCanvasHeight?: number,
		minCropBoxWidth?: number,
		minCropBoxHeight?: number,
		build?: () => boolean,
		built?: () => void
	}

	declare interface Data {
		x: number,
		y: number,
		width: number,
		height: number,
		rotate: number,
		scaleX: number,
		scaleY: number
	}

	declare interface ContainerData {
		width: number,
		height: number
	}

	declare interface CropBoxData {
		left: number,
		top: number,
		width: number,
		height: number
	}

	declare interface CanvasData {
		left: number,
		top: number,
		width: number,
		height: number
	}

	declare interface ImageData {
		left: number,
		top: number,
		width: number,
		height: number,
		naturalWidth: number,
		naturalHeight: number,
		aspectRatio: number,
		rotate: number,
		scaleX: number,
		scaleY: number
	}

	declare interface CroppedCanvasOptions {
		width?: number,
		height?: number,
		fillColor?: string
	}

		declare export class Cropper  {
		constructor(element: HTMLImageElement, options: CropperOptions): this;
		crop(): void;
		reset(): void;
		replace(url: string): void;
		enable(): void;
		disable(): void;
		destroy(): void;
		move(offsetX: number, offsetY?: number): void;
		moveTo(x: number, y?: number): void;
		zoom(ratio: number): void;
		rotate(degree: number): void;
		clear(): void;
		getData(rounded?: boolean): Data;
		setData(data: Data): void;
		getContainerData(): ContainerData;
		getImageData(): ImageData;
		getCanvasData(): CanvasData & {
		naturalWidth: number,
		naturalHeight: number
	};
		setCanvasData(data: CanvasData): void;
		getCropBoxData(): CropBoxData;
		setCropBoxData(data: CropBoxData): void;
		getCroppedCanvas(options?: CroppedCanvasOptions): HTMLCanvasElement;
		setAspectRatio(aspectRatio: number): void;
		setDragMode(mode?: "none" | "crop" | "move"): void
	}

	declare module.exports: undefined


}
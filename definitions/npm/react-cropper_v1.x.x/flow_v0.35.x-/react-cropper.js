

declare module 'react-cropper' {
	declare type ReactCropperProps = cropperjs.CropperOptions & ___React.HTMLProps<HTMLImageElement>;

			declare class ReactCropper extends ___React$Component<ReactCropperProps, {
		
	}>, cropperjs$Cropper {
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
		setDragMode(mode?: "none" | "crop" | "move"): void;
		on(eventname: string, callback: () => void): void
	}

	declare module.exports: undefined


}
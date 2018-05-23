declare module 'react-image-crop' {

	declare type PercentCrop = {
		x?: number,
		y?: number,
		width?: number,
		height?: number
	};

	declare type PixelCrop = {
		x: number,
		y: number,
		width: number,
		height: number
	}

	declare type Crop = {
		aspect?: number
	} & PixelCrop;

	declare type Props = {
		src: string,
		crop?: {
			aspect?: number
		} & PercentCrop,
		minWidth?: number,
		minHeight?: number,
		maxWidth?: number,
		maxHeight?: number,
		keepSelection?: boolean,
		onChange: (crop: Crop, pixelCrop: $Exact<PixelCrop>) => void,
		onComplete?: (crop: Crop, pixelCrop: $Exact<PixelCrop>) => void,
		onImageLoaded?: (image: HTMLImageElement) => void,
		onDragStart?: () => void,
		onDragEnd?: () => void,
		disabled?: boolean,
		crossorigin?: $PropertyType<HTMLImageElement, 'crossOrigin'>,
		style?: { [key: string]: string | number },
		imageStyle?: { [key: string]: string | number }
	}

	declare export default class ReactCrop extends React$Component<Props> {}

	declare export function makeAspectCrop(crop: PercentCrop, imageAspect: number): PercentCrop;

	declare export function containCrop(crop: PercentCrop, imageAspect: number): PercentCrop;

	declare export function getPixelCrop(image: HTMLImageElement, crop: Crop): $Exact<PixelCrop>;

}

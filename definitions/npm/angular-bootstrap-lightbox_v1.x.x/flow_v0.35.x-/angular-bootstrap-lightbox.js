

declare module 'angular-bootstrap-lightbox' {
					
}

declare module 'lightbox' {
		declare export interface ILightboxImageInfo {
		url: string,
		width: number,
		height: number,
		thumbUrl?: string,
		caption?: string
	}

	declare export interface IImageDimensionLimits {
		minWidth?: number,
		minHeight?: number,
		maxWidth?: number,
		maxHeight?: number
	}

	declare export interface IImageDimensionParameter {
		windowWidth: number,
		windowHeight: number,
		imageWidth: number,
		imageHeight: number
	}

	declare export interface IModalDimensionsParameter {
		windowWidth: number,
		windowHeight: number,
		imageDisplayWidth: number,
		imageDisplayHeight: number
	}

	declare export interface IModalDimensions {
		width: number,
		height: number
	}

	declare export interface ILightbox {
		openModal(images: ILightboxImageInfo[], index: number): void
	}

	declare export interface ILightBoxProvider {
		templateUrl: string,
		calculateImageDimensionLimits: (dimensions: IImageDimensionParameter) => IImageDimensionLimits,
		calculateModalDimensions: (dimensions: IModalDimensionsParameter) => IModalDimensions
	}

			
}
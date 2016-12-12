import type { ImagesLoadedConstructor } from 'npm$namespace$ImagesLoaded'

declare module 'imagesloaded' {
		declare interface JQuery {
		imagesLoaded(
		callback?: ImagesLoaded.ImagesLoadedCallback
	): JQueryDeferred<ImagesLoaded.ImagesLoaded>
	}

			declare module.exports: ImagesLoadedConstructor


}

declare module 'npm$namespace$ImagesLoaded' {
	declare type ElementSelector = Element | NodeList | Array<Element> | string;

	declare interface LoadingImage {
		img: HTMLImageElement,
		isLoaded: boolean
	}

	declare interface ImagesLoadedCallback {
		(instance?: ImagesLoaded): void
	}

	declare interface ImagesLoadedListener {
		(instance: ImagesLoaded, image?: LoadingImage): void
	}

	declare interface ImagesLoaded {
		new (elem: ElementSelector, callback: ImagesLoadedCallback): ImagesLoaded,
		images: Array<LoadingImage>,
		on(event: string, listener: ImagesLoadedListener): void,
		off(event: string, listener: ImagesLoadedListener): void
	}

	declare interface ImagesLoadedConstructor {
		(elem: ElementSelector, callback?: ImagesLoadedCallback): ImagesLoaded
	}

			
}
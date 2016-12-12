import type { GalleriaFactory } from 'npm$namespace$GalleriaJS'

declare module 'jquery-galleria' {
					
}

declare module 'npm$namespace$GalleriaJS' {
		declare interface GalleriaOptions {
		dataSource: GalleriaEntry[],
		autoplay?: boolean,
		lightbox?: boolean
	}

	declare interface GalleriaEntry {
		image?: string,
		thumbnail?: string,
		title?: string,
		description?: string
	}

	declare interface GalleriaFactory {
		run(): GalleriaFactory,
		run(selector: String): GalleriaFactory,
		run(selector: String, options: GalleriaOptions): GalleriaFactory,
		loadTheme(url: String): GalleriaFactory,
		configure(options: GalleriaOptions): GalleriaFactory,
		ready(method: () => any): void,
		refreshImage(): GalleriaFactory,
		resize(): GalleriaFactory,
		load(data: GalleriaEntry[]): GalleriaFactory,
		setOptions(options: GalleriaOptions): GalleriaFactory
	}

			
}
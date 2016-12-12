

declare module 'jquery.prettyphoto' {
		declare interface JQuery {
		prettyPhoto: scaron_prettyPhoto.moduleJQuery
	}

	declare interface JQueryStatic {
		prettyPhoto: scaron_prettyPhoto.moduleJQueryStatic
	}

			
}

declare module 'npm$namespace$scaron_prettyPhoto' {
		declare interface PrettyPhotoSettings {
		hook?: string,
		animation_speed?: string,
		ajaxcallback?: () => void,
		slideshow?: any,
		autoplay_slideshow?: boolean,
		opacity?: number,
		show_title?: boolean,
		allow_resize?: boolean,
		allow_expand?: boolean,
		default_width?: number,
		default_height?: number,
		counter_separator_label?: string,
		theme?: string,
		horizontal_padding?: number,
		hideflash?: boolean,
		wmode?: string,
		autoplay?: boolean,
		modal?: boolean,
		deeplinking?: boolean,
		overlay_gallery?: boolean,
		overlay_gallery_max?: number,
		keyboard_shortcuts?: boolean,
		changepicturecallback?: () => void,
		callback?: () => void,
		ie6_fallback?: boolean,
		markup?: string,
		gallery_markup?: string,
		image_markup?: string,
		flash_markup?: string,
		quicktime_markup?: string,
		iframe_markup?: string,
		inline_markup?: string,
		custom_markup?: string,
		social_tools?: any
	}

	declare interface moduleJQuery {
		(): JQuery,
		(pp_settings: PrettyPhotoSettings): JQuery
	}

	declare interface moduleJQueryStatic {
		version: string,
		open(): boolean,
		open(image: string, title: string, description: string): boolean,
		open(images: string[], titles: string[], descriptions: string[]): boolean,
		changePage(direction: string): void,
		changeGalleryPage(direction: string): void,
		startSlideshow(): void,
		stopSlideshow(): void,
		close(): void
	}

			
}
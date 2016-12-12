

declare module 'jquery.slimScroll' {
		declare interface IJQuerySlimScrollOptions {
		width?: string,
		height?: string,
		size?: string,
		color?: string,
		position?: string,
		distance?: string,
		start?: any,
		opacity?: number,
		alwaysVisible?: boolean,
		disableFadeOut?: boolean,
		railVisible?: boolean,
		railColor?: string,
		railOpacity?: number,
		railDraggable?: boolean,
		railClass?: string,
		barClass?: string,
		wrapperClass?: string,
		allowPageScroll?: boolean,
		wheelStep?: number,
		touchScrollStep?: number,
		borderRadius?: string,
		railBorderRadius?: string,
		scrollTo?: string,
		scrollBy?: string,
		destroy?: boolean
	}

	declare interface JQuery {
		slimScroll: {
		(): JQuery,
		(options: IJQuerySlimScrollOptions): JQuery
	}
	}

			
}
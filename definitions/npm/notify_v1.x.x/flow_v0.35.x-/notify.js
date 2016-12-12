

declare module 'notify' {
		declare interface JQueryStatic {
		notify: Notify.JQueryStatic
	}

	declare interface JQuery {
		notify(text: string, className?: string): void,
		notify(text: string, options?: Notify.Options): void,
		notify(data: any, className?: string): void,
		notify(data: any, options?: Notify.Options): void
	}

			
}

declare module 'npm$namespace$Notify' {
		declare interface Options {
		clickToHide?: boolean,
		autoHide?: boolean,
		autoHideDelay?: number,
		arrowShow?: boolean,
		arrowSize?: number,
		elementPosition?: string,
		globalPosition?: string,
		style?: string,
		className?: string,
		showAnimation?: string,
		showDuration?: number,
		hideAnimation?: string,
		hideDuration?: number,
		gap?: number
	}

	declare interface ClassCSS {
		[propertyName: string]: string
	}

	declare interface StyleDefinition {
		html: string,
		classes?: {
		[className: string]: ClassCSS,
		base?: ClassCSS
	},
		css?: string
	}

	declare interface JQueryStatic {
		(text: string, className?: string): void,
		(text: string, options?: Options): void,
		(data: any, className?: string): void,
		(data: any, options?: Options): void,
		(element: JQuery, text: string, className?: string): void,
		(element: JQuery, text: string, options?: Options): void,
		(element: JQuery, data: any, className?: string): void,
		(element: JQuery, data: any, options?: Options): void,
		addStyle(styleName: string, styleDefinition: StyleDefinition): void,
		defaults(options: Options): void
	}

			
}


declare module 'notify.js' {
					
}

declare module 'npm$namespace$NotifyJS' {
		declare interface NotificationOptions {
		clickToHide: boolean,
		autoHide: boolean,
		autoHideDelay: number,
		arrowShow: boolean,
		arrowSize: number,
		position: string,
		elementPosition: string,
		globalPosition: string,
		style: string,
		className: string,
		showAnimation: string,
		showDuration: number,
		hideAnimation: string,
		hideDuration: number,
		gap: number
	}

	declare interface JQueryStaticNotify {
		(element?: any, notificationdata?: any, options?: NotificationOptions): JQueryStatic,
		addStyle(styleName: string, styleDefinition: any): any,
		removeStyle(styleName: string): any,
		getStyle(styleName: string): any,
		insertCSS(cssText: string): any,
		defaults(options: NotificationOptions): any
	}

	declare interface JQueryStatic {
		notify: JQueryStaticNotify
	}

	declare interface JQueryNotify {
		(element?: any, notificationdata?: any, options?: NotificationOptions): JQuery,
		addStyle(styleName: string, styleDefinition: any): any,
		removeStyle(styleName: string): any,
		getStyle(styleName: string): any,
		insertCSS(cssText: string): any,
		defaults(options: NotificationOptions): any
	}

	declare interface JQuery {
		notify: JQueryStaticNotify
	}

			
}
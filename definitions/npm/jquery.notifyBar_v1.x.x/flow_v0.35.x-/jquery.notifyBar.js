

declare module 'jquery.notifyBar' {
		declare interface JQueryStatic {
		notifyBar(options?: JQueryNotifyBar.NotifyBarOptions): void
	}

			
}

declare module 'npm$namespace$JQueryNotifyBar' {
		declare interface NotifyBarOptions {
		html?: string,
		delay?: number,
		animationSpeed?: string | number,
		jqObject?: JQuery,
		cssClass?: string,
		close?: boolean,
		closeText?: string,
		closeOnClick?: boolean,
		closeOnOver?: boolean,
		onBeforeShow?: () => any,
		onShow?: () => any,
		onBeforeHide?: () => any,
		onHide?: () => any,
		position?: string
	}

	declare interface NotifyBarOptionsForAnimationSpeedString {
		animationSpeed?: string
	}

	declare interface NotifyBarOptionsForAnimationSpeedNumber {
		animationSpeed?: number
	}

			
}
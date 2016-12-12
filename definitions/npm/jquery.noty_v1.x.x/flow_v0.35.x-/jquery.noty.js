

declare module 'jquery.noty' {
		declare interface NotyOptions {
		layout?: string,
		theme?: string,
		type?: string,
		text?: string,
		dismissQueue?: boolean,
		template?: string,
		animation?: NotyAnimationOptions,
		timeout?: any,
		force?: boolean,
		modal?: boolean,
		maxVisible?: number,
		killer?: boolean,
		closeWith?: any[],
		callback?: NotyCallbackOptions,
		buttons?: any
	}

	declare interface NotyAnimationOptions {
		open?: any,
		close?: any,
		easing?: string,
		speed?: number
	}

	declare interface NotyCallbackOptions {
		onShow?: Function,
		afterShow?: Function,
		onClose?: Function,
		afterClose?: Function
	}

	declare interface NotyStatic {
		(notyOptions: NotyOptions),
		defaults: NotyOptions,
		get(id: any),
		close(id: any),
		clearQueue(),
		closeAll(),
		setText(id: any, text: string),
		setType(id: any, type: string)
	}

	declare interface Noty {
		(notyOptions: NotyOptions),
		show(),
		close(),
		setText(text: string),
		setType(type: string),
		setTimeout(timeout: number),
		closed: boolean,
		shown: boolean
	}

	declare interface JQueryStatic {
		noty: NotyStatic
	}

	declare interface JQuery {
		noty: Noty
	}

			
}
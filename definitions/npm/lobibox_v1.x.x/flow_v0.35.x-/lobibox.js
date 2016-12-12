import type { LobiboxStatic } from 'npm$namespace$LobiboxModule'

declare module 'lobibox' {
					
}

declare module 'Lobibox' {
					declare module.exports: undefined


}

declare module 'npm$namespace$LobiboxModule' {
		declare interface MessageBoxesDefault {
		title?: string,
		horizontalOffset?: number,
		width?: number,
		height?: string,
		closeButton?: boolean,
		draggable?: boolean,
		customBtnClass?: string,
		modal?: boolean,
		debug?: boolean,
		buttonsAlign?: string,
		closeOnEsc?: boolean,
		delayToRemove?: number,
		baseClass?: string,
		showClass?: string,
		hideClass?: string,
		msg?: string,
		hide(): MessageBoxesDefault,
		show(): MessageBoxesDefault,
		setWidth(width?: number): MessageBoxesDefault,
		setHeight(height?: number): MessageBoxesDefault,
		setSize(width?: number, height?: number): MessageBoxesDefault,
		setPosition(left?: number | string, top?: number): MessageBoxesDefault,
		setTitle(title?: string): MessageBoxesDefault,
		getTitle(): string,
		onShow(lobibox: any): void,
		shown(lobibox: any): void,
		beforeClose(lobibox: any): void,
		closed(lobibox: any): void
	}

	declare interface MessageBoxesOptions {
		bodyClass?: string,
		modalClasses?: {
		error?: string,
		success?: string,
		info?: string,
		warning?: string,
		confirm?: string,
		progress?: string,
		prompt?: string,
		default?: string,
		window?: string
	},
		buttonsAlign?: any,
		buttons?: {
		ok?: {
		class?: string,
		text?: string,
		closeOnClick?: boolean
	},
		cancel?: {
		class?: string,
		text?: string,
		closeOnClick?: boolean
	},
		yes?: {
		class?: string,
		text?: string,
		closeOnClick?: boolean
	},
		no?: {
		class?: string,
		text?: string,
		closeOnClick?: boolean
	}
	} | any,
		callback(lobibox: any, type?: string, ev?: any): void
	}

	declare interface ConfirmOptions {
		title?: string,
		width?: number,
		iconClass?: string
	}

	declare interface PromptOptions {
		width?: number,
		attrs?: any,
		value?: string,
		multiline?: boolean,
		lines?: number,
		type?: string,
		label?: string
	}

	declare interface AlertOptions {
		warning?: {
		title?: string,
		iconClass?: string
	},
		info?: {
		title?: string,
		iconClass?: string
	},
		success?: {
		title?: string,
		iconClass?: string
	},
		error?: {
		title?: string,
		iconClass?: string
	}
	}

	declare interface ProgressOptions {
		width?: number,
		showProgressLabel?: boolean,
		label?: string,
		progressTpl?: boolean,
		progressUpdated?: any,
		progressCompleted?: any
	}

	declare interface WindowOptions {
		width?: number,
		height?: any,
		content?: any,
		url?: string,
		draggable?: boolean,
		autoload?: boolean,
		loadMethod?: string,
		showAfterLoad?: boolean,
		params?: {
		
	}
	}

	declare interface ProgressEvents {
		progressUpdated(lobibox: LobiboxStatic): void,
		progressComplete(lobibox: LobiboxStatic): void
	}

	declare interface PromptMethods {
		setValue(val?: string): PromptMethods,
		getValue(): string
	}

	declare interface ProgressMethods {
		setProgress(progress: number): ProgressMethods,
		getProgress(): number
	}

	declare interface NotifyDefault {
		title?: boolean,
		size?: string,
		soundPath?: string,
		soundExt?: string,
		showClass?: string,
		hideClass?: string,
		icon?: boolean,
		msg?: string,
		img?: string,
		closable?: boolean,
		delay?: number,
		delayIndicator?: boolean,
		closeOnClick?: boolean,
		width?: number,
		sound?: boolean,
		position?: string
	}

	declare interface NotifyOptions {
		class?: string,
		large?: {
		width?: number
	},
		mini?: {
		class?: string
	},
		success?: {
		class?: string,
		title?: string,
		icon?: string,
		sound?: string
	},
		error?: {
		class?: string,
		title?: string,
		icon?: string,
		sound?: string
	},
		warning?: {
		class?: string,
		title?: string,
		icon?: string,
		sound?: string
	},
		info?: {
		class?: string,
		title?: string,
		icon?: string,
		sound?: string
	}
	}

	declare interface NotifyMethods {
		remove(): any
	}

	declare interface LobiboxStatic {
		base: {
		OPTIONS: MessageBoxesOptions,
		DEFAULTS: MessageBoxesDefault
	},
		alert: {
		(type: string, options?: T): LobiboxStatic,
		DEFAULTS: AlertOptions
	},
		prompt: {
		(type: string, options?: T): LobiboxStatic,
		DEFAULTS: PromptOptions
	},
		confirm: {
		(options?: ConfirmOptions): T,
		DEFAULTS: ConfirmOptions
	},
		progress: {
		(options: ProgressOptions): T,
		DEFAULTS: ProgressOptions
	},
		window: {
		(options: WindowOptions): T,
		DEFAULTS: WindowOptions
	},
		notify: {
		(type: string, options?: NotifyOptions): T,
		DEFAULTS?: NotifyDefault,
		OPTIONS?: NotifyOptions
	}
	}

			
}
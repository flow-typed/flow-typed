

declare module 'x-editable' {
		declare interface XEditableOptions {
		ajaxOptions?: any,
		anim?: string,
		autotext?: string,
		defaultValue?: any,
		disabled?: boolean,
		display?: any,
		emptyclass?: string,
		emptytext?: string,
		error?: any,
		highlight?: any,
		mode?: string,
		name?: string,
		onblur?: string,
		params?: any,
		pk?: any,
		placement?: string,
		savenochange?: boolean,
		selector?: string,
		send?: string,
		showbuttons?: any,
		success?: any,
		toggle?: string,
		type?: string,
		unsavedclass?: string,
		url?: any,
		validate?: any,
		value?: any
	}

	declare interface XEditableSubmitOptions {
		url?: any,
		data?: any,
		ajaxOptions?: any,
		error(obj: any): void,
		success(obj: any, config: any): void
	}

	declare interface XEditable {
		options: XEditableOptions,
		activate(): void,
		destroy(): void,
		disable(): void,
		enable(): void,
		getValue(isSingle: boolean): any,
		hide(): void,
		option(key: any, value: any): void,
		setValue(value: any, convertStr: boolean): void,
		show(closeAll: boolean): void,
		submit(options: XEditableSubmitOptions): void,
		toggle(closeAll: boolean): void,
		toggleDisabled(): void,
		validate(): void
	}

	declare interface JQuery {
		editable(options?: any): XEditable,
		editable(method: string, params?: any): XEditable
	}

			
}
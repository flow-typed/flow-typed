

declare module 'jquery.address' {
		declare interface JQueryAddressStatic {
		(): any,
		bind(type: any, data: any, callback: Function): JQueryAddressStatic,
		change(callback: Function): JQueryAddressStatic,
		init(callback: Function): JQueryAddressStatic,
		internalChange(eventhandler: Function): JQueryAddressStatic,
		externalChange(eventhandler: Function): JQueryAddressStatic,
		baseURL(): string,
		autoUpdate(): boolean,
		autoUpdate(value: boolean): JQueryAddressStatic,
		crawlable(): boolean,
		crawlable(value: boolean): JQueryAddressStatic,
		hash(): string,
		hash(value: string): JQueryAddressStatic,
		history(): boolean,
		history(value: boolean): void,
		parameter(name: string): string,
		parameter(name: string, value: string, append: boolean): JQueryAddressStatic,
		parameterNames(): Array<string>,
		path(): string,
		path(value: string): JQueryAddressStatic,
		pathNames(): Array<string>,
		queryString(): string,
		queryString(value: string): JQueryAddressStatic,
		state(): string,
		state(value: string): JQueryAddressStatic,
		strict(): boolean,
		strict(value: boolean): JQueryAddressStatic,
		title(): string,
		title(value: string): JQueryAddressStatic,
		tracker(): any,
		tracker(value: Function): JQueryAddressStatic,
		value(): string,
		value(url: string): JQueryAddressStatic,
		update(): JQueryAddressStatic,
		wrap(): boolean,
		wrap(value: boolean): JQueryAddressStatic
	}

	declare interface JQueryAddress {
		(): JQuery,
		(fn: Function): JQuery
	}

	declare interface JQueryStatic {
		address: JQueryAddressStatic
	}

	declare interface JQuery {
		address: JQueryAddress
	}

			
}
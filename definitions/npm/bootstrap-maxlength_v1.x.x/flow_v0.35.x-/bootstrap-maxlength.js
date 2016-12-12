

declare module 'bootstrap-maxlength' {
		declare interface JQuery {
		maxlength(options?: BootstrapMaxlength.Options): JQuery,
		on(
		events: "maxlength.shown", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: "maxlength.hidden", handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		trigger(eventType: "maxlength.reposition", extraParameters?: any[] | Object): JQuery
	}

			
}

declare module 'npm$namespace$BootstrapMaxlength' {
		declare interface PlacementOptions {
		top?: Number | string,
		right?: Number | string,
		bottom?: Number | string,
		left?: Number | string,
		position?: string
	}

	declare interface PositionParam {
		top: Number,
		right: Number,
		bottom: Number,
		left: Number,
		width: Number,
		height: Number
	}

	declare export interface Options {
		alwaysShow?: Boolean,
		threshold?: Number,
		warningClass?: string,
		limitReachedClass?: string,
		separator?: string,
		preText?: string,
		postText?: string,
		showMaxLength?: Boolean,
		showCharsTyped?: Boolean,
		placement?: string | PlacementOptions | ((
		currentInput: JQuery, maxLengthIndicator: JQuery, currentInputPosition: PositionParam
	) => void),
		appendToParent?: boolean,
		message?: string | ((currentText: string, maxLength: Number) => string),
		utf8?: boolean,
		showOnReady?: boolean,
		twoCharLinebreak?: boolean,
		customMaxAttribute?: string,
		allowOverMax?: boolean,
		validate?: boolean
	}

			
}


declare module 'jquery.uniform' {
		declare interface UniformCoreOptions {
		activeClass?: string,
		autoHide?: boolean,
		buttonClass?: string,
		checkboxClass?: string,
		checkedClass?: string,
		disabledClass?: string,
		eventNamespace?: string,
		fileButtonClass?: string,
		fileButtonHtml?: string,
		fileClass?: string,
		fileDefaultHtml?: string,
		filenameClass?: string,
		focusClass?: string,
		hoverClass?: string,
		idPrefix?: string,
		inputAddTypeAsClass?: boolean,
		inputClass?: string,
		radioClass?: string,
		resetDefaultHtml?: string,
		resetSelector?: any,
		selectAutoWidth?: boolean,
		selectClass?: string,
		selectMultiClass?: string,
		submitDefaultHtml?: string,
		textareaClass?: string,
		useID?: boolean,
		wrapperClass?: string
	}

	declare interface UniformOptions {
		[option: string]: any
	}

	declare interface Uniform {
		(options?: UniformOptions): JQuery,
		update(elemOrSelector?: any): void,
		restore(elemOrSelector?: any): void,
		elements: JQuery[],
		defaults: UniformOptions
	}

	declare interface JQueryStatic {
		uniform: Uniform
	}

	declare interface JQuery {
		uniform: Uniform
	}

			
}
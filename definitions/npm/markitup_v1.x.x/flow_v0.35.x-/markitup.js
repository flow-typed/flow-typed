

declare module 'markitup' {
		declare interface JQueryStatic {
		markItUp: MarkItUp.Static
	}

	declare interface JQuery {
		markItUp(settings?: MarkItUp.Options): JQuery,
		markItUpRemove(): JQuery
	}

			
}

declare module 'npm$namespace$MarkItUp' {
		declare interface Options {
		nameSpace?: string,
		resizeHandle?: boolean,
		previewInWindow?: string,
		previewAutoRefresh?: boolean,
		previewParserPath?: string,
		previewParserVar?: string,
		previewTemplatePath?: string,
		previewParser?: boolean,
		previewPosition?: string,
		onEnter?: MarkupSet,
		onCtrlEnter?: MarkupSet,
		onShiftEnter?: MarkupSet,
		onTab?: MarkupSet,
		beforeInsert?: (h: MarkupSet) => string,
		afterInsert?: (h: MarkupSet) => string,
		markupSet?: MarkupSet[]
	}

	declare interface MarkupSet {
		name?: string,
		className?: string,
		key?: string,
		openWith?: string | ((h: MarkupSet) => string),
		closeWith?: string | ((h: MarkupSet) => string),
		replaceWith?: string | ((h: MarkupSet) => string),
		openBlockWith?: string | ((h: MarkupSet) => string),
		closeBlockWith?: string | ((h: MarkupSet) => string),
		multiline?: boolean,
		placeHolder?: string | ((h: MarkupSet) => string),
		beforeInsert?: (h: MarkupSet) => string,
		afterInsert?: (h: MarkupSet) => string,
		beforeMultiInsert?: (h: MarkupSet) => string,
		afterMultiInsert?: (h: MarkupSet) => string,
		dropMenu?: MarkupSet[],
		keepDefault?: boolean,
		selection?: string,
		textarea?: HTMLElement,
		caretPosition?: number,
		scrollPosition?: number,
		line?: number,
		ctrlKey?: boolean,
		shiftKey?: boolean,
		altKey?: boolean
	}

	declare interface Static {
		(): JQuery,
		(settings: Options): JQuery
	}

			
}
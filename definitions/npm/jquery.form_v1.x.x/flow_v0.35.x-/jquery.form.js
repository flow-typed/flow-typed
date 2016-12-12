

declare module 'jquery.form' {
		declare interface JQueryFormOptions {
		beforeSerialize?: ($form: JQuery, options: JQueryFormOptions) => boolean,
		beforeSubmit?: (formData: any[], $form: JQuery, options: JQueryFormOptions) => boolean,
		clearForm?: boolean,
		forceSync?: boolean,
		iframe?: boolean,
		iframeSrc?: string,
		iframeTarget?: any,
		replaceTarget?: boolean,
		resetForm?: boolean,
		semantic?: boolean,
		target?: any,
		uploadProgress?: (
		event: ProgressEvent, position: number, total: number, percentComplete: number
	) => void
	}

	declare interface JQueryForm {
		(callback?: Function): JQuery,
		(options?: JQueryFormOptions): JQuery
	}

	declare interface JQueryFormWithDebug {
		debug: boolean
	}

	declare interface JQueryStatic {
		fieldValue(element: Element, successful?: boolean): string
	}

	declare interface JQuery {
		ajaxForm: JQueryForm,
		ajaxSubmit: JQueryFormWithDebug,
		formSerialize(): string,
		fieldSerialize(): string,
		fieldValue(successful?: boolean): string[],
		resetForm(): JQuery,
		clearForm(): JQuery,
		clearFields(): JQuery,
		ajaxFormUnbind: () => JQuery,
		formToArray: (semantic?: boolean, elements?: Element[]) => any[],
		enable: (enable?: boolean) => JQuery,
		selected: (select?: boolean) => JQuery
	}

			
}
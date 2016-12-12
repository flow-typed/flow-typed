

declare module 'json-editor' {
	declare type JSONEditorOptions<TValue> = {
		ajax?: boolean,
		disable_array_add?: boolean,
		disable_array_delete?: boolean,
		disable_array_reorder?: boolean,
		disable_collapse?: boolean,
		disable_edit_json?: boolean,
		disable_properties?: boolean,
		form_name_root?: string,
		iconlib?: "bootstrap2" | "bootstrap3" | "foundation2" | "foundation3" | "jqueryui" | "fontawesome3" | "fontawesome4",
		no_additional_properties?: boolean,
		refs?: any,
		required_by_default?: boolean,
		keep_oneof_values?: boolean,
		schema?: any,
		show_errors?: "interaction" | "change" | "always" | "never",
		startval?: TValue,
		template?: string | {
		compile: (template: string) => (vars: any) => string
	},
		theme?: "barebones" | "html" | "bootstrap2" | "bootstrap3" | "foundation3" | "foundation4" | "foundation5" | "foundation6" | "jqueryui",
		display_required_only?: boolean
	};

	declare type JSONEditorError = {
		path: string,
		property: string,
		message: string
	};

	declare type JSONEditorObjectOptions = {
		collapsed?: boolean,
		disable_collapse?: boolean,
		disable_edit_json?: boolean,
		disable_properties?: boolean
	};

	declare type JSONEditorArrayOptions = {
		collapsed?: boolean,
		disable_array_add?: boolean,
		disable_array_delete?: boolean,
		disable_array_delete_all_rows?: boolean,
		disable_array_delete_last_row?: boolean,
		disable_array_reorder?: boolean,
		disable_collapse?: boolean
	};

			declare class JSONEditor<TValue>  {
		defaults: {
		options: JSONEditorOptions<any>,
		editors: {
		object: {
		options: JSONEditorObjectOptions
	},
		array: {
		options: JSONEditorArrayOptions
	}
	},
		languages: any,
		language: string,
		resolvers: ((schema: any) => string)[],
		custom_validators: (((schema: any, value: string, path: string) => JSONEditorError[]))[]
	};
		plugins: {
		sceditor: {
		emoticonsEnabled: boolean
	},
		epiceditor: {
		basePath: string
	},
		ace: {
		theme: string
	},
		selectize: {
		enable: boolean
	}
	};
		constructor(element: HTMLElement, options: JSONEditorOptions<TValue>): this;
		on(event: string, fn: Function): JSONEditor<TValue>;
		off(event: string, fn: Function): JSONEditor<TValue>;
		watch(event: string, fn: Function): JSONEditor<TValue>;
		unwatch(event: string, fn: Function): JSONEditor<TValue>;
		validate(value?: TValue): JSONEditorError[];
		setValue(value: TValue): void;
		getValue(): TValue;
		getEditor(name: string): JSONEditor<TValue>;
		disable(): void;
		enable(): void;
		isEnabled(): boolean;
		destroy(): void
	}

	declare module.exports: undefined


}
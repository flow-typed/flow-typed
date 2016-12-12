

declare module 'jquery.cleditor' {
		declare interface CLEditor {
		$area: JQuery,
		$frame: JQuery,
		$main: JQuery,
		$toolbar: JQuery,
		disabled: boolean,
		doc: Document,
		options: JQueryCLEditorOptions,
		change(handler: Function): CLEditor,
		clear(): CLEditor,
		disable(disabled: boolean): CLEditor,
		execCommand(commands: string, value: any, useCSS?: boolean, button?: any): CLEditor,
		focus(): CLEditor,
		hidePopups(): CLEditor,
		refresh(): CLEditor,
		select(): CLEditor,
		selectedHTML(): string,
		selectedText(): string,
		showMessage(message: string, button?: any): CLEditor,
		sourceMode(): boolean,
		updateFrame(): CLEditor,
		updateTextArea(): CLEditor
	}

	declare interface JQueryCLEditorOptions {
		width?: number,
		height?: number,
		controls?: string,
		colors?: string,
		fonts?: string,
		sizes?: string,
		styles?: string[][],
		useCSS?: boolean,
		docType?: string,
		docCSSFile?: string,
		bodyStyle?: string
	}

	declare interface JQueryCLEditorButtonDefinition {
		name: string,
		title: string,
		css?: any,
		image?: string,
		stripIndex?: number,
		command?: string,
		popupName?: string,
		popupContent?: string,
		getEnabled?: (data: JQueryCLEditorButtonDefinitionEventData) => boolean,
		getPressed?: (data: JQueryCLEditorButtonDefinitionEventData) => boolean,
		buttonClick?: (event: Event, data: JQueryCLEditorButtonDefinitionEventData) => boolean,
		popupClick?: (event: Event, data: JQueryCLEditorButtonDefinitionEventData) => boolean
	}

	declare interface JQueryCLEditorButtonDefinitionEventData {
		editor: CLEditor,
		button: HTMLElement,
		buttonName: string,
		popup: HTMLElement,
		popupName: string,
		command: string,
		value: any,
		useCSS: boolean
	}

	declare interface JQueryCLEditorStatic {
		defaultOptions: JQueryCLEditorOptions,
		buttons: JQueryCLEditorButtonDefinition[],
		imagesPath: () => string
	}

	declare interface JQueryStatic {
		cleditor: JQueryCLEditorStatic
	}

	declare interface JQuery {
		cleditor(options?: JQueryCLEditorOptions): CLEditor
	}

			
}
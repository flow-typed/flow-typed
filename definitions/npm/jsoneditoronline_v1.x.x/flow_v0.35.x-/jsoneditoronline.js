

declare module 'jsoneditoronline' {
		declare interface JSONEditorOptions {
		change?: () => void,
		history?: boolean,
		mode?: string,
		name?: string,
		search?: boolean
	}

	declare interface JSONEditorNodeUpdateDomOptions {
		recurse?: boolean,
		updateIndexes?: boolean
	}

	declare interface JSONEditorNodeType {
		value: string,
		className: string,
		title: string
	}

	declare interface JSONEditorConstructorParams {
		field?: string,
		fieldEditable?: boolean,
		value?: any
	}

	declare interface JSONEditorShowDropDownListParams {
		x: number,
		y: number,
		node: JSONEditorNode,
		value: string,
		values: Object[],
		optionSelectedClassName: string,
		optionClassName: string,
		callback: (value: any) => void
	}

	declare interface JSONEditorBuffer {
		text: string,
		flush(): string,
		set(text: string): void
	}

	declare interface JSONEditorActionParams {
		node?: JSONEditorNode,
		oldValue?: string,
		newValue?: string,
		startParent?: JSONEditorNode,
		endParent?: JSONEditorNode,
		startIndex?: number,
		endIndex?: number,
		clone?: JSONEditorNode,
		parent?: JSONEditorNode,
		index?: number,
		oldType?: JSONEditorNodeType,
		newType?: JSONEditorNodeType
	}

	declare interface JSONFormatterOptions {
		change?: () => void,
		indentation?: number
	}

		declare class JSONEditorHistory  {
		constructor(editor: JSONEditor): this;
		onChange(): void;
		add(action: string, params: Object): void;
		clear(): void;
		canUndo(): boolean;
		canRedo(): boolean;
		undo(): void;
		redo(): void
	}

	declare class JSONEditorNode  {
		constructor(editor: JSONEditor, params: JSONEditorConstructorParams): this;
		setParent(parent: JSONEditorNode): void;
		getParent(): JSONEditorNode;
		setField(field: string, fieldEditable: boolean): void;
		getField(): string;
		setValue(value: any): void;
		getValue(): any;
		getLevel(): number;
		clone(): JSONEditorNode;
		expand(recurse: boolean): void;
		collapse(recurse: boolean): void;
		showChilds(): void;
		hide(): void;
		hideChilds(): void;
		appendChild(node: JSONEditorNode): void;
		moveBefore(node: JSONEditorNode, beforeNode: JSONEditorNode): void;
		moveTo(node: JSONEditorNode, index: number): void;
		insertBefore(node: JSONEditorNode, beforeNode: JSONEditorNode): void;
		search(text: string): JSONEditorNode[];
		scrollTo(): void;
		focus(): void;
		blur(): void;
		containsNode(node: JSONEditorNode): boolean;
		removeChild(node: JSONEditorNode): JSONEditorNode;
		changeType(newType: string): void;
		clearDom(): void;
		getDom(): HTMLElement;
		setHighlight(highlight: boolean): void;
		updateValue(value: any): void;
		updateField(field: string): void;
		updateDom(): void;
		onEvent(event: Event): void;
		types: JSONEditorNodeType[];
		getAppend(): HTMLElement
	}

	declare class JSONEditorAppendNode extends JSONEditorNode {
		constructor(editor: JSONEditor): this
	}

	declare class JSONEditorSearchBox  {
		constructor(editor: JSONEditor, container: HTMLElement): this;
		next(): void;
		previous(): void;
		setActiveResult(index: number): void;
		focusActiveResult(): void;
		clearDelay(): void;
		onDelayedSearch(event: Event): void;
		onSearch(event: Event, forcedSearch: boolean): void;
		onKeyDown(event: Event): void;
		onKeyUp(event: Event): void
	}

	declare class JSONEditor  {
		constructor(container: HTMLElement, options?: JSONEditorOptions, json?: any): this;
		set(json: Object, name?: string): void;
		setName(name?: string): void;
		get(): Object;
		getName(): string;
		clear(): void;
		search(text: string): any[];
		expandAll(): void;
		collapseAll(): void;
		focus(): void;
		scrollTo(top: number): void;
		History: JSONEditorHistory;
		Node: JSONEditorNode;
		SearchBox: JSONEditorSearchBox;
		focusNode: JSONEditorNode;
		freezeHighlight: boolean;
		getNodeFromTarget(target: HTMLElement): JSONEditorNode;
		getAbsoluteLeft(elem: HTMLElement): number;
		getAbsoluteTop(elem: HTMLElement): number;
		addClassName(elem: HTMLElement, className: string): void;
		removeClassName(elem: HTMLElement, className: string): void;
		stripFormatting(divElement: HTMLElement): void;
		setEndOfContentEditable(contentEditableElement: HTMLElement): void;
		getInnerText(element: HTMLElement, buffer: JSONEditorBuffer): string;
		getInternetExplorerVersion(): number;
		Events: {
		addEventListener(
		element: HTMLElement, action: string, listener: (event?: Event) => void, useCapture: boolean
	): (event?: Event) => void,
		removeEventListener(
		element: HTMLElement, action: string, listener: (event?: Event) => void, useCapture: boolean
	): void,
		stopPropagation(event: Event): void,
		preventDefault(event: Event): void
	};
		parse(jsonString: string): Object;
		validate(jsonString: string): string
	}

	declare class JSONFormatter  {
		constructor(container: HTMLElement, options?: JSONFormatterOptions, json?: any): this;
		set(json: Object): void;
		get(): Object;
		setText(jsonString: string): void;
		getText(): string;
		onError(err: string): void
	}

	
}
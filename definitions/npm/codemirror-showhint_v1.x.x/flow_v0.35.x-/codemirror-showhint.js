

declare module 'codemirror-showhint' {
					
}

declare module 'npm$namespace$CodeMirror' {
		declare interface Hints {
		from: Position,
		to: Position,
		list: (Hint | string)[]
	}

	declare interface Hint {
		text: string,
		className?: string,
		displayText?: string,
		from?: Position,
		hint?: (cm: any, data: Hints, cur: Hint) => void,
		render?: (element: HTMLLIElement, data: Hints, cur: Hint) => void,
		to?: Position
	}

	declare interface Editor {
		on(eventName: string, handler: (doc: CodeMirror.Doc, event: any) => void): void,
		off(eventName: string, handler: (doc: CodeMirror.Doc, event: any) => void): void
	}

	declare interface Doc {
		showHint: (options: ShowHintOptions) => void
	}

	declare interface ShowHintOptions {
		completeSingle: boolean,
		hint: (doc: CodeMirror.Doc) => Hints
	}

	declare interface Handle {
		moveFocus(n: number, avoidWrap: boolean): void,
		setFocus(n: number): void,
		menuSize(): number,
		length: number,
		close(): void,
		pick(): void,
		data: any
	}

	declare interface EditorConfiguration {
		showHint?: boolean,
		hintOptions?: ShowHintOptions
	}

	declare function showHint(
		cm: CodeMirror.Doc, hinter?: (doc: CodeMirror.Doc) => Hints, options?: ShowHintOptions
	): void

		
}

declare module 'codemirror/addon/hint/show-hint' {
					declare module.exports: undefined


}
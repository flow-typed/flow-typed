

declare module 'atom-keymap' {
					declare module.exports: undefined


}

declare module 'npm$namespace$AtomKeymap' {
	declare type Disposable = AtomEventKit.Disposable;

	declare interface KeyBinding {
		enabled: boolean,
		source: string,
		command: string,
		keystrokes: string,
		keystrokeCount: number,
		selector: string,
		specificity: number,
		matches(keystroke: string): boolean,
		compare(keyBinding: KeyBinding): number
	}

	declare interface ICompleteMatchEvent {
		keystrokes: string,
		binding: KeyBinding,
		keyboardEventTarget: Element
	}

	declare interface IPartialMatchEvent {
		keystrokes: string,
		partiallyMatchedBindings: KeyBinding[],
		keyboardEventTarget: Element
	}

	declare interface IFailedMatchEvent {
		keystrokes: string,
		keyboardEventTarget: Element
	}

	declare interface IKeymapLoadEvent {
		path: string
	}

	declare interface KeymapManagerStatic {
		prototype: KeymapManager,
		new (options?: {
		defaultTarget?: Element
	}): KeymapManager
	}

	declare interface KeymapManager {
		constructor: KeymapManagerStatic,
		destroy(): void,
		onDidMatchBinding(callback: (event: ICompleteMatchEvent) => void): Disposable,
		onDidPartiallyMatchBindings(callback: (event: IPartialMatchEvent) => void): Disposable,
		onDidFailToMatchBinding(callback: (event: IFailedMatchEvent) => void): Disposable,
		onDidReloadKeymap(callback: (event: IKeymapLoadEvent) => void): Disposable,
		onDidUnloadKeymap(callback: (event: IKeymapLoadEvent) => void): Disposable,
		onDidFailToReadFile(callback: (error: Error) => void): Disposable,
		add(source: string, keyBindingsBySelector: any): Disposable,
		getKeyBindings(): KeyBinding[],
		findKeyBindings(
		params?: {
		keystrokes: string,
		command: string,
		target?: Element
	}
	): KeyBinding[],
		loadKeymap(bindingsPath: string, options?: {
		watch: boolean
	}): void,
		watchKeymap(filePath: string): void,
		handleKeyboardEvent(event: KeyboardEvent): void,
		keystrokeForKeyboardEvent(event: KeyboardEvent): string,
		getPartialMatchTimeout(): number
	}

			
}
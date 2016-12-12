

declare module 'keymaster' {
		declare interface KeymasterEvent {
		key: string,
		method: KeyHandler,
		mods: number[],
		scope: string,
		shortcut: string
	}

	declare interface KeyHandler {
		(keyboardEvent: KeyboardEvent, keymasterEvent: KeymasterEvent): void
	}

	declare interface FilterEvent {
		target?: {
		tagName?: string
	},
		srcElement?: {
		tagName?: string
	}
	}

	declare interface Keymaster {
		(key: string, callback: KeyHandler): void,
		(key: string, scope: string, callback: KeyHandler): void,
		shift: boolean,
		alt: boolean,
		option: boolean,
		ctrl: boolean,
		control: boolean,
		command: boolean,
		setScope(scopeName: string): void,
		getScope(): string,
		deleteScope(scopeName: string): void,
		noConflict(): void,
		unbind(key: string): void,
		unbind(key: string, scopeName: string): void,
		isPressed(keyCode: number): boolean,
		getPressedKeyCodes(): number[],
		filter(event: FilterEvent): void
	}

			declare module.exports: Keymaster


}
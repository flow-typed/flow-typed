

declare module 'mousetrap' {
		declare interface ExtendedKeyboardEvent {
		returnValue: boolean
	}

	declare interface MousetrapStatic {
		(el: Element): MousetrapInstance,
		new (el: Element): MousetrapInstance,
		stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean,
		bind(
		keys: string | string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string
	): void,
		unbind(keys: string | string[], action?: string): void,
		trigger(keys: string, action?: string): void,
		reset(): void
	}

	declare interface MousetrapInstance {
		stopCallback: (e: ExtendedKeyboardEvent, element: Element, combo: string) => boolean,
		bind(
		keys: string | string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string
	): void,
		unbind(keys: string | string[], action?: string): void,
		trigger(keys: string, action?: string): void,
		reset(): void
	}

			declare module.exports: MousetrapStatic


}


declare module 'mousetrap-global-bind' {
		declare interface MousetrapStatic {
		bindGlobal(
		keyArray: string | string[], callback: (e: ExtendedKeyboardEvent, combo: string) => any, action?: string
	): void
	}

			
}
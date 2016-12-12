import type { CombokeysStatic } from 'npm$namespace$Combokeys'

declare module 'combokeys' {
					declare module.exports: CombokeysStatic


}

declare module 'npm$namespace$Combokeys' {
		declare interface CombokeysStatic {
		new (element: Element): Combokeys,
		instances: Combokeys[],
		reset(): void
	}

	declare interface Combokeys {
		element: Element,
		bind(keys: string | string[], callback: () => void, action?: string): void,
		bindMultiple(keys: string[], callback: () => void, action?: string): void,
		unbind(keys: string | string[], action?: string): void,
		trigger(keys: string, action?: string): void,
		reset(): void,
		stopCallback(e: Event, element: Element): boolean,
		detach(): void
	}

			
}
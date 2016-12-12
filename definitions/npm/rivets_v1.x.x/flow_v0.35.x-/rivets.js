import type { Rivets } from 'npm$namespace$Rivets'

declare module 'rivets' {
					
}

declare module 'npm$namespace$Rivets' {
		declare interface View {
		build(): void,
		bind(): void,
		unbind(): void
	}

	declare interface Rivets {
		binders: Object,
		components: Object,
		formatters: Object,
		adapters: Object,
		prefix: string,
		templateDelimiters: Array<string>,
		rootInterface: string,
		preloadData: boolean,
		handler(context: any, ev: Event, biding: any): void,
		configure(
		options?: {
		prefix?: string,
		preloadData?: boolean,
		rootInterface?: string,
		templateDelimiters?: Array<string>,
		handler?: Function
	}
	): void,
		bind(element: HTMLElement, models: Object, options?: Object): View,
		bind(element: JQuery, models: Object, options?: Object): View,
		bind(element: Array<HTMLElement>, models: Object, options?: Object): View
	}

			
}
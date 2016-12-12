

declare module 'masonry-layout' {
		declare interface JQuery {
		masonry(options?: Masonry.MasonryOptions): JQuery
	}

			
}

declare module 'Masonry' {
		declare interface MasonryGrid {
		masonry(): void,
		masonry(eventName: string, listener: any): void,
		layout(): void,
		layoutItems(items: Array<any>, isStill?: boolean): void,
		stamp(elements: Array<any>): void,
		unstamp(elements: Array<any>): void,
		appended(elements: Array<any>): void,
		prepended(elements: Array<any>): void,
		addItems(elements: Array<any>): void,
		remove(elements: Array<any>): void,
		on(eventName: string, listener: any): void,
		off(eventName: string, listener: any): void,
		once(eventName: string, listener: any): void,
		reloadItems(): void,
		destroy(): void,
		getItemElements(): Array<any>,
		data(element: Element): Masonry
	}

	declare interface MasonryOptions {
		itemSelector?: string,
		columnWidth?: any,
		percentPosition?: boolean,
		gutter?: any,
		stamp?: string,
		fitWidth?: boolean,
		originLeft?: boolean,
		originTop?: boolean,
		containerStyle?: Object,
		transitionDuration?: any,
		resize?: boolean,
		initLayout?: boolean
	}

		declare class Masonry extends MasonryGrid {
		constructor(options?: MasonryOptions): this;
		constructor(selector: string, options?: MasonryOptions): this
	}

	
}
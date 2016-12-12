

declare module 'contextjs' {
		declare interface MenuObject {
		action?: (e: Event) => void,
		divider?: boolean,
		header?: string,
		href?: string,
		subMenu?: MenuObject[],
		target?: string,
		text?: string
	}

	declare interface InitSettings {
		above?: string | boolean,
		compress?: boolean,
		fadeSpeed?: number,
		filter?: (e: Element) => void,
		preventDoubleContext?: boolean
	}

			declare module.exports: undefined


}

declare module 'context' {
			declare function init(settings?: InitSettings): void

	declare function destroy(selector: any): void

	declare function attach(selector: any, menuObjects: MenuObject[]): void

	declare function settings(settings: InitSettings): void

		
}
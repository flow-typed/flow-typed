

declare module 'json-stable-stringify' {
			declare function stringify(obj: any, opts?: stringify.Comparator | stringify.Options): string

		declare module.exports: undefined


}

declare module 'stringify' {
		declare interface Element {
		key: string,
		value: any
	}

	declare interface Comparator {
		(a: Element, b: Element): number
	}

	declare interface Replacer {
		(key: string, value: any): any
	}

	declare interface Options {
		cmp?: Comparator,
		space?: number | string,
		replacer?: Replacer
	}

			
}
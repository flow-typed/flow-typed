

declare module 'chai-dom' {
			declare function chaiDom(chai: any, utils: any): void

		declare module.exports: undefined


}

declare module 'npm$namespace$Chai' {
		declare interface Assertion {
		attr(name: string, value?: string): Assertion,
		attribute(name: string, value?: string): Assertion,
		class(className: string): Assertion,
		id(id: string): Assertion,
		html(html: string): Assertion,
		text(text: string | string[]): Assertion,
		value(text: string): Assertion
	}

	declare interface Include {
		text(text: string | string[]): Assertion,
		html(text: string | string[]): Assertion
	}

			
}
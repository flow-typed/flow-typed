

declare module 'yui' {
		declare interface YUI {
		Test: YUITest.YUITestStatic,
		Assert: YUITest.IAssert,
		add(
		name: string, fn: (Y: YUI, name: string) => any, version: string, details?: Y.IConfig
	): YUI,
		mix(
		receiver: Function, supplier: Function, overwrite?: boolean, whitelist?: string[], mode?: number, merge?: boolean
	): any,
		mix(
		receiver: Object, supplier: Function, overwrite?: boolean, whitelist?: string[], mode?: number, merge?: boolean
	): any,
		mix(
		receiver: Function, supplier: Object, overwrite?: boolean, whitelist?: string[], mode?: number, merge?: boolean
	): any,
		mix(
		receiver: Object, supplier: Object, overwrite?: boolean, whitelist?: string[], mode?: number, merge?: boolean
	): any
	}

			
}

declare module 'npm$namespace$Y' {
		declare interface IConfig {
		requires: string[],
		optional: string[],
		use: string[]
	}

			
}
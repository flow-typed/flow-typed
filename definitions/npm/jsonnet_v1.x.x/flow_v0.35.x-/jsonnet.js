

declare module 'jsonnet' {
				declare class Jsonnet  {
		constructor(): this;
		eval(code: string): any;
		evalFile(): any;
		destroy(): void
	}

	declare module.exports: undefined


}
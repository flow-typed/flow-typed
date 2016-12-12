

declare module 'circular-json' {
		declare interface ICircularJSON {
		parse(text: string, reviver?: (key: any, value: any) => any): any,
		stringify(
		value: any, replacer?: ((key: string, value: any) => any) | any[], space?: any, placeholder?: boolean
	): string
	}

			declare module.exports: ICircularJSON


}


declare module 'stack-mapper' {
			declare function stackMapper(sourcemap: any): stackMapper.StackMapper

		declare module.exports: undefined


}

declare module 'stackMapper' {
		declare export interface Callsite {
		filename: string,
		line: number,
		column: number
	}

		declare export class StackMapper  {
		map(stack: Callsite[]): Callsite[]
	}

	
}
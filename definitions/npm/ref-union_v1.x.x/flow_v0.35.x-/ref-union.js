

declare module 'ref-union' {
		declare interface UnionType {
		new (arg: Buffer, data?: {
		
	}): any,
		new (data?: {
		
	}): any,
		(arg: Buffer, data?: {
		
	}): any,
		(data?: {
		
	}): any,
		fields: {
		[key: string]: {
		type: ref.Type
	}
	},
		defineProperty(name: string, type: ref.Type): void,
		defineProperty(name: string, type: string): void,
		toString(): string
	}

			declare module.exports: undefined


}
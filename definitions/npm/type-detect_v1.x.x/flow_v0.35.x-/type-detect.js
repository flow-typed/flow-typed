

declare module 'type-detect' {
			declare function type(val: any): string

		declare module.exports: undefined


}

declare module 'type' {
				declare export class Library  {
		of(val: any): string;
		define(type: string, test: RegExp): void;
		define(type: string, test: (val: any) => boolean): void;
		test(val: any, type: string): boolean
	}

	
}
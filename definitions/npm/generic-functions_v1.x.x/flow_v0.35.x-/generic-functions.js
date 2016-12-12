

declare module 'generic-functions' {
			declare function strcmp(str1: string, str2: string): boolean

	declare function icstrcmp(str1: string, str2: string): boolean

	declare function strendswith(str: string, suffix: string): boolean

	declare function icstrendswith(str: string, suffix: string): boolean

	declare function endswithdot(str: string): string

	declare function println(message: string): void

	declare function printlns(message: string[]): void

	declare function objGetKeyByValue(object: Object, value: any): string

		
}


declare module 'wnumb' {
		declare interface wNumbOptions {
		decimals?: number,
		mark?: string,
		thousand?: string,
		prefix?: string,
		postfix?: string,
		negative?: string,
		negativeBefore?: string,
		encoder?: (value: number) => number,
		decoder?: (value: number) => number,
		edit?: (value: number) => number,
		undo?: (value: number) => number
	}

	declare interface wNumb {
		(options?: wNumbOptions): wNumbInstance
	}

	declare interface wNumbInstance {
		to(val: number): string,
		from(val: string): number
	}

			
}
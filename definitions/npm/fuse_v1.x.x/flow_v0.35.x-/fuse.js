

declare module 'fuse' {
				declare class Fuse  {
		constructor(list: any[], options?: fuse.IFuseOptions): this;
		search(pattern: string): any[]
	}

	
}

declare module 'npm$namespace$fuse' {
		declare interface IFuseOptions {
		caseSensitive?: boolean,
		include?: string[],
		shouldSort?: boolean,
		searchFn?: any,
		sortFn?: (a: {
		score: number
	}, b: {
		score: number
	}) => number,
		getFn?: (obj: any, path: string) => any,
		keys?: string[] | {
		name: string,
		weight: number
	}[],
		verbose?: boolean
	}

	declare interface ISearchOptions {
		location?: number,
		distance?: number,
		threshold?: number,
		maxPatternLength?: number
	}

			
}
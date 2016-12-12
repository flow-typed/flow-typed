

declare module 'traverse' {
		declare interface Traverse {
		get(paths: string[]): any,
		has(paths: string[]): boolean,
		set(paths: string[], value: any): any,
		map(cb: (v: any) => void): any,
		forEach(cb: (v: any) => void): any,
		reduce(cb: (acc: any, v: any) => void, init?: any): any,
		paths(): string[],
		nodes(): any[],
		clone(): any
	}

	declare function traverse(obj: any): Traverse

		declare module.exports: undefined


}
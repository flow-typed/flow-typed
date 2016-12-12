

declare module 'array-find-index' {
	declare type Predicate = (element: any, index: number, array: any[]) => boolean;

		declare function arrayFindIndex(arr: any[], predicate: Predicate): number

	declare function arrayFindIndex(arr: any[], predicate: Predicate, ctx: any): number

		declare module.exports: undefined


}


declare module 'seamless-immutable' {
					declare module.exports: undefined


}

declare module 'npm$namespace$SeamlessImmutable' {
	declare export type Immutable<T> = T & (ImmutableObject<T> | ImmutableArray<T>);

	declare interface MergeConfig {
		deep?: boolean,
		merger?: Function
	}

	declare interface Options {
		prototype?: any
	}

	declare interface AsMutableOptions {
		deep: boolean
	}

	declare export interface ImmutableObject<T> {
		set(property: string, value: any): ImmutableObject<any>,
		setIn(propertyPath: Array<string>, value: any): ImmutableObject<any>,
		asMutable(): T,
		asMutable(opts: AsMutableOptions): T,
		merge(part: any, config?: MergeConfig): ImmutableObject<T>,
		update(
		property: string, updaterFunction: (value: any, ...additionalParamters: any[]) => any, ...additionalArguments: any[]
	): ImmutableObject<T>,
		updateIn(
		propertyPath: Array<string>, updaterFunction: (value: any, ...additionalParamters: any[]) => any, ...additionalArguments: any[]
	): ImmutableObject<T>,
		without(property: string): ImmutableObject<any>,
		without(...properties: string[]): ImmutableObject<any>,
		without(filter: (value: any, key: string) => boolean): ImmutableObject<any>
	}

	declare export interface ImmutableArray<T> {
		asMutable(): Array<T>,
		asMutable(opts: AsMutableOptions): Array<T>,
		asObject(toKeyValue: (item: T) => Array<any>): ImmutableObject<T>,
		flatMap(mapFunction: (item: T) => Array<any>): ImmutableArray<any>
	}

	declare export function from<T>(obj: Array<T>, options?: Options): Array<T> & ImmutableArray<T>

	declare export function from<T>(obj: T, options?: Options): T & ImmutableObject<T>

	declare export function isImmutable(target: any): boolean

	declare export function ImmutableError(message: string): Error

		
}
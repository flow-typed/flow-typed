import type { IObjectPathStatic } from 'npm$namespace$ObjectPathGlobal'

declare module 'object-path' {
					declare module.exports: IObjectPathStatic


}

declare module 'npm$namespace$ObjectPathGlobal' {
	declare type IPath = Array<number | string> | number | string;

	declare type IMultiArray = Array<IPath>;

	declare interface IObjectPathStatic {
		(object: T): IObjectPathBound<T>,
		del<T>(object: T, path: IPath): T,
		del<T>(object: T): T,
		del(): void,
		has<T>(object: T, path: IPath): boolean,
		has<T>(object: T): boolean,
		has(): boolean,
		get<T, TResult>(object: T, path: IPath, defaultValue?: TResult): TResult,
		get<T>(object: T): T,
		get(): void,
		set<T, TExisting>(
		object: T, path: IPath, value: any, doNotReplace?: boolean
	): TExisting,
		set<T>(object: T): T,
		set(): void,
		push<T>(object: T, path: IPath, ...args: any[]): void,
		push(): void,
		coalesce<T, TResult>(object: T, paths: IMultiArray, defaultValue?: TResult): TResult,
		empty<T, TResult>(object: T, path: IPath): TResult,
		empty<T>(object: T): T,
		empty(): void,
		ensureExists<T, TExisting>(object: T, path: IPath, value: any): TExisting,
		ensureExists<T>(object: T): T,
		ensureExists(): void,
		insert<T>(object: T, path: IPath, value: any, at?: number): void
	}

	declare interface IObjectPathBound<T> {
		del(path: IPath): T,
		del(): T,
		has(path: IPath): boolean,
		has(): boolean,
		get<TResult>(path: IPath, defaultValue?: TResult): TResult,
		get(): T,
		set<TExisting>(path: IPath, value: any, doNotReplace?: boolean): TExisting,
		set(): T,
		push(path: IPath, ...args: any[]): void,
		push(): void,
		coalesce<TResult>(paths: IMultiArray, defaultValue?: TResult): TResult,
		empty(path: IPath): T,
		empty(): T,
		ensureExists<TExisting>(path: IPath, value: any): TExisting,
		ensureExists(): T,
		insert(path: IPath, value: any, at?: number): void
	}

			
}

declare module 'objectPath' {
					declare module.exports: undefined


}


declare module 'mobservable' {
		declare interface _IMobservableStatic {
		makeReactive: IMakeReactive,
		extendReactive(target: Object, properties: Object): Object,
		isReactive(value: any, propertyName?: string): boolean,
		asReference<T>(value: any): {
		value: T
	},
		observable(target: Object, key: string): any,
		observe(func: Mobservable.Lambda, scope?: any): Mobservable.Lambda,
		sideEffect(func: Mobservable.Lambda, scope?: any): Mobservable.Lambda,
		observeUntil(
		predicate: () => boolean, effect: Mobservable.Lambda, scope?: any
	): Mobservable.Lambda,
		transaction<T>(action: () => T): T,
		toJSON<T>(value: T): T,
		logLevel: number,
		extras: {
		getDependencyTree(thing: any, property?: string): Mobservable.IDependencyTree,
		getObserverTree(thing: any, property?: string): Mobservable.IObserverTree,
		trackTransitions(
		extensive?: boolean, onReport?: (lines: Mobservable.ITransitionEvent) => void
	): Mobservable.Lambda
	}
	}

	declare interface IMakeReactive {
		(value: T[], opts?: Mobservable.IMakeReactiveOptions): Mobservable.IObservableArray<T>,
		(value: () => T, opts?: Mobservable.IMakeReactiveOptions): Mobservable.IObservableValue<T>,
		(value: T, opts?: Mobservable.IMakeReactiveOptions): Mobservable.IObservableValue<T>,
		(value: Object, opts?: Mobservable.IMakeReactiveOptions): T
	}

	declare interface IMobservableStatic {
		
	}

			declare module.exports: IMobservableStatic


}

declare module 'npm$namespace$Mobservable' {
	declare export type IContextInfo = IContextInfoStruct | string;

	declare interface IMakeReactiveOptions {
		as?: string,
		scope?: Object,
		context?: Object,
		recurse?: boolean,
		name?: string
	}

	declare export interface IContextInfoStruct {
		object: Object,
		name: string
	}

	declare interface Lambda {
		(): void,
		name?: string
	}

	declare interface IObservable {
		observe(callback: (...args: any[]) => void, fireImmediately?: boolean): Lambda
	}

	declare interface IObservableValue<T> {
		(): T,
		(value: T): void,
		observe(
		callback: (newValue: T, oldValue: T) => void, fireImmediately?: boolean
	): Lambda
	}

	declare interface IObservableArray<T> {
		spliceWithArray(index: number, deleteCount?: number, newItems?: T[]): T[],
		observe(
		listener: (changeData: IArrayChange<T> | IArraySplice<T>) => void, fireImmediately?: boolean
	): Lambda,
		clear(): T[],
		replace(newItems: T[]): T[],
		find(
		predicate: (item: T, index: number, array: IObservableArray<T>) => boolean, thisArg?: any, fromIndex?: number
	): T,
		remove(value: T): boolean
	}

	declare interface IArrayChange<T> {
		type: string,
		object: IObservableArray<T>,
		index: number,
		oldValue: T
	}

	declare interface IArraySplice<T> {
		type: string,
		object: IObservableArray<T>,
		index: number,
		removed: T[],
		addedCount: number
	}

	declare interface IDependencyTree {
		id: number,
		name: string,
		context: any,
		dependencies?: IDependencyTree[]
	}

	declare interface IObserverTree {
		id: number,
		name: string,
		context: any,
		observers?: IObserverTree[],
		listeners?: number
	}

	declare interface ITransitionEvent {
		id: number,
		name: string,
		context: Object,
		state: string,
		changed: boolean,
		newValue: string
	}

			
}
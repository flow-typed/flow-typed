import type { Path } from 'npm$namespace$observejs'

declare module 'observe-js' {
					
}

declare module 'npm$namespace$observejs' {
		declare interface Observable {
		open(onChange: (newValue: any, oldValue: any) => any, receiver?: any): void,
		deliver(): void,
		discardChanges(): void,
		close(): void
	}

	declare interface PathObserver_static {
		new (receiver: any, path: string, defaultValue?: any): PathObserver_instance
	}

	declare interface PathObserver_instance {
		setValue(value: any): void
	}

	declare interface splice {
		index: number,
		removed: Array<any>,
		addedCount: number
	}

	declare interface ArrayObserver_static {
		new (receiver: Array<any>): ArrayObserver_instance,
		applySplices(previous: Array<any>, current: Array<any>, splices: Array<splice>): void
	}

	declare interface ArrayObserver_instance {
		open(onChange: (splices: Array<splice>) => any): void
	}

	declare interface Properties {
		[key: string]: any
	}

	declare interface ObjectObserver_static {
		new (receiver: any): ObjectObserver_instance
	}

	declare interface ObjectObserver_instance {
		open(
		onChange: (
		added: Properties, removed: Properties, changed: Properties, getOldValueFn: (property: string) => any
	) => any
	): void
	}

	declare interface CompoundObserver_static {
		new (): CompoundObserver_instance
	}

	declare interface CompoundObserver_instance {
		open(onChange: (newValues: Array<any>, oldValue: Array<any>) => any): void,
		addPath(receiver: any, path: string): void,
		addObserver(observer: Observable): void
	}

	declare interface ObserverTransform_static {
		new (
		observer: Observable, getValue: (value: any) => any, setValue: (value: any) => any
	): ObserverTransform_instance,
		new (
		observer: Observable, valueFn: (values: Array<any>) => any
	): ObserverTransform_instance
	}

	declare interface ObserverTransform_instance {
		setValue(value: any): void
	}

	declare interface Path {
		getValueFrom(object: any, defaultValue: any): any,
		getValueFrom(object: any, newValue: any): any
	}

			
}
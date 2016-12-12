

declare module 'angular-locker' {
					declare module.exports: undefined


}

declare module 'locker' {
		declare interface ILockerServicePutFunction {
		(current: any): any
	}

	declare interface ILockerService {
		add(key: string, value: any): boolean,
		all(): any,
		clean(): ILockerService,
		count(): number,
		get(key: string | Array<string>, defaultValue?: any): any,
		has(key: string): boolean,
		keys(): Array<string>,
		put(keyValuePairs: Object): ILockerService | boolean,
		put(putFunction: Function): ILockerService | boolean,
		put(key: string, value: any): ILockerService | boolean,
		put(
		key: string, putFunction: ILockerServicePutFunction, value: any
	): ILockerService | boolean,
		forget(key: string): ILockerService,
		forget(keys: Array<string>): ILockerService,
		pull(key: string | Array<string>, defaultValue?: any): any,
		bind(scope: IScope, property: string, defaultPropertyValue?: any): ILockerService,
		driver(localStorageType: string): ILockerService,
		empty(): ILockerService,
		getNamespace(): string,
		instance(lockerSettings: ILockerSettings): ILockerService,
		namespace(name: string): ILockerService,
		supported(): boolean,
		unbind(scope: IScope, property: string): ILockerService
	}

	declare interface ILockerSettings {
		driver?: string,
		namespace?: string | boolean,
		separator?: string,
		eventsEnabled?: boolean,
		extend?: Object
	}

	declare interface ILockerProvider {
		defaults(lockerSettings: ILockerSettings): void
	}

			
}
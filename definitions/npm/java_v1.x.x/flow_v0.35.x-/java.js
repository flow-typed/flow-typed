import type { NodeAPI } from 'npm$namespace$NodeJavaCore'

declare module 'java' {
					declare module.exports: NodeAPI


}

declare module 'npm$namespace$NodeJavaCore' {
		declare export interface Callback<T> {
		(err?: Error, result?: T): void
	}

	declare interface Promisify {
		(funct: Function, receiver?: any): Function
	}

	declare interface AsyncOptions {
		syncSuffix: string,
		asyncSuffix?: string,
		promiseSuffix?: string,
		promisify?: Promisify
	}

	declare interface ProxyFunctions {
		[index: string]: Function
	}

	declare interface NodeAPI {
		classpath: string[],
		options: string[],
		asyncOptions: AsyncOptions,
		nativeBindingLocation: string,
		callMethod(
		instance: any, className: string, methodName: string, args: any[], callback: Callback<any>
	): void,
		callMethodSync(instance: any, className: string, methodName: string, ...args: any[]): any,
		callStaticMethod(
		className: string, methodName: string, ...args: Array<any | Callback<any>>
	): void,
		callStaticMethodSync(className: string, methodName: string, ...args: any[]): any,
		getStaticFieldValue(className: string, fieldName: string): any,
		setStaticFieldValue(className: string, fieldName: string, newValue: any): void,
		instanceOf(javaObject: any, className: string): boolean,
		registerClient(
		before: (cb: Callback<void>) => void, after?: (cb: Callback<void>) => void
	): void,
		registerClientP(beforeP: () => Promise<void>, afterP?: () => Promise<void>): void,
		ensureJvm(done: Callback<void>): void,
		ensureJvm(): Promise<void>,
		isJvmCreated(): boolean,
		newByte(val: number): any,
		newChar(val: string | number): any,
		newDouble(val: number): any,
		newShort(val: number): any,
		newLong(val: number): any,
		newFloat(val: number): any,
		newDouble(val: number): any,
		import(className: string): any,
		newInstance(className: string, ...args: any[]): void,
		newInstanceSync(className: string, ...args: any[]): any,
		newInstanceP(className: string, ...args: any[]): Promise<any>,
		newArray<T>(className: string, arg: any[]): any,
		getClassLoader(): any,
		newProxy(interfaceName: string, functions: ProxyFunctions): any
	}

			
}
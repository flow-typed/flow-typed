import type { BetterCurry } from 'npm$namespace$BetterCurryModule'

declare module 'better-curry' {
					declare module.exports: BetterCurry


}

declare module 'npm$namespace$BetterCurryModule' {
		declare export interface DelegateOptions {
		as?: string,
		len?: number,
		args?: any[],
		name?: string
	}

	declare export interface OriginalFunctionReminder<T> {
		___length: number
	}

	declare export interface BetterCurry {
		predefine: <T>(
		fn: T, args: any[], context?: Object, len?: number, checkArguments?: boolean
	) => OriginalFunctionReminder<T>,
		wrap: <T>(
		fn: T, context?: Object, len?: number, checkArguments?: boolean
	) => OriginalFunctionReminder<T>,
		flatten: (...args: Array<Array<any> | any>) => any[],
		delegate: <T>(proto: T, target: string) => Delegate<T>,
		MAX_OPTIMIZED: number
	}

		declare export class Delegate<T>  {
		proto: T;
		target: string;
		methods: any[];
		getters: any[];
		setters: any[];
		all: (skip?: string[]) => void;
		method: (name: string | DelegateOptions) => Delegate<T>;
		getter: (name: string | DelegateOptions) => Delegate<T>;
		setter: (name: string | DelegateOptions) => Delegate<T>;
		access: (name: string | DelegateOptions) => Delegate<T>;
		revoke: (name: string) => Delegate<T>;
		constructor(proto: T, target: string): this
	}

	
}
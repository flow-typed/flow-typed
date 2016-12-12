

declare module 'hooker' {
	declare type HookerPostHookFunction = (result: any, ...args: any[]) => IHookerPostHookResult | void;

	declare type HookerPreHookFunction = (...args: any[]) => IHookerPreHookResult | void;

	declare interface IHookerPostHookResult {
		
	}

	declare interface IHookerPreHookResult {
		
	}

	declare interface IHookerOptions {
		pre?: HookerPreHookFunction,
		post?: HookerPostHookFunction,
		once?: boolean,
		passName?: boolean
	}

	declare function hook(object: any, props: string | string[], options: IHookerOptions): void

	declare function hook(
		object: any, props: string | string[], prehookFunction: HookerPreHookFunction
	): void

	declare function unhook(object: any, props?: string | string[]): string[]

	declare function orig(object: any, props: string | string[]): Function

	declare function override(value: any): HookerOverride

	declare function preempt(value: any): HookerPreempt

	declare function filter(context: any, args: any[]): HookerFilter

	declare class HookerOverride extends IHookerPostHookResult {
		value: any
	}

	declare class HookerPreempt extends IHookerPreHookResult {
		value: any
	}

	declare class HookerFilter extends IHookerPreHookResult {
		context: any;
		args: any[]
	}

	
}
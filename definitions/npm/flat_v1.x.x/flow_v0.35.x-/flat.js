import type { Flatten } from 'npm$namespace$FlatTypes'

declare module 'flat' {
					declare module.exports: Flatten


}

declare module 'npm$namespace$FlatTypes' {
		declare interface FlattenOptions {
		delimiter?: string,
		safe?: boolean,
		maxDepth?: number
	}

	declare interface Flatten {
		(target: TTarget, options?: FlattenOptions): TResult,
		flatten: Flatten,
		unflatten: Unflatten
	}

	declare interface UnflattenOptions {
		delimiter?: string,
		object?: boolean,
		overwrite?: boolean
	}

	declare interface Unflatten {
		(target: TTarget, options?: UnflattenOptions): TResult
	}

			
}
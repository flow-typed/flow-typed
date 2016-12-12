import type { JsonPatch } from 'npm$namespace$fastjsonpatch'

declare module 'fast-json-patch' {
					declare module.exports: JsonPatch


}

declare module 'npm$namespace$fastjsonpatch' {
		declare interface JsonPatch {
		apply(object: any, patches: Patch[], validate?: boolean): boolean,
		observe<T>(object: T, callback?: () => void): Observer<T>,
		unobserve<T>(object: T, observer: Observer<T>): void,
		generate<T>(observer: Observer<T>): Patch[],
		compare(object1: any, object2: any): Patch[],
		validate(patches: Patch[], tree?: any): JsonPatchError[]
	}

	declare interface Observer<T> {
		object: T,
		patches: Patch[],
		unobserve(): void
	}

	declare interface Patch {
		op: string,
		path: string,
		value?: any,
		from?: string
	}

	declare interface JsonPatchError {
		name: string,
		message: string,
		index: number,
		operation: any,
		tree: any
	}

			
}
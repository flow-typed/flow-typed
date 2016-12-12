

declare module 'flux-standard-action' {
		declare export interface ErrorAction {
		error: boolean
	}

	declare export interface Action<T> {
		type: string,
		payload?: T,
		error?: boolean
	}

	declare export interface AnyMeta {
		meta: any
	}

	declare export interface TypedMeta<T> {
		meta: T
	}

	declare export function isFSA(action: any): boolean

	declare export function isError(action: any): boolean

		
}
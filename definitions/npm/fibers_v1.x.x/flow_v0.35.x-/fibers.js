

declare module 'fibers' {
		declare export interface Fiber {
		run(step?: number): any
	}

	declare function fibers(callback: () => void): fibers.Fiber

	declare export function yield(value: any): any

		declare module.exports: undefined


}
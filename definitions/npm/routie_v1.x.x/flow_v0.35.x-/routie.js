import type { Routie } from 'npm$namespace$routie'

declare module 'routie' {
					
}

declare module 'npm$namespace$routie' {
		declare interface Route {
		constructor(path: string, name: string): Route,
		addHandler(fn: Function): void,
		removeHandler(fn: Function): void,
		run(params: any): void,
		match(path: string, params: any): boolean,
		toURL(params: any): string
	}

	declare interface Routie {
		(path: string): void,
		(path: string, fn: Function): void,
		(routes: {
		[key: string]: Function
	}): void
	}

	declare interface RoutieStatic {
		lookup(name: string, fn: Function): string,
		remove(path: string, fn: Function): void,
		removeAll(): void,
		navigate(path: string, options?: RouteOptions): void,
		noConflict(): Routie
	}

	declare interface RouteOptions {
		silent?: boolean
	}

			
}
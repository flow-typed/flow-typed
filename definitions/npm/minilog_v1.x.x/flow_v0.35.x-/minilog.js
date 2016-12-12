import type { MinilogBackends } from 'npm$namespace$Minilog'

declare module 'minilog' {
		declare interface Minilog {
		debug(...msg: any[]): Minilog,
		info(...msg: any[]): Minilog,
		log(...msg: any[]): Minilog,
		warn(...msg: any[]): Minilog,
		error(...msg: any[]): Minilog
	}

	declare function Minilog(namespace: string): Minilog

		declare module.exports: undefined


}

declare module 'npm$namespace$Minilog' {
		declare export interface MinilogBackends {
		array: any,
		browser: any,
		console: Console,
		localstorage: any,
		jQuery: any
	}

	declare export function enable(): Minilog

	declare export function disable(): Minilog

	declare export function pipe(dest: any): Transform

	declare export class Filter extends Transform {
		allow(name: any, level?: any): Filter;
		deny(name: any, level?: any): Filter;
		clear(): Filter;
		test(name: any, level: any): boolean;
		defaultResult: boolean;
		enabled: boolean
	}

	declare export class Console extends Transform {
		formatters: string[];
		color: Transform;
		minilog: Transform;
		formatClean: Transform;
		formatColor: Transform;
		formatNpm: Transform;
		formatLearnboost: Transform;
		formatMinilog: Transform;
		formatWithStack: Transform
	}

	declare export class Transform  {
		write(name: any, level: any, args: any): void;
		pipe(dest: any): any;
		unpipe(from: any): Transform;
		mixin(dest: any): void
	}

	
}
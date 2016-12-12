import type { IDebug } from 'npm$namespace$debug'

declare module 'debug' {
					declare module.exports: IDebug


}

declare module 'npm$namespace$debug' {
		declare export interface IDebug {
		(namespace: string): debug.IDebugger,
		coerce: (val: any) => any,
		disable: () => void,
		enable: (namespaces: string) => void,
		enabled: (namespaces: string) => boolean,
		names: string[],
		skips: string[],
		formatters: IFormatters
	}

	declare export interface IFormatters {
		[formatter: string]: Function
	}

	declare export interface IDebugger {
		(formatter: any, ...args: any[]): void,
		enabled: boolean,
		log: Function,
		namespace: string
	}

			
}
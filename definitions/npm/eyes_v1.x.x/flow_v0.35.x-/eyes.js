

declare module 'eyes' {
		declare export interface InspectorFunction {
		(thing: any, label?: string): string
	}

	declare export interface EyesOptions {
		styles?: {
		all?: string,
		label?: string,
		other?: string,
		key?: string,
		special?: string,
		string?: string,
		number?: string,
		bool?: string,
		regexp?: string
	},
		pretty?: boolean,
		hideFunctions?: boolean,
		stream?: stream.Writable,
		maxLength?: number
	}

	declare export function inspector(options?: EyesOptions): InspectorFunction

	declare export function inspect(thing: any, label?: string): void

		
}
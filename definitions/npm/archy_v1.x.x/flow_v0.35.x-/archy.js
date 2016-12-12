

declare module 'archy' {
		declare interface Data {
		label: string,
		nodes?: (Data | string)[]
	}

	declare interface Options {
		unicode?: boolean
	}

	declare function archy(obj: archy.Data, prefix?: string, opts?: archy.Options): string

	declare function archy(obj: string, prefix?: string, opts?: archy.Options): string

		declare module.exports: undefined


}
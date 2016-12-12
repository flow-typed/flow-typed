

declare module 'through' {
		declare export interface ThroughStream {
		autoDestroy: boolean
	}

	declare function through(
		write?: (data: any) => void, end?: () => void, opts?: {
		autoDestroy: boolean
	}
	): through.ThroughStream

		declare module.exports: undefined


}
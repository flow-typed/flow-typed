import type { FromNowStatic } from 'npm$namespace$FromNow'

declare module 'fromnow' {
					declare module.exports: FromNowStatic


}

declare module 'npm$namespace$FromNow' {
		declare interface FromNowOpts {
		maxChunks?: number,
		useAgo?: boolean,
		useAnd?: boolean
	}

	declare export interface FromNowStatic {
		(date: string | Date, opts?: FromNowOpts): string
	}

			
}
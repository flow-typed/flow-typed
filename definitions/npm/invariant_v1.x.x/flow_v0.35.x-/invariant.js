import type { InvariantStatic } from 'npm$namespace$invariant'

declare module 'invariant' {
					declare module.exports: InvariantStatic


}

declare module 'npm$namespace$invariant' {
		declare interface InvariantStatic {
		(testValue: any, format?: string, ...extra: any[]): void
	}

			
}
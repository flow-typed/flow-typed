import type { rails } from 'npm$namespace$dojox'

declare module 'dojox.rails' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface rails {
		live(selector: any, evtName: any, fn: any): void
	}

			
}

declare module 'dojox/rails' {
					declare module.exports: rails


}
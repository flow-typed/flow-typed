import type { jsonPath } from 'npm$namespace$dojox'

declare module 'dojox.jsonPath' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface jsonPath {
		
	}

			
}

declare module 'jsonPath' {
		declare interface query {
		(obj: Object, expr: String, arg: Object): void
	}

			
}

declare module 'dojox/jsonPath' {
					declare module.exports: jsonPath


}

declare module 'dojox/jsonPath/query' {
					declare module.exports: query


}
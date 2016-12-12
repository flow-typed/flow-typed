

declare module 'dojox.secure' {
					
}

declare module 'secure' {
		declare interface DOM {
		(element: any): void
	}

	declare interface sandbox {
		(element: any): void
	}

	declare interface capability {
		keywords: any[],
		validate(script: String, safeLibraries: any[], safeGlobals: Object): void
	}

			
}

declare module 'dojox/secure/DOM' {
					declare module.exports: DOM


}

declare module 'dojox/secure/sandbox' {
					declare module.exports: sandbox


}

declare module 'dojox/secure/capability' {
					declare module.exports: capability


}
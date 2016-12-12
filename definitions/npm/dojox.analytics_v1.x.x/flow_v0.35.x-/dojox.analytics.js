import type { analytics } from 'npm$namespace$dojox'

declare module 'dojox.analytics' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface analytics {
		
	}

			
}

declare module 'analytics' {
				declare class Urchin  {
		constructor(args: any): this;
		acct: string;
		GAonLoad(): void;
		trackPageView(url: String): void
	}

	
}

declare module 'plugins' {
		declare interface consoleMessages {
		
	}

			
}

declare module 'dojox/analytics' {
					declare module.exports: analytics


}

declare module 'dojox/analytics/Urchin' {
					declare module.exports: Urchin


}

declare module 'dojox/analytics/plugins/consoleMessages' {
					declare module.exports: consoleMessages


}
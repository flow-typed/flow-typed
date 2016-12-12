

declare module 'angular-gettext' {
					
}

declare module 'gettext' {
		declare interface gettextCatalog {
		debug: boolean,
		debugPrefix: string,
		showTranslatedMarkers: boolean,
		translatedMarkerPrefix: string,
		translatedMarkerSuffix: string,
		strings: {
		
	},
		baseLanguage: string,
		setCurrentLanguage(lang: string): void,
		getCurrentLanguage(): string,
		setStrings(language: string, strings: {
		[key: string]: string | string[]
	}): void,
		getStringForm(string: string, n: number): string,
		getString(string: string, scope?: any, context?: string): string,
		getPlural(n: number, string: string, stringPlural: string, context?: any): string,
		loadRemote(url: string): ng.IHttpPromise<any>
	}

	declare interface gettextFunction {
		(dummyString: string): string
	}

			
}
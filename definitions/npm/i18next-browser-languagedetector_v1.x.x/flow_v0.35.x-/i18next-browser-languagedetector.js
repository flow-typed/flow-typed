

declare module 'i18next-browser-languagedetector' {
					


}

declare module 'npm$namespace$I18next' {
		declare interface I18nextStatic {
		
	}

	declare interface I18nextOptions {
		
	}

			
}

declare module 'npm$namespace$i18nextBrowserLanguageDetector' {
		declare interface LanguageDetectorOptions {
		caches?: Array<string> | boolean,
		cookieDomain?: string,
		cookieExpirationDate?: Date,
		lookupCookie?: string,
		lookupFromPathIndex?: number,
		lookupQuerystring?: string,
		lookupSession?: string,
		order?: Array<string>
	}

	declare interface CustomDetector {
		name: string,
		cacheUserLanguage: (lng: string, options: Object) => void,
		lookup: (options: Object) => string
	}

	declare interface I18nextOptions {
		detection?: LanguageDetectorOptions
	}

	declare interface I18nextStatic {
		use(module: LngDetector): I18nextStatic
	}

		declare class LngDetector  {
		constructor(services?: any, options?: LanguageDetectorOptions): this;
		addDetector(detector: CustomDetector): LngDetector;
		init(options?: LanguageDetectorOptions): void
	}

	
}
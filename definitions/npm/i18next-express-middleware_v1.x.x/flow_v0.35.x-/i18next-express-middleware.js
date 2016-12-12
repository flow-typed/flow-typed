

declare module 'i18next-express-middleware' {
		declare export interface i18nextExpressMiddleware {
		LanguageDetector(): express.Handler,
		missingKeyHandler(): express.Handler
	}

	declare export interface i18nextCustomDetection {
		name: string,
		lookup: (req: express.Request, res: express.Response, options?: Object) => void,
		cacheUserLanguage: (
		req: express.Request, res: express.Response, lng?: any, options?: Object
	) => void
	}

	declare export function getResourcesHandler(i18next: I18nextStatic, options: Object): express.Handler

	declare export function handle(i18next: I18nextStatic, options?: Object): express.Handler

	declare export function missingKeyHandler(i18next: I18nextStatic, options: Object): express.Handler

	declare export class LanguageDetector  {
		constructor(services?: any, options?: Object, allOptions?: Object): this;
		addDetector(detector: i18nextCustomDetection): void;
		cacheUserLanguage(req: express.Request, res: express.Response, detectionOrder: any): void;
		detect(req: express.Request, res: express.Response, detectionOrder: any): void;
		init(services: any, options?: Object, allOptions?: Object): void
	}

	
}

declare module 'npm$namespace$I18next' {
		declare interface I18nextOptions {
		
	}

			
}

declare module 'npm$namespace$i18nextExpressMiddleware' {
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

	declare interface I18nextOptions {
		detection?: LanguageDetectorOptions
	}

			
}


declare module 'helmet' {
	declare export type HelmetCspDirectiveValue = string | IHelmetContentSecurityPolicyDirectiveFunction;

	declare export interface IHelmetConfiguration {
		contentSecurityPolicy?: boolean | IHelmetContentSecurityPolicyConfiguration,
		dnsPrefetchControl?: boolean | IHelmetDnsPrefetchControlConfiguration,
		frameguard?: boolean | IHelmetFrameguardConfiguration,
		hidePoweredBy?: boolean | IHelmetHidePoweredByConfiguration,
		hpkp?: boolean | IHelmetHpkpConfiguration,
		hsts?: boolean | IHelmetHstsConfiguration,
		ieNoOpen?: boolean,
		noCache?: boolean,
		noSniff?: boolean,
		xssFilter?: boolean | IHelmetXssFilterConfiguration
	}

	declare export interface IHelmetContentSecurityPolicyDirectiveFunction {
		(req: express.Request, res: express.Response): string
	}

	declare export interface IHelmetContentSecurityPolicyDirectives {
		baseUri?: HelmetCspDirectiveValue[],
		childSrc?: HelmetCspDirectiveValue[],
		connectSrc?: HelmetCspDirectiveValue[],
		defaultSrc?: HelmetCspDirectiveValue[],
		fontSrc?: HelmetCspDirectiveValue[],
		formAction?: HelmetCspDirectiveValue[],
		frameAncestors?: HelmetCspDirectiveValue[],
		frameSrc?: HelmetCspDirectiveValue[],
		imgSrc?: HelmetCspDirectiveValue[],
		mediaSrc?: HelmetCspDirectiveValue[],
		objectSrc?: HelmetCspDirectiveValue[],
		pluginTypes?: HelmetCspDirectiveValue[],
		reportUri?: string,
		sandbox?: HelmetCspDirectiveValue[],
		scriptSrc?: HelmetCspDirectiveValue[],
		styleSrc?: HelmetCspDirectiveValue[]
	}

	declare export interface IHelmetContentSecurityPolicyConfiguration {
		reportOnly?: boolean,
		setAllHeaders?: boolean,
		disableAndroid?: boolean,
		browserSniff?: boolean,
		directives?: IHelmetContentSecurityPolicyDirectives
	}

	declare export interface IHelmetDnsPrefetchControlConfiguration {
		allow?: boolean
	}

	declare export interface IHelmetFrameguardConfiguration {
		action?: string,
		domain?: string
	}

	declare export interface IHelmetHidePoweredByConfiguration {
		setTo?: string
	}

	declare export interface IHelmetSetIfFunction {
		(req: express.Request, res: express.Response): boolean
	}

	declare export interface IHelmetHpkpConfiguration {
		maxAge: number,
		sha256s: string[],
		includeSubdomains?: boolean,
		reportUri?: string,
		reportOnly?: boolean,
		setIf?: IHelmetSetIfFunction
	}

	declare export interface IHelmetHstsConfiguration {
		maxAge: number,
		includeSubdomains?: boolean,
		preload?: boolean,
		setIf?: IHelmetSetIfFunction,
		force?: boolean
	}

	declare export interface IHelmetXssFilterConfiguration {
		setOnOldIE?: boolean
	}

	declare export interface Helmet {
		(options?: IHelmetConfiguration): express.RequestHandler,
		contentSecurityPolicy(options?: IHelmetContentSecurityPolicyConfiguration): express.RequestHandler,
		dnsPrefetchControl(options?: IHelmetDnsPrefetchControlConfiguration): express.RequestHandler,
		frameguard(options?: IHelmetFrameguardConfiguration): express.RequestHandler,
		hidePoweredBy(options?: IHelmetHidePoweredByConfiguration): express.RequestHandler,
		hpkp(options?: IHelmetHpkpConfiguration): express.RequestHandler,
		hsts(options?: IHelmetHstsConfiguration): express.RequestHandler,
		ieNoOpen(): express.RequestHandler,
		noCache(options?: Object): express.RequestHandler,
		noSniff(): express.RequestHandler,
		xssFilter(options?: IHelmetXssFilterConfiguration): express.RequestHandler
	}

			declare module.exports: Helmet


}


declare module 'gapi.pagespeedonline' {
		declare interface GoogleApiPageSpeedOnlineResource {
		kind: string,
		id: string,
		responseCode: number,
		title: string,
		score: number,
		pageStats: {
		numberResources: number,
		numberHosts: number,
		totalRequestBytes: string,
		numberStaticResources: number,
		htmlResponseBytes: string,
		textResponseBytes: string,
		cssResponsebytes: string,
		imageResponseBytes: string,
		javascriptResponsebytes: string,
		flashResponseBytes: string,
		otherResponsebytes: string,
		numberJsResources: number,
		numberCssResources: number
	},
		formattedResults: {
		locale: string,
		ruleResults: {
		AvoidBadRequests: GoogleApiPageSpeedOnlineRuleResource,
		AvoidCharsetInMetaTag: GoogleApiPageSpeedOnlineRuleResource,
		AvoidCssImport: GoogleApiPageSpeedOnlineRuleResource,
		AvoidLandingPageRedirects: GoogleApiPageSpeedOnlineRuleResource,
		AvoidLongRunningScripts: GoogleApiPageSpeedOnlineRuleResource,
		DeferParsingJavaScript: GoogleApiPageSpeedOnlineRuleResource,
		EnableGzipCompression: GoogleApiPageSpeedOnlineRuleResource,
		InlineSmallCss: GoogleApiPageSpeedOnlineRuleResource,
		InlineSmallJavaScript: GoogleApiPageSpeedOnlineRuleResource,
		LeverageBrowserCaching: GoogleApiPageSpeedOnlineRuleResource,
		MinifyCss: GoogleApiPageSpeedOnlineRuleResource,
		MinifyHTML: GoogleApiPageSpeedOnlineRuleResource,
		MinifyJavaScript: GoogleApiPageSpeedOnlineRuleResource,
		MinimizeRedirects: GoogleApiPageSpeedOnlineRuleResource,
		MinimizeRequestSize: GoogleApiPageSpeedOnlineRuleResource,
		OptimizeImages: GoogleApiPageSpeedOnlineRuleResource,
		OptimizeTheOrderOfStylesAndScripts: GoogleApiPageSpeedOnlineRuleResource,
		PreferAsyncResources: GoogleApiPageSpeedOnlineRuleResource,
		PutCssInTheDocumentHead: GoogleApiPageSpeedOnlineRuleResource,
		RemoveQueryStringsFromStaticResources: GoogleApiPageSpeedOnlineRuleResource,
		ServerResourcesFromAConsistentUrl: GoogleApiPageSpeedOnlineRuleResource,
		ServerScaledImages: GoogleApiPageSpeedOnlineRuleResource,
		ServeResponseTime: GoogleApiPageSpeedOnlineRuleResource,
		SpecifyACacheValidator: GoogleApiPageSpeedOnlineRuleResource,
		SpecifyAVaryAcceptEncodingHeader: GoogleApiPageSpeedOnlineRuleResource,
		SpecifyCharsetEarly: GoogleApiPageSpeedOnlineRuleResource,
		SpecifyImageDimensions: GoogleApiPageSpeedOnlineRuleResource,
		SpriteImages: GoogleApiPageSpeedOnlineRuleResource
	}
	},
		version: {
		major: number,
		minor: number
	},
		invalidRules: string[]
	}

	declare interface GoogleApiPageSpeedOnlineRuleResource {
		localizedRuleName: string,
		ruleScore: number,
		ruleImpact: number,
		urlBlocks: {
		header: {
		format: string,
		args: {
		type: string,
		value: string
	}[]
	},
		urls: {
		result: {
		format: string,
		args: {
		type: string,
		value: string
	}[]
	},
		details: {
		format: string,
		args: {
		type: string,
		value: string
	}[]
	}[]
	}[]
	}[]
	}

			
}

declare module 'pagespeedonline' {
		declare export interface pagespeedapi {
		runpagespeed(
		object: {
		url: string,
		locale?: string,
		rule?: string[],
		screenshot?: boolean,
		stategy?: string,
		fields?: string
	}
	): HttpRequest<GoogleApiPageSpeedOnlineResource>
	}

			
}
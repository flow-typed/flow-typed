

declare module 'angular-google-analytics' {
					
}

declare module 'analytics' {
		declare interface AnalyticsProvider {
		delayScriptTag(val: boolean): AnalyticsProvider,
		enterTestMode(): void,
		getCookieConfig(): Object,
		ignoreFirstPageLoad(val: boolean): AnalyticsProvider,
		logAllCalls(val: boolean): AnalyticsProvider,
		setAccount(tracker: string | Object | Array<Object>): AnalyticsProvider,
		setCookieConfig(config: Object): AnalyticsProvider,
		setCrossLinkDomains(domains: Array<string>): AnalyticsProvider,
		setCurrency(currencyCode: string): AnalyticsProvider,
		setDomainName(domain: string): AnalyticsProvider,
		setExperimentId(id: string): AnalyticsProvider,
		setHybridMobileSupport(val: boolean): AnalyticsProvider,
		setPageEvent(name: string): AnalyticsProvider,
		setRemoveRegExp(regex: RegExp): AnalyticsProvider,
		startOffline(val: boolean): AnalyticsProvider,
		trackPages(doTrack: boolean): AnalyticsProvider,
		trackPrefix(prefix: string): AnalyticsProvider,
		trackUrlParams(val: boolean): AnalyticsProvider,
		useAnalytics(val: boolean): AnalyticsProvider,
		useCrossDomainLinker(val: boolean): AnalyticsProvider,
		useDisplayFeatures(val: boolean): AnalyticsProvider,
		useECommerce(val: boolean, enhanced: boolean): AnalyticsProvider,
		useEnhancedLinkAttribution(val: boolean): AnalyticsProvider
	}

			
}
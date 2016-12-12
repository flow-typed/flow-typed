import type { RaygunStatic } from 'npm$namespace$raygun'

declare module 'raygun4js' {
					
}

declare module 'npm$namespace$raygun' {
		declare interface IStackTrace {
		LineNumber: number,
		ColumnNumber: number,
		ClassName: string,
		FileName: string,
		MethodName: string
	}

	declare interface IPayload {
		OccurredOn: Date,
		Details: {
		Error: {
		ClassName: string,
		Message: string,
		StackTrace: IStackTrace[]
	},
		Environment: {
		UtcOffset: number,
		User-Language: string,
		Document-Mode: number,
		Browser-Width: number,
		Browser-Height: number,
		Screen-Width: number,
		Screen-Height: number,
		Color-Depth: number,
		Browser: string,
		Browser-Name: string,
		Browser-Version: string,
		Platform: string
	},
		Client: {
		Name: string,
		Version: string
	},
		UserCustomData: any,
		Tags: string[],
		Request: {
		Url: string,
		QueryString: string,
		Headers: {
		User-Agent: string,
		Referer: string,
		Host: string
	}
	},
		Version: string
	}
	}

	declare interface IRaygunOptions {
		allowInsecureSubmissions?: boolean,
		ignoreAjaxAbort?: boolean,
		ignoreAjaxError?: boolean,
		disableAnonymousUserTracking?: boolean,
		excludedHostnames?: (string | RegExp)[],
		excludedUserAgents?: (string | RegExp)[],
		wrapAsynchronousCallbacks?: boolean,
		debugMode?: boolean,
		ignore3rdPartyErrors?: boolean
	}

	declare interface RaygunStatic {
		noConflict(): RaygunStatic,
		constructNewRaygun(): RaygunStatic,
		init(apiKey: string, options?: IRaygunOptions, customdata?: any): RaygunStatic,
		withCustomData(customdata: any): RaygunStatic,
		withTags(tags: string[]): RaygunStatic,
		attach(): RaygunStatic,
		detach(): RaygunStatic,
		send(e: Error, customData?: any, tags?: string[]): RaygunStatic,
		setUser(
		user: string, isAnonymous?: boolean, email?: string, fullName?: string, firstName?: string, uuid?: string
	): RaygunStatic,
		resetAnonymousUser(): void,
		setVersion(version: string): RaygunStatic,
		saveIfOffline(enableOffline: boolean): RaygunStatic,
		filterSensitiveData(filteredKeys: string[]): RaygunStatic,
		setFilterScope(scope: string): RaygunStatic,
		whitelistCrossOriginDomains(whitelist: string[]): RaygunStatic,
		onBeforeSend(callback: (payload: IPayload) => IPayload): RaygunStatic
	}

			
}

declare module 'Raygun' {
					declare module.exports: undefined


}
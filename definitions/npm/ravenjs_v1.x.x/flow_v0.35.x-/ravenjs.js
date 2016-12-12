

declare module 'ravenjs' {
		declare interface RavenOptions {
		logger?: string,
		release?: string,
		environment?: string,
		serverName?: string,
		ignoreErrors?: string[],
		ignoreUrls?: RegExp[],
		whitelistUrls?: RegExp[],
		includePaths?: RegExp[],
		tags?: {
		[id: string]: string
	},
		dataCallback?: (data: any) => any,
		shouldSendCallback?: (data: any) => boolean,
		maxMessageLength?: number,
		autoBreadcrumbs?: any,
		maxBreadcrumbs?: number,
		transport?: (options: RavenTransportOptions) => void,
		allowSecretKey?: boolean
	}

	declare interface RavenAdditionalData {
		logger?: string,
		level?: string,
		tags?: {
		[id: string]: string
	},
		extra?: any
	}

	declare interface RavenStatic {
		VERSION: string,
		Plugins: {
		[id: string]: RavenPlugin
	},
		afterLoad(): void,
		noConflict(): RavenStatic,
		config(dsn: string, options?: RavenOptions): RavenStatic,
		install(): RavenStatic,
		addPlugin(plugin: RavenPlugin, ...pluginArgs: any[]): RavenStatic,
		context(func: Function, ...args: any[]): void,
		context(options: RavenAdditionalData, func: Function, ...args: any[]): void,
		wrap(func: Function): Function,
		wrap(options: RavenAdditionalData, func: Function): Function,
		wrap<T>(func: T): T,
		wrap<T>(options: RavenAdditionalData, func: T): T,
		uninstall(): RavenStatic,
		captureException(ex: Error, options?: RavenAdditionalData): RavenStatic,
		captureMessage(msg: string, options?: RavenAdditionalData): RavenStatic,
		setUserContext(): RavenStatic,
		setUserContext(user: {
		id?: string,
		username?: string,
		email?: string
	}): RavenStatic,
		setTransport(transportFunction: (options: RavenTransportOptions) => void): RavenStatic,
		lastEventId(): string,
		isSetup(): boolean,
		showReportDialog(options: RavenOptions): void,
		setTagsContext(tags: {
		[id: string]: string
	}): void,
		setExtraContext(context: any): void
	}

	declare interface RavenTransportOptions {
		url: string,
		data: any,
		auth: {
		sentry_version: string,
		sentry_client: string,
		sentry_key: string
	},
		onSuccess: () => void,
		onFailure: () => void
	}

	declare interface RavenPlugin {
		(raven: RavenStatic, ...args: any[]): RavenStatic
	}

			
}

declare module 'raven-js' {
					declare module.exports: undefined


}
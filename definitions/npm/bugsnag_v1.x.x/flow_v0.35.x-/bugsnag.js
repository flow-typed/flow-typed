

declare module 'bugsnag' {
		declare interface BugsnagUser {
		id?: string,
		name?: string,
		email?: string
	}

	declare interface BugsnagStatic {
		apiKey: string,
		appVersion: string,
		autoNotify: boolean,
		beforeNotify: (payload: any, metaData: any) => boolean,
		context: string,
		disableLog: boolean,
		endpoint: string,
		inlineScript: boolean,
		maxDepth: number,
		metaData: any,
		notifyHandler: string,
		notifyReleaseStages: string[],
		projectRoot: string,
		releaseStage: string,
		user: BugsnagUser,
		refresh(): void,
		noConflict(): BugsnagStatic,
		notifyException(exception: Error, name?: string, metaData?: any, severity?: string): void,
		notify(name: string, message: string, metaData?: any, severity?: string): void
	}

			
}

declare module 'Bugsnag' {
					declare module.exports: undefined


}
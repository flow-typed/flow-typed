

declare module 'angular-loading-bar' {
					
}

declare module 'npm$namespace$angular' {
		declare interface IRequestShortcutConfig {
		ignoreLoadingBar?: boolean
	}

			
}

declare module 'loadingBar' {
		declare interface ILoadingBarProvider {
		includeSpinner?: boolean,
		includeBar?: boolean,
		spinnerTemplate?: string,
		latencyThreshold?: number
	}

			
}
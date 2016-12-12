

declare module 'angular-feature-flags' {
					
}

declare module 'featureflags' {
		declare export interface FlagData {
		key: string,
		active: boolean,
		name: string,
		description: string
	}

	declare export interface FeatureFlagsProvider {
		setInitialFlags(flags: Array<FlagData>): void
	}

	declare export interface FeatureFlagsService {
		set(
		flagsPromise: angular.IPromise<FlagData> | angular.IHttpPromise<FlagData>
	): void
	}

			
}


declare module 'angular-http-auth' {
					
}

declare module 'httpAuth' {
		declare interface IAuthService {
		loginConfirmed(data?: any, configUpdater?: Function): void,
		loginCancelled(data?: any, reason?: any): void
	}

	declare interface IHttpBuffer {
		append(
		config: ng.IRequestConfig, deferred: {
		resolve(data: any): void,
		reject(data: any): void
	}
	): void,
		rejectAll(reason?: any): void,
		retryAll(updater?: Function): void
	}

			
}
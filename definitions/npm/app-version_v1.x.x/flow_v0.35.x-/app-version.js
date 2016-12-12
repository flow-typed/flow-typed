

declare module 'app-version' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IAppVersionService {
		getVersionNumber(): ng.IPromise<string>,
		getVersionCode(): ng.IPromise<string>
	}

			
}


declare module 'angular-load' {
					
}

declare module 'load' {
		declare interface IAngularLoadService {
		loadScript(url: string): ng.IPromise<any>,
		loadCSS(url: string): ng.IPromise<any>
	}

			
}
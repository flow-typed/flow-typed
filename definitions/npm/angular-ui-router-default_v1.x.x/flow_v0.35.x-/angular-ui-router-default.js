

declare module 'angular-ui-router-default' {
					
}

declare module 'ui' {
	declare export type StateDefaultSpecifier = string | ((...args: any[]) => string) | ((...args: any[]) => ng.IPromise<string>) | (string | ((...args: any[]) => string))[] | (string | ((...args: any[]) => ng.IPromise<string>))[];

	declare interface IState {
		default?: StateDefaultSpecifier
	}

			
}
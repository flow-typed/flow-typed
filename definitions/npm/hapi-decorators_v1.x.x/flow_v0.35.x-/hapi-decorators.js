

declare module 'hapi-decorators' {
		declare interface ControllerStatic {
		new (): Controller
	}

	declare export interface Controller {
		baseUrl: string,
		routes: () => hapi.IRouteConfiguration[]
	}

	declare interface IRouteSetup {
		(target: any, key: any, descriptor: any): any
	}

	declare interface IRouteDecorator {
		(method: string, path: string): IRouteSetup
	}

	declare interface IRouteConfig {
		(path: string): IRouteSetup
	}

	declare interface IValidateConfig {
		headers?: boolean | hapi.IJoi | hapi.IValidationFunction,
		params?: boolean | hapi.IJoi | hapi.IValidationFunction,
		query?: boolean | hapi.IJoi | hapi.IValidationFunction,
		payload?: boolean | hapi.IJoi | hapi.IValidationFunction,
		errorFields?: any,
		failAction?: string | hapi.IRouteFailFunction,
		options?: any
	}

	declare interface ICacheConfig {
		privacy?: string,
		expiresIn?: number,
		expiresAt?: number
	}

	declare export function controller(baseUrl: string): (target: ControllerStatic) => void

	declare export function config(
		config: hapi.IRouteAdditionalConfigurationOptions
	): (target: any, key: any, descriptor: any) => any

	declare export function validate(config: IValidateConfig): (target: any, key: any, descriptor: any) => any

	declare export function cache(cacheConfig: ICacheConfig): (target: any, key: any, descriptor: any) => any

	declare export function pre(
		pre: {
		[key: string]: any
	}
	): (target: any, key: any, descriptor: any) => any

		
}
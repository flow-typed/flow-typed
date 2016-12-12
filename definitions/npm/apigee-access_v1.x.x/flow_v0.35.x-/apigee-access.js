

declare module 'apigee-access' {
					declare module.exports: undefined


}

declare module 'ApigeeAccess' {
		declare interface CacheOptions {
		resource?: string,
		scope?: "global" | "application" | "exclusive",
		defaultTtl?: number,
		timeout?: number
	}

	declare interface Cache {
		put(key: string, data: any, ttl?: number, callback?: (err: any) => void): void,
		get(key: string, callback: (err: any, data: any) => void): void,
		remove(key: string, callback?: (err: any) => void): void
	}

	declare interface SecureVault {
		getKeys(callback: (err: any, data: any) => void): void,
		get(key: string, callback: (err: any, data: any) => void): void
	}

	declare interface QuotaService {
		apply(
		options?: QuotaServiceApplyOptions, callback?: (err: any, data: QuotaServiceApplyCallbackData) => void
	): void
	}

	declare interface QuotaServiceApplyOptions {
		identifier: string,
		timeUnit: "minute" | "hour" | "day" | "week" | "month",
		allow: number,
		interval?: number,
		weight?: number
	}

	declare interface QuotaServiceApplyCallbackData {
		used: number,
		allowed: number,
		isAllowed: boolean,
		expiryTime: number,
		timestamp: number
	}

	declare function getVariable(request: any, name: string): string | number | boolean

	declare function setVariable(request: any, name: string, value: string | number | boolean): void

	declare function setIntVariable(request: any, name: string, value: string | number): void

	declare function deleteVariable(request: any, name: string): void

	declare function getCache(name: string, options?: CacheOptions): any

	declare function getVault(name: string, scope?: "organization" | "environment"): SecureVault

	declare function getQuota(options?: any): QuotaService

	declare function getMode(): "apigee" | "standalone"

		
}
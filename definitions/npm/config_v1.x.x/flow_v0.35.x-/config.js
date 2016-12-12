

declare module 'config' {
					declare module.exports: IConfig


}

declare module 'c' {
		declare interface IUtil {
		extendDeep(mergeInto: any, mergeFrom: any, depth?: number): any,
		cloneDeep(copyFrom: any, depth?: number): any,
		equalsDeep(object1: any, object2: any, dept?: number): boolean,
		diffDeep(object1: any, object2: any, depth?: number): any,
		makeImmutable(object: any, propertyName?: string, propertyValue?: string): any,
		makeHidden(object: any, propertyName: string, propertyValue?: string): any,
		getEnv(varName: string): string
	}

	declare interface IConfig {
		get<T>(setting: string): T,
		has(setting: string): boolean,
		util: IUtil
	}

			
}


declare module 'i18next-2.0.17' {
		declare interface IResourceStore {
		[language: string]: IResourceStoreLanguage
	}

	declare interface IResourceStoreLanguage {
		[namespace: string]: IResourceStoreKey
	}

	declare interface IResourceStoreKey {
		[key: string]: any
	}

	declare interface I18nTranslateOptions {
		defaultValue?: any,
		toAdd?: any,
		child?: any,
		sprintf?: any,
		count?: any,
		context?: any
	}

	declare interface I18nextOptions {
		lng?: string,
		load?: string,
		preload?: string[],
		lowerCaseLng?: boolean,
		returnObjectTrees?: boolean,
		fallbackLng?: string | boolean,
		detectLngQS?: string,
		ns?: any,
		nsseparator?: string,
		keyseparator?: string,
		selectorAttr?: string,
		debug?: boolean,
		resGetPath?: string,
		resPostPath?: string,
		getAsync?: boolean,
		postAsync?: boolean,
		resStore?: IResourceStore,
		useLocalStorage?: boolean,
		localStorageExpirationTime?: number,
		dynamicLoad?: boolean,
		sendMissing?: boolean,
		sendMissingTo?: string,
		sendType?: string,
		interpolationPrefix?: string,
		interpolationSuffix?: string,
		reusePrefix?: string,
		reuseSuffix?: string,
		pluralSuffix?: string,
		pluralNotFound?: string,
		contextNotFound?: string,
		setJqueryExt?: boolean,
		defaultValueFromContent?: boolean,
		useDataAttrOptions?: boolean,
		cookieExpirationTime?: number,
		useCookie?: boolean,
		cookieName?: string,
		postProcess?: string,
		replace?: any
	}

	declare interface I18nextStatic {
		addPostProcessor(name: string, fn: (value: any, key: string, options: any) => string): void,
		addResources(language: string, namespace: string, resources: IResourceStoreKey): void,
		detectLanguage(): string,
		functions: {
		extend(target: any, ...objs: any[]): Object,
		extend(deep: boolean, target: any, ...objs: any[]): Object,
		each(
		collection: any, callback: (indexInArray: any, valueOfElement: any) => any
	): any,
		ajax(settings: JQueryAjaxSettings): JQueryXHR,
		ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR,
		cookie: {
		create: (name: string, value: string, minutes: number) => void,
		read: (name: string) => string,
		remove: (name: string) => void
	},
		detectLanguage(): string,
		log(message: string): void,
		toLanguages(language: string): string[],
		regexEscape(str: string): string
	},
		init(
		callback?: (err: any, t: (key: string, options?: any) => string) => void
	): JQueryDeferred<any>,
		init(
		options?: I18nextOptions, callback?: (err: any, t: (key: string, options?: any) => string) => void
	): JQueryDeferred<any>,
		lng(): string,
		loadNamespace(namespace: string, callback?: () => void): void,
		loadNamespaces(namespaces: string[], callback?: () => void): void,
		pluralExtensions: {
		addRule(
		language: string, obj: {
		name: string,
		numbers: number[],
		plurals: (n: number) => number
	}
	): void,
		get(language: string, count: number): number,
		rules: any,
		setCurrentLng: (language: string) => void
	},
		preload(
		language: string, callback?: (err: any, t: (key: string, options?: any) => string) => void
	): void,
		preload(
		languages: string[], callback?: (err: any, t: (key: string, options?: any) => string) => void
	): void,
		setDefaultNamespace(namespace: string): void,
		setLng(
		language: string, callback?: (err: any, t: (key: string, options?: any) => string) => void
	): void,
		sync: {
		load: (
		languages: string[], options: I18nextOptions, callback: (err: Error, store: IResourceStore) => void
	) => void,
		postMissing: (
		language: string, namespace: string, key: string, defaultValue: any, languages: string[]
	) => void
	},
		t(key: string, options?: I18nTranslateOptions): string,
		translate(key: string, options?: I18nTranslateOptions): string,
		exists(key: string, options?: any): boolean,
		use(module: any): I18nextStatic
	}

	declare interface JQueryStatic {
		i18n: I18nextStatic,
		t: (key: string, options?: any) => string
	}

	declare interface JQuery {
		i18n: (options?: I18nextOptions) => void
	}

			
}

declare module 'npm$namespace$I18next' {
		declare export interface I18nextStatic {
		
	}

	declare export interface I18nextOptions {
		
	}

			
}

declare module 'i18next' {
					declare module.exports: undefined


}

declare module 'i18next-client' {
					declare module.exports: undefined


}
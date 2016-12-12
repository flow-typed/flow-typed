import type { I18n } from 'npm$namespace$I18next'

declare module 'i18next' {
					declare module.exports: I18n


}

declare module 'npm$namespace$I18next' {
	declare type TranslationFunction = (key: string, options?: TranslationOptions) => string;

	declare interface ResourceStore {
		[language: string]: ResourceStoreLanguage
	}

	declare interface ResourceStoreLanguage {
		[namespace: string]: ResourceStoreKey
	}

	declare interface ResourceStoreKey {
		[key: string]: any
	}

	declare interface InterpolationOptions {
		escapeValue?: boolean,
		prefix?: string,
		suffix?: string,
		prefixEscaped?: string,
		suffixEscaped?: string,
		unescapeSuffix?: string,
		unescapePrefix?: string,
		nestingPrefix?: string,
		nestingSuffix?: string,
		nestingPrefixEscaped?: string,
		nestedSuffixEscaped?: string,
		defaultVariables?: any
	}

	declare interface TranslationOptions {
		defaultValue?: string,
		count?: number,
		context?: any,
		replace?: any,
		lng?: string,
		lngs?: string[],
		fallbackLng?: string,
		ns?: string | string[],
		keySeparator?: string,
		nsSeparator?: string,
		returnObjects?: boolean,
		joinArrays?: string,
		postProcess?: string | any[],
		interpolation?: InterpolationOptions
	}

	declare interface Options {
		debug?: boolean,
		resources?: ResourceStore,
		lng?: string,
		fallbackLng?: string,
		ns?: string | string[],
		defaultNS?: string,
		fallbackNS?: string | string[],
		whitelist?: string[],
		lowerCaseLng?: boolean,
		load?: string,
		preload?: string[],
		keySeparator?: string,
		nsSeparator?: string,
		pluralSeparator?: string,
		contextSeparator?: string,
		saveMissing?: boolean,
		saveMissingTo?: string,
		missingKeyHandler?: (lng: string, ns: string, key: string, fallbackValue: string) => void,
		parseMissingKeyHandler?: (key: string) => void,
		appendNamespaceToMissingKey?: boolean,
		postProcess?: string | any[],
		returnNull?: boolean,
		returnEmptyString?: boolean,
		returnObjects?: boolean,
		returnedObjectHandler?: (key: string, value: string, options: any) => void,
		joinArrays?: string,
		overloadTranslationOptionHandler?: (args: any[]) => TranslationOptions,
		interpolation?: InterpolationOptions,
		detection?: any,
		backend?: any,
		cache?: any
	}

		declare class I18n  {
		constructor(options?: Options, callback?: (err: any, t: TranslationFunction) => void): this;
		init(options?: Options, callback?: (err: any, t: TranslationFunction) => void): I18n;
		loadResources(callback?: (err: any) => void): void;
		language: string;
		languages: string[];
		use(module: any): I18n;
		changeLanguage(lng: string, callback?: (err: any, t: TranslationFunction) => void): void;
		getFixedT(lng?: string, ns?: string | string[]): TranslationFunction;
		t(key: string, options?: TranslationOptions): string | any | Array<any>;
		exists(): boolean;
		setDefaultNamespace(ns: string): void;
		loadNamespaces(ns: string[], callback?: () => void): void;
		loadLanguages(lngs: string[], callback?: () => void): void;
		dir(lng?: string): string;
		createInstance(options?: Options, callback?: (err: any, t: TranslationFunction) => void): I18n;
		cloneInstance(options?: Options, callback?: (err: any, t: TranslationFunction) => void): I18n;
		on(event: string, listener: () => void): void;
		on(initialized: "initialized", listener: (options: I18next.Options) => void): void;
		on(loaded: "loaded", listener: (loaded: any) => void): void;
		on(
		failedLoading: "failedLoading", listener: (lng: string, ns: string, msg: string) => void
	): void;
		on(
		missingKey: "missingKey", listener: (lngs: any, namespace: string, key: string, res: any) => void
	): void;
		on(added: "added", listener: (lng: string, ns: string) => void): void;
		on(removed: "removed", listener: (lng: string, ns: string) => void): void;
		on(languageChanged: "languageChanged", listener: (lng: string) => void): void;
		off(event: string, listener: () => void): void;
		options: I18next.Options
	}

	
}


declare module 'i18n-node' {
		declare interface i18nAPI {
		locale: string,
		___(phrase: string, ...replace: string[]): string,
		___(phrase: string, replacements: i18n.Replacements): string,
		___(options: i18n.TranslateOptions): string,
		___(options: i18n.TranslateOptions, ...replace: string[]): string,
		___(options: i18n.TranslateOptions, replacements: i18n.Replacements): string,
		___n(options: i18n.PluralOptions): string,
		___n(options: i18n.PluralOptions, count: number): string,
		___n(singular: string, plural: string, count: number): string,
		___n(singular: string, plural: string, count: string): string,
		getLocale(): string,
		setLocale(locale: string): void,
		getCatalog(): i18n.GlobalCatalog,
		getCatalog(locale: string): i18n.LocaleCatalog
	}

			
}

declare module 'npm$namespace$i18n' {
		declare export interface ConfigurationOptions {
		locales?: string[],
		defaultLocale?: string,
		cookie?: string,
		directory?: string,
		updateFiles?: boolean,
		indent?: string,
		extension?: string,
		objectNotation?: boolean,
		prefix?: string,
		register?: any
	}

	declare export interface TranslateOptions {
		phrase: string,
		locale?: string
	}

	declare export interface PluralOptions {
		singular: string,
		plural: string,
		count?: number,
		locale?: string
	}

	declare export interface Replacements {
		[key: string]: string
	}

	declare export interface LocaleCatalog {
		[key: string]: string
	}

	declare export interface GlobalCatalog {
		[key: string]: LocaleCatalog
	}

	declare function configure(options: ConfigurationOptions): void

	declare function init(request: Express.Request, response: Express.Response, next?: Function): void

	declare function ___(phrase: string, ...replace: string[]): string

	declare function ___(phrase: string, replacements: Replacements): string

	declare function ___(options: TranslateOptions): string

	declare function ___(options: TranslateOptions, ...replace: string[]): string

	declare function ___(options: TranslateOptions, replacements: Replacements): string

	declare function ___n(options: PluralOptions): string

	declare function ___n(options: PluralOptions, count: number): string

	declare function ___n(singular: string, plural: string, count: number): string

	declare function ___n(singular: string, plural: string, count: string): string

	declare function setLocale(locale: string): void

	declare function setLocale(request: Express.Request, locale: string): void

	declare function getLocale(): string

	declare function getLocale(request: Express.Request): string

	declare function getCatalog(): GlobalCatalog

	declare function getCatalog(locale: string): LocaleCatalog

	declare function getCatalog(request: Express.Request): LocaleCatalog

	declare function getCatalog(request: Express.Request, locale: string): LocaleCatalog

	declare function overrideLocaleFromQuery(request?: Express.Request): void

		
}

declare module 'i18n' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		languages: string[],
		regions: string[],
		language: string,
		region: string
	}

	declare export interface Response {
		locals: i18nAPI
	}

			
}
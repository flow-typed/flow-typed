

declare module 'angular-translate' {
					declare module.exports: undefined


}

declare module 'translate' {
		declare interface ITranslationTable {
		[key: string]: string | ITranslationTable
	}

	declare interface ILanguageKeyAlias {
		[key: string]: string
	}

	declare interface IStorage {
		get(name: string): string,
		put(name: string, value: string): void
	}

	declare interface IStaticFilesLoaderOptions {
		prefix: string,
		suffix: string,
		key?: string
	}

	declare interface IPartialLoader<T> {
		addPart(name: string, priority?: number): T,
		deletePart(name: string): T,
		isPartAvailable(name: string): boolean
	}

	declare interface ITranslatePartialLoaderService {
		getRegisteredParts(): Array<string>,
		isPartLoaded(name: string, lang: string): boolean
	}

	declare interface ITranslatePartialLoaderProvider {
		setPart(
		lang: string, part: string, table: ITranslationTable
	): ITranslatePartialLoaderProvider
	}

	declare interface ITranslateService {
		(translationId: string, interpolateParams?: any, interpolationId?: string): angular.IPromise<string>,
		(translationId: string[], interpolateParams?: any, interpolationId?: string): angular.IPromise<{
		[key: string]: string
	}>,
		cloakClassName(): string,
		cloakClassName(name: string): ITranslateProvider,
		fallbackLanguage(langKey?: string): string,
		fallbackLanguage(langKey?: string[]): string,
		instant(
		translationId: string, interpolateParams?: any, interpolationId?: string
	): string,
		instant(
		translationId: string[], interpolateParams?: any, interpolationId?: string
	): {
		[key: string]: string
	},
		isPostCompilingEnabled(): boolean,
		preferredLanguage(langKey?: string): string,
		proposedLanguage(): string,
		refresh(langKey?: string): angular.IPromise<void>,
		storage(): IStorage,
		storageKey(): string,
		use(): string,
		use(key: string): angular.IPromise<string>,
		useFallbackLanguage(langKey?: string): void,
		versionInfo(): string,
		loaderCache(): any,
		isReady(): boolean,
		onReady(): angular.IPromise<void>,
		resolveClientLocale(): string
	}

	declare interface ITranslateProvider {
		translations(key?: string): ITranslationTable,
		translations(key: string, translationTable: ITranslationTable): ITranslateProvider,
		cloakClassName(): string,
		cloakClassName(name: string): ITranslateProvider,
		addInterpolation(factory: any): ITranslateProvider,
		useMessageFormatInterpolation(): ITranslateProvider,
		useInterpolation(factory: string): ITranslateProvider,
		useSanitizeValueStrategy(value: string): ITranslateProvider,
		preferredLanguage(): ITranslateProvider,
		preferredLanguage(language: string): ITranslateProvider,
		translationNotFoundIndicator(indicator: string): ITranslateProvider,
		translationNotFoundIndicatorLeft(): string,
		translationNotFoundIndicatorLeft(indicator: string): ITranslateProvider,
		translationNotFoundIndicatorRight(): string,
		translationNotFoundIndicatorRight(indicator: string): ITranslateProvider,
		fallbackLanguage(): ITranslateProvider,
		fallbackLanguage(language: string): ITranslateProvider,
		fallbackLanguage(languages: string[]): ITranslateProvider,
		forceAsyncReload(value: boolean): ITranslateProvider,
		use(): string,
		use(key: string): ITranslateProvider,
		storageKey(): string,
		storageKey(key: string): void,
		uniformLanguageTag(options: string | Object): ITranslateProvider,
		useUrlLoader(url: string): ITranslateProvider,
		useStaticFilesLoader(
		options: IStaticFilesLoaderOptions | {
		files: IStaticFilesLoaderOptions[]
	}
	): ITranslateProvider,
		useLoader(loaderFactory: string, options?: any): ITranslateProvider,
		useLocalStorage(): ITranslateProvider,
		useCookieStorage(): ITranslateProvider,
		useStorage(storageFactory: any): ITranslateProvider,
		storagePrefix(): string,
		storagePrefix(prefix: string): ITranslateProvider,
		useMissingTranslationHandlerLog(): ITranslateProvider,
		useMissingTranslationHandler(factory: string): ITranslateProvider,
		usePostCompiling(value: boolean): ITranslateProvider,
		directivePriority(): number,
		directivePriority(priority: number): ITranslateProvider,
		determinePreferredLanguage(fn?: () => void): ITranslateProvider,
		registerAvailableLanguageKeys(): string[],
		registerAvailableLanguageKeys(languageKeys: string[], aliases?: ILanguageKeyAlias): ITranslateProvider,
		useLoaderCache(cache?: any): ITranslateProvider,
		resolveClientLocale(): string
	}

			
}

declare module 'npm$namespace$angular' {
		declare interface IFilterService {
		(name: "translate"): {
		(translationId: string, interpolateParams?: any, interpolation?: string): string
	}
	}

			
}
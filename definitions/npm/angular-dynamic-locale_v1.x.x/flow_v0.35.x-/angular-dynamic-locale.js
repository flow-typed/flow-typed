

declare module 'angular-dynamic-locale' {
					declare module.exports: undefined


}

declare module 'dynamicLocale' {
		declare interface tmhDynamicLocaleService {
		set(locale: string): void,
		get(): string
	}

	declare interface tmhDynamicLocaleProvider {
		localeLocationPattern(location: string): tmhDynamicLocaleProvider,
		localeLocationPattern(): string,
		storageKey(storageKey: string): void,
		useStorage(storageName: string): void,
		useCookieStorage(): void
	}

			
}
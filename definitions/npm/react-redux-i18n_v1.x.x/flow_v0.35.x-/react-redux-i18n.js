

declare module 'react-redux-i18n' {
	declare type SubTranslationObject = string | {
		[key: string]: SubTranslationObject
	};

	declare type TranslationObjects = {
		[lang: string]: SubTranslationObject
	};

	declare type I18nState = {
		translations: TranslationObjects,
		locale: string
	};

	declare type TranslateProps = {
		value: string,
		[prop: string]: string
	};

	declare type LocalizeProps = {
		value: string | number,
		dateFormat?: string,
		options?: Object
	};

	declare interface I18n {
		t(code: string, options?: any): string,
		l(timestamp: number, options?: any): string
	}

	declare export function i18nReducer(state?: any, options?: any): _Redux.Reducer<I18nState>

	declare export function syncTranslationWithStore(store: _Redux.Store<any>): void

	declare export function loadTranslations(translationsObject: TranslationObjects): void

	declare export function setLocale(locale: string): void

	declare export class Translate extends R$Component<TranslateProps, any> {
		
	}

	declare export class Localize extends R$Component<LocalizeProps, any> {
		
	}

	
}
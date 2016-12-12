

declare module 'react-i18next' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactI18next' {
	declare export type TranslationFunction = I18next.TranslationFunction;

	declare type InterpolateValue = string | JSX.Element;

	declare export interface InjectedTranslateProps {
		t?: TranslationFunction
	}

	declare interface I18nextProviderProps {
		i18n: I18next.I18n,
		children?: React.ReactElement<any>
	}

	declare interface InterpolateProps {
		i18nKey: string,
		parent?: string,
		regexp?: RegExp,
		options?: I18next.TranslationOptions,
		useDangerouslySetInnerHTML?: boolean,
		dangerouslySetInnerHTMLPartElement?: string,
		[regexKey: string]: InterpolateValue | RegExp | I18next.TranslationOptions | boolean
	}

	declare interface TranslateOptions {
		withRef?: boolean,
		wait?: boolean,
		translateFuncName?: string
	}

	declare export function translate(
		namespaces?: string[] | string, options?: TranslateOptions
	): <C>(WrappedComponent: C) => C

	declare export function loadNamespaces(
		{components, i18n}: {
		components: ReactRouter.RouteComponent[],
		i18n: I18next.I18n
	}
	): Promise<void>

	declare export class I18nextProvider extends React$Component<I18nextProviderProps, {
		
	}> {
		
	}

	declare export class Interpolate extends React$Component<InterpolateProps, {
		
	}> {
		
	}

	
}
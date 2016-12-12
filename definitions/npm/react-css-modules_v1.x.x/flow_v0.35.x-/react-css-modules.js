

declare module 'react-css-modules' {
	declare type StylesObject = any;

	declare interface TypeOptions {
		allowMultiple?: boolean,
		errorWhenNotFound?: boolean
	}

	declare interface CSSModules {
		(defaultStyles: StylesObject, options?: TypeOptions): <C>(Component: C) => C,
		(Component: C, defaultStyles: StylesObject, options?: TypeOptions): C
	}

			declare module.exports: CSSModules


}

declare module 'CSSModules' {
		declare interface InjectedCSSModuleProps {
		styles?: StylesObject
	}

			
}
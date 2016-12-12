

declare module 'radium' {
			declare function Radium<TElement>(component: TElement): TElement

	declare function Radium(config: Radium.RadiumConfig): (component?: any) => any

		declare module.exports: undefined


}

declare module 'Radium' {
		declare interface StyleRules {
		[index: string]: React.CSSProperties
	}

	declare export interface StyleProps {
		rules: React.CSSProperties | StyleRules,
		scopeSelector?: string
	}

	declare export interface StyleRootProps {
		
	}

	declare export interface RadiumConfig {
		matchMedia?: (mediaQuery: string) => MediaQueryList,
		userAgent?: string,
		plugins?: Array<any>
	}

	declare interface RadiumTestMode {
		clearState(): void,
		enable(): void,
		disable(): void
	}

	declare export function getState(
		state: any, elementKey: string | void, value: ":active" | ":focus" | ":hover"
	): boolean

	declare export function keyframes(keyframes: StyleRules, name?: string): Object

	declare export class Style extends React$Component<StyleProps, any> {
		
	}

	declare export class StyleRoot extends React$Component<StyleRootProps, any> {
		
	}

	
}
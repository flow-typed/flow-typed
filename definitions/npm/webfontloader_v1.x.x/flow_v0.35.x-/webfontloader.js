

declare module 'webfontloader' {
					declare module.exports: undefined


}

declare module 'npm$namespace$WebFont' {
		declare export interface Config {
		classes?: boolean,
		events?: boolean,
		timeout?: number,
		loading(): void,
		active(): void,
		inactive(): void,
		fontloading(familyName: string, fvd: string): void,
		fontactive(familyName: string, fvd: string): void,
		fontinactive(familyName: string, fvd: string): void,
		context?: Array<string>,
		custom?: Custom,
		google?: Google,
		typekit?: Typekit,
		fontdeck?: Fontdeck,
		monotype?: Monotype
	}

	declare export interface Google {
		families: Array<string>,
		text?: string
	}

	declare export interface Typekit {
		id?: Array<string>
	}

	declare export interface Custom {
		families?: Array<string>,
		urls?: Array<string>,
		testStrings?: {
		[fontFamily: string]: string
	}
	}

	declare export interface Fontdeck {
		id?: string
	}

	declare export interface Monotype {
		projectId?: string,
		version?: number
	}

	declare export function load(config: WebFont.Config): void

		
}
import type { CldrFactory } from 'npm$namespace$cldr'

declare module 'cldr.js' {
					
}

declare module 'npm$namespace$cldr' {
		declare interface Attributes {
		language: any,
		script: any,
		region: any,
		territory: any,
		languageId: any,
		maxLanguageId: any,
		minLanguageId: any
	}

	declare interface CldrStatic {
		get(path: string): any,
		get(paths: string[]): any,
		main(path: string): any,
		main(paths: string[]): any,
		locale: string,
		attributes: Attributes
	}

	declare interface CldrFactory {
		load(json: any, ...otherJson: any[]): void,
		new (locale: string): CldrStatic,
		localeSep: "-" | "_"
	}

			
}

declare module 'cldr' {
					declare module.exports: undefined


}
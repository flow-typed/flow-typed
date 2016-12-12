

declare module 'i18next-sprintf-postprocessor' {
		declare interface I18nextSprintfPostProcessor {
		name: string,
		type: string,
		process(value: any, key: string, options: any): any,
		overloadTranslationOptionHandler(args: string[]): {
		postProcess: "sprintf",
		sprintf: string[]
	}
	}

			declare module.exports: I18nextSprintfPostProcessor


}

declare module 'npm$namespace$I18next' {
		declare interface I18n {
		t(key: string, ...args: any[]): string
	}

			
}

declare module 'i18next-sprintf-postprocessor/dist/commonjs' {
					declare module.exports: undefined


}


declare module 'google-apps-script.language' {
					
}

declare module 'Language' {
		declare export interface LanguageApp {
		translate(text: string, sourceLanguage: string, targetLanguage: string): string,
		translate(
		text: string, sourceLanguage: string, targetLanguage: string, advancedArgs: Object
	): string
	}

			
}
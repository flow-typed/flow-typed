import type { TemplateParser } from 'npm$namespace$UrlTemplate'

declare module 'url-template' {
					declare module.exports: TemplateParser


}

declare module 'npm$namespace$UrlTemplate' {
		declare interface TemplateParser {
		parse(template: string): Template
	}

	declare interface Template {
		expand(parameters: any): string
	}

			
}
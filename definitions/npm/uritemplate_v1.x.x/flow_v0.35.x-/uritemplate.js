import type { UriTemplateStatic } from 'npm$namespace$uritemplate'

declare module 'uritemplate' {
					
}

declare module 'npm$namespace$uritemplate' {
		declare interface UriTemplate {
		expand(data: {
		
	}): string
	}

	declare interface UriTemplateErrorOptions {
		expressionText: string,
		message: string,
		position: number
	}

	declare interface UriTemplateError {
		new (options: UriTemplateErrorOptions): UriTemplateError
	}

	declare interface UriTemplateStatic {
		parse(templateText: string): uritemplate.UriTemplate,
		UriTemplateError: NO PRINT IMPLEMENTED: ConstructorType
	}

			
}
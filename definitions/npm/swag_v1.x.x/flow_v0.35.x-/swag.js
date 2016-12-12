

declare module 'swag' {
		declare interface SwagStatic {
		registerHelpers(handlebars: typeof Handlebars): void
	}

			declare module.exports: SwagStatic


}
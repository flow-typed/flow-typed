

declare module 'jsrender' {
		declare interface JQuery {
		render: JsRender.Render
	}

	declare interface JQueryStatic {
		render: JsRender.RenderStatic,
		views: JsRender.Views,
		templates(markupOrSelector: string): JsRender.Template,
		templates(name: string, markupOrSelector: string): JsRender.Template,
		templates(namedTemplates: any): any
	}

			
}

declare module 'npm$namespace$JsRender' {
		declare interface Converters {
		(name: string, converterFn: (value: any) => any): any,
		(namedConverters: any, parentTemplate?: any): any,
		html(valueToEncode: string): string,
		attr(valueToEncode: string): string,
		url(valueToEncode: string): string
	}

	declare interface Views {
		converters: Converters,
		tags(name: string, tagFn: (value: any) => any): any,
		tags(name: string, tagOptions: any): any,
		tags(namedTags: any): any,
		helpers(name: string, helper: any): any,
		helpers(namedHelpers: any, parentTemplate?: any): any
	}

	declare interface Template {
		render(data?: any): string
	}

	declare interface NamedTemplate {
		(data?: any): string
	}

	declare interface Render {
		(data?: any, helpersOrContext?: any): string
	}

	declare interface RenderStatic {
		[index: string]: NamedTemplate
	}

			
}
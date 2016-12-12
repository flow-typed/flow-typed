import type { doTStatic } from 'npm$namespace$doT'

declare module 'dot' {
		declare interface String {
		encodeHTML(): string
	}

			
}

declare module 'npm$namespace$doT' {
		declare interface doTStatic {
		version: string,
		templateSettings: TemplateSettings,
		template(tmpl: string, c?: TemplateSettings, def?: Object): Function,
		compile(tmpl: string, def?: Object): Function
	}

	declare interface TemplateSettings {
		evaluate: RegExp,
		interpolate: RegExp,
		encode: RegExp,
		use: RegExp,
		useParams: RegExp,
		define: RegExp,
		defineParams: RegExp,
		conditional: RegExp,
		iterate: RegExp,
		varname: string,
		strip: boolean,
		append: boolean,
		selfcontained: boolean
	}

			
}
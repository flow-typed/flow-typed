

declare module 'swig-email-templates' {
		declare interface SwigRender<T> {
		(file: string, context: T, callback: (err: any, html: string, text: string) => any): any
	}

	declare interface SwigEmailTemplatesOptions {
		root?: string
	}

	declare function init<T>(
		options: SwigEmailTemplatesOptions, cb: (err: any, render: SwigRender<T>) => any
	): any

		declare module.exports: undefined


}
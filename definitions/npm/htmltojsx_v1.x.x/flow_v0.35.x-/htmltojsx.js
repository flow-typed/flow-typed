

declare module 'htmltojsx' {
				declare class HTMLtoJSX  {
		constructor(options?: {
		createClass?: boolean,
		outputClassName?: string,
		indent?: string
	}): this;
		convert(html: string): string
	}

	declare module.exports: undefined


}


declare module 'marked' {
		declare interface MarkedStatic {
		(src: string, callback: Function): string,
		(src: string, options?: MarkedOptions, callback?: Function): string,
		lexer(src: string, options?: MarkedOptions): any[],
		parse(src: string, callback: Function): string,
		parse(src: string, options?: MarkedOptions, callback?: Function): string,
		parser(src: any[], options?: MarkedOptions): string,
		setOptions(options: MarkedOptions): MarkedStatic,
		Renderer: {
		new (): MarkedRenderer
	},
		Parser: {
		new (options: MarkedOptions): MarkedParser
	}
	}

	declare interface MarkedRenderer {
		code(code: string, language: string): string,
		blockquote(quote: string): string,
		html(html: string): string,
		heading(text: string, level: number, raw: string): string,
		hr(): string,
		list(body: string, ordered: boolean): string,
		listitem(text: string): string,
		paragraph(text: string): string,
		table(header: string, body: string): string,
		tablerow(content: string): string,
		tablecell(content: string, flags: {
		header: boolean,
		align: string
	}): string,
		strong(text: string): string,
		em(text: string): string,
		codespan(code: string): string,
		br(): string,
		del(text: string): string,
		link(href: string, title: string, text: string): string,
		image(href: string, title: string, text: string): string,
		text(text: string): string
	}

	declare interface MarkedParser {
		parse(source: any[]): string
	}

	declare interface MarkedOptions {
		renderer?: MarkedRenderer,
		gfm?: boolean,
		tables?: boolean,
		breaks?: boolean,
		pedantic?: boolean,
		sanitize?: boolean,
		smartLists?: boolean,
		silent?: boolean,
		highlight(code: string, lang: string, callback?: Function): string,
		langPrefix?: string,
		smartypants?: boolean
	}

			declare module.exports: MarkedStatic


}
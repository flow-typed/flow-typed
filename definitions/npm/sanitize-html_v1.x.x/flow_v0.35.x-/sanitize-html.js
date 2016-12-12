

declare module 'sanitize-html' {
			declare function sanitize(dirty: string, options?: sanitize.IOptions): string

		declare module.exports: undefined


}

declare module 'npm$namespace$sanitize' {
	declare type Attributes = {
		[attr: string]: string
	};

	declare type Tag = {
		tagName: string,
		attribs: Attributes,
		text?: string
	};

	declare type Transformer = (tagName: string, attribs: Attributes) => Tag;

	declare interface IDefaults {
		allowedAttributes: {
		[index: string]: string[]
	},
		allowedSchemes: string[],
		allowedSchemesByTag: {
		[index: string]: string[]
	},
		allowedTags: string[],
		selfClosing: string[]
	}

	declare interface IFrame {
		tag: string,
		attribs: {
		[index: string]: string
	},
		text: string,
		tagPosition: number
	}

	declare interface IOptions {
		allowedAttributes?: {
		[index: string]: string[]
	} | boolean,
		allowedClasses?: {
		[index: string]: string[]
	} | boolean,
		allowedSchemes?: string[] | boolean,
		allowedTags?: string[] | boolean,
		exclusiveFilter?: (frame: IFrame) => boolean,
		nonTextTags?: string[],
		selfClosing?: string[],
		transformTags?: {
		[tagName: string]: string | Transformer
	}
	}

	declare function simpleTransform(tagName: string, attribs: Attributes, merge?: boolean): Transformer

		
}
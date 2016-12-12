

declare module 'htmlparser2' {
		declare export interface Handler {
		onopentag?: (name: string, attribs: {
		[type: string]: string
	}) => void,
		onopentagname?: (name: string) => void,
		onattribute?: (name: string, value: string) => void,
		ontext?: (text: string) => void,
		onclosetag?: (text: string) => void,
		onprocessinginstruction?: (name: string, data: string) => void,
		oncomment?: (data: string) => void,
		oncommentend?: () => void,
		oncdatastart?: () => void,
		oncdataend?: () => void,
		onerror?: (error: Error) => void,
		onreset?: () => void,
		onend?: () => void
	}

	declare export interface Options {
		xmlMode?: boolean,
		decodeEntities?: boolean,
		lowerCaseTags?: boolean,
		lowerCaseAttributeNames?: boolean,
		recognizeCDATA?: boolean,
		recognizeSelfClosing?: boolean
	}

		declare export class Parser  {
		constructor(handler: Handler, options?: Options): this;
		write(input: string): void;
		parseChunk(input: string): void;
		end(): void;
		done(): void;
		parseComplete(input: string): void;
		reset(): void
	}

	
}


declare module 'dojox.string' {
					
}

declare module 'string_' {
		declare interface sprintf {
		(format: String, filler: any): void
	}

	declare interface Builder {
		(str?: String): void
	}

	declare interface tokenize {
		(str: String, re: RegExp, parseDelim?: Function, instance?: Object): void
	}

	declare interface BidiComplex {
		attachInput(field: HTMLElement, pattern: String): void,
		createDisplayString(str: String, pattern: String): void,
		stripSpecialCharacters(str: any): void
	}

		declare class BidiEngine  {
		constructor(): this;
		bidiTransform(text: String, formatIn: String, formatOut: String): any;
		checkContextual(text: String): any;
		hasBidiChar(text: String): any
	}

	
}

declare module 'sprintf' {
		declare interface Formatter {
		(format: String): void
	}

			
}

declare module 'Builder' {
		declare interface append {
		(s: String[]): void
	}

	declare interface appendArray {
		(strings: any[]): void
	}

	declare interface clear {
		(): void
	}

	declare interface concat {
		(s: String[]): void
	}

	declare interface insert {
		(index: number, str: String): void
	}

	declare interface remove {
		(start: number, len: number): void
	}

	declare interface replace {
		(oldStr: String, newStr: String): void
	}

	declare interface toString {
		(): void
	}

			
}

declare module 'dojox/string/tokenize' {
					declare module.exports: tokenize


}

declare module 'dojox/string/sprintf' {
					declare module.exports: sprintf


}

declare module 'dojox/string/Builder' {
					declare module.exports: Builder


}

declare module 'dojox/string/BidiComplex' {
					declare module.exports: BidiComplex


}

declare module 'dojox/string/BidiEngine' {
					declare module.exports: BidiEngine


}
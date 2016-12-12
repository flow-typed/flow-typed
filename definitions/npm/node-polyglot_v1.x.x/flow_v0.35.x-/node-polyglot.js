

declare module 'node-polyglot' {
				declare class Polyglot  {
		constructor(options?: Polyglot.PolyglotOptions): this;
		extend(phrases: any): void;
		t(phrase: string): string;
		t(phrase: string, smartCount: number): string;
		t(phrase: string, interpolationOptions: Polyglot.InterpolationOptions): string;
		clear(): void;
		replace(phrases: any): void;
		locale(): string;
		locale(locale: string): void
	}

	declare module.exports: undefined


}

declare module 'Polyglot' {
		declare interface InterpolationOptions {
		smart_count?: number | {
		length: number
	},
		_?: string,
		[interpolationKey: string]: any
	}

	declare interface PolyglotOptions {
		phrases?: any,
		locale?: string
	}

			
}


declare module 'fontfaceobserver' {
				declare class FontFaceObserver  {
		constructor(fontFamilyName: string, variant?: FontFaceObserver.FontVariant): this;
		load(testString?: string, timeout?: number): Promise<void>
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$FontFaceObserver' {
		declare interface FontVariant {
		weight?: number | string,
		style?: string,
		stretch?: string
	}

			
}
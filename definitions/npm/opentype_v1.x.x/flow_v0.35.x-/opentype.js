

declare module 'opentype' {
					
}

declare module 'npm$namespace$opentypejs' {
		declare interface Contour {
		
	}

	declare interface Field {
		name: string,
		type: string,
		value: any
	}

	declare interface FontNames {
		copyright: LocalizedName,
		description: LocalizedName,
		designer: LocalizedName,
		designerURL: LocalizedName,
		fontFamily: LocalizedName,
		fontSubfamily: LocalizedName,
		fullName: LocalizedName,
		license: LocalizedName,
		licenseURL: LocalizedName,
		manufacturer: LocalizedName,
		manufacturerURL: LocalizedName,
		postScriptName: LocalizedName,
		trademark: LocalizedName,
		version: LocalizedName
	}

	declare interface FontOptions {
		copyright?: string,
		ascender?: number,
		descender?: number,
		description?: string,
		designer?: string,
		designerURL?: string,
		empty?: boolean,
		familyName?: string,
		fullName?: string,
		glyphs?: Glyph[] | GlyphSet,
		license?: string,
		licenseURL?: string,
		manufacturer?: string,
		manufacturerURL?: string,
		postScriptName?: string,
		styleName?: string,
		unitsPerEm?: number,
		trademark?: string,
		version?: string
	}

	declare interface GlyphOptions {
		advanceWidth?: number,
		index?: number,
		font?: Font,
		name?: string,
		path?: Path,
		unicode?: number,
		unicodes?: number[],
		xMax?: number,
		xMin?: number,
		yMax?: number,
		yMin?: number
	}

	declare interface KerningPairs {
		[pair: string]: number
	}

	declare interface LocalizedName {
		[lang: string]: string
	}

	declare interface Metrics {
		leftSideBearing: number,
		rightSideBearing?: number,
		xMax: number,
		xMin: number,
		yMax: number,
		yMin: number
	}

	declare interface PathCommand {
		type: string,
		x?: number,
		y?: number,
		x1?: number,
		y1?: number,
		x2?: number,
		y2?: number
	}

	declare interface Point {
		lastPointOfContour?: boolean
	}

	declare interface Post {
		glyphNameIndex?: number[],
		isFixedPitch: number,
		italicAngle: number,
		maxMemType1: number,
		minMemType1: number,
		maxMemType42: number,
		minMemType42: number,
		names?: string[],
		numberOfGlyphs?: number,
		offset?: number[],
		underlinePosition: number,
		underlineThickness: number,
		version: number
	}

	declare interface RenderOptions {
		kerning: boolean
	}

	declare interface Table {
		[propName: string]: any,
		encode(): number[],
		fields: Field[],
		sizeOf(): number,
		tables: Table[],
		tableName: string
	}

	declare function load(url: string, callback: {
		(error: any, font?: Font): void
	}): void

	declare function loadSync(url: string): Font

	declare function parse(buffer: any): Font

	declare class Encoding  {
		charset: string;
		charToGlyphIndex(c: string): number;
		font: Font
	}

	declare class Font  {
		constructor(options: FontOptions): this;
		ascender: number;
		cffEncoding: Encoding;
		charToGlyph(c: string): Glyph;
		charToGlyphIndex(s: string): number;
		descender: number;
		download(): void;
		draw(
		ctx: CanvasRenderingContext2D, text: string, x: number, y: number, fontSize: number, options?: RenderOptions
	): void;
		drawMetrics(
		ctx: CanvasRenderingContext2D, text: string, x: number, y: number, fontSize: number, options?: RenderOptions
	): void;
		drawPoints(
		ctx: CanvasRenderingContext2D, text: string, x: number, y: number, fontSize: number, options?: RenderOptions
	): void;
		encoding: Encoding;
		forEachGlyph(
		text: string, x: number, y: number, fontSize: number, options: RenderOptions, callback: {
		(glyph: Glyph, x: number, y: number, fontSize: number, options?: RenderOptions): void
	}
	): void;
		getEnglishName(name: string): string;
		getGposKerningValue: {
		(leftGlyph: Glyph | number, rightGlyph: Glyph | number): number
	};
		getKerningValue(leftGlyph: Glyph | number, rightGlyph: Glyph | number): number;
		getPath(
		text: string, x: number, y: number, fontSize: number, options?: RenderOptions
	): Path;
		getPaths(
		text: string, x: number, y: number, fontSize: number, options?: RenderOptions
	): Path[];
		glyphs: GlyphSet;
		glyphIndexToName(gid: number): string;
		glyphNames: GlyphNames;
		hasChar(c: string): boolean;
		kerningPairs: KerningPairs;
		names: FontNames;
		nameToGlyph(name: string): Glyph;
		nameToGlyphIndex(name: string): number;
		numberOfHMetrics: number;
		numGlyphs: number;
		outlinesFormat: string;
		stringToGlyphs(s: string): Glyph[];
		tables: {
		[tableName: string]: Table
	};
		toArrayBuffer(): ArrayBuffer;
		toBuffer(): ArrayBuffer;
		toTables(): Table;
		unitsPerEm: number;
		validate(): void
	}

	declare class Glyph  {
		constructor(options: GlyphOptions): this;
		addUnicode(unicode: number): void;
		advanceWidth: number;
		bindConstructorValues(options: GlyphOptions): void;
		draw(ctx: CanvasRenderingContext2D, x: number, y: number, fontSize: number): void;
		drawMetrics(ctx: CanvasRenderingContext2D, x: number, y: number, fontSize: number): void;
		drawPoints(ctx: CanvasRenderingContext2D, x: number, y: number, fontSize: number): void;
		getContours(): Contour[];
		getMetrics(): Metrics;
		getPath(x: number, y: number, fontSize: number): Path;
		name: string;
		path: Path | {
		(): Path
	};
		unicode: number;
		unicodes: number[]
	}

	declare class GlyphNames  {
		constructor(post: Post): this;
		glyphIndexToName(gid: number): string;
		nameToGlyphIndex(name: string): number
	}

	declare class GlyphSet  {
		constructor(font: Font, glyphs: Glyph[] | {
		(): Glyph
	}[]): this;
		get(index: number): Glyph;
		length: number;
		push(index: number, loader: {
		(): Glyph
	}): void
	}

	declare class Path  {
		constructor(): this;
		bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
		close: () => void;
		closePath(): void;
		commands: PathCommand[];
		curveTo: (x1: number, y1: number, x2: number, y2: number, x: number, y: number) => void;
		draw(ctx: CanvasRenderingContext2D): void;
		extend(pathOrCommands: Path | PathCommand[]): void;
		lineTo(x: number, y: number): void;
		moveTo(x: number, y: number): void;
		quadraticCurveTo(x1: number, y1: number, x: number, y: number): void;
		quadTo: (x1: number, y1: number, x: number, y: number) => void;
		toPathData(decimalPlaces: number): string;
		toSVG(decimalPlaces: number): string;
		unitsPerEm: number
	}

	
}

declare module 'opentype.js' {
					declare module.exports: undefined


}
import type { PDFDocument, PDFData, PDFPage, PDFKitReference } from 'npm$namespace$PDFKit'

declare module 'pdfkit' {
					declare module.exports: PDFDocument


}

declare module 'npm$namespace$PDFKit' {
		declare interface PDFGradient {
		new (document: any): PDFGradient,
		stop(
		pos: number, color?: string | PDFKit.PDFGradient, opacity?: number
	): PDFGradient,
		embed(): void,
		apply(): void
	}

	declare interface PDFLinearGradient {
		new (
		document: any, x1: number, y1: number, x2: number, y2: number
	): PDFLinearGradient,
		shader(fn: () => any): any,
		opacityGradient(): PDFLinearGradient
	}

	declare interface PDFRadialGradient {
		new (
		document: any, x1: number, y1: number, x2: number, y2: number
	): PDFRadialGradient,
		shader(fn: () => any): any,
		opacityGradient(): PDFRadialGradient
	}

	declare interface PDFData {
		new (data: any[]): PDFData,
		readByte(): any,
		writeByte(byte: any): void,
		byteAt(index: number): any,
		readBool(): boolean,
		writeBool(val: boolean): boolean,
		readUInt32(): number,
		writeUInt32(val: number): void,
		readInt32(): number,
		writeInt32(val: number): void,
		readUInt16(): number,
		writeUInt16(val: number): void,
		readInt16(): number,
		writeInt16(val: number): void,
		readString(length: number): string,
		writeString(val: string): void,
		stringAt(pos: number, length: number): string,
		readShort(): number,
		writeShort(val: number): void,
		readLongLong(): number,
		writeLongLong(val: number): void,
		readInt(): number,
		writeInt(val: number): void,
		slice(start: number, end: number): any[],
		read(length: number): any[],
		write(bytes: any[]): void
	}

	declare interface DocumentInfo {
		Producer?: string,
		Creator?: string,
		CreationDate?: Date,
		Title?: string,
		Author?: string,
		Keywords?: string,
		ModDate?: Date
	}

	declare interface PDFDocumentOptions {
		compress?: boolean,
		info?: DocumentInfo,
		autoFirstPage?: boolean,
		size?: number[],
		margin?: number,
		margins?: {
		top: number,
		left: number,
		bottom: number,
		right: number
	},
		layout?: "portrait" | "landscape",
		bufferPages?: boolean
	}

	declare interface PDFDocument {
		version: number,
		compress: boolean,
		info: DocumentInfo,
		options: PDFDocumentOptions,
		page: PDFPage,
		x: number,
		y: number,
		new (options?: PDFDocumentOptions): PDFDocument,
		addPage(options?: PDFDocumentOptions): PDFDocument,
		bufferedPageRanges(): {
		start: number,
		count: number
	},
		switchToPage(n?: number): PDFPage,
		flushPages(): void,
		ref(data: {
		
	}): PDFKitReference,
		addContent(data: any): PDFDocument,
		write(fileName: string, fn: any): void,
		output(fn: any): void,
		end(): void,
		toString(): string
	}

	declare interface PDFPage {
		size: string,
		layout: string,
		margins: {
		top: number,
		left: number,
		bottom: number,
		right: number
	},
		width: number,
		height: number,
		document: PDFDocument,
		content: PDFKitReference,
		dictionary: PDFKitReference,
		fonts: any,
		xobjects: any,
		ext_gstates: any,
		patterns: any,
		annotations: any,
		maxY(): number,
		write(chunk: any): void,
		end(): void
	}

		declare class PDFKitReference  {
		id: number;
		gen: number;
		deflate: any;
		compress: boolean;
		uncompressedLength: number;
		chunks: any[];
		data: {
		Font?: any,
		XObject?: any,
		ExtGState?: any,
		Pattern: any,
		Annots: any
	};
		document: PDFDocument;
		constructor(document: PDFDocument, id: number, data: {
		
	}): this;
		initDeflate(): void;
		write(chunk: any): void;
		end(chunk: any): void;
		finalize(): void;
		toString(): string
	}

	
}

declare module 'Mixins' {
		declare interface AnnotationOption {
		Type?: string,
		Rect?: any,
		Border?: Array<number>,
		SubType?: string,
		Contents?: string,
		Name?: string,
		color?: string,
		QuadPoints?: Array<number>,
		A?: any,
		B?: any,
		C?: any,
		L?: any,
		DA?: string
	}

	declare interface PDFAnnotation<TDocument> {
		annotate(
		x: number, y: number, w: number, h: number, option: AnnotationOption
	): TDocument,
		note(
		x: number, y: number, w: number, h: number, content: string, option?: AnnotationOption
	): TDocument,
		link(
		x: number, y: number, w: number, h: number, url: string, option?: AnnotationOption
	): TDocument,
		highlight(
		x: number, y: number, w: number, h: number, option?: AnnotationOption
	): TDocument,
		underline(
		x: number, y: number, w: number, h: number, option?: AnnotationOption
	): TDocument,
		strike(
		x: number, y: number, w: number, h: number, option?: AnnotationOption
	): TDocument,
		lineAnnotation(
		x1: number, y1: number, x2: number, y2: number, option?: AnnotationOption
	): TDocument,
		rectAnnotation(
		x: number, y: number, w: number, h: number, option?: AnnotationOption
	): TDocument,
		ellipseAnnotation(
		x: number, y: number, w: number, h: number, option?: AnnotationOption
	): TDocument,
		textAnnotation(
		x: number, y: number, w: number, h: number, text: string, option?: AnnotationOption
	): TDocument
	}

	declare interface PDFColor<TDocument> {
		fillColor(color: string | PDFGradient, opacity?: number): TDocument,
		strokeColor(color: string, opacity?: number): TDocument,
		opacity(opacity: number): TDocument,
		fillOpacity(opacity: number): TDocument,
		strokeOpacity(opacity: number): TDocument,
		linearGradient(x1: number, y1: number, x2: number, y2: number): PDFLinearGradient,
		radialGradient(
		x1: number, y1: number, r1: number, x2: number, y2: number, r2: number
	): PDFRadialGradient
	}

	declare interface PDFFont<TDocument> {
		font(src: string, family?: string, size?: number): TDocument,
		fontSize(size: number): TDocument,
		currentLineHeight(includeGap?: boolean): number,
		registerFont(name: string, src?: string, family?: string): TDocument
	}

	declare interface ImageOption {
		width?: number,
		height?: number,
		scale?: number,
		fit?: number[]
	}

	declare interface PDFImage<TDocument> {
		image(src: any, x?: number, y?: number, options?: ImageOption): TDocument,
		image(src: any, options?: ImageOption): TDocument
	}

	declare interface TextOptions {
		lineBreak?: boolean,
		width?: number,
		height?: number,
		ellipsis?: boolean | string,
		columns?: number,
		columnGap?: number,
		indent?: number,
		paragrahGap?: number,
		lineGap?: number,
		wordSpacing?: number,
		characterSpacing?: number,
		fill?: boolean,
		stroke?: boolean,
		link?: string,
		underline?: boolean,
		strike?: boolean,
		continued?: boolean,
		align?: string
	}

	declare interface PDFText<TDocument> {
		lineGap(lineGap: number): TDocument,
		moveDown(line?: number): TDocument,
		moveUp(line?: number): TDocument,
		text(text: string, x?: number, y?: number, options?: TextOptions): TDocument,
		text(text: string, options?: TextOptions): TDocument,
		widthOfString(text: string, options?: TextOptions): number,
		heightOfString(text: string, options?: TextOptions): number,
		list(
		list: Array<string | any>, x?: number, y?: number, options?: TextOptions
	): TDocument,
		list(list: Array<string | any>, options?: TextOptions): TDocument
	}

	declare interface PDFVector<TDocument> {
		save(): TDocument,
		restore(): TDocument,
		closePath(): TDocument,
		lineWidth(w: number): TDocument,
		lineCap(c: string): TDocument,
		lineJoin(j: string): TDocument,
		miterLimit(m: any): TDocument,
		dash(length: number, option: any): TDocument,
		undash(): TDocument,
		moveTo(x: number, y: number): TDocument,
		lineTo(x: number, y: number): TDocument,
		bezierCurveTo(
		cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number
	): TDocument,
		quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): TDocument,
		rect(x: number, y: number, w: number, h: number): TDocument,
		roundRect(x: number, y: number, w: number, h: number, r?: number): TDocument,
		ellipse(x: number, y: number, r1: number, r2?: number): TDocument,
		circle(x: number, y: number, raduis: number): TDocument,
		polygon(...points: number[][]): TDocument,
		path(path: string): TDocument,
		fill(color: string | PDFKit.PDFGradient, rule?: string): TDocument,
		stroke(color?: string | PDFKit.PDFGradient): TDocument,
		fillAndStroke(fillColor: string, strokeColor?: string, rule?: string): TDocument,
		clip(rule?: string): TDocument,
		transform(
		m11: number, m12: number, m21: number, m22: number, dx: number, dy: number
	): TDocument,
		translate(x: number, y: number): TDocument,
		rotate(angle: number, options?: {
		origin?: number[]
	}): TDocument,
		scale(
		xFactor: number, yFactor?: number, options?: {
		origin?: number[]
	}
	): TDocument
	}

			
}

declare module 'pdfkit/js/data' {
					declare module.exports: PDFData


}

declare module 'pdfkit/js/gradient' {
					declare module.exports: undefined


}

declare module 'pdfkit/js/page' {
					declare module.exports: PDFPage


}

declare module 'pdfkit/js/reference' {
					declare module.exports: PDFKitReference


}

declare module 'pdfkit/js/mixins/annotations' {
					declare module.exports: PDFAnnotation


}

declare module 'pdfkit/js/mixins/color' {
					declare module.exports: PDFColor


}

declare module 'pdfkit/js/mixins/fonts' {
					declare module.exports: PDFFont


}

declare module 'pdfkit/js/mixins/images' {
					declare module.exports: PDFImage


}

declare module 'pdfkit/js/mixins/text' {
					declare module.exports: PDFText


}

declare module 'pdfkit/js/mixins/vector' {
					declare module.exports: PDFVector


}
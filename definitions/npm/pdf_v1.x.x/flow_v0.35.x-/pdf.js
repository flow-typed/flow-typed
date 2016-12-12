

declare module 'pdf' {
		declare interface PDFPromise<T> {
		isResolved(): boolean,
		isRejected(): boolean,
		resolve(value: T): void,
		reject(reason: string): void,
		then<U>(
		onResolve: (promise: T) => U, onReject?: (reason: string) => void
	): PDFPromise<U>
	}

	declare interface PDFTreeNode {
		title: string,
		bold: boolean,
		italic: boolean,
		color: number[],
		dest: any,
		items: PDFTreeNode[]
	}

	declare interface PDFInfo {
		PDFFormatVersion: string,
		IsAcroFormPresent: boolean,
		IsXFAPresent: boolean,
		[key: string]: any
	}

	declare interface PDFMetadata {
		parse(): void,
		get(name: string): string,
		has(name: string): boolean
	}

	declare interface PDFSource {
		url?: string,
		data?: Uint8Array,
		httpHeaders?: any,
		password?: string
	}

	declare interface PDFProgressData {
		loaded: number,
		total: number
	}

	declare interface PDFDocumentProxy {
		numPages: number,
		fingerprint: string,
		embeddedFontsUsed(): boolean,
		getPage(number: number): PDFPromise<PDFPageProxy>,
		getDestinations(): PDFPromise<any[]>,
		getJavaScript(): PDFPromise<string[]>,
		getOutline(): PDFPromise<PDFTreeNode[]>,
		getMetadata(): PDFPromise<{
		info: PDFInfo,
		metadata: PDFMetadata
	}>,
		isEncrypted(): PDFPromise<boolean>,
		getData(): PDFPromise<Uint8Array>,
		dataLoaded(): PDFPromise<any[]>,
		destroy(): void
	}

	declare interface PDFRef {
		num: number,
		gen: any
	}

	declare interface PDFPageViewportOptions {
		viewBox: any,
		scale: number,
		rotation: number,
		offsetX: number,
		offsetY: number,
		dontFlip: boolean
	}

	declare interface PDFPageViewport {
		width: number,
		height: number,
		fontScale: number,
		transforms: number[],
		clone(options: PDFPageViewportOptions): PDFPageViewport,
		convertToViewportPoint(x: number, y: number): number[],
		convertToViewportRectangle(rect: number[]): number[],
		convertToPdfPoint(x: number, y: number): number[]
	}

	declare interface PDFAnnotationData {
		subtype: string,
		rect: number[],
		annotationFlags: any,
		color: number[],
		borderWidth: number,
		hasAppearance: boolean
	}

	declare interface PDFAnnotations {
		getData(): PDFAnnotationData,
		hasHtml(): boolean,
		getHtmlElement(commonOjbs: any): HTMLElement,
		getEmptyContainer(tagName: string, rect: number[]): HTMLElement,
		isViewable(): boolean,
		loadResources(keys: any): PDFPromise<any>,
		getOperatorList(evaluator: any): PDFPromise<any>
	}

	declare interface PDFRenderTextLayer {
		beginLayout(): void,
		endLayout(): void,
		appendText(): void
	}

	declare interface PDFRenderImageLayer {
		beginLayout(): void,
		endLayout(): void,
		appendImage(): void
	}

	declare interface PDFRenderParams {
		canvasContext: CanvasRenderingContext2D,
		viewport?: PDFPageViewport,
		textLayer?: PDFRenderTextLayer,
		imageLayer?: PDFRenderImageLayer,
		continueCallback?: (_continue: () => void) => void
	}

	declare interface PDFViewerParams {
		container: HTMLElement,
		viewer?: HTMLElement
	}

	declare interface PDFRenderTask {
		cancel(): void
	}

	declare interface PDFPageProxy {
		pageNumber: number,
		rotate: number,
		ref: PDFRef,
		view: number[],
		getViewport(scale: number, rotate?: number): PDFPageViewport,
		getAnnotations(): PDFPromise<PDFAnnotations>,
		render(params: PDFRenderParams): PDFRenderTask,
		getTextContent(): PDFPromise<TextContent>,
		destroy(): void
	}

	declare interface TextContentItem {
		str: string,
		transform: number[],
		width: number,
		height: number,
		dir: string,
		fontName: string
	}

	declare interface TextContent {
		items: TextContentItem[],
		styles: any
	}

	declare interface PDFObjects {
		get(objId: number, callback?: any): any,
		resolve(objId: number, data: any): any,
		isResolved(objId: number): boolean,
		hasData(objId: number): boolean,
		getData(objId: number): any,
		clear(): void
	}

	declare interface PDFJSUtilStatic {
		normalizeRect(rect: number[]): number[]
	}

	declare interface PDFJSStatic {
		maxImageSize: number,
		cMapUrl: string,
		cMapPacked: boolean,
		disableFontFace: boolean,
		imageResourcesPath: string,
		disableWorker: boolean,
		workerSrc: string,
		disableRange: boolean,
		disableStream: boolean,
		disableAutoFetch: boolean,
		pdfBug: boolean,
		postMessageTransfers: boolean,
		disableCreateObjectURL: boolean,
		disableWebGL: boolean,
		disableFullscreen: boolean,
		useOnlyCssZoom: boolean,
		verbosity: number,
		maxCanvasPixels: number,
		openExternalLinksInNewWindow: boolean,
		isEvalSupported: boolean,
		Util: PDFJSUtilStatic,
		getDocument(
		source: string, pdfDataRangeTransport?: any, passwordCallback?: (fn: (password: string) => void, reason: string) => string, progressCallback?: (progressData: PDFProgressData) => void
	): PDFPromise<PDFDocumentProxy>,
		getDocument(
		source: Uint8Array, pdfDataRangeTransport?: any, passwordCallback?: (fn: (password: string) => void, reason: string) => string, progressCallback?: (progressData: PDFProgressData) => void
	): PDFPromise<PDFDocumentProxy>,
		getDocument(
		source: PDFSource, pdfDataRangeTransport?: any, passwordCallback?: (fn: (password: string) => void, reason: string) => string, progressCallback?: (progressData: PDFProgressData) => void
	): PDFPromise<PDFDocumentProxy>,
		PDFViewer(params: PDFViewerParams): void
	}

			
}

declare module 'PDFJS' {
					declare module.exports: undefined


}
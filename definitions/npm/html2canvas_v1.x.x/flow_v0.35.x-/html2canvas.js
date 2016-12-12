

declare module 'html2canvas' {
		declare interface Html2CanvasStatic {
		(element: HTMLElement, options?: Html2Canvas.Html2CanvasOptions): Html2CanvasPromise<HTMLCanvasElement>
	}

	declare interface Html2CanvasThenable<R> {
		then<U>(
		onFulfilled?: (value: R) => U | Html2CanvasThenable<U>, onRejected?: (error: any) => U | Html2CanvasThenable<U>
	): Html2CanvasThenable<U>,
		then<U>(
		onFulfilled?: (value: R) => U | Html2CanvasThenable<U>, onRejected?: (error: any) => void
	): Html2CanvasThenable<U>
	}

	declare interface Html2CanvasPromise<R> {
		then<U>(
		onFulfilled?: (value: R) => U | Html2CanvasThenable<U>, onRejected?: (error: any) => U | Html2CanvasThenable<U>
	): Html2CanvasPromise<U>,
		then<U>(
		onFulfilled?: (value: R) => U | Html2CanvasThenable<U>, onRejected?: (error: any) => void
	): Html2CanvasPromise<U>,
		catch<U>(
		onRejected?: (error: any) => U | Html2CanvasThenable<U>
	): Html2CanvasPromise<U>
	}

			declare module.exports: Html2CanvasStatic


}

declare module 'npm$namespace$Html2Canvas' {
		declare interface Html2CanvasOptions {
		allowTaint?: boolean,
		background?: string,
		height?: number,
		letterRendering?: boolean,
		logging?: boolean,
		proxy?: string,
		taintTest?: boolean,
		timeout?: number,
		width?: number,
		useCORS?: boolean,
		svgRendering?: boolean
	}

			
}
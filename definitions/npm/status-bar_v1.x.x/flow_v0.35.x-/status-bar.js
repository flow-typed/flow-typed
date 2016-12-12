

declare module 'status-bar' {
					
}

declare module 'npm$namespace$StatusBar' {
		declare interface IStatusBarViewStatic {
		content(): any,
		new (...args: any[]): IStatusBarView
	}

	declare interface IStatusBarView {
		initialize(): any,
		attach(): any,
		destroy(): any,
		appendLeft(view: View): any,
		prependLeft(view: View): any,
		appendRight(view: View): any,
		prependRight(view: View): any,
		getActiveBuffer(): TextBuffer.ITextBuffer,
		getActiveItem(): any,
		storeActiveBuffer(): TextBuffer.ITextBuffer,
		subscribeToBuffer(event: string, callback: Function): any,
		subscribeAllToBuffer(): any[],
		unsubscribeAllFromBuffer(): any[]
	}

			
}
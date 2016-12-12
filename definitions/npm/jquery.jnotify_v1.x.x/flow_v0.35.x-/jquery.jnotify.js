

declare module 'jquery.jnotify' {
		declare interface JNotifyInitOptions {
		oneAtTime?: boolean,
		appendType?: string
	}

	declare interface JNotifyOptions {
		text?: string,
		type?: string,
		showIcon?: boolean,
		permanent?: boolean,
		disappearTime?: number
	}

	declare interface JQuery {
		jnotifyInizialize(options?: JNotifyInitOptions),
		jnotifyAddMessage(options?: JNotifyOptions)
	}

			
}
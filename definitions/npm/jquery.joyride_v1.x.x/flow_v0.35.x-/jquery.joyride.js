

declare module 'jquery.joyride' {
		declare interface JoyrideTemplate {
		link?: string,
		timer?: string,
		tip?: string,
		wrapper?: string,
		button?: string,
		modal?: string,
		exposeCover?: string
	}

	declare interface JoyrideOptions {
		version?: string,
		tipLocation?: string,
		nubPosition?: any,
		scroll?: boolean,
		scrollSpeed?: number,
		timer?: number,
		autoStart?: boolean,
		startTimerOnClick?: boolean,
		startOffset?: number,
		nextButton?: boolean,
		tipAnimation?: string,
		pauseAfter?: any[],
		tipAnimationFadeSpeed?: number,
		cookieMonster?: boolean,
		cookieName?: string,
		cookieDomain?: any,
		cookiePath?: any,
		localStorage?: boolean,
		localStorageKey?: string,
		tipContainer?: HTMLElement,
		modal?: boolean,
		expose?: boolean,
		postExposeCallback?: (index: number, nextTip: JQuery, el?: JQuery) => void,
		preRideCallback?: (index: number, currentTip: JQuery, el?: JQuery) => void,
		postRideCallback?: (index: number, currentTip: JQuery, isAborted?: boolean) => void,
		postStepCallback?: (index: number, currentTip: JQuery, isAborted?: boolean) => void,
		preStepCallback?: (index: number, nextTip: JQuery, el?: JQuery) => void,
		template?: JoyrideTemplate
	}

	declare interface Joyride {
		(): JQuery,
		(options: JoyrideOptions): JQuery,
		(methodName: string, ...params: any[]): JQuery
	}

	declare interface JQuery {
		joyride: Joyride
	}

			
}


declare module 'react-scroll' {
		declare interface Link {
		
	}

	declare interface Element {
		
	}

	declare interface Button {
		
	}

	declare interface DirectLink {
		
	}

	declare interface scrollEvnt {
		register(evtName: string, callback: Function): void,
		remove(evtName: string): void
	}

	declare interface Events {
		scrollEvent: scrollEvnt
	}

	declare interface scroller {
		scrollTo(to: any, animate?: any, duration?: any, offset?: any): void
	}

	declare interface scrollSpy {
		update(): void
	}

	declare interface animateScroll {
		scrollToTop(options?: any): void,
		scrollToBottom(options?: any): void,
		scrollTo(toY: number, options?: any): void,
		scrollMore(toY: number, options?: any): void
	}

	declare interface directScroller {
		get(): any
	}

	declare interface Helpers {
		
	}

			
}
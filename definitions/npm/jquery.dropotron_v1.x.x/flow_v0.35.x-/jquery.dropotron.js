

declare module 'jquery.dropotron' {
		declare interface DropotronConfiguration {
		alignment: string,
		baseZIndex: number,
		cloneOnDetach: boolean,
		detach: boolean,
		easing: string,
		IEOffsetX: number,
		IEOffsetY: number,
		expandMode: string,
		globalOffsetY: number,
		hideDelay: number,
		hoverDelay: number,
		menuClass: string,
		mode: string,
		noOpenerFade: boolean,
		offsetX: number,
		offsetY: number,
		openerActiveClass: string,
		openerClass: string,
		selectorParent: JQuery,
		speed: string,
		submenuClassPrefix: string
	}

	declare interface Dropotron {
		(config?: DropotronConfiguration): void
	}

	declare interface JQuery {
		dropotron: Dropotron
	}

			
}
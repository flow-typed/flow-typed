

declare module 'jquery.tooltipster' {
		declare interface JQueryTooltipsterOptions {
		animation?: string,
		arrow?: boolean,
		arrowColor?: string,
		autoClose?: boolean,
		content?: string | JQuery,
		contentAsHTML?: boolean,
		contentCloning?: boolean,
		debug?: boolean,
		delay?: number,
		minWidth?: number,
		maxWidth?: number,
		functionInit?: (origin: JQuery, content: string) => void | string,
		functionBefore?: (origin: JQuery, continueTooltip: Function) => void,
		functionReady?: (origin: JQuery, tooltip: JQuery) => void,
		functionAfter?: (origin: JQuery) => void,
		hideOnClick?: boolean,
		icon?: string | JQuery,
		iconCloning?: boolean,
		iconDesktop?: boolean,
		iconTheme?: string,
		iconTouch?: boolean,
		interactive?: boolean,
		interactiveTolerance?: number,
		multiple?: boolean,
		offsetX?: number,
		offsetY?: number,
		onlyOne?: boolean,
		position?: string,
		positionTracker?: boolean,
		positionTrackerCallback?: (origin: JQuery) => void,
		restoration?: string,
		speed?: number,
		timer?: number,
		theme?: string,
		touchDevices?: boolean,
		trigger?: string,
		updateAnimation?: boolean
	}

	declare interface JQuery {
		tooltipster(): JQuery,
		tooltipster(options?: JQueryTooltipsterOptions): JQuery,
		tooltipster(methodName: "show", callback?: Function): JQuery,
		tooltipster(methodName: "hide", callback?: Function): JQuery,
		tooltipster(methodName: "content", newContent: string): JQuery,
		tooltipster(methodName: "option", optionName: string): JQuery,
		tooltipster(methodName: "option", optionName: string, optionValue: string): JQuery,
		tooltipster(methodName: "disable"): JQuery,
		tooltipster(methodName: "enable"): JQuery,
		tooltipster(methodName: "destroy"): JQuery,
		tooltipster(methodName: "content"): string,
		tooltipster(methodName: "reposition"): JQuery,
		tooltipster(methodName: "elementTooltip"): JQuery,
		tooltipster(methodName: "elementIcon"): JQuery,
		tooltipster(methodName: string, optionName: string, optionValue: string): JQuery,
		tooltipster(methodName: string, param: string): JQuery,
		tooltipster(methodName: string): JQuery,
		tooltipster(methodName: string): string
	}

			
}
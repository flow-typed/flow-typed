

declare module 'tooltipster' {
		declare interface JQuery {
		tooltipster(
		options?: JQueryTooltipster.ITooltipsterOptions
	): JQuery | JQueryTooltipster.ITooltipsterInstance[]
	}

			
}

declare module 'npm$namespace$JQueryTooltipster' {
		declare export interface ITooltipsterOptions {
		animation?: string,
		arrow?: boolean,
		arrowColor?: string,
		autoClose?: boolean,
		content?: string,
		contentAsHTML?: boolean,
		contentCloning?: boolean,
		debug?: boolean,
		delay?: number,
		minWidth?: number,
		maxWidth?: number,
		functionInit?: (origin: JQuery, content: string) => void,
		functionBefore?: (origin: JQuery, continueTooltip: () => void) => void,
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
		positionTrackerCallback?: Function,
		restoration?: string,
		speed?: number,
		timer?: number,
		theme?: string,
		touchDevices?: boolean,
		trigger?: string,
		updateAnimation?: boolean
	}

	declare export interface ITooltipsterInstance {
		content(value: string): JQuery,
		show(): void,
		hide(): void,
		disable(): void,
		enable(): void,
		destroy(): void,
		reposition(): void,
		elementTooltip(): JQuery,
		elementIcon(): JQuery
	}

			
}
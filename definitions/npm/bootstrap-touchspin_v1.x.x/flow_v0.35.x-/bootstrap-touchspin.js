

declare module 'bootstrap-touchspin' {
		declare interface TouchSpinOptions {
		initval?: number | string,
		min?: number,
		max?: number,
		step?: number,
		forcestepdivisibility?: string,
		decimals?: number,
		stepinterval?: number,
		stepintervaldelay?: number,
		verticalbuttons?: boolean,
		verticalupclass?: string,
		verticaldownclass?: string,
		prefix?: string,
		postfix?: string,
		prefix_extraclass?: string,
		postfix_extraclass?: string,
		booster?: boolean,
		boostat?: number,
		maxboostedstep?: number | boolean,
		mousewheel?: boolean,
		buttondown_class?: string,
		buttonup_class?: string
	}

	declare interface JQuery {
		TouchSpin(): JQuery,
		TouchSpin(options: TouchSpinOptions): JQuery
	}

			
}
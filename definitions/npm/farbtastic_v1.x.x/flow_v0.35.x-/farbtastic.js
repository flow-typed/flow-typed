

declare module 'farbtastic' {
		declare interface JQueryStatic {
		farbtastic(
		placeholder: JQueryFarbtastic.Placeholder, callback: JQueryFarbtastic.Callback
	): JQueryFarbtastic.Farbtastic,
		farbtastic(
		placeholder: JQueryFarbtastic.Placeholder, options: JQueryFarbtastic.Options
	): JQueryFarbtastic.Farbtastic,
		farbtastic(placeholder: JQueryFarbtastic.Placeholder): JQueryFarbtastic.Farbtastic
	}

	declare interface JQuery {
		farbtastic(callback: JQueryFarbtastic.Callback): JQuery,
		farbtastic(options: JQueryFarbtastic.Options): JQuery,
		farbtastic(): JQuery
	}

			
}

declare module 'npm$namespace$JQueryFarbtastic' {
	declare type Placeholder = string | Element | JQuery;

	declare type CallbackFunction = (color: string) => any;

	declare type Callback = CallbackFunction | Placeholder;

	declare interface Options {
		callback?: Callback,
		width?: number,
		wheelWidth?: number
	}

	declare interface Farbtastic {
		linked: CallbackFunction | JQuery,
		color: string,
		hsl: number[],
		linkTo(callback: Callback): Farbtastic,
		setColor(color: string | number[]): Farbtastic,
		setHSL(hsl: number[]): Farbtastic
	}

			
}
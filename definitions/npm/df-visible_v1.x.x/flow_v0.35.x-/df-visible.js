

declare module 'df-visible' {
	declare type Direction = "horizontal" | "vertical" | "both";

	declare interface JQuery {
		visible(partial?: boolean, hidden?: boolean, direction?: Direction): boolean
	}

			
}
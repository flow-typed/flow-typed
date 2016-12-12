

declare module 'route-recognizer' {
		declare interface Route<H> {
		path: string,
		handler: H
	}

	declare interface MatchedRoute<H> {
		handler: H,
		params: {
		[key: string]: string
	}
	}

		declare class RouteRecognizer<H>  {
		constructor(): this;
		add: (routes: Route<H>[]) => void;
		recognize: (path: string) => MatchedRoute<H>[]
	}

	declare module.exports: undefined


}
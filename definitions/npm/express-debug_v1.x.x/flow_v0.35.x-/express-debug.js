

declare module 'express-debug' {
		declare interface CustomPanel {
		name: string,
		template: string,
		process(locals: any): any,
		standalone?: boolean,
		initialize(req: express.Request): void,
		finalize(req: express.Request): void,
		pre_render(req: express.Request): void,
		post_render(req: express.Request): void,
		options?: any
	}

	declare function debug(
		app: express.Application, settings?: {
		depth?: number,
		theme?: string,
		extra_panels?: CustomPanel[],
		panels?: string[],
		path?: string,
		extra_attrs?: string,
		sort?: boolean | ((a: number, b: number) => number)
	}
	): void

		declare module.exports: undefined


}
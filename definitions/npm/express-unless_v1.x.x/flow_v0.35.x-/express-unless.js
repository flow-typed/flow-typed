

declare module 'express-unless' {
			declare function unless(options: unless.Options): express.RequestHandler

		declare module.exports: undefined


}

declare module 'unless' {
		declare export interface Options {
		custom?: (req: express.Request) => boolean,
		path?: any,
		ext?: any,
		method?: any
	}

	declare export interface RequestHandler {
		unless?: typeof unless
	}

			
}
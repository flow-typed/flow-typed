

declare module 'express-less' {
			declare function less(root: string, options?: less.Options): express.RequestHandler

		declare module.exports: undefined


}

declare module 'less' {
		declare export interface Options {
		debug?: boolean,
		compress?: boolean
	}

			
}
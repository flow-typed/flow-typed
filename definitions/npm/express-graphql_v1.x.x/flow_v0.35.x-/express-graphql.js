

declare module 'express-graphql' {
			declare function graphqlHTTP(options: graphqlHTTP.Options): graphqlHTTP.Middleware

		declare module.exports: undefined


}

declare module 'graphqlHTTP' {
	declare export type Options = ((req: Request) => OptionsObj) | OptionsObj;

	declare export type OptionsObj = {
		schema: Object,
		context?: Object,
		rootValue?: Object,
		pretty?: boolean,
		formatError?: Function,
		graphiql?: boolean
	};

	declare type Middleware = (request: Request, response: Response) => void;

				
}
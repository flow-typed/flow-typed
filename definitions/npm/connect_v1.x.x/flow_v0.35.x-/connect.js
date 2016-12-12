

declare module 'connect' {
			declare function createServer(): createServer.Server

		declare module.exports: undefined


}

declare module 'createServer' {
	declare export type ServerHandle = HandleFunction | http.Server;

	declare export type SimpleHandleFunction = (req: http.IncomingMessage, res: http.ServerResponse) => void;

	declare export type NextHandleFunction = (req: http.IncomingMessage, res: http.ServerResponse, next: Function) => void;

	declare export type ErrorHandleFunction = (
		err: Error, req: http.IncomingMessage, res: http.ServerResponse, next: Function
	) => void;

	declare export type HandleFunction = SimpleHandleFunction | NextHandleFunction | ErrorHandleFunction;

	declare export interface ServerStackItem {
		route: string,
		handle: ServerHandle
	}

	declare export interface Server {
		(req: http.IncomingMessage, res: http.ServerResponse, next?: Function): void,
		route: string,
		stack: ServerStackItem[],
		use(fn: HandleFunction): Server,
		use(route: string, fn: HandleFunction): Server,
		handle(req: http.IncomingMessage, res: http.ServerResponse, next: Function): void,
		listen(
		port: number, hostname?: string, backlog?: number, callback?: Function
	): http.Server,
		listen(port: number, hostname?: string, callback?: Function): http.Server,
		listen(path: string, callback?: Function): http.Server,
		listen(handle: any, listeningListener?: Function): http.Server
	}

			
}
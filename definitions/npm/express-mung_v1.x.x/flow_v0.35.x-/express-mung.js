

declare module 'express-mung' {
	declare type Transform = (body: {
		
	}, request: Request, response: Response) => any;

	declare type TransformHeader = (body: http.IncomingMessage, request: Request, response: Response) => any;

		declare export function json(fn: Transform): any

	declare export function jsonAsync(fn: Transform): PromiseLike<any>

	declare export function headers(fn: TransformHeader): any

	declare export function headersAsync(fn: TransformHeader): PromiseLike<any>

		
}
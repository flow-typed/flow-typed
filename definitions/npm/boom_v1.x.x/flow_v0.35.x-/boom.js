

declare module 'boom' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Boom' {
		declare export interface BoomError {
		data: any,
		reformat: () => void,
		isBoom: boolean,
		isServer: boolean,
		message: string,
		output: Output
	}

	declare export interface Output {
		statusCode: number,
		headers: any,
		payload: any
	}

	declare export function wrap(error: Error, statusCode?: number, message?: string): BoomError

	declare export function create(statusCode: number, message?: string, data?: any): BoomError

	declare export function badRequest(message?: string, data?: any): BoomError

	declare export function unauthorized(message?: string, scheme?: any, attributes?: any): BoomError

	declare export function forbidden(message?: string, data?: any): BoomError

	declare export function notFound(message?: string, data?: any): BoomError

	declare export function methodNotAllowed(message?: string, data?: any): BoomError

	declare export function notAcceptable(message?: string, data?: any): BoomError

	declare export function proxyAuthRequired(message?: string, data?: any): BoomError

	declare export function clientTimeout(message?: string, data?: any): BoomError

	declare export function conflict(message?: string, data?: any): BoomError

	declare export function resourceGone(message?: string, data?: any): BoomError

	declare export function lengthRequired(message?: string, data?: any): BoomError

	declare export function preconditionFailed(message?: string, data?: any): BoomError

	declare export function entityTooLarge(message?: string, data?: any): BoomError

	declare export function uriTooLong(message?: string, data?: any): BoomError

	declare export function unsupportedMediaType(message?: string, data?: any): BoomError

	declare export function rangeNotSatisfiable(message?: string, data?: any): BoomError

	declare export function expectationFailed(message?: string, data?: any): BoomError

	declare export function badData(message?: string, data?: any): BoomError

	declare export function locked(message?: string, data?: any): BoomError

	declare export function preconditionRequired(message?: string, data?: any): BoomError

	declare export function tooManyRequests(message?: string, data?: any): BoomError

	declare export function illegal(message?: string, data?: any): BoomError

	declare export function badImplementation(message?: string, data?: any): BoomError

	declare export function notImplemented(message?: string, data?: any): BoomError

	declare export function badGateway(message?: string, data?: any): BoomError

	declare export function serverUnavailable(message?: string, data?: any): BoomError

	declare export function gatewayTimeout(message?: string, data?: any): BoomError

		
}
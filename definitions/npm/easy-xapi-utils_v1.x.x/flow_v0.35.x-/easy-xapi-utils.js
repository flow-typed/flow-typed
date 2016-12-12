

declare module 'easy-xapi-utils' {
			declare export function isLoggedIn(role?: string): express.RequestHandler

	declare export function isLoggedOut(): express.RequestHandler

	declare export function hasRole(role: string): express.RequestHandler

		
}
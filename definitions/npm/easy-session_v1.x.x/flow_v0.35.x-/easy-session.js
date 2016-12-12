

declare module 'easy-session' {
		declare interface SessionOptions {
		ipCheck?: boolean,
		uaCheck?: boolean,
		freshTimeout?: number,
		maxFreshTimeout?: number
	}

	declare export function main(session: any, options?: SessionOptions): express.RequestHandler

	declare export function isLoggedIn(errorCallback?: Function): express.RequestHandler

	declare export function isFresh(errorCallback?: Function): express.RequestHandler

	declare export function checkRole(role: string, errorCallback?: Function): express.RequestHandler

		
}

declare module 'npm$namespace$Express' {
		declare interface ErrorCallback {
		(err?: any): void
	}

	declare export interface Session {
		login(callback: Function): void,
		login(extend: Object, callback: ErrorCallback): void,
		login(role: string, callback: ErrorCallback): void,
		login(role: string, extend: Object, callback: ErrorCallback): void,
		logout(callback: ErrorCallback): void,
		isLoggedIn(role?: string): boolean,
		isGuest(): boolean,
		isFresh(): boolean,
		setRole(role: string): Session,
		getRole(): string,
		hasRole(role: string): boolean
	}

			
}
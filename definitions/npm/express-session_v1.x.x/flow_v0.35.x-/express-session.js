

declare module 'express-session' {
			declare function session(options?: session.SessionOptions): express.RequestHandler

		declare module.exports: undefined


}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		session?: Session,
		sessionID?: string
	}

	declare export interface Session {
		[key: string]: any,
		id: string,
		regenerate: (callback: (err: any) => void) => void,
		destroy: (callback: (err: any) => void) => void,
		reload: (callback: (err: any) => void) => void,
		save: (callback: (err: any) => void) => void,
		touch: (callback: (err: any) => void) => void,
		cookie: SessionCookie
	}

	declare export interface SessionCookie {
		originalMaxAge: number,
		path: string,
		maxAge: number,
		secure?: boolean,
		httpOnly: boolean,
		domain?: string,
		expires: Date | boolean,
		serialize: (name: string, value: string) => string
	}

			
}

declare module 'session' {
		declare export interface SessionOptions {
		secret: string,
		name?: string,
		store?: Store | MemoryStore,
		cookie?: express.CookieOptions,
		genid?: (req: express.Request) => string,
		rolling?: boolean,
		resave?: boolean,
		proxy?: boolean,
		saveUninitialized?: boolean,
		unset?: string
	}

	declare export interface BaseMemoryStore {
		get: (sid: string, callback: (err: any, session: Express.Session) => void) => void,
		set: (sid: string, session: Express.Session, callback: (err: any) => void) => void,
		destroy: (sid: string, callback: (err: any) => void) => void,
		length?: (callback: (err: any, length: number) => void) => void,
		clear?: (callback: (err: any) => void) => void
	}

		declare export class Store extends node$EventEmitter {
		constructor(config?: any): this;
		regenerate(req: express.Request, fn: (err: any) => any): void;
		load(sid: string, fn: (err: any, session: Express.Session) => any): void;
		createSession(req: express.Request, sess: Express.Session): void;
		get: (sid: string, callback: (err: any, session: Express.Session) => void) => void;
		set: (sid: string, session: Express.Session, callback: (err: any) => void) => void;
		destroy: (sid: string, callback: (err: any) => void) => void;
		all: (
		callback: (err: any, obj: {
		[sid: string]: Express.Session
	}) => void
	) => void;
		length: (callback: (err: any, length: number) => void) => void;
		clear: (callback: (err: any) => void) => void
	}

	declare export class MemoryStore extends BaseMemoryStore {
		get: (sid: string, callback: (err: any, session: Express.Session) => void) => void;
		set: (sid: string, session: Express.Session, callback: (err: any) => void) => void;
		destroy: (sid: string, callback: (err: any) => void) => void;
		all: (
		callback: (err: any, obj: {
		[sid: string]: Express.Session
	}) => void
	) => void;
		length: (callback: (err: any, length: number) => void) => void;
		clear: (callback: (err: any) => void) => void
	}

	
}
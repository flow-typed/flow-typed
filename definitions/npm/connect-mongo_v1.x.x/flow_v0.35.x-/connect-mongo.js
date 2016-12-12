

declare module 'connect-mongo' {
			declare function connectMongo(
		connect: (options?: session.SessionOptions) => express.RequestHandler
	): connectMongo.MongoStoreFactory

		declare module.exports: undefined


}

declare module 'connectMongo' {
		declare export interface DefaultOptions {
		host?: string,
		port?: string,
		autoReconnect?: boolean,
		ssl?: boolean,
		w?: number,
		collection?: string,
		stringify?: boolean,
		hash?: boolean,
		ttl?: number,
		autoRemove?: string,
		autoRemoveInterval?: number,
		touchAfter?: number
	}

	declare export interface MongoUrlOptions {
		url: string,
		mongoOptions?: mongoose.ConnectionOptions
	}

	declare export interface MogooseConnectionOptions {
		mongooseConnection: mongoose.Connection
	}

	declare export interface NaitiveMongoOptions {
		db: mongodb.Db
	}

	declare export interface MongoStoreFactory {
		new (options: MongoUrlOptions): MongoStore,
		new (options: MogooseConnectionOptions): MongoStore,
		new (options: NaitiveMongoOptions): MongoStore
	}

		declare export class MongoStore extends session$Store {
		get: (sid: string, callback: (err: any, session: Express.Session) => void) => void;
		set: (sid: string, session: Express.Session, callback: (err: any) => void) => void;
		destroy: (sid: string, callback: (err: any) => void) => void;
		length: (callback: (err: any, length: number) => void) => void;
		clear: (callback: (err: any) => void) => void;
		touch: (sid: string, session: Express.Session, callback: (err: any) => void) => void
	}

	
}
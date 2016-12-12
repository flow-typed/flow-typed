

declare module 'connect-redis' {
			declare function s(
		options: (options?: session.SessionOptions) => express.RequestHandler
	): s.RedisStore

		declare module.exports: undefined


}

declare module 's' {
		declare interface RedisStore {
		new (options: RedisStoreOptions): session.Store
	}

	declare interface RedisStoreOptions {
		client?: redis.RedisClient,
		host?: string,
		port?: number,
		socket?: string,
		url?: string,
		ttl?: number,
		disableTTL?: boolean,
		db?: number,
		pass?: string,
		prefix?: string,
		unref?: boolean,
		serializer?: Serializer | JSON
	}

	declare interface Serializer {
		stringify: Function,
		parse: Function
	}

			
}
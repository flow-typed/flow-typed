

declare module 'jsurl' {
		declare interface UrlQuery {
		clear: () => void
	}

		declare class Url<T>  {
		constructor(): this;
		constructor(url: string): this;
		query: T;
		protocol: string;
		user: string;
		pass: string;
		host: string;
		port: string;
		path: string;
		hash: string;
		href: string;
		toString: () => string
	}

	
}
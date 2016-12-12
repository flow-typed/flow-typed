

declare module 'domurl' {
				declare class QueryString  {
		constructor(qs?: string): this;
		toString: () => string
	}

	declare class Url<T>  {
		constructor(url?: string): this;
		query: T;
		protocol: string;
		user: string;
		pass: string;
		host: string;
		port: string;
		path: string;
		hash: string;
		href: string;
		toString: () => string;
		encode: (s: string) => string;
		decode: (s: string) => string;
		isAbsolute: () => boolean;
		paths: (paths?: [string]) => [string];
		isEmptyQuery: () => boolean;
		queryLength: () => number;
		clearQuery: () => Url<T>
	}

	
}
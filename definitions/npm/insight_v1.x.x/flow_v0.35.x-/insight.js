

declare module 'insight' {
				declare class Insight  {
		trackingCode: string;
		trackingProvider: string;
		packageName: string;
		packageVersion: string;
		os: string;
		nodeVersion: string;
		appVersion: string;
		config: IConfigstore;
		optOut: boolean;
		clientId: string;
		constructor(options: IOptions): this;
		track(...args: string[]): void;
		askPermission(msg?: string, cb?: Function): void
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$insight' {
		declare interface IOptions {
		trackingCode: string,
		trackingProvider?: string,
		packageName: string,
		packageVersion?: string,
		config?: IConfigstore
	}

	declare interface IConfigstore {
		path: string,
		all: any,
		get(key: string): any,
		set(key: string, val: any): void,
		del(key: string): void
	}

			
}
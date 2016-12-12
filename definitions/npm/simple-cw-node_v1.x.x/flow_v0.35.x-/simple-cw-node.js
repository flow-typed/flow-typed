

declare module 'simple-cw-node' {
			declare function ChatWork(): ChatWork.ChatWork

		declare module.exports: undefined


}

declare module 'ChatWork' {
		declare interface ChatWorkInitOptions {
		token: string
	}

	declare interface ChatWork {
		apiVersion: string,
		sdkVersion: string,
		token: string,
		Deferred: any,
		when: any,
		init(options: ChatWorkInitOptions): void,
		get(api: "me", callback: (err: Error, res: superagent.Response) => void): void,
		get(
		api: "my/status", callback: (err: Error, res: superagent.Response) => void
	): void,
		get(
		api: "my/tasks", callback: (err: Error, res: superagent.Response) => void
	): void,
		get(
		api: "contacts", callback: (err: Error, res: superagent.Response) => void
	): void,
		get(api: "rooms", callback: (err: Error, res: superagent.Response) => void): void,
		post(
		api: "rooms", args: any, callback: (err: Error, res: superagent.Response) => void
	): void,
		api(method: string, api: string): any,
		api(
		method: string, api: string, callback: (err: Error, res: superagent.Response) => void
	): void,
		api(
		method: string, api: string, args: any, callback: (err: Error, res: superagent.Response) => void
	): void,
		get(api: string): any,
		get(api: string, callback: (err: Error, res: superagent.Response) => void): void,
		get(
		api: string, args: any, callback: (err: Error, res: superagent.Response) => void
	): void,
		post(api: string): any,
		post(api: string, callback: (err: Error, res: superagent.Response) => void): void,
		post(
		api: string, args: any, callback: (err: Error, res: superagent.Response) => void
	): void,
		put(api: string): any,
		put(api: string, callback: (err: Error, res: superagent.Response) => void): void,
		put(
		api: string, args: any, callback: (err: Error, res: superagent.Response) => void
	): void,
		del(api: string): any,
		del(api: string, callback: (err: Error, res: superagent.Response) => void): void,
		del(
		api: string, args: any, callback: (err: Error, res: superagent.Response) => void
	): void
	}

			
}
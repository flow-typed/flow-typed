

declare module 'async-polling' {
			declare function AsyncPolling<Result>(
		pollingFunc: (end: (err?: Error, result?: Result) => any) => any, delay: number
	): {
		run: () => any,
		stop: () => any,
		on: (eventName: AsyncPolling.EventName, listener: Function) => any
	}

		declare module.exports: undefined


}

declare module 'AsyncPolling' {
	declare export type EventName = "run" | "start" | "error" | "result" | "end" | "schedule" | "stop";

				
}
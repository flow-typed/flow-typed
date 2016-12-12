

declare module 'riotcontrol' {
					declare module.exports: undefined


}

declare module 'npm$namespace$RiotControl' {
		declare interface Store {
		on(events: string, fn: Function): Store,
		one(name: string, fn: Function): Store,
		off(events: string, fn?: Function): Store,
		trigger(name: string, ...args: any[]): Store
	}

	declare function addStore(store: Store): void

	declare function on(events: string, fn: Function): void

	declare function one(name: string, fn: Function): void

	declare function off(events: string, fn?: Function): void

	declare function trigger(name: string, ...args: any[]): void

		
}


declare module 'commangular-mock' {
			declare function dispatch(ec: commangular.ICommandCall, callback: Function): void

		
}

declare module 'commangular' {
		declare interface ICommAngularStatic {
		dispatch(ec: ICommandCall, callback: Function): void
	}

	declare interface ICommandCall {
		command: string,
		data?: any
	}

	declare interface ICommandInfo {
		dataPassed(key: string): any,
		resultKey(key: string): any,
		canceled(): boolean,
		commandExecuted(): boolean
	}

			
}
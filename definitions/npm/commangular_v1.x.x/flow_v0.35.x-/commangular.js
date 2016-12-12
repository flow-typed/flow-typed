

declare module 'commangular' {
		declare interface ICommAngularStatic {
		create(
		commandName: string, commandFunction: Function, commandConfig?: ICommandConfig
	): void,
		command(
		commandName: string, commandFunction: Function, commandConfig?: ICommandConfig
	): void,
		aspect(aspectDescriptor: string, aspectFunction: ICommand, order: number): void,
		eventAspect(aspectDescriptor: string, aspectFunction: ICommand, order: number): void,
		resolver(commandName: string, resolverFunction: Function): void,
		reset(): void,
		debug(enableDebug: boolean): void,
		build(): void
	}

	declare interface ICommand {
		execute(): any
	}

	declare interface IResultCommand {
		onResult(result: any): void,
		onError(error: Error): void
	}

	declare interface ICommandResult {
		lastResult: any
	}

	declare interface ICommandConfig {
		resultKey: string
	}

	declare interface ICommAngularProvider {
		mapTo(eventName: string): ICommAngularDescriptor,
		asSequence(): ICommAngularDescriptor,
		asParallel(): ICommAngularDescriptor,
		asFlow(): ICommAngularDescriptor,
		findCommand(eventName: string): ICommAngularDescriptor
	}

	declare interface ICommAngularService {
		dispatch(eventName: string, data?: any): ng.IPromise<any>
	}

	declare interface ICommAngularDescriptor {
		asSequence(): ICommAngularDescriptor,
		asParallel(): ICommAngularDescriptor,
		asFlow(): ICommAngularDescriptor,
		add(command: string): ICommAngularDescriptor,
		add(descriptor: ICommAngularDescriptor): ICommAngularDescriptor,
		link(expression: string, services?: string): ICommAngularDescriptor,
		to(command: string): ICommAngularDescriptor
	}

			
}

declare module 'angular' {
		declare interface IRootScopeService {
		dispatch(eventName: string, data?: any): ng.IPromise<any>
	}

			
}


declare module 'knockout.command' {
		declare interface KoliteCommand {
		canExecute: KnockoutComputed<boolean>,
		execute(...args: any[]): any
	}

	declare interface KoliteAsyncCommand {
		isExecuting: KnockoutObservable<boolean>
	}

	declare interface KoLiteCommandOptions {
		execute(...args: any[]): any,
		canExecute?: (isExecuting: boolean) => any
	}

	declare interface KnockoutStatic {
		command(options: KoLiteCommandOptions): KoliteCommand,
		asyncCommand(options: KoLiteCommandOptions): KoliteAsyncCommand
	}

	declare interface KnockoutCommandStatic {
		command(options: KoLiteCommandOptions): KoliteCommand,
		asyncCommand(options: KoLiteCommandOptions): KoliteAsyncCommand
	}

	declare interface KnockoutUtils {
		wrapAccessor(accessor: any): Function
	}

	declare interface KnockoutBindingHandlers {
		command: KnockoutBindingHandler
	}

			
}

declare module 'kocommand' {
					declare module.exports: undefined


}
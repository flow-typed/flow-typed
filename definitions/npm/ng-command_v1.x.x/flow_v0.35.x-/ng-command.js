

declare module 'ng-command' {
					
}

declare module 'npm$namespace$ngCommand' {
		declare interface ICommand {
		isExecuting: boolean,
		canExecute: boolean,
		execute: () => angular.IPromise<any>
	}

	declare interface ICommandFactory {
		($scope: angular.IScope, execute: () => angular.IPromise<any>, canExecute?: () => boolean): ICommand
	}

		declare class Command extends ICommand {
		id: string;
		isExecuting: boolean;
		canExecute: boolean;
		constructor($scope: angular.IScope, execute: () => angular.IPromise<any>, canExecute?: () => boolean): this;
		execute(): angular.IPromise<any>
	}

	
}
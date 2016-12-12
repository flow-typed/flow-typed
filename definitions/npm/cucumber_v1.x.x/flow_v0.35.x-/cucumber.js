

declare module 'cucumber' {
					declare module.exports: undefined


}

declare module 'npm$namespace$cucumber' {
	declare type StepDefinitionParam = string | CallbackStepDefinition | TableDefinition;

	declare export interface CallbackStepDefinition {
		pending: () => PromiseLike<any>,
		(error?: any, pending?: string): void
	}

	declare export interface TableDefinition {
		raw: () => Array<any>,
		rows: () => Array<any>,
		rowsHash: () => {
		
	},
		hashes: () => {
		
	}
	}

	declare interface StepDefinitionCode {
		(...stepArgs: Array<StepDefinitionParam>): PromiseLike<any> | any | void
	}

	declare interface StepDefinitionOptions {
		timeout?: number
	}

	declare export interface StepDefinitions {
		Given(
		pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode
	): void,
		Given(pattern: RegExp | string, code: StepDefinitionCode): void,
		When(
		pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode
	): void,
		When(pattern: RegExp | string, code: StepDefinitionCode): void,
		Then(
		pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode
	): void,
		Then(pattern: RegExp | string, code: StepDefinitionCode): void,
		setDefaultTimeout(time: number): void
	}

	declare interface HookScenario {
		getKeyword(): string,
		getName(): string,
		getDescription(): string,
		getUri(): string,
		getLine(): number,
		getTags(): string[],
		getException(): Error,
		getAttachments(): any[],
		attach(data: any, mimeType?: string, callback?: (err?: any) => void): void,
		isSuccessful(): boolean,
		isFailed(): boolean,
		isPending(): boolean,
		isUndefined(): boolean,
		isSkipped(): boolean
	}

	declare interface HookCode {
		(scenario: HookScenario, callback?: CallbackStepDefinition): void
	}

	declare interface AroundCode {
		(scenario: HookScenario, runScenario?: (error: string, callback?: Function) => void): void
	}

	declare export interface Hooks {
		Before(code: HookCode): void,
		After(code: HookCode): void,
		Around(code: AroundCode): void,
		setDefaultTimeout(time: number): void,
		registerHandler(
		handlerOption: string, code: (event: any, callback: CallbackStepDefinition) => void
	): void
	}

			
}
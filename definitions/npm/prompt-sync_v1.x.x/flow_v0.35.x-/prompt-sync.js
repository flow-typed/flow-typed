

declare module 'prompt-sync' {
			declare function PromptSync(config?: PromptSync.Config): PromptSync.Prompt

		declare module.exports: undefined


}

declare module 'PromptSync' {
		declare export interface Prompt {
		(opts: Option): string,
		(ask: string): string,
		(ask: string, opts: Option): string,
		(ask: string, value: string): string,
		(ask: string, value: string, opts: Option): string,
		hide(ask: string): string
	}

	declare export interface Option {
		ask?: string,
		echo?: string,
		autocomplete?: AutoCompleteFunction,
		value?: string
	}

	declare export interface Config {
		sigint?: boolean,
		autocomplete?: AutoCompleteFunction,
		history?: History
	}

	declare export interface History {
		atStart(): boolean,
		atPenultimate(): boolean,
		pastEnd(): boolean,
		atEnd(): boolean,
		prev(): string,
		next(): string,
		reset(): void,
		push(str: string): void,
		save(): void
	}

	declare export interface AutoCompleteFunction {
		(input: string): string[]
	}

			
}
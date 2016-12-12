

declare module 'inquirer' {
	declare type Prompts = {
		[name: string]: PromptModule
	};

	declare type ChoiceType = string | objects.ChoiceOption | objects.Separator;

	declare type Questions = Question | Question[] | Rx.Observable<Question>;

	declare interface Inquirer {
		restoreDefaultPrompts(): void,
		registerPrompt(name: string, prompt: PromptModule): void,
		createPromptModule(): PromptModule,
		prompt(questions: Questions, cb: (answers: Answers) => any): ui.Prompt,
		prompt(questions: Questions): Promise<Answers>,
		prompts: Prompts,
		Separator: objects.SeparatorStatic,
		ui: {
		BottomBar: ui.BottomBar,
		Prompt: ui.Prompt
	}
	}

	declare interface PromptModule {
		(questions: Questions, cb: (answers: Answers) => any): ui.Prompt,
		registerPrompt(name: string, prompt: PromptModule): ui.Prompt,
		restoreDefaultPrompts(): void
	}

	declare interface Question {
		type?: string,
		name?: string,
		message?: string | ((answers: Answers) => string),
		default?: any | ((answers: Answers) => any),
		choices?: ChoiceType[] | ((answers: Answers) => ChoiceType[]),
		validate(input: string): boolean | string,
		filter(input: string): string,
		when?: boolean | ((answers: Answers) => boolean),
		paginated?: boolean
	}

	declare interface Answers {
		[key: string]: any
	}

			declare module.exports: Inquirer


}

declare module 'ui' {
		declare interface Prompt {
		new (promptModule: Prompts): Prompt,
		onCompletion(): void,
		processQuestion(question: Question): any,
		fetchAnswer(question: Question): any,
		setDefaultType(question: Question): any,
		filterIfRunnable(question: Question): any
	}

	declare interface BottomBar {
		new (opt?: BottomBarOption): BottomBar,
		render(): BottomBar,
		updateBottomBar(bottomBar: string): BottomBar,
		writeLog(data: any): BottomBar,
		enforceLF(str: string): string,
		write(message: string): void,
		log: through.ThroughStream
	}

	declare interface BottomBarOption {
		bottomBar?: string
	}

	declare interface BaseUI<TOpt> {
		new (opt: TOpt): void,
		onForceClose(): void,
		close(): void,
		onKeypress(s: string, key: Key): void
	}

	declare interface Key {
		sequence: string,
		name: string,
		meta: boolean,
		shift: boolean,
		ctrl: boolean
	}

			
}

declare module 'objects' {
		declare interface Choice {
		new (str: string): Choice,
		new (separator: Separator): Choice,
		new (option: ChoiceOption): Choice
	}

	declare interface ChoiceOption {
		name?: string,
		value?: string,
		type?: string,
		extra?: any,
		key?: string,
		checked?: boolean,
		disabled?: string | ((answers: Answers) => any)
	}

	declare interface Choices {
		new (choices: (string | Separator | ChoiceOption)[], answers?: Answers): Choices,
		choices: Choice[],
		realChoices: Choice[],
		length: number,
		realLength: number,
		getChoice(selector: number): Choice,
		get(selector: number): Choice,
		where<U>(whereClause: U): Choice[],
		pluck(propertyName: string): any[],
		forEach<T>(application: (choice: Choice) => T): T[]
	}

	declare interface SeparatorStatic {
		new (line?: string): Separator,
		exclude(obj: any): boolean
	}

	declare interface Separator {
		type: string,
		line: string,
		toString(): string
	}

			
}
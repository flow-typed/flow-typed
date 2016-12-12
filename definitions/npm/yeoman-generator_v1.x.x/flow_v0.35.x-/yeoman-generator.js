

declare module 'yeoman-generator' {
					declare module.exports: undefined


}

declare module 'npm$namespace$yo' {
		declare export interface IYeomanGenerator {
		argument(name: string, config: IArgumentConfig): void,
		composeWith(namespace: string, options: any, settings?: IComposeSetting): IYeomanGenerator,
		defaultFor(name: string): void,
		destinationRoot(rootPath?: string): string,
		destinationPath(...path: string[]): string,
		determineAppname(): void,
		getCollisionFilter(): (output: any) => void,
		hookFor(name: string, config: IHookConfig): void,
		option(name: string, config: IYeomanGeneratorOption): void,
		rootGeneratorName(): string,
		run(args?: any): void,
		run(args: any, callback?: Function): void,
		runHooks(callback?: Function): void,
		sourceRoot(rootPath?: string): string,
		templatePath(...path: string[]): string,
		prompt(opt: IPromptOptions | IPromptOptions[], callback: (answers: any) => void): void,
		prompt<T>(opt: IPromptOptions | IPromptOptions[]): PromiseLike<T>,
		npmInstall(packages?: string[] | string, options?: any, cb?: Function): void,
		installDependencies(options?: IInstallDependencyOptions): void,
		spawnCommand(name: string, args?: string[], options?: Object): void,
		spawnCommandSync(name: string, args?: string[], options?: Object): void,
		options: {
		[key: string]: any
	},
		fs: IMemFsEditor
	}

	declare export interface IMemFsEditor {
		read(filepath: string, options?: Object): string,
		readJSON(filepath: string, defaults?: Object): Object,
		write(filepath: string, contents: string): void,
		writeJSON(filepath: string, contents: Object, replacer?: Function, space?: number): void,
		delete(filepath: string, options?: Object): void,
		copy(from: string, to: string, options?: Object): void,
		copyTpl(from: string, to: string, context: Object, options?: Object): void,
		move(from: string, to: string, options?: Object): void,
		exists(filepath: string): boolean,
		commit(callback: Function): void,
		commit(filters: any[], callback: Function): void
	}

	declare export interface IInstallDependencyOptions {
		npm?: boolean,
		bower?: boolean,
		skipMessage?: boolean,
		callback?: Function
	}

	declare export interface IChoice {
		name: string,
		value: string,
		short?: string
	}

	declare export interface IPromptOptions {
		type?: string,
		name: string,
		message: string | ((answers: Object) => string),
		choices?: any[] | ((answers: Object) => any),
		default?: string | number | string[] | number[] | ((answers: Object) => (string | number | string[] | number[])),
		validate?: ((input: any) => boolean | string),
		filter?: ((input: any) => any),
		when?: ((answers: Object) => boolean) | boolean,
		store?: boolean
	}

	declare export interface IGruntFileStatic {
		loadNpmTasks(pluginName: string): void,
		insertConfig(name: string, config: any): void,
		registerTask(name: string, tasks: any): void,
		insertVariable(name: string, value: any): void,
		prependJavaScript(code: string): void
	}

	declare export interface IArgumentConfig {
		desc: string,
		required?: boolean,
		optional?: boolean,
		type: any,
		defaults?: any
	}

	declare export interface IComposeSetting {
		local?: string,
		link?: string
	}

	declare export interface IHookConfig {
		as: string,
		args: any,
		options: any
	}

	declare export interface IYeomanGeneratorOption {
		alias?: string,
		defaults?: any,
		desc?: string,
		hide?: boolean,
		type?: any
	}

	declare export interface IQueueProps {
		initializing: () => void,
		prompting?: () => void,
		configuring?: () => void,
		default?: () => void,
		writing: {
		[target: string]: () => void
	},
		conflicts?: () => void,
		install?: () => void,
		end: () => void
	}

	declare export interface INamedBase {
		
	}

	declare export interface IBase {
		
	}

	declare export interface IAssert {
		file(path: string): void,
		file(paths: string[]): void,
		fileContent(file: string, reg: RegExp): void,
		fileContent(pairs: any[][]): void,
		files(pairs: any[]): void,
		implement(subject: any, methods: any): void,
		noFile(file: string): void,
		noFileContent(file: string, reg: RegExp): void,
		noFileContent(pairs: any[][]): void,
		noImplement(subject: any, methods: any): void,
		textEqual(value: string, expected: string): void
	}

	declare export interface ITestHelper {
		createDummyGenerator(): IYeomanGenerator,
		createGenerator(name: string, dependencies: any[], args: any, options: any): IYeomanGenerator,
		decorate(context: any, method: string, replacement: Function, options: any): void,
		gruntfile(options: any, done: Function): void,
		mockPrompt(generator: IYeomanGenerator, answers: any): void,
		registerDependencies(dependencies: string[]): void,
		restore(): void,
		run(generator: any): IRunContext
	}

	declare export interface IRunContext {
		async(): Function,
		inDir(dirPath: string): IRunContext,
		withArguments(args: any): IRunContext,
		withGenerators(dependencies: string[]): IRunContext,
		withOptions(options: any): IRunContext,
		withPrompts(answers: any): IRunContext
	}

		declare export class YeomanGeneratorBase extends NodeJS$EventEmitter, IYeomanGenerator {
		argument(name: string, config: IArgumentConfig): void;
		composeWith(namespace: string, options: any, settings?: IComposeSetting): IYeomanGenerator;
		defaultFor(name: string): void;
		destinationRoot(rootPath?: string): string;
		destinationPath(...path: string[]): string;
		determineAppname(): void;
		getCollisionFilter(): (output: any) => void;
		hookFor(name: string, config: IHookConfig): void;
		option(name: string, config?: IYeomanGeneratorOption): void;
		rootGeneratorName(): string;
		run(args?: any): void;
		run(args: any, callback?: Function): void;
		runHooks(callback?: Function): void;
		sourceRoot(rootPath?: string): string;
		templatePath(...path: string[]): string;
		addListener(event: string, listener: Function): this;
		on(event: string, listener: Function): this;
		once(event: string, listener: Function): this;
		removeListener(event: string, listener: Function): this;
		removeAllListeners(event?: string): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		listenerCount(type: string): number;
		async(): any;
		prompt(opt: IPromptOptions | IPromptOptions[], callback: (answers: any) => void): void;
		prompt<T>(opt: IPromptOptions | IPromptOptions[]): PromiseLike<T>;
		log(message: string): void;
		npmInstall(packages: string[], options?: any, cb?: Function): void;
		installDependencies(options?: IInstallDependencyOptions): void;
		spawnCommand(name: string, args?: string[], options?: Object): void;
		spawnCommandSync(name: string, args?: string[], options?: Object): void;
		appname: string;
		gruntfile: IGruntFileStatic;
		options: {
		[key: string]: any
	};
		fs: IMemFsEditor
	}

	declare export class NamedBase extends YeomanGeneratorBase, INamedBase {
		constructor(args: string | string[], options: any): this
	}

	declare export class Base extends NamedBase, IBase {
		extend(protoProps: IQueueProps, staticProps?: any): IYeomanGenerator
	}

	
}

declare module 'generators' {
				declare export class NamedBase extends YeomanGeneratorBase, INamedBase {
		constructor(args: string | string[], options: any): this
	}

	declare export class Base extends NamedBase, IBase {
		extend(protoProps: IQueueProps, staticProps?: any): IYeomanGenerator
	}

	
}
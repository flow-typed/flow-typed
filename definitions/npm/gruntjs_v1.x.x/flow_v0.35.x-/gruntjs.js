

declare module 'gruntjs' {
		declare interface String {
		yellow: string,
		cyan: string,
		white: string,
		magenta: string,
		green: string,
		red: string,
		grey: string,
		blue: string
	}

	declare interface IGrunt {
		config: grunt.config.ConfigModule,
		event: grunt.event.EventModule,
		fail: grunt.fail.FailModule,
		file: grunt.file.FileModule,
		log: grunt.log.LogModule,
		option: grunt.option.OptionModule,
		task: grunt.task.TaskModule,
		template: grunt.template.TemplateModule,
		util: grunt.util.UtilModule,
		package: node.NodePackage,
		version: string
	}

			
}

declare module 'npm$namespace$node' {
		declare interface NodePackage {
		name: string,
		version: string,
		description?: string,
		keywords?: string[],
		homepage?: string
	}

			
}

declare module 'npm$namespace$minimatch' {
		declare interface IMinimatchOptions {
		debug?: boolean,
		nobrace?: boolean,
		noglobstar?: boolean,
		dot?: boolean,
		noext?: boolean,
		nocase?: boolean,
		nonull?: boolean,
		matchBase?: boolean,
		nocomment?: boolean,
		nonegate?: boolean,
		flipNegate?: boolean
	}

			
}

declare module 'config' {
		declare interface IProjectConfig {
		[plugin: string]: any
	}

	declare interface ConfigModule {
		(prop: string, value: any): any,
		(prop: string): any,
		init(config: IProjectConfig): void,
		get<T>(prop: string): T,
		get(): ConfigModule,
		process<T>(value: string): T,
		getRaw<T>(prop: string): T,
		set<T>(prop: string, value: T): T,
		escape(propString: string): string,
		requires(prop: string, ...andProps: string[]): void,
		requires(prop: string[], ...andProps: string[][]): void,
		merge<T>(configObject: T): void
	}

			
}

declare module 'event' {
		declare interface EventModule {
		addListener(event: string, listener: Function): EventModule,
		on(event: string, listener: Function): EventModule,
		onAny(listener: Function): EventModule,
		offAny(listener: Function): EventModule,
		once(event: string, listener: Function): EventModule,
		many(event: string, timesToListen: number, listener: Function): EventModule,
		removeListener(event: string, listener: Function): EventModule,
		off(event: string, listener: Function): EventModule,
		removeAllListeners(event: string): EventModule,
		setMaxListener(n: number): void,
		listeners(event: string): Function[],
		listenersAny(): Function[],
		emit(event: string, ...args: any[]): any
	}

			
}

declare module 'fail' {
		declare interface FailModule {
		warn(error: string, errorCode?: ErrorCode): void,
		warn(error: Error, errorCode?: ErrorCode): void,
		fatal(error: string, errorCode?: ErrorCode): void,
		fatal(error: Error, errorCode?: ErrorCode): void
	}

			
}

declare module 'file' {
		declare interface IFileEncodedOption {
		encoding: string
	}

	declare interface IFileWriteOptions {
		noProcess?: any
	}

	declare interface IFileWriteBufferOption {
		process?: (buffer: Buffer) => boolean
	}

	declare interface IFileWriteStringOption {
		process?: (file: string) => boolean
	}

	declare interface FileModule {
		defaultEncoding: string,
		read(filepath: string): string,
		read(filepath: string, options: IFileEncodedOption): Buffer,
		readJSON(filepath: string): any,
		readJSON(filepath: string, options: IFileEncodedOption): Buffer,
		readYAML(filepath: string): any,
		readYAML(filepath: string, options: IFileEncodedOption): Buffer,
		write(filepath: string, contents: string, options?: IFileEncodedOption): void,
		write(filepath: string, contents: Buffer): void,
		copy(srcpath: string, destpath: string): void,
		copy(srcpath: string, destpath: string, options: IFileWriteStringOption): void,
		copy(srcpath: string, destpath: string, options: IFileWriteBufferOption): void,
		delete(filepath: string, options?: {
		force?: boolean
	}): boolean,
		mkdir(dirpath: string, mode?: string): void,
		recurse(
		rootdir: string, callback: (abspath: string, rootdir: string, subdir: string, filename: string) => void
	): void,
		expand(patterns: string[]): string[],
		expand(options: IFilesConfig, patterns: string[]): string[],
		expandMapping(
		patterns: string[], dest: string, options: IExpandedFilesConfig
	): Array<IFileMap>,
		match(pattern: string, filepath: string): string[],
		match(pattern: string, filepaths: string[]): string[],
		match(patterns: string[], filepath: string): string[],
		match(patterns: string[], filepaths: string[]): string[],
		match(
		options: minimatch.IMinimatchOptions, pattern: string, filepath: string
	): string[],
		match(
		options: minimatch.IMinimatchOptions, pattern: string, filepaths: string[]
	): string[],
		match(
		options: minimatch.IMinimatchOptions, patterns: string[], filepath: string
	): string[],
		match(
		options: minimatch.IMinimatchOptions, patterns: string[], filepaths: string[]
	): string[],
		isMatch(pattern: string, filepath: string): boolean,
		isMatch(pattern: string, filepaths: string[]): boolean,
		isMatch(patterns: string[], filepath: string): boolean,
		isMatch(patterns: string[], filepaths: string[]): boolean,
		isMatch(
		options: minimatch.IMinimatchOptions, pattern: string, filepath: string
	): boolean,
		isMatch(
		options: minimatch.IMinimatchOptions, pattern: string, filepaths: string[]
	): boolean,
		isMatch(
		options: minimatch.IMinimatchOptions, patterns: string[], filepath: string
	): boolean,
		isMatch(
		options: minimatch.IMinimatchOptions, patterns: string[], filepaths: string[]
	): boolean,
		exists(path: string, ...append: string[]): boolean,
		isLink(path: string, ...append: string[]): boolean,
		isDir(path: string, ...append: string[]): boolean,
		isFile(path: string, ...append: string[]): boolean,
		isPathAbsolute(path: string, ...append: string[]): boolean,
		arePathsEquivalent(path: string, ...append: string[]): boolean,
		doesPathContain(ancestorPath: string, decendantPaths: string[]): boolean,
		isPathCwd(path: string, ...append: string[]): boolean,
		setBase(path: string, ...append: string[]): void,
		glob: any,
		minimatch: any,
		findup: any
	}

	declare interface IFilesArray {
		
	}

	declare interface IFilesConfig {
		src?: string[],
		dest?: string,
		expand?: boolean,
		filter?: any
	}

	declare interface IExpandedFilesConfig {
		expand?: boolean,
		cwd?: string,
		ext?: string,
		flatten?: boolean,
		rename?: Function
	}

	declare interface IFileMap {
		src: string[],
		dest: string
	}

			
}

declare module 'log' {
		declare interface CommonLogging<T> {
		write(msg: string): T,
		writeln(msg: string): T,
		error(msg: string): T,
		errorlns(msg: string): T,
		ok(msg: string): T,
		oklns(msg: string): T,
		subhead(msg: string): T,
		writeflags(obj: any): T,
		warn(msg: string): T
	}

	declare interface VerboseLogModule {
		or: NotVerboseLogModule
	}

	declare interface NotVerboseLogModule {
		or: VerboseLogModule
	}

	declare interface LogModule {
		verbose: VerboseLogModule,
		notverbose: NotVerboseLogModule
	}

			
}

declare module 'option' {
		declare interface OptionModule {
		(key: string, value: T): void,
		(key: string): T,
		init(initObject?: any): void,
		flags: grunt.IFlag[]
	}

			
}

declare module 'task' {
		declare interface CommonTaskModule {
		registerTask(taskName: string, taskList: string[]): void,
		registerTask(taskName: string, description: string, taskList: string[]): void,
		registerTask(taskName: string, taskFunction: Function): void,
		registerTask(taskName: string, description: string, taskFunction: Function): void,
		registerMultiTask(taskName: string, taskFunction: Function): void,
		registerMultiTask(taskName: string, taskDescription: string, taskFunction: Function): void,
		exists(name: string): boolean,
		renameTask(oldname: string, newname: string): void
	}

	declare interface TaskModule {
		run(tasks: string[]): void,
		run(task: string, ...thenTasks: string[]): void,
		clearQueue(): void,
		normalizeMultiTaskFiles(
		data: grunt.config.IProjectConfig, targetname?: string
	): Array<grunt.file.IFileMap>,
		current: grunt.task.IMultiTask<any>
	}

	declare interface AsyncResultCatcher {
		(success: boolean): void,
		(error: Error): void,
		(result: any): void,
		(): void
	}

	declare interface ITask {
		async(): AsyncResultCatcher,
		requires(tasks: string[]): void,
		requires(tasks: string, ...otherTasks: string[]): void,
		requires(tasks: string[], ...otherTasks: string[][]): void,
		requiresConfig(prop: string, ...andProps: string[]): void,
		name: string,
		nameArgs: string,
		args: string[],
		flags: grunt.IFlag[],
		errorCount: number,
		options(defaultsObj: any): ITaskOptions,
		options<T>(defaultsObj: T): T
	}

	declare interface IMultiTask<T> {
		target: string,
		files: grunt.file.IFilesArray,
		filesSrc: string[],
		data: T
	}

	declare interface ITaskOptions {
		options?: any,
		files?: any
	}

	declare interface ITaskCompactOptions {
		
	}

			
}

declare module 'template' {
		declare interface TemplateModule {
		process(template: string): (options: any) => string,
		process(template: string, options: any): string,
		setDelimiters(name: string): void,
		addDelimiters(name: string, opener: string, closer: string): void,
		date(date?: Date, format?: string): string,
		date(date?: number, format?: string): string,
		date(date?: string, format?: string): string,
		today(format?: string): string
	}

			
}

declare module 'util' {
		declare interface UtilModule {
		kindOf(value: any): string,
		error(message: string, origError?: Error): Error,
		error(error: Error, origError?: Error): Error,
		error(error: any, origError?: Error): Error,
		linefeed: string,
		normalizelf(str: string): string,
		recurse(
		object: any, callbackFunction: (value: any) => void, continueFunction: (objOrValue: any) => boolean
	): void,
		repeat(n: number, str: string): string,
		pluralize(n: number, str: string, separator?: string): string,
		spawn(
		options: ISpawnOptions, done: (error: Error, result: ISpawnResult, code: number) => void
	): ISpawnedChild,
		toArray<T>(arrayLikeObject: any): T[],
		callbackify<R>(syncOrAsyncFunction: () => R): (callback: (result: R) => void) => void,
		callbackify<A, R>(
		syncOrAsyncFunction: (a: A) => R
	): (a: A, callback: (result: R) => void) => void,
		callbackify<A, B, R>(
		syncOrAsyncFunction: (a: A, b: B) => R
	): (a: A, b: B, callback: (result: R) => void) => void,
		callbackify<A, B, C, R>(
		syncOrAsyncFunction: (a: A, b: B, c: C) => R
	): (a: A, b: B, c: C, callback: (result: R) => void) => void,
		callbackify<A, B, C, D, R>(
		syncOrAsyncFunction: (a: A, b: B, c: C, d: D) => R
	): (a: A, b: B, c: C, d: D, callback: (result: R) => void) => void,
		namespace: any,
		task: any
	}

	declare interface ISpawnOptions {
		cmd?: string,
		grunt?: boolean,
		args?: string[],
		opts?: {
		cwd?: string,
		stdio?: any,
		custom?: any,
		env?: any,
		detached?: boolean
	},
		fallback?: any
	}

	declare interface ISpawnResult {
		stdout: string,
		stderr: string,
		code: number
	}

	declare interface ISpawnedChild {
		start(): void,
		once(): void,
		forever(): void,
		kill(): void
	}

			
}

declare module 'npm$namespace$grunt' {
		declare interface IFlag {
		[flag: string]: boolean
	}

	declare interface IConfigComponents {
		initConfig(config: grunt.config.IProjectConfig): void
	}

	declare interface ITaskComponents {
		loadTasks(tasksPath: string): void,
		loadNpmTasks(pluginName: string): void
	}

			
}

declare module 'grunt' {
					declare module.exports: IGrunt


}
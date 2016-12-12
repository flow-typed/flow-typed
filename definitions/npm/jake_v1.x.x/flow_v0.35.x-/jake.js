

declare module 'jake' {
			declare function complete(value?: any): void

	declare function desc(description: string): void

	declare function directory(name: string): jake.DirectoryTask

	declare function fail(...err: string[]): void

	declare function fail(...err: Error[]): void

	declare function fail(...err: any[]): void

	declare function file(
		name: string, prereqs?: string[], action?: () => void, opts?: jake.FileTaskOptions
	): jake.FileTask

	declare function rule(
		pattern: RegExp, source: string | {
		(name: string): string
	}, prereqs?: string[], action?: () => void, opts?: jake.TaskOptions
	): void

	declare function namespace(name: string, scope: () => void): void

	declare function task(
		name: string, prereqs?: string[], action?: (...params: any[]) => any, opts?: jake.TaskOptions
	): jake.Task

	declare function task(
		name: string, action?: (...params: any[]) => any, opts?: jake.TaskOptions
	): jake.Task

	declare function task(
		name: string, opts?: jake.TaskOptions, action?: (...params: any[]) => any
	): jake.Task

	declare function npmPublishTask(name: string, packageFiles: string[]): jake.NpmPublishTask

	declare function npmPublishTask(name: string, definition?: () => void): jake.NpmPublishTask

		
}

declare module 'npm$namespace$jake' {
		declare interface UtilOptions {
		silent?: boolean
	}

	declare interface ExecOptions {
		printStdout?: boolean,
		printStderr?: boolean,
		breakOnError?: boolean,
		windowsVerbatimArguments?: boolean
	}

	declare export interface Exec {
		append(cmd: string): void,
		run(): void
	}

	declare interface Logger {
		log(value: any): void,
		error(value: any): void
	}

	declare export interface TaskOptions {
		async?: boolean,
		parallelLimit?: number
	}

	declare export interface FileTaskOptions {
		async?: boolean
	}

	declare interface FileFilter {
		(filename: string): boolean
	}

	declare export function mkdirP(name: string, mode?: string, f?: (er: Error, made: any) => void): void

	declare export function mkdirP(name: string, f?: (er: Error, made: any) => void): void

	declare export function cpR(
		path: string, destination: string, opts?: UtilOptions, callback?: () => void
	): void

	declare export function cpR(path: string, destination: string, callback?: (err: Error) => void): void

	declare export function readdirR(name: string, opts?: UtilOptions): string[]

	declare export function rmRf(name: string, opts?: UtilOptions): void

	declare export function exec(cmds: string[], callback?: () => void, opts?: ExecOptions): void

	declare export function createExec(cmds: string[], callback?: () => void, opts?: ExecOptions): Exec

	declare export function createExec(cmds: string[], opts?: ExecOptions, callback?: () => void): Exec

	declare export function createExec(cmds: string, callback?: () => void, opts?: ExecOptions): Exec

	declare export function createExec(cmds: string, opts?: ExecOptions, callback?: () => void): Exec

	declare export function addListener(event: string, listener: Function): NodeJS.EventEmitter

	declare export function on(event: string, listener: Function): NodeJS.EventEmitter

	declare export function once(event: string, listener: Function): NodeJS.EventEmitter

	declare export function removeListener(event: string, listener: Function): NodeJS.EventEmitter

	declare export function removeAllListener(event: string): NodeJS.EventEmitter

	declare export function setMaxListeners(n: number): void

	declare export function listeners(event: string): Function[]

	declare export function emit(event: string, ...args: any[]): boolean

	declare export class Task extends NodeJS$EventEmitter {
		constructor(name: string, prereqs?: string[], action?: () => void, opts?: TaskOptions): this;
		invoke(): void;
		reenable(): void;
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
		value: any
	}

	declare export class DirectoryTask  {
		constructor(name: string): this
	}

	declare export class FileTask  {
		constructor(name: string, prereqs?: string[], action?: () => void, opts?: FileTaskOptions): this
	}

	declare export class FileList  {
		constructor(): this;
		include(files: string[]): void;
		include(...files: string[]): void;
		shouldExclude(name: string): boolean;
		exclude(file: string[]): void;
		exclude(...file: string[]): void;
		exclude(file: RegExp[]): void;
		exclude(...file: RegExp[]): void;
		exclude(file: FileFilter[]): void;
		exclude(...file: FileFilter[]): void;
		resolve(): void;
		toArray(): string[];
		clearExclude(): void
	}

	declare export class PackageTask  {
		constructor(name: string, version: string, definition: () => void): this;
		archiveChangeDir: string;
		archiveContentDir: string;
		jarCommand: string;
		manifestFile: string;
		name: string;
		needJar: boolean;
		needTar: boolean;
		needTarBz2: boolean;
		needZip: boolean;
		packageFiles: FileList;
		tarCommand: string;
		version: string;
		zipCommand: string
	}

	declare export class TestTask  {
		constructor(name: string, definition?: () => void): this
	}

	declare export class NpmPublishTask  {
		constructor(name: string, packageFiles: string[]): this;
		constructor(name: string, definition?: () => void): this
	}

	
}


declare module 'shelljs' {
	declare type TouchOptionsLiteral = "-a" | "-c" | "-m" | "-d" | "-r";

	declare type touchOptionsArray = {
		-d?: string,
		-r?: string
	};

	declare export interface String {
		to(file: string): void,
		toEnd(file: string): void
	}

	declare export interface ExecCallback {
		(code: number, output: string, error?: string): any
	}

	declare export interface ExecOptions {
		silent?: boolean,
		async?: boolean
	}

	declare export interface ExecOutputReturnValue {
		code: number,
		output: string
	}

	declare interface ShellConfig {
		silent: boolean,
		fatal: boolean
	}

	declare export function cd(dir: string): void

	declare export function pwd(): string

	declare export function ls(...paths: string[]): string[]

	declare export function ls(options: string, ...paths: string[]): string[]

	declare export function ls(paths: string[]): string[]

	declare export function ls(options: string, paths: string[]): string[]

	declare export function find(...path: string[]): string[]

	declare export function find(path: string[]): string[]

	declare export function cp(source: string, dest: string): void

	declare export function cp(source: string[], dest: string): void

	declare export function cp(options: string, source: string, dest: string): void

	declare export function cp(options: string, source: string[], dest: string): void

	declare export function rm(...files: string[]): void

	declare export function rm(files: string[]): void

	declare export function rm(options: string, ...files: string[]): void

	declare export function rm(options: string, files: string[]): void

	declare export function mv(source: string, dest: string): void

	declare export function mv(source: string[], dest: string): void

	declare export function mkdir(...dir: string[]): void

	declare export function mkdir(dir: string[]): void

	declare export function mkdir(options: string, ...dir: string[]): void

	declare export function mkdir(options: string, dir: string[]): void

	declare export function test(option: string, path: string): boolean

	declare export function cat(...files: string[]): string

	declare export function cat(files: string[]): string

	declare export function sed(searchRegex: RegExp, replacement: string, file: string): string

	declare export function sed(searchRegex: string, replacement: string, file: string): string

	declare export function sed(
		options: string, searchRegex: RegExp, replacement: string, file: string
	): string

	declare export function sed(
		options: string, searchRegex: string, replacement: string, file: string
	): string

	declare export function grep(regex_filter: RegExp, ...files: string[]): string

	declare export function grep(regex_filter: RegExp, files: string[]): string

	declare export function grep(options: string, regex_filter: string, ...files: string[]): string

	declare export function grep(options: string, regex_filter: string, files: string[]): string

	declare export function which(command: string): string

	declare export function echo(...text: string[]): string

	declare export function pushd(dir: "+N"): string[]

	declare export function pushd(dir: "-N"): string[]

	declare export function pushd(dir: string): string[]

	declare export function pushd(options: string, dir: "+N"): string[]

	declare export function pushd(options: string, dir: "-N"): string[]

	declare export function pushd(options: string, dir: string): string[]

	declare export function popd(dir: "+N"): string[]

	declare export function popd(): string[]

	declare export function popd(dir: "-N"): string[]

	declare export function popd(dir: string): string[]

	declare export function popd(options: string, dir: "+N"): string[]

	declare export function popd(options: string, dir: "-N"): string[]

	declare export function popd(options: string, dir: string): string[]

	declare export function dirs(options: "-c"): string[]

	declare export function dirs(options: "+N"): string

	declare export function dirs(options: "-N"): string

	declare export function dirs(options: string): any

	declare export function ln(source: string, dest: string): void

	declare export function ln(options: string, source: string, dest: string): void

	declare export function exit(code: number): void

	declare export function exec(command: string): ExecOutputReturnValue

	declare export function exec(
		command: string, options: ExecOptions
	): ExecOutputReturnValue | child.ChildProcess

	declare export function exec(
		command: string, options: ExecOptions, callback: ExecCallback
	): child.ChildProcess

	declare export function exec(command: string, callback: ExecCallback): child.ChildProcess

	declare export function chmod(octalMode: number, file: string): void

	declare export function chmod(mode: string, file: string): void

	declare export function tempdir(): string

	declare export function error(): string

	declare export function touch(...files: string[]): void

	declare export function touch(files: string[]): void

	declare export function touch(options: TouchOptionsLiteral, ...files: string[]): void

	declare export function touch(options: TouchOptionsLiteral, files: string[]): void

	declare export function touch(options: touchOptionsArray, ...files: string[]): void

	declare export function touch(options: touchOptionsArray, files: string[]): void

		
}
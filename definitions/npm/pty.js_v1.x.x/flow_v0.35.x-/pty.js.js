

declare module 'pty.js' {
		declare interface TerminalOptions {
		name?: string,
		cols?: number,
		rows?: number,
		cwd?: string,
		env?: any,
		uid?: number,
		gid?: number
	}

	declare export function createTerminal(file?: string, args?: string[], opt?: TerminalOptions): Terminal

	declare export function fork(file?: string, args?: string[], opt?: TerminalOptions): Terminal

	declare export function spawn(file?: string, args?: string[], opt?: TerminalOptions): Terminal

	declare export function open(opt?: {
		cols?: number,
		rows?: number
	}): Terminal

	declare export class Terminal extends stream$Stream {
		name: string;
		cols: number;
		rows: number;
		pid: number;
		fd: number;
		pty: string;
		file: string;
		process: string;
		stdout: Terminal;
		stderr: Terminal;
		stdin: Terminal;
		socket: net.Socket;
		constructor(file?: string, args?: string[], opt?: TerminalOptions): this;
		resize(cols?: number, rows?: number): void;
		kill(signal?: string): void;
		redraw(): void;
		write(data: any): boolean;
		end(data: any): void;
		pause(): void;
		resume(): void;
		setEncoding(encoding: string): void;
		destroy(): void;
		pipe<T>(destination: T, options?: {
		end?: boolean
	}): T;
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
		prependListener(event: string, listener: Function): this;
		prependOnceListener(event: string, listener: Function): this;
		eventNames(): string[]
	}

	
}

declare module 'native' {
			declare export function fork(
		file: string, args: string[], env: any, cwd: string, cols: number, rows: number, uid?: number, gid?: number
	): {
		fd: number,
		pid: number,
		pty: string
	}

	declare export function open(
		cols: number, rows: number
	): {
		master: number,
		slave: number,
		pty: string
	}

	declare export function process(fd: number, tty: string): string

	declare export function open(
		dataPipe: string, cols: number, rows: number, debug: boolean
	): {
		pid: number,
		pty: number,
		fd: number
	}

	declare export function startProcess(pid: number, file: string, cmdline: string, env: string[], cwd: string): void

	declare export function kill(pid: number): void

	declare export function resize(fd: number, cols: number, rows: number): void

		
}
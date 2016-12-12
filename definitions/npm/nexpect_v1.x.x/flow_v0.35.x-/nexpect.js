

declare module 'nexpect' {
		declare interface IChain {
		expect(expectation: string): IChain,
		expect(expectation: RegExp): IChain,
		wait(expectation: string): IChain,
		wait(expectation: RegExp): IChain,
		sendline(line: string): IChain,
		sendEof(): IChain,
		run(
		callback: (err: Error, output: string[], exit: string | number) => void
	): child_process.ChildProcess
	}

	declare interface ISpawnOptions {
		cwd?: string,
		env?: any,
		ignoreCase?: any,
		stripColors?: any,
		stream?: any,
		verbose?: any
	}

	declare function spawn(command: string[], options?: ISpawnOptions): IChain

	declare function spawn(command: string, params?: any[], options?: ISpawnOptions): IChain

	declare function spawn(command: string, options?: ISpawnOptions): IChain

		
}
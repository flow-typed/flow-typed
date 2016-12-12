

declare module 'google-closure-compiler' {
	declare type CompileOption = string | boolean;

	declare type CompileOptions = string[] | {
		[key: string]: (CompileOption | CompileOption[])
	};

	declare interface JSONStreamFile {
		path: string,
		src: string,
		srcmap?: string
	}

	declare interface Compiler {
		javaPath: string,
		logger: (...args: any[]) => void,
		spawnOptions: {
		[key: string]: string
	},
		run(
		callback?: (exitCode: number, stdout: string, stderr: string) => void
	): child_process.ChildProcess,
		getFullCommand(): string
	}

			
}
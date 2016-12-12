

declare module 'jasmine-node' {
		declare interface ExecuteSpecsOptions {
		specFolders: string[],
		onComplete?: (runner: jasmine.Runner) => void,
		isVerbose?: boolean,
		showColors?: boolean,
		teamcity?: string | boolean,
		useRequireJs?: boolean,
		regExpSpec: RegExp,
		junitreport?: {
		report: boolean,
		savePath: string,
		useDotNotation: boolean,
		consolidate: boolean
	},
		includeStackTrace?: boolean,
		growl?: boolean
	}

	declare interface JasmineNode {
		executeSpecsInFolder(options: ExecuteSpecsOptions): void,
		loadHelpersInFolder(path: string, pattern: RegExp): void
	}

	declare function it(
		expectation: string, assertion: (done: (err?: any) => void) => void, timeout?: number
	): void

		declare module.exports: JasmineNode


}

declare module 'npm$namespace$jasmine' {
		declare interface Env {
		defaultTimeoutInterval: number
	}

			
}
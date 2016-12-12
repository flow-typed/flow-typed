

declare module 'karma-coverage' {
					declare module.exports: Karma


}

declare module 'karmaCoverage' {
		declare interface Karma {
		
	}

	declare interface Config {
		set: (config: ConfigOptions) => void
	}

	declare interface ConfigOptions {
		coverageReporter?: (Reporter | Reporter[])
	}

	declare interface Reporter {
		type?: string,
		dir?: string,
		subdir?: string | ((browser: string) => string),
		check?: any,
		watermarks?: any,
		includeAllSources?: boolean,
		sourceStore?: istanbul.Store,
		instrumenter?: any
	}

			
}
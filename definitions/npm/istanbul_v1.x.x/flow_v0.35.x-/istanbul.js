

declare module 'istanbul' {
		declare interface Istanbul {
		new (options?: any): Istanbul,
		Collector: Collector,
		config: Config,
		ContentWriter: ContentWriter,
		FileWriter: FileWriter,
		hook: Hook,
		Instrumenter: Instrumenter,
		Report: Report,
		Reporter: Reporter,
		Store: Store,
		utils: ObjectUtils,
		VERSION: string,
		Writer: Writer
	}

	declare interface Collector {
		new (options?: any): Collector,
		add(coverage: any, testName?: string): void
	}

	declare interface Config {
		
	}

	declare interface ContentWriter {
		
	}

	declare interface FileWriter {
		
	}

	declare interface Hook {
		
	}

	declare interface Instrumenter {
		new (options?: any): Instrumenter,
		instrumentSync(code: string, filename: string): string
	}

	declare interface Report {
		
	}

	declare interface Configuration {
		new (obj: any, overrides: any): Configuration
	}

	declare interface Reporter {
		new (cfg?: Configuration, dir?: string): Reporter,
		add(fmt: string): void,
		addAll(fmts: Array<string>): void,
		write(collector: Collector, sync: boolean, callback: Function): void
	}

	declare interface Store {
		
	}

	declare interface ObjectUtils {
		
	}

	declare interface Writer {
		
	}

			declare module.exports: Istanbul


}
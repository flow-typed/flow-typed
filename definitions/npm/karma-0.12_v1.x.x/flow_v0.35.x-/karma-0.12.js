

declare module 'karma-0.12' {
					
}

declare module 'karma' {
		declare interface IKarmaServer {
		start(options?: any, callback?: (exitCode: number) => void): void
	}

	declare interface IKarmaRunner {
		run(options?: any, callback?: (exitCode: number) => void): void
	}

	declare interface IKarma {
		server: IKarmaServer,
		runner: IKarmaRunner
	}

			declare module.exports: IKarma


}
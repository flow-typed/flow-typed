

declare module 'mock-require' {
		declare interface Mock {
		(path: string, mockExport: any | Function | string): void,
		stop(path: string): void,
		stopAll(): void,
		reRequire(path: string): void
	}

			declare module.exports: Mock


}


declare module 'v8-profiler' {
					declare module.exports: Profiler


}

declare module 'V8Profiler' {
	declare type Profiler = {
		takeSnapshot: (name?: string) => Snapshot,
		deleteAllSnapshots: () => void,
		startProfiling: (name?: string, recsamples?: boolean) => void,
		stopProfiling: (name?: string) => Profile,
		setSamplingInterval: (ms?: number) => void,
		deleteAllProfiles: () => void
	};

	declare type Snapshot = {
		getHeader: () => any,
		compare: (snapshot: Snapshot) => void,
		delete: () => any,
		export(callback: (error: Error, data: any) => void): void,
		export(): fs.ReadStream,
		serialize: Function
	};

	declare type Profile = {
		getHeader: () => any,
		delete: () => any,
		export(callback: (error: Error, data: any) => void): void,
		export(): fs.ReadStream
	};

				
}
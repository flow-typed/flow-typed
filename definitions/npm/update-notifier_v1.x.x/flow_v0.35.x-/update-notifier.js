

declare module 'update-notifier' {
			declare function t(settings?: t.ISettings): t.IResult

		declare module.exports: undefined


}

declare module 't' {
		declare export interface IResult {
		update: IUpdateInfo,
		notify(message?: string): void
	}

	declare export interface ISettings {
		callback?: (error: any, update?: IUpdateInfo) => any,
		packagePath?: string,
		packageName?: string,
		packageVersion?: string,
		updateCheckInterval?: number,
		updateCheckTimeout?: number,
		registryUrl?: string
	}

	declare export interface IUpdateInfo {
		latest: string,
		current: string,
		type: string,
		date: string,
		name: string
	}

			
}
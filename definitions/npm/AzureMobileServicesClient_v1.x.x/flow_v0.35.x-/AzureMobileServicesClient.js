

declare module 'AzureMobileServicesClient' {
					
}

declare module 'WindowsAzure' {
		declare interface MobileServiceClient {
		new (applicationUrl: string, applicationKey?: string): MobileServiceClient,
		applicationUrl: string,
		applicationKey: string,
		currentUser: User,
		push: Push,
		login(
		provider: string, token: string, callback: (error: any, user: User) => void
	): void,
		login(provider: string, token: string): asyncPromise,
		login(provider: string, callback: (error: any, user: User) => void): void,
		login(provider: string): asyncPromise,
		logout(): asyncPromise,
		getTable(tableName: string): MobileServiceTable,
		withFilter(
		serviceFilter: (
		request: any, next: (request: any, callback: (error: any, response: any) => void) => void, callback: (error: any, response: any) => void
	) => void
	): MobileServiceClient,
		invokeApi(
		apiName: string, options?: InvokeApiOptions, callback?: (error: any, results: any) => void
	): asyncPromise
	}

	declare interface Push {
		register(
		platform: string, pushChannel: string, templates?: any, secondaryTiles?: any, callback?: (error: any, results: any) => void
	): void,
		unregister(pushChannel: string, callback?: (error: any, results: any) => void): void
	}

	declare interface InvokeApiOptions {
		method?: string,
		body?: any,
		headers?: Object,
		parameters?: Object
	}

	declare interface User {
		getIdentities(): any,
		accessTokens: any,
		level: string,
		userId: string,
		mobileServiceAuthenticationToken: string
	}

	declare interface asyncPromise {
		then(onSuccess: (result: any) => any, onError?: (error: any) => any): asyncPromise,
		done(onSuccess?: (result: any) => void, onError?: (error: any) => void): void
	}

	declare interface MobileServiceTable {
		new (tableName: string, client: MobileServiceClient): MobileServiceTable,
		getTableName(): string,
		getMobileServiceClient(): MobileServiceClient,
		insert(
		instance: any, paramsQS: Object, callback: (error: any, retInserted: any) => any
	): void,
		insert(instance: any, paramsQS: Object): asyncPromise,
		insert(instance: any): asyncPromise,
		update(
		instance: any, paramsQS: Object, callback: (error: any, retUpdated: any) => any
	): void,
		update(instance: any, paramsQS: Object): asyncPromise,
		update(instance: any): asyncPromise,
		lookup(
		id: number, paramsQS: Object, callback: (error: any, retValue: any) => any
	): void,
		lookup(id: number, paramsQS: Object): asyncPromise,
		lookup(id: number): asyncPromise,
		del(instance: any, paramsQS: Object, callback: (error?: any) => void): void,
		del(instance: any, paramsQS: Object): asyncPromise,
		del(instance: any): asyncPromise,
		read(
		query: IQuery, paramsQS: Object, callback: (error: any, retValues: any) => any
	): void,
		read(query: IQuery, paramsQS: Object): asyncPromise,
		read(query: IQuery): asyncPromise,
		read(): asyncPromise
	}

	declare interface IQuery {
		read(paramsQS?: Object): asyncPromise,
		orderBy(...propName: string[]): IQuery,
		orderByDescending(...propName: string[]): IQuery,
		select(...propNameSelected: string[]): IQuery,
		select(funcProjectionFromThis: () => any): IQuery,
		where(mapObjFilterCriteria: any): IQuery,
		where(funcPredicateOnThis: (...qParams: any[]) => boolean, ...qValues: any[]): IQuery,
		skip(n: number): IQuery,
		take(n: number): IQuery,
		includeTotalCount(): IQuery
	}

	declare interface WindowsAzureStatic {
		MobileServiceClient: MobileServiceClient
	}

			
}

declare module 'azure-mobile-apps-client' {
					declare module.exports: undefined


}
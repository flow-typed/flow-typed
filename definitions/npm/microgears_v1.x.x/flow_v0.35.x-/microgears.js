

declare module 'microgears' {
					declare module.exports: undefined


}

declare module 'npm$namespace$microgears' {
		declare export interface Service {
		name: string,
		async?: boolean,
		pathname?: string,
		namespace: string
	}

	declare interface MetaInformation {
		serviceName: string,
		methodName: string,
		serviceNameSpace: string,
		extra: any
	}

	declare interface Plugin {
		name: string,
		beforeChain(arguments: Array<any>, metaInfo: MetaInformation): Array<any>,
		afterChain<T>(result: T, metaInfo: MetaInformation): T
	}

	declare function addService(service: Service): Service

	declare function addPlugin(plugin: Plugin): void

		
}
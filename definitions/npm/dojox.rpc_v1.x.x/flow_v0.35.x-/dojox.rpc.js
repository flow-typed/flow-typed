

declare module 'dojox.rpc' {
					
}

declare module 'rpc' {
		declare interface Rest {
		(path: String, isJson?: boolean, schema?: Object, getRequest?: Function): void
	}

	declare interface OfflineRest {
		stores: any[],
		addStore(store: dojo.data.api.Read, baseQuery: String): void,
		downloadChanges(): void,
		sendChanges(): void,
		sync(): void,
		turnOffAutoSync(): void
	}

	declare interface JsonRest {
		conflictDateHeader: string,
		schemas: Object,
		services: Object,
		byId(service: any, id: any): any,
		changing(object: any, _deleting: any): void,
		commit(kwArgs: any): any[],
		deleteObject(object: any): void,
		fetch(absoluteId: any): any,
		getConstructor(service: Function, schema: any): any,
		getConstructor(service: String, schema: any): any,
		getDirtyObjects(): any[],
		getIdAttribute(service: any): String,
		getServiceAndId(absoluteId: String): Object,
		isDirty(item: any, store: any): any,
		query(service: any, id: any, args: any): any,
		registerService(service: Function, servicePath: String, schema: Object): void,
		revert(service: any): void,
		sendToServer(actions: any, kwArgs: any): void,
		serviceClass(path: String, isJson: boolean, schema: Object, getRequest: Function): Function
	}

			
}

declare module 'Rest' {
		declare interface _index {
		
	}

	declare interface _timeStamps {
		
	}

			
}

declare module 'JsonRest' {
		declare interface services {
		
	}

	declare interface schemas {
		
	}

			
}

declare module 'dojox/rpc/Rest' {
					declare module.exports: Rest


}

declare module 'dojox/rpc/Rest._index' {
					declare module.exports: _index


}

declare module 'dojox/rpc/Rest._timeStamps' {
					declare module.exports: _timeStamps


}

declare module 'dojox/rpc/OfflineRest' {
					declare module.exports: OfflineRest


}

declare module 'dojox/rpc/JsonRest' {
					declare module.exports: JsonRest


}

declare module 'dojox/rpc/JsonRest.services' {
					declare module.exports: services


}

declare module 'dojox/rpc/JsonRest.schemas' {
					declare module.exports: schemas


}


declare module 'dojox.json' {
					
}

declare module 'json' {
		declare interface query {
		(query: String, obj?: Object): void
	}

	declare interface ref {
		refAttribute: string,
		serializeFunctions: boolean,
		fromJson(str: String, args: Object): any,
		resolveJson(root: Object, args: Object): any,
		toJson(
		it: Object, prettyPrint: boolean, idPrefix: Object, indexSubObjects: Object
	): any
	}

			
}

declare module 'dojox/json/query' {
					declare module.exports: query


}

declare module 'dojox/json/ref' {
					declare module.exports: ref


}
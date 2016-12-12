

declare module 'reflect-metadata' {
					
}

declare module 'npm$namespace$Reflect' {
			declare function decorate(decorators: ClassDecorator[], target: Function): Function

	declare function decorate(
		decorators: (PropertyDecorator | MethodDecorator)[], target: Object, targetKey: string | NO PRINT IMPLEMENTED: SymbolKeyword, descriptor?: PropertyDescriptor
	): PropertyDescriptor

	declare function metadata(
		metadataKey: any, metadataValue: any
	): {
		(target: Function): void,
		(target: Object, propertyKey: string | NO PRINT IMPLEMENTED: SymbolKeyword): void
	}

	declare function defineMetadata(metadataKey: any, metadataValue: any, target: Object): void

	declare function defineMetadata(
		metadataKey: any, metadataValue: any, target: Object, targetKey: string | NO PRINT IMPLEMENTED: SymbolKeyword
	): void

	declare function hasMetadata(metadataKey: any, target: Object): boolean

	declare function hasMetadata(
		metadataKey: any, target: Object, targetKey: string | NO PRINT IMPLEMENTED: SymbolKeyword
	): boolean

	declare function hasOwnMetadata(metadataKey: any, target: Object): boolean

	declare function hasOwnMetadata(
		metadataKey: any, target: Object, targetKey: string | NO PRINT IMPLEMENTED: SymbolKeyword
	): boolean

	declare function getMetadata(metadataKey: any, target: Object): any

	declare function getMetadata(
		metadataKey: any, target: Object, targetKey: string | NO PRINT IMPLEMENTED: SymbolKeyword
	): any

	declare function getOwnMetadata(metadataKey: any, target: Object): any

	declare function getOwnMetadata(
		metadataKey: any, target: Object, targetKey: string | NO PRINT IMPLEMENTED: SymbolKeyword
	): any

	declare function getMetadataKeys(target: Object): any[]

	declare function getMetadataKeys(target: Object, targetKey: string | NO PRINT IMPLEMENTED: SymbolKeyword): any[]

	declare function getOwnMetadataKeys(target: Object): any[]

	declare function getOwnMetadataKeys(target: Object, targetKey: string | NO PRINT IMPLEMENTED: SymbolKeyword): any[]

	declare function deleteMetadata(metadataKey: any, target: Object): boolean

	declare function deleteMetadata(
		metadataKey: any, target: Object, targetKey: string | NO PRINT IMPLEMENTED: SymbolKeyword
	): boolean

		
}
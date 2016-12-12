

declare module 'automapper-ts' {
					
}

declare module 'AutoMapperJs' {
		declare interface IProperty {
		name: string,
		metadata: IPropertyMetadata,
		level: number,
		sourceMapping: boolean,
		ignore: boolean,
		async: boolean,
		children?: IProperty[],
		destinations?: IProperty[],
		conversionValuesAndFunctions: any[],
		conditionFunction?: (sourceObject: any) => boolean
	}

	declare interface IPropertyMetadata {
		mapping: IMapping,
		root: IProperty,
		parent: IProperty,
		destinations: {
		[name: string]: IPropertyDestinationMetadata
	},
		destinationCount: number
	}

	declare interface IPropertyDestinationMetadata {
		source: IProperty,
		destination: IProperty
	}

	declare interface IMemberMappingMetaData {
		destination: string,
		source: string,
		sourceMapping: boolean,
		ignore: boolean,
		async: boolean,
		condition: (sourceObject: any) => boolean
	}

	declare interface IForMemberMapping {
		sourceProperty: string,
		destinationProperty: string,
		sourceMapping: boolean,
		mappingValuesAndFunctions: Array<any>,
		ignore: boolean,
		async: boolean,
		conditionFunction: (sourceObject: any) => boolean
	}

	declare interface ICreateMapFluentFunctions {
		forMember: (
		sourceProperty: string, valueOrFunction: any | ((opts: IMemberConfigurationOptions) => any) | ((opts: IMemberConfigurationOptions, cb: IMemberCallback) => void)
	) => ICreateMapFluentFunctions,
		forSourceMember: (
		sourceProperty: string, sourceMemberConfigFunction: ((opts: ISourceMemberConfigurationOptions) => any) | ((opts: ISourceMemberConfigurationOptions, cb: IMemberCallback) => void)
	) => ICreateMapFluentFunctions,
		forAllMembers: (
		func: (destinationObject: any, destinationPropertyName: string, value: any) => void
	) => ICreateMapFluentFunctions,
		ignoreAllNonExisting: () => ICreateMapFluentFunctions,
		convertUsing: (
		typeConverterClassOrFunction: ((resolutionContext: IResolutionContext) => any) | ((resolutionContext: IResolutionContext, callback: IMapCallback) => void) | ITypeConverter | (NO PRINT IMPLEMENTED: ConstructorType)
	) => void,
		convertToType: (typeClass: NO PRINT IMPLEMENTED: ConstructorType) => ICreateMapFluentFunctions,
		withProfile: (profileName: string) => void
	}

	declare interface IMapping {
		sourceKey: string,
		destinationKey: string,
		forAllMemberMappings: Array<(destinationObject: any, destinationPropertyName: string, value: any) => void>,
		properties: IProperty[],
		typeConverterFunction: ((resolutionContext: IResolutionContext) => any) | ((resolutionContext: IResolutionContext, callback: IMapCallback) => void),
		sourceTypeClass: any,
		destinationTypeClass: any,
		profile?: IProfile,
		ignoreAllNonExisting?: boolean,
		async: boolean,
		mapItemFunction: IMapItemFunction | IAsyncMapItemFunction
	}

	declare export interface IResolutionContext {
		sourceValue: any,
		destinationValue: any,
		sourcePropertyName?: string,
		destinationPropertyName?: string,
		arrayIndex?: number
	}

	declare interface IMemberConfigurationOptions {
		mapFrom: (sourcePropertyName: string) => void,
		ignore?: () => void,
		condition: (predicate: ((sourceObject: any) => boolean)) => void,
		sourceObject: any,
		sourcePropertyName: string,
		intermediatePropertyValue: any
	}

	declare interface ISourceMemberConfigurationOptions {
		ignore: () => void
	}

	declare interface IMemberCallback {
		(callbackValue: any): void
	}

	declare interface IMapCallback {
		(result: any): void
	}

	declare export interface ITypeConverter {
		convert: (resolutionContext: IResolutionContext) => any
	}

	declare export interface INamingConvention {
		splittingExpression: RegExp,
		separatorCharacter: string,
		transformPropertyName: (sourcePropertyNameParts: string[]) => string
	}

	declare export interface IConfiguration {
		addProfile(profile: IProfile): void,
		createMap(sourceKey: string): (destinationKey: string) => ICreateMapFluentFunctions,
		createMap(sourceKey: string, destinationKey: string): ICreateMapFluentFunctions
	}

	declare export interface IProfile {
		profileName: string,
		sourceMemberNamingConvention: INamingConvention,
		destinationMemberNamingConvention: INamingConvention,
		configure: () => void
	}

	declare export interface IMapItemFunction {
		(mapping: IMapping, sourceObject: any, destinationObject: any): any
	}

	declare export interface IAsyncMapItemFunction {
		(mapping: IMapping, sourceObject: any, destinationObject: any, callback: IMapCallback): void
	}

	declare interface ICreateMapParameters {
		mapping: IMapping,
		destinationProperty: string,
		conversionValueOrFunction: any,
		sourceMapping: boolean,
		fluentFunctions: ICreateMapFluentFunctions
	}

	declare interface IGetOrCreatePropertyParameters {
		propertyNameParts: string[],
		mapping: IMapping,
		parent?: IProperty,
		propertyArray: IProperty[],
		destination?: string,
		sourceMapping: boolean
	}

	declare interface ICreatePropertyParameters {
		name: string,
		mapping: IMapping,
		parent: IProperty,
		propertyArray: IProperty[],
		sourceMapping: boolean
	}

		declare class AutoMapper  {
		initialize(configFunction: (config: IConfiguration) => void): void;
		createMap(
		sourceKey: string | (NO PRINT IMPLEMENTED: ConstructorType)
	): (
		destinationKey: string | (NO PRINT IMPLEMENTED: ConstructorType)
	) => ICreateMapFluentFunctions;
		createMap(
		sourceKey: string | (NO PRINT IMPLEMENTED: ConstructorType), destinationKey: string | (NO PRINT IMPLEMENTED: ConstructorType)
	): ICreateMapFluentFunctions;
		map(
		sourceKey: string | (NO PRINT IMPLEMENTED: ConstructorType)
	): (
		destinationKey: string | (NO PRINT IMPLEMENTED: ConstructorType), sourceObject: any
	) => any;
		map(
		sourceKey: string | (NO PRINT IMPLEMENTED: ConstructorType), destinationKey: string | (NO PRINT IMPLEMENTED: ConstructorType)
	): (sourceObject: any) => any;
		map(
		sourceKey: string | (NO PRINT IMPLEMENTED: ConstructorType), destinationKey: string | (NO PRINT IMPLEMENTED: ConstructorType), sourceObject: any
	): any;
		mapAsync(
		sourceKey: string | (NO PRINT IMPLEMENTED: ConstructorType)
	): (
		destinationKey: string | (NO PRINT IMPLEMENTED: ConstructorType), sourceObject: any, callback: IMapCallback
	) => void;
		mapAsync(
		sourceKey: string | (NO PRINT IMPLEMENTED: ConstructorType), destinationKey: string | (NO PRINT IMPLEMENTED: ConstructorType), sourceObject: any
	): (callback: IMapCallback) => void;
		mapAsync(
		sourceKey: string | (NO PRINT IMPLEMENTED: ConstructorType), destinationKey: string | (NO PRINT IMPLEMENTED: ConstructorType)
	): (sourceObject: any, callback: IMapCallback) => void;
		mapAsync(
		sourceKey: string | (NO PRINT IMPLEMENTED: ConstructorType), destinationKey: string | (NO PRINT IMPLEMENTED: ConstructorType), sourceObject: any, callback: IMapCallback
	): void;
		assertConfigurationIsValid(strictMode?: boolean): void
	}

	declare class AsyncAutoMapper  {
		
	}

	declare class TypeConverter extends ITypeConverter {
		convert(resolutionContext: IResolutionContext): any
	}

	declare export class Profile extends IProfile {
		profileName: string;
		sourceMemberNamingConvention: INamingConvention;
		destinationMemberNamingConvention: INamingConvention;
		createMap(sourceKey: string): (destinationKey: string) => ICreateMapFluentFunctions;
		createMap(sourceKey: string, destinationKey: string): ICreateMapFluentFunctions;
		configure(): void
	}

	declare class PascalCaseNamingConvention extends INamingConvention {
		splittingExpression: RegExp;
		separatorCharacter: string;
		transformPropertyName(sourcePropertyNameParts: string[]): string
	}

	declare class CamelCaseNamingConvention extends INamingConvention {
		splittingExpression: RegExp;
		separatorCharacter: string;
		transformPropertyName(sourcePropertyNameParts: string[]): string
	}

	
}
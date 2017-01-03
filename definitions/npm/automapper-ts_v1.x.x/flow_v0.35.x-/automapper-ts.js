// @flow
/**
 * Flowtype definitions for automapper-ts
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'AutoMapperJs' {

    /**
     * AutoMapper implementation, for both creating maps and performing maps. Comparable usage and functionality to the original
     * .NET AutoMapper library is the pursuit of this implementation.
     */
    declare class AutoMapper {

        /**
         * Initializes the mapper with the supplied configuration.: IConfiguration) => void} Configuration function to call.
         */
        initialize(configFunction: (config: IConfiguration) => void): void;

        /**
         * Create a createMap curry function which expects only a destination key.
         * @param  The map source key.
         * @returns  : string) => ICreateMapFluentFunctions}
         */
        createMap(
            sourceKey: string | (() => any)): (destinationKey: string | (() => any)) => ICreateMapFluentFunctions;

        /**
         * Create a mapping profile.
         * @param  The map source key.
         * @param  The map destination key.
         * @returns  
         */
        createMap(
            sourceKey: string | (() => any),
            destinationKey: string | (() => any)): ICreateMapFluentFunctions;

        /**
         * Create a map curry function which expects a destination key and a source object.
         * @param sourceKey Source key, for instance the source type name.
         * @returns  : string, sourceObject: any) => any}
         */
        map(
            sourceKey: string | (() => any)): (destinationKey: string | (() => any), sourceObject: any) => any;

        /**
         * Create a map curry function which expects only a source object.
         * @param sourceKey Source key, for instance the source type name.
         * @param destinationKey Destination key, for instance the destination type name.
         * @returns  : any) => any}
         */
        map(
            sourceKey: string | (() => any),
            destinationKey: string | (() => any)): (sourceObject: any) => any;

        /**
         * Execute a mapping from the source object to a new destination object with explicit mapping configuration and supplied mapping options (using createMap).
         * @param sourceKey Source key, for instance the source type name.
         * @param destinationKey Destination key, for instance the destination type name.
         * @param sourceObject The source object to map.
         * @returns  Destination object.
         */
        map(
            sourceKey: string | (() => any),
            destinationKey: string | (() => any),
            sourceObject: any): any;

        /**
         * Create a mapAsync curry function which expects a destination key, a source object and a callback function.
         * @param sourceKey Source key, for instance the source type name.
         * @returns  : string, sourceObject: any, callback: IMapCallback) => void}
         */
        mapAsync(
            sourceKey: string | (() => any)): (
            destinationKey: string | (() => any),
            sourceObject: any,
            callback: IMapCallback) => void;

        /**
         * Create a map curry function which expects only a source object and a callback function.
         * @param sourceKey Source key, for instance the source type name.
         * @param destinationKey Destination key, for instance the destination type name.
         * @param sourceObject The source object to map.
         * @returns  : IMapCallback) => void}
         */
        mapAsync(
            sourceKey: string | (() => any),
            destinationKey: string | (() => any),
            sourceObject: any): (callback: IMapCallback) => void;

        /**
         * Create a map curry function which expects only a source object and a callback function.
         * @param sourceKey Source key, for instance the source type name.
         * @param destinationKey Destination key, for instance the destination type name.
         * @returns  : any, callback: IMapCallback) => void}
         */
        mapAsync(
            sourceKey: string | (() => any),
            destinationKey: string | (() => any)): (sourceObject: any, callback: IMapCallback) => void;

        /**
         * Execute an asynchronous mapping from the source object to a new destination object with explicit mapping configuration and supplied mapping options (using createMap).
         * @param sourceKey Source key, for instance the source type name.
         * @param destinationKey Destination key, for instance the destination type name.
         * @param sourceObject The source object to map.
         * @param  The callback to call when asynchronous mapping is complete.
         */
        mapAsync(
            sourceKey: string | (() => any),
            destinationKey: string | (() => any),
            sourceObject: any,
            callback: IMapCallback): void;

        /**
         * Validates mapping configuration by dry-running. Since JS does not
         * fully support typing, it only checks if properties match on both
        sides. The function needs IMapping.sourceTypeClass and 
        IMapping.destinationTypeClass to function.
         * @param  Whether or not to fail when properties
        sourceTypeClass or destinationTypeClass
        are unavailable. 
        */
        assertConfigurationIsValid(strictMode?: boolean): void
    }
    declare class AsyncAutoMapper {}

    /**
     * Converts source type to destination type instead of normal member mapping
     */
    declare class TypeConverter mixins ITypeConverter {

        /**
         * Performs conversion from source to destination type.
         * @param  Resolution context.
         * @returns  Destination object.
         */
        convert(resolutionContext: IResolutionContext): any
    }
    declare     export class Profile mixins IProfile {

        /**
         * Profile name 
         */
        profileName: string;

        /**
         * Naming convention for source members 
         */
        sourceMemberNamingConvention: INamingConvention;

        /**
         * Naming convention for destination members 
         */
        destinationMemberNamingConvention: INamingConvention;

        /**
         * Create a createMap curry function which expects only a destination key.
         * @param  The map source key.
         * @returns  : string) => ICreateMapFluentFunctions}
         */
        createMap(sourceKey: string): (destinationKey: string) => ICreateMapFluentFunctions;

        /**
         * Create a mapping profile.
         * @param  The map source key.
         * @param  The map destination key.
         * @returns  
         */
        createMap(sourceKey: string, destinationKey: string): ICreateMapFluentFunctions;

        /**
         * Implement this method in a derived class and call the CreateMap method to associate that map with this profile.
         * Avoid calling the AutoMapper class / automapper instance from this method. 
         */
        configure(): void
    }

    /**
     * Defines the PascalCase naming convention strategy.
     */
    declare class PascalCaseNamingConvention mixins INamingConvention {

        /**
         * Regular expression on how to tokenize a member. 
         */
        splittingExpression: RegExp;

        /**
         * Character to separate on. 
         */
        separatorCharacter: string;

        /**
         * Transformation function called when this convention is the destination naming convention.
         * @param  Array containing tokenized source property name parts.
         * @returns  Destination property name
         */
        transformPropertyName(sourcePropertyNameParts: string[]): string
    }

    /**
     * Defines the camelCase naming convention strategy.
     */
    declare class CamelCaseNamingConvention mixins INamingConvention {

        /**
         * Regular expression on how to tokenize a member. 
         */
        splittingExpression: RegExp;

        /**
         * Character to separate on. 
         */
        separatorCharacter: string;

        /**
         * Transformation function called when this convention is the destination naming convention.
         * @param  Array containing tokenized source property name parts.
         * @returns  Destination property name
         */
        transformPropertyName(sourcePropertyNameParts: string[]): string
    }
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

    /**
     * Member mapping properties.
     */
    declare interface IForMemberMapping {

        /**
         * The source member property name. 
         */
        sourceProperty: string,

            /**
             * The destination member property name parts for nested property support (e.g. 'type.name'). 
             */
            destinationProperty: string,

            /**
             * Source or destination mapping. 
             */
            sourceMapping: boolean,

            /**
             * All mapping values and/or functions resulting from stacked for(Source)Member calls. 
             */
            mappingValuesAndFunctions: Array<any>,

            /**
             * Whether or not this destination property must be ignored. 
             */
            ignore: boolean,

            /**
             * Whether or not this member mapping has an asynchronous mapping function. 
             */
            async: boolean,

            /**
             * The object will only be mapped when the condition is met.
             * @param  The source object to check.
             * @returns  
             */
            conditionFunction: (sourceObject: any) => boolean
    }

    /**
     * Interface for returning an object with available 'sub' functions to enable method chaining (e.g. automapper.createMap().forMember().forMember() ...)
     */
    declare interface ICreateMapFluentFunctions {

        /**
         * Customize configuration for an individual destination member.
         * @param sourceProperty The destination member property name.
         * @param valueOrFunction The value or function to use for this individual member.
         * @returns  
         */
        forMember: (
                sourceProperty: string,
                valueOrFunction: any | ((opts: IMemberConfigurationOptions) => any) | ((opts: IMemberConfigurationOptions, cb: IMemberCallback) => void)) => ICreateMapFluentFunctions,

            /**
             * Customize configuration for an individual source member.
             * @param sourceProperty The source member property name.
             * @param sourceMemberConfigFunction The function to use for this individual member.
             * @returns  
             */
            forSourceMember: (
                sourceProperty: string,
                sourceMemberConfigFunction: ((opts: ISourceMemberConfigurationOptions) => any) | ((opts: ISourceMemberConfigurationOptions, cb: IMemberCallback) => void)) => ICreateMapFluentFunctions,

            /**
             * Customize configuration for all destination members.
             * @param func The function to use for this individual member.
             * @returns  
             */
            forAllMembers: (
                func: (destinationObject: any, destinationPropertyName: string, value: any) => void) => ICreateMapFluentFunctions,

            /**
             * Ignore all members not specified explicitly.
             */
            ignoreAllNonExisting: () => ICreateMapFluentFunctions,

            /**
             * Skip normal member mapping and convert using a custom type converter (instantiated during mapping).
             * @param typeConverterClassOrFunction The converter class or function to use when converting.
             */
            convertUsing: (
                typeConverterClassOrFunction: ((resolutionContext: IResolutionContext) => any) | ((resolutionContext: IResolutionContext, callback: IMapCallback) => void) | ITypeConverter | (() => ITypeConverter)) => void,

            /**
             * Specify to which class type AutoMapper should convert. When specified, AutoMapper will create an instance of the given type, instead of returning a new object literal.
             * @param typeClass The destination type class.
             * @returns  
             */
            convertToType: (typeClass: () => any) => ICreateMapFluentFunctions,

            /**
             * Specify which profile should be used when mapping.
             * @param  The profile name.
             * @returns  
             */
            withProfile: (profileName: string) => void
    }

    /**
     * The mapping configuration for the current mapping keys/types.
     */
    declare interface IMapping {

        /**
         * The mapping source key. 
         */
        sourceKey: string,

            /**
             * The mapping destination key. 
             */
            destinationKey: string,

            /**
             * The mappings for forAllMembers functions. 
             */
            forAllMemberMappings: Array<(destinationObject: any, destinationPropertyName: string, value: any) => void>,
            properties: IProperty[],

            /**
             * Skip normal member mapping and convert using a type converter.
             * @param resolutionContext Context information regarding resolution of a destination value
             * @returns  Destination object.
             */
            typeConverterFunction: ((resolutionContext: IResolutionContext) => any) | ((resolutionContext: IResolutionContext, callback: IMapCallback) => void),

            /**
             * The source type class to convert from. 
             */
            sourceTypeClass: any,

            /**
             * The destination type class to convert to. 
             */
            destinationTypeClass: any,

            /**
             * The profile used when mapping. 
             */
            profile?: IProfile,

            /**
             * Whether or not to ignore all properties not specified using createMap. 
             */
            ignoreAllNonExisting?: boolean,

            /**
             * Whether or not an mapping has to be asynchronous. 
             */
            async: boolean,

            /**
             * Item mapping function to use.
             */
            mapItemFunction: IMapItemFunction | IAsyncMapItemFunction
    }

    /**
     * Context information regarding resolution of a destination value
     */
    declare     export interface IResolutionContext {

        /**
         * Source value 
         */
        sourceValue: any,

            /**
             * Destination value 
             */
            destinationValue: any,

            /**
             * Source property name 
             */
            sourcePropertyName?: string,

            /**
             * Destination property name 
             */
            destinationPropertyName?: string,

            /**
             * Index of current collection mapping 
             */
            arrayIndex?: number
    }

    /**
     * Configuration options for forMember mapping function.
     */
    declare interface IMemberConfigurationOptions {

        /**
         * Map from a custom source property name.
         * @param sourcePropertyName The source property to map.
         */
        mapFrom: (sourcePropertyName: string) => void,

            /**
             * When this configuration function is used, the (destination) property is ignored
             * when mapping. 
             */
            ignore?: () => void,

            /**
             * If specified, the property will only be mapped when the condition is fulfilled.
             */
            condition: (predicate: ((sourceObject: any) => boolean)) => void,

            /**
             * The source object to map. 
             */
            sourceObject: any,

            /**
             * The source property to map. 
             */
            sourcePropertyName: string,

            /**
             * The intermediate destination property value, used for stacking multiple for(Source)Member calls 
             * while elaborating the intermediate result.
             */
            intermediatePropertyValue: any
    }

    /**
     * Configuration options for forSourceMember mapping function.
     */
    declare interface ISourceMemberConfigurationOptions {

        /**
         * When this configuration function is used, the source property is ignored
         * when mapping.
         */
        ignore: () => void
    }

    /**
     * Member callback interface
     */
    declare interface IMemberCallback {

        /**
         * Callback function to call when the async operation is executed.
         * @param  Callback value to be used as output for the for(Source)Member call.
         */
        (callbackValue: any): void
    }

    /**
     * Member callback interface
     */
    declare interface IMapCallback {

        /**
         * Callback function to call when the async operation is executed.
         * @param  Callback value to be used as output for the mapAsync call.
         */
        (result: any): void
    }

    /**
     * Converts source type to destination type instead of normal member mapping
     */
    declare     export interface ITypeConverter {

        /**
         * Performs conversion from source to destination type.
         * @param  Resolution context.
         * @returns  Destination object.
         */
        convert: (resolutionContext: IResolutionContext) => any
    }

    /**
     * Defines a naming convention strategy.
     */
    declare     export interface INamingConvention {

        /**
         * Regular expression on how to tokenize a member. 
         */
        splittingExpression: RegExp,

            /**
             * Character to separate on. 
             */
            separatorCharacter: string,

            /**
             * Transformation function called when this convention is the destination naming convention.
             * @param  Array containing tokenized source property name parts.
             * @returns  Destination property name
             */
            transformPropertyName: (sourcePropertyNameParts: string[]) => string
    }

    /**
     * Configuration for profile-specific maps.
     */
    declare     export interface IConfiguration {

        /**
         * Add an existing profile
         * @param profile Profile to add.
         */
        addProfile(profile: IProfile): void,

            /**
             * Create a createMap curry function which expects only a destination key.
             * @param  The map source key.
             * @returns  : string) => IAutoMapperCreateMapChainingFunctions}
             */
            createMap(sourceKey: string): (destinationKey: string) => ICreateMapFluentFunctions,

            /**
             * Create a mapping profile.
             * @param  The map source key.
             * @param  The map destination key.
             * @returns  
             */
            createMap(sourceKey: string, destinationKey: string): ICreateMapFluentFunctions
    }

    /**
     * Provides a named configuration for maps. Naming conventions become scoped per profile.
     */
    declare     export interface IProfile {

        /**
         * Profile name 
         */
        profileName: string,

            /**
             * Naming convention for source members 
             */
            sourceMemberNamingConvention: INamingConvention,

            /**
             * Naming convention for destination members 
             */
            destinationMemberNamingConvention: INamingConvention,

            /**
             * Implement this method in a derived class and call the CreateMap method to associate that map with this profile.
             * Avoid calling the AutoMapper class / automapper instance from this method. 
             */
            configure: () => void
    }
    declare     export interface IMapItemFunction {
        (mapping: IMapping, sourceObject: any, destinationObject: any): any
    }
    declare     export interface IAsyncMapItemFunction {
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
}
declare var automapper: AutoMapperJs.AutoMapper;
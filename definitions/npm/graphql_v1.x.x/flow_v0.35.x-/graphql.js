

declare module 'graphql' {
					
}

declare module 'graphql/graphql' {
	declare type GraphQLResult = {
		data?: Object,
		errors?: Array<GraphQLError>
	};

		declare function graphql(
		schema: GraphQLSchema, requestString: string, rootValue?: any, contextValue?: any, variableValues?: {
		[key: string]: any
	}, operationName?: string
	): Promise<GraphQLResult>

		
}

declare module 'graphql/language/ast' {
	declare export type Location = {
		start: number,
		end: number,
		startToken: Token,
		endToken: Token,
		source: Source
	};

	declare export type Token = {
		kind: "<SOF>" | "<EOF>" | "!" | "$" | "(" | ")" | "..." | ":" | "=" | "@" | "[" | "]" | "{" | "|" | "}" | "Name" | "Int" | "Float" | "String" | "Comment",
		start: number,
		end: number,
		line: number,
		column: number,
		value: string | void,
		prev?: Token,
		next?: Token
	};

	declare export type Node = Name | Document | OperationDefinition | VariableDefinition | Variable | SelectionSet | Field | Argument | FragmentSpread | InlineFragment | FragmentDefinition | IntValue | FloatValue | StringValue | BooleanValue | EnumValue | ListValue | ObjectValue | ObjectField | Directive | NamedType | ListType | NonNullType | SchemaDefinition | OperationTypeDefinition | ScalarTypeDefinition | ObjectTypeDefinition | FieldDefinition | InputValueDefinition | InterfaceTypeDefinition | UnionTypeDefinition | EnumTypeDefinition | EnumValueDefinition | InputObjectTypeDefinition | TypeExtensionDefinition | DirectiveDefinition;

	declare export type Name = {
		kind: "Name",
		loc?: Location,
		value: string
	};

	declare export type Document = {
		kind: "Document",
		loc?: Location,
		definitions: Array<Definition>
	};

	declare export type Definition = OperationDefinition | FragmentDefinition | TypeSystemDefinition;

	declare export type OperationDefinition = {
		kind: "OperationDefinition",
		loc?: Location,
		operation: OperationType,
		name?: Name,
		variableDefinitions?: Array<VariableDefinition>,
		directives?: Array<Directive>,
		selectionSet: SelectionSet
	};

	declare export type OperationType = "query" | "mutation" | "subscription";

	declare export type VariableDefinition = {
		kind: "VariableDefinition",
		loc?: Location,
		variable: Variable,
		type: Type,
		defaultValue?: Value
	};

	declare export type Variable = {
		kind: "Variable",
		loc?: Location,
		name: Name
	};

	declare export type SelectionSet = {
		kind: "SelectionSet",
		loc?: Location,
		selections: Array<Selection>
	};

	declare export type Selection = Field | FragmentSpread | InlineFragment;

	declare export type Field = {
		kind: "Field",
		loc?: Location,
		alias?: Name,
		name: Name,
		arguments?: Array<Argument>,
		directives?: Array<Directive>,
		selectionSet?: SelectionSet
	};

	declare export type Argument = {
		kind: "Argument",
		loc?: Location,
		name: Name,
		value: Value
	};

	declare export type FragmentSpread = {
		kind: "FragmentSpread",
		loc?: Location,
		name: Name,
		directives?: Array<Directive>
	};

	declare export type InlineFragment = {
		kind: "InlineFragment",
		loc?: Location,
		typeCondition?: NamedType,
		directives?: Array<Directive>,
		selectionSet: SelectionSet
	};

	declare export type FragmentDefinition = {
		kind: "FragmentDefinition",
		loc?: Location,
		name: Name,
		typeCondition: NamedType,
		directives?: Array<Directive>,
		selectionSet: SelectionSet
	};

	declare export type Value = Variable | IntValue | FloatValue | StringValue | BooleanValue | EnumValue | ListValue | ObjectValue;

	declare export type IntValue = {
		kind: "IntValue",
		loc?: Location,
		value: string
	};

	declare export type FloatValue = {
		kind: "FloatValue",
		loc?: Location,
		value: string
	};

	declare export type StringValue = {
		kind: "StringValue",
		loc?: Location,
		value: string
	};

	declare export type BooleanValue = {
		kind: "BooleanValue",
		loc?: Location,
		value: boolean
	};

	declare export type EnumValue = {
		kind: "EnumValue",
		loc?: Location,
		value: string
	};

	declare export type ListValue = {
		kind: "ListValue",
		loc?: Location,
		values: Array<Value>
	};

	declare export type ObjectValue = {
		kind: "ObjectValue",
		loc?: Location,
		fields: Array<ObjectField>
	};

	declare export type ObjectField = {
		kind: "ObjectField",
		loc?: Location,
		name: Name,
		value: Value
	};

	declare export type Directive = {
		kind: "Directive",
		loc?: Location,
		name: Name,
		arguments?: Array<Argument>
	};

	declare export type Type = NamedType | ListType | NonNullType;

	declare export type NamedType = {
		kind: "NamedType",
		loc?: Location,
		name: Name
	};

	declare export type ListType = {
		kind: "ListType",
		loc?: Location,
		type: Type
	};

	declare export type NonNullType = {
		kind: "NonNullType",
		loc?: Location,
		type: NamedType | ListType
	};

	declare export type TypeSystemDefinition = SchemaDefinition | TypeDefinition | TypeExtensionDefinition | DirectiveDefinition;

	declare export type SchemaDefinition = {
		kind: "SchemaDefinition",
		loc?: Location,
		directives: Array<Directive>,
		operationTypes: Array<OperationTypeDefinition>
	};

	declare export type OperationTypeDefinition = {
		kind: "OperationTypeDefinition",
		loc?: Location,
		operation: OperationType,
		type: NamedType
	};

	declare export type TypeDefinition = ScalarTypeDefinition | ObjectTypeDefinition | InterfaceTypeDefinition | UnionTypeDefinition | EnumTypeDefinition | InputObjectTypeDefinition;

	declare export type ScalarTypeDefinition = {
		kind: "ScalarTypeDefinition",
		loc?: Location,
		name: Name,
		directives?: Array<Directive>
	};

	declare export type ObjectTypeDefinition = {
		kind: "ObjectTypeDefinition",
		loc?: Location,
		name: Name,
		interfaces?: Array<NamedType>,
		directives?: Array<Directive>,
		fields: Array<FieldDefinition>
	};

	declare export type FieldDefinition = {
		kind: "FieldDefinition",
		loc?: Location,
		name: Name,
		arguments: Array<InputValueDefinition>,
		type: Type,
		directives?: Array<Directive>
	};

	declare export type InputValueDefinition = {
		kind: "InputValueDefinition",
		loc?: Location,
		name: Name,
		type: Type,
		defaultValue?: Value,
		directives?: Array<Directive>
	};

	declare export type InterfaceTypeDefinition = {
		kind: "InterfaceTypeDefinition",
		loc?: Location,
		name: Name,
		directives?: Array<Directive>,
		fields: Array<FieldDefinition>
	};

	declare export type UnionTypeDefinition = {
		kind: "UnionTypeDefinition",
		loc?: Location,
		name: Name,
		directives?: Array<Directive>,
		types: Array<NamedType>
	};

	declare export type EnumTypeDefinition = {
		kind: "EnumTypeDefinition",
		loc?: Location,
		name: Name,
		directives?: Array<Directive>,
		values: Array<EnumValueDefinition>
	};

	declare export type EnumValueDefinition = {
		kind: "EnumValueDefinition",
		loc?: Location,
		name: Name,
		directives?: Array<Directive>
	};

	declare export type InputObjectTypeDefinition = {
		kind: "InputObjectTypeDefinition",
		loc?: Location,
		name: Name,
		directives?: Array<Directive>,
		fields: Array<InputValueDefinition>
	};

	declare export type TypeExtensionDefinition = {
		kind: "TypeExtensionDefinition",
		loc?: Location,
		definition: ObjectTypeDefinition
	};

	declare export type DirectiveDefinition = {
		kind: "DirectiveDefinition",
		loc?: Location,
		name: Name,
		arguments?: Array<InputValueDefinition>,
		locations: Array<Name>
	};

				
}

declare module 'graphql/language/lexer' {
	declare type Lexer<TOptions> = {
		source: Source,
		options: TOptions,
		lastToken: Token,
		token: Token,
		line: number,
		lineStart: number,
		advance(): Token
	};

		declare function createLexer<TOptions>(source: Source, options: TOptions): Lexer<TOptions>

	declare function getTokenDesc(token: Token): string

		
}

declare module 'graphql/language/location' {
		declare interface SourceLocation {
		line: number,
		column: number
	}

	declare function getLocation(source: Source, position: number): SourceLocation

		
}

declare module 'graphql/language/parser' {
	declare type ParseOptions = {
		noLocation?: boolean
	};

		declare function parse(source: string | Source, options?: ParseOptions): Document

	declare function parseValue(source: Source | string, options?: ParseOptions): Value

	declare function parseConstValue<TOptions>(lexer: Lexer<TOptions>): Value

	declare function parseType<TOptions>(lexer: Lexer<TOptions>): Type

	declare function parseNamedType<TOptions>(lexer: Lexer<TOptions>): NamedType

		
}

declare module 'graphql/language/printer' {
			declare function print(ast: any): string

		
}

declare module 'graphql/language/source' {
				declare class Source  {
		body: string;
		name: string;
		constructor(body: string, name?: string): this
	}

	
}

declare module 'graphql/language/visitor' {
			declare function visit(root: any, visitor: any, keyMap: any): any

	declare function visitInParallel(visitors: any): any

	declare function visitWithTypeInfo(typeInfo: any, visitor: any): any

		
}

declare module 'graphql/type/definition' {
	declare export type GraphQLType = GraphQLScalarType | GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType | GraphQLEnumType | GraphQLInputObjectType | GraphQLList<any> | GraphQLNonNull<any>;

	declare export type GraphQLInputType = GraphQLScalarType | GraphQLEnumType | GraphQLInputObjectType | GraphQLList<any> | GraphQLNonNull<GraphQLScalarType | GraphQLEnumType | GraphQLInputObjectType | GraphQLList<any>>;

	declare export type GraphQLOutputType = GraphQLScalarType | GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType | GraphQLEnumType | GraphQLList<any> | GraphQLNonNull<GraphQLScalarType | GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType | GraphQLEnumType | GraphQLList<any>>;

	declare export type GraphQLLeafType = GraphQLScalarType | GraphQLEnumType;

	declare export type GraphQLCompositeType = GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType;

	declare export type GraphQLAbstractType = GraphQLInterfaceType | GraphQLUnionType;

	declare export type GraphQLNullableType = GraphQLScalarType | GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType | GraphQLEnumType | GraphQLInputObjectType | GraphQLList<any>;

	declare export type GraphQLNamedType = GraphQLScalarType | GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType | GraphQLEnumType | GraphQLInputObjectType;

	declare type Thunk<T> = (() => T) | T;

	declare export type GraphQLTypeResolveFn = (value: any, context: any, info: GraphQLResolveInfo) => GraphQLObjectType;

	declare export type GraphQLIsTypeOfFn = (source: any, context: any, info: GraphQLResolveInfo) => boolean;

	declare export type GraphQLFieldResolveFn<TSource> = (
		source: TSource, args: {
		[argName: string]: any
	}, context: any, info: GraphQLResolveInfo
	) => any;

	declare export interface GraphQLScalarTypeConfig<TInternal, TExternal> {
		name: string,
		description?: string,
		serialize: (value: any) => TInternal,
		parseValue?: (value: any) => TExternal,
		parseLiteral?: (valueAST: Value) => TInternal
	}

	declare export interface GraphQLObjectTypeConfig<TSource> {
		name: string,
		interfaces?: Thunk<Array<GraphQLInterfaceType>>,
		fields: Thunk<GraphQLFieldConfigMap<TSource>>,
		isTypeOf?: GraphQLIsTypeOfFn,
		description?: string
	}

	declare export interface GraphQLResolveInfo {
		fieldName: string,
		fieldASTs: Array<Field>,
		returnType: GraphQLOutputType,
		parentType: GraphQLCompositeType,
		path: Array<string | number>,
		schema: GraphQLSchema,
		fragments: {
		[fragmentName: string]: FragmentDefinition
	},
		rootValue: any,
		operation: OperationDefinition,
		variableValues: {
		[variableName: string]: any
	}
	}

	declare export interface GraphQLFieldConfig<TSource> {
		type: GraphQLOutputType,
		args?: GraphQLFieldConfigArgumentMap,
		resolve?: GraphQLFieldResolveFn<TSource>,
		deprecationReason?: string,
		description?: string
	}

	declare export interface GraphQLFieldConfigArgumentMap {
		[argName: string]: GraphQLArgumentConfig
	}

	declare export interface GraphQLArgumentConfig {
		type: GraphQLInputType,
		defaultValue?: any,
		description?: string
	}

	declare export interface GraphQLFieldConfigMap<TSource> {
		[fieldName: string]: GraphQLFieldConfig<TSource>
	}

	declare export interface GraphQLFieldDefinition {
		name: string,
		description: string,
		type: GraphQLOutputType,
		args: Array<GraphQLArgument>,
		resolve: GraphQLFieldResolveFn<any>,
		isDeprecated: boolean,
		deprecationReason: string
	}

	declare export interface GraphQLArgument {
		name: string,
		type: GraphQLInputType,
		defaultValue?: any,
		description?: string
	}

	declare export interface GraphQLFieldDefinitionMap {
		[fieldName: string]: GraphQLFieldDefinition
	}

	declare export interface GraphQLInterfaceTypeConfig {
		name: string,
		fields: Thunk<GraphQLFieldConfigMap<any>>,
		resolveType?: GraphQLTypeResolveFn,
		description?: string
	}

	declare export interface GraphQLUnionTypeConfig {
		name: string,
		types: Thunk<Array<GraphQLObjectType>>,
		resolveType?: GraphQLTypeResolveFn,
		description?: string
	}

	declare export interface GraphQLEnumTypeConfig {
		name: string,
		values: GraphQLEnumValueConfigMap,
		description?: string
	}

	declare export interface GraphQLEnumValueConfigMap {
		[valueName: string]: GraphQLEnumValueConfig
	}

	declare export interface GraphQLEnumValueConfig {
		value?: any,
		deprecationReason?: string,
		description?: string
	}

	declare export interface GraphQLEnumValueDefinition {
		name: string,
		description: string,
		deprecationReason: string,
		value: any
	}

	declare export interface GraphQLInputObjectTypeConfig {
		name: string,
		fields: Thunk<GraphQLInputFieldConfigMap>,
		description?: string
	}

	declare export interface GraphQLInputFieldConfig {
		type: GraphQLInputType,
		defaultValue?: any,
		description?: string
	}

	declare export interface GraphQLInputFieldConfigMap {
		[fieldName: string]: GraphQLInputFieldConfig
	}

	declare export interface GraphQLInputFieldDefinition {
		name: string,
		type: GraphQLInputType,
		defaultValue?: any,
		description?: string
	}

	declare export interface GraphQLInputFieldDefinitionMap {
		[fieldName: string]: GraphQLInputFieldDefinition
	}

	declare export function isType(type: any): GraphQLType

	declare export function isInputType(type: GraphQLType): GraphQLInputType

	declare export function isOutputType(type: GraphQLType): GraphQLOutputType

	declare export function isLeafType(type: GraphQLType): GraphQLLeafType

	declare export function isCompositeType(type: GraphQLType): GraphQLCompositeType

	declare export function isAbstractType(type: GraphQLType): GraphQLAbstractType

	declare export function getNullableType<T>(type: T): (T & GraphQLNullableType)

	declare export function getNamedType(type: GraphQLType): GraphQLNamedType

	declare class GraphQLScalarType  {
		name: string;
		description: string;
		constructor(config: GraphQLScalarTypeConfig<any, any>): this;
		serialize(value: any): any;
		parseValue(value: any): any;
		parseLiteral(valueAST: Value): any;
		toString(): string
	}

	declare class GraphQLObjectType  {
		name: string;
		description: string;
		isTypeOf: GraphQLIsTypeOfFn;
		constructor(config: GraphQLObjectTypeConfig<any>): this;
		getFields(): GraphQLFieldDefinitionMap;
		getInterfaces(): Array<GraphQLInterfaceType>;
		toString(): string
	}

	declare class GraphQLInterfaceType  {
		name: string;
		description: string;
		resolveType: GraphQLTypeResolveFn;
		constructor(config: GraphQLInterfaceTypeConfig): this;
		getFields(): GraphQLFieldDefinitionMap;
		toString(): string
	}

	declare class GraphQLUnionType  {
		name: string;
		description: string;
		resolveType: GraphQLTypeResolveFn;
		constructor(config: GraphQLUnionTypeConfig): this;
		getTypes(): Array<GraphQLObjectType>;
		toString(): string
	}

	declare class GraphQLEnumType  {
		name: string;
		description: string;
		constructor(config: GraphQLEnumTypeConfig): this;
		getValues(): Array<GraphQLEnumValueDefinition>;
		serialize(value: any): string;
		parseValue(value: any): any;
		parseLiteral(valueAST: Value): any;
		toString(): string
	}

	declare class GraphQLInputObjectType  {
		name: string;
		description: string;
		constructor(config: GraphQLInputObjectTypeConfig): this;
		getFields(): GraphQLInputFieldDefinitionMap;
		toString(): string
	}

	declare class GraphQLList<T>  {
		ofType: T;
		constructor(type: T): this;
		toString(): string
	}

	declare class GraphQLNonNull<T>  {
		ofType: T;
		constructor(type: T): this;
		toString(): string
	}

	
}

declare module 'graphql/type/directives' {
	declare type DirectiveLocationEnum = any;

	declare interface GraphQLDirectiveConfig {
		name: string,
		description?: string,
		locations: Array<DirectiveLocationEnum>,
		args?: GraphQLFieldConfigArgumentMap
	}

		declare class GraphQLDirective  {
		name: string;
		description: string;
		locations: Array<DirectiveLocationEnum>;
		args: Array<GraphQLArgument>;
		constructor(config: GraphQLDirectiveConfig): this
	}

	
}

declare module 'graphql/type/introspection' {
					
}

declare module 'graphql/type/scalars' {
					
}

declare module 'graphql/type/schema' {
		declare interface GraphQLSchemaConfig {
		query: GraphQLObjectType,
		mutation?: GraphQLObjectType,
		subscription?: GraphQLObjectType,
		types?: Array<GraphQLNamedType>,
		directives?: Array<GraphQLDirective>
	}

		declare class GraphQLSchema  {
		constructor(config: GraphQLSchemaConfig): this;
		getQueryType(): GraphQLObjectType;
		getMutationType(): GraphQLObjectType;
		getSubscriptionType(): GraphQLObjectType;
		getTypeMap(): GraphQLNamedType;
		getType(name: string): GraphQLType;
		getPossibleTypes(abstractType: GraphQLAbstractType): Array<GraphQLObjectType>;
		isPossibleType(abstractType: GraphQLAbstractType, possibleType: GraphQLObjectType): boolean;
		getDirectives(): Array<GraphQLDirective>;
		getDirective(name: string): GraphQLDirective
	}

	
}

declare module 'graphql/validation/specifiedRules' {
					
}

declare module 'graphql/validation/validate' {
	declare type HasSelectionSet = OperationDefinition | FragmentDefinition;

	declare interface VariableUsage {
		node: Variable,
		type: GraphQLInputType
	}

	declare function validate(schema: GraphQLSchema, ast: Document, rules?: Array<any>): Array<GraphQLError>

	declare function visitUsingRules(
		schema: GraphQLSchema, typeInfo: TypeInfo, documentAST: Document, rules: Array<any>
	): Array<GraphQLError>

	declare export class ValidationContext  {
		constructor(schema: GraphQLSchema, ast: Document, typeInfo: TypeInfo): this;
		reportError(error: GraphQLError): void;
		getErrors(): Array<GraphQLError>;
		getSchema(): GraphQLSchema;
		getDocument(): Document;
		getFragment(name: string): FragmentDefinition;
		getFragmentSpreads(node: SelectionSet): Array<FragmentSpread>;
		getRecursivelyReferencedFragments(operation: OperationDefinition): Array<FragmentDefinition>;
		getVariableUsages(node: HasSelectionSet): Array<VariableUsage>;
		getRecursiveVariableUsages(operation: OperationDefinition): Array<VariableUsage>;
		getType(): GraphQLOutputType;
		getParentType(): GraphQLCompositeType;
		getInputType(): GraphQLInputType;
		getFieldDef(): GraphQLFieldDefinition;
		getDirective(): GraphQLDirective;
		getArgument(): GraphQLArgument
	}

	
}

declare module 'graphql/execution/execute' {
		declare interface ExecutionContext {
		schema: GraphQLSchema,
		fragments: {
		[key: string]: FragmentDefinition
	},
		rootValue: any,
		operation: OperationDefinition,
		variableValues: {
		[key: string]: any
	},
		errors: Array<GraphQLError>
	}

	declare interface ExecutionResult {
		data: Object,
		errors?: Array<GraphQLError>
	}

	declare function execute(
		schema: GraphQLSchema, documentAST: Document, rootValue?: any, contextValue?: any, variableValues?: {
		[key: string]: any
	}, operationName?: string
	): Promise<ExecutionResult>

		
}

declare module 'graphql/execution/values' {
			declare function getVariableValues(
		schema: GraphQLSchema, definitionASTs: Array<VariableDefinition>, inputs: {
		[key: string]: any
	}
	): {
		[key: string]: any
	}

	declare function getArgumentValues(
		argDefs: Array<GraphQLArgument>, argASTs: Array<Argument>, variableValues?: {
		[key: string]: any
	}
	): {
		[key: string]: any
	}

		
}

declare module 'graphql/error/formatError' {
	declare type GraphQLFormattedError = {
		message: string,
		locations: Array<GraphQLErrorLocation>
	};

	declare type GraphQLErrorLocation = {
		line: number,
		column: number
	};

		declare function formatError(error: GraphQLError): GraphQLFormattedError

		
}

declare module 'graphql/error/GraphQLError' {
				declare class GraphQLError extends Error {
		message: string;
		locations: Array<{
		line: number,
		column: number
	}> | void;
		path: Array<string | number> | void;
		nodes: Array<Node> | void;
		source: Source | void;
		positions: Array<number> | void;
		originalError: Error
	}

	
}

declare module 'graphql/error/locatedError' {
			declare function locatedError<T>(
		originalError: Error, nodes: Array<T>, path: Array<string | number>
	): GraphQLError

		
}

declare module 'graphql/error/syntaxError' {
			declare function syntaxError(source: Source, position: number, description: string): GraphQLError

		
}

declare module 'graphql/utilities/assertValidName' {
			declare function assertValidName(name: string): void

		
}

declare module 'graphql/utilities/astFromValue' {
			declare export function astFromValue(value: any, type: GraphQLInputType): Value

		
}

declare module 'graphql/utilities/buildASTSchema' {
			declare function buildASTSchema(ast: Document): GraphQLSchema

	declare function getDescription(node: {
		loc?: Location
	}): string

	declare function buildSchema(source: string | Source): GraphQLSchema

	declare function getDescription(node: {
		loc?: Location
	}): string

	declare function buildSchema(source: string | Source): GraphQLSchema

		
}

declare module 'graphql/utilities/buildClientSchema' {
			declare function buildClientSchema(introspection: IntrospectionQuery): GraphQLSchema

		
}

declare module 'graphql/utilities/concatAST' {
			declare function concatAST(asts: Array<Document>): Document

		
}

declare module 'graphql/utilities/extendSchema' {
			declare function extendSchema(schema: GraphQLSchema, documentAST: Document): GraphQLSchema

		
}

declare module 'graphql/utilities/getOperationAST' {
			declare export function getOperationAST(documentAST: Document, operationName: string): OperationDefinition

		
}

declare module 'graphql/utilities/introspectionQuery' {
	declare type IntrospectionType = IntrospectionScalarType | IntrospectionObjectType | IntrospectionInterfaceType | IntrospectionUnionType | IntrospectionEnumType | IntrospectionInputObjectType;

	declare type IntrospectionTypeRef = IntrospectionNamedTypeRef | IntrospectionListTypeRef | IntrospectionNonNullTypeRef;

	declare interface IntrospectionQuery {
		___schema: IntrospectionSchema
	}

	declare interface IntrospectionSchema {
		queryType: IntrospectionNamedTypeRef,
		mutationType?: IntrospectionNamedTypeRef,
		subscriptionType?: IntrospectionNamedTypeRef,
		types: Array<IntrospectionType>,
		directives: Array<IntrospectionDirective>
	}

	declare interface IntrospectionScalarType {
		kind: "SCALAR",
		name: string,
		description?: string
	}

	declare interface IntrospectionObjectType {
		kind: "OBJECT",
		name: string,
		description?: string,
		fields: Array<IntrospectionField>,
		interfaces: Array<IntrospectionNamedTypeRef>
	}

	declare interface IntrospectionInterfaceType {
		kind: "INTERFACE",
		name: string,
		description?: string,
		fields: Array<IntrospectionField>,
		possibleTypes: Array<IntrospectionNamedTypeRef>
	}

	declare interface IntrospectionUnionType {
		kind: "UNION",
		name: string,
		description?: string,
		possibleTypes: Array<IntrospectionNamedTypeRef>
	}

	declare interface IntrospectionEnumType {
		kind: "ENUM",
		name: string,
		description?: string,
		enumValues: Array<IntrospectionEnumValue>
	}

	declare interface IntrospectionInputObjectType {
		kind: "INPUT_OBJECT",
		name: string,
		description?: string,
		inputFields: Array<IntrospectionInputValue>
	}

	declare interface IntrospectionNamedTypeRef {
		kind: string,
		name: string
	}

	declare interface IntrospectionListTypeRef {
		kind: "LIST",
		ofType?: IntrospectionTypeRef
	}

	declare interface IntrospectionNonNullTypeRef {
		kind: "NON_NULL",
		ofType?: IntrospectionTypeRef
	}

	declare interface IntrospectionField {
		name: string,
		description?: string,
		args: Array<IntrospectionInputValue>,
		type: IntrospectionTypeRef,
		isDeprecated: boolean,
		deprecationReason?: string
	}

	declare interface IntrospectionInputValue {
		name: string,
		description?: string,
		type: IntrospectionTypeRef,
		defaultValue?: string
	}

	declare interface IntrospectionEnumValue {
		name: string,
		description?: string,
		isDeprecated: boolean,
		deprecationReason?: string
	}

	declare interface IntrospectionDirective {
		name: string,
		description?: string,
		locations: Array<DirectiveLocationEnum>,
		args: Array<IntrospectionInputValue>
	}

			
}

declare module 'graphql/utilities/isValidJSValue' {
			declare function isValidJSValue(value: any, type: GraphQLInputType): Array<string>

		
}

declare module 'graphql/utilities/isValidLiteralValue' {
			declare function isValidLiteralValue(type: GraphQLInputType, valueAST: Value): Array<string>

		
}

declare module 'graphql/utilities/schemaPrinter' {
			declare function printSchema(schema: GraphQLSchema): string

	declare function printIntrospectionSchema(schema: GraphQLSchema): string

		
}

declare module 'graphql/utilities/separateOperations' {
			declare function separateOperations(documentAST: Document): {
		[operationName: string]: Document
	}

		
}

declare module 'graphql/utilities/typeComparators' {
			declare function isEqualType(typeA: GraphQLType, typeB: GraphQLType): boolean

	declare function isTypeSubTypeOf(
		schema: GraphQLSchema, maybeSubType: GraphQLType, superType: GraphQLType
	): boolean

	declare function doTypesOverlap(
		schema: GraphQLSchema, typeA: GraphQLCompositeType, typeB: GraphQLCompositeType
	): boolean

		
}

declare module 'graphql/utilities/typeFromAST' {
			declare function typeFromAST(schema: GraphQLSchema, inputTypeAST: Type): GraphQLType

		
}

declare module 'graphql/utilities/TypeInfo' {
				declare class TypeInfo  {
		
	}

	
}

declare module 'graphql/utilities/valueFromAST' {
			declare function valueFromAST(
		valueAST: Value, type: GraphQLInputType, variables?: {
		[key: string]: any
	}
	): any

		
}
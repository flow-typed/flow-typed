// see https://gist.github.com/thecotne/6e5969f4aaf8f253985ed36b30ac9fe0
type $FlowGen$If<X: boolean, Then, Else = empty> = $Call<
  ((true, Then, Else) => Then) & ((false, Then, Else) => Else),
  X,
  Then,
  Else
>;

type $FlowGen$Assignable<A, B> = $Call<((...r: [B]) => true) & ((...r: [A]) => false), A>;

declare module "graphql" {
  /**
   * A string containing the version of the GraphQL.js library
   */
  declare export var version: string;

  /**
   * An object containing the components of the GraphQL.js version string
   */
  declare export var versionInfo: $ReadOnly<{|
    major: number,
    minor: number,
    patch: number,
    preReleaseTag: string | null
  |}>;

  /**
   * Conveniently represents flow's "Maybe" type https://flow.org/en/docs/types/maybe/
   */
  declare export type Maybe<T> = null | void | T;

  /**
   * Contains a range of UTF-8 character offsets and token references that
   * identify the region of the source from which the AST derived.
   */
  declare export class Location {
    /**
     * The character offset at which this Node begins.
     */
    +start: number;

    /**
     * The character offset at which this Node ends.
     */
    +end: number;

    /**
     * The Token at which this Node begins.
     */
    +startToken: Token;

    /**
     * The Token at which this Node ends.
     */
    +endToken: Token;

    /**
     * The Source document the AST represents.
     */
    +source: Source;
    constructor(startToken: Token, endToken: Token, source: Source): this;
  [typeof Symbol.toStringTag]: string;
    toJSON(): {|
      start: number,
      end: number
    |};
  }

  /**
   * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
   * optional, but they are useful for clients who store GraphQL documents in source files.
   * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
   * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
   * The `line` and `column` properties in `locationOffset` are 1-indexed.
   */
  declare export class Source {
    body: string;
    name: string;
    locationOffset: Location;
    constructor(body: string, name?: string, locationOffset?: Location): this;
  [typeof Symbol.toStringTag]: string;
  }
  declare export interface ObjMap<T> {
    [key: string]: T;
  }
  declare export interface ResponsePath {
    +prev: ResponsePath | void;
    +key: string | number;
    +typename: string | void;
  }
  declare export function responsePathAsArray(path: Maybe<$ReadOnly<ResponsePath>>): Array<string | number>;

  declare export type PromiseOrValue<T> = Promise<T> | T;

  /**
   * The set of allowed kind values for AST nodes.
   */

  declare export var Kind: {|
    +NAME: "Name", // "Name"
    +DOCUMENT: "Document", // "Document"
    +OPERATION_DEFINITION: "OperationDefinition", // "OperationDefinition"
    +VARIABLE_DEFINITION: "VariableDefinition", // "VariableDefinition"
    +SELECTION_SET: "SelectionSet", // "SelectionSet"
    +FIELD: "Field", // "Field"
    +ARGUMENT: "Argument", // "Argument"
    +FRAGMENT_SPREAD: "FragmentSpread", // "FragmentSpread"
    +INLINE_FRAGMENT: "InlineFragment", // "InlineFragment"
    +FRAGMENT_DEFINITION: "FragmentDefinition", // "FragmentDefinition"
    +VARIABLE: "Variable", // "Variable"
    +INT: "IntValue", // "IntValue"
    +FLOAT: "FloatValue", // "FloatValue"
    +STRING: "StringValue", // "StringValue"
    +BOOLEAN: "BooleanValue", // "BooleanValue"
    +NULL: "NullValue", // "NullValue"
    +ENUM: "EnumValue", // "EnumValue"
    +LIST: "ListValue", // "ListValue"
    +OBJECT: "ObjectValue", // "ObjectValue"
    +OBJECT_FIELD: "ObjectField", // "ObjectField"
    +DIRECTIVE: "Directive", // "Directive"
    +NAMED_TYPE: "NamedType", // "NamedType"
    +LIST_TYPE: "ListType", // "ListType"
    +NON_NULL_TYPE: "NonNullType", // "NonNullType"
    +SCHEMA_DEFINITION: "SchemaDefinition", // "SchemaDefinition"
    +OPERATION_TYPE_DEFINITION: "OperationTypeDefinition", // "OperationTypeDefinition"
    +SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition", // "ScalarTypeDefinition"
    +OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition", // "ObjectTypeDefinition"
    +FIELD_DEFINITION: "FieldDefinition", // "FieldDefinition"
    +INPUT_VALUE_DEFINITION: "InputValueDefinition", // "InputValueDefinition"
    +INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition", // "InterfaceTypeDefinition"
    +UNION_TYPE_DEFINITION: "UnionTypeDefinition", // "UnionTypeDefinition"
    +ENUM_TYPE_DEFINITION: "EnumTypeDefinition", // "EnumTypeDefinition"
    +ENUM_VALUE_DEFINITION: "EnumValueDefinition", // "EnumValueDefinition"
    +INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition", // "InputObjectTypeDefinition"
    +DIRECTIVE_DEFINITION: "DirectiveDefinition", // "DirectiveDefinition"
    +SCHEMA_EXTENSION: "SchemaExtension", // "SchemaExtension"
    +SCALAR_TYPE_EXTENSION: "ScalarTypeExtension", // "ScalarTypeExtension"
    +OBJECT_TYPE_EXTENSION: "ObjectTypeExtension", // "ObjectTypeExtension"
    +INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension", // "InterfaceTypeExtension"
    +UNION_TYPE_EXTENSION: "UnionTypeExtension", // "UnionTypeExtension"
    +ENUM_TYPE_EXTENSION: "EnumTypeExtension", // "EnumTypeExtension"
    +INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension" // "InputObjectTypeExtension"
  |};

  /**
   * The enum type representing the possible kind values of AST nodes.
   * @deprecated Please use `Kind`. Will be remove in v17.
   */
  declare export type KindEnum = typeof Kind;

  /**
   * An exported enum describing the different kinds of tokens that the
   * lexer emits.
   */

  declare export var TokenKind: {|
    +SOF: "<SOF>", // "<SOF>"
    +EOF: "<EOF>", // "<EOF>"
    +BANG: "!", // "!"
    +DOLLAR: "$", // "$"
    +AMP: "&", // "&"
    +PAREN_L: "(", // "("
    +PAREN_R: ")", // ")"
    +SPREAD: "...", // "..."
    +COLON: ":", // ":"
    +EQUALS: "=", // "="
    +AT: "@", // "@"
    +BRACKET_L: "[", // "["
    +BRACKET_R: "]", // "]"
    +BRACE_L: "{", // "{"
    +PIPE: "|", // "|"
    +BRACE_R: "}", // "}"
    +NAME: "Name", // "Name"
    +INT: "Int", // "Int"
    +FLOAT: "Float", // "Float"
    +STRING: "String", // "String"
    +BLOCK_STRING: "BlockString", // "BlockString"
    +COMMENT: "Comment" // "Comment"
  |};

  /**
   * The enum type representing the token kinds values.
   * @deprecated Please use `TokenKind`. Will be remove in v17.
   */
  declare export type TokenKindEnum = typeof TokenKind;

  /**
   * Represents a range of characters represented by a lexical token
   * within a Source.
   */
  declare export class Token {
    /**
     * The kind of Token.
     */
    +kind: $Values<typeof TokenKind>;

    /**
     * The character offset at which this Node begins.
     */
    +start: number;

    /**
     * The character offset at which this Node ends.
     */
    +end: number;

    /**
     * The 1-indexed line number on which this Token appears.
     */
    +line: number;

    /**
     * The 1-indexed column number at which this Token begins.
     */
    +column: number;

    /**
     * For non-punctuation tokens, represents the interpreted value of the token.
     *
     * Note: is undefined for punctuation tokens, but typed as string for
     * convenience in the parser.
     */
    +value: string;

    /**
     * Tokens exist as nodes in a double-linked-list amongst all tokens
     * including ignored tokens. <SOF> is always the first node and <EOF>
     * the last.
     */
    +prev: Token | null;
    +next: Token | null;
    constructor(
      kind: $Values<typeof TokenKind>,
      start: number,
      end: number,
      line: number,
      column: number,
      value?: string
    ): this;
  [typeof Symbol.toStringTag]: string;
    toJSON(): {|
      kind: $Values<typeof TokenKind>,
      value?: string,
      line: number,
      column: number
    |};
  }

  /**
   * The list of all possible AST node types.
   */
  declare export type ASTNode =
    | NameNode
    | DocumentNode
    | OperationDefinitionNode
    | VariableDefinitionNode
    | VariableNode
    | SelectionSetNode
    | FieldNode
    | ArgumentNode
    | FragmentSpreadNode
    | InlineFragmentNode
    | FragmentDefinitionNode
    | IntValueNode
    | FloatValueNode
    | StringValueNode
    | BooleanValueNode
    | NullValueNode
    | EnumValueNode
    | ListValueNode
    | ObjectValueNode
    | ObjectFieldNode
    | DirectiveNode
    | NamedTypeNode
    | ListTypeNode
    | NonNullTypeNode
    | SchemaDefinitionNode
    | OperationTypeDefinitionNode
    | ScalarTypeDefinitionNode
    | ObjectTypeDefinitionNode
    | FieldDefinitionNode
    | InputValueDefinitionNode
    | InterfaceTypeDefinitionNode
    | UnionTypeDefinitionNode
    | EnumTypeDefinitionNode
    | EnumValueDefinitionNode
    | InputObjectTypeDefinitionNode
    | DirectiveDefinitionNode
    | SchemaExtensionNode
    | ScalarTypeExtensionNode
    | ObjectTypeExtensionNode
    | InterfaceTypeExtensionNode
    | UnionTypeExtensionNode
    | EnumTypeExtensionNode
    | InputObjectTypeExtensionNode;

  /**
   * Utility type listing all nodes indexed by their kind.
   */
  declare export type ASTKindToNode = $ObjMapi<{ [k: ASTNode]: any }, <NodeT>(NodeT) => NodeT>;

  /**
   * Name
   */
  declare export interface NameNode {
    +kind: typeof Kind.NAME;
    +loc?: Location;
    +value: string;
  }

  /**
   * Document
   */
  declare export type DocumentNode = {|
    +kind: typeof Kind.DOCUMENT;
    +loc?: Location;
    +definitions: $ReadOnlyArray<DefinitionNode>;
  |};
  declare export type DefinitionNode = ExecutableDefinitionNode | TypeSystemDefinitionNode | TypeSystemExtensionNode;
  declare export type ExecutableDefinitionNode = OperationDefinitionNode | FragmentDefinitionNode;
  declare export type OperationDefinitionNode = {|
    +kind: typeof Kind.OPERATION_DEFINITION;
    +loc?: Location;
    +operation: $Values<typeof OperationTypeNode>;
    +name?: NameNode;
    +variableDefinitions?: $ReadOnlyArray<VariableDefinitionNode>;
    +directives?: $ReadOnlyArray<DirectiveNode>;
    +selectionSet: SelectionSetNode;
  |};

  declare export var OperationTypeNode: {|
    +QUERY: "query", // "query"
    +MUTATION: "mutation", // "mutation"
    +SUBSCRIPTION: "subscription" // "subscription"
  |};

  declare export type VariableDefinitionNode = {|
    +kind: typeof Kind.VARIABLE_DEFINITION;
    +loc?: Location;
    +variable: VariableNode;
    +type: TypeNode;
    +defaultValue?: ConstValueNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  |};
  declare export type VariableNode = {|
    +kind: typeof Kind.VARIABLE;
    +loc?: Location;
    +name: NameNode;
  |};
  declare export type SelectionSetNode = {|
    kind: typeof Kind.SELECTION_SET;
    loc?: Location;
    selections: $ReadOnlyArray<SelectionNode>;
  |};
  declare export type SelectionNode = FieldNode | FragmentSpreadNode | InlineFragmentNode;
  declare export type FieldNode = {|
    +kind: typeof Kind.FIELD;
    +loc?: Location;
    +alias?: NameNode;
    +name: NameNode;
    +arguments?: $ReadOnlyArray<ArgumentNode>;
    +directives?: $ReadOnlyArray<DirectiveNode>;
    +selectionSet?: SelectionSetNode;
  |};
  declare export type ArgumentNode = {|
    +kind: typeof Kind.ARGUMENT;
    +loc?: Location;
    +name: NameNode;
    +value: ValueNode;
  |};
  declare export type ConstArgumentNode = {|
    +kind: typeof Kind.ARGUMENT;
    +loc?: Location;
    +name: NameNode;
    +value: ConstValueNode;
  |};

  /**
   * Fragments
   */
  declare export type FragmentSpreadNode = {|
    +kind: typeof Kind.FRAGMENT_SPREAD;
    +loc?: Location;
    +name: NameNode;
    +directives?: $ReadOnlyArray<DirectiveNode>;
  |};
  declare export type InlineFragmentNode = {|
    +kind: typeof Kind.INLINE_FRAGMENT;
    +loc?: Location;
    +typeCondition?: NamedTypeNode;
    +directives?: $ReadOnlyArray<DirectiveNode>;
    +selectionSet: SelectionSetNode;
  |};
  declare export type FragmentDefinitionNode = {|
    +kind: typeof Kind.FRAGMENT_DEFINITION;
    +loc?: Location;
    +name: NameNode;

    /**
     * @deprecated variableDefinitions will be removed in v17.0.0
     */
    +variableDefinitions?: $ReadOnlyArray<VariableDefinitionNode>;
    +typeCondition: NamedTypeNode;
    +directives?: $ReadOnlyArray<DirectiveNode>;
    +selectionSet: SelectionSetNode;
  |};

  /**
   * Values
   */
  declare export type ValueNode =
    | VariableNode
    | IntValueNode
    | FloatValueNode
    | StringValueNode
    | BooleanValueNode
    | NullValueNode
    | EnumValueNode
    | ListValueNode
    | ObjectValueNode;
  declare export type ConstValueNode =
    | IntValueNode
    | FloatValueNode
    | StringValueNode
    | BooleanValueNode
    | NullValueNode
    | EnumValueNode
    | ConstListValueNode
    | ConstObjectValueNode;
  declare export type IntValueNode = {|
    +kind: typeof Kind.INT;
    +loc?: Location;
    +value: string;
  |};
  declare export type FloatValueNode = {|
    +kind: typeof Kind.FLOAT;
    +loc?: Location;
    +value: string;
  |};
  declare export type StringValueNode = {|
    +kind: typeof Kind.STRING;
    +loc?: Location;
    +value: string;
    +block?: boolean;
  |};
  declare export type BooleanValueNode = {|
    +kind: typeof Kind.BOOLEAN;
    +loc?: Location;
    +value: boolean;
  |};
  declare export type NullValueNode = {|
    +kind: typeof Kind.NULL;
    +loc?: Location;
  |};
  declare export type EnumValueNode = {|
    +kind: typeof Kind.ENUM;
    +loc?: Location;
    +value: string;
  |};
  declare export type ListValueNode = {|
    +kind: typeof Kind.LIST;
    +loc?: Location;
    +values: $ReadOnlyArray<ValueNode>;
  |};
  declare export type ConstListValueNode = {|
    +kind: typeof Kind.LIST;
    +loc?: Location;
    +values: $ReadOnlyArray<ConstValueNode>;
  |};
  declare export type ObjectValueNode = {|
    +kind: typeof Kind.OBJECT;
    +loc?: Location;
    +fields: $ReadOnlyArray<ObjectFieldNode>;
  |};
  declare export type ConstObjectValueNode = {|
    +kind: typeof Kind.OBJECT;
    +loc?: Location;
    +fields: $ReadOnlyArray<ConstObjectFieldNode>;
  |};
  declare export type ObjectFieldNode = {|
    +kind: typeof Kind.OBJECT_FIELD;
    +loc?: Location;
    +name: NameNode;
    +value: ValueNode;
  |};
  declare export type ConstObjectFieldNode = {|
    +kind: typeof Kind.OBJECT_FIELD;
    +loc?: Location;
    +name: NameNode;
    +value: ConstValueNode;
  |};

  /**
   * Directives
   */
  declare export type DirectiveNode = {|
    +kind: typeof Kind.DIRECTIVE;
    +loc?: Location;
    +name: NameNode;
    +arguments?: $ReadOnlyArray<ArgumentNode>;
  |};
  declare export type ConstDirectiveNode = {|
    +kind: typeof Kind.DIRECTIVE;
    +loc?: Location;
    +name: NameNode;
    +arguments?: $ReadOnlyArray<ConstArgumentNode>;
  |};

  /**
   * Type Reference
   */
  declare export type TypeNode = NamedTypeNode | ListTypeNode | NonNullTypeNode;
  declare export type NamedTypeNode = {|
    +kind: typeof Kind.NAMED_TYPE;
    +loc?: Location;
    +name: NameNode;
  |};
  declare export type ListTypeNode = {|
    +kind: typeof Kind.LIST_TYPE;
    +loc?: Location;
    +type: TypeNode;
  |};
  declare export type NonNullTypeNode = {|
    +kind: typeof Kind.NON_NULL_TYPE;
    +loc?: Location;
    +type: NamedTypeNode | ListTypeNode;
  |};

  /**
   * Type System Definition
   */
  declare export type TypeSystemDefinitionNode = SchemaDefinitionNode | TypeDefinitionNode | DirectiveDefinitionNode;
  declare export type SchemaDefinitionNode = {|
    +kind: typeof Kind.SCHEMA_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +operationTypes: $ReadOnlyArray<OperationTypeDefinitionNode>;
  |};
  declare export type OperationTypeDefinitionNode = {|
    +kind: typeof Kind.OPERATION_TYPE_DEFINITION;
    +loc?: Location;
    +operation: $Values<typeof OperationTypeNode>;
    +type: NamedTypeNode;
  |};

  /**
   * Type Definition
   */
  declare export type TypeDefinitionNode =
    | ScalarTypeDefinitionNode
    | ObjectTypeDefinitionNode
    | InterfaceTypeDefinitionNode
    | UnionTypeDefinitionNode
    | EnumTypeDefinitionNode
    | InputObjectTypeDefinitionNode;
  declare export type ScalarTypeDefinitionNode = {|
    +kind: typeof Kind.SCALAR_TYPE_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  |};
  declare export type ObjectTypeDefinitionNode = {|
    +kind: typeof Kind.OBJECT_TYPE_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +interfaces?: $ReadOnlyArray<NamedTypeNode>;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +fields?: $ReadOnlyArray<FieldDefinitionNode>;
  |};
  declare export type FieldDefinitionNode = {|
    +kind: typeof Kind.FIELD_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +arguments?: $ReadOnlyArray<InputValueDefinitionNode>;
    +type: TypeNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  |};
  declare export type InputValueDefinitionNode = {|
    +kind: typeof Kind.INPUT_VALUE_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +type: TypeNode;
    +defaultValue?: ConstValueNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  |};
  declare export type InterfaceTypeDefinitionNode = {|
    +kind: typeof Kind.INTERFACE_TYPE_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +interfaces?: $ReadOnlyArray<NamedTypeNode>;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +fields?: $ReadOnlyArray<FieldDefinitionNode>;
  |};
  declare export type UnionTypeDefinitionNode = {|
    +kind: typeof Kind.UNION_TYPE_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +types?: $ReadOnlyArray<NamedTypeNode>;
  |};
  declare export type EnumTypeDefinitionNode = {|
    +kind: typeof Kind.ENUM_TYPE_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +values?: $ReadOnlyArray<EnumValueDefinitionNode>;
  |};
  declare export type EnumValueDefinitionNode = {|
    +kind: typeof Kind.ENUM_VALUE_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  |};
  declare export type InputObjectTypeDefinitionNode = {|
    +kind: typeof Kind.INPUT_OBJECT_TYPE_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +fields?: $ReadOnlyArray<InputValueDefinitionNode>;
  |};

  /**
   * Directive Definitions
   */
  declare export type DirectiveDefinitionNode = {|
    +kind: typeof Kind.DIRECTIVE_DEFINITION;
    +loc?: Location;
    +description?: StringValueNode;
    +name: NameNode;
    +arguments?: $ReadOnlyArray<InputValueDefinitionNode>;
    +repeatable: boolean;
    +locations: $ReadOnlyArray<NameNode>;
  |};

  /**
   * Type System Extensions
   */
  declare export type TypeSystemExtensionNode = SchemaExtensionNode | TypeExtensionNode;
  declare export type SchemaExtensionNode = {|
    +kind: typeof Kind.SCHEMA_EXTENSION;
    +loc?: Location;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +operationTypes?: $ReadOnlyArray<OperationTypeDefinitionNode>;
  |};

  /**
   * Type Extensions
   */
  declare export type TypeExtensionNode =
    | ScalarTypeExtensionNode
    | ObjectTypeExtensionNode
    | InterfaceTypeExtensionNode
    | UnionTypeExtensionNode
    | EnumTypeExtensionNode
    | InputObjectTypeExtensionNode;
  declare export type ScalarTypeExtensionNode = {|
    +kind: typeof Kind.SCALAR_TYPE_EXTENSION;
    +loc?: Location;
    +name: NameNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
  |};
  declare export type ObjectTypeExtensionNode = {|
    +kind: typeof Kind.OBJECT_TYPE_EXTENSION;
    +loc?: Location;
    +name: NameNode;
    +interfaces?: $ReadOnlyArray<NamedTypeNode>;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +fields?: $ReadOnlyArray<FieldDefinitionNode>;
  |};
  declare export type InterfaceTypeExtensionNode = {|
    +kind: typeof Kind.INTERFACE_TYPE_EXTENSION;
    +loc?: Location;
    +name: NameNode;
    +interfaces?: $ReadOnlyArray<NamedTypeNode>;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +fields?: $ReadOnlyArray<FieldDefinitionNode>;
  |};
  declare export type UnionTypeExtensionNode = {|
    +kind: typeof Kind.UNION_TYPE_EXTENSION;
    +loc?: Location;
    +name: NameNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +types?: $ReadOnlyArray<NamedTypeNode>;
  |};
  declare export type EnumTypeExtensionNode = {|
    +kind: typeof Kind.ENUM_TYPE_EXTENSION;
    +loc?: Location;
    +name: NameNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +values?: $ReadOnlyArray<EnumValueDefinitionNode>;
  |};
  declare export type InputObjectTypeExtensionNode = {|
    +kind: typeof Kind.INPUT_OBJECT_TYPE_EXTENSION;
    +loc?: Location;
    +name: NameNode;
    +directives?: $ReadOnlyArray<ConstDirectiveNode>;
    +fields?: $ReadOnlyArray<InputValueDefinitionNode>;
  |};

  /**
   * Represents a location in a Source.
   */
  declare export interface SourceLocation {
    +line: number;
    +column: number;
  }

  /**
   * Takes a Source and a UTF-8 character offset, and returns the corresponding
   * line and column as a SourceLocation.
   */
  declare export function getLocation(source: Source, position: number): SourceLocation;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLErrorExtensions {
    [attributeName: string]: mixed;
  }
  declare export interface GraphQLErrorOptions {
    nodes?: $ReadOnlyArray<ASTNode> | ASTNode | null;
    source?: Maybe<Source>;
    positions?: Maybe<$ReadOnlyArray<number>>;
    path?: Maybe<$ReadOnlyArray<string | number>>;
    originalError?: ?Error;
    extensions?: Maybe<GraphQLErrorExtensions>;
  }

  /**
   * A GraphQLError describes an Error found during the parse, validate, or
   * execute phases of performing a GraphQL operation. In addition to a message
   * and stack trace, it also includes information about the locations in a
   * GraphQL document and/or execution result that correspond to the Error.
   */
  declare export class GraphQLError extends Error {
    /**
     * An array of `{ line, column }` locations within the source GraphQL document
     * which correspond to this error.
     *
     * Errors during validation often contain multiple locations, for example to
     * point out two things with the same name. Errors during execution include a
     * single location, the field which produced the error.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */
    +locations: $ReadOnlyArray<SourceLocation> | void;

    /**
     * An array describing the JSON-path into the execution response which
     * corresponds to this error. Only included for errors during execution.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */
    +path: $ReadOnlyArray<string | number> | void;

    /**
     * An array of GraphQL AST Nodes corresponding to this error.
     */
    +nodes: $ReadOnlyArray<ASTNode> | void;

    /**
     * The source GraphQL document for the first location of this error.
     *
     * Note that if this Error represents more than one node, the source may not
     * represent nodes after the first node.
     */
    +source: Source | void;

    /**
     * An array of character offsets within the source GraphQL document
     * which correspond to this error.
     */
    +positions: $ReadOnlyArray<number> | void;

    /**
     * The original error thrown from a field resolver during execution.
     */
    +originalError: Error | void;

    /**
     * Extension fields to add to the formatted error.
     */
    +extensions: GraphQLErrorExtensions;
    constructor(message: string, options?: GraphQLErrorOptions): this;

    /**
     * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
     */
    constructor(
      message: string,
      nodes?: $ReadOnlyArray<ASTNode> | ASTNode | null,
      source?: Maybe<Source>,
      positions?: Maybe<$ReadOnlyArray<number>>,
      path?: Maybe<$ReadOnlyArray<string | number>>,
      originalError?: ?Error,
      extensions?: Maybe<GraphQLErrorExtensions>
    ): this;
  [typeof Symbol.toStringTag]: string;
    toString(): string;
    toJSON(): GraphQLFormattedError;
  }

  /**
   * See: https://spec.graphql.org/draft/#sec-Errors
   */
  declare export interface GraphQLFormattedError {
    /**
     * A short, human-readable summary of the problem that **SHOULD NOT** change
     * from occurrence to occurrence of the problem, except for purposes of
     * localization.
     */
    +message: string;

    /**
     * If an error can be associated to a particular point in the requested
     * GraphQL document, it should contain a list of locations.
     */
    +locations?: $ReadOnlyArray<SourceLocation>;

    /**
     * If an error can be associated to a particular field in the GraphQL result,
     * it _must_ contain an entry with the key `path` that details the path of
     * the response field which experienced the error. This allows clients to
     * identify whether a null result is intentional or caused by a runtime error.
     */
    +path?: $ReadOnlyArray<string | number>;

    /**
     * Reserved for implementors to extend the protocol however they see fit,
     * and hence there are no additional restrictions on its contents.
     */
    +extensions?: {
      [key: string]: mixed
    };
  }

  /**
   * Prints a GraphQLError to a string, representing useful location information
   * about the error's position in the source.
   * @deprecated Please use `error.toString` instead. Will be removed in v17
   */
  declare export function printError(error: GraphQLError): string;

  /**
   * Given a GraphQLError, format it according to the rules described by the
   * Response Format, Errors section of the GraphQL Specification.
   * @deprecated Please use `error.toJSON` instead. Will be removed in v17
   */
  declare export function formatError(error: GraphQLError): GraphQLFormattedError;

  /**
   * The set of allowed directive location values.
   */

  declare export var DirectiveLocation: {|
    +QUERY: "QUERY", // "QUERY"
    +MUTATION: "MUTATION", // "MUTATION"
    +SUBSCRIPTION: "SUBSCRIPTION", // "SUBSCRIPTION"
    +FIELD: "FIELD", // "FIELD"
    +FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION", // "FRAGMENT_DEFINITION"
    +FRAGMENT_SPREAD: "FRAGMENT_SPREAD", // "FRAGMENT_SPREAD"
    +INLINE_FRAGMENT: "INLINE_FRAGMENT", // "INLINE_FRAGMENT"
    +VARIABLE_DEFINITION: "VARIABLE_DEFINITION", // "VARIABLE_DEFINITION"
    +SCHEMA: "SCHEMA", // "SCHEMA"
    +SCALAR: "SCALAR", // "SCALAR"
    +OBJECT: "OBJECT", // "OBJECT"
    +FIELD_DEFINITION: "FIELD_DEFINITION", // "FIELD_DEFINITION"
    +ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION", // "ARGUMENT_DEFINITION"
    +INTERFACE: "INTERFACE", // "INTERFACE"
    +UNION: "UNION", // "UNION"
    +ENUM: "ENUM", // "ENUM"
    +ENUM_VALUE: "ENUM_VALUE", // "ENUM_VALUE"
    +INPUT_OBJECT: "INPUT_OBJECT", // "INPUT_OBJECT"
    +INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION" // "INPUT_FIELD_DEFINITION"
  |};

  /**
   * The enum type representing the directive location values.
   * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
   */
  declare export type DirectiveLocationEnum = typeof DirectiveLocation;

  /**
   * Test if the given value is a GraphQL directive.
   */
  declare export function isDirective(directive: mixed): boolean;

  declare export function assertDirective(directive: mixed): GraphQLDirective;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLDirectiveExtensions {
    [attributeName: string]: mixed;
  }

  /**
   * Directives are used by the GraphQL runtime as a way of modifying execution
   * behavior. Type system creators will usually not create these directly.
   */
  declare export class GraphQLDirective {
    name: string;
    description: Maybe<string>;
    locations: $ReadOnlyArray<$Values<typeof DirectiveLocation>>;
    args: $ReadOnlyArray<GraphQLArgument>;
    isRepeatable: boolean;
    extensions: $ReadOnly<GraphQLDirectiveExtensions>;
    astNode: Maybe<DirectiveDefinitionNode>;
    constructor(config: $ReadOnly<GraphQLDirectiveConfig>): this;
  [typeof Symbol.toStringTag]: string;
    toConfig(): GraphQLDirectiveNormalizedConfig;
    toString(): string;
    toJSON(): string;
  }
  declare export interface GraphQLDirectiveConfig {
    name: string;
    description?: Maybe<string>;
    locations: $ReadOnlyArray<$Values<typeof DirectiveLocation>>;
    args?: Maybe<GraphQLFieldConfigArgumentMap>;
    isRepeatable?: Maybe<boolean>;
    extensions?: Maybe<$ReadOnly<GraphQLDirectiveExtensions>>;
    astNode?: Maybe<DirectiveDefinitionNode>;
  }
  declare export type GraphQLDirectiveNormalizedConfig = {|
    args: GraphQLFieldConfigArgumentMap,
    isRepeatable: boolean,
    extensions: $ReadOnly<GraphQLDirectiveExtensions>
  |} & GraphQLDirectiveConfig;

  /**
   * Used to conditionally include fields or fragments.
   */
  declare export var GraphQLIncludeDirective: GraphQLDirective;

  /**
   * Used to conditionally skip (exclude) fields or fragments.
   */
  declare export var GraphQLSkipDirective: GraphQLDirective;

  /**
   * Constant string used for default reason for a deprecation.
   */
  declare export var DEFAULT_DEPRECATION_REASON: "No longer supported";

  /**
   * Used to declare export element of a GraphQL schema as deprecated.
   */
  declare export var GraphQLDeprecatedDirective: GraphQLDirective;

  /**
   * Used to provide a URL for specifying the behavior of custom scalar definitions.
   */
  declare export var GraphQLSpecifiedByDirective: GraphQLDirective;

  /**
   * The full list of specified directives.
   */
  declare export var specifiedDirectives: $ReadOnlyArray<GraphQLDirective>;
  declare export function isSpecifiedDirective(directive: GraphQLDirective): boolean;

  /**
   * Test if the given value is a GraphQL schema.
   */
  declare export function isSchema(schema: mixed): boolean;

  declare export function assertSchema(schema: mixed): GraphQLSchema;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLSchemaExtensions {
    [attributeName: string]: mixed;
  }

  /**
   * Schema Definition
   *
   * A Schema is created by supplying the root types of each type of operation,
   * query and mutation (optional). A schema definition is then supplied to the
   * validator and executor.
   *
   * Example:
   *
   * ```ts
   * const MyAppSchema = new GraphQLSchema({
   *   query: MyAppQueryRootType,
   *   mutation: MyAppMutationRootType,
   * })
   * ```
   *
   * Note: When the schema is constructed, by default only the types that are
   * reachable by traversing the root types are included, other types must be
   * explicitly referenced.
   *
   * Example:
   *
   * ```ts
   * const characterInterface = new GraphQLInterfaceType({
   *   name: 'Character',
   *   ...
   * });
   *
   * const humanType = new GraphQLObjectType({
   *   name: 'Human',
   *   interfaces: [characterInterface],
   *   ...
   * });
   *
   * const droidType = new GraphQLObjectType({
   *   name: 'Droid',
   *   interfaces: [characterInterface],
   *   ...
   * });
   *
   * const schema = new GraphQLSchema({
   *   query: new GraphQLObjectType({
   *     name: 'Query',
   *     fields: {
   *       hero: { type: characterInterface, ... },
   *     }
   *   }),
   *   ...
   *   // Since this schema references only the `Character` interface it's
   *   // necessary to explicitly list the types that implement it if
   *   // you want them to be included in the final schema.
   *   types: [humanType, droidType],
   * })
   * ```
   *
   * Note: If an array of `directives` are provided to GraphQLSchema, that will be
   * the exact list of directives represented and allowed. If `directives` is not
   * provided then a default set of the specified directives (e.g. `@include` and
   * `@skip`) will be used. If you wish to provide *additional* directives to these
   * specified directives, you must explicitly declare export them. Example:
   *
   * ```ts
   * const MyAppSchema = new GraphQLSchema({
   *   ...
   *   directives: specifiedDirectives.concat([ myCustomDirective ]),
   * })
   * ```
   */
  declare export class GraphQLSchema {
    description: Maybe<string>;
    extensions: $ReadOnly<GraphQLSchemaExtensions>;
    astNode: Maybe<SchemaDefinitionNode>;
    extensionASTNodes: $ReadOnlyArray<SchemaExtensionNode>;
    __validationErrors: Maybe<$ReadOnlyArray<GraphQLError>>;
    constructor(config: $ReadOnly<GraphQLSchemaConfig>): this;
  [typeof Symbol.toStringTag]: string;
    getQueryType(): Maybe<GraphQLObjectType<>>;
    getMutationType(): Maybe<GraphQLObjectType<>>;
    getSubscriptionType(): Maybe<GraphQLObjectType<>>;
    getRootType(operation: $Values<typeof OperationTypeNode>): Maybe<GraphQLObjectType<>>;
    getTypeMap(): TypeMap;
    getType(name: string): GraphQLNamedType | void;
    getPossibleTypes(abstractType: GraphQLAbstractType): $ReadOnlyArray<GraphQLObjectType<>>;
    getImplementations(interfaceType: GraphQLInterfaceType): {|
      objects: $ReadOnlyArray<GraphQLObjectType<>>,
      interfaces: $ReadOnlyArray<GraphQLInterfaceType>
    |};
    isSubType(abstractType: GraphQLAbstractType, maybeSubType: GraphQLObjectType<> | GraphQLInterfaceType): boolean;
    getDirectives(): $ReadOnlyArray<GraphQLDirective>;
    getDirective(name: string): Maybe<GraphQLDirective>;
    toConfig(): GraphQLSchemaNormalizedConfig;
  }
  declare export type TypeMap = ObjMap<GraphQLNamedType>;
  declare export type GraphQLSchemaValidationOptions = {|
    /**
     * When building a schema from a GraphQL service's introspection result, it
     * might be safe to assume the schema is valid. Set to true to assume the
     * produced schema is valid.
     *
     * Default: false
     */
    assumeValid?: boolean;
  |};
  declare export type GraphQLSchemaConfig = {|
    description?: Maybe<string>,
    query?: Maybe<GraphQLObjectType<>>,
    mutation?: Maybe<GraphQLObjectType<>>,
    subscription?: Maybe<GraphQLObjectType<>>,
    types?: Maybe<$ReadOnlyArray<GraphQLNamedType>>,
    directives?: Maybe<$ReadOnlyArray<GraphQLDirective>>,
    extensions?: Maybe<$ReadOnly<GraphQLSchemaExtensions>>,
    astNode?: Maybe<SchemaDefinitionNode>,
    extensionASTNodes?: Maybe<$ReadOnlyArray<SchemaExtensionNode>>
  |} & GraphQLSchemaValidationOptions;

  /**
   * @internal
   */
  declare export type GraphQLSchemaNormalizedConfig = {|
    description: Maybe<string>,
    types: $ReadOnlyArray<GraphQLNamedType>,
    directives: $ReadOnlyArray<GraphQLDirective>,
    extensions: $ReadOnly<GraphQLSchemaExtensions>,
    extensionASTNodes: $ReadOnlyArray<SchemaExtensionNode>,
    assumeValid: boolean
  |} & GraphQLSchemaConfig;

  /**
   * These are all of the possible kinds of types.
   */
  declare export type GraphQLType =
    | GraphQLScalarType<>
    | GraphQLObjectType<>
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType
    | GraphQLInputObjectType
    | GraphQLList<GraphQLType>
    | GraphQLNonNull<
    | GraphQLScalarType<>
    | GraphQLObjectType<>
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType
    | GraphQLInputObjectType
    | GraphQLList<GraphQLType>
  >;
  declare export function isType(type: mixed): boolean;

  declare export function assertType(type: mixed): GraphQLType;

  /**
   * There are predicates for each kind of GraphQL type.
   */
  declare export function isScalarType(type: mixed): boolean;

  declare export function assertScalarType(type: mixed): GraphQLScalarType<>;

  declare export function isObjectType(type: mixed): boolean;

  declare export function assertObjectType(type: mixed): GraphQLObjectType<>;

  declare export function isInterfaceType(type: mixed): boolean;

  declare export function assertInterfaceType(type: mixed): GraphQLInterfaceType;

  declare export function isUnionType(type: mixed): boolean;

  declare export function assertUnionType(type: mixed): GraphQLUnionType;

  declare export function isEnumType(type: mixed): boolean;

  declare export function assertEnumType(type: mixed): GraphQLEnumType;

  declare export function isInputObjectType(type: mixed): boolean;

  declare export function assertInputObjectType(type: mixed): GraphQLInputObjectType;

  declare export function isListType(type: GraphQLInputType): boolean;

  declare export function isListType(type: GraphQLOutputType): boolean;

  declare export function isListType(type: mixed): boolean;

  declare export function assertListType(type: mixed): GraphQLList<GraphQLType>;

  declare export function isNonNullType(type: GraphQLInputType): boolean;

  declare export function isNonNullType(type: GraphQLOutputType): boolean;

  declare export function isNonNullType(type: mixed): boolean;

  declare export function assertNonNullType(type: mixed): GraphQLNonNull<GraphQLType>;

  /**
   * These types may be used as input types for arguments and directives.
   */
  declare export type GraphQLInputType =
    | GraphQLScalarType<>
    | GraphQLEnumType
    | GraphQLInputObjectType
    | GraphQLList<GraphQLInputType>
    | GraphQLNonNull<GraphQLScalarType<> | GraphQLEnumType | GraphQLInputObjectType | GraphQLList<GraphQLInputType>>;
  declare export function isInputType(type: mixed): boolean;

  declare export function assertInputType(type: mixed): GraphQLInputType;

  /**
   * These types may be used as output types as the result of fields.
   */
  declare export type GraphQLOutputType =
    | GraphQLScalarType<>
    | GraphQLObjectType<>
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType
    | GraphQLList<GraphQLOutputType>
    | GraphQLNonNull<
    | GraphQLScalarType<>
    | GraphQLObjectType<>
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType
    | GraphQLList<GraphQLOutputType>
  >;
  declare export function isOutputType(type: mixed): boolean;

  declare export function assertOutputType(type: mixed): GraphQLOutputType;

  /**
   * These types may describe types which may be leaf values.
   */
  declare export type GraphQLLeafType = GraphQLScalarType<> | GraphQLEnumType;
  declare export function isLeafType(type: mixed): boolean;

  declare export function assertLeafType(type: mixed): GraphQLLeafType;

  /**
   * These types may describe the parent context of a selection set.
   */
  declare export type GraphQLCompositeType = GraphQLObjectType<> | GraphQLInterfaceType | GraphQLUnionType;
  declare export function isCompositeType(type: mixed): boolean;

  declare export function assertCompositeType(type: mixed): GraphQLCompositeType;

  /**
   * These types may describe the parent context of a selection set.
   */
  declare export type GraphQLAbstractType = GraphQLInterfaceType | GraphQLUnionType;
  declare export function isAbstractType(type: mixed): boolean;

  declare export function assertAbstractType(type: mixed): GraphQLAbstractType;

  /**
   * List Type Wrapper
   *
   * A list is a wrapping type which points to another type.
   * Lists are often created within the context of defining the fields of
   * an object type.
   *
   * Example:
   *
   * ```ts
   * const PersonType = new GraphQLObjectType({
   *   name: 'Person',
   *   fields: () => ({
   *     parents: { type: new GraphQLList(PersonType) },
   *     children: { type: new GraphQLList(PersonType) },
   *   })
   * })
   * ```
   */
  declare export class GraphQLList<T: GraphQLType> {
    +ofType: T;
    constructor(ofType: T): this;
  [typeof Symbol.toStringTag]: string;
    toString(): string;
    toJSON(): string;
  }

  /**
   * Non-Null Type Wrapper
   *
   * A non-null is a wrapping type which points to another type.
   * Non-null types enforce that their values are never null and can ensure
   * an error is raised if this ever occurs during a request. It is useful for
   * fields which you can make a strong guarantee on non-nullability, for example
   * usually the id field of a database row will never be null.
   *
   * Example:
   *
   * ```ts
   * const RowType = new GraphQLObjectType({
   *   name: 'Row',
   *   fields: () => ({
   *     id: { type: new GraphQLNonNull(GraphQLString) },
   *   })
   * })
   * ```
   * Note: the enforcement of non-nullability occurs within the executor.
   */
  declare export class GraphQLNonNull<T: GraphQLNullableType> {
    +ofType: T;
    constructor(ofType: T): this;
  [typeof Symbol.toStringTag]: string;
    toString(): string;
    toJSON(): string;
  }

  /**
   * These types wrap and modify other types
   */
  declare export type GraphQLWrappingType = GraphQLList<GraphQLType> | GraphQLNonNull<GraphQLType>;
  declare export function isWrappingType(type: mixed): boolean;

  declare export function assertWrappingType(type: mixed): GraphQLWrappingType;

  /**
   * These types can all accept null as a value.
   */
  declare export type GraphQLNullableType =
    | GraphQLScalarType<>
    | GraphQLObjectType<>
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType
    | GraphQLInputObjectType
    | GraphQLList<GraphQLType>;
  declare export function isNullableType(type: mixed): boolean;

  declare export function assertNullableType(type: mixed): GraphQLNullableType;

  declare export function getNullableType(type: void | null): void;

  declare export function getNullableType<T: GraphQLNullableType>(type: T | GraphQLNonNull<T>): T;

  declare export function getNullableType(type: Maybe<GraphQLType>): GraphQLNullableType | void;

  /**
   * These named types do not include modifiers like List or NonNull.
   */
  declare export type GraphQLNamedType = GraphQLNamedInputType | GraphQLNamedOutputType;
  declare export type GraphQLNamedInputType = GraphQLScalarType<> | GraphQLEnumType | GraphQLInputObjectType;
  declare export type GraphQLNamedOutputType =
    | GraphQLScalarType<>
    | GraphQLObjectType<>
    | GraphQLInterfaceType
    | GraphQLUnionType
    | GraphQLEnumType;
  declare export function isNamedType(type: mixed): boolean;

  declare export function assertNamedType(type: mixed): GraphQLNamedType;

  declare export function getNamedType(type: void | null): void;

  declare export function getNamedType(type: GraphQLInputType): GraphQLNamedInputType;

  declare export function getNamedType(type: GraphQLOutputType): GraphQLNamedOutputType;

  declare export function getNamedType(type: GraphQLType): GraphQLNamedType;

  declare export function getNamedType(type: Maybe<GraphQLType>): GraphQLNamedType | void;

  /**
   * Used while defining GraphQL types to allow for circular references in
   * otherwise immutable type definitions.
   */
  declare export type ThunkReadonlyArray<T> = (() => $ReadOnlyArray<T>) | $ReadOnlyArray<T>;
  declare export type ThunkObjMap<T> = (() => ObjMap<T>) | ObjMap<T>;
  declare export function resolveReadonlyArrayThunk<T>(thunk: ThunkReadonlyArray<T>): $ReadOnlyArray<T>;

  declare export function resolveObjMapThunk<T>(thunk: ThunkObjMap<T>): ObjMap<T>;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLScalarTypeExtensions {
    [attributeName: string]: mixed;
  }

  /**
   * Scalar Type Definition
   *
   * The leaf values of any request and input values to arguments are
   * Scalars (or Enums) and are defined with a name and a series of functions
   * used to parse input from ast or variables and to ensure validity.
   *
   * If a type's serialize function returns `null` or does not return a value
   * (i.e. it returns `undefined`) then an error will be raised and a `null`
   * value will be returned in the response. It is always better to validate
   *
   * Example:
   *
   * ```ts
   * const OddType = new GraphQLScalarType({
   *   name: 'Odd',
   *   serialize(value) {
   *     if (!Number.isFinite(value)) {
   *       throw new Error(
   *         `Scalar "Odd" cannot represent "${value}" since it is not a finite number.`,
   *       );
   *     }
   *
   *     if (value % 2 === 0) {
   *       throw new Error(`Scalar "Odd" cannot represent "${value}" since it is even.`);
   *     }
   *     return value;
   *   }
   * });
   * ```
   */
  declare export class GraphQLScalarType<TInternal = mixed, TExternal = TInternal> {
    name: string;
    description: Maybe<string>;
    specifiedByURL: Maybe<string>;
    serialize: GraphQLScalarSerializer<TExternal>;
    parseValue: GraphQLScalarValueParser<TInternal>;
    parseLiteral: GraphQLScalarLiteralParser<TInternal>;
    extensions: $ReadOnly<GraphQLScalarTypeExtensions>;
    astNode: Maybe<ScalarTypeDefinitionNode>;
    extensionASTNodes: $ReadOnlyArray<ScalarTypeExtensionNode>;
    constructor(config: $ReadOnly<GraphQLScalarTypeConfig<TInternal, TExternal>>): this;
  [typeof Symbol.toStringTag]: string;
    toConfig(): GraphQLScalarTypeNormalizedConfig<TInternal, TExternal>;
    toString(): string;
    toJSON(): string;
  }
  declare export type GraphQLScalarSerializer<TExternal> = (outputValue: mixed) => TExternal;
  declare export type GraphQLScalarValueParser<TInternal> = (inputValue: mixed) => TInternal;
  declare export type GraphQLScalarLiteralParser<TInternal> = (
    valueNode: ValueNode,
    variables?: Maybe<ObjMap<mixed>>
  ) => TInternal;
  declare export interface GraphQLScalarTypeConfig<TInternal, TExternal> {
    name: string;
    description?: Maybe<string>;
    specifiedByURL?: Maybe<string>;

    /**
     * Serializes an internal value to include in a response.
     */
    serialize?: GraphQLScalarSerializer<TExternal>;

    /**
     * Parses an externally provided value to use as an input.
     */
    parseValue?: GraphQLScalarValueParser<TInternal>;

    /**
     * Parses an externally provided literal value to use as an input.
     */
    parseLiteral?: GraphQLScalarLiteralParser<TInternal>;
    extensions?: Maybe<$ReadOnly<GraphQLScalarTypeExtensions>>;
    astNode?: Maybe<ScalarTypeDefinitionNode>;
    extensionASTNodes?: Maybe<$ReadOnlyArray<ScalarTypeExtensionNode>>;
  }
  declare export type GraphQLScalarTypeNormalizedConfig<TInternal, TExternal> = {|
    serialize: GraphQLScalarSerializer<TExternal>,
    parseValue: GraphQLScalarValueParser<TInternal>,
    parseLiteral: GraphQLScalarLiteralParser<TInternal>,
    extensions: $ReadOnly<GraphQLScalarTypeExtensions>,
    extensionASTNodes: $ReadOnlyArray<ScalarTypeExtensionNode>
  |} & GraphQLScalarTypeConfig<TInternal, TExternal>;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   *
   * We've provided these template arguments because this is an open type and
   * you may find them useful.
   */
  declare export interface GraphQLObjectTypeExtensions<_TSource = any, _TContext = any> {
    [attributeName: string]: mixed;
  }

  /**
   * Object Type Definition
   *
   * Almost all of the GraphQL types you define will be object types. Object types
   * have a name, but most importantly describe their fields.
   *
   * Example:
   *
   * ```ts
   * const AddressType = new GraphQLObjectType({
   *   name: 'Address',
   *   fields: {
   *     street: { type: GraphQLString },
   *     number: { type: GraphQLInt },
   *     formatted: {
   *       type: GraphQLString,
   *       resolve(obj) {
   *         return obj.number + ' ' + obj.street
   *       }
   *     }
   *   }
   * });
   * ```
   *
   * When two types need to refer to each other, or a type needs to refer to
   * itself in a field, you can use a function expression (aka a closure or a
   * thunk) to supply the fields lazily.
   *
   * Example:
   *
   * ```ts
   * const PersonType = new GraphQLObjectType({
   *   name: 'Person',
   *   fields: () => ({
   *     name: { type: GraphQLString },
   *     bestFriend: { type: PersonType },
   *   })
   * });
   * ```
   */
  declare export class GraphQLObjectType<TSource = any, TContext = any> {
    name: string;
    description: Maybe<string>;
    isTypeOf: Maybe<GraphQLIsTypeOfFn<TSource, TContext>>;
    extensions: $ReadOnly<GraphQLObjectTypeExtensions<TSource, TContext>>;
    astNode: Maybe<ObjectTypeDefinitionNode>;
    extensionASTNodes: $ReadOnlyArray<ObjectTypeExtensionNode>;
    constructor(config: $ReadOnly<GraphQLObjectTypeConfig<TSource, TContext>>): this;
  [typeof Symbol.toStringTag]: string;
    getFields(): GraphQLFieldMap<TSource, TContext>;
    getInterfaces(): $ReadOnlyArray<GraphQLInterfaceType>;
    toConfig(): GraphQLObjectTypeNormalizedConfig<TSource, TContext>;
    toString(): string;
    toJSON(): string;
  }
  declare export interface GraphQLObjectTypeConfig<TSource, TContext> {
    name: string;
    description?: Maybe<string>;
    interfaces?: ThunkReadonlyArray<GraphQLInterfaceType>;
    fields: ThunkObjMap<GraphQLFieldConfig<TSource, TContext>>;
    isTypeOf?: Maybe<GraphQLIsTypeOfFn<TSource, TContext>>;
    extensions?: Maybe<$ReadOnly<GraphQLObjectTypeExtensions<TSource, TContext>>>;
    astNode?: Maybe<ObjectTypeDefinitionNode>;
    extensionASTNodes?: Maybe<$ReadOnlyArray<ObjectTypeExtensionNode>>;
  }
  declare export type GraphQLObjectTypeNormalizedConfig<TSource, TContext> = {|
    interfaces: $ReadOnlyArray<GraphQLInterfaceType>,
    fields: GraphQLFieldConfigMap<any, any>,
    extensions: $ReadOnly<GraphQLObjectTypeExtensions<TSource, TContext>>,
    extensionASTNodes: $ReadOnlyArray<ObjectTypeExtensionNode>
  |} & GraphQLObjectTypeConfig<any, any>;

  declare export type GraphQLTypeResolver<TSource, TContext> = (
    value: TSource,
    context: TContext,
    info: GraphQLResolveInfo,
    abstractType: GraphQLAbstractType
  ) => PromiseOrValue<string | void>;
  declare export type GraphQLIsTypeOfFn<TSource, TContext> = (
    source: TSource,
    context: TContext,
    info: GraphQLResolveInfo
  ) => PromiseOrValue<boolean>;
  declare export type GraphQLFieldResolver<TSource, TContext, TArgs = any, TResult = mixed> = (
    source: TSource,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
  ) => TResult;
  declare export interface GraphQLResolveInfo {
    +fieldName: string;
    +fieldNodes: $ReadOnlyArray<FieldNode>;
    +returnType: GraphQLOutputType;
    +parentType: GraphQLObjectType<>;
    +path: ResponsePath;
    +schema: GraphQLSchema;
    +fragments: ObjMap<FragmentDefinitionNode>;
    +rootValue: mixed;
    +operation: OperationDefinitionNode;
    +variableValues: {
      [variable: string]: mixed
    };
  }

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   *
   * We've provided these template arguments because this is an open type and
   * you may find them useful.
   */
  declare export interface GraphQLFieldExtensions<_TSource, _TContext, _TArgs = any> {
    [attributeName: string]: mixed;
  }
  declare export interface GraphQLFieldConfig<TSource, TContext, TArgs = any> {
    description?: Maybe<string>;
    type: GraphQLOutputType;
    args?: GraphQLFieldConfigArgumentMap;
    resolve?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    subscribe?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    deprecationReason?: Maybe<string>;
    extensions?: Maybe<$ReadOnly<GraphQLFieldExtensions<TSource, TContext, TArgs>>>;
    astNode?: Maybe<FieldDefinitionNode>;
  }
  declare export type GraphQLFieldConfigArgumentMap = ObjMap<GraphQLArgumentConfig>;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLArgumentExtensions {
    [attributeName: string]: mixed;
  }
  declare export interface GraphQLArgumentConfig {
    description?: Maybe<string>;
    type: GraphQLInputType;
    defaultValue?: mixed;
    deprecationReason?: Maybe<string>;
    extensions?: Maybe<$ReadOnly<GraphQLArgumentExtensions>>;
    astNode?: Maybe<InputValueDefinitionNode>;
  }
  declare export type GraphQLFieldConfigMap<TSource, TContext> = ObjMap<GraphQLFieldConfig<TSource, TContext>>;
  declare export interface GraphQLField<TSource, TContext, TArgs = any> {
    name: string;
    description: Maybe<string>;
    type: GraphQLOutputType;
    args: $ReadOnlyArray<GraphQLArgument>;
    resolve?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    subscribe?: GraphQLFieldResolver<TSource, TContext, TArgs>;
    deprecationReason: Maybe<string>;
    extensions: $ReadOnly<GraphQLFieldExtensions<TSource, TContext, TArgs>>;
    astNode: Maybe<FieldDefinitionNode>;
  }
  declare export interface GraphQLArgument {
    name: string;
    description: Maybe<string>;
    type: GraphQLInputType;
    defaultValue: mixed;
    deprecationReason: Maybe<string>;
    extensions: $ReadOnly<GraphQLArgumentExtensions>;
    astNode: Maybe<InputValueDefinitionNode>;
  }
  declare export function isRequiredArgument(arg: GraphQLArgument): boolean;

  declare export type GraphQLFieldMap<TSource, TContext> = ObjMap<GraphQLField<TSource, TContext>>;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLInterfaceTypeExtensions {
    [attributeName: string]: mixed;
  }

  /**
   * Interface Type Definition
   *
   * When a field can return one of a heterogeneous set of types, a Interface type
   * is used to describe what types are possible, what fields are in common across
   * all types, as well as a function to determine which type is actually used
   * when the field is resolved.
   *
   * Example:
   *
   * ```ts
   * const EntityType = new GraphQLInterfaceType({
   *   name: 'Entity',
   *   fields: {
   *     name: { type: GraphQLString }
   *   }
   * });
   * ```
   */
  declare export class GraphQLInterfaceType {
    name: string;
    description: Maybe<string>;
    resolveType: Maybe<GraphQLTypeResolver<any, any>>;
    extensions: $ReadOnly<GraphQLInterfaceTypeExtensions>;
    astNode: Maybe<InterfaceTypeDefinitionNode>;
    extensionASTNodes: $ReadOnlyArray<InterfaceTypeExtensionNode>;
    constructor(config: $ReadOnly<GraphQLInterfaceTypeConfig<any, any>>): this;
  [typeof Symbol.toStringTag]: string;
    getFields(): GraphQLFieldMap<any, any>;
    getInterfaces(): $ReadOnlyArray<GraphQLInterfaceType>;
    toConfig(): GraphQLInterfaceTypeNormalizedConfig;
    toString(): string;
    toJSON(): string;
  }
  declare export interface GraphQLInterfaceTypeConfig<TSource, TContext> {
    name: string;
    description?: Maybe<string>;
    interfaces?: ThunkReadonlyArray<GraphQLInterfaceType>;
    fields: ThunkObjMap<GraphQLFieldConfig<TSource, TContext>>;

    /**
     * Optionally provide a custom type resolver function. If one is not provided,
     * the default implementation will call `isTypeOf` on each implementing
     * Object type.
     */
    resolveType?: Maybe<GraphQLTypeResolver<TSource, TContext>>;
    extensions?: Maybe<$ReadOnly<GraphQLInterfaceTypeExtensions>>;
    astNode?: Maybe<InterfaceTypeDefinitionNode>;
    extensionASTNodes?: Maybe<$ReadOnlyArray<InterfaceTypeExtensionNode>>;
  }
  declare export type GraphQLInterfaceTypeNormalizedConfig = {|
    interfaces: $ReadOnlyArray<GraphQLInterfaceType>,
    fields: GraphQLFieldConfigMap<any, any>,
    extensions: $ReadOnly<GraphQLInterfaceTypeExtensions>,
    extensionASTNodes: $ReadOnlyArray<InterfaceTypeExtensionNode>
  |} & GraphQLInterfaceTypeConfig<any, any>;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLUnionTypeExtensions {
    [attributeName: string]: mixed;
  }

  /**
   * Union Type Definition
   *
   * When a field can return one of a heterogeneous set of types, a Union type
   * is used to describe what types are possible as well as providing a function
   * to determine which type is actually used when the field is resolved.
   *
   * Example:
   *
   * ```ts
   * const PetType = new GraphQLUnionType({
   *   name: 'Pet',
   *   types: [ DogType, CatType ],
   *   resolveType(value) {
   *     if (value instanceof Dog) {
   *       return DogType;
   *     }
   *     if (value instanceof Cat) {
   *       return CatType;
   *     }
   *   }
   * });
   * ```
   */
  declare export class GraphQLUnionType {
    name: string;
    description: Maybe<string>;
    resolveType: Maybe<GraphQLTypeResolver<any, any>>;
    extensions: $ReadOnly<GraphQLUnionTypeExtensions>;
    astNode: Maybe<UnionTypeDefinitionNode>;
    extensionASTNodes: $ReadOnlyArray<UnionTypeExtensionNode>;
    constructor(config: $ReadOnly<GraphQLUnionTypeConfig<any, any>>): this;
  [typeof Symbol.toStringTag]: string;
    getTypes(): $ReadOnlyArray<GraphQLObjectType<>>;
    toConfig(): GraphQLUnionTypeNormalizedConfig;
    toString(): string;
    toJSON(): string;
  }
  declare export interface GraphQLUnionTypeConfig<TSource, TContext> {
    name: string;
    description?: Maybe<string>;
    types: ThunkReadonlyArray<GraphQLObjectType<>>;

    /**
     * Optionally provide a custom type resolver function. If one is not provided,
     * the default implementation will call `isTypeOf` on each implementing
     * Object type.
     */
    resolveType?: Maybe<GraphQLTypeResolver<TSource, TContext>>;
    extensions?: Maybe<$ReadOnly<GraphQLUnionTypeExtensions>>;
    astNode?: Maybe<UnionTypeDefinitionNode>;
    extensionASTNodes?: Maybe<$ReadOnlyArray<UnionTypeExtensionNode>>;
  }
  declare export type GraphQLUnionTypeNormalizedConfig = {|
    types: $ReadOnlyArray<GraphQLObjectType<>>,
    extensions: $ReadOnly<GraphQLUnionTypeExtensions>,
    extensionASTNodes: $ReadOnlyArray<UnionTypeExtensionNode>
  |} & GraphQLUnionTypeConfig<any, any>;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLEnumTypeExtensions {
    [attributeName: string]: mixed;
  }

  /**
   * Enum Type Definition
   *
   * Some leaf values of requests and input values are Enums. GraphQL serializes
   * Enum values as strings, however internally Enums can be represented by any
   * kind of type, often integers.
   *
   * Example:
   *
   * ```ts
   * const RGBType = new GraphQLEnumType({
   *   name: 'RGB',
   *   values: {
   *     RED: { value: 0 },
   *     GREEN: { value: 1 },
   *     BLUE: { value: 2 }
   *   }
   * });
   * ```
   *
   * Note: If a value is not provided in a definition, the name of the enum value
   * will be used as its internal value.
   */
  declare export class GraphQLEnumType {
    name: string;
    description: Maybe<string>;
    extensions: $ReadOnly<GraphQLEnumTypeExtensions>;
    astNode: Maybe<EnumTypeDefinitionNode>;
    extensionASTNodes: $ReadOnlyArray<EnumTypeExtensionNode>;
    constructor(config: $ReadOnly<GraphQLEnumTypeConfig>): this;
  [typeof Symbol.toStringTag]: string;
    getValues(): $ReadOnlyArray<GraphQLEnumValue>;
    getValue(name: string): Maybe<GraphQLEnumValue>;
    serialize(outputValue: mixed): Maybe<string>;
    parseValue(inputValue: mixed): Maybe<any>;
    parseLiteral(valueNode: ValueNode, _variables: Maybe<ObjMap<mixed>>): Maybe<any>;
    toConfig(): GraphQLEnumTypeNormalizedConfig;
    toString(): string;
    toJSON(): string;
  }
  declare export interface GraphQLEnumTypeConfig {
    name: string;
    description?: Maybe<string>;
    values: GraphQLEnumValueConfigMap;
    extensions?: Maybe<$ReadOnly<GraphQLEnumTypeExtensions>>;
    astNode?: Maybe<EnumTypeDefinitionNode>;
    extensionASTNodes?: Maybe<$ReadOnlyArray<EnumTypeExtensionNode>>;
  }
  declare export type GraphQLEnumTypeNormalizedConfig = {|
    extensions: $ReadOnly<GraphQLEnumTypeExtensions>,
    extensionASTNodes: $ReadOnlyArray<EnumTypeExtensionNode>
  |} & GraphQLEnumTypeConfig;

  declare export type GraphQLEnumValueConfigMap = ObjMap<GraphQLEnumValueConfig>;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLEnumValueExtensions {
    [attributeName: string]: mixed;
  }
  declare export interface GraphQLEnumValueConfig {
    description?: Maybe<string>;
    value?: any;
    deprecationReason?: Maybe<string>;
    extensions?: Maybe<$ReadOnly<GraphQLEnumValueExtensions>>;
    astNode?: Maybe<EnumValueDefinitionNode>;
  }
  declare export interface GraphQLEnumValue {
    name: string;
    description: Maybe<string>;
    value: any;
    deprecationReason: Maybe<string>;
    extensions: $ReadOnly<GraphQLEnumValueExtensions>;
    astNode: Maybe<EnumValueDefinitionNode>;
  }

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLInputObjectTypeExtensions {
    [attributeName: string]: mixed;
  }

  /**
   * Input Object Type Definition
   *
   * An input object defines a structured collection of fields which may be
   * supplied to a field argument.
   *
   * Using `NonNull` will ensure that a value must be provided by the query
   *
   * Example:
   *
   * ```ts
   * const GeoPoint = new GraphQLInputObjectType({
   *   name: 'GeoPoint',
   *   fields: {
   *     lat: { type: new GraphQLNonNull(GraphQLFloat) },
   *     lon: { type: new GraphQLNonNull(GraphQLFloat) },
   *     alt: { type: GraphQLFloat, defaultValue: 0 },
   *   }
   * });
   * ```
   */
  declare export class GraphQLInputObjectType {
    name: string;
    description: Maybe<string>;
    extensions: $ReadOnly<GraphQLInputObjectTypeExtensions>;
    astNode: Maybe<InputObjectTypeDefinitionNode>;
    extensionASTNodes: $ReadOnlyArray<InputObjectTypeExtensionNode>;
    constructor(config: $ReadOnly<GraphQLInputObjectTypeConfig>): this;
  [typeof Symbol.toStringTag]: string;
    getFields(): GraphQLInputFieldMap;
    toConfig(): GraphQLInputObjectTypeNormalizedConfig;
    toString(): string;
    toJSON(): string;
  }
  declare export interface GraphQLInputObjectTypeConfig {
    name: string;
    description?: Maybe<string>;
    fields: ThunkObjMap<GraphQLInputFieldConfig>;
    extensions?: Maybe<$ReadOnly<GraphQLInputObjectTypeExtensions>>;
    astNode?: Maybe<InputObjectTypeDefinitionNode>;
    extensionASTNodes?: Maybe<$ReadOnlyArray<InputObjectTypeExtensionNode>>;
  }
  declare export type GraphQLInputObjectTypeNormalizedConfig = {|
    fields: GraphQLInputFieldConfigMap,
    extensions: $ReadOnly<GraphQLInputObjectTypeExtensions>,
    extensionASTNodes: $ReadOnlyArray<InputObjectTypeExtensionNode>
  |} & GraphQLInputObjectTypeConfig;

  /**
   * Custom extensions
   * @remarks Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */
  declare export interface GraphQLInputFieldExtensions {
    [attributeName: string]: mixed;
  }
  declare export interface GraphQLInputFieldConfig {
    description?: Maybe<string>;
    type: GraphQLInputType;
    defaultValue?: mixed;
    deprecationReason?: Maybe<string>;
    extensions?: Maybe<$ReadOnly<GraphQLInputFieldExtensions>>;
    astNode?: Maybe<InputValueDefinitionNode>;
  }
  declare export type GraphQLInputFieldConfigMap = ObjMap<GraphQLInputFieldConfig>;
  declare export interface GraphQLInputField {
    name: string;
    description: Maybe<string>;
    type: GraphQLInputType;
    defaultValue: mixed;
    deprecationReason: Maybe<string>;
    extensions: $ReadOnly<GraphQLInputFieldExtensions>;
    astNode: Maybe<InputValueDefinitionNode>;
  }
  declare export function isRequiredInputField(field: GraphQLInputField): boolean;

  declare export type GraphQLInputFieldMap = ObjMap<GraphQLInputField>;

  /**
   * The result of GraphQL execution.
   *
   *   - `errors` is included when any errors occurred as a non-empty array.
   *   - `data` is the result of a successful execution of the query.
   *   - `extensions` is reserved for adding non-standard properties.
   */
  declare export interface ExecutionResult<TData = ObjMap<mixed>, TExtensions = ObjMap<mixed>> {
    errors?: $ReadOnlyArray<GraphQLError>;
    data?: TData | null;
    extensions?: TExtensions;
  }
  declare export interface FormattedExecutionResult<TData = ObjMap<mixed>, TExtensions = ObjMap<mixed>> {
    errors?: $ReadOnlyArray<GraphQLFormattedError>;
    data?: TData | null;
    extensions?: TExtensions;
  }
  declare export type ExecutionArgs = {|
    schema: GraphQLSchema;
    document: DocumentNode;
    rootValue?: mixed;
    contextValue?: mixed;
    variableValues?: Maybe<{
      [variable: string]: mixed
    }>;
    operationName?: Maybe<string>;
    fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>;
    typeResolver?: Maybe<GraphQLTypeResolver<any, any>>;
    subscribeFieldResolver?: Maybe<GraphQLFieldResolver<any, any>>;
  |};

  /**
   * Implements the "Executing requests" section of the GraphQL specification.
   *
   * Returns either a synchronous ExecutionResult (if all encountered resolvers
   * are synchronous), or a Promise of an ExecutionResult that will eventually be
   * resolved and never rejected.
   *
   * If the arguments to this function do not result in a legal execution context,
   * a GraphQLError will be thrown immediately explaining the invalid input.
   */
  declare export function execute(args: ExecutionArgs): PromiseOrValue<ExecutionResult<>>;

  /**
   * Also implements the "Executing requests" section of the GraphQL specification.
   * However, it guarantees to complete synchronously (or throw an error) assuming
   * that all field resolvers are also synchronous.
   */
  declare export function executeSync(args: ExecutionArgs): ExecutionResult<>;

  /**
   * If a resolveType function is not given, then a default resolve behavior is
   * used which attempts two strategies:
   *
   * First, See if the provided value has a `__typename` field defined, if so, use
   * that value as name of the resolved type.
   *
   * Otherwise, test each possible type for the abstract type by calling
   * isTypeOf for the object being coerced, returning the first type that matches.
   */
  declare export var defaultTypeResolver: GraphQLTypeResolver<mixed, mixed>;

  /**
   * If a resolve function is not given, then a default resolve behavior is used
   * which takes the property of the source object of the same name as the field
   * and returns it as the result, or if it's a function, returns the result
   * of calling that function while passing along args and context value.
   */
  declare export var defaultFieldResolver: GraphQLFieldResolver<mixed, mixed>;

  /**
   * This is the primary entry point function for fulfilling GraphQL operations
   * by parsing, validating, and executing a GraphQL document along side a
   * GraphQL schema.
   *
   * More sophisticated GraphQL servers, such as those which persist queries,
   * may wish to separate the validation and execution phases to a static time
   * tooling step, and a server runtime step.
   *
   * Accepts either an object with named arguments, or individual arguments:
   *
   * schema:
   *    The GraphQL type system to use when validating and executing a query.
   * source:
   *    A GraphQL language formatted string representing the requested operation.
   * rootValue:
   *    The value provided as the first argument to resolver functions on the top
   *    level type (e.g. the query object type).
   * contextValue:
   *    The context value is provided as an argument to resolver functions after
   *    field arguments. It is used to pass shared information useful at any point
   *    during executing this query, for example the currently logged in user and
   *    connections to databases or other services.
   * variableValues:
   *    A mapping of variable name to runtime value to use for all variables
   *    defined in the requestString.
   * operationName:
   *    The name of the operation to use if requestString contains multiple
   *    possible operations. Can be omitted if requestString contains only
   *    one operation.
   * fieldResolver:
   *    A resolver function to use when one is not provided by the schema.
   *    If not provided, the default field resolver is used (which looks for a
   *    value or method on the source value with the field's name).
   * typeResolver:
   *    A type resolver function to use when none is provided by the schema.
   *    If not provided, the default type resolver is used (which looks for a
   *    `__typename` field or alternatively calls the `isTypeOf` method).
   */
  declare export interface GraphQLArgs {
    schema: GraphQLSchema;
    source: string | Source;
    rootValue?: mixed;
    contextValue?: mixed;
    variableValues?: Maybe<{
      [variable: string]: mixed
    }>;
    operationName?: Maybe<string>;
    fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>;
    typeResolver?: Maybe<GraphQLTypeResolver<any, any>>;
  }
  declare export function graphql(args: GraphQLArgs): Promise<ExecutionResult<>>;

  /**
   * The graphqlSync function also fulfills GraphQL operations by parsing,
   * validating, and executing a GraphQL document along side a GraphQL schema.
   * However, it guarantees to complete synchronously (or throw an error) assuming
   * that all field resolvers are also synchronous.
   */
  declare export function graphqlSync(args: GraphQLArgs): ExecutionResult<>;

  /**
   * Maximum possible Int value as per GraphQL Spec (32-bit signed integer).
   * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe up-to 2^53 - 1
   */
  declare export var GRAPHQL_MAX_INT: 2147483647;

  /**
   * Minimum possible Int value as per GraphQL Spec (32-bit signed integer).
   * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe starting at -(2^53 - 1)
   */
  declare export var GRAPHQL_MIN_INT: -2147483648;
  declare export var GraphQLInt: GraphQLScalarType<number, number>;
  declare export var GraphQLFloat: GraphQLScalarType<number, number>;
  declare export var GraphQLString: GraphQLScalarType<string, string>;
  declare export var GraphQLBoolean: GraphQLScalarType<boolean, boolean>;
  declare export var GraphQLID: GraphQLScalarType<string, string>;
  declare export var specifiedScalarTypes: $ReadOnlyArray<GraphQLScalarType<>>;
  declare export function isSpecifiedScalarType(type: GraphQLNamedType): boolean;

  declare export var __Schema: GraphQLObjectType<>;
  declare export var __Directive: GraphQLObjectType<>;
  declare export var __DirectiveLocation: GraphQLEnumType;
  declare export var __Type: GraphQLObjectType<>;
  declare export var __Field: GraphQLObjectType<>;
  declare export var __InputValue: GraphQLObjectType<>;
  declare export var __EnumValue: GraphQLObjectType<>;

  declare export var TypeKind: {|
    +SCALAR: "SCALAR", // "SCALAR"
    +OBJECT: "OBJECT", // "OBJECT"
    +INTERFACE: "INTERFACE", // "INTERFACE"
    +UNION: "UNION", // "UNION"
    +ENUM: "ENUM", // "ENUM"
    +INPUT_OBJECT: "INPUT_OBJECT", // "INPUT_OBJECT"
    +LIST: "LIST", // "LIST"
    +NON_NULL: "NON_NULL" // "NON_NULL"
  |};

  declare export var __TypeKind: GraphQLEnumType;

  /**
   * Note that these are GraphQLField and not GraphQLFieldConfig,
   * so the format for args is different.
   */
  declare export var SchemaMetaFieldDef: GraphQLField<mixed, mixed>;
  declare export var TypeMetaFieldDef: GraphQLField<mixed, mixed>;
  declare export var TypeNameMetaFieldDef: GraphQLField<mixed, mixed>;
  declare export var introspectionTypes: $ReadOnlyArray<GraphQLNamedType>;
  declare export function isIntrospectionType(type: GraphQLNamedType): boolean;

  /**
   * Implements the "Type Validation" sub-sections of the specification's
   * "Type System" section.
   *
   * Validation runs synchronously, returning an array of encountered errors, or
   * an empty array if no errors were encountered and the Schema is valid.
   */
  declare export function validateSchema(schema: GraphQLSchema): $ReadOnlyArray<GraphQLError>;

  /**
   * Utility function which asserts a schema is valid by throwing an error if
   * it is invalid.
   */
  declare export function assertValidSchema(schema: GraphQLSchema): void;

  /**
   * Upholds the spec rules about naming.
   */
  declare export function assertName(name: string): string;

  /**
   * Upholds the spec rules about naming enum values.
   * @internal
   */
  declare export function assertEnumValueName(name: string): string;

  /**
   * Render a helpful description of the location in the GraphQL Source document.
   */
  declare export function printLocation(location: Location): string;

  /**
   * Render a helpful description of the location in the GraphQL Source document.
   */
  declare export function printSourceLocation(source: Source, sourceLocation: SourceLocation): string;

  /**
   * Given a Source object, creates a Lexer for that source.
   * A Lexer is a stateful stream generator in that every time
   * it is advanced, it returns the next token in the Source. Assuming the
   * source lexes, the final Token emitted by the lexer will be of kind
   * EOF, after which the lexer will repeatedly return the same EOF token
   * whenever called.
   */
  declare export class Lexer {
    source: Source;

    /**
     * The previously focused non-ignored token.
     */
    lastToken: Token;

    /**
     * The currently focused non-ignored token.
     */
    token: Token;

    /**
     * The (1-indexed) line containing the current token.
     */
    line: number;

    /**
     * The character offset at which the current line begins.
     */
    lineStart: number;
    constructor(source: Source): this;
  [typeof Symbol.toStringTag]: string;

    /**
     * Advances the token stream to the next non-ignored token.
     */
    advance(): Token;

    /**
     * Looks ahead and returns the next non-ignored token, but does not change
     * the state of Lexer.
     */
    lookahead(): Token;
  }

  /**
   * Configuration options to control parser behavior
   */
  declare export type ParseOptions = {|
    /**
     * By default, the parser creates AST nodes that know the location
     * in the source that they correspond to. This configuration flag
     * disables that behavior for performance or testing.
     */
    noLocation?: boolean;

    /**
     * Parser CPU and memory usage is linear to the number of tokens in a document
     * however in extreme cases it becomes quadratic due to memory exhaustion.
     * Parsing happens before validation so even invalid queries can burn lots of
     * CPU time and memory.
     * To prevent this you can set a maximum number of tokens allowed within a document.
     */
    maxTokens?: number | void;

    /**
     * @deprecated will be removed in the v17.0.0
     *
     * If enabled, the parser will understand and parse variable definitions
     * contained in a fragment definition. They'll be represented in the
     * `variableDefinitions` field of the FragmentDefinitionNode.
     *
     * The syntax is identical to normal, query-defined variables. For example:
     *
     * ```graphql
     * fragment A($var: Boolean = false) on T {
     * ...
     * }
     * ```
     */
    allowLegacyFragmentVariables?: boolean;
  |};

  /**
   * Given a GraphQL source, parses it into a Document.
   * Throws GraphQLError if a syntax error is encountered.
   */
  declare export function parse(source: string | Source, options?: ParseOptions | void): DocumentNode;

  /**
   * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
   * that value.
   * Throws GraphQLError if a syntax error is encountered.
   *
   * This is useful within tools that operate upon GraphQL Values directly and
   * in isolation of complete GraphQL documents.
   *
   * Consider providing the results to the utility function: valueFromAST().
   */
  declare export function parseValue(source: string | Source, options?: ParseOptions | void): ValueNode;

  /**
   * Similar to parseValue(), but raises a parse error if it encounters a
   * variable. The return type will be a constant value.
   */
  declare export function parseConstValue(source: string | Source, options?: ParseOptions | void): ConstValueNode;

  /**
   * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
   * that type.
   * Throws GraphQLError if a syntax error is encountered.
   *
   * This is useful within tools that operate upon GraphQL Types directly and
   * in isolation of complete GraphQL documents.
   *
   * Consider providing the results to the utility function: typeFromAST().
   */
  declare export function parseType(source: string | Source, options?: ParseOptions | void): TypeNode;

  /**
   * Converts an AST into a string, using one set of reasonable
   * formatting rules.
   */
  declare export function print(ast: ASTNode): string;

  /**
   * A visitor is provided to visit, it contains the collection of
   * relevant functions to be called during the visitor's traversal.
   */
  declare export type ASTVisitor = EnterLeaveVisitor<ASTNode> | KindVisitor;
  declare export type KindVisitor = $ObjMapi<
    { [k: ASTNode]: any },
    <NodeT>(NodeT) => ASTVisitFn<NodeT> | EnterLeaveVisitor<NodeT>
  >;
  declare export interface EnterLeaveVisitor<TVisitedNode: ASTNode> {
    +enter?: ASTVisitFn<TVisitedNode>;
    +leave?: ASTVisitFn<TVisitedNode>;
  }

  /**
   * A visitor is comprised of visit functions, which are called on each node
   * during the visitor's traversal.
   */
  declare export type ASTVisitFn<TVisitedNode: ASTNode> = (
    node: TVisitedNode,
    key: string | number | void,
    parent: ASTNode | $ReadOnlyArray<ASTNode> | void,
    path: $ReadOnlyArray<string | number>,
    ancestors: $ReadOnlyArray<ASTNode | $ReadOnlyArray<ASTNode>>
  ) => any;

  /**
   * A reducer is comprised of reducer functions which convert AST nodes into
   * another form.
   */
  declare export type ASTReducer<R> = $ObjMapi<
    { [k: ASTNode]: any },
    <NodeT>(NodeT) => {|
      +enter?: ASTVisitFn<NodeT>,
      +leave: ASTReducerFn<NodeT, R>
    |}
  >;
  declare export type ASTReducerFn<TReducedNode: ASTNode, R> = (
    node: $ObjMapi<TReducedNode, <K>(K) => ReducedField<$ElementType<TReducedNode, K>, R>>,
    key: string | number | void,
    parent: ASTNode | $ReadOnlyArray<ASTNode> | void,
    path: $ReadOnlyArray<string | number>,
    ancestors: $ReadOnlyArray<ASTNode | $ReadOnlyArray<ASTNode>>
  ) => R;
  declare export type ReducedField<T, R> = $FlowGen$If<
    $FlowGen$Assignable<T, null | void>,
    T,
    $FlowGen$If<$FlowGen$Assignable<T, $ReadOnlyArray<any>>, $ReadOnlyArray<R>, R>
  >;

  /**
   * A KeyMap describes each the traversable properties of each kind of node.
   * @deprecated Please inline it. Will be removed in v17
   */
  declare export type ASTVisitorKeyMap = $ObjMapi<{ [k: ASTNode]: any }, <NodeT>(NodeT) => $ReadOnlyArray<$Keys<NodeT>>>;
  declare export var BREAK: mixed;

  /**
   * visit() will walk through an AST using a depth-first traversal, calling
   * the visitor's enter function at each node in the traversal, and calling the
   * leave function after visiting that node and all of its child nodes.
   *
   * By returning different values from the enter and leave functions, the
   * behavior of the visitor can be altered, including skipping over a sub-tree of
   * the AST (by returning false), editing the AST by returning a value or null
   * to remove the value, or to stop the whole traversal by returning BREAK.
   *
   * When using visit() to edit an AST, the original AST will not be modified, and
   * a new version of the AST with the changes applied will be returned from the
   * visit function.
   *
   * ```ts
   * const editedAST = visit(ast, {
   *   enter(node, key, parent, path, ancestors) {
   *     // @return
   *     //   undefined: no action
   *     //   false: skip visiting this node
   *     //   visitor.BREAK: stop visiting altogether
   *     //   null: delete this node
   *     //   any value: replace this node with the returned value
   *   },
   *   leave(node, key, parent, path, ancestors) {
   *     // @return
   *     //   undefined: no action
   *     //   false: no action
   *     //   visitor.BREAK: stop visiting altogether
   *     //   null: delete this node
   *     //   any value: replace this node with the returned value
   *   }
   * });
   * ```
   *
   * Alternatively to providing enter() and leave() functions, a visitor can
   * instead provide functions named the same as the kinds of AST nodes, or
   * enter/leave visitors at a named key, leading to three permutations of the
   * visitor API:
   *
   * 1) Named visitors triggered when entering a node of a specific kind.
   *
   * ```ts
   * visit(ast, {
   *   Kind(node) {
   *     // enter the "Kind" node
   *   }
   * })
   * ```
   *
   * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
   *
   * ```ts
   * visit(ast, {
   *   Kind: {
   *     enter(node) {
   *       // enter the "Kind" node
   *     }
   *     leave(node) {
   *       // leave the "Kind" node
   *     }
   *   }
   * })
   * ```
   *
   * 3) Generic visitors that trigger upon entering and leaving any node.
   *
   * ```ts
   * visit(ast, {
   *   enter(node) {
   *     // enter any node
   *   },
   *   leave(node) {
   *     // leave any node
   *   }
   * })
   * ```
   */
  declare export function visit<N: ASTNode>(root: N, visitor: ASTVisitor, visitorKeys?: ASTVisitorKeyMap): N;

  declare export function visit<R>(root: ASTNode, visitor: ASTReducer<R>, visitorKeys?: ASTVisitorKeyMap): R;

  /**
   * Creates a new visitor instance which delegates to many visitors to run in
   * parallel. Each visitor will be visited for each node before moving on.
   *
   * If a prior visitor edits a node, no following visitors will see that node.
   */
  declare export function visitInParallel(visitors: $ReadOnlyArray<ASTVisitor>): ASTVisitor;

  /**
   * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
   */
  declare export function getEnterLeaveForKind(visitor: ASTVisitor, kind: $Values<typeof Kind>): EnterLeaveVisitor<ASTNode>;

  /**
   * Given a visitor instance, if it is leaving or not, and a node kind, return
   * the function the visitor runtime should call.
   * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
   */
  declare export function getVisitFn(
    visitor: ASTVisitor,
    kind: $Values<typeof Kind>,
    isLeaving: boolean
  ): ASTVisitFn<ASTNode> | void;

  declare export function isDefinitionNode(node: ASTNode): boolean;

  declare export function isExecutableDefinitionNode(node: ASTNode): boolean;

  declare export function isSelectionNode(node: ASTNode): boolean;

  declare export function isValueNode(node: ASTNode): boolean;

  declare export function isConstValueNode(node: ASTNode): boolean;

  declare export function isTypeNode(node: ASTNode): boolean;

  declare export function isTypeSystemDefinitionNode(node: ASTNode): boolean;

  declare export function isTypeDefinitionNode(node: ASTNode): boolean;

  declare export function isTypeSystemExtensionNode(node: ASTNode): boolean;

  declare export function isTypeExtensionNode(node: ASTNode): boolean;

  /**
   * Implements the "Subscribe" algorithm described in the GraphQL specification.
   *
   * Returns a Promise which resolves to either an AsyncIterator (if successful)
   * or an ExecutionResult (error). The promise will be rejected if the schema or
   * other arguments to this function are invalid, or if the resolved event stream
   * is not an async iterable.
   *
   * If the client-provided arguments to this function do not result in a
   * compliant subscription, a GraphQL Response (ExecutionResult) with
   * descriptive errors and no data will be returned.
   *
   * If the source stream could not be created due to faulty subscription
   * resolver logic or underlying systems, the promise will resolve to a single
   * ExecutionResult containing `errors` and no `data`.
   *
   * If the operation succeeded, the promise resolves to an AsyncIterator, which
   * yields a stream of ExecutionResults representing the response stream.
   *
   * Accepts either an object with named arguments, or individual arguments.
   */
  declare export function subscribe(
    args: ExecutionArgs
  ): Promise<AsyncGenerator<ExecutionResult<>, void, void> | ExecutionResult<>>;

  /**
   * Implements the "CreateSourceEventStream" algorithm described in the
   * GraphQL specification, resolving the subscription source event stream.
   *
   * Returns a Promise which resolves to either an AsyncIterable (if successful)
   * or an ExecutionResult (error). The promise will be rejected if the schema or
   * other arguments to this function are invalid, or if the resolved event stream
   * is not an async iterable.
   *
   * If the client-provided arguments to this function do not result in a
   * compliant subscription, a GraphQL Response (ExecutionResult) with
   * descriptive errors and no data will be returned.
   *
   * If the the source stream could not be created due to faulty subscription
   * resolver logic or underlying systems, the promise will resolve to a single
   * ExecutionResult containing `errors` and no `data`.
   *
   * If the operation succeeded, the promise resolves to the AsyncIterable for the
   * event stream returned by the resolver.
   *
   * A Source Event Stream represents a sequence of events, each of which triggers
   * a GraphQL execution for that event.
   *
   * This may be useful when hosting the stateful subscription service in a
   * different process or machine than the stateless GraphQL execution engine,
   * or otherwise separating these two steps. For more on this, see the
   * "Supporting Subscriptions at Scale" information in the GraphQL specification.
   */
  declare export function createSourceEventStream(args: ExecutionArgs): Promise<AsyncIterable<mixed> | ExecutionResult<>>;

  /**
   * @deprecated will be removed in next major version in favor of named arguments
   */
  declare export function createSourceEventStream(
    schema: GraphQLSchema,
    document: DocumentNode,
    rootValue?: mixed,
    contextValue?: mixed,
    variableValues?: Maybe<{
      [variable: string]: mixed
    }>,
    operationName?: Maybe<string>,
    subscribeFieldResolver?: Maybe<GraphQLFieldResolver<any, any>>
  ): Promise<AsyncIterable<mixed> | ExecutionResult<>>;

  declare export type CoercedVariableValues =
    | {|
    errors: $ReadOnlyArray<GraphQLError>,
    coerced?: empty
  |}
    | {|
    coerced: {
      [variable: string]: mixed
    },
    errors?: empty
  |};

  /**
   * Prepares an object map of variableValues of the correct type based on the
   * provided variable definitions and arbitrary input. If the input cannot be
   * parsed to match the variable definitions, a GraphQLError will be thrown.
   *
   * Note: The returned value is a plain Object with a prototype, since it is
   * exposed to user code. Care should be taken to not pull values from the
   * Object prototype.
   */
  declare export function getVariableValues(
    schema: GraphQLSchema,
    varDefNodes: $ReadOnlyArray<VariableDefinitionNode>,
    inputs: {
      [variable: string]: mixed
    },
    options?: {|
      maxErrors?: number
    |}
  ): CoercedVariableValues;

  /**
   * Prepares an object map of argument values given a list of argument
   * definitions and list of argument AST nodes.
   *
   * Note: The returned value is a plain Object with a prototype, since it is
   * exposed to user code. Care should be taken to not pull values from the
   * Object prototype.
   */
  declare export function getArgumentValues(
    def: GraphQLField<mixed, mixed> | GraphQLDirective,
    node: FieldNode | DirectiveNode,
    variableValues?: Maybe<ObjMap<mixed>>
  ): {
    [argument: string]: mixed
  };

  /**
   * Prepares an object map of argument values given a directive definition
   * and a AST node which may contain directives. Optionally also accepts a map
   * of variable values.
   *
   * If the directive does not exist on the node, returns undefined.
   *
   * Note: The returned value is a plain Object with a prototype, since it is
   * exposed to user code. Care should be taken to not pull values from the
   * Object prototype.
   */
  declare export function getDirectiveValues(
    directiveDef: GraphQLDirective,
    node: {|
      +directives?: $ReadOnlyArray<DirectiveNode>
    |},
    variableValues?: Maybe<ObjMap<mixed>>
  ): void | {
    [argument: string]: mixed
  };

  /**
   * @deprecated use ExecutionArgs instead. Will be removed in v17
   *
   * ExecutionArgs has been broadened to include all properties within SubscriptionArgs.
   * The SubscriptionArgs type is retained for backwards compatibility.
   */
  declare export type SubscriptionArgs = ExecutionArgs;

  /**
   * TypeInfo is a utility class which, given a GraphQL schema, can keep track
   * of the current field and type definitions at any point in a GraphQL document
   * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
   */
  declare export class TypeInfo {
    constructor(schema: GraphQLSchema, initialType?: Maybe<GraphQLType>, getFieldDefFn?: GetFieldDefFn): this;
  [typeof Symbol.toStringTag]: string;
    getType(): Maybe<GraphQLOutputType>;
    getParentType(): Maybe<GraphQLCompositeType>;
    getInputType(): Maybe<GraphQLInputType>;
    getParentInputType(): Maybe<GraphQLInputType>;
    getFieldDef(): Maybe<GraphQLField<mixed, mixed>>;
    getDefaultValue(): Maybe<mixed>;
    getDirective(): Maybe<GraphQLDirective>;
    getArgument(): Maybe<GraphQLArgument>;
    getEnumValue(): Maybe<GraphQLEnumValue>;
    enter(node: ASTNode): void;
    leave(node: ASTNode): void;
  }
  declare export type GetFieldDefFn = (
    schema: GraphQLSchema,
    parentType: GraphQLType,
    fieldNode: FieldNode
  ) => Maybe<GraphQLField<mixed, mixed>>;

  /**
   * Creates a new visitor instance which maintains a provided TypeInfo instance
   * along with visiting visitor.
   */
  declare export function visitWithTypeInfo(typeInfo: TypeInfo, visitor: ASTVisitor): ASTVisitor;

  declare export type NodeWithSelectionSet = OperationDefinitionNode | FragmentDefinitionNode;
  declare export interface VariableUsage {
    +node: VariableNode;
    +type: Maybe<GraphQLInputType>;
    +defaultValue: Maybe<mixed>;
  }
  declare export class ASTValidationContext {
    constructor(ast: DocumentNode, onError: (error: GraphQLError) => void): this;
  [typeof Symbol.toStringTag]: string;
    reportError(error: GraphQLError): void;
    getDocument(): DocumentNode;
    getFragment(name: string): Maybe<FragmentDefinitionNode>;
    getFragmentSpreads(node: SelectionSetNode): $ReadOnlyArray<FragmentSpreadNode>;
    getRecursivelyReferencedFragments(operation: OperationDefinitionNode): $ReadOnlyArray<FragmentDefinitionNode>;
  }
  declare export class SDLValidationContext extends ASTValidationContext {
    constructor(ast: DocumentNode, schema: Maybe<GraphQLSchema>, onError: (error: GraphQLError) => void): this;
  [typeof Symbol.toStringTag]: string;
    getSchema(): Maybe<GraphQLSchema>;
  }
  declare export class ValidationContext extends ASTValidationContext {
    constructor(
      schema: GraphQLSchema,
      ast: DocumentNode,
      typeInfo: TypeInfo,
      onError: (error: GraphQLError) => void
    ): this;
  [typeof Symbol.toStringTag]: string;
    getSchema(): GraphQLSchema;
    getVariableUsages(node: NodeWithSelectionSet): $ReadOnlyArray<VariableUsage>;
    getRecursiveVariableUsages(operation: OperationDefinitionNode): $ReadOnlyArray<VariableUsage>;
    getType(): Maybe<GraphQLOutputType>;
    getParentType(): Maybe<GraphQLCompositeType>;
    getInputType(): Maybe<GraphQLInputType>;
    getParentInputType(): Maybe<GraphQLInputType>;
    getFieldDef(): Maybe<GraphQLField<mixed, mixed>>;
    getDirective(): Maybe<GraphQLDirective>;
    getArgument(): Maybe<GraphQLArgument>;
    getEnumValue(): Maybe<GraphQLEnumValue>;
  }
  declare export type ValidationRule = (context: ValidationContext) => ASTVisitor;

  /**
   * Implements the "Validation" section of the spec.
   *
   * Validation runs synchronously, returning an array of encountered errors, or
   * an empty array if no errors were encountered and the document is valid.
   *
   * A list of specific validation rules may be provided. If not provided, the
   * default list of rules defined by the GraphQL specification will be used.
   *
   * Each validation rules is a function which returns a visitor
   * (see the language/visitor API). Visitor methods are expected to return
   * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
   *
   * Validate will stop validation after a `maxErrors` limit has been reached.
   * Attackers can send pathologically invalid queries to induce a DoS attack,
   * so by default `maxErrors` set to 100 errors.
   *
   * Optionally a custom TypeInfo instance may be provided. If not provided, one
   * will be created from the provided schema.
   */
  declare export function validate(
    schema: GraphQLSchema,
    documentAST: DocumentNode,
    rules?: $ReadOnlyArray<ValidationRule>,
    options?: {|
      maxErrors?: number
    |},
    typeInfo?: TypeInfo
  ): $ReadOnlyArray<GraphQLError>;

  /**
   * This set includes all validation rules defined by the GraphQL spec.
   *
   * The order of the rules in this list has been adjusted to lead to the
   * most clear output when encountering multiple validation errors.
   */
  declare export var specifiedRules: $ReadOnlyArray<ValidationRule>;

  /**
   * Executable definitions
   *
   * A GraphQL document is only valid for execution if all definitions are either
   * operation or fragment definitions.
   *
   * See https://spec.graphql.org/draft/#sec-Executable-Definitions
   */
  declare export function ExecutableDefinitionsRule(context: ASTValidationContext): ASTVisitor;

  /**
   * Fields on correct type
   *
   * A GraphQL document is only valid if all fields selected are defined by the
   * parent type, or are an allowed meta field such as __typename.
   *
   * See https://spec.graphql.org/draft/#sec-Field-Selections
   */
  declare export function FieldsOnCorrectTypeRule(context: ValidationContext): ASTVisitor;

  /**
   * Fragments on composite type
   *
   * Fragments use a type condition to determine if they apply, since fragments
   * can only be spread into a composite type (object, interface, or union), the
   * type condition must also be a composite type.
   *
   * See https://spec.graphql.org/draft/#sec-Fragments-On-Composite-Types
   */
  declare export function FragmentsOnCompositeTypesRule(context: ValidationContext): ASTVisitor;

  /**
   * Known argument names
   *
   * A GraphQL field is only valid if all supplied arguments are defined by
   * that field.
   *
   * See https://spec.graphql.org/draft/#sec-Argument-Names
   * See https://spec.graphql.org/draft/#sec-Directives-Are-In-Valid-Locations
   */
  declare export function KnownArgumentNamesRule(context: ValidationContext): ASTVisitor;

  /**
   * Known directives
   *
   * A GraphQL document is only valid if all `@directives` are known by the
   * schema and legally positioned.
   *
   * See https://spec.graphql.org/draft/#sec-Directives-Are-Defined
   */
  declare export function KnownDirectivesRule(context: ValidationContext | SDLValidationContext): ASTVisitor;

  /**
   * Known fragment names
   *
   * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
   * to fragments defined in the same document.
   *
   * See https://spec.graphql.org/draft/#sec-Fragment-spread-target-defined
   */
  declare export function KnownFragmentNamesRule(context: ValidationContext): ASTVisitor;

  /**
   * Known type names
   *
   * A GraphQL document is only valid if referenced types (specifically
   * variable definitions and fragment conditions) are defined by the type schema.
   *
   * See https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence
   */
  declare export function KnownTypeNamesRule(context: ValidationContext | SDLValidationContext): ASTVisitor;

  /**
   * Lone anonymous operation
   *
   * A GraphQL document is only valid if when it contains an anonymous operation
   * (the query short-hand) that it contains only that one operation definition.
   *
   * See https://spec.graphql.org/draft/#sec-Lone-Anonymous-Operation
   */
  declare export function LoneAnonymousOperationRule(context: ASTValidationContext): ASTVisitor;

  /**
   * No fragment cycles
   *
   * The graph of fragment spreads must not form any cycles including spreading itself.
   * Otherwise an operation could infinitely spread or infinitely execute on cycles in the underlying data.
   *
   * See https://spec.graphql.org/draft/#sec-Fragment-spreads-must-not-form-cycles
   */
  declare export function NoFragmentCyclesRule(context: ASTValidationContext): ASTVisitor;

  /**
   * No undefined variables
   *
   * A GraphQL operation is only valid if all variables encountered, both directly
   * and via fragment spreads, are defined by that operation.
   *
   * See https://spec.graphql.org/draft/#sec-All-Variable-Uses-Defined
   */
  declare export function NoUndefinedVariablesRule(context: ValidationContext): ASTVisitor;

  /**
   * No unused fragments
   *
   * A GraphQL document is only valid if all fragment definitions are spread
   * within operations, or spread within other fragments spread within operations.
   *
   * See https://spec.graphql.org/draft/#sec-Fragments-Must-Be-Used
   */
  declare export function NoUnusedFragmentsRule(context: ASTValidationContext): ASTVisitor;

  /**
   * No unused variables
   *
   * A GraphQL operation is only valid if all variables defined by an operation
   * are used, either directly or within a spread fragment.
   *
   * See https://spec.graphql.org/draft/#sec-All-Variables-Used
   */
  declare export function NoUnusedVariablesRule(context: ValidationContext): ASTVisitor;

  /**
   * Overlapping fields can be merged
   *
   * A selection set is only valid if all fields (including spreading any
   * fragments) either correspond to distinct response names or can be merged
   * without ambiguity.
   *
   * See https://spec.graphql.org/draft/#sec-Field-Selection-Merging
   */
  declare export function OverlappingFieldsCanBeMergedRule(context: ValidationContext): ASTVisitor;

  /**
   * Possible fragment spread
   *
   * A fragment spread is only valid if the type condition could ever possibly
   * be true: if there is a non-empty intersection of the possible parent types,
   * and possible types which pass the type condition.
   */
  declare export function PossibleFragmentSpreadsRule(context: ValidationContext): ASTVisitor;

  /**
   * Provided required arguments
   *
   * A field or directive is only valid if all required (non-null without a
   * default value) field arguments have been provided.
   */
  declare export function ProvidedRequiredArgumentsRule(context: ValidationContext): ASTVisitor;

  /**
   * Scalar leafs
   *
   * A GraphQL document is valid only if all leaf fields (fields without
   * sub selections) are of scalar or enum types.
   */
  declare export function ScalarLeafsRule(context: ValidationContext): ASTVisitor;

  /**
   * Subscriptions must only include a non-introspection field.
   *
   * A GraphQL subscription is valid only if it contains a single root field and
   * that root field is not an introspection field.
   *
   * See https://spec.graphql.org/draft/#sec-Single-root-field
   */
  declare export function SingleFieldSubscriptionsRule(context: ValidationContext): ASTVisitor;

  /**
   * Unique argument names
   *
   * A GraphQL field or directive is only valid if all supplied arguments are
   * uniquely named.
   *
   * See https://spec.graphql.org/draft/#sec-Argument-Names
   */
  declare export function UniqueArgumentNamesRule(context: ASTValidationContext): ASTVisitor;

  /**
   * Unique directive names per location
   *
   * A GraphQL document is only valid if all non-repeatable directives at
   * a given location are uniquely named.
   *
   * See https://spec.graphql.org/draft/#sec-Directives-Are-Unique-Per-Location
   */
  declare export function UniqueDirectivesPerLocationRule(context: ValidationContext | SDLValidationContext): ASTVisitor;

  /**
   * Unique fragment names
   *
   * A GraphQL document is only valid if all defined fragments have unique names.
   *
   * See https://spec.graphql.org/draft/#sec-Fragment-Name-Uniqueness
   */
  declare export function UniqueFragmentNamesRule(context: ASTValidationContext): ASTVisitor;

  /**
   * Unique input field names
   *
   * A GraphQL input object value is only valid if all supplied fields are
   * uniquely named.
   *
   * See https://spec.graphql.org/draft/#sec-Input-Object-Field-Uniqueness
   */
  declare export function UniqueInputFieldNamesRule(context: ASTValidationContext): ASTVisitor;

  /**
   * Unique operation names
   *
   * A GraphQL document is only valid if all defined operations have unique names.
   *
   * See https://spec.graphql.org/draft/#sec-Operation-Name-Uniqueness
   */
  declare export function UniqueOperationNamesRule(context: ASTValidationContext): ASTVisitor;

  /**
   * Unique variable names
   *
   * A GraphQL operation is only valid if all its variables are uniquely named.
   */
  declare export function UniqueVariableNamesRule(context: ASTValidationContext): ASTVisitor;

  /**
   * Value literals of correct type
   *
   * A GraphQL document is only valid if all value literals are of the type
   * expected at their position.
   *
   * See https://spec.graphql.org/draft/#sec-Values-of-Correct-Type
   */
  declare export function ValuesOfCorrectTypeRule(context: ValidationContext): ASTVisitor;

  /**
   * Variables are input types
   *
   * A GraphQL operation is only valid if all the variables it defines are of
   * input types (scalar, enum, or input object).
   *
   * See https://spec.graphql.org/draft/#sec-Variables-Are-Input-Types
   */
  declare export function VariablesAreInputTypesRule(context: ValidationContext): ASTVisitor;

  /**
   * Variables in allowed position
   *
   * Variable usages must be compatible with the arguments they are passed to.
   *
   * See https://spec.graphql.org/draft/#sec-All-Variable-Usages-are-Allowed
   */
  declare export function VariablesInAllowedPositionRule(context: ValidationContext): ASTVisitor;

  /**
   * Lone Schema definition
   *
   * A GraphQL document is only valid if it contains only one schema definition.
   */
  declare export function LoneSchemaDefinitionRule(context: SDLValidationContext): ASTVisitor;

  /**
   * Unique operation types
   *
   * A GraphQL document is only valid if it has only one type per operation.
   */
  declare export function UniqueOperationTypesRule(context: SDLValidationContext): ASTVisitor;

  /**
   * Unique type names
   *
   * A GraphQL document is only valid if all defined types have unique names.
   */
  declare export function UniqueTypeNamesRule(context: SDLValidationContext): ASTVisitor;

  /**
   * Unique enum value names
   *
   * A GraphQL enum type is only valid if all its values are uniquely named.
   */
  declare export function UniqueEnumValueNamesRule(context: SDLValidationContext): ASTVisitor;

  /**
   * Unique field definition names
   *
   * A GraphQL complex type is only valid if all its fields are uniquely named.
   */
  declare export function UniqueFieldDefinitionNamesRule(context: SDLValidationContext): ASTVisitor;

  /**
   * Unique argument definition names
   *
   * A GraphQL Object or Interface type is only valid if all its fields have uniquely named arguments.
   * A GraphQL Directive is only valid if all its arguments are uniquely named.
   */
  declare export function UniqueArgumentDefinitionNamesRule(context: SDLValidationContext): ASTVisitor;

  /**
   * Unique directive names
   *
   * A GraphQL document is only valid if all defined directives have unique names.
   */
  declare export function UniqueDirectiveNamesRule(context: SDLValidationContext): ASTVisitor;

  /**
   * Possible type extension
   *
   * A type extension is only valid if the type is defined and has the same kind.
   */
  declare export function PossibleTypeExtensionsRule(context: SDLValidationContext): ASTVisitor;

  /**
   * No deprecated
   *
   * A GraphQL document is only valid if all selected fields and all used enum values have not been
   * deprecated.
   *
   * Note: This rule is optional and is not part of the Validation section of the GraphQL
   * Specification. The main purpose of this rule is detection of deprecated usages and not
   * necessarily to forbid their use when querying a service.
   */
  declare export function NoDeprecatedCustomRule(context: ValidationContext): ASTVisitor;

  /**
   * Prohibit introspection queries
   *
   * A GraphQL document is only valid if all fields selected are not fields that
   * return an introspection type.
   *
   * Note: This rule is optional and is not part of the Validation section of the
   * GraphQL Specification. This rule effectively disables introspection, which
   * does not reflect best practices and should only be done if absolutely necessary.
   */
  declare export function NoSchemaIntrospectionCustomRule(context: ValidationContext): ASTVisitor;

  /**
   * Produces a GraphQLError representing a syntax error, containing useful
   * descriptive information about the syntax error's position in the source.
   */
  declare export function syntaxError(source: Source, position: number, description: string): GraphQLError;

  /**
   * Given an arbitrary value, presumably thrown while attempting to execute a
   * GraphQL operation, produce a new GraphQLError aware of the location in the
   * document responsible for the original Error.
   */
  declare export function locatedError(
    rawOriginalError: mixed,
    nodes: ASTNode | $ReadOnlyArray<ASTNode> | void | null,
    path?: Maybe<$ReadOnlyArray<string | number>>
  ): GraphQLError;

  declare export interface IntrospectionOptions {
    /**
     * Whether to include descriptions in the introspection result.
     * Default: true
     */
    descriptions?: boolean;

    /**
     * Whether to include `specifiedByURL` in the introspection result.
     * Default: false
     */
    specifiedByUrl?: boolean;

    /**
     * Whether to include `isRepeatable` flag on directives.
     * Default: false
     */
    directiveIsRepeatable?: boolean;

    /**
     * Whether to include `description` field on schema.
     * Default: false
     */
    schemaDescription?: boolean;

    /**
     * Whether target GraphQL server support deprecation of input values.
     * Default: false
     */
    inputValueDeprecation?: boolean;
  }

  /**
   * Produce the GraphQL query recommended for a full schema introspection.
   * Accepts optional IntrospectionOptions.
   */
  declare export function getIntrospectionQuery(options?: IntrospectionOptions): string;

  declare export interface IntrospectionQuery {
    +__schema: IntrospectionSchema;
  }
  declare export interface IntrospectionSchema {
    +description?: Maybe<string>;
    +queryType: IntrospectionNamedTypeRef<IntrospectionObjectType>;
    +mutationType: Maybe<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
    +subscriptionType: Maybe<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
    +types: $ReadOnlyArray<IntrospectionType>;
    +directives: $ReadOnlyArray<IntrospectionDirective>;
  }
  declare export type IntrospectionType =
    | IntrospectionScalarType
    | IntrospectionObjectType
    | IntrospectionInterfaceType
    | IntrospectionUnionType
    | IntrospectionEnumType
    | IntrospectionInputObjectType;
  declare export type IntrospectionOutputType =
    | IntrospectionScalarType
    | IntrospectionObjectType
    | IntrospectionInterfaceType
    | IntrospectionUnionType
    | IntrospectionEnumType;
  declare export type IntrospectionInputType = IntrospectionScalarType | IntrospectionEnumType | IntrospectionInputObjectType;
  declare export interface IntrospectionScalarType {
    +kind: "SCALAR";
    +name: string;
    +description?: Maybe<string>;
    +specifiedByURL?: Maybe<string>;
  }
  declare export interface IntrospectionObjectType {
    +kind: "OBJECT";
    +name: string;
    +description?: Maybe<string>;
    +fields: $ReadOnlyArray<IntrospectionField>;
    +interfaces: $ReadOnlyArray<IntrospectionNamedTypeRef<IntrospectionInterfaceType>>;
  }
  declare export interface IntrospectionInterfaceType {
    +kind: "INTERFACE";
    +name: string;
    +description?: Maybe<string>;
    +fields: $ReadOnlyArray<IntrospectionField>;
    +interfaces: $ReadOnlyArray<IntrospectionNamedTypeRef<IntrospectionInterfaceType>>;
    +possibleTypes: $ReadOnlyArray<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
  }
  declare export interface IntrospectionUnionType {
    +kind: "UNION";
    +name: string;
    +description?: Maybe<string>;
    +possibleTypes: $ReadOnlyArray<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
  }
  declare export interface IntrospectionEnumType {
    +kind: "ENUM";
    +name: string;
    +description?: Maybe<string>;
    +enumValues: $ReadOnlyArray<IntrospectionEnumValue>;
  }
  declare export interface IntrospectionInputObjectType {
    +kind: "INPUT_OBJECT";
    +name: string;
    +description?: Maybe<string>;
    +inputFields: $ReadOnlyArray<IntrospectionInputValue>;
  }
  declare export interface IntrospectionListTypeRef<T: IntrospectionTypeRef = IntrospectionTypeRef> {
    +kind: "LIST";
    +ofType: T;
  }
  declare export interface IntrospectionNonNullTypeRef<T: IntrospectionTypeRef = IntrospectionTypeRef> {
    +kind: "NON_NULL";
    +ofType: T;
  }
  declare export type IntrospectionTypeRef =
    | IntrospectionNamedTypeRef<>
    | IntrospectionListTypeRef<>
    | IntrospectionNonNullTypeRef<IntrospectionNamedTypeRef<> | IntrospectionListTypeRef<>>;
  declare export type IntrospectionOutputTypeRef =
    | IntrospectionNamedTypeRef<IntrospectionOutputType>
    | IntrospectionListTypeRef<IntrospectionOutputTypeRef>
    | IntrospectionNonNullTypeRef<
    IntrospectionNamedTypeRef<IntrospectionOutputType> | IntrospectionListTypeRef<IntrospectionOutputTypeRef>
  >;
  declare export type IntrospectionInputTypeRef =
    | IntrospectionNamedTypeRef<IntrospectionInputType>
    | IntrospectionListTypeRef<IntrospectionInputTypeRef>
    | IntrospectionNonNullTypeRef<
    IntrospectionNamedTypeRef<IntrospectionInputType> | IntrospectionListTypeRef<IntrospectionInputTypeRef>
  >;
  declare export interface IntrospectionNamedTypeRef<T: IntrospectionType = IntrospectionType> {
    +kind: $PropertyType<T, "kind">;
    +name: string;
  }
  declare export interface IntrospectionField {
    +name: string;
    +description?: Maybe<string>;
    +args: $ReadOnlyArray<IntrospectionInputValue>;
    +type: IntrospectionOutputTypeRef;
    +isDeprecated: boolean;
    +deprecationReason: Maybe<string>;
  }
  declare export interface IntrospectionInputValue {
    +name: string;
    +description?: Maybe<string>;
    +type: IntrospectionInputTypeRef;
    +defaultValue: Maybe<string>;
    +isDeprecated?: boolean;
    +deprecationReason?: Maybe<string>;
  }
  declare export interface IntrospectionEnumValue {
    +name: string;
    +description?: Maybe<string>;
    +isDeprecated: boolean;
    +deprecationReason: Maybe<string>;
  }
  declare export interface IntrospectionDirective {
    +name: string;
    +description?: Maybe<string>;
    +isRepeatable?: boolean;
    +locations: $ReadOnlyArray<$Values<typeof DirectiveLocation>>;
    +args: $ReadOnlyArray<IntrospectionInputValue>;
  }

  /**
   * Returns an operation AST given a document AST and optionally an operation
   * name. If a name is not provided, an operation is only returned if only one is
   * provided in the document.
   */
  declare export function getOperationAST(
    documentAST: DocumentNode,
    operationName?: Maybe<string>
  ): Maybe<OperationDefinitionNode>;

  /**
   * Extracts the root type of the operation from the schema.
   * @deprecated Please use `GraphQLSchema.getRootType` instead. Will be removed in v17
   */
  declare export function getOperationRootType(
    schema: GraphQLSchema,
    operation: OperationDefinitionNode | OperationTypeDefinitionNode
  ): GraphQLObjectType<>;

  /**
   * Build an IntrospectionQuery from a GraphQLSchema
   *
   * IntrospectionQuery is useful for utilities that care about type and field
   * relationships, but do not need to traverse through those relationships.
   *
   * This is the inverse of buildClientSchema. The primary use case is outside
   * of the server context, for instance when doing schema comparisons.
   */
  declare export function introspectionFromSchema(schema: GraphQLSchema, options?: IntrospectionOptions): IntrospectionQuery;

  /**
   * Build a GraphQLSchema for use by client tools.
   *
   * Given the result of a client running the introspection query, creates and
   * returns a GraphQLSchema instance which can be then used with all graphql-js
   * tools, but cannot be used to execute a query, as introspection does not
   * represent the "resolver", "parse" or "serialize" functions or any other
   * server-internal mechanisms.
   *
   * This function expects a complete introspection result. Don't forget to check
   * the "errors" field of a server response before calling this function.
   */
  declare export function buildClientSchema(
    introspection: IntrospectionQuery,
    options?: GraphQLSchemaValidationOptions
  ): GraphQLSchema;

  declare export type BuildSchemaOptions = {|
    /**
     * Set to true to assume the SDL is valid.
     *
     * Default: false
     */
    assumeValidSDL?: boolean
  |} & GraphQLSchemaValidationOptions;

  /**
   * This takes the ast of a schema document produced by the parse function in
   * src/language/parser.js.
   *
   * If no schema definition is provided, then it will look for types named Query,
   * Mutation and Subscription.
   *
   * Given that AST it constructs a GraphQLSchema. The resulting schema
   * has no resolve methods, so execution will use default resolvers.
   */
  declare export function buildASTSchema(documentAST: DocumentNode, options?: BuildSchemaOptions): GraphQLSchema;

  /**
   * A helper function to build a GraphQLSchema directly from a source
   * document.
   */
  declare export function buildSchema(
    source: string | Source,
    options?: {| ...BuildSchemaOptions, ...ParseOptions |}
  ): GraphQLSchema;

  declare export type Options = {|
    /**
     * Set to true to assume the SDL is valid.
     *
     * Default: false
     */
    assumeValidSDL?: boolean
  |} & GraphQLSchemaValidationOptions;

  /**
   * Produces a new schema given an existing schema and a document which may
   * contain GraphQL type extensions and definitions. The original schema will
   * remain unaltered.
   *
   * Because a schema represents a graph of references, a schema cannot be
   * extended without effectively making an entire copy. We do not know until it's
   * too late if subgraphs remain unchanged.
   *
   * This algorithm copies the provided schema, applying extensions while
   * producing the copy. The original schema remains unaltered.
   */
  declare export function extendSchema(schema: GraphQLSchema, documentAST: DocumentNode, options?: Options): GraphQLSchema;

  /**
   * Sort GraphQLSchema.
   *
   * This function returns a sorted copy of the given GraphQLSchema.
   */
  declare export function lexicographicSortSchema(schema: GraphQLSchema): GraphQLSchema;

  declare export function printSchema(schema: GraphQLSchema): string;

  declare export function printIntrospectionSchema(schema: GraphQLSchema): string;

  declare export function printType(type: GraphQLNamedType): string;

  /**
   * Given a Schema and an AST node describing a type, return a GraphQLType
   * definition which applies to that type. For example, if provided the parsed
   * AST node for `[User]`, a GraphQLList instance will be returned, containing
   * the type called "User" found in the schema. If a type called "User" is not
   * found in the schema, then undefined will be returned.
   */
  declare export function typeFromAST(schema: GraphQLSchema, typeNode: NamedTypeNode): GraphQLNamedType | void;

  declare export function typeFromAST(schema: GraphQLSchema, typeNode: ListTypeNode): GraphQLList<any> | void;

  declare export function typeFromAST(schema: GraphQLSchema, typeNode: NonNullTypeNode): GraphQLNonNull<any> | void;

  declare export function typeFromAST(schema: GraphQLSchema, typeNode: TypeNode): GraphQLType | void;

  /**
   * Produces a JavaScript value given a GraphQL Value AST.
   *
   * A GraphQL type must be provided, which will be used to interpret different
   * GraphQL Value literals.
   *
   * Returns `undefined` when the value could not be validly coerced according to
   * the provided type.
   *
   * | GraphQL Value        | JSON Value    |
   * | -------------------- | ------------- |
   * | Input Object         | Object        |
   * | List                 | Array         |
   * | Boolean              | Boolean       |
   * | String               | String        |
   * | Int / Float          | Number        |
   * | Enum Value           | Unknown       |
   * | NullValue            | null          |
   */
  declare export function valueFromAST(
    valueNode: Maybe<ValueNode>,
    type: GraphQLInputType,
    variables?: Maybe<ObjMap<mixed>>
  ): mixed;

  /**
   * Produces a JavaScript value given a GraphQL Value AST.
   *
   * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
   * will reflect the provided GraphQL value AST.
   *
   * | GraphQL Value        | JavaScript Value |
   * | -------------------- | ---------------- |
   * | Input Object         | Object           |
   * | List                 | Array            |
   * | Boolean              | Boolean          |
   * | String / Enum        | String           |
   * | Int / Float          | Number           |
   * | Null                 | null             |
   */
  declare export function valueFromASTUntyped(valueNode: ValueNode, variables?: Maybe<ObjMap<mixed>>): mixed;

  /**
   * Produces a GraphQL Value AST given a JavaScript object.
   * Function will match JavaScript/JSON values to GraphQL AST schema format
   * by using suggested GraphQLInputType. For example:
   *
   *     astFromValue("value", GraphQLString)
   *
   * A GraphQL type must be provided, which will be used to interpret different
   * JavaScript values.
   *
   * | JSON Value    | GraphQL Value        |
   * | ------------- | -------------------- |
   * | Object        | Input Object         |
   * | Array         | List                 |
   * | Boolean       | Boolean              |
   * | String        | String / Enum Value  |
   * | Number        | Int / Float          |
   * | Unknown       | Enum Value           |
   * | null          | NullValue            |
   */
  declare export function astFromValue(value: mixed, type: GraphQLInputType): Maybe<ValueNode>;

  declare export type OnErrorCB = (path: $ReadOnlyArray<string | number>, invalidValue: mixed, error: GraphQLError) => void;

  /**
   * Coerces a JavaScript value given a GraphQL Input Type.
   */
  declare export function coerceInputValue(inputValue: mixed, type: GraphQLInputType, onError?: OnErrorCB): mixed;

  /**
   * Provided a collection of ASTs, presumably each from different files,
   * concatenate the ASTs together into batched AST, useful for validating many
   * GraphQL source files which together represent one conceptual application.
   */
  declare export function concatAST(documents: $ReadOnlyArray<DocumentNode>): DocumentNode;

  /**
   * separateOperations accepts a single AST document which may contain many
   * operations and fragments and returns a collection of AST documents each of
   * which contains a single operation as well the fragment definitions it
   * refers to.
   */
  declare export function separateOperations(documentAST: DocumentNode): ObjMap<DocumentNode>;

  /**
   * Strips characters that are not significant to the validity or execution
   * of a GraphQL document:
   *   - UnicodeBOM
   *   - WhiteSpace
   *   - LineTerminator
   *   - Comment
   *   - Comma
   *   - BlockString indentation
   *
   * Note: It is required to have a delimiter character between neighboring
   * non-punctuator tokens and this function always uses single space as delimiter.
   *
   * It is guaranteed that both input and output documents if parsed would result
   * in the exact same AST except for nodes location.
   *
   * Warning: It is guaranteed that this function will always produce stable results.
   * However, it's not guaranteed that it will stay the same between different
   * releases due to bugfixes or changes in the GraphQL specification.
   *
   * Query example:
   *
   * ```graphql
   * query SomeQuery($foo: String!, $bar: String) {
   *   someField(foo: $foo, bar: $bar) {
   *     a
   *     b {
   *       c
   *       d
   *     }
   *   }
   * }
   * ```
   *
   * Becomes:
   *
   * ```graphql
   * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
   * ```
   *
   * SDL example:
   *
   * ```graphql
   * """
   * Type description
   * """
   * type Foo {
   *   """
   *   Field description
   *   """
   *   bar: String
   * }
   * ```
   *
   * Becomes:
   *
   * ```graphql
   * """Type description""" type Foo{"""Field description""" bar:String}
   * ```
   */
  declare export function stripIgnoredCharacters(source: string | Source): string;

  /**
   * Provided two types, return true if the types are equal (invariant).
   */
  declare export function isEqualType(typeA: GraphQLType, typeB: GraphQLType): boolean;

  /**
   * Provided a type and a super type, return true if the first type is either
   * equal or a subset of the second super type (covariant).
   */
  declare export function isTypeSubTypeOf(schema: GraphQLSchema, maybeSubType: GraphQLType, superType: GraphQLType): boolean;

  /**
   * Provided two composite types, determine if they "overlap". Two composite
   * types overlap when the Sets of possible concrete types for each intersect.
   *
   * This is often used to determine if a fragment of a given type could possibly
   * be visited in a context of another type.
   *
   * This function is commutative.
   */
  declare export function doTypesOverlap(
    schema: GraphQLSchema,
    typeA: GraphQLCompositeType,
    typeB: GraphQLCompositeType
  ): boolean;

  /**
   * Upholds the spec rules about naming.
   * @deprecated Please use `assertName` instead. Will be removed in v17
   */
  declare export function assertValidName(name: string): string;

  /**
   * Returns an Error if a name is invalid.
   * @deprecated Please use `assertName` instead. Will be removed in v17
   */
  declare export function isValidNameError(name: string): GraphQLError | void;

  declare export var BreakingChangeType: {|
    +TYPE_REMOVED: "TYPE_REMOVED", // "TYPE_REMOVED"
    +TYPE_CHANGED_KIND: "TYPE_CHANGED_KIND", // "TYPE_CHANGED_KIND"
    +TYPE_REMOVED_FROM_UNION: "TYPE_REMOVED_FROM_UNION", // "TYPE_REMOVED_FROM_UNION"
    +VALUE_REMOVED_FROM_ENUM: "VALUE_REMOVED_FROM_ENUM", // "VALUE_REMOVED_FROM_ENUM"
    +REQUIRED_INPUT_FIELD_ADDED: "REQUIRED_INPUT_FIELD_ADDED", // "REQUIRED_INPUT_FIELD_ADDED"
    +IMPLEMENTED_INTERFACE_REMOVED: "IMPLEMENTED_INTERFACE_REMOVED", // "IMPLEMENTED_INTERFACE_REMOVED"
    +FIELD_REMOVED: "FIELD_REMOVED", // "FIELD_REMOVED"
    +FIELD_CHANGED_KIND: "FIELD_CHANGED_KIND", // "FIELD_CHANGED_KIND"
    +REQUIRED_ARG_ADDED: "REQUIRED_ARG_ADDED", // "REQUIRED_ARG_ADDED"
    +ARG_REMOVED: "ARG_REMOVED", // "ARG_REMOVED"
    +ARG_CHANGED_KIND: "ARG_CHANGED_KIND", // "ARG_CHANGED_KIND"
    +DIRECTIVE_REMOVED: "DIRECTIVE_REMOVED", // "DIRECTIVE_REMOVED"
    +DIRECTIVE_ARG_REMOVED: "DIRECTIVE_ARG_REMOVED", // "DIRECTIVE_ARG_REMOVED"
    +REQUIRED_DIRECTIVE_ARG_ADDED: "REQUIRED_DIRECTIVE_ARG_ADDED", // "REQUIRED_DIRECTIVE_ARG_ADDED"
    +DIRECTIVE_REPEATABLE_REMOVED: "DIRECTIVE_REPEATABLE_REMOVED", // "DIRECTIVE_REPEATABLE_REMOVED"
    +DIRECTIVE_LOCATION_REMOVED: "DIRECTIVE_LOCATION_REMOVED" // "DIRECTIVE_LOCATION_REMOVED"
  |};

  declare export var DangerousChangeType: {|
    +VALUE_ADDED_TO_ENUM: "VALUE_ADDED_TO_ENUM", // "VALUE_ADDED_TO_ENUM"
    +TYPE_ADDED_TO_UNION: "TYPE_ADDED_TO_UNION", // "TYPE_ADDED_TO_UNION"
    +OPTIONAL_INPUT_FIELD_ADDED: "OPTIONAL_INPUT_FIELD_ADDED", // "OPTIONAL_INPUT_FIELD_ADDED"
    +OPTIONAL_ARG_ADDED: "OPTIONAL_ARG_ADDED", // "OPTIONAL_ARG_ADDED"
    +IMPLEMENTED_INTERFACE_ADDED: "IMPLEMENTED_INTERFACE_ADDED", // "IMPLEMENTED_INTERFACE_ADDED"
    +ARG_DEFAULT_VALUE_CHANGE: "ARG_DEFAULT_VALUE_CHANGE" // "ARG_DEFAULT_VALUE_CHANGE"
  |};

  declare export interface BreakingChange {
    type: $Values<typeof BreakingChangeType>;
    description: string;
  }
  declare export interface DangerousChange {
    type: $Values<typeof DangerousChangeType>;
    description: string;
  }

  /**
   * Given two schemas, returns an Array containing descriptions of all the types
   * of breaking changes covered by the other functions down below.
   */
  declare export function findBreakingChanges(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<BreakingChange>;

  /**
   * Given two schemas, returns an Array containing descriptions of all the types
   * of potentially dangerous changes covered by the other functions down below.
   */
  declare export function findDangerousChanges(oldSchema: GraphQLSchema, newSchema: GraphQLSchema): Array<DangerousChange>;

  /**
   * Wrapper type that contains DocumentNode and types that can be deduced from it.
   */
  declare export type TypedQueryDocumentNode<
    TResponseData = {
      [key: string]: any
    },
    TRequestVariables = {
      [key: string]: any
    }
  > = {|
    +definitions: $ReadOnlyArray<ExecutableDefinitionNode>,

    /**
     * This type is used to ensure that the variables you pass in to the query are assignable to Variables
     * and that the Result is assignable to whatever you pass your result to. The method is never actually
     * implemented, but the type is valid because we list it as optional
     */
    __ensureTypesOfVariablesAndResultMatching?: (variables: TRequestVariables) => TResponseData
  |} & DocumentNode;
}

// @flow
/**
 * Flowtype definitions for flow
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type ESTree$FlowTypeAnnotation = {} & Node


declare type ESTree$FlowBaseTypeAnnotation = {} & ESTree$FlowTypeAnnotation


declare type ESTree$FlowLiteralTypeAnnotation = {} & ESTree$FlowTypeAnnotation & Literal


declare type ESTree$FlowDeclaration = {} & Declaration


declare type ESTree$AnyTypeAnnotation = {} & ESTree$FlowBaseTypeAnnotation


declare type ESTree$ArrayTypeAnnotation = {
    elementType: ESTree$FlowTypeAnnotation
} & ESTree$FlowTypeAnnotation


declare type ESTree$BooleanLiteralTypeAnnotation = {} & ESTree$FlowLiteralTypeAnnotation


declare type ESTree$BooleanTypeAnnotation = {} & ESTree$FlowBaseTypeAnnotation


declare type ESTree$ClassImplements = {
    id: Identifier,
    typeParameters?: ESTree$TypeParameterInstantiation
} & Node


declare interface ESTree$ClassProperty {
    key: Expression,
        value?: Expression,
        typeAnnotation?: ESTree$TypeAnnotation,
        computed: boolean,
        static: boolean
}

declare type ESTree$DeclareClass = {
    id: Identifier,
    typeParameters?: ESTree$TypeParameterDeclaration,
    body: ESTree$ObjectTypeAnnotation,
    extends: Array<ESTree$InterfaceExtends >
} & ESTree$FlowDeclaration


declare type ESTree$DeclareFunction = {
    id: Identifier
} & ESTree$FlowDeclaration


declare type ESTree$DeclareModule = {
    id: Literal | Identifier,
    body: BlockStatement
} & ESTree$FlowDeclaration


declare type ESTree$DeclareVariable = {
    id: Identifier
} & ESTree$FlowDeclaration


declare type ESTree$FunctionTypeAnnotation = {
    params: Array<ESTree$FunctionTypeParam>,
    returnType: ESTree$FlowTypeAnnotation,
    rest?: ESTree$FunctionTypeParam,
    typeParameters?: ESTree$TypeParameterDeclaration
} & ESTree$FlowTypeAnnotation


declare interface ESTree$FunctionTypeParam {
    name: Identifier,
        typeAnnotation: ESTree$FlowTypeAnnotation,
        optional: boolean
}

declare type ESTree$GenericTypeAnnotation = {
    id: Identifier | ESTree$QualifiedTypeIdentifier,
    typeParameters?: ESTree$TypeParameterInstantiation
} & ESTree$FlowTypeAnnotation


declare type ESTree$InterfaceExtends = {
    id: Identifier | ESTree$QualifiedTypeIdentifier,
    typeParameters?: ESTree$TypeParameterInstantiation
} & Node


declare type ESTree$InterfaceDeclaration = {
    id: Identifier,
    typeParameters?: ESTree$TypeParameterDeclaration,
    extends: Array<ESTree$InterfaceExtends>,
    body: ESTree$ObjectTypeAnnotation
} & ESTree$FlowDeclaration


declare type ESTree$IntersectionTypeAnnotation = {
    types: Array<ESTree$FlowTypeAnnotation >
} & ESTree$FlowTypeAnnotation


declare type ESTree$MixedTypeAnnotation = {} & ESTree$FlowBaseTypeAnnotation


declare type ESTree$NullableTypeAnnotation = {
    typeAnnotation: ESTree$TypeAnnotation
} & ESTree$FlowTypeAnnotation


declare type ESTree$NumberLiteralTypeAnnotation = {} & ESTree$FlowLiteralTypeAnnotation


declare type ESTree$NumberTypeAnnotation = {} & ESTree$FlowBaseTypeAnnotation


declare type ESTree$StringLiteralTypeAnnotation = {} & ESTree$FlowLiteralTypeAnnotation


declare type ESTree$StringTypeAnnotation = {} & ESTree$FlowBaseTypeAnnotation


declare type ESTree$TupleTypeAnnotation = {
    types: Array<ESTree$FlowTypeAnnotation >
} & ESTree$FlowTypeAnnotation


declare type ESTree$TypeofTypeAnnotation = {
    argument: ESTree$FlowTypeAnnotation
} & ESTree$FlowTypeAnnotation


declare type ESTree$TypeAlias = {
    id: Identifier,
    typeParameters?: ESTree$TypeParameterDeclaration,
    right: ESTree$FlowTypeAnnotation
} & ESTree$FlowDeclaration


declare type ESTree$TypeAnnotation = {
    typeAnnotation: ESTree$FlowTypeAnnotation
} & Node


declare type ESTree$TypeCastExpression = {
    expression: Expression,
    typeAnnotation: ESTree$TypeAnnotation
} & Expression


declare type ESTree$TypeParameterDeclaration = {
    params: Array<Identifier >
} & Node


declare type ESTree$TypeParameterInstantiation = {
    params: Array<ESTree$FlowTypeAnnotation >
} & Node


declare type ESTree$ObjectTypeAnnotation = {
    properties: Array<ESTree$ObjectTypeProperty>,
    indexers: Array<ESTree$ObjectTypeIndexer>,
    callProperties: Array<ESTree$ObjectTypeCallProperty >
} & ESTree$FlowTypeAnnotation


declare type ESTree$ObjectTypeCallProperty = {
    value: ESTree$FunctionTypeAnnotation,
    static: boolean
} & Node


declare type ESTree$ObjectTypeIndexer = {
    id: Identifier,
    key: ESTree$FlowTypeAnnotation,
    value: ESTree$FlowTypeAnnotation,
    static: boolean
} & Node


declare type ESTree$ObjectTypeProperty = {
    key: Expression,
    value: ESTree$FlowTypeAnnotation,
    optional: boolean,
    static: boolean
} & Node


declare type ESTree$QualifiedTypeIdentifier = {
    qualification: Identifier | ESTree$QualifiedTypeIdentifier,
    id: Identifier
} & Node


declare type ESTree$UnionTypeAnnotation = {
    types: Array<ESTree$FlowTypeAnnotation >
} & ESTree$FlowTypeAnnotation


declare type ESTree$VoidTypeAnnotation = {} & ESTree$FlowBaseTypeAnnotation
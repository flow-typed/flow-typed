

declare module 'flow' {
					
}

declare module 'npm$namespace$ESTree' {
		declare interface FlowTypeAnnotation {
		
	}

	declare interface FlowBaseTypeAnnotation {
		
	}

	declare interface FlowLiteralTypeAnnotation {
		
	}

	declare interface FlowDeclaration {
		
	}

	declare interface AnyTypeAnnotation {
		
	}

	declare interface ArrayTypeAnnotation {
		elementType: FlowTypeAnnotation
	}

	declare interface BooleanLiteralTypeAnnotation {
		
	}

	declare interface BooleanTypeAnnotation {
		
	}

	declare interface ClassImplements {
		id: Identifier,
		typeParameters?: TypeParameterInstantiation
	}

	declare interface ClassProperty {
		key: Expression,
		value?: Expression,
		typeAnnotation?: TypeAnnotation,
		computed: boolean,
		static: boolean
	}

	declare interface DeclareClass {
		id: Identifier,
		typeParameters?: TypeParameterDeclaration,
		body: ObjectTypeAnnotation,
		extends: Array<InterfaceExtends>
	}

	declare interface DeclareFunction {
		id: Identifier
	}

	declare interface DeclareModule {
		id: Literal | Identifier,
		body: BlockStatement
	}

	declare interface DeclareVariable {
		id: Identifier
	}

	declare interface FunctionTypeAnnotation {
		params: Array<FunctionTypeParam>,
		returnType: FlowTypeAnnotation,
		rest?: FunctionTypeParam,
		typeParameters?: TypeParameterDeclaration
	}

	declare interface FunctionTypeParam {
		name: Identifier,
		typeAnnotation: FlowTypeAnnotation,
		optional: boolean
	}

	declare interface GenericTypeAnnotation {
		id: Identifier | QualifiedTypeIdentifier,
		typeParameters?: TypeParameterInstantiation
	}

	declare interface InterfaceExtends {
		id: Identifier | QualifiedTypeIdentifier,
		typeParameters?: TypeParameterInstantiation
	}

	declare interface InterfaceDeclaration {
		id: Identifier,
		typeParameters?: TypeParameterDeclaration,
		extends: Array<InterfaceExtends>,
		body: ObjectTypeAnnotation
	}

	declare interface IntersectionTypeAnnotation {
		types: Array<FlowTypeAnnotation>
	}

	declare interface MixedTypeAnnotation {
		
	}

	declare interface NullableTypeAnnotation {
		typeAnnotation: TypeAnnotation
	}

	declare interface NumberLiteralTypeAnnotation {
		
	}

	declare interface NumberTypeAnnotation {
		
	}

	declare interface StringLiteralTypeAnnotation {
		
	}

	declare interface StringTypeAnnotation {
		
	}

	declare interface TupleTypeAnnotation {
		types: Array<FlowTypeAnnotation>
	}

	declare interface TypeofTypeAnnotation {
		argument: FlowTypeAnnotation
	}

	declare interface TypeAlias {
		id: Identifier,
		typeParameters?: TypeParameterDeclaration,
		right: FlowTypeAnnotation
	}

	declare interface TypeAnnotation {
		typeAnnotation: FlowTypeAnnotation
	}

	declare interface TypeCastExpression {
		expression: Expression,
		typeAnnotation: TypeAnnotation
	}

	declare interface TypeParameterDeclaration {
		params: Array<Identifier>
	}

	declare interface TypeParameterInstantiation {
		params: Array<FlowTypeAnnotation>
	}

	declare interface ObjectTypeAnnotation {
		properties: Array<ObjectTypeProperty>,
		indexers: Array<ObjectTypeIndexer>,
		callProperties: Array<ObjectTypeCallProperty>
	}

	declare interface ObjectTypeCallProperty {
		value: FunctionTypeAnnotation,
		static: boolean
	}

	declare interface ObjectTypeIndexer {
		id: Identifier,
		key: FlowTypeAnnotation,
		value: FlowTypeAnnotation,
		static: boolean
	}

	declare interface ObjectTypeProperty {
		key: Expression,
		value: FlowTypeAnnotation,
		optional: boolean,
		static: boolean
	}

	declare interface QualifiedTypeIdentifier {
		qualification: Identifier | QualifiedTypeIdentifier,
		id: Identifier
	}

	declare interface UnionTypeAnnotation {
		types: Array<FlowTypeAnnotation>
	}

	declare interface VoidTypeAnnotation {
		
	}

			
}
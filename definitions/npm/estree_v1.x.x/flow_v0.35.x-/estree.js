

declare module 'estree' {
					
}

declare module 'npm$namespace$ESTree' {
	declare type UnaryOperator = string;

	declare type BinaryOperator = string;

	declare type LogicalOperator = string;

	declare type AssignmentOperator = string;

	declare type UpdateOperator = string;

	declare interface Node {
		type: string,
		loc?: SourceLocation,
		range?: [number, number]
	}

	declare interface SourceLocation {
		source?: string,
		start: Position,
		end: Position
	}

	declare interface Position {
		line: number,
		column: number
	}

	declare interface Program {
		body: Array<Statement | ModuleDeclaration>,
		sourceType: string
	}

	declare interface Function {
		id?: Identifier,
		params: Array<Pattern>,
		body: BlockStatement | Expression,
		generator: boolean
	}

	declare interface Statement {
		
	}

	declare interface EmptyStatement {
		
	}

	declare interface BlockStatement {
		body: Array<Statement>
	}

	declare interface ExpressionStatement {
		expression: Expression
	}

	declare interface IfStatement {
		test: Expression,
		consequent: Statement,
		alternate?: Statement
	}

	declare interface LabeledStatement {
		label: Identifier,
		body: Statement
	}

	declare interface BreakStatement {
		label?: Identifier
	}

	declare interface ContinueStatement {
		label?: Identifier
	}

	declare interface WithStatement {
		object: Expression,
		body: Statement
	}

	declare interface SwitchStatement {
		discriminant: Expression,
		cases: Array<SwitchCase>
	}

	declare interface ReturnStatement {
		argument?: Expression
	}

	declare interface ThrowStatement {
		argument: Expression
	}

	declare interface TryStatement {
		block: BlockStatement,
		handler?: CatchClause,
		finalizer?: BlockStatement
	}

	declare interface WhileStatement {
		test: Expression,
		body: Statement
	}

	declare interface DoWhileStatement {
		body: Statement,
		test: Expression
	}

	declare interface ForStatement {
		init?: VariableDeclaration | Expression,
		test?: Expression,
		update?: Expression,
		body: Statement
	}

	declare interface ForInStatement {
		left: VariableDeclaration | Expression,
		right: Expression,
		body: Statement
	}

	declare interface DebuggerStatement {
		
	}

	declare interface Declaration {
		
	}

	declare interface FunctionDeclaration {
		id: Identifier
	}

	declare interface VariableDeclaration {
		declarations: Array<VariableDeclarator>,
		kind: string
	}

	declare interface VariableDeclarator {
		id: Pattern,
		init?: Expression
	}

	declare interface Expression {
		
	}

	declare interface ThisExpression {
		
	}

	declare interface ArrayExpression {
		elements: Array<Expression | SpreadElement>
	}

	declare interface ObjectExpression {
		properties: Array<Property>
	}

	declare interface Property {
		key: Expression,
		value: Expression,
		kind: string,
		method: boolean,
		shorthand: boolean,
		computed: boolean
	}

	declare interface FunctionExpression {
		
	}

	declare interface SequenceExpression {
		expressions: Array<Expression>
	}

	declare interface UnaryExpression {
		operator: UnaryOperator,
		prefix: boolean,
		argument: Expression
	}

	declare interface BinaryExpression {
		operator: BinaryOperator,
		left: Expression,
		right: Expression
	}

	declare interface AssignmentExpression {
		operator: AssignmentOperator,
		left: Pattern | MemberExpression,
		right: Expression
	}

	declare interface UpdateExpression {
		operator: UpdateOperator,
		argument: Expression,
		prefix: boolean
	}

	declare interface LogicalExpression {
		operator: LogicalOperator,
		left: Expression,
		right: Expression
	}

	declare interface ConditionalExpression {
		test: Expression,
		alternate: Expression,
		consequent: Expression
	}

	declare interface CallExpression {
		callee: Expression | Super,
		arguments: Array<Expression | SpreadElement>
	}

	declare interface NewExpression {
		
	}

	declare interface MemberExpression {
		object: Expression | Super,
		property: Expression,
		computed: boolean
	}

	declare interface Pattern {
		
	}

	declare interface SwitchCase {
		test?: Expression,
		consequent: Array<Statement>
	}

	declare interface CatchClause {
		param: Pattern,
		body: BlockStatement
	}

	declare interface Identifier {
		name: string
	}

	declare interface Literal {
		value?: string | boolean | number | RegExp
	}

	declare interface RegExpLiteral {
		regex: {
		pattern: string,
		flags: string
	}
	}

	declare interface ForOfStatement {
		
	}

	declare interface Super {
		
	}

	declare interface SpreadElement {
		argument: Expression
	}

	declare interface ArrowFunctionExpression {
		expression: boolean
	}

	declare interface YieldExpression {
		argument?: Expression,
		delegate: boolean
	}

	declare interface TemplateLiteral {
		quasis: Array<TemplateElement>,
		expressions: Array<Expression>
	}

	declare interface TaggedTemplateExpression {
		tag: Expression,
		quasi: TemplateLiteral
	}

	declare interface TemplateElement {
		tail: boolean,
		value: {
		cooked: string,
		raw: string
	}
	}

	declare interface AssignmentProperty {
		value: Pattern,
		kind: string,
		method: boolean
	}

	declare interface ObjectPattern {
		properties: Array<AssignmentProperty>
	}

	declare interface ArrayPattern {
		elements: Array<Pattern>
	}

	declare interface RestElement {
		argument: Pattern
	}

	declare interface AssignmentPattern {
		left: Pattern,
		right: Expression
	}

	declare interface Class {
		id?: Identifier,
		superClass: Expression,
		body: ClassBody
	}

	declare interface ClassBody {
		body: Array<MethodDefinition>
	}

	declare interface MethodDefinition {
		key: Expression,
		value: FunctionExpression,
		kind: string,
		computed: boolean,
		static: boolean
	}

	declare interface ClassDeclaration {
		id: Identifier
	}

	declare interface ClassExpression {
		
	}

	declare interface MetaProperty {
		meta: Identifier,
		property: Identifier
	}

	declare interface ModuleDeclaration {
		
	}

	declare interface ModuleSpecifier {
		local: Identifier
	}

	declare interface ImportDeclaration {
		specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>,
		source: Literal
	}

	declare interface ImportSpecifier {
		imported: Identifier
	}

	declare interface ImportDefaultSpecifier {
		
	}

	declare interface ImportNamespaceSpecifier {
		
	}

	declare interface ExportNamedDeclaration {
		declaration?: Declaration,
		specifiers: Array<ExportSpecifier>,
		source?: Literal
	}

	declare interface ExportSpecifier {
		exported: Identifier
	}

	declare interface ExportDefaultDeclaration {
		declaration: Declaration | Expression
	}

	declare interface ExportAllDeclaration {
		source: Literal
	}

			
}
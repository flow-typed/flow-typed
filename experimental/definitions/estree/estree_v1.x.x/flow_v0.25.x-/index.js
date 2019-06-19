declare module 'estree' {
  declare interface BaseNodeWithoutComments {
    type: string;
    loc?: SourceLocation | null;
    range?: [number, number];
  }
  declare type BaseNode = {
    leadingComments?: Array<Comment>,
    trailingComments?: Array<Comment>,
  } & BaseNodeWithoutComments;

  declare export type Node =
    | Identifier
    | Literal
    | Program
    | Function
    | SwitchCase
    | CatchClause
    | VariableDeclarator
    | Statement
    | Expression
    | Property
    | AssignmentProperty
    | Super
    | TemplateElement
    | SpreadElement
    | Pattern
    | ClassBody
    | Class
    | MethodDefinition
    | ModuleDeclaration
    | ModuleSpecifier;
  declare export type Comment = {
    type: 'Line' | 'Block',
    value: string,
  } & BaseNodeWithoutComments;

  declare interface SourceLocation {
    source?: string | null;
    start: Position;
    end: Position;
  }
  declare export interface Position {
    /**
     * >= 1
     */
    line: number;

    /**
     * >= 0
     */
    column: number;
  }
  declare export type Program = {
    type: 'Program',
    sourceType: 'script' | 'module',
    body: Array<Statement | ModuleDeclaration>,
    comments?: Array<Comment>,
  } & BaseNode;

  declare type BaseFunction = {
    params: Array<Pattern>,
    generator?: boolean,
    async?: boolean,
    body: BlockStatement | Expression,
  } & BaseNode;

  declare export type Function =
    | FunctionDeclaration
    | FunctionExpression
    | ArrowFunctionExpression;
  declare export type Statement =
    | ExpressionStatement
    | BlockStatement
    | EmptyStatement
    | DebuggerStatement
    | WithStatement
    | ReturnStatement
    | LabeledStatement
    | BreakStatement
    | ContinueStatement
    | IfStatement
    | SwitchStatement
    | ThrowStatement
    | TryStatement
    | WhileStatement
    | DoWhileStatement
    | ForStatement
    | ForInStatement
    | ForOfStatement
    | Declaration;
  declare type BaseStatement = {} & BaseNode;

  declare export type EmptyStatement = {
    type: 'EmptyStatement',
  } & BaseStatement;

  declare export type BlockStatement = {
    type: 'BlockStatement',
    body: Array<Statement>,
    innerComments?: Array<Comment>,
  } & BaseStatement;

  declare export type ExpressionStatement = {
    type: 'ExpressionStatement',
    expression: Expression,
  } & BaseStatement;

  declare export type IfStatement = {
    type: 'IfStatement',
    test: Expression,
    consequent: Statement,
    alternate?: Statement | null,
  } & BaseStatement;

  declare export type LabeledStatement = {
    type: 'LabeledStatement',
    label: Identifier,
    body: Statement,
  } & BaseStatement;

  declare export type BreakStatement = {
    type: 'BreakStatement',
    label?: Identifier | null,
  } & BaseStatement;

  declare export type ContinueStatement = {
    type: 'ContinueStatement',
    label?: Identifier | null,
  } & BaseStatement;

  declare export type WithStatement = {
    type: 'WithStatement',
    object: Expression,
    body: Statement,
  } & BaseStatement;

  declare export type SwitchStatement = {
    type: 'SwitchStatement',
    discriminant: Expression,
    cases: Array<SwitchCase>,
  } & BaseStatement;

  declare export type ReturnStatement = {
    type: 'ReturnStatement',
    argument?: Expression | null,
  } & BaseStatement;

  declare export type ThrowStatement = {
    type: 'ThrowStatement',
    argument: Expression,
  } & BaseStatement;

  declare export type TryStatement = {
    type: 'TryStatement',
    block: BlockStatement,
    handler?: CatchClause | null,
    finalizer?: BlockStatement | null,
  } & BaseStatement;

  declare export type WhileStatement = {
    type: 'WhileStatement',
    test: Expression,
    body: Statement,
  } & BaseStatement;

  declare export type DoWhileStatement = {
    type: 'DoWhileStatement',
    body: Statement,
    test: Expression,
  } & BaseStatement;

  declare export type ForStatement = {
    type: 'ForStatement',
    init?: VariableDeclaration | Expression | null,
    test?: Expression | null,
    update?: Expression | null,
    body: Statement,
  } & BaseStatement;

  declare type BaseForXStatement = {
    left: VariableDeclaration | Pattern,
    right: Expression,
    body: Statement,
  } & BaseStatement;

  declare export type ForInStatement = {
    type: 'ForInStatement',
  } & BaseForXStatement;

  declare export type DebuggerStatement = {
    type: 'DebuggerStatement',
  } & BaseStatement;

  declare export type Declaration =
    | FunctionDeclaration
    | VariableDeclaration
    | ClassDeclaration;
  declare type BaseDeclaration = {} & BaseStatement;

  declare export type FunctionDeclaration = {
    type: 'FunctionDeclaration',

    /**
     * It is null when a function declaration is a part of the `export default function` statement
     */
    id: Identifier | null,
    body: BlockStatement,
  } & BaseFunction &
    BaseDeclaration;

  declare export type VariableDeclaration = {
    type: 'VariableDeclaration',
    declarations: Array<VariableDeclarator>,
    kind: 'var' | 'let' | 'const',
  } & BaseDeclaration;

  declare export type VariableDeclarator = {
    type: 'VariableDeclarator',
    id: Pattern,
    init?: Expression | null,
  } & BaseNode;

  declare type Expression =
    | ThisExpression
    | ArrayExpression
    | ObjectExpression
    | FunctionExpression
    | ArrowFunctionExpression
    | YieldExpression
    | Literal
    | UnaryExpression
    | UpdateExpression
    | BinaryExpression
    | AssignmentExpression
    | LogicalExpression
    | MemberExpression
    | ConditionalExpression
    | CallExpression
    | NewExpression
    | SequenceExpression
    | TemplateLiteral
    | TaggedTemplateExpression
    | ClassExpression
    | MetaProperty
    | Identifier
    | AwaitExpression;
  declare export type BaseExpression = {} & BaseNode;

  declare export type ThisExpression = {
    type: 'ThisExpression',
  } & BaseExpression;

  declare export type ArrayExpression = {
    type: 'ArrayExpression',
    elements: Array<Expression | SpreadElement>,
  } & BaseExpression;

  declare export type ObjectExpression = {
    type: 'ObjectExpression',
    properties: Array<Property>,
  } & BaseExpression;

  declare export type Property = {
    type: 'Property',
    key: Expression,
    value: Expression | Pattern,
    kind: 'init' | 'get' | 'set',
    method: boolean,
    shorthand: boolean,
    computed: boolean,
  } & BaseNode;

  declare export type FunctionExpression = {
    id?: Identifier | null,
    type: 'FunctionExpression',
    body: BlockStatement,
  } & BaseFunction &
    BaseExpression;

  declare export type SequenceExpression = {
    type: 'SequenceExpression',
    expressions: Array<Expression>,
  } & BaseExpression;

  declare export type UnaryExpression = {
    type: 'UnaryExpression',
    operator: UnaryOperator,
    prefix: true,
    argument: Expression,
  } & BaseExpression;

  declare export type BinaryExpression = {
    type: 'BinaryExpression',
    operator: BinaryOperator,
    left: Expression,
    right: Expression,
  } & BaseExpression;

  declare export type AssignmentExpression = {
    type: 'AssignmentExpression',
    operator: AssignmentOperator,
    left: Pattern | MemberExpression,
    right: Expression,
  } & BaseExpression;

  declare export type UpdateExpression = {
    type: 'UpdateExpression',
    operator: UpdateOperator,
    argument: Expression,
    prefix: boolean,
  } & BaseExpression;

  declare export type LogicalExpression = {
    type: 'LogicalExpression',
    operator: LogicalOperator,
    left: Expression,
    right: Expression,
  } & BaseExpression;

  declare export type ConditionalExpression = {
    type: 'ConditionalExpression',
    test: Expression,
    alternate: Expression,
    consequent: Expression,
  } & BaseExpression;

  declare type BaseCallExpression = {
    callee: Expression | Super,
    arguments: Array<Expression | SpreadElement>,
  } & BaseExpression;

  declare export type CallExpression = SimpleCallExpression | NewExpression;
  declare export type SimpleCallExpression = {
    type: 'CallExpression',
  } & BaseCallExpression;

  declare export type NewExpression = {
    type: 'NewExpression',
  } & BaseCallExpression;

  declare export type MemberExpression = {
    type: 'MemberExpression',
    object: Expression | Super,
    property: Expression,
    computed: boolean,
  } & BaseExpression &
    BasePattern;

  declare export type Pattern =
    | Identifier
    | ObjectPattern
    | ArrayPattern
    | RestElement
    | AssignmentPattern
    | MemberExpression;
  declare type BasePattern = {} & BaseNode;

  declare export type SwitchCase = {
    type: 'SwitchCase',
    test?: Expression | null,
    consequent: Array<Statement>,
  } & BaseNode;

  declare export type CatchClause = {
    type: 'CatchClause',
    param: Pattern,
    body: BlockStatement,
  } & BaseNode;

  declare export type Identifier = {
    type: 'Identifier',
    name: string,
  } & BaseNode &
    BaseExpression &
    BasePattern;

  declare export type Literal = SimpleLiteral | RegExpLiteral;
  declare export type SimpleLiteral = {
    type: 'Literal',
    value: string | boolean | number | null,
    raw?: string,
  } & BaseNode &
    BaseExpression;

  declare export type RegExpLiteral = {
    type: 'Literal',
    value?: RegExp | null,
    regex: {
      pattern: string,
      flags: string,
    },
    raw?: string,
  } & BaseNode &
    BaseExpression;

  declare export type UnaryOperator =
    | '-'
    | '+'
    | '!'
    | '~'
    | 'typeof'
    | 'void'
    | 'delete';
  declare export type BinaryOperator =
    | '=='
    | '!='
    | '==='
    | '!=='
    | '<'
    | '<='
    | '>'
    | '>='
    | '<<'
    | '>>'
    | '>>>'
    | '+'
    | '-'
    | '*'
    | '/'
    | '%'
    | '**'
    | '|'
    | '^'
    | '&'
    | 'in'
    | 'instanceof';
  declare export type LogicalOperator = '||' | '&&';
  declare export type AssignmentOperator =
    | '='
    | '+='
    | '-='
    | '*='
    | '/='
    | '%='
    | '**='
    | '<<='
    | '>>='
    | '>>>='
    | '|='
    | '^='
    | '&=';
  declare export type UpdateOperator = '++' | '--';
  declare export type ForOfStatement = {
    type: 'ForOfStatement',
  } & BaseForXStatement;

  declare export type Super = {
    type: 'Super',
  } & BaseNode;

  declare export type SpreadElement = {
    type: 'SpreadElement',
    argument: Expression,
  } & BaseNode;

  declare export type ArrowFunctionExpression = {
    type: 'ArrowFunctionExpression',
    expression: boolean,
    body: BlockStatement | Expression,
  } & BaseExpression &
    BaseFunction;

  declare export type YieldExpression = {
    type: 'YieldExpression',
    argument?: Expression | null,
    delegate: boolean,
  } & BaseExpression;

  declare export type TemplateLiteral = {
    type: 'TemplateLiteral',
    quasis: Array<TemplateElement>,
    expressions: Array<Expression>,
  } & BaseExpression;

  declare export type TaggedTemplateExpression = {
    type: 'TaggedTemplateExpression',
    tag: Expression,
    quasi: TemplateLiteral,
  } & BaseExpression;

  declare export type TemplateElement = {
    type: 'TemplateElement',
    tail: boolean,
    value: {
      cooked: string,
      raw: string,
    },
  } & BaseNode;

  declare export type AssignmentProperty = {
    value: Pattern,
    kind: 'init',
    method: boolean,
  } & Property;

  declare export type ObjectPattern = {
    type: 'ObjectPattern',
    properties: Array<AssignmentProperty>,
  } & BasePattern;

  declare export type ArrayPattern = {
    type: 'ArrayPattern',
    elements: Array<Pattern>,
  } & BasePattern;

  declare export type RestElement = {
    type: 'RestElement',
    argument: Pattern,
  } & BasePattern;

  declare export type AssignmentPattern = {
    type: 'AssignmentPattern',
    left: Pattern,
    right: Expression,
  } & BasePattern;

  declare export type Class = ClassDeclaration | ClassExpression;
  declare type BaseClass = {
    superClass?: Expression | null,
    body: ClassBody,
  } & BaseNode;

  declare export type ClassBody = {
    type: 'ClassBody',
    body: Array<MethodDefinition>,
  } & BaseNode;

  declare export type MethodDefinition = {
    type: 'MethodDefinition',
    key: Expression,
    value: FunctionExpression,
    kind: 'constructor' | 'method' | 'get' | 'set',
    computed: boolean,
    static: boolean,
  } & BaseNode;

  declare export type ClassDeclaration = {
    type: 'ClassDeclaration',

    /**
     * It is null when a class declaration is a part of the `export default class` statement
     */
    id: Identifier | null,
  } & BaseClass &
    BaseDeclaration;

  declare export type ClassExpression = {
    type: 'ClassExpression',
    id?: Identifier | null,
  } & BaseClass &
    BaseExpression;

  declare export type MetaProperty = {
    type: 'MetaProperty',
    meta: Identifier,
    property: Identifier,
  } & BaseExpression;

  declare export type ModuleDeclaration =
    | ImportDeclaration
    | ExportNamedDeclaration
    | ExportDefaultDeclaration
    | ExportAllDeclaration;
  declare type BaseModuleDeclaration = {} & BaseNode;

  declare export type ModuleSpecifier =
    | ImportSpecifier
    | ImportDefaultSpecifier
    | ImportNamespaceSpecifier
    | ExportSpecifier;
  declare type BaseModuleSpecifier = {
    local: Identifier,
  } & BaseNode;

  declare export type ImportDeclaration = {
    type: 'ImportDeclaration',
    specifiers: Array<
      ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier
    >,
    source: Literal,
  } & BaseModuleDeclaration;

  declare export type ImportSpecifier = {
    type: 'ImportSpecifier',
    imported: Identifier,
  } & BaseModuleSpecifier;

  declare export type ImportDefaultSpecifier = {
    type: 'ImportDefaultSpecifier',
  } & BaseModuleSpecifier;

  declare export type ImportNamespaceSpecifier = {
    type: 'ImportNamespaceSpecifier',
  } & BaseModuleSpecifier;

  declare export type ExportNamedDeclaration = {
    type: 'ExportNamedDeclaration',
    declaration?: Declaration | null,
    specifiers: Array<ExportSpecifier>,
    source?: Literal | null,
  } & BaseModuleDeclaration;

  declare export type ExportSpecifier = {
    type: 'ExportSpecifier',
    exported: Identifier,
  } & BaseModuleSpecifier;

  declare export type ExportDefaultDeclaration = {
    type: 'ExportDefaultDeclaration',
    declaration: Declaration | Expression,
  } & BaseModuleDeclaration;

  declare export type ExportAllDeclaration = {
    type: 'ExportAllDeclaration',
    source: Literal,
  } & BaseModuleDeclaration;

  declare export type AwaitExpression = {
    type: 'AwaitExpression',
    argument: Expression,
  } & BaseExpression;
}

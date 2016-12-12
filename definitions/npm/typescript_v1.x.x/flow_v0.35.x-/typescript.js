

declare module 'typescript' {
	declare type EntityName = Identifier | QualifiedName;

	declare type DeclarationName = Identifier | LiteralExpression | ComputedPropertyName | BindingPattern;

	declare type CallLikeExpression = CallExpression | NewExpression | TaggedTemplateExpression | Decorator;

	declare type AssertionExpression = TypeAssertion | AsExpression;

	declare type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;

	declare type JsxChild = JsxText | JsxExpression | JsxElement | JsxSelfClosingElement;

	declare type CaseOrDefaultClause = CaseClause | DefaultClause;

	declare type NamedImports = NamedImportsOrExports;

	declare type NamedExports = NamedImportsOrExports;

	declare type ImportSpecifier = ImportOrExportSpecifier;

	declare type ExportSpecifier = ImportOrExportSpecifier;

	declare interface Map<T> {
		[index: string]: T
	}

	declare interface FileMap<T> {
		get(fileName: string): T,
		set(fileName: string, value: T): void,
		contains(fileName: string): boolean,
		remove(fileName: string): void,
		forEachValue(f: (v: T) => void): void,
		clear(): void
	}

	declare interface TextRange {
		pos: number,
		end: number
	}

	declare interface Node {
		kind: SyntaxKind,
		flags: NodeFlags,
		decorators?: NodeArray<Decorator>,
		modifiers?: ModifiersArray,
		parent?: Node
	}

	declare interface NodeArray<T> {
		hasTrailingComma?: boolean
	}

	declare interface ModifiersArray {
		flags: number
	}

	declare interface Identifier {
		text: string,
		originalKeywordKind?: SyntaxKind
	}

	declare interface QualifiedName {
		left: EntityName,
		right: Identifier
	}

	declare interface Declaration {
		_declarationBrand: any,
		name?: DeclarationName
	}

	declare interface ComputedPropertyName {
		expression: Expression
	}

	declare interface Decorator {
		expression: LeftHandSideExpression
	}

	declare interface TypeParameterDeclaration {
		name: Identifier,
		constraint?: TypeNode,
		expression?: Expression
	}

	declare interface SignatureDeclaration {
		typeParameters?: NodeArray<TypeParameterDeclaration>,
		parameters: NodeArray<ParameterDeclaration>,
		type?: TypeNode
	}

	declare interface VariableDeclaration {
		parent?: VariableDeclarationList,
		name: Identifier | BindingPattern,
		type?: TypeNode,
		initializer?: Expression
	}

	declare interface VariableDeclarationList {
		declarations: NodeArray<VariableDeclaration>
	}

	declare interface ParameterDeclaration {
		dotDotDotToken?: Node,
		name: Identifier | BindingPattern,
		questionToken?: Node,
		type?: TypeNode,
		initializer?: Expression
	}

	declare interface BindingElement {
		propertyName?: Identifier,
		dotDotDotToken?: Node,
		name: Identifier | BindingPattern,
		initializer?: Expression
	}

	declare interface PropertyDeclaration {
		name: DeclarationName,
		questionToken?: Node,
		type?: TypeNode,
		initializer?: Expression
	}

	declare interface ObjectLiteralElement {
		_objectLiteralBrandBrand: any
	}

	declare interface PropertyAssignment {
		_propertyAssignmentBrand: any,
		name: DeclarationName,
		questionToken?: Node,
		initializer: Expression
	}

	declare interface ShorthandPropertyAssignment {
		name: Identifier,
		questionToken?: Node
	}

	declare interface VariableLikeDeclaration {
		propertyName?: Identifier,
		dotDotDotToken?: Node,
		name: DeclarationName,
		questionToken?: Node,
		type?: TypeNode,
		initializer?: Expression
	}

	declare interface BindingPattern {
		elements: NodeArray<BindingElement>
	}

	declare interface FunctionLikeDeclaration {
		_functionLikeDeclarationBrand: any,
		asteriskToken?: Node,
		questionToken?: Node,
		body?: Block | Expression
	}

	declare interface FunctionDeclaration {
		name?: Identifier,
		body?: Block
	}

	declare interface MethodDeclaration {
		body?: Block
	}

	declare interface ConstructorDeclaration {
		body?: Block
	}

	declare interface SemicolonClassElement {
		_semicolonClassElementBrand: any
	}

	declare interface AccessorDeclaration {
		_accessorDeclarationBrand: any,
		body: Block
	}

	declare interface IndexSignatureDeclaration {
		_indexSignatureDeclarationBrand: any
	}

	declare interface TypeNode {
		_typeNodeBrand: any
	}

	declare interface FunctionOrConstructorTypeNode {
		_functionOrConstructorTypeNodeBrand: any
	}

	declare interface TypeReferenceNode {
		typeName: EntityName,
		typeArguments?: NodeArray<TypeNode>
	}

	declare interface TypePredicateNode {
		parameterName: Identifier,
		type: TypeNode
	}

	declare interface TypeQueryNode {
		exprName: EntityName
	}

	declare interface TypeLiteralNode {
		members: NodeArray<Node>
	}

	declare interface ArrayTypeNode {
		elementType: TypeNode
	}

	declare interface TupleTypeNode {
		elementTypes: NodeArray<TypeNode>
	}

	declare interface UnionOrIntersectionTypeNode {
		types: NodeArray<TypeNode>
	}

	declare interface UnionTypeNode {
		
	}

	declare interface IntersectionTypeNode {
		
	}

	declare interface ParenthesizedTypeNode {
		type: TypeNode
	}

	declare interface StringLiteral {
		_stringLiteralBrand: any
	}

	declare interface Expression {
		_expressionBrand: any,
		contextualType?: Type
	}

	declare interface UnaryExpression {
		_unaryExpressionBrand: any
	}

	declare interface PrefixUnaryExpression {
		operator: SyntaxKind,
		operand: UnaryExpression
	}

	declare interface PostfixUnaryExpression {
		operand: LeftHandSideExpression,
		operator: SyntaxKind
	}

	declare interface PostfixExpression {
		_postfixExpressionBrand: any
	}

	declare interface LeftHandSideExpression {
		_leftHandSideExpressionBrand: any
	}

	declare interface MemberExpression {
		_memberExpressionBrand: any
	}

	declare interface PrimaryExpression {
		_primaryExpressionBrand: any
	}

	declare interface DeleteExpression {
		expression: UnaryExpression
	}

	declare interface TypeOfExpression {
		expression: UnaryExpression
	}

	declare interface VoidExpression {
		expression: UnaryExpression
	}

	declare interface AwaitExpression {
		expression: UnaryExpression
	}

	declare interface YieldExpression {
		asteriskToken?: Node,
		expression?: Expression
	}

	declare interface BinaryExpression {
		left: Expression,
		operatorToken: Node,
		right: Expression
	}

	declare interface ConditionalExpression {
		condition: Expression,
		questionToken: Node,
		whenTrue: Expression,
		colonToken: Node,
		whenFalse: Expression
	}

	declare interface FunctionExpression {
		name?: Identifier,
		body: Block | Expression
	}

	declare interface ArrowFunction {
		equalsGreaterThanToken: Node
	}

	declare interface LiteralExpression {
		text: string,
		isUnterminated?: boolean,
		hasExtendedUnicodeEscape?: boolean
	}

	declare interface TemplateExpression {
		head: LiteralExpression,
		templateSpans: NodeArray<TemplateSpan>
	}

	declare interface TemplateSpan {
		expression: Expression,
		literal: LiteralExpression
	}

	declare interface ParenthesizedExpression {
		expression: Expression
	}

	declare interface ArrayLiteralExpression {
		elements: NodeArray<Expression>
	}

	declare interface SpreadElementExpression {
		expression: Expression
	}

	declare interface ObjectLiteralExpression {
		properties: NodeArray<ObjectLiteralElement>
	}

	declare interface PropertyAccessExpression {
		expression: LeftHandSideExpression,
		dotToken: Node,
		name: Identifier
	}

	declare interface ElementAccessExpression {
		expression: LeftHandSideExpression,
		argumentExpression?: Expression
	}

	declare interface CallExpression {
		expression: LeftHandSideExpression,
		typeArguments?: NodeArray<TypeNode>,
		arguments: NodeArray<Expression>
	}

	declare interface ExpressionWithTypeArguments {
		expression: LeftHandSideExpression,
		typeArguments?: NodeArray<TypeNode>
	}

	declare interface NewExpression {
		
	}

	declare interface TaggedTemplateExpression {
		tag: LeftHandSideExpression,
		template: LiteralExpression | TemplateExpression
	}

	declare interface AsExpression {
		expression: Expression,
		type: TypeNode
	}

	declare interface TypeAssertion {
		type: TypeNode,
		expression: UnaryExpression
	}

	declare interface JsxElement {
		openingElement: JsxOpeningElement,
		children: NodeArray<JsxChild>,
		closingElement: JsxClosingElement
	}

	declare interface JsxOpeningElement {
		_openingElementBrand?: any,
		tagName: EntityName,
		attributes: NodeArray<JsxAttribute | JsxSpreadAttribute>
	}

	declare interface JsxSelfClosingElement {
		_selfClosingElementBrand?: any
	}

	declare interface JsxAttribute {
		name: Identifier,
		initializer?: Expression
	}

	declare interface JsxSpreadAttribute {
		expression: Expression
	}

	declare interface JsxClosingElement {
		tagName: EntityName
	}

	declare interface JsxExpression {
		expression?: Expression
	}

	declare interface JsxText {
		_jsxTextExpressionBrand: any
	}

	declare interface Statement {
		_statementBrand: any
	}

	declare interface Block {
		statements: NodeArray<Statement>
	}

	declare interface VariableStatement {
		declarationList: VariableDeclarationList
	}

	declare interface ExpressionStatement {
		expression: Expression
	}

	declare interface IfStatement {
		expression: Expression,
		thenStatement: Statement,
		elseStatement?: Statement
	}

	declare interface IterationStatement {
		statement: Statement
	}

	declare interface DoStatement {
		expression: Expression
	}

	declare interface WhileStatement {
		expression: Expression
	}

	declare interface ForStatement {
		initializer?: VariableDeclarationList | Expression,
		condition?: Expression,
		incrementor?: Expression
	}

	declare interface ForInStatement {
		initializer: VariableDeclarationList | Expression,
		expression: Expression
	}

	declare interface ForOfStatement {
		initializer: VariableDeclarationList | Expression,
		expression: Expression
	}

	declare interface BreakOrContinueStatement {
		label?: Identifier
	}

	declare interface ReturnStatement {
		expression?: Expression
	}

	declare interface WithStatement {
		expression: Expression,
		statement: Statement
	}

	declare interface SwitchStatement {
		expression: Expression,
		caseBlock: CaseBlock
	}

	declare interface CaseBlock {
		clauses: NodeArray<CaseOrDefaultClause>
	}

	declare interface CaseClause {
		expression?: Expression,
		statements: NodeArray<Statement>
	}

	declare interface DefaultClause {
		statements: NodeArray<Statement>
	}

	declare interface LabeledStatement {
		label: Identifier,
		statement: Statement
	}

	declare interface ThrowStatement {
		expression: Expression
	}

	declare interface TryStatement {
		tryBlock: Block,
		catchClause?: CatchClause,
		finallyBlock?: Block
	}

	declare interface CatchClause {
		variableDeclaration: VariableDeclaration,
		block: Block
	}

	declare interface ClassLikeDeclaration {
		name?: Identifier,
		typeParameters?: NodeArray<TypeParameterDeclaration>,
		heritageClauses?: NodeArray<HeritageClause>,
		members: NodeArray<ClassElement>
	}

	declare interface ClassDeclaration {
		
	}

	declare interface ClassExpression {
		
	}

	declare interface ClassElement {
		_classElementBrand: any
	}

	declare interface InterfaceDeclaration {
		name: Identifier,
		typeParameters?: NodeArray<TypeParameterDeclaration>,
		heritageClauses?: NodeArray<HeritageClause>,
		members: NodeArray<Declaration>
	}

	declare interface HeritageClause {
		token: SyntaxKind,
		types?: NodeArray<ExpressionWithTypeArguments>
	}

	declare interface TypeAliasDeclaration {
		name: Identifier,
		typeParameters?: NodeArray<TypeParameterDeclaration>,
		type: TypeNode
	}

	declare interface EnumMember {
		name: DeclarationName,
		initializer?: Expression
	}

	declare interface EnumDeclaration {
		name: Identifier,
		members: NodeArray<EnumMember>
	}

	declare interface ModuleDeclaration {
		name: Identifier | LiteralExpression,
		body: ModuleBlock | ModuleDeclaration
	}

	declare interface ModuleBlock {
		statements: NodeArray<Statement>
	}

	declare interface ImportEqualsDeclaration {
		name: Identifier,
		moduleReference: EntityName | ExternalModuleReference
	}

	declare interface ExternalModuleReference {
		expression?: Expression
	}

	declare interface ImportDeclaration {
		importClause?: ImportClause,
		moduleSpecifier: Expression
	}

	declare interface ImportClause {
		name?: Identifier,
		namedBindings?: NamespaceImport | NamedImports
	}

	declare interface NamespaceImport {
		name: Identifier
	}

	declare interface ExportDeclaration {
		exportClause?: NamedExports,
		moduleSpecifier?: Expression
	}

	declare interface NamedImportsOrExports {
		elements: NodeArray<ImportOrExportSpecifier>
	}

	declare interface ImportOrExportSpecifier {
		propertyName?: Identifier,
		name: Identifier
	}

	declare interface ExportAssignment {
		isExportEquals?: boolean,
		expression: Expression
	}

	declare interface FileReference {
		fileName: string
	}

	declare interface CommentRange {
		hasTrailingNewLine?: boolean,
		kind: SyntaxKind
	}

	declare interface JSDocTypeExpression {
		type: JSDocType
	}

	declare interface JSDocType {
		_jsDocTypeBrand: any
	}

	declare interface JSDocAllType {
		_JSDocAllTypeBrand: any
	}

	declare interface JSDocUnknownType {
		_JSDocUnknownTypeBrand: any
	}

	declare interface JSDocArrayType {
		elementType: JSDocType
	}

	declare interface JSDocUnionType {
		types: NodeArray<JSDocType>
	}

	declare interface JSDocTupleType {
		types: NodeArray<JSDocType>
	}

	declare interface JSDocNonNullableType {
		type: JSDocType
	}

	declare interface JSDocNullableType {
		type: JSDocType
	}

	declare interface JSDocRecordType {
		members: NodeArray<JSDocRecordMember>
	}

	declare interface JSDocTypeReference {
		name: EntityName,
		typeArguments: NodeArray<JSDocType>
	}

	declare interface JSDocOptionalType {
		type: JSDocType
	}

	declare interface JSDocFunctionType {
		parameters: NodeArray<ParameterDeclaration>,
		type: JSDocType
	}

	declare interface JSDocVariadicType {
		type: JSDocType
	}

	declare interface JSDocConstructorType {
		type: JSDocType
	}

	declare interface JSDocThisType {
		type: JSDocType
	}

	declare interface JSDocRecordMember {
		name: Identifier | LiteralExpression,
		type?: JSDocType
	}

	declare interface JSDocComment {
		tags: NodeArray<JSDocTag>
	}

	declare interface JSDocTag {
		atToken: Node,
		tagName: Identifier
	}

	declare interface JSDocTemplateTag {
		typeParameters: NodeArray<TypeParameterDeclaration>
	}

	declare interface JSDocReturnTag {
		typeExpression: JSDocTypeExpression
	}

	declare interface JSDocTypeTag {
		typeExpression: JSDocTypeExpression
	}

	declare interface JSDocParameterTag {
		preParameterName?: Identifier,
		typeExpression?: JSDocTypeExpression,
		postParameterName?: Identifier,
		isBracketed: boolean
	}

	declare interface SourceFile {
		statements: NodeArray<Statement>,
		endOfFileToken: Node,
		fileName: string,
		text: string,
		amdDependencies: {
		path: string,
		name: string
	}[],
		moduleName: string,
		referencedFiles: FileReference[],
		languageVariant: LanguageVariant,
		hasNoDefaultLib: boolean,
		languageVersion: ScriptTarget
	}

	declare interface ScriptReferenceHost {
		getCompilerOptions(): CompilerOptions,
		getSourceFile(fileName: string): SourceFile,
		getCurrentDirectory(): string
	}

	declare interface ParseConfigHost {
		readDirectory(rootDir: string, extension: string, exclude: string[]): string[]
	}

	declare interface WriteFileCallback {
		(fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void): void
	}

	declare interface CancellationToken {
		isCancellationRequested(): boolean,
		throwIfCancellationRequested(): void
	}

	declare interface Program {
		getRootFileNames(): string[],
		getSourceFiles(): SourceFile[],
		emit(
		targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken
	): EmitResult,
		getOptionsDiagnostics(cancellationToken?: CancellationToken): Diagnostic[],
		getGlobalDiagnostics(cancellationToken?: CancellationToken): Diagnostic[],
		getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[],
		getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[],
		getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[],
		getTypeChecker(): TypeChecker
	}

	declare interface SourceMapSpan {
		emittedLine: number,
		emittedColumn: number,
		sourceLine: number,
		sourceColumn: number,
		nameIndex?: number,
		sourceIndex: number
	}

	declare interface SourceMapData {
		sourceMapFilePath: string,
		jsSourceMappingURL: string,
		sourceMapFile: string,
		sourceMapSourceRoot: string,
		sourceMapSources: string[],
		sourceMapSourcesContent?: string[],
		inputSourceFileNames: string[],
		sourceMapNames?: string[],
		sourceMapMappings: string,
		sourceMapDecodedMappings: SourceMapSpan[]
	}

	declare interface EmitResult {
		emitSkipped: boolean,
		diagnostics: Diagnostic[]
	}

	declare interface TypeChecker {
		getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type,
		getDeclaredTypeOfSymbol(symbol: Symbol): Type,
		getPropertiesOfType(type: Type): Symbol[],
		getPropertyOfType(type: Type, propertyName: string): Symbol,
		getSignaturesOfType(type: Type, kind: SignatureKind): Signature[],
		getIndexTypeOfType(type: Type, kind: IndexKind): Type,
		getBaseTypes(type: InterfaceType): ObjectType[],
		getReturnTypeOfSignature(signature: Signature): Type,
		getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[],
		getSymbolAtLocation(node: Node): Symbol,
		getShorthandAssignmentValueSymbol(location: Node): Symbol,
		getTypeAtLocation(node: Node): Type,
		typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string,
		symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): string,
		getSymbolDisplayBuilder(): SymbolDisplayBuilder,
		getFullyQualifiedName(symbol: Symbol): string,
		getAugmentedPropertiesOfType(type: Type): Symbol[],
		getRootSymbols(symbol: Symbol): Symbol[],
		getContextualType(node: Expression): Type,
		getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[]): Signature,
		getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature,
		isImplementationOfOverload(node: FunctionLikeDeclaration): boolean,
		isUndefinedSymbol(symbol: Symbol): boolean,
		isArgumentsSymbol(symbol: Symbol): boolean,
		getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): number,
		isValidPropertyAccess(node: PropertyAccessExpression | QualifiedName, propertyName: string): boolean,
		getAliasedSymbol(symbol: Symbol): Symbol,
		getExportsOfModule(moduleSymbol: Symbol): Symbol[],
		getJsxElementAttributesType(elementNode: JsxOpeningLikeElement): Type,
		getJsxIntrinsicTagNames(): Symbol[],
		isOptionalParameter(node: ParameterDeclaration): boolean
	}

	declare interface SymbolDisplayBuilder {
		buildTypeDisplay(
		type: Type, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags
	): void,
		buildSymbolDisplay(
		symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags
	): void,
		buildSignatureDisplay(
		signatures: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags
	): void,
		buildParameterDisplay(
		parameter: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags
	): void,
		buildTypeParameterDisplay(
		tp: TypeParameter, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags
	): void,
		buildTypeParameterDisplayFromSymbol(
		symbol: Symbol, writer: SymbolWriter, enclosingDeclaraiton?: Node, flags?: TypeFormatFlags
	): void,
		buildDisplayForParametersAndDelimiters(
		parameters: Symbol[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags
	): void,
		buildDisplayForTypeParametersAndDelimiters(
		typeParameters: TypeParameter[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags
	): void,
		buildReturnTypeDisplay(
		signature: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags
	): void
	}

	declare interface SymbolWriter {
		writeKeyword(text: string): void,
		writeOperator(text: string): void,
		writePunctuation(text: string): void,
		writeSpace(text: string): void,
		writeStringLiteral(text: string): void,
		writeParameter(text: string): void,
		writeSymbol(text: string, symbol: Symbol): void,
		writeLine(): void,
		increaseIndent(): void,
		decreaseIndent(): void,
		clear(): void,
		trackSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): void
	}

	declare interface TypePredicate {
		parameterName: string,
		parameterIndex: number,
		type: Type
	}

	declare interface Symbol {
		flags: SymbolFlags,
		name: string,
		declarations?: Declaration[],
		valueDeclaration?: Declaration,
		members?: SymbolTable,
		exports?: SymbolTable
	}

	declare interface SymbolTable {
		[index: string]: Symbol
	}

	declare interface Type {
		flags: TypeFlags,
		symbol?: Symbol
	}

	declare interface StringLiteralType {
		text: string
	}

	declare interface ObjectType {
		
	}

	declare interface InterfaceType {
		typeParameters: TypeParameter[],
		outerTypeParameters: TypeParameter[],
		localTypeParameters: TypeParameter[]
	}

	declare interface InterfaceTypeWithDeclaredMembers {
		declaredProperties: Symbol[],
		declaredCallSignatures: Signature[],
		declaredConstructSignatures: Signature[],
		declaredStringIndexType: Type,
		declaredNumberIndexType: Type
	}

	declare interface TypeReference {
		target: GenericType,
		typeArguments: Type[]
	}

	declare interface GenericType {
		
	}

	declare interface TupleType {
		elementTypes: Type[],
		baseArrayType: TypeReference
	}

	declare interface UnionOrIntersectionType {
		types: Type[]
	}

	declare interface UnionType {
		
	}

	declare interface IntersectionType {
		
	}

	declare interface TypeParameter {
		constraint: Type
	}

	declare interface Signature {
		declaration: SignatureDeclaration,
		typeParameters: TypeParameter[],
		parameters: Symbol[],
		typePredicate?: TypePredicate
	}

	declare interface DiagnosticMessage {
		key: string,
		category: DiagnosticCategory,
		code: number
	}

	declare interface DiagnosticMessageChain {
		messageText: string,
		category: DiagnosticCategory,
		code: number,
		next?: DiagnosticMessageChain
	}

	declare interface Diagnostic {
		file: SourceFile,
		start: number,
		length: number,
		messageText: string | DiagnosticMessageChain,
		category: DiagnosticCategory,
		code: number
	}

	declare interface CompilerOptions {
		allowNonTsExtensions?: boolean,
		charset?: string,
		declaration?: boolean,
		diagnostics?: boolean,
		emitBOM?: boolean,
		help?: boolean,
		init?: boolean,
		inlineSourceMap?: boolean,
		inlineSources?: boolean,
		jsx?: JsxEmit,
		listFiles?: boolean,
		locale?: string,
		mapRoot?: string,
		module?: ModuleKind,
		newLine?: NewLineKind,
		noEmit?: boolean,
		noEmitHelpers?: boolean,
		noEmitOnError?: boolean,
		noErrorTruncation?: boolean,
		noImplicitAny?: boolean,
		noLib?: boolean,
		noResolve?: boolean,
		out?: string,
		outFile?: string,
		outDir?: string,
		preserveConstEnums?: boolean,
		project?: string,
		removeComments?: boolean,
		rootDir?: string,
		sourceMap?: boolean,
		sourceRoot?: string,
		suppressExcessPropertyErrors?: boolean,
		suppressImplicitAnyIndexErrors?: boolean,
		target?: ScriptTarget,
		version?: boolean,
		watch?: boolean,
		isolatedModules?: boolean,
		experimentalDecorators?: boolean,
		experimentalAsyncFunctions?: boolean,
		emitDecoratorMetadata?: boolean,
		moduleResolution?: ModuleResolutionKind,
		[option: string]: string | number | boolean
	}

	declare interface LineAndCharacter {
		line: number,
		character: number
	}

	declare interface ParsedCommandLine {
		options: CompilerOptions,
		fileNames: string[],
		errors: Diagnostic[]
	}

	declare interface ModuleResolutionHost {
		fileExists(fileName: string): boolean,
		readFile(fileName: string): string
	}

	declare interface ResolvedModule {
		resolvedFileName: string,
		isExternalLibraryImport?: boolean
	}

	declare interface ResolvedModuleWithFailedLookupLocations {
		resolvedModule: ResolvedModule,
		failedLookupLocations: string[]
	}

	declare interface CompilerHost {
		getSourceFile(
		fileName: string, languageVersion: ScriptTarget, onError?: (message: string) => void
	): SourceFile,
		getCancellationToken(): CancellationToken,
		getDefaultLibFileName(options: CompilerOptions): string,
		writeFile: WriteFileCallback,
		getCurrentDirectory(): string,
		getCanonicalFileName(fileName: string): string,
		useCaseSensitiveFileNames(): boolean,
		getNewLine(): string,
		resolveModuleNames(moduleNames: string[], containingFile: string): ResolvedModule[]
	}

	declare interface TextSpan {
		start: number,
		length: number
	}

	declare interface TextChangeRange {
		span: TextSpan,
		newLength: number
	}

	declare interface System {
		args: string[],
		newLine: string,
		useCaseSensitiveFileNames: boolean,
		write(s: string): void,
		readFile(path: string, encoding?: string): string,
		writeFile(path: string, data: string, writeByteOrderMark?: boolean): void,
		watchFile(path: string, callback: (path: string) => void): FileWatcher,
		resolvePath(path: string): string,
		fileExists(path: string): boolean,
		directoryExists(path: string): boolean,
		createDirectory(path: string): void,
		getExecutingFilePath(): string,
		getCurrentDirectory(): string,
		readDirectory(path: string, extension?: string, exclude?: string[]): string[],
		getMemoryUsage(): number,
		exit(exitCode?: number): void
	}

	declare interface FileWatcher {
		close(): void
	}

	declare interface ErrorCallback {
		(message: DiagnosticMessage, length: number): void
	}

	declare interface Scanner {
		getStartPos(): number,
		getToken(): SyntaxKind,
		getTextPos(): number,
		getTokenPos(): number,
		getTokenText(): string,
		getTokenValue(): string,
		hasExtendedUnicodeEscape(): boolean,
		hasPrecedingLineBreak(): boolean,
		isIdentifier(): boolean,
		isReservedWord(): boolean,
		isUnterminated(): boolean,
		reScanGreaterToken(): SyntaxKind,
		reScanSlashToken(): SyntaxKind,
		reScanTemplateToken(): SyntaxKind,
		scanJsxIdentifier(): SyntaxKind,
		reScanJsxToken(): SyntaxKind,
		scanJsxToken(): SyntaxKind,
		scan(): SyntaxKind,
		setText(text: string, start?: number, length?: number): void,
		setOnError(onError: ErrorCallback): void,
		setScriptTarget(scriptTarget: ScriptTarget): void,
		setLanguageVariant(variant: LanguageVariant): void,
		setTextPos(textPos: number): void,
		lookAhead<T>(callback: () => T): T,
		tryScan<T>(callback: () => T): T
	}

	declare interface Node {
		getSourceFile(): SourceFile,
		getChildCount(sourceFile?: SourceFile): number,
		getChildAt(index: number, sourceFile?: SourceFile): Node,
		getChildren(sourceFile?: SourceFile): Node[],
		getStart(sourceFile?: SourceFile): number,
		getFullStart(): number,
		getEnd(): number,
		getWidth(sourceFile?: SourceFile): number,
		getFullWidth(): number,
		getLeadingTriviaWidth(sourceFile?: SourceFile): number,
		getFullText(sourceFile?: SourceFile): string,
		getText(sourceFile?: SourceFile): string,
		getFirstToken(sourceFile?: SourceFile): Node,
		getLastToken(sourceFile?: SourceFile): Node
	}

	declare interface Symbol {
		getFlags(): SymbolFlags,
		getName(): string,
		getDeclarations(): Declaration[],
		getDocumentationComment(): SymbolDisplayPart[]
	}

	declare interface Type {
		getFlags(): TypeFlags,
		getSymbol(): Symbol,
		getProperties(): Symbol[],
		getProperty(propertyName: string): Symbol,
		getApparentProperties(): Symbol[],
		getCallSignatures(): Signature[],
		getConstructSignatures(): Signature[],
		getStringIndexType(): Type,
		getNumberIndexType(): Type,
		getBaseTypes(): ObjectType[]
	}

	declare interface Signature {
		getDeclaration(): SignatureDeclaration,
		getTypeParameters(): Type[],
		getParameters(): Symbol[],
		getReturnType(): Type,
		getDocumentationComment(): SymbolDisplayPart[]
	}

	declare interface SourceFile {
		getLineAndCharacterOfPosition(pos: number): LineAndCharacter,
		getLineStarts(): number[],
		getPositionOfLineAndCharacter(line: number, character: number): number,
		update(newText: string, textChangeRange: TextChangeRange): SourceFile
	}

	declare interface IScriptSnapshot {
		getText(start: number, end: number): string,
		getLength(): number,
		getChangeRange(oldSnapshot: IScriptSnapshot): TextChangeRange,
		dispose(): void
	}

	declare interface PreProcessedFileInfo {
		referencedFiles: FileReference[],
		importedFiles: FileReference[],
		ambientExternalModules: string[],
		isLibFile: boolean
	}

	declare interface HostCancellationToken {
		isCancellationRequested(): boolean
	}

	declare interface LanguageServiceHost {
		getCompilationSettings(): CompilerOptions,
		getNewLine(): string,
		getProjectVersion(): string,
		getScriptFileNames(): string[],
		getScriptVersion(fileName: string): string,
		getScriptSnapshot(fileName: string): IScriptSnapshot,
		getLocalizedDiagnosticMessages(): any,
		getCancellationToken(): HostCancellationToken,
		getCurrentDirectory(): string,
		getDefaultLibFileName(options: CompilerOptions): string,
		log(s: string): void,
		trace(s: string): void,
		error(s: string): void,
		useCaseSensitiveFileNames(): boolean,
		resolveModuleNames(moduleNames: string[], containingFile: string): ResolvedModule[]
	}

	declare interface LanguageService {
		cleanupSemanticCache(): void,
		getSyntacticDiagnostics(fileName: string): Diagnostic[],
		getSemanticDiagnostics(fileName: string): Diagnostic[],
		getCompilerOptionsDiagnostics(): Diagnostic[],
		getSyntacticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[],
		getSemanticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[],
		getEncodedSyntacticClassifications(fileName: string, span: TextSpan): Classifications,
		getEncodedSemanticClassifications(fileName: string, span: TextSpan): Classifications,
		getCompletionsAtPosition(fileName: string, position: number): CompletionInfo,
		getCompletionEntryDetails(fileName: string, position: number, entryName: string): CompletionEntryDetails,
		getQuickInfoAtPosition(fileName: string, position: number): QuickInfo,
		getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TextSpan,
		getBreakpointStatementAtPosition(fileName: string, position: number): TextSpan,
		getSignatureHelpItems(fileName: string, position: number): SignatureHelpItems,
		getRenameInfo(fileName: string, position: number): RenameInfo,
		findRenameLocations(
		fileName: string, position: number, findInStrings: boolean, findInComments: boolean
	): RenameLocation[],
		getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[],
		getTypeDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[],
		getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[],
		findReferences(fileName: string, position: number): ReferencedSymbol[],
		getDocumentHighlights(
		fileName: string, position: number, filesToSearch: string[]
	): DocumentHighlights[],
		getOccurrencesAtPosition(fileName: string, position: number): ReferenceEntry[],
		getNavigateToItems(searchValue: string, maxResultCount?: number): NavigateToItem[],
		getNavigationBarItems(fileName: string): NavigationBarItem[],
		getOutliningSpans(fileName: string): OutliningSpan[],
		getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[],
		getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[],
		getIndentationAtPosition(fileName: string, position: number, options: EditorOptions): number,
		getFormattingEditsForRange(
		fileName: string, start: number, end: number, options: FormatCodeOptions
	): TextChange[],
		getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions): TextChange[],
		getFormattingEditsAfterKeystroke(
		fileName: string, position: number, key: string, options: FormatCodeOptions
	): TextChange[],
		getDocCommentTemplateAtPosition(fileName: string, position: number): TextInsertion,
		getEmitOutput(fileName: string): EmitOutput,
		getProgram(): Program,
		getSourceFile(fileName: string): SourceFile,
		dispose(): void
	}

	declare interface Classifications {
		spans: number[],
		endOfLineState: EndOfLineState
	}

	declare interface ClassifiedSpan {
		textSpan: TextSpan,
		classificationType: string
	}

	declare interface NavigationBarItem {
		text: string,
		kind: string,
		kindModifiers: string,
		spans: TextSpan[],
		childItems: NavigationBarItem[],
		indent: number,
		bolded: boolean,
		grayed: boolean
	}

	declare interface TodoCommentDescriptor {
		text: string,
		priority: number
	}

	declare interface TodoComment {
		descriptor: TodoCommentDescriptor,
		message: string,
		position: number
	}

	declare interface TextInsertion {
		newText: string,
		caretOffset: number
	}

	declare interface RenameLocation {
		textSpan: TextSpan,
		fileName: string
	}

	declare interface ReferenceEntry {
		textSpan: TextSpan,
		fileName: string,
		isWriteAccess: boolean
	}

	declare interface DocumentHighlights {
		fileName: string,
		highlightSpans: HighlightSpan[]
	}

	declare interface HighlightSpan {
		fileName?: string,
		textSpan: TextSpan,
		kind: string
	}

	declare interface NavigateToItem {
		name: string,
		kind: string,
		kindModifiers: string,
		matchKind: string,
		isCaseSensitive: boolean,
		fileName: string,
		textSpan: TextSpan,
		containerName: string,
		containerKind: string
	}

	declare interface EditorOptions {
		IndentSize: number,
		TabSize: number,
		NewLineCharacter: string,
		ConvertTabsToSpaces: boolean
	}

	declare interface FormatCodeOptions {
		InsertSpaceAfterCommaDelimiter: boolean,
		InsertSpaceAfterSemicolonInForStatements: boolean,
		InsertSpaceBeforeAndAfterBinaryOperators: boolean,
		InsertSpaceAfterKeywordsInControlFlowStatements: boolean,
		InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean,
		InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean,
		InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: boolean,
		PlaceOpenBraceOnNewLineForFunctions: boolean,
		PlaceOpenBraceOnNewLineForControlBlocks: boolean,
		[s: string]: boolean | number | string
	}

	declare interface DefinitionInfo {
		fileName: string,
		textSpan: TextSpan,
		kind: string,
		name: string,
		containerKind: string,
		containerName: string
	}

	declare interface ReferencedSymbol {
		definition: DefinitionInfo,
		references: ReferenceEntry[]
	}

	declare interface SymbolDisplayPart {
		text: string,
		kind: string
	}

	declare interface QuickInfo {
		kind: string,
		kindModifiers: string,
		textSpan: TextSpan,
		displayParts: SymbolDisplayPart[],
		documentation: SymbolDisplayPart[]
	}

	declare interface RenameInfo {
		canRename: boolean,
		localizedErrorMessage: string,
		displayName: string,
		fullDisplayName: string,
		kind: string,
		kindModifiers: string,
		triggerSpan: TextSpan
	}

	declare interface SignatureHelpParameter {
		name: string,
		documentation: SymbolDisplayPart[],
		displayParts: SymbolDisplayPart[],
		isOptional: boolean
	}

	declare interface SignatureHelpItem {
		isVariadic: boolean,
		prefixDisplayParts: SymbolDisplayPart[],
		suffixDisplayParts: SymbolDisplayPart[],
		separatorDisplayParts: SymbolDisplayPart[],
		parameters: SignatureHelpParameter[],
		documentation: SymbolDisplayPart[]
	}

	declare interface SignatureHelpItems {
		items: SignatureHelpItem[],
		applicableSpan: TextSpan,
		selectedItemIndex: number,
		argumentIndex: number,
		argumentCount: number
	}

	declare interface CompletionInfo {
		isMemberCompletion: boolean,
		isNewIdentifierLocation: boolean,
		entries: CompletionEntry[]
	}

	declare interface CompletionEntry {
		name: string,
		kind: string,
		kindModifiers: string,
		sortText: string
	}

	declare interface CompletionEntryDetails {
		name: string,
		kind: string,
		kindModifiers: string,
		displayParts: SymbolDisplayPart[],
		documentation: SymbolDisplayPart[]
	}

	declare interface OutliningSpan {
		textSpan: TextSpan,
		hintSpan: TextSpan,
		bannerText: string,
		autoCollapse: boolean
	}

	declare interface EmitOutput {
		outputFiles: OutputFile[],
		emitSkipped: boolean
	}

	declare interface OutputFile {
		name: string,
		writeByteOrderMark: boolean,
		text: string
	}

	declare interface ClassificationResult {
		finalLexState: EndOfLineState,
		entries: ClassificationInfo[]
	}

	declare interface ClassificationInfo {
		length: number,
		classification: TokenClass
	}

	declare interface Classifier {
		getClassificationsForLine(
		text: string, lexState: EndOfLineState, syntacticClassifierAbsent: boolean
	): ClassificationResult,
		getEncodedLexicalClassifications(
		text: string, endOfLineState: EndOfLineState, syntacticClassifierAbsent: boolean
	): Classifications
	}

	declare interface DocumentRegistry {
		acquireDocument(
		fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string
	): SourceFile,
		updateDocument(
		fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string
	): SourceFile,
		releaseDocument(fileName: string, compilationSettings: CompilerOptions): void,
		reportStats(): string
	}

	declare interface DisplayPartsSymbolWriter {
		displayParts(): SymbolDisplayPart[]
	}

	declare interface TranspileOptions {
		compilerOptions?: CompilerOptions,
		fileName?: string,
		reportDiagnostics?: boolean,
		moduleName?: string,
		renamedDependencies?: Map<string>
	}

	declare interface TranspileOutput {
		outputText: string,
		diagnostics?: Diagnostic[],
		sourceMapText?: string
	}

	declare function tokenToString(t: SyntaxKind): string

	declare function getPositionOfLineAndCharacter(sourceFile: SourceFile, line: number, character: number): number

	declare function getLineAndCharacterOfPosition(sourceFile: SourceFile, position: number): LineAndCharacter

	declare function isWhiteSpace(ch: number): boolean

	declare function isLineBreak(ch: number): boolean

	declare function couldStartTrivia(text: string, pos: number): boolean

	declare function getLeadingCommentRanges(text: string, pos: number): CommentRange[]

	declare function getTrailingCommentRanges(text: string, pos: number): CommentRange[]

	declare function getShebang(text: string): string

	declare function isIdentifierStart(ch: number, languageVersion: ScriptTarget): boolean

	declare function isIdentifierPart(ch: number, languageVersion: ScriptTarget): boolean

	declare function createScanner(
		languageVersion: ScriptTarget, skipTrivia: boolean, languageVariant?: LanguageVariant, text?: string, onError?: ErrorCallback, start?: number, length?: number
	): Scanner

	declare function getDefaultLibFileName(options: CompilerOptions): string

	declare function textSpanEnd(span: TextSpan): number

	declare function textSpanIsEmpty(span: TextSpan): boolean

	declare function textSpanContainsPosition(span: TextSpan, position: number): boolean

	declare function textSpanContainsTextSpan(span: TextSpan, other: TextSpan): boolean

	declare function textSpanOverlapsWith(span: TextSpan, other: TextSpan): boolean

	declare function textSpanOverlap(span1: TextSpan, span2: TextSpan): TextSpan

	declare function textSpanIntersectsWithTextSpan(span: TextSpan, other: TextSpan): boolean

	declare function textSpanIntersectsWith(span: TextSpan, start: number, length: number): boolean

	declare function decodedTextSpanIntersectsWith(start1: number, length1: number, start2: number, length2: number): boolean

	declare function textSpanIntersectsWithPosition(span: TextSpan, position: number): boolean

	declare function textSpanIntersection(span1: TextSpan, span2: TextSpan): TextSpan

	declare function createTextSpan(start: number, length: number): TextSpan

	declare function createTextSpanFromBounds(start: number, end: number): TextSpan

	declare function textChangeRangeNewSpan(range: TextChangeRange): TextSpan

	declare function textChangeRangeIsUnchanged(range: TextChangeRange): boolean

	declare function createTextChangeRange(span: TextSpan, newLength: number): TextChangeRange

	declare function collapseTextChangeRangesAcrossMultipleVersions(changes: TextChangeRange[]): TextChangeRange

	declare function getTypeParameterOwner(d: Declaration): Declaration

	declare function getNodeConstructor(kind: SyntaxKind): NO PRINT IMPLEMENTED: ConstructorType

	declare function createNode(kind: SyntaxKind): Node

	declare function forEachChild<T>(
		node: Node, cbNode: (node: Node) => T, cbNodeArray?: (nodes: Node[]) => T
	): T

	declare function createSourceFile(
		fileName: string, sourceText: string, languageVersion: ScriptTarget, setParentNodes?: boolean
	): SourceFile

	declare function updateSourceFile(
		sourceFile: SourceFile, newText: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean
	): SourceFile

	declare function findConfigFile(searchPath: string): string

	declare function resolveTripleslashReference(moduleName: string, containingFile: string): string

	declare function resolveModuleName(
		moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost
	): ResolvedModuleWithFailedLookupLocations

	declare function nodeModuleNameResolver(
		moduleName: string, containingFile: string, host: ModuleResolutionHost
	): ResolvedModuleWithFailedLookupLocations

	declare function classicNameResolver(
		moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost
	): ResolvedModuleWithFailedLookupLocations

	declare function createCompilerHost(options: CompilerOptions, setParentNodes?: boolean): CompilerHost

	declare function getPreEmitDiagnostics(
		program: Program, sourceFile?: SourceFile, cancellationToken?: CancellationToken
	): Diagnostic[]

	declare function flattenDiagnosticMessageText(messageText: string | DiagnosticMessageChain, newLine: string): string

	declare function createProgram(
		rootNames: string[], options: CompilerOptions, host?: CompilerHost, oldProgram?: Program
	): Program

	declare function parseCommandLine(commandLine: string[], readFile?: (path: string) => string): ParsedCommandLine

	declare function readConfigFile(fileName: string): {
		config?: any,
		error?: Diagnostic
	}

	declare function parseConfigFileText(fileName: string, jsonText: string): {
		config?: any,
		error?: Diagnostic
	}

	declare function parseConfigFile(json: any, host: ParseConfigHost, basePath: string): ParsedCommandLine

	declare function displayPartsToString(displayParts: SymbolDisplayPart[]): string

	declare function getDefaultCompilerOptions(): CompilerOptions

	declare function transpileModule(input: string, transpileOptions: TranspileOptions): TranspileOutput

	declare function transpile(
		input: string, compilerOptions?: CompilerOptions, fileName?: string, diagnostics?: Diagnostic[], moduleName?: string
	): string

	declare function createLanguageServiceSourceFile(
		fileName: string, scriptSnapshot: IScriptSnapshot, scriptTarget: ScriptTarget, version: string, setNodeParents: boolean
	): SourceFile

	declare function updateLanguageServiceSourceFile(
		sourceFile: SourceFile, scriptSnapshot: IScriptSnapshot, version: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean
	): SourceFile

	declare function createGetCanonicalFileName(useCaseSensitivefileNames: boolean): (fileName: string) => string

	declare function createDocumentRegistry(useCaseSensitiveFileNames?: boolean): DocumentRegistry

	declare function preProcessFile(sourceText: string, readImportFiles?: boolean): PreProcessedFileInfo

	declare function createLanguageService(
		host: LanguageServiceHost, documentRegistry?: DocumentRegistry
	): LanguageService

	declare function createClassifier(): Classifier

	declare function getDefaultLibFilePath(options: CompilerOptions): string

	declare class OperationCanceledException  {
		
	}

	declare class TextChange  {
		span: TextSpan;
		newText: string
	}

	declare class ClassificationTypeNames  {
		comment: string;
		identifier: string;
		keyword: string;
		numericLiteral: string;
		operator: string;
		stringLiteral: string;
		whiteSpace: string;
		text: string;
		punctuation: string;
		className: string;
		enumName: string;
		interfaceName: string;
		moduleName: string;
		typeParameterName: string;
		typeAliasName: string;
		parameterName: string;
		docCommentTagName: string
	}

	
}

declare module 'ScriptSnapshot' {
			declare function fromString(text: string): IScriptSnapshot

		
}
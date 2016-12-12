

declare module 'first-mate' {
					declare module.exports: undefined


}

declare module 'npm$namespace$AtomFirstMate' {
	declare type Disposable = AtomEventKit.Disposable;

	declare interface IToken {
		value: string,
		scopes: string[]
	}

	declare interface TokenizeLineResult {
		line: string,
		tags: any[],
		tokens?: IToken[],
		ruleStack: Rule[]
	}

	declare interface Rule {
		
	}

	declare interface GrammarStatic {
		prototype: Grammar,
		new (registry: GrammarRegistry, options?: any): Grammar
	}

	declare interface Grammar {
		constructor: GrammarStatic,
		onDidUpdate(callback: Function): Disposable,
		tokenizeLines(text: string): Array<Array<IToken>>,
		tokenizeLine(
		line: string, ruleStack?: Rule[], firstLine?: boolean, compatibilityMode?: boolean
	): TokenizeLineResult
	}

	declare interface GrammarRegistryStatic {
		prototype: GrammarRegistry,
		new (options?: {
		maxTokensPerLine: number
	}): GrammarRegistry
	}

	declare interface GrammarRegistry {
		constructor: GrammarRegistryStatic,
		onDidAddGrammar(callback: (grammar: Grammar) => void): Disposable,
		onDidUpdateGrammar(callback: (grammar: Grammar) => void): Disposable,
		getGrammars(): Grammar[],
		grammarForScopeName(scopeName: string): Grammar,
		addGrammar(grammar: Grammar): Disposable,
		removeGrammarForScopeName(scopeName: string): Grammar,
		readGrammarSync(grammarPath: string): Grammar,
		readGrammar(grammarPath: string, callback: (error: Error, grammar: Grammar) => void): void,
		loadGrammarSync(grammarPath: string): Grammar,
		loadGrammar(grammarPath: string, callback: (error: Error, grammar: Grammar) => void): void,
		grammarOverrideForPath(filePath: string): Grammar,
		setGrammarOverrideForPath(filePath: string, scopeName: string): Grammar,
		clearGrammarOverrides(): void,
		selectGrammar(filePath: string, fileContents: string): Grammar
	}

			
}
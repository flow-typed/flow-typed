

declare module 'natural' {
		declare interface Tokenizer {
		tokenize(text: string): string[]
	}

	declare interface RegexTokenizerOptions {
		pattern: RegExp,
		discardEmpty?: boolean
	}

	declare interface Stemmer {
		stem(token: string): string
	}

	declare interface BayesClassifierCallback {
		(err: any, classifier: any): void
	}

	declare interface LogisticRegressionClassifierCallback {
		(err: any, classifier: any): void
	}

	declare interface Phonetic {
		compare(stringA: string, stringB: string): boolean,
		process(token: string, maxLength?: number): string
	}

	declare interface TfIdfCallback {
		(i: number, measure: number): void
	}

	declare interface TfIdfTerm {
		term: string,
		tfidf: number
	}

	declare interface WordNetLookupResults {
		synsetOffset: number,
		pos: string,
		lemma: string,
		synonyms: string[],
		gloss: string
	}

	declare interface WordNetLookupCallback {
		(results: WordNetLookupResults[]): void
	}

	declare interface WordNetGetCallback {
		(results: WordNetLookupResults): void
	}

	declare function JaroWinklerDistance(s1: string, s2: string, dt?: number): number

	declare function LevenshteinDistance(source: string, target: string, options?: any): number

	declare function DiceCoefficient(str1: string, str2: string): number

	declare class WordTokenizer extends Tokenizer {
		tokenize(text: string): string[]
	}

	declare class AggressiveTokenizer extends Tokenizer {
		tokenize(text: string): string[]
	}

	declare class TreebankWordTokenizer extends Tokenizer {
		tokenize(text: string): string[]
	}

	declare class RegexpTokenizer extends Tokenizer {
		constructor(options: RegexTokenizerOptions): this;
		tokenize(text: string): string[]
	}

	declare class WordPunctTokenizer extends Tokenizer {
		tokenize(text: string): string[]
	}

	declare class BayesClassifier  {
		events: events.EventEmitter;
		addDocument(text: string, stem: string): void;
		addDocument(text: string[], stem: string): void;
		train(): void;
		classify(observation: string): string;
		getClassifications(observation: string): string[];
		save(filename: string, callback: BayesClassifierCallback): void;
		load(filename: string, stemmer: Stemmer, callback: BayesClassifierCallback): void;
		restore(classifier: any, stemmer?: Stemmer): BayesClassifier
	}

	declare class LogisticRegressionClassifier  {
		events: events.EventEmitter;
		addDocument(text: string, stem: string): void;
		addDocument(text: string[], stem: string): void;
		train(): void;
		classify(observation: string): string;
		getClassifications(observation: string): string[];
		save(filename: string, callback: LogisticRegressionClassifierCallback): void;
		load(
		filename: string, stemmer: Stemmer, callback: LogisticRegressionClassifierCallback
	): void;
		restore(classifier: any, stemmer?: Stemmer): LogisticRegressionClassifier
	}

	declare class NounInflector  {
		pluralize(token: string): string;
		singularize(token: string): string
	}

	declare class PresentVerbInflector  {
		pluralize(token: string): string;
		singularize(token: string): string
	}

	declare class TfIdf  {
		constructor(deserialized?: any): this;
		addDocument(document: string, key?: string, restoreCache?: boolean): void;
		addDocument(document: string[], key?: string, restoreCache?: boolean): void;
		addFileSync(path: string, encoding?: string, key?: string, restoreCache?: boolean): void;
		tfidf(terms: string, d: number): void;
		tfidfs(terms: string, callback: TfIdfCallback): void;
		tfidfs(terms: string[], callback: TfIdfCallback): void;
		listTerms(d: number): TfIdfTerm[]
	}

	declare class Trie  {
		constructor(caseSensitive?: boolean): this;
		addString(text: string): boolean;
		addStrings(strings: string[]): void;
		contains(token: string): boolean;
		findPrefix(text: string): string[];
		findMatchesOnPath(text: string): string[];
		keysWithPrefix(text: string): string[]
	}

	declare class EdgeWeightedDigraph  {
		add(start: number, end: number, weight: number): void;
		v(): number;
		e(): number
	}

	declare class ShortestPathTree  {
		constructor(diagraph: EdgeWeightedDigraph, startVertex: number): this;
		getDistTo(vertex: number): number;
		hasDistTo(vertex: number): boolean;
		pathTo(vertex: number): number[]
	}

	declare class LongestPathTree  {
		constructor(diagraph: EdgeWeightedDigraph, startVertex: number): this;
		getDistTo(vertex: number): number;
		hasDistTo(vertex: number): boolean;
		pathTo(vertex: number): number[]
	}

	declare class WordNet  {
		constructor(filename?: string): this;
		lookup(word: string, callback: WordNetLookupCallback): void;
		get(synsetOffset: number, pos: string, callback: WordNetGetCallback): void
	}

	declare class Spellcheck  {
		constructor(wordlist: string[]): this;
		isCorrect(word: string): boolean;
		getCorrections(word: string, maxDistance?: number): string[]
	}

	
}
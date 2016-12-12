

declare module 'source-map' {
					declare module.exports: undefined


}

declare module 'npm$namespace$SourceMap' {
		declare interface StartOfSourceMap {
		file?: string,
		sourceRoot?: string
	}

	declare interface RawSourceMap {
		version: string,
		sources: Array<string>,
		names: Array<string>,
		sourcesContent?: string[],
		mappings: string
	}

	declare interface Position {
		line: number,
		column: number
	}

	declare interface MappedPosition {
		source: string,
		name?: string
	}

	declare interface MappingItem {
		source: string,
		generatedLine: number,
		generatedColumn: number,
		originalLine: number,
		originalColumn: number,
		name: string
	}

	declare interface Mapping {
		generated: Position,
		original: Position,
		source: string,
		name?: string
	}

	declare interface CodeWithSourceMap {
		code: string,
		map: SourceMapGenerator
	}

		declare class SourceMapConsumer  {
		GENERATED_ORDER: number;
		ORIGINAL_ORDER: number;
		constructor(rawSourceMap: RawSourceMap): this;
		originalPositionFor(generatedPosition: Position): MappedPosition;
		generatedPositionFor(originalPosition: MappedPosition): Position;
		sourceContentFor(source: string): string;
		eachMapping(callback: (mapping: MappingItem) => void, context?: any, order?: number): void
	}

	declare class SourceMapGenerator  {
		constructor(startOfSourceMap?: StartOfSourceMap): this;
		fromSourceMap(sourceMapConsumer: SourceMapConsumer): SourceMapGenerator;
		addMapping(mapping: Mapping): void;
		setSourceContent(sourceFile: string, sourceContent: string): void;
		applySourceMap(
		sourceMapConsumer: SourceMapConsumer, sourceFile?: string, sourceMapPath?: string
	): void;
		toString(): string;
		toJSON(): RawSourceMap
	}

	declare class SourceNode  {
		constructor(): this;
		constructor(line: number, column: number, source: string): this;
		constructor(line: number, column: number, source: string, chunk?: string, name?: string): this;
		fromStringWithSourceMap(
		code: string, sourceMapConsumer: SourceMapConsumer, relativePath?: string
	): SourceNode;
		add(chunk: any): SourceNode;
		prepend(chunk: any): SourceNode;
		setSourceContent(sourceFile: string, sourceContent: string): void;
		walk(fn: (chunk: string, mapping: MappedPosition) => void): void;
		walkSourceContents(fn: (file: string, content: string) => void): void;
		join(sep: string): SourceNode;
		replaceRight(pattern: string, replacement: string): SourceNode;
		toString(): string;
		toStringWithSourceMap(startOfSourceMap?: StartOfSourceMap): CodeWithSourceMap
	}

	
}
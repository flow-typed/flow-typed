

declare module 'diff' {
					declare module.exports: undefined


}

declare module 'npm$namespace$JsDiff' {
		declare interface IDiffResult {
		value: string,
		count?: number,
		added?: boolean,
		removed?: boolean
	}

	declare interface IBestPath {
		newPos: number,
		componenets: IDiffResult[]
	}

	declare interface IHunk {
		oldStart: number,
		oldLines: number,
		newStart: number,
		newLines: number,
		lines: string[]
	}

	declare interface IUniDiff {
		oldFileName: string,
		newFileName: string,
		oldHeader: string,
		newHeader: string,
		hunks: IHunk[]
	}

	declare function diffChars(oldStr: string, newStr: string): IDiffResult[]

	declare function diffWords(oldStr: string, newStr: string): IDiffResult[]

	declare function diffWordsWithSpace(oldStr: string, newStr: string): IDiffResult[]

	declare function diffJson(oldObj: Object, newObj: Object): IDiffResult[]

	declare function diffLines(oldStr: string, newStr: string): IDiffResult[]

	declare function diffCss(oldStr: string, newStr: string): IDiffResult[]

	declare function createPatch(
		fileName: string, oldStr: string, newStr: string, oldHeader: string, newHeader: string, options?: {
		context: number
	}
	): string

	declare function createTwoFilesPatch(
		oldFileName: string, newFileName: string, oldStr: string, newStr: string, oldHeader: string, newHeader: string, options?: {
		context: number
	}
	): string

	declare function structuredPatch(
		oldFileName: string, newFileName: string, oldStr: string, newStr: string, oldHeader: string, newHeader: string, options?: {
		context: number
	}
	): IUniDiff

	declare function applyPatch(oldStr: string, uniDiff: string | IUniDiff | IUniDiff[]): string

	declare function applyPatches(
		uniDiff: IUniDiff[], options: {
		loadFile: (index: number, callback: (err: Error, data: string) => void) => void,
		patched: (index: number, content: string) => void,
		complete: (err?: Error) => void
	}
	): void

	declare function parsePatch(diffStr: string, options?: {
		strict: boolean
	}): IUniDiff[]

	declare function convertChangesToXML(changes: IDiffResult[]): string

	declare function convertChangesToDMP(changes: IDiffResult[]): {
		0: number,
		1: string
	}[]

	declare class Diff  {
		ignoreWhitespace: boolean;
		constructor(ignoreWhitespace?: boolean): this;
		diff(oldString: string, newString: string): IDiffResult[];
		pushComponent(
		components: IDiffResult[], value: string, added: boolean, removed: boolean
	): void;
		extractCommon(
		basePath: IBestPath, newString: string, oldString: string, diagonalPath: number
	): number;
		equals(left: string, right: string): boolean;
		join(left: string, right: string): string;
		tokenize(value: string): any
	}

	
}
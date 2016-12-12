

declare module 'diff2html' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Diff2Html' {
		declare export interface Options {
		inputFormat?: string,
		outputFormat?: string,
		showFiles?: boolean,
		matching?: string,
		synchronisedScroll?: boolean,
		matchWordsThreshold?: number,
		matchingMaxComparisons?: number
	}

	declare export interface Line {
		content: string,
		type: string,
		oldNumber: number,
		newNumber: number
	}

	declare export interface Block {
		oldStartLine: number,
		oldStartLine2?: number,
		newStartLine: number,
		header: string,
		lines: Line[]
	}

	declare export interface Result {
		addedLines: number,
		deletedLines: number,
		isCombined: boolean,
		isGitDiff: boolean,
		oldName: string,
		newName: string,
		language: string,
		blocks: Block[],
		oldMode?: string,
		newMode?: string,
		deletedFileMode?: string,
		newFileMode?: string,
		isDeleted?: boolean,
		isNew?: boolean,
		isCopy?: boolean,
		isRename?: boolean,
		unchangedPercentage?: number,
		changedPercentage?: number,
		checksumBefore?: string,
		checksumAfter?: string,
		mode?: string
	}

	declare export interface Diff2Html {
		getJsonFromDiff(input: string, configuration?: Options): Result,
		getPrettyHtml(input: any, configuration?: Options): string
	}

			
}
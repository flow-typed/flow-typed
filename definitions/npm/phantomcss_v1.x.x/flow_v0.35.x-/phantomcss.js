

declare module 'phantomcss' {
					
}

declare module 'npm$namespace$PhantomCSS' {
		declare interface PhantomCSS {
		init(options: PhantomCSSOptions): void,
		update(options: PhantomCSSOptions): void,
		screenshot(target: string, fileName?: string): void,
		screenshot(target: ClipRect, fileName?: string): void,
		screenshot(
		target: string, timeToWait: number, hideSelector: string, fileName?: string
	): void,
		compareAll(exclude: string): void,
		compareAll(exclude: string, diffList: string[], include: string): void,
		compareMatched(match: string, exclude: string): void,
		compareMatched(match: RegExp, exclude: RegExp): void,
		compareExplicit(list: string[]): void,
		compareSession(list?: any[]): void,
		compareFiles(baseFile: string, diffFiles: string): PhantomCSSTest,
		waitForTests(tests: PhantomCSSTest[]): void,
		done(): void,
		turnOffAnimations(): void,
		getExitStatus(): number,
		getCreatedDiffFiles(): Array<string>
	}

	declare interface PhantomCSSTest {
		filename?: string,
		error?: boolean,
		fail?: boolean,
		success?: boolean,
		failFile?: string,
		mismatch?: any
	}

	declare interface PhantomCSSOptions {
		rebase?: any,
		casper?: Casper,
		libraryRoot?: string,
		screenshotRoot?: string,
		failedComparisonsRoot?: string,
		comparisonResultRoot?: string,
		addIteratorToImage: boolean,
		cleanupComparisonImages?: boolean,
		addLabelToFailedImage?: boolean,
		fileNameGetter?: (rootPath: string, fileName?: string) => string,
		mismatchTolerance?: number,
		onPass?: (test: PhantomCSSTest) => void,
		onFail?: (test: PhantomCSSTest) => void,
		onTimeout?: (test: PhantomCSSTest) => void,
		onComplete?: (tests: PhantomCSSTest[], noOfFails: number, noOfErrors: number) => void,
		onNewImage?: (test: PhantomCSSTest) => void,
		prefixCount?: boolean,
		hideElements?: string,
		outputSettings?: Resemble.OutputSettings
	}

			
}
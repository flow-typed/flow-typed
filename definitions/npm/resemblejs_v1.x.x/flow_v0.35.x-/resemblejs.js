import type { ResembleStatic } from 'npm$namespace$Resemble'

declare module 'resemblejs' {
					
}

declare module 'npm$namespace$Resemble' {
		declare interface ResembleStatic {
		(image: string | ImageData): ResembleAnalysis,
		outputSettings(settings: OutputSettings): ResembleStatic
	}

	declare interface OutputSettings {
		errorColor: {
		red: number,
		green: number,
		blue: number
	},
		errorType: string,
		transparency: number,
		largeImageThreshold: number
	}

	declare interface ResembleAnalysis {
		onComplete(callback: (result: ResembleAnalysisResult) => void): void,
		compareTo(fileData: string | ImageData): ResembleComparison
	}

	declare interface ResembleAnalysisResult {
		red: number,
		green: number,
		blue: number,
		brightness: number
	}

	declare interface ResembleComparison {
		onComplete(callback: (result: ResembleComparisonResult) => void): void,
		ignoreNothing(): ResembleComparison,
		ignoreAntialiasing(): ResembleComparison,
		ignoreColors(): ResembleComparison,
		repaint(): ResembleComparison
	}

	declare interface ResembleComparisonResult {
		isSameDimensions: boolean,
		dimensionDifference: {
		width: number,
		height: number
	},
		getImageDataUrl(): string,
		misMatchPercentage: number,
		diffBounds: {
		top: number,
		left: number,
		bottom: number,
		right: number
	},
		analysisTime: number
	}

			
}
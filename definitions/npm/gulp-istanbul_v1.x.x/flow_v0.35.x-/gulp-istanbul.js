

declare module 'gulp-istanbul' {
			declare function GulpIstanbul(opts?: GulpIstanbul.Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}

declare module 'GulpIstanbul' {
		declare interface Options {
		coverageVariable?: string,
		includeUntested?: boolean,
		embedSource?: boolean,
		preserveComments?: boolean,
		noCompact?: boolean,
		noAutoWrap?: boolean,
		codeGenerationOptions?: Object,
		debug?: boolean,
		walkDebug?: boolean
	}

	declare interface Coverage {
		lines: CoverageStats,
		statements: CoverageStats,
		functions: CoverageStats,
		branches: CoverageStats
	}

	declare interface CoverageStats {
		total: number,
		covered: number,
		skipped: number,
		pct: number
	}

	declare interface ReportOptions {
		dir?: string,
		reporters?: string[],
		reportOpts?: {
		dir?: string
	},
		coverageVariable?: string
	}

	declare interface ThresholdOptions {
		coverageVariable?: string,
		thresholds?: {
		global?: CoverageOptions | number,
		each?: CoverageOptions | number
	}
	}

	declare interface CoverageOptions {
		lines?: number,
		statements?: number,
		functions?: number,
		branches?: number
	}

	declare export function hookRequire(): NodeJS.ReadWriteStream

	declare export function summarizeCoverage(opts?: {
		coverageVariable?: string
	}): Coverage

	declare export function writeReports(opts?: ReportOptions): NodeJS.ReadWriteStream

	declare export function enforceThresholds(opts?: ThresholdOptions): NodeJS.ReadWriteStream

		
}


declare module 'micromatch' {
	declare type MatchFunction<T> = ((value: T) => boolean);

	declare type Pattern = (string | RegExp | MatchFunction<string>);

	declare interface Options {
		unixify?: boolean,
		dot?: boolean,
		unescape?: boolean,
		nodupes?: boolean,
		matchBase?: boolean,
		nobraces?: boolean,
		nobrackets?: boolean,
		noextglob?: boolean,
		nocase?: boolean,
		nonull?: boolean,
		cache?: boolean
	}

	declare interface Glob {
		options: micromatch.Options,
		pattern: string,
		history: {
		msg: any,
		pattern: string
	}[],
		tokens: parseGlob.Result,
		orig: string,
		negated: boolean,
		init(pattern: string): void,
		track(msg: any): void,
		isNegated(): boolean,
		braces(): void,
		brackets(): void,
		extglob(): void,
		parse(pattern: string): parseGlob.Result,
		escape(pattern: string): string,
		unescape(pattern: string): string
	}

	declare interface GlobData {
		pattern: string,
		tokens: parseGlob.Result,
		options: micromatch.Options
	}

	declare interface Micromatch {
		(files: string | string[], patterns: micromatch.Pattern | micromatch.Pattern[]): string[],
		isMatch: {
		(filePath: string, pattern: micromatch.Pattern, opts?: micromatch.Options): boolean,
		(filePath: string, opts?: micromatch.Options): micromatch.MatchFunction<string>
	},
		contains(
		filePath: string, pattern: micromatch.Pattern, opts?: micromatch.Options
	): boolean,
		matcher(pattern: micromatch.Pattern): micromatch.MatchFunction<string>,
		filter(
		patterns: micromatch.Pattern | micromatch.Pattern[], opts?: micromatch.Options
	): micromatch.MatchFunction<any>,
		any(
		filePath: string, patterns: micromatch.Pattern | micromatch.Pattern[], opts?: micromatch.Options
	): boolean,
		expand(
		pattern: string, opts?: micromatch.Options
	): micromatch.Glob | micromatch.GlobData,
		makeRe(pattern: string, opts?: micromatch.Options): RegExp
	}

			declare module.exports: Micromatch


}
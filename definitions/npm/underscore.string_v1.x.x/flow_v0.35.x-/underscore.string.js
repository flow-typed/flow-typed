

declare module 'underscore.string' {
		declare interface UnderscoreStatic {
		str: UnderscoreStringStatic,
		string: UnderscoreStringStatic
	}

	declare interface UnderscoreStringStatic {
		include(str: string, needle: string): boolean,
		contains(str: string, needle: string): boolean,
		reverse(str: string): string
	}

	declare interface UnderscoreStringStaticExports {
		exports(): UnderscoreStringStaticExports,
		isBlank(str: string): boolean,
		stripTags(str: string): string,
		capitalize(str: string): string,
		decapitalize(str: string): string,
		chop(str: string, step: number): any[],
		clean(str: string): string,
		count(str: string, substr: string): number,
		chars(str: string): any[],
		swapCase(str: string): string,
		escapeHTML(str: string): string,
		unescapeHTML(str: string): string,
		escapeRegExp(str: string): string,
		splice(str: string, i: number, howmany: number, substr?: string): string,
		insert(str: string, i: number, substr: string): string,
		join(separator: string, ...args: string[]): string,
		lines(str: string): any[],
		startsWith(str: string, starts: string): boolean,
		endsWith(value: string, starts: string): boolean,
		succ(str: string): string,
		titleize(str: string): string,
		camelize(str: string): string,
		underscored(str: string): string,
		dasherize(str: string): string,
		classify(str: string): string,
		humanize(str: string): string,
		trim(str: string, characters?: string): string,
		strip(str: string, characters?: string): string,
		ltrim(str: string, characters?: string): string,
		lstrip(str: string, characters?: string): string,
		rtrim(str: string, characters?: string): string,
		rstrip(str: string, characters?: string): string,
		truncate(str: string, length: number, truncateStr?: string): string,
		prune(str: string, length: number, pruneStr?: string): string,
		words(str: string): string[],
		words(str: string, delimiter: string): string[],
		words(str: string, delimiter: RegExp): string[],
		pad(str: string, length: number, padStr?: string, type?: string): string,
		lpad(str: string, length: number, padStr?: string): string,
		rjust(str: string, length: number, padStr?: string): string,
		rpad(str: string, length: number, padStr?: string): string,
		ljust(str: string, length: number, padStr?: string): string,
		lrpad(str: string, length: number, padStr?: string): string,
		center(str: string, length: number, padStr?: string): string,
		sprintf(format: string, ...args: any[]): string,
		toNumber(str: string, decimals?: number): number,
		numberFormat(number: number, dec?: number, dsep?: string, tsep?: string): string,
		strRight(str: string, sep: string): string,
		strRightBack(str: string, sep: string): string,
		strLeft(str: string, sep: string): string,
		strLeftBack(str: string, sep: string): string,
		toSentence(
		array: any[], separator?: string, lastSeparator?: string, serial?: boolean
	): string,
		toSentenceSerial(array: any[], separator?: string, lastSeparator?: string): string,
		slugify(str: string): string,
		surround(str: string, wrapper: string): string,
		quote(str: string, quoteChar?: string): string,
		q(str: string, quoteChar?: string): string,
		unquote(str: string, quoteChar?: string): string,
		repeat(value: string, count: number, separator?: string): string,
		naturalCmp(str1: string, str2: string): number,
		levenshtein(str1: string, str2: string): number,
		toBoolean(str: string, trueValues?: any[], falseValues?: any[]): boolean
	}

			declare module.exports: UnderscoreStringStatic


}
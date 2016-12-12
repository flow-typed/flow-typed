import type { main } from 'npm$namespace$dojox'

declare module 'dojox.main' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface main {
		buddhist: Object,
		charting: Object,
		data: Object,
		functional: Object,
		gesture: Object,
		grid: Object,
		hebrew: Object,
		highlight: Object,
		image: Object,
		islamic: Object,
		json: Object,
		languages: Object,
		math: Object,
		persian: Object,
		regexp: Object,
		relative: Object,
		rpc: Object,
		umalqura: Object,
		util: Object,
		utils: Object,
		validate: Object
	}

			
}

declare module 'main' {
		declare interface charting {
		hideTooltip(gfxObject: dojox.gfx.shape.Shape): void,
		showTooltip(innerHTML: String, gfxObject: dojox.gfx.shape.Shape, positions: String[]): void
	}

	declare interface islamic {
		locale: Object,
		add(date: dojox.date.islamic.Date, interval: String, amount: number): void,
		compare(
		date1: dojox.date.islamic.Date, date2: dojox.date.islamic.Date, portion: String
	): void,
		difference(
		date1: dojox.date.islamic.Date, date2: dojox.date.islamic.Date, interval: String
	): void,
		getDaysInMonth(month: dojox.date.islamic.Date): void
	}

	declare interface languages {
		pygments: Object
	}

	declare interface functional {
		buildLambda(s: String): String,
		clearLambdaCache(): void,
		every(a: any[], f: Function, o: Object): boolean,
		every(a: String, f: Function, o: Object): boolean,
		every(a: Object, f: Function, o: Object): boolean,
		every(a: any[], f: String, o: Object): boolean,
		every(a: String, f: String, o: Object): boolean,
		every(a: Object, f: String, o: Object): boolean,
		every(a: any[], f: any[], o: Object): boolean,
		every(a: String, f: any[], o: Object): boolean,
		every(a: Object, f: any[], o: Object): boolean,
		everyRev(a: any[], f: Function, o: Object): boolean,
		everyRev(a: String, f: Function, o: Object): boolean,
		everyRev(a: any[], f: String, o: Object): boolean,
		everyRev(a: String, f: String, o: Object): boolean,
		everyRev(a: any[], f: any[], o: Object): boolean,
		everyRev(a: String, f: any[], o: Object): boolean,
		filter(a: any[], f: Function, o: Object): any[],
		filter(a: String, f: Function, o: Object): any[],
		filter(a: Object, f: Function, o: Object): any[],
		filter(a: any[], f: String, o: Object): any[],
		filter(a: String, f: String, o: Object): any[],
		filter(a: Object, f: String, o: Object): any[],
		filter(a: any[], f: any[], o: Object): any[],
		filter(a: String, f: any[], o: Object): any[],
		filter(a: Object, f: any[], o: Object): any[],
		filterIn(obj: Object, f: Function, o: Object): Object,
		filterIn(obj: Object, f: String, o: Object): Object,
		filterIn(obj: Object, f: any[], o: Object): Object,
		filterRev(a: any[], f: Function, o: Object): any[],
		filterRev(a: String, f: Function, o: Object): any[],
		filterRev(a: any[], f: String, o: Object): any[],
		filterRev(a: String, f: String, o: Object): any[],
		filterRev(a: any[], f: any[], o: Object): any[],
		filterRev(a: String, f: any[], o: Object): any[],
		foldl(a: any[], f: Function, z: Object, o: Object): any,
		foldl(a: String, f: Function, z: Object, o: Object): any,
		foldl(a: Object, f: Function, z: Object, o: Object): any,
		foldl1(a: any[], f: Function, o: Object): any,
		foldl1(a: String, f: Function, o: Object): any,
		foldl1(a: Object, f: Function, o: Object): any,
		foldl1(a: any[], f: String, o: Object): any,
		foldl1(a: String, f: String, o: Object): any,
		foldl1(a: Object, f: String, o: Object): any,
		foldl1(a: any[], f: any[], o: Object): any,
		foldl1(a: String, f: any[], o: Object): any,
		foldl1(a: Object, f: any[], o: Object): any,
		foldr(a: any[], f: Function, z: Object, o: Object): Object,
		foldr(a: String, f: Function, z: Object, o: Object): Object,
		foldr(a: any[], f: String, z: Object, o: Object): Object,
		foldr(a: String, f: String, z: Object, o: Object): Object,
		foldr(a: any[], f: any[], z: Object, o: Object): Object,
		foldr(a: String, f: any[], z: Object, o: Object): Object,
		foldr1(a: any[], f: Function, o: Object): any,
		foldr1(a: String, f: Function, o: Object): any,
		foldr1(a: any[], f: String, o: Object): any,
		foldr1(a: String, f: String, o: Object): any,
		foldr1(a: any[], f: any[], o: Object): any,
		foldr1(a: String, f: any[], o: Object): any,
		forEach(a: any[], f: Function, o: Object): String,
		forEach(a: String, f: Function, o: Object): String,
		forEach(a: Object, f: Function, o: Object): String,
		forEach(a: any[], f: String, o: Object): String,
		forEach(a: String, f: String, o: Object): String,
		forEach(a: Object, f: String, o: Object): String,
		forEach(a: any[], f: any[], o: Object): String,
		forEach(a: String, f: any[], o: Object): String,
		forEach(a: Object, f: any[], o: Object): String,
		forEachRev(a: any[], f: Function, o: Object): void,
		forEachRev(a: String, f: Function, o: Object): void,
		forEachRev(a: any[], f: String, o: Object): void,
		forEachRev(a: String, f: String, o: Object): void,
		forEachRev(a: any[], f: any[], o: Object): void,
		forEachRev(a: String, f: any[], o: Object): void,
		forIn(obj: Object, f: Function, o: Object): String,
		forIn(obj: Object, f: String, o: Object): String,
		forIn(obj: Object, f: any[], o: Object): String,
		keys(obj: Object): any[],
		lambda(s: Function): Function,
		lambda(s: String): Function,
		lambda(s: any[]): Function,
		map(a: any[], f: Function, o: Object): any[],
		map(a: String, f: Function, o: Object): any[],
		map(a: Object, f: Function, o: Object): any[],
		map(a: any[], f: String, o: Object): any[],
		map(a: String, f: String, o: Object): any[],
		map(a: Object, f: String, o: Object): any[],
		map(a: any[], f: any[], o: Object): any[],
		map(a: String, f: any[], o: Object): any[],
		map(a: Object, f: any[], o: Object): any[],
		mapIn(obj: Object, f: Function, o: Object): Object,
		mapIn(obj: Object, f: String, o: Object): Object,
		mapIn(obj: Object, f: any[], o: Object): Object,
		mapRev(a: any[], f: Function, o: Object): any,
		mapRev(a: String, f: Function, o: Object): any,
		mapRev(a: any[], f: String, o: Object): any,
		mapRev(a: String, f: String, o: Object): any,
		mapRev(a: any[], f: any[], o: Object): any,
		mapRev(a: String, f: any[], o: Object): any,
		rawLambda(s: String): any,
		reduce(a: any[], f: Function, z: Object): any,
		reduce(a: String, f: Function, z: Object): any,
		reduce(a: Object, f: Function, z: Object): any,
		reduce(a: any[], f: String, z: Object): any,
		reduce(a: String, f: String, z: Object): any,
		reduce(a: Object, f: String, z: Object): any,
		reduce(a: any[], f: any[], z: Object): any,
		reduce(a: String, f: any[], z: Object): any,
		reduce(a: Object, f: any[], z: Object): any,
		reduceRight(a: any[], f: Function, z: Object): any,
		reduceRight(a: String, f: Function, z: Object): any,
		reduceRight(a: any[], f: String, z: Object): any,
		reduceRight(a: String, f: String, z: Object): any,
		reduceRight(a: any[], f: any[], z: Object): any,
		reduceRight(a: String, f: any[], z: Object): any,
		repeat(n: number, f: Function, z: Object, o: Object): any,
		repeat(n: number, f: String, z: Object, o: Object): any,
		repeat(n: number, f: any[], z: Object, o: Object): any,
		scanl(a: any[], f: Function, z: Object, o: Object): any[],
		scanl(a: String, f: Function, z: Object, o: Object): any[],
		scanl(a: Object, f: Function, z: Object, o: Object): any[],
		scanl(a: any[], f: String, z: Object, o: Object): any[],
		scanl(a: String, f: String, z: Object, o: Object): any[],
		scanl(a: Object, f: String, z: Object, o: Object): any[],
		scanl(a: any[], f: any[], z: Object, o: Object): any[],
		scanl(a: String, f: any[], z: Object, o: Object): any[],
		scanl(a: Object, f: any[], z: Object, o: Object): any[],
		scanl1(a: any[], f: Function, o: Object): any[],
		scanl1(a: String, f: Function, o: Object): any[],
		scanl1(a: Object, f: Function, o: Object): any[],
		scanl1(a: any[], f: String, o: Object): any[],
		scanl1(a: String, f: String, o: Object): any[],
		scanl1(a: Object, f: String, o: Object): any[],
		scanl1(a: any[], f: any[], o: Object): any[],
		scanl1(a: String, f: any[], o: Object): any[],
		scanl1(a: Object, f: any[], o: Object): any[],
		scanr(a: any[], f: Function, z: Object, o: Object): any,
		scanr(a: String, f: Function, z: Object, o: Object): any,
		scanr(a: any[], f: String, z: Object, o: Object): any,
		scanr(a: String, f: String, z: Object, o: Object): any,
		scanr(a: any[], f: any[], z: Object, o: Object): any,
		scanr(a: String, f: any[], z: Object, o: Object): any,
		scanr1(a: any[], f: Function, o: Object): any,
		scanr1(a: String, f: Function, o: Object): any,
		scanr1(a: any[], f: String, o: Object): any,
		scanr1(a: String, f: String, o: Object): any,
		scanr1(a: any[], f: any[], o: Object): any,
		scanr1(a: String, f: any[], o: Object): any,
		some(a: any[], f: Function, o: Object): boolean,
		some(a: String, f: Function, o: Object): boolean,
		some(a: Object, f: Function, o: Object): boolean,
		some(a: any[], f: String, o: Object): boolean,
		some(a: String, f: String, o: Object): boolean,
		some(a: Object, f: String, o: Object): boolean,
		some(a: any[], f: any[], o: Object): boolean,
		some(a: String, f: any[], o: Object): boolean,
		some(a: Object, f: any[], o: Object): boolean,
		someRev(a: any[], f: Function, o: Object): boolean,
		someRev(a: String, f: Function, o: Object): boolean,
		someRev(a: any[], f: String, o: Object): boolean,
		someRev(a: String, f: String, o: Object): boolean,
		someRev(a: any[], f: any[], o: Object): boolean,
		someRev(a: String, f: any[], o: Object): boolean,
		unfold(pr: Function, f: Function, g: Function, z: Object, o: Object): any[],
		unfold(pr: String, f: Function, g: Function, z: Object, o: Object): any[],
		unfold(pr: any[], f: Function, g: Function, z: Object, o: Object): any[],
		unfold(pr: Function, f: String, g: Function, z: Object, o: Object): any[],
		unfold(pr: String, f: String, g: Function, z: Object, o: Object): any[],
		unfold(pr: any[], f: String, g: Function, z: Object, o: Object): any[],
		unfold(pr: Function, f: any[], g: Function, z: Object, o: Object): any[],
		unfold(pr: String, f: any[], g: Function, z: Object, o: Object): any[],
		unfold(pr: any[], f: any[], g: Function, z: Object, o: Object): any[],
		unfold(pr: Function, f: Function, g: String, z: Object, o: Object): any[],
		unfold(pr: String, f: Function, g: String, z: Object, o: Object): any[],
		unfold(pr: any[], f: Function, g: String, z: Object, o: Object): any[],
		unfold(pr: Function, f: String, g: String, z: Object, o: Object): any[],
		unfold(pr: String, f: String, g: String, z: Object, o: Object): any[],
		unfold(pr: any[], f: String, g: String, z: Object, o: Object): any[],
		unfold(pr: Function, f: any[], g: String, z: Object, o: Object): any[],
		unfold(pr: String, f: any[], g: String, z: Object, o: Object): any[],
		unfold(pr: any[], f: any[], g: String, z: Object, o: Object): any[],
		unfold(pr: Function, f: Function, g: any[], z: Object, o: Object): any[],
		unfold(pr: String, f: Function, g: any[], z: Object, o: Object): any[],
		unfold(pr: any[], f: Function, g: any[], z: Object, o: Object): any[],
		unfold(pr: Function, f: String, g: any[], z: Object, o: Object): any[],
		unfold(pr: String, f: String, g: any[], z: Object, o: Object): any[],
		unfold(pr: any[], f: String, g: any[], z: Object, o: Object): any[],
		unfold(pr: Function, f: any[], g: any[], z: Object, o: Object): any[],
		unfold(pr: String, f: any[], g: any[], z: Object, o: Object): any[],
		unfold(pr: any[], f: any[], g: any[], z: Object, o: Object): any[],
		until(pr: Function, f: Function, z: Object, o: Object): any[],
		until(pr: String, f: Function, z: Object, o: Object): any[],
		until(pr: any[], f: Function, z: Object, o: Object): any[],
		until(pr: Function, f: String, z: Object, o: Object): any[],
		until(pr: String, f: String, z: Object, o: Object): any[],
		until(pr: any[], f: String, z: Object, o: Object): any[],
		until(pr: Function, f: any[], z: Object, o: Object): any[],
		until(pr: String, f: any[], z: Object, o: Object): any[],
		until(pr: any[], f: any[], z: Object, o: Object): any[],
		values(obj: Object): any[]
	}

	declare interface regexp {
		
	}

	declare interface umalqura {
		locale: Object,
		add(date: dojox.date.umalqura.Date, interval: String, amount: number): void,
		compare(
		date1: dojox.date.umalqura.Date, date2: dojox.date.umalqura.Date, portion: String
	): void,
		difference(
		date1: dojox.date.umalqura.Date, date2: dojox.date.umalqura.Date, interval: String
	): void,
		getDaysInMonth(month: dojox.date.umalqura.Date): void
	}

	declare interface buddhist {
		locale: Object,
		add(date: dojox.date.buddhist.Date, interval: String, amount: number): void,
		compare(
		date1: dojox.date.buddhist.Date, date2: dojox.date.buddhist.Date, portion: String
	): void,
		difference(
		date1: dojox.date.hebrew.Date, date2: dojox.date.hebrew.Date, interval: String
	): void,
		getDaysInMonth(dateObject: dojox.date.buddhist.Date): void,
		isLeapYear(dateObject: dojox.date.buddhist.Date): void
	}

	declare interface hebrew {
		locale: Object,
		numerals: Object,
		add(date: dojox.date.hebrew.Date, interval: String, amount: number): void,
		compare(
		dateheb1: dojox.date.hebrew.Date, dateheb2: dojox.date.hebrew.Date, portion: String
	): void,
		difference(
		date1: dojox.date.hebrew.Date, date2: dojox.date.hebrew.Date, interval: String
	): void,
		getDaysInMonth(month: dojox.date.hebrew.Date): void
	}

	declare interface persian {
		locale: Object,
		add(date: dojox.date.persian.Date, interval: String, amount: number): void,
		compare(
		date1: dojox.date.persian.Date, date2: dojox.date.persian.Date, portion: String
	): void,
		difference(
		date1: dojox.date.persian.Date, date2: dojox.date.persian.Date, interval: String
	): void,
		getDaysInMonth(month: dojox.date.persian.Date): void
	}

	declare interface relative {
		format(dateObject: Date, options: Object): void
	}

	declare interface util {
		
	}

	declare interface utils {
		coerceType(target: Object, source: Object): any,
		merge(object: Object, mixin: Object): any,
		updateWithObject(target: Object, source: Object, conv: boolean): Object,
		updateWithPattern(target: Object, source: Object, pattern: Object, conv: boolean): Object
	}

			
}

declare module 'dojox/main' {
					declare module.exports: main


}

declare module 'dojox/main.languages' {
					declare module.exports: languages


}

declare module 'dojox/main.islamic' {
					declare module.exports: islamic


}

declare module 'dojox/main.buddhist' {
					declare module.exports: buddhist


}

declare module 'dojox/main.charting' {
					declare module.exports: charting


}

declare module 'dojox/main.hebrew' {
					declare module.exports: hebrew


}

declare module 'dojox/main.functional' {
					declare module.exports: functional


}

declare module 'dojox/main.relative' {
					declare module.exports: relative


}

declare module 'dojox/main.util' {
					declare module.exports: util


}

declare module 'dojox/main.regexp' {
					declare module.exports: regexp


}

declare module 'dojox/main.umalqura' {
					declare module.exports: umalqura


}

declare module 'dojox/main.persian' {
					declare module.exports: persian


}

declare module 'dojox/main.utils' {
					declare module.exports: utils


}
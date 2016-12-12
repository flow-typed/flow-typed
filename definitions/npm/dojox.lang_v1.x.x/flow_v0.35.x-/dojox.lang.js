

declare module 'dojox.lang' {
					
}

declare module 'lang' {
		declare interface observable {
		(wrapped: Object, onRead: Function, onWrite: Function, onInvoke: Function): void
	}

	declare interface aspect {
		advise(obj: Object, method: String, advice: Object): void,
		advise(obj: Object, method: RegExp, advice: Object): void,
		advise(obj: Object, method: any[], advice: Object): void,
		advise(obj: Object, method: String, advice: Function): void,
		advise(obj: Object, method: RegExp, advice: Function): void,
		advise(obj: Object, method: any[], advice: Function): void,
		advise(obj: Object, method: String, advice: any[]): void,
		advise(obj: Object, method: RegExp, advice: any[]): void,
		advise(obj: Object, method: any[], advice: any[]): void,
		adviseRaw(obj: Object, methods: any[], advices: any[]): void,
		getContext(): void,
		getContextStack(): void,
		proceed(): void,
		unadvise(handle: Object): void
	}

	declare interface async {
		any(x: any): void,
		ifThen(cond: any, ifTrue: any, ifFalse: any): void,
		loop(cond: any, body: any): void,
		par(x: any): void,
		select(cond: any, x: any): void,
		seq(x: any): void
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

	declare interface utils {
		coerceType(target: Object, source: Object): any,
		merge(object: Object, mixin: Object): any,
		updateWithObject(target: Object, source: Object, conv: boolean): Object,
		updateWithPattern(target: Object, source: Object, pattern: Object, conv: boolean): Object
	}

			
}

declare module 'oo' {
		declare interface Decorator {
		(value: Object, decorator?: Function): void
	}

	declare interface Decorator {
		(value: Object, decorator?: Object): void
	}

	declare interface Filter {
		(bag: Object, filter: Function): void
	}

	declare interface Filter {
		(bag: Object, filter: Object): void
	}

	declare interface mixin {
		(target: Object, source: Object[]): void
	}

	declare interface rearrange {
		(bag: Object, map: Object): void
	}

	declare interface aop {
		after: Object,
		afterReturning: Object,
		afterThrowing: Object,
		around: Object,
		before: Object
	}

	declare interface general {
		after: Object,
		augment: Object,
		before: Object,
		override: Object,
		shuffle: Object,
		tap: Object,
		wrap: Object
	}

			
}

declare module 'Decorator' {
					
}

declare module 'Filter' {
					
}

declare module 'aspect' {
		declare interface counter {
		(): void
	}

	declare interface cflow {
		(instance: Object, method?: String): void
	}

	declare interface cflow {
		(instance: Object, method?: RegExp): void
	}

	declare interface cflow {
		(instance: Object, method?: any[]): void
	}

	declare interface memoizer {
		(keyMaker?: Function): void
	}

	declare interface memoizerGuard {
		(method?: String): void
	}

	declare interface memoizerGuard {
		(method?: any[]): void
	}

	declare interface profiler {
		(title?: String): void
	}

	declare interface timer {
		(name?: String): void
	}

	declare interface tracer {
		(grouping: boolean): void
	}

			
}

declare module 'async' {
		declare interface timeout {
		failOn(ms: any): void,
		from(ms: any): void
	}

	declare interface event {
		failOn(src: any, name: any): void,
		from(src: any, name: any): void
	}

	declare interface topic {
		failOn(topic: any): void,
		from(topic: any): void
	}

			
}

declare module 'functional' {
		declare interface array {
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

	declare interface lambda {
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

	declare interface listcomp {
		
	}

	declare interface object {
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

	declare interface reversed {
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

	declare interface sequence {
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

	declare interface zip {
		
	}

			
}

declare module 'dojox/lang/observable' {
					declare module.exports: observable


}

declare module 'dojox/lang/aspect' {
					declare module.exports: aspect


}

declare module 'dojox/lang/aspect/memoizerGuard' {
					declare module.exports: memoizerGuard


}

declare module 'dojox/lang/aspect/memoizer' {
					declare module.exports: memoizer


}

declare module 'dojox/lang/aspect/counter' {
					declare module.exports: counter


}

declare module 'dojox/lang/aspect/cflow' {
					declare module.exports: cflow


}

declare module 'dojox/lang/aspect/timer' {
					declare module.exports: timer


}

declare module 'dojox/lang/aspect/profiler' {
					declare module.exports: profiler


}

declare module 'dojox/lang/aspect/tracer' {
					declare module.exports: tracer


}

declare module 'dojox/lang/async' {
					declare module.exports: async


}

declare module 'dojox/lang/async/event' {
					declare module.exports: event


}

declare module 'dojox/lang/async/timeout' {
					declare module.exports: timeout


}

declare module 'dojox/lang/async/topic' {
					declare module.exports: topic


}

declare module 'dojox/lang/functional' {
					declare module.exports: functional


}

declare module 'dojox/lang/functional/listcomp' {
					declare module.exports: listcomp


}

declare module 'dojox/lang/functional/object' {
					declare module.exports: object


}

declare module 'dojox/lang/functional/zip' {
					declare module.exports: zip


}

declare module 'dojox/lang/functional/array' {
					declare module.exports: array


}

declare module 'dojox/lang/functional/lambda' {
					declare module.exports: lambda


}

declare module 'dojox/lang/functional/reversed' {
					declare module.exports: reversed


}

declare module 'dojox/lang/functional/sequence' {
					declare module.exports: sequence


}

declare module 'dojox/lang/utils' {
					declare module.exports: utils


}

declare module 'dojox/lang/oo/mixin' {
					declare module.exports: mixin


}

declare module 'dojox/lang/oo/Filter' {
					declare module.exports: Filter


}

declare module 'dojox/lang/oo/Decorator' {
					declare module.exports: Decorator


}

declare module 'dojox/lang/oo/rearrange' {
					declare module.exports: rearrange


}

declare module 'dojox/lang/oo/aop' {
					declare module.exports: aop


}

declare module 'dojox/lang/oo/general' {
					declare module.exports: general


}
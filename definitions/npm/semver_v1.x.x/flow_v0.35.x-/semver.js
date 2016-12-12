

declare module 'semver' {
		declare interface SemVerStatic {
		SemVer(version: string, loose?: boolean): SemVerModule.SemVer,
		Comparator(comp: string, loose?: boolean): SemVerModule.Comparator,
		Range(range: string, loose?: boolean): SemVerModule.Range,
		clean(version: string, loose?: boolean): string,
		SEMVER_SPEC_VERSION: string,
		valid(v: string, loose?: boolean): string,
		inc(v: string, release: string, loose?: boolean): string,
		major(v: string, loose?: boolean): number,
		minor(v: string, loose?: boolean): number,
		patch(v: string, loose?: boolean): number,
		gt(v1: string, v2: string, loose?: boolean): boolean,
		gte(v1: string, v2: string, loose?: boolean): boolean,
		lt(v1: string, v2: string, loose?: boolean): boolean,
		lte(v1: string, v2: string, loose?: boolean): boolean,
		eq(v1: string, v2: string, loose?: boolean): boolean,
		neq(v1: string, v2: string, loose?: boolean): boolean,
		cmp(v1: string, comparator: any, v2: string, loose?: boolean): boolean,
		compare(v1: string, v2: string, loose?: boolean): number,
		rcompare(v1: string, v2: string, loose?: boolean): number,
		diff(v1: string, v2: string, loose?: boolean): string,
		validRange(range: string, loose?: boolean): string,
		satisfies(version: string, range: string, loose?: boolean): boolean,
		maxSatisfying(versions: string[], range: string, loose?: boolean): string,
		gtr(version: string, range: string, loose?: boolean): boolean,
		ltr(version: string, range: string, loose?: boolean): boolean,
		outside(version: string, range: string, hilo: string, loose?: boolean): boolean
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$SemVerModule' {
			declare function valid(v: string, loose?: boolean): string

	declare function clean(version: string, loose?: boolean): string

	declare function inc(v: string, release: string, loose?: boolean): string

	declare function major(v: string, loose?: boolean): number

	declare function minor(v: string, loose?: boolean): number

	declare function patch(v: string, loose?: boolean): number

	declare function prerelease(v: string, loose?: boolean): string[]

	declare function gt(v1: string, v2: string, loose?: boolean): boolean

	declare function gte(v1: string, v2: string, loose?: boolean): boolean

	declare function lt(v1: string, v2: string, loose?: boolean): boolean

	declare function lte(v1: string, v2: string, loose?: boolean): boolean

	declare function eq(v1: string, v2: string, loose?: boolean): boolean

	declare function neq(v1: string, v2: string, loose?: boolean): boolean

	declare function cmp(v1: string, comparator: any, v2: string, loose?: boolean): boolean

	declare function compare(v1: string, v2: string, loose?: boolean): number

	declare function rcompare(v1: string, v2: string, loose?: boolean): number

	declare function diff(v1: string, v2: string, loose?: boolean): string

	declare function validRange(range: string, loose?: boolean): string

	declare function satisfies(version: string, range: string, loose?: boolean): boolean

	declare function maxSatisfying(versions: string[], range: string, loose?: boolean): string

	declare function minSatisfying(versions: string[], range: string, loose?: boolean): string

	declare function gtr(version: string, range: string, loose?: boolean): boolean

	declare function ltr(version: string, range: string, loose?: boolean): boolean

	declare function outside(version: string, range: string, hilo: string, loose?: boolean): boolean

	declare class SemVerBase  {
		raw: string;
		loose: boolean;
		format(): string;
		inspect(): string;
		toString(): string
	}

	declare class SemVer extends SemVerBase {
		constructor(version: string, loose?: boolean): this;
		major: number;
		minor: number;
		patch: number;
		version: string;
		build: string[];
		prerelease: string[];
		compare(other: SemVer): number;
		compareMain(other: SemVer): number;
		comparePre(other: SemVer): number;
		inc(release: string): SemVer
	}

	declare class Comparator extends SemVerBase {
		constructor(comp: string, loose?: boolean): this;
		semver: SemVer;
		operator: string;
		value: boolean;
		parse(comp: string): void;
		test(version: SemVer): boolean
	}

	declare class Range extends SemVerBase {
		constructor(range: string, loose?: boolean): this;
		set: Comparator[][];
		parseRange(range: string): Comparator[];
		test(version: SemVer): boolean
	}

	
}
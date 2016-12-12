

declare module 'random-js' {
					
}

declare module 'npm$namespace$random' {
		declare export interface Engine {
		
	}

	declare export interface MT19937 {
		seed(value: number): Engine,
		seedWithArray(array: Array<number>): Engine,
		autoSeed(): Engine,
		discard(count: number): Engine,
		getUseCount(): Engine
	}

	declare export function Engine(): number

	declare export function MT19937(): number

	declare export class Random  {
		constructor(engine?: Engine): this;
		engines: {
		nativeMath: Engine,
		browserCrypto: Engine,
		mt19937: () => MT19937
	};
		integer(min: number, max: number): (engine: Engine) => number;
		real(min: number, max: number, inclusive: boolean): (engine: Engine) => number;
		bool(percentage?: number): (engine: Engine) => boolean;
		bool(numerator: number, denominator: number): (engine: Engine) => boolean;
		pick<T>(engine: Engine, array: Array<T>, begin?: number, end?: number): T;
		picker<T>(array: Array<T>, begin?: number, end?: number): (engine: Engine) => T;
		shuffle<T>(engine: Engine, array: Array<T>): Array<T>;
		sample<T>(engine: Engine, population: Array<T>, sampleSize: number): Array<T>;
		die(sideCount: number): (engine: Engine) => number;
		dice(sideCount: number, dieCount: number): (engine: Engine) => number;
		uuid4(engine: Engine): string;
		string(engine: Engine, length: number): string;
		string(pool: string, length: number): (engine: Engine, length: number) => string;
		hex(upperCase?: boolean): (engine: Engine, length: number) => string;
		date(start: Date, end: Date): (engine: Engine) => Date;
		integer(min: number, max: number): number;
		real(min: number, max: number, inclusive: boolean): number;
		bool(percentage?: number): (engine: Engine) => boolean;
		bool(numerator: number, denominator: number): boolean;
		pick<T>(engine: Engine, array: Array<T>, begin?: number, end?: number): T;
		picker<T>(array: Array<T>, begin?: number, end?: number): (engine: Engine) => T;
		shuffle<T>(engine: Engine, array: Array<T>): Array<T>;
		sample<T>(engine: Engine, population: Array<T>, sampleSize: number): Array<T>;
		die(sideCount: number): (engine: Engine) => number;
		dice(sideCount: number, dieCount: number): number;
		uuid4(engine: Engine): string;
		string(engine: Engine, length: number): string;
		string(pool: string, length: number): string;
		hex(upperCase?: boolean): string;
		date(start: Date, end: Date): Date
	}

	
}
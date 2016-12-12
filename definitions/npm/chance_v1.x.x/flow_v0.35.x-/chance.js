import type { Chance } from 'npm$namespace$Chance'

declare module 'chance' {
		declare interface ExportedChance {
		Chance: ExportedChance
	}

			declare module.exports: ExportedChance


}

declare module 'npm$namespace$Chance' {
	declare type SeededChance = Chance & Seeded;

	declare interface Seeded {
		seed: number
	}

	declare interface ChanceStatic {
		(): Chance,
		(seed: number): SeededChance,
		(generator: () => any): Chance,
		new (): Chance,
		new (seed: number): SeededChance,
		new (generator: () => any): Chance
	}

	declare interface Chance {
		bool(opts?: Options): boolean,
		character(opts?: Options): string,
		floating(opts?: Options): number,
		integer(opts?: Options): number,
		natural(opts?: Options): number,
		string(opts?: Options): string,
		paragraph(opts?: Options): string,
		sentence(opts?: Options): string,
		syllable(opts?: Options): string,
		word(opts?: Options): string,
		age(opts?: Options): number,
		birthday(): Date,
		birthday(opts?: Options): Date | string,
		cpf(): string,
		first(opts?: Options): string,
		last(opts?: Options): string,
		name(opts?: Options): string,
		name_prefix(opts?: Options): string,
		name_suffix(opts?: Options): string,
		prefix(opts?: Options): string,
		ssn(opts?: Options): string,
		suffix(opts?: Options): string,
		android_id(): string,
		apple_token(): string,
		bb_pin(): string,
		wp7_anid(): string,
		wp8_anid2(): string,
		color(opts?: Options): string,
		domain(opts?: Options): string,
		email(opts?: Options): string,
		fbid(): string,
		google_analytics(): string,
		hashtag(): string,
		ip(): string,
		ipv6(): string,
		klout(): string,
		tld(): string,
		twitter(): string,
		url(opts?: Options): string,
		address(opts?: Options): string,
		altitude(opts?: Options): number,
		areacode(): string,
		city(): string,
		coordinates(opts?: Options): string,
		country(opts?: Options): string,
		depth(opts?: Options): number,
		geohash(opts?: Options): string,
		latitude(opts?: Options): number,
		longitude(opts?: Options): number,
		phone(opts?: Options): string,
		postal(): string,
		province(opts?: Options): string,
		state(opts?: Options): string,
		street(opts?: Options): string,
		zip(opts?: Options): string,
		ampm(): string,
		date(): Date,
		date(opts: DateOptions): Date | string,
		hammertime(): number,
		hour(opts?: Options): number,
		millisecond(): number,
		minute(): number,
		month(): string,
		month(opts: Options): Month,
		second(): number,
		timestamp(): number,
		year(opts?: Options): string,
		cc(opts?: Options): string,
		cc_type(): string,
		cc_type(opts: Options): string | CreditCardType,
		currency(): Currency,
		currency_pair(): [Currency, Currency],
		dollar(opts?: Options): string,
		exp(): string,
		exp(opts: Options): string | CreditCardExpiration,
		exp_month(opts?: Options): string,
		exp_year(opts?: Options): string,
		capitalize(str: string): string,
		mixin(desc: MixinDescriptor): any,
		pad(num: number, width: number, padChar?: string): string,
		pick<T>(arr: T[]): T,
		pickone<T>(arr: T[]): T,
		pick<T>(arr: T[], count: number): T[],
		pickset<T>(arr: T[], count: number): T[],
		set: Setter,
		shuffle<T>(arr: T[]): T[],
		d4(): number,
		d6(): number,
		d8(): number,
		d10(): number,
		d12(): number,
		d20(): number,
		d30(): number,
		d100(): number,
		guid(): string,
		hash(opts?: Options): string,
		n<T>(generator: () => T, count: number, opts?: Options): T[],
		normal(opts?: Options): number,
		radio(opts?: Options): string,
		rpg(dice: string): number[],
		rpg(dice: string, opts?: Options): number[] | number,
		tv(opts?: Options): string,
		unique<T>(generator: () => T, count: number, opts?: Options): T[],
		weighted<T>(values: T[], weights: number[]): T,
		cc_types(): CreditCardType[],
		mersenne_twister(seed?: number): any,
		months(): Month[],
		name_prefixes(): Name[],
		provinces(): Name[],
		states(): Name[],
		street_suffix(): Name,
		street_suffixes(): Name[]
	}

	declare interface Options {
		[id: string]: any
	}

	declare interface DateOptions {
		string?: boolean,
		american?: boolean,
		year?: number,
		month?: number,
		day?: number
	}

	declare interface Month {
		name: string,
		short_name: string,
		numeric: string
	}

	declare interface CreditCardType {
		name: string,
		short_name: string,
		prefix: string,
		length: number
	}

	declare interface Currency {
		code: string,
		name: string
	}

	declare interface CreditCardExpiration {
		month: string,
		year: string
	}

	declare interface MixinDescriptor {
		[id: string]: () => any
	}

	declare interface Setter {
		(key: "firstNames", values: string[]): any,
		(key: "lastNames", values: string[]): any,
		(key: "provinces", values: string[]): any,
		(key: "us_states_and_dc", values: string[]): any,
		(key: "territories", values: string[]): any,
		(key: "armed_forces", values: string[]): any,
		(key: "street_suffixes", values: string[]): any,
		(key: "months", values: string[]): any,
		(key: "cc_types", values: string[]): any,
		(key: "currency_types", values: string[]): any,
		(key: string, values: T[]): any
	}

	declare interface Name {
		name: string,
		abbreviation: string
	}

			
}
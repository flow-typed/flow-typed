import type { FakerStatic } from 'npm$namespace$Faker'

declare module 'faker' {
					declare module.exports: FakerStatic


}

declare module 'npm$namespace$Faker' {
		declare interface FakerStatic {
		locale: string,
		address: {
		zipCode(format?: string): string,
		city(format?: number): string,
		cityPrefix(): string,
		citySuffix(): string,
		streetName(): string,
		streetAddress(useFullAddress?: boolean): string,
		streetSuffix(): string,
		streetPrefix(): string,
		secondaryAddress(): string,
		county(): string,
		country(): string,
		countryCode(): string,
		state(useAbbr?: boolean): string,
		stateAbbr(): string,
		latitude(): string,
		longitude(): string
	},
		commerce: {
		color(): string,
		department(): string,
		productName(): string,
		price(min?: number, max?: number, dec?: number, symbol?: string): string,
		productAdjective(): string,
		productMaterial(): string,
		product(): string
	},
		company: {
		suffixes(): string[],
		companyName(format?: number): string,
		companySuffix(): string,
		catchPhrase(): string,
		bs(): string,
		catchPhraseAdjective(): string,
		catchPhraseDescriptor(): string,
		catchPhraseNoun(): string,
		bsAdjective(): string,
		bsBuzz(): string,
		bsNoun(): string
	},
		date: {
		past(years?: number, refDate?: string | Date): Date,
		future(years?: number, refDate?: string | Date): Date,
		between(from: string | number | Date, to: string | Date): Date,
		recent(days?: number): Date,
		month(options?: {
		abbr?: boolean,
		context?: boolean
	}): string,
		weekday(options?: {
		abbr?: boolean,
		context?: boolean
	}): string
	},
		fake(str: string): string,
		finance: {
		account(length?: number): string,
		accountName(): string,
		mask(length?: number, parens?: boolean, elipsis?: boolean): string,
		amount(min?: number, max?: number, dec?: number, symbol?: string): string,
		transactionType(): string,
		currencyCode(): string,
		currencyName(): string,
		currencySymbol(): string
	},
		hacker: {
		abbreviation(): string,
		adjective(): string,
		noun(): string,
		verb(): string,
		ingverb(): string,
		phrase(): string
	},
		helpers: {
		randomize<T>(array: T[]): T,
		randomize(): string,
		slugify(string?: string): string,
		replaceSymbolWithNumber(string?: string, symbol?: string): string,
		replaceSymbols(string?: string): string,
		shuffle<T>(o: T[]): T[],
		shuffle(): string[],
		mustache(
		str: string, data: {
		[key: string]: string | ((substring: string, ...args: any[]) => string)
	}
	): string,
		createCard(): Faker.Card,
		contextualCard(): Faker.ContextualCard,
		userCard(): Faker.UserCard,
		createTransaction(): Faker.Transaction
	},
		image: {
		image(): string,
		avatar(): string,
		imageUrl(width?: number, height?: number, category?: string): string,
		abstract(width?: number, height?: number): string,
		animals(width?: number, height?: number): string,
		business(width?: number, height?: number): string,
		cats(width?: number, height?: number): string,
		city(width?: number, height?: number): string,
		food(width?: number, height?: number): string,
		nightlife(width?: number, height?: number): string,
		fashion(width?: number, height?: number): string,
		people(width?: number, height?: number): string,
		nature(width?: number, height?: number): string,
		sports(width?: number, height?: number): string,
		technics(width?: number, height?: number): string,
		transport(width?: number, height?: number): string
	},
		internet: {
		avatar(): string,
		email(firstName?: string, lastName?: string, provider?: string): string,
		userName(firstName?: string, lastName?: string): string,
		protocol(): string,
		url(): string,
		domainName(): string,
		domainSuffix(): string,
		domainWord(): string,
		ip(): string,
		userAgent(): string,
		color(baseRed255?: number, baseGreen255?: number, baseBlue255?: number): string,
		mac(): string,
		password(
		len?: number, memorable?: boolean, pattern?: string | RegExp, prefix?: string
	): string
	},
		lorem: {
		word(): string,
		words(num?: number): string,
		sentence(wordCount?: number, range?: number): string,
		sentences(sentenceCount?: number): string,
		paragraph(sentenceCount?: number): string,
		paragraphs(paragraphCount?: number, separator?: string): string
	},
		name: {
		firstName(gender?: number): string,
		lastName(gender?: number): string,
		findName(firstName?: string, lastName?: string, gender?: number): string,
		jobTitle(): string,
		prefix(): string,
		suffix(): string,
		title(): string,
		jobDescriptor(): string,
		jobArea(): string,
		jobType(): string
	},
		phone: {
		phoneNumber(format?: string): string,
		phoneNumberFormat(phoneFormatsArrayIndex?: number): string,
		phoneFormats(): string
	},
		random: {
		number(max: number): number,
		number(options?: {
		min?: number,
		max?: number,
		precision?: number
	}): number,
		arrayElement(): string,
		arrayElement<T>(array: T[]): T,
		objectElement(object?: {
		[key: string]: any
	}, field?: "key"): string,
		objectElement<T>(object?: {
		[key: string]: T
	}, field?: any): T,
		uuid(): string,
		boolean(): boolean
	},
		system: {
		fileName(ext: string, type: string): string,
		commonFileName(ext: string, type: string): string,
		mimeType(): string,
		commonFileType(): string,
		commonFileExt(): string,
		fileType(): string,
		fileExt(mimeType: string): string,
		semver(): string
	},
		seed(value: number): void
	}

	declare interface Card {
		name: string,
		username: string,
		email: string,
		address: FullAddress,
		phone: string,
		website: string,
		company: Company,
		posts: Post[],
		accountHistory: string[]
	}

	declare interface FullAddress {
		streetA: string,
		streetB: string,
		streetC: string,
		streetD: string,
		city: string,
		state: string,
		county: string,
		zipcode: string,
		geo: Geo
	}

	declare interface Geo {
		lat: string,
		lng: string
	}

	declare interface Company {
		name: string,
		catchPhrase: string,
		bs: string
	}

	declare interface Post {
		words: string,
		sentence: string,
		sentences: string,
		paragraph: string
	}

	declare interface ContextualCard {
		name: string,
		username: string,
		email: string,
		dob: Date,
		phone: string,
		address: Address,
		website: string,
		company: Company
	}

	declare interface Address {
		street: string,
		suite: string,
		city: string,
		state: string,
		zipcode: string,
		geo: Geo
	}

	declare interface UserCard {
		name: string,
		username: string,
		email: string,
		address: Address,
		phone: string,
		website: string,
		company: Company
	}

	declare interface Transaction {
		amount: string,
		date: Date,
		business: string,
		name: string,
		type: string,
		account: string
	}

			
}

declare module 'faker/locale/de' {
					declare module.exports: undefined


}

declare module 'faker/locale/de_AT' {
					declare module.exports: undefined


}

declare module 'faker/locale/de_CH' {
					declare module.exports: undefined


}

declare module 'faker/locale/el_GR' {
					declare module.exports: undefined


}

declare module 'faker/locale/en' {
					declare module.exports: undefined


}

declare module 'faker/locale/en_AU' {
					declare module.exports: undefined


}

declare module 'faker/locale/en_BORK' {
					declare module.exports: undefined


}

declare module 'faker/locale/en_CA' {
					declare module.exports: undefined


}

declare module 'faker/locale/en_GB' {
					declare module.exports: undefined


}

declare module 'faker/locale/en_IE' {
					declare module.exports: undefined


}

declare module 'faker/locale/en_IND' {
					declare module.exports: undefined


}

declare module 'faker/locale/en_US' {
					declare module.exports: undefined


}

declare module 'faker/locale/en_au_ocker' {
					declare module.exports: undefined


}

declare module 'faker/locale/es' {
					declare module.exports: undefined


}

declare module 'faker/locale/es_MX' {
					declare module.exports: undefined


}

declare module 'faker/locale/fa' {
					declare module.exports: undefined


}

declare module 'faker/locale/fr' {
					declare module.exports: undefined


}

declare module 'faker/locale/fr_CA' {
					declare module.exports: undefined


}

declare module 'faker/locale/ge' {
					declare module.exports: undefined


}

declare module 'faker/locale/it' {
					declare module.exports: undefined


}

declare module 'faker/locale/ja' {
					declare module.exports: undefined


}

declare module 'faker/locale/ko' {
					declare module.exports: undefined


}

declare module 'faker/locale/nb_NO' {
					declare module.exports: undefined


}

declare module 'faker/locale/nep' {
					declare module.exports: undefined


}

declare module 'faker/locale/nl' {
					declare module.exports: undefined


}

declare module 'faker/locale/pl' {
					declare module.exports: undefined


}

declare module 'faker/locale/pt_BR' {
					declare module.exports: undefined


}

declare module 'faker/locale/ru' {
					declare module.exports: undefined


}

declare module 'faker/locale/sk' {
					declare module.exports: undefined


}

declare module 'faker/locale/sv' {
					declare module.exports: undefined


}

declare module 'faker/locale/tr' {
					declare module.exports: undefined


}

declare module 'faker/locale/uk' {
					declare module.exports: undefined


}

declare module 'faker/locale/vi' {
					declare module.exports: undefined


}

declare module 'faker/locale/zh_CN' {
					declare module.exports: undefined


}

declare module 'faker/locale/zh_TW' {
					declare module.exports: undefined


}
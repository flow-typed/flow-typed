

declare module 'dojox.date' {
					
}

declare module 'date' {
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

	declare interface php {
		DateFormat(format: String): void,
		format(date: Date, format: String): void
	}

	declare interface relative {
		format(dateObject: Date, options: Object): void
	}

	declare interface posix {
		getIsoWeekOfYear(dateObject: Date): void,
		getIsoWeeksInYear(dateObject: Date): void,
		getStartOfWeek(dateObject: Date, firstDay: number): void,
		setIsoWeekOfYear(dateObject: Date, week: number): void,
		strftime(dateObject: Date, format: String, locale: String): void
	}

			
}

declare module 'buddhist' {
		declare interface locale {
		addCustomFormats(packageName: String, bundleName: String): void,
		format(dateObject: dojox.date.buddhist.Date, options: Object): void,
		getNames(
		item: String, type: String, context: String, locale: String, date: dojox.date.buddhist.Date
	): void,
		parse(value: String, options: Object): void,
		regexp(options: Object): void
	}

		declare class Date  {
		constructor(): this;
		fromGregorian(gdate: Date): Function;
		getDate(isNumber: boolean): any;
		getDay(): any;
		getFullYear(): any;
		getHours(): any;
		getMilliseconds(): any;
		getMinutes(): any;
		getMonth(): any;
		getSeconds(): any;
		setDate(date: number): Function;
		setFullYear(year: number, month: number, date: number): void;
		setHours(): void;
		setMilliseconds(milliseconds: number): Function;
		setMinutes(minutes: number): Function;
		setMonth(month: number): void;
		setSeconds(seconds: number): Function;
		toGregorian(): any;
		toString(): string;
		valueOf(): void
	}

	
}

declare module 'hebrew' {
		declare interface locale {
		addCustomFormats(packageName: String, bundleName: String): void,
		format(dateObject: dojox.date.hebrew, options: Object): void,
		getNames(
		item: String, type: String, context: String, locale: String, date: dojox.date.hebrew.Date
	): void,
		parse(value: String, options: Object): void,
		regexp(options: Object): void
	}

	declare interface numerals {
		getDayHebrewLetters(day: any, nogrsh: boolean): void,
		getMonthHebrewLetters(month: number): void,
		getYearHebrewLetters(year: number): void,
		parseDayHebrewLetters(day: String): void,
		parseMonthHebrewLetters(monthStr: String): void,
		parseYearHebrewLetters(year: String): void
	}

		declare class Date  {
		constructor(): this;
		fromGregorian(gdate: Date): Function;
		getDate(): any;
		getDateLocalized(locale: String): any;
		getDay(): number;
		getDaysInHebrewMonth(month: number, year: number): any;
		getFullYear(): any;
		getHours(): any;
		getMilliseconds(): any;
		getMinutes(): any;
		getMonth(): any;
		getSeconds(): any;
		isLeapYear(year: number): boolean;
		setDate(date: number): Function;
		setFullYear(year: number, month: number, date: number): Function;
		setHours(): Function;
		setMilliseconds(milliseconds: number): Function;
		setMinutes(minutes: number): Function;
		setMonth(month: number): Function;
		setSeconds(seconds: number): Function;
		toGregorian(): any;
		toString(): string;
		valueOf(): void
	}

	
}

declare module 'islamic' {
		declare interface locale {
		months: Object,
		weekDays: Object,
		addCustomFormats(packageName: String, bundleName: String): void,
		format(dateObject: dojox.date.islamic.Date, options: Object): void,
		getNames(
		item: String, type: String, context: String, locale: String, date: dojox.date.islamic.Date
	): any,
		parse(value: String, options: Object): void,
		regexp(options: Object): void
	}

		declare class Date  {
		constructor(): this;
		fromGregorian(gdate: Date): Function;
		getDate(): any;
		getDay(): any;
		getDaysInIslamicMonth(month: number, year: number): number;
		getDaysInIslamicMonth(month: dojox.date.islamic.Date): void;
		getFullYear(): any;
		getHours(): any;
		getMilliseconds(): any;
		getMinutes(): any;
		getMonth(): any;
		getSeconds(): any;
		setDate(date: number): Function;
		setFullYear(year: number): void;
		setHours(): void;
		setMilliseconds(milliseconds: number): Function;
		setMinutes(minutes: number): Function;
		setMonth(month: number): void;
		setSeconds(seconds: number): Function;
		toGregorian(): any;
		toString(): string;
		valueOf(): any
	}

	
}

declare module 'persian' {
		declare interface locale {
		months: Object,
		weekDays: Object,
		addCustomFormats(packageName: String, bundleName: String): void,
		format(dateObject: dojox.date.persian.Date, options: Object): void,
		getNames(
		item: String, type: String, context: String, locale: String, date: dojox.date.persian.Date
	): any,
		parse(value: String, options: Object): void,
		regexp(options: Object): void
	}

		declare class Date  {
		constructor(): this;
		daysInMonth: any[];
		calcGregorian(year: any, month: any, day: any): any;
		fromGregorian(gdate: Date): Function;
		getDate(): any;
		getDay(): any;
		getDaysInPersianMonth(month: number, year: number): any;
		getDaysInPersianMonth(month: dojox.date.persian.Date): void;
		getFullYear(): any;
		getHours(): any;
		getMilliseconds(): any;
		getMinutes(): any;
		getMonth(): any;
		getSeconds(): any;
		gregorian_to_jd(year: any, month: any, day: any): number;
		isLeapYear(j_y: any, j_m: any, j_d: any): boolean;
		jd_to_gregorian(jd: any, jmonth: any): any;
		jd_to_persian(jd: any): any;
		jwday(j: any): any;
		leap_gregorian(year: any): boolean;
		persian_to_jd(year: any, month: any, day: any): number;
		setDate(date: number): Function;
		setFullYear(year: number): void;
		setHours(): void;
		setMilliseconds(milliseconds: number): Function;
		setMinutes(minutes: number): Function;
		setMonth(month: number): void;
		setSeconds(seconds: number): Function;
		toGregorian(): any;
		toString(): string;
		valueOf(): any
	}

	
}

declare module 'umalqura' {
		declare interface locale {
		months: Object,
		weekDays: Object,
		addCustomFormats(packageName: String, bundleName: String): void,
		format(dateObject: dojox.date.umalqura.Date, options: Object): void,
		getNames(
		item: String, type: String, context: String, locale: String, date: dojox.date.umalqura.Date
	): any,
		parse(value: String, options: Object): void,
		regexp(options: Object): void
	}

		declare class Date  {
		constructor(): this;
		fromGregorian(gdate: Date): Function;
		getDate(): any;
		getDay(): any;
		getDaysInIslamicMonth(month: number, year: number): any;
		getDaysInIslamicMonth(month: dojox.date.umalqura.Date): void;
		getFullYear(): any;
		getHours(): any;
		getMilliseconds(): any;
		getMinutes(): any;
		getMonth(): any;
		getSeconds(): any;
		setDate(date: number): Function;
		setFullYear(year: number): void;
		setHours(): void;
		setMilliseconds(milliseconds: number): void;
		setMinutes(minutes: number): void;
		setMonth(month: number): void;
		setSeconds(seconds: number): void;
		toGregorian(): any;
		toString(): string;
		valueOf(): any
	}

	
}

declare module 'dojox/date/buddhist' {
					declare module.exports: buddhist


}

declare module 'dojox/date/buddhist/Date' {
					declare module.exports: Date


}

declare module 'dojox/date/buddhist/locale' {
					declare module.exports: locale


}

declare module 'dojox/date/hebrew' {
					declare module.exports: hebrew


}

declare module 'dojox/date/hebrew/Date' {
					declare module.exports: Date


}

declare module 'dojox/date/hebrew/locale' {
					declare module.exports: locale


}

declare module 'dojox/date/hebrew/numerals' {
					declare module.exports: numerals


}

declare module 'dojox/date/islamic' {
					declare module.exports: islamic


}

declare module 'dojox/date/islamic/Date' {
					declare module.exports: Date


}

declare module 'dojox/date/islamic/locale' {
					declare module.exports: locale


}

declare module 'dojox/date/persian' {
					declare module.exports: persian


}

declare module 'dojox/date/persian/Date' {
					declare module.exports: Date


}

declare module 'dojox/date/persian/locale' {
					declare module.exports: locale


}

declare module 'dojox/date/umalqura' {
					declare module.exports: umalqura


}

declare module 'dojox/date/umalqura/Date' {
					declare module.exports: Date


}

declare module 'dojox/date/umalqura/locale' {
					declare module.exports: locale


}

declare module 'dojox/date/php' {
					declare module.exports: php


}

declare module 'dojox/date/posix' {
					declare module.exports: posix


}

declare module 'dojox/date/relative' {
					declare module.exports: relative


}
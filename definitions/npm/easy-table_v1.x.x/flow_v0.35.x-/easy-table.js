

declare module 'easy-table' {
	declare type CellPrinter<T> = (val: T, width: number) => string;

	declare type CompareFunction<T> = (a: T, b: T) => number;

	declare type ReduceFunction<T> = (acc: T, val: T, idx: number, length: number) => T;

	declare type FormatFunction<T> = (obj: T, cell: (name: string, val: any) => void) => void;

	declare type TablePostProcessing = (result: EasyTable) => string;

	declare interface PrintColumnOptions<T> {
		separator?: string,
		namePrinter?: CellPrinter<T>
	}

	declare interface Aggregators {
		printer<T>(prefix: string, printer: CellPrinter<T>): CellPrinter<T>,
		sum: any,
		avg: any
	}

	declare interface TotalOptions<T> {
		reduce?: ReduceFunction<T>,
		printer?: CellPrinter<T>,
		init?: T
	}

	declare interface FormatObject {
		[key: string]: ColumnFormat<any>
	}

	declare interface ColumnFormat<T> {
		name?: string,
		printer?: CellPrinter<T>
	}

		declare class EasyTable  {
		separator: string;
		string(value: any): string;
		leftPadder<T>(ch: string): CellPrinter<T>;
		padLeft: CellPrinter<string>;
		rightPadder<T>(ch: string): CellPrinter<T>;
		number(digits?: number): CellPrinter<number>;
		constructor(): this;
		newRow(): EasyTable;
		cell<T>(col: string, val: T, printer?: CellPrinter<T>): EasyTable;
		columns(): string[];
		print(): string;
		toString(): string;
		pushDelimeter(cols?: string[]): EasyTable;
		forEachTotal<T>(cb: (column: string, value: T, printer: CellPrinter<T>) => void): void;
		printTransposed<T>(opts?: PrintColumnOptions<T>): string;
		sort(cmp?: string[]): EasyTable;
		sort<T>(cmp?: CompareFunction<T>): EasyTable;
		total<T>(col: string, opts?: TotalOptions<T>): EasyTable;
		aggr: Aggregators;
		print<T>(
		obj: T | T[], format?: FormatFunction<T> | FormatObject, cb?: TablePostProcessing
	): string;
		log<T>(
		obj: T | T[], format?: FormatFunction<T> | FormatObject, cb?: TablePostProcessing
	): void;
		log(): void
	}

	declare module.exports: undefined


}
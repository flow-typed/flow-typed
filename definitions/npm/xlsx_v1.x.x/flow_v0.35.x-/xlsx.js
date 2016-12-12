

declare module 'xlsx' {
		declare export interface IProperties {
		LastAuthor?: string,
		Author?: string,
		CreatedDate?: Date,
		ModifiedDate?: Date,
		Application?: string,
		AppVersion?: string,
		Company?: string,
		DocSecurity?: string,
		Manager?: string,
		HyperlinksChanged?: boolean,
		SharedDoc?: boolean,
		LinksUpToDate?: boolean,
		ScaleCrop?: boolean,
		Worksheets?: number,
		SheetNames?: string[]
	}

	declare export interface IParsingOptions {
		cellFormula?: boolean,
		cellHTML?: boolean,
		cellNF?: boolean,
		cellStyles?: boolean,
		cellDates?: boolean,
		sheetStubs?: boolean,
		sheetRows?: number,
		bookDeps?: boolean,
		bookFiles?: boolean,
		bookProps?: boolean,
		bookSheets?: boolean,
		bookVBA?: boolean,
		password?: string,
		bookType?: string,
		type?: string
	}

	declare export interface IWorkBook {
		Sheets: {
		[sheet: string]: IWorkSheet
	},
		SheetNames: string[],
		Props: IProperties
	}

	declare export interface IWorkSheet {
		[cell: string]: IWorkSheetCell
	}

	declare export interface IWorkSheetCell {
		t: string,
		v: string,
		r?: string,
		h?: string,
		w?: string,
		f?: string,
		c?: string,
		z?: string,
		l?: string,
		s?: string
	}

	declare export interface ICell {
		c: number,
		r: number
	}

	declare export interface IUtils {
		sheet_to_json<T>(
		worksheet: IWorkSheet, opts?: {
		raw?: boolean,
		range?: any,
		header?: "A" | number | string[]
	}
	): T[],
		sheet_to_csv(worksheet: IWorkSheet): any,
		sheet_to_formulae(worksheet: IWorkSheet): any,
		encode_cell(cell: ICell): any,
		encode_range(s: ICell, e: ICell): any
	}

	declare export function readFile(filename: string, opts?: IParsingOptions): IWorkBook

	declare export function read(data: any, opts?: IParsingOptions): IWorkBook

	declare export function write(data: any, opts?: IParsingOptions): any

		
}
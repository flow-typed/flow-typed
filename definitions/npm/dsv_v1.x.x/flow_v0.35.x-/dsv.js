

declare module 'dsv' {
					declare module.exports: undefined


}

declare module '_dsv' {
				declare export class Dsv  {
		parse<TRow>(table: string, accessor?: (row: any) => TRow): TRow[];
		parseRows<TRow>(table: string, accessor?: (row: string[]) => TRow): TRow[];
		format(rows: any[]): string;
		formatRows(rows: any[]): string
	}

	
}
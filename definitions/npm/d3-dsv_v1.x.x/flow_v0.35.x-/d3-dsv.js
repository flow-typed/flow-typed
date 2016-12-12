

declare module 'd3-dsv' {
					declare module.exports: undefined


}

declare module '_d3dsv' {
				declare export class D3Dsv  {
		parse<TRow>(table: string, accessor?: (row: any) => TRow): TRow[];
		parseRows<TRow>(table: string, accessor?: (row: string[]) => TRow): TRow[];
		format(rows: any[]): string;
		formatRows(rows: any[]): string
	}

	
}
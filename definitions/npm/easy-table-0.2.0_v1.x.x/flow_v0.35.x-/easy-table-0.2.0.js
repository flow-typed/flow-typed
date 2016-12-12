

declare module 'easy-table-0.2.0' {
					
}

declare module 'easy-table' {
				declare class EasyTable  {
		constructor(): this;
		cell(
		label: string, value: any, printer?: EasyTable.CellPrinter, width?: number
	): void;
		newRow(): void;
		toString(): string;
		printTransposed(): string;
		print(): string;
		sort(fields: string): void;
		sort(comparer: (a: any, b: any) => number): void;
		total(
		label: string, accumulator: EasyTable.Accumulator, totalPrinter: EasyTable.CellPrinter
	): void
	}

	declare module.exports: undefined


}

declare module 'EasyTable' {
		declare interface CellPrinter {
		(obj: any, cell: (label: string, value: any, width?: number) => void): string
	}

	declare interface Printer {
		(table: EasyTable): string
	}

	declare interface Accumulator {
		(sum: number, val: number, index: number, length: number): number
	}

	declare function printArray(array: any[], cellPrinter?: CellPrinter, tablePrinter?: Printer): string

	declare function printObject(object: any, cellPrinter?: CellPrinter, tablePrinter?: Printer): string

	declare function Number(length: number): CellPrinter

	declare function RightPadder(char: string): CellPrinter

	declare function LeftPadder(char: string): CellPrinter

		
}
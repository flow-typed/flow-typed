

declare module 'slick.rowselectionmodel' {
					
}

declare module 'npm$namespace$Slick' {
				declare class RowSelectionModel<T, E> extends SelectionModel<T, E> {
		constructor(options?: {
		selectActiveRow: boolean
	}): this;
		getSelectedRows(): number[];
		setSelectedRows(rows: number[]): void;
		getSelectedRanges(): number[];
		setSelectedRanges(ranges: number[]): void
	}

	
}
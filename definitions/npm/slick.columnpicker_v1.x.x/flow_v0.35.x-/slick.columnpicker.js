

declare module 'slick.columnpicker' {
					
}

declare module 'Controls' {
		declare export interface SlickColumnPickerOptions {
		fadeSpeed?: number
	}

		declare export class ColumnPicker<T>  {
		constructor(columns: Slick.Column<T>[], grid: Slick.Grid<T>, options: SlickColumnPickerOptions): this;
		getAllColumns(): Slick.Column<T>[];
		destroy(): void
	}

	
}
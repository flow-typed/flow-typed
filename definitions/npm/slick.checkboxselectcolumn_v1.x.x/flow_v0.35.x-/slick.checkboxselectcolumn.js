

declare module 'slick.checkboxselectcolumn' {
					
}

declare module 'npm$namespace$Slick' {
		declare export interface SlickGridCheckBoxSelectColumnOptions {
		columnId?: string,
		cssClass?: string,
		toolTip?: string,
		width?: number
	}

		declare export class CheckboxSelectColumn<T> extends Plugin<T> {
		constructor(options?: SlickGridCheckBoxSelectColumnOptions): this;
		init(grid: Slick.Grid<T>): void;
		destroy(): void;
		getColumnDefinition(): Slick.ColumnMetadata<T>
	}

	
}
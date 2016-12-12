

declare module 'backgrid' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Backgrid' {
		declare interface GridOptions {
		columns: Column[],
		collection: Backbone.Collection<Backbone.Model>,
		header?: Header,
		body?: Body,
		row?: Row,
		footer?: Footer
	}

	declare interface ColumnAttr {
		name: string,
		cell: string,
		headerCell: string,
		label: string,
		sortable: boolean,
		editable: boolean,
		renderable: boolean,
		formater: string
	}

		declare class Header extends Backbone$View<Backbone.Model> {
		
	}

	declare class Footer extends Backbone$View<Backbone.Model> {
		
	}

	declare class Row extends Backbone$View<Backbone.Model> {
		
	}

	declare class Command  {
		moveUp(): boolean;
		moveDown(): boolean;
		moveLeft(): boolean;
		moveRight(): boolean;
		save(): boolean;
		cancel(): boolean;
		passThru(): boolean
	}

	declare class CellFormatter  {
		fromRaw(rawData: any, model: Backbone.Model);
		toRaw(formattedData: any, model: Backbone.Model)
	}

	declare class NumberFormatter extends CellFormatter {
		
	}

	declare class PercentFormatter extends NumberFormatter {
		
	}

	declare class DateTimeFormatter extends CellFormatter {
		
	}

	declare class StringFormatter extends CellFormatter {
		
	}

	declare class EmailFormatter extends CellFormatter {
		
	}

	declare class SelectFormatter extends CellFormatter {
		
	}

	declare class CellEditor extends Backbone$View<Backbone.Model> {
		initialize(options?: any);
		postRender(model: Backbone.Model, column: Backbone.Model)
	}

	declare class InputCellEditor extends CellEditor {
		render();
		saveOrCancel(event: any)
	}

	declare class Cell extends Backbone$View<Backbone.Model> {
		tagName: string;
		formatter: CellFormatter;
		editor: InputCellEditor;
		enterEditMode();
		renderError();
		exitEditMode();
		remove()
	}

	declare class StringCell extends Cell {
		
	}

	declare class Column extends Backbone$Model {
		initialize(options?: any)
	}

	declare class Body extends Backbone$View<Backbone.Model> {
		tagName: string;
		initialize(options?: any);
		insertRow(
		model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any
	);
		moveToNextCell(model: Backbone.Model, cell: Column, command: Command);
		refresh(): Body;
		remove(): Body;
		removeRow(
		model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any
	);
		render(): Body
	}

	declare class Grid extends Backbone$View<Backbone.Model> {
		body: Backgrid.Body;
		className: string;
		footer: any;
		header: any;
		tagName: string;
		constructor(options: GridOptions): this;
		initialize(options: any);
		getSelectedModels(): Backbone.Model[];
		insertColumn(...options: any[]): Grid;
		insertRow(
		model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any
	);
		remove(): Grid;
		removeColumn(...options: any[]): Grid;
		removeRow(
		model: Backbone.Model, collection: Backbone.Collection<Backbone.Model>, options: any
	);
		render(): Grid
	}

	
}
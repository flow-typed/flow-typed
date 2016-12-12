

declare module 'rappid' {
					
}

declare module 'ui' {
		declare interface Handle {
		name: string,
		position: string,
		icon: string
	}

		declare class SelectionView extends Backbone$Model {
		paper: joint.dia.Paper;
		graph: joint.dia.Graph;
		model: Backbone.Collection<joint.dia.Cell>;
		constructor(opt: {
		paper: joint.dia.Paper,
		graph: joint.dia.Graph,
		model: Backbone.Collection<joint.dia.Cell>
	}): this;
		createSelectionBox(cellView: joint.dia.CellView): void;
		destroySelectionBox(cellView: joint.dia.CellView): void;
		startSelecting(evt: any): void;
		cancelSelection(): void;
		addHandle(handle: Handle): void;
		removeHandle(name: string): void;
		changeHandle(name: string, handle: Handle): void
	}

	
}
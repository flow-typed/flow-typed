import type { DagreD3Factory } from 'npm$namespace$Dagre'

declare module 'dagre-d3' {
					declare module.exports: DagreD3Factory


}

declare module 'npm$namespace$Dagre' {
		declare interface DagreD3Factory {
		render: Render
	}

	declare interface Graph {
		graph(): Graph,
		height: number,
		predecessors(id: string): string[],
		successors(id: string): string[],
		transition(selection: d3.Selection<any>): d3.Transition<any>,
		width: number
	}

	declare interface Render {
		arrows(
		
	): {
		[arrowStyleName: string]: (parent: d3.Selection<any>, id: string, edge: Dagre.Edge, type: string) => void
	},
		new (): Render,
		(selection: d3.Selection<any>, g: Dagre.Graph): void
	}

			
}
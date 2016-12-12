

declare module 'react-flexr' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___ReactFlexr' {
	declare export type ErgonomicType = "palm" | "lap" | "portable" | "desk";

	declare interface GridProps {
		align?: "top" | "center" | "bottom",
		hAlign?: "left" | "center" | "right",
		gutter?: string,
		flexCells?: boolean
	}

	declare interface CellProps {
		align?: "top" | "center" | "bottom",
		gutter?: string,
		flex?: boolean,
		size?: string | number,
		palm?: string | number,
		lap?: string | number,
		portable?: string | number,
		desk?: string | number
	}

	declare interface OptimizedResize {
		init: (callback: () => void) => void
	}

		declare export class Grid extends React$Component<GridProps, {
		
	}> {
		
	}

	declare export class Cell extends React$Component<CellProps, {
		
	}> {
		
	}

	
}
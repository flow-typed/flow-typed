

declare module 'react-virtualized' {
	declare type CollectionProps = any;

	declare type FlexTableProps = any;

	declare type FlexColumnProps = any;

	declare type SortDirectionProps = any;

	declare type GridProps = any;

	declare type InfiniteLoaderProps = any;

	declare type ScrollSyncProps = any;

	declare type WindowScrollerProps = any;

	declare interface VirtualScrollProps {
		className?: string,
		autoHeight?: boolean,
		estimatedRowSize?: number,
		height: number,
		noRowsRenderer?: Function,
		onRowsRendered?: (
		info: {
		overscanStartIndex: number,
		overscanStopIndex: number,
		startIndex: number,
		stopIndex: number
	}
	) => void,
		onScroll?: (
		info: {
		clientHeight: number,
		scrollHeight: number,
		scrollTop: number
	}
	) => void,
		overscanRowCount?: number,
		rowHeight: number | ((info: {
		index: number
	}) => number),
		rowRenderer: (info: {
		index: number,
		isScrolling: boolean
	}) => React.ReactNode,
		rowClassName?: string | ((info: {
		index: number
	}) => string),
		rowCount: number,
		rowStyle?: React.CSSProperties | ((info: {
		index: number
	}) => React.CSSProperties),
		scrollToAlignment?: string,
		scrollToIndex?: number,
		scrollTop?: number,
		style?: React.CSSProperties,
		tabIndex?: number,
		width: number
	}

	declare interface AutoSizerProps {
		disableHeight?: boolean,
		disableWidth?: boolean,
		onResize?: (info: {
		height: number,
		width: number
	}) => any
	}

	declare interface ArrowKeyStepperProps {
		children?: React.StatelessComponent<{
		onSectionRendered: Function,
		scrollToColumn: number,
		scrollToRow: number
	}>,
		className?: string,
		columnCount: number,
		rowCount: number
	}

	declare interface CellMeasurerProps {
		cellRenderer: (info: {
		columnIndex: number,
		rowIndex: number
	}) => React.ReactNode,
		cellSizeCache?: {
		clearAllColumnWidths(): void,
		clearAllRowHeights(): void,
		clearColumnWidth(index: number): void,
		clearRowHeight(index: number): void,
		getColumnWidth(index: number): number,
		getRowHeight(index: number): number,
		hasColumnWidth(index: number): boolean,
		hasRowHeight(index: number): boolean,
		setColumnWidth(index: number, width: number): void,
		setRowHeight(index: number, height: number): void
	},
		children?: React.StatelessComponent<{
		getColumnWidth: () => number,
		getRowHeight: () => number,
		resetMeasurements: () => any,
		resetMeasurementsForColumn: (index: number) => any,
		resetMeasurementsForRow: (index: number) => any
	}>,
		columnCount: number,
		container?: React.ReactType,
		height?: number,
		rowCount: number,
		width?: number
	}

	declare interface ColumnSizerProps {
		children?: React.StatelessComponent<{
		adjustedWidth: number,
		getColumnWidth: () => number,
		registerChild: any
	}>,
		columnMaxWidth?: number,
		columnMinWidth?: number,
		columnCount?: number,
		width: number
	}

		declare export class VirtualScroll extends React$Component<VirtualScrollProps, {
		
	}> {
		
	}

	declare export class Collection extends React$Component<CollectionProps, {
		
	}> {
		
	}

	declare export class FlexTable extends React$Component<FlexTableProps, {
		
	}> {
		
	}

	declare export class FlexColumn extends React$Component<FlexColumnProps, {
		
	}> {
		
	}

	declare export class SortDirection extends React$Component<SortDirectionProps, {
		
	}> {
		
	}

	declare export class Grid extends React$Component<GridProps, {
		
	}> {
		
	}

	declare export class AutoSizer extends React$Component<AutoSizerProps, {
		
	}> {
		
	}

	declare export class ArrowKeyStepper extends React$Component<ArrowKeyStepperProps, {
		
	}> {
		
	}

	declare export class CellMeasurer extends React$Component<CellMeasurerProps, {
		
	}> {
		
	}

	declare export class ColumnSizer extends React$Component<ColumnSizerProps, {
		
	}> {
		
	}

	declare export class InfiniteLoader extends React$Component<InfiniteLoaderProps, {
		
	}> {
		
	}

	declare export class ScrollSync extends React$Component<ScrollSyncProps, {
		
	}> {
		
	}

	declare export class WindowScroller extends React$Component<WindowScrollerProps, {
		
	}> {
		
	}

	
}
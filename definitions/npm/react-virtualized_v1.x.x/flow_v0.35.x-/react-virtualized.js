// @flow
/**
 * Flowtype definitions for react-virtualized
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'react-virtualized' {

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
                }) => void,
            onScroll?: (
                info: {
                    clientHeight: number,
                    scrollHeight: number,
                    scrollTop: number
                }) => void,
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
    declare     export class VirtualScroll mixins React.Component<VirtualScrollProps, {}>{}
    declare type CollectionProps = any;
    declare     export class Collection mixins React.Component<CollectionProps, {}>{}
    declare type FlexTableProps = any;
    declare     export class FlexTable mixins React.Component<FlexTableProps, {}>{}
    declare type FlexColumnProps = any;
    declare     export class FlexColumn mixins React.Component<FlexColumnProps, {}>{}
    declare type SortDirectionProps = any;
    declare     export class SortDirection mixins React.Component<SortDirectionProps, {}>{}
    declare type GridProps = any;
    declare     export class Grid mixins React.Component<GridProps, {}>{}
    declare interface AutoSizerProps {
        disableHeight?: boolean,
            disableWidth?: boolean,
            onResize?: (info: {
                height: number,
                width: number
            }) => any
    }
    declare     export class AutoSizer mixins React.Component<AutoSizerProps, {}>{}
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
    declare     export class ArrowKeyStepper mixins React.Component<ArrowKeyStepperProps, {}>{}
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
    declare     export class CellMeasurer mixins React.Component<CellMeasurerProps, {}>{}
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
    declare     export class ColumnSizer mixins React.Component<ColumnSizerProps, {}>{}
    declare type InfiniteLoaderProps = any;
    declare     export class InfiniteLoader mixins React.Component<InfiniteLoaderProps, {}>{}
    declare type ScrollSyncProps = any;
    declare     export class ScrollSync mixins React.Component<ScrollSyncProps, {}>{}
    declare type WindowScrollerProps = any;
    declare     export class WindowScroller mixins React.Component<WindowScrollerProps, {}>{}
}
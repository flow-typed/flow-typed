declare module 'fixed-data-table-2' {
  declare type ColumnKey = ?string | number;
  declare type Align = 'left' | 'center' | 'right';
  declare type BasicCellProps = {columnKey: ColumnKey, height: number, width: number};

  declare class Cell extends React$Component {
    props: {
      isScrolling?: ?boolean,
      align?: ?Align,
      className?: ?string,
      highlighted?: ?boolean,
      width?: ?number,
      minWidth?: ?number,
      maxWidth?: ?number,
      height?: ?number,
      cell?: ?string | React$Element | (props: BasicCellProps & {rowIndex?: ?number}) => React$Element,
      columnKey?: ?ColumnKey,
      rowIndex?: ?number,
      onColumnResize?: ?(left: ?number, width: number, minWidth: ?number, maxWidth: ?number, columnKey: ColumnKey, event: SyntheticEvent) => void,
      onColumnReorder?: ?(columnKey: ColumnKey, width: number, left: ?number, event: SyntheticEvent) => void,
      left?: ?number,
      pureRendering?: ?boolean
    }
  }

  declare class Column extends React$Component {
    props: {
      align?: ?Align,
      fixed?: ?boolean,
      header?: ?string | React$Element | (props: BasicCellProps) => React$Element,
      cell?: ?string | React$Element | (props: BasicCellProps & {rowIndex: number}) => React$Element,
      footer?: ?string | React$Element | (props: BasicCellProps) => React$Element,
      columnKey?: ColumnKey,
      width: number,
      minWidth?: ?number,
      maxWidth?: ?number,
      flexGrow?: ?number,
      isResizable?: ?boolean,
      isReorderable?: ?boolean,
      allowCellsRecycling?: ?boolean,
      pureRendering?: boolean
    }
  }

  declare class ColumnGroup extends React$Component {
    props: {
      align?: ?Align,
      fixed?: ?boolean,
      header?: ?string | React$Element
    }
  }

  declare class Table extends React$Component {
    props: {
      width: number,
      height?: ?number,
      className?: ?string,
      maxHeight?: ?number,
      ownerHeight?: ?number,
      overflowX?: 'auto' | 'hidden',
      overflowY?: 'auto' | 'hidden',
      touchScrollEnabled?: ?boolean,
      showScrollbarX?: ?boolean,
      showScrollbarY?: ?boolean,
      onHorizontalScroll?: ?(position: number) => boolean,
      onVerticalScroll?: ?(position: number) => boolean,
      rowsCount: number,
      rowHeight: number,
      rowHeightGetter?: ?(index: number) => number,
      rowClassNameGetter?: ?(index: number) => ?string,
      rowKeyGetter?: ?(index: number) => string,
      groupHeaderHeight?: ?number,
      headerHeight: number,
      footerHeight?: ?number,
      scrollLeft?: ?number,
      scrollToColumn?: ?number,
      scrollTop?: ?number,
      scrollToRow?: ?number,
      onScrollStart?: ?(scrollX: number, scrollY: number, firstRowIndex: number) => void,
      onScrollEnd?: ?(scrollX: number, scrollY: number, firstRowIndex: number) => void,
      stopScrollPropagation?: ?boolean,
      onContentHeightChange?: ?(contentHeight: number) => void,
      onRowClick?: ?(event: SyntheticEvent, index: number) => void,
      onRowDoubleClick?: ?(event: SyntheticEvent, index: number) => void,
      onRowMouseDown?: ?(event: SyntheticEvent, index: number) => void,
      onRowMouseEnter?: ?(event: SyntheticEvent, index: number) => void,
      onRowMouseLeave?: ?(event: SyntheticEvent, index: number) => void,
      onColumnResizeEndCallback?: ?(newColumnWidth: number, columnKey: ColumnKey) => void,
      onColumnReorderEndCallback?: ?(event: {columnBefore: ?string, columnAfter: ?string, reorderColumn: string}) => void,
      isColumnResizing?: ?boolean,
      isColumnReordering?: ?boolean,
      bufferRowCount?: ?number
    }
  }

  declare var exports: {
    Cell: typeof Cell,
    Column: typeof Column,
    ColumnGroup: typeof ColumnGroup,
    Table: typeof Table
  }
}

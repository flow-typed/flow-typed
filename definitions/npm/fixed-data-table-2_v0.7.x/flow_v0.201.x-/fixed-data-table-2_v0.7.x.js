declare module "fixed-data-table-2" {
  declare type ColumnKey = ?string | number;
  declare type Align = "left" | "center" | "right";
  declare type BasicCellProps = {
    columnKey: ColumnKey,
    height: number,
    width: number,
    ...
  };

  declare export class Cell extends React$Component<{
    isScrolling?: ?boolean,
    align?: ?Align,
    className?: ?string,
    highlighted?: ?boolean,
    width?: ?number,
    minWidth?: ?number,
    maxWidth?: ?number,
    height?: ?number,
    cell?:
      | ?string
      | React$Element<any>
      | ((props: BasicCellProps & { rowIndex?: ?number, ... }) => React$Element<any>),
    columnKey?: ?ColumnKey,
    rowIndex?: ?number,
    onColumnResize?: ?(
      left: ?number,
      width: number,
      minWidth: ?number,
      maxWidth: ?number,
      columnKey: ColumnKey,
      event: SyntheticEvent<any>
    ) => void,
    onColumnReorder?: ?(
      columnKey: ColumnKey,
      width: number,
      left: ?number,
      event: SyntheticEvent<any>
    ) => void,
    left?: ?number,
    pureRendering?: ?boolean,
    ...
  }> {}

  declare export class Column extends React$Component<{
    align?: ?Align,
    fixed?: ?boolean,
    header?:
      | ?string
      | React$Element<any>
      | ((props: BasicCellProps) => React$Element<any>),
    cell?:
      | ?string
      | React$Element<any>
      | ((props: BasicCellProps & { rowIndex: number, ... }) => React$Element<any>),
    footer?:
      | ?string
      | React$Element<any>
      | ((props: BasicCellProps) => React$Element<any>),
    columnKey?: ColumnKey,
    width: number,
    minWidth?: ?number,
    maxWidth?: ?number,
    flexGrow?: ?number,
    isResizable?: ?boolean,
    isReorderable?: ?boolean,
    allowCellsRecycling?: ?boolean,
    pureRendering?: boolean,
    ...
  }> {}

  declare export class ColumnGroup extends React$Component<{
    align?: ?Align,
    fixed?: ?boolean,
    header?: ?string | React$Element<any>,
    ...
  }> {}

  declare export class Table extends React$Component<{
    width: number,
    height?: ?number,
    className?: ?string,
    maxHeight?: ?number,
    ownerHeight?: ?number,
    overflowX?: "auto" | "hidden",
    overflowY?: "auto" | "hidden",
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
    onScrollStart?: ?(
      scrollX: number,
      scrollY: number,
      firstRowIndex: number
    ) => void,
    onScrollEnd?: ?(
      scrollX: number,
      scrollY: number,
      firstRowIndex: number
    ) => void,
    stopScrollPropagation?: ?boolean,
    onContentHeightChange?: ?(contentHeight: number) => void,
    onRowClick?: ?(event: SyntheticEvent<any>, index: number) => void,
    onRowDoubleClick?: ?(event: SyntheticEvent<any>, index: number) => void,
    onRowMouseDown?: ?(event: SyntheticEvent<any>, index: number) => void,
    onRowMouseEnter?: ?(event: SyntheticEvent<any>, index: number) => void,
    onRowMouseLeave?: ?(event: SyntheticEvent<any>, index: number) => void,
    onColumnResizeEndCallback?: ?(
      newColumnWidth: number,
      columnKey: ColumnKey
    ) => void,
    onColumnReorderEndCallback?: ?(event: {
      columnBefore: ?string,
      columnAfter: ?string,
      reorderColumn: string,
      ...
    }) => void,
    isColumnResizing?: ?boolean,
    isColumnReordering?: ?boolean,
    bufferRowCount?: ?number,
    ...
  }> {}
}

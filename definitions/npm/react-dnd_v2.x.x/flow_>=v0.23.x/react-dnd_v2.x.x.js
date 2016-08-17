// Shared
// ----------------------------------------------------------------------
// todo: add symbol once flow supports it
type Identifier = string;

type ClientOffset = {
  x: number,
  y: number
}

type DndOptions<P> = {
  arePropsEqual?: (props: P, otherProps: P) => boolean
};

// Decorated Components
// ----------------------------------------------------------------------
declare class DndComponent<P> extends React$Component<any, P, any> {
  static DecoratedComponent: Class<this>;
  getDecoratedComponentInstance(): this;
  getHandlerId(): Identifier;
}

declare class ContextComponent<P> extends React$Component<any, P, any> {
  static DecoratedComponent: Class<this>;
  getDecoratedComponentInstance(): this;
  // getManager is not yet documented in ReactDnd Docs
  getManager(): any;
}

// Drag Source
// ----------------------------------------------------------------------
type DragSourceType<P> =
  Identifier |
  (props: P) => Identifier;

type DragSourceSpec<P> = {
  beginDrag: (
    props: P,
    monitor?: DragSourceMonitor,
    component?: React$Component<any, P, any>
  ) => Object,

  endDrag?: (
    props: P,
    monitor?: DragSourceMonitor,
    component?: ?React$Component<any, P, any>
  ) => void,

  canDrag?: (
    props: P,
    monitor?: DragSourceMonitor
  ) => boolean,

  isDragging?: (
    props: P,
    monitor?: DragSourceMonitor
  ) => boolean
};

type DragSourceMonitor = {
  canDrag: () => boolean,
  isDragging: () => boolean,
  getItemType: () => Identifier,
  getItem: () => Object,
  getDropResult: () => Object,
  didDrop: () => boolean,
  getInitialClientOffset: () => ClientOffset,
  getInitialSourceClientOffset: () => ClientOffset,
  getClientOffset: () => ClientOffset,
  getDifferenceFromInitialOffset: () => ClientOffset,
  getSourceClientOffset: () => ClientOffset
}

type DragSourceConnector = {
  dragSource: () => ConnectDragSource,
  dragPreview: () => ConnectDragPreview
}

type DragSourceOptions = {
  dropEffect?: string
}

type DragPreviewOptions = {
  captureDraggingState?: boolean,
  anchorX?: number,
  anchorY?: number
}

type ConnectDragSource = (
  elementOrNode: React$Element<any>
  options?: DragSourceOptions
) => React$Element<any>;

type ConnectDragPreview = (
  elementOrNode: React$Element<any>
  options?: DragPreviewOptions
) => React$Element<any>;

type DragSourceCollector = (
  connect: DragSourceConnector,
  monitor: DragSourceMonitor
) => Object;

type DragSource = <P, C: React$Component<any, P, any>>(
  type: DragSourceType<P>,
  spec: DragSourceSpec<P>,
  collect: DragSourceCollector,
  options?: DndOptions<P>
) => (component: Class<C>) => Class<DndComponent<P>>;

// Drop Target
// ----------------------------------------------------------------------
type DropTargetTypes<P> =
  Identifier |
  Array<Identifier> |
  (props: P) => Identifier | Array<Identifier>;

type DropTargetSpec<P> = {
  drop?: (
    props: P,
    monitor?: DropTargetMonitor,
    component?: React$Component<any, P, any>
  ) => ?Object,

  hover?: (
    props: P,
    monitor?: DropTargetMonitor,
    component?: React$Component<any, P, any>
  ) => void,

  canDrop?: (
    props: P,
    monitor?: DropTargetMonitor
  ) => boolean
};

type DropTargetMonitor = {
  canDrop: () => boolean,
  isOver: (options?: { shallow: boolean }) => boolean,
  getItemType: () => Identifier,
  getItem: () => Object,
  getDropResult: () => Object,
  didDrop: () => boolean,
  getInitialClientOffset: () => ClientOffset,
  getInitialSourceClientOffset: () => ClientOffset,
  getClientOffset: () => ClientOffset,
  getDifferenceFromInitialOffset: () => ClientOffset,
  getSourceClientOffset: () => ClientOffset
}

type DropTargetConnector = {
  dropTarget: () => ConnectDropTarget
}

type ConnectDropTarget = (
  elementOrNode: React$Element<any>
) => React$Element<any>;

type DropTarget = <P, C: React$Component<any, P, any>>(
  types: DropTargetTypes<P>,
  spec: DropTargetSpec<P>,
  collect: (
    connect: DropTargetConnector,
    monitor: DropTargetMonitor
  ) => Object,
  options?: DndOptions<P>
) => (component: Class<C>) => Class<DndComponent<P>>;

// Drag Layer
// ----------------------------------------------------------------------
type DragLayerMonitor = {
  isDragging: () => boolean;
  getItemType: () => Identifier;
  getItem: () => Object;
  getInitialClientOffset: () => ClientOffset;
  getInitialSourceClientOffset: () => ClientOffset;
  getClientOffset: () => ClientOffset;
  getDifferenceFromInitialOffset: () => ClientOffset;
  getSourceClientOffset: () => ClientOffset;
}

type DragLayer = <P, C: React$Component<any, P, any>>(
  collect: (monitor: DragLayerMonitor) => Object,
  options?: DndOptions<P>
) => (component: Class<C>) => Class<DndComponent<P>>;

// Drag Drop Context
// ----------------------------------------------------------------------
type DragDropContext = <P, C: React$Component<any, P, any>>(
  backend: mixed
) => (component: Class<C>) => Class<ContextComponent<P>>;

// Top-level API
// ----------------------------------------------------------------------
declare module 'react-dnd' {
  declare var exports : {
    DragSource: DragSource,
    DropTarget: DropTarget,
    DragLayer: DragLayer,
    DragDropContext: DragDropContext
  }
}

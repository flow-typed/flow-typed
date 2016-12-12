

declare module 'react-dnd' {
					declare module.exports: undefined


}

declare module '___ReactDnd' {
	declare type DragSourceCollector = (connect: DragSourceConnector, monitor: DragSourceMonitor) => Object;

	declare type DropTargetCollector = (connect: DropTargetConnector, monitor: DropTargetMonitor) => Object;

	declare type DragLayerCollector = (monitor: DragLayerMonitor) => Object;

	declare type Identifier = string;

	declare type ConnectDragSource = DragElementWrapper<DragSourceOptions>;

	declare type ConnectDragPreview = DragElementWrapper<DragPreviewOptions>;

	declare type ConnectDropTarget = <P>(elementOrNode: React.ReactElement<P>) => React.ReactElement<P>;

	declare interface ContextComponentClass<P> {
		new (props?: P, context?: any): ContextComponent<P, any>,
		DecoratedComponent: React.ComponentClass<P>
	}

	declare interface DndComponentClass<P> {
		new (props?: P, context?: any): DndComponent<P, any>,
		DecoratedComponent: React.ComponentClass<P>
	}

	declare interface ClientOffset {
		x: number,
		y: number
	}

	declare interface DndOptions<P> {
		arePropsEqual(props: P, otherProps: P): boolean
	}

	declare interface DragSourceSpec<P> {
		beginDrag(
		props: P, monitor?: DragSourceMonitor, component?: React.Component<P, any>
	): Object,
		endDrag(
		props: P, monitor?: DragSourceMonitor, component?: React.Component<P, any>
	): void,
		canDrag(props: P, monitor?: DragSourceMonitor): boolean,
		isDragging(props: P, monitor?: DragSourceMonitor): boolean
	}

	declare interface DragElementWrapper<O> {
		(elementOrNode: React.ReactElement<P>, options?: O): React.ReactElement<P>
	}

	declare interface DragSourceOptions {
		dropEffect?: string
	}

	declare interface DragPreviewOptions {
		captureDraggingState?: boolean,
		anchorX?: number,
		anchorY?: number
	}

	declare interface DropTargetSpec<P> {
		drop(
		props: P, monitor?: DropTargetMonitor, component?: React.Component<P, any>
	): Object | void,
		hover(
		props: P, monitor?: DropTargetMonitor, component?: React.Component<P, any>
	): void,
		canDrop(props: P, monitor?: DropTargetMonitor): boolean
	}

	declare interface Backend {
		
	}

	declare export function DragSource<P>(
		type: Identifier | ((props: P) => Identifier), spec: DragSourceSpec<P>, collect: DragSourceCollector, options?: DndOptions<P>
	): (
		componentClass: React.ComponentClass<P> | React.StatelessComponent<P>
	) => DndComponentClass<P>

	declare export function DropTarget<P>(
		types: Identifier | Identifier[] | ((props: P) => Identifier | Identifier[]), spec: DropTargetSpec<P>, collect: DropTargetCollector, options?: DndOptions<P>
	): (
		componentClass: React.ComponentClass<P> | React.StatelessComponent<P>
	) => DndComponentClass<P>

	declare export function DragDropContext<P>(
		backend: Backend
	): <P>(
		componentClass: React.ComponentClass<P> | React.StatelessComponent<P>
	) => ContextComponentClass<P>

	declare export function DragLayer<P>(
		collect: DragLayerCollector, options?: DndOptions<P>
	): (
		componentClass: React.ComponentClass<P> | React.StatelessComponent<P>
	) => DndComponentClass<P>

	declare class ContextComponent<P, S> extends React$Component<P, S> {
		getDecoratedComponentInstance(): React.Component<P, S>;
		getManager(): any
	}

	declare class DndComponent<P, S> extends React$Component<P, S> {
		getDecoratedComponentInstance(): React.Component<P, S>;
		getHandlerId(): Identifier
	}

	declare class DragSourceMonitor  {
		canDrag(): boolean;
		isDragging(): boolean;
		getItemType(): Identifier;
		getItem(): Object;
		getDropResult(): Object;
		didDrop(): boolean;
		getInitialClientOffset(): ClientOffset;
		getInitialSourceClientOffset(): ClientOffset;
		getClientOffset(): ClientOffset;
		getDifferenceFromInitialOffset(): ClientOffset;
		getSourceClientOffset(): ClientOffset
	}

	declare class DragSourceConnector  {
		dragSource(): ConnectDragSource;
		dragPreview(): ConnectDragPreview
	}

	declare class DropTargetMonitor  {
		canDrop(): boolean;
		isOver(options?: {
		shallow: boolean
	}): boolean;
		getItemType(): Identifier;
		getItem(): Object;
		getDropResult(): Object;
		didDrop(): boolean;
		getInitialClientOffset(): ClientOffset;
		getInitialSourceClientOffset(): ClientOffset;
		getClientOffset(): ClientOffset;
		getDifferenceFromInitialOffset(): ClientOffset;
		getSourceClientOffset(): ClientOffset
	}

	declare class DropTargetConnector  {
		dropTarget(): ConnectDropTarget
	}

	declare class DragLayerMonitor  {
		isDragging(): boolean;
		getItemType(): Identifier;
		getItem(): Object;
		getInitialClientOffset(): ClientOffset;
		getInitialSourceClientOffset(): ClientOffset;
		getClientOffset(): ClientOffset;
		getDifferenceFromInitialOffset(): ClientOffset;
		getSourceClientOffset(): ClientOffset
	}

	
}
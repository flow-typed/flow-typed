

declare module 'jquery.jsPlumb' {
		declare interface jsPlumbInstance {
		setRenderMode(renderMode: string): string,
		bind(event: string, callback: (e: <<UNKNOWN PARAM FORMAT>>) => void): void,
		unbind(event?: string): void,
		ready(callback: () => void): void,
		importDefaults(defaults: Defaults): void,
		Defaults: Defaults,
		restoreDefaults(): void,
		addClass(el: any, clazz: string): void,
		addEndpoint(ep: string): any,
		removeClass(el: any, clazz: string): void,
		hasClass(el: any, clazz: string): void,
		draggable(el: string, options?: DragOptions): jsPlumbInstance,
		draggable(ids: string[], options?: DragOptions): jsPlumbInstance,
		connect(connection: ConnectParams, referenceParams?: ConnectParams): Connection,
		makeSource(el: string, options: SourceOptions): void,
		makeTarget(el: string, options: TargetOptions): void,
		repaintEverything(): void,
		detachEveryConnection(): void,
		detachAllConnections(el: string): void,
		removeAllEndpoints(el: string, recurse?: boolean): jsPlumbInstance,
		removeAllEndpoints(el: Element, recurse?: boolean): jsPlumbInstance,
		select(params: SelectParams): Connections,
		getConnections(options?: any, flat?: any): any[],
		deleteEndpoint(uuid: string, doNotRepaintAfterwards?: boolean): jsPlumbInstance,
		deleteEndpoint(endpoint: Endpoint, doNotRepaintAfterwards?: boolean): jsPlumbInstance,
		repaint(el: string): jsPlumbInstance,
		repaint(el: Element): jsPlumbInstance,
		getInstance(): jsPlumbInstance,
		getInstance(defaults: Defaults): jsPlumbInstance,
		getInstanceIndex(): number,
		SVG: string,
		CANVAS: string,
		VML: string
	}

	declare interface Defaults {
		Endpoint?: any[],
		PaintStyle?: PaintStyle,
		HoverPaintStyle?: PaintStyle,
		ConnectionsDetachable?: boolean,
		ReattachConnections?: boolean,
		ConnectionOverlays?: any[][],
		Container?: any,
		DragOptions?: DragOptions
	}

	declare interface PaintStyle {
		strokeStyle: string,
		lineWidth: number
	}

	declare interface ArrowOverlay {
		location: number,
		id: string,
		length: number,
		foldback: number
	}

	declare interface LabelOverlay {
		label: string,
		id: string,
		location: number
	}

	declare interface Connections {
		detach(): void,
		length: number
	}

	declare interface ConnectParams {
		source?: any,
		target?: any,
		detachable?: boolean,
		deleteEndpointsOnDetach?: boolean,
		endPoint?: string,
		anchor?: string,
		anchors?: any[],
		label?: string
	}

	declare interface DragOptions {
		containment?: string
	}

	declare interface SourceOptions {
		parent: string,
		endpoint?: string,
		anchor?: string,
		connector?: any[],
		connectorStyle?: PaintStyle
	}

	declare interface TargetOptions {
		isTarget?: boolean,
		maxConnections?: number,
		uniqueEndpoint?: boolean,
		deleteEndpointsOnDetach?: boolean,
		endpoint?: string,
		dropOptions?: DropOptions,
		anchor?: any
	}

	declare interface DropOptions {
		hoverClass: string
	}

	declare interface SelectParams {
		scope?: string,
		source: string,
		target: string
	}

	declare interface Connection {
		setDetachable(detachable: boolean): void,
		setParameter<T>(name: string, value: T): void,
		endpoints: Endpoint[]
	}

	declare interface Endpoint {
		
	}

			
}
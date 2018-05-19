declare module 'leaflet' {
    declare class Map {
        constructor(id: string, options?: MapOptions): void;
        constructor(el: HTMLElement, options?: MapOptions): void;

        getRenderer(layer: Path): Renderer;

        addControl(control: Control): this;
        removeControl(control: Control): this;
        addLayer(layer: Layer): this;
        removeLayer(layer: Layer): this;
        hasLayer(layer: Layer): boolean;
        eachLayer(fn: (layer: Layer) => mixed, context?: Object): this;
        openPopup(popup: Popup): this;
        openPopup(content: string | HTMLElement, latlng: ILatLng | LatLngTuple, options?: PopupOptions): this;
        closePopup(popup?: Popup): this;
        openTooltip(tooltip: Tooltip): this;
        openTooltip(content: string | HTMLElement, latlng: ILatLng | LatLngTuple, options?: TooltipOptions): this;
        closeTooltip(tooltip?: Tooltip): this;

        setView(center: ILatLng | LatLngTuple, zoom: number, options?: ZoomPanOptions): this;
        setZoom(zoom: number, options?: ZoomPanOptions): this;
        zoomIn(delta?: number, options?: ZoomOptions): this;
        zoomOut(delta?: number, options?: ZoomOptions): this;
        setZoomAround(latlng: ILatLng | LatLngTuple, zoom: number, options: ZoomOptions): this;
        setZoomAround(offset: IPoint | PointTuple, zoom: number, options: ZoomOptions): this;
        fitBounds(bounds: LatLngBounds | LatLngBoundsTuple, options?: FitBoundsOptions): this;
        fitWorld(options?: FitBoundsOptions): this;
        panTo(latlng: ILatLng | LatLngTuple, options?: PanOptions): this;
        panBy(offset: IPoint | PointTuple, options?: PanOptions): this;
        flyTo(latlng: ILatLng | LatLngTuple, zoom?: number, options?: ZoomPanOptions): this;
        flyToBounds(bounds: LatLngBounds | LatLngBoundsTuple, options?: FitBoundsOptions): this;
        setMaxBounds(bounds: Bounds | BoundsTuple): this;
        setMinZoom(zoom: number): this;
        setMaxZoom(zoom: number): this;
        panInsideBounds(bounds: LatLngBounds | LatLngBoundsTuple, options?: PanOptions): this;
        invalidateSize(options: ZoomPanOptions): this;
        invalidateSize(animate: boolean): this;
        stop(): this;

        locate(options?: LocateOptions): this;
        stopLocate(): this;

        addHandler(name: string, HandlerClass: Function): this;
        remove(): this;
        createPane(name: string, container?: HTMLElement): HTMLElement;
        getPane(pane: String | HTMLElement): HTMLElement;
        getPanes(): Object;
        getContainer(): HTMLElement;
        whenReady(fn: Function, context?: Object): this;

        getCenter(): LatLng;
        getZoom(): number;
        getBounds(): LatLngBounds;
        getMinZoom(): number;
        getMaxZoom(): number;
        getBoundsZoom(bounds: LatLngBounds | LatLngBoundsTuple, inside?: boolean): number;
        getSize(): Point;
        getPixelBounds(): Bounds;
        getPixelOrigin(): Point;
        getPixelWorldBounds(zoom?: number): Bounds;

        getZoomScale(toZoom: number, fromZoom: number): number;
        getScaleZoom(scale: number, fromZoom: number): number;
        project(latlng: ILatLng | LatLngTuple, zoom: number): Point;
        unproject(point: IPoint | PointTuple, zoom: number): LatLng;
        layerPointToLatLng(point: IPoint | PointTuple): LatLng;
        latLngToLayerPoint(latlng: ILatLng | LatLngTuple): Point;
        wrapLatLng(latlng: ILatLng | LatLngTuple): LatLng;
        wrapLatLngBounds(bounds: LatLngBounds | LatLngBoundsTuple): LatLngBounds;
        distance(latlng1: ILatLng | LatLngTuple, latlng2: ILatLng | LatLngTuple): number;
        containerPointToLayerPoint(point: IPoint | PointTuple): Point;
        layerPointToContainerPoint(point: IPoint | PointTuple): Point;
        containerPointToLatLng(point: IPoint | PointTuple): LatLng;
        latLngToContainerPoint(latlng: ILatLng | LatLngTuple): Point;
        mouseEventToContainerPoint(ev: MouseEvent): Point;
        mouseEventToLayerPoint(ev: MouseEvent): Point;
        mouseEventToLatLng(ev: MouseEvent): LatLng;

        boxZoom: Handler;
        doubleClickZoom: Handler;
        dragging: Handler;
        keyboard: Handler;
        scrollWheelZoom: Handler;
        tap: Handler;
        touchZoom: Handler;

        mapPane: HTMLElement;
        tilePane: HTMLElement;
        overlayPane: HTMLElement;
        shadowPane: HTMLElement;
        markerPane: HTMLElement;
        tooltipPane: HTMLElement;
        popupPane: HTMLElement;
    }

    declare type MapOptions = {
        preferCanvas?: boolean;
        attributionControl?: boolean;
        zoomControl?: boolean;
        closePopupOnClick?: boolean;
        zoomSnap?: number;
        zoomDelta?: number;
        trackResize?: boolean;
        boxZoom?: boolean;
        doubleClickZoom?: boolean | string;
        dragging?: boolean;
        crs?: CRS;
        center?: ILatLng | LatLngTuple;
        zoom?: number;
        minZoom?: number;
        maxZoom?: number;
        layers?: Layer[];
        maxBounds?: LatLngBounds | LatLngBoundsTuple;
        renderer?: Renderer;
        zoomAnimation?: boolean;
        zoomAnimationThreshold?: number;
        fadeAnimation?: boolean;
        markerZoomAnimation?: boolean;
        transform3DLimit?: number;
        inertia?: boolean;
        inertiaDeceleration?: number;
        inertiaMaxSpeed?: number;
        easeLinearity?: number;
        worldCopyJump?: boolean;
        maxBoundsViscosity?: number;
        keyboard?: boolean;
        keyboardPanDelta?: number;
        scrollWheelZoom?: boolean | string;
        wheelDebounceTime?: number;
        wheelPxPerZoomLevel?: number;
        tap?: boolean;
        tapTolerance?: number;
        touchZoom?: boolean | string;
        bounceAtZoomLimits?: boolean;
    }

    // UI Layers

    declare type MarkerOptions = {
        icon?: Icon;
        draggable?: boolean;
        keyboard?: boolean;
        title?: string;
        alt?: string;
        zIndexOffset?: number;
        opacity?: number;
        riseOnHover?: boolean;
        riseOffset?: number;
        pane?: string;
        bubblingMouseEvents?: boolean;
    }

    declare class Marker extends Layer {
        constructor(latlng: ILatLng | LatLngTuple, options?: MarkerOptions): void;
        toGeoJSON(): Object;
        getLatLng(): LatLng;
        setLatLng(latlng: ILatLng | LatLngTuple): this;
        setZIndexOffset(offset: number): this;
        setIcon(icon: Icon): this;
        setOpacity(opacity: number): this;

        dragging: Handler;
    }

    declare type PopupOptions = {
        maxWidth?: number;
        minWidth?: number;
        maxHeight?: number;
        autoPan?: boolean;
        autoPanPaddingTopLeft?: IPoint | PointTuple;
        autoPanPaddingBottomRight?: IPoint | PointTuple;
        autoPanPadding?: IPoint | PointTuple;
        keepInView?: boolean;
        closeButton?: boolean;
        autoClose?: boolean;
        closeOnClick?: boolean;
        className?: string;
    }

    declare class Popup extends Layer {
        options: PopupOptions;
        constructor(options?: PopupOptions, sourse?: Layer): void;
        getLatLng(): LatLng;
        setLatLng(latlng: ILatLng | LatLngTuple): this;
        getContent(): string | HTMLElement;
        setContent(htmlContent: string | HTMLElement | ContentFactory): this;
        getElement(): string | HTMLElement;
        update(): null;
        isOpen(): boolean;
        bringToFront(): this;
        bringToBack(): this;
        openOn(map: Map): this;
    }

    declare type TooltipOptions = {
        pane?: string;
        offset?: IPoint | PointTuple;
        direction?: 'right' | 'left' | 'top' | 'bottom' | 'center' | 'auto';
        permanent?: boolean;
        sticky?: boolean;
        interactive?: boolean;
        opacity?: number;
    }

    declare class Tooltip extends Layers {
        options: TooltipOptions;
        constructor(options?: TooltipOptions, source?: Layer): void;
    }

    // Raster Layers

    declare type TileLayerOptions = {
        minZoom?: number;
        maxZoom?: number;
        subdomains?: string | string[];
        errorTileUrl?: string;
        zoomOffset?: number;
        tms?: boolean;
        zoomReverse?: boolean;
        detectRetina?: boolean;
        crossOrigin?: boolean;
    }

    declare class TileLayer extends GridLayer {
        constructor(url: string, options?: TileLayerOptions): void;
        setUrl(url: string, noRedraw?: boolean): this;
        createTile(coords: Object, done?: Function): HTMLElement;
    }

    // Other Layers

    declare class LayerGroup extends Layer {
        constructor(layers: Layer[]): void;
        toGeoJSON(): Object;
        addLayer(layer: Layer): this;
        removeLayer(layer: Layer): this;
        removeLayer(id: number): this;
        hasLayer(layer: Layer): boolean;
        hasLayer(id: number): boolean;
        clearLayers(): this;
        invoke(methodName: string): this;
        eachLayer(fn: (layer: Layer) => mixed, context?: Object): this;
        getLayer(id: number): Layer;
        getLayers(): Layer[];
        setZIndex(zIndex: number): this;
        getLayerId(layer: Layer): number;
    }

    // Basic Types

    declare interface ILatLng {
        lat: number;
        lng: number;
        alt?: number;
    }

    declare type LatLngTuple = [number, number] | [number, number, number];

    declare class LatLng implements ILatLng {
        constructor(latitude: number, longitude: number, altitude?: number): void;
        equals(otherLatLng: ILatLng | LatLngTuple, maxMargin?: number): boolean;
        toString(): string;
        distanceTo(otherLatLng: ILatLng | LatLngTuple): number;
        wrap(): LatLng;
        toBounds(sizeInMeters: number): LatLngBounds;

        lat: number;
        lng: number;
        alt?: number;
    }

    declare type LatLngBoundsTuple = [ILatLng | LatLngTuple, ILatLng |LatLngTuple];

    declare class LatLngBounds {
        constructor(corner1: CornerType, corner2: CornerType): void;
        constructor(corner: CornerType[]): void;
        extend(latlng: ILatLng | LatLngTuple): this;
        extend(otherBounds: LatLngBounds | LatLngBoundsTuple): this;
        pad(bufferRatio: number): LatLngBounds;
        getCenter(): LatLng;
        getSouthWest(): LatLng;
        getNorthEast(): LatLng;
        getNorthWest(): LatLng;
        getSouthEast(): LatLng;
        getWest(): number;
        getSouth(): number;
        getEast(): number;
        getNorth(): number;
        contains(otherBounds: LatLngBounds | LatLngBoundsTuple): boolean;
        contains(latlng: ILatLng | LatLngTuple): boolean;
        intersect(otherBounds: LatLngBounds | LatLngBoundsTuple): boolean;
        overlaps(otherBounds: Bounds | BoundsTuple): boolean;
        toBBoxString(): string;
        equals(otherBounds: LatLngBounds | LatLngBoundsTuple, maxMargin?: number): boolean;
        isValid(): boolean;
    }

    declare type PointTuple = [number, number];

    declare interface IPoint {
        x: number;
        y: number;
    }

    declare class Point implements IPoint {
        x: number;
        y: number;

        constructor(x: number, y: number, round?: boolean): void;
        clone(): Point;
        add(otherPoint: IPoint | PointTuple): Point;
        subtract(otherPoint: IPoint | PointTuple): Point;
        divideBy(num: number): Point;
        multiplyBy(num: number): Point;
        scaleBy(num: number): Point;
        unscaleBy(num: number): Point;
        round(): Point;
        floor(): Point;
        ceil(): Point;
        distanceTo(otherPoint: IPoint | PointTuple): number;
        equals(otherPoint: IPoint | PointTuple): boolean;
        contains(otherPoint: IPoint | PointTuple): boolean;
        toString(): string;
    }

    declare type BoundsTuple = [IPoint | PointTuple, IPoint | PointTuple];

    declare class Bounds {
        min: Point;
        max: Point;

        constructor(corner1: IPoint | PointTuple, corner2: IPoint | PointTuple): void;
        extend(point: IPoint | PointTuple): this;
        getCenter(round?: boolean): Point;
        getBottomLeft(): Point;
        getTopRight(): Point;
        getTopLeft(): Point;
        getBottomRight(): Point;
        getSize(): Point;
        contains(otherBounds: Bounds | BoundsTuple): boolean;
        contains(point: IPoint | PointTuple): boolean;
        intersects(otherBounds: Bounds | BoundsTuple): boolean;
        overlaps(otherBounds: Bounds | BoundsTuple): boolean;
    }

    declare type IconOptions = {
        iconUrl: string;
        iconRetinaUrl: string;
        iconSize: IPoint | PointTuple;
        iconAnchor: IPoint | PointTuple;
        popupAnchor: IPoint | PointTuple;
        shadowUrl: string;
        shadowRetinaUrl: string;
        shadowSize: IPoint | PointTuple;
        shadowAnchor: IPoint | PointTuple;
        className: string;
    }

    declare class Icon {
        static Default: Class<DefaultIcon>;

        createIcon(oldIcon?: HTMLElement): HTMLElement;
        createShadow(oldIcon?: HTMLElement): HTMLElement;
    }

    declare class DefaultIcon extends Icon {
        imagePath: string;
    }

    declare type DivIconOptions = IconOptions & {
        html?: string;
        bgPos?: IPoint | PointTuple;
    }

    declare class DivIcon extends Icon {
        constructor(options: DivIconOptions): void;
    }

    // Controls

    declare type ControlOptions = {
        position?: string
    }

    declare type ControlLayersOptions = ControlOptions & {
        collapsed?: boolean;
        autoZIndex?: boolean;
        hideSingleBase?: boolean;
        sortLayers?: boolean;
        sortFunction?: Function;
    }

    declare type LayersMap = {
        [name: string]: Layer,
    };

    declare class Layers extends Control {
        constructor(baselayers: ?Object, overlays: ?Object, options?: ControlLayersOptions): void;
        addBaseLayer(layer: Layer, name: string): this;
        addOverlay(layer: Layer, name: string): this;
        removeLayer(layer: Layer): this;
        expand(): this;
        collapse(): this;
    }

    // Base Classes

    declare class Evented {
        on(type: string, fn: Function, context?: Object): this;
        on(eventMap: EventMap): this;
        off(type: string, fn?: Function, context?: Object): this;
        off(eventMap: EventMap): this;
        off(): this;
        fire(type: string, data?: Object, propagate?: boolean): this;
        listens(type: string): boolean;
        once(type: string, fn: Function, context?: Object): this;
        once(eventMap: EventMap): this;
        addEventParent(obj: Evented): this;
        removeEventParent(obj: Evented): this;
        // aliases
        addEventListener(type: string, fn: Function, context?: Object): this;
        addEventListener(eventMap: EventMap): this;
        removeEventListener(type: string, fn?: Function, context?: Object): this;
        removeEventListener(eventMap: EventMap): this;
        removeEventListener(): this;
        clearAllEventListeners(): this;
        addOneTimeEventListener(type: string, fn: Function, context?: Object): this;
        addOneTimeEventListener(eventMap: EventMap): this;
        fireEvent(type: string, data?: Object, propagate?: boolean): this;
        hasEventListeners(type: string): boolean;
    }

    declare type LayerOptions = {
        pane: string;
        attribution: string;
    };

    declare class Layer extends Evented {
        options: LayerOptions;

        addTo(map: Map | LayerGroup): this;
        remove(): this;
        removeFrom(map: Map): this;
        getPane(name?: string): HTMLElement;
        getAttribution(): string;

        onAdd(map: Map): this;
        onRemove(map: Map): this;
        getEvents(): EventMap;
        beforeAdd(map: Map): this;

        bindPopup(content: PopupContent | ContentFactory, options?: PopupOptions): this;
        unbindPopup(): this;
        openPopup(latlng?: ILatLng | LatLngTuple): this;
        closePopup(): this;
        togglePopup(): this;
        isPopupOpen(): boolean;
        setPopupContent(content: PopupContent): this;
        getPopup(): Popup;

        bindTooltip(content: TooltipContent | ContentFactory, options?: TooltipOptions): this;
        unbindTooltip(): this;
        openTooltip(latlng?: ILatLng | LatLngTuple): this;
        closeTooltip(): this;
        toggleTooltip(): this;
        isTooltipOpen(): boolean;
        setTooltipContent(content: TooltipContent): this;
        getTooltip(): Tooltip;
    }

    declare class Control {
        static Layers: typeof Layers;
        static Zoom: Object;
        static Scale: Object;
        static Attribution: Object;

        getPosition(): string;
        setPosition(position: string): this;
        getContainer(): HTMLElement;
        addTo(map: Map): this;
        remove(): this;

        onAdd(map: Map): mixed;
        onRemove(map: Map): mixed;
    }

    // Misc

    declare export interface Event {
        type: string;
        target: Object;
    }

    declare export interface KeyboardEvent extends Event {
        originalEvent: window.KeyboardEvent;
    }

    declare export interface MouseEvent extends Event {
        latlng: LatLng;
        layerPoint: Point;
        containerPoint: Point;
        originalEvent: window.MouseEvent;
    }

    declare export interface LocationEvent extends Event {
        latlng: LatLng;
        bounds: LatLngBounds;
        accuracy: number;
        altitude: number;
        altitudeAccuracy: number;
        heading: number;
        speed: number;
        timestamp: number;
    }

    declare export interface ErrorEvent extends Event {
        message: string;
        code: number;
    }

    declare export interface LayerEvent extends Event {
        layer: Layer;
    }

    declare export interface LayersControlEvent extends Event {
        layer: Layer;
        name: string;
    }

    declare export interface TileEvent extends Event {
        tile: HTMLElement;
        coords: Point;
    }

    declare export interface TileErrorEvent extends Event {
        tile: HTMLElement;
        coords: Point;
    }

    declare export interface ResizeEvent extends Event {
        oldSize: Point;
        newSize: Point;
    }

    declare export interface GeoJSONEvent extends Event {
        layer: Layer;
        properties: Object;
        geometryType: string;
        id: string;
    }

    declare export interface PopupEvent extends Event {
        popup: Popup;
    }

    declare export interface TooltipEvent extends Event {
        tooltop: Tooltip;
    }

    declare export interface DragEndEvent extends Event {
        distance: number;
    }

    declare export interface ZoomAnimEvent extends Event {
        center: LatLng;
        zoom: number;
        noUpdate: boolean;
    }

    // Other

    declare type ContentFactory = (layer: Layer) => (string | HTMLElement);
    declare type PopupContent = string | HTMLElement | Popup;
    declare type TooltipContent = string | HTMLElement | Tooltip;
    declare type CornerType = LatLng | [number, number];

    declare type LocateOptions = {
        watch?: boolean;
        setView?: boolean;
        maxZoom?: number;
        timeout?: number;
        maximumAge?: number;
        enableHighAccuracy?: boolean;
    }

    declare type ZoomOptions = {
        animate?: boolean;
    }

    declare type PanOptions = {
        animate?: boolean;
        duration?: number;
        easeLinearity?: number;
        noMoveStart?: boolean;
    }

    declare type ZoomPanOptions = ZoomOptions & PanOptions;

    declare type FitBoundsOptions = ZoomPanOptions & {
        paddingTopLeft?: IPoint | PointTuple;
        paddingBottomRight?: IPoint | PointTuple;
        padding?: IPoint | PointTuple;
        maxZoom?: number;
    }

    declare type EventMap = {
        [type: string]: Function
    };

    declare class Leaflet {
        Map         : Class<Map>;
        Marker      : Class<Marker>;
        Popup       : Class<Popup>;
        Tooltip     : Class<Tooltip>;
        TileLayer   : Class<TileLayer>;
        LayerGroup  : Class<LayerGroup>;
        LatLng      : Class<LatLng>;
        LatLngBounds: Class<LatLngBounds>;
        Point       : Class<Point>;
        Bounds      : Class<Bounds>;
        Icon        : Class<Icon>;
        DivIcon     : Class<DivIcon>;
        Evented     : Class<Evented>;
        Layer       : Class<Layer>;
        Control     : Class<Control>;

        // factories
        // Map
        map(id: string, options?: MapOptions): Map;
        map(el: HTMLElement, options?: MapOptions): Map;
        // UI Layers
        marker(latlng: ILatLng | LatLngTuple, options?: MarkerOptions): Marker;
        popup(options?: PopupOptions, source?: Layer): Popup;
        tooltip(options?: TooltipOptions, source?: Layer): Tooltip;

        // Raster Layers
        tilelayer(urlTemplate: string, options?: TileLayerOptions): TileLayer;

        // Other Layers
        layerGroup(layers: Layer[]): LayerGroup;

        // Basic Types
        latLng(latitude: number, longitude: number, altitude?: number): LatLng;
        latLng(coords: ILatLng | LatLngTuple): LatLng;
        latLngBounds(corner1: ILatLng | LatLngTuple, corner2: ILatLng | LatLngTuple): LatLngBounds;
        latLngBounds(latlngs: [ILatLng | LatLngTuple, ILatLng | LatLngTuple]): LatLngBounds;
        point(x: number, y: number, round ?: boolean): Point;
        point(coords: IPoint | PointTuple): Point;
        bounds(corner1: IPoint | PointTuple, corner2: IPoint | PointTuple): Bounds;
        bounds(latlngs: [IPoint | PointTuple, IPoint | PointTuple]): Bounds;
        icon(options: IconOptions): Icon;
        divIcon(options: DivIconOptions): DivIcon;

        // Controls
        control: {
            layers(baselayers?: LayersMap, overlays?: LayersMap, options?: ControlLayersOptions): Layers;
        };
    }

    declare var leaflet: Leaflet;

    declare export default leaflet;
}

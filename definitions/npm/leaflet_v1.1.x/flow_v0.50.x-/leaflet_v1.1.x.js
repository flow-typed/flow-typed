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
        openPopup(popup: Popup): thsi;
        openPopup(content: string | HTMLElement, latlng: LatLng, options?: PopupOptions): this;
        closePopup(popup?: Popup): this;
        openTooltip(tooltip: Tooltip): this;
        openTooltip(content: string | HTMLElement, latlng: LatLng, options?: TooltipOptions): this;
        closeTooltip(tooltip?: Tooltip): this;
        setView(center: LatLng, zoom: number, options?: ZoomPanOptions): this;
        /**
         * @todo
         */
        setZoom(): this;
        zoomIn(): this;
        zoomOut(): this;
        setZoomAround(): this;
        setZoomAround(): this;
        fitBounds(): this;
        fitWorld(): this;
        panTo(): this;
        panBy(): this;
        flyTo(): this;
        flyToBounds(): this;
        setMaxBounds(): this;
        setMinZoom(): this;
        setMaxZoom(): this;
        panInsideBounds(): this;
        invalidateSize(): this;
        invalidateSize(): this;
        stop(): this;
        locate(): this;
        stopLocate(): this;

        addHandler(): this;
        remove(): this;
        createPane(): HTMLElement;
        getPane(): HTMLElement;
        getPanes(): Object;
        getContainer(): HTMLElement;
        whenReady(): this;

        getCenter(): LatLng;
        getZoom(): number;
        getBounds(): LatLngBounds;
        getMinZoom(): number;
        getMaxZoom(): number;
        getBoundsZoom(): number;
        getSize(): Point;
        getPixelBounds(): Bounds;
        getPixelOrigin(): Point;
        getPixelWorldBounds(): Bounds;

        getZoomScale(): number;
        getScaleZoom(): number;
        project(): Point;
        unproject(): LatLng;
        layerPointToLatLng(): LatLng;
        latLngToLayerPoint(): Point;
        wrapLatLng(): LatLng;
        wrapLatLngBounds(): LatLngBounds;
        distance(): number;
        containerPointToLayerPoint(): Point;
        layerPointToContainerPoint(): Point;
        containerPointToLatLng(): LatLng;
        latLngToContainerPoint(): Point;
        mouseEventToContainerPoint(): Point;
        mouseEventToLayerPoint(): Point;
        mouseEventToLatLng(): LatLng;

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
        center?: LatLng;
        zoom?: number;
        minZoom?: number;
        maxZoom?: number;
        layers?: Layer[];
        maxBounds?: LatLngBounds;
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

    declare class Marker extends Layer {
        constructor(latlng: LatLng, options?: MarkerOptions): void;
        toGeoJSON(): Object;
        getLatLng(): LatLng;
        setLatLng(latlng: LatLng): this;
        setZIndexOffset(offset: number): this;
        setIcon(icon: Icon): this;
        setOpacity(opacity: number): this;

        dragging: Handler;
    }

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

    declare class Popup extends Layer {
        options: PopupOptions;
        constructor(options?: PopupOptions, sourse?: Layer): void;
        getLatLng(): LatLng;
        setLatLng(latlng: LatLng): this;
        getContent(): string | HTMLElement;
        setContent(htmlContent: string | HTMLElement | ContentFactory): this;
        getElement(): string | HTMLElement;
        update(): null;
        isOpen(): boolean;
        bringToFront(): this;
        bringToBack(): this;
        openOn(map: Map): this;
    }

    declare type PopupOptions = {
        maxWidth?: number;
        minWidth?: number;
        maxHeight?: number;
        autoPan?: boolean;
        autoPanPaddingTopLeft?: Point;
        autoPanPaddingBottomRight?: Point;
        autoPanPadding?: Point;
        keepInView?: boolean;
        closeButton?: boolean;
        autoClose?: boolean;
        closeOnClick?: boolean;
        className?: string;
    }

    declare class Tooltip extends Layers {
        options: TooltipOptions;
        constructor(options?: TooltipOptions, source?: Layer): void;
    }

    declare type TooltipOptions = {
        pane?: string;
        offset?: Point;
        direction?: 'right' | 'left' | 'top' | 'bottom' | 'center' | 'auto';
        permanent?: boolean;
        sticky?: boolean;
        interactive?: boolean;
        opacity?: number;
    }

    // Raster Layers

    declare class TileLayer extends GridLayer {
        constructor(url: string, options?: TileLayerOptions): void;
        setUrl(url: string, noRedraw?: boolean): this;
        createTile(coords: Object, done?: Function): HTMLElement;
    }

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

    declare class LatLng {
        constructor(latitude: number, longitude: number, altitude?: number): void;
        equals(otherLatLng: LatLng, maxMargin?: number): boolean;
        toString(): string;
        distanceTo(otherLatLng: LatLng): number;
        wrap(): LatLng;
        toBounds(sizeInMeters: number): LatLngBounds;

        lat: number;
        lng: number;
        alt: number;
    }

    declare class LatLngBounds {
        constructor(corner1: CornerType, corner2: CornerType): void;
        constructor(corner: CornerType[]): void;
        extend(latlng: LatLng): this;
        extend(otherBounds: LatLngBounds): this;
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
        contains(otherBounds: LatLngBounds): boolean;
        contains(latlng: LatLng): boolean;
        intersect(otherBounds: LatLngBounds): boolean;
        overlaps(otherBounds: Bounds): boolean;
        toBBoxString(): string;
        equals(otherBounds: LatLngBounds, maxMargin?: number): boolean;
        isValid(): boolean;
    }

    /**
     * @todo
     * All Leaflet methods and options that accept Point objects
     * also accept them in a simple Array form (unless noted otherwise)
     */
    declare class Point {
        constructor(x: number, y: number, round?: boolean): void;
        clone(): Point;
        add(otherPoint: Point): Point;
        subtract(otherPoint: Point): Point;
        divideBy(num: number): Point;
        multiplyBy(num: number): Point;
        scaleBy(num: number): Point;
        unscaleBy(num: number): Point;
        round(): Point;
        floor(): Point;
        ceil(): Point;
        distanceTo(otherPoint: Point): number;
        equals(otherPoint: Point): boolean;
        contains(otherPoint: Point): boolean;
        toString(): string;
    }

    declare class DivIcon extends Icon {
        constructor(options: DivIconOptions): void;
    }

    declare type DivIconOptions = IconOptions & {
        html?: string;
        bgPos?: Point;
    }

    // Controls

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
        openPopup(latlng?: LatLng): this;
        closePopup(): this;
        togglePopup(): this;
        isPopupOpen(): boolean;
        setPopupContent(content: PopupContent): this;
        getPopup(): Popup;

        bindTooltip(content: TooltipContent | ContentFactory, options?: TooltipOptions): this;
        unbindTooltip(): this;
        openTooltip(latlng?: LatLng): this;
        closeTooltip(): this;
        toggleTooltip(): this;
        isTooltipOpen(): boolean;
        setTooltipContent(content: TooltipContent): this;
        getTooltip(): Tooltip;
    }

    declare type LayerOptions = {
        pane: string;
        attribution: string;
    };

    declare type ContentFactory = (layer: Layer) => (string | HTMLElement);
    declare type PopupContent = string | HTMLElement | Popup;
    declare type TooltipContent = string | HTMLElement | Tooltip;

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

    declare type ControlLayersOptions = ControlOptions & {
        collapsed?: boolean;
        autoZIndex?: boolean;
        hideSingleBase?: boolean;
        sortLayers?: boolean;
        sortFunction?: Function;
    }

    // Other

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
        paddingTopLeft?: Point;
        paddingBottomRight?: Point;
        padding?: Point;
        maxZoom?: number;
    }

    declare type EventMap = {
        [type: string]: Function
    };

    declare type ControlOptions = {
        position?: string
    }

    declare export default {
        Map         : Class<Map>,
        Marker      : Class<Marker>,
        Popup       : Class<Popup>,
        Tooltip     : Class<Tooltip>,
        TileLayer   : Class<TileLayer>,
        LayerGroup  : Class<LayerGroup>,
        LatLng      : Class<LatLng>,
        LatLngBounds: Class<LatLngBounds>,
        Point       : Class<Point>,
        DivIcon     : Class<DivIcon>,
        Evented     : Class<Evented>,
        Layer       : Class<Layer>,
        Control     : Class<Control>
    };
}

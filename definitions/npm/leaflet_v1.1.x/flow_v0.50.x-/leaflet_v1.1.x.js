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

    // Raster Layers

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

    // Other

    declare type CornerType = LatLng | [number, number];

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
    };

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

    declare type DivIconOptions = IconOptions & {
        html?: string;
        bgPos?: Point;
    }

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

    declare export default {
        Map: typeof Map,
        Marker: typeof Marker,
        TileLayer: typeof TileLayer,
        LayerGroup: typeof LayerGroup,
        LatLng: typeof LatLng,
        LatLngBounds: typeof LatLngBounds,
        Point: typeof Point,
        DivIcon: typeof DivIcon,
        Control: typeof Control
    };
}

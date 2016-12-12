

declare module 'arcgis-js-api' {
					
}

declare module 'esri' {
		declare export interface AGSMouseEvent {
		graphic?: Graphic,
		mapPoint: Point,
		screenPoint: ScreenPoint
	}

	declare export interface AddOptions {
		addedGraphics?: Graphic[],
		featureLayer?: FeatureLayer
	}

	declare export interface AggregatePointsOptions {
		analysisGpServer?: string,
		groupByField?: string,
		keepBoundariesWithNoPoints?: boolean,
		map?: Map,
		outputLayerName?: string,
		pointLayer: FeatureLayer,
		polygonLayer: FeatureLayer,
		polygonLayers: FeatureLayer[],
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean,
		summaryFields?: string[]
	}

	declare export interface ArcGISDynamicMapServiceLayerOptions {
		className?: string,
		gdbVersion?: string,
		id?: string,
		imageParameters?: ImageParameters,
		infoTemplates?: any,
		opacity?: number,
		refreshInterval?: number,
		resourceInfo?: any,
		showAttribution?: boolean,
		useMapImage?: boolean,
		useMapTime?: boolean,
		visible?: boolean
	}

	declare export interface ArcGISImageServiceLayerOptions {
		id?: string,
		imageServiceParameters?: ImageServiceParameters,
		infoTemplate?: InfoTemplate,
		opacity?: number,
		resourceInfo?: any,
		useMapImage?: boolean,
		useMapTime?: boolean,
		visible?: boolean
	}

	declare export interface ArcGISImageServiceVectorLayerOptions {
		pixelFilter?: any,
		rendererStyle?: string,
		symbolTileSize?: number
	}

	declare export interface ArcGISTiledMapServiceLayerOptions {
		className?: string,
		displayLevels?: number[],
		exclusionAreas?: any[],
		id?: string,
		infoTemplates?: any,
		opacity?: number,
		refreshInterval?: number,
		resampling?: boolean,
		resamplingTolerance?: number,
		resourceInfo?: any,
		showAttribution?: boolean,
		tileServers?: string[],
		visible?: boolean
	}

	declare export interface AttributeInspectorOptions {
		layerInfos: any[]
	}

	declare export interface AttributionOptions {
		itemDelimiter?: string,
		map: Map
	}

	declare export interface BasemapGalleryOptions {
		basemapIds?: string[],
		basemaps?: Basemap[],
		basemapsGroup?: any,
		bingMapsKey?: string,
		map: Map,
		portalUrl?: string,
		referenceIds?: string[],
		showArcGISBasemaps?: boolean
	}

	declare export interface BasemapLayerOptions {
		bandIds?: number[],
		copyright?: string,
		displayLevels?: number[],
		fullExtent?: Extent,
		initialExtent?: Extent,
		isReference?: boolean,
		opacity?: number,
		subDomains?: string[],
		templateUrl?: string,
		tileInfo?: TileInfo,
		tileServer?: string[],
		type?: string,
		url?: string,
		visibleLayers?: number[]
	}

	declare export interface BasemapOptions {
		id?: string,
		layers: BasemapLayer[],
		thumbnailUrl?: string,
		title?: string
	}

	declare export interface BasemapToggleOptions {
		basemap?: string,
		basemaps?: any,
		map: Map,
		theme?: string,
		visible?: boolean
	}

	declare export interface BlendRendererOptions {
		blendMode?: string,
		fields: any[],
		normalizationField?: string,
		opacityStops: any[],
		symbol: Symbol
	}

	declare export interface BookmarksOptions {
		bookmarks?: BookmarkItem[],
		editable?: boolean,
		map: Map
	}

	declare export interface CSVLayerOptions {
		columnDelimiter?: string,
		copyright?: string,
		fields?: any[],
		latitudeFieldName?: string,
		longitudeFieldName?: string,
		outFields?: string[]
	}

	declare export interface ChooseBestFacilitiesOptions {
		analysisGpServer?: string,
		candidateCount?: number,
		candidateFacilitiesCapacity?: string,
		candidateFacilitiesCapacityField?: string,
		candidateFacilitiesLayer?: FeatureLayer,
		demand?: number,
		demandField?: string,
		demandLocationLayer?: FeatureLayer,
		demandLocationLayers: FeatureLayer[],
		enableTravelModes?: boolean,
		featureLayers: FeatureLayer[],
		folderId?: string,
		folderName?: string,
		map?: Map,
		maxTravelRange?: number,
		maxTravelRangeField?: string,
		outputLayerName?: string,
		percentDemandCoverage?: number,
		portalUrl?: string,
		requiredFacilitiesCapacity?: number,
		requiredFacilitiesCapacityField?: string,
		requiredFacilitiesLayer?: FeatureLayer,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showReadyToUseLayers?: boolean,
		showSelectAnalysisLayer?: boolean,
		showSelectFolder?: boolean,
		title?: string
	}

	declare export interface CircleOptions1 {
		geodesic?: boolean,
		numberOfPoints?: number,
		radius?: number,
		radiusUnit?: string
	}

	declare export interface CircleOptions2 {
		center: Point | number[],
		geodesic?: boolean,
		numberOfPoints?: number,
		radius?: number,
		radiusUnit?: string
	}

	declare export interface ClassedColorSliderOptions {
		breakInfos: any,
		classificationMethod?: string,
		handles: number[],
		histogram?: any,
		histogramWidth?: number,
		normalizationType?: string,
		primaryHandle?: number,
		rampWidth?: number,
		showHandles?: boolean,
		showHistogram?: boolean,
		showLabels?: boolean,
		showTicks?: boolean,
		statistics?: any
	}

	declare export interface ClassedSizeSliderOptions {
		breakInfos: any,
		classificationMethod?: string,
		handles: number[],
		histogram?: any,
		histogramWidth?: number,
		normalizationType?: string,
		primaryHandle?: number,
		rampWidth?: number,
		showHandles?: boolean,
		showHistogram?: boolean,
		showLabels?: boolean,
		showTicks?: boolean,
		statistics?: any
	}

	declare export interface ColorInfoSliderOptions {
		colorInfo: any,
		handles: number[],
		histogram?: any,
		histogramWidth?: number,
		maxValue?: number,
		minValue?: number,
		primaryHandle?: number,
		rampWidth?: number,
		showHandles?: boolean,
		showHistogram?: boolean,
		showLabels?: boolean,
		showRatioLabels?: boolean | string,
		showTicks?: boolean,
		showTransparentBackground?: boolean,
		statistics?: any,
		zoomOptions?: any
	}

	declare export interface ColorPickerOptions {
		color: Color,
		colorsPerRow: number,
		palette: Color[],
		recentColors: Color[],
		required: boolean,
		showRecentColors: boolean,
		showTransparencySlider: boolean
	}

	declare export interface ConnectOriginsToDestinationsOptions {
		analysisGpServer?: string,
		distanceDefaultUnits?: string,
		featureLayers: FeatureLayer[],
		map?: Map,
		originsLayers: FeatureLayer[],
		outputLayerName?: string,
		portalUrl?: string,
		showSelectAnalysisLayer?: boolean
	}

	declare export interface CoordinatesLocationProviderOptions {
		xField: string,
		yField: string
	}

	declare export interface CreateBuffersOptions {
		analysisGpServer?: string,
		bufferDistance?: number[],
		inputLayer: FeatureLayer,
		map?: Map,
		outputLayerName?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: string,
		showHelp?: boolean,
		showSelectFolder?: boolean
	}

	declare export interface CreateDriveTimeAreasOptions {
		analysisGpServer?: string,
		breakUnits?: string,
		breakValues?: number[],
		inputLayer: FeatureLayer,
		inputType?: string,
		map?: Map,
		outputLayerName?: string,
		overlapPolicy?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean
	}

	declare export interface CreateViewshedOptions {
		analysisGpServer?: string,
		inputLayer: FeatureLayer,
		map?: Map,
		portalUrl?: string
	}

	declare export interface CreateWatershedsOptions {
		analysisGpServer?: string,
		inputLayers: FeatureLayer[],
		map?: Map,
		portalUrl?: string,
		showSelectAnalysisLayer?: boolean
	}

	declare export interface CutOptions {
		addedGraphics?: Graphic[],
		featureLayer?: FeatureLayer,
		postUpdatedGraphics?: Graphic[],
		preUpdatedGraphics?: Graphic[]
	}

	declare export interface DataAdapterFeatureLayerOptions {
		dataAdapterQuery: any,
		locationProvider: LocationProviderBase
	}

	declare export interface DataBrowserOptions {
		allowHierarchies?: boolean,
		countryBox?: boolean,
		countryID?: string,
		hierarchyID?: string,
		pageBackButton?: string,
		selection?: string[],
		shoppingCart?: boolean,
		title?: string
	}

	declare export interface DeleteOptions {
		deletedGraphics?: Graphic[],
		featureLayer?: FeatureLayer
	}

	declare export interface DirectionsOptions {
		alphabet?: string | string[] | boolean,
		autoSolve?: boolean,
		canModifyStops?: boolean,
		centerAtSegmentStart?: boolean,
		directions?: any,
		directionsLengthUnits?: string,
		dragging?: boolean,
		focusOnNewStop?: boolean,
		fromSymbol?: PictureMarkerSymbol,
		fromSymbolDrag?: PictureMarkerSymbol,
		geometryTaskUrl?: string,
		map: Map,
		mapClickActive?: boolean,
		maxStops?: number,
		minStops?: number,
		optimalRoute?: boolean,
		portalUrl?: string,
		printPage?: string,
		printTaskUrl?: string,
		printTemplate?: string,
		returnToStart?: boolean,
		routeParams?: RouteParameters,
		routeSymbol?: SimpleLineSymbol,
		routeTaskUrl?: string,
		searchOptions?: any,
		segmentInfoTemplate?: InfoTemplate,
		segmentSymbol?: SimpleLineSymbol,
		showActivateButton?: boolean,
		showClearButton?: boolean,
		showMilesKilometersOption?: boolean,
		showOptimalRouteOption?: boolean,
		showPrintPage?: boolean,
		showReturnToStartOption?: boolean,
		showReverseStopsButton?: boolean,
		showSaveButton?: boolean,
		showSegmentHighlight?: boolean,
		showSegmentPopup?: boolean,
		showTrafficOption?: boolean,
		showTravelModesOption?: boolean,
		solving?: boolean,
		stopGraphics?: Graphic[],
		stops?: Point[] | number[][] | string[] | any[],
		stopsInfoTemplate?: InfoTemplate,
		stopSymbol?: PictureMarkerSymbol,
		stopSymbolDrag?: PictureMarkerSymbol,
		textGraphics?: Graphic[],
		textSymbolColor?: Color,
		textSymbolFont?: Font,
		textSymbolOffset?: any,
		theme?: string,
		toSymbol?: PictureMarkerSymbol,
		toSymbolDrag?: PictureMarkerSymbol,
		traffic?: boolean,
		trafficLayer?: ArcGISDynamicMapServiceLayer
	}

	declare export interface DissolveBoundariesOptions {
		analysisGpServer?: string,
		dissolveFields?: string[],
		inputLayer: FeatureLayer,
		map?: Map,
		outputLayerName?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean,
		summaryFields?: string[]
	}

	declare export interface DotDensityRendererOptions {
		backgroundColor?: Color,
		dotShape?: string,
		dotSize?: number,
		dotValue: number,
		fields: any[],
		outline?: LineSymbol
	}

	declare export interface DrawOptions {
		drawTime?: number,
		showTooltips?: boolean,
		tolerance?: number,
		tooltipOffset?: number
	}

	declare export interface DriveBufferOptions {
		radius: number[],
		units: string
	}

	declare export interface EditOptions {
		allowAddVertices?: boolean,
		allowDeleteVertices?: boolean,
		ghostLineSymbol?: LineSymbol,
		ghostVertexSymbol?: MarkerSymbol,
		textSymbolEditorHolder?: Node | string,
		uniformScaling?: boolean,
		vertexSymbol?: MarkerSymbol
	}

	declare export interface EditorOptions {
		settings?: any
	}

	declare export interface ElevationProfileOptions {
		chartOptions?: any,
		map: Map,
		profileTaskUrl: string,
		scalebarUnits?: string
	}

	declare export interface EnrichLayerOptions {
		analysisGpServer?: string,
		distance?: number,
		enableTravelModes?: boolean,
		inputLayer: FeatureLayer,
		map?: Map,
		outputLayerName?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean,
		showTrafficWidget?: boolean
	}

	declare export interface ExtractDataOptions {
		analysisGpServer?: string,
		clip?: boolean,
		dataFormat?: string,
		featureLayers: FeatureLayer[],
		inputLayers?: FeatureLayer[],
		map?: Map,
		outputLayerName?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean
	}

	declare export interface FeatureLayerOptions {
		autoGeneralize?: boolean,
		className?: string,
		definitionExpression?: string,
		displayOnPan?: boolean,
		editSummaryCallback?: Function,
		gdbVersion?: string,
		id?: string,
		infoTemplate?: InfoTemplate,
		maxAllowableOffset?: number,
		mode?: number,
		opacity?: number,
		orderByFields?: string[],
		outFields?: string[],
		refreshInterval?: number,
		resourceInfo?: any,
		showAttribution?: boolean,
		showLabels?: boolean,
		source?: LayerSource,
		tileHeight?: number,
		tileWidth?: number,
		trackIdField?: string,
		useMapTime?: boolean,
		visible?: boolean
	}

	declare export interface FeatureLayerStatisticsOptions {
		layer: FeatureLayer
	}

	declare export interface FeatureTableOptions {
		batchCount?: number,
		dateOptions?: any,
		editable?: boolean,
		featureLayer: FeatureLayer,
		fieldInfos?: any[],
		gridMenu?: any,
		gridOptions?: any,
		hiddenFields?: string[],
		map?: Map,
		menuFunctions?: any[],
		outFields?: string[],
		showAttachments?: boolean,
		showColumnHeaderTooltips?: boolean,
		showCyclicalRelationships?: boolean,
		showDataTypes?: boolean,
		showFeatureCount?: boolean,
		showGridHeader?: boolean,
		showGridMenu?: boolean,
		showRelatedRecords?: boolean,
		showStatistics?: boolean,
		syncSelection?: boolean,
		zoomToSelection?: boolean
	}

	declare export interface FindHotSpotsOptions {
		aggregationPolygonLayers: FeatureLayer[],
		analysisField?: string,
		analysisGpServer?: string,
		analysisLayer: FeatureLayer,
		boundingPolygonLayers: FeatureLayer[],
		isProcessInfo?: boolean,
		map?: Map,
		outputLayerName?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean
	}

	declare export interface FindNearestOptions {
		analysisGpServer?: string,
		analysisLayer: FeatureLayer,
		enableTravelModes?: boolean,
		map?: Map,
		maxCount?: number,
		nearLayer: FeatureLayer,
		nearLayers: FeatureLayer[],
		outputLayerName?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		searchCutoff?: number,
		searchCutoffUnits?: string,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean
	}

	declare export interface FindTaskOptions {
		gdbVersion?: string
	}

	declare export interface GalleryOptions {
		items: any[],
		showTitle?: boolean,
		thumbnailStyle?: string
	}

	declare export interface GaugeOptions {
		caption?: string,
		color?: string,
		dataField?: string,
		dataFormat?: string,
		dataLabelField?: string,
		fromWebmap?: boolean,
		layer?: GraphicsLayer,
		maxDataValue?: number,
		noDataLabel?: string,
		numberFormat?: any,
		title?: string,
		unitLabel?: string
	}

	declare export interface GenerateRendererTaskOptions {
		checkValueRange?: boolean,
		gdbVersion?: string
	}

	declare export interface GeoRSSLayerOptions {
		infoTemplate?: InfoTemplate,
		outSpatialReference?: SpatialReference,
		pointSymbol?: Symbol,
		polygonSymbol?: Symbol,
		polylineSymbol?: Symbol
	}

	declare export interface GeocoderOptions {
		arcgisGeocoder?: boolean | any,
		autoComplete?: boolean,
		autoNavigate?: boolean,
		geocoderMenu?: boolean,
		geocoders?: any[],
		graphicsLayer?: GraphicsLayer,
		highlightLocation?: boolean,
		map: Map,
		maxLocations?: number,
		minCharacters?: number,
		searchDelay?: number,
		showResults?: boolean,
		symbol?: Symbol,
		theme?: string,
		value?: string,
		zoomScale?: number
	}

	declare export interface GeometryLocationProviderOptions {
		geometryField: string,
		geometryType: string
	}

	declare export interface GraphicsLayerOptions {
		className?: string,
		dataAttributes?: string | string[],
		displayOnPan?: boolean,
		id?: string,
		infoTemplate?: InfoTemplate,
		opacity?: number,
		refreshInterval?: number,
		styling?: boolean,
		visible?: boolean
	}

	declare export interface Handle {
		remove(): void
	}

	declare export interface HeatmapRendererOptions {
		blurRadius?: number,
		colors: string[],
		field?: string,
		maxPixelIntensity?: number,
		minPixelIntensity?: number
	}

	declare export interface HeatmapSliderOptions {
		colorStops: any[],
		handles: number[],
		maxValue?: number,
		minValue?: number,
		rampWidth?: number,
		showHandles?: boolean,
		showLabels?: boolean,
		showTicks?: boolean
	}

	declare export interface HistogramTimeSliderOptions {
		color?: string,
		dateFormat?: string,
		layers?: Layer[],
		mode?: string,
		timeInterval?: string
	}

	declare export interface HomeButtonOptions {
		extent?: Extent,
		map: Map,
		theme?: string,
		visible?: boolean
	}

	declare export interface HorizontalSliderOptions {
		labels: string[]
	}

	declare export interface IdentifyTaskOptions {
		gdbVersion?: string
	}

	declare export interface ImageServiceMeasureOptions {
		angularUnit?: string,
		areaUnit?: string,
		displayMeasureResultInPopup?: boolean,
		fillSymbol?: SimpleFillSymbol,
		layer: ArcGISImageServiceLayer,
		layout?: string,
		linearUnit?: string,
		lineSymbol?: SimpleLineSymbol,
		map: Map,
		markerSymbol?: SimpleMarkerSymbol
	}

	declare export interface ImageServiceMeasureToolOptions {
		angularUnit?: string,
		areaUnit?: string,
		fillSymbol?: SimpleFillSymbol,
		layer: ArcGISImageServiceLayer,
		linearUnit?: string,
		lineSymbol?: SimpleLineSymbol,
		map: Map,
		markerSymbol?: SimpleMarkerSymbol
	}

	declare export interface ImageSpatialReferenceOptions {
		ics?: any,
		icsid?: number,
		url: string
	}

	declare export interface KMLLayerOptions {
		className?: string,
		outSR?: SpatialReference,
		refreshInterval?: number
	}

	declare export interface LabelLayerOptions {
		id?: string,
		mode?: string
	}

	declare export interface LayerListOptions {
		layers: any[],
		map: Map,
		removeUnderscores?: boolean,
		showLegend?: boolean,
		showOpacitySlider?: boolean,
		showSubLayers?: boolean,
		theme?: string,
		visible?: boolean
	}

	declare export interface LayerOptions {
		className?: string,
		refreshInterval?: number,
		showAttribution?: boolean
	}

	declare export interface LayerSwipeOptions {
		clip?: number,
		enabled?: boolean,
		layers: Layer[],
		left?: number,
		map: Map,
		theme?: string,
		top?: number,
		type?: string
	}

	declare export interface LegendOptions {
		arrangement?: number,
		autoUpdate?: boolean,
		layerInfos?: any[],
		map: Map,
		respectCurrentMapScale?: boolean
	}

	declare export interface LocateButtonOptions {
		centerAt?: boolean,
		geolocationOptions?: any,
		graphicsLayer?: GraphicsLayer,
		highlightLocation?: boolean,
		infoTemplate?: InfoTemplate,
		map: Map,
		scale?: number,
		setScale?: boolean,
		symbol?: Symbol,
		theme?: string,
		useTracking?: boolean,
		visible?: boolean
	}

	declare export interface LocatorLocationProviderOptions {
		addressFields: any,
		locator: Locator
	}

	declare export interface MapImageOptions {
		extent?: Extent,
		href?: string
	}

	declare export interface MapOptions {
		attributionWidth?: number,
		autoResize?: boolean,
		basemap?: string,
		center?: number[] | Point,
		displayGraphicsOnPan?: boolean,
		extent?: Extent,
		fadeOnZoom?: boolean,
		fitExtent?: boolean,
		force3DTransforms?: boolean,
		infoWindow?: InfoWindowBase,
		lods?: LOD[],
		logo?: boolean,
		maxScale?: number,
		maxZoom?: number,
		minScale?: number,
		minZoom?: number,
		nav?: boolean,
		navigationMode?: string,
		optimizePanAnimation?: boolean,
		resizeDelay?: number,
		scale?: number,
		showAttribution?: boolean,
		showInfoWindowOnClick?: boolean,
		showLabels?: boolean,
		slider?: boolean,
		sliderLabels?: string[],
		sliderOrientation?: string,
		sliderPosition?: string,
		sliderStyle?: string,
		smartNavigation?: boolean,
		wrapAround180?: boolean,
		zoom?: number
	}

	declare export interface MeasurementOptions {
		advancedLocationUnits?: boolean,
		defaultAreaUnit?: string,
		defaultLengthUnit?: string,
		geometry?: Point | Polyline | Polygon,
		lineSymbol?: SimpleLineSymbol,
		map: Map,
		pointSymbol?: MarkerSymbol
	}

	declare export interface MergeLayersOptions {
		analysisGpServer?: string,
		inputLayer: FeatureLayer,
		map?: Map,
		mergeLayers: FeatureLayer[],
		mergingAttributes?: string[],
		outputLayerName?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean
	}

	declare export interface NAOutputLine {
		NONE: any,
		STRAIGHT: any,
		TRUE_SHAPE: any,
		TRUE_SHAPE_WITH_MEASURE: any
	}

	declare export interface NAOutputPolygon {
		DETAILED: any,
		NONE: any,
		SIMPLIFIED: any
	}

	declare export interface NATravelDirection {
		FROM_FACILITY: any,
		TO_FACILITY: any
	}

	declare export interface NAUTurn {
		ALLOW_BACKTRACK: any,
		AT_DEAD_ENDS_AND_INTERSECTIONS: any,
		AT_DEAD_ENDS_ONLY: any,
		NO_BACKTRACK: any
	}

	declare export interface OAuthInfoOptions {
		appId: string,
		authNamespace?: string,
		expiration?: number,
		locale?: string,
		minTimeUntilExpiration?: number,
		popup?: boolean,
		popupCallbackUrl?: string,
		popupWindowFeatures?: string,
		portalUrl?: string,
		showSocialLogins?: boolean
	}

	declare export interface ObliqueViewerOptions {
		azimuthAngle?: number,
		azimuthField?: string,
		azimuthTolerance?: number,
		elevationField?: string,
		elevationThreshold?: number,
		imageServiceLayer: ArcGISImageServiceLayer,
		map: Map,
		noQueryOnExtentChange?: boolean,
		rasterInfoFields?: any[],
		rasterListDiv?: string | Node,
		rasterListRefresh?: boolean,
		rotationDiv?: string | Node,
		showThumbnail?: boolean,
		sorter?: Function
	}

	declare export interface OpacitySliderOptions {
		handles: number[],
		histogram?: any,
		histogramWidth?: number,
		maxValue?: number,
		minValue?: number,
		opacityInfo: any,
		primaryHandle?: number,
		rampWidth?: number,
		showHandles?: boolean,
		showHistogram?: boolean,
		showLabels?: boolean,
		showTicks?: boolean,
		showTransparentBackground?: boolean,
		statistics?: any,
		zoomOptions?: any
	}

	declare export interface OpenStreetMapLayerOptions {
		displayLevels?: number[],
		id?: string,
		opacity?: number,
		resampling?: boolean,
		resamplingTolerance?: number,
		tileServers?: string[],
		visible?: boolean
	}

	declare export interface OperationBaseOptions {
		label?: string,
		type?: string
	}

	declare export interface OverlayLayersOptions {
		analysisGpServer?: string,
		inputLayer: FeatureLayer,
		map?: Map,
		outputLayerName?: string,
		overlayLayer: FeatureLayer[],
		overlayType?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean,
		snapToInput?: boolean,
		tolerance?: number
	}

	declare export interface OverviewMapOptions {
		attachTo?: string,
		baseLayer?: Layer,
		color?: string,
		expandFactor?: number,
		height?: number,
		id?: string,
		map: Map,
		maximizeButton?: boolean,
		opacity?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface PixelBlockOptions {
		height: number,
		mask?: any[],
		pixels: number[][],
		pixelType?: string,
		statistics?: any[],
		width: number
	}

	declare export interface PopupMobileOptions {
		fillSymbol?: FillSymbol,
		highlight?: boolean,
		lineSymbol?: LineSymbol,
		marginLeft?: number,
		marginTop?: number,
		markerSymbol?: MarkerSymbol,
		offsetX?: number,
		offsetY?: number,
		zoomFactor?: number
	}

	declare export interface PopupOptions {
		anchor?: string,
		fillSymbol?: FillSymbol,
		hideDelay?: boolean,
		highlight?: boolean,
		keepHighlightOnHide?: boolean,
		lineSymbol?: LineSymbol,
		marginLeft?: number,
		marginTop?: number,
		markerSymbol?: MarkerSymbol,
		offsetX?: number,
		offsetY?: number,
		pagingControls?: boolean,
		pagingInfo?: boolean,
		popupWindow?: boolean,
		titleInBody?: boolean,
		visibleWhenEmpty?: boolean,
		zoomFactor?: number
	}

	declare export interface PopupTemplateOptions {
		utcOffset?: number
	}

	declare export interface PrintOptions {
		async?: boolean,
		map?: Map,
		templates?: PrintTemplate[],
		url?: string
	}

	declare export interface PrintTaskOptions {
		async?: boolean
	}

	declare export interface ProcessorOptions {
		autostart?: boolean,
		drawFeatures?: boolean,
		fetchWithWorker?: boolean,
		layers?: FeatureLayer[],
		map?: Map,
		passFeatures?: boolean,
		requireWorkerSupport?: boolean
	}

	declare export interface QueryTaskLocationProviderOptions {
		queryParameters: any,
		queryTask: QueryTask,
		unicode: boolean,
		whereFields: any
	}

	declare export interface QueryTaskOptions {
		gdbVersion?: string
	}

	declare export interface RasterLayerOptions {
		drawMode?: boolean,
		drawType?: string,
		imageServiceParameters?: ImageServiceParameters,
		pixelFilter?: any
	}

	declare export interface RendererSliderOptions {
		handles?: number[],
		maximum: number,
		maxLabel?: string,
		minimum: number,
		minLabel?: string,
		precision?: number,
		primaryHandle?: number,
		showHandles?: boolean,
		showLabels?: boolean | string[],
		showTicks?: boolean,
		values: number[]
	}

	declare export interface RingBufferOptions {
		radii: number[],
		units: string
	}

	declare export interface ScaleDependentRendererOptions {
		rendererInfos?: any[]
	}

	declare export interface ScalebarOptions {
		attachTo?: string,
		map: Map,
		scalebarStyle?: string,
		scalebarUnit?: string
	}

	declare export interface SearchOptions {
		activeSourceIndex?: number | string,
		addLayersFromMap?: boolean,
		allPlaceholder?: string,
		autoNavigate?: boolean,
		autoSelect?: boolean,
		enableButtonMode?: boolean,
		enableHighlight?: boolean,
		enableInfoWindow?: boolean,
		enableLabel?: boolean,
		enableSearchingAll?: boolean,
		enableSourcesMenu?: boolean,
		enableSuggestions?: boolean,
		enableSuggestionsMenu?: boolean,
		expanded?: boolean,
		graphicsLayer?: Layer,
		highlightSymbol?: Symbol,
		infoTemplate?: InfoTemplate,
		labelSymbol?: TextSymbol,
		locationToAddressDistance?: number,
		map?: Map,
		maxResults?: number,
		maxSuggestions?: number,
		minCharacters?: number,
		showInfoWindowOnSelect?: boolean,
		sources?: any[],
		suggestionDelay?: number,
		theme?: string,
		value?: string,
		visible?: boolean,
		zoomScale?: number
	}

	declare export interface SizeInfoSliderOptions {
		handles: number[],
		histogram?: any,
		histogramWidth?: number,
		maxValue?: number,
		minValue?: number,
		primaryHandle?: number,
		rampWidth?: number,
		showHandles?: boolean,
		showHistogram?: boolean,
		showLabels?: boolean,
		showTicks?: boolean,
		sizeInfo: any,
		statistics?: any,
		symbol: Symbol,
		zoomOptions?: any
	}

	declare export interface SnappingManagerOptions {
		alwaysSnap?: boolean,
		layerInfos?: any[],
		map: Map,
		snapKey?: any,
		snapPointSymbol?: SimpleMarkerSymbol,
		tolerance?: number
	}

	declare export interface SpatialIndexOptions {
		autostart?: boolean,
		drawFeatures?: boolean,
		fetchWithWorkers?: boolean,
		indexOptions?: any,
		indexType?: string,
		layers?: FeatureLayer[],
		map?: Map,
		passFeatures?: boolean,
		requireWorkerSupport?: boolean
	}

	declare export interface StandardGeographyQueryLocationProviderOptions {
		geographyQueryTemplate: string,
		queryParameters?: any,
		standardGeographyQueryTask: StandardGeographyQueryTask
	}

	declare export interface StreamLayerOptions1 {
		className?: string,
		definitionExpression?: string,
		geometryDefinition?: Extent,
		maximumTrackPoints?: number,
		outFields?: string[],
		purgeOptions?: any
	}

	declare export interface StreamLayerOptions2 {
		className?: string,
		geometryDefinition?: Extent,
		maximumTrackPoints?: number,
		outFields?: string[],
		purgeOptions?: any,
		socketUrl?: string
	}

	declare export interface StretchFilterOptions {
		dra?: boolean,
		gamma?: number[],
		max?: number,
		maxPercent?: number,
		min?: number,
		minPercent?: number,
		numberOfStandardDeviations?: number,
		outputPixelType?: string,
		statistics?: any[][],
		stretchType?: number,
		useGamma?: boolean
	}

	declare export interface SummarizeNearbyOptions {
		analysisGpServer?: string,
		distance?: number[],
		enableTravelModes?: boolean,
		groupByField?: string,
		map?: Map,
		nearType?: string,
		outputLayerName?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		shapeUnits?: string,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectAnalysisLayer?: boolean,
		showSelectFolder?: boolean,
		summaryFields?: string[],
		summaryLayer?: FeatureLayer,
		summaryLayers: FeatureLayer[],
		sumNearbyLayers: FeatureLayer[],
		sumShape?: boolean,
		units?: string
	}

	declare export interface SummarizeWithinOptions {
		analysisGpServer?: string,
		groupByField?: string,
		map?: Map,
		outputLayerName?: string,
		portalUrl?: string,
		returnFeatureCollection?: boolean,
		showChooseExtent?: boolean,
		showCredits?: boolean,
		showHelp?: boolean,
		showSelectFolder?: boolean,
		summaryFields?: string,
		summaryLayer?: FeatureLayer,
		summaryLayers: FeatureLayer[],
		sumWithinLayer: FeatureLayer
	}

	declare export interface SymbolStylerOptions {
		portal?: string | any,
		portalSelf?: any,
		portalUrl?: string
	}

	declare export interface TemplatePickerOptions {
		columns?: number,
		emptyMessage?: string,
		featureLayers?: FeatureLayer[],
		grouping?: boolean,
		items?: any[],
		maxLabelLength?: number,
		rows?: number,
		showTooltip?: boolean,
		style?: string,
		useLegend?: boolean
	}

	declare export interface TimeClassBreaksAgerOptions {
		alpha: number,
		color: Color,
		maxAge: number,
		minAge: number,
		size: number
	}

	declare export interface TimeSliderOptions {
		excludeDataAtLeadingThumb?: boolean,
		excludeDataAtTrailingThumb?: boolean
	}

	declare export interface UndoManagerOptions {
		maxOperations?: number
	}

	declare export interface UnionOptions {
		deletedGraphics?: Graphic[],
		featureLayer?: FeatureLayer,
		postUpdatedGraphics?: Graphic[],
		preUpdatedGraphics?: Graphic[]
	}

	declare export interface UpdateOptions {
		featureLayer?: FeatureLayer,
		postUpdatedGraphics?: Graphic[],
		preUpdatedGraphics?: Graphic[]
	}

	declare export interface VEGeocoderOptions {
		bingMapsKey?: string,
		culture?: string
	}

	declare export interface VETiledLayerOptions {
		bingMapsKey?: string,
		className?: string,
		culture?: string,
		mapStyle?: string,
		refreshInterval?: number
	}

	declare export interface VectorFieldRendererOptions {
		flowRepresentation?: string,
		singleArrowSymbol?: Symbol,
		style?: string
	}

	declare export interface VectorTileLayerOptions {
		displayLevels?: number[],
		maxScale?: number,
		minScale?: number,
		opacity?: number,
		visible?: boolean
	}

	declare export interface VisibleScaleRangeSliderOptions {
		layer?: Layer,
		map: Map,
		region?: string
	}

	declare export interface WCSConnectionOptions {
		coverageId?: string,
		version?: string
	}

	declare export interface WCSLayerOptions {
		coverageId?: string,
		drawMode?: boolean,
		drawType?: string,
		pixelFilter?: Function,
		version?: string,
		wcsConnection?: WCSConnection
	}

	declare export interface WFSLayerOptions {
		customParameters?: any,
		infoTemplate?: InfoTemplate,
		maxFeatures?: number,
		mode?: string,
		name?: string,
		url: string,
		version?: string,
		wkid?: string
	}

	declare export interface WMSLayerInfoOptions {
		allExtents?: Extent[],
		description?: string,
		extent?: Extent,
		legendURL?: string,
		name: string,
		queryable?: boolean,
		showPopup?: boolean,
		spatialReferences?: SpatialReference[],
		subLayers?: WMSLayerInfo[],
		title?: string
	}

	declare export interface WMSLayerOptions {
		customLayerParameters?: any,
		customParameters?: any,
		format?: string,
		resourceInfo?: any,
		transparent?: boolean,
		version?: string,
		visibleLayers?: string[]
	}

	declare export interface WMTSLayerInfoOptions {
		description?: string,
		format?: string,
		fullExtent?: Extent,
		identifier?: string,
		initialExtent?: Extent,
		style?: string,
		tileInfo?: TileInfo,
		tileMatrixSet?: string,
		title?: string
	}

	declare export interface WMTSLayerOptions {
		customLayerParameters?: any,
		customParameters?: any,
		layerInfo?: WMTSLayerInfo,
		resampling?: boolean,
		resamplingTolerance?: number,
		resourceInfo?: any,
		serviceMode?: string
	}

	declare export interface WebTiledLayerOptions {
		copyright?: string,
		fullExtent?: Extent,
		initialExtent?: Extent,
		resampling?: boolean,
		resamplingTolerance?: number,
		subDomains?: string[],
		tileInfo?: TileInfo,
		tileServers?: string[]
	}

			
}

declare module 'esri/Color' {
				declare class Color  {
		named: any;
		a: number;
		b: number;
		g: number;
		r: number;
		constructor(color?: string | number[] | any): this;
		blendColors(start: Color, end: Color, weight: number, obj?: Color): Color;
		fromArray(a: number[], obj?: Color): Color;
		fromHex(color: string, obj?: Color): Color;
		fromRgb(color: string, obj?: Color): Color;
		fromString(str: string, obj?: Color): Color;
		setColor(color: string | number[] | any): Color;
		toCss(includeAlpha?: boolean): string;
		toHex(): string;
		toRgb(): number[];
		toRgba(): number[]
	}

	declare module.exports: undefined


}

declare module 'esri/Credential' {
				declare class Credential  {
		expires: number;
		isAdmin: boolean;
		oAuthState: any;
		server: string;
		ssl: boolean;
		token: string;
		userId: string;
		destroy(): void;
		refreshToken(): any;
		toJson(): any;
		on(
		type: "destroy", listener: (event: {
		target: Credential
	}) => void
	): esri.Handle;
		on(
		type: "token-change", listener: (event: {
		target: Credential
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/IdentityManager' {
				declare class IdentityManager extends IdentityManagerBase {
		dialog: any;
		setOAuthRedirectionHandler(handlerFunction: Function): void;
		setOAuthResponseHash(hash: string): void;
		signIn(): any;
		on(
		type: "dialog-cancel", listener: (event: {
		info: any,
		target: IdentityManager
	}) => void
	): esri.Handle;
		on(
		type: "dialog-create", listener: (event: {
		target: IdentityManager
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/IdentityManagerBase' {
				declare class IdentityManagerBase  {
		tokenValidity: number;
		checkSignInStatus(resUrl: string): any;
		destroyCredentials(): void;
		findCredential(url: string, userId?: string): Credential;
		findOAuthInfo(url: string): OAuthInfo;
		findServerInfo(url: string): ServerInfo;
		generateToken(serverInfo: ServerInfo, userInfo: any, options?: any): any;
		getCredential(url: string, options?: any): any;
		initialize(json: Object): any;
		isBusy(): boolean;
		oAuthSignIn(
		resUrl: string, serverInfo: ServerInfo, OAuthInfo: OAuthInfo, options?: any
	): any;
		registerOAuthInfos(oAuthInfos: OAuthInfo[]): void;
		registerServers(serverInfos: ServerInfo[]): void;
		registerToken(properties: any): void;
		setProtocolErrorHandler(handlerFunction: Function): void;
		setRedirectionHandler(handlerFunction: Function): void;
		signIn(url: string, serverInfo: ServerInfo, options?: any): any;
		toJson(): any;
		on(
		type: "credential-create", listener: (event: {
		credential: Credential,
		target: IdentityManagerBase
	}) => void
	): esri.Handle;
		on(
		type: "credentials-destroy", listener: (event: {
		target: IdentityManagerBase
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/ImageSpatialReference' {
				declare class ImageSpatialReference extends SpatialReference {
		ics: any;
		icsid: number;
		constructor(params: esri.ImageSpatialReferenceOptions): this;
		equals(inSR: ImageSpatialReference): boolean;
		toJson(preserveUrl?: boolean): boolean
	}

	declare module.exports: undefined


}

declare module 'esri/InfoTemplate' {
				declare class InfoTemplate  {
		content: string | Function;
		title: string | Function;
		constructor(): this;
		constructor(title: string | Function, content: string | Function): this;
		constructor(json: Object): this;
		setContent(template: string | Function): InfoTemplate;
		setTitle(template: string | Function): InfoTemplate;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/InfoWindowBase' {
				declare class InfoWindowBase  {
		domNode: any;
		isShowing: boolean;
		destroyDijits(): void;
		hide(): void;
		place(value: string | HTMLElement, parentNode: Node): void;
		resize(width: number, height: number): void;
		setContent(content: string | any): void;
		setMap(map: Map): void;
		setTitle(title: string | any): void;
		show(location: Point): void;
		startupDijits(): void;
		unsetMap(map: Map): void;
		on(
		type: "hide", listener: (event: {
		target: InfoWindowBase
	}) => void
	): esri.Handle;
		on(
		type: "show", listener: (event: {
		target: InfoWindowBase
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/OperationBase' {
				declare class OperationBase  {
		label: string;
		type: string;
		constructor(params: esri.OperationBaseOptions): this;
		performRedo(): void;
		performUndo(): void
	}

	declare module.exports: undefined


}

declare module 'esri/ServerInfo' {
				declare class ServerInfo  {
		adminTokenServiceUrl: string;
		currentVersion: number;
		server: string;
		shortLivedTokenValidity: number;
		tokenServiceUrl: string;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/SnappingManager' {
				declare class SnappingManager  {
		constructor(options?: esri.SnappingManagerOptions): this;
		destroy(): void;
		getSnappingPoint(screenPoint: Point): any;
		setLayerInfos(layerInfos: any[]): void
	}

	declare module.exports: undefined


}

declare module 'esri/SpatialReference' {
				declare class SpatialReference  {
		wkid: number;
		wkt: string;
		constructor(json: Object): this;
		constructor(wkid: number): this;
		constructor(wkt: string): this;
		equals(sr: SpatialReference): boolean;
		isWebMercator(): boolean;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/TimeExtent' {
				declare class TimeExtent  {
		endTime: Date;
		startTime: Date;
		constructor(startTime: Date, endTime: Date): this;
		intersection(timeExtent: TimeExtent): TimeExtent;
		offset(offsetValue: number, offsetUnits: string): TimeExtent
	}

	declare module.exports: undefined


}

declare module 'esri/arcgis/OAuthInfo' {
				declare class OAuthInfo  {
		appId: string;
		authNamespace: string;
		expiration: number;
		locale: string;
		minTimeUntilExpiration: number;
		popup: boolean;
		popupCallbackUrl: string;
		popupWindowFeatures: string;
		portalUrl: string;
		showSocialLogins: boolean;
		constructor(params: esri.OAuthInfoOptions): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/arcgis/Portal' {
				declare export class Portal  {
		access: string;
		allSSL: boolean;
		basemapGalleryGroupQuery: string;
		bingKey: string;
		canListApps: boolean;
		canListData: boolean;
		canListPreProvisionedItems: boolean;
		canProvisionDirectPurchase: boolean;
		canSearchPublic: boolean;
		canShareBingPublic: boolean;
		canSharePublic: boolean;
		canSignInArcGIS: boolean;
		canSignInIDP: boolean;
		colorSetsGroupQuery: string;
		commentsEnabled: boolean;
		created: Date;
		culture: string;
		customBaseUrl: string;
		defaultBasemap: any;
		defaultExtent: any;
		description: string;
		featuredGroups: any[];
		featuredGroupsId: string;
		featuredItemsGroupQuery: string;
		galleryTemplatesGroupQuery: string;
		homePageFeaturedContent: string;
		homePageFeaturedContentCount: number;
		httpPort: number;
		httpsPort: number;
		id: string;
		ipCntryCode: string;
		isOrganization: boolean;
		isPortal: boolean;
		layerTemplatesGroupQuery: string;
		maxTokenExpirationMinutes: number;
		modified: Date;
		name: string;
		portalHostname: string;
		portalMode: string;
		portalName: string;
		portalProperties: any;
		portalThumbnail: string;
		portalUrl: string;
		region: string;
		rotatorPanels: string[];
		showHomePageDescription: boolean;
		supportsHostedServices: boolean;
		supportsOAuth: boolean;
		symbolSetsGroupQuery: string;
		templatesGroupQuery: string;
		thumbnail: string;
		thumbnailUrl: string;
		units: string;
		url: string;
		urlKey: string;
		user: PortalUser;
		useStandardizedQuery: boolean;
		constructor(url: string): this;
		getPortalUser(): PortalUser;
		queryGroups(queryParams?: any): any;
		queryItems(queryParams?: any): any;
		queryUsers(queryParams?: any): any;
		signIn(): any;
		signOut(): Portal;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: Portal
	}) => void
	): esri.Handle;
		on(type: "load", listener: (event: {
		target: Portal
	}) => void): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare export class PortalComment  {
		comment: string;
		created: string;
		id: string;
		owner: string
	}

	declare export class PortalFolder  {
		created: Date;
		id: string;
		portal: Portal;
		title: string;
		url: string;
		getItems(): any
	}

	declare export class PortalGroup  {
		access: string;
		created: Date;
		description: string;
		id: string;
		isInvitationOnly: boolean;
		isViewOnly: boolean;
		modified: Date;
		owner: string;
		portal: Portal;
		snippet: string;
		tags: string[];
		thumbnailUrl: string;
		title: string;
		url: string;
		getMembers(): any;
		queryItems(queryParams?: any): any
	}

	declare export class PortalItem  {
		access: string;
		accessInformation: string;
		avgRating: number;
		created: Date;
		culture: string;
		description: string;
		extent: any;
		id: string;
		itemDataUrl: string;
		itemUrl: string;
		licenseInfo: string;
		modified: Date;
		name: string;
		numComments: number;
		numRatings: number;
		numViews: number;
		owner: string;
		portal: Portal;
		size: number;
		snippet: string;
		spatialReference: string;
		tags: string[];
		thumbnailUrl: string;
		title: string;
		type: string;
		typeKeywords: string[];
		url: string;
		userItemUrl: string;
		addComment(comment: string): any;
		addRating(rating: number): any;
		deleteComment(comment: PortalComment): any;
		deleteRating(rating: PortalRating): any;
		getComments(): any;
		getRating(): any;
		updateComment(comment: PortalComment): any
	}

	declare export class PortalQueryResult  {
		nextQueryParams: any;
		queryParams: any;
		results: any[];
		total: number
	}

	declare export class PortalRating  {
		created: Date;
		rating: number
	}

	declare export class PortalUser  {
		access: string;
		created: Date;
		culture: string;
		description: string;
		email: string;
		fullName: string;
		modified: Date;
		orgId: string;
		portal: Portal;
		preferredView: string;
		region: string;
		role: string;
		tags: string[];
		thumbnailUrl: string;
		userContentUrl: string;
		username: string;
		getFolders(): any;
		getGroupInvitations(): any;
		getGroups(): any;
		getItem(itemId: string): any;
		getItems(folderId?: string): any;
		getNotifications(): any;
		getTags(): any
	}

	
}

declare module 'esri/arcgis/utils' {
					declare module.exports: undefined


}

declare module 'esri/basemaps' {
					declare module.exports: undefined


}

declare module 'esri/config' {
					declare module.exports: undefined


}

declare module 'esri/dijit/AttributeInspector' {
				declare class AttributeInspector  {
		STRING_FIELD_OPTION_RICHTEXT: any;
		STRING_FIELD_OPTION_TEXTAREA: any;
		STRING_FIELD_OPTION_TEXTBOX: any;
		constructor(params: esri.AttributeInspectorOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		first(): void;
		last(): void;
		next(): void;
		previous(): void;
		refresh(): void;
		startup(): void;
		on(
		type: "attribute-change", listener: (
		event: {
		feature: Graphic,
		fieldName: string,
		fieldValue: string,
		target: AttributeInspector
	}
	) => void
	): esri.Handle;
		on(
		type: "delete", listener: (event: {
		feature: Graphic,
		target: AttributeInspector
	}) => void
	): esri.Handle;
		on(
		type: "next", listener: (event: {
		feature: Graphic,
		target: AttributeInspector
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Attribution' {
				declare class Attribution  {
		itemDelimiter: string;
		itemNodes: any;
		listNode: HTMLSpanElement;
		map: Map;
		constructor(options: esri.AttributionOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Basemap' {
				declare class Basemap  {
		id: string;
		thumbnailUrl: string;
		title: string;
		constructor(params: esri.BasemapOptions): this;
		getLayers(): BasemapLayer[];
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/BasemapGallery' {
				declare class BasemapGallery  {
		basemaps: Basemap[];
		loaded: boolean;
		portalUrl: string;
		constructor(params: esri.BasemapGalleryOptions, srcNodeRef?: Node | string): this;
		add(basemap: Basemap): boolean;
		destroy(): void;
		get(id: string): Basemap;
		getSelected(): Basemap;
		remove(id: string): Basemap;
		select(id: string): Basemap;
		startup(): void;
		on(
		type: "add", listener: (event: {
		basemap: Basemap,
		target: BasemapGallery
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		target: BasemapGallery
	}) => void
	): esri.Handle;
		on(
		type: "load", listener: (event: {
		target: BasemapGallery
	}) => void
	): esri.Handle;
		on(
		type: "remove", listener: (event: {
		basemap: Basemap,
		target: BasemapGallery
	}) => void
	): esri.Handle;
		on(
		type: "selection-change", listener: (event: {
		target: BasemapGallery
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/BasemapLayer' {
				declare class BasemapLayer  {
		copyright: string;
		fullExtent: Extent;
		initialExtent: Extent;
		subDomains: string[];
		tileInfo: TileInfo;
		tileServer: string[];
		type: string;
		constructor(params: esri.BasemapLayerOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/BasemapToggle' {
				declare class BasemapToggle  {
		basemap: string;
		basemaps: any;
		loaded: boolean;
		map: Map;
		theme: string;
		visible: boolean;
		constructor(params: esri.BasemapToggleOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		hide(): void;
		show(): void;
		startup(): void;
		toggle(): void;
		on(
		type: "load", listener: (event: {
		target: BasemapToggle
	}) => void
	): esri.Handle;
		on(
		type: "toggle", listener: (
		event: {
		currentBasemap: string,
		error: any,
		previousBasemap: string,
		target: BasemapToggle
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/BookmarkItem' {
				declare class BookmarkItem  {
		constructor(name: string, extent: Extent): this
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Bookmarks' {
				declare class Bookmarks  {
		bookmarks: BookmarkItem[];
		constructor(params: esri.BookmarksOptions, srcNodeRef: Node | string): this;
		addBookmark(bookmarkItem: BookmarkItem): void;
		destroy(): void;
		hide(): void;
		removeBookmark(bookmarkName: string): void;
		show(): void;
		startup(): void;
		toJson(): any;
		on(
		type: "click", listener: (event: {
		target: Bookmarks
	}) => void
	): esri.Handle;
		on(type: "edit", listener: (event: {
		target: Bookmarks
	}) => void): esri.Handle;
		on(
		type: "remove", listener: (event: {
		target: Bookmarks
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/ClassedColorSlider' {
				declare class ClassedColorSlider extends RendererSlider {
		breakInfos: any;
		classificationMethod: string;
		handles: number[];
		histogram: any;
		histogramWidth: boolean;
		maxValue: number;
		minValue: number;
		normalizationType: string;
		primaryHandle: number;
		rampWidth: number;
		showHandles: boolean;
		showHistogram: boolean;
		showLabels: boolean;
		showTicks: boolean;
		statistics: any;
		constructor(params: esri.ClassedColorSliderOptions, srcNodeRef: Node | string): this;
		startup(): void;
		on(
		type: "change", listener: (event: {
		breakInfos: any,
		target: ClassedColorSlider
	}) => void
	): esri.Handle;
		on(
		type: "data-value-change", listener: (
		event: {
		breakInfos: any,
		maxValue: number,
		minValue: number,
		target: ClassedColorSlider
	}
	) => void
	): esri.Handle;
		on(
		type: "handle-value-change", listener: (event: {
		breakInfos: any,
		target: ClassedColorSlider
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/ClassedSizeSlider' {
				declare class ClassedSizeSlider extends RendererSlider {
		breakInfos: any;
		classificationMethod: string;
		handles: number[];
		histogram: any;
		histogramWidth: number;
		maxValue: number;
		minValue: number;
		normalizationType: string;
		primaryHandle: number;
		rampWidth: number;
		showHandles: boolean;
		showHistogram: boolean;
		showLabels: boolean;
		showTicks: boolean;
		statistics: any;
		constructor(params: esri.ClassedSizeSliderOptions, srcNodeRef: Node | string): this;
		on(
		type: "change", listener: (event: {
		breakInfos: any,
		target: ClassedSizeSlider
	}) => void
	): esri.Handle;
		on(
		type: "data-value-change", listener: (
		event: {
		breakInfos: any,
		maxValue: number,
		minValue: number,
		target: ClassedSizeSlider
	}
	) => void
	): esri.Handle;
		on(
		type: "handle-value-change", listener: (event: {
		breakInfos: any,
		target: ClassedSizeSlider
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/ColorInfoSlider' {
				declare class ColorInfoSlider extends RendererSlider {
		classificationMethod: string;
		colorInfo: any;
		handles: number[];
		histogram: any;
		histogramWidth: number;
		maxValue: number;
		minValue: number;
		normalizationType: string;
		primaryHandle: number;
		rampWidth: number;
		showHandles: boolean;
		showHistogram: boolean;
		showLabels: boolean;
		showRatioLabels: boolean | string;
		showTicks: boolean;
		showTransparentBackground: boolean;
		statistics: any;
		zoomOptions: any;
		constructor(params: esri.ColorInfoSliderOptions, srcNodeRef: Node | string): this;
		startup(): void;
		on(
		type: "change", listener: (event: {
		colorInfo: any,
		target: ColorInfoSlider
	}) => void
	): esri.Handle;
		on(
		type: "data-value-change", listener: (
		event: {
		colorInfo: any,
		maxValue: number,
		minValue: number,
		target: ColorInfoSlider
	}
	) => void
	): esri.Handle;
		on(
		type: "handle-value-change", listener: (event: {
		colorInfo: any,
		target: ColorInfoSlider
	}) => void
	): esri.Handle;
		on(
		type: "zoomed", listener: (event: {
		zoomed: boolean,
		target: ColorInfoSlider
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/ColorPicker' {
				declare class ColorPicker  {
		color: Color;
		palette: Color[];
		recentColors: Color[];
		constructor(params: esri.ColorPickerOptions, srcNodeRef: Node | string): this;
		startup(): void;
		on(
		type: "color-change", listener: (event: {
		target: ColorPicker
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Directions' {
				declare class Directions  {
		directions: DirectionsFeatureSet;
		mapClickActive: boolean;
		maxStopsReached: boolean;
		mergedRouteGraphic: Graphic;
		portalUrl: string;
		routeParams: RouteParameters;
		routeTask: RouteTask;
		serviceDescription: any;
		showActivateButton: boolean;
		showClearButton: boolean;
		showMilesKilometersOption: boolean;
		showSaveButton: boolean;
		showTravelModesOption: boolean;
		stops: Graphic[];
		theme: string;
		travelModeName: string;
		constructor(options: esri.DirectionsOptions, srcNodeRef: Node | string): this;
		activate(): void;
		addStop(stop: Point | number[] | string | any, index?: number): any;
		addStops(stops: Point[] | number[][] | string[] | any[], index?: number): any;
		centerAtSegmentStart(index: number): void;
		clearDirections(): void;
		deactivate(): void;
		destroy(): void;
		getDirections(): any;
		getSupportedTravelModeNames(): string[];
		highlightSegment(index: number): void;
		loadRoute(itemId: string): any;
		removeStop(index: number): any;
		removeStops(): any;
		reset(): any;
		setDirectionsLanguage(locale: string): any;
		setDirectionsLengthUnits(units: string): any;
		setTravelMode(travelModeName: string): any;
		startup(): void;
		unhighlightSegment(): void;
		updateStop(stop: Point | number[] | string | any, index: number): any;
		updateStops(stops: Point[] | number[][] | string[] | any[]): any;
		useMyCurrentLocation(stopIndex: number): any;
		zoomToFullRoute(): void;
		zoomToSegment(index: number): void;
		on(
		type: "activate", listener: (event: {
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "deactivate", listener: (event: {
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "directions-clear", listener: (event: {
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "directions-finish", listener: (event: {
		result: RouteResult,
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "directions-start", listener: (event: {
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "feature-collection-created", listener: (event: {
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "load", listener: (event: {
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "map-click-active", listener: (event: {
		mapClickActive: boolean,
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "route-item-created", listener: (event: {
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "route-item-updated", listener: (event: {
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "segment-highlight", listener: (event: {
		graphic: Graphic,
		target: Directions
	}) => void
	): esri.Handle;
		on(
		type: "segment-select", listener: (event: {
		graphic: Graphic,
		target: Directions
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/ElevationProfile' {
				declare class ElevationProfile  {
		measureUnits: string;
		profileGeometry: Geometry;
		title: string;
		constructor(options: esri.ElevationProfileOptions, srcNode: Node | string): this;
		clearProfile(): void;
		destroy(): void;
		startup(): void;
		on(
		type: "clear-profile", listener: (event: {
		target: ElevationProfile
	}) => void
	): esri.Handle;
		on(
		type: "elevation-values", listener: (event: {
		data: any,
		target: ElevationProfile
	}) => void
	): esri.Handle;
		on(
		type: "load", listener: (event: {
		target: ElevationProfile
	}) => void
	): esri.Handle;
		on(
		type: "title-changed", listener: (event: {
		target: ElevationProfile
	}) => void
	): esri.Handle;
		on(
		type: "update-profile", listener: (event: {
		profileResults: any,
		target: ElevationProfile
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/FeatureTable' {
				declare class FeatureTable  {
		batchCount: number;
		columns: any[];
		dataStore: any;
		dateOptions: any;
		editable: boolean;
		editOn: string | any;
		featureCount: number;
		featureLayer: FeatureLayer;
		fieldInfos: any[];
		grid: any;
		gridMenu: any;
		gridOptions: any;
		hiddenFields: string[];
		idProperty: string;
		loaded: boolean;
		map: Map;
		menuFunctions: any[];
		outFields: string[];
		selectedRowIds: number[];
		selectedRows: any[];
		showAttachments: boolean;
		showColumnHeaderTooltips: boolean;
		showCyclicalRelationships: boolean;
		showDataTypes: boolean;
		showFeatureCount: boolean;
		showGridHeader: boolean;
		showGridMenu: boolean;
		showRelatedRecords: boolean;
		showStatistics: boolean;
		syncSelection: boolean;
		zoomToSelection: boolean;
		constructor(params: esri.FeatureTableOptions, srcNodeRef: Node | string): this;
		centerOnSelection(): void;
		clearFilter(): void;
		clearSelection(): void;
		destroy(): void;
		filterRecordsByIds(ids: number[]): void;
		filterSelectedRecords(): void;
		getFeatureDataById(id: number | number[]): any;
		getRowDataById(id: number): any;
		refresh(): void;
		resize(): void;
		selectRows(ids: number | number[], scrollToRow?: boolean): void;
		sort(field: string, descending?: boolean): void;
		startup(): void;
		on(
		type: "clear-selection", listener: (event: {
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "column-resize", listener: (event: {
		resizeEvent: any,
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "column-state-change", listener: (event: {
		stateChangeEvent: any,
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "data-change", listener: (event: {
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "editor-hide", listener: (event: {
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "editor-show", listener: (event: {
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "edits-complete", listener: (
		event: {
		adds: FeatureEditResult[],
		deletes: FeatureEditResult[],
		updates: FeatureEditResult[],
		target: FeatureTable
	}
	) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "filter", listener: (event: {
		ids: number[],
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "load", listener: (event: {
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "refresh", listener: (event: {
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "row-deselect", listener: (event: {
		event: any,
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "row-select", listener: (event: {
		event: any,
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "show-attachments", listener: (
		event: {
		attachments: any,
		dialog: any,
		featureId: number,
		target: FeatureTable
	}
	) => void
	): esri.Handle;
		on(
		type: "show-related-records", listener: (
		event: {
		features: Graphic[],
		relationship: any,
		row: any,
		target: FeatureTable
	}
	) => void
	): esri.Handle;
		on(
		type: "show-statistics", listener: (event: {
		statistics: any,
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(
		type: "sort", listener: (event: {
		sortEvent: any,
		target: FeatureTable
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Gallery' {
				declare class Gallery  {
		constructor(params: esri.GalleryOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		getFocusedItem(): any;
		getSelectedItem(): any;
		next(): void;
		previous(): void;
		select(item: any): void;
		setFocus(item: any): void;
		startup(): void;
		on(
		type: "focus", listener: (event: {
		item: any,
		target: Gallery
	}) => void
	): esri.Handle;
		on(
		type: "select", listener: (event: {
		item: any,
		target: Gallery
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Gauge' {
				declare class Gauge  {
		constructor(params: esri.GaugeOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		get(name: string): string | Graphic | number;
		set(name: string, value: string | Graphic | number): Gauge;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Geocoder' {
				declare class Geocoder  {
		activeGeocoder: any;
		activeGeocoderIndex: number;
		autoComplete: boolean;
		autoNavigate: boolean;
		geocoderMenu: boolean;
		geocoders: any[];
		graphicsLayer: GraphicsLayer;
		highlightLocation: boolean;
		maxLocations: number;
		minCharacters: number;
		results: any[];
		searchDelay: number;
		showResults: boolean;
		symbol: Symbol;
		theme: string;
		value: string;
		zoomScale: number;
		constructor(params: esri.GeocoderOptions, srcNodeRef: Node | string): this;
		blur(): void;
		clear(): void;
		destroy(): void;
		find(): any;
		focus(): void;
		hide(): void;
		select(result: any): void;
		show(): void;
		startup(): void;
		on(
		type: "auto-complete", listener: (event: {
		results: any,
		target: Geocoder
	}) => void
	): esri.Handle;
		on(type: "clear", listener: (event: {
		target: Geocoder
	}) => void): esri.Handle;
		on(
		type: "find-results", listener: (event: {
		results: any,
		target: Geocoder
	}) => void
	): esri.Handle;
		on(
		type: "geocoder-select", listener: (event: {
		geocoder: any,
		target: Geocoder
	}) => void
	): esri.Handle;
		on(
		type: "select", listener: (event: {
		results: any,
		target: Geocoder
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/HeatmapSlider' {
				declare class HeatmapSlider extends RendererSlider {
		colorStops: any;
		handles: number[];
		maxValue: number;
		minValue: number;
		rampWidth: number;
		showHandles: boolean;
		showLabels: boolean;
		showTicks: boolean;
		constructor(params: esri.HeatmapSliderOptions, srcNodeRef: Node | string): this;
		on(
		type: "change", listener: (event: {
		colorStops: any,
		target: HeatmapSlider
	}) => void
	): esri.Handle;
		on(
		type: "handle-value-change", listener: (event: {
		colorStops: any,
		target: HeatmapSlider
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/HistogramTimeSlider' {
				declare class HistogramTimeSlider  {
		constructor(params: esri.HistogramTimeSliderOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		startup(): void;
		on(
		type: "time-extent-change", listener: (event: {
		target: HistogramTimeSlider
	}) => void
	): esri.Handle;
		on(
		type: "update", listener: (event: {
		target: HistogramTimeSlider
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/HomeButton' {
				declare class HomeButton  {
		extent: Extent;
		loaded: boolean;
		map: Map;
		theme: string;
		visible: boolean;
		constructor(params: esri.HomeButtonOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		hide(): void;
		home(): any;
		show(): void;
		startup(): void;
		on(
		type: "home", listener: (event: {
		error: any,
		extent: Extent,
		target: HomeButton
	}) => void
	): esri.Handle;
		on(
		type: "load", listener: (event: {
		target: HomeButton
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/HorizontalSlider' {
				declare class HorizontalSlider  {
		showButtons: boolean;
		constructor(params: esri.HorizontalSliderOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/ImageServiceMeasure' {
				declare class ImageServiceMeasure  {
		fillSymbol: SimpleFillSymbol;
		lineSymbol: SimpleLineSymbol;
		markerSymbol: SimpleMarkerSymbol;
		measureToolbar: ImageServiceMeasureTool;
		constructor(params: esri.ImageServiceMeasureOptions, srcNode: Node | string): this;
		destroy(): void;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/InfoWindow' {
				declare class InfoWindow extends InfoWindowBase {
		ANCHOR_LOWERLEFT: any;
		ANCHOR_LOWERRIGHT: any;
		ANCHOR_UPPERLEFT: any;
		ANCHOR_UPPERRIGHT: any;
		anchor: string;
		coords: Point;
		fixedAnchor: string;
		isShowing: boolean;
		constructor(params: any, srcNodeRef: Node | string): this;
		hide(): void;
		move(point: Point): void;
		resize(width: number, height: number): void;
		setContent(content: any): InfoWindow;
		setFixedAnchor(anchor: string): void;
		setTitle(title: string): InfoWindow;
		show(point: Point, placement?: string): void;
		startup(): void;
		on(
		type: "hide", listener: (event: {
		target: InfoWindow
	}) => void
	): esri.Handle;
		on(
		type: "show", listener: (event: {
		target: InfoWindow
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/InfoWindowLite' {
				declare class InfoWindowLite extends InfoWindowBase {
		anchor: string;
		coords: Point;
		fixedAnchor: string;
		isShowing: boolean;
		hide(): void;
		move(point: Point): void;
		resize(width: number, height: number): void;
		setContent(content: any): void;
		setFixedAnchor(anchor: string): void;
		setTitle(title: string): InfoWindow;
		show(point: Point, placement?: string): void;
		startup(): void;
		on(
		type: "hide", listener: (event: {
		target: InfoWindowLite
	}) => void
	): esri.Handle;
		on(
		type: "show", listener: (event: {
		target: InfoWindowLite
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/LayerList' {
				declare class LayerList  {
		layers: any[];
		loaded: boolean;
		map: Map;
		removeUnderscores: boolean;
		showLegend: boolean;
		showOpacitySlider: boolean;
		showSubLayers: boolean;
		theme: string;
		visible: boolean;
		constructor(options: esri.LayerListOptions, srcNode: Node | string): this;
		destroy(): void;
		refresh(): void;
		startup(): void;
		on(type: "load", listener: (event: {
		target: LayerList
	}) => void): esri.Handle;
		on(
		type: "refresh", listener: (event: {
		target: LayerList
	}) => void
	): esri.Handle;
		on(
		type: "toggle", listener: (
		event: {
		layerIndex: number,
		subLayerIndex: number,
		visible: boolean,
		target: LayerList
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/LayerSwipe' {
				declare class LayerSwipe  {
		clip: number;
		enabled: boolean;
		layers: Layer[];
		left: number;
		loaded: boolean;
		map: Map;
		theme: string;
		top: number;
		type: string;
		visible: boolean;
		constructor(params: esri.LayerSwipeOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		disable(): void;
		enable(): void;
		startup(): void;
		swipe(): void;
		on(
		type: "load", listener: (event: {
		target: LayerSwipe
	}) => void
	): esri.Handle;
		on(
		type: "swipe", listener: (event: {
		layers: any[],
		target: LayerSwipe
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Legend' {
				declare class Legend  {
		layerInfos: any[];
		map: Map;
		constructor(params: esri.LegendOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		refresh(): void;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/LocateButton' {
				declare class LocateButton  {
		centerAt: boolean;
		clearOnTrackingStop: boolean;
		geolocationOptions: any;
		graphicsLayer: GraphicsLayer;
		highlightLocation: boolean;
		infoTemplate: InfoTemplate;
		loaded: boolean;
		map: Map;
		scale: number;
		setScale: boolean;
		symbol: Symbol;
		theme: string;
		tracking: boolean;
		useTracking: boolean;
		visible: boolean;
		constructor(params: esri.LocateButtonOptions, srcNodeRef: Node | string): this;
		clear(): void;
		destroy(): void;
		hide(): void;
		locate(): any;
		show(): void;
		startup(): void;
		on(
		type: "load", listener: (event: {
		target: LocateButton
	}) => void
	): esri.Handle;
		on(
		type: "locate", listener: (
		event: {
		error: any,
		graphic: Graphic,
		position: any,
		scale: number,
		target: LocateButton
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Measurement' {
				declare class Measurement  {
		constructor(params: esri.MeasurementOptions, srcNodeRef: Node | string): this;
		clearResult(): void;
		destroy(): void;
		getTool(): any;
		getUnit(): string;
		hide(): void;
		hideTool(toolName: string): void;
		measure(geometry: Point | Polyline | Polygon): void;
		setTool(toolName: string, activate: boolean): void;
		show(): void;
		showTool(toolName: string): void;
		startup(): void;
		on(
		type: "measure", listener: (
		event: {
		geometry: Geometry,
		segmentLength: number,
		toolName: string,
		unitName: string,
		values: number,
		target: Measurement
	}
	) => void
	): esri.Handle;
		on(
		type: "measure-end", listener: (
		event: {
		geometry: Geometry,
		toolName: string,
		unitName: string,
		values: number[] | number,
		target: Measurement
	}
	) => void
	): esri.Handle;
		on(
		type: "measure-start", listener: (
		event: {
		toolName: string,
		unitName: string,
		target: Measurement
	}
	) => void
	): esri.Handle;
		on(
		type: "tool-change", listener: (
		event: {
		previousToolName: string,
		toolName: string,
		unitName: string,
		target: Measurement
	}
	) => void
	): esri.Handle;
		on(
		type: "unit-change", listener: (
		event: {
		toolName: string,
		unitName: string,
		target: Measurement
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/ObliqueViewer' {
				declare class ObliqueViewer  {
		azimuthAngle: number;
		azimuthField: string;
		azimuthTolerance: number;
		elevationField: string;
		elevationThreshold: number;
		filteredRecords: any[];
		imageServiceLayer: ArcGISImageServiceLayer;
		isNadir: boolean;
		map: Map;
		noQueryOnExtentChange: boolean;
		rasterInfoFields: any[];
		rasterListRefresh: boolean;
		records: any[];
		selectedRaster: any;
		selectedRasterId: number;
		showThumbnail: boolean;
		constructor(params: esri.ObliqueViewerOptions): this;
		locate(geometry: Geometry): void;
		projectGeometry(geometry: Geometry, outSpatialReference: SpatialReference): any;
		search(geometry: Geometry): any;
		setData(records: any[], extent: Extent): void;
		setExtent(extent: Extent): any;
		setImage(id: number, extent: Extent): void;
		zoomToSelectedImage(): void;
		on(
		type: "azimuth-change", listener: (event: {
		azimuth: number,
		target: ObliqueViewer
	}) => void
	): esri.Handle;
		on(
		type: "raster-select", listener: (event: {
		selectedRasterId: number,
		target: ObliqueViewer
	}) => void
	): esri.Handle;
		on(
		type: "records-refresh", listener: (
		event: {
		filteredRecords: any[],
		records: any[],
		target: ObliqueViewer
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/OpacitySlider' {
				declare class OpacitySlider extends RendererSlider {
		handles: number[];
		histogram: any;
		histogramWidth: number;
		maxValue: number;
		minValue: number;
		opacityInfo: any;
		primaryHandle: number;
		rampWidth: number;
		showHandles: boolean;
		showHistogram: boolean;
		showLabels: boolean;
		showTicks: boolean;
		showTransparentBackground: boolean;
		statistics: any;
		zoomOptions: any;
		constructor(params: esri.OpacitySliderOptions, srcNodeRef: Node | string): this;
		on(
		type: "change", listener: (event: {
		opacityInfo: any,
		target: OpacitySlider
	}) => void
	): esri.Handle;
		on(
		type: "data-value-change", listener: (
		event: {
		maxValue: number,
		minValue: number,
		opacityInfo: any,
		target: OpacitySlider
	}
	) => void
	): esri.Handle;
		on(
		type: "handle-value-change", listener: (event: {
		opacityInfo: any,
		target: OpacitySlider
	}) => void
	): esri.Handle;
		on(
		type: "zoomed", listener: (event: {
		zoomed: boolean,
		target: OpacitySlider
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/OverviewMap' {
				declare class OverviewMap  {
		overviewMap: Map;
		constructor(params: esri.OverviewMapOptions, srcNodeRef?: Node | string): this;
		destroy(): void;
		hide(): void;
		resize(size: any): void;
		show(): void;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Popup' {
				declare class Popup extends InfoWindowBase {
		anchor: string;
		count: number;
		deferreds: any[];
		domNode: any;
		features: Graphic[];
		fillSymbol: FillSymbol;
		hideDelay: number;
		highlight: boolean;
		isShowing: boolean;
		keepHighlightOnHide: boolean;
		lineSymbol: LineSymbol;
		location: Point;
		marginLeft: number;
		marginTop: number;
		markerSymbol: MarkerSymbol;
		offsetX: number;
		offsetY: number;
		pagingControls: boolean;
		pagingInfo: boolean;
		popupWindow: boolean;
		selectedIndex: number;
		titleInBody: boolean;
		visibleWhenEmpty: boolean;
		zoomFactor: number;
		constructor(options: esri.PopupOptions, srcNodeRef: Node | string): this;
		clearFeatures(): void;
		destroy(): void;
		getSelectedFeature(): Graphic;
		hide(): void;
		maximize(): void;
		reposition(): void;
		resize(width: number, height: number): void;
		restore(): void;
		select(index: number): void;
		selectNext(): void;
		selectPrevious(): void;
		set(name: string, value: any): Popup;
		setContent(content: string | Function): void;
		setFeatures(features: Graphic[] | any[]): void;
		setTitle(title: string | Function): void;
		show(location: Point, options?: any): void;
		startup(): void;
		on(
		type: "clear-features", listener: (event: {
		target: Popup
	}) => void
	): esri.Handle;
		on(type: "hide", listener: (event: {
		target: Popup
	}) => void): esri.Handle;
		on(type: "maximize", listener: (event: {
		target: Popup
	}) => void): esri.Handle;
		on(type: "restore", listener: (event: {
		target: Popup
	}) => void): esri.Handle;
		on(
		type: "selection-change", listener: (event: {
		target: Popup
	}) => void
	): esri.Handle;
		on(
		type: "set-features", listener: (event: {
		target: Popup
	}) => void
	): esri.Handle;
		on(type: "show", listener: (event: {
		target: Popup
	}) => void): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/PopupMobile' {
				declare class PopupMobile extends InfoWindowBase {
		location: Point;
		constructor(options: esri.PopupMobileOptions, srcNodeRef: Node | string): this;
		clearFeatures(): void;
		destroy(): void;
		getSelectedFeature(): Graphic;
		hide(): void;
		select(index: number): void;
		selectNext(): void;
		selectPrevious(): void;
		setContent(content: string | Function): void;
		setFeatures(features: Graphic[] | any[]): void;
		setTitle(title: string | Function): void;
		show(location: Point): void;
		startup(): void;
		on(
		type: "clear-features", listener: (event: {
		target: PopupMobile
	}) => void
	): esri.Handle;
		on(
		type: "hide", listener: (event: {
		target: PopupMobile
	}) => void
	): esri.Handle;
		on(
		type: "selection-change", listener: (event: {
		target: PopupMobile
	}) => void
	): esri.Handle;
		on(
		type: "set-features", listener: (event: {
		target: PopupMobile
	}) => void
	): esri.Handle;
		on(
		type: "show", listener: (event: {
		target: PopupMobile
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/PopupTemplate' {
				declare class PopupTemplate extends InfoTemplate {
		info: any;
		constructor(popupInfo: any, options?: esri.PopupTemplateOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Print' {
				declare class Print  {
		constructor(params: esri.PrintOptions, srcNodeRef: Node | string): this;
		destroy(): void;
		hide(): void;
		printMap(template: PrintTemplate): void;
		show(): void;
		startup(): void;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: Print
	}) => void
	): esri.Handle;
		on(
		type: "print-complete", listener: (event: {
		value: any,
		target: Print
	}) => void
	): esri.Handle;
		on(
		type: "print-start", listener: (event: {
		target: Print
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/RendererSlider' {
				declare class RendererSlider  {
		maximum: number;
		maxLabel: string;
		minimum: number;
		minLabel: string;
		precision: number;
		showHandles: boolean;
		showLabels: boolean | string[];
		showTicks: boolean;
		values: number[];
		constructor(params: esri.RendererSliderOptions, srcNodeRef: Node | string): this;
		startup(): void;
		on(
		type: "slide", listener: (event: {
		values: number[],
		target: RendererSlider
	}) => void
	): esri.Handle;
		on(
		type: "stop", listener: (event: {
		values: number[],
		target: RendererSlider
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Scalebar' {
				declare class Scalebar  {
		constructor(params: esri.ScalebarOptions, srcNodeRef?: Node | string): this;
		destroy(): void;
		hide(): void;
		show(): void;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/Search' {
				declare class Search  {
		activeSource: any;
		activeSourceIndex: number;
		addLayersFromMap: boolean;
		allPlaceholder: string;
		autoNavigate: boolean;
		autoSelect: boolean;
		defaultSource: any;
		enableButtonMode: boolean;
		enableHighlight: boolean;
		enableInfoWindow: boolean;
		enableLabel: boolean;
		enableSearchingAll: boolean;
		enableSourcesMenu: boolean;
		enableSuggestions: boolean;
		enableSuggestionsMenu: boolean;
		expanded: boolean;
		graphicsLayer: Layer;
		highlightGraphic: Graphic;
		infoTemplate: InfoTemplate;
		labelGraphic: Graphic;
		labelSymbol: TextSymbol;
		loaded: boolean;
		locationToAddressDistance: number;
		map: Map;
		maxResults: number;
		maxSuggestions: number;
		minCharacters: number;
		searchResults: any[];
		showInfoWindowOnSelect: boolean;
		sources: any[];
		suggestionDelay: number;
		suggestResults: any[];
		theme: string;
		value: string;
		visible: boolean;
		zoomScale: number;
		constructor(options: esri.SearchOptions, srcNode: Node | string): this;
		blur(): void;
		clear(): void;
		collapse(): void;
		destroy(): void;
		expand(): void;
		focus(): void;
		get(
		name: string
	): any | boolean | Layer | Graphic | InfoTemplate | number | TextSymbol | Map | any[] | string;
		hide(): void;
		search(value?: string | Geometry | any | number[]): any;
		select(value: any): void;
		set(
		name: string, value: any | boolean | Layer | Graphic | InfoTemplate | number | TextSymbol | Map | any[] | string
	): void;
		show(): void;
		startup(): void;
		suggest(value?: string): any;
		on(type: "blur", listener: (event: {
		target: Search
	}) => void): esri.Handle;
		on(
		type: "clear-search", listener: (event: {
		target: Search
	}) => void
	): esri.Handle;
		on(type: "focus", listener: (event: {
		target: Search
	}) => void): esri.Handle;
		on(type: "load", listener: (event: {
		target: Search
	}) => void): esri.Handle;
		on(
		type: "search-results", listener: (
		event: {
		activeSourceIndex: number,
		errors: Error[],
		numErrors: number,
		numResults: number,
		results: any[],
		value: string,
		target: Search
	}
	) => void
	): esri.Handle;
		on(
		type: "select-result", listener: (
		event: {
		result: any,
		source: any,
		sourceIndex: number,
		target: Search
	}
	) => void
	): esri.Handle;
		on(
		type: "suggest-results", listener: (
		event: {
		activeSourceIndex: number,
		errors: Error[],
		numErrors: number,
		numResults: number,
		results: any[],
		value: string,
		target: Search
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/SizeInfoSlider' {
				declare class SizeInfoSlider extends RendererSlider {
		classificationMethod: string;
		handles: number[];
		histogram: any;
		histogramWidth: number;
		maxValue: number;
		minValue: number;
		normalizationType: string;
		primaryHandle: number;
		rampWidth: number;
		showHandles: boolean;
		showHistogram: boolean;
		showLabels: boolean;
		showTicks: boolean;
		sizeInfo: any;
		statistics: any;
		symbol: SimpleMarkerSymbol | SimpleLineSymbol;
		zoomOptions: any;
		constructor(params: esri.SizeInfoSliderOptions, srcNodeRef: Node | string): this;
		startup(): void;
		on(
		type: "change", listener: (event: {
		sizeInfo: any,
		target: SizeInfoSlider
	}) => void
	): esri.Handle;
		on(
		type: "data-value-change", listener: (
		event: {
		maxValue: number,
		minValue: number,
		sizeInfo: any,
		target: SizeInfoSlider
	}
	) => void
	): esri.Handle;
		on(
		type: "handle-value-change", listener: (event: {
		sizeInfo: any,
		target: SizeInfoSlider
	}) => void
	): esri.Handle;
		on(
		type: "zoomed", listener: (event: {
		zoomed: boolean,
		target: SizeInfoSlider
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/SymbolStyler' {
				declare class SymbolStyler  {
		activeTab: string;
		constructor(params: esri.SymbolStylerOptions, srcNodeRef: Node | string): this;
		edit(symbol: Symbol, options: any): void;
		getStyle(): any;
		startup(): void;
		storeColors(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/TimeSlider' {
				declare class TimeSlider  {
		loop: boolean;
		playing: boolean;
		thumbCount: number;
		thumbMovingRate: number;
		timeStops: Date[];
		constructor(params: esri.TimeSliderOptions, srcNodeRef: Node | string): this;
		createTimeStopsByCount(timeExtent: TimeExtent, count?: number): void;
		createTimeStopsByTimeInterval(
		timeExtent: TimeExtent, timeInterval?: number, timeIntervalUnits?: string
	): void;
		getCurrentTimeExtent(): TimeExtent;
		next(): void;
		pause(): void;
		play(): void;
		previous(): void;
		setLabels(labels: string[]): void;
		setLoop(loop: boolean): void;
		setThumbCount(thumbCount: number): void;
		setThumbIndexes(indexes: number[]): void;
		setThumbMovingRate(thumbMovingRate: number): void;
		setTickCount(count: number): void;
		setTimeStops(timeStops: Date[]): void;
		singleThumbAsTimeInstant(createTimeInstants: boolean): void;
		startup(): void;
		on(
		type: "next", listener: (event: {
		timeExtent: TimeExtent,
		target: TimeSlider
	}) => void
	): esri.Handle;
		on(
		type: "pause", listener: (event: {
		timeExtent: TimeExtent,
		target: TimeSlider
	}) => void
	): esri.Handle;
		on(
		type: "play", listener: (event: {
		timeExtent: TimeExtent,
		target: TimeSlider
	}) => void
	): esri.Handle;
		on(
		type: "previous", listener: (event: {
		timeExtent: TimeExtent,
		target: TimeSlider
	}) => void
	): esri.Handle;
		on(
		type: "time-extent-change", listener: (event: {
		timeExtent: TimeExtent,
		target: TimeSlider
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/VisibleScaleRangeSlider' {
				declare class VisibleScaleRangeSlider  {
		layer: Layer;
		map: Map;
		maximum: number;
		maxScale: number;
		minimum: number;
		minScale: number;
		constructor(params: esri.VisibleScaleRangeSliderOptions, srcNodeRef: Node | string): this;
		startup(): void;
		on(
		type: "scale-range-change", listener: (
		event: {
		maxScale: number,
		minScale: number,
		target: VisibleScaleRangeSlider
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/AggregatePoints' {
				declare class AggregatePoints extends AnalysisBase {
		groupByField: string;
		keepBoundariesWithNoPoints: boolean;
		map: Map;
		minorityMajority: boolean;
		outputLayerName: string;
		percentPoints: boolean;
		pointLayer: FeatureLayer;
		polygonLayer: FeatureLayer;
		polygonLayers: FeatureLayer[];
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		summaryFields: string[];
		constructor(params: esri.AggregatePointsOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/AnalysisBase' {
				declare class AnalysisBase  {
		analysisGpServer: string;
		folderId: string;
		folderName: string;
		portalSelf: any;
		portalUrl: string;
		showReadyToUseLayers: boolean;
		title: string;
		cancel(jobInfo: any): void;
		checkJobStatus(jobId: string): void;
		execute(params: string): void;
		getCreditsEstimate(toolName: string, jobParams: string): any;
		on(
		type: "close", listener: (event: {
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(
		type: "drawtool-activate", listener: (event: {
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(
		type: "drawtool-deactivate", listener: (event: {
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(
		type: "job-cancel", listener: (event: {
		response: any,
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(
		type: "job-fail", listener: (event: {
		error: any,
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(
		type: "job-result", listener: (event: {
		result: any,
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(
		type: "job-status", listener: (event: {
		jobInfo: any,
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(
		type: "job-submit", listener: (event: {
		params: any,
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(
		type: "job-success", listener: (event: {
		jobInfo: any,
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(
		type: "start", listener: (event: {
		params: any,
		target: AnalysisBase
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/CalculateDensity' {
				declare class CalculateDensity extends AnalysisBase {
		areaUnits: string;
		boundingPolygonLayer: FeatureLayer;
		boundingPolygonLayers: FeatureLayer[];
		classificationType: string;
		inputLayer: FeatureLayer;
		numClasses: number;
		outputLayerName: string;
		radius: number;
		radiusUnits: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: any, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/ChooseBestFacilities' {
				declare class ChooseBestFacilities extends AnalysisBase {
		analysisGpServer: string;
		candidateCount: number;
		candidateFacilitiesCapacity: string;
		candidateFacilitiesCapacityField: string;
		candidateFacilitiesLayer: FeatureLayer;
		demand: number;
		demandField: string;
		demandLocationLayer: FeatureLayer;
		demandLocationLayers: FeatureLayer[];
		enableTravelModes: boolean;
		featureLayers: FeatureLayer[];
		folderId: string;
		folderName: string;
		map: Map;
		maxTravelRange: number;
		maxTravelRangeField: string;
		outputLayerName: string;
		percentDemandCoverage: number;
		portalUrl: string;
		requiredFacilitiesCapacity: number;
		requiredFacilitiesCapacityField: string;
		requiredFacilitiesLayer: FeatureLayer;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showReadyToUseLayers: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		title: string;
		constructor(params: esri.ChooseBestFacilitiesOptions, srcNodeRef: Node | string): this
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/ConnectOriginsToDestinations' {
				declare class ConnectOriginsToDestinations extends AnalysisBase {
		distanceDefaultUnits: string;
		enableTravelModes: boolean;
		featureLayers: FeatureLayer[];
		map: Map;
		originsLayer: FeatureLayer;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: esri.ConnectOriginsToDestinationsOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/CreateBuffers' {
				declare class CreateBuffers extends AnalysisBase {
		bufferDistance: number[];
		inputLayer: FeatureLayer;
		map: Map;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		units: string;
		constructor(params: esri.CreateBuffersOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/CreateDriveTimeAreas' {
				declare class CreateDriveTimeAreas extends AnalysisBase {
		breakUnits: string;
		breakValues: number[];
		inputLayer: FeatureLayer;
		inputType: string;
		map: Map;
		outputLayerName: string;
		overlapPolicy: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: esri.CreateDriveTimeAreasOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/CreateViewshed' {
				declare class CreateViewshed extends AnalysisBase {
		inputLayer: FeatureLayer;
		map: Map;
		maxDistanceUnits: string;
		maximumDistance: number;
		observerHeight: number;
		observerHeightUnits: string;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		targetHeight: number;
		targetHeightUnits: string;
		constructor(params: esri.CreateViewshedOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/CreateWatersheds' {
				declare class CreateWatersheds extends AnalysisBase {
		inputLayer: FeatureLayer;
		map: Map;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		searchUnits: string;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: esri.CreateWatershedsOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/DeriveNewLocations' {
				declare class DeriveNewLocations extends AnalysisBase {
		analysisLayer: FeatureLayer;
		inputLayers: FeatureLayer[];
		outputLayerName: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: any, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/DissolveBoundaries' {
				declare class DissolveBoundaries extends AnalysisBase {
		dissolveFields: string[];
		inputLayer: FeatureLayer;
		map: Map;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		summaryFields: string[];
		constructor(params: esri.DissolveBoundariesOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/EnrichLayer' {
				declare class EnrichLayer extends AnalysisBase {
		distance: number;
		enableTravelModes: boolean;
		inputLayer: FeatureLayer;
		map: Map;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		showTrafficWidget: boolean;
		constructor(params: esri.EnrichLayerOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/ExtractData' {
				declare class ExtractData extends AnalysisBase {
		clip: boolean;
		dataFormat: string;
		featureLayers: FeatureLayer[];
		inputLayers: FeatureLayer[];
		map: Map;
		outputLayerName: string;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: esri.ExtractDataOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/FindExistingLocations' {
				declare class FindExistingLocations extends AnalysisBase {
		analysisLayer: FeatureLayer;
		inputLayers: FeatureLayer[];
		outputLayerName: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: any, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/FindHotSpots' {
				declare class FindHotSpots extends AnalysisBase {
		aggregationPolygonLayers: FeatureLayer[];
		analysisField: string;
		analysisLayer: FeatureLayer;
		boundingPolygonLayer: FeatureLayer;
		boundingPolygonLayers: FeatureLayer[];
		map: Map;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		returnProcessInfo: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: esri.FindHotSpotsOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/FindNearest' {
				declare class FindNearest extends AnalysisBase {
		analysisLayer: FeatureLayer;
		enableTravelModes: boolean;
		map: Map;
		maxCount: number;
		nearLayer: FeatureLayer;
		nearLayers: FeatureLayer[];
		outputLayerName: string;
		returnFeatureCollection: boolean;
		searchCutoff: number;
		searchCutoffUnits: string;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: esri.FindNearestOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/FindSimilarLocations' {
				declare class FindSimilarLocations extends AnalysisBase {
		inputLayer: FeatureLayer;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		returnProcessInfo: boolean;
		searchLayers: FeatureLayer[];
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: any, srcNodeRef: Node | string): this;
		startup(): void;
		on(
		type: "selecttool-activate", listener: (event: {
		target: FindSimilarLocations
	}) => void
	): esri.Handle;
		on(
		type: "selecttool-deactivate", listener: (event: {
		target: FindSimilarLocations
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/InterpolatePoints' {
				declare class InterpolatePoints extends AnalysisBase {
		boundingPolygonLayer: FeatureLayer;
		boundingPolygonLayers: FeatureLayer[];
		classificationType: string;
		inputLayer: FeatureLayer;
		maxClasses: number;
		minClasses: number;
		numClasses: number;
		outputLayerName: string;
		predictAtPointLayers: FeatureLayer[];
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: any, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/MergeLayers' {
				declare class MergeLayers extends AnalysisBase {
		analysisGpServer: string;
		inputLayer: FeatureLayer;
		map: Map;
		mergeLayers: FeatureLayer[];
		mergingAttributes: string[];
		outputLayerName: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		constructor(params: esri.MergeLayersOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/OverlayLayers' {
				declare class OverlayLayers extends AnalysisBase {
		inputLayer: FeatureLayer;
		map: Map;
		outputLayerName: string;
		overlayLayer: FeatureLayer[];
		overlayType: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		snapToInput: boolean;
		tolerance: number;
		constructor(params: esri.OverlayLayersOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/PlanRoutes' {
				declare class PlanRoutes extends AnalysisBase {
		distanceDefaultUnits: string;
		endLayer: string;
		featureLayers: FeatureLayer[];
		limitMaxTimePerRoute: boolean;
		maxStopsPerRoute: number;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		returnToStart: boolean;
		routeCount: number;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		startLayer: string;
		stopsLayer: FeatureLayer;
		constructor(params: any, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/SummarizeNearby' {
				declare class SummarizeNearby extends AnalysisBase {
		distances: number[];
		enableTravelModes: boolean;
		groupByField: string;
		map: Map;
		minorityMajority: boolean;
		nearType: string;
		outputLayerName: string;
		percentPoints: boolean;
		returnFeatureCollection: boolean;
		shapeUnits: string;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		summaryFields: string[];
		summaryLayer: FeatureLayer;
		summaryLayers: FeatureLayer[];
		sumNearbyLayer: FeatureLayer;
		sumShape: boolean;
		units: string;
		constructor(params: esri.SummarizeNearbyOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/SummarizeWithin' {
				declare class SummarizeWithin extends AnalysisBase {
		groupByField: string;
		map: Map;
		minorityMajority: boolean;
		outputLayerName: string;
		percentPoints: boolean;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		summaryFields: string;
		summaryLayer: FeatureLayer;
		summaryLayers: FeatureLayer[];
		sumWithinLayer: FeatureLayer;
		constructor(params: esri.SummarizeWithinOptions, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/analysis/TraceDownstream' {
				declare class TraceDownstream extends AnalysisBase {
		boundingPolygonLayer: FeatureLayer;
		boundingPolygonLayers: FeatureLayer[];
		maxDistance: number;
		maxDistanceUnits: string;
		outputLayerName: string;
		returnFeatureCollection: boolean;
		showChooseExtent: boolean;
		showCloseIcon: boolean;
		showCredits: boolean;
		showHelp: boolean;
		showSelectAnalysisLayer: boolean;
		showSelectFolder: boolean;
		splitDistance: number;
		splitUnits: string;
		constructor(params: any, srcNodeRef: Node | string): this;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/editing/Add' {
				declare class Add extends OperationBase {
		constructor(params: esri.AddOptions): this;
		performRedo(): void;
		performUndo(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/editing/AttachmentEditor' {
				declare class AttachmentEditor  {
		constructor(params: any, srcNodeRef: Node | string): this;
		showAttachments(graphic: Graphic, featureLayer: FeatureLayer): void;
		startup(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/editing/Cut' {
				declare class Cut extends OperationBase {
		constructor(params: esri.CutOptions): this;
		performRedo(): void;
		performUndo(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/editing/Delete' {
				declare class Delete extends OperationBase {
		constructor(params: esri.DeleteOptions): this;
		performRedo(): void;
		performUndo(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/editing/Editor' {
				declare class Editor  {
		CREATE_TOOL_ARROW: any;
		CREATE_TOOL_AUTOCOMPLETE: any;
		CREATE_TOOL_CIRCLE: any;
		CREATE_TOOL_ELLIPSE: any;
		CREATE_TOOL_FREEHAND_POLYGON: any;
		CREATE_TOOL_FREEHAND_POLYLINE: any;
		CREATE_TOOL_POLYGON: any;
		CREATE_TOOL_POLYLINE: any;
		CREATE_TOOL_RECTANGLE: any;
		CREATE_TOOL_TRIANGLE: any;
		editToolbar: Edit;
		constructor(params: esri.EditorOptions, srcNodeRef: Node | string): this;
		startup(): void;
		on(type: "load", listener: (event: {
		target: Editor
	}) => void): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/editing/TemplatePicker' {
				declare class TemplatePicker  {
		grid: any;
		tooltip: HTMLDivElement;
		constructor(params: esri.TemplatePickerOptions, srcNodeRef: Node | string): this;
		attr(name: string, value?: any): void;
		clearSelection(): void;
		destroy(): void;
		getSelected(): any;
		startup(): void;
		update(): void;
		on(
		type: "selection-change", listener: (event: {
		target: TemplatePicker
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/editing/Union' {
				declare class Union extends OperationBase {
		constructor(params: esri.UnionOptions): this;
		performRedo(): void;
		performUndo(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/editing/Update' {
				declare class Update extends OperationBase {
		constructor(params: esri.UpdateOptions): this;
		performRedo(): void;
		performUndo(): void
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/geoenrichment/DataBrowser' {
				declare class DataBrowser  {
		variables: any[];
		constructor(options: esri.DataBrowserOptions, srcNodeRef: Node | string): this;
		startup(): void;
		on(
		type: "back", listener: (event: {
		target: DataBrowser
	}) => void
	): esri.Handle;
		on(
		type: "cancel", listener: (event: {
		target: DataBrowser
	}) => void
	): esri.Handle;
		on(type: "ok", listener: (event: {
		target: DataBrowser
	}) => void): esri.Handle;
		on(
		type: "select", listener: (event: {
		target: DataBrowser
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/geoenrichment/Infographic' {
				declare class Infographic  {
		cacheLimit: number;
		countryID: string;
		datasetID: string;
		expanded: boolean;
		returnGeometry: boolean;
		studyArea: GeometryStudyArea;
		studyAreaOptions: RingBuffer | DriveBuffer | IntersectingGeographies;
		subtitle: string;
		title: string;
		type: string;
		variables: string[];
		constructor(params: any, srcNodeRef: Node | string): this;
		setData(data: FeatureSet, metadata?: any): void;
		startup(): void;
		on(
		type: "data-error", listener: (event: {
		error: any,
		target: Infographic
	}) => void
	): esri.Handle;
		on(
		type: "data-load", listener: (event: {
		target: Infographic
	}) => void
	): esri.Handle;
		on(
		type: "data-ready", listener: (event: {
		provider: any,
		target: Infographic
	}) => void
	): esri.Handle;
		on(
		type: "data-request", listener: (event: {
		target: Infographic
	}) => void
	): esri.Handle;
		on(
		type: "resize", listener: (event: {
		size: number[],
		target: Infographic
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/geoenrichment/InfographicsCarousel' {
				declare class InfographicsCarousel  {
		expanded: boolean;
		options: InfographicsOptions;
		returnGeometry: boolean;
		selectedIndex: number;
		studyArea: GeometryStudyArea;
		studyAreaTitle: string;
		constructor(params: any, srcNodeRef: Node | string): this;
		startup(): void;
		on(
		type: "data-error", listener: (event: {
		error: any,
		target: InfographicsCarousel
	}) => void
	): esri.Handle;
		on(
		type: "data-load", listener: (event: {
		target: InfographicsCarousel
	}) => void
	): esri.Handle;
		on(
		type: "data-ready", listener: (event: {
		provider: any,
		target: InfographicsCarousel
	}) => void
	): esri.Handle;
		on(
		type: "resize", listener: (event: {
		size: number[],
		target: InfographicsCarousel
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/geoenrichment/InfographicsOptions' {
				declare class InfographicsOptions  {
		studyAreaOptions: RingBuffer | DriveBuffer | IntersectingGeographies;
		theme: string;
		constructor(json?: Object): this;
		getItems(countryID: string): any;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/geoenrichment/InfographicsOptionsItem' {
				declare class InfographicsOptionsItem  {
		datasetID: string;
		isVisible: boolean;
		title: string;
		type: string;
		variables: string[];
		constructor(type: string, variables: string[]): this
	}

	declare module.exports: undefined


}

declare module 'esri/dijit/util/busyIndicator' {
					declare module.exports: undefined


}

declare module 'esri/domUtils' {
					declare module.exports: undefined


}

declare module 'esri/geometry/Circle' {
				declare class Circle extends Polygon {
		center: Point | number[];
		radius: number;
		radiusUnit: string;
		rings: number[][][];
		spatialReference: SpatialReference;
		constructor(center: Point | number[], options?: esri.CircleOptions1): this;
		constructor(params: esri.CircleOptions2): this
	}

	declare module.exports: undefined


}

declare module 'esri/geometry/Extent' {
				declare class Extent extends Geometry {
		xmax: number;
		xmin: number;
		ymax: number;
		ymin: number;
		constructor(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference): this;
		constructor(json: Object): this;
		centerAt(point: Point): Extent;
		contains(geometry: Geometry): boolean;
		expand(factor: number): Extent;
		getCenter(): Point;
		getHeight(): number;
		getWidth(): number;
		intersects(geometry: Geometry): Extent | boolean;
		normalize(): Extent[];
		offset(dx: number, dy: number): Extent;
		shiftCentralMeridian(): Extent;
		union(extent: Extent): Extent;
		update(
		xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference
	): Extent
	}

	declare module.exports: undefined


}

declare module 'esri/geometry/Geometry' {
				declare class Geometry  {
		cache: any;
		spatialReference: SpatialReference;
		type: string;
		clearCache(): void;
		getCacheValue(name: string): any;
		setCacheValue(name: string, value: any): void;
		setSpatialReference(sr: SpatialReference): Geometry;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/geometry/Multipoint' {
				declare class Multipoint extends Geometry {
		points: number[][];
		constructor(spatialReference: SpatialReference): this;
		constructor(json: Object): this;
		addPoint(point: Point | number[]): Multipoint;
		getExtent(): Extent;
		getPoint(index: number): Point;
		removePoint(index: number): Point;
		setPoint(index: number, point: Point): Multipoint
	}

	declare module.exports: undefined


}

declare module 'esri/geometry/Point' {
				declare class Point extends Geometry {
		x: number;
		y: number;
		constructor(x: number, y: number, spatialReference: SpatialReference): this;
		constructor(coords: number[], spatialReference: SpatialReference): this;
		constructor(json: Object): this;
		constructor(long: number, lat: number): this;
		constructor(point: number[]): this;
		constructor(point: any): this;
		getLatitude(): number;
		getLongitude(): number;
		normalize(): Point;
		offset(dx: number, dy: number): Point;
		setLatitude(lat: number): Point;
		setLongitude(lon: number): Point;
		setX(x: number): Point;
		setY(y: number): Point;
		update(x: number, y: number): Point
	}

	declare module.exports: undefined


}

declare module 'esri/geometry/Polygon' {
				declare class Polygon extends Geometry {
		rings: number[][][];
		constructor(spatialReference: SpatialReference): this;
		constructor(json: Object): this;
		constructor(coordinates: number[][] | number[][][]): this;
		addRing(ring: Point[] | number[][]): Polygon;
		contains(point: Point): boolean;
		fromExtent(extent: Extent): Polygon;
		getCentroid(): Point;
		getExtent(): Extent;
		getPoint(ringIndex: number, pointIndex: number): Point;
		insertPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
		isClockwise(ring: Point[] | number[][]): boolean;
		isSelfIntersecting(polygon: Polygon): boolean;
		removePoint(ringIndex: number, pointIndex: number): Point;
		removeRing(ringIndex: number): Point[];
		setPoint(ringIndex: number, pointIndex: number, point: Point): Polygon
	}

	declare module.exports: undefined


}

declare module 'esri/geometry/Polyline' {
				declare class Polyline extends Geometry {
		paths: number[][][];
		constructor(spatialReference: SpatialReference): this;
		constructor(json: Object): this;
		constructor(coordinates: number[][] | number[][][]): this;
		addPath(path: Point[] | number[][]): Polyline;
		getExtent(): Extent;
		getPoint(pathIndex: number, pointIndex: number): Point;
		insertPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
		removePath(pathIndex: number): Point[];
		removePoint(pathIndex: number, pointIndex: number): Point;
		setPoint(pathIndex: number, pointIndex: number, point: Point): Polyline
	}

	declare module.exports: undefined


}

declare module 'esri/geometry/ScreenPoint' {
				declare class ScreenPoint  {
		x: number;
		y: number;
		constructor(x: number, y: number): this;
		constructor(coords: number[]): this;
		constructor(json: Object): this;
		offset(dx: number, dy: number): ScreenPoint;
		setX(x: number): ScreenPoint;
		setY(y: number): ScreenPoint;
		toJson(): any;
		update(x: number, y: number): ScreenPoint
	}

	declare module.exports: undefined


}

declare module 'esri/geometry/geodesicUtils' {
					declare module.exports: undefined


}

declare module 'esri/geometry/geometryEngine' {
					declare module.exports: undefined


}

declare module 'esri/geometry/geometryEngineAsync' {
					declare module.exports: undefined


}

declare module 'esri/geometry/jsonUtils' {
					declare module.exports: undefined


}

declare module 'esri/geometry/mathUtils' {
					declare module.exports: undefined


}

declare module 'esri/geometry/normalizeUtils' {
					declare module.exports: undefined


}

declare module 'esri/geometry/scaleUtils' {
					declare module.exports: undefined


}

declare module 'esri/geometry/screenUtils' {
					declare module.exports: undefined


}

declare module 'esri/geometry/webMercatorUtils' {
					declare module.exports: undefined


}

declare module 'esri/graphic' {
				declare class Graphic  {
		attributes: any;
		geometry: Geometry;
		infoTemplate: InfoTemplate;
		symbol: Symbol;
		visible: boolean;
		constructor(geometry?: Geometry, symbol?: Symbol, attributes?: any, infoTemplate?: InfoTemplate): this;
		constructor(json: Object): this;
		attr(name: string, value: string): Graphic;
		draw(): Graphic;
		getContent(): string;
		getDojoShape(): any;
		getInfoTemplate(): InfoTemplate;
		getLayer(): Layer;
		getNode(): any;
		getNodes(): any;
		getShape(): any;
		getShapes(): any[];
		getTitle(): string;
		hide(): void;
		setAttributes(attributes: any): Graphic;
		setGeometry(geometry: Geometry): Graphic;
		setInfoTemplate(infoTemplate: InfoTemplate): Graphic;
		setSymbol(symbol: Symbol): Graphic;
		show(): void;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/graphicsUtils' {
					declare module.exports: undefined


}

declare module 'esri/kernel' {
					declare module.exports: undefined


}

declare module 'esri/lang' {
					declare module.exports: undefined


}

declare module 'esri/layers/ArcGISDynamicMapServiceLayer' {
				declare class ArcGISDynamicMapServiceLayer extends DynamicMapServiceLayer {
		attributionDataUrl: string;
		capabilities: string;
		copyright: string;
		description: string;
		disableClientCaching: boolean;
		dpi: number;
		dynamicLayerInfos: DynamicLayerInfo[];
		gdbVersion: string;
		hasAttributionData: boolean;
		imageFormat: string;
		imageTransparency: boolean;
		infoTemplates: any;
		layerDefinitions: string[];
		layerDrawingOptions: LayerDrawingOptions[];
		layerInfos: LayerInfo[];
		layerTimeOptions: LayerTimeOptions[];
		maxImageHeight: number;
		maxImageWidth: number;
		maxRecordCount: number;
		maxScale: number;
		minScale: number;
		showAttribution: boolean;
		supportsDynamicLayers: boolean;
		suspended: boolean;
		timeInfo: TimeInfo;
		units: string;
		useMapImage: boolean;
		version: number;
		visibleAtMapScale: boolean;
		visibleLayers: number[];
		constructor(url: string, options?: esri.ArcGISDynamicMapServiceLayerOptions): this;
		createDynamicLayerInfosFromLayerInfos(): DynamicLayerInfo[];
		exportMapImage(imageParameters?: ImageParameters, callback?: Function): void;
		getAttributionData(): any;
		isVisibleAtScale(scale: number): boolean;
		resume(): void;
		setDefaultLayerDefinitions(doNotRefresh?: boolean): void;
		setDefaultVisibleLayers(doNotRefresh?: boolean): void;
		setDisableClientCaching(disable: boolean): void;
		setDPI(dpi: number, doNotRefresh?: boolean): void;
		setDynamicLayerInfos(dynamicLayerInfos: DynamicLayerInfo[], doNotRefresh?: boolean): void;
		setGDBVersion(gdbVersion: string, doNotRefresh?: boolean): void;
		setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
		setImageTransparency(transparent: boolean, doNotRefresh?: boolean): void;
		setInfoTemplates(infoTemplates: any): void;
		setLayerDefinitions(layerDefinitions: string[], doNotRefresh?: boolean): void;
		setLayerDrawingOptions(layerDrawingOptions: LayerDrawingOptions[], doNotRefresh?: boolean): void;
		setLayerTimeOptions(options: LayerTimeOptions[], doNotRefresh?: boolean): void;
		setMaxScale(scale: number): void;
		setMinScale(scale: number): void;
		setScaleRange(minScale: number, maxScale: number): void;
		setUseMapTime(update: boolean): void;
		setVisibleLayers(ids: number[], doNotRefresh?: boolean): void;
		suspend(): void;
		on(
		type: "gdb-version-change", listener: (event: {
		target: ArcGISDynamicMapServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "map-image-export", listener: (
		event: {
		mapImage: MapImage,
		target: ArcGISDynamicMapServiceLayer
	}
	) => void
	): esri.Handle;
		on(
		type: "resume", listener: (event: {
		target: ArcGISDynamicMapServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "scale-range-change", listener: (event: {
		target: ArcGISDynamicMapServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "scale-visibility-change", listener: (event: {
		target: ArcGISDynamicMapServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "suspend", listener: (event: {
		target: ArcGISDynamicMapServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "visible-layers-change", listener: (
		event: {
		visibleLayers: number[],
		target: ArcGISDynamicMapServiceLayer
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/ArcGISImageServiceLayer' {
				declare class ArcGISImageServiceLayer extends DynamicMapServiceLayer {
		bandCount: number;
		bandIds: number[];
		bands: any[];
		compressionQuality: number;
		copyrightText: string;
		defaultMosaicRule: MosaicRule;
		description: string;
		disableClientCaching: boolean;
		format: string;
		infoTemplate: InfoTemplate;
		interpolation: string;
		maxImageHeight: number;
		maxImageWidgth: number;
		maxRecordCount: number;
		maxScale: number;
		minScale: number;
		mosaicRule: MosaicRule;
		pixelSizeX: number;
		pixelSizeY: number;
		pixelType: number;
		renderingRule: RasterFunction;
		timeInfo: TimeInfo;
		useMapImage: boolean;
		version: number;
		constructor(url: string, options?: esri.ArcGISImageServiceLayerOptions): this;
		exportMapImage(imageServiceParameters?: ImageServiceParameters, callback?: Function): void;
		getDefinitionExpression(): string;
		getKeyProperties(): any;
		getRasterAttributeTable(): any;
		getVisibleRasters(): Graphic[];
		queryVisibleRasters(query: Query, options?: any, callback?: Function, errback?: string): void;
		setBandIds(bandIds: number[], doNotRefresh?: boolean): void;
		setCompressionQuality(quality: number, doNotRefresh?: boolean): void;
		setDefinitionExpression(expression: string, doNotRefresh: boolean): void;
		setDisableClientCaching(disable: boolean): void;
		setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
		setInfoTemplate(infoTemplate: InfoTemplate): void;
		setInterpolation(interpolation: string, doNotRefresh?: boolean): void;
		setMosaicRule(mosaicRule: MosaicRule, doNotRefresh?: boolean): void;
		setRenderingRule(renderingRule: RasterFunction, doNotRefresh?: boolean): void;
		setUseMapTime(update: boolean): void;
		on(
		type: "map-image-export", listener: (event: {
		mapImage: MapImage,
		target: ArcGISImageServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "mosaic-rule-change", listener: (event: {
		target: ArcGISImageServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "rendering-change", listener: (event: {
		target: ArcGISImageServiceLayer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/ArcGISImageServiceVectorLayer' {
				declare class ArcGISImageServiceVectorLayer extends GraphicsLayer {
		constructor(url: string, options?: esri.ArcGISImageServiceVectorLayerOptions): this;
		getFlowRepresentation(): string;
		setRenderer(renderer: Renderer): void;
		setUseMapTime(update: boolean): void;
		setVectorRendererStyle(style: string): void
	}

	declare module.exports: undefined


}

declare module 'esri/layers/ArcGISTiledMapServiceLayer' {
				declare class ArcGISTiledMapServiceLayer extends TiledMapServiceLayer {
		attributionDataUrl: string;
		capabilities: string;
		copyright: string;
		description: string;
		hasAttributionData: boolean;
		infoTemplates: any;
		layerInfos: LayerInfo[];
		maxImageHeight: number;
		maxImageWidth: number;
		maxRecordCount: number;
		maxScale: number;
		minScale: number;
		showAttribution: boolean;
		suspended: boolean;
		timeInfo: TimeInfo;
		units: string;
		version: number;
		visibleAtMapScale: boolean;
		constructor(url: string, options?: esri.ArcGISTiledMapServiceLayerOptions): this;
		getAttributionData(): any;
		isVisibleAtScale(scale: number): boolean;
		resume(): void;
		setInfoTemplates(infoTemplates: any): void;
		setMaxScale(scale: number): void;
		setMinScale(scale: number): void;
		setScaleRange(minScale: number, maxScale: number): void;
		suspend(): void;
		on(
		type: "resume", listener: (event: {
		target: ArcGISTiledMapServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "scale-range-change", listener: (event: {
		target: ArcGISTiledMapServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "scale-visibility-change", listener: (event: {
		target: ArcGISTiledMapServiceLayer
	}) => void
	): esri.Handle;
		on(
		type: "suspend", listener: (event: {
		target: ArcGISTiledMapServiceLayer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/CSVLayer' {
				declare class CSVLayer extends FeatureLayer {
		columnDelimiter: string;
		latitudeFieldName: string;
		longitudeFieldName: string;
		url: string;
		constructor(url: string, options?: esri.CSVLayerOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/CodedValueDomain' {
				declare class CodedValueDomain extends Domain {
		codedValues: any[];
		getName(code: number | string): string
	}

	declare module.exports: undefined


}

declare module 'esri/layers/DataAdapterFeatureLayer' {
				declare class DataAdapterFeatureLayer extends FeatureLayer {
		dataAdapter: any;
		dataAdapterQuery: any;
		dataAttributes: string[];
		locationProvider: LocationProviderBase;
		constructor(dataAdapter: any, options: esri.DataAdapterFeatureLayerOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/DataSource' {
				declare class DataSource  {
		constructor(json?: Object): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/DimensionalDefinition' {
				declare class DimensionalDefinition  {
		dimensionName: string;
		isSlice: boolean;
		values: any[];
		variableName: string;
		constructor(json: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/Domain' {
				declare class Domain  {
		name: string;
		type: string;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/DynamicLayerInfo' {
				declare class DynamicLayerInfo extends LayerInfo {
		defaultVisibility: boolean;
		id: number;
		maxScale: number;
		minScale: number;
		name: string;
		parentLayerId: number;
		source: LayerSource;
		subLayerIds: number[];
		constructor(json?: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/DynamicMapServiceLayer' {
				declare class DynamicMapServiceLayer extends Layer {
		fullExtent: Extent;
		initialExtent: Extent;
		spatialReference: SpatialReference;
		getImageUrl(extent: Extent, width: number, height: number, callback: Function): string;
		refresh(): void
	}

	declare module.exports: undefined


}

declare module 'esri/layers/FeatureEditResult' {
				declare class FeatureEditResult  {
		attachmentId: number;
		error: Error;
		objectId: number;
		success: boolean
	}

	declare module.exports: undefined


}

declare module 'esri/layers/FeatureLayer' {
				declare class FeatureLayer extends GraphicsLayer {
		MODE_AUTO: any;
		MODE_ONDEMAND: any;
		MODE_SELECTION: any;
		MODE_SNAPSHOT: any;
		POPUP_HTML_TEXT: any;
		POPUP_NONE: any;
		POPUP_URL: any;
		SELECTION_ADD: any;
		SELECTION_NEW: any;
		SELECTION_SUBTRACT: any;
		advancedQueryCapabilities: any;
		allowGeometryUpdates: boolean;
		attributionDataUrl: string;
		capabilities: string;
		copyright: string;
		defaultDefinitionExpression: string;
		defaultVisibility: boolean;
		description: string;
		displayField: string;
		editFieldsInfo: any;
		fields: Field[];
		fullExtent: Extent;
		gdbVersion: string;
		geometryType: string;
		globalIdField: string;
		graphics: Graphic[];
		hasAttachments: boolean;
		hasAttributionData: boolean;
		htmlPopupType: string;
		labelingInfo: LabelClass[];
		layerId: number;
		maxAllowableOffset: number;
		maxRecordCount: number;
		maxScale: number;
		minScale: number;
		multipatchOption: string;
		name: string;
		objectIdField: string;
		ownershipBasedAccessControlForFeatures: any;
		relationships: any[];
		renderer: Renderer;
		showAttribution: boolean;
		showLabels: boolean;
		source: LayerSource;
		supportsAdvancedQueries: boolean;
		supportsAttachmentsByUploadId: boolean;
		supportsCalculate: boolean;
		supportsStatistics: boolean;
		suspended: boolean;
		templates: FeatureTemplate[];
		timeInfo: TimeInfo;
		type: string;
		typeIdField: string;
		types: FeatureType[];
		version: number;
		visibleAtMapScale: boolean;
		constructor(url: string, options?: esri.FeatureLayerOptions): this;
		constructor(featureCollectionObject: any, options?: esri.FeatureLayerOptions): this;
		addAttachment(
		objectId: number, formNode: HTMLFormElement, callback?: Function, errback?: Function
	): any;
		applyEdits(
		adds?: Graphic[], updates?: Graphic[], deletes?: Graphic[], callback?: Function, errback?: Function
	): any;
		clearSelection(): FeatureLayer;
		deleteAttachments(
		objectId: number, attachmentIds: number[], callback?: Function, errback?: Function
	): any;
		getAttributionData(): any;
		getDefinitionExpression(): string;
		getDomain(fieldName: string, options?: any): Domain;
		getEditCapabilities(options?: any): any;
		getEditInfo(feature: Graphic, options?: any): any;
		getEditSummary(feature: Graphic, options?: any): string;
		getField(fieldName: string): Field;
		getMaxAllowableOffset(): number;
		getOrderByFields(): string[];
		getSelectedFeatures(): Graphic[];
		getSelectionSymbol(): Symbol;
		getTimeDefinition(): TimeExtent;
		getType(feature: Graphic): FeatureType;
		hasXYFootprint(): boolean;
		isEditable(): boolean;
		isVisibleAtScale(scale: number): boolean;
		queryAttachmentInfos(objectId: number, callback?: Function, errback?: Function): any;
		queryCount(query: Query, callback?: Function, errback?: Function): any;
		queryExtent(query: Query, callback?: Function, errback?: Function): any;
		queryFeatures(query: Query, callback?: Function, errback?: Function): any;
		queryIds(query: Query, callback?: Function, errback?: Function): any;
		queryRelatedFeatures(relQuery: RelationshipQuery, callback?: Function, errback?: Function): any;
		redraw(): void;
		refresh(): void;
		resume(): void;
		selectFeatures(
		query: Query, selectionMethod?: number, callback?: Function, errback?: Function
	): any;
		setAutoGeneralize(enable: boolean): FeatureLayer;
		setDefinitionExpression(expression: string): FeatureLayer;
		setEditable(editable: boolean): FeatureLayer;
		setGDBVersion(versionName: string): FeatureLayer;
		setInfoTemplate(infoTemplate: InfoTemplate): void;
		setLabelingInfo(labelingInfo: LabelClass[]): void;
		setMaxAllowableOffset(offset: number): void;
		setMaxScale(scale: number): void;
		setMinScale(scale: number): void;
		setOpacity(opacity: number): void;
		setRenderer(renderer: Renderer): void;
		setScaleRange(minScale: number, maxScale: number): void;
		setSelectionSymbol(symbol: Symbol): FeatureLayer;
		setShowLabels(showLabels: boolean): void;
		setTimeDefinition(definition: TimeExtent): FeatureLayer;
		setTimeOffset(offsetValue: number, offsetUnits: string): FeatureLayer;
		setUseMapTime(update: boolean): void;
		suspend(): void;
		toJson(): any;
		on(
		type: "add-attachment-complete", listener: (event: {
		result: FeatureEditResult,
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "before-apply-edits", listener: (
		event: {
		adds: Graphic[],
		deletes: Graphic[],
		updates: Graphic[],
		target: FeatureLayer
	}
	) => void
	): esri.Handle;
		on(
		type: "capabilities-change", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "dbl-click", listener: (event: {
		event: any,
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "delete-attachments-complete", listener: (event: {
		results: any[],
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "edits-complete", listener: (
		event: {
		adds: FeatureEditResult[],
		deletes: FeatureEditResult[],
		updates: FeatureEditResult[],
		target: FeatureLayer
	}
	) => void
	): esri.Handle;
		on(
		type: "gdb-version-change", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "labeling-info-change", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "query-attachment-infos-complete", listener: (event: {
		info: any[],
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "query-count-complete", listener: (event: {
		count: number,
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "query-extent-complete", listener: (event: {
		count: number,
		extent: Extent,
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "query-features-complete", listener: (event: {
		featureSet: FeatureSet,
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "query-ids-complete", listener: (event: {
		objectIds: number[],
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "query-limit-exceeded", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "query-related-features-complete", listener: (event: {
		relatedFeatures: any,
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "resume", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "scale-range-change", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "scale-visibility-change", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "selection-clear", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "selection-complete", listener: (
		event: {
		features: Graphic[],
		method: number,
		target: FeatureLayer
	}
	) => void
	): esri.Handle;
		on(
		type: "show-labels-change", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "suspend", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "update-end", listener: (event: {
		error: Error,
		info: any,
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(
		type: "update-start", listener: (event: {
		target: FeatureLayer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/FeatureTemplate' {
				declare class FeatureTemplate  {
		TOOL_ARROW: any;
		TOOL_AUTO_COMPLETE_POLYGON: any;
		TOOL_CIRCLE: any;
		TOOL_ELLIPSE: any;
		TOOL_FREEHAND: any;
		TOOL_LINE: any;
		TOOL_NONE: any;
		TOOL_POINT: any;
		TOOL_POLYGON: any;
		TOOL_RECTANGLE: any;
		TOOL_TRIANGLE: any;
		description: string;
		drawingTool: string;
		name: string;
		prototype: Graphic;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/FeatureType' {
				declare class FeatureType  {
		domains: any;
		id: number;
		name: string;
		templates: FeatureTemplate[];
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/Field' {
				declare class Field  {
		alias: string;
		domain: Domain;
		editable: boolean;
		length: number;
		name: string;
		nullable: boolean;
		type: string
	}

	declare module.exports: undefined


}

declare module 'esri/layers/GeoRSSLayer' {
				declare class GeoRSSLayer extends Layer {
		copyright: string;
		defaultVisibility: boolean;
		description: string;
		items: Graphic[];
		name: string;
		url: string;
		constructor(url: string, options?: esri.GeoRSSLayerOptions): this;
		getFeatureLayers(): FeatureLayer[];
		on(
		type: "refresh", listener: (event: {
		target: GeoRSSLayer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/GraphicsLayer' {
				declare class GraphicsLayer extends Layer {
		dataAttributes: string | string[];
		graphics: Graphic[];
		infoTemplate: InfoTemplate;
		renderer: Renderer;
		styling: boolean;
		surfaceType: string;
		constructor(): this;
		constructor(options?: esri.GraphicsLayerOptions): this;
		add(graphic: Graphic): Graphic;
		clear(): void;
		disableMouseEvents(): void;
		enableMouseEvents(): void;
		redraw(): void;
		remove(graphic: Graphic): Graphic;
		setInfoTemplate(infoTemplate: InfoTemplate): void;
		setOpacity(opacity: number): void;
		setRenderer(renderer: Renderer): void;
		on(
		type: "click", listener: (event: {
		event: any,
		target: GraphicsLayer
	}) => void
	): esri.Handle;
		on(
		type: "dbl-click", listener: (event: {
		target: GraphicsLayer
	}) => void
	): esri.Handle;
		on(
		type: "graphic-add", listener: (event: {
		graphic: Graphic,
		target: GraphicsLayer
	}) => void
	): esri.Handle;
		on(
		type: "graphic-draw", listener: (event: {
		graphic: Graphic,
		target: GraphicsLayer
	}) => void
	): esri.Handle;
		on(
		type: "graphic-node-add", listener: (
		event: {
		graphic: Graphic,
		node: HTMLElement,
		target: GraphicsLayer
	}
	) => void
	): esri.Handle;
		on(
		type: "graphic-node-remove", listener: (
		event: {
		graphic: Graphic,
		node: HTMLElement,
		target: GraphicsLayer
	}
	) => void
	): esri.Handle;
		on(
		type: "graphic-remove", listener: (event: {
		graphic: Graphic,
		target: GraphicsLayer
	}) => void
	): esri.Handle;
		on(
		type: "graphics-clear", listener: (event: {
		target: GraphicsLayer
	}) => void
	): esri.Handle;
		on(type: "mouse-down", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "mouse-drag", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "mouse-move", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "mouse-out", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "mouse-over", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "mouse-up", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/ImageParameters' {
				declare class ImageParameters  {
		LAYER_OPTION_EXCLUDE: any;
		LAYER_OPTION_HIDE: any;
		LAYER_OPTION_INCLUDE: any;
		LAYER_OPTION_SHOW: any;
		bbox: Extent;
		dpi: number;
		format: string;
		height: number;
		imageSpatialReference: SpatialReference;
		layerDefinitions: string[];
		layerIds: number[];
		layerOption: string;
		layerTimeOptions: LayerTimeOptions[];
		timeExtent: TimeExtent;
		transparent: boolean;
		width: number;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/ImageServiceParameters' {
				declare class ImageServiceParameters  {
		INTERPOLATION_BILINEAR: any;
		INTERPOLATION_CUBICCONVOLUTION: any;
		INTERPOLATION_MAJORITY: any;
		INTERPOLATION_NEARESTNEIGHBOR: any;
		bandIds: number[];
		compressionQuality: number;
		extent: Extent;
		format: string;
		height: number;
		interpolation: string;
		mosaicRule: MosaicRule;
		noData: number;
		renderingRule: RasterFunction;
		timeExtent: TimeExtent;
		width: number;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/InheritedDomain' {
				declare class InheritedDomain extends Domain {
		
	}

	declare module.exports: undefined


}

declare module 'esri/layers/JoinDataSource' {
				declare class JoinDataSource extends DataSource {
		joinType: string;
		leftTableKey: string;
		leftTableSource: LayerSource;
		rightTableKey: string;
		rightTableSource: LayerSource;
		constructor(json?: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/KMLFolder' {
				declare class KMLFolder  {
		description: string;
		featureInfos: any[];
		id: number;
		name: string;
		parentFolderId: number;
		snippet: string;
		subFolderIds: number[];
		visibility: number
	}

	declare module.exports: undefined


}

declare module 'esri/layers/KMLGroundOverlay' {
				declare class KMLGroundOverlay  {
		description: string;
		extent: Extent;
		height: number;
		href: string;
		id: number;
		name: string;
		scale: number;
		snippet: string;
		visibility: number;
		width: number
	}

	declare module.exports: undefined


}

declare module 'esri/layers/KMLLayer' {
				declare class KMLLayer extends Layer {
		featureInfos: any[];
		folders: KMLFolder[];
		linkInfo: any;
		url: string;
		constructor(id: string, url: string, options?: esri.KMLLayerOptions): this;
		getFeature(featureInfo: any): any;
		getLayers(): Layer[];
		setFolderVisibility(folder: KMLFolder, isVisible: boolean): void;
		on(
		type: "refresh", listener: (event: {
		target: KMLLayer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/LOD' {
				declare class LOD  {
		level: number;
		levelValue: string;
		resolution: number;
		scale: number
	}

	declare module.exports: undefined


}

declare module 'esri/layers/LabelClass' {
				declare class LabelClass  {
		fieldInfos: any[];
		labelExpression: string;
		labelExpressionInfo: any;
		labelPlacement: string;
		maxScale: number;
		minScale: number;
		sizeInfo: any;
		symbol: TextSymbol;
		useCodedValues: boolean;
		where: string;
		constructor(json?: Object): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/LabelLayer' {
				declare class LabelLayer extends GraphicsLayer {
		constructor(params?: esri.LabelLayerOptions): this;
		addFeatureLayer(
		featureLayer: FeatureLayer, renderer?: SimpleRenderer | UniqueValueRenderer | ClassBreaksRenderer, textExpression?: any
	): void;
		getFeatureLayer(index: number): FeatureLayer
	}

	declare module.exports: undefined


}

declare module 'esri/layers/LayerDataSource' {
				declare class LayerDataSource extends LayerSource {
		dataSource: DataSource;
		constructor(json?: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/LayerDrawingOptions' {
				declare class LayerDrawingOptions  {
		labelingInfo: LabelClass[];
		renderer: Renderer;
		scaleSymbols: boolean;
		showLabels: boolean;
		transparency: number;
		constructor(json?: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/LayerInfo' {
				declare class LayerInfo  {
		defaultVisibility: boolean;
		id: number;
		maxScale: number;
		minScale: number;
		name: string;
		parentLayerId: number;
		subLayerIds: number[]
	}

	declare module.exports: undefined


}

declare module 'esri/layers/LayerMapSource' {
				declare class LayerMapSource extends LayerSource {
		gdbVersion: string;
		mapLayerId: number;
		constructor(json?: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/LayerSource' {
				declare class LayerSource  {
		type: string;
		constructor(json?: Object): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/LayerTimeOptions' {
				declare class LayerTimeOptions  {
		timeDataCumulative: boolean;
		timeOffset: number;
		timeOffsetUnits: string;
		useTime: boolean
	}

	declare module.exports: undefined


}

declare module 'esri/layers/MapImage' {
				declare class MapImage  {
		extent: Extent;
		height: number;
		href: string;
		scale: number;
		width: number;
		constructor(options: esri.MapImageOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/MapImageLayer' {
				declare class MapImageLayer extends Layer {
		constructor(options?: any): this;
		addImage(mapImage: MapImage): void;
		getImages(): MapImage[];
		removeAllImages(): void;
		removeImage(mapImage: MapImage): void
	}

	declare module.exports: undefined


}

declare module 'esri/layers/MosaicRule' {
				declare class MosaicRule  {
		METHOD_ATTRIBUTE: any;
		METHOD_CENTER: any;
		METHOD_LOCKRASTER: any;
		METHOD_NADIR: any;
		METHOD_NONE: any;
		METHOD_NORTHWEST: any;
		METHOD_SEAMLINE: any;
		METHOD_VIEWPOINT: any;
		OPERATION_BLEND: any;
		OPERATION_FIRST: any;
		OPERATION_LAST: any;
		OPERATION_MAX: any;
		OPERATION_MEAN: any;
		OPERATION_MIN: any;
		OPERATION_SUM: any;
		ascending: boolean;
		lockRasterIds: number[];
		method: string;
		multidimensionalDefinition: DimensionalDefinition[];
		objectIds: number[];
		operation: string;
		sortField: string;
		sortValue: string;
		viewpoint: Point;
		where: string;
		constructor(): this;
		constructor(json: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/OpenStreetMapLayer' {
				declare class OpenStreetMapLayer extends TiledMapServiceLayer {
		copyright: string;
		constructor(options?: esri.OpenStreetMapLayerOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/PixelBlock' {
				declare class PixelBlock  {
		height: number;
		mask: any[];
		pixels: number[][];
		pixelType: string;
		statistics: any[];
		width: number;
		constructor(options: esri.PixelBlockOptions): this;
		addData(planeData: any): void;
		getAsRGBA(): any[];
		getAsRGBAFloat(): any[];
		getPlaneCount(): number
	}

	declare module.exports: undefined


}

declare module 'esri/layers/QueryDataSource' {
				declare class QueryDataSource extends DataSource {
		geometryType: string;
		oidFields: string[];
		query: string;
		spatialReference: SpatialReference;
		workspaceId: string;
		constructor(json?: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/RangeDomain' {
				declare class RangeDomain extends Domain {
		maxValue: number;
		minValue: number
	}

	declare module.exports: undefined


}

declare module 'esri/layers/RasterDataSource' {
				declare class RasterDataSource extends DataSource {
		dataSourceName: string;
		workspaceId: string;
		constructor(json?: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/RasterFunction' {
				declare class RasterFunction  {
		arguments: any;
		functionArguments: any;
		functionName: string;
		outputPixelType: string;
		variableName: string;
		constructor(): this;
		constructor(json: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/RasterLayer' {
				declare class RasterLayer extends Layer {
		pixelFilter: Function;
		constructor(url: string, options?: esri.RasterLayerOptions): this;
		getContext(): any;
		setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
		setPixelFilter(pixelFilter: Function): void;
		setUseMapTime(use: boolean, doNotRefresh?: boolean): void
	}

	declare module.exports: undefined


}

declare module 'esri/layers/StreamLayer' {
				declare class StreamLayer extends FeatureLayer {
		maximumTrackPoints: number;
		purgeInterval: number;
		socket: any;
		socketUrl: string;
		constructor(url: string, options?: esri.StreamLayerOptions1): this;
		constructor(featureCollectionObject: any, options?: esri.StreamLayerOptions2): this;
		connect(callback?: Function): void;
		disconnect(callback?: Function): void;
		getDefinitionExpression(): string;
		getGeometryDefinition(): Extent;
		getLatestObservations(): Graphic;
		getUniqueValues(fieldName: string): any[];
		setGeometryDefinition(extent: Extent): void;
		setMaximumTrackPoints(value: number): void;
		setPurgeInterval(interval: number): Layer;
		on(
		type: "attempt-reconnect", listener: (event: {
		count: number,
		url: string,
		target: StreamLayer
	}) => void
	): esri.Handle;
		on(
		type: "connect", listener: (event: {
		target: StreamLayer
	}) => void
	): esri.Handle;
		on(
		type: "connection-error", listener: (event: {
		error: Error,
		target: StreamLayer
	}) => void
	): esri.Handle;
		on(
		type: "disconnect", listener: (event: {
		target: StreamLayer
	}) => void
	): esri.Handle;
		on(
		type: "filter-change", listener: (event: {
		error: Error,
		filter: any,
		target: StreamLayer
	}) => void
	): esri.Handle;
		on(
		type: "message", listener: (event: {
		message: any,
		target: StreamLayer
	}) => void
	): esri.Handle;
		on(
		type: "purge-interval-change", listener: (event: {
		target: StreamLayer
	}) => void
	): esri.Handle;
		on(
		type: "update-start", listener: (event: {
		target: StreamLayer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/TableDataSource' {
				declare class TableDataSource extends DataSource {
		dataSourceName: string;
		gdbVersion: string;
		workspaceId: string;
		constructor(json?: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/TileInfo' {
				declare class TileInfo  {
		dpi: number;
		format: string;
		height: number;
		lods: LOD[];
		origin: Point;
		spatialReference: SpatialReference;
		width: number;
		constructor(properties: any): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/TiledMapServiceLayer' {
				declare class TiledMapServiceLayer extends Layer {
		fullExtent: Extent;
		initialExtent: Extent;
		spatialReference: SpatialReference;
		tileInfo: TileInfo;
		constructor(): this;
		getTileUrl(level: number, row: number, column: number): string;
		refresh(): void;
		setExclusionAreas(): any[]
	}

	declare module.exports: undefined


}

declare module 'esri/layers/TimeInfo' {
				declare class TimeInfo  {
		UNIT_CENTURIES: any;
		UNIT_DAYS: any;
		UNIT_DECADES: any;
		UNIT_HOURS: any;
		UNIT_MILLISECONDS: any;
		UNIT_MINUTES: any;
		UNIT_MONTHS: any;
		UNIT_SECONDS: any;
		UNIT_UNKNOWN: any;
		UNIT_WEEKS: any;
		UNIT_YEARS: any;
		endTimeField: string;
		exportOptions: LayerTimeOptions;
		startTimeField: string;
		timeExtent: TimeExtent;
		timeInterval: number;
		timeIntervalUnits: string;
		timeReference: TimeReference;
		trackIdField: string
	}

	declare module.exports: undefined


}

declare module 'esri/layers/TimeReference' {
				declare class TimeReference  {
		respectsDaylightSaving: boolean;
		timeZone: string
	}

	declare module.exports: undefined


}

declare module 'esri/layers/VectorTileLayer' {
				declare class VectorTileLayer extends Layer {
		fullExtent: Extent;
		initialExtent: Extent;
		spatialReference: SpatialReference;
		tileInfo: TileInfo;
		url: string;
		constructor(url: string | any, options?: esri.VectorTileLayerOptions): this;
		getStyle(): any;
		setStyle(styleUrl: string | any): void;
		on(
		type: "style-change", listener: (event: {
		style: any,
		target: VectorTileLayer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/WCSConnection' {
				declare class WCSConnection  {
		INTERPOLATION_BILINEAR: any;
		INTERPOLATION_CUBICCONVOLUTION: any;
		INTERPOLATION_NEARESTNEIGHBOR: any;
		coverages: WCSCoverageDescription[];
		multidimensionalDefinition: DimensionalDefinition[];
		name: string;
		onlineResources: any;
		profiles: string[];
		supportedFormats: string[];
		supportedInterpolations: number[];
		supportedVersions: string[];
		url: string;
		version: string;
		constructor(url: string, options?: esri.WCSConnectionOptions): this;
		on(
		type: "onConnected", listener: (event: {
		target: WCSConnection
	}) => void
	): esri.Handle;
		on(
		type: "onConnectionFailed", listener: (event: {
		error: Error,
		target: WCSConnection
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/WCSCoverageDescription' {
				declare class WCSCoverageDescription  {
		INTERPOLATION_BILINEAR: any;
		INTERPOLATION_CUBICCONVOLUTION: any;
		INTERPOLATION_NEARESTNEIGHBOR: any;
		bandInfo: string[];
		columns: number;
		description: string;
		extent: Extent;
		id: string;
		lonLatEnvelope: Extent;
		multiDimensionalInfo: any;
		nativeCoverageDescription: any;
		resolution: Point;
		rows: number;
		supportedFormats: string[];
		supportedInterpolations: number[];
		timeInfo: TimeInfo;
		version: string;
		constructor(coverageDocument: string, version: string): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/WCSLayer' {
				declare class WCSLayer  {
		INTERPOLATION_BILINEAR: any;
		INTERPOLATION_CUBICCONVOLUTION: any;
		INTERPOLATION_NEARESTNEIGHBOR: any;
		bandIds: number[];
		coverageDescription: WCSCoverageDescription;
		coverageId: string;
		extent: Extent;
		format: string;
		interpolation: number;
		loaded: boolean;
		multidimensionalDefinition: DimensionalDefinition[];
		opacity: number;
		pixelFilter: Function;
		pixelType: string;
		projectedFullExtent: Extent;
		suspended: boolean;
		timeInfo: TimeInfo;
		url: string;
		version: string;
		visible: boolean;
		wcsConnection: WCSConnection;
		constructor(url: string, options?: esri.WCSLayerOptions): this;
		getContext(): any;
		identify(mapPoint: Point): any;
		resume(): void;
		setOpacity(opacity: number): void;
		setPixelFilter(pixelFilter: Function, doNotRefresh?: boolean): void;
		setUseMapTime(use: boolean): void;
		setVisibility(isVisible: boolean): void;
		suspend(): void;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "load", listener: (event: {
		layer: Layer,
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "opacity-change", listener: (event: {
		opacity: number,
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "refresh-interval-change", listener: (event: {
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "resume", listener: (event: {
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "scale-range-change", listener: (event: {
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "scale-visibility-change", listener: (event: {
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "suspend", listener: (event: {
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "update-end", listener: (event: {
		error: Error,
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "update-start", listener: (event: {
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(
		type: "visibility-change", listener: (event: {
		visible: boolean,
		target: WCSLayer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/WFSLayer' {
				declare class WFSLayer extends GraphicsLayer {
		customParameters: any;
		fields: Field[];
		fullExtent: Extent;
		geometryType: string;
		graphics: Graphic[];
		id: string;
		infoTemplate: InfoTemplate;
		renderer: Renderer;
		visible: boolean;
		constructor(options: esri.WFSLayerOptions): this;
		fromJson(json: Object): void;
		redraw(): void;
		refresh(): void;
		setCustomParameters(customParameters: any): void;
		setLineSymbol(): void;
		setPointSymbol(): void;
		setPolygonSymbol(): void;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/layers/WMSLayer' {
				declare class WMSLayer extends DynamicMapServiceLayer {
		allExtents: Extent[];
		copyright: string;
		customLayerParameters: any;
		customParameters: any;
		description: string;
		extent: Extent;
		featureInfoFormat: string;
		getFeatureInfoURL: string;
		getMapURL: string;
		imageFormat: string;
		layerInfos: WMSLayerInfo[];
		maxHeight: number;
		maxWidth: number;
		spatialReference: SpatialReference;
		spatialReferences: number[];
		title: string;
		version: string;
		visibleLayers: string[];
		constructor(url: string, options?: esri.WMSLayerOptions): this;
		getImageFormat(): string;
		setCustomParameters(customParameters: any, customLayerParameters?: any): void;
		setImageFormat(format: string): void;
		setImageTransparency(transparency: boolean): void;
		setVisibleLayers(layers: string[]): void
	}

	declare module.exports: undefined


}

declare module 'esri/layers/WMSLayerInfo' {
				declare class WMSLayerInfo  {
		allExtents: Extent[];
		description: string;
		extent: Extent;
		legendURL: string;
		name: string;
		queryable: boolean;
		showPopup: boolean;
		spatialReferences: number[];
		subLayers: WMSLayerInfo[];
		title: string;
		constructor(options?: esri.WMSLayerInfoOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/WMTSLayer' {
				declare class WMTSLayer extends TiledMapServiceLayer {
		copyright: string;
		customLayerParameters: any;
		customParameters: any;
		description: string;
		format: string;
		fullExtent: Extent;
		initialExtent: Extent;
		layerInfos: any[];
		serviceMode: string;
		spatialReference: SpatialReference;
		tileInfo: TileInfo;
		title: string;
		version: string;
		constructor(url: string, options?: esri.WMTSLayerOptions): this;
		setActiveLayer(WMTSLayerInfo: WMTSLayerInfo): void;
		setCustomParameters(customParameters: any, customLayerParameters?: any): void
	}

	declare module.exports: undefined


}

declare module 'esri/layers/WMTSLayerInfo' {
				declare class WMTSLayerInfo  {
		constructor(options: esri.WMTSLayerInfoOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/WebTiledLayer' {
				declare class WebTiledLayer extends TiledMapServiceLayer {
		copyright: string;
		fullExtent: Extent;
		initialExtent: Extent;
		spatialReference: SpatialReference;
		tileInfo: TileInfo;
		tileServers: string[];
		constructor(urlTemplate: string, options?: esri.WebTiledLayerOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/layers/layer' {
				declare class Layer  {
		attributionDataUrl: string;
		className: string;
		credential: Credential;
		hasAttributionData: boolean;
		id: string;
		loaded: boolean;
		loadError: Error;
		maxScale: number;
		minScale: number;
		opacity: number;
		refreshInterval: number;
		showAttribution: boolean;
		suspended: boolean;
		url: string;
		visible: boolean;
		visibleAtMapScale: boolean;
		constructor(options?: esri.LayerOptions): this;
		attr(name: string, value: string): Layer;
		getAttributionData(): any;
		getMap(): Map;
		getNode(): HTMLElement;
		hide(): void;
		isVisibleAtScale(scale: number): boolean;
		resume(): void;
		setMaxScale(scale: number): void;
		setMinScale(scale: number): void;
		setOpacity(opacity: number): void;
		setRefreshInterval(interval: number): Layer;
		setScaleRange(minScale: number, maxScale: number): void;
		setVisibility(isVisible: boolean): void;
		show(): void;
		suspend(): void;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: Layer
	}) => void
	): esri.Handle;
		on(
		type: "load", listener: (event: {
		layer: Layer,
		target: Layer
	}) => void
	): esri.Handle;
		on(
		type: "opacity-change", listener: (event: {
		opacity: number,
		target: Layer
	}) => void
	): esri.Handle;
		on(
		type: "refresh-interval-change", listener: (event: {
		target: Layer
	}) => void
	): esri.Handle;
		on(type: "resume", listener: (event: {
		target: Layer
	}) => void): esri.Handle;
		on(
		type: "scale-range-change", listener: (event: {
		target: Layer
	}) => void
	): esri.Handle;
		on(
		type: "scale-visibility-change", listener: (event: {
		target: Layer
	}) => void
	): esri.Handle;
		on(type: "suspend", listener: (event: {
		target: Layer
	}) => void): esri.Handle;
		on(type: "update", listener: (event: {
		target: Layer
	}) => void): esri.Handle;
		on(
		type: "update-end", listener: (event: {
		error: Error,
		target: Layer
	}) => void
	): esri.Handle;
		on(
		type: "update-start", listener: (event: {
		target: Layer
	}) => void
	): esri.Handle;
		on(
		type: "visibility-change", listener: (event: {
		visible: boolean,
		target: Layer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/layers/pixelfilters/StretchFilter' {
				declare class StretchFilter  {
		dra: boolean;
		gamma: number[];
		max: number;
		maxPercent: number;
		min: number;
		minPercent: number;
		numberOfStandardDeviations: number;
		outputPixelType: string;
		statistics: any[][];
		stretchType: number;
		useGamma: boolean;
		constructor(options?: esri.StretchFilterOptions): this;
		filter(pixelData: any): void
	}

	declare module.exports: undefined


}

declare module 'esri/map' {
				declare class Map  {
		attribution: Attribution;
		autoResize: boolean;
		basemapLayerIds: string[];
		extent: Extent;
		fadeOnZoom: boolean;
		force3DTransforms: boolean;
		geographicExtent: Extent;
		graphics: GraphicsLayer;
		graphicsLayerIds: string[];
		height: number;
		id: string;
		infoWindow: InfoWindowBase;
		isClickRecenter: boolean;
		isDoubleClickZoom: boolean;
		isKeyboardNavigation: boolean;
		isPan: boolean;
		isPanArrows: boolean;
		isRubberBandZoom: boolean;
		isScrollWheelZoom: boolean;
		isShiftDoubleClickZoom: boolean;
		isZoomSlider: boolean;
		layerIds: string[];
		loaded: boolean;
		navigationMode: string;
		position: Point;
		root: Node;
		showAttribution: boolean;
		snappingManager: SnappingManager;
		spatialReference: SpatialReference;
		timeExtent: TimeExtent;
		visible: boolean;
		width: number;
		constructor(divId: Node | string, options?: esri.MapOptions): this;
		addLayer(layer: Layer, index?: number): Layer;
		addLayers(layers: Layer[]): void;
		attr(name: string, value: string): Map;
		centerAndZoom(mapPoint: Point, levelOrFactor: number): any;
		centerAt(mapPoint: Point): any;
		destroy(): void;
		disableClickRecenter(): void;
		disableDoubleClickZoom(): void;
		disableKeyboardNavigation(): void;
		disableMapNavigation(): void;
		disablePan(): void;
		disableRubberBandZoom(): void;
		disableScrollWheelZoom(): void;
		disableShiftDoubleClickZoom(): void;
		disableSnapping(): void;
		enableClickRecenter(): void;
		enableDoubleClickZoom(): void;
		enableKeyboardNavigation(): void;
		enableMapNavigation(): void;
		enablePan(): void;
		enableRubberBandZoom(): void;
		enableScrollWheelZoom(): void;
		enableShiftDoubleClickZoom(): void;
		enableSnapping(snapOptions?: any): SnappingManager;
		getBasemap(): string;
		getInfoWindowAnchor(screenCoords: ScreenPoint): string;
		getLayer(id: string): Layer;
		getLayersVisibleAtScale(): Layer[];
		getLevel(): number;
		getMaxScale(): number;
		getMaxZoom(): number;
		getMinScale(): number;
		getMinZoom(): number;
		getScale(): number;
		getZoom(): number;
		hidePanArrows(): void;
		hideZoomSlider(): void;
		panDown(): any;
		panLeft(): any;
		panLowerLeft(): any;
		panLowerRight(): any;
		panRight(): any;
		panUp(): any;
		panUpperLeft(): any;
		panUpperRight(): any;
		removeAllLayers(): void;
		removeLayer(layer: Layer): void;
		reorderLayer(layer: Layer, index: number): void;
		reposition(): void;
		resize(immediate?: boolean): void;
		setBasemap(basemap: string): void;
		setExtent(extent: Extent, fit?: boolean): any;
		setInfoWindowOnClick(enabled: boolean): void;
		setLevel(level: number): any;
		setMapCursor(cursor: string): void;
		setScale(scale: number): any;
		setTimeExtent(timeExtent: TimeExtent): void;
		setTimeSlider(timeSlider: TimeSlider): void;
		setVisibility(visible: boolean): Map;
		setZoom(zoom: number): any;
		showPanArrows(): void;
		showZoomSlider(): void;
		toMap(screenPoint: ScreenPoint): Point;
		toScreen(mapPoint: Point): ScreenPoint;
		on(
		type: "basemap-change", listener: (event: {
		current: any,
		previous: any,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "before-unload", listener: (event: {
		map: Map,
		target: Map
	}) => void
	): esri.Handle;
		on(type: "click", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "dbl-click", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(
		type: "extent-change", listener: (
		event: {
		delta: Point,
		extent: Extent,
		levelChange: boolean,
		lod: LOD,
		target: Map
	}
	) => void
	): esri.Handle;
		on(type: "key-down", listener: (event: KeyboardEvent) => void): esri.Handle;
		on(type: "key-up", listener: (event: KeyboardEvent) => void): esri.Handle;
		on(
		type: "layer-add", listener: (event: {
		layer: Layer,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "layer-add-result", listener: (event: {
		error: Error,
		layer: Layer,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "layer-remove", listener: (event: {
		layer: Layer,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "layer-reorder", listener: (event: {
		index: number,
		layer: Layer,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "layer-resume", listener: (event: {
		layer: Layer,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "layers-add-result", listener: (event: {
		layers: any[],
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "layers-removed", listener: (event: {
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "layers-reordered", listener: (event: {
		layerIds: string[],
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "layer-suspend", listener: (event: {
		layer: Layer,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "load", listener: (event: {
		map: Map,
		target: Map
	}) => void
	): esri.Handle;
		on(type: "mouse-down", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "mouse-drag", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(
		type: "mouse-drag-end", listener: (event: esri.AGSMouseEvent) => void
	): esri.Handle;
		on(
		type: "mouse-drag-start", listener: (event: esri.AGSMouseEvent) => void
	): esri.Handle;
		on(type: "mouse-move", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "mouse-out", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "mouse-over", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(type: "mouse-up", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
		on(
		type: "mouse-wheel", listener: (event: esri.AGSMouseEvent) => void
	): esri.Handle;
		on(
		type: "pan", listener: (event: {
		delta: Point,
		extent: Extent,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "pan-end", listener: (event: {
		delta: Point,
		extent: Extent,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "pan-start", listener: (event: {
		extent: Extent,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "reposition", listener: (event: {
		x: number,
		y: number,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "resize", listener: (
		event: {
		extent: Extent,
		height: number,
		width: number,
		target: Map
	}
	) => void
	): esri.Handle;
		on(
		type: "time-extent-change", listener: (event: {
		timeExtent: TimeExtent,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "unload", listener: (event: {
		map: Map,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "update-end", listener: (event: {
		error: Error,
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "update-start", listener: (event: {
		target: Map
	}) => void
	): esri.Handle;
		on(
		type: "zoom", listener: (
		event: {
		anchor: Point,
		extent: Extent,
		zoomFactor: number,
		target: Map
	}
	) => void
	): esri.Handle;
		on(
		type: "zoom-end", listener: (
		event: {
		anchor: Point,
		extent: Extent,
		level: number,
		zoomFactor: number,
		target: Map
	}
	) => void
	): esri.Handle;
		on(
		type: "zoom-start", listener: (
		event: {
		anchor: Point,
		extent: Extent,
		level: number,
		zoomFactor: number,
		target: Map
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/DataSourceProxy' {
				declare class DataSourceProxy  {
		displayFieldName: string;
		fields: Field[];
		geometryType: string;
		id: string;
		isBroken: boolean;
		mapWidgetId: string;
		name: string;
		objectIdFieldName: string;
		supportsSelection: boolean;
		typeIdFieldName: string;
		types: FeatureType[];
		clearSelection(): void;
		executeQuery(query: Query): any;
		getAdvancedQueryCapabilities(): any;
		getAssociatedSelectionDataSourceId(): any;
		getPopupInfo(): any;
		getRenderer(): any;
		getTypeFromFeature(feature: Graphic): number;
		getValueFromFeature(feature: Graphic, fieldName: string): number | string;
		selectFeatures(query: Query): void;
		selectFeaturesByObjectIds(objectIds: string[]): void
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/ExtensionBase' {
				declare class ExtensionBase  {
		CIRCLE: any;
		EXTENT: any;
		FREEHAND_POLYGON: any;
		FREEHAND_POLYLINE: any;
		LINE: any;
		POINT: any;
		POLYGON: any;
		POLYLINE: any;
		isNative: boolean;
		portalHelperServices: any;
		portalUrl: string;
		getDataSourceProxies(): any;
		getDataSourceProxy(dataSourceId: string): any;
		getMapWidgetProxies(): any;
		getMapWidgetProxy(mapWidgetId: string): any;
		hostInitializationError(err: Error): void;
		hostReady(): void;
		mapWidgetAdded(mapWidgetProxy: MapWidgetProxy): void;
		mapWidgetRemoved(mapWidgetId: string): void;
		on(
		type: "data-source-added", listener: (event: {
		dataSourceProxy: any,
		target: ExtensionBase
	}) => void
	): esri.Handle;
		on(
		type: "data-source-removed", listener: (event: {
		dataSourceId: string,
		target: ExtensionBase
	}) => void
	): esri.Handle;
		on(
		type: "host-ready", listener: (event: {
		target: ExtensionBase
	}) => void
	): esri.Handle;
		on(
		type: "initialization-error", listener: (event: {
		error: Error,
		target: ExtensionBase
	}) => void
	): esri.Handle;
		on(
		type: "map-widget-added", listener: (event: {
		mapWidgetProxy: MapWidgetProxy,
		target: ExtensionBase
	}) => void
	): esri.Handle;
		on(
		type: "map-widget-removed", listener: (event: {
		mapWidgetId: string,
		target: ExtensionBase
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/ExtensionConfigurationBase' {
				declare class ExtensionConfigurationBase extends ExtensionBase {
		config: any;
		readyToPersistConfig(ready: boolean): void
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/FeatureActionConfigurationProxy' {
				declare class FeatureActionConfigurationProxy extends ExtensionConfigurationBase {
		
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/FeatureActionFeatures' {
				declare class FeatureActionFeatures  {
		dataSourceProxy: DataSourceProxy;
		addFeature(featureOrObjectId: Graphic | number): void;
		addFeatures(featuresOrObjectIds: Graphic[] | number[]): void;
		clear(): void;
		contains(featureOrObjectId: Graphic | number): boolean;
		indexOf(featureOrObjectId: Graphic | number): number;
		removeFeature(featureOrObjectId: Graphic | number): void;
		removeFeatures(featuresOrObjectIds: Graphic[] | number[]): void
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/GraphicsLayerProxy' {
				declare class GraphicsLayerProxy  {
		maxScale: number;
		minScale: number;
		opacity: number;
		renderer: Renderer;
		visible: boolean;
		addOrUpdateGraphic(graphic: Graphic): void;
		addOrUpdateGraphics(graphics: Graphic[]): void;
		clear(): void;
		removeGraphic(graphic: Graphic): void;
		setMaxScale(maxScale: number): void;
		setMinScale(minScale: number): void;
		setOpacity(opacity: number): void;
		setRenderer(renderer: Renderer): void;
		setVisibility(visibility: boolean): void
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/MapToolConfigurationProxy' {
				declare class MapToolConfigurationProxy extends ExtensionConfigurationBase {
		
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/MapToolProxy' {
				declare class MapToolProxy  {
		availableDisplaySize: number;
		displaySize: any;
		mapWidgetProxy: MapWidgetProxy;
		previousState: any;
		activateMapDrawing(options: any): void;
		availableDisplaySizeChanged(availableSize: any): void;
		deactivateMapDrawing(): void;
		deactivateMapTool(state: any): void;
		mapDrawComplete(geometry: Geometry): void;
		setDisplaySize(size: any): any;
		on(
		type: "available-display-size-changed", listener: (event: {
		size: any,
		target: MapToolProxy
	}) => void
	): esri.Handle;
		on(
		type: "draw-complete", listener: (event: {
		geometry: Geometry,
		target: MapToolProxy
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/MapWidgetProxy' {
				declare class MapWidgetProxy  {
		id: string;
		name: string;
		spatialReference: SpatialReference;
		createGraphicsLayerProxy(options?: any): any;
		destroyGraphicsLayerProxy(graphicsLayerProxy: GraphicsLayerProxy): void;
		getMapExtent(): any;
		panTo(mapPoint: Point): void;
		setExtent(extent: Extent): void;
		subscribeToMapEvents(): void;
		unsubscribeFromMapEvents(): void;
		on(
		type: "map-extent-change", listener: (event: {
		extent: Extent,
		target: MapWidgetProxy
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/WidgetConfigurationProxy' {
				declare class WidgetConfigurationProxy extends ExtensionConfigurationBase {
		dataSourceSelectionChanged(dataSourceProxy: DataSourceProxy, dataSourceConfig: any): void;
		getDataSourceConfig(dataSourceProxyOrDataSourceId: DataSourceProxy | string): any;
		mapWidgetSelectionChanged(mapWidgetProxy: MapWidgetProxy): void;
		on(
		type: "data-source-selection-changed", listener: (
		event: {
		dataSourceConfig: any,
		dataSourceProxy: DataSourceProxy,
		target: WidgetConfigurationProxy
	}
	) => void
	): esri.Handle;
		on(
		type: "map-widget-selection-changed", listener: (
		event: {
		mapWidgetProxy: MapWidgetProxy,
		target: WidgetConfigurationProxy
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/WidgetProxy' {
				declare class WidgetProxy extends ExtensionBase {
		dataSourceConfigs: any[];
		featureActionFeatures: FeatureActionFeatures;
		hasDefaultFeatureAction: boolean;
		hasFeatureActions: boolean;
		activateDrawingToolbar(options?: any, mapWidgetProxy?: MapWidgetProxy): any;
		dataSourceExpired(dataSourceProxy: DataSourceProxy, associated?: any): void;
		deactivateDrawingToolbar(mapWidgetProxy?: MapWidgetProxy): void;
		drawingToolbarDeactivated(): void;
		executeDefaultFeatureAction(featuresOrObjectIds: Graphic[] | number[]): void;
		getDataSourceConfig(dataSourceProxyOrDataSourceId: DataSourceProxy | string): any;
		toolbarDrawComplete(geometry: Geometry): void;
		on(
		type: "data-source-expired", listener: (
		event: {
		dataSourceConfig: any,
		dataSourceProxy: DataSourceProxy,
		target: WidgetProxy
	}
	) => void
	): esri.Handle;
		on(
		type: "drawing-toolbar-deactivated", listener: (event: {
		target: WidgetProxy
	}) => void
	): esri.Handle;
		on(
		type: "toolbar-draw-complete", listener: (event: {
		geometry: Geometry,
		target: WidgetProxy
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/opsdashboard/featureActionProxy' {
				declare class featureActionProxy extends ExtensionBase {
		on(
		type: "execute", listener: (
		event: {
		config: any,
		dataSourceProxy: DataSourceProxy,
		featureSet: FeatureSet,
		target: featureActionProxy
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/plugins/FeatureLayerStatistics' {
				declare class FeatureLayerStatistics  {
		constructor(params: esri.FeatureLayerStatisticsOptions): this;
		add(layer: FeatureLayer, options?: any): void;
		getClassBreaks(params: any): any;
		getFieldStatistics(params: any): any;
		getHeatmapStatistics(options?: any): any;
		getHistogram(params: any): any;
		getSampleFeatures(options?: any): any;
		getSpatialStatistics(params: any): any;
		getSuggestedScaleRange(options?: any): any;
		getUniqueValues(params: any): any;
		remove(layer: FeatureLayer): void
	}

	declare module.exports: undefined


}

declare module 'esri/plugins/spatialIndex' {
					declare module.exports: undefined


}

declare module 'esri/process/Processor' {
				declare class Processor  {
		drawFeatures: boolean;
		fetchWithWorker: boolean;
		layers: FeatureLayer[];
		passFeatures: boolean;
		requireWorkerSupport: boolean;
		constructor(options?: esri.ProcessorOptions): this;
		addLayer(layer: FeatureLayer): void;
		removeLayer(layer: FeatureLayer): void;
		setMap(map: Map): void;
		start(): void;
		stop(): void;
		unsetMap(): void;
		on(
		type: "start", listener: (event: {
		target: Processor
	}) => void
	): esri.Handle;
		on(type: "stop", listener: (event: {
		target: Processor
	}) => void): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/process/SpatialIndex' {
				declare class SpatialIndex extends Processor {
		constructor(options?: esri.SpatialIndexOptions): this;
		intersects(
		test: Point | Graphic | Extent | number[], layerId?: string, getRects?: boolean
	): any;
		nearest(criteria: any, layerId?: string): any
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/BlendRenderer' {
				declare class BlendRenderer  {
		blendMode: string;
		fields: any[];
		normalizationField: string;
		opacityStops: any[];
		symbol: Symbol;
		constructor(params?: esri.BlendRendererOptions): this;
		setBlendMode(blendMode: string): void;
		setFields(fields: any[]): void;
		setNormalizationField(field: string): void;
		setOpacityStops(opacityStops: any[]): void;
		setSymbol(symbol: Symbol): void
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/ClassBreaksRenderer' {
				declare class ClassBreaksRenderer extends Renderer {
		attributeField: string;
		backgroundFillSymbol: FillSymbol;
		breaks: any[];
		classificationMethod: string;
		defaultSymbol: Symbol;
		infos: any[];
		isMaxInclusive: boolean;
		normalizationField: string;
		normalizationTotal: number;
		normalizationType: string;
		constructor(defaultSymbol: Symbol, attributeField: string | Function): this;
		constructor(json: Object): this;
		addBreak(minValueOrInfo: number | any, maxValue?: number, symbol?: Symbol): void;
		clearBreaks(): void;
		getBreakIndex(graphic: Graphic): number;
		getBreakInfo(graphic: Graphic): any;
		removeBreak(minValue: number, maxValue: number): void;
		setMaxInclusive(enable: boolean): void
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/DotDensityRenderer' {
				declare class DotDensityRenderer extends Renderer {
		backgroundColor: Color;
		dotShape: string;
		dotSize: number;
		dotValue: number;
		fields: any[];
		outline: LineSymbol;
		constructor(params: esri.DotDensityRendererOptions): this;
		setBackgroundColor(color: Color): void;
		setDotSize(size: number): void;
		setDotValue(value: number): void;
		setOutline(outline: LineSymbol): void
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/HeatmapRenderer' {
				declare class HeatmapRenderer extends Renderer {
		blurRadius: number;
		colors: string[];
		colorStops: any[];
		field: string;
		maxPixelIntensity: number;
		minPixelIntensity: number;
		constructor(options: esri.HeatmapRendererOptions): this;
		setBlurRadius(blurRadius: number): void;
		setColors(colors: string[]): void;
		setColorStops(stops: any[]): HeatmapRenderer;
		setField(field: string): void;
		setMaxPixelIntensity(maxPixelIntensity: number): void;
		setMinPixelIntensity(minPixelIntensity: number): void;
		toJson(): string
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/Renderer' {
				declare class Renderer  {
		colorInfo: any;
		opacityInfo: any;
		rotationInfo: any;
		sizeInfo: any;
		visualVariables: any[];
		getColor(graphic: Graphic, options?: any): Color;
		getOpacity(graphic: Graphic, options?: any): number;
		getRotationAngle(graphic: Graphic, options?: any): number;
		getSize(graphic: Graphic, options?: any): number;
		getSymbol(graphic: Graphic): Symbol;
		getVisualVariablesForType(type: string): any;
		hasVisualVariables(): boolean;
		setColorInfo(info: any): Renderer;
		setOpacityInfo(info: any): Renderer;
		setRotationInfo(info: any): Renderer;
		setSizeInfo(info: any): Renderer;
		setVisualVariables(visualParams: any[]): void;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/ScaleDependentRenderer' {
				declare class ScaleDependentRenderer extends Renderer {
		rangeType: string;
		rendererInfos: any;
		constructor(options?: esri.ScaleDependentRendererOptions): this;
		addRendererInfo(info: any): ScaleDependentRenderer;
		getRendererInfo(graphic: Graphic): any;
		getRendererInfoByScale(scale: number): any;
		getRenderInfoByZoom(zoom: number): any;
		setRendererInfos(infos: any): ScaleDependentRenderer
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/SimpleRenderer' {
				declare class SimpleRenderer extends Renderer {
		description: string;
		label: string;
		symbol: Symbol;
		constructor(symbol: Symbol): this;
		constructor(json: Object): this
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/SymbolAger' {
				declare class SymbolAger  {
		getAgedSymbol(symbol: Symbol, graphic: Graphic): Symbol
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/TemporalRenderer' {
				declare class TemporalRenderer extends Renderer {
		constructor(observationRenderer: Renderer, latestObservationRenderer?: Renderer, trackRenderer?: Renderer, observationAger?: SymbolAger): this;
		getSymbol(graphic: Graphic): Symbol
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/TimeClassBreaksAger' {
				declare class TimeClassBreaksAger extends SymbolAger {
		UNIT_DAYS: any;
		UNIT_HOURS: any;
		UNIT_MILLISECONDS: any;
		UNIT_MINUTES: any;
		UNIT_MONTHS: any;
		UNIT_SECONDS: any;
		UNIT_WEEKS: any;
		UNIT_YEARS: any;
		constructor(params: esri.TimeClassBreaksAgerOptions[], timeUnits?: string): this;
		getAgedSymbol(symbol: Symbol, graphic: Graphic): Symbol
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/TimeRampAger' {
				declare class TimeRampAger extends SymbolAger {
		constructor(colorRange?: Color[], sizeRange?: number[], alphaRange?: number[]): this;
		getAgedSymbol(symbol: Symbol, graphic: Graphic): Symbol
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/UniqueValueRenderer' {
				declare class UniqueValueRenderer extends Renderer {
		attributeField: string;
		attributeField2: string;
		attributeField3: string;
		defaultLabel: string;
		defaultSymbol: Symbol;
		fieldDelimiter: string;
		infos: any[];
		values: string[];
		constructor(defaultSymbol: Symbol, attributeField: string | Function, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string): this;
		constructor(json: Object): this;
		addValue(valueOrInfo: string | any, symbol?: Symbol): void;
		getUniqueValueInfo(graphic: Graphic): any;
		removeValue(value: string): void
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/VectorFieldRenderer' {
				declare class VectorFieldRenderer extends Renderer {
		FLOW_FROM: any;
		FLOW_TO: any;
		STYLE_BEAUFORT_FEET: any;
		STYLE_BEAUFORT_KM: any;
		STYLE_BEAUFORT_KN: any;
		STYLE_BEAUFORT_METER: any;
		STYLE_BEAUFORT_MILE: any;
		STYLE_CLASSIFIED_ARROW: any;
		STYLE_OCEAN_CURRENT_KN: any;
		STYLE_OCEAN_CURRENT_M: any;
		STYLE_SCALAR: any;
		STYLE_SINGLE_ARROW: any;
		STYLE_WIND_BARBS: any;
		constructor(options?: esri.VectorFieldRendererOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/renderers/jsonUtils' {
					declare module.exports: undefined


}

declare module 'esri/renderers/smartMapping' {
					declare module.exports: undefined


}

declare module 'esri/request' {
					declare module.exports: undefined


}

declare module 'esri/symbols/CartographicLineSymbol' {
				declare class CartographicLineSymbol extends SimpleLineSymbol {
		CAP_BUTT: any;
		CAP_ROUND: any;
		CAP_SQUARE: any;
		JOIN_BEVEL: any;
		JOIN_MITER: any;
		JOIN_ROUND: any;
		STYLE_DASH: any;
		STYLE_DASHDOT: any;
		STYLE_DASHDOTDOT: any;
		STYLE_DOT: any;
		STYLE_LONGDASH: any;
		STYLE_LONGDASHDOT: any;
		STYLE_NULL: any;
		STYLE_SHORTDASH: any;
		STYLE_SHORTDASHDOT: any;
		STYLE_SHORTDASHDOTDOT: any;
		STYLE_SHORTDOT: any;
		STYLE_SOLID: any;
		cap: string;
		join: string;
		miterLimit: string;
		constructor(): this;
		constructor(style?: string, color?: Color, width?: number, cap?: string, join?: string, miterLimit?: string): this;
		constructor(json: Object): this;
		setCap(cap: string): CartographicLineSymbol;
		setJoin(join: string): CartographicLineSymbol;
		setMiterLimit(miterLimit: string): CartographicLineSymbol
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/FillSymbol' {
				declare class FillSymbol extends Symbol {
		outline: SimpleLineSymbol;
		setOutline(outline: SimpleLineSymbol): FillSymbol
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/Font' {
				declare class Font  {
		STYLE_ITALIC: any;
		STYLE_NORMAL: any;
		STYLE_OBLIQUE: any;
		VARIANT_NORMAL: any;
		VARIANT_SMALLCAPS: any;
		WEIGHT_BOLD: any;
		WEIGHT_BOLDER: any;
		WEIGHT_LIGHTER: any;
		WEIGHT_NORMAL: any;
		decoration: string;
		family: string;
		size: number;
		style: string;
		variant: string;
		weight: string;
		constructor(): this;
		constructor(size?: number | string, style?: string, variant?: string, weight?: string, family?: string): this;
		constructor(json: Object): this;
		setDecoration(decoration: string): Font;
		setFamily(family: string): Font;
		setSize(size: number | string): Font;
		setStyle(style: string): Font;
		setVariant(variant: string): Font;
		setWeight(weight: string): Font
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/LineSymbol' {
				declare class LineSymbol extends Symbol {
		width: number;
		setWidth(width: number): LineSymbol
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/MarkerSymbol' {
				declare class MarkerSymbol extends Symbol {
		angle: number;
		size: number;
		xoffset: number;
		yoffset: number;
		setAngle(angle: number): MarkerSymbol;
		setOffset(x: number, y: number): MarkerSymbol;
		setSize(size: number): MarkerSymbol;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/PictureFillSymbol' {
				declare class PictureFillSymbol extends FillSymbol {
		height: number;
		url: string;
		width: number;
		xoffset: number;
		xscale: number;
		yoffset: number;
		yscale: number;
		constructor(url: string, outline: SimpleLineSymbol, width: number, height: number): this;
		constructor(json: Object): this;
		setHeight(height: number): PictureFillSymbol;
		setOffset(x: number, y: number): PictureFillSymbol;
		setUrl(url: string): PictureFillSymbol;
		setWidth(width: number): PictureFillSymbol;
		setXScale(scale: number): PictureFillSymbol;
		setYScale(scale: number): PictureFillSymbol
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/PictureMarkerSymbol' {
				declare class PictureMarkerSymbol extends MarkerSymbol {
		height: number;
		url: string;
		width: number;
		constructor(url: string, width: number, height: number): this;
		constructor(json: Object): this;
		setHeight(height: number): PictureMarkerSymbol;
		setUrl(url: string): PictureMarkerSymbol;
		setWidth(width: number): PictureMarkerSymbol
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/SimpleFillSymbol' {
				declare class SimpleFillSymbol extends FillSymbol {
		STYLE_BACKWARD_DIAGONAL: any;
		STYLE_CROSS: any;
		STYLE_DIAGONAL_CROSS: any;
		STYLE_FORWARD_DIAGONAL: any;
		STYLE_HORIZONTAL: any;
		STYLE_NULL: any;
		STYLE_SOLID: any;
		STYLE_VERTICAL: any;
		color: Color;
		style: string;
		constructor(): this;
		constructor(style: string, outline: SimpleLineSymbol, color: Color): this;
		constructor(json: Object): this;
		setColor(color: Color): SimpleFillSymbol;
		setStyle(style: string): SimpleFillSymbol
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/SimpleLineSymbol' {
				declare class SimpleLineSymbol extends LineSymbol {
		STYLE_DASH: any;
		STYLE_DASHDOT: any;
		STYLE_DASHDOTDOT: any;
		STYLE_DOT: any;
		STYLE_LONGDASH: any;
		STYLE_LONGDASHDOT: any;
		STYLE_NULL: any;
		STYLE_SHORTDASH: any;
		STYLE_SHORTDASHDOT: any;
		STYLE_SHORTDASHDOTDOT: any;
		STYLE_SHORTDOT: any;
		STYLE_SOLID: any;
		style: string;
		constructor(): this;
		constructor(style: string, color: Color, width: number): this;
		constructor(json: Object): this;
		setStyle(style: string): SimpleLineSymbol
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/SimpleMarkerSymbol' {
				declare class SimpleMarkerSymbol extends MarkerSymbol {
		STYLE_CIRCLE: any;
		STYLE_CROSS: any;
		STYLE_DIAMOND: any;
		STYLE_PATH: any;
		STYLE_SQUARE: any;
		STYLE_X: any;
		outline: SimpleLineSymbol;
		size: number;
		style: string;
		constructor(): this;
		constructor(style: string, size: number, outline: SimpleLineSymbol, color: Color): this;
		constructor(json: Object): this;
		setOutline(outline: SimpleLineSymbol): SimpleMarkerSymbol;
		setPath(path: string): SimpleMarkerSymbol;
		setStyle(style: string): SimpleMarkerSymbol
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/Symbol' {
				declare class Symbol  {
		color: Color;
		type: string;
		setColor(color: Color): Symbol;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/TextSymbol' {
				declare class TextSymbol extends Symbol {
		ALIGN_END: any;
		ALIGN_MIDDLE: any;
		ALIGN_START: any;
		DECORATION_LINETHROUGH: any;
		DECORATION_NONE: any;
		DECORATION_OVERLINE: any;
		DECORATION_UNDERLINE: any;
		align: string;
		angle: number;
		decoration: string;
		font: Font;
		haloColor: Color;
		haloSize: number;
		horizontalAlignment: string;
		kerning: boolean;
		rotated: boolean;
		text: string;
		verticalAlignment: string;
		xoffset: number;
		yoffset: number;
		constructor(text: string): this;
		constructor(text: string, font: Font, color: Color): this;
		constructor(json: Object): this;
		setAlign(align: string): TextSymbol;
		setAngle(angle: number): TextSymbol;
		setDecoration(decoration: string): TextSymbol;
		setFont(font: Font): TextSymbol;
		setHaloColor(color: Color): TextSymbol;
		setHaloSize(size: number): TextSymbol;
		setHorizontalAlignment(alignment: string): TextSymbol;
		setKerning(kerning: boolean): TextSymbol;
		setOffset(x: number, y: number): TextSymbol;
		setRotated(rotated: boolean): TextSymbol;
		setText(text: string): TextSymbol;
		setVerticalAlignment(alignment: string): TextSymbol
	}

	declare module.exports: undefined


}

declare module 'esri/symbols/jsonUtils' {
					declare module.exports: undefined


}

declare module 'esri/tasks/AddressCandidate' {
				declare class AddressCandidate  {
		address: any;
		attributes: any;
		location: Point;
		score: number
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/AlgorithmicColorRamp' {
				declare class AlgorithmicColorRamp extends ColorRamp {
		algorithm: string;
		fromColor: Color;
		toColor: Color;
		constructor(): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/AreasAndLengthsParameters' {
				declare class AreasAndLengthsParameters  {
		areaUnit: number | string;
		calculationType: string;
		lengthUnit: number | string;
		polygons: Polygon[];
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/BufferParameters' {
				declare class BufferParameters  {
		bufferSpatialReference: SpatialReference;
		distances: number[];
		geodesic: boolean;
		geometries: Geometry[];
		outSpatialReference: SpatialReference;
		unionResults: boolean;
		unit: number;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ClassBreaksDefinition' {
				declare class ClassBreaksDefinition extends ClassificationDefinition {
		baseSymbol: Symbol;
		breakCount: number;
		classificationField: string;
		classificationMethod: string;
		colorRamp: ColorRamp;
		normalizationField: string;
		normalizationType: string;
		standardDeviationInterval: number;
		constructor(): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ClassificationDefinition' {
				declare class ClassificationDefinition  {
		baseSymbol: Symbol;
		colorRamp: ColorRamp;
		type: string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ClosestFacilityParameters' {
				declare class ClosestFacilityParameters  {
		accumulateAttributes: string[];
		attributeParameterValues: any[];
		defaultCutoff: number;
		defaultTargetFacilityCount: number;
		directionsLanguage: string;
		directionsLengthUnits: string;
		directionsOutputType: string;
		directionsStyleName: string;
		directionsTimeAttribute: string;
		doNotLocateOnRestrictedElements: boolean;
		facilities: any;
		impedanceAttribute: string;
		incidents: any;
		outputGeometryPrecision: number;
		outputGeometryPrecisionUnits: string;
		outputLines: string;
		outSpatialReference: SpatialReference;
		pointBarriers: any;
		polygonBarriers: any;
		polylineBarriers: any;
		restrictionAttributes: string[];
		restrictUTurns: string;
		returnDirections: boolean;
		returnFacilities: boolean;
		returnIncidents: boolean;
		returnPointBarriers: boolean;
		returnPolygonBarriers: boolean;
		returnPolylineBarriers: boolean;
		returnRoutes: boolean;
		timeOfDay: Date;
		timeOfDayUsage: string;
		travelDirection: string;
		travelMode: any;
		useHierarchy: boolean;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ClosestFacilitySolveResult' {
				declare class ClosestFacilitySolveResult  {
		directions: DirectionsFeatureSet;
		facilities: Point[];
		incidents: Point[];
		messages: NAMessage[];
		pointBarriers: Point[];
		polygonBarriers: Polygon[];
		polylineBarriers: Polyline[];
		routes: Graphic[]
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ClosestFacilityTask' {
				declare class ClosestFacilityTask  {
		constructor(url: string): this;
		getServiceDescription(): any;
		solve(
		params: ClosestFacilityParameters, callback?: Function, errback?: Function
	): any;
		on(
		type: "solve-complete", listener: (
		event: {
		result: ClosestFacilitySolveResult,
		target: ClosestFacilityTask
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ColorRamp' {
				declare class ColorRamp  {
		type: string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/DataFile' {
				declare class DataFile  {
		itemID: string;
		url: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/DataLayer' {
				declare class DataLayer  {
		SPATIAL_REL_CONTAINS: any;
		SPATIAL_REL_CROSSES: any;
		SPATIAL_REL_ENVELOPEINTERSECTS: any;
		SPATIAL_REL_INDEXINTERSECTS: any;
		SPATIAL_REL_INTERSECTS: any;
		SPATIAL_REL_OVERLAPS: any;
		SPATIAL_REL_TOUCHES: any;
		SPATIAL_REL_WITHIN: any;
		geometry: Geometry;
		name: string;
		spatialRelationship: string;
		where: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/Date' {
				declare class AGSDate  {
		date: Date;
		format: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/DensifyParameters' {
				declare class DensifyParameters  {
		geodesic: boolean;
		geometries: Geometry[];
		lengthUnit: number | string;
		maxSegmentLength: number;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/DirectionsFeatureSet' {
				declare class DirectionsFeatureSet extends FeatureSet {
		extent: Extent;
		mergedGeometry: Polyline;
		routeId: string;
		routeName: string;
		strings: any[];
		totalDriveTime: number;
		totalLength: number;
		totalTime: number
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/DistanceParameters' {
				declare class DistanceParameters  {
		distanceUnit: number | string;
		geodesic: boolean;
		geometry1: Geometry;
		geometry2: Geometry;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/FeatureSet' {
				declare class FeatureSet  {
		displayFieldName: string;
		exceededTransferLimit: boolean;
		features: Graphic[];
		fieldAliases: any;
		fields: any[];
		geometryType: string;
		spatialReference: SpatialReference;
		constructor(): this;
		constructor(json: Object): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/FindParameters' {
				declare class FindParameters  {
		contains: boolean;
		dynamicLayerInfos: DynamicLayerInfo[];
		geometryPrecision: number;
		layerDefinitions: string[];
		layerIds: number[];
		maxAllowableOffset: number;
		outSpatialReference: SpatialReference;
		returnGeometry: boolean;
		searchFields: string[];
		searchText: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/FindResult' {
				declare class FindResult  {
		displayFieldName: string;
		feature: Graphic;
		foundFieldName: string;
		layerId: number;
		layerName: string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/FindTask' {
				declare class FindTask  {
		url: string;
		constructor(url: string, options?: esri.FindTaskOptions): this;
		execute(findParameters: FindParameters, callback?: Function, errback?: Function): any;
		on(
		type: "complete", listener: (event: {
		results: FindResult[],
		target: FindTask
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: FindTask
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/GPMessage' {
				declare class GPMessage  {
		TYPE_ABORT: any;
		TYPE_EMPTY: any;
		TYPE_ERROR: any;
		TYPE_INFORMATIVE: any;
		TYPE_PROCESS_DEFINITION: any;
		TYPE_PROCESS_START: any;
		TYPE_PROCESS_STOP: any;
		TYPE_WARNING: any;
		description: string;
		type: string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/GeneralizeParameters' {
				declare class GeneralizeParameters  {
		deviationUnit: number | string;
		geometries: Geometry[];
		maxDeviation: number;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/GenerateRendererParameters' {
				declare class GenerateRendererParameters  {
		classificationDefinition: ClassificationDefinition;
		formatLabel: boolean;
		precision: number;
		prefix: string;
		unitLabel: string;
		where: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/GenerateRendererTask' {
				declare class GenerateRendererTask  {
		constructor(url: string, options?: esri.GenerateRendererTaskOptions): this;
		execute(
		generateRendererParameters: GenerateRendererParameters, callback?: Function, errback?: Function
	): any;
		on(
		type: "complete", listener: (event: {
		renderer: Renderer,
		target: GenerateRendererTask
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: GenerateRendererTask
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/GeometryService' {
				declare class GeometryService  {
		UNIT_ACRES: any;
		UNIT_ARES: any;
		UNIT_FOOT: any;
		UNIT_HECTARES: any;
		UNIT_KILOMETER: any;
		UNIT_METER: any;
		UNIT_NAUTICAL_MILE: any;
		UNIT_SQUARE_CENTIMETERS: any;
		UNIT_SQUARE_DECIMETERS: any;
		UNIT_SQUARE_FEET: any;
		UNIT_SQUARE_INCHES: any;
		UNIT_SQUARE_KILOMETERS: any;
		UNIT_SQUARE_METERS: any;
		UNIT_SQUARE_MILES: any;
		UNIT_SQUARE_MILLIMETERS: any;
		UNIT_SQUARE_YARDS: any;
		UNIT_STATUTE_MILE: any;
		UNIT_US_NAUTICAL_MILE: any;
		url: string;
		constructor(url: string): this;
		areasAndLengths(
		areasAndLengthsParameters: AreasAndLengthsParameters, callback?: Function, errback?: Function
	): any;
		autoComplete(
		polygons: Polygon[], polylines: Polyline[], callback?: Function, errback?: Function
	): any;
		buffer(
		bufferParameters: BufferParameters, callback?: Function, errback?: Function
	): any;
		convexHull(geometries: Geometry[], callback?: Function, errback?: Function): any;
		cut(
		geometries: Geometry[], cutterGeometry: Geometry, callback?: Function, errback?: Function
	): any;
		densify(
		densifyParameters: DensifyParameters, callback?: Function, errback?: Function
	): any;
		difference(
		geometries: Geometry[], geometry: Geometry, callback?: Function, errback?: Function
	): any;
		distance(params: DistanceParameters, callback?: Function, errback?: Function): any;
		fromGeoCoordinateString(params: any, callback?: Function, errback?: Function): any;
		generalize(params: GeneralizeParameters, callback?: Function, errback?: Function): any;
		intersect(
		geometries: Geometry[], geometry: Geometry, callback?: Function, errback?: Function
	): any;
		labelPoints(polygons: Polygon[], callback?: Function, errback?: Function): any;
		lengths(
		lengthsParameter: LengthsParameters, callback?: Function, errback?: Function
	): any;
		offset(params: OffsetParameters, callback?: Function, errback?: Function): any;
		project(params: ProjectParameters, callback?: Function, errback?: Function): any;
		relation(
		relationParameters: RelationParameters, callback?: Function, errback?: Function
	): any;
		reshape(
		targetGeometry: Geometry, reshaperGeometry: Geometry, callback?: Function, errback?: Function
	): any;
		simplify(geometries: Geometry[], callback?: Function, errback?: Function): any;
		toGeoCoordinateString(params: any, callback?: Function, errback?: Function): any;
		trimExtend(params: TrimExtendParameters, callback?: Function, errback?: Function): any;
		union(geometries: Geometry[], callback?: Function, errback?: Function): any;
		on(
		type: "areas-and-lengths-complete", listener: (event: {
		result: any,
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "auto-complete-complete", listener: (event: {
		geometries: Polygon[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "buffer-complete", listener: (event: {
		geometries: Polygon[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "convex-hull-complete", listener: (event: {
		geometry: Geometry,
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "cut-complete", listener: (event: {
		result: any,
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "densify-complete", listener: (event: {
		geometries: Geometry[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "difference-complete", listener: (event: {
		geometries: Geometry[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "distance-complete", listener: (event: {
		distance: number,
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "generalize-complete", listener: (event: {
		geometries: Geometry[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "intersect-complete", listener: (event: {
		geometries: Geometry[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "label-points-complete ", listener: (event: {
		geometries: Point[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "lengths-complete", listener: (event: {
		result: any,
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "offset-complete", listener: (event: {
		geometries: Geometry[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "project-complete", listener: (event: {
		geometries: Geometry[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "relation-complete", listener: (event: {
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "reshape-complete", listener: (event: {
		geometry: Geometry,
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "simplify-complete", listener: (event: {
		geometries: Geometry[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "trim-extend-complete", listener: (event: {
		geometries: Geometry[],
		target: GeometryService
	}) => void
	): esri.Handle;
		on(
		type: "union-complete", listener: (event: {
		geometry: Geometry,
		target: GeometryService
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/Geoprocessor' {
				declare class Geoprocessor  {
		outputSpatialReference: SpatialReference;
		outSpatialReference: SpatialReference;
		processSpatialReference: SpatialReference;
		updateDelay: number;
		url: string;
		constructor(url: string): this;
		cancelJob(jobId: string, callback: Function, errback: Function): any;
		cancelJobStatusUpdates(jobId: string): void;
		checkJobStatus(jobId: string, callback?: Function, errback?: Function): any;
		execute(inputParameters: any, callback?: Function, errback?: Function): any;
		getResultData(
		jobId: string, parameterName: string, callback?: Function, errback?: Function
	): any;
		getResultImage(
		jobId: string, parameterName: string, imageParameters: ImageParameters, callback?: Function, errback?: Function
	): any;
		getResultImageLayer(
		jobId: string, parameterName?: string, imageParameters?: ImageParameters, callback?: Function
	): ArcGISDynamicMapServiceLayer;
		setOutputSpatialReference(spatialReference: SpatialReference): void;
		setOutSpatialReference(spatialReference: SpatialReference): void;
		setProcessSpatialReference(spatialReference: SpatialReference): void;
		setUpdateDelay(delay: number): void;
		submitJob(
		inputParameters: any, callback?: Function, statusCallback?: Function, errback?: Function
	): any;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: Geoprocessor
	}) => void
	): esri.Handle;
		on(
		type: "execute-complete", listener: (
		event: {
		messages: GPMessage[],
		results: ParameterValue[],
		target: Geoprocessor
	}
	) => void
	): esri.Handle;
		on(
		type: "get-result-data-complete", listener: (event: {
		result: ParameterValue,
		target: Geoprocessor
	}) => void
	): esri.Handle;
		on(
		type: "get-result-image-complete", listener: (event: {
		mapImage: MapImage,
		target: Geoprocessor
	}) => void
	): esri.Handle;
		on(
		type: "get-result-image-layer-complete", listener: (event: {
		target: Geoprocessor
	}) => void
	): esri.Handle;
		on(
		type: "job-cancel", listener: (event: {
		target: Geoprocessor
	}) => void
	): esri.Handle;
		on(
		type: "job-complete", listener: (event: {
		target: Geoprocessor
	}) => void
	): esri.Handle;
		on(
		type: "status-update", listener: (event: {
		target: Geoprocessor
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/IdentifyParameters' {
				declare class IdentifyParameters  {
		LAYER_OPTION_ALL: any;
		LAYER_OPTION_TOP: any;
		LAYER_OPTION_VISIBLE: any;
		dpi: number;
		dynamicLayerInfos: DynamicLayerInfo[];
		geometry: Geometry;
		geometryPrecision: number;
		height: number;
		layerDefinitions: string[];
		layerIds: number[];
		layerOption: string;
		layerTimeOptions: LayerTimeOptions[];
		mapExtent: Extent;
		maxAllowableOffset: number;
		returnGeometry: boolean;
		spatialReference: SpatialReference;
		timeExtent: TimeExtent;
		tolerance: number;
		width: number;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/IdentifyResult' {
				declare class IdentifyResult  {
		displayFieldName: string;
		feature: Graphic;
		layerId: number;
		layerName: string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/IdentifyTask' {
				declare class IdentifyTask  {
		url: string;
		constructor(url: string, options?: esri.IdentifyTaskOptions): this;
		execute(
		identifyParameters: IdentifyParameters, callback?: Function, errback?: Function
	): any;
		on(
		type: "complete", listener: (event: {
		results: IdentifyResult[],
		target: IdentifyTask
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: IdentifyTask
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ImageServiceIdentifyParameters' {
				declare class ImageServiceIdentifyParameters  {
		geometry: Geometry;
		mosaicRule: MosaicRule;
		noData: string | number;
		noDataInterpretation: string;
		pixelSize: Symbol;
		pixelSizeX: number;
		pixelSizeY: number;
		renderingRule: RasterFunction;
		returnCatalogItems: boolean;
		returnGeometry: boolean;
		timeExtent: TimeExtent;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ImageServiceIdentifyResult' {
				declare class ImageServiceIdentifyResult  {
		catalogItems: FeatureSet;
		catalogItemVisibilities: number[];
		location: Point;
		name: string;
		objectId: number;
		properties: any;
		value: string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ImageServiceIdentifyTask' {
				declare class ImageServiceIdentifyTask  {
		constructor(url: string): this;
		execute(
		params: ImageServiceIdentifyParameters, callback?: Function, errback?: Function
	): any;
		on(
		type: "complete", listener: (
		event: {
		result: ImageServiceIdentifyResult,
		target: ImageServiceIdentifyTask
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ImageServiceMeasureParameters' {
				declare class ImageServiceMeasureParameters  {
		OPERATION_AREA_PERIMETER: any;
		OPERATION_AREA_PERIMETER_3D: any;
		OPERATION_BASE_TOP: any;
		OPERATION_BASE_TOP_SHADOW: any;
		OPERATION_CENTROID: any;
		OPERATION_CENTROID_3D: any;
		OPERATION_DISTANCE_ANGLE: any;
		OPERATION_DISTANCE_ANGLE_3D: any;
		OPERATION_POINT: any;
		OPERATION_POINT_3D: any;
		OPERATION_TOP_TOP_SHADOW: any;
		angularUnit: string;
		areaUnit: string;
		fromGeometry: Geometry;
		linearUnit: string;
		mosaicRule: MosaicRule;
		operation: string;
		pixelSize: Point;
		toGeometry: Geometry;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ImageServiceMeasureTask' {
				declare class ImageServiceMeasureTask  {
		constructor(url: string): this;
		execute(
		params: ImageServiceMeasureParameters, callback?: Function, errback?: Function
	): any;
		on(
		type: "complete", listener: (event: {
		target: ImageServiceMeasureTask
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/JobInfo' {
				declare class JobInfo  {
		STATUS_CANCELLED: any;
		STATUS_CANCELLING: any;
		STATUS_DELETED: any;
		STATUS_DELETING: any;
		STATUS_EXECUTING: any;
		STATUS_FAILED: any;
		STATUS_NEW: any;
		STATUS_SUBMITTED: any;
		STATUS_SUCCEEDED: any;
		STATUS_TIMED_OUT: any;
		STATUS_WAITING: any;
		jobId: string;
		jobStatus: string;
		messages: GPMessage[]
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/LegendLayer' {
				declare class LegendLayer  {
		layerId: string;
		subLayerIds: string[];
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/LengthsParameters' {
				declare class LengthsParameters  {
		calculationType: string;
		geodesic: boolean;
		lengthUnit: number | string;
		polylines: Geometry[];
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/LinearUnit' {
				declare class LinearUnit  {
		distance: number;
		units: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/MultipartColorRamp' {
				declare class MultipartColorRamp extends ColorRamp {
		colorRamps: AlgorithmicColorRamp[];
		constructor(): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/NAMessage' {
				declare class NAMessage  {
		TYPE_ABORT: any;
		TYPE_EMPTY: any;
		TYPE_ERROR: any;
		TYPE_INFORMATIVE: any;
		TYPE_PROCESS_DEFINITION: any;
		TYPE_PROCESS_START: any;
		TYPE_PROCESS_STOP: any;
		TYPE_WARNING: any;
		description: string;
		type: number
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/NATypes' {
					declare module.exports: undefined


}

declare module 'esri/tasks/OffsetParameters' {
				declare class OffsetParameters  {
		bevelRatio: number;
		geometries: Geometry[];
		offsetDistance: number;
		offsetHow: string;
		offsetUnit: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ParameterValue' {
				declare class ParameterValue  {
		dataType: string;
		paramName: string;
		value: any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/PrintParameters' {
				declare class PrintParameters  {
		extraParameters: any;
		map: Map;
		outSpatialReference: SpatialReference;
		template: PrintTemplate;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/PrintTask' {
				declare class PrintTask  {
		url: string;
		constructor(url: string, params?: esri.PrintTaskOptions): this;
		execute(printParameters: PrintParameters, callback?: Function, errback?: Function): any;
		on(
		type: "complete", listener: (event: {
		result: DataFile,
		target: PrintTask
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: PrintTask
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/PrintTemplate' {
				declare class PrintTemplate  {
		exportOptions: any;
		format: string;
		label: string;
		layout: string;
		layoutOptions: any;
		outScale: number;
		preserveScale: boolean;
		showAttribution: boolean;
		showLabels: boolean;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ProjectParameters' {
				declare class ProjectParameters  {
		geometries: Geometry[];
		outSR: SpatialReference;
		transformation: any;
		transformForward: boolean;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/QueryTask' {
				declare class QueryTask  {
		url: string;
		constructor(url: string, options?: esri.QueryTaskOptions): this;
		execute(parameters: Query, callback?: Function, errback?: Function): any;
		executeForCount(query: Query, callback?: Function, errback?: Function): any;
		executeForExtent(query: Query, callback?: Function, errback?: Function): any;
		executeForIds(parameters: Query, callback?: Function, errback?: Function): any;
		executeRelationshipQuery(parameters: RelationshipQuery, callback?: Function, errback?: Function): any;
		on(
		type: "complete", listener: (event: {
		featureSet: FeatureSet,
		target: QueryTask
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: QueryTask
	}) => void
	): esri.Handle;
		on(
		type: "execute-for-count-complete", listener: (event: {
		count: number,
		target: QueryTask
	}) => void
	): esri.Handle;
		on(
		type: "execute-for-extent-complete", listener: (event: {
		count: number,
		extent: any,
		target: QueryTask
	}) => void
	): esri.Handle;
		on(
		type: "execute-for-ids-complete", listener: (event: {
		objectIds: number[],
		target: QueryTask
	}) => void
	): esri.Handle;
		on(
		type: "execute-relationship-query-complete", listener: (event: {
		featureSets: FeatureSet[],
		target: QueryTask
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/RasterData' {
				declare class RasterData  {
		format: string;
		itemID: string;
		url: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/RelationParameters' {
				declare class RelationParameters  {
		SPATIAL_REL_COINCIDENCE: any;
		SPATIAL_REL_CROSS: any;
		SPATIAL_REL_DISJOINT: any;
		SPATIAL_REL_IN: any;
		SPATIAL_REL_INTERIORINTERSECTION: any;
		SPATIAL_REL_INTERSECTION: any;
		SPATIAL_REL_LINETOUCH: any;
		SPATIAL_REL_OVERLAP: any;
		SPATIAL_REL_POINTTOUCH: any;
		SPATIAL_REL_RELATION: any;
		SPATIAL_REL_TOUCH: any;
		SPATIAL_REL_WITHIN: any;
		geometries1: Geometry[];
		geometries2: Geometry[];
		relation: string;
		relationParam: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/RelationshipQuery' {
				declare class RelationshipQuery  {
		definitionExpression: string;
		geometryPrecision: number;
		maxAllowableOffset: number;
		objectIds: number[];
		outFields: string[];
		outSpatialReference: SpatialReference;
		relationshipId: number;
		returnGeometry: boolean;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/RouteParameters' {
				declare class RouteParameters  {
		accumulateAttributes: string[];
		attributeParameterValues: any[];
		barriers: any;
		directionsLanguage: string;
		directionsLengthUnits: string;
		directionsOutputType: string;
		directionsStyleName: string;
		directionsTimeAttribute: string;
		doNotLocateOnRestrictedElements: boolean;
		findBestSequence: boolean;
		ignoreInvalidLocations: boolean;
		impedanceAttribute: string;
		outputGeometryPrecision: number;
		outputGeometryPrecisionUnits: string;
		outputLines: string;
		outSpatialReference: SpatialReference;
		polygonBarriers: any;
		polylineBarriers: any;
		preserveFirstStop: boolean;
		preserveLastStop: boolean;
		restrictionAttributes: string[];
		restrictUTurns: string;
		returnBarriers: boolean;
		returnDirections: boolean;
		returnPolygonBarriers: boolean;
		returnPolylineBarriers: boolean;
		returnRoutes: boolean;
		returnStops: boolean;
		startTime: Date;
		startTimeIsUTC: boolean;
		stops: any;
		timeWindowsAreUTC: boolean;
		travelMode: any;
		useHierarchy: boolean;
		useTimeWindows: boolean;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/RouteResult' {
				declare class RouteResult  {
		directions: DirectionsFeatureSet;
		route: Graphic;
		routeName: string;
		stops: Graphic[]
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/RouteTask' {
				declare class RouteTask  {
		url: string;
		constructor(url: string): this;
		getServiceDescription(): any;
		solve(params: RouteParameters, callback?: Function, errback?: Function): any;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: RouteTask
	}) => void
	): esri.Handle;
		on(
		type: "solve-complete", listener: (event: {
		result: any,
		target: RouteTask
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ServiceAreaParameters' {
				declare class ServiceAreaParameters  {
		accumulateAttributes: string[];
		attributeParameterValues: any[];
		defaultBreaks: number[];
		doNotLocateOnRestrictedElements: boolean;
		excludeSourcesFromPolygons: string[];
		facilities: any;
		impedanceAttribute: string;
		mergeSimilarPolygonRanges: boolean;
		outputGeometryPrecision: number;
		outputGeometryPrecisionUnits: string;
		outputLines: string;
		outputPolygons: string;
		outSpatialReference: SpatialReference;
		overlapLines: boolean;
		overlapPolygons: boolean;
		pointBarriers: any;
		polygonBarriers: any;
		polylineBarriers: any;
		restrictionAttributes: string[];
		restrictUTurns: string;
		returnFacilities: boolean;
		returnPointBarriers: boolean;
		returnPolygonBarriers: boolean;
		returnPolylineBarriers: boolean;
		splitLinesAtBreaks: boolean;
		splitPolygonsAtBreaks: boolean;
		timeOfDay: Date;
		travelDirection: string;
		travelMode: any;
		trimOuterPolygon: boolean;
		trimPolygonDistance: number;
		trimPolygonDistanceUnits: string;
		useHierarchy: boolean;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ServiceAreaSolveResult' {
				declare class ServiceAreaSolveResult  {
		facilities: Point[];
		messages: NAMessage[];
		pointBarriers: Point[];
		polygonBarriers: Polygon[];
		polylineBarriers: Polyline[];
		serviceAreaPolygons: Graphic[];
		serviceAreaPolylines: Graphic[]
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/ServiceAreaTask' {
				declare class ServiceAreaTask  {
		constructor(url: string): this;
		getServiceDescription(): any;
		solve(params: ServiceAreaParameters, callback?: Function, errback?: Function): any;
		on(
		type: "solve-complete", listener: (
		event: {
		result: ServiceAreaSolveResult,
		target: ServiceAreaTask
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/StatisticDefinition' {
				declare class StatisticDefinition  {
		onStatisticField: string;
		outStatisticFieldName: string;
		statisticType: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/TrimExtendParameters' {
				declare class TrimExtendParameters  {
		DEFAULT_CURVE_EXTENSION: any;
		KEEP_END_ATTRIBUTES: any;
		NO_END_ATTRIBUTES: any;
		NO_EXTEND_AT_FROM: any;
		NO_EXTEND_AT_TO: any;
		RELOCATE_ENDS: any;
		extendHow: number;
		polylines: Polyline[];
		trimExtendTo: Polyline;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/UniqueValueDefinition' {
				declare class UniqueValueDefinition extends ClassificationDefinition {
		attributeField: string;
		attributeField2: string;
		attributeField3: string;
		baseSymbol: Symbol;
		colorRamp: ColorRamp;
		constructor(): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/BatchValidationJob' {
				declare class BatchValidationJob  {
		batchRunIds: string[];
		creationDate: Date;
		jobId: string;
		jobInfo: BatchValidationJobInfo;
		parameters: BatchValidationParameters;
		status: string;
		type: string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/BatchValidationJobInfo' {
				declare class BatchValidationJobInfo  {
		batchRunId: string;
		finishTimeUTC: Date;
		gpJobId: string;
		gpUrl: string;
		messages: string;
		startTimeUTC: Date;
		status: string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/BatchValidationParameters' {
				declare class BatchValidationParameters  {
		analysisArea: Polygon;
		batchJobFileName: string;
		changedFeaturesOnly: boolean;
		createdBy: string;
		cronExpression: string;
		executionsEndDate: Date;
		fileItemId: string;
		maxNumberOfExecutions: number;
		productionWorkspace: string;
		sessionString: string;
		title: string;
		userName: string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/BatchValidationTask' {
				declare class BatchValidationTask  {
		constructor(url: string): this;
		cancelJobExecution(jobId: string): any;
		createReviewerSession(sessionName: string, sessionOptions: SessionOptions): any;
		deleteJob(jobId: string): any;
		disableJob(jobId: string): any;
		editJob(jobId: string, parameters: BatchValidationParameters): any;
		enableJob(jobId: string): any;
		executeJob(parameters: BatchValidationParameters): any;
		getAdhocJobsList(): any;
		getCustomFieldNames(): any;
		getJobDetails(jobId: string): any;
		getJobExecutionDetails(jobId: string): any;
		getJobIds(): any;
		getLifecycleStatusStrings(): any;
		getReviewerMapServerUrl(): string;
		getReviewerSessions(): any;
		getScheduledJobsList(): any;
		scheduleJob(parameters: BatchValidationParameters): any;
		on(
		type: "cancel-job-execution", listener: (event: {
		canceled: boolean,
		target: BatchValidationTask
	}) => void
	): esri.Handle;
		on(
		type: "create-reviewer-sessions", listener: (
		event: {
		reviewerSession: ReviewerSession,
		target: BatchValidationTask
	}
	) => void
	): esri.Handle;
		on(
		type: "delete-job", listener: (event: {
		deleted: boolean,
		target: BatchValidationTask
	}) => void
	): esri.Handle;
		on(
		type: "disable-job", listener: (event: {
		disabled: boolean,
		target: BatchValidationTask
	}) => void
	): esri.Handle;
		on(
		type: "edit-job", listener: (event: {
		edited: boolean,
		target: BatchValidationTask
	}) => void
	): esri.Handle;
		on(
		type: "enable-job", listener: (event: {
		enabled: boolean,
		target: BatchValidationTask
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: BatchValidationTask
	}) => void
	): esri.Handle;
		on(
		type: "execute-job", listener: (event: {
		jobId: string,
		target: BatchValidationTask
	}) => void
	): esri.Handle;
		on(
		type: "get-adhoc-jobs-list", listener: (
		event: {
		adhocJobs: BatchValidationJob[],
		target: BatchValidationTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-custom-field-names", listener: (
		event: {
		customFieldNames: string[],
		target: BatchValidationTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-job-details", listener: (
		event: {
		jobDetails: BatchValidationJob,
		target: BatchValidationTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-job-execution-details", listener: (
		event: {
		jobInfo: BatchValidationJobInfo,
		target: BatchValidationTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-job-ids", listener: (
		event: {
		adhocJobs: string[],
		scheduledJobs: string[],
		target: BatchValidationTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-lifecycle-status-strings", listener: (
		event: {
		lifecycleStatusStrings: string[],
		target: BatchValidationTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-reviewer-sessions", listener: (
		event: {
		reviewerSessions: ReviewerSession[],
		target: BatchValidationTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-scheduled-jobs-list", listener: (
		event: {
		scheduledJobs: BatchValidationJob[],
		target: BatchValidationTask
	}
	) => void
	): esri.Handle;
		on(
		type: "schedule-job", listener: (event: {
		jobId: string,
		target: BatchValidationTask
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/DashboardResult' {
				declare class DashboardResult  {
		counts: any[];
		fieldName: string;
		fieldValues: any[];
		filters: ReviewerFilters;
		getCount(fieldValue: string | number): number
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/DashboardTask' {
				declare class DashboardTask  {
		constructor(url: string): this;
		createReviewerSession(sessionName: string, sessionOptions: SessionOptions): any;
		getCustomFieldNames(): any;
		getDashboardFieldNames(): any;
		getDashboardResults(fieldName: string, filters?: ReviewerFilters): any;
		getLifecycleStatusStrings(): any;
		getReviewerMapServerUrl(): string;
		getReviewerSessions(): any;
		on(
		type: "create-reviewer-sessions", listener: (
		event: {
		reviewerSession: ReviewerSession,
		target: DashboardTask
	}
	) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: DashboardTask
	}) => void
	): esri.Handle;
		on(
		type: "get-custom-field-names", listener: (event: {
		customFieldNames: string[],
		target: DashboardTask
	}) => void
	): esri.Handle;
		on(
		type: "get-dashboard-field-names", listener: (event: {
		fieldNames: string[],
		target: DashboardTask
	}) => void
	): esri.Handle;
		on(
		type: "get-dashboard-results", listener: (
		event: {
		dashboardResult: DashboardResult,
		target: DashboardTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-lifecycle-status-strings", listener: (
		event: {
		lifecycleStatusStrings: string[],
		target: DashboardTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-reviewer-sessions", listener: (
		event: {
		reviewerSessions: ReviewerSession[],
		target: DashboardTask
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/GetResultsQueryParameters' {
				declare class GetResultsQueryParameters  {
		pageNumber: number;
		pageSize: number;
		returnFields: any[];
		sortBy: string;
		sortDescending: boolean;
		toJSON(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/ReviewerAttributes' {
				declare class ReviewerAttributes  {
		lifecycleStatus: number;
		notes: string;
		resourceName: string;
		reviewStatus: string;
		reviewTechnician: string;
		sessionId: number;
		severity: number;
		subtype: string;
		toJSON(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/ReviewerFilters' {
				declare class ReviewerFilters  {
		addAttributeFilter(fieldName: string, fieldValues: string | number | any[]): void;
		addRangeFilter(fieldName: string, min: string | number, max: string | number): void;
		addSpatialFilter(geometry: Polygon): void;
		getCount(): number;
		toJSON(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/ReviewerLifecycle' {
					declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/ReviewerResultsTask' {
				declare class ReviewerResultsTask  {
		constructor(url: string): this;
		createReviewerSession(sessionName: string, sessionOptions: SessionOptions): any;
		getBatchRunDetails(batchRunIds: any[]): any;
		getCustomFieldNames(): any;
		getLayerDefinition(filters: ReviewerFilters): any;
		getLifecycleStatusStrings(): any;
		getResults(
		getResultsQueryParameters: GetResultsQueryParameters, filters?: ReviewerFilters
	): any;
		getResultsFieldNames(): string[];
		getReviewerMapServerUrl(): string;
		getReviewerSessions(): any;
		updateLifecycleStatus(
		sessionId: number, lifecycleStatus: number, technicianName: string, filters: ReviewerFilters
	): any;
		writeFeatureAsResult(reviewerAttributes: ReviewerAttributes, feature: Graphic): any;
		writeResult(reviewerAttributes: ReviewerAttributes, geometry: Geometry): any;
		on(
		type: "create-reviewer-sessions", listener: (
		event: {
		reviewerSession: ReviewerSession,
		target: ReviewerResultsTask
	}
	) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: ReviewerResultsTask
	}) => void
	): esri.Handle;
		on(
		type: "get-batch-run-details", listener: (event: {
		featureSet: FeatureSet,
		target: ReviewerResultsTask
	}) => void
	): esri.Handle;
		on(
		type: "get-custom-field-names", listener: (
		event: {
		customFieldNames: string[],
		target: ReviewerResultsTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-layer-definition", listener: (event: {
		whereClause: string,
		target: ReviewerResultsTask
	}) => void
	): esri.Handle;
		on(
		type: "get-lifecycle-status-strings", listener: (
		event: {
		lifecycleStatusStrings: string[],
		target: ReviewerResultsTask
	}
	) => void
	): esri.Handle;
		on(
		type: "get-results", listener: (event: {
		featureSet: FeatureSet,
		target: ReviewerResultsTask
	}) => void
	): esri.Handle;
		on(
		type: "get-reviewer-sessions", listener: (
		event: {
		reviewerSessions: ReviewerSession[],
		target: ReviewerResultsTask
	}
	) => void
	): esri.Handle;
		on(
		type: "update-lifecycle-status", listener: (
		event: {
		featureEditResults: FeatureEditResult[],
		target: ReviewerResultsTask
	}
	) => void
	): esri.Handle;
		on(
		type: "write-feature-as-result", listener: (event: {
		success: boolean,
		target: ReviewerResultsTask
	}) => void
	): esri.Handle;
		on(
		type: "write-result", listener: (event: {
		success: boolean,
		target: ReviewerResultsTask
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/ReviewerSession' {
				declare class ReviewerSession  {
		sessionId: number;
		sessionName: string;
		userName: string;
		versionName: string;
		constructor(sessionId: string, sessionName: string, userName: string, versionName: string): this;
		toString(): string
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/datareviewer/SessionOptions' {
				declare class SessionOptions  {
		duplicateFilter: string;
		storeGeometry: boolean;
		userName: string;
		versionName: string;
		constructor(userName: string, versionName: string, duplicateFilter: string, storeGeometry: boolean): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/AddressStudyArea' {
				declare class AddressStudyArea extends StudyArea {
		attributes: any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/DriveBuffer' {
				declare class DriveBuffer  {
		radius: number[];
		units: string;
		constructor(params: esri.DriveBufferOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/DriveUnits' {
				declare class DriveUnits  {
		ACRES: any;
		ARES: any;
		CENTIMETERS: any;
		DECIMAL_DEGREES: any;
		DECIMETERS: any;
		DEGREE_MINUTE_SECONDS: any;
		FEET: any;
		HECTARES: any;
		INCHES: any;
		KILOMETERS: any;
		METERS: any;
		MILES: any;
		MILLIMETERS: any;
		MINUTES: any;
		NAUTICAL_MILES: any;
		POINTS: any;
		SQUARE_CENTIMETERS: any;
		SQUARE_DECIMETERS: any;
		SQUARE_FEET: any;
		SQUARE_INCHES: any;
		SQUARE_KILOMETERS: any;
		SQUARE_METERS: any;
		SQUARE_MILES: any;
		SQUARE_MILLIMETERS: any;
		SQUARE_YARDS: any;
		UNKNOWN: any;
		YARDS: any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/GeographyLevel' {
				declare class GeographyLevel  {
		countryID: string;
		datasetID: string;
		layerID: string;
		constructor(json?: Object): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/GeographyQuery' {
				declare class GeographyQuery extends GeographyQueryBase {
		geographyIDs: string[];
		geographyLayerIDs: string[];
		where: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/GeographyQueryBase' {
				declare class GeographyQueryBase  {
		countryID: string;
		datasetID: string;
		featureLimit: number;
		generalizationLevel: number;
		outSR: SpatialReference;
		returnCentroids: boolean;
		returnGeometry: boolean;
		useFuzzySearch: boolean;
		constructor(json?: Object): this;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/GeometryStudyArea' {
				declare class GeometryStudyArea extends StudyArea {
		geometry: Geometry;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/IntersectingGeographies' {
				declare class IntersectingGeographies  {
		levels: GeographyLevel[]
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/RingBuffer' {
				declare class RingBuffer  {
		radii: number[];
		units: string;
		constructor(params: esri.RingBufferOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/StandardGeographyQueryTask' {
				declare class StandardGeographyQueryTask  {
		constructor(url?: string): this;
		execute(GeographyQuery: GeographyQueryBase): any;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: StandardGeographyQueryTask
	}) => void
	): esri.Handle;
		on(
		type: "execute-complete", listener: (
		event: {
		features: FeatureSet,
		target: StandardGeographyQueryTask
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/StandardGeographyStudyArea' {
				declare class StandardGeographyStudyArea extends StudyArea {
		countryID: string;
		geographyLayerID: string;
		ids: string[]
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/StudyArea' {
				declare class StudyArea  {
		attributes: any;
		comparisonGeographyLevels: GeographyLevel[];
		options: RingBuffer | DriveBuffer | IntersectingGeographies;
		returnGeometry: boolean;
		toJson(): any
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/geoenrichment/SubGeographyQuery' {
				declare class SubGeographyQuery extends GeographyQueryBase {
		filterGeographyIDs: string;
		filterGeographyLayerID: string;
		filterGeographyWhere: string;
		subGeographyLayerID: string;
		subGeographyWhere: string;
		constructor(json?: Object): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/locationproviders/CoordinatesLocationProvider' {
				declare class CoordinatesLocationProvider extends LocationProviderClientBase {
		xField: string;
		yField: string;
		constructor(options: esri.CoordinatesLocationProviderOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/locationproviders/GeometryLocationProvider' {
				declare class GeometryLocationProvider extends LocationProviderClientBase {
		geometryField: string;
		constructor(options: esri.GeometryLocationProviderOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/locationproviders/LocationProviderBase' {
				declare class LocationProviderBase  {
		geometryType: string;
		loaded: boolean;
		locate(features: Graphic[], options?: any): any;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: LocationProviderBase
	}) => void
	): esri.Handle;
		on(
		type: "load", listener: (event: {
		target: LocationProviderBase
	}) => void
	): esri.Handle;
		on(
		type: "locate-complete", listener: (
		event: {
		failed: Graphic[],
		features: Graphic[],
		target: LocationProviderBase
	}
	) => void
	): esri.Handle;
		on(
		type: "locate-progress", listener: (event: {
		features: Graphic[],
		target: LocationProviderBase
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/locationproviders/LocationProviderClientBase' {
				declare class LocationProviderClientBase extends LocationProviderBase {
		inSpatialReference: SpatialReference
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/locationproviders/LocationProviderRemoteBase' {
				declare class LocationProviderRemoteBase extends LocationProviderBase {
		
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/locationproviders/LocatorLocationProvider' {
				declare class LocatorLocationProvider extends LocationProviderRemoteBase {
		addressFields: any;
		locator: Locator;
		constructor(options: esri.LocatorLocationProviderOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/locationproviders/QueryTaskLocationProvider' {
				declare class QueryTaskLocationProvider extends LocationProviderRemoteBase {
		queryParameters: any;
		queryTask: QueryTask;
		unicode: boolean;
		whereFields: any;
		constructor(options?: esri.QueryTaskLocationProviderOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/locationproviders/StandardGeographyQueryLocationProvider' {
				declare class StandardGeographyQueryLocationProvider extends LocationProviderRemoteBase {
		geographyQueryTemplate: string;
		queryParameters: any;
		standardGeographyQueryTask: StandardGeographyQueryTask;
		constructor(options: esri.StandardGeographyQueryLocationProviderOptions): this
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/locator' {
				declare class Locator  {
		countryCode: string;
		outSpatialReference: SpatialReference;
		url: string;
		constructor(url: string): this;
		addressesToLocations(params: any, callback: Function, errback: Function): any;
		addressToLocations(params: any, callback?: Function, errback?: Function): any;
		locationToAddress(
		location: Point, distance: number, callback?: Function, errback?: Function
	): any;
		setOutSpatialReference(spatialReference: SpatialReference): void;
		suggestLocations(params: any): any;
		on(
		type: "addresses-to-locations-complete", listener: (event: {
		addresses: AddressCandidate[],
		target: Locator
	}) => void
	): esri.Handle;
		on(
		type: "address-to-locations-complete", listener: (event: {
		addresses: AddressCandidate[],
		target: Locator
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: Locator
	}) => void
	): esri.Handle;
		on(
		type: "location-to-address-complete", listener: (event: {
		address: AddressCandidate,
		target: Locator
	}) => void
	): esri.Handle;
		on(
		type: "suggest-locations-complete", listener: (event: {
		suggestions: any[],
		target: Locator
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/tasks/query' {
				declare class Query  {
		SPATIAL_REL_CONTAINS: any;
		SPATIAL_REL_CROSSES: any;
		SPATIAL_REL_ENVELOPEINTERSECTS: any;
		SPATIAL_REL_INDEXINTERSECTS: any;
		SPATIAL_REL_INTERSECTS: any;
		SPATIAL_REL_OVERLAPS: any;
		SPATIAL_REL_RELATION: any;
		SPATIAL_REL_TOUCHES: any;
		SPATIAL_REL_WITHIN: any;
		distance: number;
		geometry: Geometry;
		geometryPrecision: number;
		groupByFieldsForStatistics: string[];
		maxAllowableOffset: number;
		multipatchOption: string;
		num: number;
		objectIds: number[];
		orderByFields: string[];
		outFields: string[];
		outSpatialReference: SpatialReference;
		outStatistics: StatisticDefinition[];
		pixelSize: Symbol;
		quantizationParameters: any;
		relationParam: string;
		returnDistinctValues: boolean;
		returnGeometry: boolean;
		spatialRelationship: string;
		start: number;
		text: string;
		timeExtent: TimeExtent;
		units: string;
		where: string;
		constructor(): this
	}

	declare module.exports: undefined


}

declare module 'esri/toolbars/ImageServiceMeasureTool' {
				declare class ImageServiceMeasureTool  {
		angularUnit: string;
		areaUnit: string;
		fillSymbol: SimpleFillSymbol;
		linearUnit: string;
		lineSymbol: SimpleLineSymbol;
		markerSymbol: SimpleMarkerSymbol;
		constructor(params: esri.ImageServiceMeasureToolOptions): this;
		activate(operation: string): void;
		deactivate(): void;
		getSupportedMeasureOperations(): string[];
		getSupportedUnits(): string[];
		hideDrawTooltip(): void;
		setAngularUnit(unit: string): void;
		setAreaUnit(unit: string): void;
		setFillSymbol(fillSymbol: SimpleFillSymbol): void;
		setLinearUnit(unit: string): void;
		setLineSymbol(lineSymbol: SimpleLineSymbol): void;
		setMarkerSymbol(markerSymbol: SimpleMarkerSymbol): void;
		showDrawTooltip(): void;
		on(
		type: "draw-end", listener: (event: {
		geometry: Geometry,
		target: ImageServiceMeasureTool
	}) => void
	): esri.Handle;
		on(
		type: "draw-start", listener: (event: {
		target: ImageServiceMeasureTool
	}) => void
	): esri.Handle;
		on(
		type: "measure-end", listener: (event: {
		measureResult: any,
		target: ImageServiceMeasureTool
	}) => void
	): esri.Handle;
		on(
		type: "unit-change", listener: (event: {
		measureResult: any,
		target: ImageServiceMeasureTool
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/toolbars/draw' {
				declare class Draw  {
		ARROW: any;
		CIRCLE: any;
		DOWN_ARROW: any;
		ELLIPSE: any;
		EXTENT: any;
		FREEHAND_POLYGON: any;
		FREEHAND_POLYLINE: any;
		LEFT_ARROW: any;
		LINE: any;
		MULTI_POINT: any;
		POINT: any;
		POLYGON: any;
		POLYLINE: any;
		RECTANGLE: any;
		RIGHT_ARROW: any;
		TRIANGLE: any;
		UP_ARROW: any;
		fillSymbol: SimpleFillSymbol;
		lineSymbol: SimpleLineSymbol;
		markerSymbol: SimpleMarkerSymbol;
		respectDrawingVertexOrder: boolean;
		constructor(map: Map, options?: esri.DrawOptions): this;
		activate(geometryType: string, options?: any): void;
		deactivate(): void;
		finishDrawing(): void;
		setFillSymbol(fillSymbol: FillSymbol): void;
		setLineSymbol(lineSymbol: LineSymbol): void;
		setMarkerSymbol(markerSymbol: MarkerSymbol): void;
		setRespectDrawingVertexOrder(set: boolean): void;
		on(
		type: "draw-complete", listener: (
		event: {
		geographicGeometry: Geometry,
		geometry: Geometry,
		target: Draw
	}
	) => void
	): esri.Handle;
		on(
		type: "draw-end", listener: (event: {
		geometry: Geometry,
		target: Draw
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/toolbars/edit' {
				declare class Edit  {
		EDIT_TEXT: any;
		EDIT_VERTICES: any;
		MOVE: any;
		ROTATE: any;
		SCALE: any;
		constructor(map: Map, options?: esri.EditOptions): this;
		activate(tool: string, graphic: Graphic, options?: any): void;
		deactivate(): void;
		getCurrentState(): any;
		refresh(): void;
		on(
		type: "activate", listener: (event: {
		graphic: Graphic,
		tool: string,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "deactivate", listener: (
		event: {
		graphic: Graphic,
		info: any,
		tool: string,
		target: Edit
	}
	) => void
	): esri.Handle;
		on(
		type: "graphic-click", listener: (event: {
		graphic: Graphic,
		info: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "graphic-first-move", listener: (event: {
		graphic: Graphic,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "graphic-move", listener: (event: {
		graphic: Graphic,
		transform: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "graphic-move-start", listener: (event: {
		graphic: Graphic,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "graphic-move-stop", listener: (event: {
		graphic: Graphic,
		transform: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "rotate", listener: (event: {
		graphic: Graphic,
		info: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "rotate-first-move", listener: (event: {
		graphic: Graphic,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "rotate-start", listener: (event: {
		graphic: Graphic,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "rotate-stop", listener: (event: {
		graphic: Graphic,
		info: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "scale", listener: (event: {
		graphic: Graphic,
		info: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "scale-first-move", listener: (event: {
		graphic: Graphic,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "scale-start", listener: (event: {
		graphic: Graphic,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "scale-stop", listener: (event: {
		graphic: Graphic,
		info: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "vertex-add", listener: (event: {
		graphic: Graphic,
		vertexinfo: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "vertex-click", listener: (event: {
		graphic: Graphic,
		vertexinfo: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "vertex-delete", listener: (event: {
		graphic: Graphic,
		vertexinfo: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "vertex-first-move", listener: (event: {
		graphic: Graphic,
		vertexinfo: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "vertex-mouse-out", listener: (event: {
		graphic: Graphic,
		vertexinfo: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "vertex-mouse-over", listener: (event: {
		graphic: Graphic,
		vertexinfo: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "vertex-move", listener: (
		event: {
		graphic: Graphic,
		transform: any,
		vertexinfo: any,
		target: Edit
	}
	) => void
	): esri.Handle;
		on(
		type: "vertex-move-start", listener: (event: {
		graphic: Graphic,
		vertexinfo: any,
		target: Edit
	}) => void
	): esri.Handle;
		on(
		type: "vertex-move-stop", listener: (
		event: {
		graphic: Graphic,
		transform: any,
		vertexinfo: any,
		target: Edit
	}
	) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/toolbars/navigation' {
				declare class Navigation  {
		PAN: any;
		ZOOM_IN: any;
		ZOOM_OUT: any;
		constructor(map: Map): this;
		activate(navType: string): void;
		deactivate(): void;
		isFirstExtent(): boolean;
		isLastExtent(): boolean;
		setZoomSymbol(symbol: Symbol): void;
		zoomToFullExtent(): void;
		zoomToNextExtent(): void;
		zoomToPrevExtent(): void;
		on(
		type: "extent-history-change", listener: (event: {
		target: Navigation
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/undoManager' {
				declare class UndoManager  {
		canRedo: boolean;
		canUndo: boolean;
		length: number;
		position: number;
		constructor(options?: esri.UndoManagerOptions): this;
		add(operation: OperationBase): void;
		clearRedo(): void;
		clearUndo(): void;
		destroy(): void;
		get(operationId: number): OperationBase;
		peekRedo(): OperationBase;
		peekUndo(): OperationBase;
		redo(): void;
		remove(operationId: number): OperationBase;
		undo(): void;
		on(
		type: "add", listener: (event: {
		target: UndoManager
	}) => void
	): esri.Handle;
		on(
		type: "change", listener: (event: {
		target: UndoManager
	}) => void
	): esri.Handle;
		on(
		type: "redo", listener: (event: {
		target: UndoManager
	}) => void
	): esri.Handle;
		on(
		type: "undo", listener: (event: {
		target: UndoManager
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/units' {
				declare class Units  {
		ACRES: any;
		ARES: any;
		CENTIMETERS: any;
		DECIMAL_DEGREES: any;
		DECIMETERS: any;
		DEGREE_MINUTE_SECONDS: any;
		FEET: any;
		HECTARES: any;
		INCHES: any;
		KILOMETERS: any;
		METERS: any;
		MILES: any;
		MILLIMETERS: any;
		NAUTICAL_MILES: any;
		POINTS: any;
		SQUARE_CENTIMETERS: any;
		SQUARE_DECIMETERS: any;
		SQUARE_FEET: any;
		SQUARE_INCHES: any;
		SQUARE_KILOMETERS: any;
		SQUARE_METERS: any;
		SQUARE_MILES: any;
		SQUARE_MILLIMETERS: any;
		SQUARE_YARDS: any;
		UNKNOWN: any;
		YARDS: any
	}

	declare module.exports: undefined


}

declare module 'esri/urlUtils' {
					declare module.exports: undefined


}

declare module 'esri/virtualearth/VEAddress' {
				declare class VEAddress  {
		addressLine: string;
		adminDistrict: string;
		countryRegion: string;
		district: string;
		formattedAddress: string;
		locality: string;
		postalCode: string;
		postalTown: string
	}

	declare module.exports: undefined


}

declare module 'esri/virtualearth/VEGeocodeResult' {
				declare class VEGeocodeResult  {
		address: VEAddress;
		bestView: Extent;
		calculationMethod: string;
		confidence: string;
		displayName: string;
		entityType: string;
		location: Point;
		matchCodes: string
	}

	declare module.exports: undefined


}

declare module 'esri/virtualearth/VEGeocoder' {
				declare class VEGeocoder  {
		culture: string;
		constructor(options: esri.VEGeocoderOptions): this;
		addressToLocations(query: string, callback?: Function, errback?: Function): any;
		setCulture(culture: string): void;
		on(
		type: "address-to-locations-complete", listener: (event: {
		geocodeResults: VEGeocodeResult[],
		target: VEGeocoder
	}) => void
	): esri.Handle;
		on(
		type: "error", listener: (event: {
		error: Error,
		target: VEGeocoder
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/virtualearth/VETiledLayer' {
				declare class VETiledLayer extends TiledMapServiceLayer {
		MAP_STYLE_AERIAL: any;
		MAP_STYLE_AERIAL_WITH_LABELS: any;
		MAP_STYLE_ROAD: any;
		copyright: string;
		culture: string;
		mapStyle: string;
		constructor(options: esri.VETiledLayerOptions): this;
		setCulture(culture: string): void;
		setMapStyle(style: string): void;
		on(
		type: "map-style-change", listener: (event: {
		target: VETiledLayer
	}) => void
	): esri.Handle;
		on(type: string, listener: (event: any) => void): esri.Handle
	}

	declare module.exports: undefined


}

declare module 'esri/workers/WorkerClient' {
				declare class WorkerClient  {
		returnDeferreds: boolean;
		worker: Worker;
		constructor(path: string, deferreds?: boolean): this;
		addWorkerCallback(module: string, name?: string): any;
		importScripts(paths: string | string[]): any;
		postMessage(msg: any | any[], transfers?: any[]): any;
		setWorker(paths: string | string[]): void;
		terminate(): void
	}

	declare module.exports: undefined


}
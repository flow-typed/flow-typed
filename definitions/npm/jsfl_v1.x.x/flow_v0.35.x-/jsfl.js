

declare module 'jsfl' {
		declare interface FlashPoint {
		x: number,
		y: number
	}

	declare interface FlashPoint3D {
		z: number
	}

	declare interface FlashRectangle {
		top: number,
		right: number,
		bottom: number,
		left: number
	}

	declare interface FlashMatrix {
		a: number,
		b: number,
		c: number,
		d: number,
		tx: number,
		ty: number
	}

	declare interface FlashFilter {
		angle: number,
		blurX: number,
		blurY: number,
		brightness: number,
		color: any,
		contrast: number,
		distance: number,
		enabled: boolean,
		hideObject: boolean,
		highlightColor: any,
		hue: number,
		inner: boolean,
		knockout: boolean,
		name: string,
		quality: string,
		saturation: number,
		shadowColor: any,
		strength: number,
		type: string
	}

	declare interface FlashDocument {
		addDataToDocument(name: string, type: string, data: any): void,
		addDataToSelection(name: string, type: string, data: any): void,
		addFilter(filterName: string): void,
		addItem(position: FlashPoint, item: FlashItem): boolean,
		addNewLine(startPoint: FlashPoint, endpoint: FlashPoint): void,
		addNewOval(
		boundingRectangle: FlashRectangle, bSuppressFill?: boolean, bSuppressStroke?: boolean
	): void,
		addNewPrimitiveOval(
		boundingRectangle: FlashRectangle, bSpupressFill?: boolean, bSuppressStroke?: boolean
	): void,
		addNewRectangle(
		boundingRectangle: FlashRectangle, roundness: number, bSuppressFill?: boolean, bSuppressStroke?: boolean
	),
		addNewPrimitiveRectangle(
		boundingRectangle: FlashRectangle, roundness: number, bSuppressFill?: boolean, bSuppressStroke?: boolean
	),
		addNewPublishProfile(profileName?: string): void,
		addNewScene(name: string): boolean,
		addNewText(boundingRectangle: FlashRectangle, text?: string): void,
		align(alignmode: string, bUseDocumentBounds?: boolean),
		allowScreens(): void,
		arrange(arrangeMode: string): void,
		breakApart(): void,
		canEditSymbol(): boolean,
		canRevert(): boolean,
		canTestMovie(): boolean,
		canTestScene(): boolean,
		changeFilterOrder(oldIndex: number, newIndex: number): void,
		clipCopy(): void,
		clipCut(): void,
		clipPaste(bInPlace?: boolean): void,
		close(bPromptToSaveChanges?: boolean): void,
		convertLinesToFills(): void,
		convertToSymbol(type: string, name: string, registrationPoint: string): FlashSymbolInstance,
		crop(): void,
		debugMovie(abortIfErrorsExist?: boolean): void,
		deleteEnvelope(): boolean,
		deletePublishProfile(): boolean,
		deleteScene(): boolean,
		deleteSelection(): void,
		disableAllFilters(): void,
		disableFilter(filterIndex: number): void,
		disableOtherFilters(enabledFilterIndex: number): void,
		distribute(distributemode: string, bUseDocumentBounds?: boolean): void,
		distributeToLayers(): void,
		documentHasData(name: string): boolean,
		duplicatePublishProfile(profileName?: string): number,
		duplicateScene(): boolean,
		duplicateSelection(): void,
		editScene(index: number): void,
		enableAllFilters(): void,
		enableFilter(filterIndex: number): void,
		enterEditMode(editMode?: string): void,
		exitEditMode(): void,
		exportPNG(
		fileURI: string, bCurrentPNGSettings?: boolean, bCurrentFrame?: boolean
	): boolean,
		exportPublishProfile(fileURI: string): void,
		exportPublishProfileString(profileName?: string): string,
		exportSWF(fileURI: string, bCurrentSettings?: boolean): void,
		getAlignToDocument(): boolean,
		getBlendMode(): string,
		getCustomFill(objectToFill?: string): FlashFill,
		getCustomStroke(locationOfStroke?: string): FlashStroke,
		getDataFromDocument(name: string): any,
		getElementProperty(propertyName: string): any,
		getElementTextAttr(attrName: string, startIndex?: number, endIndex?: number): FlashTextAttrs,
		getFilters(): FlashFilter[],
		getMetadata(): string,
		getMobileSettings(): string,
		getPlayerVersion(): string,
		getSelectionRect(): FlashRectangle,
		getTextString(startIndex?: number, endIndex?: number): string,
		getTimeline(): FlashTimeline,
		getTransformationPoint(): FlashPoint,
		group(): void,
		importFile(fileURI: string, importToLibrary?: boolean): void,
		importPublishProfile(fileURI: string): number,
		importPublishProfileString(xmlString: string): number,
		importSWF(fileURI: string): void,
		intersect(): boolean,
		loadCuepointXML(uri: string): any[],
		match(bWidth: boolean, bHeight: boolean, bUseDocumentBounds?: boolean): void,
		mouseClick(position: FlashPoint, bToggleSel: boolean, bShiftSel: boolean): void,
		mouseDblClk(
		position: FlashPoint, bAltDown: boolean, bShiftDown: boolean, bShiftSelect: boolean
	): void,
		moveSelectedBezierPointsBy(delta: FlashPoint): void,
		moveSelectionBy(distanceToMove: FlashPoint): void,
		optimizeCurves(smoothing: number, bUseMultiplePasses: boolean): void,
		publish(): void,
		punch(): boolean,
		removeAllFilters(): void,
		removeDataFromDocument(name: string): void,
		removeDataFromSelection(name: string): void,
		removeFilter(filterIndex: number): void,
		renamePublishProfile(profileNewName?: string): boolean,
		renameScene(name: string): boolean,
		reorderScene(sceneToMove: number, sceneToPutItBefore: number): void,
		resetOvalObject(): void,
		resetRectangleObject(): void,
		resetTransformation(): void,
		revert(): void,
		rotate3DSelection(xyzCoordinate: FlashPoint3D, bGlobalTransform: boolean): void,
		rotateSelection(angle: number, rotationPoint?: string): void,
		save(bOkToSaveAs?: boolean): boolean,
		saveAndCompact(bOkToSaveAs?: boolean): boolean,
		scaleSelection(xScale: number, yScale: number, whichCorner?: string): void,
		selectAll(): void,
		selectNone(): void,
		setAlignToDocument(bToStage?: boolean): void,
		setBlendMode(mode: string): void,
		setCustomFill(fill: FlashFill): void,
		setCustomStroke(stroke: FlashStroke): void,
		setElementProperty(property: string, value: number): void,
		setElementTextAttr(
		attrName: string, attrValue: FlashTextAttrs, startIndex?: number, endIndex?: number
	): boolean,
		setFillColor(color: any): void,
		setFilterProperty(property: string, filterIndex: number, value: any): void,
		setFilters(filterArray: FlashFilter[]): void,
		setInstanceAlpha(opacity: number): void,
		setInstanceBrightness(brightness: number): void,
		setInstanceTint(color: any, strength: number): void,
		setMetadata(strMetadata: string): boolean,
		setMobileSettings(xmlString: string): boolean,
		setOvalObjectProperty(propertyName: string, value: any): void,
		setPlayerVersion(version: string): boolean,
		setRectangleObjectProperty(propertyName: string, value: any): void,
		setSelectionBounds(boundingRectangle: FlashRectangle, bContactSensitiveSelection?: boolean): void,
		setSelectionRect(
		rect: FlashRectangle, bReplaceCurrentSelection?: boolean, bContactSensitiveSelection?: boolean
	): void,
		setStageVanishingPoint(point: FlashPoint): void,
		setStageViewAngle(angle: number): void,
		setStroke(color: any, size: number, strokeType: string): void,
		setStrokeColor(color: any): void,
		setStrokeSize(size: number): void,
		setStrokeStyle(strokeType: string): void,
		setTextRectangle(boundingRectangle: FlashRectangle): boolean,
		setTextSelection(startIndex: number, endIndex: number): boolean,
		setTextString(text: string, startIndex?: number, endIndex?: number): boolean,
		setTransformationPoint(transformationPoint: FlashPoint): void,
		skewSelection(xSkew: number, ySkew: number, whichEdge?: string): void,
		smoothSelection(): void,
		space(direction: string, bUseDocumentBounds?: boolean): void,
		straightenSelection(): void,
		swapElement(name: string): void,
		swapStrokeAndFill(): void,
		testMovie(): void,
		testScene(): void,
		traceBitmap(
		threshold: number, minimumArea: number, curveFit: string, cornerThreshold: string
	): void,
		transformSelection(a: number, b: number, c: number, d: number): void,
		unGroup(): void,
		union(): void,
		unlockAllElements(): void,
		xmlPanel(fileURI: string): any,
		accName: string,
		as3AutoDeclare: boolean,
		as3Dialect: string,
		as3ExportFrame: number,
		as3StrictMode: boolean,
		as3WarningsMode: boolean,
		asVersion: number,
		autoLabel: boolean,
		backgroundColor: any,
		currentPublishProfile: string,
		currentTimeline: FlashTimeline,
		description: string,
		docClass: <<UNKNOWN PARAM FORMAT>>,
		forceSimple: boolean,
		frameRate: number,
		height: number,
		id: number,
		library: FlashLibrary,
		livePreview: boolean,
		name: string,
		path: string,
		pathURI: string,
		publishProfiles: string[],
		selection: FlashElement[],
		silent: boolean,
		timelines: FlashTimeline[],
		viewMatrix: FlashMatrix,
		width: number,
		zoomFactor: number
	}

	declare interface FlashText {
		getTextAttr(),
		getTextString(),
		setTextAttr(),
		setTextString(),
		accName: string,
		antiAliasSharpness: number,
		antiAliasThickness: number,
		autoExpand: boolean,
		border: boolean,
		description: string,
		embeddedCharacters: string
	}

	declare interface FlashTextAttrs {
		aliasText: boolean,
		alignment: string,
		autoKern: boolean,
		bold: boolean,
		characterPosition: string,
		characterSpacing: number,
		face: string,
		fillColor: any,
		indent: number,
		italic: boolean,
		leftMargin: number,
		letterSpacing: number,
		lineSpacing: number,
		rightMargin: number,
		rotation: boolean,
		size: number,
		target: string,
		url: string
	}

	declare interface FlashFLfile {
		copy(fileURI: string, copyURI: string): boolean,
		createFolder(folderURI: string): boolean,
		exists(fileURI: string): boolean,
		getAttributes(fileOrFolderURI: string): string,
		getCreationDate(fileOrFolderURI: string): string,
		getCreationDateObj(fileOrFolderURI: string): Date,
		getModificationDate(fileOrFolderURI: string): string,
		getModificationDateObj(fileOrFolderURI: string): Date,
		getSize(fileURI: string): number,
		listFolder(folderURI: string, filesOrDirectories?: boolean): string[],
		platformPathToURI(fileName: string): string,
		read(fileOrFolderURI: string): string,
		remove(fileOrFolderURI: string): boolean,
		setAttributes(fileURI: string, strAttrs: string): boolean,
		uriToPlatformPath(fileURI: string): string,
		write(fileURI: string, textToWrite: string, strAppendMode?: string): boolean
	}

	declare interface FlashSoundItem {
		
	}

	declare interface FlashInstance {
		instanceType?: string,
		libraryItem?: FlashItem
	}

	declare interface _FlashBitmap {
		width: <<UNKNOWN PARAM FORMAT>>,
		height: <<UNKNOWN PARAM FORMAT>>,
		depth: <<UNKNOWN PARAM FORMAT>>,
		bits: <<UNKNOWN PARAM FORMAT>>,
		cTab?: string[]
	}

	declare interface FlashBitmapInstance {
		getBits(): _FlashBitmap,
		setBits(bitmap: _FlashBitmap): void,
		hPixels: number,
		vPixels: number
	}

	declare interface FlashCompiledClipInstance {
		accName: string,
		actionScript: string,
		description: string,
		forceSimple: boolean,
		shortcut: string,
		silent: boolean,
		tabIndex: number
	}

	declare interface FlashSymbolInstance {
		accName: string,
		actionScript: string,
		backgroundColor: string,
		bitmapRenderMode: string,
		blendMode: string,
		buttonTracking: string,
		cacheAsBitmap: boolean,
		colorAlphaAmount: number,
		colorAlphaPercent: number,
		colorBlueAmount: number,
		colorBluePercent: number,
		colorGreenAmount: number,
		colorGreenPercent: number,
		colorMode: string,
		colorRedAmount: number,
		colorRedPercent: number,
		description: string,
		filters: FlashFilter[],
		firstFrame: number,
		forceSimple: boolean,
		loop: string,
		shortcut: string,
		silent: boolean,
		symbolType: string,
		tabIndex: number,
		useBackgroundColor: boolean,
		visible: boolean
	}

	declare interface FlashComponentInstance {
		parameters: any[]
	}

	declare interface FlashShape {
		getCubicSegmentPoints(cubicSegmentIndex: number): FlashPoint[],
		beginEdit(): void,
		deleteEdge(index: number): void,
		endEdit(): void,
		contours: FlashContour[],
		edges: FlashEdge[],
		isDrawingObject: boolean,
		isGroup: boolean,
		isOvalObject: boolean,
		isRectangleObject: boolean,
		members: FlashShape[],
		numCubicSegments: number,
		vertices: FlashVertex[]
	}

	declare interface FlashElement {
		getPersistentData(name: string): any,
		getTransformationPoint(): FlashPoint,
		hasPersistentData(name: string): boolean,
		removePersistentData(name: string): void,
		setPersistentData(name: string, type: string, value: any): void,
		setTransformationPoint(transformationPoint: FlashPoint): void,
		depth: number,
		elementType: string,
		height: number,
		layer: FlashLayer,
		left: number,
		locked: boolean,
		matrix: FlashMatrix,
		name: string,
		rotation: number,
		scaleX: number,
		scaleY: number,
		selected: boolean,
		skewX: number,
		skewY: number,
		top: number,
		transformX: number,
		transformY: number,
		width: number,
		x: number,
		y: number
	}

	declare interface FlashFrame {
		getCustomEase(),
		setCustomEase(),
		actionScript: <<UNKNOWN PARAM FORMAT>>,
		duration: <<UNKNOWN PARAM FORMAT>>,
		elements: FlashElement[],
		hasCustomEase: <<UNKNOWN PARAM FORMAT>>,
		labelType: <<UNKNOWN PARAM FORMAT>>,
		motionTweenOrientToPath: <<UNKNOWN PARAM FORMAT>>,
		motionTweenRotate: <<UNKNOWN PARAM FORMAT>>,
		motionTweenRotateTimes: <<UNKNOWN PARAM FORMAT>>,
		motionTweenScale: <<UNKNOWN PARAM FORMAT>>,
		motionTweenSnap: <<UNKNOWN PARAM FORMAT>>,
		motionTweenSync: <<UNKNOWN PARAM FORMAT>>,
		name: <<UNKNOWN PARAM FORMAT>>,
		shapeTweenBlend: <<UNKNOWN PARAM FORMAT>>,
		soundEffect: <<UNKNOWN PARAM FORMAT>>,
		soundLibraryItem: FlashSoundItem,
		soundLoop: <<UNKNOWN PARAM FORMAT>>,
		soundLoopMode: <<UNKNOWN PARAM FORMAT>>,
		soundName: <<UNKNOWN PARAM FORMAT>>,
		soundSync: <<UNKNOWN PARAM FORMAT>>,
		startFrame: <<UNKNOWN PARAM FORMAT>>,
		tweenEasing: <<UNKNOWN PARAM FORMAT>>,
		tweenType: <<UNKNOWN PARAM FORMAT>>,
		useSingleEaseCurve: <<UNKNOWN PARAM FORMAT>>
	}

	declare interface FlashSymbolItem {
		convertToCompiledClip(): void,
		exportSWC(outputURI: string): void,
		exportSWF(outputURI: string): void,
		scalingGrid: boolean,
		scalingGridRect: FlashRectangle,
		sourceAutoUpdate: boolean,
		sourceFilePath: string,
		sourceLibraryName: string,
		symbolType: string,
		timeline: FlashTimeline
	}

	declare interface FlashFolderItem {
		
	}

	declare interface FlashFontItem {
		bitmap: boolean,
		bold: boolean,
		embeddedCharacters: string,
		embedRanges: string,
		embedVariantGlyphs: boolean,
		font: string,
		isDefineFont4Symbol: boolean,
		italic: boolean,
		size: number
	}

	declare interface FlashSoundItem {
		exportToFile(fileURI: string): boolean,
		bitRate: string,
		bits: string,
		compressionType: string,
		convertStereoToMono: boolean,
		fileLastModifiedDate: string,
		originalCompressionType: string,
		quality: string,
		sampleRate: string,
		sourceFileExists: boolean
	}

	declare interface FlashVideoItem {
		exportToFLV(fileURI: string): boolean,
		fileLastModifiedDate: string,
		sourceFileExists: boolean,
		sourceFileIsCurrent: boolean,
		sourceFilePath: string,
		videoType: string
	}

	declare interface FlashBitmapItem {
		exportToFile(fileURI: string): boolean,
		allowSmoothing: boolean,
		compressionType: string,
		fileLastModifiedDate: string,
		originalCompressionType: string,
		sourceFileExists: boolean,
		sourceFileIsCurrent: boolean,
		sourceFilePath: string,
		useDeblocking: boolean,
		useImportedJPEGQuality: boolean
	}

	declare interface FlashItem {
		addData(name: string, type: string, data: any): void,
		getData(name: string): any,
		hasData(name: string): boolean,
		removeData(name: string): void,
		itemType: string,
		linkageBaseClass: string,
		linkageClassName: string,
		linkageExportForAS: boolean,
		linkageExportForRS: boolean,
		linkageExportInFirstFrame: boolean,
		linkageIdentifier: string,
		linkageImportForRS: boolean,
		linkageURL: string,
		name: string
	}

	declare interface FlashLayer {
		color: any,
		frameCount: number,
		frames: FlashFrame[],
		height: number,
		layerType: string,
		locked: boolean,
		name: string,
		outline: boolean,
		parentLayer: FlashLayer,
		visible: boolean
	}

	declare interface FlashLibrary {
		addItemToDocument(position: FlashPoint, namePath?: string): boolean,
		addNewItem(type: string, namePath?: string): boolean,
		deleteItem(namePath?: string): boolean,
		duplicateItem(namePath: string): boolean,
		editItem(namePath?: string): boolean,
		expandFolder(bExpand: boolean, bRecurseNestedParents?: boolean, namePath?: string): boolean,
		findItemIndex(namePath: string): number,
		getItemProperty(property: string): string,
		getItemType(namePath?: string): string,
		getSelectedItems(): FlashItem[],
		importEmbeddedSWF(linkageName: string, swfData: any[], libName?: string): void,
		itemExists(namePath: string): boolean,
		moveToFolder(folderPath: string, itemToMove?: string, bReplace?: boolean): boolean,
		newFolder(folderPath?: string): boolean,
		renameItem(name: string): boolean,
		selectAll(bSelectAll?: boolean): void,
		selectItem(
		namePath: string, bReplaceCurrentSelection?: boolean, bSelect?: boolean
	): boolean,
		selectNone(): void,
		setItemProperty(property: string, value: any): void,
		updateItem(namePath: string): boolean,
		items: FlashItem[]
	}

	declare interface FlashMath {
		concatMatrix(mat1: FlashMatrix, mat2: FlashMatrix): FlashMatrix,
		invertMatrix(mat: FlashMatrix): FlashMatrix,
		pointDistance(pt1: FlashPoint, pt2: FlashPoint): number
	}

	declare interface FlashOutputPanel {
		clear(): void,
		save(fileURI: string, bAppendToFile?: boolean, bUseSystemEncoding?: boolean): void,
		trace(message: string): void
	}

	declare interface FlashHalfEdge {
		getEdge(): FlashEdge,
		getNext(): FlashHalfEdge,
		getOppositeHalfEdge(): FlashHalfEdge,
		getPrev(): FlashHalfEdge,
		getVertex(): FlashVertex,
		id: number,
		index: number
	}

	declare interface FlashOval {
		closePath: boolean,
		endAngle: number,
		innerRadius: number,
		startAngle: number
	}

	declare interface FlashFill {
		bitmapIsClipped: boolean,
		bitmapPath: string,
		color: any,
		colorArray: any[],
		focalPoint: number,
		linearRGB: boolean,
		matrix: FlashMatrix,
		overflow: string,
		posArray: number[],
		style: string
	}

	declare interface FlashContour {
		getHalfEdge(): FlashHalfEdge,
		fill: FlashFill,
		interior: boolean,
		orientation: number
	}

	declare interface FlashStroke {
		breakAtCorners: boolean,
		capType: string,
		color: any,
		curve: string,
		dash1: number,
		dash2: number,
		density: string,
		dotSize: string,
		dotSpace: number,
		hatchThickness: string,
		jiggle: string,
		joinType: string,
		length: string,
		miterLimit: number,
		pattern: string,
		rotate: string,
		scaleType: string,
		shapeFill: FlashFill,
		space: string,
		strokeHinting: boolean,
		style: string,
		thickness: number,
		variation: string,
		waveHeight: string,
		waveLength: string
	}

	declare interface FlashEdge {
		getControl(i: number): FlashPoint,
		getHalfEdge(index: number): FlashHalfEdge,
		setControl(index: number, x: number, y: number): void,
		splitEdge(t: number): void,
		cubicSegmentIndex: number,
		id: number,
		isLine: boolean,
		stroke: FlashStroke
	}

	declare interface FlashVertex {
		getHalfEdge(): FlashHalfEdge,
		setLocation(x: number, y: number),
		x: number,
		y: number
	}

	declare interface FlashTimeline {
		addMotionGuide(): number,
		addNewLayer(name?: string, layerType?: string, bAddAbove?: boolean),
		clearFrames(startFrameIndex?: number, endFrameIndex?: number): void,
		clearKeyframes(startFrameIndex?: number, endFrameIndex?: number): void,
		convertToBlankKeyframes(startFrameIndex?: number, endFrameIndex?: number): void,
		convertToKeyframes(startFrameIndex?: number, endFrameIndex?: number): void,
		copyFrames(startFrameIndex?: number, endFrameIndex?: number): void,
		copyLayers(startFrameIndex?: number, endFrameIndex?: number): void,
		copyMotion(): void,
		copyMotionAsAS3(): void,
		createMotionObject(startFrameIndex?: number, endFrameIndex?: number): void,
		createMotionTween(startFrameIndex?: number, endFrameIndex?: number): void,
		cutFrames(startFrameIndex?: number, endFrameIndex?: number): void,
		cutLayers(startLayerIndex?: number, endLayerIndex?: number): void,
		deleteLayer(index: number): void,
		duplicateLayers(startFrameIndex?: number, endFrameIndex?: number): void,
		expandFolder(bExpand: boolean, bRecurseNestedParents?: boolean, index?: number): void,
		findLayerIndex(name: string): number[],
		getFrameProperty(property: string, startframeIndex?: number, endFrameIndex?: number): any,
		getGuidelines(): string,
		getLayerProperty(property: string): any,
		getSelectedFrames(): FlashFrame[],
		getSelectedLayers(): FlashLayer[],
		insertBlankKeyframe(frameNumIndex?: number): void,
		insertFrames(numFrames?: number, bAllLayers?: boolean, frameNumIndex?: number): void,
		insertKeyframe(frameNumIndex?: number): void,
		pasteFrames(startFrameIndex?: number, endFrameIndex?: number): void,
		pasteLayers(layerIndex: number): number,
		pasteMotion(): void,
		removeFrames(startFrameIndex?: number, endFrameIndex?: number): void,
		removeMotionObject(startFrame: number, endFrame: number): void,
		reorderLayer(layerToMove: number, layerToPutItBy: number, bAddBefore?: boolean): void,
		reverseFrames(startFrameIndex?: number, endFrameIndex?: number): void,
		selectAllFrames(): void,
		setFrameProperty(
		property: string, value: any, startFrameIndex?: number, endFrameIndex?: number
	): void,
		setGuidelines(xmlString: string): boolean,
		setLayerProperty(property: string, value: any, layersToChange?: string): void,
		setSelectedFrames(
		startFrameIndex: number, endFrameIndex: number, bReplaceCurrentSelection?: boolean
	): void,
		setSelectedFrames(selectionList: number[], bReplaceCurrentSelection?: boolean): void,
		setSelectedLayers(index: number, bReplaceCurrentSelection?: boolean): void,
		showLayerMasking(layer: number): void,
		startPlayback(): void,
		stopPlayback(): void,
		currentFrame: number,
		currentLayer: number,
		frameCount: number,
		layerCount: number,
		layers: FlashLayer[],
		name: string,
		libraryItem: FlashItem
	}

	declare interface FlashPath {
		addCubicCurve(
		xAnchor: number, yAnchor: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number
	): void,
		addCurve(
		xAnchor: number, yAnchor: number, x2: number, y2: number, x3: number, y3: number
	): void,
		addPoint(x: number, y: number): void,
		clear(): void,
		close(),
		void: <<UNKNOWN PARAM FORMAT>>,
		makeShape(bSupressFill?: boolean, bSupressStroke?: boolean): void,
		newContour(): void,
		nPts: number
	}

	declare interface FlashDrawingLayer {
		beginDraw(persistentDraw?: boolean): void,
		beginFrame(): void,
		cubicCurveTo(
		x1Ctrl: number, y1Ctrl: number, x2Ctl: number, y2Ctl: number, xEnd: number, yEnd: number
	): void,
		curveTo(xCtl: number, yCtl: number, xEnd: number, yEnd: number): void,
		drawPath(path: FlashPath): void,
		endDraw(): void,
		endFrame(): void,
		lineTo(x: number, y: number): void,
		moveTo(x: number, y: number): void,
		newPath(): void,
		setColor(color: any): void,
		setFill(): void,
		setStroke(): void
	}

	declare interface FlashXMLUI {
		accept(),
		cancel(),
		get(),
		getControlItemElement(),
		getEnabled(),
		getVisible(),
		set(),
		setControItemElement(),
		setControItemElements(),
		setEnabled(),
		setVisible()
	}

	declare interface FlashActionsPanel {
		getClassForObject(),
		getScriptAssistMode(),
		getSelectedText(),
		getText(),
		hasSelection(),
		replaceSelectedText(),
		setScriptAssistMode(),
		setSelection(),
		setText()
	}

	declare interface FlashCompilerErrors {
		clear(),
		save()
	}

	declare interface FlashComponentsPanel {
		addItemToDocument(),
		reload()
	}

	declare interface FlashPresetPanel {
		addNewItem(),
		applyPreset(),
		deleteFolder(),
		deleteItem(),
		expandFolder(),
		exportItem(),
		findItemIndex(),
		getSelectedItems(),
		importItem(),
		moveToFolder(),
		newFolder(),
		renameItem(),
		selectItem()
	}

	declare interface FlashSwfPanel {
		call(),
		setFocus(),
		name: <<UNKNOWN PARAM FORMAT>>,
		path: <<UNKNOWN PARAM FORMAT>>
	}

	declare interface FlashTools {
		constraintPoint(),
		getKeyDown(),
		setCreatingBbox(),
		setCursor(),
		snapPoint(),
		activeTool: <<UNKNOWN PARAM FORMAT>>,
		altIsDown: <<UNKNOWN PARAM FORMAT>>,
		ctlIsDown: <<UNKNOWN PARAM FORMAT>>,
		mouseIsDown: <<UNKNOWN PARAM FORMAT>>,
		penDownLoc: <<UNKNOWN PARAM FORMAT>>,
		penLoc: <<UNKNOWN PARAM FORMAT>>,
		shiftIsDown: <<UNKNOWN PARAM FORMAT>>,
		toolObjs: <<UNKNOWN PARAM FORMAT>>
	}

	declare interface FlashFL {
		addEventListener(
		eventType: <<UNKNOWN PARAM FORMAT>>, callbackFunction: <<UNKNOWN PARAM FORMAT>>
	),
		browseForFileURL(
		browseType: <<UNKNOWN PARAM FORMAT>>, title?: <<UNKNOWN PARAM FORMAT>>, previewArea?: <<UNKNOWN PARAM FORMAT>>, fileFilter?: <<UNKNOWN PARAM FORMAT>>
	),
		browseForFolderURL(description: string),
		clearPublishCache(): void,
		clipCopyString(string: string): void,
		closeAll(bPromptToSave?: boolean): void,
		closeAllPlayerDocuments(): boolean,
		closeDocument(documentObject: FlashDocument, bPromptToSaveChanges?: boolean),
		createDocument(document?: string): FlashDocument,
		exportPublishProfileString(ucfURI: string, profileName: string): string,
		fileExists(fileURI: string): boolean,
		findDocumentDOM(id: number): FlashDocument,
		findDocumentIndex(name: string): number[],
		findObjectInDocByName(
		instanceName: string, document: FlashDocument
	): {
		keyframe: FlashFrame,
		layer: FlashLayer,
		timeline: FlashTimeline,
		parent: <<UNKNOWN PARAM FORMAT>>
	}[],
		findObjectInDocByType(elementType: string, document: FlashDocument): any[],
		getAppMemoryInfo(memType: number),
		getDocumentDOM(): FlashDocument,
		getSwfPanel(),
		isFontInstalled(),
		mapPlayerURL(URI: string, returnMBCS?: boolean): string,
		openDocument(fileURI: string): FlashDocument,
		openScript(fileURI: string, createExtension?: string, className?: string): void,
		quit(bPromptIfNeeded?: boolean): void,
		reloadTools(): void,
		removeEventListener(eventType: string): boolean,
		resetAS3PackagePaths(): void,
		resetPackagePaths(): void,
		revertDocument(document: FlashDocument): void,
		runScript(fileURI: string, funcName?: Function, args?: any[]): any,
		saveAll(): void,
		saveDocument(document: FlashDocument, fileURI?: string): boolean,
		saveDocumentAs(document: FlashDocument): boolean,
		selectElement(elementObject: FlashElement, editMode: boolean): boolean,
		selectTool(toolName: string): void,
		selectActiveWindow(document: FlashDocument, bActivateFrame?: boolean): void,
		showIdleMessage(show: boolean): void,
		toggleBreakpoint(),
		trace(message: any): void,
		actionsPanel: FlashActionsPanel,
		as3PackagePaths: string,
		compilerErrors: FlashCompilerErrors,
		componentsPanel: FlashComponentsPanel,
		configDirectory: string,
		configURI: string,
		contactSensitiveSelection: boolean,
		createNewDocList: string[],
		createNewDocListType: string[],
		createNewTemplateList: string[],
		documents: FlashDocument[],
		drawingLayer: FlashDrawingLayer,
		externalLibraryPath: string,
		flexSDKPath: string,
		installedPlayers: any[],
		languageCode: string,
		libraryPath: string,
		Math: FlashMath,
		mruRecentFileList: string[],
		mruRecentFileListType: string[],
		packagePaths: string[],
		publishCacheDiskSizeMax: number,
		publishCacheEnabled: boolean,
		publishCacheMemoryEntrySizeLimit: number,
		publishCacheMemorySizeMax: number,
		objectDrawingMode: number,
		outputPanel: FlashOutputPanel,
		presetPanel: FlashPresetPanel,
		scriptURI: string,
		sourcePath: string,
		swfPanels: FlashSwfPanel[],
		tools: FlashTools[],
		version: string,
		xmlui: FlashXMLUI
	}

	declare function alert(alertText: string): void

	declare function confirm(strAlert: string): boolean

	declare function prompt(promptMsg: string, text?: string): string

	declare class SpriteSheetExporter  {
		addBitmap(item: FlashItem);
		addSymbol(item: FlashItem, name?: string, beginFrame?: number, endFrame?: number);
		algorithm: string;
		allowRotate: boolean;
		allowTrimming: boolean;
		app: string;
		autoSize: boolean;
		beginExport();
		borderPadding: number;
		canBorderPad: boolean;
		canRotate: boolean;
		canTrim: boolean;
		canShapePad: boolean;
		canStackDuplicateFrames: boolean;
		changeSymbol();
		exportSpriteSheet(fileURL: string, option: Object, writeMetaData?: boolean): string;
		format: string;
		image: string;
		layoutFormat: string;
		maxSheetHeight: number;
		maxSheetWidth: number;
		overflowed: boolean;
		removeBitmap();
		removeSymbol();
		shapePadding: number;
		sheetHeight: number;
		sheetWidth: number;
		stackDuplicateFrames: boolean;
		version: string
	}

	
}
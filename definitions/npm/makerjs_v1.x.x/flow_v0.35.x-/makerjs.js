

declare module 'makerjs' {
					
}

declare module 'npm$namespace$MakerJs' {
		declare interface IPoint {
		[index: number]: number
	}

	declare interface IMeasure {
		low: IPoint,
		high: IPoint
	}

	declare interface IMeasureMap {
		[key: string]: IMeasure
	}

	declare interface IPath {
		type: string,
		origin: IPoint,
		layer?: string
	}

	declare interface IPathLine {
		end: IPoint
	}

	declare interface IPathCircle {
		radius: number
	}

	declare interface IPathArc {
		startAngle: number,
		endAngle: number
	}

	declare interface IPathBezierSeed {
		controls: IPoint[],
		parentRange?: IBezierRange
	}

	declare interface IBezierRange {
		startT: number,
		endT: number
	}

	declare interface IPathArcInBezierCurve {
		bezierData: IBezierRange
	}

	declare interface IPathFunctionMap {
		[type: string]: (pathValue: IPath) => void
	}

	declare interface IPathOriginFunctionMap {
		[type: string]: (id: string, pathValue: IPath, origin: IPoint, layer: string) => void
	}

	declare interface ISlope {
		hasSlope: boolean,
		slope?: number,
		line: IPathLine,
		yIntercept?: number
	}

	declare interface IPathIntersectionBaseOptions {
		excludeTangents?: boolean,
		out_AreOverlapped?: boolean
	}

	declare interface IPathIntersectionOptions {
		path1Offset?: IPoint,
		path2Offset?: IPoint
	}

	declare interface IPathIntersection {
		intersectionPoints: IPoint[],
		path1Angles?: number[],
		path2Angles?: number[]
	}

	declare interface IPointMatchOptions {
		pointMatchingDistance?: number
	}

	declare interface ICombineOptions {
		trimDeadEnds?: boolean,
		farPoint?: IPoint,
		measureA?: measure.Atlas,
		measureB?: measure.Atlas
	}

	declare interface IFindLoopsOptions {
		removeFromOriginal?: boolean
	}

	declare interface ISimplifyOptions {
		pointMatchingDistance?: number,
		scalarMatchingDistance?: number
	}

	declare interface IPathDirectional {
		endPoints: IPoint[],
		reversed?: boolean
	}

	declare interface IPathMap {
		[id: string]: IPath
	}

	declare interface IModelMap {
		[id: string]: IModel
	}

	declare interface IModel {
		origin?: IPoint,
		type?: string,
		paths?: IPathMap,
		models?: IModelMap,
		units?: string,
		notes?: string,
		layer?: string,
		exporterOptions?: {
		[exporterName: string]: any
	}
	}

	declare interface IModelPathCallback {
		(modelContext: IModel, pathId: string, pathContext: IPath): void
	}

	declare interface IRefPathIdInModel {
		modelContext: IModel,
		pathId: string
	}

	declare interface IRouteOffset {
		layer: string,
		offset: IPoint,
		route: string[],
		routeKey: string
	}

	declare interface IWalkPath {
		pathContext: IPath
	}

	declare interface IWalkPathCallback {
		(context: IWalkPath): void
	}

	declare interface IWalkPathBooleanCallback {
		(context: IWalkPath): boolean
	}

	declare interface IChainLink {
		walkedPath: IWalkPath,
		reversed: boolean,
		endPoints: IPoint[]
	}

	declare interface IChain {
		links: IChainLink[],
		endless?: boolean
	}

	declare interface IChainCallback {
		(chains: IChain[], loose: IWalkPath[], layer: string): void
	}

	declare interface IFindChainsOptions {
		byLayers?: boolean,
		shallow?: boolean
	}

	declare interface IRefModelInModel {
		parentModel: IModel,
		childId: string,
		childModel: IModel
	}

	declare interface IWalkModel {
		
	}

	declare interface IWalkModelCallback {
		(context: IWalkModel): void
	}

	declare interface IWalkModelCancellableCallback {
		(context: IWalkModel): boolean
	}

	declare interface IWalkOptions {
		onPath?: IWalkPathCallback,
		beforeChildWalk?: IWalkModelCancellableCallback,
		afterChildWalk?: IWalkModelCallback
	}

	declare interface IMetaParameter {
		title: string,
		type: string,
		min?: number,
		max?: number,
		step?: number,
		value: any
	}

	declare interface IKit {
		new (...args: any[]): IModel,
		metaParameters?: IMetaParameter[],
		notes?: string
	}

	declare interface ICollectionKeyComparer<K> {
		(a: K, b: K): boolean
	}

	declare interface ICollection<K, T> {
		key: K,
		items: T[]
	}

	declare function round(n: number, accuracy?: number): number

	declare function createRouteKey(route: string[]): string

	declare function cloneObject<T>(objectToClone: T): T

	declare function extendObject(target: Object, other: Object): Object

	declare function isFunction(value: any): boolean

	declare function isNumber(value: any): boolean

	declare function isObject(value: any): boolean

	declare function isPoint(item: any): boolean

	declare function isPath(item: any): boolean

	declare function isPathLine(item: any): boolean

	declare function isPathCircle(item: any): boolean

	declare function isPathArc(item: any): boolean

	declare function isPathArcInBezierCurve(item: any): boolean

	declare function isModel(item: any): boolean

	declare class Collector<K, T>  {
		collections: ICollection<K, T>[];
		constructor(comparer?: ICollectionKeyComparer<K>): this;
		addItemToCollection(key: K, item: T): void;
		findCollection(key: K, action?: (index: number) => void): T[];
		removeCollection(key: K): boolean;
		removeItemFromCollection(key: K, item: T): boolean;
		getCollectionsOfMultiple(cb: (key: K, items: T[]) => void): void
	}

	
}

declare module 'angle' {
			declare function noRevolutions(angleInDegrees: number): number

	declare function toRadians(angleInDegrees: number): number

	declare function toDegrees(angleInRadians: number): number

	declare function ofArcEnd(arc: IPathArc): number

	declare function ofArcMiddle(arc: IPathArc, ratio?: number): number

	declare function ofArcSpan(arc: IPathArc): number

	declare function ofLineInDegrees(line: IPathLine): number

	declare function ofPointInDegrees(origin: IPoint, pointToFindAngle: IPoint): number

	declare function ofPointInRadians(origin: IPoint, pointToFindAngle: IPoint): number

	declare function mirror(angleInDegrees: number, mirrorX: boolean, mirrorY: boolean): number

		
}

declare module 'point' {
			declare function add(a: IPoint, b: IPoint, subtract?: boolean): IPoint

	declare function average(a: IPoint, b: IPoint): IPoint

	declare function clone(pointToClone: IPoint): IPoint

	declare function closest(referencePoint: IPoint, pointOptions: IPoint[]): IPoint

	declare function fromPolar(angleInRadians: number, radius: number): IPoint

	declare function fromAngleOnCircle(angleInDegrees: number, circle: IPathCircle): IPoint

	declare function fromArc(arc: IPathArc): IPoint[]

	declare function fromPathEnds(pathContext: IPath, pathOffset?: IPoint): IPoint[]

	declare function fromSlopeIntersection(
		lineA: IPathLine, lineB: IPathLine, options?: IPathIntersectionBaseOptions
	): IPoint

	declare function middle(pathContext: IPath, ratio?: number): IPoint

	declare function mirror(pointToMirror: IPoint, mirrorX: boolean, mirrorY: boolean): IPoint

	declare function rounded(pointContext: IPoint, accuracy?: number): IPoint

	declare function rotate(pointToRotate: IPoint, angleInDegrees: number, rotationOrigin: IPoint): IPoint

	declare function scale(pointToScale: IPoint, scaleValue: number): IPoint

	declare function distort(pointToDistort: IPoint, scaleX: number, scaleY: number): IPoint

	declare function subtract(a: IPoint, b: IPoint): IPoint

	declare function zero(): IPoint

		
}

declare module 'path' {
			declare function clone(pathToClone: IPath): IPath

	declare function mirror(pathToMirror: IPath, mirrorX: boolean, mirrorY: boolean): IPath

	declare function move(pathToMove: IPath, origin: IPoint): IPath

	declare function moveRelative(pathToMove: IPath, delta: IPoint, subtract?: boolean): IPath

	declare function moveTemporary(pathsToMove: IPath[], deltas: IPoint[], task: Function): void

	declare function rotate(pathToRotate: IPath, angleInDegrees: number, rotationOrigin: IPoint): IPath

	declare function scale(pathToScale: IPath, scaleValue: number): IPath

	declare function distort(pathToDistort: IPath, scaleX: number, scaleY: number): IModel | IPath

	declare function converge(
		lineA: IPathLine, lineB: IPathLine, useOriginA?: boolean, useOriginB?: boolean
	): IPoint

	declare function breakAtPoint(pathToBreak: IPath, pointOfBreak: IPoint): IPath

	declare function expand(pathToExpand: IPath, expansion: number, isolateCaps?: boolean): IModel

	declare function straighten(arc: IPathArc, bevel?: boolean, prefix?: string): IModel

	declare function intersection(
		path1: IPath, path2: IPath, options?: IPathIntersectionOptions
	): IPathIntersection

	declare function dogbone(
		lineA: IPathLine, lineB: IPathLine, filletRadius: number, options?: IPointMatchOptions
	): IPathArc

	declare function fillet(
		pathA: IPath, pathB: IPath, filletRadius: number, options?: IPointMatchOptions
	): IPathArc

		
}

declare module 'paths' {
				declare class Arc extends IPathArc {
		origin: IPoint;
		radius: number;
		startAngle: number;
		endAngle: number;
		type: string;
		constructor(origin: IPoint, radius: number, startAngle: number, endAngle: number): this;
		constructor(pointA: IPoint, pointB: IPoint, radius: number, largeArc: boolean, clockwise: boolean): this;
		constructor(pointA: IPoint, pointB: IPoint, clockwise?: boolean): this;
		constructor(pointA: IPoint, pointB: IPoint, pointC: IPoint): this
	}

	declare class Circle extends IPathCircle {
		type: string;
		origin: IPoint;
		radius: number;
		constructor(radius: number): this;
		constructor(origin: IPoint, radius: number): this;
		constructor(pointA: IPoint, pointB: IPoint): this;
		constructor(pointA: IPoint, pointB: IPoint, pointC: IPoint): this
	}

	declare class Line extends IPathLine {
		type: string;
		origin: IPoint;
		end: IPoint;
		constructor(points: IPoint[]): this;
		constructor(origin: IPoint, end: IPoint): this
	}

	declare class Chord extends IPathLine {
		type: string;
		origin: IPoint;
		end: IPoint;
		constructor(arc: IPathArc): this
	}

	declare class Parallel extends IPathLine {
		type: string;
		origin: IPoint;
		end: IPoint;
		constructor(toLine: IPathLine, distance: number, nearPoint: IPoint): this
	}

	
}

declare module 'model' {
			declare function countChildModels(modelContext: IModel): number

	declare function getSimilarModelId(modelContext: IModel, modelId: string): string

	declare function getSimilarPathId(modelContext: IModel, pathId: string): string

	declare function originate(modelToOriginate: IModel, origin?: IPoint): IModel

	declare function mirror(modelToMirror: IModel, mirrorX: boolean, mirrorY: boolean): IModel

	declare function move(modelToMove: IModel, origin: IPoint): IModel

	declare function moveRelative(modelToMove: IModel, delta: IPoint): IModel

	declare function prefixPathIds(modelToPrefix: IModel, prefix: string): IModel

	declare function rotate(modelToRotate: IModel, angleInDegrees: number, rotationOrigin: IPoint): IModel

	declare function scale(modelToScale: IModel, scaleValue: number, scaleOrigin?: boolean): IModel

	declare function convertUnits(modeltoConvert: IModel, destUnitType: string): IModel

	declare function walkPaths(modelContext: IModel, callback: IModelPathCallback): void

	declare function walk(modelContext: IModel, options: IWalkOptions): void

	declare function isPathInsideModel(
		pathContext: IPath, modelContext: IModel, pathOffset?: IPoint, farPoint?: IPoint, measureAtlas?: measure.Atlas
	): boolean

	declare function breakPathsAtIntersections(modelToBreak: IModel, modelToIntersect?: IModel): void

	declare function combine(
		modelA: IModel, modelB: IModel, includeAInsideB?: boolean, includeAOutsideB?: boolean, includeBInsideA?: boolean, includeBOutsideA?: boolean, options?: ICombineOptions
	): void

	declare function combineIntersection(modelA: IModel, modelB: IModel): void

	declare function combineSubtraction(modelA: IModel, modelB: IModel): void

	declare function combineUnion(modelA: IModel, modelB: IModel): void

	declare function simplify(modelToSimplify: IModel, options?: ISimplifyOptions): IModel

	declare function expandPaths(
		modelToExpand: IModel, distance: number, joints?: number, combineOptions?: ICombineOptions
	): IModel

	declare function outline(
		modelToOutline: IModel, distance: number, joints?: number, inside?: boolean
	): IModel

	declare function findChains(
		modelContext: IModel, callback: IChainCallback, options?: IFindChainsOptions
	): void

	declare function findLoops(modelContext: IModel, options?: IFindLoopsOptions): IModel

	declare function detachLoop(loopToDetach: IModel): void

	declare function removeDeadEnds(
		modelContext: IModel, pointMatchingDistance?: any, keep?: IWalkPathBooleanCallback
	): IModel

		
}

declare module 'units' {
			declare function conversionScale(srcUnitType: string, destUnitType: string): number

		
}

declare module 'measure' {
			declare function isAngleEqual(angleA: number, angleB: number, accuracy?: number): boolean

	declare function isPathEqual(
		pathA: IPath, pathB: IPath, withinPointDistance?: number, pathAOffset?: IPoint, pathBOffset?: IPoint
	): boolean

	declare function isPointEqual(a: IPoint, b: IPoint, withinDistance?: number): boolean

	declare function isPointOnSlope(p: IPoint, slope: ISlope, withinDistance?: number): boolean

	declare function isSlopeEqual(slopeA: ISlope, slopeB: ISlope): boolean

	declare function increase(baseMeasure: IMeasure, addMeasure: IMeasure): IMeasure

	declare function isArcConcaveTowardsPoint(arc: IPathArc, towardsPoint: IPoint): boolean

	declare function isArcOverlapping(arcA: IPathArc, arcB: IPathArc, excludeTangents: boolean): boolean

	declare function isBetween(
		valueInQuestion: number, limitA: number, limitB: number, exclusive: boolean
	): boolean

	declare function isBetweenArcAngles(angleInQuestion: number, arc: IPathArc, exclusive: boolean): boolean

	declare function isBetweenPoints(pointInQuestion: IPoint, line: IPathLine, exclusive: boolean): boolean

	declare function isBezierSeedLinear(seed: IPathBezierSeed): boolean

	declare function isLineOverlapping(lineA: IPathLine, lineB: IPathLine, excludeTangents: boolean): boolean

	declare function isMeasurementOverlapping(measureA: IMeasure, measureB: IMeasure): boolean

	declare function lineSlope(line: IPathLine): ISlope

	declare function pointDistance(a: IPoint, b: IPoint): number

	declare function pathExtents(pathToMeasure: IPath, addOffset?: IPoint): IMeasure

	declare function pathLength(pathToMeasure: IPath): number

	declare function modelExtents(modelToMeasure: IModel, atlas?: measure.Atlas): IMeasure

	declare class Atlas  {
		modelContext: IModel;
		modelsMeasured: boolean;
		modelMap: IMeasureMap;
		pathMap: IMeasureMap;
		constructor(modelContext: IModel): this;
		measureModels(): void
	}

	
}

declare module 'exporter' {
		declare interface IExportOptions {
		units?: string
	}

	declare interface IDXFRenderOptions {
		
	}

	declare interface IXmlTagAttrs {
		[name: string]: any
	}

	declare interface IOpenJsCadOptions {
		extrusion?: number,
		facetSize?: number,
		functionName?: string,
		modelMap?: IOpenJsCadOptionsMap
	}

	declare interface IOpenJsCadOptionsMap {
		[modelId: string]: IOpenJsCadOptions
	}

	declare interface IPDFRenderOptions {
		origin?: IPoint,
		stroke?: string
	}

	declare interface svgUnitConversion {
		[unitType: string]: {
		svgUnitType: string,
		scaleConversion: number
	}
	}

	declare interface ISVGRenderOptions {
		svgAttrs?: IXmlTagAttrs,
		fill?: string,
		fontSize?: string,
		strokeWidth?: string,
		stroke?: string,
		scale?: number,
		annotate?: boolean,
		origin?: IPoint,
		useSvgPathOnly?: boolean,
		viewBox?: boolean
	}

	declare function tryGetModelUnits(itemToExport: any): string

	declare function toDXF(modelToExport: IModel, options?: IDXFRenderOptions): string

	declare function toDXF(pathsToExport: IPath[], options?: IDXFRenderOptions): string

	declare function toDXF(pathToExport: IPath, options?: IDXFRenderOptions): string

	declare function toOpenJsCad(modelToExport: IModel, options?: IOpenJsCadOptions): string

	declare function toOpenJsCad(pathsToExport: IPath[], options?: IOpenJsCadOptions): string

	declare function toOpenJsCad(pathToExport: IPath, options?: IOpenJsCadOptions): string

	declare function toSTL(modelToExport: IModel, options?: IOpenJsCadOptions): string

	declare function toPDF(
		doc: PDFKit.PDFDocument, modelToExport: IModel, options?: IPDFRenderOptions
	): void

	declare function chainToSVGPathData(chain: IChain, offset: IPoint, scale: number): string

	declare function pathToSVGPathData(pathToExport: IPath, offset: IPoint, offset2: IPoint, scale: number): string

	declare function toSVG(modelToExport: IModel, options?: ISVGRenderOptions): string

	declare function toSVG(pathsToExport: IPath[], options?: ISVGRenderOptions): string

	declare function toSVG(pathToExport: IPath, options?: ISVGRenderOptions): string

	declare class Exporter  {
		constructor(map: IPathOriginFunctionMap, fixPoint?: (pointToFix: IPoint) => IPoint, fixPath?: (pathToFix: IPath, origin: IPoint) => IPath, beginModel?: (id: string, modelContext: IModel) => void, endModel?: (modelContext: IModel) => void): this;
		exportPath(id: string, pathToExport: IPath, offset: IPoint, layer: string): void;
		exportModel(modelId: string, modelToExport: IModel, offset: IPoint): void;
		exportItem(itemId: string, itemToExport: any, origin: IPoint): void
	}

	declare class XmlTag  {
		name: string;
		attrs: IXmlTagAttrs;
		innerText: string;
		innerTextEscaped: boolean;
		escapeString(value: string): string;
		constructor(name: string, attrs?: IXmlTagAttrs): this;
		getOpeningTag(selfClose: boolean): string;
		getInnerText(): string;
		getClosingTag(): string;
		toString(): string
	}

	
}

declare module 'importer' {
			declare function parseNumericList(s: string): number[]

	declare function fromSVGPathData(pathData: string): IModel

		
}

declare module 'solvers' {
			declare function solveTriangleSSS(lengthA: number, lengthB: number, lengthC: number): number

	declare function solveTriangleASA(
		oppositeAngleInDegrees: number, lengthOfSideBetweenAngles: number, otherAngleInDegrees: number
	): number

		
}

declare module 'kit' {
			declare function construct(ctor: IKit, args: any): IModel

	declare function getParameterValues(ctor: IKit): any[]

		
}

declare module 'models' {
				declare class BezierCurve extends IModel {
		models: IModelMap;
		paths: IPathMap;
		origin: IPoint;
		type: string;
		seed: IPathBezierSeed;
		accuracy: number;
		constructor(points: IPoint[], accuracy?: number): this;
		constructor(seed: IPathBezierSeed, accuracy?: number): this;
		constructor(seed: IPathBezierSeed, isChild: boolean, accuracy?: number): this;
		constructor(origin: IPoint, control: IPoint, end: IPoint, accuracy?: number): this;
		constructor(origin: IPoint, controls: IPoint[], end: IPoint, accuracy?: number): this;
		constructor(origin: IPoint, control1: IPoint, control2: IPoint, end: IPoint, accuracy?: number): this;
		typeName: string;
		getBezierSeeds(curve: BezierCurve, options?: IFindChainsOptions): IPathBezierSeed[];
		computePoint(seed: IPathBezierSeed, t: number): IPoint
	}

	declare class Ellipse extends IModel {
		models: IModelMap;
		origin: IPoint;
		constructor(radiusX: number, radiusY: number, accuracy?: number): this;
		constructor(origin: IPoint, radiusX: number, radiusY: number, accuracy?: number): this;
		constructor(cx: number, cy: number, rx: number, ry: number, accuracy?: number): this
	}

	declare class EllipticArc extends IModel {
		models: IModelMap;
		constructor(startAngle: number, endAngle: number, radiusX: number, radiusY: number, accuracy?: number): this;
		constructor(arc: IPathArc, distortX: number, distortY: number, accuracy?: number): this
	}

	declare class ConnectTheDots extends IModel {
		paths: IPathMap;
		constructor(numericList: string): this;
		constructor(coords: number[]): this;
		constructor(isClosed: boolean, points: IPoint[]): this
	}

	declare class Polygon extends IModel {
		paths: IPathMap;
		constructor(numberOfSides: number, radius: number, firstCornerAngleInDegrees?: number, circumscribed?: boolean): this;
		circumscribedRadius(radius: number, angleInRadians: number): number;
		getPoints(
		numberOfSides: number, radius: number, firstCornerAngleInDegrees?: number, circumscribed?: boolean
	): IPoint[]
	}

	declare class BoltCircle extends IModel {
		paths: IPathMap;
		constructor(boltRadius: number, holeRadius: number, boltCount: number, firstBoltAngleInDegrees?: number): this
	}

	declare class BoltRectangle extends IModel {
		paths: IPathMap;
		constructor(width: number, height: number, holeRadius: number): this
	}

	declare class Dome extends IModel {
		paths: IPathMap;
		constructor(width: number, height: number, radius?: number): this
	}

	declare class RoundRectangle extends IModel {
		origin: IPoint;
		paths: IPathMap;
		constructor(width: number, height: number, radius: number): this;
		constructor(modelToSurround: IModel, margin: number): this
	}

	declare class Oval extends IModel {
		paths: IPathMap;
		constructor(width: number, height: number): this
	}

	declare class OvalArc extends IModel {
		paths: IPathMap;
		models: IModelMap;
		constructor(startAngle: number, endAngle: number, sweepRadius: number, slotRadius: number, selfIntersect?: boolean, isolateCaps?: boolean): this
	}

	declare class Rectangle extends IModel {
		paths: IPathMap;
		origin: IPoint;
		constructor(width: number, height: number): this;
		constructor(modelToSurround: IModel, margin?: number): this;
		constructor(measurement: IMeasure): this
	}

	declare class Ring extends IModel {
		paths: IPathMap;
		constructor(outerRadius: number, innerRadius: number): this
	}

	declare class SCurve extends IModel {
		paths: IPathMap;
		constructor(width: number, height: number): this
	}

	declare class Slot extends IModel {
		paths: IPathMap;
		origin: IPoint;
		models: IModelMap;
		constructor(origin: IPoint, endPoint: IPoint, radius: number, isolateCaps?: boolean): this
	}

	declare class Square extends IModel {
		paths: IPathMap;
		constructor(side: number): this
	}

	declare class Star extends IModel {
		paths: IPathMap;
		constructor(numberOfPoints: number, outerRadius: number, innerRadius?: number, skipPoints?: number): this;
		InnerRadiusRatio(numberOfPoints: number, skipPoints: number): number
	}

	declare class Text extends IModel {
		models: IModelMap;
		constructor(font: opentypejs.Font, text: string, fontSize: number, combine?: boolean): this
	}

	
}
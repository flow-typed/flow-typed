

declare module 'three' {
					declare module.exports: undefined


}

declare module 'npm$namespace$THREE' {
		declare export interface Event {
		type: string,
		target: any
	}

	declare export interface MorphTarget {
		name: string,
		vertices: Vector3[]
	}

	declare export interface MorphColor {
		name: string,
		colors: Color[]
	}

	declare export interface MorphNormals {
		name: string,
		normals: Vector3[]
	}

	declare export interface Intersection {
		distance: number,
		distanceToRay: number,
		point: Vector3,
		index: number,
		face: Face3,
		faceIndex: number,
		object: Object3D
	}

	declare export interface RaycasterParameters {
		Mesh?: any,
		Line?: any,
		LOD?: any,
		Points?: {
		threshold: number
	},
		Sprite?: any
	}

	declare export interface LoaderHandler {
		handlers: (RegExp | Loader)[],
		add(regex: RegExp, loader: Loader): void,
		get(file: string): Loader
	}

	declare export interface MaterialParameters {
		name?: string,
		side?: Side,
		opacity?: number,
		transparent?: boolean,
		blending?: Blending,
		blendSrc?: BlendingDstFactor,
		blendDst?: BlendingSrcFactor,
		blendEquation?: BlendingEquation,
		blendSrcAlpha?: number,
		blendDstAlpha?: number,
		blendEquationAlpha?: number,
		depthFunc?: DepthModes,
		depthTest?: boolean,
		depthWrite?: boolean,
		colorWrite?: boolean,
		precision?: number,
		polygonOffset?: boolean,
		polygonOffsetFactor?: number,
		polygonOffsetUnits?: number,
		alphaTest?: number,
		premultipliedAlpha?: boolean,
		overdraw?: number,
		visible?: boolean,
		fog?: boolean,
		lights?: boolean,
		shading?: Shading,
		vertexColors?: Colors
	}

	declare export interface LineBasicMaterialParameters {
		color?: number | string,
		linewidth?: number,
		linecap?: string,
		linejoin?: string
	}

	declare export interface LineDashedMaterialParameters {
		color?: number | string,
		linewidth?: number,
		scale?: number,
		dashSize?: number,
		gapSize?: number
	}

	declare export interface MeshBasicMaterialParameters {
		color?: number | string,
		opacity?: number,
		map?: Texture,
		aoMap?: Texture,
		aoMapIntensity?: number,
		specularMap?: Texture,
		alphaMap?: Texture,
		envMap?: Texture,
		combine?: Combine,
		reflectivity?: number,
		refractionRatio?: number,
		shading?: Shading,
		wireframe?: boolean,
		wireframeLinewidth?: number,
		wireframeLinecap?: string,
		wireframeLinejoin?: string,
		skinning?: boolean,
		morphTargets?: boolean
	}

	declare export interface MeshDepthMaterialParameters {
		wireframe?: boolean,
		wireframeLinewidth?: number
	}

	declare export interface MeshLambertMaterialParameters {
		color?: number | string,
		emissive?: number | string,
		emissiveIntensity?: number,
		emissiveMap?: Texture,
		map?: Texture,
		lighhtMap?: Texture,
		lightMapIntensity?: number,
		aoMap?: Texture,
		aoMapIntensity?: number,
		specularMap?: Texture,
		alphaMap?: Texture,
		envMap?: Texture,
		combine?: Combine,
		reflectivity?: number,
		refractionRatio?: number,
		wireframe?: boolean,
		wireframeLinewidth?: number,
		wireframeLinecap?: string,
		wireframeLinejoin?: string,
		skinning?: boolean,
		morphTargets?: boolean,
		morphNormals?: boolean
	}

	declare export interface MeshStandardMaterialParameters {
		color?: number | string,
		roughness?: number,
		metalness?: number,
		map?: Texture,
		lighhtMap?: Texture,
		lightMapIntensity?: number,
		aoMap?: Texture,
		aoMapIntensity?: number,
		emissive?: Color,
		emissiveIntensity?: number,
		emissiveMap?: Texture,
		bumpMap?: Texture,
		bumpScale?: number,
		normalMap?: Texture,
		normalScale?: number,
		displacementMap?: Texture,
		displacementScale?: number,
		displacementBias?: number,
		roughnessMap?: Texture,
		metalMap?: Texture,
		alphaMap?: Texture,
		envMap?: Texture,
		envMapIntensity?: number,
		refractionRatio?: number,
		wireframe?: boolean,
		wireframeLinewidth?: number,
		skinning?: boolean,
		morphTargets?: boolean,
		morphNormals?: boolean
	}

	declare export interface MeshNormalMaterialParameters {
		wireframe?: boolean,
		wireframeLinewidth?: number,
		morphTargets?: boolean
	}

	declare export interface MeshPhongMaterialParameters {
		color?: number | string,
		specular?: number,
		shininess?: number,
		opacity?: number,
		map?: Texture,
		lightMap?: Texture,
		lightMapIntensity?: number,
		aoMap?: Texture,
		aoMapIntensity?: number,
		emissive?: number,
		emissiveIntensity?: number,
		emissiveMap?: Texture,
		bumpMap?: Texture,
		bumpScale?: number,
		normalMap?: Texture,
		normalScale?: Vector2,
		displacementMap?: Texture,
		displacementScale?: number,
		displacementBias?: number,
		specularMap?: Texture,
		alphaMap?: Texture,
		envMap?: Texture,
		combine?: Combine,
		reflectivity?: number,
		refractionRatio?: number,
		wireframe?: boolean,
		wireframeLinewidth?: number,
		wireframeLinecap?: string,
		wireframeLinejoin?: string,
		skinning?: boolean,
		morphTargets?: boolean,
		morphNormals?: boolean
	}

	declare export interface MeshPhysicalMaterialParameters {
		reflectivity?: number,
		clearCoat?: number,
		clearCoatRoughness?: number
	}

	declare export interface PointsMaterialParameters {
		color?: number | string,
		map?: Texture,
		size?: number,
		sizeAttenuation?: boolean
	}

	declare export interface ShaderMaterialParameters {
		defines?: any,
		uniforms?: any,
		vertexShader?: string,
		fragmentShader?: string,
		lineWidth?: number,
		wireframe?: boolean,
		wireframeLinewidth?: number,
		lights?: boolean,
		clipping?: boolean,
		skinning?: boolean,
		morphTargets?: boolean,
		morphNormals?: boolean
	}

	declare export interface SpriteMaterialParameters {
		color?: number | string,
		map?: Texture,
		rotation?: number
	}

	declare export interface HSL {
		h: number,
		s: number,
		l: number
	}

	declare export interface Matrix {
		elements: Float32Array,
		identity(): Matrix,
		copy(m: this): this,
		multiplyScalar(s: number): Matrix,
		determinant(): number,
		getInverse(matrix: Matrix, throwOnInvertible?: boolean): Matrix,
		transpose(): Matrix,
		clone(): this
	}

	declare export interface SplineControlPoint {
		x: number,
		y: number,
		z: number
	}

	declare export interface Vector {
		setComponent(index: number, value: number): void,
		getComponent(index: number): number,
		copy(v: this): this,
		add(v: Vector): Vector,
		addVectors(a: Vector, b: Vector): Vector,
		sub(v: Vector): Vector,
		subVectors(a: Vector, b: Vector): Vector,
		multiplyScalar(s: number): Vector,
		divideScalar(s: number): Vector,
		negate(): Vector,
		dot(v: Vector): number,
		lengthSq(): number,
		length(): number,
		normalize(): Vector,
		distanceTo(v: Vector): number,
		distanceToSquared(v: Vector): number,
		setLength(l: number): Vector,
		lerp(v: Vector, alpha: number): Vector,
		equals(v: Vector): boolean,
		clone(): this
	}

	declare export interface LensFlareProperty {
		texture: Texture,
		size: number,
		distance: number,
		x: number,
		y: number,
		z: number,
		scale: number,
		rotation: number,
		opacity: number,
		color: Color,
		blending: Blending
	}

	declare export interface Renderer {
		domElement: HTMLCanvasElement,
		render(scene: Scene, camera: Camera): void,
		setSize(width: number, height: number, updateStyle?: boolean): void
	}

	declare export interface WebGLRendererParameters {
		canvas?: HTMLCanvasElement,
		precision?: string,
		alpha?: boolean,
		premultipliedAlpha?: boolean,
		antialias?: boolean,
		stencil?: boolean,
		preserveDrawingBuffer?: boolean,
		clearColor?: number,
		clearAlpha?: number,
		devicePixelRatio?: number,
		logarithmicDepthBuffer?: boolean
	}

	declare export interface RenderTarget {
		
	}

	declare export interface WebGLRenderTargetOptions {
		wrapS?: Wrapping,
		wrapT?: Wrapping,
		magFilter?: TextureFilter,
		minFilter?: TextureFilter,
		format?: number,
		type?: TextureDataType,
		anisotropy?: number,
		depthBuffer?: boolean,
		stencilBuffer?: boolean
	}

	declare export interface Shader {
		uniforms: IUniform,
		vertexShader: string,
		fragmentShader: string
	}

	declare export interface IUniform {
		value: any
	}

	declare export interface WebGLCapabilitiesParameters {
		precision?: any,
		logarithmicDepthBuffer?: any
	}

	declare export interface IFog {
		name: string,
		color: Color,
		clone(): this,
		toJSON(): any
	}

	declare export interface PathAction {
		action: PathActions,
		args: any
	}

	declare export interface TextGeometryParameters {
		font: Font,
		size: number,
		height: number,
		curveSegments: number,
		bevelEnabled: boolean,
		bevelThickness: number,
		bevelSize: number
	}

	declare export interface MorphBlendMeshAnimation {
		start: number,
		end: number,
		length: number,
		fps: number,
		duration: number,
		lastFrame: number,
		currentFrame: number,
		active: boolean,
		time: number,
		direction: number,
		weight: number,
		directionBackwards: boolean,
		mirroredLoop: boolean
	}

	declare export function warn(message?: any, ...optionalParams: any[]): void

	declare export function error(message?: any, ...optionalParams: any[]): void

	declare export function log(message?: any, ...optionalParams: any[]): void

	declare export class AnimationAction  {
		loop: boolean;
		time: number;
		timeScale: number;
		weight: number;
		repetitions: number;
		paused: boolean;
		enabled: boolean;
		clampWhenFinished: boolean;
		zeroSlopeAtStart: boolean;
		zeroSlopeAtEnd: boolean;
		play(): AnimationAction;
		stop(): AnimationAction;
		reset(): AnimationAction;
		isRunning(): boolean;
		startAt(time: number): AnimationAction;
		setLoop(mode: boolean, repetitions: number): AnimationAction;
		setEffectiveWeight(weight: number): AnimationAction;
		getEffectiveWeight(): number;
		fadeIn(duration: number): AnimationAction;
		fadeOut(duration: number): AnimationAction;
		crossFadeFrom(
		fadeOutAction: AnimationAction, duration: number, warp: boolean
	): AnimationAction;
		crossFadeTo(
		fadeInAction: AnimationAction, duration: number, warp: boolean
	): AnimationAction;
		stopFading(): AnimationAction;
		setEffectiveTimeScale(timeScale: number): AnimationAction;
		getEffectiveTimeScale(): number;
		setDuration(duration: number): AnimationAction;
		syncWith(action: AnimationAction): AnimationAction;
		halt(duration: number): AnimationAction;
		warp(statTimeScale: number, endTimeScale: number, duration: number): AnimationAction;
		stopWarping(): AnimationAction;
		getMixer(): AnimationMixer;
		getClip(): AnimationClip;
		getRoot(): any
	}

	declare export class AnimationClip  {
		constructor(name?: string, duration?: number, tracks?: KeyframeTrack[]): this;
		name: string;
		tracks: KeyframeTrack[];
		duration: number;
		uuid: string;
		results: any[];
		resetDuration(): void;
		trim(): AnimationClip;
		optimize(): AnimationClip;
		CreateFromMorphTargetSequence(
		name: string, morphTargetSequence: MorphTarget[], fps: number, noLoop: boolean
	): AnimationClip;
		findByName(clipArray: AnimationClip, name: string): AnimationClip;
		CreateClipsFromMorphTargetSequences(morphTargets: MorphTarget[], fps: number, noLoop: boolean): AnimationClip[];
		parse(json: any): AnimationClip;
		parseAnimation(animation: any, bones: Bone[], nodeName: string): AnimationClip;
		toJSON(): any
	}

	declare export class AnimationMixer extends EventDispatcher {
		constructor(root: any): this;
		time: number;
		timeScale: number;
		clipAction(clip: AnimationClip, root?: any): AnimationAction;
		existingAction(clip: AnimationClip, root?: any): AnimationAction;
		stopAllAction(clip: AnimationClip, root?: any): AnimationMixer;
		update(deltaTime: number): AnimationMixer;
		getRoot(): any;
		uncacheClip(clip: AnimationClip): void;
		uncacheRoot(root: any): void;
		uncacheAction(clip: AnimationClip, root?: any): void
	}

	declare export class AnimationObjectGroup  {
		constructor(...args: any[]): this;
		uuid: string;
		stats: {
		bindingsPerObject: number,
		objects: {
		total: number,
		inUse: number
	}
	};
		add(...args: any[]): void;
		remove(...args: any[]): void;
		uncache(...args: any[]): void
	}

	declare export class KeyframeTrack  {
		constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes): this;
		name: string;
		times: any[];
		values: any[];
		ValueTypeName: string;
		TimeBufferType: Float32Array;
		ValueBufferType: Float32Array;
		DefaultInterpolation: InterpolationModes;
		InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
		InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
		InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;
		setInterpolation(interpolation: InterpolationModes): void;
		getInterpolation(): InterpolationModes;
		getValuesize(): number;
		shift(timeOffset: number): KeyframeTrack;
		scale(timeScale: number): KeyframeTrack;
		trim(startTime: number, endTime: number): KeyframeTrack;
		validate(): boolean;
		optimize(): KeyframeTrack;
		parse(json: any): KeyframeTrack;
		toJSON(track: KeyframeTrack): any
	}

	declare export class PropertyBinding  {
		constructor(rootNode: any, path: string, parsedPath?: any): this;
		path: string;
		parsedPath: any;
		node: any;
		rootNode: any;
		getValue(targetArray: any, offset: number): any;
		setValue(sourceArray: any, offset: number): void;
		bind(): void;
		unbind(): void;
		BindingType: {
		[bindingType: string]: number
	};
		Versioning: {
		[versioning: string]: number
	};
		GetterByBindingType: Function[];
		SetterByBindingTypeAndVersioning: Array<Function[]>;
		create(
		root: any, path: any, parsedPath?: any
	): PropertyBinding | PropertyBinding.Composite;
		parseTrackName(trackName: string): any;
		findNode(root: any, nodeName: string): any
	}

	declare export class PropertyMixer  {
		constructor(binding: any, typeName: string, valueSize: number): this;
		binding: any;
		valueSize: number;
		buffer: any;
		cumulativeWeight: number;
		useCount: number;
		referenceCount: number;
		accumulate(accuIndex: number, weight: number): void;
		apply(accuIndex: number): void;
		saveOriginalState(): void;
		restoreOriginalState(): void
	}

	declare export class BooleanKeyframeTrack extends KeyframeTrack {
		constructor(name: string, times: any[], values: any[]): this
	}

	declare export class ColorKeyframeTrack extends KeyframeTrack {
		constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes): this
	}

	declare export class NumberKeyframeTrack extends KeyframeTrack {
		constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes): this
	}

	declare export class QuaternionKeyframeTrack extends KeyframeTrack {
		constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes): this
	}

	declare export class StringKeyframeTrack extends KeyframeTrack {
		constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes): this
	}

	declare export class VectorKeyframeTrack extends KeyframeTrack {
		constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes): this
	}

	declare export class Camera extends Object3D {
		constructor(): this;
		matrixWorldInverse: Matrix4;
		projectionMatrix: Matrix4;
		getWorldDirection(optionalTarget?: Vector3): Vector3;
		lookAt(vector: Vector3): void
	}

	declare export class CubeCamera extends Object3D {
		constructor(near?: number, far?: number, cubeResolution?: number): this;
		renderTarget: WebGLRenderTargetCube;
		updateCubeMap(renderer: Renderer, scene: Scene): void
	}

	declare export class OrthographicCamera extends Camera {
		constructor(left: number, right: number, top: number, bottom: number, near?: number, far?: number): this;
		zoom: number;
		view: {
		fullWidth: number,
		fullHeight: number,
		offsetX: number,
		offsetY: number,
		width: number,
		height: number
	};
		left: number;
		right: number;
		top: number;
		bottom: number;
		near: number;
		far: number;
		updateProjectionMatrix(): void;
		setViewOffset(
		fullWidth: number, fullHeight: number, offsetX: number, offsetY: number, width: number, height: number
	): void;
		clearViewOffset(): void;
		toJSON(meta?: any): any
	}

	declare export class PerspectiveCamera extends Camera {
		constructor(fov?: number, aspect?: number, near?: number, far?: number): this;
		zoom: number;
		fov: number;
		aspect: number;
		near: number;
		far: number;
		focus: number;
		view: {
		fullWidth: number,
		fullHeight: number,
		offsetX: number,
		offsetY: number,
		width: number,
		height: number
	};
		filmGauge: number;
		filmOffset: number;
		setFocalLength(focalLength: number): void;
		getFocalLength(): number;
		getEffectiveFOV(): number;
		getFilmWidth(): number;
		getFilmHeight(): number;
		setViewOffset(
		fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number
	): void;
		clearViewOffset(): void;
		updateProjectionMatrix(): void;
		toJSON(meta?: any): any;
		setLens(focalLength: number, frameHeight?: number): void
	}

	declare export class StereoCamera extends Camera {
		constructor(): this;
		aspect: number;
		cameraL: PerspectiveCamera;
		cameraR: PerspectiveCamera;
		update(camera: PerspectiveCamera): void
	}

	declare export class BufferAttribute  {
		constructor(array: ArrayLike<number>, itemSize: number, normalized?: boolean): this;
		uuid: string;
		array: ArrayLike<number>;
		itemSize: number;
		dynamic: boolean;
		updateRange: {
		offset: number,
		count: number
	};
		version: number;
		normalized: boolean;
		needsUpdate: boolean;
		count: number;
		setDynamic(dynamic: boolean): BufferAttribute;
		clone(): this;
		copy(source: this): this;
		copyAt(index1: number, attribute: BufferAttribute, index2: number): BufferAttribute;
		copyArray(array: ArrayLike<number>): BufferAttribute;
		copyColorsArray(colors: {
		r: number,
		g: number,
		b: number
	}[]): BufferAttribute;
		copyIndicesArray(indices: {
		a: number,
		b: number,
		c: number
	}[]): BufferAttribute;
		copyVector2sArray(vectors: {
		x: number,
		y: number
	}[]): BufferAttribute;
		copyVector3sArray(vectors: {
		x: number,
		y: number,
		z: number
	}[]): BufferAttribute;
		copyVector4sArray(
		vectors: {
		x: number,
		y: number,
		z: number,
		w: number
	}[]
	): BufferAttribute;
		set(value: ArrayLike<number>, offset?: number): BufferAttribute;
		getX(index: number): number;
		setX(index: number, x: number): BufferAttribute;
		getY(index: number): number;
		setY(index: number, y: number): BufferAttribute;
		getZ(index: number): number;
		setZ(index: number, z: number): BufferAttribute;
		getW(index: number): number;
		setW(index: number, z: number): BufferAttribute;
		setXY(index: number, x: number, y: number): BufferAttribute;
		setXYZ(index: number, x: number, y: number, z: number): BufferAttribute;
		setXYZW(index: number, x: number, y: number, z: number, w: number): BufferAttribute;
		length: number
	}

	declare export class Int8Attribute extends BufferAttribute {
		constructor(array: any, itemSize: number): this
	}

	declare export class Uint8Attribute extends BufferAttribute {
		constructor(array: any, itemSize: number): this
	}

	declare export class Uint8ClampedAttribute extends BufferAttribute {
		constructor(array: any, itemSize: number): this
	}

	declare export class Int16Attribute extends BufferAttribute {
		constructor(array: any, itemSize: number): this
	}

	declare export class Uint16Attribute extends BufferAttribute {
		constructor(array: any, itemSize: number): this
	}

	declare export class Int32Attribute extends BufferAttribute {
		constructor(array: any, itemSize: number): this
	}

	declare export class Uint32Attribute extends BufferAttribute {
		constructor(array: any, itemSize: number): this
	}

	declare export class Float32Attribute extends BufferAttribute {
		constructor(array: any, itemSize: number): this
	}

	declare export class Float64Attribute extends BufferAttribute {
		constructor(array: any, itemSize: number): this
	}

	declare export class DynamicBufferAttribute extends BufferAttribute {
		
	}

	declare export class BufferGeometry extends EventDispatcher {
		constructor(): this;
		MaxIndex: number;
		id: number;
		uuid: string;
		name: string;
		type: string;
		index: BufferAttribute;
		attributes: BufferAttribute | InterleavedBufferAttribute[];
		morphAttributes: any;
		groups: {
		start: number,
		count: number,
		materialIndex?: number
	}[];
		boundingBox: Box3;
		boundingSphere: Sphere;
		drawRange: {
		start: number,
		count: number
	};
		getIndex(): BufferAttribute;
		setIndex(index: BufferAttribute): void;
		addAttribute(
		name: string, attribute: BufferAttribute | InterleavedBufferAttribute
	): BufferGeometry;
		getAttribute(name: string): BufferAttribute | InterleavedBufferAttribute;
		removeAttribute(name: string): BufferGeometry;
		addGroup(start: number, count: number, materialIndex?: number): void;
		clearGroups(): void;
		setDrawRange(start: number, count: number): void;
		applyMatrix(matrix: Matrix4): BufferGeometry;
		rotateX(angle: number): BufferGeometry;
		rotateY(angle: number): BufferGeometry;
		rotateZ(angle: number): BufferGeometry;
		translate(x: number, y: number, z: number): BufferGeometry;
		scale(x: number, y: number, z: number): BufferGeometry;
		lookAt(v: Vector3): void;
		center(): Vector3;
		setFromObject(object: Object3D): void;
		updateFromObject(object: Object3D): void;
		fromGeometry(geometry: Geometry, settings?: any): BufferGeometry;
		fromDirectGeometry(geometry: DirectGeometry): BufferGeometry;
		computeBoundingBox(): void;
		computeBoundingSphere(): void;
		computeVertexNormals(): void;
		merge(geometry: BufferGeometry, offset: number): BufferGeometry;
		normalizeNormals(): void;
		toNonIndexed(): BufferGeometry;
		toJSON(): any;
		clone(): this;
		copy(source: this): this;
		dispose(): void;
		drawcalls: any;
		offsets: any;
		addIndex(index: any): void;
		addDrawCall(start: any, count: any, indexOffset?: any): void;
		clearDrawCalls(): void;
		addAttribute(name: any, array: any, itemSize: any): any
	}

	declare export class Clock  {
		constructor(autoStart?: boolean): this;
		autoStart: boolean;
		startTime: number;
		oldTime: number;
		elapsedTime: number;
		running: boolean;
		start(): void;
		stop(): void;
		getElapsedTime(): number;
		getDelta(): number
	}

	declare export class DirectGeometry extends EventDispatcher {
		constructor(): this;
		id: number;
		uuid: string;
		name: string;
		type: string;
		indices: number[];
		vertices: Vector3[];
		normals: Vector3[];
		colors: Color[];
		uvs: Vector2[];
		uvs2: Vector2[];
		groups: {
		start: number,
		materialIndex: number
	}[];
		morphTargets: MorphTarget[];
		skinWeights: number[];
		skinIndices: number[];
		boundingBox: Box3;
		boundingSphere: Sphere;
		verticesNeedUpdate: boolean;
		normalsNeedUpdate: boolean;
		colorsNeedUpdate: boolean;
		uvsNeedUpdate: boolean;
		groupsNeedUpdate: boolean;
		computeBoundingBox(): void;
		computeBoundingSphere(): void;
		computeGroups(geometry: Geometry): void;
		fromGeometry(geometry: Geometry): DirectGeometry;
		dispose(): void;
		addEventListener(type: string, listener: (event: Event) => void): void;
		hasEventListener(type: string, listener: (event: Event) => void): void;
		removeEventListener(type: string, listener: (event: Event) => void): void;
		dispatchEvent(event: {
		type: string,
		[attachment: string]: any
	}): void
	}

	declare export class EventDispatcher  {
		constructor(): this;
		addEventListener(type: string, listener: (event: Event) => void): void;
		hasEventListener(type: string, listener: (event: Event) => void): void;
		removeEventListener(type: string, listener: (event: Event) => void): void;
		dispatchEvent(event: {
		type: string,
		[attachment: string]: any
	}): void;
		apply(target: any): void
	}

	declare export class Face3  {
		constructor(a: number, b: number, c: number, normal?: Vector3, color?: Color, materialIndex?: number): this;
		constructor(a: number, b: number, c: number, normal?: Vector3, vertexColors?: Color[], materialIndex?: number): this;
		constructor(a: number, b: number, c: number, vertexNormals?: Vector3[], color?: Color, materialIndex?: number): this;
		constructor(a: number, b: number, c: number, vertexNormals?: Vector3[], vertexColors?: Color[], materialIndex?: number): this;
		a: number;
		b: number;
		c: number;
		normal: Vector3;
		vertexNormals: Vector3[];
		color: Color;
		vertexColors: Color[];
		materialIndex: number;
		clone(): this;
		copy(source: this): this
	}

	declare export class Face4 extends Face3 {
		
	}

	declare export class Geometry extends EventDispatcher {
		constructor(): this;
		id: number;
		uuid: string;
		name: string;
		type: string;
		vertices: Vector3[];
		colors: Color[];
		faces: Face3[];
		faceVertexUvs: Vector2[][][];
		morphTargets: MorphTarget[];
		morphNormals: MorphNormals[];
		skinWeights: number[];
		skinIndices: number[];
		lineDistances: number[];
		boundingBox: Box3;
		boundingSphere: Sphere;
		verticesNeedUpdate: boolean;
		elementsNeedUpdate: boolean;
		uvsNeedUpdate: boolean;
		normalsNeedUpdate: boolean;
		colorsNeedUpdate: boolean;
		lineDistancesNeedUpdate: boolean;
		groupsNeedUpdate: boolean;
		applyMatrix(matrix: Matrix4): Geometry;
		rotateX(angle: number): Geometry;
		rotateY(angle: number): Geometry;
		rotateZ(angle: number): Geometry;
		translate(x: number, y: number, z: number): Geometry;
		scale(x: number, y: number, z: number): Geometry;
		lookAt(vector: Vector3): void;
		fromBufferGeometry(geometry: BufferGeometry): Geometry;
		center(): Vector3;
		normalize(): Geometry;
		computeFaceNormals(): void;
		computeVertexNormals(areaWeighted?: boolean): void;
		computeMorphNormals(): void;
		computeLineDistances(): void;
		computeBoundingBox(): void;
		computeBoundingSphere(): void;
		merge(geometry: Geometry, matrix: Matrix, materialIndexOffset?: number): void;
		mergeMesh(mesh: Mesh): void;
		mergeVertices(): number;
		sortFacesByMaterialIndex(): void;
		toJSON(): any;
		clone(): this;
		copy(source: this): this;
		dispose(): void;
		bones: Bone[];
		animation: AnimationClip;
		animations: AnimationClip[];
		addEventListener(type: string, listener: (event: Event) => void): void;
		hasEventListener(type: string, listener: (event: Event) => void): void;
		removeEventListener(type: string, listener: (event: Event) => void): void;
		dispatchEvent(event: {
		type: string,
		[attachment: string]: any
	}): void
	}

	declare export class InstancedBufferAttribute extends BufferAttribute {
		constructor(data: ArrayLike<number>, itemSize: number, meshPerAttribute?: number): this;
		meshPerAttribute: number
	}

	declare export class InstancedBufferGeometry extends BufferGeometry {
		constructor(): this;
		groups: {
		start: number,
		count: number,
		instances: number
	}[];
		maxInstancedCount: number;
		addGroup(start: number, count: number, instances: number): void
	}

	declare export class InterleavedBuffer  {
		constructor(array: ArrayLike<number>, stride: number): this;
		array: ArrayLike<number>;
		stride: number;
		dynamic: boolean;
		updateRange: {
		offset: number,
		count: number
	};
		version: number;
		length: number;
		count: number;
		needsUpdate: boolean;
		setDynamic(dynamic: boolean): InterleavedBuffer;
		clone(): this;
		copy(source: this): this;
		copyAt(
		index1: number, attribute: InterleavedBufferAttribute, index2: number
	): InterleavedBuffer;
		set(value: ArrayLike<number>, index: number): InterleavedBuffer;
		clone(): this
	}

	declare export class InstancedInterleavedBuffer extends InterleavedBuffer {
		constructor(array: ArrayLike<number>, stride: number, meshPerAttribute?: number): this;
		meshPerAttribute: number
	}

	declare export class InterleavedBufferAttribute  {
		constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized: boolean): this;
		uuid: string;
		data: InterleavedBuffer;
		itemSize: number;
		offset: number;
		count: number;
		normalized: boolean;
		array: any[];
		getX(index: number): number;
		setX(index: number, x: number): InterleavedBufferAttribute;
		getY(index: number): number;
		setY(index: number, y: number): InterleavedBufferAttribute;
		getZ(index: number): number;
		setZ(index: number, z: number): InterleavedBufferAttribute;
		getW(index: number): number;
		setW(index: number, z: number): InterleavedBufferAttribute;
		setXY(index: number, x: number, y: number): InterleavedBufferAttribute;
		setXYZ(index: number, x: number, y: number, z: number): InterleavedBufferAttribute;
		setXYZW(
		index: number, x: number, y: number, z: number, w: number
	): InterleavedBufferAttribute;
		length: number
	}

	declare export class Object3D extends EventDispatcher {
		constructor(): this;
		id: number;
		uuid: string;
		name: string;
		type: string;
		parent: Object3D;
		children: Object3D[];
		up: Vector3;
		position: Vector3;
		rotation: Euler;
		quaternion: Quaternion;
		scale: Vector3;
		modelViewMatrix: Matrix4;
		normalMatrix: Matrix3;
		matrix: Matrix4;
		matrixWorld: Matrix4;
		matrixAutoUpdate: boolean;
		matrixWorldNeedsUpdate: boolean;
		layers: Layers;
		visible: boolean;
		castShadow: boolean;
		receiveShadow: boolean;
		frustumCulled: boolean;
		renderOrder: number;
		userData: any;
		DefaultUp: Vector3;
		DefaultMatrixAutoUpdate: boolean;
		applyMatrix(matrix: Matrix4): void;
		setRotationFromAxisAngle(axis: Vector3, angle: number): void;
		setRotationFromEuler(euler: Euler): void;
		setRotationFromMatrix(m: Matrix4): void;
		setRotationFromQuaternion(q: Quaternion): void;
		rotateOnAxis(axis: Vector3, angle: number): Object3D;
		rotateX(angle: number): Object3D;
		rotateY(angle: number): Object3D;
		rotateZ(angle: number): Object3D;
		translateOnAxis(axis: Vector3, distance: number): Object3D;
		translateX(distance: number): Object3D;
		translateY(distance: number): Object3D;
		translateZ(distance: number): Object3D;
		localToWorld(vector: Vector3): Vector3;
		worldToLocal(vector: Vector3): Vector3;
		lookAt(vector: Vector3): void;
		add(object: Object3D): void;
		remove(object: Object3D): void;
		getObjectById(id: number): Object3D;
		getObjectByName(name: string): Object3D;
		getObjectByProperty(name: string, value: string): Object3D;
		getWorldPosition(optionalTarget?: Vector3): Vector3;
		getWorldQuaternion(optionalTarget?: Quaternion): Quaternion;
		getWorldRotation(optionalTarget?: Euler): Euler;
		getWorldScale(optionalTarget?: Vector3): Vector3;
		getWorldDirection(optionalTarget?: Vector3): Vector3;
		raycast(raycaster: Raycaster, intersects: any): void;
		traverse(callback: (object: Object3D) => any): void;
		traverseVisible(callback: (object: Object3D) => any): void;
		traverseAncestors(callback: (object: Object3D) => any): void;
		updateMatrix(): void;
		updateMatrixWorld(force: boolean): void;
		toJSON(
		meta?: {
		geometries: any,
		materials: any,
		textures: any,
		images: any
	}
	): any;
		clone(recursive?: boolean): this;
		copy(source: this, recursive?: boolean): this;
		eulerOrder: string;
		getChildByName(name: string): Object3D;
		translate(distance: number, axis: Vector3): Object3D
	}

	declare export class Raycaster  {
		constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number): this;
		ray: Ray;
		near: number;
		far: number;
		params: RaycasterParameters;
		precision: number;
		linePrecision: number;
		set(origin: Vector3, direction: Vector3): void;
		setFromCamera(coords: {
		x: number,
		y: number
	}, camera: Camera): void;
		intersectObject(object: Object3D, recursive?: boolean): Intersection[];
		intersectObjects(objects: Object3D[], recursive?: boolean): Intersection[]
	}

	declare export class Layers  {
		constructor(): this;
		mask: number;
		set(channel: number): void;
		enable(channel: number): void;
		toggle(channel: number): void;
		disable(channel: number): void;
		test(layers: Layers): boolean
	}

	declare export class Font  {
		constructor(jsondata: string): this;
		data: string;
		generateShapes(text: string, size: number, divisions: number): any[]
	}

	declare export class Light extends Object3D {
		constructor(hex?: number | string, intensity?: number): this;
		color: Color;
		intensity: number;
		receiveShadow: boolean;
		shadow: LightShadow;
		shadowCameraFov: any;
		shadowCameraLeft: any;
		shadowCameraRight: any;
		shadowCameraTop: any;
		shadowCameraBottom: any;
		shadowCameraNear: any;
		shadowCameraFar: any;
		shadowBias: any;
		shadowMapWidth: any;
		shadowMapHeight: any
	}

	declare export class LightShadow  {
		constructor(camera: Camera): this;
		camera: Camera;
		bias: number;
		radius: number;
		mapSize: Vector2;
		map: RenderTarget;
		matrix: Matrix4;
		copy(source: this): this;
		clone(recursive?: boolean): this;
		toJSON(): any
	}

	declare export class AmbientLight extends Light {
		constructor(hex?: number | string, intensity?: number): this;
		castShadow: boolean
	}

	declare export class DirectionalLight extends Light {
		constructor(hex?: number | string, intensity?: number): this;
		target: Object3D;
		intensity: number;
		shadow: LightShadow
	}

	declare export class DirectionalLightShadow extends LightShadow {
		
	}

	declare export class HemisphereLight extends Light {
		constructor(skyColorHex?: number | string, groundColorHex?: number | string, intensity?: number): this;
		groundColor: Color;
		intensity: number
	}

	declare export class PointLight extends Light {
		constructor(hex?: number | string, intensity?: number, distance?: number, decay?: number): this;
		intensity: number;
		distance: number;
		decay: number;
		shadow: LightShadow;
		power: number
	}

	declare export class SpotLight extends Light {
		constructor(hex?: number | string, intensity?: number, distance?: number, angle?: number, exponent?: number, decay?: number): this;
		target: Object3D;
		intensity: number;
		distance: number;
		angle: number;
		exponent: number;
		decay: number;
		shadow: SpotLightShadow;
		power: number;
		penumbra: number
	}

	declare export class SpotLightShadow extends LightShadow {
		update(light: Light): void
	}

	declare export class Loader  {
		constructor(): this;
		onLoadStart: () => void;
		onLoadProgress: () => void;
		onLoadComplete: () => void;
		crossOrigin: string;
		extractUrlBase(url: string): string;
		initMaterials(materials: Material[], texturePath: string): Material[];
		createMaterial(m: Material, texturePath: string, crossOrigin?: string): boolean;
		Handlers: LoaderHandler
	}

	declare export class XHRLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		path: string;
		responseType: string;
		withCredentials: boolean;
		load(
		url: string, onLoad?: (responseText: string) => void, onProgress?: (event: any) => void, onError?: (event: any) => void
	): any;
		setPath(path: string): XHRLoader;
		setResponseType(responseType: string): XHRLoader;
		setWithCredentials(withCredentials: boolean): XHRLoader
	}

	declare export class FontLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		load(
		url: string, onLoad?: (responseText: string) => void, onProgress?: (event: any) => void, onError?: (event: any) => void
	): void;
		parse(json: string): Font
	}

	declare export class ImageLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		crossOrigin: string;
		withCredentials: string;
		path: string;
		load(
		url: string, onLoad?: (image: HTMLImageElement) => void, onProgress?: (event: any) => void, onError?: (event: any) => void
	): HTMLImageElement;
		setCrossOrigin(crossOrigin: string): ImageLoader;
		setWithCredentials(value: string): ImageLoader;
		setPath(value: string): ImageLoader
	}

	declare export class JSONLoader extends Loader {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		withCredentials: boolean;
		load(
		url: string, onLoad?: (geometry: Geometry, materials: Material[]) => void, onProgress?: (event: any) => void, onError?: (event: any) => void
	): void;
		setTexturePath(value: string): void;
		parse(
		json: any, texturePath?: string
	): {
		geometry: Geometry,
		materials?: Material[]
	}
	}

	declare export class LoadingManager  {
		constructor(onLoad?: () => void, onProgress?: (url: string, loaded: number, total: number) => void, onError?: () => void): this;
		onStart: () => void;
		onLoad: () => void;
		onProgress: (item: any, loaded: number, total: number) => void;
		onError: () => void;
		itemStart(url: string): void;
		itemEnd(url: string): void;
		itemError(url: string): void
	}

	declare export class BufferGeometryLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		load(
		url: string, onLoad: (bufferGeometry: BufferGeometry) => void, onProgress?: (event: any) => void, onError?: (event: any) => void
	): void;
		parse(json: any): BufferGeometry
	}

	declare export class MaterialLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		textures: {
		[key: string]: Texture
	};
		load(url: string, onLoad: (material: Material) => void): void;
		setTextures(textures: {
		[key: string]: Texture
	}): void;
		getTexture(name: string): Texture;
		parse(json: any): Material
	}

	declare export class ObjectLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		texturePass: string;
		crossOrigin: string;
		load(url: string, onLoad?: (object: Object3D) => void): void;
		setTexturePath(value: string): void;
		setCrossOrigin(crossOrigin: string): void;
		parse<T>(json: any, onLoad?: (object: Object3D) => void): T;
		parseGeometries(json: any): any[];
		parseMaterials(json: any, textures: Texture[]): Material[];
		parseAnimations(json: any): AnimationClip[];
		parseImages(json: any, onLoad: () => void): any[];
		parseTextures(json: any, images: any): Texture[];
		parseObject<T>(data: any, geometries: any[], materials: Material[]): T
	}

	declare export class TextureLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		crossOrigin: string;
		withCredentials: string;
		path: string;
		load(url: string, onLoad?: (texture: Texture) => void): Texture;
		setCrossOrigin(crossOrigin: string): TextureLoader;
		setWithCredentials(value: string): TextureLoader;
		setPath(path: string): TextureLoader
	}

	declare export class CubeTextureLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		corssOrigin: string;
		path: string;
		load(
		urls: Array<string>, onLoad?: (texture: CubeTexture) => void, onProgress?: (event: any) => void, onError?: (event: any) => void
	): void;
		setCrossOrigin(crossOrigin: string): CubeTextureLoader;
		setPath(path: string): CubeTextureLoader
	}

	declare export class BinaryTextureLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		load(
		url: string, onLoad: (dataTexture: DataTexture) => void, onProgress?: (event: any) => void, onError?: (event: any) => void
	): void
	}

	declare export class DataTextureLoader extends BinaryTextureLoader {
		
	}

	declare export class CompressedTextureLoader  {
		constructor(manager?: LoadingManager): this;
		manager: LoadingManager;
		path: string;
		load(
		url: string, onLoad: (texture: CompressedTexture) => void, onProgress?: (event: any) => void, onError?: (event: any) => void
	): void;
		setPath(path: string): CompressedTextureLoader
	}

	declare export class AudioLoader  {
		constructor(manager?: LoadingManager): this;
		load(url: string, onLoad: Function, onPrgress: Function, onError: Function): void
	}

	declare export class Material extends EventDispatcher {
		constructor(): this;
		id: number;
		uuid: string;
		name: string;
		type: string;
		side: Side;
		opacity: number;
		transparent: boolean;
		blending: Blending;
		blendSrc: BlendingDstFactor;
		blendDst: BlendingSrcFactor;
		blendEquation: BlendingEquation;
		blendSrcAlpha: number;
		blendDstAlpha: number;
		blendEquationAlpha: number;
		depthFunc: DepthModes;
		depthTest: boolean;
		depthWrite: boolean;
		clippingPlanes: any;
		clipShadows: boolean;
		colorWrite: boolean;
		precision: any;
		polygonOffset: boolean;
		polygonOffsetFactor: number;
		polygonOffsetUnits: number;
		alphaTest: number;
		premultipliedAlpha: boolean;
		overdraw: number;
		visible: boolean;
		needsUpdate: boolean;
		fog: boolean;
		lights: boolean;
		shading: Shading;
		vertexColors: Colors;
		setValues(parameters: MaterialParameters): void;
		toJSON(meta?: any): any;
		clone(): this;
		copy(source: this): this;
		update(): void;
		dispose(): void;
		warpRGB: Color
	}

	declare export class LineBasicMaterial extends Material {
		constructor(parameters?: LineBasicMaterialParameters): this;
		color: Color;
		linewidth: number;
		linecap: string;
		linejoin: string;
		setValues(parameters: LineBasicMaterialParameters): void
	}

	declare export class LineDashedMaterial extends Material {
		constructor(parameters?: LineDashedMaterialParameters): this;
		color: Color;
		linewidth: number;
		scale: number;
		dashSize: number;
		gapSize: number;
		setValues(parameters: LineDashedMaterialParameters): void
	}

	declare export class MeshBasicMaterial extends Material {
		constructor(parameters?: MeshBasicMaterialParameters): this;
		color: Color;
		map: Texture;
		aoMap: Texture;
		aoMapIntensity: number;
		specularMap: Texture;
		alphaMap: Texture;
		envMap: Texture;
		combine: Combine;
		reflectivity: number;
		refractionRatio: number;
		shading: Shading;
		wireframe: boolean;
		wireframeLinewidth: number;
		wireframeLinecap: string;
		wireframeLinejoin: string;
		skinning: boolean;
		morphTargets: boolean;
		setValues(parameters: MeshBasicMaterialParameters): void
	}

	declare export class MeshDepthMaterial extends Material {
		constructor(parameters?: MeshDepthMaterialParameters): this;
		wireframe: boolean;
		wireframeLinewidth: number;
		setValues(parameters: MeshDepthMaterialParameters): void
	}

	declare export class MeshLambertMaterial extends Material {
		constructor(parameters?: MeshLambertMaterialParameters): this;
		color: Color;
		emissive: number | string;
		emissiveIntensity: number;
		emissiveMap: Texture;
		map: Texture;
		lighhtMap: Texture;
		lightMapIntensity: number;
		aoMap: Texture;
		aoMapIntensity: number;
		specularMap: Texture;
		alphaMap: Texture;
		envMap: Texture;
		combine: Combine;
		reflectivity: number;
		refractionRatio: number;
		wireframe: boolean;
		wireframeLinewidth: number;
		wireframeLinecap: string;
		wireframeLinejoin: string;
		skinning: boolean;
		morphTargets: boolean;
		morphNormals: boolean;
		setValues(parameters: MeshLambertMaterialParameters): void
	}

	declare export class MeshStandardMaterial extends Material {
		constructor(parameters?: MeshStandardMaterialParameters): this;
		defines: any;
		color: Color;
		roughness: number;
		metalness: number;
		map: Texture;
		lighhtMap: Texture;
		lightMapIntensity: number;
		aoMap: Texture;
		aoMapIntensity: number;
		emissive: Color;
		emissiveIntensity: number;
		emissiveMap: Texture;
		bumpMap: Texture;
		bumpScale: number;
		normalMap: Texture;
		normalScale: number;
		displacementMap: Texture;
		displacementScale: number;
		displacementBias: number;
		roughnessMap: Texture;
		metalMap: Texture;
		alphaMap: Texture;
		envMap: Texture;
		envMapIntensity: number;
		refractionRatio: number;
		wireframe: boolean;
		wireframeLinewidth: number;
		skinning: boolean;
		morphTargets: boolean;
		morphNormals: boolean;
		setValues(parameters: MeshStandardMaterialParameters): void
	}

	declare export class MeshNormalMaterial extends Material {
		constructor(parameters?: MeshNormalMaterialParameters): this;
		wireframe: boolean;
		wireframeLinewidth: number;
		morphTargets: boolean;
		setValues(parameters: MeshNormalMaterialParameters): void
	}

	declare export class MeshPhongMaterial extends Material {
		constructor(parameters?: MeshPhongMaterialParameters): this;
		color: Color;
		specular: Color;
		shininess: number;
		map: Texture;
		lightMap: Texture;
		lightMapIntensity: number;
		aoMap: Texture;
		aoMapIntensity: number;
		emissive: Color;
		emissiveIntensity: number;
		emissiveMap: Texture;
		bumpMap: Texture;
		bumpScale: number;
		normalMap: Texture;
		normalScale: Vector2;
		displacementMap: Texture;
		displacementScale: number;
		displacementBias: number;
		specularMap: Texture;
		alphaMap: Texture;
		envMap: Texture;
		combine: Combine;
		reflectivity: number;
		refractionRatio: number;
		wireframe: boolean;
		wireframeLinewidth: number;
		wireframeLinecap: string;
		wireframeLinejoin: string;
		skinning: boolean;
		morphTargets: boolean;
		morphNormals: boolean;
		metal: boolean;
		setValues(parameters: MeshPhongMaterialParameters): void
	}

	declare export class MeshPhysicalMaterial extends MeshStandardMaterial {
		constructor(parameters: MeshPhysicalMaterialParameters): this;
		defines: any;
		reflectivity: number;
		clearCoat: number;
		clearCoatRoughness: number
	}

	declare export class MultiMaterial extends Material {
		constructor(materials?: Material[]): this;
		materials: Material[];
		toJSON(meta: any): any
	}

	declare export class MeshFaceMaterial extends MultiMaterial {
		
	}

	declare export class PointsMaterial extends Material {
		constructor(parameters?: PointsMaterialParameters): this;
		color: Color;
		map: Texture;
		size: number;
		sizeAttenuation: boolean;
		setValues(parameters: PointsMaterialParameters): void
	}

	declare export class PointCloudMaterial extends PointsMaterial {
		
	}

	declare export class ParticleBasicMaterial extends PointsMaterial {
		
	}

	declare export class ParticleSystemMaterial extends PointsMaterial {
		
	}

	declare export class ShaderMaterial extends Material {
		constructor(parameters?: ShaderMaterialParameters): this;
		defines: any;
		uniforms: any;
		vertexShader: string;
		fragmentShader: string;
		linewidth: number;
		wireframe: boolean;
		wireframeLinewidth: number;
		lights: boolean;
		clipping: boolean;
		skinning: boolean;
		morphTargets: boolean;
		morphNormals: boolean;
		derivatives: any;
		extensions: {
		derivatives: boolean,
		fragDepth: boolean,
		drawBuffers: boolean,
		shaderTextureLOD: boolean
	};
		defaultAttributeValues: any;
		index0AttributeName: string;
		setValues(parameters: ShaderMaterialParameters): void;
		toJSON(meta: any): any
	}

	declare export class RawShaderMaterial extends ShaderMaterial {
		constructor(parameters?: ShaderMaterialParameters): this
	}

	declare export class SpriteMaterial extends Material {
		constructor(parameters?: SpriteMaterialParameters): this;
		color: Color;
		map: Texture;
		rotation: number;
		setValues(parameters: SpriteMaterialParameters): void
	}

	declare export class ShadowMaterial extends ShaderMaterial {
		constructor(parameters?: ShaderMaterialParameters): this
	}

	declare export class Box2  {
		constructor(min?: Vector2, max?: Vector2): this;
		max: Vector2;
		min: Vector2;
		set(min: Vector2, max: Vector2): Box2;
		setFromPoints(points: Vector2[]): Box2;
		setFromCenterAndSize(center: Vector2, size: Vector2): Box2;
		clone(): this;
		copy(box: this): this;
		makeEmpty(): Box2;
		isEmpty(): boolean;
		getCenter(optionalTarget?: Vector2): Vector2;
		getSize(optionalTarget?: Vector2): Vector2;
		expandByPoint(point: Vector2): Box2;
		expandByVector(vector: Vector2): Box2;
		expandByScalar(scalar: number): Box2;
		containsPoint(point: Vector2): boolean;
		containsBox(box: Box2): boolean;
		getParameter(point: Vector2): Vector2;
		intersectsBox(box: Box2): boolean;
		clampPoint(point: Vector2, optionalTarget?: Vector2): Vector2;
		distanceToPoint(point: Vector2): number;
		intersect(box: Box2): Box2;
		union(box: Box2): Box2;
		translate(offset: Vector2): Box2;
		equals(box: Box2): boolean;
		empty(): any;
		isIntersectionBox(b: any): any
	}

	declare export class Box3  {
		constructor(min?: Vector3, max?: Vector3): this;
		max: Vector3;
		min: Vector3;
		set(min: Vector3, max: Vector3): Box3;
		setFromArray(array: ArrayLike<number>): Box3;
		setFromPoints(points: Vector3[]): Box3;
		setFromCenterAndSize(center: Vector3, size: Vector3): Box3;
		setFromObject(object: Object3D): Box3;
		clone(): this;
		copy(box: this): this;
		makeEmpty(): Box3;
		isEmpty(): boolean;
		getCenter(optionalTarget?: Vector3): Vector3;
		getSize(optionalTarget?: Vector3): Vector3;
		expandByPoint(point: Vector3): Box3;
		expandByVector(vector: Vector3): Box3;
		expandByScalar(scalar: number): Box3;
		containsPoint(point: Vector3): boolean;
		containsBox(box: Box3): boolean;
		getParameter(point: Vector3): Vector3;
		intersectsBox(box: Box3): boolean;
		intersectsSphere(sphere: Sphere): boolean;
		intersectsPlane(plane: Plane): boolean;
		clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
		distanceToPoint(point: Vector3): number;
		getBoundingSphere(optionalTarget?: Sphere): Sphere;
		intersect(box: Box3): Box3;
		union(box: Box3): Box3;
		applyMatrix4(matrix: Matrix4): Box3;
		translate(offset: Vector3): Box3;
		equals(box: Box3): boolean;
		empty(): any;
		isIntersectionBox(b: any): any;
		isIntersectionSphere(s: any): any
	}

	declare export class Color  {
		constructor(color?: Color): this;
		constructor(color?: string): this;
		constructor(color?: number): this;
		constructor(r: number, g: number, b: number): this;
		r: number;
		g: number;
		b: number;
		set(color: Color): Color;
		set(color: number): Color;
		set(color: string): Color;
		setScalar(scalar: number): Color;
		setHex(hex: number): Color;
		setRGB(r: number, g: number, b: number): Color;
		setHSL(h: number, s: number, l: number): Color;
		setStyle(style: string): Color;
		clone(): this;
		copy(color: this): this;
		copyGammaToLinear(color: Color, gammaFactor?: number): Color;
		copyLinearToGamma(color: Color, gammaFactor?: number): Color;
		convertGammaToLinear(): Color;
		convertLinearToGamma(): Color;
		getHex(): number;
		getHexString(): string;
		getHSL(): HSL;
		getStyle(): string;
		offsetHSL(h: number, s: number, l: number): Color;
		add(color: Color): Color;
		addColors(color1: Color, color2: Color): Color;
		addScalar(s: number): Color;
		sub(color: Color): Color;
		multiply(color: Color): Color;
		multiplyScalar(s: number): Color;
		lerp(color: Color, alpha: number): Color;
		equals(color: Color): boolean;
		fromArray(rgb: number[], offset?: number): Color;
		toArray(array?: number[], offset?: number): number[]
	}

	declare export class Euler  {
		constructor(x?: number, y?: number, z?: number, order?: string): this;
		x: number;
		y: number;
		z: number;
		order: string;
		onChangeCallback: Function;
		set(x: number, y: number, z: number, order?: string): Euler;
		clone(): this;
		copy(euler: this): this;
		setFromRotationMatrix(m: Matrix4, order?: string, update?: boolean): Euler;
		setFromQuaternion(q: Quaternion, order?: string, update?: boolean): Euler;
		setFromVector3(v: Vector3, order?: string): Euler;
		reorder(newOrder: string): Euler;
		equals(euler: Euler): boolean;
		fromArray(xyzo: any[]): Euler;
		toArray(array?: number[], offset?: number): number[];
		toVector3(optionalResult?: Vector3): Vector3;
		onChange(callback: Function): void;
		RotationOrders: string[];
		DefaultOrder: string
	}

	declare export class Frustum  {
		constructor(p0?: Plane, p1?: Plane, p2?: Plane, p3?: Plane, p4?: Plane, p5?: Plane): this;
		planes: Plane[];
		set(
		p0?: number, p1?: number, p2?: number, p3?: number, p4?: number, p5?: number
	): Frustum;
		clone(): this;
		copy(frustum: this): this;
		setFromMatrix(m: Matrix4): Frustum;
		intersectsObject(object: Object3D): boolean;
		intersectsObject(sprite: Sprite): boolean;
		intersectsSphere(sphere: Sphere): boolean;
		intersectsBox(box: Box3): boolean;
		containsPoint(point: Vector3): boolean
	}

	declare export class Line3  {
		constructor(start?: Vector3, end?: Vector3): this;
		start: Vector3;
		end: Vector3;
		set(start?: Vector3, end?: Vector3): Line3;
		clone(): this;
		copy(line: this): this;
		getCenter(optionalTarget?: Vector3): Vector3;
		delta(optionalTarget?: Vector3): Vector3;
		distanceSq(): number;
		distance(): number;
		at(t: number, optionalTarget?: Vector3): Vector3;
		closestPointToPointParameter(point: Vector3, clampToLine?: boolean): number;
		closestPointToPoint(point: Vector3, clampToLine?: boolean, optionalTarget?: Vector3): Vector3;
		applyMatrix4(matrix: Matrix4): Line3;
		equals(line: Line3): boolean
	}

	declare export class Matrix3 extends Matrix {
		constructor(): this;
		elements: Float32Array;
		set(
		n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number
	): Matrix3;
		identity(): Matrix3;
		clone(): this;
		copy(m: this): this;
		setFromMatrix4(m: Matrix4): Matrix3;
		applyToVector3Array(array: ArrayLike<number>, offset?: number, length?: number): ArrayLike<number>;
		applyToBuffer(buffer: BufferAttribute, offset?: number, length?: number): BufferAttribute;
		multiplyScalar(s: number): Matrix3;
		determinant(): number;
		getInverse(matrix: Matrix3, throwOnDegenerate?: boolean): Matrix3;
		transpose(): Matrix3;
		getNormalMatrix(matrix4: Matrix4): Matrix3;
		transposeIntoArray(r: number[]): number[];
		fromArray(array: number[], offset?: number): Matrix3;
		toArray(): number[];
		multiplyVector3(vector: Vector3): any;
		multiplyVector3Array(a: any): any;
		getInverse(matrix: Matrix4, throwOnDegenerate?: boolean): Matrix3;
		flattenToArrayOffset(array: number[], offset: number): number[]
	}

	declare export class Matrix4 extends Matrix {
		constructor(): this;
		elements: Float32Array;
		set(
		n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number
	): Matrix4;
		identity(): Matrix4;
		clone(): this;
		copy(m: this): this;
		copyPosition(m: Matrix4): Matrix4;
		extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
		makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
		extractRotation(m: Matrix4): Matrix4;
		makeRotationFromEuler(euler: Euler): Matrix4;
		makeRotationFromQuaternion(q: Quaternion): Matrix4;
		lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;
		multiply(m: Matrix4): Matrix4;
		premultiply(m: Matrix4): Matrix4;
		multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;
		multiplyToArray(a: Matrix4, b: Matrix4, r: number[]): Matrix4;
		multiplyScalar(s: number): Matrix4;
		applyToVector3Array(array: ArrayLike<number>, offset?: number, length?: number): ArrayLike<number>;
		applyToBuffer(buffer: BufferAttribute, offset?: number, length?: number): BufferAttribute;
		determinant(): number;
		transpose(): Matrix4;
		setPosition(v: Vector3): Matrix4;
		getInverse(m: Matrix4, throwOnDegeneratee?: boolean): Matrix4;
		scale(v: Vector3): Matrix4;
		getMaxScaleOnAxis(): number;
		makeTranslation(x: number, y: number, z: number): Matrix4;
		makeRotationX(theta: number): Matrix4;
		makeRotationY(theta: number): Matrix4;
		makeRotationZ(theta: number): Matrix4;
		makeRotationAxis(axis: Vector3, angle: number): Matrix4;
		makeScale(x: number, y: number, z: number): Matrix4;
		compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;
		decompose(translation?: Vector3, rotation?: Quaternion, scale?: Vector3): Object[];
		makeFrustum(
		left: number, right: number, bottom: number, top: number, near: number, far: number
	): Matrix4;
		makePerspective(fov: number, aspect: number, near: number, far: number): Matrix4;
		makeOrthographic(
		left: number, right: number, top: number, bottom: number, near: number, far: number
	): Matrix4;
		equals(matrix: Matrix4): boolean;
		fromArray(array: number[], offset?: number): Matrix4;
		toArray(): number[];
		extractPosition(m: Matrix4): Matrix4;
		setRotationFromQuaternion(q: Quaternion): Matrix4;
		multiplyVector3(v: any): any;
		multiplyVector4(v: any): any;
		multiplyVector3Array(array: number[]): number[];
		rotateAxis(v: any): void;
		crossVector(v: any): void;
		flattenToArrayOffset(array: number[], offset: number): number[]
	}

	declare export class Plane  {
		constructor(normal?: Vector3, constant?: number): this;
		normal: Vector3;
		constant: number;
		set(normal: Vector3, constant: number): Plane;
		setComponents(x: number, y: number, z: number, w: number): Plane;
		setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
		setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
		clone(): this;
		copy(plane: this): this;
		normalize(): Plane;
		negate(): Plane;
		distanceToPoint(point: Vector3): number;
		distanceToSphere(sphere: Sphere): number;
		projectPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
		orthoPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
		intersectLine(line: Line3, optionalTarget?: Vector3): Vector3;
		intersectsLine(line: Line3): boolean;
		intersectsBox(box: Box3): boolean;
		coplanarPoint(optionalTarget?: boolean): Vector3;
		applyMatrix4(matrix: Matrix4, optionalNormalMatrix?: Matrix3): Plane;
		translate(offset: Vector3): Plane;
		equals(plane: Plane): boolean;
		isIntersectionLine(l: any): any
	}

	declare export class Spherical  {
		constructor(radius?: number, phi?: number, theta?: number): this;
		set(radius: number, phi: number, theta: number): Spherical;
		clone(): this;
		copy(other: this): this;
		makeSafe(): void;
		setFromVector3(vec3: Vector3): Spherical
	}

	declare export class Quaternion  {
		constructor(x?: number, y?: number, z?: number, w?: number): this;
		x: number;
		y: number;
		z: number;
		w: number;
		set(x: number, y: number, z: number, w: number): Quaternion;
		clone(): this;
		copy(q: this): this;
		setFromEuler(euler: Euler, update?: boolean): Quaternion;
		setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
		setFromRotationMatrix(m: Matrix4): Quaternion;
		setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion;
		inverse(): Quaternion;
		conjugate(): Quaternion;
		dot(v: Vector3): number;
		lengthSq(): number;
		length(): number;
		normalize(): Quaternion;
		multiply(q: Quaternion): Quaternion;
		premultiply(q: Quaternion): Quaternion;
		multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;
		slerp(qb: Quaternion, t: number): Quaternion;
		equals(v: Quaternion): boolean;
		fromArray(n: number[]): Quaternion;
		toArray(): number[];
		fromArray(xyzw: number[], offset?: number): Quaternion;
		toArray(xyzw?: number[], offset?: number): number[];
		onChange(callback: Function): Quaternion;
		onChangeCallback: Function;
		slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): Quaternion;
		slerpFlat(
		dst: number[], dstOffset: number, src0: number[], srcOffset: number, src1: number[], stcOffset1: number, t: number
	): Quaternion;
		multiplyVector3(v: any): any
	}

	declare export class Ray  {
		constructor(origin?: Vector3, direction?: Vector3): this;
		origin: Vector3;
		direction: Vector3;
		set(origin: Vector3, direction: Vector3): Ray;
		clone(): this;
		copy(ray: this): this;
		at(t: number, optionalTarget?: Vector3): Vector3;
		lookAt(v: Vector3): Vector3;
		recast(t: number): Ray;
		closestPointToPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
		distanceToPoint(point: Vector3): number;
		distanceSqToPoint(point: Vector3): number;
		distanceSqToSegment(
		v0: Vector3, v1: Vector3, optionalPointOnRay?: Vector3, optionalPointOnSegment?: Vector3
	): number;
		intersectSphere(sphere: Sphere, optionalTarget?: Vector3): Vector3;
		intersectsSphere(sphere: Sphere): boolean;
		distanceToPlane(plane: Plane): number;
		intersectPlane(plane: Plane, optionalTarget?: Vector3): Vector3;
		intersectsPlane(plane: Plane): boolean;
		intersectBox(box: Box3, optionalTarget?: Vector3): Vector3;
		intersectsBox(box: Box3): boolean;
		intersectTriangle(
		a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, optionalTarget?: Vector3
	): Vector3;
		applyMatrix4(matrix4: Matrix4): Ray;
		equals(ray: Ray): boolean;
		isIntersectionBox(b: any): any;
		isIntersectionPlane(p: any): any;
		isIntersectionSphere(s: any): any
	}

	declare export class Sphere  {
		constructor(center?: Vector3, radius?: number): this;
		center: Vector3;
		radius: number;
		set(center: Vector3, radius: number): Sphere;
		setFromPoints(points: Vector3[], optionalCenter?: Vector3): Sphere;
		clone(): this;
		copy(sphere: this): this;
		empty(): boolean;
		containsPoint(point: Vector3): boolean;
		distanceToPoint(point: Vector3): number;
		intersectsSphere(sphere: Sphere): boolean;
		intersectsBox(box: Box3): boolean;
		intersectsPlane(plane: Plane): boolean;
		clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
		getBoundingBox(optionalTarget?: Box3): Box3;
		applyMatrix4(matrix: Matrix4): Sphere;
		translate(offset: Vector3): Sphere;
		equals(sphere: Sphere): boolean
	}

	declare export class Spline  {
		constructor(points: SplineControlPoint[]): this;
		points: SplineControlPoint[];
		initFromArray(a: number[][]): void;
		getPoint(k: number): SplineControlPoint;
		getControlPointsArray(): number[][];
		getLength(nSubDivisions?: number): {
		chunks: number[],
		total: number
	};
		reparametrizeByArcLength(samplingCoef: number): void
	}

	declare class Triangle  {
		constructor(a?: Vector3, b?: Vector3, c?: Vector3): this;
		a: Vector3;
		b: Vector3;
		c: Vector3;
		set(a: Vector3, b: Vector3, c: Vector3): Triangle;
		setFromPointsAndIndices(points: Vector3[], i0: number, i1: number, i2: number): Triangle;
		clone(): this;
		copy(triangle: this): this;
		area(): number;
		midpoint(optionalTarget?: Vector3): Vector3;
		normal(optionalTarget?: Vector3): Vector3;
		plane(optionalTarget?: Vector3): Plane;
		barycoordFromPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
		containsPoint(point: Vector3): boolean;
		closestPointToPoint(): Vector3;
		equals(triangle: Triangle): boolean;
		normal(a: Vector3, b: Vector3, c: Vector3, optionalTarget?: Vector3): Vector3;
		barycoordFromPoint(
		point: Vector3, a: Vector3, b: Vector3, c: Vector3, optionalTarget: Vector3
	): Vector3;
		containsPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3): boolean
	}

	declare export class Vector2 extends Vector {
		constructor(x?: number, y?: number): this;
		x: number;
		y: number;
		width: number;
		height: number;
		set(x: number, y: number): Vector2;
		setScalar(scalar: number): Vector2;
		setX(x: number): Vector2;
		setY(y: number): Vector2;
		setComponent(index: number, value: number): void;
		getComponent(index: number): number;
		clone(): this;
		copy(v: this): this;
		add(v: Vector2): Vector2;
		addScalar(s: number): Vector2;
		addVectors(a: Vector2, b: Vector2): Vector2;
		addScaledVector(v: Vector2, s: number): Vector2;
		sub(v: Vector2): Vector2;
		subVectors(a: Vector2, b: Vector2): Vector2;
		multiply(v: Vector2): Vector2;
		multiplyScalar(scalar: number): Vector2;
		divide(v: Vector2): Vector2;
		divideScalar(s: number): Vector2;
		min(v: Vector2): Vector2;
		max(v: Vector2): Vector2;
		clamp(min: Vector2, max: Vector2): Vector2;
		clampScalar(min: number, max: number): Vector2;
		clampLength(min: number, max: number): Vector2;
		floor(): Vector2;
		ceil(): Vector2;
		round(): Vector2;
		roundToZero(): Vector2;
		negate(): Vector2;
		dot(v: Vector2): number;
		lengthSq(): number;
		length(): number;
		lengthManhattan(): number;
		normalize(): Vector2;
		angle(): number;
		distanceTo(v: Vector2): number;
		distanceToSquared(v: Vector2): number;
		distanceToManhattan(v: Vector2): number;
		setLength(length: number): Vector2;
		lerp(v: Vector2, alpha: number): Vector2;
		lerpVectors(v1: Vector2, v2: Vector2, alpha: number): Vector2;
		equals(v: Vector2): boolean;
		fromArray(xy: number[], offset?: number): Vector2;
		toArray(xy?: number[], offset?: number): number[];
		fromAttribute(attribute: BufferAttribute, index: number, offset?: number): Vector2;
		rotateAround(center: Vector2, angle: number): Vector2
	}

	declare export class Vector3 extends Vector {
		constructor(x?: number, y?: number, z?: number): this;
		x: number;
		y: number;
		z: number;
		set(x: number, y: number, z: number): Vector3;
		setScalar(scalar: number): Vector3;
		setX(x: number): Vector3;
		setY(y: number): Vector3;
		setZ(z: number): Vector3;
		setComponent(index: number, value: number): void;
		getComponent(index: number): number;
		clone(): this;
		copy(v: this): this;
		add(a: Vector3): Vector3;
		addScalar(s: number): Vector3;
		addScaledVector(v: Vector3, s: number): Vector3;
		addVectors(a: Vector3, b: Vector3): Vector3;
		sub(a: Vector3): Vector3;
		subScalar(s: number): Vector3;
		subVectors(a: Vector3, b: Vector3): Vector3;
		multiply(v: Vector3): Vector3;
		multiplyScalar(s: number): Vector3;
		multiplyVectors(a: Vector3, b: Vector3): Vector3;
		applyEuler(euler: Euler): Vector3;
		applyAxisAngle(axis: Vector3, angle: number): Vector3;
		applyMatrix3(m: Matrix3): Vector3;
		applyMatrix4(m: Matrix4): Vector3;
		applyProjection(m: Matrix4): Vector3;
		applyQuaternion(q: Quaternion): Vector3;
		project(camrea: Camera): Vector3;
		unproject(camera: Camera): Vector3;
		transformDirection(m: Matrix4): Vector3;
		divide(v: Vector3): Vector3;
		divideScalar(s: number): Vector3;
		min(v: Vector3): Vector3;
		max(v: Vector3): Vector3;
		clamp(min: Vector3, max: Vector3): Vector3;
		clampScalar(min: number, max: number): Vector3;
		clampLength(min: number, max: number): Vector3;
		floor(): Vector3;
		ceil(): Vector3;
		round(): Vector3;
		roundToZero(): Vector3;
		negate(): Vector3;
		dot(v: Vector3): number;
		lengthSq(): number;
		length(): number;
		lengthManhattan(): number;
		normalize(): Vector3;
		setLength(l: number): Vector3;
		lerp(v: Vector3, alpha: number): Vector3;
		lerpVectors(v1: Vector3, v2: Vector3, alpha: number): Vector3;
		cross(a: Vector3): Vector3;
		crossVectors(a: Vector3, b: Vector3): Vector3;
		projectOnVector(v: Vector3): Vector3;
		projectOnPlane(planeNormal: Vector3): Vector3;
		reflect(vector: Vector3): Vector3;
		angleTo(v: Vector3): number;
		distanceTo(v: Vector3): number;
		distanceToSquared(v: Vector3): number;
		distanceToManhattan(v: Vector3): number;
		setFromSpherical(s: Spherical): Matrix3;
		setFromMatrixPosition(m: Matrix4): Vector3;
		setFromMatrixScale(m: Matrix4): Vector3;
		setFromMatrixColumn(matrix: Matrix4, index: number): Vector3;
		equals(v: Vector3): boolean;
		fromArray(xyz: number[], offset?: number): Vector3;
		toArray(xyz?: number[], offset?: number): number[];
		fromAttribute(attribute: BufferAttribute, index: number, offset?: number): Vector3;
		getPositionFromMatrix(m: Matrix4): Vector3;
		getScaleFromMatrix(m: Matrix4): Vector3;
		getColumnFromMatrix(index: number, matrix: Matrix4): Vector3
	}

	declare export class Vertex extends Vector3 {
		
	}

	declare export class Vector4 extends Vector {
		constructor(x?: number, y?: number, z?: number, w?: number): this;
		x: number;
		y: number;
		z: number;
		w: number;
		set(x: number, y: number, z: number, w: number): Vector4;
		setScalar(scalar: number): Vector4;
		setX(x: number): Vector4;
		setY(y: number): Vector4;
		setZ(z: number): Vector4;
		setW(w: number): Vector4;
		setComponent(index: number, value: number): void;
		getComponent(index: number): number;
		clone(): this;
		copy(v: this): this;
		add(v: Vector4): Vector4;
		addScalar(s: number): Vector4;
		addVectors(a: Vector4, b: Vector4): Vector4;
		addScaledVector(v: Vector4, s: number): Vector4;
		sub(v: Vector4): Vector4;
		subScalar(s: number): Vector4;
		subVectors(a: Vector4, b: Vector4): Vector4;
		multiplyScalar(s: number): Vector4;
		applyMatrix4(m: Matrix4): Vector4;
		divideScalar(s: number): Vector4;
		setAxisAngleFromQuaternion(q: Quaternion): Vector4;
		setAxisAngleFromRotationMatrix(m: Matrix3): Vector4;
		min(v: Vector4): Vector4;
		max(v: Vector4): Vector4;
		clamp(min: Vector4, max: Vector4): Vector4;
		clampScalar(min: number, max: number): Vector4;
		floor(): Vector4;
		ceil(): Vector4;
		round(): Vector4;
		roundToZero(): Vector4;
		negate(): Vector4;
		dot(v: Vector4): number;
		lengthSq(): number;
		length(): number;
		lengthManhattan(): number;
		normalize(): Vector4;
		setLength(length: number): Vector4;
		lerp(v: Vector4, alpha: number): Vector4;
		lerpVectors(v1: Vector4, v2: Vector4, alpha: number): Vector4;
		equals(v: Vector4): boolean;
		fromArray(xyzw: number[], offset?: number): Vector4;
		toArray(xyzw?: number[], offset?: number): number[];
		fromAttribute(attribute: BufferAttribute, index: number, offset?: number): Vector4
	}

	declare export class Interpolant  {
		constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any): this;
		parameterPositions: any;
		samplesValues: any;
		valueSize: number;
		resultBuffer: any;
		evaluate(time: number): any
	}

	declare export class CubicInterpolant extends Interpolant {
		constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any): this;
		interpolate_(i1: number, t0: number, t: number, t1: number): any
	}

	declare export class DiscreteInterpolant extends Interpolant {
		constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any): this;
		interpolate_(i1: number, t0: number, t: number, t1: number): any
	}

	declare export class LinearInterpolant extends Interpolant {
		constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any): this;
		interpolate_(i1: number, t0: number, t: number, t1: number): any
	}

	declare export class QuaternionLinearInterpolant extends Interpolant {
		constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any): this;
		interpolate_(i1: number, t0: number, t: number, t1: number): any
	}

	declare export class Bone extends Object3D {
		constructor(skin: SkinnedMesh): this;
		skin: SkinnedMesh
	}

	declare export class Group extends Object3D {
		constructor(): this
	}

	declare export class LOD extends Object3D {
		constructor(): this;
		levels: any[];
		addLevel(object: Object3D, distance?: number): void;
		getObjectForDistance(distance: number): Object3D;
		raycast(raycaster: Raycaster, intersects: any): void;
		update(camera: Camera): void;
		toJSON(meta: any): any;
		objects: any[]
	}

	declare export class LensFlare extends Object3D {
		constructor(texture?: Texture, size?: number, distance?: number, blending?: Blending, color?: Color): this;
		lensFlares: LensFlareProperty[];
		positionScreen: Vector3;
		customUpdateCallback: (object: LensFlare) => void;
		add(object: Object3D): void;
		add(
		texture: Texture, size?: number, distance?: number, blending?: Blending, color?: Color
	): void;
		updateLensFlares(): void
	}

	declare export class Line extends Object3D {
		constructor(geometry?: Geometry | BufferGeometry, material?: LineDashedMaterial | LineBasicMaterial | ShaderMaterial, mode?: number): this;
		geometry: Geometry | BufferGeometry;
		material: Material;
		raycast(raycaster: Raycaster, intersects: any): void
	}

	declare export class LineSegments extends Line {
		constructor(geometry?: Geometry | BufferGeometry, material?: LineDashedMaterial | LineBasicMaterial | ShaderMaterial, mode?: number): this
	}

	declare export class Mesh extends Object3D {
		constructor(geometry?: Geometry, material?: Material): this;
		constructor(geometry?: BufferGeometry, material?: Material): this;
		geometry: Geometry | BufferGeometry;
		material: Material;
		drawMode: TrianglesDrawModes;
		setDrawMode(drawMode: TrianglesDrawModes): void;
		updateMorphTargets(): void;
		getMorphTargetIndexByName(name: string): number;
		raycast(raycaster: Raycaster, intersects: any): void
	}

	declare export class Points extends Object3D {
		constructor(geometry?: Geometry | BufferGeometry, material?: Material): this;
		geometry: Geometry | BufferGeometry;
		material: Material;
		raycast(raycaster: Raycaster, intersects: any): void
	}

	declare export class PointCloud extends Points {
		
	}

	declare export class ParticleSystem extends Points {
		
	}

	declare export class Skeleton  {
		constructor(bones: Bone[], boneInverses?: Matrix4[], useVertexTexture?: boolean): this;
		useVertexTexture: boolean;
		identityMatrix: Matrix4;
		bones: Bone[];
		boneTextureWidth: number;
		boneTextureHeight: number;
		boneMatrices: Float32Array;
		boneTexture: DataTexture;
		boneInverses: Matrix4[];
		calculateInverses(bone: Bone): void;
		pose(): void;
		update(): void;
		clone(): this
	}

	declare export class SkinnedMesh extends Mesh {
		constructor(geometry?: Geometry | BufferGeometry, material?: MeshBasicMaterial, useVertexTexture?: boolean): this;
		constructor(geometry?: Geometry | BufferGeometry, material?: MeshDepthMaterial, useVertexTexture?: boolean): this;
		constructor(geometry?: Geometry | BufferGeometry, material?: MultiMaterial, useVertexTexture?: boolean): this;
		constructor(geometry?: Geometry | BufferGeometry, material?: MeshLambertMaterial, useVertexTexture?: boolean): this;
		constructor(geometry?: Geometry | BufferGeometry, material?: MeshNormalMaterial, useVertexTexture?: boolean): this;
		constructor(geometry?: Geometry | BufferGeometry, material?: MeshPhongMaterial, useVertexTexture?: boolean): this;
		constructor(geometry?: Geometry | BufferGeometry, material?: ShaderMaterial, useVertexTexture?: boolean): this;
		bindMode: string;
		bindMatrix: Matrix4;
		bindMatrixInverse: Matrix4;
		skeleton: Skeleton;
		bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;
		pose(): void;
		normalizeSkinWeights(): void;
		updateMatrixWorld(force?: boolean): void
	}

	declare export class Sprite extends Object3D {
		constructor(material?: Material): this;
		geometry: BufferGeometry;
		material: SpriteMaterial;
		raycast(raycaster: Raycaster, intersects: any): void
	}

	declare export class Particle extends Sprite {
		
	}

	declare export class WebGLRenderer extends Renderer {
		constructor(parameters?: WebGLRendererParameters): this;
		domElement: HTMLCanvasElement;
		context: WebGLRenderingContext;
		autoClear: boolean;
		autoClearColor: boolean;
		autoClearDepth: boolean;
		autoClearStencil: boolean;
		sortObjects: boolean;
		clippingPlanes: any[];
		localClippingEnabled: boolean;
		extensions: WebGLExtensions;
		gammaInput: boolean;
		gammaOutput: boolean;
		physicallyCorrectLights: boolean;
		toneMapping: ToneMapping;
		toneMappingExposure: number;
		toneMappingWhitePoint: number;
		shadowMapDebug: boolean;
		maxMorphTargets: number;
		maxMorphNormals: number;
		info: {
		memory: {
		geometries: number,
		textures: number
	},
		render: {
		calls: number,
		vertices: number,
		faces: number,
		points: number
	},
		programs: number
	};
		shadowMap: WebGLShadowMap;
		pixelRation: number;
		capabilities: WebGLCapabilities;
		properties: WebGLProperties;
		state: WebGLState;
		allocTextureUnit: any;
		getContext(): WebGLRenderingContext;
		getContextAttributes(): any;
		forceContextLoss(): void;
		getMaxAnisotropy(): number;
		getPrecision(): string;
		getPixelRatio(): number;
		setPixelRatio(value: number): void;
		getSize(): {
		width: number,
		height: number
	};
		setSize(width: number, height: number, updateStyle?: boolean): void;
		setViewport(x?: number, y?: number, width?: number, height?: number): void;
		setScissor(x: number, y: number, width: number, height: number): void;
		setScissorTest(enable: boolean): void;
		getClearColor(): Color;
		setClearColor(color: Color, alpha?: number): void;
		setClearColor(color: string, alpha?: number): void;
		setClearColor(color: number, alpha?: number): void;
		getClearAlpha(): number;
		setClearAlpha(alpha: number): void;
		clear(color?: boolean, depth?: boolean, stencil?: boolean): void;
		clearColor(): void;
		clearDepth(): void;
		clearStencil(): void;
		clearTarget(
		renderTarget: WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean
	): void;
		resetGLState(): void;
		dispose(): void;
		renderBufferImmediate(object: Object3D, program: Object, material: Material): void;
		renderBufferDirect(
		camera: Camera, fog: Fog, material: Material, geometryGroup: any, object: Object3D
	): void;
		render(
		scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: boolean
	): void;
		setFaceCulling(cullFace?: CullFace, frontFace?: FrontFaceDirection): void;
		setTexture(texture: Texture, slot: number): void;
		setTexture2D(texture: Texture, slot: number): void;
		setTextureCube(texture: Texture, slot: number): void;
		getCurrentRenderTarget(): RenderTarget;
		setRenderTarget(renderTarget: RenderTarget): void;
		readRenderTargetPixels(
		renderTarget: RenderTarget, x: number, y: number, width: number, height: number, buffer: any
	): void;
		gammaFactor: number;
		shadowMapEnabled: boolean;
		shadowMapType: ShadowMapType;
		shadowMapCullFace: CullFace;
		supportsFloatTextures(): any;
		supportsHalfFloatTextures(): any;
		supportsStandardDerivatives(): any;
		supportsCompressedTextureS3TC(): any;
		supportsCompressedTexturePVRTC(): any;
		supportsBlendMinMax(): any;
		supportsVertexTextures(): any;
		supportsInstancedArrays(): any;
		enableScissorTest(boolean: any): any
	}

	declare export class WebGLRenderTarget extends EventDispatcher {
		constructor(width: number, height: number, options?: WebGLRenderTargetOptions): this;
		uuid: string;
		width: number;
		height: number;
		scissor: Vector4;
		scissorTest: boolean;
		viewpport: Vector4;
		texture: Texture;
		depthBuffer: boolean;
		stencilBuffer: boolean;
		depthTexture: Texture;
		wrapS: any;
		wrapT: any;
		magFilter: any;
		minFilter: any;
		anisotropy: any;
		offset: any;
		repeat: any;
		format: any;
		type: any;
		generateMipmaps: any;
		setSize(width: number, height: number): void;
		clone(): this;
		copy(source: this): this;
		dispose(): void
	}

	declare export class WebGLRenderTargetCube extends WebGLRenderTarget {
		constructor(width: number, height: number, options?: WebGLRenderTargetOptions): this;
		activeCubeFace: number;
		activeMipMapLevel: number
	}

	declare export class Uniform  {
		constructor(value: any): this;
		constructor(type: string, value: any): this;
		type: string;
		value: any;
		dynamic: boolean;
		onUpdateCallback: Function;
		onUpdate(callback: Function): Uniform
	}

	declare export class WebGLBufferRenderer  {
		constructor(_gl: WebGLRenderingContext, extensions: any, _infoRender: any): this;
		setMode(value: any): void;
		render(start: any, count: number): void;
		renderInstances(geometry: any): void
	}

	declare export class WebGLClipping  {
		uniform: {
		value: any,
		needsUpdate: boolean
	};
		numPlanes: number;
		init(planes: any[], enableLocalClipping: boolean, camera: Camera): boolean;
		beginShadows(): void;
		endShadows(): void;
		setState(
		planes: any[], clipShadows: boolean, camera: Camera, cache: boolean, fromCache: boolean
	): void
	}

	declare export class WebGLCapabilities  {
		constructor(gl: WebGLRenderingContext, extensions: any, parameters: WebGLCapabilitiesParameters): this;
		precision: any;
		logarithmicDepthBuffer: any;
		maxTextures: any;
		maxVertexTextures: any;
		maxTextureSize: any;
		maxCubemapSize: any;
		maxAttributes: any;
		maxVertexUniforms: any;
		maxVaryings: any;
		maxFragmentUniforms: any;
		vertexTextures: any;
		floatFragmentTextures: any;
		floatVertexTextures: any;
		getMaxAnisotropy(): number;
		getMaxPrecision(precision: string): string
	}

	declare export class WebGLExtensions  {
		constructor(gl: WebGLRenderingContext): this;
		get(name: string): any
	}

	declare export class WebGLGeometries  {
		constructor(gl: WebGLRenderingContext, extensions: any, _infoRender: any): this;
		get(object: any): any
	}

	declare export class WebGLLights  {
		constructor(gl: WebGLRenderingContext, properties: any, info: any): this;
		get(light: any): any
	}

	declare export class WebGLIndexedBufferRenderer  {
		constructor(gl: WebGLRenderingContext, properties: any, info: any): this;
		setMode(value: any): void;
		setIndex(index: any): void;
		render(start: any, count: number): void;
		renderInstances(geometry: any, start: any, count: number): void
	}

	declare export class WebGLObjects  {
		constructor(gl: WebGLRenderingContext, properties: any, info: any): this;
		getAttributeBuffer(attribute: any): any;
		getWireframeAttribute(geometry: any): any;
		update(object: any): void
	}

	declare export class WebGLProgram  {
		constructor(renderer: WebGLRenderer, code: string, material: ShaderMaterial, parameters: WebGLRendererParameters): this;
		id: number;
		code: string;
		usedTimes: number;
		program: any;
		vertexShader: WebGLShader;
		fragmentShader: WebGLShader;
		uniforms: any;
		attributes: any;
		getUniforms(): WebGLUniforms;
		getAttributes(): any;
		destroy(): void
	}

	declare export class WebGLPrograms  {
		constructor(renderer: WebGLRenderer, capabilities: any): this;
		programs: any[];
		getParameters(
		material: ShaderMaterial, lights: any, fog: any, nClipPlanes: number, object: any
	): any;
		getProgramCode(material: ShaderMaterial, parameters: any): string;
		acquireProgram(material: ShaderMaterial, parameters: any, code: string): WebGLProgram;
		releaseProgram(program: WebGLProgram): void
	}

	declare export class WebGLTextures  {
		constructor(gl: any, extensions: any, state: any, properties: any, capabilities: any, paramThreeToGL: Function, info: any): this;
		setTexture2D(texture: any, slot: number): void;
		setTextureCube(texture: any, slot: number): void;
		setTextureCubeDynamic(texture: any, slot: number): void;
		setupRenderTarget(renderTarget: any): void;
		updateRenderTargetMipmap(renderTarget: any): void
	}

	declare export class WebGLUniforms  {
		constructor(gl: any, program: WebGLProgram, renderer: WebGLRenderer): this;
		renderer: WebGLRenderer;
		setValue(gl: any, value: any, renderer?: any): void;
		set(gl: any, object: any, name: string): void;
		setOptional(gl: any, object: any, name: string): void;
		upload(gl: any, seq: any, values: any[], renderer: any): void;
		seqWithValue(seq: any, values: any[]): any[];
		splitDynamic(seq: any, values: any[]): any[];
		evalDynamic(seq: any, values: any[], object: any, camera: any): any[]
	}

	declare export class WebGLProperties  {
		constructor(): this;
		get(object: any): any;
		delete(object: any): void;
		clear(): void
	}

	declare export class WebGLShader  {
		constructor(gl: any, type: string, string: string): this
	}

	declare export class WebGLShadowMap  {
		constructor(_renderer: Renderer, _lights: any[], _objects: any[], capabilities: any): this;
		enabled: boolean;
		autoUpdate: boolean;
		needsUpdate: boolean;
		type: ShadowMapType;
		renderReverseSided: boolean;
		renderSingleSided: boolean;
		render(scene: Scene, camera: Camera): void;
		cullFace: any
	}

	declare export class WebGLState  {
		constructor(gl: any, extensions: any, paramThreeToGL: Function): this;
		buffers: {
		color: WebGLColorBuffer,
		depth: WebGLDepthBuffer,
		stencil: WebGLStencilBuffer
	};
		init(): void;
		initAttributes(): void;
		enableAttribute(attribute: string): void;
		enableAttributeAndDivisor(attribute: string, meshPerAttribute: any, extension: any): void;
		disableUnusedAttributes(): void;
		enable(id: string): void;
		disable(id: string): void;
		getCompressedTextureFormats(): any[];
		setBlending(
		blending: number, blendEquation: number, blendSrc: number, blendDst: number, blendEquationAlpha: number, blendSrcAlpha: number, blendDstAlpha: number
	): void;
		setColorWrite(colorWrite: number): void;
		setDepthTest(depthTest: number): void;
		setDepthWrite(depthWrite: number): void;
		setDepthFunc(depthFunc: Function): void;
		setStencilTest(stencilTest: boolean): void;
		setStencilWrite(stencilWrite: any): void;
		setStencilFunc(stencilFunc: Function, stencilRef: any, stencilMask: number): void;
		setStencilOp(stencilFail: any, stencilZFail: any, stencilZPass: any): void;
		setFlipSided(flipSided: number): void;
		setCullFace(cullFace: CullFace): void;
		setLineWidth(width: number): void;
		setPolygonOffset(polygonoffset: number, factor: number, units: number): void;
		setScissorTest(scissorTest: boolean): void;
		getScissorTest(): boolean;
		activeTexture(webglSlot: any): void;
		bindTexture(webglType: any, webglTexture: any): void;
		compressedTexImage2D(): void;
		texImage2D(): void;
		clearColor(r: number, g: number, b: number, a: number): void;
		clearDepth(depth: number): void;
		clearStencil(stencil: any): void;
		scissor(scissor: any): void;
		viewport(viewport: any): void;
		reset(): void
	}

	declare export class WebGLColorBuffer  {
		constructor(gl: any, state: any): this;
		setMask(colorMask: number): void;
		setLocked(lock: boolean): void;
		setClear(r: number, g: number, b: number, a: number): void;
		reset(): void
	}

	declare export class WebGLDepthBuffer  {
		constructor(gl: any, state: any): this;
		setTest(depthTest: boolean): void;
		sertMask(depthMask: number): void;
		setFunc(depthFunc: Function): void;
		setLocked(lock: boolean): void;
		setClear(depth: any): void;
		reset(): void
	}

	declare export class WebGLStencilBuffer  {
		constructor(gl: any, state: any): this;
		setTest(stencilTest: boolean): void;
		sertMask(stencilMask: number): void;
		setFunc(stencilFunc: Function, stencilRef: any, stencilMask: number): void;
		setOp(stencilFail: any, stencilZFail: any, stencilZPass: any): void;
		setLocked(lock: boolean): void;
		setClear(stencil: any): void;
		reset(): void
	}

	declare export class LensFlarePlugin  {
		constructor(renderer: WebGLRenderer, flares: any[]): this;
		render(
		scene: Scene, camera: Camera, viewportWidth: number, viewportHeight: number
	): void
	}

	declare export class SpritePlugin  {
		constructor(renderer: WebGLRenderer, sprites: any[]): this;
		render(
		scene: Scene, camera: Camera, viewportWidth: number, viewportHeight: number
	): void
	}

	declare export class Scene extends Object3D {
		constructor(): this;
		fog: IFog;
		overrideMaterial: Material;
		autoUpdate: boolean;
		background: any;
		toJSON(meta?: any): any
	}

	declare export class Fog extends IFog {
		constructor(hex: number, near?: number, far?: number): this;
		name: string;
		color: Color;
		near: number;
		far: number;
		clone(): this;
		toJSON(): any
	}

	declare export class FogExp2 extends IFog {
		constructor(hex: number | string, density?: number): this;
		name: string;
		color: Color;
		density: number;
		clone(): this;
		toJSON(): any
	}

	declare export class Texture extends EventDispatcher {
		constructor(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, mapping?: Mapping, wrapS?: Wrapping, wrapT?: Wrapping, magFilter?: TextureFilter, minFilter?: TextureFilter, format?: PixelFormat, type?: TextureDataType, anisotropy?: number, encoding?: TextureEncoding): this;
		id: number;
		uuid: string;
		name: string;
		sourceFile: string;
		image: any;
		mipmaps: ImageData[];
		mapping: Mapping;
		wrapS: Wrapping;
		wrapT: Wrapping;
		magFilter: TextureFilter;
		minFilter: TextureFilter;
		anisotropy: number;
		format: PixelFormat;
		type: TextureDataType;
		offset: Vector2;
		repeat: Vector2;
		generateMipmaps: boolean;
		premultiplyAlpha: boolean;
		flipY: boolean;
		unpackAlignment: number;
		encoding: TextureEncoding;
		version: number;
		needsUpdate: boolean;
		onUpdate: () => void;
		DEFAULT_IMAGE: any;
		DEFAULT_MAPPING: any;
		clone(): this;
		copy(source: this): this;
		toJSON(meta: any): any;
		dispose(): void;
		transformUv(uv: Vector): void
	}

	declare export class DepthTexture extends Texture {
		constructor(width: number, heighht: number, type?: TextureDataType, mapping?: Mapping, wrapS?: Wrapping, wrapT?: Wrapping, magFilter?: TextureFilter, minFilter?: TextureFilter, anisotropy?: number): this;
		image: {
		width: number,
		height: number
	}
	}

	declare export class CanvasTexture extends Texture {
		constructor(canvas: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, mapping?: Mapping, wrapS?: Wrapping, wrapT?: Wrapping, magFilter?: TextureFilter, minFilter?: TextureFilter, format?: PixelFormat, type?: TextureDataType, anisotropy?: number): this
	}

	declare export class CubeTexture extends Texture {
		constructor(images?: any[], mapping?: Mapping, wrapS?: Wrapping, wrapT?: Wrapping, magFilter?: TextureFilter, minFilter?: TextureFilter, format?: PixelFormat, type?: TextureDataType, anisotropy?: number, encoding?: TextureEncoding): this;
		images: any
	}

	declare export class CompressedTexture extends Texture {
		constructor(mipmaps: ImageData[], width: number, height: number, format?: PixelFormat, type?: TextureDataType, mapping?: Mapping, wrapS?: Wrapping, wrapT?: Wrapping, magFilter?: TextureFilter, minFilter?: TextureFilter, anisotropy?: number, encoding?: TextureEncoding): this;
		image: {
		width: number,
		height: number
	}
	}

	declare export class DataTexture extends Texture {
		constructor(data: ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, width: number, height: number, format: PixelFormat, type: TextureDataType, mapping: Mapping, wrapS: Wrapping, wrapT: Wrapping, magFilter: TextureFilter, minFilter: TextureFilter, anisotropy?: number, encoding?: TextureEncoding): this;
		image: {
		data: ImageData,
		width: number,
		height: number
	}
	}

	declare export class VideoTexture extends Texture {
		constructor(video: HTMLVideoElement, mapping?: Mapping, wrapS?: Wrapping, wrapT?: Wrapping, magFilter?: TextureFilter, minFilter?: TextureFilter, format?: PixelFormat, type?: TextureDataType, anisotropy?: number): this
	}

	declare export class Audio extends Object3D {
		constructor(listener: AudioListener): this;
		type: string;
		context: AudioContext;
		source: AudioBufferSourceNode;
		gain: GainNode;
		autoplay: boolean;
		startTime: number;
		playbackRate: number;
		hasPlaybackControl: boolean;
		isPlaying: boolean;
		sourceType: string;
		filters: any[];
		getOutput(): GainNode;
		setNodeSource(audioNode: AudioBufferSourceNode): Audio;
		setBuffer(audioBuffer: AudioBuffer): Audio;
		play(): Audio;
		pause(): Audio;
		stop(): Audio;
		connect(): Audio;
		disconnect(): Audio;
		getFilters(): any[];
		setFilter(value: any[]): Audio;
		getFilter(): any;
		setFilter(filter: any): Audio;
		setPlaybackRate(value: number): Audio;
		getPlaybackRate(): number;
		onEnded(): void;
		getLoop(): boolean;
		setLoop(value: boolean): void;
		getVolume(): number;
		setVolume(value: number): Audio;
		load(file: string): Audio
	}

	declare export class AudioAnalyser  {
		constructor(audio: any, fftSize: number): this;
		analyser: any;
		data: Uint8Array;
		getFrequencyData(): Uint8Array;
		getAverageFrequency(): number;
		getData(file: any): any
	}

	declare export class AudioBuffer  {
		constructor(context: any): this;
		context: any;
		ready: boolean;
		readyCallbacks: Function[];
		load(file: string): AudioBuffer;
		onReady(callback: Function): void
	}

	declare export class PositionalAudio extends Audio {
		constructor(listener: AudioListener): this;
		panner: PannerNode;
		setRefDistance(value: number): void;
		getRefDistance(): number;
		setRolloffFactor(value: number): void;
		getRolloffFactor(): number;
		setDistanceModel(value: number): void;
		getDistanceModel(): number;
		setMaxDistance(value: number): void;
		getMaxDistance(): number
	}

	declare export class AudioListener extends Object3D {
		constructor(): this;
		type: string;
		context: AudioContext;
		gain: GainNode;
		getInput(): GainNode;
		removeFilter(): void;
		setFilter(value: any): void;
		getFilter(): any;
		setMasterVolume(value: number): void;
		getMasterVolume(): number
	}

	declare export class Curve<T>  {
		getPoint(t: number): T;
		getPointAt(u: number): T;
		getPoints(divisions?: number): T[];
		getSpacedPoints(divisions?: number): T[];
		getLength(): number;
		getLengths(divisions?: number): number[];
		updateArcLengths(): void;
		getUtoTmapping(u: number, distance: number): number;
		getTangent(t: number): T;
		getTangentAt(u: number): T;
		create(constructorFunc: Function, getPointFunc: Function): Function
	}

	declare export class CurvePath<T> extends Curve<T> {
		constructor(): this;
		curves: Curve<T>[];
		autoClose: boolean;
		add(curve: Curve<T>): void;
		checkConnection(): boolean;
		closePath(): void;
		getPoint(t: number): T;
		getLength(): number;
		updateArcLengths(): void;
		getCurveLengths(): number[];
		getSpacedPoints(divisions?: number): T[];
		getPoints(divisions?: number): T[];
		createPointsGeometry(divisions: number): Geometry;
		createSpacedPointsGeometry(divisions: number): Geometry;
		createGeometry(points: T[]): Geometry
	}

	declare export class Path extends CurvePath<Vector2> {
		constructor(points?: Vector2[]): this;
		currentPoint: Vector2;
		fromPoints(vectors: Vector2[]): void;
		moveTo(x: number, y: number): void;
		lineTo(x: number, y: number): void;
		quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
		bezierCurveTo(
		aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number
	): void;
		splineThru(pts: Vector2[]): void;
		arc(
		aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean
	): void;
		absarc(
		aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean
	): void;
		ellipse(
		aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean, aRotation: number
	): void;
		absellipse(
		aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean, aRotation: number
	): void
	}

	declare export class ShapePath  {
		constructor(): this;
		subPaths: any[];
		currentPath: any;
		moveTo(x: number, y: number): void;
		lineTo(x: number, y: number): void;
		quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
		bezierCurveTo(
		aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number
	): void;
		splineThru(pts: Vector2[]): void;
		toShapes(isCCW: boolean, noHoles: any): Shape[]
	}

	declare export class Shape extends Path {
		constructor(points?: Vector2[]): this;
		holes: Path[];
		extrude(options?: any): ExtrudeGeometry;
		makeGeometry(options?: any): ShapeGeometry;
		getPointsHoles(divisions: number): Vector2[][];
		extractAllPoints(divisions: number): {
		shape: Vector2[],
		holes: Vector2[][]
	};
		extractPoints(divisions: number): Vector2[]
	}

	declare export class CatmullRomCurve3 extends Curve<Vector3> {
		constructor(points?: Vector3[]): this;
		points: Vector3[];
		getPoint(t: number): Vector3
	}

	declare export class ClosedSplineCurve3 extends CatmullRomCurve3 {
		
	}

	declare export class SplineCurve3 extends CatmullRomCurve3 {
		
	}

	declare export class CubicBezierCurve extends Curve<Vector2> {
		constructor(v0: Vector2, v1: Vector2, v2: Vector2, v3: Vector2): this;
		v0: Vector2;
		v1: Vector2;
		v2: Vector2;
		v3: Vector2
	}

	declare export class CubicBezierCurve3 extends Curve<Vector3> {
		constructor(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3): this;
		v0: Vector3;
		v1: Vector3;
		v2: Vector3;
		v3: Vector3;
		getPoint(t: number): Vector3
	}

	declare export class EllipseCurve extends Curve<Vector2> {
		constructor(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean, aRotation: number): this;
		aX: number;
		aY: number;
		xRadius: number;
		yRadius: number;
		aStartAngle: number;
		aEndAngle: number;
		aClockwise: boolean;
		aRotation: number
	}

	declare export class ArcCurve extends EllipseCurve {
		constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): this
	}

	declare export class LineCurve extends Curve<Vector2> {
		constructor(v1: Vector2, v2: Vector2): this;
		v1: Vector2;
		v2: Vector2
	}

	declare export class LineCurve3 extends Curve<Vector3> {
		constructor(v1: Vector3, v2: Vector3): this;
		v1: Vector3;
		v2: Vector3;
		getPoint(t: number): Vector3
	}

	declare export class QuadraticBezierCurve extends Curve<Vector2> {
		constructor(v0: Vector2, v1: Vector2, v2: Vector2): this;
		v0: Vector2;
		v1: Vector2;
		v2: Vector2
	}

	declare export class QuadraticBezierCurve3 extends Curve<Vector3> {
		constructor(v0: Vector3, v1: Vector3, v2: Vector3): this;
		v0: Vector3;
		v1: Vector3;
		v2: Vector3;
		getPoint(t: number): Vector3
	}

	declare export class SplineCurve extends Curve<Vector2> {
		constructor(points?: Vector2[]): this;
		points: Vector2[]
	}

	declare export class BoxBufferGeometry extends BufferGeometry {
		constructor(width: number, height: number, depth: number, widthSegments?: number, heightSegments?: number, depthSegments?: number): this;
		parameters: {
		width: number,
		height: number,
		depth: number,
		widthSegments: number,
		heightSegments: number,
		depthSegments: number
	}
	}

	declare export class BoxGeometry extends Geometry {
		constructor(width: number, height: number, depth: number, widthSegments?: number, heightSegments?: number, depthSegments?: number): this;
		parameters: {
		width: number,
		height: number,
		depth: number,
		widthSegments: number,
		heightSegments: number,
		depthSegments: number
	}
	}

	declare export class CubeGeometry extends BoxGeometry {
		
	}

	declare export class CircleBufferGeometry extends BufferGeometry {
		constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number): this;
		parameters: {
		radius: number,
		segments: number,
		thetaStart: number,
		thetaLength: number
	}
	}

	declare export class CircleGeometry extends Geometry {
		constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number): this;
		parameters: {
		radius: number,
		segments: number,
		thetaStart: number,
		thetaLength: number
	}
	}

	declare export class CylinderBufferGeometry extends BufferGeometry {
		constructor(radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number): this;
		parameters: {
		radiusTop: number,
		radiusBottom: number,
		height: number,
		radialSegments: number,
		heightSegments: number,
		openEnded: boolean,
		thetaStart: number,
		thetaLength: number
	}
	}

	declare export class CylinderGeometry extends Geometry {
		constructor(radiusTop?: number, radiusBottom?: number, height?: number, radiusSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number): this;
		parameters: {
		radiusTop: number,
		radiusBottom: number,
		height: number,
		radialSegments: number,
		heightSegments: number,
		openEnded: boolean,
		thetaStart: number,
		thetaLength: number
	}
	}

	declare export class ConeBufferGeometry extends BufferGeometry {
		constructor(radius?: number, height?: number, radialSegment?: number, heightSegment?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number): this
	}

	declare export class ConeGeometry extends CylinderGeometry {
		constructor(radius?: number, height?: number, radialSegment?: number, heightSegment?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number): this
	}

	declare export class DodecahedronGeometry extends Geometry {
		constructor(radius: number, detail: number): this;
		parameters: {
		radius: number,
		detail: number
	}
	}

	declare export class EdgesGeometry extends BufferGeometry {
		constructor(geometry: BufferGeometry, thresholdAngle: number): this
	}

	declare export class ExtrudeGeometry extends Geometry {
		constructor(shape?: Shape, options?: any): this;
		constructor(shapes?: Shape[], options?: any): this;
		WorldUVGenerator: {
		generateTopUV(geometry: Geometry, indexA: number, indexB: number, indexC: number): Vector2[],
		generateSideWallUV(
		geometry: Geometry, indexA: number, indexB: number, indexC: number, indexD: number
	): Vector2[]
	};
		addShapeList(shapes: Shape[], options?: any): void;
		addShape(shape: Shape, options?: any): void
	}

	declare export class IcosahedronGeometry extends PolyhedronGeometry {
		constructor(radius: number, detail: number): this
	}

	declare export class LatheBufferGeometry extends BufferGeometry {
		constructor(points: Vector3[], segments?: number, phiStart?: number, phiLength?: number): this;
		parameters: {
		points: Vector3[],
		segments: number,
		phiStart: number,
		phiLength: number
	}
	}

	declare export class LatheGeometry extends Geometry {
		constructor(points: Vector3[], segments?: number, phiStart?: number, phiLength?: number): this;
		parameters: {
		points: Vector3[],
		segments: number,
		phiStart: number,
		phiLength: number
	}
	}

	declare export class OctahedronGeometry extends PolyhedronGeometry {
		constructor(radius: number, detail: number): this
	}

	declare export class ParametricGeometry extends Geometry {
		constructor(func: (u: number, v: number) => Vector3, slices: number, stacks: number): this;
		parameters: {
		func: (u: number, v: number) => Vector3,
		slices: number,
		stacks: number
	}
	}

	declare export class PlaneBufferGeometry extends BufferGeometry {
		constructor(width: number, height: number, widthSegments?: number, heightSegments?: number): this;
		parameters: {
		width: number,
		height: number,
		widthSegments: number,
		heightSegments: number
	}
	}

	declare export class PlaneGeometry extends Geometry {
		constructor(width: number, height: number, widthSegments?: number, heightSegments?: number): this;
		parameters: {
		width: number,
		height: number,
		widthSegments: number,
		heightSegments: number
	}
	}

	declare export class PolyhedronGeometry extends Geometry {
		constructor(vertices: Vector3[], faces: Face3[], radius?: number, detail?: number): this;
		parameters: {
		vertices: Vector3[],
		faces: Face3[],
		radius: number,
		detail: number
	};
		boundingSphere: Sphere
	}

	declare export class RingBufferGeometry extends BufferGeometry {
		constructor(innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, thetaStart?: number, thetaLength?: number): this;
		parameters: {
		innerRadius: number,
		outerRadius: number,
		thetaSegments: number,
		phiSegments: number,
		thetaStart: number,
		thetaLength: number
	}
	}

	declare export class RingGeometry extends Geometry {
		constructor(innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, thetaStart?: number, thetaLength?: number): this;
		parameters: {
		innerRadius: number,
		outerRadius: number,
		thetaSegments: number,
		phiSegments: number,
		thetaStart: number,
		thetaLength: number
	}
	}

	declare export class ShapeGeometry extends Geometry {
		constructor(shape: Shape, options?: any): this;
		constructor(shapes: Shape[], options?: any): this;
		addShapeList(shapes: Shape[], options: any): ShapeGeometry;
		addShape(shape: Shape, options?: any): void
	}

	declare export class SphereBufferGeometry extends BufferGeometry {
		constructor(radius: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number): this;
		parameters: {
		radius: number,
		widthSegments: number,
		heightSegments: number,
		phiStart: number,
		phiLength: number,
		thetaStart: number,
		thetaLength: number
	}
	}

	declare export class SphereGeometry extends Geometry {
		constructor(radius: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number): this;
		parameters: {
		radius: number,
		widthSegments: number,
		heightSegments: number,
		phiStart: number,
		phiLength: number,
		thetaStart: number,
		thetaLength: number
	}
	}

	declare export class TetrahedronGeometry extends PolyhedronGeometry {
		constructor(radius?: number, detail?: number): this
	}

	declare export class TextGeometry extends ExtrudeGeometry {
		constructor(text: string, parameters?: TextGeometryParameters): this;
		parameters: {
		font: Font,
		size: number,
		height: number,
		curveSegments: number,
		bevelEnabled: boolean,
		bevelThickness: number,
		bevelSize: number
	}
	}

	declare export class TorusBufferGeometry extends BufferGeometry {
		constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number): this;
		parameters: {
		radius: number,
		tube: number,
		radialSegments: number,
		tubularSegments: number,
		arc: number
	}
	}

	declare export class TorusGeometry extends Geometry {
		constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number): this;
		parameters: {
		radius: number,
		tube: number,
		radialSegments: number,
		tubularSegments: number,
		arc: number
	}
	}

	declare export class TorusKnotBufferGeometry extends BufferGeometry {
		constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, p?: number, q?: number, heightScale?: number): this;
		parameters: {
		radius: number,
		tube: number,
		radialSegments: number,
		tubularSegments: number,
		p: number,
		q: number,
		heightScale: number
	}
	}

	declare export class TorusKnotGeometry extends Geometry {
		constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, p?: number, q?: number, heightScale?: number): this;
		parameters: {
		radius: number,
		tube: number,
		radialSegments: number,
		tubularSegments: number,
		p: number,
		q: number,
		heightScale: number
	}
	}

	declare export class TubeGeometry extends Geometry {
		constructor(path: Path, segments?: number, radius?: number, radiusSegments?: number, closed?: boolean, taper?: (u: number) => number): this;
		parameters: {
		path: Path,
		segments: number,
		radius: number,
		radialSegments: number,
		closed: boolean,
		taper: (u: number) => number
	};
		tangents: Vector3[];
		normals: Vector3[];
		binormals: Vector3[];
		NoTaper(u?: number): number;
		SinusoidalTaper(u: number): number;
		FrenetFrames(path: Path, segments: number, closed: boolean): void
	}

	declare export class WireframeGeometry extends BufferGeometry {
		constructor(geometry: Geometry | BufferGeometry): this
	}

	declare export class ArrowHelper extends Object3D {
		constructor(dir: Vector3, origin?: Vector3, length?: number, hex?: number, headLength?: number, headWidth?: number): this;
		line: Line;
		cone: Mesh;
		setDirection(dir: Vector3): void;
		setLength(length: number, headLength?: number, headWidth?: number): void;
		setColor(hex: number): void
	}

	declare export class AxisHelper extends LineSegments {
		constructor(size?: number): this
	}

	declare export class BoundingBoxHelper extends Mesh {
		constructor(object?: Object3D, hex?: number): this;
		object: Object3D;
		box: Box3;
		update(): void
	}

	declare export class BoxHelper extends LineSegments {
		constructor(object?: Object3D, color?: Color): this;
		update(object?: Object3D): void
	}

	declare export class CameraHelper extends LineSegments {
		constructor(camera: Camera): this;
		camera: Camera;
		pointMap: {
		[id: string]: number[]
	};
		update(): void
	}

	declare export class DirectionalLightHelper extends Object3D {
		constructor(light: Light, size?: number): this;
		light: Light;
		lightPlane: Line;
		dispose(): void;
		update(): void
	}

	declare export class EdgesHelper extends LineSegments {
		constructor(object: Object3D, hex?: number, thresholdAngle?: number): this
	}

	declare export class FaceNormalsHelper extends LineSegments {
		constructor(object: Object3D, size?: number, hex?: number, linewidth?: number): this;
		object: Object3D;
		size: number;
		update(object?: Object3D): void
	}

	declare export class GridHelper extends LineSegments {
		constructor(size: number, divisions: number, color1?: Color | number, color2?: Color | number): this;
		setColors(color1?: Color | number, color2?: Color | number): void
	}

	declare export class HemisphereLightHelper extends Object3D {
		constructor(light: Light, sphereSize: number): this;
		light: Light;
		colors: Color[];
		lightSphere: Mesh;
		dispose(): void;
		update(): void
	}

	declare export class PointLightHelper extends Object3D {
		constructor(light: Light, sphereSize: number): this;
		light: Light;
		dispose(): void;
		update(): void
	}

	declare export class SkeletonHelper extends LineSegments {
		constructor(bone: Object3D): this;
		bones: Bone[];
		root: Object3D;
		getBoneList(object: Object3D): Bone[];
		update(): void
	}

	declare export class SpotLightHelper extends Object3D {
		constructor(light: Light): this;
		light: Light;
		dispose(): void;
		update(): void
	}

	declare export class VertexNormalsHelper extends LineSegments {
		constructor(object: Object3D, size?: number, hex?: number, linewidth?: number): this;
		object: Object3D;
		size: number;
		update(object?: Object3D): void
	}

	declare export class WireframeHelper extends LineSegments {
		constructor(object: Object3D, hex?: number): this
	}

	declare export class ImmediateRenderObject extends Object3D {
		constructor(material: Material): this;
		material: Material;
		render(renderCallback: Function): void
	}

	declare export class MorphBlendMesh extends Mesh {
		constructor(geometry: Geometry, material: Material): this;
		animationsMap: {
		[name: string]: MorphBlendMeshAnimation
	};
		animationsList: MorphBlendMeshAnimation[];
		createAnimation(name: string, start: number, end: number, fps: number): void;
		autoCreateAnimations(fps: number): void;
		setAnimationDirectionForward(name: string): void;
		setAnimationDirectionBackward(name: string): void;
		setAnimationFPS(name: string, fps: number): void;
		setAnimationDuration(name: string, duration: number): void;
		setAnimationWeight(name: string, weight: number): void;
		setAnimationTime(name: string, time: number): void;
		getAnimationTime(name: string): number;
		getAnimationDuration(name: string): number;
		playAnimation(name: string): void;
		stopAnimation(name: string): void;
		update(delta: number): void
	}

	
}

declare module 'AnimationUtils' {
			declare export function arraySlice(array: any, from: number, to: number): any

	declare export function convertArray(array: any, type: any, forceClone: boolean): any

	declare export function isTypedArray(object: any): boolean

	declare export function getKeyFrameOrder(times: number): number[]

	declare export function sortedArray(values: any[], stride: number, order: number[]): any[]

	declare export function flattenJSON(
		jsonKeys: string[], times: any[], values: any[], valuePropertyName: string
	): void

		
}

declare module 'PropertyBinding' {
				declare export class Composite  {
		constructor(targetGroup: any, path: any, parsedPath?: any): this;
		getValue(array: any, offset: number): any;
		setValue(array: any, offset: number): void;
		bind(): void;
		unbind(): void
	}

	
}

declare module 'GeometryUtils' {
			declare export function merge(geometry1: any, geometry2: any, materialIndexOffset?: any): any

	declare export function center(geometry: any): any

		
}

declare module 'Cache' {
			declare export function add(key: string, file: any): void

	declare export function get(key: string): any

	declare export function remove(key: string): void

	declare export function clear(): void

		
}

declare module 'Math' {
			declare export function generateUUID(): string

	declare export function clamp(value: number, min: number, max: number): number

	declare export function euclideanModulo(n: number, m: number): number

	declare export function mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number

	declare export function smoothstep(x: number, min: number, max: number): number

	declare export function smootherstep(x: number, min: number, max: number): number

	declare export function random16(): number

	declare export function randInt(low: number, high: number): number

	declare export function randFloat(low: number, high: number): number

	declare export function randFloatSpread(range: number): number

	declare export function degToRad(degrees: number): number

	declare export function radToDeg(radians: number): number

	declare export function isPowerOfTwo(value: number): boolean

	declare export function nearestPowerOfTwo(value: number): number

	declare export function nextPowerOfTwo(value: number): number

		
}

declare module 'UniformsUtils' {
			declare export function merge(uniforms: any[]): any

	declare export function clone(uniforms_src: any): any

		
}

declare module 'CurveUtils' {
			declare export function tangentQuadraticBezier(t: number, p0: number, p1: number, p2: number): number

	declare export function tangentCubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number

	declare export function tangentSpline(t: number, p0: number, p1: number, p2: number, p3: number): number

	declare export function interpolate(p0: number, p1: number, p2: number, p3: number, t: number): number

		
}

declare module 'ImageUtils' {
			declare export function loadTexture(
		url: string, mapping?: Mapping, onLoad?: (texture: Texture) => void, onError?: (message: string) => void
	): Texture

	declare export function loadTextureCube(
		array: string[], mapping?: Mapping, onLoad?: (texture: Texture) => void, onError?: (message: string) => void
	): Texture

		
}

declare module 'SceneUtils' {
			declare export function createMultiMaterialObject(geometry: Geometry, materials: Material[]): Object3D

	declare export function detach(child: Object3D, parent: Object3D, scene: Scene): void

	declare export function attach(child: Object3D, scene: Scene, parent: Object3D): void

		
}

declare module 'ShapeUtils' {
			declare export function area(contour: number[]): number

	declare export function triangulate(contour: number[], indices: boolean): number[]

	declare export function triangulateShape(contour: number[], holes: any[]): number[]

	declare export function isClockWise(pts: number[]): boolean

	declare export function b2(t: number, p0: number, p1: number, p2: number): number

	declare export function b3(t: number, p0: number, p1: number, p2: number, p3: number): number

		
}
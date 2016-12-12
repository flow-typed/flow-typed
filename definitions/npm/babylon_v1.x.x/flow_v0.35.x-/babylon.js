

declare module 'babylon' {
		declare interface Window {
		mozIndexedDB(func: any): any,
		webkitIndexedDB(func: any): any,
		IDBTransaction(func: any): any,
		webkitIDBTransaction(func: any): any,
		msIDBTransaction(func: any): any,
		IDBKeyRange(func: any): any,
		webkitIDBKeyRange(func: any): any,
		msIDBKeyRange(func: any): any,
		webkitURL: HTMLURL,
		webkitRequestAnimationFrame(func: any): any,
		mozRequestAnimationFrame(func: any): any,
		oRequestAnimationFrame(func: any): any,
		WebGLRenderingContext: WebGLRenderingContext,
		MSGesture: MSGesture,
		CANNON: any,
		SIMD: any,
		AudioContext: AudioContext,
		webkitAudioContext: AudioContext,
		PointerEvent: any
	}

	declare interface HTMLURL {
		createObjectURL(param1: any, param2?: any): any
	}

	declare interface Document {
		exitFullscreen(): void,
		webkitCancelFullScreen(): void,
		mozCancelFullScreen(): void,
		msCancelFullScreen(): void,
		mozFullScreen: boolean,
		msIsFullScreen: boolean,
		fullscreen: boolean,
		mozPointerLockElement: HTMLElement,
		msPointerLockElement: HTMLElement,
		webkitPointerLockElement: HTMLElement
	}

	declare interface HTMLCanvasElement {
		requestPointerLock(): void,
		msRequestPointerLock(): void,
		mozRequestPointerLock(): void,
		webkitRequestPointerLock(): void
	}

	declare interface CanvasRenderingContext2D {
		imageSmoothingEnabled: boolean,
		mozImageSmoothingEnabled: boolean,
		oImageSmoothingEnabled: boolean,
		webkitImageSmoothingEnabled: boolean
	}

	declare interface WebGLTexture {
		isReady: boolean,
		isCube: boolean,
		url: string,
		noMipmap: boolean,
		samplingMode: number,
		references: number,
		generateMipMaps: boolean,
		_size: number,
		_baseWidth: number,
		_baseHeight: number,
		_width: number,
		_height: number,
		_workingCanvas: HTMLCanvasElement,
		_workingContext: CanvasRenderingContext2D,
		_framebuffer: WebGLFramebuffer,
		_depthBuffer: WebGLRenderbuffer,
		_cachedCoordinatesMode: number,
		_cachedWrapU: number,
		_cachedWrapV: number,
		_isDisabled: boolean
	}

	declare interface WebGLBuffer {
		references: number,
		capacity: number,
		is32Bits: boolean
	}

	declare interface MouseEvent {
		mozMovementX: number,
		mozMovementY: number,
		webkitMovementX: number,
		webkitMovementY: number,
		msMovementX: number,
		msMovementY: number
	}

	declare interface MSStyleCSSProperties {
		webkitTransform: string,
		webkitTransition: string
	}

	declare interface Navigator {
		getVRDevices: () => any,
		mozGetVRDevices: (any: any) => any,
		isCocoonJS: boolean
	}

	declare interface Screen {
		orientation: string,
		mozOrientation: string
	}

	declare interface HTMLMediaElement {
		crossOrigin: string
	}

	declare interface Navigator {
		getGamepads(func?: any): any,
		webkitGetGamepads(func?: any): any,
		msGetGamepads(func?: any): any,
		webkitGamepads(func?: any): any
	}

			
}

declare module 'npm$namespace$BABYLON' {
		declare interface IDisposable {
		dispose(): void
	}

	declare interface IEasingFunction {
		ease(gradient: number): number
	}

	declare interface ICollisionCoordinator {
		getNewPosition(
		position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, excludedMesh: AbstractMesh, onNewPosition: (
		collisionIndex: number, newPosition: Vector3, collidedMesh?: AbstractMesh
	) => void, collisionIndex: number
	): void,
		init(scene: Scene): void,
		destroy(): void,
		onMeshAdded(mesh: AbstractMesh): any,
		onMeshUpdated(mesh: AbstractMesh): any,
		onMeshRemoved(mesh: AbstractMesh): any,
		onGeometryAdded(geometry: Geometry): any,
		onGeometryUpdated(geometry: Geometry): any,
		onGeometryDeleted(geometry: Geometry): any
	}

	declare interface SerializedMesh {
		id: string,
		name: string,
		uniqueId: number,
		geometryId: string,
		sphereCenter: Array<number>,
		sphereRadius: number,
		boxMinimum: Array<number>,
		boxMaximum: Array<number>,
		worldMatrixFromCache: any,
		subMeshes: Array<SerializedSubMesh>,
		checkCollisions: boolean
	}

	declare interface SerializedSubMesh {
		position: number,
		verticesStart: number,
		verticesCount: number,
		indexStart: number,
		indexCount: number,
		hasMaterial: boolean,
		sphereCenter: Array<number>,
		sphereRadius: number,
		boxMinimum: Array<number>,
		boxMaximum: Array<number>
	}

	declare interface SerializedGeometry {
		id: string,
		positions: Float32Array,
		indices: Int32Array,
		normals: Float32Array
	}

	declare interface BabylonMessage {
		taskType: WorkerTaskType,
		payload: InitPayload | CollidePayload | UpdatePayload
	}

	declare interface SerializedColliderToWorker {
		position: Array<number>,
		velocity: Array<number>,
		radius: Array<number>
	}

	declare interface WorkerReply {
		error: WorkerReplyType,
		taskType: WorkerTaskType,
		payload?: any
	}

	declare interface CollisionReplyPayload {
		newPosition: Array<number>,
		collisionId: number,
		collidedMeshUniqueId: number
	}

	declare interface InitPayload {
		
	}

	declare interface CollidePayload {
		collisionId: number,
		collider: SerializedColliderToWorker,
		maximumRetry: number,
		excludedMeshUniqueId?: number
	}

	declare interface UpdatePayload {
		updatedMeshes: {
		[n: number]: SerializedMesh
	},
		updatedGeometries: {
		[s: string]: SerializedGeometry
	},
		removedMeshes: Array<number>,
		removedGeometries: Array<string>
	}

	declare interface ICollisionDetector {
		onInit(payload: InitPayload): void,
		onUpdate(payload: UpdatePayload): void,
		onCollision(payload: CollidePayload): void
	}

	declare interface IShadowLight {
		id: string,
		position: Vector3,
		transformedPosition: Vector3,
		name: string,
		computeTransformedPosition(): boolean,
		getScene(): Scene,
		setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void,
		supportsVSM(): boolean,
		needRefreshPerFrame(): boolean,
		needCube(): boolean,
		getShadowDirection(faceIndex?: number): Vector3,
		_shadowGenerator: ShadowGenerator
	}

	declare interface ISceneLoaderPlugin {
		extensions: string,
		importMesh: (
		meshesNames: any, scene: Scene, data: any, rootUrl: string, meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]
	) => boolean,
		load: (scene: Scene, data: string, rootUrl: string) => boolean
	}

	declare interface IGetSetVerticesData {
		isVerticesDataPresent(kind: string): boolean,
		getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Int32Array | Float32Array,
		getIndices(copyWhenShared?: boolean): number[] | Int32Array,
		setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean): void,
		updateVerticesData(
		kind: string, data: number[] | Float32Array, updateExtends?: boolean, makeItUnique?: boolean
	): void,
		setIndices(indices: number[] | Int32Array): void
	}

	declare interface ISimplifier {
		simplify(
		settings: ISimplificationSettings, successCallback: (simplifiedMeshes: Mesh) => void, errorCallback?: () => void
	): void
	}

	declare interface ISimplificationSettings {
		quality: number,
		distance: number,
		optimizeMesh?: boolean
	}

	declare interface ISimplificationTask {
		settings: Array<ISimplificationSettings>,
		simplificationType: SimplificationType,
		mesh: Mesh,
		successCallback?: () => void,
		parallelProcessing: boolean
	}

	declare interface IPhysicsEnginePlugin {
		name: string,
		initialize(iterations?: number): any,
		setGravity(gravity: Vector3): void,
		getGravity(): Vector3,
		runOneStep(delta: number): void,
		registerMesh(mesh: AbstractMesh, impostor: number, options: PhysicsBodyCreationOptions): any,
		registerMeshesAsCompound(parts: PhysicsCompoundBodyPart[], options: PhysicsBodyCreationOptions): any,
		unregisterMesh(mesh: AbstractMesh): any,
		applyImpulse(mesh: AbstractMesh, force: Vector3, contactPoint: Vector3): void,
		createLink(
		mesh1: AbstractMesh, mesh2: AbstractMesh, pivot1: Vector3, pivot2: Vector3, options?: any
	): boolean,
		dispose(): void,
		isSupported(): boolean,
		updateBodyPosition(mesh: AbstractMesh): void,
		getWorldObject(): any,
		getPhysicsBodyOfMesh(mesh: AbstractMesh): any
	}

	declare interface PhysicsBodyCreationOptions {
		mass: number,
		friction: number,
		restitution: number
	}

	declare interface PhysicsCompoundBodyPart {
		mesh: Mesh,
		impostor: number
	}

	declare interface IAssetTask {
		onSuccess: (task: IAssetTask) => void,
		onError: (task: IAssetTask) => void,
		isCompleted: boolean,
		run(scene: Scene, onSuccess: () => void, onError: () => void): any
	}

	declare interface ILoadingScreen {
		displayLoadingUI: () => void,
		hideLoadingUI: () => void,
		loadingUIBackgroundColor: string,
		loadingUIText: string
	}

	declare interface IAnimatable {
		animations: Array<Animation>
	}

	declare interface ISize {
		width: number,
		height: number
	}

	declare interface IOctreeContainer<T> {
		blocks: Array<OctreeBlock<T>>
	}

		declare class _DepthCullingState  {
		isDirty: boolean;
		zOffset: number;
		cullFace: number;
		cull: boolean;
		depthFunc: number;
		depthMask: boolean;
		depthTest: boolean;
		reset(): void;
		apply(gl: WebGLRenderingContext): void
	}

	declare class _AlphaState  {
		isDirty: boolean;
		alphaBlend: boolean;
		setAlphaBlendFunctionParameters(value0: number, value1: number, value2: number, value3: number): void;
		reset(): void;
		apply(gl: WebGLRenderingContext): void
	}

	declare class EngineCapabilities  {
		maxTexturesImageUnits: number;
		maxTextureSize: number;
		maxCubemapTextureSize: number;
		maxRenderTextureSize: number;
		standardDerivatives: boolean;
		s3tc: any;
		textureFloat: boolean;
		textureAnisotropicFilterExtension: any;
		maxAnisotropy: number;
		instancedArrays: any;
		uintIndices: boolean;
		highPrecisionShaderSupported: boolean;
		fragmentDepthSupported: boolean;
		drawBuffersExtension: any
	}

	declare class Engine  {
		ALPHA_DISABLE: number;
		ALPHA_ONEONE: number;
		ALPHA_ADD: number;
		ALPHA_COMBINE: number;
		ALPHA_SUBTRACT: number;
		ALPHA_MULTIPLY: number;
		ALPHA_MAXIMIZED: number;
		DELAYLOADSTATE_NONE: number;
		DELAYLOADSTATE_LOADED: number;
		DELAYLOADSTATE_LOADING: number;
		DELAYLOADSTATE_NOTLOADED: number;
		TEXTUREFORMAT_ALPHA: number;
		TEXTUREFORMAT_LUMINANCE: number;
		TEXTUREFORMAT_LUMINANCE_ALPHA: number;
		TEXTUREFORMAT_RGB: number;
		TEXTUREFORMAT_RGBA: number;
		TEXTURETYPE_UNSIGNED_INT: number;
		TEXTURETYPE_FLOAT: number;
		Version: string;
		Epsilon: number;
		CollisionsEpsilon: number;
		CodeRepository: string;
		ShadersRepository: string;
		isFullscreen: boolean;
		isPointerLock: boolean;
		cullBackFaces: boolean;
		renderEvenInBackground: boolean;
		enableOfflineSupport: boolean;
		scenes: Scene[];
		_gl: WebGLRenderingContext;
		audioEngine: AudioEngine;
		constructor(canvas: HTMLCanvasElement, antialias?: boolean, options?: {
		antialias?: boolean,
		preserveDrawingBuffer?: boolean
	}, adaptToDeviceRatio?: boolean): this;
		webGLVersion: string;
		resetTextureCache(): void;
		getGlInfo(): {
		vendor: string,
		renderer: string,
		version: string
	};
		getAspectRatio(camera: Camera, useScreen?: boolean): number;
		getRenderWidth(useScreen?: boolean): number;
		getRenderHeight(useScreen?: boolean): number;
		getRenderingCanvas(): HTMLCanvasElement;
		getRenderingCanvasClientRect(): ClientRect;
		setHardwareScalingLevel(level: number): void;
		getHardwareScalingLevel(): number;
		getLoadedTexturesCache(): WebGLTexture[];
		getCaps(): EngineCapabilities;
		drawCalls: number;
		resetDrawCalls(): void;
		setDepthFunctionToGreater(): void;
		setDepthFunctionToGreaterOrEqual(): void;
		setDepthFunctionToLess(): void;
		setDepthFunctionToLessOrEqual(): void;
		stopRenderLoop(renderFunction?: () => void): void;
		_renderLoop(): void;
		runRenderLoop(renderFunction: () => void): void;
		switchFullscreen(requestPointerLock: boolean): void;
		clear(color: any, backBuffer: boolean, depthStencil: boolean): void;
		setViewport(viewport: Viewport, requiredWidth?: number, requiredHeight?: number): void;
		setDirectViewport(x: number, y: number, width: number, height: number): void;
		beginFrame(): void;
		endFrame(): void;
		resize(): void;
		setSize(width: number, height: number): void;
		bindFramebuffer(texture: WebGLTexture, faceIndex?: number): void;
		unBindFramebuffer(texture: WebGLTexture, disableGenerateMipMaps?: boolean): void;
		generateMipMapsForCubemap(texture: WebGLTexture): void;
		flushFramebuffer(): void;
		restoreDefaultFramebuffer(): void;
		createVertexBuffer(vertices: number[] | Float32Array): WebGLBuffer;
		createDynamicVertexBuffer(capacity: number): WebGLBuffer;
		updateDynamicVertexBuffer(
		vertexBuffer: WebGLBuffer, vertices: number[] | Float32Array, offset?: number
	): void;
		createIndexBuffer(indices: number[] | Int32Array): WebGLBuffer;
		bindBuffers(
		vertexBuffer: WebGLBuffer, indexBuffer: WebGLBuffer, vertexDeclaration: number[], vertexStrideSize: number, effect: Effect
	): void;
		bindMultiBuffers(vertexBuffers: VertexBuffer[], indexBuffer: WebGLBuffer, effect: Effect): void;
		_releaseBuffer(buffer: WebGLBuffer): boolean;
		createInstancesBuffer(capacity: number): WebGLBuffer;
		deleteInstancesBuffer(buffer: WebGLBuffer): void;
		updateAndBindInstancesBuffer(
		instancesBuffer: WebGLBuffer, data: Float32Array, offsetLocations: number[]
	): void;
		unBindInstancesBuffer(instancesBuffer: WebGLBuffer, offsetLocations: number[]): void;
		applyStates(): void;
		draw(
		useTriangles: boolean, indexStart: number, indexCount: number, instancesCount?: number
	): void;
		drawPointClouds(verticesStart: number, verticesCount: number, instancesCount?: number): void;
		drawUnIndexed(
		useTriangles: boolean, verticesStart: number, verticesCount: number, instancesCount?: number
	): void;
		_releaseEffect(effect: Effect): void;
		createEffect(
		baseName: any, attributesNames: string[], uniformsNames: string[], samplers: string[], defines: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void
	): Effect;
		createEffectForParticles(
		fragmentName: string, uniformsNames?: string[], samplers?: string[], defines?: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void
	): Effect;
		createShaderProgram(vertexCode: string, fragmentCode: string, defines: string): WebGLProgram;
		getUniforms(shaderProgram: WebGLProgram, uniformsNames: string[]): WebGLUniformLocation[];
		getAttributes(shaderProgram: WebGLProgram, attributesNames: string[]): number[];
		enableEffect(effect: Effect): void;
		setArray(uniform: WebGLUniformLocation, array: number[]): void;
		setArray2(uniform: WebGLUniformLocation, array: number[]): void;
		setArray3(uniform: WebGLUniformLocation, array: number[]): void;
		setArray4(uniform: WebGLUniformLocation, array: number[]): void;
		setMatrices(uniform: WebGLUniformLocation, matrices: Float32Array): void;
		setMatrix(uniform: WebGLUniformLocation, matrix: Matrix): void;
		setMatrix3x3(uniform: WebGLUniformLocation, matrix: Float32Array): void;
		setMatrix2x2(uniform: WebGLUniformLocation, matrix: Float32Array): void;
		setFloat(uniform: WebGLUniformLocation, value: number): void;
		setFloat2(uniform: WebGLUniformLocation, x: number, y: number): void;
		setFloat3(uniform: WebGLUniformLocation, x: number, y: number, z: number): void;
		setBool(uniform: WebGLUniformLocation, bool: number): void;
		setFloat4(
		uniform: WebGLUniformLocation, x: number, y: number, z: number, w: number
	): void;
		setColor3(uniform: WebGLUniformLocation, color3: Color3): void;
		setColor4(uniform: WebGLUniformLocation, color3: Color3, alpha: number): void;
		setState(
		culling: boolean, zOffset?: number, force?: boolean, reverseSide?: boolean
	): void;
		setDepthBuffer(enable: boolean): void;
		getDepthWrite(): boolean;
		setDepthWrite(enable: boolean): void;
		setColorWrite(enable: boolean): void;
		setAlphaMode(mode: number): void;
		getAlphaMode(): number;
		setAlphaTesting(enable: boolean): void;
		getAlphaTesting(): boolean;
		wipeCaches(): void;
		setSamplingMode(texture: WebGLTexture, samplingMode: number): void;
		createTexture(
		url: string, noMipmap: boolean, invertY: boolean, scene: Scene, samplingMode?: number, onLoad?: () => void, onError?: () => void, buffer?: any
	): WebGLTexture;
		updateRawTexture(
		texture: WebGLTexture, data: ArrayBufferView, format: number, invertY: boolean, compression?: string
	): void;
		createRawTexture(
		data: ArrayBufferView, width: number, height: number, format: number, generateMipMaps: boolean, invertY: boolean, samplingMode: number, compression?: string
	): WebGLTexture;
		createDynamicTexture(
		width: number, height: number, generateMipMaps: boolean, samplingMode: number, forceExponantOfTwo?: boolean
	): WebGLTexture;
		updateTextureSamplingMode(samplingMode: number, texture: WebGLTexture): void;
		updateDynamicTexture(texture: WebGLTexture, canvas: HTMLCanvasElement, invertY: boolean): void;
		updateVideoTexture(texture: WebGLTexture, video: HTMLVideoElement, invertY: boolean): void;
		createRenderTargetTexture(size: any, options: any): WebGLTexture;
		createRenderTargetCubeTexture(size: number, options?: any): WebGLTexture;
		createCubeTexture(
		rootUrl: string, scene: Scene, files: string[], noMipmap?: boolean
	): WebGLTexture;
		_releaseTexture(texture: WebGLTexture): void;
		bindSamplers(effect: Effect): void;
		_bindTexture(channel: number, texture: WebGLTexture): void;
		setTextureFromPostProcess(channel: number, postProcess: PostProcess): void;
		unbindAllTextures(): void;
		setTexture(channel: number, texture: BaseTexture): void;
		_setAnisotropicLevel(key: number, texture: BaseTexture): void;
		readPixels(x: number, y: number, width: number, height: number): Uint8Array;
		releaseInternalTexture(texture: WebGLTexture): void;
		dispose(): void;
		displayLoadingUI(): void;
		hideLoadingUI(): void;
		loadingScreen: ILoadingScreen;
		loadingUIText: string;
		loadingUIBackgroundColor: string;
		getFps(): number;
		getDeltaTime(): number;
		isSupported(): boolean
	}

	declare class Node  {
		parent: Node;
		name: string;
		id: string;
		uniqueId: number;
		state: string;
		animations: Animation[];
		onReady: (node: Node) => void;
		_currentRenderId: number;
		_waitingParentId: string;
		_cache: any;
		constructor(name: string, scene: Scene): this;
		getScene(): Scene;
		getEngine(): Engine;
		getWorldMatrix(): Matrix;
		_initCache(): void;
		updateCache(force?: boolean): void;
		_updateCache(ignoreParentClass?: boolean): void;
		_isSynchronized(): boolean;
		_markSyncedWithParent(): void;
		isSynchronizedWithParent(): boolean;
		isSynchronized(updateCache?: boolean): boolean;
		hasNewParent(update?: boolean): boolean;
		isReady(): boolean;
		isEnabled(): boolean;
		setEnabled(value: boolean): void;
		isDescendantOf(ancestor: Node): boolean;
		_getDescendants(list: Node[], results: Node[]): void;
		getDescendants(): Node[];
		_setReady(state: boolean): void;
		getAnimationByName(name: string): Animation;
		createAnimationRange(name: string, from: number, to: number): void;
		deleteAnimationRange(name: string, deleteFrames?: boolean): void;
		getAnimationRange(name: string): AnimationRange;
		beginAnimation(
		name: string, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void
	): void;
		serializeAnimationRanges(): any;
		ParseAnimationRanges(node: Node, parsedNode: any, scene: Scene): void
	}

	declare class Scene  {
		MinDeltaTime: number;
		MaxDeltaTime: number;
		FOGMODE_NONE: number;
		FOGMODE_EXP: number;
		FOGMODE_EXP2: number;
		FOGMODE_LINEAR: number;
		autoClear: boolean;
		clearColor: any;
		ambientColor: Color3;
		beforeRender: () => void;
		afterRender: () => void;
		onDispose: () => void;
		beforeCameraRender: (camera: Camera) => void;
		afterCameraRender: (camera: Camera) => void;
		forceWireframe: boolean;
		forcePointsCloud: boolean;
		forceShowBoundingBoxes: boolean;
		clipPlane: Plane;
		animationsEnabled: boolean;
		constantlyUpdateMeshUnderPointer: boolean;
		onPointerMove: (evt: PointerEvent, pickInfo: PickingInfo) => void;
		onPointerDown: (evt: PointerEvent, pickInfo: PickingInfo) => void;
		onPointerUp: (evt: PointerEvent, pickInfo: PickingInfo) => void;
		onPointerPick: (evt: PointerEvent, pickInfo: PickingInfo) => void;
		cameraToUseForPointers: Camera;
		_mirroredCameraPosition: Vector3;
		fogEnabled: boolean;
		fogMode: number;
		fogColor: Color3;
		fogDensity: number;
		fogStart: number;
		fogEnd: number;
		shadowsEnabled: boolean;
		lightsEnabled: boolean;
		lights: Light[];
		onNewLightAdded: (newLight?: Light, positionInArray?: number, scene?: Scene) => void;
		onLightRemoved: (removedLight?: Light) => void;
		cameras: Camera[];
		onNewCameraAdded: (newCamera?: Camera, positionInArray?: number, scene?: Scene) => void;
		onCameraRemoved: (removedCamera?: Camera) => void;
		activeCameras: Camera[];
		activeCamera: Camera;
		meshes: AbstractMesh[];
		onNewMeshAdded: (newMesh?: AbstractMesh, positionInArray?: number, scene?: Scene) => void;
		onMeshRemoved: (removedMesh?: AbstractMesh) => void;
		onGeometryAdded: (newGeometry?: Geometry) => void;
		onGeometryRemoved: (removedGeometry?: Geometry) => void;
		materials: Material[];
		multiMaterials: MultiMaterial[];
		defaultMaterial: StandardMaterial;
		texturesEnabled: boolean;
		textures: BaseTexture[];
		particlesEnabled: boolean;
		particleSystems: ParticleSystem[];
		spritesEnabled: boolean;
		spriteManagers: SpriteManager[];
		layers: Layer[];
		skeletonsEnabled: boolean;
		skeletons: Skeleton[];
		lensFlaresEnabled: boolean;
		lensFlareSystems: LensFlareSystem[];
		collisionsEnabled: boolean;
		collisionCoordinator: ICollisionCoordinator;
		gravity: Vector3;
		postProcessesEnabled: boolean;
		postProcessManager: PostProcessManager;
		postProcessRenderPipelineManager: PostProcessRenderPipelineManager;
		renderTargetsEnabled: boolean;
		dumpNextRenderTargets: boolean;
		customRenderTargets: RenderTargetTexture[];
		useDelayedTextureLoading: boolean;
		importedMeshesFiles: String[];
		probesEnabled: boolean;
		reflectionProbes: ReflectionProbe[];
		database: any;
		actionManager: ActionManager;
		_actionManagers: ActionManager[];
		proceduralTexturesEnabled: boolean;
		_proceduralTextures: ProceduralTexture[];
		mainSoundTrack: SoundTrack;
		soundTracks: SoundTrack[];
		simplificationQueue: SimplificationQueue;
		_activeIndices: number;
		_activeParticles: number;
		_particlesDuration: number;
		_spritesDuration: number;
		_cachedMaterial: Material;
		_toBeDisposed: SmartArray<IDisposable>;
		_activeParticleSystems: SmartArray<ParticleSystem>;
		_activeBones: number;
		_activeAnimatables: Animatable[];
		constructor(engine: Engine): this;
		debugLayer: DebugLayer;
		workerCollisions: boolean;
		SelectionOctree: Octree<AbstractMesh>;
		meshUnderPointer: AbstractMesh;
		pointerX: number;
		pointerY: number;
		getCachedMaterial(): Material;
		getBoundingBoxRenderer(): BoundingBoxRenderer;
		getOutlineRenderer(): OutlineRenderer;
		getEngine(): Engine;
		getTotalVertices(): number;
		getActiveIndices(): number;
		getActiveParticles(): number;
		getActiveBones(): number;
		getLastFrameDuration(): number;
		getEvaluateActiveMeshesDuration(): number;
		getActiveMeshes(): SmartArray<Mesh>;
		getRenderTargetsDuration(): number;
		getRenderDuration(): number;
		getParticlesDuration(): number;
		getSpritesDuration(): number;
		getAnimationRatio(): number;
		getRenderId(): number;
		incrementRenderId(): void;
		attachControl(): void;
		detachControl(): void;
		isReady(): boolean;
		resetCachedMaterial(): void;
		registerBeforeRender(func: () => void): void;
		unregisterBeforeRender(func: () => void): void;
		registerAfterRender(func: () => void): void;
		unregisterAfterRender(func: () => void): void;
		_addPendingData(data: any): void;
		_removePendingData(data: any): void;
		getWaitingItemsCount(): number;
		executeWhenReady(func: () => void): void;
		_checkIsReady(): void;
		beginAnimation(
		target: any, from: number, to: number, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void, animatable?: Animatable
	): Animatable;
		beginDirectAnimation(
		target: any, animations: Animation[], from: number, to: number, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void
	): Animatable;
		getAnimatableByTarget(target: any): Animatable;
		Animatables: Animatable[];
		stopAnimation(target: any): void;
		getViewMatrix(): Matrix;
		getProjectionMatrix(): Matrix;
		getTransformMatrix(): Matrix;
		setTransformMatrix(view: Matrix, projection: Matrix): void;
		addMesh(newMesh: AbstractMesh): void;
		removeMesh(toRemove: AbstractMesh): number;
		removeSkeleton(toRemove: Skeleton): number;
		removeLight(toRemove: Light): number;
		removeCamera(toRemove: Camera): number;
		addLight(newLight: Light): void;
		addCamera(newCamera: Camera): void;
		swithActiveCamera(newCamera: Camera, attachControl?: boolean): void;
		setActiveCameraByID(id: string): Camera;
		setActiveCameraByName(name: string): Camera;
		getMaterialByID(id: string): Material;
		getMaterialByName(name: string): Material;
		getLensFlareSystemByName(name: string): LensFlareSystem;
		getCameraByID(id: string): Camera;
		getCameraByUniqueID(uniqueId: number): Camera;
		getCameraByName(name: string): Camera;
		getBoneByID(id: string): Bone;
		getBoneByName(name: string): Bone;
		getLightByName(name: string): Light;
		getLightByID(id: string): Light;
		getLightByUniqueID(uniqueId: number): Light;
		getParticleSystemByID(id: string): ParticleSystem;
		getGeometryByID(id: string): Geometry;
		pushGeometry(geometry: Geometry, force?: boolean): boolean;
		removeGeometry(geometry: Geometry): boolean;
		getGeometries(): Geometry[];
		getMeshByID(id: string): AbstractMesh;
		getMeshByUniqueID(uniqueId: number): AbstractMesh;
		getLastMeshByID(id: string): AbstractMesh;
		getLastEntryByID(id: string): Node;
		getNodeByID(id: string): Node;
		getNodeByName(name: string): Node;
		getMeshByName(name: string): AbstractMesh;
		getSoundByName(name: string): Sound;
		getLastSkeletonByID(id: string): Skeleton;
		getSkeletonById(id: string): Skeleton;
		getSkeletonByName(name: string): Skeleton;
		isActiveMesh(mesh: Mesh): boolean;
		updateTransformMatrix(force?: boolean): void;
		render(): void;
		audioEnabled: boolean;
		headphone: boolean;
		enableDepthRenderer(): DepthRenderer;
		disableDepthRenderer(): void;
		freezeMaterials(): void;
		unfreezeMaterials(): void;
		dispose(): void;
		disposeSounds(): void;
		getWorldExtends(): {
		min: Vector3,
		max: Vector3
	};
		createOrUpdateSelectionOctree(maxCapacity?: number, maxDepth?: number): Octree<AbstractMesh>;
		createPickingRay(
		x: number, y: number, world: Matrix, camera: Camera, cameraViewSpace?: boolean
	): Ray;
		createPickingRayInCameraSpace(x: number, y: number, camera: Camera): Ray;
		pick(
		x: number, y: number, predicate?: (mesh: AbstractMesh) => boolean, fastCheck?: boolean, camera?: Camera
	): PickingInfo;
		pickSprite(
		x: number, y: number, predicate?: (sprite: Sprite) => boolean, fastCheck?: boolean, camera?: Camera
	): PickingInfo;
		pickWithRay(ray: Ray, predicate: (mesh: Mesh) => boolean, fastCheck?: boolean): PickingInfo;
		setPointerOverMesh(mesh: AbstractMesh): void;
		getPointerOverMesh(): AbstractMesh;
		getPhysicsEngine(): PhysicsEngine;
		enablePhysics(gravity?: Vector3, plugin?: IPhysicsEnginePlugin): boolean;
		disablePhysicsEngine(): void;
		isPhysicsEnabled(): boolean;
		setGravity(gravity: Vector3): void;
		createCompoundImpostor(parts: any, options: PhysicsBodyCreationOptions): any;
		deleteCompoundImpostor(compound: any): void;
		createDefaultCameraOrLight(): void;
		getMeshesByTags(tagsQuery: string, forEach?: (mesh: AbstractMesh) => void): Mesh[];
		getCamerasByTags(tagsQuery: string, forEach?: (camera: Camera) => void): Camera[];
		getLightsByTags(tagsQuery: string, forEach?: (light: Light) => void): Light[];
		getMaterialByTags(tagsQuery: string, forEach?: (material: Material) => void): Material[]
	}

	declare class Action  {
		triggerOptions: any;
		trigger: number;
		_actionManager: ActionManager;
		constructor(triggerOptions: any, condition?: Condition): this;
		_prepare(): void;
		getTriggerParameter(): any;
		_executeCurrent(evt: ActionEvent): void;
		execute(evt: ActionEvent): void;
		skipToNextActiveAction(): void;
		then(action: Action): Action;
		_getProperty(propertyPath: string): string;
		_getEffectiveTarget(target: any, propertyPath: string): any
	}

	declare class ActionEvent  {
		source: any;
		pointerX: number;
		pointerY: number;
		meshUnderPointer: AbstractMesh;
		sourceEvent: any;
		additionalData: any;
		constructor(source: any, pointerX: number, pointerY: number, meshUnderPointer: AbstractMesh, sourceEvent?: any, additionalData?: any): this;
		CreateNew(source: AbstractMesh, evt?: Event, additionalData?: any): ActionEvent;
		CreateNewFromSprite(source: Sprite, scene: Scene, evt?: Event, additionalData?: any): ActionEvent;
		CreateNewFromScene(scene: Scene, evt: Event): ActionEvent
	}

	declare class ActionManager  {
		NothingTrigger: number;
		OnPickTrigger: number;
		OnLeftPickTrigger: number;
		OnRightPickTrigger: number;
		OnCenterPickTrigger: number;
		OnPickDownTrigger: number;
		OnPickUpTrigger: number;
		OnLongPressTrigger: number;
		OnPointerOverTrigger: number;
		OnPointerOutTrigger: number;
		OnEveryFrameTrigger: number;
		OnIntersectionEnterTrigger: number;
		OnIntersectionExitTrigger: number;
		OnKeyDownTrigger: number;
		OnKeyUpTrigger: number;
		DragMovementThreshold: number;
		LongPressDelay: number;
		actions: Action[];
		constructor(scene: Scene): this;
		dispose(): void;
		getScene(): Scene;
		hasSpecificTriggers(triggers: number[]): boolean;
		hasSpecificTrigger(trigger: number): boolean;
		hasPointerTriggers: boolean;
		hasPickTriggers: boolean;
		registerAction(action: Action): Action;
		processTrigger(trigger: number, evt: ActionEvent): void;
		_getEffectiveTarget(target: any, propertyPath: string): any;
		_getProperty(propertyPath: string): string;
		Parse(parsedActions: any, object: AbstractMesh, scene: Scene): void
	}

	declare class Condition  {
		_actionManager: ActionManager;
		_evaluationId: number;
		_currentResult: boolean;
		constructor(actionManager: ActionManager): this;
		isValid(): boolean;
		_getProperty(propertyPath: string): string;
		_getEffectiveTarget(target: any, propertyPath: string): any
	}

	declare class ValueCondition extends Condition {
		propertyPath: string;
		value: any;
		operator: number;
		IsEqual: number;
		IsDifferent: number;
		IsGreater: number;
		IsLesser: number;
		_actionManager: ActionManager;
		constructor(actionManager: ActionManager, target: any, propertyPath: string, value: any, operator?: number): this;
		isValid(): boolean
	}

	declare class PredicateCondition extends Condition {
		predicate: () => boolean;
		_actionManager: ActionManager;
		constructor(actionManager: ActionManager, predicate: () => boolean): this;
		isValid(): boolean
	}

	declare class StateCondition extends Condition {
		value: string;
		_actionManager: ActionManager;
		constructor(actionManager: ActionManager, target: any, value: string): this;
		isValid(): boolean
	}

	declare class SwitchBooleanAction extends Action {
		propertyPath: string;
		constructor(triggerOptions: any, target: any, propertyPath: string, condition?: Condition): this;
		_prepare(): void;
		execute(): void
	}

	declare class SetStateAction extends Action {
		value: string;
		constructor(triggerOptions: any, target: any, value: string, condition?: Condition): this;
		execute(): void
	}

	declare class SetValueAction extends Action {
		propertyPath: string;
		value: any;
		constructor(triggerOptions: any, target: any, propertyPath: string, value: any, condition?: Condition): this;
		_prepare(): void;
		execute(): void
	}

	declare class IncrementValueAction extends Action {
		propertyPath: string;
		value: any;
		constructor(triggerOptions: any, target: any, propertyPath: string, value: any, condition?: Condition): this;
		_prepare(): void;
		execute(): void
	}

	declare class PlayAnimationAction extends Action {
		from: number;
		to: number;
		loop: boolean;
		constructor(triggerOptions: any, target: any, from: number, to: number, loop?: boolean, condition?: Condition): this;
		_prepare(): void;
		execute(): void
	}

	declare class StopAnimationAction extends Action {
		constructor(triggerOptions: any, target: any, condition?: Condition): this;
		_prepare(): void;
		execute(): void
	}

	declare class DoNothingAction extends Action {
		constructor(triggerOptions?: any, condition?: Condition): this;
		execute(): void
	}

	declare class CombineAction extends Action {
		children: Action[];
		constructor(triggerOptions: any, children: Action[], condition?: Condition): this;
		_prepare(): void;
		execute(evt: ActionEvent): void
	}

	declare class ExecuteCodeAction extends Action {
		func: (evt: ActionEvent) => void;
		constructor(triggerOptions: any, func: (evt: ActionEvent) => void, condition?: Condition): this;
		execute(evt: ActionEvent): void
	}

	declare class SetParentAction extends Action {
		constructor(triggerOptions: any, target: any, parent: any, condition?: Condition): this;
		_prepare(): void;
		execute(): void
	}

	declare class PlaySoundAction extends Action {
		constructor(triggerOptions: any, sound: Sound, condition?: Condition): this;
		_prepare(): void;
		execute(): void
	}

	declare class StopSoundAction extends Action {
		constructor(triggerOptions: any, sound: Sound, condition?: Condition): this;
		_prepare(): void;
		execute(): void
	}

	declare class InterpolateValueAction extends Action {
		propertyPath: string;
		value: any;
		duration: number;
		stopOtherAnimations: boolean;
		onInterpolationDone: () => void;
		constructor(triggerOptions: any, target: any, propertyPath: string, value: any, duration?: number, condition?: Condition, stopOtherAnimations?: boolean, onInterpolationDone?: () => void): this;
		_prepare(): void;
		execute(): void
	}

	declare class Animatable  {
		target: any;
		fromFrame: number;
		toFrame: number;
		loopAnimation: boolean;
		speedRatio: number;
		onAnimationEnd: any;
		animationStarted: boolean;
		constructor(scene: Scene, target: any, fromFrame?: number, toFrame?: number, loopAnimation?: boolean, speedRatio?: number, onAnimationEnd?: any, animations?: any): this;
		getAnimations(): Animation[];
		appendAnimations(target: any, animations: Animation[]): void;
		getAnimationByTargetProperty(property: string): Animation;
		reset(): void;
		goToFrame(frame: number): void;
		pause(): void;
		restart(): void;
		stop(): void;
		_animate(delay: number): boolean
	}

	declare class AnimationRange  {
		name: string;
		from: number;
		to: number;
		constructor(name: string, from: number, to: number): this
	}

	declare class AnimationEvent  {
		frame: number;
		action: () => void;
		onlyOnce: boolean;
		isDone: boolean;
		constructor(frame: number, action: () => void, onlyOnce?: boolean): this
	}

	declare class Animation  {
		name: string;
		targetProperty: string;
		framePerSecond: number;
		dataType: number;
		loopMode: number;
		_target: any;
		targetPropertyPath: string[];
		currentFrame: number;
		allowMatricesInterpolation: boolean;
		_PrepareAnimation(
		name: string, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction
	): Animation;
		CreateAndStartAnimation(
		name: string, node: Node, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction, onAnimationEnd?: () => void
	): Animatable;
		CreateMergeAndStartAnimation(
		name: string, node: Node, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction, onAnimationEnd?: () => void
	): Animatable;
		constructor(name: string, targetProperty: string, framePerSecond: number, dataType: number, loopMode?: number): this;
		addEvent(event: AnimationEvent): void;
		removeEvents(frame: number): void;
		createRange(name: string, from: number, to: number): void;
		deleteRange(name: string, deleteFrames?: boolean): void;
		getRange(name: string): AnimationRange;
		reset(): void;
		isStopped(): boolean;
		getKeys(): any[];
		getHighestFrame(): number;
		getEasingFunction(): IEasingFunction;
		setEasingFunction(easingFunction: EasingFunction): void;
		floatInterpolateFunction(startValue: number, endValue: number, gradient: number): number;
		quaternionInterpolateFunction(startValue: Quaternion, endValue: Quaternion, gradient: number): Quaternion;
		vector3InterpolateFunction(startValue: Vector3, endValue: Vector3, gradient: number): Vector3;
		vector2InterpolateFunction(startValue: Vector2, endValue: Vector2, gradient: number): Vector2;
		color3InterpolateFunction(startValue: Color3, endValue: Color3, gradient: number): Color3;
		matrixInterpolateFunction(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
		clone(): Animation;
		setKeys(values: Array<any>): void;
		setValue(currentValue: any): void;
		goToFrame(frame: number): void;
		animate(
		delay: number, from: number, to: number, loop: boolean, speedRatio: number
	): boolean;
		serialize(): any;
		ANIMATIONTYPE_FLOAT: number;
		ANIMATIONTYPE_VECTOR3: number;
		ANIMATIONTYPE_VECTOR2: number;
		ANIMATIONTYPE_QUATERNION: number;
		ANIMATIONTYPE_MATRIX: number;
		ANIMATIONTYPE_COLOR3: number;
		ANIMATIONLOOPMODE_RELATIVE: number;
		ANIMATIONLOOPMODE_CYCLE: number;
		ANIMATIONLOOPMODE_CONSTANT: number;
		Parse(parsedAnimation: any): Animation;
		AppendSerializedAnimations(source: IAnimatable, destination: any): any
	}

	declare class EasingFunction extends IEasingFunction {
		EASINGMODE_EASEIN: number;
		EASINGMODE_EASEOUT: number;
		EASINGMODE_EASEINOUT: number;
		setEasingMode(easingMode: number): void;
		getEasingMode(): number;
		easeInCore(gradient: number): number;
		ease(gradient: number): number
	}

	declare class CircleEase extends EasingFunction, IEasingFunction {
		easeInCore(gradient: number): number
	}

	declare class BackEase extends EasingFunction, IEasingFunction {
		amplitude: number;
		constructor(amplitude?: number): this;
		easeInCore(gradient: number): number
	}

	declare class BounceEase extends EasingFunction, IEasingFunction {
		bounces: number;
		bounciness: number;
		constructor(bounces?: number, bounciness?: number): this;
		easeInCore(gradient: number): number
	}

	declare class CubicEase extends EasingFunction, IEasingFunction {
		easeInCore(gradient: number): number
	}

	declare class ElasticEase extends EasingFunction, IEasingFunction {
		oscillations: number;
		springiness: number;
		constructor(oscillations?: number, springiness?: number): this;
		easeInCore(gradient: number): number
	}

	declare class ExponentialEase extends EasingFunction, IEasingFunction {
		exponent: number;
		constructor(exponent?: number): this;
		easeInCore(gradient: number): number
	}

	declare class PowerEase extends EasingFunction, IEasingFunction {
		power: number;
		constructor(power?: number): this;
		easeInCore(gradient: number): number
	}

	declare class QuadraticEase extends EasingFunction, IEasingFunction {
		easeInCore(gradient: number): number
	}

	declare class QuarticEase extends EasingFunction, IEasingFunction {
		easeInCore(gradient: number): number
	}

	declare class QuinticEase extends EasingFunction, IEasingFunction {
		easeInCore(gradient: number): number
	}

	declare class SineEase extends EasingFunction, IEasingFunction {
		easeInCore(gradient: number): number
	}

	declare class BezierCurveEase extends EasingFunction, IEasingFunction {
		x1: number;
		y1: number;
		x2: number;
		y2: number;
		constructor(x1?: number, y1?: number, x2?: number, y2?: number): this;
		easeInCore(gradient: number): number
	}

	declare class Analyser  {
		SMOOTHING: number;
		FFT_SIZE: number;
		BARGRAPHAMPLITUDE: number;
		DEBUGCANVASPOS: {
		x: number,
		y: number
	};
		DEBUGCANVASSIZE: {
		width: number,
		height: number
	};
		constructor(scene: Scene): this;
		getFrequencyBinCount(): number;
		getByteFrequencyData(): Uint8Array;
		getByteTimeDomainData(): Uint8Array;
		getFloatFrequencyData(): Uint8Array;
		drawDebugCanvas(): void;
		stopDebugCanvas(): void;
		connectAudioNodes(inputAudioNode: AudioNode, outputAudioNode: AudioNode): void;
		dispose(): void
	}

	declare class AudioEngine  {
		canUseWebAudio: boolean;
		masterGain: GainNode;
		WarnedWebAudioUnsupported: boolean;
		unlocked: boolean;
		onAudioUnlocked: () => any;
		audioContext: AudioContext;
		constructor(): this;
		dispose(): void;
		getGlobalVolume(): number;
		setGlobalVolume(newVolume: number): void;
		connectToAnalyser(analyser: Analyser): void
	}

	declare class Sound  {
		name: string;
		autoplay: boolean;
		loop: boolean;
		useCustomAttenuation: boolean;
		soundTrackId: number;
		spatialSound: boolean;
		refDistance: number;
		rolloffFactor: number;
		maxDistance: number;
		distanceModel: string;
		onended: () => any;
		isPlaying: boolean;
		isPaused: boolean;
		constructor(name: string, urlOrArrayBuffer: any, scene: Scene, readyToPlayCallback?: () => void, options?: any): this;
		dispose(): void;
		setAudioBuffer(audioBuffer: AudioBuffer): void;
		updateOptions(options: any): void;
		switchPanningModelToHRTF(): void;
		switchPanningModelToEqualPower(): void;
		connectToSoundTrackAudioNode(soundTrackAudioNode: AudioNode): void;
		setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): void;
		setPosition(newPosition: Vector3): void;
		setLocalDirectionToMesh(newLocalDirection: Vector3): void;
		updateDistanceFromListener(): void;
		setAttenuationFunction(
		callback: (
		currentVolume: number, currentDistance: number, maxDistance: number, refDistance: number, rolloffFactor: number
	) => number
	): void;
		play(time?: number): void;
		stop(time?: number): void;
		pause(): void;
		setVolume(newVolume: number, time?: number): void;
		setPlaybackRate(newPlaybackRate: number): void;
		getVolume(): number;
		attachToMesh(meshToConnectTo: AbstractMesh): void;
		clone(): Sound;
		getAudioBuffer(): AudioBuffer;
		Parse(parsedSound: any, scene: Scene, rootUrl: string, sourceSound?: Sound): Sound
	}

	declare class SoundTrack  {
		id: number;
		soundCollection: Array<Sound>;
		constructor(scene: Scene, options?: any): this;
		dispose(): void;
		AddSound(sound: Sound): void;
		RemoveSound(sound: Sound): void;
		setVolume(newVolume: number): void;
		switchPanningModelToHRTF(): void;
		switchPanningModelToEqualPower(): void;
		connectToAnalyser(analyser: Analyser): void
	}

	declare class Bone extends Node {
		name: string;
		children: Bone[];
		animations: Animation[];
		length: number;
		_matrix: Matrix;
		constructor(name: string, skeleton: Skeleton, parentBone: Bone, matrix: Matrix, restPose?: Matrix): this;
		getParent(): Bone;
		getLocalMatrix(): Matrix;
		getBaseMatrix(): Matrix;
		getRestPose(): Matrix;
		returnToRest(): void;
		getWorldMatrix(): Matrix;
		getInvertedAbsoluteTransform(): Matrix;
		getAbsoluteTransform(): Matrix;
		updateMatrix(matrix: Matrix): void;
		_updateDifferenceMatrix(rootMatrix?: Matrix): void;
		markAsDirty(): void;
		copyAnimationRange(
		source: Bone, rangeName: string, frameOffset: number, rescaleAsRequired?: boolean
	): boolean
	}

	declare class Skeleton  {
		name: string;
		id: string;
		bones: Bone[];
		needInitialSkinMatrix: boolean;
		constructor(name: string, id: string, scene: Scene): this;
		getTransformMatrices(mesh: AbstractMesh): Float32Array;
		getScene(): Scene;
		createAnimationRange(name: string, from: number, to: number): void;
		deleteAnimationRange(name: string, deleteFrames?: boolean): void;
		getAnimationRange(name: string): AnimationRange;
		copyAnimationRange(source: Skeleton, name: string, rescaleAsRequired?: boolean): boolean;
		returnToRest(): void;
		beginAnimation(
		name: string, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void
	): void;
		_markAsDirty(): void;
		_registerMeshWithPoseMatrix(mesh: AbstractMesh): void;
		_unregisterMeshWithPoseMatrix(mesh: AbstractMesh): void;
		_computeTransformMatrices(targetMatrix: Float32Array, initialSkinMatrix: Matrix): void;
		prepare(): void;
		getAnimatables(): IAnimatable[];
		clone(name: string, id: string): Skeleton;
		dispose(): void;
		serialize(): any;
		Parse(parsedSkeleton: any, scene: Scene): Skeleton
	}

	declare class ArcRotateCamera extends TargetCamera {
		alpha: number;
		beta: number;
		radius: number;
		target: any;
		inertialAlphaOffset: number;
		inertialBetaOffset: number;
		inertialRadiusOffset: number;
		lowerAlphaLimit: any;
		upperAlphaLimit: any;
		lowerBetaLimit: number;
		upperBetaLimit: number;
		lowerRadiusLimit: any;
		upperRadiusLimit: any;
		angularSensibilityX: number;
		angularSensibilityY: number;
		wheelPrecision: number;
		pinchPrecision: number;
		panningSensibility: number;
		inertialPanningX: number;
		inertialPanningY: number;
		keysUp: number[];
		keysDown: number[];
		keysLeft: number[];
		keysRight: number[];
		zoomOnFactor: number;
		targetScreenOffset: Vector2;
		pinchInwards: boolean;
		allowUpsideDown: boolean;
		_viewMatrix: Matrix;
		_reset: () => void;
		panningAxis: Vector3;
		onCollide: (collidedMesh: AbstractMesh) => void;
		checkCollisions: boolean;
		collisionRadius: Vector3;
		angularSensibility: number;
		constructor(name: string, alpha: number, beta: number, radius: number, target: any, scene: Scene): this;
		_getTargetPosition(): Vector3;
		_initCache(): void;
		_updateCache(ignoreParentClass?: boolean): void;
		_isSynchronizedViewMatrix(): boolean;
		attachControl(
		element: HTMLElement, noPreventDefault?: boolean, useCtrlForPanning?: boolean
	): void;
		detachControl(element: HTMLElement): void;
		_checkInputs(): void;
		setPosition(position: Vector3): void;
		setTarget(target: Vector3): void;
		_getViewMatrix(): Matrix;
		zoomOn(meshes?: AbstractMesh[], doNotUpdateMaxZ?: boolean): void;
		focusOn(meshesOrMinMaxVectorAndDistance: any, doNotUpdateMaxZ?: boolean): void;
		createRigCamera(name: string, cameraIndex: number): Camera;
		_updateRigCameras(): void;
		serialize(): any
	}

	declare class VRCameraMetrics  {
		hResolution: number;
		vResolution: number;
		hScreenSize: number;
		vScreenSize: number;
		vScreenCenter: number;
		eyeToScreenDistance: number;
		lensSeparationDistance: number;
		interpupillaryDistance: number;
		distortionK: number[];
		chromaAbCorrection: number[];
		postProcessScaleFactor: number;
		lensCenterOffset: number;
		compensateDistortion: boolean;
		aspectRatio: number;
		aspectRatioFov: number;
		leftHMatrix: Matrix;
		rightHMatrix: Matrix;
		leftPreViewMatrix: Matrix;
		rightPreViewMatrix: Matrix;
		GetDefault(): VRCameraMetrics
	}

	declare class Camera extends Node {
		position: Vector3;
		PERSPECTIVE_CAMERA: number;
		ORTHOGRAPHIC_CAMERA: number;
		FOVMODE_VERTICAL_FIXED: number;
		FOVMODE_HORIZONTAL_FIXED: number;
		RIG_MODE_NONE: number;
		RIG_MODE_STEREOSCOPIC_ANAGLYPH: number;
		RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL: number;
		RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED: number;
		RIG_MODE_STEREOSCOPIC_OVERUNDER: number;
		RIG_MODE_VR: number;
		upVector: Vector3;
		orthoLeft: any;
		orthoRight: any;
		orthoBottom: any;
		orthoTop: any;
		fov: number;
		minZ: number;
		maxZ: number;
		inertia: number;
		mode: number;
		isIntermediate: boolean;
		viewport: Viewport;
		layerMask: number;
		fovMode: number;
		cameraRigMode: number;
		_cameraRigParams: any;
		_rigCameras: Camera[];
		_projectionMatrix: Matrix;
		_postProcesses: PostProcess[];
		_postProcessesTakenIndices: any[];
		_activeMeshes: SmartArray<Mesh>;
		constructor(name: string, position: Vector3, scene: Scene): this;
		globalPosition: Vector3;
		getActiveMeshes(): SmartArray<Mesh>;
		isActiveMesh(mesh: Mesh): boolean;
		_initCache(): void;
		_updateCache(ignoreParentClass?: boolean): void;
		_updateFromScene(): void;
		_isSynchronized(): boolean;
		_isSynchronizedViewMatrix(): boolean;
		_isSynchronizedProjectionMatrix(): boolean;
		attachControl(element: HTMLElement): void;
		detachControl(element: HTMLElement): void;
		_update(): void;
		_checkInputs(): void;
		attachPostProcess(postProcess: PostProcess, insertAt?: number): number;
		detachPostProcess(postProcess: PostProcess, atIndices?: any): number[];
		getWorldMatrix(): Matrix;
		_getViewMatrix(): Matrix;
		getViewMatrix(force?: boolean): Matrix;
		_computeViewMatrix(force?: boolean): Matrix;
		getProjectionMatrix(force?: boolean): Matrix;
		dispose(): void;
		setCameraRigMode(mode: number, rigParams: any): void;
		setCameraRigParameter(name: string, value: any): void;
		createRigCamera(name: string, cameraIndex: number): Camera;
		_updateRigCameras(): void;
		serialize(): any;
		Parse(parsedCamera: any, scene: Scene): Camera
	}

	declare class DeviceOrientationCamera extends FreeCamera {
		angularSensibility: number;
		moveSensibility: number;
		constructor(name: string, position: Vector3, scene: Scene): this;
		attachControl(canvas: HTMLCanvasElement, noPreventDefault: boolean): void;
		detachControl(canvas: HTMLCanvasElement): void;
		_checkInputs(): void
	}

	declare class FollowCamera extends TargetCamera {
		radius: number;
		rotationOffset: number;
		heightOffset: number;
		cameraAcceleration: number;
		maxCameraSpeed: number;
		target: AbstractMesh;
		constructor(name: string, position: Vector3, scene: Scene): this;
		_checkInputs(): void;
		serialize(): any
	}

	declare class ArcFollowCamera extends TargetCamera {
		alpha: number;
		beta: number;
		radius: number;
		target: AbstractMesh;
		constructor(name: string, alpha: number, beta: number, radius: number, target: AbstractMesh, scene: Scene): this;
		_checkInputs(): void;
		serialize(): any
	}

	declare class FreeCamera extends TargetCamera {
		ellipsoid: Vector3;
		keysUp: number[];
		keysDown: number[];
		keysLeft: number[];
		keysRight: number[];
		checkCollisions: boolean;
		applyGravity: boolean;
		angularSensibility: number;
		onCollide: (collidedMesh: AbstractMesh) => void;
		_waitingLockedTargetId: string;
		constructor(name: string, position: Vector3, scene: Scene): this;
		_onLostFocus(e: FocusEvent): void;
		attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
		detachControl(element: HTMLElement): void;
		_collideWithWorld(velocity: Vector3): void;
		_checkInputs(): void;
		_decideIfNeedsToMove(): boolean;
		_updatePosition(): void;
		serialize(): any
	}

	declare class GamepadCamera extends UniversalCamera {
		constructor(name: string, position: Vector3, scene: Scene): this
	}

	declare class AnaglyphFreeCamera extends FreeCamera {
		interaxialDistance: number;
		constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene): this
	}

	declare class AnaglyphArcRotateCamera extends ArcRotateCamera {
		constructor(name: string, alpha: number, beta: number, radius: number, target: any, interaxialDistance: number, scene: Scene): this
	}

	declare class AnaglyphGamepadCamera extends GamepadCamera {
		constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene): this
	}

	declare class StereoscopicFreeCamera extends FreeCamera {
		constructor(name: string, position: Vector3, interaxialDistance: number, isSideBySide: boolean, scene: Scene): this
	}

	declare class StereoscopicArcRotateCamera extends ArcRotateCamera {
		constructor(name: string, alpha: number, beta: number, radius: number, target: any, interaxialDistance: number, isSideBySide: boolean, scene: Scene): this
	}

	declare class StereoscopicGamepadCamera extends GamepadCamera {
		constructor(name: string, position: Vector3, interaxialDistance: number, isSideBySide: boolean, scene: Scene): this
	}

	declare class TargetCamera extends Camera {
		cameraDirection: Vector3;
		cameraRotation: Vector2;
		rotation: Vector3;
		speed: number;
		noRotationConstraint: boolean;
		lockedTarget: any;
		_currentTarget: Vector3;
		_viewMatrix: Matrix;
		_camMatrix: Matrix;
		_cameraTransformMatrix: Matrix;
		_cameraRotationMatrix: Matrix;
		_referencePoint: Vector3;
		_transformedReferencePoint: Vector3;
		_lookAtTemp: Matrix;
		_tempMatrix: Matrix;
		_reset: () => void;
		_waitingLockedTargetId: string;
		constructor(name: string, position: Vector3, scene: Scene): this;
		getFrontPosition(distance: number): Vector3;
		_getLockedTargetPosition(): Vector3;
		_initCache(): void;
		_updateCache(ignoreParentClass?: boolean): void;
		_isSynchronizedViewMatrix(): boolean;
		_computeLocalCameraSpeed(): number;
		setTarget(target: Vector3): void;
		getTarget(): Vector3;
		_decideIfNeedsToMove(): boolean;
		_updatePosition(): void;
		_checkInputs(): void;
		_getViewMatrix(): Matrix;
		_getVRViewMatrix(): Matrix;
		createRigCamera(name: string, cameraIndex: number): Camera;
		_updateRigCameras(): void;
		serialize(): any
	}

	declare class TouchCamera extends FreeCamera {
		touchAngularSensibility: number;
		touchMoveSensibility: number;
		constructor(name: string, position: Vector3, scene: Scene): this;
		_onLostFocus(e: FocusEvent): void;
		attachControl(canvas: HTMLCanvasElement, noPreventDefault: boolean): void;
		detachControl(canvas: HTMLCanvasElement): void;
		_checkInputs(): void
	}

	declare class UniversalCamera extends TouchCamera {
		gamepad: Gamepad;
		gamepadAngularSensibility: number;
		gamepadMoveSensibility: number;
		constructor(name: string, position: Vector3, scene: Scene): this;
		attachControl(canvas: HTMLCanvasElement, noPreventDefault: boolean): void;
		detachControl(canvas: HTMLCanvasElement): void;
		_checkInputs(): void;
		dispose(): void
	}

	declare class VirtualJoysticksCamera extends FreeCamera {
		constructor(name: string, position: Vector3, scene: Scene): this;
		getLeftJoystick(): VirtualJoystick;
		getRightJoystick(): VirtualJoystick;
		_checkInputs(): void;
		dispose(): void
	}

	declare class Collider  {
		radius: Vector3;
		retry: number;
		velocity: Vector3;
		basePoint: Vector3;
		epsilon: number;
		collisionFound: boolean;
		velocityWorldLength: number;
		basePointWorld: Vector3;
		velocityWorld: Vector3;
		normalizedVelocity: Vector3;
		initialVelocity: Vector3;
		initialPosition: Vector3;
		nearestDistance: number;
		intersectionPoint: Vector3;
		collidedMesh: AbstractMesh;
		_initialize(source: Vector3, dir: Vector3, e: number): void;
		_checkPointInTriangle(point: Vector3, pa: Vector3, pb: Vector3, pc: Vector3, n: Vector3): boolean;
		_canDoCollision(
		sphereCenter: Vector3, sphereRadius: number, vecMin: Vector3, vecMax: Vector3
	): boolean;
		_testTriangle(
		faceIndex: number, trianglePlaneArray: Array<Plane>, p1: Vector3, p2: Vector3, p3: Vector3, hasMaterial: boolean
	): void;
		_collide(
		trianglePlaneArray: Array<Plane>, pts: Vector3[], indices: number[] | Int32Array, indexStart: number, indexEnd: number, decal: number, hasMaterial: boolean
	): void;
		_getResponse(pos: Vector3, vel: Vector3): void
	}

	declare class CollisionCoordinatorWorker extends ICollisionCoordinator {
		constructor(): this;
		SerializeMesh: (mesh: AbstractMesh) => SerializedMesh;
		SerializeGeometry: (geometry: Geometry) => SerializedGeometry;
		getNewPosition(
		position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, excludedMesh: AbstractMesh, onNewPosition: (
		collisionIndex: number, newPosition: Vector3, collidedMesh?: AbstractMesh
	) => void, collisionIndex: number
	): void;
		init(scene: Scene): void;
		destroy(): void;
		onMeshAdded(mesh: AbstractMesh): void;
		onMeshUpdated: (mesh: AbstractMesh) => void;
		onMeshRemoved(mesh: AbstractMesh): void;
		onGeometryAdded(geometry: Geometry): void;
		onGeometryUpdated: (geometry: Geometry) => void;
		onGeometryDeleted(geometry: Geometry): void
	}

	declare class CollisionCoordinatorLegacy extends ICollisionCoordinator {
		getNewPosition(
		position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, excludedMesh: AbstractMesh, onNewPosition: (
		collisionIndex: number, newPosition: Vector3, collidedMesh?: AbstractMesh
	) => void, collisionIndex: number
	): void;
		init(scene: Scene): void;
		destroy(): void;
		onMeshAdded(mesh: AbstractMesh): void;
		onMeshUpdated(mesh: AbstractMesh): void;
		onMeshRemoved(mesh: AbstractMesh): void;
		onGeometryAdded(geometry: Geometry): void;
		onGeometryUpdated(geometry: Geometry): void;
		onGeometryDeleted(geometry: Geometry): void
	}

	declare class CollisionCache  {
		getMeshes(): {
		[n: number]: SerializedMesh
	};
		getGeometries(): {
		[s: number]: SerializedGeometry
	};
		getMesh(id: any): SerializedMesh;
		addMesh(mesh: SerializedMesh): void;
		removeMesh(uniqueId: number): void;
		getGeometry(id: string): SerializedGeometry;
		addGeometry(geometry: SerializedGeometry): void;
		removeGeometry(id: string): void
	}

	declare class CollideWorker  {
		collider: Collider;
		constructor(collider: Collider, _collisionCache: CollisionCache, finalPosition: Vector3): this;
		collideWithWorld(
		position: Vector3, velocity: Vector3, maximumRetry: number, excludedMeshUniqueId?: number
	): void
	}

	declare class CollisionDetectorTransferable extends ICollisionDetector {
		onInit(payload: InitPayload): void;
		onUpdate(payload: UpdatePayload): void;
		onCollision(payload: CollidePayload): void
	}

	declare class IntersectionInfo  {
		bu: number;
		bv: number;
		distance: number;
		faceId: number;
		subMeshId: number;
		constructor(bu: number, bv: number, distance: number): this
	}

	declare class PickingInfo  {
		hit: boolean;
		distance: number;
		pickedPoint: Vector3;
		pickedMesh: AbstractMesh;
		bu: number;
		bv: number;
		faceId: number;
		subMeshId: number;
		pickedSprite: Sprite;
		getNormal(useWorldCoordinates?: boolean, useVerticesNormals?: boolean): Vector3;
		getTextureCoordinates(): Vector2
	}

	declare class DebugLayer  {
		_syncPositions: () => void;
		shouldDisplayLabel: (node: Node) => boolean;
		shouldDisplayAxis: (mesh: Mesh) => boolean;
		axisRatio: number;
		accentColor: string;
		customStatsFunction: () => string;
		constructor(scene: Scene): this;
		isVisible(): boolean;
		hide(): void;
		show(showUI?: boolean, camera?: Camera, rootElement?: HTMLElement): void
	}

	declare class BoundingBox  {
		minimum: Vector3;
		maximum: Vector3;
		vectors: Vector3[];
		center: Vector3;
		extendSize: Vector3;
		directions: Vector3[];
		vectorsWorld: Vector3[];
		minimumWorld: Vector3;
		maximumWorld: Vector3;
		constructor(minimum: Vector3, maximum: Vector3): this;
		getWorldMatrix(): Matrix;
		_update(world: Matrix): void;
		isInFrustum(frustumPlanes: Plane[]): boolean;
		isCompletelyInFrustum(frustumPlanes: Plane[]): boolean;
		intersectsPoint(point: Vector3): boolean;
		intersectsSphere(sphere: BoundingSphere): boolean;
		intersectsMinMax(min: Vector3, max: Vector3): boolean;
		Intersects(box0: BoundingBox, box1: BoundingBox): boolean;
		IntersectsSphere(
		minPoint: Vector3, maxPoint: Vector3, sphereCenter: Vector3, sphereRadius: number
	): boolean;
		IsCompletelyInFrustum(boundingVectors: Vector3[], frustumPlanes: Plane[]): boolean;
		IsInFrustum(boundingVectors: Vector3[], frustumPlanes: Plane[]): boolean
	}

	declare class BoundingInfo  {
		minimum: Vector3;
		maximum: Vector3;
		boundingBox: BoundingBox;
		boundingSphere: BoundingSphere;
		constructor(minimum: Vector3, maximum: Vector3): this;
		isLocked: boolean;
		update(world: Matrix): void;
		isInFrustum(frustumPlanes: Plane[]): boolean;
		isCompletelyInFrustum(frustumPlanes: Plane[]): boolean;
		_checkCollision(collider: Collider): boolean;
		intersectsPoint(point: Vector3): boolean;
		intersects(boundingInfo: BoundingInfo, precise: boolean): boolean
	}

	declare class BoundingSphere  {
		minimum: Vector3;
		maximum: Vector3;
		center: Vector3;
		radius: number;
		centerWorld: Vector3;
		radiusWorld: number;
		constructor(minimum: Vector3, maximum: Vector3): this;
		_update(world: Matrix): void;
		isInFrustum(frustumPlanes: Plane[]): boolean;
		intersectsPoint(point: Vector3): boolean;
		Intersects(sphere0: BoundingSphere, sphere1: BoundingSphere): boolean
	}

	declare class Layer  {
		name: string;
		texture: Texture;
		isBackground: boolean;
		color: Color4;
		scale: Vector2;
		offset: Vector2;
		onDispose: () => void;
		alphaBlendingMode: number;
		constructor(name: string, imgUrl: string, scene: Scene, isBackground?: boolean, color?: Color4): this;
		render(): void;
		dispose(): void
	}

	declare class LensFlare  {
		size: number;
		position: number;
		color: Color3;
		texture: Texture;
		constructor(size: number, position: number, color: any, imgUrl: string, system: LensFlareSystem): this;
		dispose: () => void
	}

	declare class LensFlareSystem  {
		name: string;
		lensFlares: LensFlare[];
		borderLimit: number;
		meshesSelectionPredicate: (mesh: Mesh) => boolean;
		layerMask: number;
		constructor(name: string, emitter: any, scene: Scene): this;
		isEnabled: boolean;
		getScene(): Scene;
		getEmitter(): any;
		setEmitter(newEmitter: any): void;
		getEmitterPosition(): Vector3;
		computeEffectivePosition(globalViewport: Viewport): boolean;
		_isVisible(): boolean;
		render(): boolean;
		dispose(): void;
		Parse(parsedLensFlareSystem: any, scene: Scene, rootUrl: string): LensFlareSystem;
		serialize(): any
	}

	declare class DirectionalLight extends Light, IShadowLight {
		direction: Vector3;
		position: Vector3;
		transformedPosition: Vector3;
		shadowOrthoScale: number;
		autoUpdateExtends: boolean;
		constructor(name: string, direction: Vector3, scene: Scene): this;
		getAbsolutePosition(): Vector3;
		setDirectionToTarget(target: Vector3): Vector3;
		setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
		supportsVSM(): boolean;
		needRefreshPerFrame(): boolean;
		needCube(): boolean;
		getShadowDirection(faceIndex?: number): Vector3;
		computeTransformedPosition(): boolean;
		transferToEffect(effect: Effect, directionUniformName: string): void;
		_getWorldMatrix(): Matrix;
		serialize(): any
	}

	declare class HemisphericLight extends Light {
		direction: Vector3;
		groundColor: Color3;
		constructor(name: string, direction: Vector3, scene: Scene): this;
		setDirectionToTarget(target: Vector3): Vector3;
		getShadowGenerator(): ShadowGenerator;
		transferToEffect(
		effect: Effect, directionUniformName: string, groundColorUniformName: string
	): void;
		_getWorldMatrix(): Matrix;
		serialize(): any
	}

	declare class Light extends Node {
		diffuse: Color3;
		specular: Color3;
		intensity: number;
		range: number;
		includeOnlyWithLayerMask: number;
		includedOnlyMeshes: AbstractMesh[];
		excludedMeshes: AbstractMesh[];
		excludeWithLayerMask: number;
		_shadowGenerator: ShadowGenerator;
		_excludedMeshesIds: string[];
		_includedOnlyMeshesIds: string[];
		constructor(name: string, scene: Scene): this;
		getShadowGenerator(): ShadowGenerator;
		getAbsolutePosition(): Vector3;
		transferToEffect(effect: Effect, uniformName0?: string, uniformName1?: string): void;
		_getWorldMatrix(): Matrix;
		canAffectMesh(mesh: AbstractMesh): boolean;
		getWorldMatrix(): Matrix;
		dispose(): void;
		serialize(): any;
		Parse(parsedLight: any, scene: Scene): Light
	}

	declare class PointLight extends Light, IShadowLight {
		position: Vector3;
		transformedPosition: Vector3;
		constructor(name: string, position: Vector3, scene: Scene): this;
		getAbsolutePosition(): Vector3;
		computeTransformedPosition(): boolean;
		transferToEffect(effect: Effect, positionUniformName: string): void;
		needCube(): boolean;
		supportsVSM(): boolean;
		needRefreshPerFrame(): boolean;
		getShadowDirection(faceIndex?: number): Vector3;
		setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
		_getWorldMatrix(): Matrix;
		serialize(): any
	}

	declare class SpotLight extends Light, IShadowLight {
		position: Vector3;
		direction: Vector3;
		angle: number;
		exponent: number;
		transformedPosition: Vector3;
		constructor(name: string, position: Vector3, direction: Vector3, angle: number, exponent: number, scene: Scene): this;
		getAbsolutePosition(): Vector3;
		setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
		needCube(): boolean;
		supportsVSM(): boolean;
		needRefreshPerFrame(): boolean;
		getShadowDirection(faceIndex?: number): Vector3;
		setDirectionToTarget(target: Vector3): Vector3;
		computeTransformedPosition(): boolean;
		transferToEffect(
		effect: Effect, positionUniformName: string, directionUniformName: string
	): void;
		_getWorldMatrix(): Matrix;
		serialize(): any
	}

	declare class SceneLoader  {
		ForceFullSceneLoadingForIncremental: boolean;
		ShowLoadingScreen: boolean;
		RegisterPlugin(plugin: ISceneLoaderPlugin): void;
		ImportMesh(
		meshesNames: any, rootUrl: string, sceneFilename: string, scene: Scene, onsuccess?: (
		meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]
	) => void, progressCallBack?: () => void, onerror?: (scene: Scene, e: any) => void
	): void;
		Load(
		rootUrl: string, sceneFilename: any, engine: Engine, onsuccess?: (scene: Scene) => void, progressCallBack?: any, onerror?: (scene: Scene) => void
	): void;
		Append(
		rootUrl: string, sceneFilename: any, scene: Scene, onsuccess?: (scene: Scene) => void, progressCallBack?: any, onerror?: (scene: Scene) => void
	): void
	}

	declare class SIMDVector3  {
		TransformCoordinatesToRefSIMD(vector: Vector3, transformation: Matrix, result: Vector3): void;
		TransformCoordinatesFromFloatsToRefSIMD(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void
	}

	declare class SIMDMatrix  {
		multiplyToArraySIMD(other: Matrix, result: Matrix, offset?: number): void;
		invertToRefSIMD(other: Matrix): Matrix;
		LookAtLHToRefSIMD(eyeRef: Vector3, targetRef: Vector3, upRef: Vector3, result: Matrix): void
	}

	declare class SIMDHelper  {
		IsEnabled: boolean;
		DisableSIMD(): void;
		EnableSIMD(): void
	}

	declare class Color3  {
		r: number;
		g: number;
		b: number;
		constructor(r?: number, g?: number, b?: number): this;
		toString(): string;
		toArray(array: number[], index?: number): Color3;
		toColor4(alpha?: number): Color4;
		asArray(): number[];
		toLuminance(): number;
		multiply(otherColor: Color3): Color3;
		multiplyToRef(otherColor: Color3, result: Color3): Color3;
		equals(otherColor: Color3): boolean;
		equalsFloats(r: number, g: number, b: number): boolean;
		scale(scale: number): Color3;
		scaleToRef(scale: number, result: Color3): Color3;
		add(otherColor: Color3): Color3;
		addToRef(otherColor: Color3, result: Color3): Color3;
		subtract(otherColor: Color3): Color3;
		subtractToRef(otherColor: Color3, result: Color3): Color3;
		clone(): Color3;
		copyFrom(source: Color3): Color3;
		copyFromFloats(r: number, g: number, b: number): Color3;
		toHexString(): string;
		toLinearSpace(): Color3;
		toLinearSpaceToRef(convertedColor: Color3): Color3;
		toGammaSpace(): Color3;
		toGammaSpaceToRef(convertedColor: Color3): Color3;
		FromHexString(hex: string): Color3;
		FromArray(array: number[], offset?: number): Color3;
		FromInts(r: number, g: number, b: number): Color3;
		Lerp(start: Color3, end: Color3, amount: number): Color3;
		Red(): Color3;
		Green(): Color3;
		Blue(): Color3;
		Black(): Color3;
		White(): Color3;
		Purple(): Color3;
		Magenta(): Color3;
		Yellow(): Color3;
		Gray(): Color3
	}

	declare class Color4  {
		r: number;
		g: number;
		b: number;
		a: number;
		constructor(r: number, g: number, b: number, a: number): this;
		addInPlace(right: any): Color4;
		asArray(): number[];
		toArray(array: number[], index?: number): Color4;
		add(right: Color4): Color4;
		subtract(right: Color4): Color4;
		subtractToRef(right: Color4, result: Color4): Color4;
		scale(scale: number): Color4;
		scaleToRef(scale: number, result: Color4): Color4;
		toString(): string;
		clone(): Color4;
		copyFrom(source: Color4): Color4;
		toHexString(): string;
		FromHexString(hex: string): Color4;
		Lerp(left: Color4, right: Color4, amount: number): Color4;
		LerpToRef(left: Color4, right: Color4, amount: number, result: Color4): void;
		FromArray(array: number[], offset?: number): Color4;
		FromInts(r: number, g: number, b: number, a: number): Color4;
		CheckColors4(colors: number[], count: number): number[]
	}

	declare class Vector2  {
		x: number;
		y: number;
		constructor(x: number, y: number): this;
		toString(): string;
		toArray(array: number[], index?: number): Vector2;
		asArray(): number[];
		copyFrom(source: Vector2): Vector2;
		copyFromFloats(x: number, y: number): Vector2;
		add(otherVector: Vector2): Vector2;
		addVector3(otherVector: Vector3): Vector2;
		subtract(otherVector: Vector2): Vector2;
		subtractInPlace(otherVector: Vector2): Vector2;
		multiplyInPlace(otherVector: Vector2): Vector2;
		multiply(otherVector: Vector2): Vector2;
		multiplyToRef(otherVector: Vector2, result: Vector2): Vector2;
		multiplyByFloats(x: number, y: number): Vector2;
		divide(otherVector: Vector2): Vector2;
		divideToRef(otherVector: Vector2, result: Vector2): Vector2;
		negate(): Vector2;
		scaleInPlace(scale: number): Vector2;
		scale(scale: number): Vector2;
		equals(otherVector: Vector2): boolean;
		equalsWithEpsilon(otherVector: Vector2, epsilon?: number): boolean;
		length(): number;
		lengthSquared(): number;
		normalize(): Vector2;
		clone(): Vector2;
		Zero(): Vector2;
		FromArray(array: number[] | Float32Array, offset?: number): Vector2;
		FromArrayToRef(array: number[] | Float32Array, offset: number, result: Vector2): void;
		CatmullRom(
		value1: Vector2, value2: Vector2, value3: Vector2, value4: Vector2, amount: number
	): Vector2;
		Clamp(value: Vector2, min: Vector2, max: Vector2): Vector2;
		Hermite(
		value1: Vector2, tangent1: Vector2, value2: Vector2, tangent2: Vector2, amount: number
	): Vector2;
		Lerp(start: Vector2, end: Vector2, amount: number): Vector2;
		Dot(left: Vector2, right: Vector2): number;
		Normalize(vector: Vector2): Vector2;
		Minimize(left: Vector2, right: Vector2): Vector2;
		Maximize(left: Vector2, right: Vector2): Vector2;
		Transform(vector: Vector2, transformation: Matrix): Vector2;
		Distance(value1: Vector2, value2: Vector2): number;
		DistanceSquared(value1: Vector2, value2: Vector2): number
	}

	declare class Vector3  {
		x: number;
		y: number;
		z: number;
		constructor(x: number, y: number, z: number): this;
		toString(): string;
		asArray(): number[];
		toArray(array: number[] | Float32Array, index?: number): Vector3;
		toQuaternion(): Quaternion;
		addInPlace(otherVector: Vector3): Vector3;
		add(otherVector: Vector3): Vector3;
		addToRef(otherVector: Vector3, result: Vector3): Vector3;
		subtractInPlace(otherVector: Vector3): Vector3;
		subtract(otherVector: Vector3): Vector3;
		subtractToRef(otherVector: Vector3, result: Vector3): Vector3;
		subtractFromFloats(x: number, y: number, z: number): Vector3;
		subtractFromFloatsToRef(x: number, y: number, z: number, result: Vector3): Vector3;
		negate(): Vector3;
		scaleInPlace(scale: number): Vector3;
		scale(scale: number): Vector3;
		scaleToRef(scale: number, result: Vector3): void;
		equals(otherVector: Vector3): boolean;
		equalsWithEpsilon(otherVector: Vector3, epsilon?: number): boolean;
		equalsToFloats(x: number, y: number, z: number): boolean;
		multiplyInPlace(otherVector: Vector3): Vector3;
		multiply(otherVector: Vector3): Vector3;
		multiplyToRef(otherVector: Vector3, result: Vector3): Vector3;
		multiplyByFloats(x: number, y: number, z: number): Vector3;
		divide(otherVector: Vector3): Vector3;
		divideToRef(otherVector: Vector3, result: Vector3): Vector3;
		MinimizeInPlace(other: Vector3): Vector3;
		MaximizeInPlace(other: Vector3): Vector3;
		length(): number;
		lengthSquared(): number;
		normalize(): Vector3;
		clone(): Vector3;
		copyFrom(source: Vector3): Vector3;
		copyFromFloats(x: number, y: number, z: number): Vector3;
		GetClipFactor(vector0: Vector3, vector1: Vector3, axis: Vector3, size: any): number;
		FromArray(array: number[] | Float32Array, offset?: number): Vector3;
		FromFloatArray(array: Float32Array, offset?: number): Vector3;
		FromArrayToRef(array: number[] | Float32Array, offset: number, result: Vector3): void;
		FromFloatArrayToRef(array: Float32Array, offset: number, result: Vector3): void;
		FromFloatsToRef(x: number, y: number, z: number, result: Vector3): void;
		Zero(): Vector3;
		Up(): Vector3;
		TransformCoordinates(vector: Vector3, transformation: Matrix): Vector3;
		TransformCoordinatesToRef(vector: Vector3, transformation: Matrix, result: Vector3): void;
		TransformCoordinatesFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void;
		TransformNormal(vector: Vector3, transformation: Matrix): Vector3;
		TransformNormalToRef(vector: Vector3, transformation: Matrix, result: Vector3): void;
		TransformNormalFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void;
		CatmullRom(
		value1: Vector3, value2: Vector3, value3: Vector3, value4: Vector3, amount: number
	): Vector3;
		Clamp(value: Vector3, min: Vector3, max: Vector3): Vector3;
		Hermite(
		value1: Vector3, tangent1: Vector3, value2: Vector3, tangent2: Vector3, amount: number
	): Vector3;
		Lerp(start: Vector3, end: Vector3, amount: number): Vector3;
		Dot(left: Vector3, right: Vector3): number;
		Cross(left: Vector3, right: Vector3): Vector3;
		CrossToRef(left: Vector3, right: Vector3, result: Vector3): void;
		Normalize(vector: Vector3): Vector3;
		NormalizeToRef(vector: Vector3, result: Vector3): void;
		Project(vector: Vector3, world: Matrix, transform: Matrix, viewport: Viewport): Vector3;
		UnprojectFromTransform(
		source: Vector3, viewportWidth: number, viewportHeight: number, world: Matrix, transform: Matrix
	): Vector3;
		Unproject(
		source: Vector3, viewportWidth: number, viewportHeight: number, world: Matrix, view: Matrix, projection: Matrix
	): Vector3;
		Minimize(left: Vector3, right: Vector3): Vector3;
		Maximize(left: Vector3, right: Vector3): Vector3;
		Distance(value1: Vector3, value2: Vector3): number;
		DistanceSquared(value1: Vector3, value2: Vector3): number;
		Center(value1: Vector3, value2: Vector3): Vector3;
		RotationFromAxis(axis1: Vector3, axis2: Vector3, axis3: Vector3): Vector3;
		RotationFromAxisToRef(axis1: Vector3, axis2: Vector3, axis3: Vector3, ref: Vector3): void
	}

	declare class Vector4  {
		x: number;
		y: number;
		z: number;
		w: number;
		constructor(x: number, y: number, z: number, w: number): this;
		toString(): string;
		asArray(): number[];
		toArray(array: number[], index?: number): Vector4;
		addInPlace(otherVector: Vector4): Vector4;
		add(otherVector: Vector4): Vector4;
		addToRef(otherVector: Vector4, result: Vector4): Vector4;
		subtractInPlace(otherVector: Vector4): Vector4;
		subtract(otherVector: Vector4): Vector4;
		subtractToRef(otherVector: Vector4, result: Vector4): Vector4;
		subtractFromFloats(x: number, y: number, z: number, w: number): Vector4;
		subtractFromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): Vector4;
		negate(): Vector4;
		scaleInPlace(scale: number): Vector4;
		scale(scale: number): Vector4;
		scaleToRef(scale: number, result: Vector4): void;
		equals(otherVector: Vector4): boolean;
		equalsWithEpsilon(otherVector: Vector4, epsilon?: number): boolean;
		equalsToFloats(x: number, y: number, z: number, w: number): boolean;
		multiplyInPlace(otherVector: Vector4): Vector4;
		multiply(otherVector: Vector4): Vector4;
		multiplyToRef(otherVector: Vector4, result: Vector4): Vector4;
		multiplyByFloats(x: number, y: number, z: number, w: number): Vector4;
		divide(otherVector: Vector4): Vector4;
		divideToRef(otherVector: Vector4, result: Vector4): Vector4;
		MinimizeInPlace(other: Vector4): Vector4;
		MaximizeInPlace(other: Vector4): Vector4;
		length(): number;
		lengthSquared(): number;
		normalize(): Vector4;
		clone(): Vector4;
		copyFrom(source: Vector4): Vector4;
		copyFromFloats(x: number, y: number, z: number, w: number): Vector4;
		FromArray(array: number[], offset?: number): Vector4;
		FromArrayToRef(array: number[], offset: number, result: Vector4): void;
		FromFloatArrayToRef(array: Float32Array, offset: number, result: Vector4): void;
		FromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): void;
		Zero(): Vector4;
		Normalize(vector: Vector4): Vector4;
		NormalizeToRef(vector: Vector4, result: Vector4): void;
		Minimize(left: Vector4, right: Vector4): Vector4;
		Maximize(left: Vector4, right: Vector4): Vector4;
		Distance(value1: Vector4, value2: Vector4): number;
		DistanceSquared(value1: Vector4, value2: Vector4): number;
		Center(value1: Vector4, value2: Vector4): Vector4
	}

	declare class Quaternion  {
		x: number;
		y: number;
		z: number;
		w: number;
		constructor(x?: number, y?: number, z?: number, w?: number): this;
		toString(): string;
		asArray(): number[];
		equals(otherQuaternion: Quaternion): boolean;
		clone(): Quaternion;
		copyFrom(other: Quaternion): Quaternion;
		copyFromFloats(x: number, y: number, z: number, w: number): Quaternion;
		add(other: Quaternion): Quaternion;
		subtract(other: Quaternion): Quaternion;
		scale(value: number): Quaternion;
		multiply(q1: Quaternion): Quaternion;
		multiplyToRef(q1: Quaternion, result: Quaternion): Quaternion;
		multiplyInPlace(q1: Quaternion): Quaternion;
		length(): number;
		normalize(): Quaternion;
		toEulerAngles(order?: string): Vector3;
		toEulerAnglesToRef(result: Vector3, order?: string): Quaternion;
		toRotationMatrix(result: Matrix): Quaternion;
		fromRotationMatrix(matrix: Matrix): Quaternion;
		FromRotationMatrix(matrix: Matrix): Quaternion;
		FromRotationMatrixToRef(matrix: Matrix, result: Quaternion): void;
		Inverse(q: Quaternion): Quaternion;
		Identity(): Quaternion;
		RotationAxis(axis: Vector3, angle: number): Quaternion;
		FromArray(array: number[], offset?: number): Quaternion;
		RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion;
		RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Quaternion): void;
		RotationAlphaBetaGamma(alpha: number, beta: number, gamma: number): Quaternion;
		RotationAlphaBetaGammaToRef(alpha: number, beta: number, gamma: number, result: Quaternion): void;
		Slerp(left: Quaternion, right: Quaternion, amount: number): Quaternion
	}

	declare class Matrix  {
		m: Float32Array;
		isIdentity(): boolean;
		determinant(): number;
		toArray(): Float32Array;
		asArray(): Float32Array;
		invert(): Matrix;
		reset(): Matrix;
		add(other: Matrix): Matrix;
		addToRef(other: Matrix, result: Matrix): Matrix;
		addToSelf(other: Matrix): Matrix;
		invertToRef(other: Matrix): Matrix;
		setTranslation(vector3: Vector3): Matrix;
		multiply(other: Matrix): Matrix;
		copyFrom(other: Matrix): Matrix;
		copyToArray(array: Float32Array, offset?: number): Matrix;
		multiplyToRef(other: Matrix, result: Matrix): Matrix;
		multiplyToArray(other: Matrix, result: Float32Array, offset: number): Matrix;
		equals(value: Matrix): boolean;
		clone(): Matrix;
		decompose(scale: Vector3, rotation: Quaternion, translation: Vector3): boolean;
		FromArray(array: number[], offset?: number): Matrix;
		FromArrayToRef(array: number[], offset: number, result: Matrix): void;
		FromFloat32ArrayToRefScaled(array: Float32Array, offset: number, scale: number, result: Matrix): void;
		FromValuesToRef(
		initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number, result: Matrix
	): void;
		FromValues(
		initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number
	): Matrix;
		Compose(scale: Vector3, rotation: Quaternion, translation: Vector3): Matrix;
		Identity(): Matrix;
		IdentityToRef(result: Matrix): void;
		Zero(): Matrix;
		RotationX(angle: number): Matrix;
		Invert(source: Matrix): Matrix;
		RotationXToRef(angle: number, result: Matrix): void;
		RotationY(angle: number): Matrix;
		RotationYToRef(angle: number, result: Matrix): void;
		RotationZ(angle: number): Matrix;
		RotationZToRef(angle: number, result: Matrix): void;
		RotationAxis(axis: Vector3, angle: number): Matrix;
		RotationAxisToRef(axis: Vector3, angle: number, result: Matrix): void;
		RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Matrix;
		RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Matrix): void;
		Scaling(x: number, y: number, z: number): Matrix;
		ScalingToRef(x: number, y: number, z: number, result: Matrix): void;
		Translation(x: number, y: number, z: number): Matrix;
		TranslationToRef(x: number, y: number, z: number, result: Matrix): void;
		Lerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
		LookAtLH(eye: Vector3, target: Vector3, up: Vector3): Matrix;
		LookAtLHToRef(eye: Vector3, target: Vector3, up: Vector3, result: Matrix): void;
		OrthoLH(width: number, height: number, znear: number, zfar: number): Matrix;
		OrthoLHToRef(
		width: number, height: number, znear: number, zfar: number, result: Matrix
	): void;
		OrthoOffCenterLH(
		left: number, right: number, bottom: number, top: number, znear: number, zfar: number
	): Matrix;
		OrthoOffCenterLHToRef(
		left: number, right: any, bottom: number, top: number, znear: number, zfar: number, result: Matrix
	): void;
		PerspectiveLH(width: number, height: number, znear: number, zfar: number): Matrix;
		PerspectiveFovLH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
		PerspectiveFovLHToRef(
		fov: number, aspect: number, znear: number, zfar: number, result: Matrix, fovMode?: number
	): void;
		GetFinalMatrix(
		viewport: Viewport, world: Matrix, view: Matrix, projection: Matrix, zmin: number, zmax: number
	): Matrix;
		GetAsMatrix2x2(matrix: Matrix): Float32Array;
		GetAsMatrix3x3(matrix: Matrix): Float32Array;
		Transpose(matrix: Matrix): Matrix;
		Reflection(plane: Plane): Matrix;
		ReflectionToRef(plane: Plane, result: Matrix): void
	}

	declare class Plane  {
		normal: Vector3;
		d: number;
		constructor(a: number, b: number, c: number, d: number): this;
		asArray(): number[];
		clone(): Plane;
		normalize(): Plane;
		transform(transformation: Matrix): Plane;
		dotCoordinate(point: any): number;
		copyFromPoints(point1: Vector3, point2: Vector3, point3: Vector3): Plane;
		isFrontFacingTo(direction: Vector3, epsilon: number): boolean;
		signedDistanceTo(point: Vector3): number;
		FromArray(array: number[]): Plane;
		FromPoints(point1: any, point2: any, point3: any): Plane;
		FromPositionAndNormal(origin: Vector3, normal: Vector3): Plane;
		SignedDistanceToPlaneFromPositionAndNormal(origin: Vector3, normal: Vector3, point: Vector3): number
	}

	declare class Viewport  {
		x: number;
		y: number;
		width: number;
		height: number;
		constructor(x: number, y: number, width: number, height: number): this;
		toGlobal(engine: Engine): Viewport;
		toScreenGlobal(engine: Engine): Viewport
	}

	declare class Frustum  {
		GetPlanes(transform: Matrix): Plane[];
		GetPlanesToRef(transform: Matrix, frustumPlanes: Plane[]): void
	}

	declare class Ray  {
		origin: Vector3;
		direction: Vector3;
		length: number;
		constructor(origin: Vector3, direction: Vector3, length?: number): this;
		intersectsBoxMinMax(minimum: Vector3, maximum: Vector3): boolean;
		intersectsBox(box: BoundingBox): boolean;
		intersectsSphere(sphere: any): boolean;
		intersectsTriangle(vertex0: Vector3, vertex1: Vector3, vertex2: Vector3): IntersectionInfo;
		CreateNew(
		x: number, y: number, viewportWidth: number, viewportHeight: number, world: Matrix, view: Matrix, projection: Matrix
	): Ray;
		CreateNewFromTo(origin: Vector3, end: Vector3, world?: Matrix): Ray;
		Transform(ray: Ray, matrix: Matrix): Ray
	}

	declare class Axis  {
		X: Vector3;
		Y: Vector3;
		Z: Vector3
	}

	declare class BezierCurve  {
		interpolate(t: number, x1: number, y1: number, x2: number, y2: number): number
	}

	declare class Angle  {
		constructor(radians: number): this;
		degrees: () => number;
		radians: () => number;
		BetweenTwoPoints(a: Vector2, b: Vector2): Angle;
		FromRadians(radians: number): Angle;
		FromDegrees(degrees: number): Angle
	}

	declare class Arc2  {
		startPoint: Vector2;
		midPoint: Vector2;
		endPoint: Vector2;
		centerPoint: Vector2;
		radius: number;
		angle: Angle;
		startAngle: Angle;
		orientation: Orientation;
		constructor(startPoint: Vector2, midPoint: Vector2, endPoint: Vector2): this
	}

	declare class PathCursor  {
		value: number;
		animations: Animation[];
		constructor(path: Path2): this;
		getPoint(): Vector3;
		moveAhead(step?: number): PathCursor;
		moveBack(step?: number): PathCursor;
		move(step: number): PathCursor;
		onchange(f: (cursor: PathCursor) => void): PathCursor
	}

	declare class Path2  {
		closed: boolean;
		constructor(x: number, y: number): this;
		addLineTo(x: number, y: number): Path2;
		addArcTo(
		midX: number, midY: number, endX: number, endY: number, numberOfSegments?: number
	): Path2;
		close(): Path2;
		length(): number;
		getPoints(): Vector2[];
		getPointAtLengthPosition(normalizedLengthPosition: number): Vector2;
		StartingAt(x: number, y: number): Path2
	}

	declare class Path3D  {
		path: Vector3[];
		constructor(path: Vector3[], firstNormal?: Vector3, raw?: boolean): this;
		getCurve(): Vector3[];
		getTangents(): Vector3[];
		getNormals(): Vector3[];
		getBinormals(): Vector3[];
		getDistances(): number[];
		update(path: Vector3[], firstNormal?: Vector3): Path3D
	}

	declare class Curve3  {
		CreateQuadraticBezier(v0: Vector3, v1: Vector3, v2: Vector3, nbPoints: number): Curve3;
		CreateCubicBezier(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3, nbPoints: number): Curve3;
		CreateHermiteSpline(p1: Vector3, t1: Vector3, p2: Vector3, t2: Vector3, nbPoints: number): Curve3;
		constructor(points: Vector3[]): this;
		getPoints(): Vector3[];
		length(): number;
		continue(curve: Curve3): Curve3
	}

	declare class PositionNormalVertex  {
		position: Vector3;
		normal: Vector3;
		constructor(position?: Vector3, normal?: Vector3): this;
		clone(): PositionNormalVertex
	}

	declare class PositionNormalTextureVertex  {
		position: Vector3;
		normal: Vector3;
		uv: Vector2;
		constructor(position?: Vector3, normal?: Vector3, uv?: Vector2): this;
		clone(): PositionNormalTextureVertex
	}

	declare class Tmp  {
		Vector2: Vector2[];
		Vector3: Vector3[];
		Vector4: Vector4[];
		Quaternion: Quaternion[];
		Matrix: Matrix[]
	}

	declare class EffectFallbacks  {
		addFallback(rank: number, define: string): void;
		addCPUSkinningFallback(rank: number, mesh: BABYLON.AbstractMesh): void;
		isMoreFallbacks: boolean;
		reduce(currentDefines: string): string
	}

	declare class Effect  {
		name: any;
		defines: string;
		onCompiled: (effect: Effect) => void;
		onError: (effect: Effect, errors: string) => void;
		onBind: (effect: Effect) => void;
		_key: string;
		constructor(baseName: any, attributesNames: string[], uniformsNames: string[], samplers: string[], engine: any, defines?: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void): this;
		isReady(): boolean;
		getProgram(): WebGLProgram;
		getAttributesNames(): string[];
		getAttributeLocation(index: number): number;
		getAttributeLocationByName(name: string): number;
		getAttributesCount(): number;
		getUniformIndex(uniformName: string): number;
		getUniform(uniformName: string): WebGLUniformLocation;
		getSamplers(): string[];
		getCompilationError(): string;
		_loadVertexShader(vertex: any, callback: (data: any) => void): void;
		_loadFragmentShader(fragment: any, callback: (data: any) => void): void;
		isSupported: boolean;
		_bindTexture(channel: string, texture: WebGLTexture): void;
		setTexture(channel: string, texture: BaseTexture): void;
		setTextureFromPostProcess(channel: string, postProcess: PostProcess): void;
		_cacheMatrix(uniformName: any, matrix: any): void;
		_cacheFloat2(uniformName: string, x: number, y: number): void;
		_cacheFloat3(uniformName: string, x: number, y: number, z: number): void;
		_cacheFloat4(uniformName: string, x: number, y: number, z: number, w: number): void;
		setArray(uniformName: string, array: number[]): Effect;
		setArray2(uniformName: string, array: number[]): Effect;
		setArray3(uniformName: string, array: number[]): Effect;
		setArray4(uniformName: string, array: number[]): Effect;
		setMatrices(uniformName: string, matrices: Float32Array): Effect;
		setMatrix(uniformName: string, matrix: Matrix): Effect;
		setMatrix3x3(uniformName: string, matrix: Float32Array): Effect;
		setMatrix2x2(uniformname: string, matrix: Float32Array): Effect;
		setFloat(uniformName: string, value: number): Effect;
		setBool(uniformName: string, bool: boolean): Effect;
		setVector2(uniformName: string, vector2: Vector2): Effect;
		setFloat2(uniformName: string, x: number, y: number): Effect;
		setVector3(uniformName: string, vector3: Vector3): Effect;
		setFloat3(uniformName: string, x: number, y: number, z: number): Effect;
		setVector4(uniformName: string, vector4: Vector4): Effect;
		setFloat4(uniformName: string, x: number, y: number, z: number, w: number): Effect;
		setColor3(uniformName: string, color3: Color3): Effect;
		setColor4(uniformName: string, color3: Color3, alpha: number): Effect;
		ShadersStore: {
		
	}
	}

	declare class MaterialDefines  {
		_keys: string[];
		isEqual(other: MaterialDefines): boolean;
		cloneTo(other: MaterialDefines): void;
		reset(): void;
		toString(): string
	}

	declare class Material  {
		name: string;
		TriangleFillMode: number;
		WireFrameFillMode: number;
		PointFillMode: number;
		ClockWiseSideOrientation: number;
		CounterClockWiseSideOrientation: number;
		id: string;
		checkReadyOnEveryCall: boolean;
		checkReadyOnlyOnce: boolean;
		state: string;
		alpha: number;
		backFaceCulling: boolean;
		sideOrientation: number;
		onCompiled: (effect: Effect) => void;
		onError: (effect: Effect, errors: string) => void;
		onDispose: () => void;
		onBind: (material: Material, mesh: Mesh) => void;
		getRenderTargetTextures: () => SmartArray<RenderTargetTexture>;
		alphaMode: number;
		disableDepthWrite: boolean;
		fogEnabled: boolean;
		_effect: Effect;
		_wasPreviouslyReady: boolean;
		pointSize: number;
		zOffset: number;
		wireframe: boolean;
		pointsCloud: boolean;
		fillMode: number;
		constructor(name: string, scene: Scene, doNotAdd?: boolean): this;
		isFrozen: boolean;
		freeze(): void;
		unfreeze(): void;
		isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
		getEffect(): Effect;
		getScene(): Scene;
		needAlphaBlending(): boolean;
		needAlphaTesting(): boolean;
		getAlphaTestTexture(): BaseTexture;
		trackCreation(
		onCompiled: (effect: Effect) => void, onError: (effect: Effect, errors: string) => void
	): void;
		markDirty(): void;
		_preBind(): void;
		bind(world: Matrix, mesh?: Mesh): void;
		bindOnlyWorldMatrix(world: Matrix): void;
		unbind(): void;
		clone(name: string): Material;
		getBindedMeshes(): AbstractMesh[];
		dispose(forceDisposeEffect?: boolean): void;
		copyTo(other: Material): void;
		serialize(): any;
		ParseMultiMaterial(parsedMultiMaterial: any, scene: Scene): MultiMaterial;
		Parse(parsedMaterial: any, scene: Scene, rootUrl: string): any
	}

	declare class MultiMaterial extends Material {
		subMaterials: Material[];
		constructor(name: string, scene: Scene): this;
		getSubMaterial(index: any): Material;
		isReady(mesh?: AbstractMesh): boolean;
		clone(name: string, cloneChildren?: boolean): MultiMaterial;
		serialize(): any
	}

	declare class ShaderMaterial extends Material {
		constructor(name: string, scene: Scene, shaderPath: any, options: any): this;
		needAlphaBlending(): boolean;
		needAlphaTesting(): boolean;
		setTexture(name: string, texture: Texture): ShaderMaterial;
		setFloat(name: string, value: number): ShaderMaterial;
		setFloats(name: string, value: number[]): ShaderMaterial;
		setColor3(name: string, value: Color3): ShaderMaterial;
		setColor4(name: string, value: Color4): ShaderMaterial;
		setVector2(name: string, value: Vector2): ShaderMaterial;
		setVector3(name: string, value: Vector3): ShaderMaterial;
		setVector4(name: string, value: Vector4): ShaderMaterial;
		setMatrix(name: string, value: Matrix): ShaderMaterial;
		setMatrix3x3(name: string, value: Float32Array): ShaderMaterial;
		setMatrix2x2(name: string, value: Float32Array): ShaderMaterial;
		isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
		bindOnlyWorldMatrix(world: Matrix): void;
		bind(world: Matrix, mesh?: Mesh): void;
		clone(name: string): ShaderMaterial;
		dispose(forceDisposeEffect?: boolean): void;
		serialize(): any;
		Parse(source: any, scene: Scene, rootUrl: string): ShaderMaterial
	}

	declare class FresnelParameters  {
		isEnabled: boolean;
		leftColor: Color3;
		rightColor: Color3;
		bias: number;
		power: number;
		clone(): FresnelParameters;
		serialize(): any;
		Parse(parsedFresnelParameters: any): FresnelParameters
	}

	declare class StandardMaterial extends Material {
		diffuseTexture: BaseTexture;
		ambientTexture: BaseTexture;
		opacityTexture: BaseTexture;
		reflectionTexture: BaseTexture;
		emissiveTexture: BaseTexture;
		specularTexture: BaseTexture;
		bumpTexture: BaseTexture;
		lightmapTexture: BaseTexture;
		ambientColor: Color3;
		diffuseColor: Color3;
		specularColor: Color3;
		specularPower: number;
		emissiveColor: Color3;
		useAlphaFromDiffuseTexture: boolean;
		useEmissiveAsIllumination: boolean;
		linkEmissiveWithDiffuse: boolean;
		useReflectionFresnelFromSpecular: boolean;
		useSpecularOverAlpha: boolean;
		disableLighting: boolean;
		roughness: number;
		useLightmapAsShadowmap: boolean;
		diffuseFresnelParameters: FresnelParameters;
		opacityFresnelParameters: FresnelParameters;
		reflectionFresnelParameters: FresnelParameters;
		emissiveFresnelParameters: FresnelParameters;
		useGlossinessFromSpecularMapAlpha: boolean;
		constructor(name: string, scene: Scene): this;
		useLogarithmicDepth: boolean;
		needAlphaBlending(): boolean;
		needAlphaTesting(): boolean;
		getAlphaTestTexture(): BaseTexture;
		PrepareDefinesForLights(scene: Scene, mesh: AbstractMesh, defines: MaterialDefines): boolean;
		BindLights(
		scene: Scene, mesh: AbstractMesh, effect: Effect, defines: MaterialDefines
	): void;
		isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
		unbind(): void;
		bindOnlyWorldMatrix(world: Matrix): void;
		bind(world: Matrix, mesh?: Mesh): void;
		getAnimatables(): IAnimatable[];
		dispose(forceDisposeEffect?: boolean): void;
		clone(name: string): StandardMaterial;
		serialize(): any;
		DiffuseTextureEnabled: boolean;
		AmbientTextureEnabled: boolean;
		OpacityTextureEnabled: boolean;
		ReflectionTextureEnabled: boolean;
		EmissiveTextureEnabled: boolean;
		SpecularTextureEnabled: boolean;
		BumpTextureEnabled: boolean;
		FresnelEnabled: boolean;
		LightmapEnabled: boolean;
		Parse(source: any, scene: Scene, rootUrl: string): StandardMaterial
	}

	declare class AbstractMesh extends Node, IDisposable {
		BILLBOARDMODE_NONE: number;
		BILLBOARDMODE_X: number;
		BILLBOARDMODE_Y: number;
		BILLBOARDMODE_Z: number;
		BILLBOARDMODE_ALL: number;
		definedFacingForward: boolean;
		position: Vector3;
		rotation: Vector3;
		rotationQuaternion: Quaternion;
		scaling: Vector3;
		billboardMode: number;
		visibility: number;
		alphaIndex: number;
		infiniteDistance: boolean;
		isVisible: boolean;
		isPickable: boolean;
		showBoundingBox: boolean;
		showSubMeshesBoundingBox: boolean;
		onDispose: any;
		isBlocker: boolean;
		renderingGroupId: number;
		material: Material;
		receiveShadows: boolean;
		actionManager: ActionManager;
		renderOutline: boolean;
		outlineColor: Color3;
		outlineWidth: number;
		renderOverlay: boolean;
		overlayColor: Color3;
		overlayAlpha: number;
		hasVertexAlpha: boolean;
		useVertexColors: boolean;
		applyFog: boolean;
		computeBonesUsingShaders: boolean;
		scalingDeterminant: number;
		numBoneInfluencers: number;
		useOctreeForRenderingSelection: boolean;
		useOctreeForPicking: boolean;
		useOctreeForCollisions: boolean;
		layerMask: number;
		alwaysSelectAsActiveMesh: boolean;
		_physicImpostor: number;
		_physicsMass: number;
		_physicsFriction: number;
		_physicRestitution: number;
		onPhysicsCollide: (collidedMesh: AbstractMesh, contact: any) => void;
		ellipsoid: Vector3;
		ellipsoidOffset: Vector3;
		onCollide: (collidedMesh: AbstractMesh) => void;
		onCollisionPositionChange: (newPosition: Vector3) => void;
		edgesWidth: number;
		edgesColor: Color4;
		_edgesRenderer: EdgesRenderer;
		_worldMatrix: Matrix;
		_positions: Vector3[];
		_masterMesh: AbstractMesh;
		_materialDefines: MaterialDefines;
		_boundingInfo: BoundingInfo;
		_isDisposed: boolean;
		_renderId: number;
		subMeshes: SubMesh[];
		_submeshesOctree: Octree<SubMesh>;
		_intersectionsInProgress: AbstractMesh[];
		_unIndexed: boolean;
		_poseMatrix: Matrix;
		_waitingActions: any;
		_waitingFreezeWorldMatrix: boolean;
		_bonesTransformMatrices: Float32Array;
		skeleton: Skeleton;
		constructor(name: string, scene: Scene): this;
		updatePoseMatrix(matrix: Matrix): void;
		getPoseMatrix(): Matrix;
		disableEdgesRendering(): void;
		enableEdgesRendering(epsilon?: number, checkVerticesInsteadOfIndices?: boolean): void;
		isBlocked: boolean;
		getLOD(camera: Camera): AbstractMesh;
		getTotalVertices(): number;
		getIndices(): number[] | Int32Array;
		getVerticesData(kind: string): number[] | Float32Array;
		isVerticesDataPresent(kind: string): boolean;
		getBoundingInfo(): BoundingInfo;
		useBones: boolean;
		_preActivate(): void;
		_activate(renderId: number): void;
		getWorldMatrix(): Matrix;
		worldMatrixFromCache: Matrix;
		absolutePosition: Vector3;
		freezeWorldMatrix(): void;
		unfreezeWorldMatrix(): void;
		isWorldMatrixFrozen: boolean;
		rotate(axis: Vector3, amount: number, space?: Space): void;
		translate(axis: Vector3, distance: number, space?: Space): void;
		getAbsolutePosition(): Vector3;
		setAbsolutePosition(absolutePosition: Vector3): void;
		movePOV(amountRight: number, amountUp: number, amountForward: number): void;
		calcMovePOV(amountRight: number, amountUp: number, amountForward: number): Vector3;
		rotatePOV(flipBack: number, twirlClockwise: number, tiltRight: number): void;
		calcRotatePOV(flipBack: number, twirlClockwise: number, tiltRight: number): Vector3;
		setPivotMatrix(matrix: Matrix): void;
		getPivotMatrix(): Matrix;
		_isSynchronized(): boolean;
		_initCache(): void;
		markAsDirty(property: string): void;
		_updateBoundingInfo(): void;
		_updateSubMeshesBoundingInfo(matrix: Matrix): void;
		computeWorldMatrix(force?: boolean): Matrix;
		registerAfterWorldMatrixUpdate(func: (mesh: AbstractMesh) => void): void;
		unregisterAfterWorldMatrixUpdate(func: (mesh: AbstractMesh) => void): void;
		setPositionWithLocalVector(vector3: Vector3): void;
		getPositionExpressedInLocalSpace(): Vector3;
		locallyTranslate(vector3: Vector3): void;
		lookAt(targetPoint: Vector3, yawCor: number, pitchCor: number, rollCor: number): void;
		attachToBone(bone: Bone, affectedMesh: AbstractMesh): void;
		detachFromBone(): void;
		isInFrustum(frustumPlanes: Plane[]): boolean;
		isCompletelyInFrustum(camera?: Camera): boolean;
		intersectsMesh(mesh: AbstractMesh, precise?: boolean): boolean;
		intersectsPoint(point: Vector3): boolean;
		setPhysicsState(impostor?: any, options?: PhysicsBodyCreationOptions): any;
		getPhysicsImpostor(): number;
		getPhysicsMass(): number;
		getPhysicsFriction(): number;
		getPhysicsRestitution(): number;
		getPositionInCameraSpace(camera?: Camera): Vector3;
		getDistanceToCamera(camera?: Camera): number;
		applyImpulse(force: Vector3, contactPoint: Vector3): void;
		setPhysicsLinkWith(otherMesh: Mesh, pivot1: Vector3, pivot2: Vector3, options?: any): void;
		updatePhysicsBodyPosition(): void;
		checkCollisions: boolean;
		moveWithCollisions(velocity: Vector3): void;
		createOrUpdateSubmeshesOctree(maxCapacity?: number, maxDepth?: number): Octree<SubMesh>;
		_collideForSubMesh(subMesh: SubMesh, transformMatrix: Matrix, collider: Collider): void;
		_processCollisionsForSubMeshes(collider: Collider, transformMatrix: Matrix): void;
		_checkCollision(collider: Collider): void;
		_generatePointsArray(): boolean;
		intersects(ray: Ray, fastCheck?: boolean): PickingInfo;
		clone(name: string, newParent: Node, doNotCloneChildren?: boolean): AbstractMesh;
		releaseSubMeshes(): void;
		dispose(doNotRecurse?: boolean): void
	}

	declare class CSG  {
		matrix: Matrix;
		position: Vector3;
		rotation: Vector3;
		rotationQuaternion: Quaternion;
		scaling: Vector3;
		FromMesh(mesh: Mesh): CSG;
		clone(): CSG;
		union(csg: CSG): CSG;
		unionInPlace(csg: CSG): void;
		subtract(csg: CSG): CSG;
		subtractInPlace(csg: CSG): void;
		intersect(csg: CSG): CSG;
		intersectInPlace(csg: CSG): void;
		inverse(): CSG;
		inverseInPlace(): void;
		copyTransformAttributes(csg: CSG): CSG;
		buildMeshGeometry(name: string, scene: Scene, keepSubMeshes: boolean): Mesh;
		toMesh(name: string, material: Material, scene: Scene, keepSubMeshes: boolean): Mesh
	}

	declare class Geometry extends IGetSetVerticesData {
		id: string;
		delayLoadState: number;
		delayLoadingFile: string;
		onGeometryUpdated: (geometry: Geometry, kind?: string) => void;
		_delayInfo: any;
		_boundingInfo: BoundingInfo;
		_delayLoadingFunction: (any: any, geometry: Geometry) => void;
		_softwareSkinningRenderId: number;
		constructor(id: string, scene: Scene, vertexData?: VertexData, updatable?: boolean, mesh?: Mesh): this;
		extend: {
		minimum: Vector3,
		maximum: Vector3
	};
		getScene(): Scene;
		getEngine(): Engine;
		isReady(): boolean;
		setAllVerticesData(vertexData: VertexData, updatable?: boolean): void;
		setVerticesData(
		kind: string, data: number[] | Float32Array, updatable?: boolean, stride?: number
	): void;
		updateVerticesDataDirectly(kind: string, data: Float32Array, offset: number): void;
		updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean): void;
		getTotalVertices(): number;
		getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Float32Array;
		getVertexBuffer(kind: string): VertexBuffer;
		getVertexBuffers(): VertexBuffer[];
		isVerticesDataPresent(kind: string): boolean;
		getVerticesDataKinds(): string[];
		setIndices(indices: number[] | Int32Array, totalVertices?: number): void;
		getTotalIndices(): number;
		getIndices(copyWhenShared?: boolean): number[] | Int32Array;
		getIndexBuffer(): any;
		releaseForMesh(mesh: Mesh, shouldDispose?: boolean): void;
		applyToMesh(mesh: Mesh): void;
		load(scene: Scene, onLoaded?: () => void): void;
		isDisposed(): boolean;
		dispose(): void;
		copy(id: string): Geometry;
		serialize(): any;
		serializeVerticeData(): any;
		ExtractFromMesh(mesh: Mesh, id: string): Geometry;
		RandomId(): string;
		ImportGeometry(parsedGeometry: any, mesh: Mesh): void;
		Parse(parsedVertexData: any, scene: Scene, rootUrl: string): Geometry
	}

	declare class GroundMesh extends Mesh {
		generateOctree: boolean;
		_subdivisions: number;
		_width: number;
		_height: number;
		_minX: number;
		_maxX: number;
		_minZ: number;
		_maxZ: number;
		constructor(name: string, scene: Scene): this;
		subdivisions: number;
		optimize(chunksCount: number, octreeBlocksSize?: number): void;
		getHeightAtCoordinates(x: number, z: number): number;
		getNormalAtCoordinates(x: number, z: number): Vector3;
		getNormalAtCoordinatesToRef(x: number, z: number, ref: Vector3): void
	}

	declare class InstancedMesh extends AbstractMesh {
		constructor(name: string, source: Mesh): this;
		receiveShadows: boolean;
		material: Material;
		visibility: number;
		skeleton: Skeleton;
		renderingGroupId: number;
		getTotalVertices(): number;
		sourceMesh: Mesh;
		getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Float32Array;
		isVerticesDataPresent(kind: string): boolean;
		getIndices(): number[] | Int32Array;
		_positions: Vector3[];
		refreshBoundingInfo(): void;
		_preActivate(): void;
		_activate(renderId: number): void;
		getLOD(camera: Camera): AbstractMesh;
		_syncSubMeshes(): void;
		_generatePointsArray(): boolean;
		clone(name: string, newParent: Node, doNotCloneChildren?: boolean): InstancedMesh;
		dispose(doNotRecurse?: boolean): void
	}

	declare class LinesMesh extends Mesh {
		color: Color3;
		alpha: number;
		constructor(name: string, scene: Scene, parent?: Node, source?: Mesh, doNotCloneChildren?: boolean): this;
		material: Material;
		isPickable: boolean;
		checkCollisions: boolean;
		_bind(subMesh: SubMesh, effect: Effect, fillMode: number): void;
		_draw(subMesh: SubMesh, fillMode: number, instancesCount?: number): void;
		intersects(ray: Ray, fastCheck?: boolean): any;
		dispose(doNotRecurse?: boolean): void;
		clone(name: string, newParent?: Node, doNotCloneChildren?: boolean): LinesMesh
	}

	declare class _InstancesBatch  {
		mustReturn: boolean;
		visibleInstances: InstancedMesh[][];
		renderSelf: boolean[]
	}

	declare class Mesh extends AbstractMesh, IGetSetVerticesData {
		_FRONTSIDE: number;
		_BACKSIDE: number;
		_DOUBLESIDE: number;
		_DEFAULTSIDE: number;
		_NO_CAP: number;
		_CAP_START: number;
		_CAP_END: number;
		_CAP_ALL: number;
		FRONTSIDE: number;
		BACKSIDE: number;
		DOUBLESIDE: number;
		DEFAULTSIDE: number;
		NO_CAP: number;
		CAP_START: number;
		CAP_END: number;
		CAP_ALL: number;
		delayLoadState: number;
		instances: InstancedMesh[];
		delayLoadingFile: string;
		_binaryInfo: any;
		onLODLevelSelection: (distance: number, mesh: Mesh, selectedLevel: Mesh) => void;
		onBeforeDraw: () => void;
		_geometry: Geometry;
		_delayInfo: any;
		_delayLoadingFunction: (any: any, mesh: Mesh) => void;
		_visibleInstances: any;
		_shouldGenerateFlatShading: boolean;
		constructor(name: string, scene: Scene, parent?: Node, source?: Mesh, doNotCloneChildren?: boolean): this;
		hasLODLevels: boolean;
		addLODLevel(distance: number, mesh: Mesh): Mesh;
		getLODLevelAtDistance(distance: number): Mesh;
		removeLODLevel(mesh: Mesh): Mesh;
		getLOD(camera: Camera, boundingSphere?: BoundingSphere): AbstractMesh;
		geometry: Geometry;
		getTotalVertices(): number;
		getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Float32Array;
		getVertexBuffer(kind: any): VertexBuffer;
		isVerticesDataPresent(kind: string): boolean;
		getVerticesDataKinds(): string[];
		getTotalIndices(): number;
		getIndices(copyWhenShared?: boolean): number[] | Int32Array;
		isBlocked: boolean;
		isReady(): boolean;
		isDisposed(): boolean;
		sideOrientation: number;
		areNormalsFrozen: boolean;
		freezeNormals(): void;
		unfreezeNormals(): void;
		_preActivate(): void;
		_registerInstanceForRenderId(instance: InstancedMesh, renderId: number): void;
		refreshBoundingInfo(): void;
		_createGlobalSubMesh(): SubMesh;
		subdivide(count: number): void;
		setVerticesData(
		kind: string, data: number[] | Float32Array, updatable?: boolean, stride?: number
	): void;
		updateVerticesData(
		kind: string, data: number[] | Float32Array, updateExtends?: boolean, makeItUnique?: boolean
	): void;
		updateVerticesDataDirectly(
		kind: string, data: Float32Array, offset?: number, makeItUnique?: boolean
	): void;
		updateMeshPositions(positionFunction: any, computeNormals?: boolean): void;
		makeGeometryUnique(): void;
		setIndices(indices: number[] | Int32Array, totalVertices?: number): void;
		_bind(subMesh: SubMesh, effect: Effect, fillMode: number): void;
		_draw(subMesh: SubMesh, fillMode: number, instancesCount?: number): void;
		registerBeforeRender(func: (mesh: AbstractMesh) => void): void;
		unregisterBeforeRender(func: (mesh: AbstractMesh) => void): void;
		registerAfterRender(func: (mesh: AbstractMesh) => void): void;
		unregisterAfterRender(func: (mesh: AbstractMesh) => void): void;
		_getInstancesRenderList(subMeshId: number): _InstancesBatch;
		_renderWithInstances(
		subMesh: SubMesh, fillMode: number, batch: _InstancesBatch, effect: Effect, engine: Engine
	): void;
		_processRendering(
		subMesh: SubMesh, effect: Effect, fillMode: number, batch: _InstancesBatch, hardwareInstancedRendering: boolean, onBeforeDraw: (isInstance: boolean, world: Matrix) => void
	): void;
		render(subMesh: SubMesh, enableAlphaMode: boolean): void;
		getEmittedParticleSystems(): ParticleSystem[];
		getHierarchyEmittedParticleSystems(): ParticleSystem[];
		getChildren(): Node[];
		_checkDelayState(): void;
		isInFrustum(frustumPlanes: Plane[]): boolean;
		setMaterialByID(id: string): void;
		getAnimatables(): IAnimatable[];
		bakeTransformIntoVertices(transform: Matrix): void;
		bakeCurrentTransformIntoVertices(): void;
		_resetPointsArrayCache(): void;
		_generatePointsArray(): boolean;
		clone(name: string, newParent?: Node, doNotCloneChildren?: boolean): Mesh;
		dispose(doNotRecurse?: boolean): void;
		applyDisplacementMap(
		url: string, minHeight: number, maxHeight: number, onSuccess?: (mesh: Mesh) => void
	): void;
		applyDisplacementMapFromBuffer(
		buffer: Uint8Array, heightMapWidth: number, heightMapHeight: number, minHeight: number, maxHeight: number
	): void;
		convertToFlatShadedMesh(): void;
		convertToUnIndexedMesh(): void;
		flipFaces(flipNormals?: boolean): void;
		createInstance(name: string): InstancedMesh;
		synchronizeInstances(): void;
		simplify(
		settings: Array<ISimplificationSettings>, parallelProcessing?: boolean, simplificationType?: SimplificationType, successCallback?: (mesh?: Mesh, submeshIndex?: number) => void
	): void;
		optimizeIndices(successCallback?: (mesh?: Mesh) => void): void;
		Parse(parsedMesh: any, scene: Scene, rootUrl: string): Mesh;
		CreateRibbon(
		name: string, pathArray: Vector3[][], closeArray: boolean, closePath: boolean, offset: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh
	): Mesh;
		CreateDisc(
		name: string, radius: number, tessellation: number, scene: Scene, updatable?: boolean, sideOrientation?: number
	): Mesh;
		CreateBox(
		name: string, size: number, scene: Scene, updatable?: boolean, sideOrientation?: number
	): Mesh;
		CreateSphere(
		name: string, segments: number, diameter: number, scene?: Scene, updatable?: boolean, sideOrientation?: number
	): Mesh;
		CreateCylinder(
		name: string, height: number, diameterTop: number, diameterBottom: number, tessellation: number, subdivisions: any, scene: Scene, updatable?: any, sideOrientation?: number
	): Mesh;
		CreateTorus(
		name: string, diameter: number, thickness: number, tessellation: number, scene: Scene, updatable?: boolean, sideOrientation?: number
	): Mesh;
		CreateTorusKnot(
		name: string, radius: number, tube: number, radialSegments: number, tubularSegments: number, p: number, q: number, scene: Scene, updatable?: boolean, sideOrientation?: number
	): Mesh;
		CreateLines(
		name: string, points: Vector3[], scene: Scene, updatable?: boolean, instance?: LinesMesh
	): LinesMesh;
		CreateDashedLines(
		name: string, points: Vector3[], dashSize: number, gapSize: number, dashNb: number, scene: Scene, updatable?: boolean, instance?: LinesMesh
	): LinesMesh;
		ExtrudeShape(
		name: string, shape: Vector3[], path: Vector3[], scale: number, rotation: number, cap: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh
	): Mesh;
		ExtrudeShapeCustom(
		name: string, shape: Vector3[], path: Vector3[], scaleFunction: any, rotationFunction: any, ribbonCloseArray: boolean, ribbonClosePath: boolean, cap: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh
	): Mesh;
		CreateLathe(
		name: string, shape: Vector3[], radius: number, tessellation: number, scene: Scene, updatable?: boolean, sideOrientation?: number
	): Mesh;
		CreatePlane(
		name: string, size: number, scene: Scene, updatable?: boolean, sideOrientation?: number
	): Mesh;
		CreateGround(
		name: string, width: number, height: number, subdivisions: number, scene: Scene, updatable?: boolean
	): Mesh;
		CreateTiledGround(
		name: string, xmin: number, zmin: number, xmax: number, zmax: number, subdivisions: {
		w: number,
		h: number
	}, precision: {
		w: number,
		h: number
	}, scene: Scene, updatable?: boolean
	): Mesh;
		CreateGroundFromHeightMap(
		name: string, url: string, width: number, height: number, subdivisions: number, minHeight: number, maxHeight: number, scene: Scene, updatable?: boolean, onReady?: (mesh: GroundMesh) => void
	): GroundMesh;
		CreateTube(
		name: string, path: Vector3[], radius: number, tessellation: number, radiusFunction: {
		(i: number, distance: number): number
	}, cap: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh
	): Mesh;
		CreatePolyhedron(
		name: string, options: {
		type?: number,
		size?: number,
		sizeX?: number,
		sizeY?: number,
		sizeZ?: number,
		custom?: any,
		faceUV?: Vector4[],
		faceColors?: Color4[],
		updatable?: boolean,
		sideOrientation?: number
	}, scene: Scene
	): Mesh;
		CreateIcoSphere(
		name: string, options: {
		radius?: number,
		flat?: boolean,
		subdivisions?: number,
		sideOrientation?: number,
		updatable?: boolean
	}, scene: Scene
	): Mesh;
		CreateDecal(
		name: string, sourceMesh: AbstractMesh, position: Vector3, normal: Vector3, size: Vector3, angle: number
	): Mesh;
		setPositionsForCPUSkinning(): Float32Array;
		setNormalsForCPUSkinning(): Float32Array;
		applySkeleton(skeleton: Skeleton): Mesh;
		MinMax(meshes: AbstractMesh[]): {
		min: Vector3,
		max: Vector3
	};
		Center(meshesOrMinMaxVector: any): Vector3;
		MergeMeshes(
		meshes: Array<Mesh>, disposeSource?: boolean, allow32BitsIndices?: boolean, meshSubclass?: Mesh
	): Mesh
	}

	declare class VertexData  {
		positions: number[] | Float32Array;
		normals: number[] | Float32Array;
		uvs: number[] | Float32Array;
		uvs2: number[] | Float32Array;
		uvs3: number[] | Float32Array;
		uvs4: number[] | Float32Array;
		uvs5: number[] | Float32Array;
		uvs6: number[] | Float32Array;
		colors: number[] | Float32Array;
		matricesIndices: number[] | Float32Array;
		matricesWeights: number[] | Float32Array;
		matricesIndicesExtra: number[] | Float32Array;
		matricesWeightsExtra: number[] | Float32Array;
		indices: number[] | Int32Array;
		set(data: number[] | Float32Array, kind: string): void;
		applyToMesh(mesh: Mesh, updatable?: boolean): void;
		applyToGeometry(geometry: Geometry, updatable?: boolean): void;
		updateMesh(mesh: Mesh, updateExtends?: boolean, makeItUnique?: boolean): void;
		updateGeometry(geometry: Geometry, updateExtends?: boolean, makeItUnique?: boolean): void;
		transform(matrix: Matrix): void;
		merge(other: VertexData): void;
		serialize(): any;
		ExtractFromMesh(mesh: Mesh, copyWhenShared?: boolean): VertexData;
		ExtractFromGeometry(geometry: Geometry, copyWhenShared?: boolean): VertexData;
		CreateRibbon(
		options: {
		pathArray: Vector3[][],
		closeArray?: boolean,
		closePath?: boolean,
		offset?: number,
		sideOrientation?: number
	}
	): VertexData;
		CreateBox(
		options: {
		size?: number,
		width?: number,
		height?: number,
		depth?: number,
		faceUV?: Vector4[],
		faceColors?: Color4[],
		sideOrientation?: number
	}
	): VertexData;
		CreateSphere(
		options: {
		segments?: number,
		diameter?: number,
		diameterX?: number,
		diameterY?: number,
		diameterZ?: number,
		arc?: number,
		slice?: number,
		sideOrientation?: number
	}
	): VertexData;
		CreateCylinder(
		options: {
		height?: number,
		diameterTop?: number,
		diameterBottom?: number,
		diameter?: number,
		tessellation?: number,
		subdivisions?: number,
		arc?: number,
		faceColors?: Color4[],
		faceUV?: Vector4[],
		hasRings?: boolean,
		enclose?: boolean,
		sideOrientation?: number
	}
	): VertexData;
		CreateTorus(
		options: {
		diameter?: number,
		thickness?: number,
		tessellation?: number,
		sideOrientation?: number
	}
	): VertexData;
		CreateLines(options: {
		points: Vector3[]
	}): VertexData;
		CreateDashedLines(
		options: {
		points: Vector3[],
		dashSize?: number,
		gapSize?: number,
		dashNb?: number
	}
	): VertexData;
		CreateGround(
		options: {
		width?: number,
		height?: number,
		subdivisions?: number
	}
	): VertexData;
		CreateTiledGround(
		options: {
		xmin: number,
		zmin: number,
		xmax: number,
		zmax: number,
		subdivisions?: {
		w: number,
		h: number
	},
		precision?: {
		w: number,
		h: number
	}
	}
	): VertexData;
		CreateGroundFromHeightMap(
		options: {
		width: number,
		height: number,
		subdivisions: number,
		minHeight: number,
		maxHeight: number,
		buffer: Uint8Array,
		bufferWidth: number,
		bufferHeight: number
	}
	): VertexData;
		CreatePlane(
		options: {
		size?: number,
		width?: number,
		height?: number,
		sideOrientation?: number
	}
	): VertexData;
		CreateDisc(
		options: {
		radius?: number,
		tessellation?: number,
		arc?: number,
		sideOrientation?: number
	}
	): VertexData;
		CreateIcoSphere(
		options: {
		radius?: number,
		radiusX?: number,
		radiusY?: number,
		radiusZ?: number,
		flat?: boolean,
		subdivisions?: number,
		sideOrientation?: number
	}
	): VertexData;
		CreatePolyhedron(
		options: {
		type?: number,
		size?: number,
		sizeX?: number,
		sizeY?: number,
		sizeZ?: number,
		custom?: any,
		faceUV?: Vector4[],
		faceColors?: Color4[],
		flat?: boolean,
		sideOrientation?: number
	}
	): VertexData;
		CreateTorusKnot(
		options: {
		radius?: number,
		tube?: number,
		radialSegments?: number,
		tubularSegments?: number,
		p?: number,
		q?: number,
		sideOrientation?: number
	}
	): VertexData;
		ComputeNormals(positions: any, indices: any, normals: any): void;
		ImportVertexData(parsedVertexData: any, geometry: Geometry): void
	}

	declare class MeshBuilder  {
		CreateBox(
		name: string, options: {
		width?: number,
		height?: number,
		depth?: number,
		faceUV?: Vector4[],
		faceColors?: Color4[],
		sideOrientation?: number,
		updatable?: boolean
	}, scene: Scene
	): Mesh;
		CreateSphere(
		name: string, options: {
		segments?: number,
		diameter?: number,
		diameterX?: number,
		diameterY?: number,
		diameterZ?: number,
		arc?: number,
		slice?: number,
		sideOrientation?: number,
		updatable?: boolean
	}, scene: any
	): Mesh;
		CreateDisc(
		name: string, options: {
		radius?: number,
		tessellation?: number,
		arc?: number,
		updatable?: boolean,
		sideOrientation?: number
	}, scene: Scene
	): Mesh;
		CreateIcoSphere(
		name: string, options: {
		radius?: number,
		radiusX?: number,
		radiusY?: number,
		radiusZ?: number,
		flat?: boolean,
		subdivisions?: number,
		sideOrientation?: number,
		updatable?: boolean
	}, scene: Scene
	): Mesh;
		CreateRibbon(
		name: string, options: {
		pathArray: Vector3[][],
		closeArray?: boolean,
		closePath?: boolean,
		offset?: number,
		updatable?: boolean,
		sideOrientation?: number,
		instance?: Mesh
	}, scene?: Scene
	): Mesh;
		CreateCylinder(
		name: string, options: {
		height?: number,
		diameterTop?: number,
		diameterBottom?: number,
		diameter?: number,
		tessellation?: number,
		subdivisions?: number,
		arc?: number,
		faceColors?: Color4[],
		faceUV?: Vector4[],
		updatable?: boolean,
		hasRings?: boolean,
		enclose?: boolean,
		sideOrientation?: number
	}, scene: any
	): Mesh;
		CreateTorus(
		name: string, options: {
		diameter?: number,
		thickness?: number,
		tessellation?: number,
		updatable?: boolean,
		sideOrientation?: number
	}, scene: any
	): Mesh;
		CreateTorusKnot(
		name: string, options: {
		radius?: number,
		tube?: number,
		radialSegments?: number,
		tubularSegments?: number,
		p?: number,
		q?: number,
		updatable?: boolean,
		sideOrientation?: number
	}, scene: any
	): Mesh;
		CreateLines(
		name: string, options: {
		points: Vector3[],
		updatable?: boolean,
		instance?: LinesMesh
	}, scene: Scene
	): LinesMesh;
		CreateDashedLines(
		name: string, options: {
		points: Vector3[],
		dashSize?: number,
		gapSize?: number,
		dashNb?: number,
		updatable?: boolean,
		instance?: LinesMesh
	}, scene: Scene
	): LinesMesh;
		ExtrudeShape(
		name: string, options: {
		shape: Vector3[],
		path: Vector3[],
		scale?: number,
		rotation?: number,
		cap?: number,
		updatable?: boolean,
		sideOrientation?: number,
		instance?: Mesh
	}, scene: Scene
	): Mesh;
		ExtrudeShapeCustom(
		name: string, options: {
		shape: Vector3[],
		path: Vector3[],
		scaleFunction?: any,
		rotationFunction?: any,
		ribbonCloseArray?: boolean,
		ribbonClosePath?: boolean,
		cap?: number,
		updatable?: boolean,
		sideOrientation?: number,
		instance?: Mesh
	}, scene: Scene
	): Mesh;
		CreateLathe(
		name: string, options: {
		shape: Vector3[],
		radius?: number,
		tessellation?: number,
		arc?: number,
		closed?: boolean,
		updatable?: boolean,
		sideOrientation?: number,
		cap?: number
	}, scene: Scene
	): Mesh;
		CreatePlane(
		name: string, options: {
		size?: number,
		width?: number,
		height?: number,
		sideOrientation?: number,
		updatable?: boolean,
		sourcePlane?: Plane
	}, scene: Scene
	): Mesh;
		CreateGround(
		name: string, options: {
		width?: number,
		height?: number,
		subdivisions?: number,
		updatable?: boolean
	}, scene: any
	): Mesh;
		CreateTiledGround(
		name: string, options: {
		xmin: number,
		zmin: number,
		xmax: number,
		zmax: number,
		subdivisions?: {
		w: number,
		h: number
	},
		precision?: {
		w: number,
		h: number
	},
		updatable?: boolean
	}, scene: Scene
	): Mesh;
		CreateGroundFromHeightMap(
		name: string, url: string, options: {
		width?: number,
		height?: number,
		subdivisions?: number,
		minHeight?: number,
		maxHeight?: number,
		updatable?: boolean,
		onReady?: (mesh: GroundMesh) => void
	}, scene: Scene
	): GroundMesh;
		CreateTube(
		name: string, options: {
		path: Vector3[],
		radius?: number,
		tessellation?: number,
		radiusFunction?: {
		(i: number, distance: number): number
	},
		cap?: number,
		arc?: number,
		updatable?: boolean,
		sideOrientation?: number,
		instance?: Mesh
	}, scene: Scene
	): Mesh;
		CreatePolyhedron(
		name: string, options: {
		type?: number,
		size?: number,
		sizeX?: number,
		sizeY?: number,
		sizeZ?: number,
		custom?: any,
		faceUV?: Vector4[],
		faceColors?: Color4[],
		flat?: boolean,
		updatable?: boolean,
		sideOrientation?: number
	}, scene: Scene
	): Mesh;
		CreateDecal(
		name: string, sourceMesh: AbstractMesh, options: {
		position?: Vector3,
		normal?: Vector3,
		size?: Vector3,
		angle?: number
	}
	): Mesh
	}

	declare class SimplificationSettings extends ISimplificationSettings {
		quality: number;
		distance: number;
		optimizeMesh: boolean;
		constructor(quality: number, distance: number, optimizeMesh?: boolean): this
	}

	declare class SimplificationQueue  {
		running: any;
		constructor(): this;
		addTask(task: ISimplificationTask): void;
		executeNext(): void;
		runSimplification(task: ISimplificationTask): void
	}

	declare class DecimationTriangle  {
		vertices: Array<DecimationVertex>;
		normal: Vector3;
		error: Array<number>;
		deleted: boolean;
		isDirty: boolean;
		borderFactor: number;
		deletePending: boolean;
		originalOffset: number;
		constructor(vertices: Array<DecimationVertex>): this
	}

	declare class DecimationVertex  {
		position: Vector3;
		id: any;
		q: QuadraticMatrix;
		isBorder: boolean;
		triangleStart: number;
		triangleCount: number;
		originalOffsets: Array<number>;
		constructor(position: Vector3, id: any): this;
		updatePosition(newPosition: Vector3): void
	}

	declare class QuadraticMatrix  {
		data: Array<number>;
		constructor(data?: Array<number>): this;
		det(
		a11: any, a12: any, a13: any, a21: any, a22: any, a23: any, a31: any, a32: any, a33: any
	): number;
		addInPlace(matrix: QuadraticMatrix): void;
		addArrayInPlace(data: Array<number>): void;
		add(matrix: QuadraticMatrix): QuadraticMatrix;
		FromData(a: number, b: number, c: number, d: number): QuadraticMatrix;
		DataFromNumbers(a: number, b: number, c: number, d: number): number[]
	}

	declare class Reference  {
		vertexId: number;
		triangleId: number;
		constructor(vertexId: number, triangleId: number): this
	}

	declare class QuadraticErrorSimplification extends ISimplifier {
		syncIterations: number;
		aggressiveness: number;
		decimationIterations: number;
		boundingBoxEpsilon: number;
		constructor(_mesh: Mesh): this;
		simplify(
		settings: ISimplificationSettings, successCallback: (simplifiedMesh: Mesh) => void
	): void
	}

	declare class Polygon  {
		Rectangle(xmin: number, ymin: number, xmax: number, ymax: number): Vector2[];
		Circle(radius: number, cx?: number, cy?: number, numberOfSides?: number): Vector2[];
		Parse(input: string): Vector2[];
		StartingAt(x: number, y: number): Path2
	}

	declare class PolygonMeshBuilder  {
		constructor(name: string, contours: Path2, scene: Scene): this;
		constructor(name: string, contours: Vector2[], scene: Scene): this;
		addHole(hole: Vector2[]): PolygonMeshBuilder;
		build(updatable?: boolean, depth?: number): Mesh
	}

	declare class SubMesh  {
		materialIndex: number;
		verticesStart: number;
		verticesCount: number;
		indexStart: any;
		indexCount: number;
		linesIndexCount: number;
		_lastColliderWorldVertices: Vector3[];
		_trianglePlanes: Plane[];
		_lastColliderTransformMatrix: Matrix;
		_renderId: number;
		_alphaIndex: number;
		_distanceToCamera: number;
		_id: number;
		constructor(materialIndex: number, verticesStart: number, verticesCount: number, indexStart: any, indexCount: number, mesh: AbstractMesh, renderingMesh?: Mesh, createBoundingBox?: boolean): this;
		IsGlobal: boolean;
		getBoundingInfo(): BoundingInfo;
		getMesh(): AbstractMesh;
		getRenderingMesh(): Mesh;
		getMaterial(): Material;
		refreshBoundingInfo(): void;
		_checkCollision(collider: Collider): boolean;
		updateBoundingInfo(world: Matrix): void;
		isInFrustum(frustumPlanes: Plane[]): boolean;
		render(enableAlphaMode: boolean): void;
		getLinesIndexBuffer(indices: number[] | Int32Array, engine: any): WebGLBuffer;
		canIntersects(ray: Ray): boolean;
		intersects(
		ray: Ray, positions: Vector3[], indices: number[] | Int32Array, fastCheck?: boolean
	): IntersectionInfo;
		clone(newMesh: AbstractMesh, newRenderingMesh?: Mesh): SubMesh;
		dispose(): void;
		CreateFromIndices(
		materialIndex: number, startIndex: number, indexCount: number, mesh: AbstractMesh, renderingMesh?: Mesh
	): SubMesh
	}

	declare class VertexBuffer  {
		constructor(engine: any, data: number[] | Float32Array, kind: string, updatable: boolean, postponeInternalCreation?: boolean, stride?: number): this;
		isUpdatable(): boolean;
		getData(): number[] | Float32Array;
		getBuffer(): WebGLBuffer;
		getStrideSize(): number;
		create(data?: number[] | Float32Array): void;
		update(data: number[] | Float32Array): void;
		updateDirectly(data: Float32Array, offset: number): void;
		dispose(): void;
		PositionKind: string;
		NormalKind: string;
		UVKind: string;
		UV2Kind: string;
		UV3Kind: string;
		UV4Kind: string;
		UV5Kind: string;
		UV6Kind: string;
		ColorKind: string;
		MatricesIndicesKind: string;
		MatricesWeightsKind: string;
		MatricesIndicesExtraKind: string;
		MatricesWeightsExtraKind: string
	}

	declare class Particle  {
		position: Vector3;
		direction: Vector3;
		color: Color4;
		colorStep: Color4;
		lifeTime: number;
		age: number;
		size: number;
		angle: number;
		angularSpeed: number;
		copyTo(other: Particle): void
	}

	declare class ParticleSystem extends IDisposable {
		name: string;
		BLENDMODE_ONEONE: number;
		BLENDMODE_STANDARD: number;
		id: string;
		renderingGroupId: number;
		emitter: any;
		emitRate: number;
		manualEmitCount: number;
		updateSpeed: number;
		targetStopDuration: number;
		disposeOnStop: boolean;
		minEmitPower: number;
		maxEmitPower: number;
		minLifeTime: number;
		maxLifeTime: number;
		minSize: number;
		maxSize: number;
		minAngularSpeed: number;
		maxAngularSpeed: number;
		particleTexture: Texture;
		layerMask: number;
		onDispose: () => void;
		updateFunction: (particles: Particle[]) => void;
		blendMode: number;
		forceDepthWrite: boolean;
		gravity: Vector3;
		direction1: Vector3;
		direction2: Vector3;
		minEmitBox: Vector3;
		maxEmitBox: Vector3;
		color1: Color4;
		color2: Color4;
		colorDead: Color4;
		textureMask: Color4;
		startDirectionFunction: (
		emitPower: number, worldMatrix: Matrix, directionToUpdate: Vector3, particle: Particle
	) => void;
		startPositionFunction: (worldMatrix: Matrix, positionToUpdate: Vector3, particle: Particle) => void;
		constructor(name: string, capacity: number, scene: Scene, customEffect?: Effect): this;
		recycleParticle(particle: Particle): void;
		getCapacity(): number;
		isAlive(): boolean;
		isStarted(): boolean;
		start(): void;
		stop(): void;
		_appendParticleVertex(index: number, particle: Particle, offsetX: number, offsetY: number): void;
		animate(): void;
		render(): number;
		dispose(): void;
		clone(name: string, newEmitter: any): ParticleSystem;
		serialize(): any;
		Parse(parsedParticleSystem: any, scene: Scene, rootUrl: string): ParticleSystem
	}

	declare class SolidParticle  {
		idx: number;
		color: Color4;
		position: Vector3;
		rotation: Vector3;
		quaternion: Vector4;
		scale: Vector3;
		uvs: Vector4;
		velocity: Vector3;
		alive: boolean;
		_pos: number;
		_model: ModelShape;
		shapeId: number;
		idxInShape: number;
		constructor(particleIndex: number, positionIndex: number, model: ModelShape, shapeId: number, idxInShape: number): this
	}

	declare class ModelShape  {
		shapeID: number;
		_shape: Vector3[];
		_shapeUV: number[];
		_positionFunction: (particle: SolidParticle, i: number, s: number) => void;
		_vertexFunction: (particle: SolidParticle, vertex: Vector3, i: number) => void;
		constructor(id: number, shape: Vector3[], shapeUV: number[], posFunction: (particle: SolidParticle, i: number, s: number) => void, vtxFunction: (particle: SolidParticle, vertex: Vector3, i: number) => void): this
	}

	declare class SolidParticleSystem extends IDisposable {
		particles: SolidParticle[];
		nbParticles: number;
		billboard: boolean;
		counter: number;
		name: string;
		mesh: Mesh;
		vars: any;
		pickedParticles: {
		idx: number,
		faceId: number
	}[];
		constructor(name: string, scene: Scene, options?: {
		updatable?: boolean,
		isPickable?: boolean
	}): this;
		buildMesh(): Mesh;
		addShape(
		mesh: Mesh, nb: number, options?: {
		positionFunction?: any,
		vertexFunction?: any
	}
	): number;
		rebuildMesh(): void;
		setParticles(start?: number, end?: number, update?: boolean): void;
		dispose(): void;
		refreshVisibleSize(): void;
		setVisibilityBox(size: number): void;
		isAlwaysVisible: boolean;
		isVisibilityBoxLocked: boolean;
		computeParticleRotation: boolean;
		computeParticleColor: boolean;
		computeParticleTexture: boolean;
		computeParticleVertex: boolean;
		initParticles(): void;
		recycleParticle(particle: SolidParticle): SolidParticle;
		updateParticle(particle: SolidParticle): SolidParticle;
		updateParticleVertex(particle: SolidParticle, vertex: Vector3, pt: number): Vector3;
		beforeUpdateParticles(start?: number, stop?: number, update?: boolean): void;
		afterUpdateParticles(start?: number, stop?: number, update?: boolean): void
	}

	declare class PhysicsEngine  {
		gravity: Vector3;
		constructor(plugin?: IPhysicsEnginePlugin): this;
		_initialize(gravity?: Vector3): void;
		_runOneStep(delta: number): void;
		_setGravity(gravity: Vector3): void;
		_getGravity(): Vector3;
		_registerMesh(mesh: AbstractMesh, impostor: number, options: PhysicsBodyCreationOptions): any;
		_registerMeshesAsCompound(parts: PhysicsCompoundBodyPart[], options: PhysicsBodyCreationOptions): any;
		_unregisterMesh(mesh: AbstractMesh): void;
		_applyImpulse(mesh: AbstractMesh, force: Vector3, contactPoint: Vector3): void;
		_createLink(
		mesh1: AbstractMesh, mesh2: AbstractMesh, pivot1: Vector3, pivot2: Vector3, options?: any
	): boolean;
		_updateBodyPosition(mesh: AbstractMesh): void;
		dispose(): void;
		isSupported(): boolean;
		getPhysicsBodyOfMesh(mesh: AbstractMesh): any;
		getPhysicsPluginName(): string;
		NoImpostor: number;
		SphereImpostor: number;
		BoxImpostor: number;
		PlaneImpostor: number;
		MeshImpostor: number;
		CapsuleImpostor: number;
		ConeImpostor: number;
		CylinderImpostor: number;
		ConvexHullImpostor: number;
		HeightmapImpostor: number;
		Epsilon: number
	}

	declare class AnaglyphPostProcess extends PostProcess {
		constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this
	}

	declare class BlackAndWhitePostProcess extends PostProcess {
		constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this
	}

	declare class BlurPostProcess extends PostProcess {
		direction: Vector2;
		blurWidth: number;
		constructor(name: string, direction: Vector2, blurWidth: number, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this
	}

	declare class ColorCorrectionPostProcess extends PostProcess {
		constructor(name: string, colorTableUrl: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this
	}

	declare class ConvolutionPostProcess extends PostProcess {
		kernel: number[];
		constructor(name: string, kernel: number[], ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this;
		EdgeDetect0Kernel: number[];
		EdgeDetect1Kernel: number[];
		EdgeDetect2Kernel: number[];
		SharpenKernel: number[];
		EmbossKernel: number[];
		GaussianKernel: number[]
	}

	declare class DisplayPassPostProcess extends PostProcess {
		constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this
	}

	declare class FilterPostProcess extends PostProcess {
		kernelMatrix: Matrix;
		constructor(name: string, kernelMatrix: Matrix, ratio: number, camera?: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this
	}

	declare class FxaaPostProcess extends PostProcess {
		texelWidth: number;
		texelHeight: number;
		constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this
	}

	declare class HDRRenderingPipeline extends PostProcessRenderPipeline, IDisposable {
		gaussCoeff: number;
		gaussMean: number;
		gaussStandDev: number;
		gaussMultiplier: number;
		exposure: number;
		minimumLuminance: number;
		maximumLuminance: number;
		luminanceIncreaserate: number;
		luminanceDecreaseRate: number;
		brightThreshold: number;
		LUM_STEPS: number;
		constructor(name: string, scene: Scene, ratio: number, originalPostProcess?: PostProcess, cameras?: Camera[]): this;
		update(): void;
		getCurrentLuminance(): number;
		getOutputLuminance(): number;
		dispose(): void
	}

	declare class LensRenderingPipeline extends PostProcessRenderPipeline {
		LensChromaticAberrationEffect: string;
		HighlightsEnhancingEffect: string;
		LensDepthOfFieldEffect: string;
		constructor(name: string, parameters: any, scene: Scene, ratio?: number, cameras?: Camera[]): this;
		setEdgeBlur(amount: number): void;
		disableEdgeBlur(): void;
		setGrainAmount(amount: number): void;
		disableGrain(): void;
		setChromaticAberration(amount: number): void;
		disableChromaticAberration(): void;
		setEdgeDistortion(amount: number): void;
		disableEdgeDistortion(): void;
		setFocusDistance(amount: number): void;
		disableDepthOfField(): void;
		setAperture(amount: number): void;
		setDarkenOutOfFocus(amount: number): void;
		enablePentagonBokeh(): void;
		disablePentagonBokeh(): void;
		enableNoiseBlur(): void;
		disableNoiseBlur(): void;
		setHighlightsGain(amount: number): void;
		setHighlightsThreshold(amount: number): void;
		disableHighlights(): void;
		dispose(disableDepthRender?: boolean): void
	}

	declare class PassPostProcess extends PostProcess {
		constructor(name: string, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this
	}

	declare class PostProcess  {
		name: string;
		onApply: (effect: Effect) => void;
		onBeforeRender: (effect: Effect) => void;
		onAfterRender: (effect: Effect) => void;
		onSizeChanged: () => void;
		onActivate: (camera: Camera) => void;
		width: number;
		height: number;
		renderTargetSamplingMode: number;
		clearColor: Color4;
		_textures: SmartArray<WebGLTexture>;
		_currentRenderTextureInd: number;
		constructor(name: string, fragmentUrl: string, parameters: string[], samplers: string[], ratio: number | any, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean, defines?: string, textureType?: number): this;
		updateEffect(defines?: string): void;
		isReusable(): boolean;
		activate(camera: Camera, sourceTexture?: WebGLTexture): void;
		isSupported: boolean;
		apply(): Effect;
		dispose(camera?: Camera): void
	}

	declare class PostProcessManager  {
		constructor(scene: Scene): this;
		_prepareFrame(sourceTexture?: WebGLTexture): boolean;
		directRender(postProcesses: PostProcess[], targetTexture?: WebGLTexture): void;
		_finalizeFrame(
		doNotPresent?: boolean, targetTexture?: WebGLTexture, faceIndex?: number, postProcesses?: PostProcess[]
	): void;
		dispose(): void
	}

	declare class RefractionPostProcess extends PostProcess {
		color: Color3;
		depth: number;
		colorLevel: number;
		constructor(name: string, refractionTextureUrl: string, color: Color3, depth: number, colorLevel: number, ratio: number, camera: Camera, samplingMode?: number, engine?: Engine, reusable?: boolean): this;
		dispose(camera: Camera): void
	}

	declare class SSAORenderingPipeline extends PostProcessRenderPipeline {
		SSAOOriginalSceneColorEffect: string;
		SSAORenderEffect: string;
		SSAOBlurHRenderEffect: string;
		SSAOBlurVRenderEffect: string;
		SSAOCombineRenderEffect: string;
		totalStrength: number;
		radius: number;
		area: number;
		fallOff: number;
		base: number;
		constructor(name: string, scene: Scene, ratio: any, cameras?: Camera[]): this;
		getBlurHPostProcess(): BlurPostProcess;
		getBlurVPostProcess(): BlurPostProcess;
		dispose(disableDepthRender?: boolean): void
	}

	declare class StereoscopicInterlacePostProcess extends PostProcess {
		constructor(name: string, camB: Camera, postProcessA: PostProcess, isStereoscopicHoriz: boolean, samplingMode?: number): this
	}

	declare class TonemapPostProcess extends PostProcess {
		constructor(name: string, operator: TonemappingOperator, exposureAdjustment: number, camera: Camera, samplingMode?: number, engine?: Engine, textureFormat?: number): this
	}

	declare class VolumetricLightScatteringPostProcess extends PostProcess {
		useCustomMeshPosition: boolean;
		invert: boolean;
		mesh: Mesh;
		useDiffuseColor: boolean;
		excludedMeshes: AbstractMesh[];
		exposure: number;
		decay: number;
		weight: number;
		density: number;
		constructor(name: string, ratio: any, camera: Camera, mesh?: Mesh, samples?: number, samplingMode?: number, engine?: Engine, reusable?: boolean, scene?: Scene): this;
		isReady(subMesh: SubMesh, useInstances: boolean): boolean;
		setCustomMeshPosition(position: Vector3): void;
		getCustomMeshPosition(): Vector3;
		dispose(camera: Camera): void;
		getPass(): RenderTargetTexture;
		CreateDefaultMesh(name: string, scene: Scene): Mesh
	}

	declare class VRDistortionCorrectionPostProcess extends PostProcess {
		aspectRatio: number;
		constructor(name: string, camera: Camera, isRightEye: boolean, vrMetrics: VRCameraMetrics): this
	}

	declare class ReflectionProbe  {
		name: string;
		position: Vector3;
		constructor(name: string, size: number, scene: Scene, generateMipMaps?: boolean): this;
		refreshRate: number;
		getScene(): Scene;
		cubeTexture: RenderTargetTexture;
		renderList: AbstractMesh[];
		attachToMesh(mesh: AbstractMesh): void;
		dispose(): void
	}

	declare class BoundingBoxRenderer  {
		frontColor: Color3;
		backColor: Color3;
		showBackLines: boolean;
		renderList: SmartArray<BoundingBox>;
		constructor(scene: Scene): this;
		reset(): void;
		render(): void;
		dispose(): void
	}

	declare class DepthRenderer  {
		constructor(scene: Scene, type?: number): this;
		isReady(subMesh: SubMesh, useInstances: boolean): boolean;
		getDepthMap(): RenderTargetTexture;
		dispose(): void
	}

	declare class EdgesRenderer  {
		edgesWidthScalerForOrthographic: number;
		edgesWidthScalerForPerspective: number;
		constructor(source: AbstractMesh, epsilon?: number, checkVerticesInsteadOfIndices?: boolean): this;
		dispose(): void;
		_generateEdgesLines(): void;
		render(): void
	}

	declare class OutlineRenderer  {
		constructor(scene: Scene): this;
		render(subMesh: SubMesh, batch: _InstancesBatch, useOverlay?: boolean): void;
		isReady(subMesh: SubMesh, useInstances: boolean): boolean
	}

	declare class RenderingGroup  {
		index: number;
		onBeforeTransparentRendering: () => void;
		constructor(index: number, scene: Scene): this;
		render(
		customRenderFunction: (
		opaqueSubMeshes: SmartArray<SubMesh>, transparentSubMeshes: SmartArray<SubMesh>, alphaTestSubMeshes: SmartArray<SubMesh>
	) => void
	): boolean;
		prepare(): void;
		dispatch(subMesh: SubMesh): void
	}

	declare class RenderingManager  {
		MAX_RENDERINGGROUPS: number;
		constructor(scene: Scene): this;
		render(
		customRenderFunction: (
		opaqueSubMeshes: SmartArray<SubMesh>, transparentSubMeshes: SmartArray<SubMesh>, alphaTestSubMeshes: SmartArray<SubMesh>
	) => void, activeMeshes: AbstractMesh[], renderParticles: boolean, renderSprites: boolean
	): void;
		reset(): void;
		dispatch(subMesh: SubMesh): void
	}

	declare class Sprite  {
		name: string;
		position: Vector3;
		color: Color4;
		width: number;
		height: number;
		angle: number;
		cellIndex: number;
		invertU: number;
		invertV: number;
		disposeWhenFinishedAnimating: boolean;
		animations: Animation[];
		isPickable: boolean;
		actionManager: ActionManager;
		size: number;
		constructor(name: string, manager: SpriteManager): this;
		playAnimation(from: number, to: number, loop: boolean, delay: number): void;
		stopAnimation(): void;
		_animate(deltaTime: number): void;
		dispose(): void
	}

	declare class SpriteManager  {
		name: string;
		cellSize: number;
		sprites: Sprite[];
		renderingGroupId: number;
		layerMask: number;
		onDispose: () => void;
		fogEnabled: boolean;
		isPickable: boolean;
		constructor(name: string, imgUrl: string, capacity: number, cellSize: number, scene: Scene, epsilon?: number, samplingMode?: number): this;
		intersects(
		ray: Ray, camera: Camera, predicate?: (sprite: Sprite) => boolean, fastCheck?: boolean
	): PickingInfo;
		render(): void;
		dispose(): void
	}

	declare class MeshAssetTask extends IAssetTask {
		name: string;
		meshesNames: any;
		rootUrl: string;
		sceneFilename: string;
		loadedMeshes: Array<AbstractMesh>;
		loadedParticleSystems: Array<ParticleSystem>;
		loadedSkeletons: Array<Skeleton>;
		onSuccess: (task: IAssetTask) => void;
		onError: (task: IAssetTask) => void;
		isCompleted: boolean;
		constructor(name: string, meshesNames: any, rootUrl: string, sceneFilename: string): this;
		run(scene: Scene, onSuccess: () => void, onError: () => void): void
	}

	declare class TextFileAssetTask extends IAssetTask {
		name: string;
		url: string;
		onSuccess: (task: IAssetTask) => void;
		onError: (task: IAssetTask) => void;
		isCompleted: boolean;
		text: string;
		constructor(name: string, url: string): this;
		run(scene: Scene, onSuccess: () => void, onError: () => void): void
	}

	declare class BinaryFileAssetTask extends IAssetTask {
		name: string;
		url: string;
		onSuccess: (task: IAssetTask) => void;
		onError: (task: IAssetTask) => void;
		isCompleted: boolean;
		data: ArrayBuffer;
		constructor(name: string, url: string): this;
		run(scene: Scene, onSuccess: () => void, onError: () => void): void
	}

	declare class ImageAssetTask extends IAssetTask {
		name: string;
		url: string;
		onSuccess: (task: IAssetTask) => void;
		onError: (task: IAssetTask) => void;
		isCompleted: boolean;
		image: HTMLImageElement;
		constructor(name: string, url: string): this;
		run(scene: Scene, onSuccess: () => void, onError: () => void): void
	}

	declare class TextureAssetTask extends IAssetTask {
		name: string;
		url: string;
		noMipmap: boolean;
		invertY: boolean;
		samplingMode: number;
		onSuccess: (task: IAssetTask) => void;
		onError: (task: IAssetTask) => void;
		isCompleted: boolean;
		texture: Texture;
		constructor(name: string, url: string, noMipmap?: boolean, invertY?: boolean, samplingMode?: number): this;
		run(scene: Scene, onSuccess: () => void, onError: () => void): void
	}

	declare class AssetsManager  {
		onFinish: (tasks: IAssetTask[]) => void;
		onTaskSuccess: (task: IAssetTask) => void;
		onTaskError: (task: IAssetTask) => void;
		useDefaultLoadingScreen: boolean;
		constructor(scene: Scene): this;
		addMeshTask(
		taskName: string, meshesNames: any, rootUrl: string, sceneFilename: string
	): IAssetTask;
		addTextFileTask(taskName: string, url: string): IAssetTask;
		addBinaryFileTask(taskName: string, url: string): IAssetTask;
		addImageTask(taskName: string, url: string): IAssetTask;
		addTextureTask(
		taskName: string, url: string, noMipmap?: boolean, invertY?: boolean, samplingMode?: number
	): IAssetTask;
		reset(): AssetsManager;
		load(): AssetsManager
	}

	declare class Database  {
		IsUASupportingBlobStorage: boolean;
		IDBStorageEnabled: boolean;
		constructor(urlToScene: string, callbackManifestChecked: (checked: boolean) => any): this;
		parseURL: (url: string) => string;
		ReturnFullUrlLocation: (url: string) => string;
		checkManifestFile(): void;
		openAsync(successCallback: any, errorCallback: any): void;
		loadImageFromDB(url: string, image: HTMLImageElement): void
	}

	declare class FilesInput  {
		FilesTextures: any[];
		FilesToLoad: any[];
		constructor(p_engine: Engine, p_scene: Scene, p_canvas: HTMLCanvasElement, p_sceneLoadedCallback: any, p_progressCallback: any, p_additionnalRenderLoopLogicCallback: any, p_textureLoadingCallback: any, p_startingProcessingFilesCallback: any): this;
		monitorElementForDragNDrop(p_elementToMonitor: HTMLElement): void;
		loadFiles(event: any): void;
		reload(): void
	}

	declare class Gamepads  {
		constructor(ongamedpadconnected: (gamepad: Gamepad) => void): this;
		dispose(): void
	}

	declare class StickValues  {
		x: any;
		y: any;
		constructor(x: any, y: any): this
	}

	declare class Gamepad  {
		id: string;
		index: number;
		browserGamepad: any;
		constructor(id: string, index: number, browserGamepad: any): this;
		onleftstickchanged(callback: (values: StickValues) => void): void;
		onrightstickchanged(callback: (values: StickValues) => void): void;
		leftStick: StickValues;
		rightStick: StickValues;
		update(): void
	}

	declare class GenericPad extends Gamepad {
		id: string;
		index: number;
		gamepad: any;
		onbuttondown(callback: (buttonPressed: number) => void): void;
		onbuttonup(callback: (buttonReleased: number) => void): void;
		constructor(id: string, index: number, gamepad: any): this;
		update(): void
	}

	declare class Xbox360Pad extends Gamepad {
		onlefttriggerchanged(callback: (value: number) => void): void;
		onrighttriggerchanged(callback: (value: number) => void): void;
		leftTrigger: number;
		rightTrigger: number;
		onbuttondown(callback: (buttonPressed: Xbox360Button) => void): void;
		onbuttonup(callback: (buttonReleased: Xbox360Button) => void): void;
		ondpaddown(callback: (dPadPressed: Xbox360Dpad) => void): void;
		ondpadup(callback: (dPadReleased: Xbox360Dpad) => void): void;
		buttonA: number;
		buttonB: number;
		buttonX: number;
		buttonY: number;
		buttonStart: number;
		buttonBack: number;
		buttonLB: number;
		buttonRB: number;
		buttonLeftStick: number;
		buttonRightStick: number;
		dPadUp: number;
		dPadDown: number;
		dPadLeft: number;
		dPadRight: number;
		update(): void
	}

	declare class DefaultLoadingScreen extends ILoadingScreen {
		constructor(_renderingCanvas: HTMLCanvasElement, _loadingText?: string, _loadingDivBackgroundColor?: string): this;
		displayLoadingUI(): void;
		hideLoadingUI(): void;
		loadingUIText: string;
		loadingUIBackgroundColor: string
	}

	declare class SceneOptimization  {
		priority: number;
		apply: (scene: Scene) => boolean;
		constructor(priority?: number): this
	}

	declare class TextureOptimization extends SceneOptimization {
		priority: number;
		maximumSize: number;
		constructor(priority?: number, maximumSize?: number): this;
		apply: (scene: Scene) => boolean
	}

	declare class HardwareScalingOptimization extends SceneOptimization {
		priority: number;
		maximumScale: number;
		constructor(priority?: number, maximumScale?: number): this;
		apply: (scene: Scene) => boolean
	}

	declare class ShadowsOptimization extends SceneOptimization {
		apply: (scene: Scene) => boolean
	}

	declare class PostProcessesOptimization extends SceneOptimization {
		apply: (scene: Scene) => boolean
	}

	declare class LensFlaresOptimization extends SceneOptimization {
		apply: (scene: Scene) => boolean
	}

	declare class ParticlesOptimization extends SceneOptimization {
		apply: (scene: Scene) => boolean
	}

	declare class RenderTargetsOptimization extends SceneOptimization {
		apply: (scene: Scene) => boolean
	}

	declare class MergeMeshesOptimization extends SceneOptimization {
		_UpdateSelectionTree: boolean;
		UpdateSelectionTree: boolean;
		apply: (scene: Scene, updateSelectionTree?: boolean) => boolean
	}

	declare class SceneOptimizerOptions  {
		targetFrameRate: number;
		trackerDuration: number;
		optimizations: SceneOptimization[];
		constructor(targetFrameRate?: number, trackerDuration?: number): this;
		LowDegradationAllowed(targetFrameRate?: number): SceneOptimizerOptions;
		ModerateDegradationAllowed(targetFrameRate?: number): SceneOptimizerOptions;
		HighDegradationAllowed(targetFrameRate?: number): SceneOptimizerOptions
	}

	declare class SceneOptimizer  {
		_CheckCurrentState(
		scene: Scene, options: SceneOptimizerOptions, currentPriorityLevel: number, onSuccess?: () => void, onFailure?: () => void
	): void;
		OptimizeAsync(
		scene: Scene, options?: SceneOptimizerOptions, onSuccess?: () => void, onFailure?: () => void
	): void
	}

	declare class SceneSerializer  {
		Serialize(scene: Scene): any;
		SerializeMesh(toSerialize: any, withParents?: boolean, withChildren?: boolean): any
	}

	declare class SmartArray<T>  {
		data: Array<T>;
		length: number;
		constructor(capacity: number): this;
		push(value: any): void;
		pushNoDuplicate(value: any): void;
		sort(compareFn: any): void;
		reset(): void;
		concat(array: any): void;
		concatWithNoDuplicate(array: any): void;
		indexOf(value: any): number
	}

	declare class SmartCollection  {
		count: number;
		items: any;
		constructor(capacity?: number): this;
		add(key: any, item: any): number;
		remove(key: any): number;
		removeItemOfIndex(index: number): number;
		indexOf(key: any): number;
		item(key: any): any;
		getAllKeys(): any[];
		getKeyByIndex(index: number): any;
		getItemByIndex(index: number): any;
		empty(): void;
		forEach(block: (item: any) => void): void
	}

	declare class Tags  {
		EnableFor(obj: any): void;
		DisableFor(obj: any): void;
		HasTags(obj: any): boolean;
		GetTags(obj: any, asString?: boolean): any;
		AddTagsTo(obj: any, tagsString: string): void;
		_AddTagTo(obj: any, tag: string): void;
		RemoveTagsFrom(obj: any, tagsString: string): void;
		_RemoveTagFrom(obj: any, tag: string): void;
		MatchesQuery(obj: any, tagsQuery: string): boolean
	}

	declare class Tools  {
		BaseUrl: string;
		CorsBehavior: any;
		UseFallbackTexture: boolean;
		Instantiate(className: string): any;
		GetConstructorName(obj: any): any;
		ToHex(i: number): string;
		SetImmediate(action: () => void): void;
		IsExponentOfTwo(value: number): boolean;
		GetExponentOfTwo(value: number, max: number): number;
		GetFilename(path: string): string;
		GetDOMTextContent(element: HTMLElement): string;
		ToDegrees(angle: number): number;
		ToRadians(angle: number): number;
		EncodeArrayBufferTobase64(buffer: ArrayBuffer): string;
		ExtractMinAndMaxIndexed(
		positions: number[] | Float32Array, indices: number[] | Int32Array, indexStart: number, indexCount: number
	): {
		minimum: Vector3,
		maximum: Vector3
	};
		ExtractMinAndMax(
		positions: number[] | Float32Array, start: number, count: number
	): {
		minimum: Vector3,
		maximum: Vector3
	};
		MakeArray(obj: any, allowsNullUndefined?: boolean): Array<any>;
		GetPointerPrefix(): string;
		QueueNewFrame(func: any): void;
		RequestFullscreen(element: any): void;
		ExitFullscreen(): void;
		CleanUrl(url: string): string;
		LoadImage(url: any, onload: any, onerror: any, database: any): HTMLImageElement;
		LoadFile(
		url: string, callback: (data: any) => void, progressCallBack?: () => void, database?: any, useArrayBuffer?: boolean, onError?: () => void
	): void;
		ReadFileAsDataURL(fileToLoad: any, callback: any, progressCallback: any): void;
		ReadFile(
		fileToLoad: any, callback: any, progressCallBack: any, useArrayBuffer?: boolean
	): void;
		FileAsURL(content: string): string;
		Clamp(value: number, min?: number, max?: number): number;
		Sign(value: number): number;
		Format(value: number, decimals?: number): string;
		CheckExtends(v: Vector3, min: Vector3, max: Vector3): void;
		WithinEpsilon(a: number, b: number, epsilon?: number): boolean;
		DeepCopy(
		source: any, destination: any, doNotCopyList?: string[], mustCopyList?: string[]
	): void;
		IsEmpty(obj: any): boolean;
		RegisterTopRootEvents(events: {
		name: string,
		handler: EventListener
	}[]): void;
		UnregisterTopRootEvents(events: {
		name: string,
		handler: EventListener
	}[]): void;
		DumpFramebuffer(
		width: number, height: number, engine: Engine, successCallback?: (data: string) => void
	): void;
		CreateScreenshot(
		engine: Engine, camera: Camera, size: any, successCallback?: (data: string) => void
	): void;
		ValidateXHRData(xhr: XMLHttpRequest, dataType?: number): boolean;
		errorsCount: number;
		OnNewCacheEntry: (entry: string) => void;
		NoneLogLevel: number;
		MessageLogLevel: number;
		WarningLogLevel: number;
		ErrorLogLevel: number;
		AllLogLevel: number;
		Log: (message: string) => void;
		Warn: (message: string) => void;
		Error: (message: string) => void;
		LogCache: string;
		ClearLogCache(): void;
		LogLevels: number;
		PerformanceNoneLogLevel: number;
		PerformanceUserMarkLogLevel: number;
		PerformanceConsoleLogLevel: number;
		PerformanceLogLevel: number;
		_StartPerformanceCounterDisabled(counterName: string, condition?: boolean): void;
		_EndPerformanceCounterDisabled(counterName: string, condition?: boolean): void;
		_StartUserMark(counterName: string, condition?: boolean): void;
		_EndUserMark(counterName: string, condition?: boolean): void;
		_StartPerformanceConsole(counterName: string, condition?: boolean): void;
		_EndPerformanceConsole(counterName: string, condition?: boolean): void;
		StartPerformanceCounter: (counterName: string, condition?: boolean) => void;
		EndPerformanceCounter: (counterName: string, condition?: boolean) => void;
		Now: number
	}

	declare class AsyncLoop  {
		iterations: number;
		index: number;
		constructor(iterations: number, _fn: (asyncLoop: AsyncLoop) => void, _successCallback: () => void, offset?: number): this;
		executeNext(): void;
		breakLoop(): void;
		Run(
		iterations: number, _fn: (asyncLoop: AsyncLoop) => void, _successCallback: () => void, offset?: number
	): AsyncLoop;
		SyncAsyncForLoop(
		iterations: number, syncedIterations: number, fn: (iteration: number) => void, callback: () => void, breakFunction?: () => boolean, timeout?: number
	): void
	}

	declare class VirtualJoystick  {
		reverseLeftRight: boolean;
		reverseUpDown: boolean;
		deltaPosition: Vector3;
		pressed: boolean;
		constructor(leftJoystick?: boolean): this;
		setJoystickSensibility(newJoystickSensibility: number): void;
		setJoystickColor(newColor: string): void;
		setActionOnTouch(action: () => any): void;
		setAxisForLeftRight(axis: JoystickAxis): void;
		setAxisForUpDown(axis: JoystickAxis): void;
		releaseCanvas(): void
	}

	declare class VRDeviceOrientationFreeCamera extends FreeCamera {
		_alpha: number;
		_beta: number;
		_gamma: number;
		constructor(name: string, position: Vector3, scene: Scene, compensateDistortion?: boolean): this;
		_onOrientationEvent(evt: DeviceOrientationEvent): void;
		attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
		detachControl(element: HTMLElement): void
	}

	declare class WebVRFreeCamera extends FreeCamera {
		_hmdDevice: any;
		_sensorDevice: any;
		_cacheState: any;
		_cacheQuaternion: Quaternion;
		_cacheRotation: Vector3;
		_vrEnabled: boolean;
		constructor(name: string, position: Vector3, scene: Scene, compensateDistortion?: boolean): this;
		_checkInputs(): void;
		attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
		detachControl(element: HTMLElement): void
	}

	declare class Octree<T>  {
		maxDepth: number;
		blocks: Array<OctreeBlock<T>>;
		dynamicContent: T[];
		constructor(creationFunc: (entry: T, block: OctreeBlock<T>) => void, maxBlockCapacity?: number, maxDepth?: number): this;
		update(worldMin: Vector3, worldMax: Vector3, entries: T[]): void;
		addMesh(entry: T): void;
		select(frustumPlanes: Plane[], allowDuplicate?: boolean): SmartArray<T>;
		intersects(
		sphereCenter: Vector3, sphereRadius: number, allowDuplicate?: boolean
	): SmartArray<T>;
		intersectsRay(ray: Ray): SmartArray<T>;
		_CreateBlocks<T>(
		worldMin: Vector3, worldMax: Vector3, entries: T[], maxBlockCapacity: number, currentDepth: number, maxDepth: number, target: IOctreeContainer<T>, creationFunc: (entry: T, block: OctreeBlock<T>) => void
	): void;
		CreationFuncForMeshes: (entry: AbstractMesh, block: OctreeBlock<AbstractMesh>) => void;
		CreationFuncForSubMeshes: (entry: SubMesh, block: OctreeBlock<SubMesh>) => void
	}

	declare class OctreeBlock<T>  {
		entries: T[];
		blocks: Array<OctreeBlock<T>>;
		constructor(minPoint: Vector3, maxPoint: Vector3, capacity: number, depth: number, maxDepth: number, creationFunc: (entry: T, block: OctreeBlock<T>) => void): this;
		capacity: number;
		minPoint: Vector3;
		maxPoint: Vector3;
		addEntry(entry: T): void;
		addEntries(entries: T[]): void;
		select(
		frustumPlanes: Plane[], selection: SmartArray<T>, allowDuplicate?: boolean
	): void;
		intersects(
		sphereCenter: Vector3, sphereRadius: number, selection: SmartArray<T>, allowDuplicate?: boolean
	): void;
		intersectsRay(ray: Ray, selection: SmartArray<T>): void;
		createInnerBlocks(): void
	}

	declare class ShadowGenerator  {
		FILTER_NONE: number;
		FILTER_VARIANCESHADOWMAP: number;
		FILTER_POISSONSAMPLING: number;
		FILTER_BLURVARIANCESHADOWMAP: number;
		blurScale: number;
		forceBackFacesOnly: boolean;
		bias: number;
		blurBoxOffset: number;
		filter: number;
		useVarianceShadowMap: boolean;
		usePoissonSampling: boolean;
		useBlurVarianceShadowMap: boolean;
		constructor(mapSize: number, light: IShadowLight): this;
		isReady(subMesh: SubMesh, useInstances: boolean): boolean;
		getShadowMap(): RenderTargetTexture;
		getShadowMapForRendering(): RenderTargetTexture;
		getLight(): IShadowLight;
		getTransformMatrix(): Matrix;
		getDarkness(): number;
		setDarkness(darkness: number): void;
		setTransparencyShadow(hasShadow: boolean): void;
		dispose(): void;
		serialize(): any;
		Parse(parsedShadowGenerator: any, scene: Scene): ShadowGenerator
	}

	declare class BaseTexture  {
		name: string;
		delayLoadState: number;
		hasAlpha: boolean;
		getAlphaFromRGB: boolean;
		level: number;
		isCube: boolean;
		isRenderTarget: boolean;
		animations: Animation[];
		onDispose: () => void;
		coordinatesIndex: number;
		coordinatesMode: number;
		wrapU: number;
		wrapV: number;
		anisotropicFilteringLevel: number;
		_cachedAnisotropicFilteringLevel: number;
		_texture: WebGLTexture;
		constructor(scene: Scene): this;
		getScene(): Scene;
		getTextureMatrix(): Matrix;
		getReflectionTextureMatrix(): Matrix;
		getInternalTexture(): WebGLTexture;
		isReady(): boolean;
		getSize(): ISize;
		getBaseSize(): ISize;
		scale(ratio: number): void;
		canRescale: boolean;
		_removeFromCache(url: string, noMipmap: boolean): void;
		_getFromCache(url: string, noMipmap: boolean, sampling?: number): WebGLTexture;
		delayLoad(): void;
		clone(): BaseTexture;
		releaseInternalTexture(): void;
		dispose(): void;
		serialize(): any
	}

	declare class CubeTexture extends BaseTexture {
		url: string;
		coordinatesMode: number;
		CreateFromImages(files: string[], scene: Scene, noMipmap?: boolean): CubeTexture;
		constructor(rootUrl: string, scene: Scene, extensions?: string[], noMipmap?: boolean, files?: string[]): this;
		clone(): CubeTexture;
		delayLoad(): void;
		getReflectionTextureMatrix(): Matrix;
		Parse(parsedTexture: any, scene: Scene, rootUrl: string): CubeTexture;
		serialize(): any
	}

	declare class DynamicTexture extends Texture {
		constructor(name: string, options: any, scene: Scene, generateMipMaps: boolean, samplingMode?: number): this;
		canRescale: boolean;
		scale(ratio: number): void;
		getContext(): CanvasRenderingContext2D;
		clear(): void;
		update(invertY?: boolean): void;
		drawText(
		text: string, x: number, y: number, font: string, color: string, clearColor: string, invertY?: boolean, update?: boolean
	): void;
		clone(): DynamicTexture
	}

	declare class MirrorTexture extends RenderTargetTexture {
		mirrorPlane: Plane;
		constructor(name: string, size: number, scene: Scene, generateMipMaps?: boolean): this;
		clone(): MirrorTexture;
		serialize(): any
	}

	declare class RawTexture extends Texture {
		format: number;
		constructor(data: ArrayBufferView, width: number, height: number, format: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number): this;
		update(data: ArrayBufferView): void;
		CreateLuminanceTexture(
		data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number
	): RawTexture;
		CreateLuminanceAlphaTexture(
		data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number
	): RawTexture;
		CreateAlphaTexture(
		data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number
	): RawTexture;
		CreateRGBTexture(
		data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number
	): RawTexture;
		CreateRGBATexture(
		data: ArrayBufferView, width: number, height: number, scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number
	): RawTexture
	}

	declare class RenderTargetTexture extends Texture {
		isCube: boolean;
		_REFRESHRATE_RENDER_ONCE: number;
		_REFRESHRATE_RENDER_ONEVERYFRAME: number;
		_REFRESHRATE_RENDER_ONEVERYTWOFRAMES: number;
		REFRESHRATE_RENDER_ONCE: number;
		REFRESHRATE_RENDER_ONEVERYFRAME: number;
		REFRESHRATE_RENDER_ONEVERYTWOFRAMES: number;
		renderList: AbstractMesh[];
		renderParticles: boolean;
		renderSprites: boolean;
		coordinatesMode: number;
		onBeforeRender: (faceIndex: number) => void;
		onAfterRender: (faceIndex: number) => void;
		onAfterUnbind: () => void;
		onClear: (engine: Engine) => void;
		activeCamera: Camera;
		customRenderFunction: (
		opaqueSubMeshes: SmartArray<SubMesh>, transparentSubMeshes: SmartArray<SubMesh>, alphaTestSubMeshes: SmartArray<SubMesh>, beforeTransparents?: () => void
	) => void;
		_generateMipMaps: boolean;
		_waitingRenderList: string[];
		constructor(name: string, size: any, scene: Scene, generateMipMaps?: boolean, doNotChangeAspectRatio?: boolean, type?: number, isCube?: boolean): this;
		resetRefreshCounter(): void;
		refreshRate: number;
		_shouldRender(): boolean;
		isReady(): boolean;
		getRenderSize(): number;
		canRescale: boolean;
		scale(ratio: number): void;
		getReflectionTextureMatrix(): Matrix;
		resize(size: any, generateMipMaps?: boolean): void;
		render(useCameraPostProcess?: boolean, dumpForDebug?: boolean): void;
		renderToTarget(
		faceIndex: number, currentRenderList: AbstractMesh[], useCameraPostProcess: boolean, dumpForDebug: boolean
	): void;
		clone(): RenderTargetTexture;
		serialize(): any
	}

	declare class Texture extends BaseTexture {
		NEAREST_SAMPLINGMODE: number;
		BILINEAR_SAMPLINGMODE: number;
		TRILINEAR_SAMPLINGMODE: number;
		EXPLICIT_MODE: number;
		SPHERICAL_MODE: number;
		PLANAR_MODE: number;
		CUBIC_MODE: number;
		PROJECTION_MODE: number;
		SKYBOX_MODE: number;
		INVCUBIC_MODE: number;
		EQUIRECTANGULAR_MODE: number;
		FIXED_EQUIRECTANGULAR_MODE: number;
		CLAMP_ADDRESSMODE: number;
		WRAP_ADDRESSMODE: number;
		MIRROR_ADDRESSMODE: number;
		url: string;
		uOffset: number;
		vOffset: number;
		uScale: number;
		vScale: number;
		uAng: number;
		vAng: number;
		wAng: number;
		_invertY: boolean;
		_samplingMode: number;
		constructor(url: string, scene: Scene, noMipmap?: boolean, invertY?: boolean, samplingMode?: number, onLoad?: () => void, onError?: () => void, buffer?: any, deleteBuffer?: boolean): this;
		delayLoad(): void;
		updateSamplingMode(samplingMode: number): void;
		getTextureMatrix(): Matrix;
		getReflectionTextureMatrix(): Matrix;
		clone(): Texture;
		serialize(): any;
		CreateFromBase64String(
		data: string, name: string, scene: Scene, noMipmap?: boolean, invertY?: boolean, samplingMode?: number, onLoad?: () => void, onError?: () => void
	): Texture;
		Parse(parsedTexture: any, scene: Scene, rootUrl: string): BaseTexture
	}

	declare class VideoTexture extends Texture {
		video: HTMLVideoElement;
		constructor(name: string, urls: string[], scene: Scene, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number): this;
		update(): boolean
	}

	declare class CannonJSPlugin extends IPhysicsEnginePlugin {
		name: string;
		constructor(_useDeltaForWorldStep?: boolean): this;
		initialize(iterations?: number): void;
		runOneStep(delta: number): void;
		setGravity(gravity: Vector3): void;
		getGravity(): Vector3;
		registerMesh(
		mesh: AbstractMesh, impostor: number, options?: PhysicsBodyCreationOptions
	): any;
		registerMeshesAsCompound(parts: PhysicsCompoundBodyPart[], options: PhysicsBodyCreationOptions): any;
		unregisterMesh(mesh: AbstractMesh): void;
		applyImpulse(mesh: AbstractMesh, force: Vector3, contactPoint: Vector3): void;
		updateBodyPosition: (mesh: AbstractMesh) => void;
		createLink(
		mesh1: AbstractMesh, mesh2: AbstractMesh, pivot1: Vector3, pivot2: Vector3
	): boolean;
		dispose(): void;
		isSupported(): boolean;
		getWorldObject(): any;
		getPhysicsBodyOfMesh(mesh: AbstractMesh): any
	}

	declare class OimoJSPlugin extends IPhysicsEnginePlugin {
		name: string;
		initialize(iterations?: number): void;
		setGravity(gravity: Vector3): void;
		getGravity(): Vector3;
		registerMesh(mesh: AbstractMesh, impostor: number, options: PhysicsBodyCreationOptions): any;
		registerMeshesAsCompound(parts: PhysicsCompoundBodyPart[], options: PhysicsBodyCreationOptions): any;
		unregisterMesh(mesh: AbstractMesh): void;
		updateBodyPosition: (mesh: AbstractMesh) => void;
		applyImpulse(mesh: AbstractMesh, force: Vector3, contactPoint: Vector3): void;
		createLink(
		mesh1: AbstractMesh, mesh2: AbstractMesh, pivot1: Vector3, pivot2: Vector3, options?: any
	): boolean;
		dispose(): void;
		isSupported(): boolean;
		getWorldObject(): any;
		getPhysicsBodyOfMesh(mesh: AbstractMesh): any;
		runOneStep(time: number): void
	}

	declare class PostProcessRenderEffect  {
		_name: string;
		applyParameters: (postProcess: PostProcess) => void;
		constructor(engine: Engine, name: string, getPostProcess: () => PostProcess, singleInstance?: boolean): this;
		isSupported: boolean;
		_update(): void;
		addPass(renderPass: PostProcessRenderPass): void;
		removePass(renderPass: PostProcessRenderPass): void;
		addRenderEffectAsPass(renderEffect: PostProcessRenderEffect): void;
		getPass(passName: string): void;
		emptyPasses(): void;
		_attachCameras(cameras: Camera): any;
		_attachCameras(cameras: Camera[]): any;
		_detachCameras(cameras: Camera): any;
		_detachCameras(cameras: Camera[]): any;
		_enable(cameras: Camera): any;
		_enable(cameras: Camera[]): any;
		_disable(cameras: Camera): any;
		_disable(cameras: Camera[]): any;
		getPostProcess(camera?: Camera): PostProcess
	}

	declare class PostProcessRenderPass  {
		_name: string;
		constructor(scene: Scene, name: string, size: number, renderList: Mesh[], beforeRender: () => void, afterRender: () => void): this;
		_incRefCount(): number;
		_decRefCount(): number;
		_update(): void;
		setRenderList(renderList: Mesh[]): void;
		getRenderTexture(): RenderTargetTexture
	}

	declare class PostProcessRenderPipeline  {
		_name: string;
		constructor(engine: Engine, name: string): this;
		isSupported: boolean;
		addEffect(renderEffect: PostProcessRenderEffect): void;
		_enableEffect(renderEffectName: string, cameras: Camera): any;
		_enableEffect(renderEffectName: string, cameras: Camera[]): any;
		_disableEffect(renderEffectName: string, cameras: Camera): any;
		_disableEffect(renderEffectName: string, cameras: Camera[]): any;
		_attachCameras(cameras: Camera, unique: boolean): any;
		_attachCameras(cameras: Camera[], unique: boolean): any;
		_detachCameras(cameras: Camera): any;
		_detachCameras(cameras: Camera[]): any;
		_enableDisplayOnlyPass(passName: any, cameras: Camera): any;
		_enableDisplayOnlyPass(passName: any, cameras: Camera[]): any;
		_disableDisplayOnlyPass(cameras: Camera): any;
		_disableDisplayOnlyPass(cameras: Camera[]): any;
		_update(): void;
		dispose(): void
	}

	declare class PostProcessRenderPipelineManager  {
		constructor(): this;
		addPipeline(renderPipeline: PostProcessRenderPipeline): void;
		attachCamerasToRenderPipeline(renderPipelineName: string, cameras: Camera, unique?: boolean): any;
		attachCamerasToRenderPipeline(renderPipelineName: string, cameras: Camera[], unique?: boolean): any;
		detachCamerasFromRenderPipeline(renderPipelineName: string, cameras: Camera): any;
		detachCamerasFromRenderPipeline(renderPipelineName: string, cameras: Camera[]): any;
		enableEffectInPipeline(renderPipelineName: string, renderEffectName: string, cameras: Camera): any;
		enableEffectInPipeline(renderPipelineName: string, renderEffectName: string, cameras: Camera[]): any;
		disableEffectInPipeline(renderPipelineName: string, renderEffectName: string, cameras: Camera): any;
		disableEffectInPipeline(renderPipelineName: string, renderEffectName: string, cameras: Camera[]): any;
		enableDisplayOnlyPassInPipeline(renderPipelineName: string, passName: string, cameras: Camera): any;
		enableDisplayOnlyPassInPipeline(renderPipelineName: string, passName: string, cameras: Camera[]): any;
		disableDisplayOnlyPassInPipeline(renderPipelineName: string, cameras: Camera): any;
		disableDisplayOnlyPassInPipeline(renderPipelineName: string, cameras: Camera[]): any;
		update(): void
	}

	declare class CustomProceduralTexture extends ProceduralTexture {
		constructor(name: string, texturePath: any, size: number, scene: Scene, fallbackTexture?: Texture, generateMipMaps?: boolean): this;
		isReady(): boolean;
		render(useCameraPostProcess?: boolean): void;
		updateTextures(): void;
		updateShaderUniforms(): void;
		animate: boolean
	}

	declare class ProceduralTexture extends Texture {
		isCube: boolean;
		_generateMipMaps: boolean;
		isEnabled: boolean;
		onGenerated: () => void;
		_textures: Texture[];
		constructor(name: string, size: any, fragment: any, scene: Scene, fallbackTexture?: Texture, generateMipMaps?: boolean, isCube?: boolean): this;
		reset(): void;
		isReady(): boolean;
		resetRefreshCounter(): void;
		setFragment(fragment: any): void;
		refreshRate: number;
		_shouldRender(): boolean;
		getRenderSize(): number;
		resize(size: any, generateMipMaps: any): void;
		setTexture(name: string, texture: Texture): ProceduralTexture;
		setFloat(name: string, value: number): ProceduralTexture;
		setFloats(name: string, value: number[]): ProceduralTexture;
		setColor3(name: string, value: Color3): ProceduralTexture;
		setColor4(name: string, value: Color4): ProceduralTexture;
		setVector2(name: string, value: Vector2): ProceduralTexture;
		setVector3(name: string, value: Vector3): ProceduralTexture;
		setMatrix(name: string, value: Matrix): ProceduralTexture;
		render(useCameraPostProcess?: boolean): void;
		clone(): ProceduralTexture;
		dispose(): void
	}

	
}

declare module 'Primitives' {
				declare class _Primitive extends Geometry {
		constructor(id: string, scene: Scene, vertexData?: VertexData, canBeRegenerated?: boolean, mesh?: Mesh): this;
		canBeRegenerated(): boolean;
		regenerate(): void;
		asNewGeometry(id: string): Geometry;
		setAllVerticesData(vertexData: VertexData, updatable?: boolean): void;
		setVerticesData(
		kind: string, data: number[] | Int32Array | Float32Array, updatable?: boolean
	): void;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry;
		serialize(): any
	}

	declare class Ribbon extends _Primitive {
		pathArray: Vector3[][];
		closeArray: boolean;
		closePath: boolean;
		offset: number;
		side: number;
		constructor(id: string, scene: Scene, pathArray: Vector3[][], closeArray: boolean, closePath: boolean, offset: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry
	}

	declare class Box extends _Primitive {
		size: number;
		side: number;
		constructor(id: string, scene: Scene, size: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry;
		serialize(): any;
		Parse(parsedBox: any, scene: Scene): Box
	}

	declare class Sphere extends _Primitive {
		segments: number;
		diameter: number;
		side: number;
		constructor(id: string, scene: Scene, segments: number, diameter: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry;
		serialize(): any;
		Parse(parsedSphere: any, scene: Scene): Geometry.Primitives.Sphere
	}

	declare class Disc extends _Primitive {
		radius: number;
		tessellation: number;
		side: number;
		constructor(id: string, scene: Scene, radius: number, tessellation: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry
	}

	declare class Cylinder extends _Primitive {
		height: number;
		diameterTop: number;
		diameterBottom: number;
		tessellation: number;
		subdivisions: number;
		side: number;
		constructor(id: string, scene: Scene, height: number, diameterTop: number, diameterBottom: number, tessellation: number, subdivisions?: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry;
		serialize(): any;
		Parse(parsedCylinder: any, scene: Scene): Geometry.Primitives.Cylinder
	}

	declare class Torus extends _Primitive {
		diameter: number;
		thickness: number;
		tessellation: number;
		side: number;
		constructor(id: string, scene: Scene, diameter: number, thickness: number, tessellation: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry;
		serialize(): any;
		Parse(parsedTorus: any, scene: Scene): Geometry.Primitives.Torus
	}

	declare class Ground extends _Primitive {
		width: number;
		height: number;
		subdivisions: number;
		constructor(id: string, scene: Scene, width: number, height: number, subdivisions: number, canBeRegenerated?: boolean, mesh?: Mesh): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry;
		serialize(): any;
		Parse(parsedGround: any, scene: Scene): Geometry.Primitives.Ground
	}

	declare class TiledGround extends _Primitive {
		xmin: number;
		zmin: number;
		xmax: number;
		zmax: number;
		subdivisions: {
		w: number,
		h: number
	};
		precision: {
		w: number,
		h: number
	};
		constructor(id: string, scene: Scene, xmin: number, zmin: number, xmax: number, zmax: number, subdivisions: {
		w: number,
		h: number
	}, precision: {
		w: number,
		h: number
	}, canBeRegenerated?: boolean, mesh?: Mesh): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry
	}

	declare class Plane extends _Primitive {
		size: number;
		side: number;
		constructor(id: string, scene: Scene, size: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry;
		serialize(): any;
		Parse(parsedPlane: any, scene: Scene): Geometry.Primitives.Plane
	}

	declare class TorusKnot extends _Primitive {
		radius: number;
		tube: number;
		radialSegments: number;
		tubularSegments: number;
		p: number;
		q: number;
		side: number;
		constructor(id: string, scene: Scene, radius: number, tube: number, radialSegments: number, tubularSegments: number, p: number, q: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number): this;
		_regenerateVertexData(): VertexData;
		copy(id: string): Geometry;
		serialize(): any;
		Parse(parsedTorusKnot: any, scene: Scene): Geometry.Primitives.TorusKnot
	}

	
}

declare module 'Internals' {
		declare interface DDSInfo {
		width: number,
		height: number,
		mipmapCount: number,
		isFourCC: boolean,
		isRGB: boolean,
		isLuminance: boolean,
		isCube: boolean
	}

		declare class MeshLODLevel  {
		distance: number;
		mesh: Mesh;
		constructor(distance: number, mesh: Mesh): this
	}

	declare class AndOrNotEvaluator  {
		Eval(query: string, evaluateCallback: (val: any) => boolean): boolean
	}

	declare class DDSTools  {
		GetDDSInfo(arrayBuffer: any): DDSInfo;
		UploadDDSLevels(
		gl: WebGLRenderingContext, ext: any, arrayBuffer: any, info: DDSInfo, loadMipmaps: boolean, faces: number
	): void
	}

	declare class TGATools  {
		GetTGAHeader(data: Uint8Array): any;
		UploadContent(gl: WebGLRenderingContext, data: Uint8Array): void;
		_getImageData8bits(
		header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number
	): Uint8Array;
		_getImageData16bits(
		header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number
	): Uint8Array;
		_getImageData24bits(
		header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number
	): Uint8Array;
		_getImageData32bits(
		header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number
	): Uint8Array;
		_getImageDataGrey8bits(
		header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number
	): Uint8Array;
		_getImageDataGrey16bits(
		header: any, palettes: Uint8Array, pixel_data: Uint8Array, y_start: number, y_step: number, y_end: number, x_start: number, x_step: number, x_end: number
	): Uint8Array
	}

	
}
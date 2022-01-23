// @flow
declare module three {
  declare export class Vector2 {
    constructor(x: number, y: number): this;
    isVector2: boolean;
    height: number;
    width: number;
    x: number;
    y: number;

    add(v: Vector2): void;
    addScalar(s: number): void;
    addScaledVector(v: Vector2, s: number): void;
    addVectors(a: Vector2, b: Vector2): void;
    angle(): number;
    ceil(): void;
    clamp(min: number, max: number): void;
    clampLength(min: number, max: number): void;
    clampScalar(min: number, max: number): void;
    clone(): Vector2;
    copy (v: Vector2): void;
    distanceTo(v: Vector2): void;
    distanceToManhattan(v: Vector2): number;
    distanceToSquared(v: Vector2): number;
    divide(v: Vector2): Vector2;
// Divides this vector by v.
// # .divideScalar ( s )

// Divides this vector by scalar s.
// Sets vector to ( 0, 0 ) if s = 0.
// # .dot ( v )

// Calculates the dot product of this vector and v.
// # .equals ( v )

// Checks for strict equality of this vector and v.
// # .floor ()

// The components of the vector are rounded down to the nearest integer value.
// # .fromArray ( array, offset )

// array - the source array.
// offset - (optional) offset into the array. Default is 0.

// Sets this vector's x value to be array[ offset ] and y value to be array[ offset + 1 ].
// # .fromBufferAttribute ( attribute, index )

// attribute - the source attribute.
// index - index in the attribute.

// Sets this vector's x and y values from the attribute.
// # .getComponent ( index )

// index - 0 or 1.

// If index equals 0 returns the x value.
// If index equals 1 returns the y value.
// # .length ()

// Computes the Euclidean length (straight-line length) from (0, 0) to (x, y).
// # .lengthManhattan ()

// Computes the Manhattan length of this vector.
// # .lengthSq ()

// Computes the square of the Euclidean length (straight-line length) from (0, 0) to (x, y). If you are comparing the lengths of vectors, you should compare the length squared instead as it is slightly more efficient to calculate.
// # .lerp ( v, alpha )

// v - Vector2 to interpolate towards.
// alpha - interpolation factor in the closed interval [0, 1].

// Linearly interpolates between this vector and v, where alpha is the distance along the line - alpha = 0 will be this vector, and alpha = 1 will be v.
// # .lerpVectors ( v1, v2, alpha )

// v1 - the starting Vector2.
// v2 - Vector2 to interpolate towards.
// alpha - interpolation factor in the closed interval [0, 1].

// Sets this vector to be the vector linearly interpolated between v1 and v2 where alpha is the distance along the line connecting the two vectors - alpha = 0 will be v1, and alpha = 1 will be v2.
// # .negate ()

// Inverts this vector - i.e. sets x = -x and y = -y.
// # .normalize ()

// Converts this vector to a unit vector - that is, sets it equal to the vector with the same direction as this one, but length 1.
// # .max ( v )

// If this vector's x or y value is less than v's x or y value, replace that value with the corresponding max value.
// # .min ( v )

// If this vector's x or y value is greater than v's x or y value, replace that value with the corresponding min value.
// # .multiply ( v )

// Multiplies this vector by v.
// # .multiplyScalar ( s )

// Multiplies this vector by scalar s.
// # .rotateAround ( center, angle )

// center - the point around which to rotate.
// angle - the angle to rotate, in radians.

// Rotates the vector around center by angle radians.
// # .round ()

// The components of the vector are rounded to the nearest integer value.
// # .roundToZero ()

// The components of the vector are rounded towards zero (up if negative, down if positive) to an integer value.
// # .set ( x, y )

// Sets the x and y components of this vector.
// # .setComponent ( index, value )

// index - 0 or 1.
// value - Float

// If index equals 0 set x to value.
// If index equals 1 set y to value
// # .setLength ( l )

// Sets this vector to the vector with the same direction as this one, but length l.
// # .setScalar ( scalar )

// Sets the x and y values of this vector both equal to scalar.
// # .setX ( x )

// Replaces this vector's x value with x.
// # .setY ( y )

// Replaces this vector's y value with y.
// # .sub ( v )

// Subtracts v from this vector.
// # .subScalar ( s )

// Subtracts s from this vector's x and y components.
// # .subVectors ( a, b )

// Sets this vector to a - b.
// # .toArray ( array, offset )

// array - (optional) array to store the vector to. If this is not provided, a new array will be created.
// offset - (optional) optional offset into the array.

// Returns an array [x, y], or copies x and y into the provided array.
  }

  declare export class Vector3 {
    constructor(x: number, y: number, z: number): this;

    x: number;
    y: number;
    z: number;

    set(x: number, y: number, z: number): this;
    setX(x: number): void;
    setY(y: number): void;
    setZ(z: number): void;
    copy(vector: this): void;
    fromArray(array: [number, number, number], offset: number): void;
    add(vector: this): void;
    addVectors(a: this, b: this): void;
    addScaledVector(vector: this, scale: number): void;
    sub(vector: this): void;
    subVectors(a: this, b: this): void;
    multiplyScalar(scalar: number): void;
    divideScalar(scalar: number): void;
    negate(): void;
    dot(vector: this): void;
    lengthSq(): number;
    length(): number;
    lengthManhattan(): number;
    normalize(): void;
    distanceTo(vector: Vector3): number;
    distanceToSquared(vector: Vector3): number;
    setLength(length: number): void;
    cross(vector: Vector3): void;
    crossVectors(a: Vector3, b: Vector3): void;
    // TODO: which matrix?
    // setFromMatrixPosition(matrix: Matrix): void;
    // TODO: which matrix?
    // setFromMatrixScale(matrix: Matrix): void;
    clamp(min: number, max: number): void;
    clampScalar(min: number, max: number): void;
    clampLength(min: number, max: number): void;
    floor(): void;
    ceil(): void;
    round(): void;
    roundToZero(): void;
    applyMatrix3(matrix: Matrix3): void;
    applyMatrix4(matrix: Matrix4): void;
    projectOnPlane(planeNormal: Vector3): void;
    projectOnVector(vector: Vector3): void;
    divide(vector: Vector3): void;
    min(vector: Vector3): void;
    max(vector: Vector3): void;
    setComponent(index: 0 | 1 | 2, value: number): void;
    // TODO: which matrix?
    // transformDirection(matrix: Matrix): void;
    multiplyVectors(a: Vector3, b: Vector3): void;
    getCompoment(index: 0 | 1 | 2): number;
    applyAxisAngle(axis: number, angle: number): void;
    lerp(vector: Vector3, alpha: number): void;
    lerpVectors(a: Vector3, b: Vector3, alpha: number): void;
    angleTo(vector: Vector3): number;
    setFromMatrixColumn(index: 0 | 1 | 2 | 3, matrix: Matrix4): void;
    // TODO: not sure what the return type really is here
    reflect(normal: Vector3): void;
    multiply(vector: Vector3): void;
    applyProjection(matrix: Matrix4): void;
    // TODO: does this actually use an Euler type?
    applyEuler(euler: Vector3): void;
    applyQuaternion(quaternion: Quaternion): void;
    project(camera: Camera): void;
    unproject(camera: Camera): void;
    equals(vector: Vector3): boolean;
    clone(): this;
    toArray(array: Array<number>, offset: number): void;
  }

  declare class Vector4 {}

  declare class Euler {}

  declare export class Quaternion {
    constructor(x: number, y: number, z: number, w: number): this;

    x: number;
    y: number;
    z: number;
    w: number;

    angleTo(q: Quaternion): number;
    clone(): Quaternion;
    conjugate(): Quaternion;
    copy(q: Quaternion): this;
    equals(v: Quaternion): bool;
    dot(v: Quaternion): number;
    fromArray(xyzw: [number, number, number, number], number): Quaternion;
    inverse(): Quaternion;
    length(): number;
    lengthSq(): number;
    normalize(): Quaternion;
    multiply(q: Quaternion): Quaternion;
    multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;
    onChange(callback: Function): Quaternion;
    onChangeCallback(): Quaternion;
    premultiply(q: Quaternion): Quaternion;
    rotateTowards(q: Quaternion, step: number): Quaternion;
    slerp(q: Quaternion, t: number): Quaternion;
    set(x: number, y: number, z: number, w: number): Quaternion;
    setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
    setFromEuler(euler: Euler): Quaternion;
    setFromRotationMatrix(m: Matrix4): Quaternion;
    setFromUnitVectors(from: Vector3, to: Vector3): Quaternion;
    toArray(array?: [], offset?: number): [number, number, number, number];

    static slerp(
      start: Quaternion,
      end: Quaternion,
      target: Quaternion,
      t: number,
    ): Quaternion;

    static slerpFlat(
      dst: [number, number, number, number],
      dstOffset: number,
      src0: [number, number, number, number],
      srcOffset0: number,
      src1: [number, number, number, number],
      srcOffset1: number,
      t: number,
    ): Quaternion;
  }

  declare class Matrix3 {

  }

  declare class Matrix4 {
    setPosition(v: Vector3): void;
    makeRotationFromQuaternion(q: Quaternion): void;
  }

  declare class Box3 {

  }

  declare class Sphere {

  }

  declare type MorphTarget = {
    name: string,
    vertices: Array<Vector3>,
  }

  declare type MorphNormal = {
    name: string,
    normals: Array<number>,
  }

  declare export class Geometry {
    constructor(): this;
    colors: Array<Color>;
    faces: Array<Face3>;
    boundingBox: Box3 | null;
    boundingSphere: Sphere | null;
    faceVertexUvs: Array<Array<Array<Vector2>>>;
    id: number;
    isGeometry: boolean;
    lineDistances: Array<number>;
    morphTargets: Array<MorphTarget>;
    morphNormals: Array<MorphNormal>;
    name: string;
    skinWeights: Array<Vector4>;
    skinIndicies: Array<number>;
    uuid: string;
    vertices: Array<Vector3>;
    verticesNeedUpdate: boolean;
    elementsNeedUpdate: boolean;
    uvsNeedUpdate: boolean;
    normalsNeedUpdate: boolean;
    colorsNeedUpdate: boolean;
    groupsNeedUpdate: boolean;
    lineDistancesNeedUpdate: boolean;
    // TODO: add event dispatcher methods

    applyMatrix(matrix: Matrix4): void;
    center(): void;
    clone(): this;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    computeFlatVertexNormals(): void;
    computeMorphNormals(): void;
    computeVertexNormals(areaWeighted: boolean): void;
    copy(geometry: Geometry): void;
    dispose(): void;
    lookAt(vector: Vector3): void;
    merge(
      geometry: Geometry,
      matrix: Matrix4,
      materialIndexOffset: number
    ): void;
    mergeMesh(mesh: Mesh): void;
    mergeVertices(): void;
    normalize(): void;
    rotateX(radians: number): void;
    rotateY(radians: number): void;
    rotateZ(radians: number): void;
    sortFacesByMaterialIndex(): void;
    scale(x: number, y: number, z: number): void;
    toJSON(): string;
    translate(x: number, y: number, z: number): void;
  }

  declare type HSL = {h: number, s: number, l: number,}

  declare export class Color {
    constructor(a: ?number | ?string, g: ?number, b: ?number): Color;
    r: number;
    g: number;
    b: number;

    set(value: Color | number | string): void;
    copy(c: Color): void;
    fromArray(array: [number, number, number], number): void;
    copyLinearToGamma(c: Color): void;
    convertGammaToLinear(): void;
    convertLinearToGamma(): void;
    setHex(hex: number): void;
    setStyle(style: string): void;
    getStyle(): string;
    setHSL(hue: number, saturation: number, lightness: number): void;
    getHSL(): HSL;
    offsetHSL(hue: number, saturation: number, lightness: number): void;
    add(color: Color): void;
    addColors(a: Color, b: Color): void;
    addScalar(scalar: number): void;
    multiply(color: Color): void;
    multiplyScalar(scalar: number): void;
    lerp(color: Color, alpha: number): void;
    equals(color: Color): boolean;
    clone(): void;
    toArray(array: ?[number, number, number], offset: ?number):
      [number, number, number];
  }

  declare export class Face3 {
    constructor(
      a: number,
      b: number,
      c: number,
      normal?: Vector3,
      color?: Color | Array<Color>,
      materialIndex?: number
    ): Face3;

    a: number;
    b: number;
    c: number;
    normal: Vector3;
    color: Color; // this might be nullable
    vertexColors: Array<Color>; // this might be nullable
    materialIndex: number;

    clone(): this;
    copy(face3: Face3): void;
  }

  declare export class Mesh extends Object3D {
    constructor(
      geometry?: Geometry,
      // Undocumented at time of writing: Mesh takes a Material or an array of
      // Materials. See: https://github.com/mrdoob/three.js/issues/10931
      material?: Material | Array<Material>
    ): this;

    drawMode: DrawMode;
    isMesh: boolean;
    geometry: Geometry;
    // Undocumented at time of writing: material can be a Material or an array
    // of Materials. See: https://github.com/mrdoob/three.js/issues/10931
    material: Material | Array<Material>;
    morphTargetInfluences: Array<number>;
    morphTargetDictionary: {[string]: number};

    setDrawMode(): void;
    updateMorphTargets(): void;
  }

  declare export class UVMapping {

  }

  declare export class ImageUtils {
    static loadTexture: (path: string, mapping: typeof UVMapping) => Texture;
  }

  declare class Renderer { }

  declare export class Group extends Object3D {
    constructor(): this;

    type: 'Group';
  }

  declare export class Fog {
    constructor(color: number, near: number, far: number): this;

    name: string;
    color: Color;
    near: number;
    far: number;

    clone(): Fog;
    toJSON(): string;
  }

  declare export class Scene extends Object3D {
    constructor(): this;

    fog: ?Fog;
    overrideMaterial: ?Material;
    autoUpdate: bool;
    background: Color | Texture | WebGLRenderTarget | void;

    toJSON(): string;
  }

  declare function $npm$three$OnRenderCallback(
    renderer: Renderer,
    scene: Scene,
    // TODO: Enable again once https://github.com/facebook/flow/issues/3888 is
    // addressed.
    // camera: Camera,
    geometry: Geometry,
    // TODO: Enable again once https://github.com/facebook/flow/issues/3888 is
    // addressed.
    // material: Material,
    group: number // this is a guess
  ): void;

  declare class Raycaster {}

  declare class Layers {}

  declare export class Object3D {
    // castShadow is undefined in AmbientLight.
    castShadow: ?boolean;
    children: Array<Object3D>;
    frustrumCulled: boolean;
    id: number;
    layers: Layers;
    matrix: Matrix4;
    matrixAutoUpdate: boolean;
    matrixWorld: Matrix4;
    modelViewMatrix: Matrix4;
    name: string;
    normalMatrix: Matrix3;
    onAfterCallback: typeof $npm$three$OnRenderCallback;
    onBeforeCallback: typeof $npm$three$OnRenderCallback;
    parent: Object3D;
    +position: Vector3;
    +quaternion: Quaternion;
    receiveShadow: boolean;
    renderOrder: number;
    rotation: Vector3;
    scale: Vector3;
    up: Vector3;
    userData: mixed;
    uuid: string;
    visible: boolean;

    static DefaultUp: Vector3;
    static DefaultMatrixAutoUpdate: Vector3;
    // TODO: Add event dispatcher methods

    add(...os: Array<Object3D>): void;
    applyMatrix(matrix: Matrix4): void;
    clone(recursive: boolean): Object3D;
    getObjectById(id: number): Object3D;
    getObjectByName(name: string): Object3D;
    getObjectByProperty(name: string, value: mixed): Object3D;
    getWorldPosition(optionalTarget: Vector3): Vector3;
    getWorldOrientation(optionalTarget: Quaternion): Quaternion;
    getWorldRotation(optionalTarget: Euler): Euler;
    getWorldDirection(optionalTarget: Vector3): Vector3;
    localToWorld(vector: Vector3): Vector3;
    lookAt(vector: Vector3): void;
    // TODO: Find out if the array type is based on the specific Object3D
    // subtype.
    raycast(raycaster: Raycaster, intersects: Array<any>): Array<any>;
    // Expressed this way to ensure at least one object to remove.
    remove(object: Object3D, ...otherObjects: Array<Object3D>): void;
    rotateOnAxis(axis: Vector3, angle: number): void;
    rotateX(rad: number): void;
    rotateY(rad: number): void;
    rotateZ(rad: number): void;
    setRotationFromAxisAngle(axis: Vector3, angleInRadians: number): void;
    setRotationFromEuler(euler: Euler): void;
    setRotationFromMatrix(matrix: Matrix4): void;
    setRotationFromQuaternion(quaternion: Quaternion): void;
    // TODO: Docs say this takes a Quaternion - should verify because this looks
    // fishy.
    toJSON(quaternion: Quaternion): string;
    translateOnAxis(axis: Vector3, distance: number): void;
    translateX(distance: number): void;
    translateY(distance: number): void;
    translateZ(distance: number): void;
    traverse(callback: (obj: Object3D) => void): void;
    traverseVisible(callback: (obj: Object3D) => void): void;
    traverseAncestors(callback: (obj: Object3D) => void): void;
    updateMatrix(): void;
    updateMatrixWorld(force: boolean): void;
    worldToLocal(vector: Vector3): Vector3;
  }

  declare export class Camera extends Object3D {
    constructor(): this;
    isCamera: boolean;
    layers: Layers;
    matrixWorldInverse: Matrix4;
    projectionMatrix: Matrix4;
    clone(): this;
    copy(source: Camera): void;
    getWorldDirection(target?: Vector3): Vector3;
    lookAt(target: Vector3): void;
  }

  declare export class OrthographicCamera extends Camera {
    constructor(
      left: number,
      right: number,
      top: number,
      bottom: number,
      far: number,
      near: number
    ): this;

    bottom: number;
    far: number;
    isOrthographicCamera: boolean;
    left: number;
    near: number;
    right: number;
    top: number;
    view: ?mixed;
    zoom: number;

    setViewOffset(
      fullWidth: number,
      fullHeight: number,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    clearViewOffset(): void;
    updateProjectionMatrix(): void;
    toJSON(): string;
  }

  declare export class PerspectiveCamera extends Camera {
    constructor(fov: number, aspect: number, near: number, far: number): this;

    aspect: number;
    far: number;
    filmGauge: number;
    focus: number;
    fov: number;
    isPerspectiveCamera: boolean;
    near: number;
    view: ?mixed;
    zoom: number;

    clearViewOffset(): void;
    getEffectiveFOV(): number;
    getFilmHeight(): number;
    getFilmWidth(): number;
    getFocalLength(): number;
    setViewOffset(
      fullWidth: number,
      fullHeight: number,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    updateProjectionMatrix(): void;
    toJSON(): string;
  }

  declare export class Material {
    constructor(): this;

    alphaTest: number,
    // looks like an enum
    // blendDst:
    // blendDstAlpha:
    // blendEquation:
    // blendEquationAlpha
    // blending
    // blendSrc
    // blendSrcAlpha
    // clipIntersection
    clippingShadows: boolean;
    colorWrite: boolean;
    // depthFunc
    depthWrite: boolean;
    fog: boolean;
    id: number;
    isMaterial: boolean;
    lights: boolean;
    name: ?string;
    opacity: number;
    overdraw: number;
    // polygonOffset
    polygonOffsetFactor: number;
    polygonOffsetUnits: number;
    // precision
    premultipliedAlpha: boolean;
    // shaded
    // side
    transparent: boolean;
    type: 'Material';
    uuid: string;
    // vertexColors
    visible: boolean;


    // TODO: Add EventDispatcher methods

    clone(): this;
    copy(m: Material): void;
    dispose(): void;
    setValues(vs: mixed): void;
    toJSON(meta: mixed): string;
    update(): void;
  }

  declare type MeshPhongMaterialCtorArgs = {
    alphaMap?: Texture,
    aoMap?: Texture,
    aoMapIntensity?: number,
    bumpMap?: Texture,
    bumpScale?: number,
    color?: number,
    combine?: CombineStrategy,
    displacementMap?: Texture,
    displacementScale?: number,
    displacementBias?: number,
    emissive?: Color,
    emissiveMap?: Texture,
    emissiveIntensity?: number,
    // Docs aren't clear what type envMap should be.
    envMap?: Texture,
    // isMeshPhongMaterial,
    lightMap?: Texture,
    lightMapIntensity?: number,
    map?: Texture,
    morphNormals?: bool,
    normalMap?: Texture,
    morphTargets?: bool,
    normalScale?: Vector2,
    reflectivity?: number,
    refractionRatio?: number,
    shininess?: number,
    skinning?: bool,
    // TODO: Use opaque type alias here.
    specular?: number,
    specularMap?: Texture,
    wireframe?: bool,
    wireframeLinecap?: WireframeLineCap,
    wireframeLinejoin?: WireframeLineJoin,
    wireframeLineWidth?: number,
  }

  declare export class MeshPhongMaterial extends Material {
    constructor(args?: MeshPhongMaterialCtorArgs): this;

    alphaMap: Texture;
    aoMap: Texture;
    aoMapIntensity: number;
    bumpMap: Texture;
    bumpScale: number;
    color: number;
    combine: CombineStrategy;
    displacementMap: Texture;
    displacementScale: number;
    displacementBias: number;
    emissive: Color;
    emissiveMap: Texture;
    emissiveIntensity: number;
    // Docs aren't clear what type envMap should be.
    envMap: Texture;
    // isMeshPhongMaterial,
    lightMap: Texture;
    lightMapIntensity: number;
    map: Texture;
    morphNormals: bool;
    normalMap: Texture;
    morphTargets: bool;
    normalScale: Vector2;
    reflectivity: number;
    refractionRatio: number;
    shininess: number;
    skinning: bool;
    // TODO: Use opaque type alias here.
    specular: number;
    specularMap: Texture;
    wireframe: bool;
    wireframeLinecap: WireframeLineCap;
    wireframeLinejoin: WireframeLineJoin;
    wireframeLineWidth: number;
  }

  declare export class MultiMaterial extends Material {

  }

  // constants

  declare var TrianglesDrawMode: 0;
  declare var TriangleStripDrawMode: 1;
  declare var TriangleFanDrawMode: 2;

  declare type DrawMode = 0 | 1 | 2;
  // TODO: find out why the below won't work.
  // declare type DrawMode =
  //   TrianglesDrawMode |
  //   TriangleStripDrawmMode |
  //   TriangleFanDrawMode

  declare var MultiplyOperation: 0;
  declare var MixOperation: 1;
  declare var AddOperation: 2;

  declare type CombineStrategy = 0 | 1 | 2
    // MultiplyOperation |
    // MixOperation |
    // AddOperation

  declare type WireframeLineCap =
    'butt' |
    'round' |
    'square'

  declare type WireframeLineJoin =
    'round' |
    'bevel' |
    'miter'

  // end constants

  // The Material base class doesn't use these, but the subclasses can.
  declare type MaterialSubclassCtorArgs = {

  }

  // TODO: Make a MaterialCtorArgs for Material subclasses to use.
  declare type MeshBasicMaterialCtorArgs = {
    alphaMap?: ?Texture,
    aoMap?: ?Texture,
    aoMapIntensity?: number,
    color?: Color | string,
    combine?: CombineStrategy,
    isBasicMeshMaterial?: bool,
    envMap?: ?Texture,
    lightMap?: ?Texture,
    lights?: bool,
    map?: ?Texture,
    morphTargets?: bool,
    refractionRatio?: number,
    skinning?: false,
    specularMap?: ?Texture,
    wireframe?: bool,
    wireframeLineCap?: WireframeLineCap,
    wireframeLineJoin?: WireframeLineJoin,
  }
  declare export class MeshBasicMaterial extends Material {
    constructor(args?: MeshBasicMaterialCtorArgs): this;
    alphaMap: ?Texture;
    aoMap: ?Texture;
    aoMapIntensity: number;
    color: Color;
    combine: CombineStrategy;
    isBasicMeshMaterial: bool;
    envMap: ?Texture;
    lightMap: ?Texture;
    lights: bool;
    map: ?Texture;
    morphTargets: bool;
    refractionRatio: number;
    skinning: false;
    specularMap: ?Texture;
    wireframe: bool;
    wireframeLineCap: WireframeLineCap;
    wireframeLineJoin: WireframeLineJoin;
  }

  declare type RepeatWrappingEnum = number
  // In case we really need this, see:
  // https://stackoverflow.com/questions/29133137/three-js-looking-for-an-alternative-to-meshfacematerial
  // declare class MeshFaceMaterial extends Material {
  //   constructor(): this;
  // }

  declare type BoxGeometryParams = {
    width: number;
    height: number;
    depth: number;
    widthSegments: number;
    heightSegments: number;
    depthSegments: number;
  }
  declare export class BoxGeometry extends Geometry {
    constructor(
      width: number,
      height: number,
      depth: number,
      widthSegments?: number,
      heightSegments?: number,
      depthSegments?: number
    ): this;

    parameters: BoxGeometryParams;
  }

  declare class LightShadow {
    constructor(camera: Camera): this;

    camera: Camera;
    bias: number;
    map: Texture;
    mapSize: Vector2;
    matrix: Matrix4;
    radius: number;

    copy: (source: LightShadow) => void;
    clone: () => LightShadow;
    toJSON: () => string;
  }

  declare export class Light extends Object3D {
    constructor(color?: number, intensity?: number): this;

    color: Color;
    intensity: number;
    isLight: bool;

    copy: (source: Light) => void;
    toJSON: () => string;
  }

  declare export class AmbientLight extends Light {
    constructor(
      color?: number,
      intensity?: number,
    ): this;

    isAmbientLight: bool;
  }


  declare export class PointLight extends Light {
    constructor(
      color?: number,
      intensity?: number,
      distance?: number,
      decay?: number
    ): this;

    decay: number;
    distance: number;
    isPointLight: bool;
    power: number;
    shadow: mixed;
    // This likely intends to copy from a PointLight but Flow can't enforce
    // that.
    copy: (source: Light) => void;

  }
  declare class LoadingManager {}
  declare export class Texture {}

  declare function TextureLoaderOnLoadCallback(texture: Texture): void;
  declare function TextureLoaderOnProgressCallback(request: XMLHttpRequest): void;
  declare function TextureLoaderOnErrorCallback(error: Error): void;

  declare export class TextureLoader {
    constructor(): this;
    constructor(loadingManager: LoadingManager): this;

    crossOrigin: ?string;
    manager: LoadingManager;
    path: ?string;
    withCredentials: ?boolean;

    load(
      url: string,
      onLoad: typeof TextureLoaderOnLoadCallback,
      onProgress: typeof TextureLoaderOnProgressCallback,
      onError: typeof TextureLoaderOnErrorCallback,
    ): void;
    setCrossOrigin(value: string): void;
    setWithCredentials(value: boolean): void;
  }



  declare class WebGLRenderTarget {}

  declare export class WebGLRenderer {
    constructor(...args: Array<mixed>): this;
    render(
      scene: Scene,
      camera: Camera,
      renderTarget?: WebGLRenderTarget, forceClear?: boolean
    ): void;
    setSize(width: number, height: number, updateStyle: boolean): void;
    domElement: Element;
  }

  // declare var Geometry: Geometry
  // declare var MeshPhoneMaterial: MeshPhongMaterial
  // declare var MultiMaterial: MultiMaterial
  // declare var MeshBasicMaterial: MeshBasicMaterial
  declare export var RepeatWrapping: RepeatWrappingEnum

}

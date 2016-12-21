declare module 'parse/node' {
  declare module.exports: $npm$parse$Parse
}

declare module 'parse/react-native' {
  declare module.exports: $npm$parse$Parse
}

declare module 'parse/browser' {
  declare module.exports: $npm$parse$Parse
}

type $npm$parse$Parse = {
  initialize(applicationId: string, javaScriptKey: string): void,
  Analytics: any, // TODO
  ACL: Class<ParseACL>,
  Cloud: ParseCloud,
  CoreManager: any, // TODO
  Config: Class<ParseConfig>,
  Error: Class<ParseError>,
  FacebookUtils: any, // TODO
  File: Class<ParseFile>,
  GeoPoint: Class<ParseGeoPoint>,
  Installation: any, // TODO
  LiveQuery: Class<LiveQuery>,
  LiveQueryClient: Class<LiveQueryClient>,
  Object: Class<ParseObject>,
  Promise: any, // TODO
  Push: any, // TODO
  Relation: Class<ParseRelation>,
  Role: Class<ParseRole>,
  Session: Class<Session>,
  Storage: any, // TODO
  Query: Class<ParseQuery>,
  User: Class<ParseUser>
}

type AttributeMap = { [attr: string]: any }
type ObjectCache = { [attr: string]: string }

type RequestOptions = {
  useMasterKey?: boolean,
  sessionToken?: string,
  installationId?: string
}

type FullOptions = {
  success?: any,
  error?: any,
  useMasterKey?: boolean,
  sessionToken?: string,
  installationId?: string
}

type Pointer = {
  __type: string,
  className: string,
  objectId: string
}

type SaveParams = {
  method: string,
  path: string,
  body: AttributeMap
}

// =========================
// Promises results
// =========================
type MixedPromiseResult = Promise<ParseObject | ParseUser | ParseRole>

// =========================
// ParseConfig
// =========================
declare class ParseConfig {
  static(): ParseConfig,
  attributes: { [key: string]: any },
  get(attr: string): any,
  escape(attr: string): string,
  static current(): ParseConfig,
  static get(options?: Object): Promise<ParseConfig>
}

// =========================
// ParseCloud
// =========================
declare type ParseCloud = {
  run(name: string, data?: mixed, options?: { [key: string]: mixed }): Promise<any>,
  define(name: string, cloudFunction: any): any,
  beforeSave(className: string, trigger: any): any,
  afterSave(className: string, trigger: any): any,
  beforeDelete(className: string, trigger: any): any,
  afterDelete(className: string, trigger: any): any,
  beforeFind(className: string, trigger: any): any,
  afterFind(className: string, trigger: any): any
}

// =========================
// ParseGeoPoint
// =========================
declare class ParseGeoPoint {
  static(arg1: Array<number> | { latitude: number; longitude: number } | number, arg2?: number): ParseGeoPoint,
  toJSON(): { __type: string; latitude: number; longitude: number },
  equals(other: mixed): boolean,
  radiansTo(point: ParseGeoPoint): number,
  kilometersTo(point: ParseGeoPoint): number,
  milesTo(point: ParseGeoPoint): number,
  static current(options?: Object): void
}

// =========================
// ParseQuery
// =========================
type BatchOptions = FullOptions & { batchSize?: number }
type WhereClause = {
  [attr: string]: mixed;
}

export type QueryJSON = {
  where: WhereClause;
  include?: string;
  keys?: string;
  limit?: number;
  skip?: number;
  order?: string;
  className?: string;
  count?: number;
}

declare class ParseQuery {
  static(objectClass: string | ParseObject): ParseQuery,
  className: string,
  toJSON(): QueryJSON,
  get(objectId: string, options?: FullOptions): MixedPromiseResult,
  find(options?: FullOptions): MixedPromiseResult,
  count(options?: FullOptions): MixedPromiseResult,
  first(options?: FullOptions): MixedPromiseResult,
  each(callback: (obj: ParseObject) => any, options?: BatchOptions): MixedPromiseResult,
  equalTo(key: string, value: mixed): ParseQuery,
  notEqualTo(key: string, value: mixed): ParseQuery,
  lessThan(key: string, value: mixed): ParseQuery,
  greaterThan(key: string, value: mixed): ParseQuery,
  lessThanOrEqualTo(key: string, value: mixed): ParseQuery,
  greaterThanOrEqualTo(key: string, value: mixed): ParseQuery,
  containedIn(key: string, value: mixed): ParseQuery,
  notContainedIn(key: string, value: mixed): ParseQuery,
  containsAll(key: string, values: Array<mixed>): ParseQuery,
  exists(key: string): ParseQuery,
  doesNotExist(key: string): ParseQuery,
  matches(key: string, regex: RegExp, modifiers: string): ParseQuery,
  matchesQuery(key: string, query: ParseQuery): ParseQuery,
  doesNotMatchQuery(key: string, query: ParseQuery): ParseQuery,
  matchesKeyInQuery(key: string, queryKey: string, query: ParseQuery): ParseQuery,
  doesNotMatchKeyInQuery(key: string, queryKey: string, query: ParseQuery): ParseQuery,
  contains(key: string, value: string): ParseQuery,
  startsWith(key: string, value: string): ParseQuery,
  endsWith(key: string, value: string): ParseQuery,
  near(key: string, point: ParseGeoPoint): ParseQuery,
  withinRadians(key: string, point: ParseGeoPoint, distance: number): ParseQuery,
  withinMiles(key: string, point: ParseGeoPoint, distance: number): ParseQuery,
  withinKilometers(key: string, point: ParseGeoPoint, distance: number): ParseQuery,
  withinGeoBox(key: string, southwest: ParseGeoPoint, northeast: ParseGeoPoint): ParseQuery,
  ascending(...keys: Array<string>): ParseQuery,
  addAscending(...keys: Array<string>): ParseQuery,
  descending(...keys: Array<string>): ParseQuery,
  addDescending(...keys: Array<string>): ParseQuery,
  skip(n: number): ParseQuery,
  limit(n: number): ParseQuery,
  include(...keys: Array<string>): ParseQuery,
  select(...keys: Array<string>): ParseQuery,
  subscribe(): any,
  static or(...queries: Array<ParseQuery>): ParseQuery
}

// =========================
// ParseFile
// =========================
type Base64 = { base64: string }
type FileData = Array<number> | Base64 | File
type FileSource = { format: 'file', file: File, type: string } | { format: 'base64', base64: string, type: string }

declare class ParseFile {
  static(name: string, data?: FileData, type?: string): ParseFile,
  name(): string,
  url(options?: { forceSecure?: boolean }): ?string,
  save(options?: { success?: any, error?: any }): Promise<ParseFile>,
  toJSON(): { name: ?string, url: ?string },
  equals(other: mixed): boolean
}

// =========================
// ParseACL
// =========================
type PermissionsMap = { [permission: string]: boolean }
type ByIdMap = { [userId: string]: PermissionsMap }

declare class ParseACL {
  permissionsById: ByIdMap,
  static(arg1: ParseUser | ByIdMap): ParseACL,
  toJSON(): ByIdMap,
  equals(other: ParseACL): boolean,
  setReadAccess(userId: ParseUser | ParseRole | string, allowed: boolean): void,
  getReadAccess(userId: ParseUser | ParseRole | string): boolean,
  setWriteAccess(userId: ParseUser | ParseRole | string, allowed: boolean): void,
  getWriteAccess(userId: ParseUser | ParseRole | string): boolean,
  setPublicReadAccess(allowed: boolean): void,
  getPublicReadAccess(): boolean,
  setPublicWriteAccess(allowed: boolean): void,
  getPublicWriteAccess(): boolean,
  getRoleReadAccess(role: ParseRole | string): boolean,
  getRoleWriteAccess(role: ParseRole | string): boolean,
  setRoleReadAccess(role: ParseRole | string, allowed: boolean): void,
  setRoleWriteAccess(role: ParseRole | string, allowed: boolean): void
}

// =========================
// ParseObject
// =========================
declare class ParseObject {
  static(className: ?string | { className: string, [attr: string]: mixed }, attributes?: { [attr: string]: mixed }, options?: { ignoreValidation: boolean }): ParseObject,
  id: ?string,
  className: string,
  toJSON(seen: Array<any> | void): AttributeMap,
  equals(other: mixed): boolean,
  dirty(attr?: string): boolean,
  dirtyKeys(): Array<string>,
  toPointer(): Pointer,
  get(string: string): any,
  relation(attr: string): ParseRelation,
  escape(attr: string): string,
  has(attr: string): boolean,
  set(key: mixed, value: mixed, options?: mixed): ParseObject | boolean,
  unset(attr: string, options?: { [opt: string]: mixed }): ParseObject | boolean,
  increment(attr: string, amount?: number): ParseObject | boolean,
  add(attr: string, item: mixed): ParseObject | boolean,
  addUnique(attr: string, item: mixed): ParseObject | boolean,
  remove(attr: string, item: mixed): ParseObject | boolean,
  clone(): any,
  newInstance(): any,
  isNew(): boolean,
  existed(): boolean,
  isValid(): boolean,
  validate(attrs: AttributeMap): ParseError | boolean,
  getACL(): ?ParseACL,
  setACL(acl: ParseACL, options?: mixed): ParseObject | boolean,
  revert(): void,
  clear(): ParseObject | boolean,
  fetch(options: RequestOptions): Promise<any>,
  save(arg1: ?string | { [attr: string]: mixed }, arg2?: FullOptions | mixed, arg3?: FullOptions): Promise<ParseObject>,
  destroy(options: RequestOptions): Promise<any>,
  static fetchAll(list: Array<ParseObject>, options?: RequestOptions): Promise<ParseObject>,
  static fetchAllIfNeeded(list: Array<ParseObject>, options?: RequestOptions): Promise<ParseObject>,
  static destroyAll(list: Array<ParseObject>, options?: RequestOptions): any,
  static saveAll(list: Array<ParseObject>, options?: RequestOptions): Promise<ParseObject>,
  static createWithoutData(id: string): ParseObject,
  static fromJSON(json: Object, override: boolean): ParseObject,
  // static extend(className: any, protoProps: any, classProps: any): Class<ParseObject>,
  static enableSingleInstance(): void,
  static disableSingleInstance(): void
}

// =========================
// ParseUser
// =========================
declare class ParseUser extends ParseObject {
  static(attributes: ?AttributeMap): ParseUser,
  isCurrent(): boolean,
  getUsername(): ?string,
  setUsername(username: string): void,
  setPassword(password: string): void,
  getEmail(): ?string,
  setEmail(email: string): void,
  getSessionToken(): ?string,
  authenticated(): boolean,
  signUp(attrs: AttributeMap, options?: FullOptions): Promise<ParseUser>,
  logIn(options: FullOptions): Promise<ParseUser>,
  save(...args: Array<any>): Promise<ParseUser>,
  destroy(...args: Array<any>): Promise<ParseUser>,
  fetch(...args: Array<any>): Promise<ParseUser>,
  static readOnlyAttributes(): void,
  static extend(protoProps: {[prop: string]: any}, classProps: {[prop: string]: any}): void,
  static current(): ?ParseUser,
  static currentAsync(): Promise<?ParseUser>,
  static signUp(username: string, password: string, attrs?: AttributeMap, options?: RequestOptions): void,
  static logIn(username: string, password: string, options?: RequestOptions): void,
  static become(sessionToken: string, options?: RequestOptions): void,
  static logOut(): void,
  static requestPasswordReset(email: string, options?: RequestOptions): void,
  static allowCustomUserClass(isAllowed: boolean): void,
  static enableRevocableSession(options?: RequestOptions): void,
  static enableUnsafeCurrentUser(): void,
  static disableUnsafeCurrentUser(): void
}

// =========================
// ParseRelation
// =========================
declare class ParseRelation {
  static(parent: ?ParseObject, key: ?string): ParseRelation,
  parent: ?ParseObject,
  add(objects: ParseObject | Array<ParseObject | string>): ParseObject,
  remove(objects: ParseObject | Array<ParseObject | string>): void,
  toJSON(): { __type: 'Relation', className: ?string },
  query(): ParseQuery
}

// =========================
// ParseError
// =========================
declare class ParseError {
  static(code: ?number, message: ?string): ParseError,
  code: ?number,
  message: ?string
}

// =========================
// ParseRole
// =========================
declare class ParseRole extends ParseObject {
  static(name: string, acl: ParseACL): ParseRole,
  getName(): ?string,
  setName(name: string, options?: RequestOptions): ParseObject | boolean,
  getUsers(): ParseRelation,
  getRoles(): ParseRelation,
  validate(attrs: AttributeMap, options?: RequestOptions): ParseError | boolean
}

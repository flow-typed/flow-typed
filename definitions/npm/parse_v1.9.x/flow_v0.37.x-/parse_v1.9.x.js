declare module 'parse/node' {
  declare module.exports: $npm$parse$Parse
}

declare module 'parse/react-native' {
  declare module.exports: $npm$parse$Parse
}

declare module 'parse/browser' {
  declare module.exports: $npm$parse$Parse
}

declare type $npm$parse$Parse = {
  initialize(applicationId: string, javaScriptKey: string): void,
  Analytics: any, // TODO
  ACL: Class<$npm$parse$ParseACL>,
  Cloud: $npm$parse$ParseCloud,
  CoreManager: any, // TODO
  Config: Class<$npm$parse$ParseConfig>,
  Error: Class<$npm$parse$ParseError>,
  FacebookUtils: any, // TODO
  File: Class<$npm$parse$ParseFile>,
  GeoPoint: Class<$npm$parse$ParseGeoPoint>,
  Installation: any, // TODO
  LiveQuery: any,
  LiveQueryClient: any,
  Object: Class<$npm$parse$ParseObject>,
  Promise: any, // TODO
  Push: any, // TODO
  Relation: Class<$npm$parse$ParseRelation>,
  Role: Class<$npm$parse$ParseRole>,
  Session: any, // TODO
  Storage: any, // TODO
  Query: Class<$npm$parse$ParseQuery>,
  User: Class<$npm$parse$ParseUser>
}

declare type $npm$parse$AttributeMap = { [attr: string]: any }

declare type $npm$parse$RequestOptions = {
  useMasterKey?: boolean,
  sessionToken?: string,
  installationId?: string
}

declare type $npm$parse$FullOptions = {
  success?: any,
  error?: any,
  useMasterKey?: boolean,
  sessionToken?: string,
  installationId?: string
}

declare type $npm$parse$Pointer = {
  __type: string,
  className: string,
  objectId: string
}

// =========================
// ParseConfig
// =========================
declare class $npm$parse$ParseConfig {
  static(): $npm$parse$ParseConfig,
  attributes: { [key: string]: any },
  get(attr: string): any,
  escape(attr: string): string,
  static current(): $npm$parse$ParseConfig,
  static get(options?: Object): Promise<$npm$parse$ParseConfig>
}

// =========================
// ParseCloud
// =========================
declare type $npm$parse$ParseCloud = {
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
declare class $npm$parse$ParseGeoPoint {
  static(arg1: Array<number> | { latitude: number; longitude: number } | number, arg2?: number): $npm$parse$ParseGeoPoint,
  toJSON(): { __type: string; latitude: number; longitude: number },
  equals(other: mixed): boolean,
  radiansTo(point: $npm$parse$ParseGeoPoint): number,
  kilometersTo(point: $npm$parse$ParseGeoPoint): number,
  milesTo(point: $npm$parse$ParseGeoPoint): number,
  static current(options?: Object): void
}

// =========================
// ParseQuery
// =========================
declare type $npm$parse$QueryJSON = {
  where: {
    [attr: string]: mixed;
  },
  include?: string;
  keys?: string;
  limit?: number;
  skip?: number;
  order?: string;
  className?: string;
  count?: number;
}

declare class $npm$parse$ParseQuery {
  static(objectClass: string | $npm$parse$ParseObject): $npm$parse$ParseQuery,
  className: string,
  toJSON(): $npm$parse$QueryJSON,
  get(objectId: string, options?: $npm$parse$FullOptions): Promise<?$npm$parse$ParseObject>,
  find(options?: $npm$parse$FullOptions): Promise<Array<$npm$parse$ParseObject>>,
  count(options?: $npm$parse$FullOptions): number,
  first(options?: $npm$parse$FullOptions): Promise<?$npm$parse$ParseObject>,
  each(callback: (obj: $npm$parse$ParseObject) => any, options?: $npm$parse$FullOptions & { batchSize?: number }): Promise<$npm$parse$ParseObject>,
  equalTo(key: string, value: mixed): $npm$parse$ParseQuery,
  notEqualTo(key: string, value: mixed): $npm$parse$ParseQuery,
  lessThan(key: string, value: mixed): $npm$parse$ParseQuery,
  greaterThan(key: string, value: mixed): $npm$parse$ParseQuery,
  lessThanOrEqualTo(key: string, value: mixed): $npm$parse$ParseQuery,
  greaterThanOrEqualTo(key: string, value: mixed): $npm$parse$ParseQuery,
  containedIn(key: string, value: mixed): $npm$parse$ParseQuery,
  notContainedIn(key: string, value: mixed): $npm$parse$ParseQuery,
  containsAll(key: string, values: Array<mixed>): $npm$parse$ParseQuery,
  exists(key: string): $npm$parse$ParseQuery,
  doesNotExist(key: string): $npm$parse$ParseQuery,
  matches(key: string, regex: RegExp, modifiers: string): $npm$parse$ParseQuery,
  matchesQuery(key: string, query: $npm$parse$ParseQuery): $npm$parse$ParseQuery,
  doesNotMatchQuery(key: string, query: $npm$parse$ParseQuery): $npm$parse$ParseQuery,
  matchesKeyInQuery(key: string, queryKey: string, query: $npm$parse$ParseQuery): $npm$parse$ParseQuery,
  doesNotMatchKeyInQuery(key: string, queryKey: string, query: $npm$parse$ParseQuery): $npm$parse$ParseQuery,
  contains(key: string, value: string): $npm$parse$ParseQuery,
  startsWith(key: string, value: string): $npm$parse$ParseQuery,
  endsWith(key: string, value: string): $npm$parse$ParseQuery,
  near(key: string, point: $npm$parse$ParseGeoPoint): $npm$parse$ParseQuery,
  withinRadians(key: string, point: $npm$parse$ParseGeoPoint, distance: number): $npm$parse$ParseQuery,
  withinMiles(key: string, point: $npm$parse$ParseGeoPoint, distance: number): $npm$parse$ParseQuery,
  withinKilometers(key: string, point: $npm$parse$ParseGeoPoint, distance: number): $npm$parse$ParseQuery,
  withinGeoBox(key: string, southwest: $npm$parse$ParseGeoPoint, northeast: $npm$parse$ParseGeoPoint): $npm$parse$ParseQuery,
  ascending(...keys: Array<string>): $npm$parse$ParseQuery,
  addAscending(...keys: Array<string>): $npm$parse$ParseQuery,
  descending(...keys: Array<string>): $npm$parse$ParseQuery,
  addDescending(...keys: Array<string>): $npm$parse$ParseQuery,
  skip(n: number): $npm$parse$ParseQuery,
  limit(n: number): $npm$parse$ParseQuery,
  include(...keys: Array<string>): $npm$parse$ParseQuery,
  select(...keys: Array<string>): $npm$parse$ParseQuery,
  subscribe(): any,
  static or(...queries: Array<$npm$parse$ParseQuery>): $npm$parse$ParseQuery
}

// =========================
// ParseFile
// =========================
declare type $npm$parse$Base64 = { $npm$parse$Base64: string }
declare type $npm$parse$FileData = Array<number> | $npm$parse$Base64 | File
declare type $npm$parse$FileSource = { format: 'file', file: File, type: string } | { format: '$npm$parse$Base64', $npm$parse$Base64: string, type: string }

declare class $npm$parse$ParseFile {
  static(name: string, data?: $npm$parse$FileData, type?: string): $npm$parse$ParseFile,
  name(): string,
  url(options?: { forceSecure?: boolean }): ?string,
  save(options?: { success?: any, error?: any }): Promise<$npm$parse$ParseFile>,
  toJSON(): { name: ?string, url: ?string },
  equals(other: mixed): boolean
}

// =========================
// ParseACL
// =========================
declare type $npm$parse$PermissionsMap = { [permission: string]: boolean }
declare type $npm$parse$ByIdMap = { [userId: string]: $npm$parse$PermissionsMap }

declare class $npm$parse$ParseACL {
  permissionsById: $npm$parse$ByIdMap,
  static(arg1: $npm$parse$ParseUser | $npm$parse$ByIdMap): $npm$parse$ParseACL,
  toJSON(): $npm$parse$ByIdMap,
  equals(other: $npm$parse$ParseACL): boolean,
  setReadAccess(userId: $npm$parse$ParseUser | $npm$parse$ParseRole | string, allowed: boolean): void,
  getReadAccess(userId: $npm$parse$ParseUser | $npm$parse$ParseRole | string): boolean,
  setWriteAccess(userId: $npm$parse$ParseUser | $npm$parse$ParseRole | string, allowed: boolean): void,
  getWriteAccess(userId: $npm$parse$ParseUser | $npm$parse$ParseRole | string): boolean,
  setPublicReadAccess(allowed: boolean): void,
  getPublicReadAccess(): boolean,
  setPublicWriteAccess(allowed: boolean): void,
  getPublicWriteAccess(): boolean,
  getRoleReadAccess(role: $npm$parse$ParseRole | string): boolean,
  getRoleWriteAccess(role: $npm$parse$ParseRole | string): boolean,
  setRoleReadAccess(role: $npm$parse$ParseRole | string, allowed: boolean): void,
  setRoleWriteAccess(role: $npm$parse$ParseRole | string, allowed: boolean): void
}

// =========================
// ParseObject
// =========================
declare class $npm$parse$ParseObject {
  static(className: ?string | { className: string, [attr: string]: mixed }, attributes?: { [attr: string]: mixed }, options?: { ignoreValidation: boolean }): $npm$parse$ParseObject,
  id: string,
  className: string,
  toJSON(seen: Array<any> | void): $npm$parse$AttributeMap,
  equals(other: mixed): boolean,
  dirty(attr?: string): boolean,
  dirtyKeys(): Array<string>,
  to$npm$parse$Pointer(): $npm$parse$Pointer,
  get(string: string): any,
  relation(attr: string): $npm$parse$ParseRelation,
  escape(attr: string): string,
  has(attr: string): boolean,
  set(key: mixed, value: mixed, options?: mixed): $npm$parse$ParseObject | boolean,
  unset(attr: string, options?: { [opt: string]: mixed }): $npm$parse$ParseObject | boolean,
  increment(attr: string, amount?: number): $npm$parse$ParseObject | boolean,
  add(attr: string, item: mixed): $npm$parse$ParseObject | boolean,
  addUnique(attr: string, item: mixed): $npm$parse$ParseObject | boolean,
  remove(attr: string, item: mixed): $npm$parse$ParseObject | boolean,
  clone(): any,
  newInstance(): any,
  isNew(): boolean,
  existed(): boolean,
  isValid(): boolean,
  validate(attrs: $npm$parse$AttributeMap): $npm$parse$ParseError | boolean,
  getACL(): ?$npm$parse$ParseACL,
  setACL(acl: $npm$parse$ParseACL, options?: mixed): $npm$parse$ParseObject | boolean,
  revert(): void,
  clear(): $npm$parse$ParseObject | boolean,
  fetch(options: $npm$parse$RequestOptions): Promise<any>,
  save(arg1: ?string | { [attr: string]: mixed }, arg2?: $npm$parse$FullOptions, arg3?: $npm$parse$FullOptions): Promise<$npm$parse$ParseObject>,
  destroy(options: $npm$parse$RequestOptions): Promise<any>,
  static fetchAll(list: Array<$npm$parse$ParseObject>, options?: $npm$parse$RequestOptions): Promise<$npm$parse$ParseObject>,
  static fetchAllIfNeeded(list: Array<$npm$parse$ParseObject>, options?: $npm$parse$RequestOptions): Promise<$npm$parse$ParseObject>,
  static destroyAll(list: Array<$npm$parse$ParseObject>, options?: $npm$parse$RequestOptions): any,
  static saveAll(list: Array<$npm$parse$ParseObject>, options?: $npm$parse$RequestOptions): Promise<$npm$parse$ParseObject>,
  static createWithoutData(id: string): $npm$parse$ParseObject,
  static fromJSON(json: Object, override: boolean): $npm$parse$ParseObject,
  // static extend(className: any, protoProps: any, classProps: any): Class<$npm$parse$ParseObject>,
  static enableSingleInstance(): void,
  static disableSingleInstance(): void
}

// =========================
// ParseUser
// =========================
declare class $npm$parse$ParseUser extends $npm$parse$ParseObject {
  static(attributes: ?$npm$parse$AttributeMap): $npm$parse$ParseUser,
  isCurrent(): boolean,
  getUsername(): string,
  setUsername(username: string): void,
  setPassword(password: string): void,
  getEmail(): ?string,
  setEmail(email: string): void,
  getSessionToken(): string,
  authenticated(): boolean,
  signUp(attrs?: $npm$parse$AttributeMap, options?: $npm$parse$FullOptions): Promise<$npm$parse$ParseUser>,
  logIn(options?: $npm$parse$FullOptions): Promise<$npm$parse$ParseUser>,
  save(...args: Array<any>): Promise<$npm$parse$ParseUser>,
  destroy(...args: Array<any>): Promise<$npm$parse$ParseUser>,
  fetch(...args: Array<any>): Promise<$npm$parse$ParseUser>,
  static readOnlyAttributes(): void,
  static extend(protoProps: {[prop: string]: any}, classProps: {[prop: string]: any}): void,
  static current(): ?$npm$parse$ParseUser,
  static currentAsync(): Promise<?$npm$parse$ParseUser>,
  static signUp(username: string, password: string, attrs?: $npm$parse$AttributeMap, options?: $npm$parse$RequestOptions): Promise<$npm$parse$ParseUser>,
  static logIn(username: string, password: string, options?: $npm$parse$RequestOptions): Promise<$npm$parse$ParseUser>,
  static become(sessionToken: string, options?: $npm$parse$RequestOptions): void,
  static logOut(): void,
  static requestPasswordReset(email: string, options?: $npm$parse$RequestOptions): void,
  static allowCustomUserClass(isAllowed: boolean): void,
  static enableRevocableSession(options?: $npm$parse$RequestOptions): void,
  static enableUnsafeCurrentUser(): void,
  static disableUnsafeCurrentUser(): void
}

// =========================
// ParseRelation
// =========================
declare class $npm$parse$ParseRelation {
  static(parent: ?$npm$parse$ParseObject, key: ?string): $npm$parse$ParseRelation,
  parent: ?$npm$parse$ParseObject,
  add(objects: $npm$parse$ParseObject | Array<$npm$parse$ParseObject | string>): $npm$parse$ParseObject,
  remove(objects: $npm$parse$ParseObject | Array<$npm$parse$ParseObject | string>): void,
  toJSON(): { __type: 'Relation', className: ?string },
  query(): $npm$parse$ParseQuery
}

// =========================
// ParseError
// =========================
declare class $npm$parse$ParseError {
  static(code: ?number, message: ?string): $npm$parse$ParseError,
  code: ?number,
  message: ?string
}

// =========================
// ParseRole
// =========================
declare class $npm$parse$ParseRole extends $npm$parse$ParseObject {
  static(name: string, acl: $npm$parse$ParseACL): $npm$parse$ParseRole,
  getName(): ?string,
  setName(name: string, options?: $npm$parse$RequestOptions): $npm$parse$ParseObject | boolean,
  getUsers(): $npm$parse$ParseRelation,
  getRoles(): $npm$parse$ParseRelation,
  validate(attrs: $npm$parse$AttributeMap, options?: $npm$parse$RequestOptions): $npm$parse$ParseError | boolean
}

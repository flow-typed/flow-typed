import mongoose from "mongoose";

type MongoId = BSONObjectId | string | number;

type SchemaFields = {
  [fieldName: string]: any
};

type ToObjectOpts<Doc> = {
  getters?: boolean,
  virtuals?: boolean,
  minimize?: boolean,
  transform?: (doc: Doc, ret: Object, options: Object) => any,
  depopulate?: boolean,
  versionKey?: boolean,
  retainKeyOrder?: boolean
};

type SchemaOpts<Doc> = {
  autoIndex?: boolean,
  bufferCommands?: boolean,
  capped?: boolean,
  collection?: string,
  emitIndexErrors?: boolean,
  id?: boolean,
  _id?: boolean,
  minimize?: boolean,
  read?: string,
  safe?: boolean,
  shardKey?: boolean,
  strict?: boolean,
  toJSON?: ToObjectOpts<Doc>,
  toObject?: ToObjectOpts<Doc>,
  typeKey?: string,
  useNestedStrict?: boolean,
  validateBeforeSave?: boolean,
  versionKey?: string,
  timestamps?:
    | boolean
    | {
        createdAt?: string,
        updatedAt?: string
      }
};

type IndexFields = {
  [fieldName: string]: 1 | -1 | true | false | string
};

type IndexOpts = {|
  background?: boolean,
  unique?: boolean,
  sparse?: boolean,
  partialFilterExpression?: Object,
  name?: string,
  default_language?: string,
  weights?: Object
|};

declare class BSONObjectId {
  constructor(id?: string | number | BSONObjectId): BSONObjectId;
  toHexString(): string;
  toString(): string;
  toJSON(): string;
  inspect(): string;
  equals(otherId: string | number | BSONObjectId): boolean;
  getTimestamp(): Date;

  static createFromTime(time: number): BSONObjectId;
  static createFromHexString(str: string): BSONObjectId;
  static isValid(id: string | number | BSONObjectId): boolean;
}

type Mongoose$Types = {|
  ObjectId: Class<BSONObjectId>,
  Mixed: Object,
  Embedded: Object,
  Document: Object,
  DocumentArray: Object,
  Subdocument: Object,
  Array: Object,
  Buffer: Object,
  Decimal128: Object
|};

type Mongoose$SchemaMethods = {
  [name: string]: Function
};

type Mongoose$SchemaStatics = {
  [name: string]: Function
};

type VirtualType = Object;

type Mongoose$SchemaHookTypes =
  | "save"
  | "validate"
  | "find"
  | "update"
  | "remove"
  | "findOneAndRemove"
  | "init";

type Mongoose$SchemaPlugin<Opts> = (
  schema: Mongoose$Schema<any>,
  opts: Opts
) => void;

declare class Mongoose$Schema<Doc> {
  static Types: Mongoose$Types;
  constructor(
    fields: SchemaFields,
    opts?: SchemaOpts<Doc>
  ): Mongoose$Schema<Doc>;
  index(fields: IndexFields, opts?: IndexOpts): this;
  methods: Mongoose$SchemaMethods;
  statics: Mongoose$SchemaStatics;
  virtual(fieldName: string): Mongoose$SchemaVirtualField;
  pre(
    hookType: Mongoose$SchemaHookTypes,
    serialCb: (next: Function) => any
  ): void;
  pre(
    hookType: Mongoose$SchemaHookTypes,
    true,
    parallelCb: (next: Function, done: Function) => any
  ): void;
  // post(hookType: Mongoose$SchemaHookTypes, parallelCb: (doc: Doc) => any): void;
  post(
    hookType: Mongoose$SchemaHookTypes,
    serialCb: (doc: Doc, next: Function) => any
  ): void;
  // post(hookType: Mongoose$SchemaHookTypes, serialCb: (error: Error, doc: Doc, next: Function) => any): void;
  plugin<Opts>(plugin: Mongoose$SchemaPlugin<Opts>, opts: Opts): void;
  add(fields: SchemaFields, prefix?: string): void;
  loadClass(cls: Class<Doc>): void;
  paths: {
    [name: string]: Mongoose$SchemaField<this>
  };
  clone(): Mongoose$Schema<Doc>;
  eachPath(fn: (path: string, fieldOpts: Object) => void): this;
  get(optionKey: string): any;
  set(optionKey: string, value: any): void;
  indexes(): ?Array<[string, IndexOpts]>;
  path(path: string): Object;
  path(path: string, schemaType: Object): void;
  pathType(path: string): string;
  remove(path: string | string[]): void;
  requiredPaths(invalidate?: boolean): string[];
  method(method: string, fn: Function): this;
  method(methods: { [method: string]: Function }): this;
  static (method: string, fn: Function): this;
  static (methods: { [method: string]: Function }): this;
  virtual(name: string, opts?: Object): VirtualType;
  virtualpath(name: string): ?VirtualType;
  indexTypes(): string[];
  reserved: string[];
  obj: SchemaOpts<Doc>;
  _indexes: Array<
    [{ [fieldName: string]: number | string }, { [optionName: string]: mixed }]
  >;
}

type Mongoose$SchemaField<Schema> = {
  path?: string,
  instance: string,
  caster?: ?Mongoose$SchemaField<Schema>,
  options?: ?{
    description: ?string
  },
  enumValues?: ?(string[]),
  schema?: Schema
};

declare class Mongoose$SchemaVirtualField {
  get(() => any): this;
  set((value: any) => any): this;
}

type MongooseProjection = Object | string;

type UpdateResult = {
  nMatched: number,
  nUpserted: number,
  nModified: number,
  ok?: boolean
};

declare class Mongoose$Document {
  static find(
    criteria?: Object,
    projection?: MongooseProjection,
    options?: Object
  ): Mongoose$Query<Array<this>, this>;
  static findOne(
    criteria?: Object,
    projection?: MongooseProjection
  ): Mongoose$Query<?this, this>;
  static findById(
    id: MongoId,
    projection?: MongooseProjection,
    options?: Object
  ): Mongoose$Query<?this, this>;
  static findOneAndRemove(
    criteria: ?Object,
    options?: Object
  ): Mongoose$Query<?this, this>;
  static findOneAndUpdate(
    criteria: ?Object,
    data: Object,
    options?: Object
  ): Mongoose$Query<?this, this>;
  static findByIdAndRemove(
    id: MongoId,
    options?: Object
  ): Mongoose$Query<?this, this>;
  static findByIdAndUpdate(
    id: MongoId,
    data: Object,
    options?: Object
  ): Mongoose$Query<?this, this>;
  static count(criteria: Object): Promise<number>;
  static remove(criteria: Object): Promise<mixed>;
  static update(
    criteria: Object,
    update: Object,
    options?: Object
  ): Promise<UpdateResult> & { exec(): Promise<UpdateResult> };
  static updateOne(
    criteria: Object,
    update: Object,
    options?: Object
  ): Promise<UpdateResult> & { exec(): Promise<UpdateResult> };
  static updateMany(
    criteria: Object,
    update: Object,
    options?: Object
  ): Promise<UpdateResult> & { exec(): Promise<UpdateResult> };
  static create(doc: $Shape<this> | Array<$Shape<this>>): Promise<this>;
  static where(criteria?: Object): Mongoose$Query<this, this>;
  static aggregate(pipeline: Object[]): Promise<any>;
  static bulkWrite(ops: Object[]): Promise<any>;
  static deleteMany(criteria: Object): Promise<any>;
  static deleteOne(criteria: Object): Promise<any>;
  static distinct(field: string, criteria?: Object): Promise<any>;
  static ensureIndexes(opts?: Object): Promise<any>;
  static hydrate(data: Object): Mongoose$Document;
  static insertMany(docs: Object | Object[], opts?: Object): Promise<any>;
  static mapReduce(o: Object): Promise<any>;
  static collection: Mongoose$Collection;
  static db: any;
  static modelName: string;
  static schema: Mongoose$Schema<this>;
  static on(type: string, cb: Function): void;

  constructor(data?: $Shape<this>): this;
  id: string | number;
  _id: MongoId;
  __v?: number;
  save(): Promise<this>;
  update(update: Object, options?: Object): Promise<UpdateResult>;
  set(data: $Shape<this>): this;
  set(path: string, val: any, type?: any, options?: Object): this;
  isSelected(fieldName: string): boolean;
  validate(opts?: Object): Promise<*>;
  validateSync(pathsToValidate: string | string[]): Error | void;
  errors: Object;
  isNew: boolean;
  schema: Mongoose$Schema<this>;

  $ignore(path: string): void;
  $isDefault(path: string): boolean;
  depopulate(path: string): this;
  equals(doc: Mongoose$Document): boolean;
  get(path: string, type?: Object): any;

  inspect(): Object;
  invalidate(
    path: string,
    errorMsg: string | Error,
    value?: any,
    kind?: string
  ): ValidationError;
  isDirectModified(path: string): boolean;
  isDirectSelected(path: string): boolean;
  isInit(path: string): boolean;
  isModified(path?: string): boolean;
  isSelected(path: string): boolean;
  markModified(path: string): void;
  modifiedPaths(): string[];

  populate(path?: string | Object, cb?: (err: Error, doc: this) => void): void;
  execPopulate(): Promise<this>;
  populated(path: string): ?MongoId;
  toJSON(options?: ToObjectOpts<this>): Object;
  toObject(options?: ToObjectOpts<this>): Object;
  toString(): string;
  unmarkModified(path: string): void;

  increment(): void;
  remove(): Promise<this>;
}

type ValidationError = Object;

// Try to replace `Mongoose$Query<Result, Doc>` on `this` in Flow above v0.53
// For better dropdown suggesting used `Mongoose$Query<Result, Doc>`
//   Fast check: `User.find().limit(5).` does not suggest if used `this`
declare class Mongoose$Query<Result, Doc> extends Promise<Result> {
  exec(): Promise<Result>;
  where(criteria: Object): Mongoose$Query<Result, Doc>;
  sort(fields: Object | string): Mongoose$Query<Result, Doc>;
  limit(n: number): Mongoose$Query<Result, Doc>;
  skip(n: number): Mongoose$Query<Result, Doc>;
  select(fields: MongooseProjection): Mongoose$Query<Result, Doc>;
  setOptions(opts: Object): Mongoose$Query<Result, Doc>;
  update(data: Object): Mongoose$Query<any, Doc>;
  update(
    criteria: Object,
    data: Object,
    opts?: {
      safe?: boolean,
      upsert?: boolean,
      multi?: boolean,
      runValidators?: boolean,
      setDefaultsOnInsert?: boolean,
      strict?: boolean,
      overwrite?: boolean
    }
  ): Mongoose$Query<any, Doc>;
  updateMany(
    criteria: Object,
    data: Object,
    opts?: Object
  ): Mongoose$Query<any, Doc>;
  updateOne(
    criteria: Object,
    data: Object,
    opts?: Object
  ): Mongoose$Query<any, Doc>;
  remove(criteria?: Object): Mongoose$Query<?Doc, Doc>;
  count(criteria?: Object): Promise<number>;
  schema: Mongoose$Schema<Doc>;
  $where(fn: Function): Mongoose$Query<Result, Doc>;
  batchSize(n: number): Mongoose$Query<Result, Doc>;
  collation(value: Object): Mongoose$Query<Result, Doc>;
  comment(val: string): Mongoose$Query<Result, Doc>;
  cursor(opts: Object): Mongoose$QueryCursor<Doc>;
  deleteMany(criteria?: Object): Mongoose$Query<any, Doc>;
  deleteOne(criteria?: Object): Mongoose$Query<any, Doc>;
  distinct(field: string, criteria?: Object): Mongoose$Query<Result, Doc>;
  find(criteria: Object): Mongoose$Query<Result, Doc>;
  findOne(criteria?: Object, projection?: Object): Mongoose$Query<?Doc, Doc>;
  findOneAndRemove(
    criteria: Object,
    opts?: { sort?: Object, maxTimeMS?: number, passRawResult?: boolean }
  ): Mongoose$Query<?Doc, Doc>;
  findOneAndUpdate(
    criteria: Object,
    data: Object,
    opts?: {
      new?: boolean,
      upsert?: boolean,
      fields?: Object | string,
      maxTimeMS?: number,
      runValidators?: boolean,
      setDefaultsOnInsert?: boolean,
      passRawResult?: boolean,
      runSettersOnQuery?: boolean
    }
  ): Mongoose$Query<?Doc, Doc>;
  getQuery(): Object;
  getUpdate(): Object;
  hint(index: Object): Mongoose$Query<Result, Doc>;
  lean(passPlainObject?: boolean): Mongoose$Query<any, Doc>;
  maxScan(n: number): Mongoose$Query<Result, Doc>;
  populate(path: string): Mongoose$Query<Result, Doc>;
  populate(obj: {
    path: string,
    select?: string,
    match?: Object,
    options?: Object
  }): Mongoose$Query<Result, Doc>;
  read(
    pref:
      | "primary"
      | "secondary"
      | "primaryPreferred"
      | "secondaryPreferred"
      | "nearest",
    tags?: Object[]
  ): Mongoose$Query<Result, Doc>;
  selected(): boolean;
  selectedExclusively(): boolean;
  selectedInclusively(): boolean;
  setOptions(options: Object): Mongoose$Query<Result, Doc>;
  slice(
    path: string,
    val: number | [number, number]
  ): Mongoose$Query<Result, Doc>;
  snapshot(bool: boolean): Mongoose$Query<Result, Doc>;
  stream(opts?: Object): Mongoose$QueryStream;
  tailable(bool: boolean, opts?: Object): Mongoose$Query<Result, Doc>;
  toConstructor(): Class<Mongoose$Query<Result, Doc>>;
}

declare class Mongoose$QueryCursor<Doc> {
  on(type: "data" | "end" | string, cb: Function): void;
  next(cb: (err: Error, doc: Doc) => void): void;
}

declare class Mongoose$QueryStream {
  destroy(): void;
  pause(): void;
  pipe(): void;
  resume(): void;
  paused: boolean;
  readable: boolean;
  on(event: "data" | "error" | "close", cb: Function): void;
}

declare class Mongoose$Collection {
  constructor(name: string, conn: Mongoose$Connection, opts?: Object): this;
  ensureIndex(): any;
  find(): any;
  findAndModify(): any;
  findOne(): any;
  getIndexes(): any;
  insert(): any;
  mapReduce(): any;
  save(): any;
  update(): any;
  collectionName: string;
  conn: Mongoose$Connection;
  name: string;
}

type ConnectionConnectOpts = {
  promiseLibrary?: any,
  autoReconnect?: boolean,
  reconnectTries?: number,
  reconnectInterval?: number,
  useMongoClient?: boolean,
  config?: {
    autoIndex?: boolean
  }
};
type ConnectionEventTypes = "error" | "open" | "disconnected" | string;

declare class Mongoose$Connection {
  constructor(): this;
  close(): Promise<any>;
  connect(uri: string, opts?: ConnectionConnectOpts): void;
  openUri(uri: string, opts?: ConnectionConnectOpts): void;
  model<Doc>(
    name: string | Doc,
    schema?: Mongoose$Schema<Doc>,
    collection?: Mongoose$Collection
  ): Class<Doc>;
  collection(name: string): Mongoose$Collection;
  modelNames(): string[];
  config: Object;
  db: any;
  collections: Mongoose$Collection[];
  readyState: number;
  models: { [name: string]: Mongoose$Document };

  // EventEmitter
  addListener(event: ConnectionEventTypes, listener: Function): this;
  emit(event: ConnectionEventTypes, ...args: Array<any>): boolean;
  eventNames(): Array<ConnectionEventTypes>;
  listeners(event: ConnectionEventTypes): Array<Function>;
  listenerCount(event: ConnectionEventTypes): number;
  on(event: ConnectionEventTypes, listener: Function): this;
  once(event: ConnectionEventTypes, listener: Function): this;
  prependListener(event: ConnectionEventTypes, listener: Function): this;
  prependOnceListener(event: ConnectionEventTypes, listener: Function): this;
  removeAllListeners(event?: ConnectionEventTypes): this;
  removeListener(event: ConnectionEventTypes, listener: Function): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
}

declare module "mongoose" {
  declare export type MongooseConnection = Mongoose$Connection;
  declare export type MongoId = MongoId;
  declare export type BSONObjectId = BSONObjectId;
  declare export type MongooseQuery<Result, Doc> = Mongoose$Query<Result, Doc>;
  declare export type MongooseDocument = Mongoose$Document;
  declare export type MongooseModel = typeof Mongoose$Document;
  declare export type MongooseSchema<Doc> = Mongoose$Schema<Doc>;
  declare export type MongooseSchemaField<Schema> = Mongoose$SchemaField<
    Schema
  >;

  declare module.exports: {
    Schema: typeof Mongoose$Schema,
    Types: Mongoose$Types,
    Promise: any,
    model: $PropertyType<Mongoose$Connection, "model">,
    createConnection(uri?: string): Mongoose$Connection,
    set: (key: string, value: string | Function | boolean) => void,
    connect: Function,
    connection: Mongoose$Connection,
    connections: Mongoose$Connection[],
    Query: typeof Mongoose$Query,
    disconnect: (fn?: (error: any) => void) => Promise<void>,
    Model: typeof Mongoose$Document
  };
}

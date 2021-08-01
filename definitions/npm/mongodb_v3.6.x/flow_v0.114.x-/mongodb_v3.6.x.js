// @flow

declare module 'mongodb' {
  import type { Readable } from 'stream';

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Admin.html
  declare export type Admin = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/AggregationCursor.html
  declare export type AggregationCursor = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/AutoEncrypter.html
  declare export type AutoEncrypter = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Binary.html
  declare export var Binary: any; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BSONRegExp.html
  declare export var BSONRegExp: any; // TODO

  // TODO: type all possible operations
  declare export type FilterQuery<Doc: { ... }> = $ReadOnly<$Shape<Doc> | { ... }>;

  // TODO
  declare export type UpdatePipeline = $ReadOnlyArray<{ ... }>;

  declare export type BulkWriteInsertOneOperation<Doc: { ... }> = {|
    +insertOne: {| 
      +document: $ReadOnly<Doc>
    |}
  |};

  declare export type BulkWriteUpdateOneOperation<Doc: { ... }> = {|
    +updateOne: {| 
      +filter?: FilterQuery<Doc>,
      +update: UpdatePipeline | $Shape<Doc> | {|
        +$set?: $Shape<Doc>,
        +$setOnInsert?: $Shape<Doc>,
      |},
      +upsert?: boolean,
      +collation?: CollationOptions,
      +arrayFilters?: $ReadOnlyArray<FilterQuery<Doc>>,
      +hint?: string | Hint,
    |}
  |};

  declare export type BulkWriteUpdateManyOperation<Doc: { ... }> = {|
    +updateMany: {|
      +filter?: FilterQuery<Doc>,
      +update: UpdatePipeline | $Shape<Doc> | {|
        +$set?: $Shape<Doc>,
        +$setOnInsert?: $Shape<Doc>,
      |},
      +upsert?: boolean,
      +collation?: CollationOptions,
      +arrayFilters?: $ReadOnlyArray<FilterQuery<Doc>>,
      +hint?: string | Hint,
    |}
  |};

  declare export type BulkWriteReplaceOneOperation<Doc: { ... }> = {|
    +replaceOne: {| 
      +filter?: FilterQuery<Doc>,
      +replacement: Doc,
      +upsert?: boolean,
      +collation?: CollationOptions,
      +hint?: string | Hint,
    |}
  |};

  declare export type BulkWriteDeleteOneOperation<Doc: { ... }> = {|
    +deleteOne: {| 
      +filter?: FilterQuery<Doc>,
      +collation?: CollationOptions,
    |}
  |};

  declare export type BulkWriteDeleteManyOperation<Doc: { ... }> = {|
    +deleteMany: {| 
      +filter?: FilterQuery<Doc>,
      +collation?: CollationOptions,
    |}
  |};

  declare export type BulkWriteOperation<Doc: { ... }> = 
    | BulkWriteInsertOneOperation<Doc>
    | BulkWriteUpdateOneOperation<Doc> 
    | BulkWriteUpdateManyOperation<Doc>
    | BulkWriteReplaceOneOperation<Doc>
    | BulkWriteDeleteOneOperation<Doc>
    | BulkWriteDeleteManyOperation<Doc>;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BulkOperationBase.html
  declare export type BulkOperationBase = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BulkWriteError.html
  declare type IBulkWriteError = any;
  declare export var BulkWriteError: IBulkWriteError; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BulkWriteResult.html
  declare export type BulkWriteResult = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/ChangeStream.html
  declare export type ChangeStream = any; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/ClientEncryption.html
  declare export type ClientEncryption = any; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/ClientSession.html
  declare export type ClientSession = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Code.html
  declare export var Code: any; // TODO

  declare export type BulkWriteOpResult = {| 
    insertedCount: number,  
    matchedCount: number,  
    modifiedCount: number,  
    deletedCount: number,  
    upsertedCount: number,  
    insertedIds: { [number]: IObjectID, ... },  
    upsertedIds: { [number]: IObjectID, ... },  
    result: { ... },  
  |};

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html
  declare export interface Collection<Doc: { ... } = { ... }> {
    +collectionName: string;
    +dbName: string;
    +hint: Hint;
    +namespace: string;
    +readConcern: ReadConcern;
    +readPreference: ReadPreference;
    +writeConcern: WriteConcern;
    aggregate(
      pipeline: AggregationPipeline, 
      options?: AggregateOptions,
    ): AggregationCursor;
    aggregate(
      pipeline: AggregationPipeline, 
      options: AggregateOptions,
      (err: IMongoError, cursor: AggregationCursor) => mixed,
    ): void;
    aggregate(
      pipeline: AggregationPipeline, 
      (err: IMongoError, cursor: AggregationCursor) => mixed,
    ): void;
    bulkWrite(
      operations: $ReadOnlyArray<BulkWriteOperation<Doc>>,
      options?: BulkWriteOptions<Doc>,
    ): Promise<BulkWriteOpResult>;
    bulkWrite(
      operations: BulkWriteOperation<Doc>,
      options: BulkWriteOptions<Doc>,
      (err: IBulkWriteError, result: BulkWriteOpResult) => mixed,
    ): void;
    bulkWrite(
      operations: BulkWriteOperation<Doc>,
      (err: IBulkWriteError, result: BulkWriteOpResult) => mixed,
    ): void;
    count(
      query: FilterQuery<Doc>,
      options?: CollectionCountOptions,
    ): Promise<number>;
    count(
      query: FilterQuery<Doc>,
      options: CollectionCountOptions,
      (err: IMongoError, result: number) => mixed,
    ): void;
    count(
      query: FilterQuery<Doc>,
      (err: IMongoError, result: number) => mixed,
    ): void;
    countDocuments(
      query: FilterQuery<Doc>,
      options?: CollectionCountDocumentsOptions,
    ): Promise<number>;
    countDocuments(
      query: FilterQuery<Doc>,
      options: CollectionCountDocumentsOptions,
      (err: IMongoError, result: number) => mixed,
    ): void;
    countDocuments(
      query: FilterQuery<Doc>,
      (err: IMongoError, result: number) => mixed,
    ): void;
    createIndex(...any[]): any;
    createIndexes(...any[]): any;
    deleteMany(...any[]): any;
    deleteOne(...any[]): any;
    distinct(...any[]): any;
    drop(...any[]): any;
    dropAllIndexes(...any[]): any;
    dropIndex(...any[]): any;
    dropIndexes(...any[]): any;
    ensureIndex(...any[]): any;
    estimatedDocumentCount(...any[]): any;
    find(...any[]): any;
    findAndModify(...any[]): any;
    findAndRemove(...any[]): any;
    findOne(...any[]): any;
    findOneAndDelete(...any[]): any;
    findOneAndReplace(...any[]): any;
    findOneAndUpdate(...any[]): any;
    geoHaystackSearch(...any[]): any;
    group(...any[]): any;
    indexes(...any[]): any;
    indexExists(...any[]): any;
    indexInformation(...any[]): any;
    initializeOrderedBulkOp(...any[]): any;
    initializeUnorderedBulkOp(...any[]): any;
    insert(...any[]): any;
    insertMany(...any[]): any;
    insertOne(...any[]): any;
    isCapped(...any[]): any;
    listIndexes(...any[]): any;
    mapReduce(...any[]): any;
    options(...any[]): any;
    parallelCollectionScan(...any[]): any;
    reIndex(...any[]): any;
    remove(...any[]): any;
    rename(...any[]): any;
    replaceOne(...any[]): any;
    save(...any[]): any;
    stats(...any[]): any;
    update(...any[]): any;
    updateMany(...any[]): any;
    updateOne(...any[]): any;
    watch(...any[]): any;
  }

  declare export type CollectionCountOptions = {|
    skip?: number,
    limit?: number,
    maxTimeMS?: number,
    hint?: string,
    readPreference?: ReadPreferenceValue,
    collation?: CollationOptions,
    session?: ClientSession,
  |};

  declare export type CollectionCountDocumentsOptions = {|
    skip?: number,
    limit?: number,
    maxTimeMS?: number,
    hint?: string,
    collation?: CollationOptions,
  |};

  // http://mongodb.github.io/node-mongodb-native/3.5/api/CommandCursor.html
  declare export type CommandCursor = any; // TODO (use type shouldn't be instantiated)

  declare export type CursorFlag = 'tailable' | 'oplogReplay' | 'noCursorTimeout' | 'awaitData' | 'partial';

  declare export type CursorCloseOptions = {|
    skipKillCursors?: boolean,
  |};

  declare export type CursorResultCallback<T> = (error: ?(IMongoError), result: T) => mixed;
  declare export type CursorIteratorCallback<T> = (doc: T) => mixed;
  declare export type CursorEndCallback = (error: ?(IMongoError)) => mixed;

  // TODO
  declare export type CollationOptions = $ReadOnly<{ ... }>;

  declare export type CursorCountOptions = {|
    skip?: number,
    limit?: number,
    maxTimeMS?: number,
    hint?: string,
    readPreference?: ReadPreferenceValue,
  |};

  // TODO: type explain https://docs.mongodb.com/manual/reference/method/cursor.explain/#behavior
  declare export type ExplainResult = { ... };

  declare export type Projection<Doc: { ... }> = {
    ...$ObjMap<Doc, () => (1 | -1 | boolean | string)>,
    _id?: 1 | false,
    ...,
  };

  // TODO
  declare export type CursorOption = { ... };

  declare export type StreamOptions<Input: { ... }, Doc: { ... }> = {|
    transform: Input => Doc,
  |};

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Cursor.html
  declare export interface Cursor<Doc: { ... }> extends Readable {
    addCursorFlag(flag: CursorFlag, value: boolean): Cursor<Doc>;
    addQueryModifier(name: string, value: string | number | boolean): Cursor<Doc>;
    batchSize(value: number): Cursor<Doc>;
    clone(): Cursor<Doc>;
    close(options: CursorCloseOptions, cb: CursorResultCallback<null>): void;
    close(options: CursorCloseOptions): Promise<null>;
    close(cb: CursorResultCallback<null>): void;
    close(): Promise<null>;
    collation(valie: CollationOptions): Cursor<Doc>;
    comment(value: string): Cursor<Doc>;
    count(applySkipLimit: boolean, options: CursorCountOptions, callback: CursorResultCallback<number>): void;
    count(applySkipLimit: boolean, options: CursorCountOptions): Promise<number>;
    count(applySkipLimit: boolean, callback: CursorResultCallback<number>): void;
    count(applySkipLimit: boolean): Promise<number>;
    count(callback: CursorResultCallback<number>): void;
    count(): Promise<number>;
    // deprecated
    each(CursorResultCallback<Doc>): null;
    explain(CursorResultCallback<ExplainResult>): void;
    explain(): Promise<ExplainResult>;
    filter(filter: $Shape<Doc>): Cursor<Doc>;
    forEach(iterator: CursorIteratorCallback<Doc>, callback: CursorEndCallback): Cursor<Doc>;
    forEach(iterator: CursorIteratorCallback<Doc>): Promise<null>;
    hasNext(callback: CursorResultCallback<boolean>): void;
    hasNext(): Promise<boolean>;
    hint(hint: string): Cursor<Doc>;
    isClosed(): boolean;
    limit(value: number): Cursor<Doc>;
    map<Input: { ... }>(transform: Input => Doc): Cursor<Doc>;
    max(value: number): Cursor<Doc>;
    maxAwaitTimeMS(value: number): Cursor<Doc>;
    // Deprecated
    maxScan(maxScan: { ... }): Cursor<Doc>;
    maxTimeMS(value: number): Cursor<Doc>;
    min(value: number): Cursor<Doc>;
    next(callback: CursorResultCallback<Doc>): void;
    next(): Promise<Doc>;
    project(value: Projection<Doc>): Cursor<Doc>;
    returnKey(returnKey: boolean): Cursor<Doc>;
    setCursorOption(field: 'numberOfRetries' | 'tailableRetryInterval', value: CursorOption): Cursor<Doc>;
    setReadPreference(readPreference: ReadPreferenceValue): Cursor<Doc>;
    // TODO: type showRecordId
    showRecordId(showRecordId: { ... }): Cursor<Doc>;
    skip(value: number): Cursor<Doc>;
    // Deprecated
    snapshot(snapshot: { ... }): Cursor<Doc>;
    sort(keyOrList: $Keys<Doc>, direction: 1 | -1): Cursor<Doc>;
    sort(keyOrList: [$Keys<Doc>, 1 | -1][]): Cursor<Doc>;
    sort(keyOrList: { [string]: 1 | -1, ... }): Cursor<Doc>;
    stream<Input: { ... }>(options: StreamOptions<Input, Doc>): Cursor<Doc>;
    toArray(callback: CursorResultCallback<Doc[]>): void;
    toArray(): Promise<Doc[]>;
    transformStream<Input: { ... }>(options: StreamOptions<Input, Doc>): Readable;
  }

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Db.html
  declare export var Db: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/DBRef.html
  declare export var DBRef: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Decimal128.html
  declare export var Decimal128: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Double.html
  declare export var Double: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/FindOperators.html
  declare export type FindOperators = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridFSBucket.html
  declare export var GridFSBucket: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridFSBucketReadStream.html
  declare export type GridFSBucketReadStream = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridFSBucketWriteStream.html
  declare export type GridFSBucketWriteStream = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridStore.html
  declare export var GridStore: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridStoreStream.html
  declare export type GridStoreStream = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Int32.html
  declare export var Int32: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Logger.html
  declare export var Logger: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Long.html
  declare export var Long: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MaxKey.html
  declare export var MaxKey: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MinKey.html
  declare export var MinKey: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MongoClient.html
  declare export class MongoClient {
    static connect(url: string, options: MongoClientOptions, callback: ConnectCallback): MongoClient;
    static connect(url: string, callback: ConnectCallback): MongoClient;
    static connect(url: string, options?: MongoClientOptions): Promise<MongoClient>;

    constructor(url: string, options?: MongoClientOptions, callback?: ConnectCallback): MongoClient;
    constructor(url: string, callback?: ConnectCallback): MongoClient;

    close(force: boolean, callback: NoResultCallback): void;
    close(callback: NoResultCallback): void;
    close(force?: boolean): Promise<void>;

    connect(callback: ConnectCallback): void;
    connect(): Promise<MongoClient>;

    db(dbName?: string, options?: DbOptions): typeof Db;

    isConnected(options?: DbOptions): boolean;

    startSession(options?: SessionOptions): ClientSession;

    watch(pipeline?: AggregationPipeline, options?: ClientWatchOptions): ChangeStream;

    withSession(options?: WithSessionOptions, operation: Operation): Promise<void>; // TODO confirm return
    withSession(operation: Operation): Promise<void>; // TODO confirm return
  }

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MongoCryptError.html
  declare export var MongoCryptError: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/IMongoError.html
  declare type IMongoError = any;
  declare export var MongoError: IMongoError;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MongoNetworkError.html
  declare export var MongoNetworkError: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MongoParseError.html
  declare export var MongoParseError: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Mongos.html
  declare export var Mongos: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MongoServerSelectionError.html
  declare export var MongoServerSelectionError: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MongoTimeoutError.html
  declare export var MongoTimeoutError: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MongoWriteConcernError.html
  declare export var MongoWriteConcernError: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/ObjectID.html
  declare type IObjectID = any;
  declare export var ObjectID: IObjectID;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/OrderedBulkOperation.html
  declare export type OrderedBulkOperation = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/ReplSet.html
  declare export var ReplSet: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Server.html
  declare export var Server: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Symbol.html
  declare export var Symbol: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Timestamp.html
  declare export type Timestamp = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/UnorderedBulkOperation.html
  declare export type UnorderedBulkOperation = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/WriteConcernError.html
  declare export var WriteConcernError: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/WriteError.html
  declare export type WriteError = any; // TODO (use type shouldn't be instantiated)

  declare export type ReadPreference = {|
    PRIMARY: 'primary',
    PRIMARY_PREFERRED: 'primaryPreferred',
    SECONDARY: 'secondary',
    SECONDARY_PREFERRED: 'secondaryPreferred',
    NEAREST: 'nearest',
  |};
  declare export type ReadPreferenceValue = 'primary' | 'primaryPreferred' | 'secondary'
    | 'secondaryPreferred' | 'nearest'

  // http://mongodb.github.io/node-mongodb-native/3.5/api/global.html#ReadConcern
  declare export type ReadConcernLevel = 'local' | 'available' | 'majority' | 'linearizable' | 'snapshot';

  // http://mongodb.github.io/node-mongodb-native/3.5/api/global.html#ReadConcern
  declare export type ReadConcern = {|
    level: ReadConcernLevel,
  |}

  declare export type DriverInfoOptionsObject = {|
    name?: string,
    version?: string,
    platform?: string,
  |};

  declare export type KMSProviders = {|
    aws: {|
      accessKeyId?: string,
      secretAccessKey?: string,
    |},
    local: {|
      key?: Buffer,
    |},
  |};

  declare export type AutoEncryptionOptionsObject = {|
    keyVaultClient?: MongoClient,
    keyVaultNamespace?: string,
    kmsProviders?: KMSProviders,
    schemaMap?: { [string]: mixed, ... },
    bypassAutoEncryption?: boolean,
    options?: {|
      logger: LoggerInterface,
    |},
    extraOptions: {|
      mongocryptdURI?: string,
      mongocryptdBypassSpawn?: boolean,
      mongocryptdSpawnPath?: string,
      mongocryptdSpawnArgs?: string[]
    |},
  |};

  declare export type ConnectCallback = (error: IMongoError, client: MongoClient) => mixed;
  declare export type NoResultCallback = (error: IMongoError, null) => mixed;

  declare export type PkFactory = {
    createPk(): IObjectID,
    ...,
  };

  declare export type LoggerInterface = {|
    debug(string): mixed,
    info(string): mixed,
    warn(string): mixed,
    error(string): mixed,
  |};

  declare export type Auth = {|
    user: string, password: string,
  |}

  declare export type MongoClientOptions = {|
    poolSize?: number,
    ssl?: boolean,
    sslValidate?: boolean,
    sslCA?: Buffer, // deprecated
    sslCert?: Buffer, // deprecated
    sslKey?: Buffer, // deprecated
    sslPass?: string, // deprecated
    sslCert?: Buffer, // deprecated
    sslCRL?: Buffer, // deprecated
    checkServerIdentity?: boolean | ((servername: string, cert: string) => boolean); // deprecated
    tls?: boolean,
    tlsInsecure?: boolean,
    tlsCAFile?: string,
    tlsCertificateKeyFile?: string,
    tlsCertificateKeyFilePassword?: string,
    tlsAllowInvalidCertificates?: boolean,
    tlsAllowInvalidHostnames?: boolean,
    autoReconnect?: boolean,
    noDelay?: boolean,
    keepAlive?: boolean,
    keepAliveInitialDelay?: number,
    connectTimeoutMS?: number,
    socketTimeoutMS?: number,
    family?: 4 | 6 | null,
    reconnectTries?: number,
    reconnectInterval?: number,
    ha?: boolean,
    haInterval?: number,
    replicaSet?: string,
    secondaryAcceptableLatencyMS?: number,
    acceptableLatencyMS?: number,
    connectWithNoPrimary?: boolean,
    authSource?: string,
    w?: string | number,
    wtimeout?: number,
    j?: boolean,
    forceServerObjectId?: boolean,
    serializeFunctions?: boolean,
    ignoreUndefined?: boolean,
    raw?: boolean,
    bufferMaxEntries?: number,
    readPreference?: ReadPreferenceValue,
    pkFactory?: PkFactory,
    promiseLibrary?: { ... }, // TODO
    readConcern?: ReadConcern,
    maxStalenessSeconds?: number,
    loggerLevel?: 'error' | 'warn' | 'info' | 'debug',
    logger?: LoggerInterface,
    promoteValues?: boolean,
    promoteBuffers?: boolean,
    promoteLongs?: boolean,
    domainsEnabled?: boolean,
    validateOptions?: boolean,
    appname?: string,
    auth?: Auth,
    authMechanism?: 'MDEFAULT' | 'GSSAPI' | 'PLAIN' | 'MONGODB-X509' | 'SCRAM-SHA-1',
    compression?: 'snappy' | 'zlib',
    fsync?: boolean,
    readPreferenceTags?: $ReadOnlyArray<{ [string]: string, ... }>,
    numberOfRetries?: number,
    auto_reconnect?: boolean,
    monitorCommands?: boolean,
    minSize?: number,
    useNewUrlParser?: boolean,
    useUnifiedTopology?: boolean,
    autoEncryption?: AutoEncryptionOptionsObject,
    driverInfo?: DriverInfoOptionsObject,
  |};

  declare export type DbOptions = {|
    noListener?: boolean,
    returnNonCachedInstance?: boolean,
  |};

  declare export type SessionOptions = { ... }; // TODO
  declare export type Session = AnalyserNode; // TODO

  declare export type AggregationStage = { ... }; // TODO
  declare export type AggregationPipeline = $ReadOnlyArray<AggregationStage>;

  declare export type ClientWatchOptions = { ... }; // TODO

  declare export type AggregateOptions = { 
    +readPreference?: ReadPreferenceValue,
    +batchSize?: number,
    +cursor?: { batchSize?: number, ... },
    +explain?: boolean,
    +allowDiskUse?: boolean,
    +maxTimeMS?: number,
    +maxAwaitTimeMS?: number,
    +bypassDocumentValidation?: boolean,
    +raw?: boolean,
    +promoteLongs?: boolean,
    +promoteValues?: boolean,
    +promoteBuffers?: boolean,
    +collation?: CollationOptions,
    +comment?: string,
    +hint?: string | Hint,
    +session?: ClientSession,
    ...
  };

  declare export type Hint = $ReadOnly<{ ... }>;

  declare export type WithSessionOptions = { ... }; // TODO

  declare export type BulkWriteOptions<Doc> = {
    +ordered?: boolean,
    +bypassDocumentValidation?: boolean,
    +arrayFilters?: $ReadOnlyArray<FilterQuery<Doc>>,
    +w?: WriteConcern,
    +wtimeout?: number,
    +j?: boolean,
    +checkKeys?: boolean,
    +serializeFunctions?: boolean,
    +ignoreUndefined?: boolean,
    +session?: ClientSession,
    ...,
  }

  declare export type WriteConcern = number | 'majority';

  declare export type Operation = (session: Session) => mixed; // TODO
}
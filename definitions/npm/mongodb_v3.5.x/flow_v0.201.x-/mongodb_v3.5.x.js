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

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BulkOperationBase.html
  declare export type BulkOperationBase = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BulkWriteError.html
  declare export var BulkWriteError: any; // TODO

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

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html
  declare export type Collection = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/CommandCursor.html
  declare export type CommandCursor = any; // TODO (use type shouldn't be instantiated)

  declare export type CursorFlag = 'tailable' | 'oplogReplay' | 'noCursorTimeout' | 'awaitData' | 'partial';

  declare export type CursorCloseOptions = {|
    skipKillCursors?: boolean,
  |};

  declare export type CursorResultCallback<T> = (error: ?(typeof MongoError), result: T) => mixed;
  declare export type CursorIteratorCallback<T> = (doc: T) => mixed;
  declare export type CursorEndCallback = (error: ?(typeof MongoError)) => mixed;

  // TODO
  declare export type CollationOptions = any;

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

  // http://mongodb.github.io/node-mongodb-native/3.5/api/MongoError.html
  declare export var MongoError: any;

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
  declare export var ObjectID: any;

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

  declare export type ReadConcernLevel = 'local' | 'available' | 'majority' | 'linearizable' | 'snapshot';

  declare export type ReadConcern = {|
    type: ReadConcernLevel,
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

  declare export type ConnectCallback = (error: typeof MongoError, client: MongoClient) => mixed;
  declare export type NoResultCallback = (error: typeof MongoError, null) => mixed;

  declare export type PkFactory = {
    createPk(): typeof ObjectID,
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
    readPreferenceTags?: Array<{ [string]: string, ... }>,
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

  declare export type WithSessionOptions = { ... }; // TODO

  declare export type Operation = (session: Session) => mixed; // TODO
}
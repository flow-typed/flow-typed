// @flow

declare module 'mongodb' {

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Admin.html
  declare type Admin = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/AggregationCursor.html
  declare type AggregationCursor = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/AutoEncrypter.html
  declare type AutoEncrypter = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Binary.html
  declare export var Binary: any; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BSONRegExp.html
  declare export var BSONRegExp: any; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BulkOperationBase.html
  declare type BulkOperationBase = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BulkWriteError.html
  declare export var BulkWriteError: any; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/BulkWriteResult.html
  declare type BulkWriteResult = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/ChangeStream.html
  declare type ChangeStream = any; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/ClientEncryption.html
  declare type ClientEncryption = any; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/ClientSession.html
  declare type ClientSession = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Code.html
  declare export var Code: any; // TODO

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html
  declare type Collection = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/CommandCursor.html
  declare type CommandCursor = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Cursor.html
  declare type Cursor = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Db.html
  declare export var Db: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/DBRef.html
  declare export var DBRef: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Decimal128.html
  declare export var Decimal128: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Double.html
  declare export var Double: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/FindOperators.html
  declare type FindOperators = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridFSBucket.html
  declare export var GridFSBucket: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridFSBucketReadStream.html
  declare type GridFSBucketReadStream = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridFSBucketWriteStream.html
  declare type GridFSBucketWriteStream = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridStore.html
  declare export var GridStore: any; // TODO;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/GridStoreStream.html
  declare type GridStoreStream = any; // TODO (use type shouldn't be instantiated)

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

    db(dbName?: string, options?: DbOptions): Db;

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
  declare type OrderedBulkOperation = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/ReplSet.html
  declare export var ReplSet: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Server.html
  declare export var Server: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Symbol.html
  declare export var Symbol: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/Timestamp.html
  declare type Timestamp = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/UnorderedBulkOperation.html
  declare type UnorderedBulkOperation = any; // TODO (use type shouldn't be instantiated)

  // http://mongodb.github.io/node-mongodb-native/3.5/api/WriteConcernError.html
  declare export var WriteConcernError: any;

  // http://mongodb.github.io/node-mongodb-native/3.5/api/WriteError.html
  declare type WriteError = any; // TODO (use type shouldn't be instantiated)

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

  declare export type ConnectCallback = (error: MongoError, client: MongoClient) => mixed;
  declare type NoResultCallback = (error: MongoError, null) => mixed;

  declare export type PkFactory = {
    createPk(): ObjectID,
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

  declare type DbOptions = {|
    noListener?: boolean,
    returnNonCachedInstance?: boolean,
  |};

  declare type SessionOptions = { ... }; // TODO
  declare type Session = AnalyserNode; // TODO

  declare type AggregationStage = { ... }; // TODO
  declare type AggregationPipeline = $ReadOnlyArray<AggregationStage>;

  declare type ClientWatchOptions = { ... }; // TODO

  declare type WithSessionOptions = { ... }; // TODO

  declare type Operation = (session: Session) => mixed; // TODO
}
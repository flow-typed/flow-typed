// @flow

import { describe, it } from 'flow-typed-test';
import {
  MongoClient,
  type MongoClientOptions,
  type ConnectCallback,
  type PkFactory,
  type ReadConcern,
  type LoggerInterface,
  type Auth,
  type AutoEncryptionOptionsObject,
  type DriverInfoOptionsObject,
  type ReadPreferenceValue,
  type Cursor,
} from 'mongodb';
import { Readable } from 'stream';

describe('static connect', () => {
  describe('Promises', () => {
    it('url should be a string', () => {
      const client: Promise<MongoClient> = MongoClient.connect(
        'mongodb://localhost:27017'
      );
      // $FlowExpectedError[incompatible-call]
      MongoClient.connect(2);
      // $FlowExpectedError[incompatible-call]
      MongoClient.connect();
    });

    it('should accepts options', (options: MongoClientOptions) => {
      const client: Promise<MongoClient> = MongoClient.connect(
        'mongodb://localhost:27017',
        options
      );
      // $FlowExpectedError[incompatible-call]
      MongoClient.connect(
        'mongodb://localhost:27017',
        { invalidOptionsKey: 'string' }
      );
    });
  });
  describe('Callback', () => {
    it('url should be a string', (cb: ConnectCallback) => {
      const client: MongoClient = MongoClient.connect(
        'mongodb://localhost:27017',
        cb
      );
      // $FlowExpectedError[incompatible-call]
      MongoClient.connect(2, cb);
      // $FlowExpectedError[incompatible-call]
      MongoClient.connect(cb);
      // $FlowExpectedError[incompatible-call]
      MongoClient.connect(
        'mongodb://localhost:27017',
        (error: Error, c: string) => true
      );
    });

    it('should accepts options', (cb: ConnectCallback, options: MongoClientOptions) => {
      const client: MongoClient = MongoClient.connect(
        'mongodb://localhost:27017',
        options,
        cb
      );
      // $FlowExpectedError[incompatible-call]
      MongoClient.connect(
        'mongodb://localhost:27017',
        { invalidOptionsKey: 'string' },
        cb
      );
    });
  });
});

describe('connect', () => {
  describe('Promises', () => {
    it('should return a promise', (client: MongoClient) => {
      const c: Promise<MongoClient> = client.connect();
      // $FlowExpectedError[incompatible-call]
      client.connect('mongodb://localhost:27017');
    });
  });
  describe('Callback', () => {
    it('should accepts callback', (client: MongoClient, cb: ConnectCallback) => {
      client.connect(cb);
      // $FlowExpectedError[incompatible-call]
      client.connect('mongodb://localhost:27017', cb);
    });
  });
});

describe('MongoClientOptions', (options: MongoClientOptions) => {
  it('should supports poolSize options', () => {
    const a: void | number = options.poolSize;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.poolSize;
  });
  it('should supports ssl options', () => {
    const a: void | boolean = options.ssl;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.ssl;
  });
  it('should supports sslValidate options', () => {
    const a: void | boolean = options.sslValidate;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.sslValidate;
  });
  it('should supports sslCA options', () => {
    const a: void | Buffer = options.sslCA;
    // $FlowExpectedError[incompatible-type]
    const b: Buffer = options.sslCA;
  });
  it('should supports sslCert options', () => {
    const a: void | Buffer = options.sslCert;
    // $FlowExpectedError[incompatible-type]
    const b: Buffer = options.sslCert;
  });
  it('should supports sslKey options', () => {
    const a: void | Buffer = options.sslKey;
    // $FlowExpectedError[incompatible-type]
    const b: Buffer = options.sslKey;
  });
  it('should supports sslPass options', () => {
    const a: void | string = options.sslPass;
    // $FlowExpectedError[incompatible-type]
    const b: string = options.sslPass;
  });
  it('should supports sslCRL options', () => {
    const a: void | Buffer = options.sslCRL;
    // $FlowExpectedError[incompatible-type]
    const b: Buffer = options.sslCRL;
  });
  it('should supports checkServerIdentity options', () => {
    const a: MongoClientOptions = { checkServerIdentity: true };
    const b: MongoClientOptions = {
      checkServerIdentity: (servername: string, cert: string) => false,
    };
    // $FlowExpectedError[incompatible-type]
    const c: MongoClientOptions = { checkServerIdentity: (a: boolean) => {} };
  });
  it('should supports tls options', () => {
    const a: void | boolean = options.tls;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.tls;
  });
  it('should supports tlsInsecure options', () => {
    const a: void | boolean = options.tlsInsecure;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.tlsInsecure;
  });
  it('should supports tlsCAFile options', () => {
    const a: void | string = options.tlsCAFile;
    // $FlowExpectedError[incompatible-type]
    const b: string = options.tlsCAFile;
  });
  it('should supports tlsCertificateKeyFile options', () => {
    const a: void | string = options.tlsCertificateKeyFile;
    // $FlowExpectedError[incompatible-type]
    const b: string = options.tlsCertificateKeyFile;
  });
  it('should supports tlsCertificateKeyFilePassword options', () => {
    const a: void | string = options.tlsCertificateKeyFilePassword;
    // $FlowExpectedError[incompatible-type]
    const b: string = options.tlsCertificateKeyFilePassword;
  });
  it('should supports tlsAllowInvalidCertificates options', () => {
    const a: void | boolean = options.tlsAllowInvalidCertificates;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.tlsAllowInvalidCertificates;
  });
  it('should supports tlsAllowInvalidHostnames options', () => {
    const a: void | boolean = options.tlsAllowInvalidHostnames;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.tlsAllowInvalidHostnames;
  });
  it('should supports autoReconnect options', () => {
    const a: void | boolean = options.autoReconnect;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.autoReconnect;
  });
  it('should supports noDelay options', () => {
    const a: void | boolean = options.noDelay;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.noDelay;
  });
  it('should supports keepAlive options', () => {
    const a: void | boolean = options.keepAlive;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.keepAlive;
  });
  it('should supports keepAliveInitialDelay options', () => {
    const a: void | number = options.keepAliveInitialDelay;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.keepAliveInitialDelay;
  });
  it('should supports connectTimeoutMS options', () => {
    const a: void | number = options.connectTimeoutMS;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.connectTimeoutMS;
  });
  it('should supports socketTimeoutMS options', () => {
    const a: void | number = options.socketTimeoutMS;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.socketTimeoutMS;
  });
  it('should supports keepAliveInitialDelay options', () => {
    const a: 4 | 6 | void | null = options.family;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.family;
  });
  it('should supports reconnectTries options', () => {
    const a: number | void = options.reconnectTries;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.reconnectTries;
  });
  it('should supports reconnectInterval options', () => {
    const a: number | void = options.reconnectInterval;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.family;
  });
  it('should supports ha options', () => {
    const a: boolean | void = options.ha;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.ha;
  });
  it('should supports haInterval options', () => {
    const a: number | void = options.haInterval;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.haInterval;
  });
  it('should supports replicaSet options', () => {
    const a: void | string = options.replicaSet;
    // $FlowExpectedError[incompatible-type]
    const b: string = options.replicaSet;
  });
  it('should supports secondaryAcceptableLatencyMS options', () => {
    const a: number | void = options.secondaryAcceptableLatencyMS;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.secondaryAcceptableLatencyMS;
  });
  it('should supports acceptableLatencyMS options', () => {
    const a: number | void = options.acceptableLatencyMS;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.acceptableLatencyMS;
  });
  it('should supports connectWithNoPrimary options', () => {
    const a: boolean | void = options.connectWithNoPrimary;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.connectWithNoPrimary;
  });
  it('should supports authSource options', () => {
    const a: string | void = options.authSource;
    // $FlowExpectedError[incompatible-type]
    const b: string = options.authSource;
  });
  it('should supports w options', () => {
    const a: number | string | void = options.w;
    // $FlowExpectedError[incompatible-type]
    const b: number | string = options.w;
  });
  it('should supports wtimeout options', () => {
    const a: number | void = options.wtimeout;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.wtimeout;
  });
  it('should supports j options', () => {
    const a: boolean | void = options.j;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.j;
  });
  it('should supports forceServerObjectId options', () => {
    const a: boolean | void = options.forceServerObjectId;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.forceServerObjectId;
  });
  it('should supports serializeFunctions options', () => {
    const a: boolean | void = options.serializeFunctions;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.serializeFunctions;
  });
  it('should supports ignoreUndefined options', () => {
    const a: boolean | void = options.ignoreUndefined;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.ignoreUndefined;
  });
  it('should supports raw options', () => {
    const a: boolean | void = options.raw;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.raw;
  });
  it('should supports bufferMaxEntries options', () => {
    const a: number | void = options.bufferMaxEntries;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.bufferMaxEntries;
  });
  it('should supports raw options', () => {
    const a: boolean | void = options.raw;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.raw;
  });
  it('should supports readPreference options', () => {
    const a: ReadPreferenceValue | void = options.readPreference;
    // $FlowExpectedError[incompatible-type]
    const b: ReadPreferenceValue = options.readPreference;
  });
  it('should supports pkFactory options', (pkFactory: PkFactory) => {
    const a: PkFactory | void = options.pkFactory;
    // $FlowExpectedError[incompatible-type]
    const b: PkFactory = options.pkFactory;
  });
  it('should supports pkFactory options', (pkFactory: PkFactory) => {
    const a: PkFactory | void = options.pkFactory;
    // $FlowExpectedError[incompatible-type]
    const b: PkFactory = options.pkFactory;
  });
  it('should supports promiseLibrary options', () => {
    const a: { ... } | void = options.promiseLibrary;
    // $FlowExpectedError[incompatible-type]
    const b: { ... } = options.promiseLibrary;
  });
  it('should supports readConcern options', () => {
    const a: ReadConcern | void = options.readConcern;
    // $FlowExpectedError[incompatible-type]
    const b: ReadConcern = options.readConcern;
  });
  it('should supports maxStalenessSeconds options', () => {
    const a: number | void = options.maxStalenessSeconds;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.maxStalenessSeconds;
  });
  it('should supports loggerLevel options', () => {
    const a: 'error' | 'warn' | 'info' | 'debug' | void = options.loggerLevel;
    // $FlowExpectedError[incompatible-type]
    const b: 'error' | 'warn' | 'info' | 'debug' = options.loggerLevel;
  });
  it('should supports logger options', () => {
    const a: LoggerInterface | void = options.logger;
    // $FlowExpectedError[incompatible-type]
    const b: LoggerInterface = options.logger;
  });
  it('should supports promoteValues options', () => {
    const a: boolean | void = options.promoteValues;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.promoteValues;
  });
  it('should supports promoteBuffers options', () => {
    const a: boolean | void = options.promoteBuffers;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.promoteBuffers;
  });
  it('should supports promoteLongs options', () => {
    const a: boolean | void = options.promoteLongs;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.promoteLongs;
  });
  it('should supports domainsEnabled options', () => {
    const a: boolean | void = options.domainsEnabled;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.domainsEnabled;
  });
  it('should supports validateOptions options', () => {
    const a: boolean | void = options.validateOptions;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.validateOptions;
  });
  it('should supports appname options', () => {
    const a: string | void = options.appname;
    // $FlowExpectedError[incompatible-type]
    const b: string = options.appname;
  });
  it('should supports auth options', () => {
    const a: Auth | void = options.auth;
    // $FlowExpectedError[incompatible-type]
    const b: Auth = options.auth;
  });
  it('should supports authMechanism options', () => {
    const a: 'MDEFAULT' | 'GSSAPI' | 'PLAIN' | 'MONGODB-X509' | 'SCRAM-SHA-1' | void = options.authMechanism;
    // $FlowExpectedError[incompatible-type]
    const b: 'MDEFAULT' | 'GSSAPI' | 'PLAIN' | 'MONGODB-X509' | 'SCRAM-SHA-1' = options.authMechanism;
  });
  it('should supports compression options', () => {
    const a: 'snappy' | 'zlib' | void = options.compression;
    // $FlowExpectedError[incompatible-type]
    const b: 'snappy' | 'zlib' = options.compression;
  });
  it('should supports fsync options', () => {
    const a: boolean | void = options.fsync;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.fsync;
  });
  it('should supports readPreferenceTags options', () => {
    const a: $ReadOnlyArray<{ [string]: string, ... }> | void = options.readPreferenceTags;
    // $FlowExpectedError[incompatible-type]
    const b: $ReadOnlyArray<{ [string]: string, ... }> = options.readPreferenceTags;
  });
  it('should supports numberOfRetries options', () => {
    const a: number | void = options.numberOfRetries;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.numberOfRetries;
  });
  it('should supports auto_reconnect options', () => {
    const a: boolean | void = options.auto_reconnect;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.auto_reconnect;
  });
  it('should supports monitorCommands options', () => {
    const a: boolean | void = options.monitorCommands;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.monitorCommands;
  });
  it('should supports minSize options', () => {
    const a: number | void = options.minSize;
    // $FlowExpectedError[incompatible-type]
    const b: number = options.minSize;
  });
  it('should supports useNewUrlParser options', () => {
    const a: boolean | void = options.useNewUrlParser;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.useNewUrlParser;
  });
  it('should supports useUnifiedTopology options', () => {
    const a: boolean | void = options.useUnifiedTopology;
    // $FlowExpectedError[incompatible-type]
    const b: boolean = options.useUnifiedTopology;
  });
  it('should supports autoEncryption options', () => {
    const a: AutoEncryptionOptionsObject | void = options.autoEncryption;
    // $FlowExpectedError[incompatible-type]
    const b: AutoEncryptionOptionsObject = options.autoEncryption;
  });
  it('should supports driverInfo options', () => {
    const a: DriverInfoOptionsObject | void = options.driverInfo;
    // $FlowExpectedError[incompatible-type]
    const b: DriverInfoOptionsObject = options.driverInfo;
  });
});

describe('Cursor', () => {
  it('should supports example from doc', (cursor: Cursor<{ a: number, ... }>) => {
    cursor
      .project({ a: 1 })
      .skip(1)
      .limit(10)
      .batchSize(5)
      .filter({ a: 1 })
      .comment('add a comment')
      .addCursorFlag('tailable', true)
      .addCursorFlag('oplogReplay', true)
      .addCursorFlag('noCursorTimeout', true)
      .addCursorFlag('awaitData', true)
      .addCursorFlag('partial', true)
      .max(10)
      .maxTimeMS(1000)
      .min(100)
      .returnKey(true)
      .setReadPreference("primary")
      .sort([['a', 1]])
      .hint('a_1');
  });
  it('should extends readable', (cursor: Cursor<{ ... }>) => {
    if (cursor instanceof Readable) {
      // cursor is Readable

      cursor.read(5);

      // $FlowExpectedError[incompatible-call]
      cursor.read("5");
    } else {
      // This should never happen
      (cursor: empty)
    }
  });
  it('should supports doc', (cursor: Cursor<{| a: number |}>) => {
    cursor.filter({ a: 1 });

    // $FlowExpectedError[prop-missing]
    cursor.filter({ b: 3 });
  });
});

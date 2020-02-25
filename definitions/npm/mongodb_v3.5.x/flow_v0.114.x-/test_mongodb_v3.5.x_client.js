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
} from 'mongodb';

describe('static connect', () => {
  describe('Promises', () => {
    it('url should be a string', () => {
      const client: Promise<MongoClient> = MongoClient.connect(
        'mongodb://localhost:27017'
      );
      // $ExpectError
      MongoClient.connect(2);
      // $ExpectError
      MongoClient.connect();
    });

    it('should accepts options', (options: MongoClientOptions) => {
      const client: Promise<MongoClient> = MongoClient.connect(
        'mongodb://localhost:27017',
        options
      );
      MongoClient.connect(
        'mongodb://localhost:27017',
        // $ExpectError
        { invalidOptionsKey: string }
      );
    });
  });
  describe('Callback', () => {
    it('url should be a string', (cb: ConnectCallback) => {
      const client: MongoClient = MongoClient.connect(
        'mongodb://localhost:27017',
        cb
      );
      // $ExpectError
      MongoClient.connect(2, cb);
      // $ExpectError
      MongoClient.connect(cb);
      MongoClient.connect(
        'mongodb://localhost:27017',
        // $ExpectError
        (error: Error, c: string) => true
      );
    });

    it('should accepts options', (cb: ConnectCallback, options: MongoClientOptions) => {
      const client: MongoClient = MongoClient.connect(
        'mongodb://localhost:27017',
        options,
        cb
      );
      MongoClient.connect(
        'mongodb://localhost:27017',
        // $ExpectError
        { invalidOptionsKey: string },
        cb
      );
    });
  });
});

describe('connect', () => {
  describe('Promises', () => {
    it('should return a promise', (client: MongoClient) => {
      const c: Promise<MongoClient> = client.connect();
      // $ExpectError
      client.connect('mongodb://localhost:27017');
    });
  });
  describe('Callback', () => {
    it('should accepts callback', (client: MongoClient, cb: ConnectCallback) => {
      client.connect(cb);
      // $ExpectError
      client.connect('mongodb://localhost:27017', cb);
    });
  });
});

describe('MongoClientOptions', (options: MongoClientOptions) => {
  it('should supports poolSize options', () => {
    const a: void | number = options.poolSize;
    // $ExpectError
    const b: number = options.poolSize;
  });
  it('should supports ssl options', () => {
    const a: void | boolean = options.ssl;
    // $ExpectError
    const b: boolean = options.ssl;
  });
  it('should supports sslValidate options', () => {
    const a: void | boolean = options.sslValidate;
    // $ExpectError
    const b: boolean = options.sslValidate;
  });
  it('should supports sslCA options', () => {
    const a: void | Buffer = options.sslCA;
    // $ExpectError
    const b: Buffer = options.sslCA;
  });
  it('should supports sslCert options', () => {
    const a: void | Buffer = options.sslCert;
    // $ExpectError
    const b: Buffer = options.sslCert;
  });
  it('should supports sslKey options', () => {
    const a: void | Buffer = options.sslKey;
    // $ExpectError
    const b: Buffer = options.sslKey;
  });
  it('should supports sslPass options', () => {
    const a: void | string = options.sslPass;
    // $ExpectError
    const b: string = options.sslPass;
  });
  it('should supports sslCRL options', () => {
    const a: void | Buffer = options.sslCRL;
    // $ExpectError
    const b: Buffer = options.sslCRL;
  });
  it('should supports checkServerIdentity options', () => {
    const a: MongoClientOptions = { checkServerIdentity: true };
    const b: MongoClientOptions = {
      checkServerIdentity: (servername: string, cert: string) => false,
    };
    // $ExpectError
    const c: MongoClientOptions = { checkServerIdentity: (a: boolean) => {} };
  });
  it('should supports tls options', () => {
    const a: void | boolean = options.tls;
    // $ExpectError
    const b: boolean = options.tls;
  });
  it('should supports tlsInsecure options', () => {
    const a: void | boolean = options.tlsInsecure;
    // $ExpectError
    const b: boolean = options.tlsInsecure;
  });
  it('should supports tlsCAFile options', () => {
    const a: void | string = options.tlsCAFile;
    // $ExpectError
    const b: string = options.tlsCAFile;
  });
  it('should supports tlsCertificateKeyFile options', () => {
    const a: void | string = options.tlsCertificateKeyFile;
    // $ExpectError
    const b: string = options.tlsCertificateKeyFile;
  });
  it('should supports tlsCertificateKeyFilePassword options', () => {
    const a: void | string = options.tlsCertificateKeyFilePassword;
    // $ExpectError
    const b: string = options.tlsCertificateKeyFilePassword;
  });
  it('should supports tlsAllowInvalidCertificates options', () => {
    const a: void | boolean = options.tlsAllowInvalidCertificates;
    // $ExpectError
    const b: boolean = options.tlsAllowInvalidCertificates;
  });
  it('should supports tlsAllowInvalidHostnames options', () => {
    const a: void | boolean = options.tlsAllowInvalidHostnames;
    // $ExpectError
    const b: boolean = options.tlsAllowInvalidHostnames;
  });
  it('should supports autoReconnect options', () => {
    const a: void | boolean = options.autoReconnect;
    // $ExpectError
    const b: boolean = options.autoReconnect;
  });
  it('should supports noDelay options', () => {
    const a: void | boolean = options.noDelay;
    // $ExpectError
    const b: boolean = options.noDelay;
  });
  it('should supports keepAlive options', () => {
    const a: void | boolean = options.keepAlive;
    // $ExpectError
    const b: boolean = options.keepAlive;
  });
  it('should supports keepAliveInitialDelay options', () => {
    const a: void | number = options.keepAliveInitialDelay;
    // $ExpectError
    const b: number = options.keepAliveInitialDelay;
  });
  it('should supports connectTimeoutMS options', () => {
    const a: void | number = options.connectTimeoutMS;
    // $ExpectError
    const b: number = options.connectTimeoutMS;
  });
  it('should supports socketTimeoutMS options', () => {
    const a: void | number = options.socketTimeoutMS;
    // $ExpectError
    const b: number = options.socketTimeoutMS;
  });
  it('should supports keepAliveInitialDelay options', () => {
    const a: 4 | 6 | void | null = options.family;
    // $ExpectError
    const b: number = options.family;
  });
  it('should supports reconnectTries options', () => {
    const a: number | void = options.reconnectTries;
    // $ExpectError
    const b: number = options.reconnectTries;
  });
  it('should supports reconnectInterval options', () => {
    const a: number | void = options.reconnectInterval;
    // $ExpectError
    const b: number = options.family;
  });
  it('should supports ha options', () => {
    const a: boolean | void = options.ha;
    // $ExpectError
    const b: boolean = options.ha;
  });
  it('should supports haInterval options', () => {
    const a: number | void = options.haInterval;
    // $ExpectError
    const b: number = options.haInterval;
  });
  it('should supports replicaSet options', () => {
    const a: void | string = options.replicaSet;
    // $ExpectError
    const b: string = options.replicaSet;
  });
  it('should supports secondaryAcceptableLatencyMS options', () => {
    const a: number | void = options.secondaryAcceptableLatencyMS;
    // $ExpectError
    const b: number = options.secondaryAcceptableLatencyMS;
  });
  it('should supports acceptableLatencyMS options', () => {
    const a: number | void = options.acceptableLatencyMS;
    // $ExpectError
    const b: number = options.acceptableLatencyMS;
  });
  it('should supports connectWithNoPrimary options', () => {
    const a: boolean | void = options.connectWithNoPrimary;
    // $ExpectError
    const b: boolean = options.connectWithNoPrimary;
  });
  it('should supports authSource options', () => {
    const a: string | void = options.authSource;
    // $ExpectError
    const b: string = options.authSource;
  });
  it('should supports w options', () => {
    const a: number | string | void = options.w;
    // $ExpectError
    const b: number | string = options.w;
  });
  it('should supports wtimeout options', () => {
    const a: number | void = options.wtimeout;
    // $ExpectError
    const b: number = options.wtimeout;
  });
  it('should supports j options', () => {
    const a: boolean | void = options.j;
    // $ExpectError
    const b: boolean = options.j;
  });
  it('should supports forceServerObjectId options', () => {
    const a: boolean | void = options.forceServerObjectId;
    // $ExpectError
    const b: boolean = options.forceServerObjectId;
  });
  it('should supports serializeFunctions options', () => {
    const a: boolean | void = options.serializeFunctions;
    // $ExpectError
    const b: boolean = options.serializeFunctions;
  });
  it('should supports ignoreUndefined options', () => {
    const a: boolean | void = options.ignoreUndefined;
    // $ExpectError
    const b: boolean = options.ignoreUndefined;
  });
  it('should supports raw options', () => {
    const a: boolean | void = options.raw;
    // $ExpectError
    const b: boolean = options.raw;
  });
  it('should supports bufferMaxEntries options', () => {
    const a: number | void = options.bufferMaxEntries;
    // $ExpectError
    const b: number = options.bufferMaxEntries;
  });
  it('should supports raw options', () => {
    const a: boolean | void = options.raw;
    // $ExpectError
    const b: boolean = options.raw;
  });
  it('should supports readPreference options', () => {
    const a: ReadPreferenceValue | void = options.readPreference;
    // $ExpectError
    const b: ReadPreferenceValue = options.readPreference;
  });
  it('should supports pkFactory options', (pkFactory: PkFactory) => {
    const a: PkFactory | void = options.pkFactory;
    // $ExpectError
    const b: PkFactory = options.pkFactory;
  });
  it('should supports pkFactory options', (pkFactory: PkFactory) => {
    const a: PkFactory | void = options.pkFactory;
    // $ExpectError
    const b: PkFactory = options.pkFactory;
  });
  it('should supports promiseLibrary options', () => {
    const a: { ... } | void = options.promiseLibrary;
    // $ExpectError
    const b: { ... } = options.promiseLibrary;
  });
  it('should supports readConcern options', () => {
    const a: ReadConcern | void = options.readConcern;
    // $ExpectError
    const b: ReadConcern = options.readConcern;
  });
  it('should supports maxStalenessSeconds options', () => {
    const a: number | void = options.maxStalenessSeconds;
    // $ExpectError
    const b: number = options.maxStalenessSeconds;
  });
  it('should supports loggerLevel options', () => {
    const a: 'error' | 'warn' | 'info' | 'debug' | void = options.loggerLevel;
    // $ExpectError
    const b: 'error' | 'warn' | 'info' | 'debug' = options.loggerLevel;
  });
  it('should supports logger options', () => {
    const a: LoggerInterface | void = options.logger;
    // $ExpectError
    const b: LoggerInterface = options.logger;
  });
  it('should supports promoteValues options', () => {
    const a: boolean | void = options.promoteValues;
    // $ExpectError
    const b: boolean = options.promoteValues;
  });
  it('should supports promoteBuffers options', () => {
    const a: boolean | void = options.promoteBuffers;
    // $ExpectError
    const b: boolean = options.promoteBuffers;
  });
  it('should supports promoteLongs options', () => {
    const a: boolean | void = options.promoteLongs;
    // $ExpectError
    const b: boolean = options.promoteLongs;
  });
  it('should supports domainsEnabled options', () => {
    const a: boolean | void = options.domainsEnabled;
    // $ExpectError
    const b: boolean = options.domainsEnabled;
  });
  it('should supports validateOptions options', () => {
    const a: boolean | void = options.validateOptions;
    // $ExpectError
    const b: boolean = options.validateOptions;
  });
  it('should supports appname options', () => {
    const a: string | void = options.appname;
    // $ExpectError
    const b: string = options.appname;
  });
  it('should supports auth options', () => {
    const a: Auth | void = options.auth;
    // $ExpectError
    const b: Auth = options.auth;
  });
  it('should supports authMechanism options', () => {
    const a: 'MDEFAULT' | 'GSSAPI' | 'PLAIN' | 'MONGODB-X509' | 'SCRAM-SHA-1' | void = options.authMechanism;
    // $ExpectError
    const b: 'MDEFAULT' | 'GSSAPI' | 'PLAIN' | 'MONGODB-X509' | 'SCRAM-SHA-1' = options.authMechanism;
  });
  it('should supports compression options', () => {
    const a: 'snappy' | 'zlib' | void = options.compression;
    // $ExpectError
    const b: 'snappy' | 'zlib' = options.compression;
  });
  it('should supports fsync options', () => {
    const a: boolean | void = options.fsync;
    // $ExpectError
    const b: boolean = options.fsync;
  });
  it('should supports readPreferenceTags options', () => {
    const a: Array<{ [string]: string, ... }> | void = options.readPreferenceTags;
    // $ExpectError
    const b: Array<{ [string]: string, ... }> = options.readPreferenceTags;
  });
  it('should supports numberOfRetries options', () => {
    const a: number | void = options.numberOfRetries;
    // $ExpectError
    const b: number = options.numberOfRetries;
  });
  it('should supports auto_reconnect options', () => {
    const a: boolean | void = options.auto_reconnect;
    // $ExpectError
    const b: boolean = options.auto_reconnect;
  });
  it('should supports monitorCommands options', () => {
    const a: boolean | void = options.monitorCommands;
    // $ExpectError
    const b: boolean = options.monitorCommands;
  });
  it('should supports minSize options', () => {
    const a: number | void = options.minSize;
    // $ExpectError
    const b: number = options.minSize;
  });
  it('should supports useNewUrlParser options', () => {
    const a: boolean | void = options.useNewUrlParser;
    // $ExpectError
    const b: boolean = options.useNewUrlParser;
  });
  it('should supports useUnifiedTopology options', () => {
    const a: boolean | void = options.useUnifiedTopology;
    // $ExpectError
    const b: boolean = options.useUnifiedTopology;
  });
  it('should supports autoEncryption options', () => {
    const a: AutoEncryptionOptionsObject | void = options.autoEncryption;
    // $ExpectError
    const b: AutoEncryptionOptionsObject = options.autoEncryption;
  });
  it('should supports driverInfo options', () => {
    const a: DriverInfoOptionsObject | void = options.driverInfo;
    // $ExpectError
    const b: DriverInfoOptionsObject = options.driverInfo;
  });
});

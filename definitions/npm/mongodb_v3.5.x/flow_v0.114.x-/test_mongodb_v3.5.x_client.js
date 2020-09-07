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
      // $FlowExpectedError
      MongoClient.connect(2);
      // $FlowExpectedError
      MongoClient.connect();
    });

    it('should accepts options', (options: MongoClientOptions) => {
      const client: Promise<MongoClient> = MongoClient.connect(
        'mongodb://localhost:27017',
        options
      );
      MongoClient.connect(
        'mongodb://localhost:27017',
        // $FlowExpectedError
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
      // $FlowExpectedError
      MongoClient.connect(2, cb);
      // $FlowExpectedError
      MongoClient.connect(cb);
      MongoClient.connect(
        'mongodb://localhost:27017',
        // $FlowExpectedError
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
        // $FlowExpectedError
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
      // $FlowExpectedError
      client.connect('mongodb://localhost:27017');
    });
  });
  describe('Callback', () => {
    it('should accepts callback', (client: MongoClient, cb: ConnectCallback) => {
      client.connect(cb);
      // $FlowExpectedError
      client.connect('mongodb://localhost:27017', cb);
    });
  });
});

describe('MongoClientOptions', (options: MongoClientOptions) => {
  it('should supports poolSize options', () => {
    const a: void | number = options.poolSize;
    // $FlowExpectedError
    const b: number = options.poolSize;
  });
  it('should supports ssl options', () => {
    const a: void | boolean = options.ssl;
    // $FlowExpectedError
    const b: boolean = options.ssl;
  });
  it('should supports sslValidate options', () => {
    const a: void | boolean = options.sslValidate;
    // $FlowExpectedError
    const b: boolean = options.sslValidate;
  });
  it('should supports sslCA options', () => {
    const a: void | Buffer = options.sslCA;
    // $FlowExpectedError
    const b: Buffer = options.sslCA;
  });
  it('should supports sslCert options', () => {
    const a: void | Buffer = options.sslCert;
    // $FlowExpectedError
    const b: Buffer = options.sslCert;
  });
  it('should supports sslKey options', () => {
    const a: void | Buffer = options.sslKey;
    // $FlowExpectedError
    const b: Buffer = options.sslKey;
  });
  it('should supports sslPass options', () => {
    const a: void | string = options.sslPass;
    // $FlowExpectedError
    const b: string = options.sslPass;
  });
  it('should supports sslCRL options', () => {
    const a: void | Buffer = options.sslCRL;
    // $FlowExpectedError
    const b: Buffer = options.sslCRL;
  });
  it('should supports checkServerIdentity options', () => {
    const a: MongoClientOptions = { checkServerIdentity: true };
    const b: MongoClientOptions = {
      checkServerIdentity: (servername: string, cert: string) => false,
    };
    // $FlowExpectedError
    const c: MongoClientOptions = { checkServerIdentity: (a: boolean) => {} };
  });
  it('should supports tls options', () => {
    const a: void | boolean = options.tls;
    // $FlowExpectedError
    const b: boolean = options.tls;
  });
  it('should supports tlsInsecure options', () => {
    const a: void | boolean = options.tlsInsecure;
    // $FlowExpectedError
    const b: boolean = options.tlsInsecure;
  });
  it('should supports tlsCAFile options', () => {
    const a: void | string = options.tlsCAFile;
    // $FlowExpectedError
    const b: string = options.tlsCAFile;
  });
  it('should supports tlsCertificateKeyFile options', () => {
    const a: void | string = options.tlsCertificateKeyFile;
    // $FlowExpectedError
    const b: string = options.tlsCertificateKeyFile;
  });
  it('should supports tlsCertificateKeyFilePassword options', () => {
    const a: void | string = options.tlsCertificateKeyFilePassword;
    // $FlowExpectedError
    const b: string = options.tlsCertificateKeyFilePassword;
  });
  it('should supports tlsAllowInvalidCertificates options', () => {
    const a: void | boolean = options.tlsAllowInvalidCertificates;
    // $FlowExpectedError
    const b: boolean = options.tlsAllowInvalidCertificates;
  });
  it('should supports tlsAllowInvalidHostnames options', () => {
    const a: void | boolean = options.tlsAllowInvalidHostnames;
    // $FlowExpectedError
    const b: boolean = options.tlsAllowInvalidHostnames;
  });
  it('should supports autoReconnect options', () => {
    const a: void | boolean = options.autoReconnect;
    // $FlowExpectedError
    const b: boolean = options.autoReconnect;
  });
  it('should supports noDelay options', () => {
    const a: void | boolean = options.noDelay;
    // $FlowExpectedError
    const b: boolean = options.noDelay;
  });
  it('should supports keepAlive options', () => {
    const a: void | boolean = options.keepAlive;
    // $FlowExpectedError
    const b: boolean = options.keepAlive;
  });
  it('should supports keepAliveInitialDelay options', () => {
    const a: void | number = options.keepAliveInitialDelay;
    // $FlowExpectedError
    const b: number = options.keepAliveInitialDelay;
  });
  it('should supports connectTimeoutMS options', () => {
    const a: void | number = options.connectTimeoutMS;
    // $FlowExpectedError
    const b: number = options.connectTimeoutMS;
  });
  it('should supports socketTimeoutMS options', () => {
    const a: void | number = options.socketTimeoutMS;
    // $FlowExpectedError
    const b: number = options.socketTimeoutMS;
  });
  it('should supports keepAliveInitialDelay options', () => {
    const a: 4 | 6 | void | null = options.family;
    // $FlowExpectedError
    const b: number = options.family;
  });
  it('should supports reconnectTries options', () => {
    const a: number | void = options.reconnectTries;
    // $FlowExpectedError
    const b: number = options.reconnectTries;
  });
  it('should supports reconnectInterval options', () => {
    const a: number | void = options.reconnectInterval;
    // $FlowExpectedError
    const b: number = options.family;
  });
  it('should supports ha options', () => {
    const a: boolean | void = options.ha;
    // $FlowExpectedError
    const b: boolean = options.ha;
  });
  it('should supports haInterval options', () => {
    const a: number | void = options.haInterval;
    // $FlowExpectedError
    const b: number = options.haInterval;
  });
  it('should supports replicaSet options', () => {
    const a: void | string = options.replicaSet;
    // $FlowExpectedError
    const b: string = options.replicaSet;
  });
  it('should supports secondaryAcceptableLatencyMS options', () => {
    const a: number | void = options.secondaryAcceptableLatencyMS;
    // $FlowExpectedError
    const b: number = options.secondaryAcceptableLatencyMS;
  });
  it('should supports acceptableLatencyMS options', () => {
    const a: number | void = options.acceptableLatencyMS;
    // $FlowExpectedError
    const b: number = options.acceptableLatencyMS;
  });
  it('should supports connectWithNoPrimary options', () => {
    const a: boolean | void = options.connectWithNoPrimary;
    // $FlowExpectedError
    const b: boolean = options.connectWithNoPrimary;
  });
  it('should supports authSource options', () => {
    const a: string | void = options.authSource;
    // $FlowExpectedError
    const b: string = options.authSource;
  });
  it('should supports w options', () => {
    const a: number | string | void = options.w;
    // $FlowExpectedError
    const b: number | string = options.w;
  });
  it('should supports wtimeout options', () => {
    const a: number | void = options.wtimeout;
    // $FlowExpectedError
    const b: number = options.wtimeout;
  });
  it('should supports j options', () => {
    const a: boolean | void = options.j;
    // $FlowExpectedError
    const b: boolean = options.j;
  });
  it('should supports forceServerObjectId options', () => {
    const a: boolean | void = options.forceServerObjectId;
    // $FlowExpectedError
    const b: boolean = options.forceServerObjectId;
  });
  it('should supports serializeFunctions options', () => {
    const a: boolean | void = options.serializeFunctions;
    // $FlowExpectedError
    const b: boolean = options.serializeFunctions;
  });
  it('should supports ignoreUndefined options', () => {
    const a: boolean | void = options.ignoreUndefined;
    // $FlowExpectedError
    const b: boolean = options.ignoreUndefined;
  });
  it('should supports raw options', () => {
    const a: boolean | void = options.raw;
    // $FlowExpectedError
    const b: boolean = options.raw;
  });
  it('should supports bufferMaxEntries options', () => {
    const a: number | void = options.bufferMaxEntries;
    // $FlowExpectedError
    const b: number = options.bufferMaxEntries;
  });
  it('should supports raw options', () => {
    const a: boolean | void = options.raw;
    // $FlowExpectedError
    const b: boolean = options.raw;
  });
  it('should supports readPreference options', () => {
    const a: ReadPreferenceValue | void = options.readPreference;
    // $FlowExpectedError
    const b: ReadPreferenceValue = options.readPreference;
  });
  it('should supports pkFactory options', (pkFactory: PkFactory) => {
    const a: PkFactory | void = options.pkFactory;
    // $FlowExpectedError
    const b: PkFactory = options.pkFactory;
  });
  it('should supports pkFactory options', (pkFactory: PkFactory) => {
    const a: PkFactory | void = options.pkFactory;
    // $FlowExpectedError
    const b: PkFactory = options.pkFactory;
  });
  it('should supports promiseLibrary options', () => {
    const a: { ... } | void = options.promiseLibrary;
    // $FlowExpectedError
    const b: { ... } = options.promiseLibrary;
  });
  it('should supports readConcern options', () => {
    const a: ReadConcern | void = options.readConcern;
    // $FlowExpectedError
    const b: ReadConcern = options.readConcern;
  });
  it('should supports maxStalenessSeconds options', () => {
    const a: number | void = options.maxStalenessSeconds;
    // $FlowExpectedError
    const b: number = options.maxStalenessSeconds;
  });
  it('should supports loggerLevel options', () => {
    const a: 'error' | 'warn' | 'info' | 'debug' | void = options.loggerLevel;
    // $FlowExpectedError
    const b: 'error' | 'warn' | 'info' | 'debug' = options.loggerLevel;
  });
  it('should supports logger options', () => {
    const a: LoggerInterface | void = options.logger;
    // $FlowExpectedError
    const b: LoggerInterface = options.logger;
  });
  it('should supports promoteValues options', () => {
    const a: boolean | void = options.promoteValues;
    // $FlowExpectedError
    const b: boolean = options.promoteValues;
  });
  it('should supports promoteBuffers options', () => {
    const a: boolean | void = options.promoteBuffers;
    // $FlowExpectedError
    const b: boolean = options.promoteBuffers;
  });
  it('should supports promoteLongs options', () => {
    const a: boolean | void = options.promoteLongs;
    // $FlowExpectedError
    const b: boolean = options.promoteLongs;
  });
  it('should supports domainsEnabled options', () => {
    const a: boolean | void = options.domainsEnabled;
    // $FlowExpectedError
    const b: boolean = options.domainsEnabled;
  });
  it('should supports validateOptions options', () => {
    const a: boolean | void = options.validateOptions;
    // $FlowExpectedError
    const b: boolean = options.validateOptions;
  });
  it('should supports appname options', () => {
    const a: string | void = options.appname;
    // $FlowExpectedError
    const b: string = options.appname;
  });
  it('should supports auth options', () => {
    const a: Auth | void = options.auth;
    // $FlowExpectedError
    const b: Auth = options.auth;
  });
  it('should supports authMechanism options', () => {
    const a: 'MDEFAULT' | 'GSSAPI' | 'PLAIN' | 'MONGODB-X509' | 'SCRAM-SHA-1' | void = options.authMechanism;
    // $FlowExpectedError
    const b: 'MDEFAULT' | 'GSSAPI' | 'PLAIN' | 'MONGODB-X509' | 'SCRAM-SHA-1' = options.authMechanism;
  });
  it('should supports compression options', () => {
    const a: 'snappy' | 'zlib' | void = options.compression;
    // $FlowExpectedError
    const b: 'snappy' | 'zlib' = options.compression;
  });
  it('should supports fsync options', () => {
    const a: boolean | void = options.fsync;
    // $FlowExpectedError
    const b: boolean = options.fsync;
  });
  it('should supports readPreferenceTags options', () => {
    const a: Array<{ [string]: string, ... }> | void = options.readPreferenceTags;
    // $FlowExpectedError
    const b: Array<{ [string]: string, ... }> = options.readPreferenceTags;
  });
  it('should supports numberOfRetries options', () => {
    const a: number | void = options.numberOfRetries;
    // $FlowExpectedError
    const b: number = options.numberOfRetries;
  });
  it('should supports auto_reconnect options', () => {
    const a: boolean | void = options.auto_reconnect;
    // $FlowExpectedError
    const b: boolean = options.auto_reconnect;
  });
  it('should supports monitorCommands options', () => {
    const a: boolean | void = options.monitorCommands;
    // $FlowExpectedError
    const b: boolean = options.monitorCommands;
  });
  it('should supports minSize options', () => {
    const a: number | void = options.minSize;
    // $FlowExpectedError
    const b: number = options.minSize;
  });
  it('should supports useNewUrlParser options', () => {
    const a: boolean | void = options.useNewUrlParser;
    // $FlowExpectedError
    const b: boolean = options.useNewUrlParser;
  });
  it('should supports useUnifiedTopology options', () => {
    const a: boolean | void = options.useUnifiedTopology;
    // $FlowExpectedError
    const b: boolean = options.useUnifiedTopology;
  });
  it('should supports autoEncryption options', () => {
    const a: AutoEncryptionOptionsObject | void = options.autoEncryption;
    // $FlowExpectedError
    const b: AutoEncryptionOptionsObject = options.autoEncryption;
  });
  it('should supports driverInfo options', () => {
    const a: DriverInfoOptionsObject | void = options.driverInfo;
    // $FlowExpectedError
    const b: DriverInfoOptionsObject = options.driverInfo;
  });
});

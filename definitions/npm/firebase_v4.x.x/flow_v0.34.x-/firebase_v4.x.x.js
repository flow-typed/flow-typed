/* @flow */
/** ** firebase ****/

declare interface $npm$firebase$Config {
  apiKey: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
}

declare interface $npm$firebase$auth$Error {
  code:
    | "auth/app-deleted"
    | "auth/app-not-authorized"
    | "auth/argument-error"
    | "auth/invalid-api-key"
    | "auth/invalid-user-token"
    | "auth/network-request-failed"
    | "auth/operation-not-allowed"
    | "auth/requires-recent-login"
    | "auth/too-many-requests"
    | "auth/unauthorized-domain"
    | "auth/user-disabled"
    | "auth/user-token-expired"
    | "auth/web-storage-unsupported"
    | "auth/invalid-email"
    | "auth/account-exists-with-different-credential"
    | "auth/invalid-credential"
    | "auth/user-not-found"
    | "auth/wrong-password"
    | "auth/invalid-verification-code"
    | "auth/invalid-verification-id"
    | "auth/expired-action-code"
    | "auth/invalid-action-code"
    | "auth/invalid-verification-code"
    | "auth/missing-verification-code"
    | "auth/captcha-check-failed"
    | "auth/invalid-phone-number"
    | "auth/missing-phone-number"
    | "auth/quota-exceeded"
    | "auth/credential-already-in-use"
    | "auth/email-already-in-use"
    | "auth/provider-already-linked"
    | "auth/auth-domain-config-required"
    | "auth/cancelled-popup-request"
    | "auth/popup-blocked"
    | "auth/operation-not-supported-in-this-environment"
    | "auth/popup-closed-by-user"
    | "auth/unauthorized-domain"
    | "auth/no-such-provider";
  message: string;
}

declare interface $npm$firebase$Error {
  code: $PropertyType<$npm$firebase$auth$Error, "code"> | "app/no-app";
  message: string;
  name: string;
  stack: ?string;
}

/** *** app *****/
declare class $npm$firebase$App {
  name: string;
  +options: $npm$firebase$Config;
  auth(): $npm$firebase$auth$Auth;
  database(): $npm$firebase$database$Database;
  storage(): $npm$firebase$storage$Storage;
  delete(): Promise<void>;
}

/** **** auth *******/
declare interface $npm$firebase$auth$ActionCodeInfo {
  data: { email: string };
}

declare interface $npm$firebase$auth$ApplicationVerifier {
  type: string;
  verify(): Promise<string>;
}

declare type $npm$firebase$auth$Auth$Persistence = {
  +LOCAL: 'local',
  +SESSION: 'session',
  +NONE: 'none',
}

declare type $npm$firebase$auth$Auth$Persistence$Enum = $Values<$npm$firebase$auth$Auth$Persistence>

declare class $npm$firebase$auth$Auth {
  static Persistence: $npm$firebase$auth$Auth$Persistence;
  app: $npm$firebase$App;
  currentUser: $npm$firebase$auth$User;
  applyActionCode(code: string): Promise<void>;
  checkActionCode(code: string): Promise<$npm$firebase$auth$ActionCodeInfo>;
  confirmPasswordReset(code: string, newPassword: string): Promise<void>;
  createCustomToken(uid: string, developerClaims?: {}): string;
  createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<$npm$firebase$auth$User>;
  fetchProvidersForEmail(email: string): Promise<Array<string>>;
  onAuthStateChanged(
    nextOrObserver: (?$npm$firebase$auth$User) => void,
    error?: (error: $npm$firebase$auth$Error) => void,
    completed?: () => void
  ): () => void;
  onIdTokenChanged(
    nextOrObserver: Object | ((user?: $npm$firebase$auth$User) => void),
    error?: (error: $npm$firebase$auth$Error) => void,
    completed?: () => void
  ): () => void;
  sendPasswordResetEmail(email: string): Promise<void>;
  setPersistence(persistence: $npm$firebase$auth$Auth$Persistence$Enum): Promise<void>;
  signInAndRetrieveDataWithCredential(
    credential: $npm$firebase$auth$AuthCredential
  ): Promise<$npm$firebase$auth$UserCredential>;
  signInAnonymously(): Promise<$npm$firebase$auth$User>;
  signInWithCredential(
    credential: $npm$firebase$auth$AuthCredential
  ): Promise<$npm$firebase$auth$User>;
  signInWithCustomToken(token: string): Promise<$npm$firebase$auth$User>;
  signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<$npm$firebase$auth$User>;
  signInWithPhoneNumber(
    phoneNumber: string,
    applicationVerifier: $npm$firebase$auth$ApplicationVerifier
  ): Promise<$npm$firebase$auth$ConfirmationResult>;
  signInWithPopup(
    provider: $npm$firebase$auth$AuthProvider
  ): Promise<$npm$firebase$auth$UserCredential>;
  signOut(): Promise<void>;
  verifyIdToken(idToken: string): Promise<Object>;
  verifyPasswordResetCode(code: string): Promise<string>;
}

declare interface $npm$firebase$auth$AuthCredential {
  providerId: string;
}

declare class $npm$firebase$auth$AuthProvider {
  providerId: string;
}

declare interface $npm$firebase$auth$ConfirmationResult {
  verificationId: string;
  confirm(verificationCode: string): Promise<$npm$firebase$auth$UserCredential>;
}

declare type $npm$firebase$auth$UserProfile = {
  displayName?: string,
  photoURL?: string
};

declare interface $npm$firebase$auth$AdditionalUserInfo {
  providerId: string;
  profile?: $npm$firebase$auth$UserProfile;
  username?: string;
}

declare interface $npm$firebase$auth$UserCredential {
  user: $npm$firebase$auth$User;
  credential?: $npm$firebase$auth$AuthCredential;
  operationType?: string;
  additionalUserInfo?: $npm$firebase$auth$AdditionalUserInfo;
}

declare class $npm$firebase$auth$UserInfo {
  displayName: ?string;
  email: ?string;
  photoURL: ?string;
  providerId: string;
  uid: string;
}

declare class $npm$firebase$auth$User extends $npm$firebase$auth$UserInfo {
  displayName: ?string;
  email: ?string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: ?string;
  photoUrl: ?string;
  providerData: Array<$npm$firebase$auth$UserInfo>;
  providerId: string;
  refreshToken: string;
  uid: string;
  delete(): Promise<void>;
  getIdToken(forceRefresh?: boolean): Promise<string>;
  getToken(forceRefresh?: boolean): Promise<string>;
  linkAndRetrieveDataWithCredential(
    credential: $npm$firebase$auth$AuthCredential
  ): Promise<$npm$firebase$auth$UserCredential>;
  linkWithCredential(
    credential: $npm$firebase$auth$AuthCredential
  ): Promise<$npm$firebase$auth$User>;
  linkWithPhoneNumber(
    phoneNumber: string,
    applicationVerifier: $npm$firebase$auth$ApplicationVerifier
  ): Promise<$npm$firebase$auth$ConfirmationResult>;
  linkWithPopup(
    provider: $npm$firebase$auth$OAuthProvider
  ): Promise<$npm$firebase$auth$UserCredential>;
  reauthenticateAndRetrieveDataWithCredential(
    credential: $npm$firebase$auth$AuthCredential
  ): Promise<void>;
  reauthenticateWithCredential(
    credential: $npm$firebase$auth$AuthCredential
  ): Promise<void>;
  reauthenticateWithPhoneNumber(
    phoneNumber: string,
    applicationVerifier: $npm$firebase$auth$ApplicationVerifier
  ): Promise<$npm$firebase$auth$ConfirmationResult>;
  reload(): Promise<void>;
  sendEmailVerification(): Promise<void>;
  toJSON(): Object;
  unlink(providerId: string): Promise<$npm$firebase$auth$User>;
  updateEmail(newEmail: string): Promise<void>;
  updatePassword(newPassword: string): Promise<void>;
  updatePhoneNumber(
    phoneCredential: $npm$firebase$auth$AuthCredential
  ): Promise<void>;
  updateProfile(profile: $npm$firebase$auth$UserProfile): Promise<void>;
}

declare class $npm$firebase$auth$EmailAuthProvider extends $npm$firebase$auth$AuthProvider {
  PROVIDER_ID: string;
  providerId: string;
  credential(
    email: string,
    password: string
  ): $npm$firebase$auth$AuthCredential;
}

declare class $npm$firebase$auth$FacebookAuthProvider extends $npm$firebase$auth$AuthProvider {
  PROVIDER_ID: string;
  credential(token: string): $npm$firebase$auth$AuthCredential;
  addScope(scope: string): $npm$firebase$auth$FacebookAuthProvider;
  setCustomParameters(
    customOAuthParameters: Object
  ): $npm$firebase$auth$FacebookAuthProvider;
}

declare class $npm$firebase$auth$GithubAuthProvider extends $npm$firebase$auth$AuthProvider {
  PROVIDER_ID: string;
  credential(token: string): $npm$firebase$auth$AuthCredential;
  addScope(scope: string): $npm$firebase$auth$GithubAuthProvider;
  setCustomParameters(
    customOAuthParameters: Object
  ): $npm$firebase$auth$GithubAuthProvider;
}

declare class $npm$firebase$auth$GoogleAuthProvider extends $npm$firebase$auth$AuthProvider {
  PROVIDER_ID: string;
  credential(
    idToken?: string,
    accessToken?: string
  ): $npm$firebase$auth$AuthCredential;
  addScope(scope: string): $npm$firebase$auth$GoogleAuthProvider;
  setCustomParameters(
    customOAuthParameters: Object
  ): $npm$firebase$auth$GoogleAuthProvider;
}

declare class $npm$firebase$auth$PhoneAuthProvider extends $npm$firebase$auth$AuthProvider {
  PROVIDER_ID: string;
  constructor(
    auth?: $npm$firebase$auth$Auth
  ): $npm$firebase$auth$PhoneAuthProvider;
  credential(
    verificationId: string,
    verificationCode: string
  ): $npm$firebase$auth$AuthCredential;
  verifyPhoneNumber(
    phoneNumber: string,
    applicationVerifier: $npm$firebase$auth$ApplicationVerifier
  ): Promise<string>;
}

declare class $npm$firebase$auth$TwitterAuthProvider extends $npm$firebase$auth$AuthProvider {
  PROVIDER_ID: string;
  credential(token: string, secret: string): $npm$firebase$auth$AuthCredential;
  setCustomParameters(customOAuthParameters: Object): this;
}

declare type $npm$firebase$auth$OAuthProvider =
  | $npm$firebase$auth$FacebookAuthProvider
  | $npm$firebase$auth$GithubAuthProvider
  | $npm$firebase$auth$GoogleAuthProvider
  | $npm$firebase$auth$TwitterAuthProvider;

/** **** database ******/
declare type $npm$firebase$database$Value = any;
declare type $npm$firebase$database$OnCompleteCallback = (
  error: ?Object
) => void;
declare type $npm$firebase$database$QueryEventType =
  | "value"
  | "child_added"
  | "child_changed"
  | "child_removed"
  | "child_moved";
declare type $npm$firebase$database$Priority = string | number | null;

declare class $npm$firebase$database$Database {
  app: $npm$firebase$App;
  goOffline(): void;
  goOnline(): void;
  ref(path?: string): $npm$firebase$database$Reference;
  refFromURL(url: string): $npm$firebase$database$Reference;
}

declare class $npm$firebase$database$DataSnapshot {
  key: ?string;
  ref: $npm$firebase$database$Reference;
  child(path?: string): $npm$firebase$database$DataSnapshot;
  exists(): boolean;
  exportVal(): $npm$firebase$database$Value;
  forEach(action: ($npm$firebase$database$DataSnapshot) => boolean): boolean;
  getPriority(): $npm$firebase$database$Priority;
  hasChild(path: string): boolean;
  hasChildren(): boolean;
  numChildren(): number;
  toJSON(): Object;
  val(): $npm$firebase$database$Value;
}

declare class $npm$firebase$database$OnDisconnect {
  cancel(onComplete?: $npm$firebase$database$OnCompleteCallback): Promise<void>;
  remove(onComplete?: $npm$firebase$database$OnCompleteCallback): Promise<void>;
  set(
    value: $npm$firebase$database$Value,
    onComplete?: $npm$firebase$database$OnCompleteCallback
  ): Promise<void>;
  setWithPriority(
    value: $npm$firebase$database$Value,
    priority: number | string | null,
    onComplete?: $npm$firebase$database$OnCompleteCallback
  ): Promise<void>;
  update(
    values: { +[path: string]: $npm$firebase$database$Value },
    onComplete?: $npm$firebase$database$OnCompleteCallback
  ): Promise<void>;
}

declare type $npm$firebase$database$Callback = (
  $npm$firebase$database$DataSnapshot,
  ?string
) => void;

declare class $npm$firebase$database$Query {
  ref: $npm$firebase$database$Reference;
  endAt(
    value: number | string | boolean | null,
    key?: string
  ): $npm$firebase$database$Query;
  equalTo(
    value: number | string | boolean | null,
    key?: string
  ): $npm$firebase$database$Query;
  isEqual(other: $npm$firebase$database$Query): boolean;
  limitToFirst(limit: number): $npm$firebase$database$Query;
  limitToLast(limit: number): $npm$firebase$database$Query;
  off(
    eventType?: $npm$firebase$database$QueryEventType,
    callback?: $npm$firebase$database$Callback,
    context?: Object
  ): void;
  on(
    eventType: $npm$firebase$database$QueryEventType,
    callback: $npm$firebase$database$Callback,
    cancelCallbackOrContext?: (error: Object) => void | Object,
    context?: $npm$firebase$database$Callback
  ): $npm$firebase$database$Callback;
  once(
    eventType: $npm$firebase$database$QueryEventType,
    successCallback?: $npm$firebase$database$Callback,
    failureCallbackOrContext?: (error: Object) => void | Object,
    context?: Object
  ): Promise<$npm$firebase$database$DataSnapshot>;
  orderByChild(path: string): $npm$firebase$database$Query;
  orderByKey(): $npm$firebase$database$Query;
  orderByPriority(): $npm$firebase$database$Query;
  orderByValue(): $npm$firebase$database$Query;
  startAt(
    value: number | string | boolean | null,
    key?: string
  ): $npm$firebase$database$Query;
  toJSON(): Object;
  toString(): string;
}

declare class $npm$firebase$database$Reference extends $npm$firebase$database$Query {
  key: ?string;
  parent?: $npm$firebase$database$Reference;
  root: $npm$firebase$database$Reference;
  child(path: string): $npm$firebase$database$Reference;
  onDisconnect(): $npm$firebase$database$OnDisconnect;
  push(
    value?: $npm$firebase$database$Value,
    onComplete?: $npm$firebase$database$OnCompleteCallback
  ): $npm$firebase$database$ThenableReference & Promise<void>;
  remove(onComplete?: $npm$firebase$database$OnCompleteCallback): Promise<void>;
  set(
    value: $npm$firebase$database$Value,
    onComplete?: $npm$firebase$database$OnCompleteCallback
  ): Promise<void>;
  setPriority(
    priority: $npm$firebase$database$Priority,
    onComplete?: $npm$firebase$database$OnCompleteCallback
  ): Promise<void>;
  setWithPriority(
    newVal: $npm$firebase$database$Value,
    newPriority: $npm$firebase$database$Priority,
    onComplete?: $npm$firebase$database$OnCompleteCallback
  ): Promise<void>;
  transaction(
    transactionUpdate: (
      data: $npm$firebase$database$Value
    ) => $npm$firebase$database$Value,
    onComplete?: (
      error: null | Object,
      committed: boolean,
      snapshot: $npm$firebase$database$DataSnapshot
    ) => void,
    applyLocally?: boolean
  ): Promise<{
    committed: boolean,
    snapshot: $npm$firebase$database$DataSnapshot | null
  }>;
  update(
    values: { [path: string]: $npm$firebase$database$Value },
    onComplete?: $npm$firebase$database$OnCompleteCallback
  ): Promise<void>;
}

declare class $npm$firebase$database$ServerValue {
  static TIMESTAMP: {};
}

declare class $npm$firebase$database$ThenableReference extends $npm$firebase$database$Reference {}

/** **** storage ******/
declare type $npm$firebase$storage$StringFormat =
  | "raw"
  | "base64"
  | "base64url"
  | "data_url";
declare type $npm$firebase$storage$TaskEvent = "state_changed";
declare type $npm$firebase$storage$TaskState =
  | "running"
  | "paused"
  | "success"
  | "canceled"
  | "error";

declare class $npm$firebase$storage$Storage {
  app: $npm$firebase$App;
  maxOperationRetryTime: number;
  maxUploadRetryTime: number;
  ref(path?: string): $npm$firebase$storage$Reference;
  refFromURL(url: string): $npm$firebase$storage$Reference;
  setMaxOperationRetryTime(time: number): void;
  setMaxUploadRetryTime(time: number): void;
}

declare class $npm$firebase$storage$FullMetadata extends $npm$firebase$storage$UploadMetadata {
  bucket: string;
  downloadURLs: Array<string>;
  fullPath: string;
  generation: string;
  metageneration: string;
  name: string;
  size: number;
  timeCreated: string;
  updated: string;
}

declare class $npm$firebase$storage$Reference {
  bucket: string;
  fullPath: string;
  name: string;
  parent?: $npm$firebase$storage$Reference;
  root: $npm$firebase$storage$Reference;
  storage: $npm$firebase$storage$Storage;
  child(path: string): $npm$firebase$storage$Reference;
  delete(): Promise<void>;
  getDownloadURL(): Promise<string>;
  getMetadata(): Promise<$npm$firebase$storage$FullMetadata>;
  put(
    data: Blob | Uint8Array | ArrayBuffer,
    metadata?: $npm$firebase$storage$UploadMetadata
  ): $npm$firebase$storage$UploadTask;
  putString(
    data: string,
    format: $npm$firebase$storage$StringFormat,
    metadata?: $npm$firebase$storage$UploadMetadata
  ): $npm$firebase$storage$UploadTask;
  toString(): string;
  updateMetadata(
    metadata: $npm$firebase$storage$SettableMetadata
  ): Promise<$npm$firebase$storage$FullMetadata>;
}

declare class $npm$firebase$storage$SettableMetadata {
  cacheControl?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  contentLanguage?: string;
  contentType?: string;
  customMetadata?: { [key: string]: string | void };
}

declare class $npm$firebase$storage$UploadMetadata extends $npm$firebase$storage$SettableMetadata {
  md5Hash?: string;
}

declare interface $npm$firebase$storage$Observer {
  next: (snapshot: $npm$firebase$storage$UploadTaskSnapshot) => void;
  error?: (error: Error) => void;
  complete?: () => void;
}

declare type $npm$firebase$storage$Unsubscribe = () => void;

declare type $npm$firebase$storage$Subscribe = (
  observerOrNext:
    | $npm$firebase$storage$Observer
    | ((snapshot: $npm$firebase$storage$UploadTaskSnapshot) => void),
  onError?: (error: Error) => void,
  onComplete?: () => void
) => $npm$firebase$storage$Unsubscribe;

declare class $npm$firebase$storage$UploadTask extends Promise<
  $npm$firebase$storage$UploadTaskSnapshot
> {
  snapshot: $npm$firebase$storage$UploadTaskSnapshot;
  cancel(): boolean;
  on(
    event: $npm$firebase$storage$TaskEvent,
    ...rest: Array<void>
  ): $npm$firebase$storage$Subscribe;
  on(
    event: $npm$firebase$storage$TaskEvent,
    observerOrNext:
      | $npm$firebase$storage$Observer
      | ((snapshot: $npm$firebase$storage$UploadTaskSnapshot) => void),
    onError?: (error: Error) => void,
    onComplete?: () => void
  ): $npm$firebase$storage$Unsubscribe;
  pause(): boolean;
  resume(): boolean;
}

declare class $npm$firebase$storage$UploadTaskSnapshot {
  bytesTransferred: number;
  downloadURL?: string;
  metadata: $npm$firebase$storage$FullMetadata;
  ref: $npm$firebase$storage$Reference;
  state: $npm$firebase$storage$TaskState;
  task: $npm$firebase$storage$UploadTask;
  totalBytes: number;
}

// Exporting the types
declare module "firebase" {
  declare module.exports: {
    +apps: Array<$npm$firebase$App>,
    initializeApp(
      options: $npm$firebase$Config,
      name?: string
    ): $npm$firebase$App,
    SDK_VERSION: string,
    FirebaseError: $npm$firebase$Error,
    FirebaseConfig: $npm$firebase$Config,
    FirebaseUser: typeof $npm$firebase$auth$User,
    FirebaseUserInfo: typeof $npm$firebase$auth$UserInfo,
    app: {
      (name?: string): typeof $npm$firebase$App,
      App: typeof $npm$firebase$App
    },
    auth: {
      (app?: $npm$firebase$App): $npm$firebase$auth$Auth,
      FirebaseAdditionalUserInfo: $npm$firebase$auth$AdditionalUserInfo,
      FirebaseUserCredential: $npm$firebase$auth$UserCredential,
      ActionCodeInfo: $npm$firebase$auth$ActionCodeInfo,
      ApplicationVerifier: $npm$firebase$auth$ApplicationVerifier,
      Auth: typeof $npm$firebase$auth$Auth,
      AuthCredential: $npm$firebase$auth$AuthCredential,
      AuthProvider: $npm$firebase$auth$AuthProvider,
      ConfirmationResult: $npm$firebase$auth$ConfirmationResult,
      EmailAuthProvider: typeof $npm$firebase$auth$EmailAuthProvider,
      Error: $npm$firebase$auth$Error,
      FacebookAuthProvider: typeof $npm$firebase$auth$FacebookAuthProvider,
      GithubAuthProvider: typeof $npm$firebase$auth$GithubAuthProvider,
      GoogleAuthProvider: typeof $npm$firebase$auth$GoogleAuthProvider,
      PhoneAuthProvider: typeof $npm$firebase$auth$PhoneAuthProvider,
      TwitterAuthProvider: typeof $npm$firebase$auth$TwitterAuthProvider
    },
    database: {
      (app?: $npm$firebase$App): $npm$firebase$database$Database,
      enableLogging(
        logger?: boolean | ((msg: string) => void),
        persistent?: boolean
      ): void,
      DataSnapshot: typeof $npm$firebase$database$DataSnapshot,
      Database: typeof $npm$firebase$database$Database,
      OnDisconnect: typeof $npm$firebase$database$OnDisconnect,
      Query: typeof $npm$firebase$database$Query,
      Reference: typeof $npm$firebase$database$Reference,
      ServerValue: typeof $npm$firebase$database$ServerValue,
      ThenableReference: typeof $npm$firebase$database$ThenableReference
    },
    storage: {
      (app?: $npm$firebase$App): $npm$firebase$storage$Storage,
      Storage: typeof $npm$firebase$storage$Storage,
      FullMetadata: typeof $npm$firebase$storage$FullMetadata,
      Reference: typeof $npm$firebase$storage$Reference,
      SettableMetadata: typeof $npm$firebase$storage$SettableMetadata,
      UploadMetadata: typeof $npm$firebase$storage$UploadMetadata,
      UploadTask: typeof $npm$firebase$storage$UploadTask,
      UploadTaskSnapshot: typeof $npm$firebase$storage$UploadTaskSnapshot
    }
  };
}
declare module "firebase/app" {
  declare module.exports: {
    (name?: string): $npm$firebase$App,
    App: typeof $npm$firebase$App
  };
}
declare module "firebase/auth" {
  declare module.exports: {
    (app?: $npm$firebase$App): $npm$firebase$auth$Auth,
    FirebaseAdditionalUserInfo: $npm$firebase$auth$AdditionalUserInfo,
    FirebaseUserCredential: $npm$firebase$auth$UserCredential,
    ActionCodeInfo: $npm$firebase$auth$ActionCodeInfo,
    ApplicationVerifier: $npm$firebase$auth$ApplicationVerifier,
    Auth: typeof $npm$firebase$auth$Auth,
    AuthCredential: $npm$firebase$auth$AuthCredential,
    AuthProvider: $npm$firebase$auth$AuthProvider,
    ConfirmationResult: $npm$firebase$auth$ConfirmationResult,
    EmailAuthProvider: typeof $npm$firebase$auth$EmailAuthProvider,
    Error: $npm$firebase$auth$Error,
    FacebookAuthProvider: typeof $npm$firebase$auth$FacebookAuthProvider,
    GithubAuthProvider: typeof $npm$firebase$auth$GithubAuthProvider,
    GoogleAuthProvider: typeof $npm$firebase$auth$GoogleAuthProvider,
    PhoneAuthProvider: typeof $npm$firebase$auth$PhoneAuthProvider,
    TwitterAuthProvider: typeof $npm$firebase$auth$TwitterAuthProvider
  };
}
declare module "firebase/database" {
  declare module.exports: {
    (app?: $npm$firebase$App): $npm$firebase$database$Database,
    enableLogging(
      logger?: boolean | ((msg: string) => void),
      persistent?: boolean
    ): void,
    DataSnapshot: typeof $npm$firebase$database$DataSnapshot,
    Database: typeof $npm$firebase$database$Database,
    OnDisconnect: typeof $npm$firebase$database$OnDisconnect,
    Query: typeof $npm$firebase$database$Query,
    Reference: typeof $npm$firebase$database$Reference,
    ServerValue: typeof $npm$firebase$database$ServerValue,
    ThenableReference: typeof $npm$firebase$database$ThenableReference
  };
}
declare module "firebase/storage" {
  declare module.exports: {
    (app?: $npm$firebase$App): $npm$firebase$storage$Storage,
    Storage: typeof $npm$firebase$storage$Storage,
    FullMetadata: typeof $npm$firebase$storage$FullMetadata,
    Reference: typeof $npm$firebase$storage$Reference,
    SettableMetadata: typeof $npm$firebase$storage$SettableMetadata,
    UploadMetadata: typeof $npm$firebase$storage$UploadMetadata,
    UploadTask: typeof $npm$firebase$storage$UploadTask,
    UploadTaskSnapshot: typeof $npm$firebase$storage$UploadTaskSnapshot
  };
}

/* @flow */

/**** firebase ****/

declare interface FirebaseConfig {
  apiKey: string;
  authDomain?: string;
  databaseURL: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
}

declare interface AuthError {
  code: | 'auth/app-deleted'
        | 'auth/app-not-authorized'
        | 'auth/argument-error'
        | 'auth/invalid-api-key'
        | 'auth/invalid-user-token'
        | 'auth/network-request-failed'
        | 'auth/operation-not-allowed'
        | 'auth/requires-recent-login'
        | 'auth/too-many-requests'
        | 'auth/unauthorized-domain'
        | 'auth/user-disabled'
        | 'auth/user-token-expired'
        | 'auth/web-storage-unsupported'
        | 'auth/invalid-email'
        | 'auth/account-exists-with-different-credential'
        | 'auth/invalid-credential'
        | 'auth/user-not-found'
        | 'auth/wrong-password'
        | 'auth/invalid-verification-code'
        | 'auth/invalid-verification-id'
        | 'auth/expired-action-code'
        | 'auth/invalid-action-code'
        | 'auth/invalid-verification-code'
        | 'auth/missing-verification-code'
        | 'auth/captcha-check-failed'
        | 'auth/invalid-phone-number'
        | 'auth/missing-phone-number'
        | 'auth/quota-exceeded'
        | 'auth/credential-already-in-use'
        | 'auth/email-already-in-use'
        | 'auth/provider-already-linked'
        | 'auth/auth-domain-config-required'
        | 'auth/cancelled-popup-request'
        | 'auth/popup-blocked'
        | 'auth/operation-not-supported-in-this-environment'
        | 'auth/popup-closed-by-user'
        | 'auth/unauthorized-domain'
        | 'auth/no-such-provider';
  message: string;
}

declare interface FirebaseError {
  code: $PropertyType<AuthError, 'code'> | 'app/no-app';
  message: string;
  name: string;
  stack: ?string;
}


/***** app *****/
declare class App {
  name: string;
  +options: FirebaseConfig;
  auth(): Auth;
  database(): Database;
  delete(): Promise<void>;
}


/****** auth *******/
declare interface ActionCodeInfo {
  data: { email: string };
}

declare interface ApplicationVerifier {
  type: string;
  verify(): Promise<string>;
}

declare class Auth {
  app: App;
  currentUser: User;
  applyActionCode(code: string): Promise<void>;
  checkActionCode(code: string): Promise<ActionCodeInfo>;
  confirmPasswordReset(code: string, newPassword: string): Promise<void>;
  createCustomToken(uid: string, developerClaims?: {}): string;
  createUserWithEmailAndPassword(email: string, password: string): Promise<User>;
  fetchProvidersForEmail(email: string): Promise<Array<string>>;
  onAuthStateChanged(
    nextOrObserver: (?User) => void,
    error?: (error: AuthError) => void,
    completed?: () => void,
  ): () => void;
  onIdTokenChanged(
    nextOrObserver: Object | (user?: User) => void,
    error?: (error: AuthError) => void,
    completed?: () => void,
  ): () => void;
  sendPasswordResetEmail(email: string): Promise<void>;
  signInAndRetrieveDataWithCredential(credential: AuthCredential): Promise<UserCredential>;
  signInAnonymously(): Promise<User>;
  signInWithCredential(credential: AuthCredential): Promise<User>;
  signInWithCustomToken(token: string): Promise<User>;
  signInWithEmailAndPassword(email: string, password: string): Promise<User>;
  signInWithPhoneNumber(phoneNumber: string, applicationVerifier: ApplicationVerifier): Promise<ConfirmationResult>;
  signOut(): Promise<void>;
  verifyIdToken(idToken: string): Promise<Object>;
  verifyPasswordResetCode(code: string): Promise<string>;
}

declare interface AuthCredential {
  providerId: string;
}

declare class AuthProvider {
  providerId: string;
}

declare interface ConfirmationResult {
  verificationId: string;
  confirm(verificationCode: string): Promise<UserCredential>
}

declare interface AdditionalUserInfo {
  providerId: string;
  profile?: Object;
  username?: string;
}

declare interface UserCredential {
  user: User;
  credential?: AuthCredential;
  operationType?: string;
  additionalUserInfo?: AdditionalUserInfo;
}

declare class UserInfo {
  displayName: ?string,
  email: ?string,
  photoURL: ?string,
  providerId: string,
  uid: string,
}

declare class User extends UserInfo {
  displayName: ?string;
  email: ?string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: ?string;
  photoUrl: ?string;
  providerData: Array<UserInfo>;
  providerId: string;
  refreshToken: string;
  uid: string;
  delete(): Promise<void>;
  getIdToken(forceRefresh?: boolean): Promise<string>;
  getToken(forceRefresh?: boolean): Promise<string>;
  linkAndRetrieveDataWithCredential(credential: AuthCredential): Promise<UserCredential>;
  linkWithCredential(credential: AuthCredential): Promise<User>;
  linkWithPhoneNumber(phoneNumber: string, applicationVerifier: ApplicationVerifier): Promise<ConfirmationResult>;
  linkWithPopup(provider: OAuthProvider): Promise<UserCredential>;
  reauthenticateAndRetrieveDataWithCredential(credential: AuthCredential): Promise<void>;
  reauthenticateWithCredential(credential: AuthCredential): Promise<void>;
  reauthenticateWithPhoneNumber(phoneNumber: string, applicationVerifier: ApplicationVerifier): Promise<ConfirmationResult>;
  reload(): Promise<void>;
  sendEmailVerification(): Promise<void>;
  toJSON(): Object;
  unlink(providerId: string): Promise<User>;
  updateEmail(newEmail: string): Promise<void>;
  updatePassword(newPassword: string): Promise<void>;
  updatePhoneNumber(phoneCredential: AuthCredential): Promise<void>;
  updateProfile(profile: { displayName: ?string, photoURL: ?string }): Promise<void>;
}

declare class EmailAuthProvider extends AuthProvider {
  PROVIDER_ID: string;
  providerId: string;
  credential(email: string, password: string): AuthCredential;
}

declare class FacebookAuthProvider extends AuthProvider  {
  PROVIDER_ID: string;
  credential(token: string): AuthCredential;
  addScope(scope: string): FacebookAuthProvider;
  setCustomParameters(customOAuthParameters: Object): FacebookAuthProvider;
}

declare class GithubAuthProvider extends AuthProvider {
  PROVIDER_ID: string;
  credential(token: string): AuthCredential;
  addScope(scope: string): GithubAuthProvider;
  setCustomParameters(customOAuthParameters: Object): GithubAuthProvider;
}

declare class GoogleAuthProvider extends AuthProvider {
  PROVIDER_ID: string;
  credential(idToken?: string, accessToken?: string): AuthCredential;
  addScope(scope: string): GoogleAuthProvider;
  setCustomParameters(customOAuthParameters: Object): GoogleAuthProvider;
}

declare class PhoneAuthProvider extends AuthProvider {
  PROVIDER_ID: string;
  constructor(auth?: Auth): PhoneAuthProvider;
  credential(verificationId: string, verificationCode: string): AuthCredential;
  verifyPhoneNumber(phoneNumber: string, applicationVerifier: ApplicationVerifier): Promise<string>;
}

declare class TwitterAuthProvider extends AuthProvider {
  PROVIDER_ID: string;
  credential(token: string, secret: string): AuthCredential;
  setCustomParameters(customOAuthParameters: Object): this;
}

declare type OAuthProvider = | FacebookAuthProvider
                             | GithubAuthProvider
                             | GoogleAuthProvider
                             | TwitterAuthProvider;

/****** database ******/
declare type FirebaseValue = {} | Array<FirebaseValue> | string | number | boolean | null;
declare type OnCompleteCallback = (error: ?Object) => void;
declare type QueryEventType = | 'value'
                              | 'child_added'
                              | 'child_changed'
                              | 'child_removed'
                              | 'child_moved';
declare type Priority = string | number | null;

declare class Database {
  app: App;
  goOffline(): void;
  goOnline(): void;
  ref(path?: string): Reference;
  refFromURL(url: string): Reference;
}

declare class DataSnapshot {
  key: ?string;
  ref: Reference;
  child(path?: string): DataSnapshot;
  exists(): boolean;
  exportVal(): FirebaseValue;
  forEach(action: (DataSnapshot) => boolean): boolean;
  getPriority(): Priority;
  hasChild(path: string): boolean;
  hasChildren(): boolean;
  numChildren(): number;
  toJSON(): Object;
  val(): FirebaseValue;
}

declare class OnDisconnect {
  cancel(onComplete: OnCompleteCallback): Promise<void>;
  remove(onComplete: OnCompleteCallback): Promise<void>;
  set(value: FirebaseValue, onComplete?: OnCompleteCallback): Promise<void>;
  setWithPriority(value: FirebaseValue, priority: number | string | null, onComplete?: OnCompleteCallback): Promise<void>;
  update(values: { [path: string]: FirebaseValue }, onComplete?: OnCompleteCallback): Promise<void>;
}

declare class Query {
  ref: Reference;
  endAt(value: number | string | boolean | null, key?: string): Query;
  equalTo(value: number | string | boolean | null, key?: string): Query;
  isEqual(other: Query): boolean;
  limitToFirst(limit: number): Query;
  limitToLast(limit: number): Query;
  off(
    eventType: QueryEventType,
    callback: ?(DataSnapshot, ?string) => void,
    context: Object,
  ): void;
  on(
    eventType: QueryEventType,
    callback: (DataSnapshot, ?string) => void,
    cancelCallbackOrContext?: (error: Object) => void | Object,
    context?: (DataSnapshot, ?string) => void,
  ): (DataSnapshot, ?string) => void;
  once(
    eventType: QueryEventType,
    successCallback?: (DataSnapshot, ?string) => void,
    failureCallbackOrContext?: (error: Object) => void | Object,
    context?: Object,
  ): Promise<DataSnapshot>;
  orderByChild(path: string): Query;
  orderByKey(): Query;
  orderByPriority(): Query;
  orderByValue(): Query;
  startAt(value: number | string | boolean | null, key?: string): Query;
  toJSON(): Object;
  toString(): string;
}

declare class Reference extends Query {
  key: ?string;
  parent?: Reference;
  root: Reference;
  child(path: string): Reference;
  onDisconnect(): OnDisconnect;
  push(value?: FirebaseValue, onComplete?: OnCompleteCallback): ThenableReference;
  remove(onComplete: OnCompleteCallback): Promise<void>;
  set(value: FirebaseValue, onComplete?: OnCompleteCallback): Promise<void>;
  setPriority(priority: Priority, onComplete?: OnCompleteCallback): Promise<void>;
  setWithPriority(newVal: FirebaseValue, newPriority: Priority, onComplete?: OnCompleteCallback): Promise<void>;
  transaction(
    transactionUpdate: (data: FirebaseValue) => FirebaseValue,
    onComplete?: (error: null | Object, committed: boolean, snapshot: DataSnapshot) => void,
    applyLocally?: boolean,
  ): Promise<{ committed: boolean, snapshot: DataSnapshot | null }>;
  update(values: { [path: string]: FirebaseValue }, onComplete?: OnCompleteCallback): Promise<void>;
}

declare class ServerValue {
  TIMESTAMP: {};
}

declare class ThenableReference extends Reference {}


declare module 'firebase' {
  declare module.exports: {
    +apps: Array<App>,
    initializeApp(options: FirebaseConfig, name?: string): App,
    SDK_VERSION: string,
    FirebaseError: FirebaseError,
    FirebaseConfig: FirebaseConfig,
    User: typeof User,
    UserInfo: typeof UserInfo,
    app: {
      (name?: string): typeof App,
      App: typeof App,
    },
    auth: {
      (app?: App): Auth,
      AdditionalUserInfo: AdditionalUserInfo,
      UserCredential: UserCredential,
      ActionCodeInfo: ActionCodeInfo,
      ApplicationVerifier: ApplicationVerifier,
      Auth: typeof Auth,
      AuthCredential: AuthCredential,
      AuthProvider: AuthProvider,
      ConfirmationResult: ConfirmationResult,
      EmailAuthProvider: typeof EmailAuthProvider,
      Error: AuthError,
      FacebookAuthProvider: typeof FacebookAuthProvider,
      GithubAuthProvider: typeof GithubAuthProvider,
      GoogleAuthProvider: typeof GoogleAuthProvider,
      PhoneAuthProvider: typeof PhoneAuthProvider,
      TwitterAuthProvider: typeof TwitterAuthProvider,
    },
    database: {
      (app?: App): Database,
      enableLogging(logger?: boolean | (msg: string) => void, persistent?: boolean): void,
      DataSnapshot: typeof DataSnapshot,
      Database: typeof Database,
      OnDisconnect: typeof OnDisconnect,
      Query: typeof Query,
      Reference: typeof Reference,
      ServerValue: typeof ServerValue,
      ThenableReference: typeof ThenableReference,
    },
  }
}

declare module 'firebase/app' {
  declare module.exports: {
    (name?: string): App,
    App: typeof App,
  }
}

declare module 'firebase/auth' {
  declare module.exports: {
    (app?: App): Auth,
    AdditionalUserInfo: AdditionalUserInfo,
    UserCredential: UserCredential,
    ActionCodeInfo: ActionCodeInfo,
    ApplicationVerifier: ApplicationVerifier,
    Auth: typeof Auth,
    AuthCredential: AuthCredential,
    AuthProvider: AuthProvider,
    ConfirmationResult: ConfirmationResult,
    EmailAuthProvider: typeof EmailAuthProvider,
    Error: AuthError,
    FacebookAuthProvider: typeof FacebookAuthProvider,
    GithubAuthProvider: typeof GithubAuthProvider,
    GoogleAuthProvider: typeof GoogleAuthProvider,
    PhoneAuthProvider: typeof PhoneAuthProvider,
    TwitterAuthProvider: typeof TwitterAuthProvider,
  }
}

declare module 'firebase/database' {
  declare module.exports: {
    (app?: App): Database,
    enableLogging(logger?: boolean | (msg: string) => void, persistent?: boolean): void,
    DataSnapshot: typeof DataSnapshot,
    Database: typeof Database,
    OnDisconnect: typeof OnDisconnect,
    Query: typeof Query,
    Reference: typeof Reference,
    ServerValue: typeof ServerValue,
    ThenableReference: typeof ThenableReference,
  }
}

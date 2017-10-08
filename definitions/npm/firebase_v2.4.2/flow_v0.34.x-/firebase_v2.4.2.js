declare module 'firebase' {
  declare type FbSimple = string|number|boolean;
  declare type FbObject = {[string|number]: FbValue };
  declare type FbValue = FbSimple | Array<FbValue> | FbObject;
  declare type Priority = string|number|null;

  declare class App {
    name: string,
    options: {},

    auth(): Auth,
    database(): Database,
    delete(): Promise<void>,
  }

  declare class Auth {
    app: App,
    currentUser: ?User,

    applyActionCode(code: string): Promise<void>,
    checkActionCode(code: string): Promise<ActionCodeInfo>,
    confirmPasswordReset(code: string, newPassword: string): Promise<void>,
    createCustomToken(uid: string, developerClaims: {}): string,
    createUserWithEmail(email: string, password: string): Promise<User>,
    fetchProvidersForEmail(email: string): Promise<Array<string>>,
    getRedirectResult(): Promise<UserCredential>,
    onAuthStateChanged(nextOrObserver: (?User) => void, error: ?(AuthError) => void, completed: ?() => void): () => void,
    sendPasswordResetEmail(email: string): Promise<void>,
    signInAnonymously(): Promise<User>,
    signInWithCredential(credential: AuthCredential): Promise<User>,
    signInWithCustomToken(token: string): Promise<User>,
    signInWithEmailAndPassword(email: string, password: string): Promise<User>,
    signInWithPopup(provider: AuthProvider): Promise<UserCredential>,
    signInWithRedirect(provider: AuthProvider): Promise<void>,
    signOut(): Promise<void>,
    verifyIdToken(idToken: string): Promise<{}>,
    verifyPasswordReset(code: string): Promise<string>,
  }

  declare type ActionCodeInfo = {
    data: {
      email: string,
    },
  }

  declare type AuthCredential = {
    provider: string,
    providerId: string,
  }

  declare type AuthError = {
    code: string,
    message: string,
  }

  declare class AuthProvider {
    providerId: string,
    static PROVIDER_ID: string,
  }

  declare class EmailAuthProvider extends AuthProvider {
    constructor(): EmailAuthProvider,
    static credential(email: string, password: string): AuthCredential,
  }

  declare class OAuthProvider extends AuthProvider {
    static credential(token: string): AuthCredential,
    setCustomParameters(customOAuthParameters: {}): void,
  }

  declare class FacebookAuthProvider extends OAuthProvider {
    constructor(): FacebookAuthProvider,
    addScope(scope: string): void,
  }

  declare class GithubAuthProvider extends OAuthProvider {
    constructor(): GithubAuthProvider,
    addScope(scope: string): void,
  }

  declare class GoogleAuthProvider extends OAuthProvider {
    constructor(): GoogleAuthProvider,
    addScope(scope: string): void,
  }

  declare class TwitterAuthProvider extends OAuthProvider {
    constructor(): TwitterAuthProvider,
  }

  declare class UserInfo {
    displayName: ?string,
    email: ?string,
    photoURL: ?string,
    providerId: string,
    uid: string,
  }

  declare class User extends UserInfo {
    emailVerified: boolean,
    isAnonymous: boolean,
    providerData: Array<UserInfo>,
    refreshToken: string,
    delete(): Promise<void>,
    getToken(forceRefresh: ?boolean): Promise<string>,
    link(credential: AuthCredential): Promise<User>,
    linkWithCredential(credential: AuthCredential): Promise<User>,
    reauthenticate(credential: AuthCredential): Promise<void>,
    reauthenticateWithCredential(credential: AuthCredential): Promise<void>,
    reload(): Promise<void>,
    sendEmailVerification(): Promise<void>,
    toJSON(): {},
    unlink(providerId: string): Promise<User>,
    updateEmail(newEmail: string): Promise<void>,
    updatePassword(newPassword: string): Promise<void>,
    updateProfile(profile: {displayName: ?string, photoURL: ?string,}): Promise<void>,
  }

  declare type UserCredential = {
    user: ?User,
    credential: ?AuthCredential,
    operationType: ?string,
  };

  declare class Database {
    app: App,
    goOffline(): void,
    goOnline(): void,
    ref(path: ?string): Reference,
    refFromURL(url: string): Reference,
  }

  declare class DataSnapshot {
    key: ?string,
    ref: Reference,
    child(path: string): DataSnapshot,
    exists(): boolean,
    exportVal(): FbValue,
    forEach(action: (DataSnapshot) => void): boolean,
    getPriority(): string|number|null,
    hasChild(path: string): boolean,
    hasChildren(): boolean,
    numChildren(): number,
    toJSON(): {},
    val(): FbValue,
  }

  declare class OnDisconnect {
    cancel(onComplete: ?OnCompleteCallback): Promise<void>,
    remove(onComplete: ?OnCompleteCallback): Promise<void>,
    set(value: FbValue|null, onComplete: ?OnCompleteCallback): Promise<void>,
    setWithPriority(value: FbValue, priority: Priority, onComplete: ?OnCompleteCallback): Promise<void>,
    update(values: FbObject, onComplete: ?OnCompleteCallback): Promise<void>,
  }

  declare class Query {
    ref: Reference,
    endAt(value: ?FbSimple, key: ?string): Query,
    equalTo(value: ?FbSimple, key: ?string): Query,
    isEqual(other: Query): boolean,
    limitToFirst(limit: number): Query,
    limitToLast(limit: number): Query,
    off(eventType: string, callback: ?(DataSnapshot, ?string) => void, context: ?{}): void,
    on(eventType: string, callback: ?(DataSnapshot, ?string) => void, cancelCallbackOrConetxt?: {}|(Error) => void, context: ?{}): (DataSnapshot, ?string) => void,
    once(eventType: string, callback: ?(DataSnapshot, ?string) => void, cancelCallbackOrContext?: {}|(Error) => void, context: ?{}): Promise<DataSnapshot>,
    orderByChild(path: string): Query,
    orderByKey(): Query,
    orderByPriority(): Query,
    orderByValue(): Query,
    startAt(value: ?FbSimple, key: ?string): Query,
    toJSON(): {},
    toString(): string,
  }

  declare type OnCompleteCallback = (?Error) => void;

  declare class Reference extends Query {
    key: ?string,
    parent: ?Reference,
    root: Reference,

    child(path: string): Reference,
    onDisconnect(): OnDisconnect,
    push(value: ?FbValue, onComplete: ?OnCompleteCallback): ThenableReference<void>,
    remove(onComplete: ?OnCompleteCallback): ThenableReference<void>,
    set(value: FbValue|null, onComplete: ?OnCompleteCallback): Promise<void>,
    setPriority(priority: Priority, onComplete: ?OnCompleteCallback): Promise<void>,
    setWithPriority(newVal: FbValue, newPriority: Priority, onComplete: ?OnCompleteCallback): Promise<void>,
    transaction(transactionUpdate: (FbValue) => void, onComplete: ?(?Error, boolean, ?DataSnapshot) => void, applyLocally: ?boolean): Promise<{committed: boolean, snapshot: ?DataSnapshot,}>,
    update(values: FbObject, onComplete: ?OnCompleteCallback): Promise<void>,
  }

  declare class ServerValue {
    TIMESTAMP: {},
  }

  declare class ThenableReference<T> extends Reference {
    catch<U>(onReject: ?(Error) => Promise<U>|U): ThenableReference<U>,
    then<U>(onResolve: ?(T) => Promise<U>|U, onReject: ?(Error) => Promise<U>|U): ThenableReference<U>,
  }

  declare class FirebaseError extends Error {
    static code: string,
  }

  declare module.exports: {
    app: {
      (name?: string): App,
      App: typeof App,
    },
    apps: Array<App>,

    auth: {
      (app: ?App): Auth,
      ActionCodeInfo: ActionCodeInfo,
      Auth: typeof Auth,
      AuthCredential: AuthCredential,
      AuthError: AuthError,
      AuthProvider: typeof AuthProvider,
      EmailAuthProvider: typeof EmailAuthProvider,
      FacebookAuthProvider: typeof FacebookAuthProvider,
      GithubAuthProvider: typeof GithubAuthProvider,
      GoogleAuthProvider: typeof GoogleAuthProvider,
      TwitterAuthProvider: typeof TwitterAuthProvider,
      UserCredential: UserCredential,
    },

    database: {
      (app: ?App): Database,
      Database: typeof Database,
      DataSnapshot: typeof DataSnapshot,
      OnDisconnect: typeof OnDisconnect,
      Query: typeof Query,
      Reference: typeof Reference,
      ServerValue: typeof ServerValue,
      ThenableReference: typeof ThenableReference,
    },

    FirebaseError: typeof FirebaseError,
    initializeApp(options: {}, name: ?string): App,

    SDK_VERSION: string,
    User: typeof User,
    UserInfo: typeof UserInfo,
  }
}

declare module 'firebase/app' {
  declare module.exports: $Exports<'firebase'>;
}
declare module 'firebase/app.js' {
  declare module.exports: $Exports<'firebase/app'>;
}

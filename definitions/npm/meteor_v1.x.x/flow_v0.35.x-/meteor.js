/**
 * Flowtype definitions for meteor
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * These are the common (for client and server) modules and interfaces that can't be automatically generated from the Meteor data.js file
 */
declare interface EJSONable {
    [key: string]: number
        |
        string |
        boolean |
        Object |
        number[] |
        string[] |
        Object[] |
        Date |
        Uint8Array |
        EJSON$CustomType
}
declare interface JSONable {
    [key: string]: number
        |
        string |
        boolean |
        Object |
        number[] |
        string[] |
        Object[]
}
declare type EJSON = {} & EJSONable

declare var npm$namespace$Match: {
    test: typeof Match$test,
}
declare function Match$test(value: any, pattern: any): boolean
declare var npm$namespace$Meteor: {
    absoluteUrl: typeof Meteor$absoluteUrl,
    apply: typeof Meteor$apply,
    call: typeof Meteor$call,
    clearInterval: typeof Meteor$clearInterval,
    clearTimeout: typeof Meteor$clearTimeout,
    disconnect: typeof Meteor$disconnect,
    loggingIn: typeof Meteor$loggingIn,
    loginWith: typeof Meteor$loginWith,
    loginWithPassword: typeof Meteor$loginWithPassword,
    logout: typeof Meteor$logout,
    logoutOtherClients: typeof Meteor$logoutOtherClients,
    methods: typeof Meteor$methods,
    onConnection: typeof Meteor$onConnection,
    publish: typeof Meteor$publish,
    reconnect: typeof Meteor$reconnect,
    setInterval: typeof Meteor$setInterval,
    setTimeout: typeof Meteor$setTimeout,
    startup: typeof Meteor$startup,
    status: typeof Meteor$status,
    subscribe: typeof Meteor$subscribe,
    user: typeof Meteor$user,
    userId: typeof Meteor$userId,
    wrapAsync: typeof Meteor$wrapAsync,
}
declare var Error: Meteor$ErrorStatic;

declare interface Meteor$ErrorStatic {
    new(error: string | number, reason?: string, details?: string): Meteor$Error
}

declare interface Meteor$Error {
    error: string | number,
        reason?: string,
        details?: string
}

declare function Meteor$absoluteUrl(
    path?: string,
    options?: {
        secure?: boolean,
        replaceLocalhost?: boolean,
        rootUrl?: string
    }): string

declare function Meteor$apply(
    name: string,
    args: EJSONable[],
    options?: {
        wait?: boolean,
        onResultReceived?: Function
    },
    asyncCallback?: Function): any

declare function Meteor$call(
    method: string,
    url: string,
    options?: HTTP$HTTPRequest,
    asyncCallback?: Function): HTTP$HTTPResponse

declare function Meteor$clearInterval(id: number): void

declare function Meteor$clearTimeout(id: number): void

declare function Meteor$disconnect(): void

declare var isClient: boolean;

declare var isCordova: boolean;

declare var isDevelopment: boolean;

declare var isProduction: boolean;

declare var isServer: boolean;

declare var isTest: boolean;

declare function Meteor$loggingIn(): boolean

declare function Meteor$loginWith<ExternalService>(
    options?: {
        requestPermissions?: string[],
        requestOfflineToken?: boolean,
        loginUrlParameters?: Object,
        loginHint?: string,
        loginStyle?: string,
        redirectUrl?: string
    },
    callback?: Function): void

declare function Meteor$loginWithPassword(user: Object | string, password: string, callback?: Function): void

declare function Meteor$logout(callback?: Function): void

declare function Meteor$logoutOtherClients(callback?: Function): void

declare function Meteor$methods(methods: Object): void

declare function Meteor$onConnection(callback: Function): void

declare function Meteor$publish(name: string, func: Function): void

declare function Meteor$reconnect(): void

declare var release: string;

declare function Meteor$setInterval(func: Function, delay: number): number

declare function Meteor$setTimeout(func: Function, delay: number): number

declare var settings: {
    public: {
        [id: string]: any
    },
    private: {
        [id: string]: any
    },
    [id: string]: any
};

declare function Meteor$startup(func: Function): void

declare function Meteor$status(): Meteor$StatusEnum

declare function Meteor$subscribe(name: string, ...args: any[]): Meteor$SubscriptionHandle

declare function Meteor$user(): Meteor$User

declare function Meteor$userId(): string

declare var users: Mongo$Collection<Meteor$User>;

declare function Meteor$wrapAsync(func: Function, context?: Object): any
declare var npm$namespace$DDP: {
    connect: typeof DDP$connect,
}
declare function DDP$connect(url: string): DDP$DDPStaticdeclare var Collection: Mongo$CollectionStatic;

declare interface Mongo$CollectionStatic {
    new<T>(
        name: string,
        options?: {
            connection?: Object,
            idGeneration?: string,
            transform?: Function
        }): Mongo$Collection<T >
}

declare interface Mongo$Collection<T>{
    allow(
        options: {
            insert?: (userId: string, doc: T) => boolean,
            update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean,
            remove?: (userId: string, doc: T) => boolean,
            fetch?: string[],
            transform?: Function
        }): boolean,
    deny(
        options: {
            insert?: (userId: string, doc: T) => boolean,
            update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean,
            remove?: (userId: string, doc: T) => boolean,
            fetch?: string[],
            transform?: Function
        }): boolean,
    find(
        selector?: Mongo$Selector | Mongo$ObjectID | string,
        options?: {
            sort?: Mongo$SortSpecifier,
            skip?: number,
            limit?: number,
            fields?: Mongo$FieldSpecifier,
            reactive?: boolean,
            transform?: Function,
            disableOplog?: boolean,
            pollingIntervalMs?: number,
            pollingThrottleMs?: number
        }): Mongo$Cursor<T>,
    findOne(
        selector?: Mongo$Selector | Mongo$ObjectID | string,
        options?: {
            sort?: Mongo$SortSpecifier,
            skip?: number,
            fields?: Mongo$FieldSpecifier,
            reactive?: boolean,
            transform?: Function
        }): T,
    insert(doc: T, callback?: Function): string,
    rawCollection(): any,
    rawDatabase(): any,
    remove(
        selector: Mongo$Selector | Mongo$ObjectID | string,
        callback?: Function): number,
    update(
        selector: Mongo$Selector | Mongo$ObjectID | string,
        modifier: Mongo$Modifier,
        options?: {
            multi?: boolean,
            upsert?: boolean
        },
        callback?: Function): number,
    upsert(
        selector: Mongo$Selector | Mongo$ObjectID | string,
        modifier: Mongo$Modifier,
        options?: {
            multi?: boolean
        },
        callback?: Function): {
        numberAffected?: number,
        insertedId?: string
    },
    _ensureIndex(indexName: string, options?: {
        [key: string]: any
    }): void
}

declare var Cursor: Mongo$CursorStatic;

declare interface Mongo$CursorStatic {
    new<T>(): Mongo$Cursor<T >
}

declare interface Mongo$Cursor<T>{
    count(): number,
    fetch(): Array<T>,
    forEach(
        callback:<T>(doc: T, index: number, cursor: Mongo$Cursor<T>) => void,
        thisArg?: any): void,
    map<U>(
        callback: (doc: T, index: number, cursor: Mongo$Cursor<T>) => U,
        thisArg?: any): Array<U>,
    observe(callbacks: Object): Meteor$LiveQueryHandle,
    observeChanges(callbacks: Object): Meteor$LiveQueryHandle
}

declare var ObjectID: Mongo$ObjectIDStatic;

declare interface Mongo$ObjectIDStatic {
    new(hexString?: string): Mongo$ObjectID
}

declare interface Mongo$ObjectID {
    valueOf(): string,
        getTimestamp(): Date
}
declare var npm$namespace$HTTP: {
    call: typeof HTTP$call,
    del: typeof HTTP$del,
    get: typeof HTTP$get,
    patch: typeof HTTP$patch,
    post: typeof HTTP$post,
    put: typeof HTTP$put,
}
declare function HTTP$call(
    method: string,
    url: string,
    options?: HTTP$HTTPRequest,
    asyncCallback?: Function): HTTP$HTTPResponse

declare function HTTP$del(
    url: string,
    callOptions?: HTTP$HTTPRequest,
    asyncCallback?: Function): HTTP$HTTPResponse

declare function HTTP$get(
    url: string,
    callOptions?: HTTP$HTTPRequest,
    asyncCallback?: Function): HTTP$HTTPResponse

declare function HTTP$patch(url: string, callOptions?: Object, asyncCallback?: Function): HTTP$HTTPResponse

declare function HTTP$post(
    url: string,
    callOptions?: HTTP$HTTPRequest,
    asyncCallback?: Function): HTTP$HTTPResponse

declare function HTTP$put(
    url: string,
    callOptions?: HTTP$HTTPRequest,
    asyncCallback?: Function): HTTP$HTTPResponse
declare var npm$namespace$Random: {
    id: typeof Random$id,
    secret: typeof Random$secret,
    fraction: typeof Random$fraction,
    hexString: typeof Random$hexString,
    choice: typeof Random$choice,
}
declare function Random$id(numberOfChars?: number): string

declare function Random$secret(numberOfChars?: number): string

declare function Random$fraction(): number

declare function Random$hexString(numberOfDigits: number): string

declare function Random$choice(array: any[]): string
declare var npm$namespace$Accounts: {
    addEmail: typeof Accounts$addEmail,
    changePassword: typeof Accounts$changePassword,
    createUser: typeof Accounts$createUser,
    findUserByEmail: typeof Accounts$findUserByEmail,
    findUserByUsername: typeof Accounts$findUserByUsername,
    forgotPassword: typeof Accounts$forgotPassword,
    onEmailVerificationLink: typeof Accounts$onEmailVerificationLink,
    onEnrollmentLink: typeof Accounts$onEnrollmentLink,
    onResetPasswordLink: typeof Accounts$onResetPasswordLink,
    removeEmail: typeof Accounts$removeEmail,
    resetPassword: typeof Accounts$resetPassword,
    sendEnrollmentEmail: typeof Accounts$sendEnrollmentEmail,
    sendResetPasswordEmail: typeof Accounts$sendResetPasswordEmail,
    sendVerificationEmail: typeof Accounts$sendVerificationEmail,
    setPassword: typeof Accounts$setPassword,
    setUsername: typeof Accounts$setUsername,
    verifyEmail: typeof Accounts$verifyEmail,
    config: typeof Accounts$config,
    onLogin: typeof Accounts$onLogin,
    onLoginFailure: typeof Accounts$onLoginFailure,
    user: typeof Accounts$user,
    userId: typeof Accounts$userId,
    loggingIn: typeof Accounts$loggingIn,
    logout: typeof Accounts$logout,
    logoutOtherClients: typeof Accounts$logoutOtherClients,
    onCreateUser: typeof Accounts$onCreateUser,
    validateLoginAttempt: typeof Accounts$validateLoginAttempt,
    validateNewUser: typeof Accounts$validateNewUser,
}
declare function Accounts$addEmail(userId: string, newEmail: string, verified?: boolean): void

declare function Accounts$changePassword(oldPassword: string, newPassword: string, callback?: Function): void

declare function Accounts$createUser(
    options: {
        username?: string,
        email?: string,
        password?: string,
        profile?: Object
    },
    callback?: Function): string

declare var emailTemplates: Meteor$EmailTemplates;

declare function Accounts$findUserByEmail(email: string): Object

declare function Accounts$findUserByUsername(username: string): Object

declare function Accounts$forgotPassword(options: {
    email?: string
}, callback?: Function): void

declare function Accounts$onEmailVerificationLink(callback: Function): void

declare function Accounts$onEnrollmentLink(callback: Function): void

declare function Accounts$onResetPasswordLink(callback: Function): void

declare function Accounts$removeEmail(userId: string, email: string): void

declare function Accounts$resetPassword(token: string, newPassword: string, callback?: Function): void

declare function Accounts$sendEnrollmentEmail(userId: string, email?: string): void

declare function Accounts$sendResetPasswordEmail(userId: string, email?: string): void

declare function Accounts$sendVerificationEmail(userId: string, email?: string): void

declare function Accounts$setPassword(userId: string, newPassword: string, options?: {
    logout?: Object
}): void

declare function Accounts$setUsername(userId: string, newUsername: string): void

declare var ui: {
    config(
        options: {
            requestPermissions?: Object,
            requestOfflineToken?: Object,
            forceApprovalPrompt?: Object,
            passwordSignupFields?: string
        }): void
};

declare function Accounts$verifyEmail(token: string, callback?: Function): void

declare function Accounts$config(
    options: {
        sendVerificationEmail?: boolean,
        forbidClientAccountCreation?: boolean,
        restrictCreationByEmailDomain?: string | Function,
        loginExpirationInDays?: number,
        oauthSecretKey?: string
    }): void

declare function Accounts$onLogin(func: Function): {
    stop: () => void
}

declare function Accounts$onLoginFailure(func: Function): {
    stop: () => void
}

declare function Accounts$user(): Meteor$User

declare function Accounts$userId(): string

declare function Accounts$loggingIn(): boolean

declare function Accounts$logout(callback?: Function): void

declare function Accounts$logoutOtherClients(callback?: Function): void

declare function Accounts$onCreateUser(func: Function): void

declare function Accounts$validateLoginAttempt(
    cb: (params: Accounts$IValidateLoginAttemptCbOpts) => boolean): {
    stop: () => void
}

declare function Accounts$validateNewUser(func: Function): boolean
declare var npm$namespace$Blaze: {
    Each: typeof Blaze$Each,
    If: typeof Blaze$If,
    Let: typeof Blaze$Let,
    Unless: typeof Blaze$Unless,
    With: typeof Blaze$With,
    getData: typeof Blaze$getData,
    getView: typeof Blaze$getView,
    isTemplate: typeof Blaze$isTemplate,
    remove: typeof Blaze$remove,
    render: typeof Blaze$render,
    renderWithData: typeof Blaze$renderWithData,
    toHTML: typeof Blaze$toHTML,
    toHTMLWithData: typeof Blaze$toHTMLWithData,
}
declare function Blaze$Each(argFunc: Function, contentFunc: Function, elseFunc?: Function): Blaze$View

declare function Blaze$If(
    conditionFunc: Function,
    contentFunc: Function,
    elseFunc?: Function): Blaze$View

declare function Blaze$Let(bindings: Function, contentFunc: Function): Blaze$View

declare var Template: Blaze$TemplateStatic;

declare interface Blaze$TemplateStatic {
    new(viewName?: string, renderFunction?: Function): Blaze$Template, [templateName: string]: any | Blaze$Template,
        head: Blaze$Template,
        find(selector: string): Blaze$Template,
        findAll(selector: string): Blaze$Template[],
        $: any
}

declare interface Blaze$Template {
    viewName: string,
        renderFunction: Function,
        constructView(): Blaze$View
}

declare var TemplateInstance: Blaze$TemplateInstanceStatic;

declare interface Blaze$TemplateInstanceStatic {
    new(view: Blaze$View): Blaze$TemplateInstance
}

declare interface Blaze$TemplateInstance {
    $(selector: string): any,
        autorun(runFunc: Function): Object,
        data: Object,
        find(selector?: string): Blaze$TemplateInstance,
        findAll(selector: string): Blaze$TemplateInstance[],
        firstNode: Object,
        lastNode: Object,
        subscribe(name: string, ...args: any[]): Meteor$SubscriptionHandle,
        subscriptionsReady(): boolean,
        view: Object
}

declare function Blaze$Unless(
    conditionFunc: Function,
    contentFunc: Function,
    elseFunc?: Function): Blaze$View

declare var View: Blaze$ViewStatic;

declare interface Blaze$ViewStatic {
    new(name?: string, renderFunction?: Function): Blaze$View
}

declare interface Blaze$View {
    name: string,
        parentView: Blaze$View,
        isCreated: boolean,
        isRendered: boolean,
        isDestroyed: boolean,
        renderCount: number,
        autorun(runFunc: Function): void,
        onViewCreated(func: Function): void,
        onViewReady(func: Function): void,
        onViewDestroyed(func: Function): void,
        firstNode(): Node,
        lastNode(): Node,
        template: Blaze$Template,
        templateInstance(): any
}

declare function Blaze$With(data: Object | Function, contentFunc: Function): Blaze$View

declare var currentView: Blaze$View;

declare function Blaze$getData(elementOrView?: HTMLElement | Blaze$View): Object

declare function Blaze$getView(element?: HTMLElement): Blaze$View

declare function Blaze$isTemplate(value: any): boolean

declare function Blaze$remove(renderedView: Blaze$View): void

declare function Blaze$render(
    templateOrView: Blaze$Template | Blaze$View,
    parentNode: Node,
    nextNode?: Node,
    parentView?: Blaze$View): Blaze$View

declare function Blaze$renderWithData(
    templateOrView: Blaze$Template | Blaze$View,
    data: Object | Function,
    parentNode: Node,
    nextNode?: Node,
    parentView?: Blaze$View): Blaze$View

declare function Blaze$toHTML(templateOrView: Blaze$Template | Blaze$View): string

declare function Blaze$toHTMLWithData(templateOrView: Blaze$Template | Blaze$View, data: Object | Function): stringdeclare interface BrowserPolicy$framing {
    disallow(): void,
        restrictToOrigin(origin: string): void,
        allowAll(): void
}

declare interface BrowserPolicy$content {
    allowEval(): void,
        allowInlineStyles(): void,
        allowInlineScripts(): void,
        allowSameOriginForAll(): void,
        allowDataUrlForAll(): void,
        allowOriginForAll(origin: string): void,
        allowImageOrigin(origin: string): void,
        allowFrameOrigin(origin: string): void,
        allowContentTypeSniffing(): void,
        allowAllContentOrigin(): void,
        allowAllContentDataUrl(): void,
        allowAllContentSameOrigin(): void,
        disallowAll(): void,
        disallowInlineStyles(): void,
        disallowEval(): void,
        disallowInlineScripts(): void,
        disallowFont(): void,
        disallowObject(): void,
        disallowAllContent(): void
}
declare interface MailComposerOptions {
    escapeSMTP: boolean,
        encoding: string,
        charset: string,
        keepBcc: boolean,
        forceEmbeddedImages: boolean
}
declare var MailComposer: MailComposerStatic;
declare interface MailComposerStatic {
    new(options: MailComposerOptions): MailComposer
}
declare interface MailComposer {
    addHeader(name: string, value: string): void,
        setMessageOption(from: string, to: string, body: string, html: string): void,
        streamMessage(): void,
        pipe(stream: any): void
}
/**
 * These are the modules and interfaces for packages that can't be automatically generated from the Meteor data.js file
 */
declare interface ILengthAble {
    length: number
}
declare interface ITinytestAssertions {
    ok(doc: Object): void,
        expect_fail(): void,
        fail(doc: Object): void,
        runId(): string,
        equal<T>(actual: T, expected: T, message?: string, not?: boolean): void,
        notEqual<T>(actual: T, expected: T, message?: string): void,
        instanceOf(obj: Object, klass: Function, message?: string): void,
        notInstanceOf(obj: Object, klass: Function, message?: string): void,
        matches(actual: any, regexp: RegExp, message?: string): void,
        notMatches(actual: any, regexp: RegExp, message?: string): void,
        throws(f: Function, expected?: string | RegExp): void,
        isTrue(v: boolean, msg?: string): void,
        isFalse(v: boolean, msg?: string): void,
        isNull(v: any, msg?: string): void,
        isNotNull(v: any, msg?: string): void,
        isUndefined(v: any, msg?: string): void,
        isNotUndefined(v: any, msg?: string): void,
        isNan(v: any, msg?: string): void,
        isNotNan(v: any, msg?: string): void,
        include<T>(
            s: Array<T>| Object | string,
            value: any,
            msg?: string,
            not?: boolean): void,
        notInclude<T>(
            s: Array<T>| Object | string,
            value: any,
            msg?: string,
            not?: boolean): void,
        length(obj: ILengthAble, expected_length: number, msg?: string): void,
        _stringEqual(actual: string, expected: string, msg?: string): void
}
declare var npm$namespace$Tinytest: {
    add: typeof Tinytest$add,
    addAsync: typeof Tinytest$addAsync,
}
declare function Tinytest$add(description: string, func: (test: ITinytestAssertions) => void): void

declare function Tinytest$addAsync(description: string, func: (test: ITinytestAssertions) => void): void
declare var npm$namespace$App: {
    accessRule: typeof App$accessRule,
    configurePlugin: typeof App$configurePlugin,
    icons: typeof App$icons,
    info: typeof App$info,
    launchScreens: typeof App$launchScreens,
    setPreference: typeof App$setPreference,
}
declare function App$accessRule(pattern: string, options?: {
    type?: string,
    launchExternal?: boolean
}): void

declare function App$configurePlugin(id: string, config: Object): void

declare function App$icons(icons: Object): void

declare function App$info(
    options: {
        id?: string,
        version?: string,
        name?: string,
        description?: string,
        author?: string,
        email?: string,
        website?: string
    }): void

declare function App$launchScreens(launchScreens: Object): void

declare function App$setPreference(name: string, value: string, platform?: string): void
declare var npm$namespace$Assets: {
    getBinary: typeof Assets$getBinary,
    getText: typeof Assets$getText,
}
declare function Assets$getBinary(assetPath: string, asyncCallback?: Function): EJSON

declare function Assets$getText(assetPath: string, asyncCallback?: Function): string
declare var npm$namespace$Cordova: {
    depends: typeof Cordova$depends,
}
declare function Cordova$depends(dependencies: {
    [id: string]: string
}): void
declare var npm$namespace$DDPCommon: {
    MethodInvocation: typeof DDPCommon$MethodInvocation,
}
declare function DDPCommon$MethodInvocation(options: {}): any
declare var npm$namespace$EJSON: {
    addType: typeof EJSON$addType,
    clone: typeof EJSON$clone,
    equals: typeof EJSON$equals,
    fromJSONValue: typeof EJSON$fromJSONValue,
    isBinary: typeof EJSON$isBinary,
    parse: typeof EJSON$parse,
    stringify: typeof EJSON$stringify,
    toJSONValue: typeof EJSON$toJSONValue,
}
declare var CustomType: EJSON$CustomTypeStatic;

declare interface EJSON$CustomTypeStatic {
    new(): EJSON$CustomType
}

declare interface EJSON$CustomType {
    clone(): EJSON$CustomType,
        equals(other: Object): boolean,
        toJSONValue(): JSONable,
        typeName(): string
}

declare function EJSON$addType(name: string, factory: (val: JSONable) => EJSON$CustomType): void

declare function EJSON$clone<T>(val: T): T

declare function EJSON$equals(a: EJSON, b: EJSON, options?: {
    keyOrderSensitive?: boolean
}): boolean

declare function EJSON$fromJSONValue(val: JSONable): any

declare function EJSON$isBinary(x: Object): boolean

declare var newBinary: any;

declare function EJSON$parse(str: string): EJSON

declare function EJSON$stringify(
    val: EJSON,
    options?: {
        indent?: boolean | number | string,
        canonical?: boolean
    }): string

declare function EJSON$toJSONValue(val: EJSON): JSONable
declare var npm$namespace$Npm: {
    depends: typeof Npm$depends,
    require: typeof Npm$require,
}
declare function Npm$depends(dependencies: {
    [id: string]: string
}): void

declare function Npm$require(name: string): any
declare var npm$namespace$Package: {
    describe: typeof Package$describe,
    onTest: typeof Package$onTest,
    onUse: typeof Package$onUse,
    registerBuildPlugin: typeof Package$registerBuildPlugin,
}
declare function Package$describe(
    options: {
        summary?: string,
        version?: string,
        name?: string,
        git?: string,
        documentation?: string,
        debugOnly?: boolean,
        prodOnly?: boolean,
        testOnly?: boolean
    }): void

declare function Package$onTest(func: Function): void

declare function Package$onUse(func: Function): void

declare function Package$registerBuildPlugin(
    options?: {
        name?: string,
        use?: string | string[],
        sources?: string[],
        npmDependencies?: Object
    }): void
declare var npm$namespace$Tracker: {
    Computation: typeof Tracker$Computation,
    afterFlush: typeof Tracker$afterFlush,
    autorun: typeof Tracker$autorun,
    flush: typeof Tracker$flush,
    nonreactive: typeof Tracker$nonreactive,
    onInvalidate: typeof Tracker$onInvalidate,
}
declare function Tracker$Computation(): void

declare var Dependency: Tracker$DependencyStatic;

declare interface Tracker$DependencyStatic {
    new(): Tracker$Dependency
}

declare interface Tracker$Dependency {
    changed(): void,
        depend(fromComputation?: Tracker$Computation): boolean,
        hasDependents(): boolean
}

declare var active: boolean;

declare function Tracker$afterFlush(callback: Function): void

declare function Tracker$autorun(
    runFunc: (computation: Tracker$Computation) => void,
    options?: {
        onError?: Function
    }): Tracker$Computation

declare var currentComputation: Tracker$Computation;

declare function Tracker$flush(): void

declare function Tracker$nonreactive(func: Function): void

declare function Tracker$onInvalidate(callback: Function): void
declare var npm$namespace$Session: {
    equals: typeof Session$equals,
    get: typeof Session$get,
    set: typeof Session$set,
    setDefault: typeof Session$setDefault,
}
declare function Session$equals(a: EJSON, b: EJSON, options?: {
    keyOrderSensitive?: boolean
}): boolean

declare function Session$get(
    url: string,
    callOptions?: HTTP$HTTPRequest,
    asyncCallback?: Function): HTTP$HTTPResponse

declare function Session$set(key: string, value: EJSONable | any): void

declare function Session$setDefault(key: string, value: EJSONable | any): void
declare var npm$namespace$Email: {
    send: typeof Email$send,
}
declare function Email$send(
    options: {
        from?: string,
        to?: string | string[],
        cc?: string | string[],
        bcc?: string | string[],
        replyTo?: string | string[],
        subject?: string,
        text?: string,
        html?: string,
        headers?: Object,
        attachments?: Object[],
        mailComposer?: MailComposer
    }): voiddeclare var CompileStep: CompileStepStatic;
declare interface CompileStepStatic {
    new(): CompileStep
}
declare interface CompileStep {
    addAsset(options: {}, path: string, data: any | string): any,
        addHtml(options: {
            section?: string,
            data?: string
        }): any,
        addJavaScript(options: {
            path?: string,
            data?: string,
            sourcePath?: string
        }): any,
        addStylesheet(options: {}, path: string, data: string, sourceMap: string): any,
        arch: any,
        declaredExports: any,
        error(
            options: {},
            message: string,
            sourcePath?: string,
            line?: number,
            func?: string): any,
        fileOptions: any,
        fullInputPath: any,
        inputPath: any,
        inputSize: any,
        packageName: any,
        pathForSourceMap: any,
        read(n?: number): any,
        rootOutputPath: any
}
declare var PackageAPI: PackageAPIStatic;
declare interface PackageAPIStatic {
    new(): PackageAPI
}
declare interface PackageAPI {
    addAssets(filenames: string | string[], architecture: string | string[]): void,
        addFiles(
            filenames: string | string[],
            architecture?: string | string[],
            options?: {
                bare?: boolean
            }): void,
        export (
            exportedObjects: string | string[],
            architecture?: string | string[],
            exportOptions?: Object,
            testOnly?: boolean): void,
        imply(packageNames: string | string[], architecture?: string | string[]): void,
        use(
            packageNames: string | string[],
            architecture?: string | string[],
            options?: {
                weak?: boolean,
                unordered?: boolean
            }): void,
        versionsFrom(meteorRelease: string | string[]): void
}
declare var ReactiveVar: ReactiveVarStatic;
declare interface ReactiveVarStatic {
    new<T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T >
}
declare interface ReactiveVar<T>{
    get(): T,
    set(newValue: T): void
}
declare var Subscription: SubscriptionStatic;
declare interface SubscriptionStatic {
    new(): Subscription
}
declare interface Subscription {
    added(collection: string, id: string, fields: Object): void,
        changed(collection: string, id: string, fields: Object): void,
        connection: Meteor$Connection,
        error(error: Meteor$Error): void,
        onStop(func: Function): void,
        ready(): void,
        removed(collection: string, id: string): void,
        stop(): void,
        userId: string
}
declare var Template: Blaze$TemplateStatic;
declare interface TemplateStatic {
    new(viewName?: string, renderFunction?: Function): Blaze$Template, [templateName: string]: any | Blaze$Template,
        head: Blaze$Template,
        find(selector: string): Blaze$Template,
        findAll(selector: string): Blaze$Template[],
        $: any
}
declare interface Template {
    viewName: string,
        renderFunction: Function,
        constructView(): Blaze$View
}
declare function check(value: any, pattern: any): voiddeclare function execFileAsync(
    command: string,
    args?: any[],
    options?: {
        cwd?: Object,
        env?: Object,
        stdio?: any[] | string,
        destination?: any,
        waitForClose?: string
    }): anydeclare function execFileSync(
    command: string,
    args?: any[],
    options?: {
        cwd?: Object,
        env?: Object,
        stdio?: any[] | string,
        destination?: any,
        waitForClose?: string
    }): Stringdeclare function getExtension(): String
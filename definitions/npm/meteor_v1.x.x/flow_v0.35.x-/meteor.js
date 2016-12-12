import type { Collection } from 'npm$namespace$Mongo'
import type { EmailTemplates } from 'npm$namespace$Meteor'
import type { View } from 'npm$namespace$Blaze'
import type { Computation } from 'npm$namespace$Tracker'

declare module 'meteor' {
		declare interface EJSONable {
		[key: string]: number | string | boolean | Object | number[] | string[] | Object[] | Date | Uint8Array | EJSON.CustomType
	}

	declare interface JSONable {
		[key: string]: number | string | boolean | Object | number[] | string[] | Object[]
	}

	declare interface EJSON {
		
	}

	declare interface MailComposerOptions {
		escapeSMTP: boolean,
		encoding: string,
		charset: string,
		keepBcc: boolean,
		forceEmbeddedImages: boolean
	}

	declare interface MailComposerStatic {
		new (options: MailComposerOptions): MailComposer
	}

	declare interface MailComposer {
		addHeader(name: string, value: string): void,
		setMessageOption(from: string, to: string, body: string, html: string): void,
		streamMessage(): void,
		pipe(stream: any): void
	}

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
		s: Array<T> | Object | string, value: any, msg?: string, not?: boolean
	): void,
		notInclude<T>(
		s: Array<T> | Object | string, value: any, msg?: string, not?: boolean
	): void,
		length(obj: ILengthAble, expected_length: number, msg?: string): void,
		_stringEqual(actual: string, expected: string, msg?: string): void
	}

	declare interface CompileStepStatic {
		new (): CompileStep
	}

	declare interface CompileStep {
		addAsset(options: {
		
	}, path: string, data: any | string): any,
		addHtml(options: {
		section?: string,
		data?: string
	}): any,
		addJavaScript(options: {
		path?: string,
		data?: string,
		sourcePath?: string
	}): any,
		addStylesheet(options: {
		
	}, path: string, data: string, sourceMap: string): any,
		arch: any,
		declaredExports: any,
		error(
		options: {
		
	}, message: string, sourcePath?: string, line?: number, func?: string
	): any,
		fileOptions: any,
		fullInputPath: any,
		inputPath: any,
		inputSize: any,
		packageName: any,
		pathForSourceMap: any,
		read(n?: number): any,
		rootOutputPath: any
	}

	declare interface PackageAPIStatic {
		new (): PackageAPI
	}

	declare interface PackageAPI {
		addAssets(filenames: string | string[], architecture: string | string[]): void,
		addFiles(
		filenames: string | string[], architecture?: string | string[], options?: {
		bare?: boolean
	}
	): void,
		export(
		exportedObjects: string | string[], architecture?: string | string[], exportOptions?: Object, testOnly?: boolean
	): void,
		imply(packageNames: string | string[], architecture?: string | string[]): void,
		use(
		packageNames: string | string[], architecture?: string | string[], options?: {
		weak?: boolean,
		unordered?: boolean
	}
	): void,
		versionsFrom(meteorRelease: string | string[]): void
	}

	declare interface ReactiveVarStatic {
		new <T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>
	}

	declare interface ReactiveVar<T> {
		get(): T,
		set(newValue: T): void
	}

	declare interface SubscriptionStatic {
		new (): Subscription
	}

	declare interface Subscription {
		added(collection: string, id: string, fields: Object): void,
		changed(collection: string, id: string, fields: Object): void,
		connection: Meteor.Connection,
		error(error: Error): void,
		onStop(func: Function): void,
		ready(): void,
		removed(collection: string, id: string): void,
		stop(): void,
		userId: string
	}

	declare interface TemplateStatic {
		new (): Template,
		[templateName: string]: any | Template,
		head: Template,
		find(selector: string): Blaze.Template,
		findAll(selector: string): Blaze.Template[],
		$: any,
		body: Template,
		currentData(): {
		
	},
		deregisterHelper(name: string): void,
		instance(): Blaze.TemplateInstance,
		parentData(numLevels?: number): {
		
	},
		registerHelper(name: string, helperFunction: Function): void
	}

	declare interface Template {
		created: Function,
		destroyed: Function,
		events(eventMap: Meteor.EventMap): void,
		helpers(helpers: {
		[id: string]: any
	}): void,
		onCreated: Function,
		onDestroyed: Function,
		onRendered: Function,
		rendered: Function
	}

	declare function check(value: any, pattern: any): void

	declare function execFileAsync(
		command: string, args?: any[], options?: {
		cwd?: Object,
		env?: Object,
		stdio?: any[] | string,
		destination?: any,
		waitForClose?: string
	}
	): any

	declare function execFileSync(
		command: string, args?: any[], options?: {
		cwd?: Object,
		env?: Object,
		stdio?: any[] | string,
		destination?: any,
		waitForClose?: string
	}
	): String

	declare function getExtension(): String

		
}

declare module 'npm$namespace$Match' {
			declare function Optional(pattern: any): boolean

	declare function ObjectIncluding(dico: any): boolean

	declare function OneOf(...patterns: any[]): any

	declare function Where(condition: any): any

	declare function test(value: any, pattern: any): boolean

		
}

declare module 'npm$namespace$Meteor' {
		declare interface UserEmail {
		address: string,
		verified: boolean
	}

	declare interface User {
		_id?: string,
		username?: string,
		emails?: Meteor.UserEmail[],
		createdAt?: number,
		profile?: any,
		services?: any
	}

	declare interface LiveQueryHandle {
		stop(): void
	}

	declare export interface Event {
		type: string,
		target: HTMLElement,
		currentTarget: HTMLElement,
		which: number,
		stopPropagation(): void,
		stopImmediatePropagation(): void,
		preventDefault(): void,
		isPropagationStopped(): boolean,
		isImmediatePropagationStopped(): boolean,
		isDefaultPrevented(): boolean
	}

	declare interface EventHandlerFunction {
		(event?: Meteor.Event, templateInstance?: Blaze.TemplateInstance): void
	}

	declare interface EventMap {
		[id: string]: Meteor.EventHandlerFunction
	}

	declare interface LoginWithExternalServiceOptions {
		requestPermissions?: string[],
		requestOfflineToken?: boolean,
		loginUrlParameters?: {
		[param: string]: any
	},
		loginHint?: string,
		loginStyle?: string,
		redirectUrl?: "popup" | "redirect",
		profile?: any,
		email?: string
	}

	declare interface SubscriptionHandle {
		stop(): void,
		ready(): boolean
	}

	declare interface EmailFields {
		from?: () => string,
		subject?: (user: Meteor.User) => string,
		text?: (user: Meteor.User, url: string) => string,
		html?: (user: Meteor.User, url: string) => string
	}

	declare interface EmailTemplates {
		from?: string,
		siteName?: string,
		headers?: {
		[id: string]: string
	},
		resetPassword?: Meteor.EmailFields,
		enrollAccount?: Meteor.EmailFields,
		verifyEmail?: Meteor.EmailFields
	}

	declare interface Connection {
		id: string,
		close: Function,
		onClose: Function,
		clientAddress: string,
		httpHeaders: Object
	}

	declare interface IValidateLoginAttemptCbOpts {
		type: string,
		allowed: boolean,
		error: Error,
		user: Meteor.User,
		connection: Meteor.Connection,
		methodName: string,
		methodArguments: any[]
	}

	declare interface Tinytest {
		add(description: string, func: (test: ITinytestAssertions) => void): void,
		addAsync(description: string, func: (test: ITinytestAssertions) => void): void
	}

	declare interface ErrorStatic {
		new (error: string | number, reason?: string, details?: string): Error
	}

	declare interface Error {
		error: string | number,
		reason?: string,
		details?: string
	}

	declare function loginWithMeteorDeveloperAccount(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void

	declare function loginWithFacebook(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void

	declare function loginWithGithub(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void

	declare function loginWithGoogle(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void

	declare function loginWithMeetup(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void

	declare function loginWithTwitter(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void

	declare function loginWithWeibo(options?: Meteor.LoginWithExternalServiceOptions, callback?: Function): void

	declare function _sleepForMs(milliseconds: number): void

	declare function absoluteUrl(
		path?: string, options?: {
		secure?: boolean,
		replaceLocalhost?: boolean,
		rootUrl?: string
	}
	): string

	declare function apply(
		name: string, args: EJSONable[], options?: {
		wait?: boolean,
		onResultReceived?: Function
	}, asyncCallback?: Function
	): any

	declare function call(name: string, ...args: any[]): any

	declare function clearInterval(id: number): void

	declare function clearTimeout(id: number): void

	declare function disconnect(): void

	declare function loggingIn(): boolean

	declare function loginWith<ExternalService>(
		options?: {
		requestPermissions?: string[],
		requestOfflineToken?: boolean,
		loginUrlParameters?: Object,
		loginHint?: string,
		loginStyle?: string,
		redirectUrl?: string
	}, callback?: Function
	): void

	declare function loginWithPassword(user: Object | string, password: string, callback?: Function): void

	declare function logout(callback?: Function): void

	declare function logoutOtherClients(callback?: Function): void

	declare function methods(methods: Object): void

	declare function onConnection(callback: Function): void

	declare function publish(name: string, func: Function): void

	declare function reconnect(): void

	declare function setInterval(func: Function, delay: number): number

	declare function setTimeout(func: Function, delay: number): number

	declare function startup(func: Function): void

	declare function status(): Meteor.StatusEnum

	declare function subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle

	declare function user(): Meteor.User

	declare function userId(): string

	declare function wrapAsync(func: Function, context?: Object): any

		
}

declare module 'npm$namespace$DDP' {
		declare interface DDPStatic {
		subscribe(name: string, ...rest: any[]): Meteor.SubscriptionHandle,
		call(method: string, ...parameters: any[]): void,
		apply(method: string, ...parameters: any[]): void,
		methods(IMeteorMethodsDictionary: any): any,
		status(): DDPStatus,
		reconnect(): void,
		disconnect(): void,
		onReconnect(): void
	}

	declare interface DDPStatus {
		connected: boolean,
		status: Meteor.StatusEnum,
		retryCount: number,
		retryTime?: number,
		reason?: string
	}

	declare function connect(url: string): DDP.DDPStatic

		
}

declare module 'npm$namespace$Mongo' {
		declare interface Selector {
		[key: string]: any
	}

	declare interface Selector {
		
	}

	declare interface Modifier {
		
	}

	declare interface SortSpecifier {
		
	}

	declare interface FieldSpecifier {
		[id: string]: Number
	}

	declare interface AllowDenyOptions {
		insert?: (userId: string, doc: any) => boolean,
		update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean,
		remove?: (userId: string, doc: any) => boolean,
		fetch?: string[],
		transform?: Function
	}

	declare interface CollectionStatic {
		new <T>(
		name: string, options?: {
		connection?: Object,
		idGeneration?: string,
		transform?: Function
	}
	): Collection<T>
	}

	declare interface Collection<T> {
		allow(
		options: {
		insert?: (userId: string, doc: T) => boolean,
		update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean,
		remove?: (userId: string, doc: T) => boolean,
		fetch?: string[],
		transform?: Function
	}
	): boolean,
		deny(
		options: {
		insert?: (userId: string, doc: T) => boolean,
		update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean,
		remove?: (userId: string, doc: T) => boolean,
		fetch?: string[],
		transform?: Function
	}
	): boolean,
		find(
		selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
		sort?: Mongo.SortSpecifier,
		skip?: number,
		limit?: number,
		fields?: Mongo.FieldSpecifier,
		reactive?: boolean,
		transform?: Function,
		disableOplog?: boolean,
		pollingIntervalMs?: number,
		pollingThrottleMs?: number
	}
	): Mongo.Cursor<T>,
		findOne(
		selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
		sort?: Mongo.SortSpecifier,
		skip?: number,
		fields?: Mongo.FieldSpecifier,
		reactive?: boolean,
		transform?: Function
	}
	): T,
		insert(doc: T, callback?: Function): string,
		rawCollection(): any,
		rawDatabase(): any,
		remove(
		selector: Mongo.Selector | Mongo.ObjectID | string, callback?: Function
	): number,
		update(
		selector: Mongo.Selector | Mongo.ObjectID | string, modifier: Mongo.Modifier, options?: {
		multi?: boolean,
		upsert?: boolean
	}, callback?: Function
	): number,
		upsert(
		selector: Mongo.Selector | Mongo.ObjectID | string, modifier: Mongo.Modifier, options?: {
		multi?: boolean
	}, callback?: Function
	): {
		numberAffected?: number,
		insertedId?: string
	},
		_ensureIndex(indexName: string, options?: {
		[key: string]: any
	}): void
	}

	declare interface CursorStatic {
		new <T>(): Cursor<T>
	}

	declare interface Cursor<T> {
		count(): number,
		fetch(): Array<T>,
		forEach(
		callback: <T>(doc: T, index: number, cursor: Mongo.Cursor<T>) => void, thisArg?: any
	): void,
		map<U>(
		callback: (doc: T, index: number, cursor: Mongo.Cursor<T>) => U, thisArg?: any
	): Array<U>,
		observe(callbacks: Object): Meteor.LiveQueryHandle,
		observeChanges(callbacks: Object): Meteor.LiveQueryHandle
	}

	declare interface ObjectIDStatic {
		new (hexString?: string): ObjectID
	}

	declare interface ObjectID {
		valueOf(): string,
		getTimestamp(): Date
	}

			
}

declare module 'npm$namespace$HTTP' {
		declare interface HTTPRequest {
		content?: string,
		data?: any,
		query?: string,
		params?: {
		[id: string]: string
	},
		auth?: string,
		headers?: {
		[id: string]: string
	},
		timeout?: number,
		followRedirects?: boolean
	}

	declare interface HTTPResponse {
		statusCode?: number,
		headers?: {
		[id: string]: string
	},
		content?: string,
		data?: any
	}

	declare function call(
		method: string, url: string, options?: HTTP.HTTPRequest, asyncCallback?: Function
	): HTTP.HTTPResponse

	declare function del(
		url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function
	): HTTP.HTTPResponse

	declare function get(
		url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function
	): HTTP.HTTPResponse

	declare function post(
		url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function
	): HTTP.HTTPResponse

	declare function put(
		url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: Function
	): HTTP.HTTPResponse

	declare function call(
		method: string, url: string, options?: {
		content?: string,
		data?: Object,
		query?: string,
		params?: Object,
		auth?: string,
		headers?: Object,
		timeout?: number,
		followRedirects?: boolean,
		npmRequestOptions?: Object,
		beforeSend?: Function
	}, asyncCallback?: Function
	): HTTP.HTTPResponse

	declare function del(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse

	declare function get(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse

	declare function patch(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse

	declare function post(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse

	declare function put(url: string, callOptions?: Object, asyncCallback?: Function): HTTP.HTTPResponse

		
}

declare module 'npm$namespace$Random' {
			declare function id(numberOfChars?: number): string

	declare function secret(numberOfChars?: number): string

	declare function fraction(): number

	declare function hexString(numberOfDigits: number): string

	declare function choice(array: any[]): string

	declare function choice(str: string): string

		
}

declare module 'npm$namespace$Accounts' {
		declare interface IValidateLoginAttemptCbOpts {
		type?: string,
		allowed?: boolean,
		error?: Meteor.Error,
		user?: Meteor.User,
		connection?: Meteor.Connection,
		methodName?: string,
		methodArguments?: any[]
	}

	declare function loginServicesConfigured(): boolean

	declare function onPageLoadLogin(func: Function): void

	declare function addEmail(userId: string, newEmail: string, verified?: boolean): void

	declare function changePassword(oldPassword: string, newPassword: string, callback?: Function): void

	declare function createUser(
		options: {
		username?: string,
		email?: string,
		password?: string,
		profile?: Object
	}, callback?: Function
	): string

	declare function findUserByEmail(email: string): Object

	declare function findUserByUsername(username: string): Object

	declare function forgotPassword(options: {
		email?: string
	}, callback?: Function): void

	declare function onEmailVerificationLink(callback: Function): void

	declare function onEnrollmentLink(callback: Function): void

	declare function onResetPasswordLink(callback: Function): void

	declare function removeEmail(userId: string, email: string): void

	declare function resetPassword(token: string, newPassword: string, callback?: Function): void

	declare function sendEnrollmentEmail(userId: string, email?: string): void

	declare function sendResetPasswordEmail(userId: string, email?: string): void

	declare function sendVerificationEmail(userId: string, email?: string): void

	declare function setPassword(userId: string, newPassword: string, options?: {
		logout?: Object
	}): void

	declare function setUsername(userId: string, newUsername: string): void

	declare function verifyEmail(token: string, callback?: Function): void

	declare function config(
		options: {
		sendVerificationEmail?: boolean,
		forbidClientAccountCreation?: boolean,
		restrictCreationByEmailDomain?: string | Function,
		loginExpirationInDays?: number,
		oauthSecretKey?: string
	}
	): void

	declare function onLogin(func: Function): {
		stop: () => void
	}

	declare function onLoginFailure(func: Function): {
		stop: () => void
	}

	declare function user(): Meteor.User

	declare function userId(): string

	declare function loggingIn(): boolean

	declare function logout(callback?: Function): void

	declare function logoutOtherClients(callback?: Function): void

	declare function onCreateUser(func: Function): void

	declare function validateLoginAttempt(
		cb: (params: Accounts.IValidateLoginAttemptCbOpts) => boolean
	): {
		stop: () => void
	}

	declare function validateNewUser(func: Function): boolean

		
}

declare module 'npm$namespace$Blaze' {
		declare interface View {
		name: string,
		parentView: Blaze.View,
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
		template: Blaze.Template,
		templateInstance(): any
	}

	declare interface Template {
		viewName: string,
		renderFunction: Function,
		constructView(): Blaze.View
	}

	declare interface TemplateStatic {
		new (viewName?: string, renderFunction?: Function): Template,
		[templateName: string]: any | Template,
		head: Template,
		find(selector: string): Blaze.Template,
		findAll(selector: string): Blaze.Template[],
		$: any
	}

	declare interface Template {
		
	}

	declare interface TemplateInstanceStatic {
		new (view: Blaze.View): TemplateInstance
	}

	declare interface TemplateInstance {
		$(selector: string): any,
		autorun(runFunc: Function): Object,
		data: Object,
		find(selector?: string): Blaze.TemplateInstance,
		findAll(selector: string): Blaze.TemplateInstance[],
		firstNode: Object,
		lastNode: Object,
		subscribe(name: string, ...args: any[]): Meteor.SubscriptionHandle,
		subscriptionsReady(): boolean,
		view: Object
	}

	declare interface ViewStatic {
		new (name?: string, renderFunction?: Function): View
	}

	declare interface View {
		
	}

	declare function Each(argFunc: Function, contentFunc: Function, elseFunc?: Function): Blaze.View

	declare function If(
		conditionFunc: Function, contentFunc: Function, elseFunc?: Function
	): Blaze.View

	declare function Let(bindings: Function, contentFunc: Function): Blaze.View

	declare function Unless(
		conditionFunc: Function, contentFunc: Function, elseFunc?: Function
	): Blaze.View

	declare function With(data: Object | Function, contentFunc: Function): Blaze.View

	declare function getData(elementOrView?: HTMLElement | Blaze.View): Object

	declare function getView(element?: HTMLElement): Blaze.View

	declare function isTemplate(value: any): boolean

	declare function remove(renderedView: Blaze.View): void

	declare function render(
		templateOrView: Template | Blaze.View, parentNode: Node, nextNode?: Node, parentView?: Blaze.View
	): Blaze.View

	declare function renderWithData(
		templateOrView: Template | Blaze.View, data: Object | Function, parentNode: Node, nextNode?: Node, parentView?: Blaze.View
	): Blaze.View

	declare function toHTML(templateOrView: Template | Blaze.View): string

	declare function toHTMLWithData(templateOrView: Template | Blaze.View, data: Object | Function): string

		
}

declare module 'npm$namespace$BrowserPolicy' {
		declare interface framing {
		disallow(): void,
		restrictToOrigin(origin: string): void,
		allowAll(): void
	}

	declare interface content {
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

			
}

declare module 'npm$namespace$Tinytest' {
			declare function add(description: string, func: (test: ITinytestAssertions) => void): void

	declare function addAsync(description: string, func: (test: ITinytestAssertions) => void): void

		
}

declare module 'npm$namespace$App' {
			declare function accessRule(
		pattern: string, options?: {
		type?: string,
		launchExternal?: boolean
	}
	): void

	declare function configurePlugin(id: string, config: Object): void

	declare function icons(icons: Object): void

	declare function info(
		options: {
		id?: string,
		version?: string,
		name?: string,
		description?: string,
		author?: string,
		email?: string,
		website?: string
	}
	): void

	declare function launchScreens(launchScreens: Object): void

	declare function setPreference(name: string, value: string, platform?: string): void

		
}

declare module 'npm$namespace$Assets' {
			declare function getBinary(assetPath: string, asyncCallback?: Function): EJSON

	declare function getText(assetPath: string, asyncCallback?: Function): string

		
}

declare module 'npm$namespace$Cordova' {
			declare function depends(dependencies: {
		[id: string]: string
	}): void

		
}

declare module 'npm$namespace$DDPCommon' {
			declare function MethodInvocation(options: {
		
	}): any

		
}

declare module 'npm$namespace$EJSON' {
		declare interface CustomTypeStatic {
		new (): CustomType
	}

	declare interface CustomType {
		clone(): EJSON.CustomType,
		equals(other: Object): boolean,
		toJSONValue(): JSONable,
		typeName(): string
	}

	declare function addType(name: string, factory: (val: JSONable) => EJSON.CustomType): void

	declare function clone<T>(val: T): T

	declare function equals(a: EJSON, b: EJSON, options?: {
		keyOrderSensitive?: boolean
	}): boolean

	declare function fromJSONValue(val: JSONable): any

	declare function isBinary(x: Object): boolean

	declare function parse(str: string): EJSON

	declare function stringify(
		val: EJSON, options?: {
		indent?: boolean | number | string,
		canonical?: boolean
	}
	): string

	declare function toJSONValue(val: EJSON): JSONable

		
}

declare module 'npm$namespace$Npm' {
			declare function depends(dependencies: {
		[id: string]: string
	}): void

	declare function require(name: string): any

		
}

declare module 'npm$namespace$Package' {
			declare function describe(
		options: {
		summary?: string,
		version?: string,
		name?: string,
		git?: string,
		documentation?: string,
		debugOnly?: boolean,
		prodOnly?: boolean,
		testOnly?: boolean
	}
	): void

	declare function onTest(func: Function): void

	declare function onUse(func: Function): void

	declare function registerBuildPlugin(
		options?: {
		name?: string,
		use?: string | string[],
		sources?: string[],
		npmDependencies?: Object
	}
	): void

		
}

declare module 'npm$namespace$Tracker' {
		declare interface Computation {
		firstRun: boolean,
		invalidate(): void,
		invalidated: boolean,
		onInvalidate(callback: Function): void,
		onStop(callback: Function): void,
		stop(): void,
		stopped: boolean
	}

	declare interface DependencyStatic {
		new (): Dependency
	}

	declare interface Dependency {
		changed(): void,
		depend(fromComputation?: Tracker.Computation): boolean,
		hasDependents(): boolean
	}

	declare function Computation(): void

	declare function afterFlush(callback: Function): void

	declare function autorun(
		runFunc: (computation: Tracker.Computation) => void, options?: {
		onError?: Function
	}
	): Tracker.Computation

	declare function flush(): void

	declare function nonreactive(func: Function): void

	declare function onInvalidate(callback: Function): void

		
}

declare module 'npm$namespace$Session' {
			declare function equals(key: string, value: string | number | boolean | any | any): boolean

	declare function get(key: string): any

	declare function set(key: string, value: EJSONable | any): void

	declare function setDefault(key: string, value: EJSONable | any): void

		
}

declare module 'npm$namespace$Email' {
			declare function send(
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
	}
	): void

		
}
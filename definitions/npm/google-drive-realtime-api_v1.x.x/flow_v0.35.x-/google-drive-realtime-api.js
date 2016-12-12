

declare module 'google-drive-realtime-api' {
					
}

declare module 'realtime' {
	declare type GoogEventHandler = ((evt: ObjectChangedEvent) => void) | ((e: Event) => void) | EventListener;

	declare export type ErrorType = "concurrent_creation" | "invalid_compound_operation" | "invalid_json_syntax" | "missing_property" | "not_found" | "forbidden" | "server_error" | "client_error" | "token_refresh_required" | "invalid_element_type" | "no_write_permission" | "fatal_network_error" | "unexpected_element";

	declare interface BaseModelEvent {
		bubbles: boolean,
		compoundOperationNames: string[],
		isLocal: boolean,
		isRedo: boolean,
		isUndo: boolean,
		preventDefault(): void,
		sessionId: string,
		target: CollaborativeObject,
		type: string,
		userId: string,
		stopPropagation(): void,
		new (
		target: CollaborativeObject, sessionId: string, userId: string, compoundOperationNames: string[], isLocal: boolean, isUndo: boolean, isRedo: boolean
	): BaseModelEvent
	}

	declare interface ObjectChangedEvent {
		new (
		target: CollaborativeObject, sessionId: string, userId: string, compoundOperationNames: string[], isLocal: boolean, isUndo: boolean, isRedo: boolean, events: BaseModelEvent[]
	): ObjectChangedEvent,
		events: BaseModelEvent[]
	}

	declare export interface ValuesAddedEvent<V> {
		new (
		target: CollaborativeObject, sessionId: string, userId: string, compoundOperationNames: string[], isLocal: boolean, isUndo: boolean, isRedo: boolean, index: number, values: V[], movedFromList: CollaborativeList<V>, movedFromIndex: number
	): ValuesAddedEvent<V>,
		index: number,
		movedFromIndex: number,
		movedFromList: CollaborativeList<V>
	}

	declare export interface ValuesRemovedEvent<V> {
		new (
		target: CollaborativeObject, sessionId: string, userId: string, compoundOperationNames: string[], isLocal: boolean, isUndo: boolean, isRedo: boolean, index: number, values: V[], movedToList: CollaborativeList<V>, movedToIndex: number
	): ValuesRemovedEvent<V>,
		index: number,
		movedToIndex: number,
		movedToList: CollaborativeList<V>
	}

	declare export function debug(): void

	declare export function newInMemoryDocument(
		opt_onLoaded?: (d: Document) => void, opt_initializerFn?: (m: Model) => void, opt_errorFn?: (e: gapi.drive.realtime.Error) => void
	): Document

	declare export function load(
		fileId: string, onLoaded?: (d: Document) => void, opt_initializerFn?: (m: Model) => void, opt_errorFn?: (e: gapi.drive.realtime.Error) => void
	): void

	declare export class Collaborator  {
		color: string;
		displayName: string;
		isAnonymous: boolean;
		isMe: boolean;
		permissionId: string;
		photoUrl: string;
		sessionId: string;
		userId: string;
		new(
		sessionId: string, userId: string, displayName: string, color: string, isMe: boolean, isAnonymous: boolean, photoUrl: string, permissionId: string
	): Collaborator
	}

	declare export class CollaborativeObject  {
		id: string;
		type: string;
		addEventListener(type: string, listener: GoogEventHandler, opt_capture?: boolean): void;
		removeAllEventListeners(): void;
		removeEventListener(type: string, listener: GoogEventHandler, opt_capture?: boolean): void;
		toString(): string
	}

	declare export class IndexReference<V> extends CollaborativeObject {
		DeleteMode: {
		SHIFT_AFTER_DELETE: string,
		SHIFT_BEFORE_DELETE: string,
		SHIFT_TO_INVALID: string
	};
		index: number;
		deleteMode(): string;
		referencedObject(): V
	}

	declare export class CollaborativeMap<V> extends CollaborativeObject {
		size: string;
		type: string;
		clear(): void;
		delete(key: string): V;
		get(key: string): V;
		has(key: string): boolean;
		isEmpty(): boolean;
		items(): [string, V][];
		keys(): string[];
		set(key: string, value: V): V;
		values(): V[]
	}

	declare export class CollaborativeString extends CollaborativeObject {
		length: number;
		text: string;
		type: string;
		append(text: string): void;
		getText(): string;
		insertString(index: number, text: string): void;
		registerReference(index: number, canBeDeleted: boolean): IndexReference<CollaborativeString>;
		removeRange(startIndex: number, endIndex: number): void;
		setText(text: string): void
	}

	declare export class CollaborativeList<V> extends CollaborativeObject {
		length: number;
		type: string;
		asArray(): V[];
		clear(): void;
		get(ind: number): V;
		indexOf(value: V, opt_comparatorFn?: (x1: V, x2: V) => boolean): number;
		insert(index: number, value: V): void;
		insertAll(index: number, values: V[]): void;
		lastIndexOf(value: V, opt_comparatorFn?: (x1: V, x2: V) => boolean): number;
		move(index: number, destinationIndex: number): void;
		moveToList(
		index: number, destination: CollaborativeList<V>, destinationIndex: number
	): void;
		push(value: V): number;
		pushAll(values: V[]): void;
		registerReference(index: number, canBeDeleted: boolean): IndexReference<CollaborativeList<V>>;
		remove(index: number): void;
		removeRange(startIndex: number, endIndex: number): void;
		removeValue(value: V): boolean;
		replaceRange(index: number, values: V[]): void;
		set(index: number, value: V): void
	}

	declare export class Model  {
		getObject: (id: string) => CollaborativeObject;
		bytesUsed: number;
		canRedo: boolean;
		canUndo: boolean;
		createJsObject(typeName: string): any;
		addEventListener(
		type: string, listener: () => void | EventListener, opt_capture?: boolean
	): void;
		beginCompoundOperation(opt_name?: string, opt_isUndoable?: boolean): void;
		create(ref: string | Function, ...var_args: any[]): any;
		createList<T>(opt_initialValue?: Array<T>): CollaborativeList<T>;
		createMap<T>(opt_initialValue?: Array<[string, T]>): CollaborativeMap<T>;
		createString(opt_initialValue?: string): CollaborativeString;
		endCompoundOperation(): void;
		getRoot(): CollaborativeMap<any>;
		isReadOnly(): boolean;
		redo(): void;
		removeAllEventListeners(): void;
		removeEventListener(
		type: string, listener: () => void | EventListener, opt_capture?: boolean
	): void;
		serverRevision(): number;
		toJson(opt_appId?: string, opt_revision?: number): string;
		undo(): void
	}

	declare export class Document  {
		isClosed: boolean;
		isInGoogleDrive: boolean;
		saveDelay: number;
		addEventListener(type: string, listener: GoogEventHandler, opt_capture?: boolean): void;
		close(): void;
		getCollaborators(): Collaborator[];
		getModel(): Model;
		removeAllEventListeners(): void;
		removeEventListener(type: string, listener: GoogEventHandler, opt_capture?: boolean): void;
		saveAs(fileId: string): void
	}

	declare export class Error  {
		constructor(type: string, message: string, isFatal: boolean): this;
		type: ErrorType;
		message: string;
		isFatal: boolean;
		toString(): string
	}

	
}

declare module 'databinding' {
		declare export interface Binding {
		collaborativeObject: CollaborativeObject,
		domElement: Element,
		unbind(): void
	}

	declare export function bindString(s: CollaborativeString, textinput: HTMLInputElement): Binding

		
}

declare module 'npm$namespace$rtclient' {
		declare export interface RealtimeLoader {
		start(): void,
		load(): void
	}

	declare interface RealtimeLoaderFactory {
		new (options: LoaderOptions): RealtimeLoader
	}

	declare export interface LoaderOptions {
		appId: string,
		autoCreate: boolean,
		clientId: string,
		authButtonElementId: string,
		newFileMimeType: string,
		registerTypes: () => void,
		defaultTitle: string,
		afterAuth: () => void,
		initializeModel: (model: gapi.drive.realtime.Model) => void,
		onFileLoaded: (rtdoc: gapi.drive.realtime.Document) => void
	}

	declare export interface DriveAPIFileResource {
		id: string
	}

	declare export interface ClientUtils {
		params: {
		fileIds: string
	},
		RealtimeLoader: RealtimeLoaderFactory,
		createRealtimeFile(
		title: string, mimeType: string, callback: (file: DriveAPIFileResource) => void
	): void
	}

	declare export function createRealtimeFile(
		title: string, mimeType: string, callback: (file: DriveAPIFileResource) => void
	): void

		
}
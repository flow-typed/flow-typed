

declare module 'winrt' {
					
}

declare module 'Collections' {
		declare export interface IVectorChangedEventArgs {
		collectionChange: Windows.Foundation.Collections.CollectionChange,
		index: number
	}

	declare export interface IPropertySet {
		
	}

	declare export interface IIterable<T> {
		first(): Windows.Foundation.Collections.IIterator<T>
	}

	declare export interface IIterator<T> {
		current: T,
		hasCurrent: boolean,
		moveNext(): boolean,
		getMany(): {
		items: T[],
		returnValue: number
	}
	}

	declare export interface IVectorView<T> {
		size: number,
		getAt(index: number): T,
		indexOf(value: T): {
		index: number,
		returnValue: boolean
	},
		getMany(startIndex: number): {
		items: T[],
		returnValue: number
	},
		toString(): string,
		toLocaleString(): string,
		concat(...items: T[][]): T[],
		join(seperator: string): string,
		pop(): T,
		push(...items: T[]): void,
		reverse(): T[],
		shift(): T,
		slice(start: number): T[],
		slice(start: number, end: number): T[],
		sort(): T[],
		sort(compareFn: (a: T, b: T) => number): T[],
		splice(start: number): T[],
		splice(start: number, deleteCount: number, ...items: T[]): T[],
		unshift(...items: T[]): number,
		lastIndexOf(searchElement: T): number,
		lastIndexOf(searchElement: T, fromIndex: number): number,
		every(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean,
		every(
		callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg: any
	): boolean,
		some(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean,
		some(
		callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg: any
	): boolean,
		forEach(callbackfn: (value: T, index: number, array: T[]) => void): void,
		forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg: any): void,
		map(callbackfn: (value: T, index: number, array: T[]) => any): any[],
		map(callbackfn: (value: T, index: number, array: T[]) => any, thisArg: any): any[],
		filter(callbackfn: (value: T, index: number, array: T[]) => boolean): T[],
		filter(
		callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg: any
	): T[],
		reduce(
		callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => any
	): any,
		reduce(
		callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => any, initialValue: any
	): any,
		reduceRight(
		callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => any
	): any,
		reduceRight(
		callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => any, initialValue: any
	): any,
		length: number
	}

	declare export interface IVector<T> {
		size: number,
		getAt(index: number): T,
		getView(): Windows.Foundation.Collections.IVectorView<T>,
		indexOf(value: T): {
		index: number,
		returnValue: boolean
	},
		setAt(index: number, value: T): void,
		insertAt(index: number, value: T): void,
		removeAt(index: number): void,
		append(value: T): void,
		removeAtEnd(): void,
		clear(): void,
		getMany(startIndex: number): {
		items: T[],
		returnValue: number
	},
		replaceAll(items: T[]): void,
		toString(): string,
		toLocaleString(): string,
		concat(...items: T[][]): T[],
		join(seperator: string): string,
		pop(): T,
		push(...items: T[]): void,
		reverse(): T[],
		shift(): T,
		slice(start: number): T[],
		slice(start: number, end: number): T[],
		sort(): T[],
		sort(compareFn: (a: T, b: T) => number): T[],
		splice(start: number): T[],
		splice(start: number, deleteCount: number, ...items: T[]): T[],
		unshift(...items: T[]): number,
		lastIndexOf(searchElement: T): number,
		lastIndexOf(searchElement: T, fromIndex: number): number,
		every(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean,
		every(
		callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg: any
	): boolean,
		some(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean,
		some(
		callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg: any
	): boolean,
		forEach(callbackfn: (value: T, index: number, array: T[]) => void): void,
		forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg: any): void,
		map(callbackfn: (value: T, index: number, array: T[]) => any): any[],
		map(callbackfn: (value: T, index: number, array: T[]) => any, thisArg: any): any[],
		filter(callbackfn: (value: T, index: number, array: T[]) => boolean): T[],
		filter(
		callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg: any
	): T[],
		reduce(
		callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => any
	): any,
		reduce(
		callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => any, initialValue: any
	): any,
		reduceRight(
		callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => any
	): any,
		reduceRight(
		callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => any, initialValue: any
	): any,
		length: number
	}

	declare export interface IKeyValuePair<K, V> {
		key: K,
		value: V
	}

	declare export interface IMap<K, V> {
		size: number,
		lookup(key: K): V,
		hasKey(key: K): boolean,
		getView(): Windows.Foundation.Collections.IMapView<K, V>,
		insert(key: K, value: V): boolean,
		remove(key: K): void,
		clear(): void
	}

	declare export interface IMapView<K, V> {
		size: number,
		lookup(key: K): V,
		hasKey(key: K): boolean,
		split(
		
	): {
		first: Windows.Foundation.Collections.IMapView<K, V>,
		second: Windows.Foundation.Collections.IMapView<K, V>
	}
	}

	declare export interface VectorChangedEventHandler<T> {
		(sender: Windows.Foundation.Collections.IObservableVector<T>, event: Windows.Foundation.Collections.IVectorChangedEventArgs): void
	}

	declare export interface IObservableVector<T> {
		onvectorchanged: any
	}

	declare export interface IMapChangedEventArgs<K> {
		collectionChange: Windows.Foundation.Collections.CollectionChange,
		key: K
	}

	declare export interface MapChangedEventHandler<K, V> {
		(sender: Windows.Foundation.Collections.IObservableMap<K, V>, event: Windows.Foundation.Collections.IMapChangedEventArgs<K>): void
	}

	declare export interface IObservableMap<K, V> {
		onmapchanged: any
	}

		declare export class PropertySet extends undefined$IPropertySet {
		size: number;
		onmapchanged: any;
		lookup(key: string): any;
		hasKey(key: string): boolean;
		getView(): Windows.Foundation.Collections.IMapView<string, any>;
		insert(key: string, value: any): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	}

	declare export class ValueSet extends undefined$IPropertySet {
		size: number;
		onmapchanged: any;
		lookup(key: string): any;
		hasKey(key: string): boolean;
		getView(): Windows.Foundation.Collections.IMapView<string, any>;
		insert(key: string, value: any): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	}

	
}

declare module 'Foundation' {
		declare export interface IUriRuntimeClass {
		absoluteUri: string,
		displayUri: string,
		domain: string,
		extension: string,
		fragment: string,
		host: string,
		password: string,
		path: string,
		port: number,
		query: string,
		queryParsed: Windows.Foundation.WwwFormUrlDecoder,
		rawUri: string,
		schemeName: string,
		suspicious: boolean,
		userName: string,
		equals(pUri: Windows.Foundation.Uri): boolean,
		combineUri(relativeUri: string): Windows.Foundation.Uri
	}

	declare export interface IUriRuntimeClassWithAbsoluteCanonicalUri {
		absoluteCanonicalUri: string,
		displayIri: string
	}

	declare export interface IUriEscapeStatics {
		unescapeComponent(toUnescape: string): string,
		escapeComponent(toEscape: string): string
	}

	declare export interface IUriRuntimeClassFactory {
		createUri(uri: string): Windows.Foundation.Uri,
		createUri(baseUri: string, relativeUri: string): Windows.Foundation.Uri
	}

	declare export interface IWwwFormUrlDecoderEntry {
		name: string,
		value: string
	}

	declare export interface IWwwFormUrlDecoderRuntimeClass {
		getFirstValueByName(name: string): string
	}

	declare export interface IWwwFormUrlDecoderRuntimeClassFactory {
		createWwwFormUrlDecoder(query: string): Windows.Foundation.WwwFormUrlDecoder
	}

	declare export interface IGetActivationFactory {
		getActivationFactory(activatableClassId: string): any
	}

	declare export interface IClosable {
		close(): void
	}

	declare export interface Point {
		x: number,
		y: number
	}

	declare export interface Size {
		width: number,
		height: number
	}

	declare export interface Rect {
		x: number,
		y: number,
		width: number,
		height: number
	}

	declare export interface DateTime {
		universalTime: number
	}

	declare export interface TimeSpan {
		duration: number
	}

	declare export interface IPropertyValue {
		isNumericScalar: boolean,
		type: Windows.Foundation.PropertyType,
		getUInt8(): number,
		getInt16(): number,
		getUInt16(): number,
		getInt32(): number,
		getUInt32(): number,
		getInt64(): number,
		getUInt64(): number,
		getSingle(): number,
		getDouble(): number,
		getChar16(): string,
		getBoolean(): boolean,
		getString(): string,
		getGuid(): string,
		getDateTime(): Date,
		getTimeSpan(): number,
		getPoint(): Windows.Foundation.Point,
		getSize(): Windows.Foundation.Size,
		getRect(): Windows.Foundation.Rect,
		getUInt8Array(): Uint8Array,
		getInt16Array(): Int16Array,
		getUInt16Array(): Uint16Array,
		getInt32Array(): Int32Array,
		getUInt32Array(): Uint32Array,
		getInt64Array(): number[],
		getUInt64Array(): number[],
		getSingleArray(): Float32Array,
		getDoubleArray(): Float64Array,
		getChar16Array(): string[],
		getBooleanArray(): boolean[],
		getStringArray(): string[],
		getInspectableArray(): any[],
		getGuidArray(): string[],
		getDateTimeArray(): Date[],
		getTimeSpanArray(): number[],
		getPointArray(): Windows.Foundation.Point[],
		getSizeArray(): Windows.Foundation.Size[],
		getRectArray(): Windows.Foundation.Rect[]
	}

	declare export interface IPropertyValueStatics {
		createEmpty(): any,
		createUInt8(value: number): any,
		createInt16(value: number): any,
		createUInt16(value: number): any,
		createInt32(value: number): any,
		createUInt32(value: number): any,
		createInt64(value: number): any,
		createUInt64(value: number): any,
		createSingle(value: number): any,
		createDouble(value: number): any,
		createChar16(value: string): any,
		createBoolean(value: boolean): any,
		createString(value: string): any,
		createInspectable(value: any): any,
		createGuid(value: string): any,
		createDateTime(value: Date): any,
		createTimeSpan(value: number): any,
		createPoint(value: Windows.Foundation.Point): any,
		createSize(value: Windows.Foundation.Size): any,
		createRect(value: Windows.Foundation.Rect): any,
		createUInt8Array(value: Uint8Array): any,
		createInt16Array(value: Int16Array): any,
		createUInt16Array(value: Uint16Array): any,
		createInt32Array(value: Int32Array): any,
		createUInt32Array(value: Uint32Array): any,
		createInt64Array(value: number[]): any,
		createUInt64Array(value: number[]): any,
		createSingleArray(value: Float32Array): any,
		createDoubleArray(value: Float64Array): any,
		createChar16Array(value: string[]): any,
		createBooleanArray(value: boolean[]): any,
		createStringArray(value: string[]): any,
		createInspectableArray(value: any[]): any,
		createGuidArray(value: string[]): any,
		createDateTimeArray(value: Date[]): any,
		createTimeSpanArray(value: number[]): any,
		createPointArray(value: Windows.Foundation.Point[]): any,
		createSizeArray(value: Windows.Foundation.Size[]): any,
		createRectArray(value: Windows.Foundation.Rect[]): any
	}

	declare export interface AsyncActionCompletedHandler {
		(asyncInfo: Windows.Foundation.IAsyncAction, asyncStatus: Windows.Foundation.AsyncStatus): void
	}

	declare export interface EventRegistrationToken {
		value: number
	}

	declare export interface HResult {
		value: number
	}

	declare export interface IAsyncInfo {
		errorCode: number,
		id: number,
		status: Windows.Foundation.AsyncStatus,
		cancel(): void,
		close(): void
	}

	declare export interface IAsyncAction {
		then<U>(
		success?: () => IPromise<U>, error?: (error: any) => IPromise<U>, progress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		success?: () => IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		success?: () => U, error?: (error: any) => IPromise<U>, progress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		success?: () => U, error?: (error: any) => U, progress?: (progress: any) => void
	): IPromise<U>,
		done<U>(
		success?: () => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void,
		cancel(): void,
		completed: Windows.Foundation.AsyncActionCompletedHandler,
		getResults(): void
	}

	declare export interface AsyncOperationWithProgressCompletedHandler<TResult, TProgress> {
		(asyncInfo: Windows.Foundation.IAsyncOperationWithProgress<TResult, TProgress>, asyncStatus: Windows.Foundation.AsyncStatus): void
	}

	declare export interface IAsyncOperationWithProgress<TResult, TProgress> {
		operation: {
		progress: Windows.Foundation.AsyncOperationProgressHandler<TResult, TProgress>,
		completed: Windows.Foundation.AsyncOperationWithProgressCompletedHandler<TResult, TProgress>,
		getResults(): TResult
	}
	}

	declare export interface AsyncOperationCompletedHandler<TResult> {
		(asyncInfo: Windows.Foundation.IAsyncOperation<TResult>, asyncStatus: Windows.Foundation.AsyncStatus): void
	}

	declare export interface IAsyncOperation<TResult> {
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<TResult>,
		getResults(): TResult
	}
	}

	declare export interface AsyncActionWithProgressCompletedHandler<TProgress> {
		(asyncInfo: Windows.Foundation.IAsyncActionWithProgress<TProgress>, asyncStatus: Windows.Foundation.AsyncStatus): void
	}

	declare export interface IAsyncActionWithProgress<TProgress> {
		progress: Windows.Foundation.AsyncActionProgressHandler<TProgress>,
		completed: Windows.Foundation.AsyncActionWithProgressCompletedHandler<TProgress>,
		getResults(): void
	}

	declare export interface AsyncOperationProgressHandler<TResult, TProgress> {
		(asyncInfo: Windows.Foundation.IAsyncOperationWithProgress<TResult, TProgress>, progressInfo: TProgress): void
	}

	declare export interface AsyncActionProgressHandler<TProgress> {
		(asyncInfo: Windows.Foundation.IAsyncActionWithProgress<TProgress>, progressInfo: TProgress): void
	}

	declare export interface IReference<T> {
		value: T
	}

	declare export interface IReferenceArray<T> {
		value: T[]
	}

	declare export interface TypedEventHandler<TSender, TResult> {
		(sender: TSender, args: TResult): void
	}

	declare export interface EventHandler<T> {
		(sender: any, args: T): void
	}

	declare export interface IPromise<T> {
		then<U>(
		success?: (value: T) => IPromise<U>, error?: (error: any) => IPromise<U>, progress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		success?: (value: T) => IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		success?: (value: T) => U, error?: (error: any) => IPromise<U>, progress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		success?: (value: T) => U, error?: (error: any) => U, progress?: (progress: any) => void
	): IPromise<U>,
		done<U>(
		success?: (value: T) => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void,
		cancel(): void,
		onerror(eventInfo: CustomEvent): void,
		addEventListener(type: string, listener: Function, capture?: boolean): void,
		dispatchEvent(type: string, details: any): boolean,
		removeEventListener(eventType: string, listener: Function, capture?: boolean): void
	}

		declare export class WwwFormUrlDecoder extends undefined$IWwwFormUrlDecoderRuntimeClass {
		constructor(query: string): this;
		size: number;
		getFirstValueByName(name: string): string;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.IWwwFormUrlDecoderEntry>;
		getAt(index: number): Windows.Foundation.IWwwFormUrlDecoderEntry;
		indexOf(
		value: Windows.Foundation.IWwwFormUrlDecoderEntry
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.Foundation.IWwwFormUrlDecoderEntry[],
		returnValue: number
	};
		toString(): string;
		toLocaleString(): string;
		concat(
		...items: Windows.Foundation.IWwwFormUrlDecoderEntry[][]
	): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		join(seperator: string): string;
		pop(): Windows.Foundation.IWwwFormUrlDecoderEntry;
		push(...items: Windows.Foundation.IWwwFormUrlDecoderEntry[]): void;
		reverse(): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		shift(): Windows.Foundation.IWwwFormUrlDecoderEntry;
		slice(start: number): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		slice(start: number, end: number): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		sort(): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		sort(
		compareFn: (
		a: Windows.Foundation.IWwwFormUrlDecoderEntry, b: Windows.Foundation.IWwwFormUrlDecoderEntry
	) => number
	): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		splice(start: number): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		unshift(...items: Windows.Foundation.IWwwFormUrlDecoderEntry[]): number;
		lastIndexOf(searchElement: Windows.Foundation.IWwwFormUrlDecoderEntry): number;
		lastIndexOf(
		searchElement: Windows.Foundation.IWwwFormUrlDecoderEntry, fromIndex: number
	): number;
		every(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => boolean
	): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		filter(
		callbackfn: (
		value: Windows.Foundation.IWwwFormUrlDecoderEntry, index: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => boolean, thisArg: any
	): Windows.Foundation.IWwwFormUrlDecoderEntry[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Foundation.IWwwFormUrlDecoderEntry[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class Uri extends undefined$IUriRuntimeClass {
		constructor(uri: string): this;
		constructor(baseUri: string, relativeUri: string): this;
		absoluteUri: string;
		displayUri: string;
		domain: string;
		extension: string;
		fragment: string;
		host: string;
		password: string;
		path: string;
		port: number;
		query: string;
		queryParsed: Windows.Foundation.WwwFormUrlDecoder;
		rawUri: string;
		schemeName: string;
		suspicious: boolean;
		userName: string;
		absoluteCanonicalUri: string;
		displayIri: string;
		equals(pUri: Windows.Foundation.Uri): boolean;
		combineUri(relativeUri: string): Windows.Foundation.Uri;
		unescapeComponent(toUnescape: string): string;
		escapeComponent(toEscape: string): string
	}

	declare export class PropertyValue  {
		createEmpty(): any;
		createUInt8(value: number): any;
		createInt16(value: number): any;
		createUInt16(value: number): any;
		createInt32(value: number): any;
		createUInt32(value: number): any;
		createInt64(value: number): any;
		createUInt64(value: number): any;
		createSingle(value: number): any;
		createDouble(value: number): any;
		createChar16(value: string): any;
		createBoolean(value: boolean): any;
		createString(value: string): any;
		createInspectable(value: any): any;
		createGuid(value: string): any;
		createDateTime(value: Date): any;
		createTimeSpan(value: number): any;
		createPoint(value: Windows.Foundation.Point): any;
		createSize(value: Windows.Foundation.Size): any;
		createRect(value: Windows.Foundation.Rect): any;
		createUInt8Array(value: Uint8Array): any;
		createInt16Array(value: Int16Array): any;
		createUInt16Array(value: Uint16Array): any;
		createInt32Array(value: Int32Array): any;
		createUInt32Array(value: Uint32Array): any;
		createInt64Array(value: number[]): any;
		createUInt64Array(value: number[]): any;
		createSingleArray(value: Float32Array): any;
		createDoubleArray(value: Float64Array): any;
		createChar16Array(value: string[]): any;
		createBooleanArray(value: boolean[]): any;
		createStringArray(value: string[]): any;
		createInspectableArray(value: any[]): any;
		createGuidArray(value: string[]): any;
		createDateTimeArray(value: Date[]): any;
		createTimeSpanArray(value: number[]): any;
		createPointArray(value: Windows.Foundation.Point[]): any;
		createSizeArray(value: Windows.Foundation.Size[]): any;
		createRectArray(value: Windows.Foundation.Rect[]): any
	}

	
}

declare module 'Metadata' {
				declare export class WebHostHiddenAttribute  {
		
	}

	declare export class VariantAttribute  {
		
	}

	declare export class HasVariantAttribute  {
		
	}

	declare export class DualApiPartitionAttribute  {
		
	}

	declare export class MuseAttribute  {
		
	}

	declare export class GCPressureAttribute  {
		
	}

	declare export class ActivatableAttribute  {
		constructor(version: number): this;
		constructor(type: string, version: number): this
	}

	declare export class VersionAttribute  {
		constructor(version: number): this
	}

	declare export class AllowMultipleAttribute  {
		
	}

	declare export class AttributeUsageAttribute  {
		constructor(targets: Windows.Foundation.Metadata.AttributeTargets): this
	}

	declare export class DefaultOverloadAttribute  {
		
	}

	declare export class DefaultAttribute  {
		
	}

	declare export class GuidAttribute  {
		constructor(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): this
	}

	declare export class ComposableAttribute  {
		constructor(type: string, compositionType: Windows.Foundation.Metadata.CompositionType, version: number): this
	}

	declare export class OverloadAttribute  {
		constructor(method: string): this
	}

	declare export class StaticAttribute  {
		constructor(type: string, version: number): this
	}

	declare export class OverridableAttribute  {
		
	}

	declare export class ProtectedAttribute  {
		
	}

	declare export class ThreadingAttribute  {
		constructor(model: Windows.Foundation.Metadata.ThreadingModel): this
	}

	declare export class MarshalingBehaviorAttribute  {
		constructor(behavior: Windows.Foundation.Metadata.MarshalingType): this
	}

	declare export class ExclusiveToAttribute  {
		constructor(typeName: string): this
	}

	declare export class LengthIsAttribute  {
		constructor(indexLengthParameter: number): this
	}

	declare export class RangeAttribute  {
		constructor(minValue: number, maxValue: number): this
	}

	
}

declare module 'Diagnostics' {
		declare export interface IErrorReportingSettings {
		setErrorOptions(value: Windows.Foundation.Diagnostics.ErrorOptions): void,
		getErrorOptions(): Windows.Foundation.Diagnostics.ErrorOptions
	}

		declare export class RuntimeBrokerErrorSettings extends undefined$IErrorReportingSettings {
		setErrorOptions(value: Windows.Foundation.Diagnostics.ErrorOptions): void;
		getErrorOptions(): Windows.Foundation.Diagnostics.ErrorOptions
	}

	
}

declare module 'Background' {
		declare export interface IBackgroundExecutionManagerStatics {
		requestAccessAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Background.BackgroundAccessStatus>,
		requestAccessAsync(
		applicationId: string
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Background.BackgroundAccessStatus>,
		removeAccess(): void,
		removeAccess(applicationId: string): void,
		getAccessStatus(): Windows.ApplicationModel.Background.BackgroundAccessStatus,
		getAccessStatus(
		applicationId: string
	): Windows.ApplicationModel.Background.BackgroundAccessStatus
	}

	declare export interface BackgroundTaskCanceledEventHandler {
		(sender: Windows.ApplicationModel.Background.IBackgroundTaskInstance, reason: Windows.ApplicationModel.Background.BackgroundTaskCancellationReason): void
	}

	declare export interface IBackgroundTaskInstance {
		instanceId: string,
		progress: number,
		suspendedCount: number,
		task: Windows.ApplicationModel.Background.BackgroundTaskRegistration,
		triggerDetails: any,
		oncanceled: any,
		getDeferral(): Windows.ApplicationModel.Background.BackgroundTaskDeferral
	}

	declare export interface BackgroundTaskProgressEventHandler {
		(sender: Windows.ApplicationModel.Background.BackgroundTaskRegistration, args: Windows.ApplicationModel.Background.BackgroundTaskProgressEventArgs): void
	}

	declare export interface BackgroundTaskCompletedEventHandler {
		(sender: Windows.ApplicationModel.Background.BackgroundTaskRegistration, args: Windows.ApplicationModel.Background.BackgroundTaskCompletedEventArgs): void
	}

	declare export interface IBackgroundTaskDeferral {
		complete(): void
	}

	declare export interface IBackgroundTask {
		run(
		taskInstance: Windows.ApplicationModel.Background.IBackgroundTaskInstance
	): void
	}

	declare export interface IBackgroundTaskRegistration {
		name: string,
		taskId: string,
		onprogress: any,
		oncompleted: any,
		unregister(cancelTask: boolean): void
	}

	declare export interface IBackgroundTaskRegistrationStatics {
		allTasks: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Background.IBackgroundTaskRegistration>
	}

	declare export interface IBackgroundTaskBuilder {
		name: string,
		taskEntryPoint: string,
		setTrigger(trigger: Windows.ApplicationModel.Background.IBackgroundTrigger): void,
		addCondition(condition: Windows.ApplicationModel.Background.IBackgroundCondition): void,
		register(): Windows.ApplicationModel.Background.BackgroundTaskRegistration
	}

	declare export interface IBackgroundTrigger {
		
	}

	declare export interface IBackgroundCondition {
		
	}

	declare export interface IBackgroundTaskCompletedEventArgs {
		instanceId: string,
		checkResult(): void
	}

	declare export interface IBackgroundTaskProgressEventArgs {
		instanceId: string,
		progress: number
	}

	declare export interface ISystemTrigger {
		oneShot: boolean,
		triggerType: Windows.ApplicationModel.Background.SystemTriggerType
	}

	declare export interface ISystemTriggerFactory {
		create(
		triggerType: Windows.ApplicationModel.Background.SystemTriggerType, oneShot: boolean
	): Windows.ApplicationModel.Background.SystemTrigger
	}

	declare export interface ISystemCondition {
		conditionType: Windows.ApplicationModel.Background.SystemConditionType
	}

	declare export interface ISystemConditionFactory {
		create(
		conditionType: Windows.ApplicationModel.Background.SystemConditionType
	): Windows.ApplicationModel.Background.SystemCondition
	}

	declare export interface INetworkOperatorNotificationTrigger {
		networkAccountId: string
	}

	declare export interface INetworkOperatorNotificationTriggerFactory {
		create(
		networkAccountId: string
	): Windows.ApplicationModel.Background.NetworkOperatorNotificationTrigger
	}

	declare export interface ITimeTrigger {
		freshnessTime: number,
		oneShot: boolean
	}

	declare export interface ITimeTriggerFactory {
		create(
		freshnessTime: number, oneShot: boolean
	): Windows.ApplicationModel.Background.TimeTrigger
	}

	declare export interface IMaintenanceTrigger {
		freshnessTime: number,
		oneShot: boolean
	}

	declare export interface IMaintenanceTriggerFactory {
		create(
		freshnessTime: number, oneShot: boolean
	): Windows.ApplicationModel.Background.MaintenanceTrigger
	}

	declare export interface INetworkOperatorHotspotAuthenticationTrigger {
		
	}

	declare export interface IPushNotificationTriggerFactory {
		create(
		applicationId: string
	): Windows.ApplicationModel.Background.PushNotificationTrigger
	}

		declare export class BackgroundExecutionManager  {
		requestAccessAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Background.BackgroundAccessStatus>;
		requestAccessAsync(
		applicationId: string
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Background.BackgroundAccessStatus>;
		removeAccess(): void;
		removeAccess(applicationId: string): void;
		getAccessStatus(): Windows.ApplicationModel.Background.BackgroundAccessStatus;
		getAccessStatus(
		applicationId: string
	): Windows.ApplicationModel.Background.BackgroundAccessStatus
	}

	declare export class BackgroundTaskRegistration extends undefined$IBackgroundTaskRegistration {
		name: string;
		taskId: string;
		onprogress: any;
		oncompleted: any;
		unregister(cancelTask: boolean): void;
		allTasks: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Background.IBackgroundTaskRegistration>
	}

	declare export class BackgroundTaskDeferral extends undefined$IBackgroundTaskDeferral {
		complete(): void
	}

	declare export class BackgroundTaskProgressEventArgs extends undefined$IBackgroundTaskProgressEventArgs {
		instanceId: string;
		progress: number
	}

	declare export class BackgroundTaskCompletedEventArgs extends undefined$IBackgroundTaskCompletedEventArgs {
		instanceId: string;
		checkResult(): void
	}

	declare export class BackgroundTaskBuilder extends undefined$IBackgroundTaskBuilder {
		name: string;
		taskEntryPoint: string;
		setTrigger(trigger: Windows.ApplicationModel.Background.IBackgroundTrigger): void;
		addCondition(condition: Windows.ApplicationModel.Background.IBackgroundCondition): void;
		register(): Windows.ApplicationModel.Background.BackgroundTaskRegistration
	}

	declare export class SystemTrigger extends undefined$ISystemTrigger {
		constructor(triggerType: Windows.ApplicationModel.Background.SystemTriggerType, oneShot: boolean): this;
		oneShot: boolean;
		triggerType: Windows.ApplicationModel.Background.SystemTriggerType
	}

	declare export class SystemCondition extends undefined$ISystemCondition {
		constructor(conditionType: Windows.ApplicationModel.Background.SystemConditionType): this;
		conditionType: Windows.ApplicationModel.Background.SystemConditionType
	}

	declare export class NetworkOperatorNotificationTrigger extends undefined$INetworkOperatorNotificationTrigger {
		constructor(networkAccountId: string): this;
		networkAccountId: string
	}

	declare export class TimeTrigger extends undefined$ITimeTrigger {
		constructor(freshnessTime: number, oneShot: boolean): this;
		freshnessTime: number;
		oneShot: boolean
	}

	declare export class MaintenanceTrigger extends undefined$IMaintenanceTrigger {
		constructor(freshnessTime: number, oneShot: boolean): this;
		freshnessTime: number;
		oneShot: boolean
	}

	declare export class NetworkOperatorHotspotAuthenticationTrigger extends undefined$INetworkOperatorHotspotAuthenticationTrigger {
		
	}

	declare export class PushNotificationTrigger extends undefined$IBackgroundTrigger {
		constructor(applicationId: string): this;
		constructor(): this
	}

	
}

declare module 'Contacts' {
		declare export interface IContactField {
		category: Windows.ApplicationModel.Contacts.ContactFieldCategory,
		name: string,
		type: Windows.ApplicationModel.Contacts.ContactFieldType,
		value: string
	}

	declare export interface IContactLocationField {
		city: string,
		country: string,
		postalCode: string,
		region: string,
		street: string,
		unstructuredAddress: string
	}

	declare export interface IContactInstantMessageField {
		displayText: string,
		launchUri: Windows.Foundation.Uri,
		service: string,
		userName: string
	}

	declare export interface IKnownContactFieldStatics {
		email: string,
		instantMessage: string,
		location: string,
		phoneNumber: string,
		convertNameToType(name: string): Windows.ApplicationModel.Contacts.ContactFieldType,
		convertTypeToName(type: Windows.ApplicationModel.Contacts.ContactFieldType): string
	}

	declare export interface IContactInformation {
		customFields: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactField>,
		emails: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactField>,
		instantMessages: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactInstantMessageField>,
		locations: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactLocationField>,
		name: string,
		phoneNumbers: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactField>,
		getThumbnailAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStreamWithContentType>,
		queryCustomFields(
		customName: string
	): Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactField>
	}

	declare export interface IContactPicker {
		commitButtonText: string,
		desiredFields: Windows.Foundation.Collections.IVector<string>,
		selectionMode: Windows.ApplicationModel.Contacts.ContactSelectionMode,
		pickSingleContactAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Contacts.ContactInformation>,
		pickMultipleContactsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactInformation>>
	}

	declare export interface IContact {
		fields: Windows.Foundation.Collections.IVector<Windows.ApplicationModel.Contacts.IContactField>,
		name: string,
		thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	}

	declare export interface IContactFieldFactory {
		createField(
		value: string, type: Windows.ApplicationModel.Contacts.ContactFieldType
	): Windows.ApplicationModel.Contacts.ContactField,
		createField(
		value: string, type: Windows.ApplicationModel.Contacts.ContactFieldType, category: Windows.ApplicationModel.Contacts.ContactFieldCategory
	): Windows.ApplicationModel.Contacts.ContactField,
		createField(
		name: string, value: string, type: Windows.ApplicationModel.Contacts.ContactFieldType, category: Windows.ApplicationModel.Contacts.ContactFieldCategory
	): Windows.ApplicationModel.Contacts.ContactField
	}

	declare export interface IContactLocationFieldFactory {
		createLocation(
		unstructuredAddress: string
	): Windows.ApplicationModel.Contacts.ContactLocationField,
		createLocation(
		unstructuredAddress: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory
	): Windows.ApplicationModel.Contacts.ContactLocationField,
		createLocation(
		unstructuredAddress: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory, street: string, city: string, region: string, country: string, postalCode: string
	): Windows.ApplicationModel.Contacts.ContactLocationField
	}

	declare export interface IContactInstantMessageFieldFactory {
		createInstantMessage(userName: string): Windows.ApplicationModel.Contacts.ContactInstantMessageField,
		createInstantMessage(
		userName: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory
	): Windows.ApplicationModel.Contacts.ContactInstantMessageField,
		createInstantMessage(
		userName: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory, service: string, displayText: string, verb: Windows.Foundation.Uri
	): Windows.ApplicationModel.Contacts.ContactInstantMessageField
	}

		declare export class ContactField extends undefined$IContactField {
		constructor(value: string, type: Windows.ApplicationModel.Contacts.ContactFieldType): this;
		constructor(value: string, type: Windows.ApplicationModel.Contacts.ContactFieldType, category: Windows.ApplicationModel.Contacts.ContactFieldCategory): this;
		constructor(name: string, value: string, type: Windows.ApplicationModel.Contacts.ContactFieldType, category: Windows.ApplicationModel.Contacts.ContactFieldCategory): this;
		category: Windows.ApplicationModel.Contacts.ContactFieldCategory;
		name: string;
		type: Windows.ApplicationModel.Contacts.ContactFieldType;
		value: string
	}

	declare export class ContactLocationField extends undefined$IContactLocationField {
		constructor(unstructuredAddress: string): this;
		constructor(unstructuredAddress: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory): this;
		constructor(unstructuredAddress: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory, street: string, city: string, region: string, country: string, postalCode: string): this;
		city: string;
		country: string;
		postalCode: string;
		region: string;
		street: string;
		unstructuredAddress: string;
		category: Windows.ApplicationModel.Contacts.ContactFieldCategory;
		name: string;
		type: Windows.ApplicationModel.Contacts.ContactFieldType;
		value: string
	}

	declare export class ContactInstantMessageField extends undefined$IContactInstantMessageField {
		constructor(userName: string): this;
		constructor(userName: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory): this;
		constructor(userName: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory, service: string, displayText: string, verb: Windows.Foundation.Uri): this;
		displayText: string;
		launchUri: Windows.Foundation.Uri;
		service: string;
		userName: string;
		category: Windows.ApplicationModel.Contacts.ContactFieldCategory;
		name: string;
		type: Windows.ApplicationModel.Contacts.ContactFieldType;
		value: string
	}

	declare export class KnownContactField  {
		email: string;
		instantMessage: string;
		location: string;
		phoneNumber: string;
		convertNameToType(name: string): Windows.ApplicationModel.Contacts.ContactFieldType;
		convertTypeToName(type: Windows.ApplicationModel.Contacts.ContactFieldType): string
	}

	declare export class ContactInformation extends undefined$IContactInformation {
		customFields: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactField>;
		emails: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactField>;
		instantMessages: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactInstantMessageField>;
		locations: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactLocationField>;
		name: string;
		phoneNumbers: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactField>;
		getThumbnailAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStreamWithContentType>;
		queryCustomFields(
		customName: string
	): Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactField>
	}

	declare export class ContactPicker extends undefined$IContactPicker {
		commitButtonText: string;
		desiredFields: Windows.Foundation.Collections.IVector<string>;
		selectionMode: Windows.ApplicationModel.Contacts.ContactSelectionMode;
		pickSingleContactAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Contacts.ContactInformation>;
		pickMultipleContactsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Contacts.ContactInformation>>
	}

	declare export class Contact extends undefined$IContact {
		fields: Windows.Foundation.Collections.IVector<Windows.ApplicationModel.Contacts.IContactField>;
		name: string;
		thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	}

	declare export class ContactFieldFactory extends undefined$IContactFieldFactory {
		createField(
		value: string, type: Windows.ApplicationModel.Contacts.ContactFieldType
	): Windows.ApplicationModel.Contacts.ContactField;
		createField(
		value: string, type: Windows.ApplicationModel.Contacts.ContactFieldType, category: Windows.ApplicationModel.Contacts.ContactFieldCategory
	): Windows.ApplicationModel.Contacts.ContactField;
		createField(
		name: string, value: string, type: Windows.ApplicationModel.Contacts.ContactFieldType, category: Windows.ApplicationModel.Contacts.ContactFieldCategory
	): Windows.ApplicationModel.Contacts.ContactField;
		createLocation(
		unstructuredAddress: string
	): Windows.ApplicationModel.Contacts.ContactLocationField;
		createLocation(
		unstructuredAddress: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory
	): Windows.ApplicationModel.Contacts.ContactLocationField;
		createLocation(
		unstructuredAddress: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory, street: string, city: string, region: string, country: string, postalCode: string
	): Windows.ApplicationModel.Contacts.ContactLocationField;
		createInstantMessage(userName: string): Windows.ApplicationModel.Contacts.ContactInstantMessageField;
		createInstantMessage(
		userName: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory
	): Windows.ApplicationModel.Contacts.ContactInstantMessageField;
		createInstantMessage(
		userName: string, category: Windows.ApplicationModel.Contacts.ContactFieldCategory, service: string, displayText: string, verb: Windows.Foundation.Uri
	): Windows.ApplicationModel.Contacts.ContactInstantMessageField
	}

	
}

declare module 'Provider' {
		declare export interface IContactRemovedEventArgs {
		id: string
	}

	declare export interface IContactPickerUI {
		desiredFields: Windows.Foundation.Collections.IVectorView<string>,
		selectionMode: Windows.ApplicationModel.Contacts.ContactSelectionMode,
		addContact(
		id: string, contact: Windows.ApplicationModel.Contacts.Contact
	): Windows.ApplicationModel.Contacts.Provider.AddContactResult,
		removeContact(id: string): void,
		containsContact(id: string): boolean,
		oncontactremoved: any
	}

	declare export interface IFileRemovedEventArgs {
		id: string
	}

	declare export interface IFileOpenPickerUI {
		allowedFileTypes: Windows.Foundation.Collections.IVectorView<string>,
		selectionMode: Windows.Storage.Pickers.Provider.FileSelectionMode,
		settingsIdentifier: string,
		title: string,
		addFile(
		id: string, file: Windows.Storage.IStorageFile
	): Windows.Storage.Pickers.Provider.AddFileResult,
		removeFile(id: string): void,
		containsFile(id: string): boolean,
		canAddFile(file: Windows.Storage.IStorageFile): boolean,
		onfileremoved: any,
		onclosing: any
	}

	declare export interface IPickerClosingEventArgs {
		closingOperation: Windows.Storage.Pickers.Provider.PickerClosingOperation,
		isCanceled: boolean
	}

	declare export interface IPickerClosingOperation {
		deadline: Date,
		getDeferral(): Windows.Storage.Pickers.Provider.PickerClosingDeferral
	}

	declare export interface IPickerClosingDeferral {
		complete(): void
	}

	declare export interface IFileSavePickerUI {
		allowedFileTypes: Windows.Foundation.Collections.IVectorView<string>,
		fileName: string,
		settingsIdentifier: string,
		title: string,
		trySetFileName(value: string): Windows.Storage.Pickers.Provider.SetFileNameResult,
		onfilenamechanged: any,
		ontargetfilerequested: any
	}

	declare export interface ITargetFileRequestedEventArgs {
		request: Windows.Storage.Pickers.Provider.TargetFileRequest
	}

	declare export interface ITargetFileRequest {
		targetFile: Windows.Storage.IStorageFile,
		getDeferral(): Windows.Storage.Pickers.Provider.TargetFileRequestDeferral
	}

	declare export interface ITargetFileRequestDeferral {
		complete(): void
	}

	declare export interface ICachedFileUpdaterUI {
		title: string,
		uIStatus: Windows.Storage.Provider.UIStatus,
		updateTarget: Windows.Storage.Provider.CachedFileTarget,
		onfileupdaterequested: any,
		onuirequested: any
	}

	declare export interface IFileUpdateRequestedEventArgs {
		request: Windows.Storage.Provider.FileUpdateRequest
	}

	declare export interface IFileUpdateRequest {
		contentId: string,
		file: Windows.Storage.StorageFile,
		status: Windows.Storage.Provider.FileUpdateStatus,
		getDeferral(): Windows.Storage.Provider.FileUpdateRequestDeferral,
		updateLocalFile(value: Windows.Storage.IStorageFile): void
	}

	declare export interface IFileUpdateRequestDeferral {
		complete(): void
	}

	declare export interface ICachedFileUpdaterStatics {
		setUpdateInformation(
		file: Windows.Storage.IStorageFile, contentId: string, readMode: Windows.Storage.Provider.ReadActivationMode, writeMode: Windows.Storage.Provider.WriteActivationMode, options: Windows.Storage.Provider.CachedFileOptions
	): void
	}

		declare export class ContactRemovedEventArgs extends undefined$IContactRemovedEventArgs {
		id: string
	}

	declare export class ContactPickerUI extends undefined$IContactPickerUI {
		desiredFields: Windows.Foundation.Collections.IVectorView<string>;
		selectionMode: Windows.ApplicationModel.Contacts.ContactSelectionMode;
		addContact(
		id: string, contact: Windows.ApplicationModel.Contacts.Contact
	): Windows.ApplicationModel.Contacts.Provider.AddContactResult;
		removeContact(id: string): void;
		containsContact(id: string): boolean;
		oncontactremoved: any
	}

	declare export class FileRemovedEventArgs extends undefined$IFileRemovedEventArgs {
		id: string
	}

	declare export class FileOpenPickerUI extends undefined$IFileOpenPickerUI {
		allowedFileTypes: Windows.Foundation.Collections.IVectorView<string>;
		selectionMode: Windows.Storage.Pickers.Provider.FileSelectionMode;
		settingsIdentifier: string;
		title: string;
		addFile(
		id: string, file: Windows.Storage.IStorageFile
	): Windows.Storage.Pickers.Provider.AddFileResult;
		removeFile(id: string): void;
		containsFile(id: string): boolean;
		canAddFile(file: Windows.Storage.IStorageFile): boolean;
		onfileremoved: any;
		onclosing: any
	}

	declare export class PickerClosingEventArgs extends undefined$IPickerClosingEventArgs {
		closingOperation: Windows.Storage.Pickers.Provider.PickerClosingOperation;
		isCanceled: boolean
	}

	declare export class PickerClosingOperation extends undefined$IPickerClosingOperation {
		deadline: Date;
		getDeferral(): Windows.Storage.Pickers.Provider.PickerClosingDeferral
	}

	declare export class PickerClosingDeferral extends undefined$IPickerClosingDeferral {
		complete(): void
	}

	declare export class FileSavePickerUI extends undefined$IFileSavePickerUI {
		allowedFileTypes: Windows.Foundation.Collections.IVectorView<string>;
		fileName: string;
		settingsIdentifier: string;
		title: string;
		trySetFileName(value: string): Windows.Storage.Pickers.Provider.SetFileNameResult;
		onfilenamechanged: any;
		ontargetfilerequested: any
	}

	declare export class TargetFileRequestedEventArgs extends undefined$ITargetFileRequestedEventArgs {
		request: Windows.Storage.Pickers.Provider.TargetFileRequest
	}

	declare export class TargetFileRequest extends undefined$ITargetFileRequest {
		targetFile: Windows.Storage.IStorageFile;
		getDeferral(): Windows.Storage.Pickers.Provider.TargetFileRequestDeferral
	}

	declare export class TargetFileRequestDeferral extends undefined$ITargetFileRequestDeferral {
		complete(): void
	}

	declare export class CachedFileUpdaterUI extends undefined$ICachedFileUpdaterUI {
		title: string;
		uIStatus: Windows.Storage.Provider.UIStatus;
		updateTarget: Windows.Storage.Provider.CachedFileTarget;
		onfileupdaterequested: any;
		onuirequested: any
	}

	declare export class FileUpdateRequestedEventArgs extends undefined$IFileUpdateRequestedEventArgs {
		request: Windows.Storage.Provider.FileUpdateRequest
	}

	declare export class FileUpdateRequest extends undefined$IFileUpdateRequest {
		contentId: string;
		file: Windows.Storage.StorageFile;
		status: Windows.Storage.Provider.FileUpdateStatus;
		getDeferral(): Windows.Storage.Provider.FileUpdateRequestDeferral;
		updateLocalFile(value: Windows.Storage.IStorageFile): void
	}

	declare export class FileUpdateRequestDeferral extends undefined$IFileUpdateRequestDeferral {
		complete(): void
	}

	declare export class CachedFileUpdater  {
		setUpdateInformation(
		file: Windows.Storage.IStorageFile, contentId: string, readMode: Windows.Storage.Provider.ReadActivationMode, writeMode: Windows.Storage.Provider.WriteActivationMode, options: Windows.Storage.Provider.CachedFileOptions
	): void
	}

	
}

declare module 'DataTransfer' {
		declare export interface IStandardDataFormatsStatics {
		bitmap: string,
		html: string,
		rtf: string,
		storageItems: string,
		text: string,
		uri: string
	}

	declare export interface IDataPackagePropertySetView {
		applicationListingUri: Windows.Foundation.Uri,
		applicationName: string,
		description: string,
		fileTypes: Windows.Foundation.Collections.IVectorView<string>,
		thumbnail: Windows.Storage.Streams.RandomAccessStreamReference,
		title: string
	}

	declare export interface IDataPackagePropertySet {
		applicationListingUri: Windows.Foundation.Uri,
		applicationName: string,
		description: string,
		fileTypes: Windows.Foundation.Collections.IVector<string>,
		thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference,
		title: string
	}

	declare export interface IDataProviderDeferral {
		complete(): void
	}

	declare export interface IDataProviderRequest {
		deadline: Date,
		formatId: string,
		getDeferral(): Windows.ApplicationModel.DataTransfer.DataProviderDeferral,
		setData(value: any): void
	}

	declare export interface DataProviderHandler {
		(request: Windows.ApplicationModel.DataTransfer.DataProviderRequest): void
	}

	declare export interface IOperationCompletedEventArgs {
		operation: Windows.ApplicationModel.DataTransfer.DataPackageOperation
	}

	declare export interface IDataPackageView {
		availableFormats: Windows.Foundation.Collections.IVectorView<string>,
		properties: Windows.ApplicationModel.DataTransfer.DataPackagePropertySetView,
		requestedOperation: Windows.ApplicationModel.DataTransfer.DataPackageOperation,
		reportOperationCompleted(value: Windows.ApplicationModel.DataTransfer.DataPackageOperation): void,
		contains(formatId: string): boolean,
		getDataAsync(formatId: string): Windows.Foundation.IAsyncOperation<any>,
		getTextAsync(): Windows.Foundation.IAsyncOperation<string>,
		getTextAsync(formatId: string): Windows.Foundation.IAsyncOperation<string>,
		getUriAsync(): Windows.Foundation.IAsyncOperation<Windows.Foundation.Uri>,
		getHtmlFormatAsync(): Windows.Foundation.IAsyncOperation<string>,
		getResourceMapAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IMapView<string, Windows.Storage.Streams.RandomAccessStreamReference>>,
		getRtfAsync(): Windows.Foundation.IAsyncOperation<string>,
		getBitmapAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.RandomAccessStreamReference>,
		getStorageItemsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>
	}

	declare export interface IDataPackage {
		properties: Windows.ApplicationModel.DataTransfer.DataPackagePropertySet,
		requestedOperation: Windows.ApplicationModel.DataTransfer.DataPackageOperation,
		resourceMap: Windows.Foundation.Collections.IMap<string, Windows.Storage.Streams.RandomAccessStreamReference>,
		getView(): Windows.ApplicationModel.DataTransfer.DataPackageView,
		onoperationcompleted: any,
		ondestroyed: any,
		setData(formatId: string, value: any): void,
		setDataProvider(
		formatId: string, delayRenderer: Windows.ApplicationModel.DataTransfer.DataProviderHandler
	): void,
		setText(value: string): void,
		setUri(value: Windows.Foundation.Uri): void,
		setHtmlFormat(value: string): void,
		setRtf(value: string): void,
		setBitmap(value: Windows.Storage.Streams.RandomAccessStreamReference): void,
		setStorageItems(
		value: Windows.Foundation.Collections.IIterable<Windows.Storage.IStorageItem>
	): void,
		setStorageItems(
		value: Windows.Foundation.Collections.IIterable<Windows.Storage.IStorageItem>, readOnly: boolean
	): void
	}

	declare export interface IHtmlFormatHelperStatics {
		getStaticFragment(htmlFormat: string): string,
		createHtmlFormat(htmlFragment: string): string
	}

	declare export interface IClipboardStatics {
		getContent(): Windows.ApplicationModel.DataTransfer.DataPackageView,
		setContent(content: Windows.ApplicationModel.DataTransfer.DataPackage): void,
		flush(): void,
		clear(): void,
		oncontentchanged: any
	}

	declare export interface IDataRequestDeferral {
		complete(): void
	}

	declare export interface IDataRequest {
		data: Windows.ApplicationModel.DataTransfer.DataPackage,
		deadline: Date,
		failWithDisplayText(value: string): void,
		getDeferral(): Windows.ApplicationModel.DataTransfer.DataRequestDeferral
	}

	declare export interface IDataRequestedEventArgs {
		request: Windows.ApplicationModel.DataTransfer.DataRequest
	}

	declare export interface ITargetApplicationChosenEventArgs {
		applicationName: string
	}

	declare export interface IDataTransferManager {
		ondatarequested: any,
		ontargetapplicationchosen: any
	}

	declare export interface IDataTransferManagerStatics {
		showShareUI(): void,
		getForCurrentView(): Windows.ApplicationModel.DataTransfer.DataTransferManager
	}

		declare export class StandardDataFormats  {
		bitmap: string;
		html: string;
		rtf: string;
		storageItems: string;
		text: string;
		uri: string
	}

	declare export class DataPackagePropertySetView extends undefined$IDataPackagePropertySetView {
		applicationListingUri: Windows.Foundation.Uri;
		applicationName: string;
		description: string;
		fileTypes: Windows.Foundation.Collections.IVectorView<string>;
		thumbnail: Windows.Storage.Streams.RandomAccessStreamReference;
		title: string;
		size: number;
		lookup(key: string): any;
		hasKey(key: string): boolean;
		split(
		
	): {
		first: Windows.Foundation.Collections.IMapView<string, any>,
		second: Windows.Foundation.Collections.IMapView<string, any>
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	}

	declare export class DataPackagePropertySet extends undefined$IDataPackagePropertySet {
		applicationListingUri: Windows.Foundation.Uri;
		applicationName: string;
		description: string;
		fileTypes: Windows.Foundation.Collections.IVector<string>;
		thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference;
		title: string;
		size: number;
		lookup(key: string): any;
		hasKey(key: string): boolean;
		getView(): Windows.Foundation.Collections.IMapView<string, any>;
		insert(key: string, value: any): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	}

	declare export class DataProviderDeferral extends undefined$IDataProviderDeferral {
		complete(): void
	}

	declare export class DataProviderRequest extends undefined$IDataProviderRequest {
		deadline: Date;
		formatId: string;
		getDeferral(): Windows.ApplicationModel.DataTransfer.DataProviderDeferral;
		setData(value: any): void
	}

	declare export class OperationCompletedEventArgs extends undefined$IOperationCompletedEventArgs {
		operation: Windows.ApplicationModel.DataTransfer.DataPackageOperation
	}

	declare export class DataPackageView extends undefined$IDataPackageView {
		availableFormats: Windows.Foundation.Collections.IVectorView<string>;
		properties: Windows.ApplicationModel.DataTransfer.DataPackagePropertySetView;
		requestedOperation: Windows.ApplicationModel.DataTransfer.DataPackageOperation;
		reportOperationCompleted(value: Windows.ApplicationModel.DataTransfer.DataPackageOperation): void;
		contains(formatId: string): boolean;
		getDataAsync(formatId: string): Windows.Foundation.IAsyncOperation<any>;
		getTextAsync(): Windows.Foundation.IAsyncOperation<string>;
		getTextAsync(formatId: string): Windows.Foundation.IAsyncOperation<string>;
		getUriAsync(): Windows.Foundation.IAsyncOperation<Windows.Foundation.Uri>;
		getHtmlFormatAsync(): Windows.Foundation.IAsyncOperation<string>;
		getResourceMapAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IMapView<string, Windows.Storage.Streams.RandomAccessStreamReference>>;
		getRtfAsync(): Windows.Foundation.IAsyncOperation<string>;
		getBitmapAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.RandomAccessStreamReference>;
		getStorageItemsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>
	}

	declare export class DataPackage extends undefined$IDataPackage {
		properties: Windows.ApplicationModel.DataTransfer.DataPackagePropertySet;
		requestedOperation: Windows.ApplicationModel.DataTransfer.DataPackageOperation;
		resourceMap: Windows.Foundation.Collections.IMap<string, Windows.Storage.Streams.RandomAccessStreamReference>;
		getView(): Windows.ApplicationModel.DataTransfer.DataPackageView;
		onoperationcompleted: any;
		ondestroyed: any;
		setData(formatId: string, value: any): void;
		setDataProvider(
		formatId: string, delayRenderer: Windows.ApplicationModel.DataTransfer.DataProviderHandler
	): void;
		setText(value: string): void;
		setUri(value: Windows.Foundation.Uri): void;
		setHtmlFormat(value: string): void;
		setRtf(value: string): void;
		setBitmap(value: Windows.Storage.Streams.RandomAccessStreamReference): void;
		setStorageItems(
		value: Windows.Foundation.Collections.IIterable<Windows.Storage.IStorageItem>
	): void;
		setStorageItems(
		value: Windows.Foundation.Collections.IIterable<Windows.Storage.IStorageItem>, readOnly: boolean
	): void
	}

	declare export class HtmlFormatHelper  {
		getStaticFragment(htmlFormat: string): string;
		createHtmlFormat(htmlFragment: string): string
	}

	declare export class Clipboard  {
		getContent(): Windows.ApplicationModel.DataTransfer.DataPackageView;
		setContent(content: Windows.ApplicationModel.DataTransfer.DataPackage): void;
		flush(): void;
		clear(): void;
		oncontentchanged: any
	}

	declare export class DataRequestDeferral extends undefined$IDataRequestDeferral {
		complete(): void
	}

	declare export class DataRequest extends undefined$IDataRequest {
		data: Windows.ApplicationModel.DataTransfer.DataPackage;
		deadline: Date;
		failWithDisplayText(value: string): void;
		getDeferral(): Windows.ApplicationModel.DataTransfer.DataRequestDeferral
	}

	declare export class DataRequestedEventArgs extends undefined$IDataRequestedEventArgs {
		request: Windows.ApplicationModel.DataTransfer.DataRequest
	}

	declare export class TargetApplicationChosenEventArgs extends undefined$ITargetApplicationChosenEventArgs {
		applicationName: string
	}

	declare export class DataTransferManager extends undefined$IDataTransferManager {
		ondatarequested: any;
		ontargetapplicationchosen: any;
		showShareUI(): void;
		getForCurrentView(): Windows.ApplicationModel.DataTransfer.DataTransferManager
	}

	
}

declare module 'Search' {
		declare export interface ISearchPaneQueryLinguisticDetails {
		queryTextAlternatives: Windows.Foundation.Collections.IVectorView<string>,
		queryTextCompositionLength: number,
		queryTextCompositionStart: number
	}

	declare export interface ISearchPaneVisibilityChangedEventArgs {
		visible: boolean
	}

	declare export interface ISearchPaneQueryChangedEventArgs {
		language: string,
		linguisticDetails: Windows.ApplicationModel.Search.SearchPaneQueryLinguisticDetails,
		queryText: string
	}

	declare export interface ISearchPaneQuerySubmittedEventArgs {
		language: string,
		queryText: string
	}

	declare export interface ISearchPaneResultSuggestionChosenEventArgs {
		tag: string
	}

	declare export interface ISearchSuggestionCollection {
		size: number,
		appendQuerySuggestion(text: string): void,
		appendQuerySuggestions(suggestions: Windows.Foundation.Collections.IIterable<string>): void,
		appendResultSuggestion(
		text: string, detailText: string, tag: string, image: Windows.Storage.Streams.IRandomAccessStreamReference, imageAlternateText: string
	): void,
		appendSearchSeparator(label: string): void
	}

	declare export interface ISearchPaneSuggestionsRequestDeferral {
		complete(): void
	}

	declare export interface ISearchPaneSuggestionsRequest {
		isCanceled: boolean,
		searchSuggestionCollection: Windows.ApplicationModel.Search.SearchSuggestionCollection,
		getDeferral(): Windows.ApplicationModel.Search.SearchPaneSuggestionsRequestDeferral
	}

	declare export interface ISearchPaneSuggestionsRequestedEventArgs {
		request: Windows.ApplicationModel.Search.SearchPaneSuggestionsRequest
	}

	declare export interface ILocalContentSuggestionSettings {
		aqsFilter: string,
		enabled: boolean,
		locations: Windows.Foundation.Collections.IVector<Windows.Storage.StorageFolder>,
		propertiesToMatch: Windows.Foundation.Collections.IVector<string>
	}

	declare export interface ISearchPaneStatics {
		getForCurrentView(): Windows.ApplicationModel.Search.SearchPane
	}

	declare export interface ISearchPane {
		language: string,
		placeholderText: string,
		queryText: string,
		searchHistoryContext: string,
		searchHistoryEnabled: boolean,
		showOnKeyboardInput: boolean,
		visible: boolean,
		onvisibilitychanged: any,
		onquerychanged: any,
		onsuggestionsrequested: any,
		onquerysubmitted: any,
		onresultsuggestionchosen: any,
		setLocalContentSuggestionSettings(settings: Windows.ApplicationModel.Search.LocalContentSuggestionSettings): void,
		show(): void,
		show(query: string): void,
		trySetQueryText(query: string): boolean
	}

	declare export interface SortEntry {
		propertyName: string,
		ascendingOrder: boolean
	}

	declare export interface IQueryOptions {
		applicationSearchFilter: string,
		dateStackOption: Windows.Storage.Search.DateStackOption,
		fileTypeFilter: Windows.Foundation.Collections.IVector<string>,
		folderDepth: Windows.Storage.Search.FolderDepth,
		groupPropertyName: string,
		indexerOption: Windows.Storage.Search.IndexerOption,
		language: string,
		sortOrder: Windows.Foundation.Collections.IVector<Windows.Storage.Search.SortEntry>,
		userSearchFilter: string,
		saveToString(): string,
		loadFromString(value: string): void,
		setThumbnailPrefetch(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number, options: Windows.Storage.FileProperties.ThumbnailOptions
	): void,
		setPropertyPrefetch(
		options: Windows.Storage.FileProperties.PropertyPrefetchOptions, propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): void
	}

	declare export interface IQueryOptionsFactory {
		createCommonFileQuery(
		query: Windows.Storage.Search.CommonFileQuery, fileTypeFilter: Windows.Foundation.Collections.IIterable<string>
	): Windows.Storage.Search.QueryOptions,
		createCommonFolderQuery(
		query: Windows.Storage.Search.CommonFolderQuery
	): Windows.Storage.Search.QueryOptions
	}

	declare export interface IStorageQueryResultBase {
		folder: Windows.Storage.StorageFolder,
		getItemCountAsync(): Windows.Foundation.IAsyncOperation<number>,
		oncontentschanged: any,
		onoptionschanged: any,
		findStartIndexAsync(value: any): Windows.Foundation.IAsyncOperation<number>,
		getCurrentQueryOptions(): Windows.Storage.Search.QueryOptions,
		applyNewQueryOptions(newQueryOptions: Windows.Storage.Search.QueryOptions): void
	}

	declare export interface IStorageFileQueryResult {
		getFilesAsync(
		startIndex: number, maxNumberOfItems: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>,
		getFilesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>
	}

	declare export interface IStorageFolderQueryResult {
		getFoldersAsync(
		startIndex: number, maxNumberOfItems: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>,
		getFoldersAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>
	}

	declare export interface IStorageItemQueryResult {
		getItemsAsync(
		startIndex: number, maxNumberOfItems: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>,
		getItemsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>
	}

	declare export interface IStorageFolderQueryOperations {
		getIndexedStateAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.Search.IndexedState>,
		createFileQuery(): Windows.Storage.Search.StorageFileQueryResult,
		createFileQuery(
		query: Windows.Storage.Search.CommonFileQuery
	): Windows.Storage.Search.StorageFileQueryResult,
		createFileQueryWithOptions(
		queryOptions: Windows.Storage.Search.QueryOptions
	): Windows.Storage.Search.StorageFileQueryResult,
		createFolderQuery(): Windows.Storage.Search.StorageFolderQueryResult,
		createFolderQuery(
		query: Windows.Storage.Search.CommonFolderQuery
	): Windows.Storage.Search.StorageFolderQueryResult,
		createFolderQueryWithOptions(
		queryOptions: Windows.Storage.Search.QueryOptions
	): Windows.Storage.Search.StorageFolderQueryResult,
		createItemQuery(): Windows.Storage.Search.StorageItemQueryResult,
		createItemQueryWithOptions(
		queryOptions: Windows.Storage.Search.QueryOptions
	): Windows.Storage.Search.StorageItemQueryResult,
		getFilesAsync(
		query: Windows.Storage.Search.CommonFileQuery, startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>,
		getFilesAsync(
		query: Windows.Storage.Search.CommonFileQuery
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>,
		getFoldersAsync(
		query: Windows.Storage.Search.CommonFolderQuery, startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>,
		getFoldersAsync(
		query: Windows.Storage.Search.CommonFolderQuery
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>,
		getItemsAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>,
		areQueryOptionsSupported(queryOptions: Windows.Storage.Search.QueryOptions): boolean,
		isCommonFolderQuerySupported(query: Windows.Storage.Search.CommonFolderQuery): boolean,
		isCommonFileQuerySupported(query: Windows.Storage.Search.CommonFileQuery): boolean
	}

		declare export class SearchPaneQueryLinguisticDetails extends undefined$ISearchPaneQueryLinguisticDetails {
		queryTextAlternatives: Windows.Foundation.Collections.IVectorView<string>;
		queryTextCompositionLength: number;
		queryTextCompositionStart: number
	}

	declare export class SearchPaneVisibilityChangedEventArgs extends undefined$ISearchPaneVisibilityChangedEventArgs {
		visible: boolean
	}

	declare export class SearchPaneQueryChangedEventArgs extends undefined$ISearchPaneQueryChangedEventArgs {
		language: string;
		linguisticDetails: Windows.ApplicationModel.Search.SearchPaneQueryLinguisticDetails;
		queryText: string
	}

	declare export class SearchPaneQuerySubmittedEventArgs extends undefined$ISearchPaneQuerySubmittedEventArgs {
		language: string;
		queryText: string
	}

	declare export class SearchPaneResultSuggestionChosenEventArgs extends undefined$ISearchPaneResultSuggestionChosenEventArgs {
		tag: string
	}

	declare export class SearchSuggestionCollection extends undefined$ISearchSuggestionCollection {
		size: number;
		appendQuerySuggestion(text: string): void;
		appendQuerySuggestions(suggestions: Windows.Foundation.Collections.IIterable<string>): void;
		appendResultSuggestion(
		text: string, detailText: string, tag: string, image: Windows.Storage.Streams.IRandomAccessStreamReference, imageAlternateText: string
	): void;
		appendSearchSeparator(label: string): void
	}

	declare export class SearchPaneSuggestionsRequestDeferral extends undefined$ISearchPaneSuggestionsRequestDeferral {
		complete(): void
	}

	declare export class SearchPaneSuggestionsRequest extends undefined$ISearchPaneSuggestionsRequest {
		isCanceled: boolean;
		searchSuggestionCollection: Windows.ApplicationModel.Search.SearchSuggestionCollection;
		getDeferral(): Windows.ApplicationModel.Search.SearchPaneSuggestionsRequestDeferral
	}

	declare export class SearchPaneSuggestionsRequestedEventArgs extends undefined$ISearchPaneSuggestionsRequestedEventArgs {
		request: Windows.ApplicationModel.Search.SearchPaneSuggestionsRequest;
		language: string;
		linguisticDetails: Windows.ApplicationModel.Search.SearchPaneQueryLinguisticDetails;
		queryText: string
	}

	declare export class LocalContentSuggestionSettings extends undefined$ILocalContentSuggestionSettings {
		aqsFilter: string;
		enabled: boolean;
		locations: Windows.Foundation.Collections.IVector<Windows.Storage.StorageFolder>;
		propertiesToMatch: Windows.Foundation.Collections.IVector<string>
	}

	declare export class SearchPane extends undefined$ISearchPane {
		language: string;
		placeholderText: string;
		queryText: string;
		searchHistoryContext: string;
		searchHistoryEnabled: boolean;
		showOnKeyboardInput: boolean;
		visible: boolean;
		onvisibilitychanged: any;
		onquerychanged: any;
		onsuggestionsrequested: any;
		onquerysubmitted: any;
		onresultsuggestionchosen: any;
		setLocalContentSuggestionSettings(settings: Windows.ApplicationModel.Search.LocalContentSuggestionSettings): void;
		show(): void;
		show(query: string): void;
		trySetQueryText(query: string): boolean;
		getForCurrentView(): Windows.ApplicationModel.Search.SearchPane
	}

	declare export class QueryOptions extends undefined$IQueryOptions {
		constructor(query: Windows.Storage.Search.CommonFileQuery, fileTypeFilter: Windows.Foundation.Collections.IIterable<string>): this;
		constructor(query: Windows.Storage.Search.CommonFolderQuery): this;
		constructor(): this;
		applicationSearchFilter: string;
		dateStackOption: Windows.Storage.Search.DateStackOption;
		fileTypeFilter: Windows.Foundation.Collections.IVector<string>;
		folderDepth: Windows.Storage.Search.FolderDepth;
		groupPropertyName: string;
		indexerOption: Windows.Storage.Search.IndexerOption;
		language: string;
		sortOrder: Windows.Foundation.Collections.IVector<Windows.Storage.Search.SortEntry>;
		userSearchFilter: string;
		saveToString(): string;
		loadFromString(value: string): void;
		setThumbnailPrefetch(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number, options: Windows.Storage.FileProperties.ThumbnailOptions
	): void;
		setPropertyPrefetch(
		options: Windows.Storage.FileProperties.PropertyPrefetchOptions, propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): void
	}

	declare export class StorageFileQueryResult extends undefined$IStorageFileQueryResult {
		folder: Windows.Storage.StorageFolder;
		getFilesAsync(
		startIndex: number, maxNumberOfItems: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>;
		getFilesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>;
		getItemCountAsync(): Windows.Foundation.IAsyncOperation<number>;
		oncontentschanged: any;
		onoptionschanged: any;
		findStartIndexAsync(value: any): Windows.Foundation.IAsyncOperation<number>;
		getCurrentQueryOptions(): Windows.Storage.Search.QueryOptions;
		applyNewQueryOptions(newQueryOptions: Windows.Storage.Search.QueryOptions): void
	}

	declare export class StorageFolderQueryResult extends undefined$IStorageFolderQueryResult {
		folder: Windows.Storage.StorageFolder;
		getFoldersAsync(
		startIndex: number, maxNumberOfItems: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>;
		getFoldersAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>;
		getItemCountAsync(): Windows.Foundation.IAsyncOperation<number>;
		oncontentschanged: any;
		onoptionschanged: any;
		findStartIndexAsync(value: any): Windows.Foundation.IAsyncOperation<number>;
		getCurrentQueryOptions(): Windows.Storage.Search.QueryOptions;
		applyNewQueryOptions(newQueryOptions: Windows.Storage.Search.QueryOptions): void
	}

	declare export class StorageItemQueryResult extends undefined$IStorageItemQueryResult {
		folder: Windows.Storage.StorageFolder;
		getItemsAsync(
		startIndex: number, maxNumberOfItems: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>;
		getItemsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>;
		getItemCountAsync(): Windows.Foundation.IAsyncOperation<number>;
		oncontentschanged: any;
		onoptionschanged: any;
		findStartIndexAsync(value: any): Windows.Foundation.IAsyncOperation<number>;
		getCurrentQueryOptions(): Windows.Storage.Search.QueryOptions;
		applyNewQueryOptions(newQueryOptions: Windows.Storage.Search.QueryOptions): void
	}

	declare export class SortEntryVector extends undefined$IVector<Windows.Storage.Search.SortEntry> {
		size: number;
		getAt(index: number): Windows.Storage.Search.SortEntry;
		getView(): Windows.Foundation.Collections.IVectorView<Windows.Storage.Search.SortEntry>;
		indexOf(
		value: Windows.Storage.Search.SortEntry
	): {
		index: number,
		returnValue: boolean
	};
		setAt(index: number, value: Windows.Storage.Search.SortEntry): void;
		insertAt(index: number, value: Windows.Storage.Search.SortEntry): void;
		removeAt(index: number): void;
		append(value: Windows.Storage.Search.SortEntry): void;
		removeAtEnd(): void;
		clear(): void;
		getMany(
		startIndex: number
	): {
		items: Windows.Storage.Search.SortEntry[],
		returnValue: number
	};
		replaceAll(items: Windows.Storage.Search.SortEntry[]): void;
		first(): Windows.Foundation.Collections.IIterator<Windows.Storage.Search.SortEntry>;
		toString(): string;
		toLocaleString(): string;
		concat(
		...items: Windows.Storage.Search.SortEntry[][]
	): Windows.Storage.Search.SortEntry[];
		join(seperator: string): string;
		pop(): Windows.Storage.Search.SortEntry;
		push(...items: Windows.Storage.Search.SortEntry[]): void;
		reverse(): Windows.Storage.Search.SortEntry[];
		shift(): Windows.Storage.Search.SortEntry;
		slice(start: number): Windows.Storage.Search.SortEntry[];
		slice(start: number, end: number): Windows.Storage.Search.SortEntry[];
		sort(): Windows.Storage.Search.SortEntry[];
		sort(
		compareFn: (
		a: Windows.Storage.Search.SortEntry, b: Windows.Storage.Search.SortEntry
	) => number
	): Windows.Storage.Search.SortEntry[];
		splice(start: number): Windows.Storage.Search.SortEntry[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Storage.Search.SortEntry[]
	): Windows.Storage.Search.SortEntry[];
		unshift(...items: Windows.Storage.Search.SortEntry[]): number;
		lastIndexOf(searchElement: Windows.Storage.Search.SortEntry): number;
		lastIndexOf(searchElement: Windows.Storage.Search.SortEntry, fromIndex: number): number;
		every(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => boolean
	): Windows.Storage.Search.SortEntry[];
		filter(
		callbackfn: (
		value: Windows.Storage.Search.SortEntry, index: number, array: Windows.Storage.Search.SortEntry[]
	) => boolean, thisArg: any
	): Windows.Storage.Search.SortEntry[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.Search.SortEntry[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.Search.SortEntry[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.Search.SortEntry[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.Search.SortEntry[]
	) => any, initialValue: any
	): any;
		length: number
	}

	
}

declare module 'ShareTarget' {
		declare export interface IQuickLink {
		id: string,
		supportedDataFormats: Windows.Foundation.Collections.IVector<string>,
		supportedFileTypes: Windows.Foundation.Collections.IVector<string>,
		thumbnail: Windows.Storage.Streams.RandomAccessStreamReference,
		title: string
	}

	declare export interface IShareOperation {
		data: Windows.ApplicationModel.DataTransfer.DataPackageView,
		quickLinkId: string,
		removeThisQuickLink(): void,
		reportStarted(): void,
		reportDataRetrieved(): void,
		reportSubmittedBackgroundTask(): void,
		reportCompleted(quicklink: Windows.ApplicationModel.DataTransfer.ShareTarget.QuickLink): void,
		reportCompleted(): void,
		reportError(value: string): void
	}

		declare export class QuickLink extends undefined$IQuickLink {
		id: string;
		supportedDataFormats: Windows.Foundation.Collections.IVector<string>;
		supportedFileTypes: Windows.Foundation.Collections.IVector<string>;
		thumbnail: Windows.Storage.Streams.RandomAccessStreamReference;
		title: string
	}

	declare export class ShareOperation extends undefined$IShareOperation {
		data: Windows.ApplicationModel.DataTransfer.DataPackageView;
		quickLinkId: string;
		removeThisQuickLink(): void;
		reportStarted(): void;
		reportDataRetrieved(): void;
		reportSubmittedBackgroundTask(): void;
		reportCompleted(quicklink: Windows.ApplicationModel.DataTransfer.ShareTarget.QuickLink): void;
		reportCompleted(): void;
		reportError(value: string): void
	}

	
}

declare module 'Activation' {
		declare export interface ISplashScreen {
		imageLocation: Windows.Foundation.Rect,
		ondismissed: any
	}

	declare export interface IActivatedEventArgs {
		kind: Windows.ApplicationModel.Activation.ActivationKind,
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState,
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export interface ILaunchActivatedEventArgs {
		arguments: string,
		tileId: string
	}

	declare export interface ISearchActivatedEventArgs {
		language: string,
		queryText: string
	}

	declare export interface IShareTargetActivatedEventArgs {
		shareOperation: Windows.ApplicationModel.DataTransfer.ShareTarget.ShareOperation
	}

	declare export interface IFileActivatedEventArgs {
		files: Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>,
		verb: string
	}

	declare export interface IProtocolActivatedEventArgs {
		uri: Windows.Foundation.Uri
	}

	declare export interface IFileOpenPickerActivatedEventArgs {
		fileOpenPickerUI: Windows.Storage.Pickers.Provider.FileOpenPickerUI
	}

	declare export interface IFileSavePickerActivatedEventArgs {
		fileSavePickerUI: Windows.Storage.Pickers.Provider.FileSavePickerUI
	}

	declare export interface ICachedFileUpdaterActivatedEventArgs {
		cachedFileUpdaterUI: Windows.Storage.Provider.CachedFileUpdaterUI
	}

	declare export interface IContactPickerActivatedEventArgs {
		contactPickerUI: Windows.ApplicationModel.Contacts.Provider.ContactPickerUI
	}

	declare export interface IDeviceActivatedEventArgs {
		deviceInformationId: string,
		verb: string
	}

	declare export interface IPrintTaskSettingsActivatedEventArgs {
		configuration: Windows.Devices.Printers.Extensions.PrintTaskConfiguration
	}

	declare export interface ICameraSettingsActivatedEventArgs {
		videoDeviceController: any,
		videoDeviceExtension: any
	}

		declare export class SplashScreen extends undefined$ISplashScreen {
		imageLocation: Windows.Foundation.Rect;
		ondismissed: any
	}

	declare export class LaunchActivatedEventArgs extends undefined$ILaunchActivatedEventArgs {
		arguments: string;
		tileId: string;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class SearchActivatedEventArgs extends undefined$ISearchActivatedEventArgs {
		language: string;
		queryText: string;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class ShareTargetActivatedEventArgs extends undefined$IShareTargetActivatedEventArgs {
		shareOperation: Windows.ApplicationModel.DataTransfer.ShareTarget.ShareOperation;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class FileActivatedEventArgs extends undefined$IFileActivatedEventArgs {
		files: Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>;
		verb: string;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class ProtocolActivatedEventArgs extends undefined$IProtocolActivatedEventArgs {
		uri: Windows.Foundation.Uri;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class FileOpenPickerActivatedEventArgs extends undefined$IFileOpenPickerActivatedEventArgs {
		fileOpenPickerUI: Windows.Storage.Pickers.Provider.FileOpenPickerUI;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class FileSavePickerActivatedEventArgs extends undefined$IFileSavePickerActivatedEventArgs {
		fileSavePickerUI: Windows.Storage.Pickers.Provider.FileSavePickerUI;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class CachedFileUpdaterActivatedEventArgs extends undefined$ICachedFileUpdaterActivatedEventArgs {
		cachedFileUpdaterUI: Windows.Storage.Provider.CachedFileUpdaterUI;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class ContactPickerActivatedEventArgs extends undefined$IContactPickerActivatedEventArgs {
		contactPickerUI: Windows.ApplicationModel.Contacts.Provider.ContactPickerUI;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class DeviceActivatedEventArgs extends undefined$IDeviceActivatedEventArgs {
		deviceInformationId: string;
		verb: string;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class PrintTaskSettingsActivatedEventArgs extends undefined$IPrintTaskSettingsActivatedEventArgs {
		configuration: Windows.Devices.Printers.Extensions.PrintTaskConfiguration;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	declare export class CameraSettingsActivatedEventArgs extends undefined$ICameraSettingsActivatedEventArgs {
		videoDeviceController: any;
		videoDeviceExtension: any;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen
	}

	
}

declare module 'Core' {
		declare export interface IFrameworkView {
		initialize(applicationView: Windows.ApplicationModel.Core.CoreApplicationView): void,
		setWindow(window: Windows.UI.Core.CoreWindow): void,
		load(entryPoint: string): void,
		run(): void,
		uninitialize(): void
	}

	declare export interface IFrameworkViewSource {
		createView(): Windows.ApplicationModel.Core.IFrameworkView
	}

	declare export interface ICoreApplication {
		id: string,
		properties: Windows.Foundation.Collections.IPropertySet,
		onsuspending: any,
		onresuming: any,
		getCurrentView(): Windows.ApplicationModel.Core.CoreApplicationView,
		run(viewSource: Windows.ApplicationModel.Core.IFrameworkViewSource): void,
		runWithActivationFactories(activationFactoryCallback: Windows.Foundation.IGetActivationFactory): void
	}

	declare export interface ICoreApplicationUseCount {
		incrementApplicationUseCount(): void,
		decrementApplicationUseCount(): void
	}

	declare export interface ICoreApplicationExit {
		exit(): void,
		onexiting: any
	}

	declare export interface ICoreImmersiveApplication {
		mainView: Windows.ApplicationModel.Core.CoreApplicationView,
		views: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Core.CoreApplicationView>,
		createNewView(
		runtimeType: string, entryPoint: string
	): Windows.ApplicationModel.Core.CoreApplicationView
	}

	declare export interface ICoreApplicationView {
		coreWindow: Windows.UI.Core.CoreWindow,
		isHosted: boolean,
		isMain: boolean,
		onactivated: any
	}

	declare export interface IResourceManager {
		allResourceMaps: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Resources.Core.ResourceMap>,
		defaultContext: Windows.ApplicationModel.Resources.Core.ResourceContext,
		mainResourceMap: Windows.ApplicationModel.Resources.Core.ResourceMap,
		loadPriFiles(
		files: Windows.Foundation.Collections.IIterable<Windows.Storage.IStorageFile>
	): void,
		unloadPriFiles(
		files: Windows.Foundation.Collections.IIterable<Windows.Storage.IStorageFile>
	): void
	}

	declare export interface IResourceManagerStatics {
		current: Windows.ApplicationModel.Resources.Core.ResourceManager,
		isResourceReference(resourceReference: string): boolean
	}

	declare export interface IResourceQualifier {
		isDefault: boolean,
		isMatch: boolean,
		qualifierName: string,
		qualifierValue: string,
		score: number
	}

	declare export interface IResourceContext {
		languages: Windows.Foundation.Collections.IVectorView<string>,
		qualifierValues: Windows.Foundation.Collections.IObservableMap<string, string>,
		reset(): void,
		reset(qualifierNames: Windows.Foundation.Collections.IIterable<string>): void,
		overrideToMatch(
		result: Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Resources.Core.ResourceQualifier>
	): void,
		clone(): Windows.ApplicationModel.Resources.Core.ResourceContext
	}

	declare export interface IResourceContextStatics {
		createMatchingContext(
		result: Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Resources.Core.ResourceQualifier>
	): Windows.ApplicationModel.Resources.Core.ResourceContext
	}

	declare export interface IResourceCandidate {
		isDefault: boolean,
		isMatch: boolean,
		isMatchAsDefault: boolean,
		qualifiers: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Core.ResourceQualifier>,
		valueAsString: string,
		getValueAsFileAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		getQualifierValue(qualifierName: string): string
	}

	declare export interface INamedResource {
		candidates: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Core.ResourceCandidate>,
		uri: Windows.Foundation.Uri,
		resolve(): Windows.ApplicationModel.Resources.Core.ResourceCandidate,
		resolve(
		resourceContext: Windows.ApplicationModel.Resources.Core.ResourceContext
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate,
		resolveAll(
		
	): Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Core.ResourceCandidate>,
		resolveAll(
		resourceContext: Windows.ApplicationModel.Resources.Core.ResourceContext
	): Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Core.ResourceCandidate>
	}

	declare export interface IResourceMap {
		uri: Windows.Foundation.Uri,
		getValue(resource: string): Windows.ApplicationModel.Resources.Core.ResourceCandidate,
		getValue(
		resource: string, context: Windows.ApplicationModel.Resources.Core.ResourceContext
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate,
		getSubtree(reference: string): Windows.ApplicationModel.Resources.Core.ResourceMap
	}

	declare export interface IApplicationDataManagerStatics {
		createForPackageFamily(packageFamilyName: string): Windows.Storage.ApplicationData
	}

	declare export interface IApplicationDataManager {
		
	}

	declare export interface IKeyDerivationParameters {
		iterationCount: number,
		kdfGenericBinary: Windows.Storage.Streams.IBuffer
	}

	declare export interface IKeyDerivationParametersStatics {
		buildForPbkdf2(
		pbkdf2Salt: Windows.Storage.Streams.IBuffer, iterationCount: number
	): Windows.Security.Cryptography.Core.KeyDerivationParameters,
		buildForSP800108(
		label: Windows.Storage.Streams.IBuffer, context: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.KeyDerivationParameters,
		buildForSP80056a(
		algorithmId: Windows.Storage.Streams.IBuffer, partyUInfo: Windows.Storage.Streams.IBuffer, partyVInfo: Windows.Storage.Streams.IBuffer, suppPubInfo: Windows.Storage.Streams.IBuffer, suppPrivInfo: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.KeyDerivationParameters
	}

	declare export interface ICryptographicKey {
		keySize: number,
		export(): Windows.Storage.Streams.IBuffer,
		export(
		BlobType: Windows.Security.Cryptography.Core.CryptographicPrivateKeyBlobType
	): Windows.Storage.Streams.IBuffer,
		exportPublicKey(): Windows.Storage.Streams.IBuffer,
		exportPublicKey(
		BlobType: Windows.Security.Cryptography.Core.CryptographicPublicKeyBlobType
	): Windows.Storage.Streams.IBuffer
	}

	declare export interface IHashComputation {
		append(data: Windows.Storage.Streams.IBuffer): void,
		getValueAndReset(): Windows.Storage.Streams.IBuffer
	}

	declare export interface IHashAlgorithmProvider {
		algorithmName: string,
		hashLength: number,
		hashData(data: Windows.Storage.Streams.IBuffer): Windows.Storage.Streams.IBuffer,
		createHash(): Windows.Security.Cryptography.Core.CryptographicHash
	}

	declare export interface IMacAlgorithmProvider {
		algorithmName: string,
		macLength: number,
		createKey(
		keyMaterial: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey
	}

	declare export interface IKeyDerivationAlgorithmProvider {
		algorithmName: string,
		createKey(
		keyMaterial: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey
	}

	declare export interface ISymmetricKeyAlgorithmProvider {
		algorithmName: string,
		blockLength: number,
		createSymmetricKey(
		keyMaterial: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey
	}

	declare export interface IAsymmetricKeyAlgorithmProvider {
		algorithmName: string,
		createKeyPair(keySize: number): Windows.Security.Cryptography.Core.CryptographicKey,
		importKeyPair(
		keyBlob: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey,
		importKeyPair(
		keyBlob: Windows.Storage.Streams.IBuffer, BlobType: Windows.Security.Cryptography.Core.CryptographicPrivateKeyBlobType
	): Windows.Security.Cryptography.Core.CryptographicKey,
		importPublicKey(
		keyBlob: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey,
		importPublicKey(
		keyBlob: Windows.Storage.Streams.IBuffer, BlobType: Windows.Security.Cryptography.Core.CryptographicPublicKeyBlobType
	): Windows.Security.Cryptography.Core.CryptographicKey
	}

	declare export interface IEncryptedAndAuthenticatedData {
		authenticationTag: Windows.Storage.Streams.IBuffer,
		encryptedData: Windows.Storage.Streams.IBuffer
	}

	declare export interface ICryptographicEngineStatics {
		encrypt(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, iv: Windows.Storage.Streams.IBuffer
	): Windows.Storage.Streams.IBuffer,
		decrypt(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, iv: Windows.Storage.Streams.IBuffer
	): Windows.Storage.Streams.IBuffer,
		encryptAndAuthenticate(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, nonce: Windows.Storage.Streams.IBuffer, authenticatedData: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.EncryptedAndAuthenticatedData,
		decryptAndAuthenticate(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, nonce: Windows.Storage.Streams.IBuffer, authenticationTag: Windows.Storage.Streams.IBuffer, authenticatedData: Windows.Storage.Streams.IBuffer
	): Windows.Storage.Streams.IBuffer,
		sign(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer
	): Windows.Storage.Streams.IBuffer,
		verifySignature(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, signature: Windows.Storage.Streams.IBuffer
	): boolean,
		deriveKeyMaterial(
		key: Windows.Security.Cryptography.Core.CryptographicKey, parameters: Windows.Security.Cryptography.Core.KeyDerivationParameters, desiredKeySize: number
	): Windows.Storage.Streams.IBuffer
	}

	declare export interface IHashAlgorithmProviderStatics {
		openAlgorithm(algorithm: string): Windows.Security.Cryptography.Core.HashAlgorithmProvider
	}

	declare export interface IMacAlgorithmProviderStatics {
		openAlgorithm(algorithm: string): Windows.Security.Cryptography.Core.MacAlgorithmProvider
	}

	declare export interface IKeyDerivationAlgorithmProviderStatics {
		openAlgorithm(
		algorithm: string
	): Windows.Security.Cryptography.Core.KeyDerivationAlgorithmProvider
	}

	declare export interface ISymmetricKeyAlgorithmProviderStatics {
		openAlgorithm(
		algorithm: string
	): Windows.Security.Cryptography.Core.SymmetricKeyAlgorithmProvider
	}

	declare export interface IAsymmetricKeyAlgorithmProviderStatics {
		openAlgorithm(
		algorithm: string
	): Windows.Security.Cryptography.Core.AsymmetricKeyAlgorithmProvider
	}

	declare export interface IHashAlgorithmNamesStatics {
		md5: string,
		sha1: string,
		sha256: string,
		sha384: string,
		sha512: string
	}

	declare export interface IMacAlgorithmNamesStatics {
		aesCmac: string,
		hmacMd5: string,
		hmacSha1: string,
		hmacSha256: string,
		hmacSha384: string,
		hmacSha512: string
	}

	declare export interface ISymmetricAlgorithmNamesStatics {
		aesCbc: string,
		aesCbcPkcs7: string,
		aesCcm: string,
		aesEcb: string,
		aesEcbPkcs7: string,
		aesGcm: string,
		desCbc: string,
		desCbcPkcs7: string,
		desEcb: string,
		desEcbPkcs7: string,
		rc2Cbc: string,
		rc2CbcPkcs7: string,
		rc2Ecb: string,
		rc2EcbPkcs7: string,
		rc4: string,
		tripleDesCbc: string,
		tripleDesCbcPkcs7: string,
		tripleDesEcb: string,
		tripleDesEcbPkcs7: string
	}

	declare export interface IAsymmetricAlgorithmNamesStatics {
		dsaSha1: string,
		dsaSha256: string,
		ecdsaP256Sha256: string,
		ecdsaP384Sha384: string,
		ecdsaP521Sha512: string,
		rsaOaepSha1: string,
		rsaOaepSha256: string,
		rsaOaepSha384: string,
		rsaOaepSha512: string,
		rsaPkcs1: string,
		rsaSignPkcs1Sha1: string,
		rsaSignPkcs1Sha256: string,
		rsaSignPkcs1Sha384: string,
		rsaSignPkcs1Sha512: string,
		rsaSignPssSha1: string,
		rsaSignPssSha256: string,
		rsaSignPssSha384: string,
		rsaSignPssSha512: string
	}

	declare export interface IKeyDerivationAlgorithmNamesStatics {
		pbkdf2Md5: string,
		pbkdf2Sha1: string,
		pbkdf2Sha256: string,
		pbkdf2Sha384: string,
		pbkdf2Sha512: string,
		sp800108CtrHmacMd5: string,
		sp800108CtrHmacSha1: string,
		sp800108CtrHmacSha256: string,
		sp800108CtrHmacSha384: string,
		sp800108CtrHmacSha512: string,
		sp80056aConcatMd5: string,
		sp80056aConcatSha1: string,
		sp80056aConcatSha256: string,
		sp80056aConcatSha384: string,
		sp80056aConcatSha512: string
	}

	declare export interface SignalHandler {
		(signalNotifier: Windows.System.Threading.Core.SignalNotifier, timedOut: boolean): void
	}

	declare export interface ISignalNotifierStatics {
		attachToEvent(
		name: string, handler: Windows.System.Threading.Core.SignalHandler
	): Windows.System.Threading.Core.SignalNotifier,
		attachToEvent(
		name: string, handler: Windows.System.Threading.Core.SignalHandler, timeout: number
	): Windows.System.Threading.Core.SignalNotifier,
		attachToSemaphore(
		name: string, handler: Windows.System.Threading.Core.SignalHandler
	): Windows.System.Threading.Core.SignalNotifier,
		attachToSemaphore(
		name: string, handler: Windows.System.Threading.Core.SignalHandler, timeout: number
	): Windows.System.Threading.Core.SignalNotifier
	}

	declare export interface IPreallocatedWorkItemFactory {
		createWorkItem(
		handler: Windows.System.Threading.WorkItemHandler
	): Windows.System.Threading.Core.PreallocatedWorkItem,
		createWorkItemWithPriority(
		handler: Windows.System.Threading.WorkItemHandler, priority: Windows.System.Threading.WorkItemPriority
	): Windows.System.Threading.Core.PreallocatedWorkItem,
		createWorkItemWithPriorityAndOptions(
		handler: Windows.System.Threading.WorkItemHandler, priority: Windows.System.Threading.WorkItemPriority, options: Windows.System.Threading.WorkItemOptions
	): Windows.System.Threading.Core.PreallocatedWorkItem
	}

	declare export interface IPreallocatedWorkItem {
		runAsync(): Windows.Foundation.IAsyncAction
	}

	declare export interface ISignalNotifier {
		enable(): void,
		terminate(): void
	}

	declare export interface CorePhysicalKeyStatus {
		repeatCount: number,
		scanCode: number,
		isExtendedKey: boolean,
		isMenuKeyDown: boolean,
		wasKeyDown: boolean,
		isKeyReleased: boolean
	}

	declare export interface CoreProximityEvaluation {
		score: number,
		adjustedPoint: Windows.Foundation.Point
	}

	declare export interface ICoreWindowEventArgs {
		handled: boolean
	}

	declare export interface IAutomationProviderRequestedEventArgs {
		automationProvider: any
	}

	declare export interface ICharacterReceivedEventArgs {
		keyCode: number,
		keyStatus: Windows.UI.Core.CorePhysicalKeyStatus
	}

	declare export interface IInputEnabledEventArgs {
		inputEnabled: boolean
	}

	declare export interface IKeyEventArgs {
		keyStatus: Windows.UI.Core.CorePhysicalKeyStatus,
		virtualKey: Windows.System.VirtualKey
	}

	declare export interface IPointerEventArgs {
		currentPoint: Windows.UI.Input.PointerPoint,
		keyModifiers: Windows.System.VirtualKeyModifiers,
		getIntermediatePoints(): Windows.Foundation.Collections.IVector<Windows.UI.Input.PointerPoint>
	}

	declare export interface ITouchHitTestingEventArgs {
		boundingBox: Windows.Foundation.Rect,
		point: Windows.Foundation.Point,
		proximityEvaluation: Windows.UI.Core.CoreProximityEvaluation,
		evaluateProximity(
		controlBoundingBox: Windows.Foundation.Rect
	): Windows.UI.Core.CoreProximityEvaluation,
		evaluateProximity(
		controlVertices: Windows.Foundation.Point[]
	): Windows.UI.Core.CoreProximityEvaluation
	}

	declare export interface IWindowActivatedEventArgs {
		windowActivationState: Windows.UI.Core.CoreWindowActivationState
	}

	declare export interface IWindowSizeChangedEventArgs {
		size: Windows.Foundation.Size
	}

	declare export interface IVisibilityChangedEventArgs {
		visible: boolean
	}

	declare export interface ICoreWindow {
		automationHostProvider: any,
		bounds: Windows.Foundation.Rect,
		customProperties: Windows.Foundation.Collections.IPropertySet,
		dispatcher: Windows.UI.Core.CoreDispatcher,
		flowDirection: Windows.UI.Core.CoreWindowFlowDirection,
		isInputEnabled: boolean,
		pointerCursor: Windows.UI.Core.CoreCursor,
		pointerPosition: Windows.Foundation.Point,
		visible: boolean,
		activate(): void,
		close(): void,
		getAsyncKeyState(virtualKey: Windows.System.VirtualKey): Windows.UI.Core.CoreVirtualKeyStates,
		getKeyState(virtualKey: Windows.System.VirtualKey): Windows.UI.Core.CoreVirtualKeyStates,
		releasePointerCapture(): void,
		setPointerCapture(): void,
		onactivated: any,
		onautomationproviderrequested: any,
		oncharacterreceived: any,
		onclosed: any,
		oninputenabled: any,
		onkeydown: any,
		onkeyup: any,
		onpointercapturelost: any,
		onpointerentered: any,
		onpointerexited: any,
		onpointermoved: any,
		onpointerpressed: any,
		onpointerreleased: any,
		ontouchhittesting: any,
		onpointerwheelchanged: any,
		onsizechanged: any,
		onvisibilitychanged: any
	}

	declare export interface ICoreWindowStatic {
		getForCurrentThread(): Windows.UI.Core.CoreWindow
	}

	declare export interface DispatchedHandler {
		(): void
	}

	declare export interface IdleDispatchedHandler {
		(e: Windows.UI.Core.IdleDispatchedHandlerArgs): void
	}

	declare export interface IAcceleratorKeyEventArgs {
		eventType: Windows.UI.Core.CoreAcceleratorKeyEventType,
		keyStatus: Windows.UI.Core.CorePhysicalKeyStatus,
		virtualKey: Windows.System.VirtualKey
	}

	declare export interface ICoreAcceleratorKeys {
		onacceleratorkeyactivated: any
	}

	declare export interface ICoreDispatcher {
		hasThreadAccess: boolean,
		processEvents(options: Windows.UI.Core.CoreProcessEventsOption): void,
		runAsync(
		priority: Windows.UI.Core.CoreDispatcherPriority, agileCallback: Windows.UI.Core.DispatchedHandler
	): Windows.Foundation.IAsyncAction,
		runIdleAsync(
		agileCallback: Windows.UI.Core.IdleDispatchedHandler
	): Windows.Foundation.IAsyncAction
	}

	declare export interface IIdleDispatchedHandlerArgs {
		isDispatcherIdle: boolean
	}

	declare export interface ICoreCursor {
		id: number,
		type: Windows.UI.Core.CoreCursorType
	}

	declare export interface ICoreCursorFactory {
		createCursor(type: Windows.UI.Core.CoreCursorType, id: number): Windows.UI.Core.CoreCursor
	}

	declare export interface IInitializeWithCoreWindow {
		initialize(window: Windows.UI.Core.CoreWindow): void
	}

	declare export interface ICoreWindowResizeManager {
		notifyLayoutCompleted(): void
	}

	declare export interface ICoreWindowResizeManagerStatics {
		getForCurrentView(): Windows.UI.Core.CoreWindowResizeManager
	}

	declare export interface ICoreWindowPopupShowingEventArgs {
		setDesiredSize(value: Windows.Foundation.Size): void
	}

	declare export interface ICoreWindowDialog {
		backButtonCommand: Windows.UI.Popups.UICommandInvokedHandler,
		cancelCommandIndex: number,
		commands: Windows.Foundation.Collections.IVector<Windows.UI.Popups.IUICommand>,
		defaultCommandIndex: number,
		isInteractionDelayed: number,
		maxSize: Windows.Foundation.Size,
		minSize: Windows.Foundation.Size,
		title: string,
		onshowing: any,
		showAsync(): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>
	}

	declare export interface ICoreWindowDialogFactory {
		createWithTitle(title: string): Windows.UI.Core.CoreWindowDialog
	}

	declare export interface ICoreWindowFlyout {
		backButtonCommand: Windows.UI.Popups.UICommandInvokedHandler,
		commands: Windows.Foundation.Collections.IVector<Windows.UI.Popups.IUICommand>,
		defaultCommandIndex: number,
		isInteractionDelayed: number,
		maxSize: Windows.Foundation.Size,
		minSize: Windows.Foundation.Size,
		title: string,
		onshowing: any,
		showAsync(): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>
	}

	declare export interface ICoreWindowFlyoutFactory {
		create(position: Windows.Foundation.Point): Windows.UI.Core.CoreWindowFlyout,
		createWithTitle(
		position: Windows.Foundation.Point, title: string
	): Windows.UI.Core.CoreWindowFlyout
	}

		declare export class CoreApplication  {
		mainView: Windows.ApplicationModel.Core.CoreApplicationView;
		views: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Core.CoreApplicationView>;
		id: string;
		properties: Windows.Foundation.Collections.IPropertySet;
		incrementApplicationUseCount(): void;
		decrementApplicationUseCount(): void;
		createNewView(
		runtimeType: string, entryPoint: string
	): Windows.ApplicationModel.Core.CoreApplicationView;
		exit(): void;
		onexiting: any;
		onsuspending: any;
		onresuming: any;
		getCurrentView(): Windows.ApplicationModel.Core.CoreApplicationView;
		run(viewSource: Windows.ApplicationModel.Core.IFrameworkViewSource): void;
		runWithActivationFactories(activationFactoryCallback: Windows.Foundation.IGetActivationFactory): void
	}

	declare export class CoreApplicationView extends undefined$ICoreApplicationView {
		coreWindow: Windows.UI.Core.CoreWindow;
		isHosted: boolean;
		isMain: boolean;
		onactivated: any
	}

	declare export class ResourceMap extends undefined$IResourceMap {
		uri: Windows.Foundation.Uri;
		size: number;
		getValue(resource: string): Windows.ApplicationModel.Resources.Core.ResourceCandidate;
		getValue(
		resource: string, context: Windows.ApplicationModel.Resources.Core.ResourceContext
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate;
		getSubtree(reference: string): Windows.ApplicationModel.Resources.Core.ResourceMap;
		lookup(key: string): Windows.ApplicationModel.Resources.Core.NamedResource;
		hasKey(key: string): boolean;
		split(
		
	): {
		first: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Resources.Core.NamedResource>,
		second: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Resources.Core.NamedResource>
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, Windows.ApplicationModel.Resources.Core.NamedResource>>
	}

	declare export class ResourceContext extends undefined$IResourceContext {
		languages: Windows.Foundation.Collections.IVectorView<string>;
		qualifierValues: Windows.Foundation.Collections.IObservableMap<string, string>;
		reset(): void;
		reset(qualifierNames: Windows.Foundation.Collections.IIterable<string>): void;
		overrideToMatch(
		result: Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Resources.Core.ResourceQualifier>
	): void;
		clone(): Windows.ApplicationModel.Resources.Core.ResourceContext;
		createMatchingContext(
		result: Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Resources.Core.ResourceQualifier>
	): Windows.ApplicationModel.Resources.Core.ResourceContext
	}

	declare export class ResourceManager extends undefined$IResourceManager {
		allResourceMaps: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Resources.Core.ResourceMap>;
		defaultContext: Windows.ApplicationModel.Resources.Core.ResourceContext;
		mainResourceMap: Windows.ApplicationModel.Resources.Core.ResourceMap;
		loadPriFiles(
		files: Windows.Foundation.Collections.IIterable<Windows.Storage.IStorageFile>
	): void;
		unloadPriFiles(
		files: Windows.Foundation.Collections.IIterable<Windows.Storage.IStorageFile>
	): void;
		current: Windows.ApplicationModel.Resources.Core.ResourceManager;
		isResourceReference(resourceReference: string): boolean
	}

	declare export class ResourceQualifier extends undefined$IResourceQualifier {
		isDefault: boolean;
		isMatch: boolean;
		qualifierName: string;
		qualifierValue: string;
		score: number
	}

	declare export class ResourceCandidate extends undefined$IResourceCandidate {
		isDefault: boolean;
		isMatch: boolean;
		isMatchAsDefault: boolean;
		qualifiers: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Core.ResourceQualifier>;
		valueAsString: string;
		getValueAsFileAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		getQualifierValue(qualifierName: string): string
	}

	declare export class NamedResource extends undefined$INamedResource {
		candidates: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Core.ResourceCandidate>;
		uri: Windows.Foundation.Uri;
		resolve(): Windows.ApplicationModel.Resources.Core.ResourceCandidate;
		resolve(
		resourceContext: Windows.ApplicationModel.Resources.Core.ResourceContext
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate;
		resolveAll(
		
	): Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Core.ResourceCandidate>;
		resolveAll(
		resourceContext: Windows.ApplicationModel.Resources.Core.ResourceContext
	): Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Core.ResourceCandidate>
	}

	declare export class ResourceMapIterator extends undefined$IIterator<Windows.Foundation.Collections.IKeyValuePair<string, Windows.ApplicationModel.Resources.Core.NamedResource>> {
		current: Windows.Foundation.Collections.IKeyValuePair<string, Windows.ApplicationModel.Resources.Core.NamedResource>;
		hasCurrent: boolean;
		moveNext(): boolean;
		getMany(
		
	): {
		items: Windows.Foundation.Collections.IKeyValuePair<string, Windows.ApplicationModel.Resources.Core.NamedResource>[],
		returnValue: number
	}
	}

	declare export class ResourceMapMapView extends undefined$IMapView<string, Windows.ApplicationModel.Resources.Core.ResourceMap> {
		size: number;
		lookup(key: string): Windows.ApplicationModel.Resources.Core.ResourceMap;
		hasKey(key: string): boolean;
		split(
		
	): {
		first: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Resources.Core.ResourceMap>,
		second: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Resources.Core.ResourceMap>
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, Windows.ApplicationModel.Resources.Core.ResourceMap>>
	}

	declare export class ResourceMapMapViewIterator extends undefined$IIterator<Windows.Foundation.Collections.IKeyValuePair<string, Windows.ApplicationModel.Resources.Core.ResourceMap>> {
		current: Windows.Foundation.Collections.IKeyValuePair<string, Windows.ApplicationModel.Resources.Core.ResourceMap>;
		hasCurrent: boolean;
		moveNext(): boolean;
		getMany(
		
	): {
		items: Windows.Foundation.Collections.IKeyValuePair<string, Windows.ApplicationModel.Resources.Core.ResourceMap>[],
		returnValue: number
	}
	}

	declare export class ResourceQualifierObservableMap extends undefined$IObservableMap<string, string> {
		size: number;
		onmapchanged: any;
		lookup(key: string): string;
		hasKey(key: string): boolean;
		getView(): Windows.Foundation.Collections.IMapView<string, string>;
		insert(key: string, value: string): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, string>>
	}

	declare export class ResourceQualifierMapView extends undefined$IMapView<string, string> {
		size: number;
		lookup(key: string): string;
		hasKey(key: string): boolean;
		split(
		
	): {
		first: Windows.Foundation.Collections.IMapView<string, string>,
		second: Windows.Foundation.Collections.IMapView<string, string>
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, string>>
	}

	declare export class ResourceQualifierVectorView extends undefined$IVectorView<Windows.ApplicationModel.Resources.Core.ResourceQualifier> {
		size: number;
		getAt(index: number): Windows.ApplicationModel.Resources.Core.ResourceQualifier;
		indexOf(
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.ApplicationModel.Resources.Core.ResourceQualifier[],
		returnValue: number
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.ApplicationModel.Resources.Core.ResourceQualifier>;
		toString(): string;
		toLocaleString(): string;
		concat(
		...items: Windows.ApplicationModel.Resources.Core.ResourceQualifier[][]
	): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		join(seperator: string): string;
		pop(): Windows.ApplicationModel.Resources.Core.ResourceQualifier;
		push(...items: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]): void;
		reverse(): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		shift(): Windows.ApplicationModel.Resources.Core.ResourceQualifier;
		slice(start: number): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		slice(
		start: number, end: number
	): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		sort(): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		sort(
		compareFn: (
		a: Windows.ApplicationModel.Resources.Core.ResourceQualifier, b: Windows.ApplicationModel.Resources.Core.ResourceQualifier
	) => number
	): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		splice(start: number): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		splice(
		start: number, deleteCount: number, ...items: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		unshift(...items: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]): number;
		lastIndexOf(
		searchElement: Windows.ApplicationModel.Resources.Core.ResourceQualifier
	): number;
		lastIndexOf(
		searchElement: Windows.ApplicationModel.Resources.Core.ResourceQualifier, fromIndex: number
	): number;
		every(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => boolean
	): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		filter(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceQualifier, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => boolean, thisArg: any
	): Windows.ApplicationModel.Resources.Core.ResourceQualifier[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.ApplicationModel.Resources.Core.ResourceQualifier[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class ResourceCandidateVectorView extends undefined$IVectorView<Windows.ApplicationModel.Resources.Core.ResourceCandidate> {
		size: number;
		getAt(index: number): Windows.ApplicationModel.Resources.Core.ResourceCandidate;
		indexOf(
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.ApplicationModel.Resources.Core.ResourceCandidate[],
		returnValue: number
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.ApplicationModel.Resources.Core.ResourceCandidate>;
		toString(): string;
		toLocaleString(): string;
		concat(
		...items: Windows.ApplicationModel.Resources.Core.ResourceCandidate[][]
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		join(seperator: string): string;
		pop(): Windows.ApplicationModel.Resources.Core.ResourceCandidate;
		push(...items: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]): void;
		reverse(): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		shift(): Windows.ApplicationModel.Resources.Core.ResourceCandidate;
		slice(start: number): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		slice(
		start: number, end: number
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		sort(): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		sort(
		compareFn: (
		a: Windows.ApplicationModel.Resources.Core.ResourceCandidate, b: Windows.ApplicationModel.Resources.Core.ResourceCandidate
	) => number
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		splice(start: number): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		splice(
		start: number, deleteCount: number, ...items: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		unshift(...items: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]): number;
		lastIndexOf(
		searchElement: Windows.ApplicationModel.Resources.Core.ResourceCandidate
	): number;
		lastIndexOf(
		searchElement: Windows.ApplicationModel.Resources.Core.ResourceCandidate, fromIndex: number
	): number;
		every(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => boolean
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		filter(
		callbackfn: (
		value: Windows.ApplicationModel.Resources.Core.ResourceCandidate, index: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => boolean, thisArg: any
	): Windows.ApplicationModel.Resources.Core.ResourceCandidate[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.ApplicationModel.Resources.Core.ResourceCandidate[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class ResourceContextLanguagesVectorView extends undefined$IVectorView<string> {
		size: number;
		getAt(index: number): string;
		indexOf(value: string): {
		index: number,
		returnValue: boolean
	};
		getMany(startIndex: number): {
		items: string[],
		returnValue: number
	};
		first(): Windows.Foundation.Collections.IIterator<string>;
		toString(): string;
		toLocaleString(): string;
		concat(...items: string[][]): string[];
		join(seperator: string): string;
		pop(): string;
		push(...items: string[]): void;
		reverse(): string[];
		shift(): string;
		slice(start: number): string[];
		slice(start: number, end: number): string[];
		sort(): string[];
		sort(compareFn: (a: string, b: string) => number): string[];
		splice(start: number): string[];
		splice(start: number, deleteCount: number, ...items: string[]): string[];
		unshift(...items: string[]): number;
		lastIndexOf(searchElement: string): number;
		lastIndexOf(searchElement: string, fromIndex: number): number;
		every(
		callbackfn: (value: string, index: number, array: string[]) => boolean
	): boolean;
		every(
		callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (value: string, index: number, array: string[]) => boolean
	): boolean;
		some(
		callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg: any
	): boolean;
		forEach(callbackfn: (value: string, index: number, array: string[]) => void): void;
		forEach(
		callbackfn: (value: string, index: number, array: string[]) => void, thisArg: any
	): void;
		map(callbackfn: (value: string, index: number, array: string[]) => any): any[];
		map(
		callbackfn: (value: string, index: number, array: string[]) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (value: string, index: number, array: string[]) => boolean
	): string[];
		filter(
		callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg: any
	): string[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: string[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: string[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: string[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: string[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class ApplicationDataManager extends undefined$IApplicationDataManager {
		createForPackageFamily(packageFamilyName: string): Windows.Storage.ApplicationData
	}

	declare export class KeyDerivationParameters extends undefined$IKeyDerivationParameters {
		iterationCount: number;
		kdfGenericBinary: Windows.Storage.Streams.IBuffer;
		buildForPbkdf2(
		pbkdf2Salt: Windows.Storage.Streams.IBuffer, iterationCount: number
	): Windows.Security.Cryptography.Core.KeyDerivationParameters;
		buildForSP800108(
		label: Windows.Storage.Streams.IBuffer, context: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.KeyDerivationParameters;
		buildForSP80056a(
		algorithmId: Windows.Storage.Streams.IBuffer, partyUInfo: Windows.Storage.Streams.IBuffer, partyVInfo: Windows.Storage.Streams.IBuffer, suppPubInfo: Windows.Storage.Streams.IBuffer, suppPrivInfo: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.KeyDerivationParameters
	}

	declare export class CryptographicKey extends undefined$ICryptographicKey {
		keySize: number;
		export(): Windows.Storage.Streams.IBuffer;
		export(
		BlobType: Windows.Security.Cryptography.Core.CryptographicPrivateKeyBlobType
	): Windows.Storage.Streams.IBuffer;
		exportPublicKey(): Windows.Storage.Streams.IBuffer;
		exportPublicKey(
		BlobType: Windows.Security.Cryptography.Core.CryptographicPublicKeyBlobType
	): Windows.Storage.Streams.IBuffer
	}

	declare export class CryptographicHash extends undefined$IHashComputation {
		append(data: Windows.Storage.Streams.IBuffer): void;
		getValueAndReset(): Windows.Storage.Streams.IBuffer
	}

	declare export class EncryptedAndAuthenticatedData extends undefined$IEncryptedAndAuthenticatedData {
		authenticationTag: Windows.Storage.Streams.IBuffer;
		encryptedData: Windows.Storage.Streams.IBuffer
	}

	declare export class CryptographicEngine  {
		encrypt(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, iv: Windows.Storage.Streams.IBuffer
	): Windows.Storage.Streams.IBuffer;
		decrypt(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, iv: Windows.Storage.Streams.IBuffer
	): Windows.Storage.Streams.IBuffer;
		encryptAndAuthenticate(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, nonce: Windows.Storage.Streams.IBuffer, authenticatedData: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.EncryptedAndAuthenticatedData;
		decryptAndAuthenticate(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, nonce: Windows.Storage.Streams.IBuffer, authenticationTag: Windows.Storage.Streams.IBuffer, authenticatedData: Windows.Storage.Streams.IBuffer
	): Windows.Storage.Streams.IBuffer;
		sign(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer
	): Windows.Storage.Streams.IBuffer;
		verifySignature(
		key: Windows.Security.Cryptography.Core.CryptographicKey, data: Windows.Storage.Streams.IBuffer, signature: Windows.Storage.Streams.IBuffer
	): boolean;
		deriveKeyMaterial(
		key: Windows.Security.Cryptography.Core.CryptographicKey, parameters: Windows.Security.Cryptography.Core.KeyDerivationParameters, desiredKeySize: number
	): Windows.Storage.Streams.IBuffer
	}

	declare export class HashAlgorithmProvider extends undefined$IHashAlgorithmProvider {
		algorithmName: string;
		hashLength: number;
		hashData(data: Windows.Storage.Streams.IBuffer): Windows.Storage.Streams.IBuffer;
		createHash(): Windows.Security.Cryptography.Core.CryptographicHash;
		openAlgorithm(algorithm: string): Windows.Security.Cryptography.Core.HashAlgorithmProvider
	}

	declare export class MacAlgorithmProvider extends undefined$IMacAlgorithmProvider {
		algorithmName: string;
		macLength: number;
		createKey(
		keyMaterial: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey;
		openAlgorithm(algorithm: string): Windows.Security.Cryptography.Core.MacAlgorithmProvider
	}

	declare export class KeyDerivationAlgorithmProvider extends undefined$IKeyDerivationAlgorithmProvider {
		algorithmName: string;
		createKey(
		keyMaterial: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey;
		openAlgorithm(
		algorithm: string
	): Windows.Security.Cryptography.Core.KeyDerivationAlgorithmProvider
	}

	declare export class SymmetricKeyAlgorithmProvider extends undefined$ISymmetricKeyAlgorithmProvider {
		algorithmName: string;
		blockLength: number;
		createSymmetricKey(
		keyMaterial: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey;
		openAlgorithm(
		algorithm: string
	): Windows.Security.Cryptography.Core.SymmetricKeyAlgorithmProvider
	}

	declare export class AsymmetricKeyAlgorithmProvider extends undefined$IAsymmetricKeyAlgorithmProvider {
		algorithmName: string;
		createKeyPair(keySize: number): Windows.Security.Cryptography.Core.CryptographicKey;
		importKeyPair(
		keyBlob: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey;
		importKeyPair(
		keyBlob: Windows.Storage.Streams.IBuffer, BlobType: Windows.Security.Cryptography.Core.CryptographicPrivateKeyBlobType
	): Windows.Security.Cryptography.Core.CryptographicKey;
		importPublicKey(
		keyBlob: Windows.Storage.Streams.IBuffer
	): Windows.Security.Cryptography.Core.CryptographicKey;
		importPublicKey(
		keyBlob: Windows.Storage.Streams.IBuffer, BlobType: Windows.Security.Cryptography.Core.CryptographicPublicKeyBlobType
	): Windows.Security.Cryptography.Core.CryptographicKey;
		openAlgorithm(
		algorithm: string
	): Windows.Security.Cryptography.Core.AsymmetricKeyAlgorithmProvider
	}

	declare export class HashAlgorithmNames  {
		md5: string;
		sha1: string;
		sha256: string;
		sha384: string;
		sha512: string
	}

	declare export class MacAlgorithmNames  {
		aesCmac: string;
		hmacMd5: string;
		hmacSha1: string;
		hmacSha256: string;
		hmacSha384: string;
		hmacSha512: string
	}

	declare export class SymmetricAlgorithmNames  {
		aesCbc: string;
		aesCbcPkcs7: string;
		aesCcm: string;
		aesEcb: string;
		aesEcbPkcs7: string;
		aesGcm: string;
		desCbc: string;
		desCbcPkcs7: string;
		desEcb: string;
		desEcbPkcs7: string;
		rc2Cbc: string;
		rc2CbcPkcs7: string;
		rc2Ecb: string;
		rc2EcbPkcs7: string;
		rc4: string;
		tripleDesCbc: string;
		tripleDesCbcPkcs7: string;
		tripleDesEcb: string;
		tripleDesEcbPkcs7: string
	}

	declare export class AsymmetricAlgorithmNames  {
		dsaSha1: string;
		dsaSha256: string;
		ecdsaP256Sha256: string;
		ecdsaP384Sha384: string;
		ecdsaP521Sha512: string;
		rsaOaepSha1: string;
		rsaOaepSha256: string;
		rsaOaepSha384: string;
		rsaOaepSha512: string;
		rsaPkcs1: string;
		rsaSignPkcs1Sha1: string;
		rsaSignPkcs1Sha256: string;
		rsaSignPkcs1Sha384: string;
		rsaSignPkcs1Sha512: string;
		rsaSignPssSha1: string;
		rsaSignPssSha256: string;
		rsaSignPssSha384: string;
		rsaSignPssSha512: string
	}

	declare export class KeyDerivationAlgorithmNames  {
		pbkdf2Md5: string;
		pbkdf2Sha1: string;
		pbkdf2Sha256: string;
		pbkdf2Sha384: string;
		pbkdf2Sha512: string;
		sp800108CtrHmacMd5: string;
		sp800108CtrHmacSha1: string;
		sp800108CtrHmacSha256: string;
		sp800108CtrHmacSha384: string;
		sp800108CtrHmacSha512: string;
		sp80056aConcatMd5: string;
		sp80056aConcatSha1: string;
		sp80056aConcatSha256: string;
		sp80056aConcatSha384: string;
		sp80056aConcatSha512: string
	}

	declare export class SignalNotifier extends undefined$ISignalNotifier {
		enable(): void;
		terminate(): void;
		attachToEvent(
		name: string, handler: Windows.System.Threading.Core.SignalHandler
	): Windows.System.Threading.Core.SignalNotifier;
		attachToEvent(
		name: string, handler: Windows.System.Threading.Core.SignalHandler, timeout: number
	): Windows.System.Threading.Core.SignalNotifier;
		attachToSemaphore(
		name: string, handler: Windows.System.Threading.Core.SignalHandler
	): Windows.System.Threading.Core.SignalNotifier;
		attachToSemaphore(
		name: string, handler: Windows.System.Threading.Core.SignalHandler, timeout: number
	): Windows.System.Threading.Core.SignalNotifier
	}

	declare export class PreallocatedWorkItem extends undefined$IPreallocatedWorkItem {
		constructor(handler: Windows.System.Threading.WorkItemHandler): this;
		constructor(handler: Windows.System.Threading.WorkItemHandler, priority: Windows.System.Threading.WorkItemPriority): this;
		constructor(handler: Windows.System.Threading.WorkItemHandler, priority: Windows.System.Threading.WorkItemPriority, options: Windows.System.Threading.WorkItemOptions): this;
		runAsync(): Windows.Foundation.IAsyncAction
	}

	declare export class CoreDispatcher extends undefined$ICoreDispatcher {
		hasThreadAccess: boolean;
		processEvents(options: Windows.UI.Core.CoreProcessEventsOption): void;
		runAsync(
		priority: Windows.UI.Core.CoreDispatcherPriority, agileCallback: Windows.UI.Core.DispatchedHandler
	): Windows.Foundation.IAsyncAction;
		runIdleAsync(
		agileCallback: Windows.UI.Core.IdleDispatchedHandler
	): Windows.Foundation.IAsyncAction;
		onacceleratorkeyactivated: any
	}

	declare export class CoreCursor extends undefined$ICoreCursor {
		constructor(type: Windows.UI.Core.CoreCursorType, id: number): this;
		id: number;
		type: Windows.UI.Core.CoreCursorType
	}

	declare export class CoreWindow extends undefined$ICoreWindow {
		automationHostProvider: any;
		bounds: Windows.Foundation.Rect;
		customProperties: Windows.Foundation.Collections.IPropertySet;
		dispatcher: Windows.UI.Core.CoreDispatcher;
		flowDirection: Windows.UI.Core.CoreWindowFlowDirection;
		isInputEnabled: boolean;
		pointerCursor: Windows.UI.Core.CoreCursor;
		pointerPosition: Windows.Foundation.Point;
		visible: boolean;
		activate(): void;
		close(): void;
		getAsyncKeyState(virtualKey: Windows.System.VirtualKey): Windows.UI.Core.CoreVirtualKeyStates;
		getKeyState(virtualKey: Windows.System.VirtualKey): Windows.UI.Core.CoreVirtualKeyStates;
		releasePointerCapture(): void;
		setPointerCapture(): void;
		onactivated: any;
		onautomationproviderrequested: any;
		oncharacterreceived: any;
		onclosed: any;
		oninputenabled: any;
		onkeydown: any;
		onkeyup: any;
		onpointercapturelost: any;
		onpointerentered: any;
		onpointerexited: any;
		onpointermoved: any;
		onpointerpressed: any;
		onpointerreleased: any;
		ontouchhittesting: any;
		onpointerwheelchanged: any;
		onsizechanged: any;
		onvisibilitychanged: any;
		getForCurrentThread(): Windows.UI.Core.CoreWindow
	}

	declare export class WindowActivatedEventArgs extends undefined$IWindowActivatedEventArgs {
		windowActivationState: Windows.UI.Core.CoreWindowActivationState;
		handled: boolean
	}

	declare export class AutomationProviderRequestedEventArgs extends undefined$IAutomationProviderRequestedEventArgs {
		automationProvider: any;
		handled: boolean
	}

	declare export class CharacterReceivedEventArgs extends undefined$ICharacterReceivedEventArgs {
		keyCode: number;
		keyStatus: Windows.UI.Core.CorePhysicalKeyStatus;
		handled: boolean
	}

	declare export class CoreWindowEventArgs extends undefined$ICoreWindowEventArgs {
		handled: boolean
	}

	declare export class InputEnabledEventArgs extends undefined$IInputEnabledEventArgs {
		inputEnabled: boolean;
		handled: boolean
	}

	declare export class KeyEventArgs extends undefined$IKeyEventArgs {
		keyStatus: Windows.UI.Core.CorePhysicalKeyStatus;
		virtualKey: Windows.System.VirtualKey;
		handled: boolean
	}

	declare export class PointerEventArgs extends undefined$IPointerEventArgs {
		currentPoint: Windows.UI.Input.PointerPoint;
		keyModifiers: Windows.System.VirtualKeyModifiers;
		handled: boolean;
		getIntermediatePoints(): Windows.Foundation.Collections.IVector<Windows.UI.Input.PointerPoint>
	}

	declare export class TouchHitTestingEventArgs extends undefined$ITouchHitTestingEventArgs {
		boundingBox: Windows.Foundation.Rect;
		point: Windows.Foundation.Point;
		proximityEvaluation: Windows.UI.Core.CoreProximityEvaluation;
		handled: boolean;
		evaluateProximity(
		controlBoundingBox: Windows.Foundation.Rect
	): Windows.UI.Core.CoreProximityEvaluation;
		evaluateProximity(
		controlVertices: Windows.Foundation.Point[]
	): Windows.UI.Core.CoreProximityEvaluation
	}

	declare export class WindowSizeChangedEventArgs extends undefined$IWindowSizeChangedEventArgs {
		size: Windows.Foundation.Size;
		handled: boolean
	}

	declare export class VisibilityChangedEventArgs extends undefined$IVisibilityChangedEventArgs {
		visible: boolean;
		handled: boolean
	}

	declare export class IdleDispatchedHandlerArgs extends undefined$IIdleDispatchedHandlerArgs {
		isDispatcherIdle: boolean
	}

	declare export class AcceleratorKeyEventArgs extends undefined$IAcceleratorKeyEventArgs {
		eventType: Windows.UI.Core.CoreAcceleratorKeyEventType;
		keyStatus: Windows.UI.Core.CorePhysicalKeyStatus;
		virtualKey: Windows.System.VirtualKey;
		handled: boolean
	}

	declare export class CoreAcceleratorKeys extends undefined$ICoreAcceleratorKeys {
		onacceleratorkeyactivated: any
	}

	declare export class CoreWindowResizeManager extends undefined$ICoreWindowResizeManager {
		notifyLayoutCompleted(): void;
		getForCurrentView(): Windows.UI.Core.CoreWindowResizeManager
	}

	declare export class CoreWindowPopupShowingEventArgs extends undefined$ICoreWindowPopupShowingEventArgs {
		setDesiredSize(value: Windows.Foundation.Size): void
	}

	declare export class CoreWindowDialog extends undefined$ICoreWindowDialog {
		constructor(title: string): this;
		constructor(): this;
		backButtonCommand: Windows.UI.Popups.UICommandInvokedHandler;
		cancelCommandIndex: number;
		commands: Windows.Foundation.Collections.IVector<Windows.UI.Popups.IUICommand>;
		defaultCommandIndex: number;
		isInteractionDelayed: number;
		maxSize: Windows.Foundation.Size;
		minSize: Windows.Foundation.Size;
		title: string;
		onshowing: any;
		showAsync(): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>
	}

	declare export class CoreWindowFlyout extends undefined$ICoreWindowFlyout {
		constructor(position: Windows.Foundation.Point): this;
		constructor(position: Windows.Foundation.Point, title: string): this;
		backButtonCommand: Windows.UI.Popups.UICommandInvokedHandler;
		commands: Windows.Foundation.Collections.IVector<Windows.UI.Popups.IUICommand>;
		defaultCommandIndex: number;
		isInteractionDelayed: number;
		maxSize: Windows.Foundation.Size;
		minSize: Windows.Foundation.Size;
		title: string;
		onshowing: any;
		showAsync(): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>
	}

	
}

declare module 'ApplicationModel' {
		declare export interface ISuspendingDeferral {
		complete(): void
	}

	declare export interface ISuspendingOperation {
		deadline: Date,
		getDeferral(): Windows.ApplicationModel.SuspendingDeferral
	}

	declare export interface ISuspendingEventArgs {
		suspendingOperation: Windows.ApplicationModel.SuspendingOperation
	}

	declare export interface PackageVersion {
		major: number,
		minor: number,
		build: number,
		revision: number
	}

	declare export interface IPackageId {
		architecture: Windows.System.ProcessorArchitecture,
		familyName: string,
		fullName: string,
		name: string,
		publisher: string,
		publisherId: string,
		resourceId: string,
		version: Windows.ApplicationModel.PackageVersion
	}

	declare export interface IPackage {
		dependencies: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Package>,
		description: string,
		displayName: string,
		id: Windows.ApplicationModel.PackageId,
		installedLocation: Windows.Storage.StorageFolder,
		isBundle: boolean,
		isDevelopmentMode: boolean,
		isFramework: boolean,
		isResourcePackage: boolean,
		logo: Windows.Foundation.Uri,
		publisherDisplayName: string
	}

	declare export interface IPackageStatics {
		current: Windows.ApplicationModel.Package
	}

	declare export interface IDesignModeStatics {
		designModeEnabled: boolean
	}

		declare export class SuspendingEventArgs extends undefined$ISuspendingEventArgs {
		suspendingOperation: Windows.ApplicationModel.SuspendingOperation
	}

	declare export class SuspendingDeferral extends undefined$ISuspendingDeferral {
		complete(): void
	}

	declare export class SuspendingOperation extends undefined$ISuspendingOperation {
		deadline: Date;
		getDeferral(): Windows.ApplicationModel.SuspendingDeferral
	}

	declare export class PackageId extends undefined$IPackageId {
		architecture: Windows.System.ProcessorArchitecture;
		familyName: string;
		fullName: string;
		name: string;
		publisher: string;
		publisherId: string;
		resourceId: string;
		version: Windows.ApplicationModel.PackageVersion
	}

	declare export class Package extends undefined$IPackage {
		current: Windows.ApplicationModel.Package;
		dependencies: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Package>;
		description: string;
		displayName: string;
		id: Windows.ApplicationModel.PackageId;
		installedLocation: Windows.Storage.StorageFolder;
		isBundle: boolean;
		isDevelopmentMode: boolean;
		isFramework: boolean;
		isResourcePackage: boolean;
		logo: Windows.Foundation.Uri;
		publisherDisplayName: string
	}

	declare export class DesignMode  {
		designModeEnabled: boolean
	}

	
}

declare module 'Resources' {
		declare export interface IResourceLoader {
		getString(resource: string): string
	}

	declare export interface IResourceLoaderStatics {
		getStringForReference(uri: Windows.Foundation.Uri): string
	}

	declare export interface IResourceLoaderFactory {
		createResourceLoaderByName(name: string): Windows.ApplicationModel.Resources.ResourceLoader
	}

		declare export class ResourceLoader extends undefined$IResourceLoader {
		constructor(name: string): this;
		constructor(): this;
		getString(resource: string): string;
		getStringForReference(uri: Windows.Foundation.Uri): string
	}

	
}

declare module 'Management' {
		declare export interface IResourceIndexer {
		indexFilePath(
		filePath: Windows.Foundation.Uri
	): Windows.ApplicationModel.Resources.Management.IndexedResourceCandidate,
		indexFileContentsAsync(
		file: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Management.IndexedResourceCandidate>>
	}

	declare export interface IResourceIndexerFactory {
		createResourceIndexer(
		projectRoot: Windows.Foundation.Uri
	): Windows.ApplicationModel.Resources.Management.ResourceIndexer
	}

	declare export interface IIndexedResourceQualifier {
		qualifierName: string,
		qualifierValue: string
	}

	declare export interface IIndexedResourceCandidate {
		metadata: Windows.Foundation.Collections.IMapView<string, string>,
		qualifiers: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Management.IndexedResourceQualifier>,
		type: Windows.ApplicationModel.Resources.Management.IndexedResourceType,
		uri: Windows.Foundation.Uri,
		valueAsString: string,
		getQualifierValue(qualifierName: string): string
	}

		declare export class IndexedResourceCandidate extends undefined$IIndexedResourceCandidate {
		metadata: Windows.Foundation.Collections.IMapView<string, string>;
		qualifiers: Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Management.IndexedResourceQualifier>;
		type: Windows.ApplicationModel.Resources.Management.IndexedResourceType;
		uri: Windows.Foundation.Uri;
		valueAsString: string;
		getQualifierValue(qualifierName: string): string
	}

	declare export class ResourceIndexer extends undefined$IResourceIndexer {
		constructor(projectRoot: Windows.Foundation.Uri): this;
		indexFilePath(
		filePath: Windows.Foundation.Uri
	): Windows.ApplicationModel.Resources.Management.IndexedResourceCandidate;
		indexFileContentsAsync(
		file: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.ApplicationModel.Resources.Management.IndexedResourceCandidate>>
	}

	declare export class IndexedResourceQualifier extends undefined$IIndexedResourceQualifier {
		qualifierName: string;
		qualifierValue: string
	}

	
}

declare module 'Store' {
		declare export interface LicenseChangedEventHandler {
		(): void
	}

	declare export interface ICurrentApp {
		appId: string,
		licenseInformation: Windows.ApplicationModel.Store.LicenseInformation,
		linkUri: Windows.Foundation.Uri,
		requestAppPurchaseAsync(includeReceipt: boolean): Windows.Foundation.IAsyncOperation<string>,
		requestProductPurchaseAsync(
		productId: string, includeReceipt: boolean
	): Windows.Foundation.IAsyncOperation<string>,
		loadListingInformationAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Store.ListingInformation>,
		getAppReceiptAsync(): Windows.Foundation.IAsyncOperation<string>,
		getProductReceiptAsync(productId: string): Windows.Foundation.IAsyncOperation<string>
	}

	declare export interface ICurrentAppSimulator {
		appId: string,
		licenseInformation: Windows.ApplicationModel.Store.LicenseInformation,
		linkUri: Windows.Foundation.Uri,
		requestAppPurchaseAsync(includeReceipt: boolean): Windows.Foundation.IAsyncOperation<string>,
		requestProductPurchaseAsync(
		productId: string, includeReceipt: boolean
	): Windows.Foundation.IAsyncOperation<string>,
		loadListingInformationAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Store.ListingInformation>,
		getAppReceiptAsync(): Windows.Foundation.IAsyncOperation<string>,
		getProductReceiptAsync(productId: string): Windows.Foundation.IAsyncOperation<string>,
		reloadSimulatorAsync(
		simulatorSettingsFile: Windows.Storage.StorageFile
	): Windows.Foundation.IAsyncAction
	}

	declare export interface ILicenseInformation {
		expirationDate: Date,
		isActive: boolean,
		isTrial: boolean,
		productLicenses: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Store.ProductLicense>,
		onlicensechanged: any
	}

	declare export interface IProductLicense {
		expirationDate: Date,
		isActive: boolean,
		productId: string
	}

	declare export interface IListingInformation {
		ageRating: number,
		currentMarket: string,
		description: string,
		formattedPrice: string,
		name: string,
		productListings: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Store.ProductListing>
	}

	declare export interface IProductListing {
		formattedPrice: string,
		name: string,
		productId: string
	}

		declare export class LicenseInformation extends undefined$ILicenseInformation {
		expirationDate: Date;
		isActive: boolean;
		isTrial: boolean;
		productLicenses: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Store.ProductLicense>;
		onlicensechanged: any
	}

	declare export class ListingInformation extends undefined$IListingInformation {
		ageRating: number;
		currentMarket: string;
		description: string;
		formattedPrice: string;
		name: string;
		productListings: Windows.Foundation.Collections.IMapView<string, Windows.ApplicationModel.Store.ProductListing>
	}

	declare export class ProductLicense extends undefined$IProductLicense {
		expirationDate: Date;
		isActive: boolean;
		productId: string
	}

	declare export class ProductListing extends undefined$IProductListing {
		formattedPrice: string;
		name: string;
		productId: string
	}

	declare export class CurrentApp  {
		appId: string;
		licenseInformation: Windows.ApplicationModel.Store.LicenseInformation;
		linkUri: Windows.Foundation.Uri;
		requestAppPurchaseAsync(includeReceipt: boolean): Windows.Foundation.IAsyncOperation<string>;
		requestProductPurchaseAsync(
		productId: string, includeReceipt: boolean
	): Windows.Foundation.IAsyncOperation<string>;
		loadListingInformationAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Store.ListingInformation>;
		getAppReceiptAsync(): Windows.Foundation.IAsyncOperation<string>;
		getProductReceiptAsync(productId: string): Windows.Foundation.IAsyncOperation<string>
	}

	declare export class CurrentAppSimulator  {
		appId: string;
		licenseInformation: Windows.ApplicationModel.Store.LicenseInformation;
		linkUri: Windows.Foundation.Uri;
		requestAppPurchaseAsync(includeReceipt: boolean): Windows.Foundation.IAsyncOperation<string>;
		requestProductPurchaseAsync(
		productId: string, includeReceipt: boolean
	): Windows.Foundation.IAsyncOperation<string>;
		loadListingInformationAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.ApplicationModel.Store.ListingInformation>;
		getAppReceiptAsync(): Windows.Foundation.IAsyncOperation<string>;
		getProductReceiptAsync(productId: string): Windows.Foundation.IAsyncOperation<string>;
		reloadSimulatorAsync(
		simulatorSettingsFile: Windows.Storage.StorageFile
	): Windows.Foundation.IAsyncAction
	}

	
}

declare module 'Html' {
		declare export interface IHtmlUtilities {
		convertToText(html: string): string
	}

		declare export class HtmlUtilities  {
		convertToText(html: string): string
	}

	
}

declare module 'Json' {
		declare export interface IJsonValue {
		valueType: Windows.Data.Json.JsonValueType,
		stringify(): string,
		getString(): string,
		getNumber(): number,
		getBoolean(): boolean,
		getArray(): Windows.Data.Json.JsonArray,
		getObject(): Windows.Data.Json.JsonObject
	}

	declare export interface IJsonValueStatics {
		parse(input: string): Windows.Data.Json.JsonValue,
		tryParse(
		input: string
	): {
		result: Windows.Data.Json.JsonValue,
		succeeded: boolean
	},
		createBooleanValue(input: boolean): Windows.Data.Json.JsonValue,
		createNumberValue(input: number): Windows.Data.Json.JsonValue,
		createStringValue(input: string): Windows.Data.Json.JsonValue
	}

	declare export interface IJsonObject {
		getNamedValue(name: string): Windows.Data.Json.JsonValue,
		setNamedValue(name: string, value: Windows.Data.Json.IJsonValue): void,
		getNamedObject(name: string): Windows.Data.Json.JsonObject,
		getNamedArray(name: string): Windows.Data.Json.JsonArray,
		getNamedString(name: string): string,
		getNamedNumber(name: string): number,
		getNamedBoolean(name: string): boolean
	}

	declare export interface IJsonObjectStatics {
		parse(input: string): Windows.Data.Json.JsonObject,
		tryParse(
		input: string
	): {
		result: Windows.Data.Json.JsonObject,
		succeeded: boolean
	}
	}

	declare export interface IJsonArray {
		getObjectAt(index: number): Windows.Data.Json.JsonObject,
		getArrayAt(index: number): Windows.Data.Json.JsonArray,
		getStringAt(index: number): string,
		getNumberAt(index: number): number,
		getBooleanAt(index: number): boolean
	}

	declare export interface IJsonArrayStatics {
		parse(input: string): Windows.Data.Json.JsonArray,
		tryParse(
		input: string
	): {
		result: Windows.Data.Json.JsonArray,
		succeeded: boolean
	}
	}

	declare export interface IJsonErrorStatics {
		getStatus(hresult: number): Windows.Data.Json.JsonErrorStatus
	}

		declare export class JsonArray extends undefined$IJsonArray {
		valueType: Windows.Data.Json.JsonValueType;
		size: number;
		getObjectAt(index: number): Windows.Data.Json.JsonObject;
		getArrayAt(index: number): Windows.Data.Json.JsonArray;
		getStringAt(index: number): string;
		getNumberAt(index: number): number;
		getBooleanAt(index: number): boolean;
		stringify(): string;
		getString(): string;
		getNumber(): number;
		getBoolean(): boolean;
		getArray(): Windows.Data.Json.JsonArray;
		getObject(): Windows.Data.Json.JsonObject;
		getAt(index: number): Windows.Data.Json.IJsonValue;
		getView(): Windows.Foundation.Collections.IVectorView<Windows.Data.Json.IJsonValue>;
		indexOf(
		value: Windows.Data.Json.IJsonValue
	): {
		index: number,
		returnValue: boolean
	};
		setAt(index: number, value: Windows.Data.Json.IJsonValue): void;
		insertAt(index: number, value: Windows.Data.Json.IJsonValue): void;
		removeAt(index: number): void;
		append(value: Windows.Data.Json.IJsonValue): void;
		removeAtEnd(): void;
		clear(): void;
		getMany(
		startIndex: number
	): {
		items: Windows.Data.Json.IJsonValue[],
		returnValue: number
	};
		replaceAll(items: Windows.Data.Json.IJsonValue[]): void;
		first(): Windows.Foundation.Collections.IIterator<Windows.Data.Json.IJsonValue>;
		parse(input: string): Windows.Data.Json.JsonArray;
		tryParse(
		input: string
	): {
		result: Windows.Data.Json.JsonArray,
		succeeded: boolean
	};
		toString(): string;
		toLocaleString(): string;
		concat(...items: Windows.Data.Json.IJsonValue[][]): Windows.Data.Json.IJsonValue[];
		join(seperator: string): string;
		pop(): Windows.Data.Json.IJsonValue;
		push(...items: Windows.Data.Json.IJsonValue[]): void;
		reverse(): Windows.Data.Json.IJsonValue[];
		shift(): Windows.Data.Json.IJsonValue;
		slice(start: number): Windows.Data.Json.IJsonValue[];
		slice(start: number, end: number): Windows.Data.Json.IJsonValue[];
		sort(): Windows.Data.Json.IJsonValue[];
		sort(
		compareFn: (a: Windows.Data.Json.IJsonValue, b: Windows.Data.Json.IJsonValue) => number
	): Windows.Data.Json.IJsonValue[];
		splice(start: number): Windows.Data.Json.IJsonValue[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Data.Json.IJsonValue[]
	): Windows.Data.Json.IJsonValue[];
		unshift(...items: Windows.Data.Json.IJsonValue[]): number;
		lastIndexOf(searchElement: Windows.Data.Json.IJsonValue): number;
		lastIndexOf(searchElement: Windows.Data.Json.IJsonValue, fromIndex: number): number;
		every(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => boolean
	): Windows.Data.Json.IJsonValue[];
		filter(
		callbackfn: (
		value: Windows.Data.Json.IJsonValue, index: number, array: Windows.Data.Json.IJsonValue[]
	) => boolean, thisArg: any
	): Windows.Data.Json.IJsonValue[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Json.IJsonValue[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Json.IJsonValue[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Json.IJsonValue[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Json.IJsonValue[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class JsonObject extends undefined$IJsonObject {
		valueType: Windows.Data.Json.JsonValueType;
		size: number;
		getNamedValue(name: string): Windows.Data.Json.JsonValue;
		setNamedValue(name: string, value: Windows.Data.Json.IJsonValue): void;
		getNamedObject(name: string): Windows.Data.Json.JsonObject;
		getNamedArray(name: string): Windows.Data.Json.JsonArray;
		getNamedString(name: string): string;
		getNamedNumber(name: string): number;
		getNamedBoolean(name: string): boolean;
		stringify(): string;
		getString(): string;
		getNumber(): number;
		getBoolean(): boolean;
		getArray(): Windows.Data.Json.JsonArray;
		getObject(): Windows.Data.Json.JsonObject;
		lookup(key: string): Windows.Data.Json.IJsonValue;
		hasKey(key: string): boolean;
		getView(
		
	): Windows.Foundation.Collections.IMapView<string, Windows.Data.Json.IJsonValue>;
		insert(key: string, value: Windows.Data.Json.IJsonValue): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, Windows.Data.Json.IJsonValue>>;
		parse(input: string): Windows.Data.Json.JsonObject;
		tryParse(
		input: string
	): {
		result: Windows.Data.Json.JsonObject,
		succeeded: boolean
	}
	}

	declare export class JsonValue extends undefined$IJsonValue {
		valueType: Windows.Data.Json.JsonValueType;
		stringify(): string;
		getString(): string;
		getNumber(): number;
		getBoolean(): boolean;
		getArray(): Windows.Data.Json.JsonArray;
		getObject(): Windows.Data.Json.JsonObject;
		parse(input: string): Windows.Data.Json.JsonValue;
		tryParse(
		input: string
	): {
		result: Windows.Data.Json.JsonValue,
		succeeded: boolean
	};
		createBooleanValue(input: boolean): Windows.Data.Json.JsonValue;
		createNumberValue(input: number): Windows.Data.Json.JsonValue;
		createStringValue(input: string): Windows.Data.Json.JsonValue
	}

	declare export class JsonError  {
		getStatus(hresult: number): Windows.Data.Json.JsonErrorStatus
	}

	
}

declare module 'Dom' {
		declare export interface IXmlNodeSelector {
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode,
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList,
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode,
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList
	}

	declare export interface IXmlNodeSerializer {
		innerText: string,
		getXml(): string
	}

	declare export interface IXmlNode {
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap,
		childNodes: Windows.Data.Xml.Dom.XmlNodeList,
		firstChild: Windows.Data.Xml.Dom.IXmlNode,
		lastChild: Windows.Data.Xml.Dom.IXmlNode,
		localName: any,
		namespaceUri: any,
		nextSibling: Windows.Data.Xml.Dom.IXmlNode,
		nodeName: string,
		nodeType: Windows.Data.Xml.Dom.NodeType,
		nodeValue: any,
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument,
		parentNode: Windows.Data.Xml.Dom.IXmlNode,
		prefix: any,
		previousSibling: Windows.Data.Xml.Dom.IXmlNode,
		hasChildNodes(): boolean,
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode,
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode,
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode,
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode,
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode,
		normalize(): void
	}

	declare export interface IXmlDomImplementation {
		hasFeature(feature: string, version: any): boolean
	}

	declare export interface IXmlDocumentType {
		entities: Windows.Data.Xml.Dom.XmlNamedNodeMap,
		name: string,
		notations: Windows.Data.Xml.Dom.XmlNamedNodeMap
	}

	declare export interface IXmlAttribute {
		name: string,
		specified: boolean,
		value: string
	}

	declare export interface IXmlDocumentFragment {
		
	}

	declare export interface IXmlElement {
		tagName: string,
		getAttribute(attributeName: string): string,
		setAttribute(attributeName: string, attributeValue: string): void,
		removeAttribute(attributeName: string): void,
		getAttributeNode(attributeName: string): Windows.Data.Xml.Dom.XmlAttribute,
		setAttributeNode(
		newAttribute: Windows.Data.Xml.Dom.XmlAttribute
	): Windows.Data.Xml.Dom.XmlAttribute,
		removeAttributeNode(
		attributeNode: Windows.Data.Xml.Dom.XmlAttribute
	): Windows.Data.Xml.Dom.XmlAttribute,
		getElementsByTagName(tagName: string): Windows.Data.Xml.Dom.XmlNodeList,
		setAttributeNS(namespaceUri: any, qualifiedName: string, value: string): void,
		getAttributeNS(namespaceUri: any, localName: string): string,
		removeAttributeNS(namespaceUri: any, localName: string): void,
		setAttributeNodeNS(
		newAttribute: Windows.Data.Xml.Dom.XmlAttribute
	): Windows.Data.Xml.Dom.XmlAttribute,
		getAttributeNodeNS(namespaceUri: any, localName: string): Windows.Data.Xml.Dom.XmlAttribute
	}

	declare export interface IDtdNotation {
		publicId: any,
		systemId: any
	}

	declare export interface IDtdEntity {
		notationName: any,
		publicId: any,
		systemId: any
	}

	declare export interface IXmlEntityReference {
		
	}

	declare export interface IXmlProcessingInstruction {
		data: string,
		target: string
	}

	declare export interface IXmlCharacterData {
		data: string,
		length: number,
		substringData(offset: number, count: number): string,
		appendData(data: string): void,
		insertData(offset: number, data: string): void,
		deleteData(offset: number, count: number): void,
		replaceData(offset: number, count: number, data: string): void
	}

	declare export interface IXmlComment {
		
	}

	declare export interface IXmlText {
		splitText(offset: number): Windows.Data.Xml.Dom.IXmlText
	}

	declare export interface IXmlCDataSection {
		
	}

	declare export interface IXmlDocument {
		doctype: Windows.Data.Xml.Dom.XmlDocumentType,
		documentElement: Windows.Data.Xml.Dom.XmlElement,
		documentUri: string,
		implementation: Windows.Data.Xml.Dom.XmlDomImplementation,
		createElement(tagName: string): Windows.Data.Xml.Dom.XmlElement,
		createDocumentFragment(): Windows.Data.Xml.Dom.XmlDocumentFragment,
		createTextNode(data: string): Windows.Data.Xml.Dom.XmlText,
		createComment(data: string): Windows.Data.Xml.Dom.XmlComment,
		createProcessingInstruction(target: string, data: string): Windows.Data.Xml.Dom.XmlProcessingInstruction,
		createAttribute(name: string): Windows.Data.Xml.Dom.XmlAttribute,
		createEntityReference(name: string): Windows.Data.Xml.Dom.XmlEntityReference,
		getElementsByTagName(tagName: string): Windows.Data.Xml.Dom.XmlNodeList,
		createCDataSection(data: string): Windows.Data.Xml.Dom.XmlCDataSection,
		createAttributeNS(namespaceUri: any, qualifiedName: string): Windows.Data.Xml.Dom.XmlAttribute,
		createElementNS(namespaceUri: any, qualifiedName: string): Windows.Data.Xml.Dom.XmlElement,
		getElementById(elementId: string): Windows.Data.Xml.Dom.XmlElement,
		importNode(
		node: Windows.Data.Xml.Dom.IXmlNode, deep: boolean
	): Windows.Data.Xml.Dom.IXmlNode
	}

	declare export interface IXmlNamedNodeMap {
		length: number,
		item(index: number): Windows.Data.Xml.Dom.IXmlNode,
		getNamedItem(name: string): Windows.Data.Xml.Dom.IXmlNode,
		setNamedItem(node: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode,
		removeNamedItem(name: string): Windows.Data.Xml.Dom.IXmlNode,
		getNamedItemNS(namespaceUri: any, name: string): Windows.Data.Xml.Dom.IXmlNode,
		removeNamedItemNS(namespaceUri: any, name: string): Windows.Data.Xml.Dom.IXmlNode,
		setNamedItemNS(node: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode
	}

	declare export interface IXmlNodeList {
		length: number,
		item(index: number): Windows.Data.Xml.Dom.IXmlNode
	}

	declare export interface IXmlLoadSettings {
		elementContentWhiteSpace: boolean,
		maxElementDepth: number,
		prohibitDtd: boolean,
		resolveExternals: boolean,
		validateOnParse: boolean
	}

	declare export interface IXmlDocumentIO {
		loadXml(xml: string): void,
		loadXml(xml: string, loadSettings: Windows.Data.Xml.Dom.XmlLoadSettings): void,
		saveToFileAsync(file: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction
	}

	declare export interface IXmlDocumentStatics {
		loadFromUriAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Data.Xml.Dom.XmlDocument>,
		loadFromUriAsync(
		uri: Windows.Foundation.Uri, loadSettings: Windows.Data.Xml.Dom.XmlLoadSettings
	): Windows.Foundation.IAsyncOperation<Windows.Data.Xml.Dom.XmlDocument>,
		loadFromFileAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Data.Xml.Dom.XmlDocument>,
		loadFromFileAsync(
		file: Windows.Storage.IStorageFile, loadSettings: Windows.Data.Xml.Dom.XmlLoadSettings
	): Windows.Foundation.IAsyncOperation<Windows.Data.Xml.Dom.XmlDocument>
	}

		declare export class XmlNodeList extends undefined$IXmlNodeList {
		length: number;
		size: number;
		item(index: number): Windows.Data.Xml.Dom.IXmlNode;
		getAt(index: number): Windows.Data.Xml.Dom.IXmlNode;
		indexOf(
		value: Windows.Data.Xml.Dom.IXmlNode
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.Data.Xml.Dom.IXmlNode[],
		returnValue: number
	};
		first(): Windows.Foundation.Collections.IIterator<Windows.Data.Xml.Dom.IXmlNode>;
		toString(): string;
		toLocaleString(): string;
		concat(...items: Windows.Data.Xml.Dom.IXmlNode[][]): Windows.Data.Xml.Dom.IXmlNode[];
		join(seperator: string): string;
		pop(): Windows.Data.Xml.Dom.IXmlNode;
		push(...items: Windows.Data.Xml.Dom.IXmlNode[]): void;
		reverse(): Windows.Data.Xml.Dom.IXmlNode[];
		shift(): Windows.Data.Xml.Dom.IXmlNode;
		slice(start: number): Windows.Data.Xml.Dom.IXmlNode[];
		slice(start: number, end: number): Windows.Data.Xml.Dom.IXmlNode[];
		sort(): Windows.Data.Xml.Dom.IXmlNode[];
		sort(
		compareFn: (a: Windows.Data.Xml.Dom.IXmlNode, b: Windows.Data.Xml.Dom.IXmlNode) => number
	): Windows.Data.Xml.Dom.IXmlNode[];
		splice(start: number): Windows.Data.Xml.Dom.IXmlNode[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Data.Xml.Dom.IXmlNode[]
	): Windows.Data.Xml.Dom.IXmlNode[];
		unshift(...items: Windows.Data.Xml.Dom.IXmlNode[]): number;
		lastIndexOf(searchElement: Windows.Data.Xml.Dom.IXmlNode): number;
		lastIndexOf(searchElement: Windows.Data.Xml.Dom.IXmlNode, fromIndex: number): number;
		every(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean
	): Windows.Data.Xml.Dom.IXmlNode[];
		filter(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean, thisArg: any
	): Windows.Data.Xml.Dom.IXmlNode[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any, initialValue: any
	): any
	}

	declare export class XmlNamedNodeMap extends undefined$IXmlNamedNodeMap {
		length: number;
		size: number;
		item(index: number): Windows.Data.Xml.Dom.IXmlNode;
		getNamedItem(name: string): Windows.Data.Xml.Dom.IXmlNode;
		setNamedItem(node: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		removeNamedItem(name: string): Windows.Data.Xml.Dom.IXmlNode;
		getNamedItemNS(namespaceUri: any, name: string): Windows.Data.Xml.Dom.IXmlNode;
		removeNamedItemNS(namespaceUri: any, name: string): Windows.Data.Xml.Dom.IXmlNode;
		setNamedItemNS(node: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		getAt(index: number): Windows.Data.Xml.Dom.IXmlNode;
		indexOf(
		value: Windows.Data.Xml.Dom.IXmlNode
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.Data.Xml.Dom.IXmlNode[],
		returnValue: number
	};
		first(): Windows.Foundation.Collections.IIterator<Windows.Data.Xml.Dom.IXmlNode>;
		toString(): string;
		toLocaleString(): string;
		concat(...items: Windows.Data.Xml.Dom.IXmlNode[][]): Windows.Data.Xml.Dom.IXmlNode[];
		join(seperator: string): string;
		pop(): Windows.Data.Xml.Dom.IXmlNode;
		push(...items: Windows.Data.Xml.Dom.IXmlNode[]): void;
		reverse(): Windows.Data.Xml.Dom.IXmlNode[];
		shift(): Windows.Data.Xml.Dom.IXmlNode;
		slice(start: number): Windows.Data.Xml.Dom.IXmlNode[];
		slice(start: number, end: number): Windows.Data.Xml.Dom.IXmlNode[];
		sort(): Windows.Data.Xml.Dom.IXmlNode[];
		sort(
		compareFn: (a: Windows.Data.Xml.Dom.IXmlNode, b: Windows.Data.Xml.Dom.IXmlNode) => number
	): Windows.Data.Xml.Dom.IXmlNode[];
		splice(start: number): Windows.Data.Xml.Dom.IXmlNode[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Data.Xml.Dom.IXmlNode[]
	): Windows.Data.Xml.Dom.IXmlNode[];
		unshift(...items: Windows.Data.Xml.Dom.IXmlNode[]): number;
		lastIndexOf(searchElement: Windows.Data.Xml.Dom.IXmlNode): number;
		lastIndexOf(searchElement: Windows.Data.Xml.Dom.IXmlNode, fromIndex: number): number;
		every(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean
	): Windows.Data.Xml.Dom.IXmlNode[];
		filter(
		callbackfn: (
		value: Windows.Data.Xml.Dom.IXmlNode, index: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => boolean, thisArg: any
	): Windows.Data.Xml.Dom.IXmlNode[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Data.Xml.Dom.IXmlNode[]
	) => any, initialValue: any
	): any
	}

	declare export class XmlDocument extends undefined$IXmlDocument {
		doctype: Windows.Data.Xml.Dom.XmlDocumentType;
		documentElement: Windows.Data.Xml.Dom.XmlElement;
		documentUri: string;
		implementation: Windows.Data.Xml.Dom.XmlDomImplementation;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		createElement(tagName: string): Windows.Data.Xml.Dom.XmlElement;
		createDocumentFragment(): Windows.Data.Xml.Dom.XmlDocumentFragment;
		createTextNode(data: string): Windows.Data.Xml.Dom.XmlText;
		createComment(data: string): Windows.Data.Xml.Dom.XmlComment;
		createProcessingInstruction(target: string, data: string): Windows.Data.Xml.Dom.XmlProcessingInstruction;
		createAttribute(name: string): Windows.Data.Xml.Dom.XmlAttribute;
		createEntityReference(name: string): Windows.Data.Xml.Dom.XmlEntityReference;
		getElementsByTagName(tagName: string): Windows.Data.Xml.Dom.XmlNodeList;
		createCDataSection(data: string): Windows.Data.Xml.Dom.XmlCDataSection;
		createAttributeNS(namespaceUri: any, qualifiedName: string): Windows.Data.Xml.Dom.XmlAttribute;
		createElementNS(namespaceUri: any, qualifiedName: string): Windows.Data.Xml.Dom.XmlElement;
		getElementById(elementId: string): Windows.Data.Xml.Dom.XmlElement;
		importNode(
		node: Windows.Data.Xml.Dom.IXmlNode, deep: boolean
	): Windows.Data.Xml.Dom.IXmlNode;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string;
		loadXml(xml: string): void;
		loadXml(xml: string, loadSettings: Windows.Data.Xml.Dom.XmlLoadSettings): void;
		saveToFileAsync(file: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction;
		loadFromUriAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Data.Xml.Dom.XmlDocument>;
		loadFromUriAsync(
		uri: Windows.Foundation.Uri, loadSettings: Windows.Data.Xml.Dom.XmlLoadSettings
	): Windows.Foundation.IAsyncOperation<Windows.Data.Xml.Dom.XmlDocument>;
		loadFromFileAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Data.Xml.Dom.XmlDocument>;
		loadFromFileAsync(
		file: Windows.Storage.IStorageFile, loadSettings: Windows.Data.Xml.Dom.XmlLoadSettings
	): Windows.Foundation.IAsyncOperation<Windows.Data.Xml.Dom.XmlDocument>
	}

	declare export class XmlAttribute extends undefined$IXmlAttribute {
		name: string;
		specified: boolean;
		value: string;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class XmlDocumentType extends undefined$IXmlDocumentType {
		entities: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		name: string;
		notations: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class XmlDomImplementation extends undefined$IXmlDomImplementation {
		hasFeature(feature: string, version: any): boolean
	}

	declare export class XmlElement extends undefined$IXmlElement {
		tagName: string;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		getAttribute(attributeName: string): string;
		setAttribute(attributeName: string, attributeValue: string): void;
		removeAttribute(attributeName: string): void;
		getAttributeNode(attributeName: string): Windows.Data.Xml.Dom.XmlAttribute;
		setAttributeNode(
		newAttribute: Windows.Data.Xml.Dom.XmlAttribute
	): Windows.Data.Xml.Dom.XmlAttribute;
		removeAttributeNode(
		attributeNode: Windows.Data.Xml.Dom.XmlAttribute
	): Windows.Data.Xml.Dom.XmlAttribute;
		getElementsByTagName(tagName: string): Windows.Data.Xml.Dom.XmlNodeList;
		setAttributeNS(namespaceUri: any, qualifiedName: string, value: string): void;
		getAttributeNS(namespaceUri: any, localName: string): string;
		removeAttributeNS(namespaceUri: any, localName: string): void;
		setAttributeNodeNS(
		newAttribute: Windows.Data.Xml.Dom.XmlAttribute
	): Windows.Data.Xml.Dom.XmlAttribute;
		getAttributeNodeNS(namespaceUri: any, localName: string): Windows.Data.Xml.Dom.XmlAttribute;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class XmlDocumentFragment extends undefined$IXmlDocumentFragment {
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class XmlText extends undefined$IXmlText {
		data: string;
		length: number;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		splitText(offset: number): Windows.Data.Xml.Dom.IXmlText;
		substringData(offset: number, count: number): string;
		appendData(data: string): void;
		insertData(offset: number, data: string): void;
		deleteData(offset: number, count: number): void;
		replaceData(offset: number, count: number, data: string): void;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class XmlComment extends undefined$IXmlComment {
		data: string;
		length: number;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		substringData(offset: number, count: number): string;
		appendData(data: string): void;
		insertData(offset: number, data: string): void;
		deleteData(offset: number, count: number): void;
		replaceData(offset: number, count: number, data: string): void;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class XmlProcessingInstruction extends undefined$IXmlProcessingInstruction {
		data: string;
		target: string;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class XmlEntityReference extends undefined$IXmlEntityReference {
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class XmlCDataSection extends undefined$IXmlCDataSection {
		data: string;
		length: number;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		splitText(offset: number): Windows.Data.Xml.Dom.IXmlText;
		substringData(offset: number, count: number): string;
		appendData(data: string): void;
		insertData(offset: number, data: string): void;
		deleteData(offset: number, count: number): void;
		replaceData(offset: number, count: number, data: string): void;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class XmlLoadSettings extends undefined$IXmlLoadSettings {
		elementContentWhiteSpace: boolean;
		maxElementDepth: number;
		prohibitDtd: boolean;
		resolveExternals: boolean;
		validateOnParse: boolean
	}

	declare export class DtdNotation extends undefined$IDtdNotation {
		publicId: any;
		systemId: any;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	declare export class DtdEntity extends undefined$IDtdEntity {
		notationName: any;
		publicId: any;
		systemId: any;
		attributes: Windows.Data.Xml.Dom.XmlNamedNodeMap;
		childNodes: Windows.Data.Xml.Dom.XmlNodeList;
		firstChild: Windows.Data.Xml.Dom.IXmlNode;
		lastChild: Windows.Data.Xml.Dom.IXmlNode;
		localName: any;
		namespaceUri: any;
		nextSibling: Windows.Data.Xml.Dom.IXmlNode;
		nodeName: string;
		nodeType: Windows.Data.Xml.Dom.NodeType;
		nodeValue: any;
		ownerDocument: Windows.Data.Xml.Dom.XmlDocument;
		parentNode: Windows.Data.Xml.Dom.IXmlNode;
		prefix: any;
		previousSibling: Windows.Data.Xml.Dom.IXmlNode;
		innerText: string;
		hasChildNodes(): boolean;
		insertBefore(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		replaceChild(
		newChild: Windows.Data.Xml.Dom.IXmlNode, referenceChild: Windows.Data.Xml.Dom.IXmlNode
	): Windows.Data.Xml.Dom.IXmlNode;
		removeChild(childNode: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		appendChild(newChild: Windows.Data.Xml.Dom.IXmlNode): Windows.Data.Xml.Dom.IXmlNode;
		cloneNode(deep: boolean): Windows.Data.Xml.Dom.IXmlNode;
		normalize(): void;
		selectSingleNode(xpath: string): Windows.Data.Xml.Dom.IXmlNode;
		selectNodes(xpath: string): Windows.Data.Xml.Dom.XmlNodeList;
		selectSingleNodeNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.IXmlNode;
		selectNodesNS(xpath: string, namespaces: any): Windows.Data.Xml.Dom.XmlNodeList;
		getXml(): string
	}

	
}

declare module 'Xsl' {
		declare export interface IXsltProcessor {
		transformToString(inputNode: Windows.Data.Xml.Dom.IXmlNode): string
	}

	declare export interface IXsltProcessorFactory {
		createInstance(document: Windows.Data.Xml.Dom.XmlDocument): Windows.Data.Xml.Xsl.XsltProcessor
	}

		declare export class XsltProcessor extends undefined$IXsltProcessor {
		constructor(document: Windows.Data.Xml.Dom.XmlDocument): this;
		transformToString(inputNode: Windows.Data.Xml.Dom.IXmlNode): string
	}

	
}

declare module 'Sms' {
		declare export interface ISmsMessage {
		id: number,
		messageClass: Windows.Devices.Sms.SmsMessageClass
	}

	declare export interface ISmsBinaryMessage {
		format: Windows.Devices.Sms.SmsDataFormat,
		getData(): Uint8Array,
		setData(value: Uint8Array): void
	}

	declare export interface ISmsTextMessage {
		body: string,
		encoding: Windows.Devices.Sms.SmsEncoding,
		from: string,
		partCount: number,
		partNumber: number,
		partReferenceId: number,
		timestamp: Date,
		to: string,
		toBinaryMessages(
		format: Windows.Devices.Sms.SmsDataFormat
	): Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsBinaryMessage>
	}

	declare export interface ISmsTextMessageStatics {
		fromBinaryMessage(
		binaryMessage: Windows.Devices.Sms.SmsBinaryMessage
	): Windows.Devices.Sms.SmsTextMessage,
		fromBinaryData(
		format: Windows.Devices.Sms.SmsDataFormat, value: Uint8Array
	): Windows.Devices.Sms.SmsTextMessage
	}

	declare export interface ISmsDeviceMessageStore {
		maxMessages: number,
		deleteMessageAsync(messageId: number): Windows.Foundation.IAsyncAction,
		deleteMessagesAsync(
		messageFilter: Windows.Devices.Sms.SmsMessageFilter
	): Windows.Foundation.IAsyncAction,
		getMessageAsync(
		messageId: number
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Sms.ISmsMessage>,
		getMessagesAsync(
		messageFilter: Windows.Devices.Sms.SmsMessageFilter
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>, number>
	}

	declare export interface SmsEncodedLength {
		segmentCount: number,
		characterCountLastSegment: number,
		charactersPerSegment: number,
		byteCountLastSegment: number,
		bytesPerSegment: number
	}

	declare export interface ISmsMessageReceivedEventArgs {
		binaryMessage: Windows.Devices.Sms.SmsBinaryMessage,
		textMessage: Windows.Devices.Sms.SmsTextMessage
	}

	declare export interface SmsMessageReceivedEventHandler {
		(sender: Windows.Devices.Sms.SmsDevice, e: Windows.Devices.Sms.SmsMessageReceivedEventArgs): void
	}

	declare export interface SmsDeviceStatusChangedEventHandler {
		(sender: Windows.Devices.Sms.SmsDevice): void
	}

	declare export interface ISmsDeviceStatics {
		getDeviceSelector(): string,
		fromIdAsync(
		deviceInstanceId: string
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Sms.SmsDevice>,
		getDefaultAsync(): Windows.Foundation.IAsyncOperation<Windows.Devices.Sms.SmsDevice>
	}

	declare export interface ISmsDevice {
		accountPhoneNumber: string,
		cellularClass: Windows.Devices.Sms.CellularClass,
		deviceStatus: Windows.Devices.Sms.SmsDeviceStatus,
		messageStore: Windows.Devices.Sms.SmsDeviceMessageStore,
		sendMessageAsync(
		message: Windows.Devices.Sms.ISmsMessage
	): Windows.Devices.Sms.SendSmsMessageOperation,
		calculateLength(
		message: Windows.Devices.Sms.SmsTextMessage
	): Windows.Devices.Sms.SmsEncodedLength,
		onsmsmessagereceived: any,
		onsmsdevicestatuschanged: any
	}

	declare export interface ISmsReceivedEventDetails {
		deviceId: string,
		messageIndex: number
	}

		declare export class SmsBinaryMessage extends undefined$ISmsBinaryMessage {
		format: Windows.Devices.Sms.SmsDataFormat;
		id: number;
		messageClass: Windows.Devices.Sms.SmsMessageClass;
		getData(): Uint8Array;
		setData(value: Uint8Array): void
	}

	declare export class SmsTextMessage extends undefined$ISmsTextMessage {
		body: string;
		encoding: Windows.Devices.Sms.SmsEncoding;
		from: string;
		partCount: number;
		partNumber: number;
		partReferenceId: number;
		timestamp: Date;
		to: string;
		id: number;
		messageClass: Windows.Devices.Sms.SmsMessageClass;
		toBinaryMessages(
		format: Windows.Devices.Sms.SmsDataFormat
	): Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsBinaryMessage>;
		fromBinaryMessage(
		binaryMessage: Windows.Devices.Sms.SmsBinaryMessage
	): Windows.Devices.Sms.SmsTextMessage;
		fromBinaryData(
		format: Windows.Devices.Sms.SmsDataFormat, value: Uint8Array
	): Windows.Devices.Sms.SmsTextMessage
	}

	declare export class DeleteSmsMessageOperation extends undefined$IAsyncAction {
		completed: Windows.Foundation.AsyncActionCompletedHandler;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): void;
		cancel(): void;
		close(): void;
		then<U>(
		success?: (value: any) => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: any) => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: any) => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: any) => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: (value: any) => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<any>,
		getResults(): any
	}
	}

	declare export class DeleteSmsMessagesOperation extends undefined$IAsyncAction {
		completed: Windows.Foundation.AsyncActionCompletedHandler;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): void;
		cancel(): void;
		close(): void;
		then<U>(
		success?: (value: any) => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: any) => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: any) => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: any) => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: (value: any) => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<any>,
		getResults(): any
	}
	}

	declare export class GetSmsMessageOperation extends undefined$IAsyncOperation<Windows.Devices.Sms.ISmsMessage> {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<Windows.Devices.Sms.ISmsMessage>;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): Windows.Devices.Sms.ISmsMessage;
		cancel(): void;
		close(): void;
		then<U>(
		success?: (value: Windows.Devices.Sms.ISmsMessage) => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: Windows.Devices.Sms.ISmsMessage) => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: Windows.Devices.Sms.ISmsMessage) => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: Windows.Devices.Sms.ISmsMessage) => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: (value: Windows.Devices.Sms.ISmsMessage) => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<Windows.Devices.Sms.ISmsMessage>,
		getResults(): Windows.Devices.Sms.ISmsMessage
	}
	}

	declare export class GetSmsMessagesOperation extends undefined$IAsyncOperationWithProgress<Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>, number> {
		completed: Windows.Foundation.AsyncOperationWithProgressCompletedHandler<Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>, number>;
		progress: Windows.Foundation.AsyncOperationProgressHandler<Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>, number>;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>;
		cancel(): void;
		close(): void;
		then<U>(
		success?: (
		value: Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>
	) => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (
		value: Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>
	) => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (
		value: Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>
	) => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (
		value: Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>
	) => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: (
		value: Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>
	) => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		progress: Windows.Foundation.AsyncOperationProgressHandler<Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>, number>,
		completed: Windows.Foundation.AsyncOperationCompletedHandler<Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>>,
		getResults(): Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>
	}
	}

	declare export class SmsDeviceMessageStore extends undefined$ISmsDeviceMessageStore {
		maxMessages: number;
		deleteMessageAsync(messageId: number): Windows.Foundation.IAsyncAction;
		deleteMessagesAsync(
		messageFilter: Windows.Devices.Sms.SmsMessageFilter
	): Windows.Foundation.IAsyncAction;
		getMessageAsync(
		messageId: number
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Sms.ISmsMessage>;
		getMessagesAsync(
		messageFilter: Windows.Devices.Sms.SmsMessageFilter
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Foundation.Collections.IVectorView<Windows.Devices.Sms.ISmsMessage>, number>
	}

	declare export class SendSmsMessageOperation extends undefined$IAsyncAction {
		completed: Windows.Foundation.AsyncActionCompletedHandler;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): void;
		cancel(): void;
		close(): void;
		then<U>(
		success?: () => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: () => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: () => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: () => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: () => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<any>,
		getResults(): any
	}
	}

	declare export class SmsMessageReceivedEventArgs extends undefined$ISmsMessageReceivedEventArgs {
		binaryMessage: Windows.Devices.Sms.SmsBinaryMessage;
		textMessage: Windows.Devices.Sms.SmsTextMessage
	}

	declare export class SmsDevice extends undefined$ISmsDevice {
		accountPhoneNumber: string;
		cellularClass: Windows.Devices.Sms.CellularClass;
		deviceStatus: Windows.Devices.Sms.SmsDeviceStatus;
		messageStore: Windows.Devices.Sms.SmsDeviceMessageStore;
		sendMessageAsync(
		message: Windows.Devices.Sms.ISmsMessage
	): Windows.Devices.Sms.SendSmsMessageOperation;
		calculateLength(
		message: Windows.Devices.Sms.SmsTextMessage
	): Windows.Devices.Sms.SmsEncodedLength;
		onsmsmessagereceived: any;
		onsmsdevicestatuschanged: any;
		getDeviceSelector(): string;
		fromIdAsync(
		deviceInstanceId: string
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Sms.SmsDevice>;
		getDefaultAsync(): Windows.Foundation.IAsyncOperation<Windows.Devices.Sms.SmsDevice>
	}

	declare export class GetSmsDeviceOperation extends undefined$IAsyncOperation<Windows.Devices.Sms.SmsDevice> {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<Windows.Devices.Sms.SmsDevice>;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): Windows.Devices.Sms.SmsDevice;
		cancel(): void;
		close(): void;
		then<U>(
		success?: (value: Windows.Devices.Sms.SmsDevice) => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: Windows.Devices.Sms.SmsDevice) => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: Windows.Devices.Sms.SmsDevice) => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: Windows.Devices.Sms.SmsDevice) => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: (value: Windows.Devices.Sms.SmsDevice) => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<Windows.Devices.Sms.SmsDevice>,
		getResults(): Windows.Devices.Sms.SmsDevice
	}
	}

	declare export class SmsReceivedEventDetails extends undefined$ISmsReceivedEventDetails {
		deviceId: string;
		messageIndex: number
	}

	
}

declare module 'Enumeration' {
		declare export interface IEnclosureLocation {
		inDock: boolean,
		inLid: boolean,
		panel: Windows.Devices.Enumeration.Panel
	}

	declare export interface IDeviceInformationUpdate {
		id: string,
		properties: Windows.Foundation.Collections.IMapView<string, any>
	}

	declare export interface IDeviceWatcher {
		status: Windows.Devices.Enumeration.DeviceWatcherStatus,
		onadded: any,
		onupdated: any,
		onremoved: any,
		onenumerationcompleted: any,
		onstopped: any,
		start(): void,
		stop(): void
	}

	declare export interface IDeviceInformationStatics {
		createFromIdAsync(
		id: string
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformation>,
		createFromIdAsync(
		id: string, additionalProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformation>,
		findAllAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformationCollection>,
		findAllAsync(
		deviceClass: Windows.Devices.Enumeration.DeviceClass
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformationCollection>,
		findAllAsync(
		aqsFilter: string
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformationCollection>,
		findAllAsync(
		aqsFilter: string, additionalProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformationCollection>,
		createWatcher(): Windows.Devices.Enumeration.DeviceWatcher,
		createWatcher(
		deviceClass: Windows.Devices.Enumeration.DeviceClass
	): Windows.Devices.Enumeration.DeviceWatcher,
		createWatcher(aqsFilter: string): Windows.Devices.Enumeration.DeviceWatcher,
		createWatcher(
		aqsFilter: string, additionalProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Devices.Enumeration.DeviceWatcher
	}

	declare export interface IDeviceInformation {
		enclosureLocation: Windows.Devices.Enumeration.EnclosureLocation,
		id: string,
		isDefault: boolean,
		isEnabled: boolean,
		name: string,
		properties: Windows.Foundation.Collections.IMapView<string, any>,
		update(updateInfo: Windows.Devices.Enumeration.DeviceInformationUpdate): void,
		getThumbnailAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceThumbnail>,
		getGlyphThumbnailAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceThumbnail>
	}

		declare export class DeviceThumbnail extends undefined$IRandomAccessStreamWithContentType {
		canRead: boolean;
		canWrite: boolean;
		position: number;
		size: number;
		contentType: string;
		getInputStreamAt(position: number): Windows.Storage.Streams.IInputStream;
		getOutputStreamAt(position: number): Windows.Storage.Streams.IOutputStream;
		seek(position: number): void;
		cloneStream(): Windows.Storage.Streams.IRandomAccessStream;
		dispose(): void;
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		close(): void
	}

	declare export class EnclosureLocation extends undefined$IEnclosureLocation {
		inDock: boolean;
		inLid: boolean;
		panel: Windows.Devices.Enumeration.Panel
	}

	declare export class DeviceInformationUpdate extends undefined$IDeviceInformationUpdate {
		id: string;
		properties: Windows.Foundation.Collections.IMapView<string, any>
	}

	declare export class DeviceInformationCollection extends undefined$IVectorView<Windows.Devices.Enumeration.DeviceInformation> {
		size: number;
		getAt(index: number): Windows.Devices.Enumeration.DeviceInformation;
		indexOf(
		value: Windows.Devices.Enumeration.DeviceInformation
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.Devices.Enumeration.DeviceInformation[],
		returnValue: number
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Devices.Enumeration.DeviceInformation>;
		toString(): string;
		toLocaleString(): string;
		concat(
		...items: Windows.Devices.Enumeration.DeviceInformation[][]
	): Windows.Devices.Enumeration.DeviceInformation[];
		join(seperator: string): string;
		pop(): Windows.Devices.Enumeration.DeviceInformation;
		push(...items: Windows.Devices.Enumeration.DeviceInformation[]): void;
		reverse(): Windows.Devices.Enumeration.DeviceInformation[];
		shift(): Windows.Devices.Enumeration.DeviceInformation;
		slice(start: number): Windows.Devices.Enumeration.DeviceInformation[];
		slice(start: number, end: number): Windows.Devices.Enumeration.DeviceInformation[];
		sort(): Windows.Devices.Enumeration.DeviceInformation[];
		sort(
		compareFn: (
		a: Windows.Devices.Enumeration.DeviceInformation, b: Windows.Devices.Enumeration.DeviceInformation
	) => number
	): Windows.Devices.Enumeration.DeviceInformation[];
		splice(start: number): Windows.Devices.Enumeration.DeviceInformation[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Devices.Enumeration.DeviceInformation[]
	): Windows.Devices.Enumeration.DeviceInformation[];
		unshift(...items: Windows.Devices.Enumeration.DeviceInformation[]): number;
		lastIndexOf(searchElement: Windows.Devices.Enumeration.DeviceInformation): number;
		lastIndexOf(
		searchElement: Windows.Devices.Enumeration.DeviceInformation, fromIndex: number
	): number;
		every(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => boolean
	): Windows.Devices.Enumeration.DeviceInformation[];
		filter(
		callbackfn: (
		value: Windows.Devices.Enumeration.DeviceInformation, index: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => boolean, thisArg: any
	): Windows.Devices.Enumeration.DeviceInformation[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Devices.Enumeration.DeviceInformation[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class DeviceWatcher extends undefined$IDeviceWatcher {
		status: Windows.Devices.Enumeration.DeviceWatcherStatus;
		onadded: any;
		onupdated: any;
		onremoved: any;
		onenumerationcompleted: any;
		onstopped: any;
		start(): void;
		stop(): void
	}

	declare export class DeviceInformation extends undefined$IDeviceInformation {
		enclosureLocation: Windows.Devices.Enumeration.EnclosureLocation;
		id: string;
		isDefault: boolean;
		isEnabled: boolean;
		name: string;
		properties: Windows.Foundation.Collections.IMapView<string, any>;
		update(updateInfo: Windows.Devices.Enumeration.DeviceInformationUpdate): void;
		getThumbnailAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceThumbnail>;
		getGlyphThumbnailAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceThumbnail>;
		createFromIdAsync(
		id: string
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformation>;
		createFromIdAsync(
		id: string, additionalProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformation>;
		findAllAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformationCollection>;
		findAllAsync(
		deviceClass: Windows.Devices.Enumeration.DeviceClass
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformationCollection>;
		findAllAsync(
		aqsFilter: string
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformationCollection>;
		findAllAsync(
		aqsFilter: string, additionalProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.DeviceInformationCollection>;
		createWatcher(): Windows.Devices.Enumeration.DeviceWatcher;
		createWatcher(
		deviceClass: Windows.Devices.Enumeration.DeviceClass
	): Windows.Devices.Enumeration.DeviceWatcher;
		createWatcher(aqsFilter: string): Windows.Devices.Enumeration.DeviceWatcher;
		createWatcher(
		aqsFilter: string, additionalProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Devices.Enumeration.DeviceWatcher
	}

	
}

declare module 'Pnp' {
		declare export interface IPnpObjectUpdate {
		id: string,
		properties: Windows.Foundation.Collections.IMapView<string, any>,
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType
	}

	declare export interface IPnpObjectWatcher {
		status: Windows.Devices.Enumeration.DeviceWatcherStatus,
		onadded: any,
		onupdated: any,
		onremoved: any,
		onenumerationcompleted: any,
		onstopped: any,
		start(): void,
		stop(): void
	}

	declare export interface IPnpObjectStatics {
		createFromIdAsync(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, id: string, requestedProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.Pnp.PnpObject>,
		findAllAsync(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, requestedProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.Pnp.PnpObjectCollection>,
		findAllAsync(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, requestedProperties: Windows.Foundation.Collections.IIterable<string>, aqsFilter: string
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.Pnp.PnpObjectCollection>,
		createWatcher(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, requestedProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Devices.Enumeration.Pnp.PnpObjectWatcher,
		createWatcher(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, requestedProperties: Windows.Foundation.Collections.IIterable<string>, aqsFilter: string
	): Windows.Devices.Enumeration.Pnp.PnpObjectWatcher
	}

	declare export interface IPnpObject {
		id: string,
		properties: Windows.Foundation.Collections.IMapView<string, any>,
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType,
		update(updateInfo: Windows.Devices.Enumeration.Pnp.PnpObjectUpdate): void
	}

		declare export class PnpObjectUpdate extends undefined$IPnpObjectUpdate {
		id: string;
		properties: Windows.Foundation.Collections.IMapView<string, any>;
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType
	}

	declare export class PnpObjectCollection extends undefined$IVectorView<Windows.Devices.Enumeration.Pnp.PnpObject> {
		size: number;
		getAt(index: number): Windows.Devices.Enumeration.Pnp.PnpObject;
		indexOf(
		value: Windows.Devices.Enumeration.Pnp.PnpObject
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.Devices.Enumeration.Pnp.PnpObject[],
		returnValue: number
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Devices.Enumeration.Pnp.PnpObject>;
		toString(): string;
		toLocaleString(): string;
		concat(
		...items: Windows.Devices.Enumeration.Pnp.PnpObject[][]
	): Windows.Devices.Enumeration.Pnp.PnpObject[];
		join(seperator: string): string;
		pop(): Windows.Devices.Enumeration.Pnp.PnpObject;
		push(...items: Windows.Devices.Enumeration.Pnp.PnpObject[]): void;
		reverse(): Windows.Devices.Enumeration.Pnp.PnpObject[];
		shift(): Windows.Devices.Enumeration.Pnp.PnpObject;
		slice(start: number): Windows.Devices.Enumeration.Pnp.PnpObject[];
		slice(start: number, end: number): Windows.Devices.Enumeration.Pnp.PnpObject[];
		sort(): Windows.Devices.Enumeration.Pnp.PnpObject[];
		sort(
		compareFn: (
		a: Windows.Devices.Enumeration.Pnp.PnpObject, b: Windows.Devices.Enumeration.Pnp.PnpObject
	) => number
	): Windows.Devices.Enumeration.Pnp.PnpObject[];
		splice(start: number): Windows.Devices.Enumeration.Pnp.PnpObject[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Devices.Enumeration.Pnp.PnpObject[]
	): Windows.Devices.Enumeration.Pnp.PnpObject[];
		unshift(...items: Windows.Devices.Enumeration.Pnp.PnpObject[]): number;
		lastIndexOf(searchElement: Windows.Devices.Enumeration.Pnp.PnpObject): number;
		lastIndexOf(
		searchElement: Windows.Devices.Enumeration.Pnp.PnpObject, fromIndex: number
	): number;
		every(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => boolean
	): Windows.Devices.Enumeration.Pnp.PnpObject[];
		filter(
		callbackfn: (
		value: Windows.Devices.Enumeration.Pnp.PnpObject, index: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => boolean, thisArg: any
	): Windows.Devices.Enumeration.Pnp.PnpObject[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Devices.Enumeration.Pnp.PnpObject[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class PnpObjectWatcher extends undefined$IPnpObjectWatcher {
		status: Windows.Devices.Enumeration.DeviceWatcherStatus;
		onadded: any;
		onupdated: any;
		onremoved: any;
		onenumerationcompleted: any;
		onstopped: any;
		start(): void;
		stop(): void
	}

	declare export class PnpObject extends undefined$IPnpObject {
		id: string;
		properties: Windows.Foundation.Collections.IMapView<string, any>;
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType;
		update(updateInfo: Windows.Devices.Enumeration.Pnp.PnpObjectUpdate): void;
		createFromIdAsync(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, id: string, requestedProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.Pnp.PnpObject>;
		findAllAsync(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, requestedProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.Pnp.PnpObjectCollection>;
		findAllAsync(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, requestedProperties: Windows.Foundation.Collections.IIterable<string>, aqsFilter: string
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Enumeration.Pnp.PnpObjectCollection>;
		createWatcher(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, requestedProperties: Windows.Foundation.Collections.IIterable<string>
	): Windows.Devices.Enumeration.Pnp.PnpObjectWatcher;
		createWatcher(
		type: Windows.Devices.Enumeration.Pnp.PnpObjectType, requestedProperties: Windows.Foundation.Collections.IIterable<string>, aqsFilter: string
	): Windows.Devices.Enumeration.Pnp.PnpObjectWatcher
	}

	
}

declare module 'Geolocation' {
		declare export interface IGeocoordinate {
		accuracy: number,
		altitude: number,
		altitudeAccuracy: number,
		heading: number,
		latitude: number,
		longitude: number,
		speed: number,
		timestamp: Date
	}

	declare export interface ICivicAddress {
		city: string,
		country: string,
		postalCode: string,
		state: string,
		timestamp: Date
	}

	declare export interface IGeoposition {
		civicAddress: Windows.Devices.Geolocation.CivicAddress,
		coordinate: Windows.Devices.Geolocation.Geocoordinate
	}

	declare export interface IPositionChangedEventArgs {
		position: Windows.Devices.Geolocation.Geoposition
	}

	declare export interface IStatusChangedEventArgs {
		status: Windows.Devices.Geolocation.PositionStatus
	}

	declare export interface IGeolocator {
		desiredAccuracy: Windows.Devices.Geolocation.PositionAccuracy,
		locationStatus: Windows.Devices.Geolocation.PositionStatus,
		movementThreshold: number,
		reportInterval: number,
		getGeopositionAsync(): Windows.Foundation.IAsyncOperation<Windows.Devices.Geolocation.Geoposition>,
		getGeopositionAsync(
		maximumAge: number, timeout: number
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Geolocation.Geoposition>,
		onpositionchanged: any,
		onstatuschanged: any
	}

		declare export class Geocoordinate extends undefined$IGeocoordinate {
		accuracy: number;
		altitude: number;
		altitudeAccuracy: number;
		heading: number;
		latitude: number;
		longitude: number;
		speed: number;
		timestamp: Date
	}

	declare export class CivicAddress extends undefined$ICivicAddress {
		city: string;
		country: string;
		postalCode: string;
		state: string;
		timestamp: Date
	}

	declare export class Geoposition extends undefined$IGeoposition {
		civicAddress: Windows.Devices.Geolocation.CivicAddress;
		coordinate: Windows.Devices.Geolocation.Geocoordinate
	}

	declare export class PositionChangedEventArgs extends undefined$IPositionChangedEventArgs {
		position: Windows.Devices.Geolocation.Geoposition
	}

	declare export class StatusChangedEventArgs extends undefined$IStatusChangedEventArgs {
		status: Windows.Devices.Geolocation.PositionStatus
	}

	declare export class Geolocator extends undefined$IGeolocator {
		desiredAccuracy: Windows.Devices.Geolocation.PositionAccuracy;
		locationStatus: Windows.Devices.Geolocation.PositionStatus;
		movementThreshold: number;
		reportInterval: number;
		getGeopositionAsync(): Windows.Foundation.IAsyncOperation<Windows.Devices.Geolocation.Geoposition>;
		getGeopositionAsync(
		maximumAge: number, timeout: number
	): Windows.Foundation.IAsyncOperation<Windows.Devices.Geolocation.Geoposition>;
		onpositionchanged: any;
		onstatuschanged: any
	}

	
}

declare module 'Input' {
		declare export interface PointerDeviceUsage {
		usagePage: number,
		usage: number,
		minLogical: number,
		maxLogical: number,
		minPhysical: number,
		maxPhysical: number,
		unit: number,
		physicalMultiplier: number
	}

	declare export interface MouseDelta {
		x: number,
		y: number
	}

	declare export interface IMouseCapabilities {
		horizontalWheelPresent: number,
		mousePresent: number,
		numberOfButtons: number,
		swapButtons: number,
		verticalWheelPresent: number
	}

	declare export interface IKeyboardCapabilities {
		keyboardPresent: number
	}

	declare export interface ITouchCapabilities {
		contacts: number,
		touchPresent: number
	}

	declare export interface IPointerDeviceStatics {
		getPointerDevice(pointerId: number): Windows.Devices.Input.PointerDevice,
		getPointerDevices(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Devices.Input.PointerDevice>
	}

	declare export interface IPointerDevice {
		isIntegrated: boolean,
		maxContacts: number,
		physicalDeviceRect: Windows.Foundation.Rect,
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		screenRect: Windows.Foundation.Rect,
		supportedUsages: Windows.Foundation.Collections.IVectorView<Windows.Devices.Input.PointerDeviceUsage>
	}

	declare export interface IMouseEventArgs {
		mouseDelta: Windows.Devices.Input.MouseDelta
	}

	declare export interface IMouseDevice {
		onmousemoved: any
	}

	declare export interface IMouseDeviceStatics {
		getForCurrentView(): Windows.Devices.Input.MouseDevice
	}

	declare export interface IEdgeGestureEventArgs {
		kind: Windows.UI.Input.EdgeGestureKind
	}

	declare export interface IEdgeGestureStatics {
		getForCurrentView(): Windows.UI.Input.EdgeGesture
	}

	declare export interface IEdgeGesture {
		onstarting: any,
		oncompleted: any,
		oncanceled: any
	}

	declare export interface ManipulationDelta {
		translation: Windows.Foundation.Point,
		scale: number,
		rotation: number,
		expansion: number
	}

	declare export interface ManipulationVelocities {
		linear: Windows.Foundation.Point,
		angular: number,
		expansion: number
	}

	declare export interface CrossSlideThresholds {
		selectionStart: number,
		speedBumpStart: number,
		speedBumpEnd: number,
		rearrangeStart: number
	}

	declare export interface ITappedEventArgs {
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		position: Windows.Foundation.Point,
		tapCount: number
	}

	declare export interface IRightTappedEventArgs {
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		position: Windows.Foundation.Point
	}

	declare export interface IHoldingEventArgs {
		holdingState: Windows.UI.Input.HoldingState,
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		position: Windows.Foundation.Point
	}

	declare export interface IDraggingEventArgs {
		draggingState: Windows.UI.Input.DraggingState,
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		position: Windows.Foundation.Point
	}

	declare export interface IManipulationStartedEventArgs {
		cumulative: Windows.UI.Input.ManipulationDelta,
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		position: Windows.Foundation.Point
	}

	declare export interface IManipulationUpdatedEventArgs {
		cumulative: Windows.UI.Input.ManipulationDelta,
		delta: Windows.UI.Input.ManipulationDelta,
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		position: Windows.Foundation.Point,
		velocities: Windows.UI.Input.ManipulationVelocities
	}

	declare export interface IManipulationInertiaStartingEventArgs {
		cumulative: Windows.UI.Input.ManipulationDelta,
		delta: Windows.UI.Input.ManipulationDelta,
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		position: Windows.Foundation.Point,
		velocities: Windows.UI.Input.ManipulationVelocities
	}

	declare export interface IManipulationCompletedEventArgs {
		cumulative: Windows.UI.Input.ManipulationDelta,
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		position: Windows.Foundation.Point,
		velocities: Windows.UI.Input.ManipulationVelocities
	}

	declare export interface ICrossSlidingEventArgs {
		crossSlidingState: Windows.UI.Input.CrossSlidingState,
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType,
		position: Windows.Foundation.Point
	}

	declare export interface IMouseWheelParameters {
		charTranslation: Windows.Foundation.Point,
		deltaRotationAngle: number,
		deltaScale: number,
		pageTranslation: Windows.Foundation.Point
	}

	declare export interface IGestureRecognizer {
		autoProcessInertia: boolean,
		crossSlideExact: boolean,
		crossSlideHorizontally: boolean,
		crossSlideThresholds: Windows.UI.Input.CrossSlideThresholds,
		gestureSettings: Windows.UI.Input.GestureSettings,
		inertiaExpansion: number,
		inertiaExpansionDeceleration: number,
		inertiaRotationAngle: number,
		inertiaRotationDeceleration: number,
		inertiaTranslationDeceleration: number,
		inertiaTranslationDisplacement: number,
		isActive: boolean,
		isInertial: boolean,
		manipulationExact: boolean,
		mouseWheelParameters: Windows.UI.Input.MouseWheelParameters,
		pivotCenter: Windows.Foundation.Point,
		pivotRadius: number,
		showGestureFeedback: boolean,
		canBeDoubleTap(value: Windows.UI.Input.PointerPoint): boolean,
		processDownEvent(value: Windows.UI.Input.PointerPoint): void,
		processMoveEvents(
		value: Windows.Foundation.Collections.IVector<Windows.UI.Input.PointerPoint>
	): void,
		processUpEvent(value: Windows.UI.Input.PointerPoint): void,
		processMouseWheelEvent(
		value: Windows.UI.Input.PointerPoint, isShiftKeyDown: boolean, isControlKeyDown: boolean
	): void,
		processInertia(): void,
		completeGesture(): void,
		ontapped: any,
		onrighttapped: any,
		onholding: any,
		ondragging: any,
		onmanipulationstarted: any,
		onmanipulationupdated: any,
		onmanipulationinertiastarting: any,
		onmanipulationcompleted: any,
		oncrosssliding: any
	}

	declare export interface IPointerPointStatics {
		getCurrentPoint(pointerId: number): Windows.UI.Input.PointerPoint,
		getIntermediatePoints(
		pointerId: number
	): Windows.Foundation.Collections.IVector<Windows.UI.Input.PointerPoint>,
		getCurrentPoint(
		pointerId: number, transform: Windows.UI.Input.IPointerPointTransform
	): Windows.UI.Input.PointerPoint,
		getIntermediatePoints(
		pointerId: number, transform: Windows.UI.Input.IPointerPointTransform
	): Windows.Foundation.Collections.IVector<Windows.UI.Input.PointerPoint>
	}

	declare export interface IPointerPointTransform {
		inverse: Windows.UI.Input.IPointerPointTransform,
		tryTransform(
		inPoint: Windows.Foundation.Point
	): {
		outPoint: Windows.Foundation.Point,
		returnValue: boolean
	},
		transformBounds(rect: Windows.Foundation.Rect): Windows.Foundation.Rect
	}

	declare export interface IPointerPoint {
		frameId: number,
		isInContact: boolean,
		pointerDevice: Windows.Devices.Input.PointerDevice,
		pointerId: number,
		position: Windows.Foundation.Point,
		properties: Windows.UI.Input.PointerPointProperties,
		rawPosition: Windows.Foundation.Point,
		timestamp: number
	}

	declare export interface IPointerPointProperties {
		contactRect: Windows.Foundation.Rect,
		contactRectRaw: Windows.Foundation.Rect,
		isBarrelButtonPressed: boolean,
		isCanceled: boolean,
		isEraser: boolean,
		isHorizontalMouseWheel: boolean,
		isInRange: boolean,
		isInverted: boolean,
		isLeftButtonPressed: boolean,
		isMiddleButtonPressed: boolean,
		isPrimary: boolean,
		isRightButtonPressed: boolean,
		isXButton1Pressed: boolean,
		isXButton2Pressed: boolean,
		mouseWheelDelta: number,
		orientation: number,
		pointerUpdateKind: Windows.UI.Input.PointerUpdateKind,
		pressure: number,
		touchConfidence: boolean,
		twist: number,
		xTilt: number,
		yTilt: number,
		hasUsage(usagePage: number, usageId: number): boolean,
		getUsageValue(usagePage: number, usageId: number): number
	}

	declare export interface IPointerVisualizationSettings {
		isBarrelButtonFeedbackEnabled: boolean,
		isContactFeedbackEnabled: boolean
	}

	declare export interface IPointerVisualizationSettingsStatics {
		getForCurrentView(): Windows.UI.Input.PointerVisualizationSettings
	}

		declare export class PointerDevice extends undefined$IPointerDevice {
		isIntegrated: boolean;
		maxContacts: number;
		physicalDeviceRect: Windows.Foundation.Rect;
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		screenRect: Windows.Foundation.Rect;
		supportedUsages: Windows.Foundation.Collections.IVectorView<Windows.Devices.Input.PointerDeviceUsage>;
		getPointerDevice(pointerId: number): Windows.Devices.Input.PointerDevice;
		getPointerDevices(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Devices.Input.PointerDevice>
	}

	declare export class MouseDevice extends undefined$IMouseDevice {
		onmousemoved: any;
		getForCurrentView(): Windows.Devices.Input.MouseDevice
	}

	declare export class MouseEventArgs extends undefined$IMouseEventArgs {
		mouseDelta: Windows.Devices.Input.MouseDelta
	}

	declare export class MouseCapabilities extends undefined$IMouseCapabilities {
		horizontalWheelPresent: number;
		mousePresent: number;
		numberOfButtons: number;
		swapButtons: number;
		verticalWheelPresent: number
	}

	declare export class KeyboardCapabilities extends undefined$IKeyboardCapabilities {
		keyboardPresent: number
	}

	declare export class TouchCapabilities extends undefined$ITouchCapabilities {
		contacts: number;
		touchPresent: number
	}

	declare export class EdgeGestureEventArgs extends undefined$IEdgeGestureEventArgs {
		kind: Windows.UI.Input.EdgeGestureKind
	}

	declare export class EdgeGesture extends undefined$IEdgeGesture {
		onstarting: any;
		oncompleted: any;
		oncanceled: any;
		getForCurrentView(): Windows.UI.Input.EdgeGesture
	}

	declare export class MouseWheelParameters extends undefined$IMouseWheelParameters {
		charTranslation: Windows.Foundation.Point;
		deltaRotationAngle: number;
		deltaScale: number;
		pageTranslation: Windows.Foundation.Point
	}

	declare export class GestureRecognizer extends undefined$IGestureRecognizer {
		autoProcessInertia: boolean;
		crossSlideExact: boolean;
		crossSlideHorizontally: boolean;
		crossSlideThresholds: Windows.UI.Input.CrossSlideThresholds;
		gestureSettings: Windows.UI.Input.GestureSettings;
		inertiaExpansion: number;
		inertiaExpansionDeceleration: number;
		inertiaRotationAngle: number;
		inertiaRotationDeceleration: number;
		inertiaTranslationDeceleration: number;
		inertiaTranslationDisplacement: number;
		isActive: boolean;
		isInertial: boolean;
		manipulationExact: boolean;
		mouseWheelParameters: Windows.UI.Input.MouseWheelParameters;
		pivotCenter: Windows.Foundation.Point;
		pivotRadius: number;
		showGestureFeedback: boolean;
		canBeDoubleTap(value: Windows.UI.Input.PointerPoint): boolean;
		processDownEvent(value: Windows.UI.Input.PointerPoint): void;
		processMoveEvents(
		value: Windows.Foundation.Collections.IVector<Windows.UI.Input.PointerPoint>
	): void;
		processUpEvent(value: Windows.UI.Input.PointerPoint): void;
		processMouseWheelEvent(
		value: Windows.UI.Input.PointerPoint, isShiftKeyDown: boolean, isControlKeyDown: boolean
	): void;
		processInertia(): void;
		completeGesture(): void;
		ontapped: any;
		onrighttapped: any;
		onholding: any;
		ondragging: any;
		onmanipulationstarted: any;
		onmanipulationupdated: any;
		onmanipulationinertiastarting: any;
		onmanipulationcompleted: any;
		oncrosssliding: any
	}

	declare export class TappedEventArgs extends undefined$ITappedEventArgs {
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		position: Windows.Foundation.Point;
		tapCount: number
	}

	declare export class RightTappedEventArgs extends undefined$IRightTappedEventArgs {
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		position: Windows.Foundation.Point
	}

	declare export class HoldingEventArgs extends undefined$IHoldingEventArgs {
		holdingState: Windows.UI.Input.HoldingState;
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		position: Windows.Foundation.Point
	}

	declare export class DraggingEventArgs extends undefined$IDraggingEventArgs {
		draggingState: Windows.UI.Input.DraggingState;
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		position: Windows.Foundation.Point
	}

	declare export class ManipulationStartedEventArgs extends undefined$IManipulationStartedEventArgs {
		cumulative: Windows.UI.Input.ManipulationDelta;
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		position: Windows.Foundation.Point
	}

	declare export class ManipulationUpdatedEventArgs extends undefined$IManipulationUpdatedEventArgs {
		cumulative: Windows.UI.Input.ManipulationDelta;
		delta: Windows.UI.Input.ManipulationDelta;
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		position: Windows.Foundation.Point;
		velocities: Windows.UI.Input.ManipulationVelocities
	}

	declare export class ManipulationInertiaStartingEventArgs extends undefined$IManipulationInertiaStartingEventArgs {
		cumulative: Windows.UI.Input.ManipulationDelta;
		delta: Windows.UI.Input.ManipulationDelta;
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		position: Windows.Foundation.Point;
		velocities: Windows.UI.Input.ManipulationVelocities
	}

	declare export class ManipulationCompletedEventArgs extends undefined$IManipulationCompletedEventArgs {
		cumulative: Windows.UI.Input.ManipulationDelta;
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		position: Windows.Foundation.Point;
		velocities: Windows.UI.Input.ManipulationVelocities
	}

	declare export class CrossSlidingEventArgs extends undefined$ICrossSlidingEventArgs {
		crossSlidingState: Windows.UI.Input.CrossSlidingState;
		pointerDeviceType: Windows.Devices.Input.PointerDeviceType;
		position: Windows.Foundation.Point
	}

	declare export class PointerPoint extends undefined$IPointerPoint {
		frameId: number;
		isInContact: boolean;
		pointerDevice: Windows.Devices.Input.PointerDevice;
		pointerId: number;
		position: Windows.Foundation.Point;
		properties: Windows.UI.Input.PointerPointProperties;
		rawPosition: Windows.Foundation.Point;
		timestamp: number;
		getCurrentPoint(pointerId: number): Windows.UI.Input.PointerPoint;
		getIntermediatePoints(
		pointerId: number
	): Windows.Foundation.Collections.IVector<Windows.UI.Input.PointerPoint>;
		getCurrentPoint(
		pointerId: number, transform: Windows.UI.Input.IPointerPointTransform
	): Windows.UI.Input.PointerPoint;
		getIntermediatePoints(
		pointerId: number, transform: Windows.UI.Input.IPointerPointTransform
	): Windows.Foundation.Collections.IVector<Windows.UI.Input.PointerPoint>
	}

	declare export class PointerPointProperties extends undefined$IPointerPointProperties {
		contactRect: Windows.Foundation.Rect;
		contactRectRaw: Windows.Foundation.Rect;
		isBarrelButtonPressed: boolean;
		isCanceled: boolean;
		isEraser: boolean;
		isHorizontalMouseWheel: boolean;
		isInRange: boolean;
		isInverted: boolean;
		isLeftButtonPressed: boolean;
		isMiddleButtonPressed: boolean;
		isPrimary: boolean;
		isRightButtonPressed: boolean;
		isXButton1Pressed: boolean;
		isXButton2Pressed: boolean;
		mouseWheelDelta: number;
		orientation: number;
		pointerUpdateKind: Windows.UI.Input.PointerUpdateKind;
		pressure: number;
		touchConfidence: boolean;
		twist: number;
		xTilt: number;
		yTilt: number;
		hasUsage(usagePage: number, usageId: number): boolean;
		getUsageValue(usagePage: number, usageId: number): number
	}

	declare export class PointerVisualizationSettings extends undefined$IPointerVisualizationSettings {
		isBarrelButtonFeedbackEnabled: boolean;
		isContactFeedbackEnabled: boolean;
		getForCurrentView(): Windows.UI.Input.PointerVisualizationSettings
	}

	
}

declare module 'Portable' {
		declare export interface IStorageDeviceStatics {
		fromId(interfaceId: string): Windows.Storage.StorageFolder,
		getDeviceSelector(): string
	}

	declare export interface IServiceDeviceStatics {
		getDeviceSelector(serviceType: Windows.Devices.Portable.ServiceDeviceType): string,
		getDeviceSelectorFromServiceId(serviceId: string): string
	}

		declare export class StorageDevice  {
		fromId(interfaceId: string): Windows.Storage.StorageFolder;
		getDeviceSelector(): string
	}

	declare export class ServiceDevice  {
		getDeviceSelector(serviceType: Windows.Devices.Portable.ServiceDeviceType): string;
		getDeviceSelectorFromServiceId(serviceId: string): string
	}

	
}

declare module 'Extensions' {
		declare export interface IPrintTaskConfigurationSaveRequestedDeferral {
		complete(): void
	}

	declare export interface IPrintTaskConfigurationSaveRequest {
		deadline: Date,
		cancel(): void,
		save(printerExtensionContext: any): void,
		getDeferral(
		
	): Windows.Devices.Printers.Extensions.PrintTaskConfigurationSaveRequestedDeferral
	}

	declare export interface IPrintTaskConfigurationSaveRequestedEventArgs {
		request: Windows.Devices.Printers.Extensions.PrintTaskConfigurationSaveRequest
	}

	declare export interface IPrintTaskConfiguration {
		printerExtensionContext: any,
		onsaverequested: any
	}

	declare export interface IPrintNotificationEventDetails {
		eventData: string,
		printerName: string
	}

	declare export interface IPrintExtensionContextStatic {
		fromDeviceId(deviceId: string): any
	}

		declare export class PrintTaskConfigurationSaveRequestedDeferral extends undefined$IPrintTaskConfigurationSaveRequestedDeferral {
		complete(): void
	}

	declare export class PrintTaskConfigurationSaveRequest extends undefined$IPrintTaskConfigurationSaveRequest {
		deadline: Date;
		cancel(): void;
		save(printerExtensionContext: any): void;
		getDeferral(
		
	): Windows.Devices.Printers.Extensions.PrintTaskConfigurationSaveRequestedDeferral
	}

	declare export class PrintTaskConfigurationSaveRequestedEventArgs extends undefined$IPrintTaskConfigurationSaveRequestedEventArgs {
		request: Windows.Devices.Printers.Extensions.PrintTaskConfigurationSaveRequest
	}

	declare export class PrintTaskConfiguration extends undefined$IPrintTaskConfiguration {
		printerExtensionContext: any;
		onsaverequested: any
	}

	declare export class PrintNotificationEventDetails extends undefined$IPrintNotificationEventDetails {
		eventData: string;
		printerName: string
	}

	declare export class PrintExtensionContext  {
		fromDeviceId(deviceId: string): any
	}

	
}

declare module 'Sensors' {
		declare export interface IAccelerometerStatics {
		getDefault(): Windows.Devices.Sensors.Accelerometer
	}

	declare export interface IAccelerometer {
		minimumReportInterval: number,
		reportInterval: number,
		getCurrentReading(): Windows.Devices.Sensors.AccelerometerReading,
		onreadingchanged: any,
		onshaken: any
	}

	declare export interface IAccelerometerReading {
		accelerationX: number,
		accelerationY: number,
		accelerationZ: number,
		timestamp: Date
	}

	declare export interface IAccelerometerReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.AccelerometerReading
	}

	declare export interface IAccelerometerShakenEventArgs {
		timestamp: Date
	}

	declare export interface IInclinometerStatics {
		getDefault(): Windows.Devices.Sensors.Inclinometer
	}

	declare export interface IInclinometer {
		minimumReportInterval: number,
		reportInterval: number,
		getCurrentReading(): Windows.Devices.Sensors.InclinometerReading,
		onreadingchanged: any
	}

	declare export interface IInclinometerReading {
		pitchDegrees: number,
		rollDegrees: number,
		timestamp: Date,
		yawDegrees: number
	}

	declare export interface IInclinometerReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.InclinometerReading
	}

	declare export interface IGyrometerStatics {
		getDefault(): Windows.Devices.Sensors.Gyrometer
	}

	declare export interface IGyrometer {
		minimumReportInterval: number,
		reportInterval: number,
		getCurrentReading(): Windows.Devices.Sensors.GyrometerReading,
		onreadingchanged: any
	}

	declare export interface IGyrometerReading {
		angularVelocityX: number,
		angularVelocityY: number,
		angularVelocityZ: number,
		timestamp: Date
	}

	declare export interface IGyrometerReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.GyrometerReading
	}

	declare export interface ICompassStatics {
		getDefault(): Windows.Devices.Sensors.Compass
	}

	declare export interface ICompass {
		minimumReportInterval: number,
		reportInterval: number,
		getCurrentReading(): Windows.Devices.Sensors.CompassReading,
		onreadingchanged: any
	}

	declare export interface ICompassReading {
		headingMagneticNorth: number,
		headingTrueNorth: number,
		timestamp: Date
	}

	declare export interface ICompassReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.CompassReading
	}

	declare export interface ILightSensorStatics {
		getDefault(): Windows.Devices.Sensors.LightSensor
	}

	declare export interface ILightSensor {
		minimumReportInterval: number,
		reportInterval: number,
		getCurrentReading(): Windows.Devices.Sensors.LightSensorReading,
		onreadingchanged: any
	}

	declare export interface ILightSensorReading {
		illuminanceInLux: number,
		timestamp: Date
	}

	declare export interface ILightSensorReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.LightSensorReading
	}

	declare export interface ISensorRotationMatrix {
		m11: number,
		m12: number,
		m13: number,
		m21: number,
		m22: number,
		m23: number,
		m31: number,
		m32: number,
		m33: number
	}

	declare export interface ISensorQuaternion {
		w: number,
		x: number,
		y: number,
		z: number
	}

	declare export interface IOrientationSensorStatics {
		getDefault(): Windows.Devices.Sensors.OrientationSensor
	}

	declare export interface IOrientationSensor {
		minimumReportInterval: number,
		reportInterval: number,
		getCurrentReading(): Windows.Devices.Sensors.OrientationSensorReading,
		onreadingchanged: any
	}

	declare export interface IOrientationSensorReading {
		quaternion: Windows.Devices.Sensors.SensorQuaternion,
		rotationMatrix: Windows.Devices.Sensors.SensorRotationMatrix,
		timestamp: Date
	}

	declare export interface IOrientationSensorReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.OrientationSensorReading
	}

	declare export interface ISimpleOrientationSensorStatics {
		getDefault(): Windows.Devices.Sensors.SimpleOrientationSensor
	}

	declare export interface ISimpleOrientationSensor {
		getCurrentOrientation(): Windows.Devices.Sensors.SimpleOrientation,
		onorientationchanged: any
	}

	declare export interface ISimpleOrientationSensorOrientationChangedEventArgs {
		orientation: Windows.Devices.Sensors.SimpleOrientation,
		timestamp: Date
	}

		declare export class Accelerometer extends undefined$IAccelerometer {
		minimumReportInterval: number;
		reportInterval: number;
		getCurrentReading(): Windows.Devices.Sensors.AccelerometerReading;
		onreadingchanged: any;
		onshaken: any;
		getDefault(): Windows.Devices.Sensors.Accelerometer
	}

	declare export class AccelerometerReading extends undefined$IAccelerometerReading {
		accelerationX: number;
		accelerationY: number;
		accelerationZ: number;
		timestamp: Date
	}

	declare export class AccelerometerReadingChangedEventArgs extends undefined$IAccelerometerReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.AccelerometerReading
	}

	declare export class AccelerometerShakenEventArgs extends undefined$IAccelerometerShakenEventArgs {
		timestamp: Date
	}

	declare export class Inclinometer extends undefined$IInclinometer {
		minimumReportInterval: number;
		reportInterval: number;
		getCurrentReading(): Windows.Devices.Sensors.InclinometerReading;
		onreadingchanged: any;
		getDefault(): Windows.Devices.Sensors.Inclinometer
	}

	declare export class InclinometerReading extends undefined$IInclinometerReading {
		pitchDegrees: number;
		rollDegrees: number;
		timestamp: Date;
		yawDegrees: number
	}

	declare export class InclinometerReadingChangedEventArgs extends undefined$IInclinometerReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.InclinometerReading
	}

	declare export class Gyrometer extends undefined$IGyrometer {
		minimumReportInterval: number;
		reportInterval: number;
		getCurrentReading(): Windows.Devices.Sensors.GyrometerReading;
		onreadingchanged: any;
		getDefault(): Windows.Devices.Sensors.Gyrometer
	}

	declare export class GyrometerReading extends undefined$IGyrometerReading {
		angularVelocityX: number;
		angularVelocityY: number;
		angularVelocityZ: number;
		timestamp: Date
	}

	declare export class GyrometerReadingChangedEventArgs extends undefined$IGyrometerReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.GyrometerReading
	}

	declare export class Compass extends undefined$ICompass {
		minimumReportInterval: number;
		reportInterval: number;
		getCurrentReading(): Windows.Devices.Sensors.CompassReading;
		onreadingchanged: any;
		getDefault(): Windows.Devices.Sensors.Compass
	}

	declare export class CompassReading extends undefined$ICompassReading {
		headingMagneticNorth: number;
		headingTrueNorth: number;
		timestamp: Date
	}

	declare export class CompassReadingChangedEventArgs extends undefined$ICompassReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.CompassReading
	}

	declare export class LightSensor extends undefined$ILightSensor {
		minimumReportInterval: number;
		reportInterval: number;
		getCurrentReading(): Windows.Devices.Sensors.LightSensorReading;
		onreadingchanged: any;
		getDefault(): Windows.Devices.Sensors.LightSensor
	}

	declare export class LightSensorReading extends undefined$ILightSensorReading {
		illuminanceInLux: number;
		timestamp: Date
	}

	declare export class LightSensorReadingChangedEventArgs extends undefined$ILightSensorReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.LightSensorReading
	}

	declare export class SensorRotationMatrix extends undefined$ISensorRotationMatrix {
		m11: number;
		m12: number;
		m13: number;
		m21: number;
		m22: number;
		m23: number;
		m31: number;
		m32: number;
		m33: number
	}

	declare export class SensorQuaternion extends undefined$ISensorQuaternion {
		w: number;
		x: number;
		y: number;
		z: number
	}

	declare export class OrientationSensor extends undefined$IOrientationSensor {
		minimumReportInterval: number;
		reportInterval: number;
		getCurrentReading(): Windows.Devices.Sensors.OrientationSensorReading;
		onreadingchanged: any;
		getDefault(): Windows.Devices.Sensors.OrientationSensor
	}

	declare export class OrientationSensorReading extends undefined$IOrientationSensorReading {
		quaternion: Windows.Devices.Sensors.SensorQuaternion;
		rotationMatrix: Windows.Devices.Sensors.SensorRotationMatrix;
		timestamp: Date
	}

	declare export class OrientationSensorReadingChangedEventArgs extends undefined$IOrientationSensorReadingChangedEventArgs {
		reading: Windows.Devices.Sensors.OrientationSensorReading
	}

	declare export class SimpleOrientationSensor extends undefined$ISimpleOrientationSensor {
		getCurrentOrientation(): Windows.Devices.Sensors.SimpleOrientation;
		onorientationchanged: any;
		getDefault(): Windows.Devices.Sensors.SimpleOrientationSensor
	}

	declare export class SimpleOrientationSensorOrientationChangedEventArgs extends undefined$ISimpleOrientationSensorOrientationChangedEventArgs {
		orientation: Windows.Devices.Sensors.SimpleOrientation;
		timestamp: Date
	}

	
}

declare module 'Fonts' {
		declare export interface ILanguageFontGroup {
		documentAlternate1Font: Windows.Globalization.Fonts.LanguageFont,
		documentAlternate2Font: Windows.Globalization.Fonts.LanguageFont,
		documentHeadingFont: Windows.Globalization.Fonts.LanguageFont,
		fixedWidthTextFont: Windows.Globalization.Fonts.LanguageFont,
		modernDocumentFont: Windows.Globalization.Fonts.LanguageFont,
		traditionalDocumentFont: Windows.Globalization.Fonts.LanguageFont,
		uICaptionFont: Windows.Globalization.Fonts.LanguageFont,
		uIHeadingFont: Windows.Globalization.Fonts.LanguageFont,
		uINotificationHeadingFont: Windows.Globalization.Fonts.LanguageFont,
		uITextFont: Windows.Globalization.Fonts.LanguageFont,
		uITitleFont: Windows.Globalization.Fonts.LanguageFont
	}

	declare export interface ILanguageFontGroupFactory {
		createLanguageFontGroup(languageTag: string): Windows.Globalization.Fonts.LanguageFontGroup
	}

	declare export interface ILanguageFont {
		fontFamily: string,
		fontStretch: Windows.UI.Text.FontStretch,
		fontStyle: Windows.UI.Text.FontStyle,
		fontWeight: Windows.UI.Text.FontWeight,
		scaleFactor: number
	}

		declare export class LanguageFont extends undefined$ILanguageFont {
		fontFamily: string;
		fontStretch: Windows.UI.Text.FontStretch;
		fontStyle: Windows.UI.Text.FontStyle;
		fontWeight: Windows.UI.Text.FontWeight;
		scaleFactor: number
	}

	declare export class LanguageFontGroup extends undefined$ILanguageFontGroup {
		constructor(languageTag: string): this;
		documentAlternate1Font: Windows.Globalization.Fonts.LanguageFont;
		documentAlternate2Font: Windows.Globalization.Fonts.LanguageFont;
		documentHeadingFont: Windows.Globalization.Fonts.LanguageFont;
		fixedWidthTextFont: Windows.Globalization.Fonts.LanguageFont;
		modernDocumentFont: Windows.Globalization.Fonts.LanguageFont;
		traditionalDocumentFont: Windows.Globalization.Fonts.LanguageFont;
		uICaptionFont: Windows.Globalization.Fonts.LanguageFont;
		uIHeadingFont: Windows.Globalization.Fonts.LanguageFont;
		uINotificationHeadingFont: Windows.Globalization.Fonts.LanguageFont;
		uITextFont: Windows.Globalization.Fonts.LanguageFont;
		uITitleFont: Windows.Globalization.Fonts.LanguageFont
	}

	
}

declare module 'Globalization' {
		declare export interface ICalendarIdentifiersStatics {
		gregorian: string,
		hebrew: string,
		hijri: string,
		japanese: string,
		julian: string,
		korean: string,
		taiwan: string,
		thai: string,
		umAlQura: string
	}

	declare export interface IClockIdentifiersStatics {
		twelveHour: string,
		twentyFourHour: string
	}

	declare export interface IGeographicRegion {
		code: string,
		codeThreeDigit: string,
		codeThreeLetter: string,
		codeTwoLetter: string,
		currenciesInUse: Windows.Foundation.Collections.IVectorView<string>,
		displayName: string,
		nativeName: string
	}

	declare export interface IGeographicRegionFactory {
		createGeographicRegion(geographicRegionCode: string): Windows.Globalization.GeographicRegion
	}

	declare export interface IGeographicRegionStatics {
		isSupported(geographicRegionCode: string): boolean
	}

	declare export interface ILanguage {
		displayName: string,
		languageTag: string,
		nativeName: string,
		script: string
	}

	declare export interface ILanguageFactory {
		createLanguage(languageTag: string): Windows.Globalization.Language
	}

	declare export interface ILanguageStatics {
		currentInputMethodLanguageTag: string,
		isWellFormed(languageTag: string): boolean
	}

	declare export interface ICalendar {
		day: number,
		dayOfWeek: Windows.Globalization.DayOfWeek,
		era: number,
		firstDayInThisMonth: number,
		firstEra: number,
		firstHourInThisPeriod: number,
		firstMinuteInThisHour: number,
		firstMonthInThisYear: number,
		firstPeriodInThisDay: number,
		firstSecondInThisMinute: number,
		firstYearInThisEra: number,
		hour: number,
		isDaylightSavingTime: boolean,
		languages: Windows.Foundation.Collections.IVectorView<string>,
		lastDayInThisMonth: number,
		lastEra: number,
		lastHourInThisPeriod: number,
		lastMinuteInThisHour: number,
		lastMonthInThisYear: number,
		lastPeriodInThisDay: number,
		lastSecondInThisMinute: number,
		lastYearInThisEra: number,
		minute: number,
		month: number,
		nanosecond: number,
		numberOfDaysInThisMonth: number,
		numberOfEras: number,
		numberOfHoursInThisPeriod: number,
		numberOfMinutesInThisHour: number,
		numberOfMonthsInThisYear: number,
		numberOfPeriodsInThisDay: number,
		numberOfSecondsInThisMinute: number,
		numberOfYearsInThisEra: number,
		numeralSystem: string,
		period: number,
		resolvedLanguage: string,
		second: number,
		year: number,
		clone(): Windows.Globalization.Calendar,
		setToMin(): void,
		setToMax(): void,
		getCalendarSystem(): string,
		changeCalendarSystem(value: string): void,
		getClock(): string,
		changeClock(value: string): void,
		getDateTime(): Date,
		setDateTime(value: Date): void,
		setToNow(): void,
		addEras(eras: number): void,
		eraAsString(): string,
		eraAsString(idealLength: number): string,
		addYears(years: number): void,
		yearAsString(): string,
		yearAsTruncatedString(remainingDigits: number): string,
		yearAsPaddedString(minDigits: number): string,
		addMonths(months: number): void,
		monthAsString(): string,
		monthAsString(idealLength: number): string,
		monthAsSoloString(): string,
		monthAsSoloString(idealLength: number): string,
		monthAsNumericString(): string,
		monthAsPaddedNumericString(minDigits: number): string,
		addWeeks(weeks: number): void,
		addDays(days: number): void,
		dayAsString(): string,
		dayAsPaddedString(minDigits: number): string,
		dayOfWeekAsString(): string,
		dayOfWeekAsString(idealLength: number): string,
		dayOfWeekAsSoloString(): string,
		dayOfWeekAsSoloString(idealLength: number): string,
		addPeriods(periods: number): void,
		periodAsString(): string,
		periodAsString(idealLength: number): string,
		addHours(hours: number): void,
		hourAsString(): string,
		hourAsPaddedString(minDigits: number): string,
		addMinutes(minutes: number): void,
		minuteAsString(): string,
		minuteAsPaddedString(minDigits: number): string,
		addSeconds(seconds: number): void,
		secondAsString(): string,
		secondAsPaddedString(minDigits: number): string,
		addNanoseconds(nanoseconds: number): void,
		nanosecondAsString(): string,
		nanosecondAsPaddedString(minDigits: number): string,
		compare(other: Windows.Globalization.Calendar): number,
		compareDateTime(other: Date): number,
		copyTo(other: Windows.Globalization.Calendar): void
	}

	declare export interface ICalendarFactory {
		createCalendarDefaultCalendarAndClock(
		languages: Windows.Foundation.Collections.IIterable<string>
	): Windows.Globalization.Calendar,
		createCalendar(
		languages: Windows.Foundation.Collections.IIterable<string>, calendar: string, clock: string
	): Windows.Globalization.Calendar
	}

	declare export interface IApplicationLanguagesStatics {
		languages: Windows.Foundation.Collections.IVectorView<string>,
		manifestLanguages: Windows.Foundation.Collections.IVectorView<string>,
		primaryLanguageOverride: string
	}

		declare export class CalendarIdentifiers  {
		gregorian: string;
		hebrew: string;
		hijri: string;
		japanese: string;
		julian: string;
		korean: string;
		taiwan: string;
		thai: string;
		umAlQura: string
	}

	declare export class ClockIdentifiers  {
		twelveHour: string;
		twentyFourHour: string
	}

	declare export class GeographicRegion extends undefined$IGeographicRegion {
		constructor(geographicRegionCode: string): this;
		constructor(): this;
		code: string;
		codeThreeDigit: string;
		codeThreeLetter: string;
		codeTwoLetter: string;
		currenciesInUse: Windows.Foundation.Collections.IVectorView<string>;
		displayName: string;
		nativeName: string;
		isSupported(geographicRegionCode: string): boolean
	}

	declare export class Language extends undefined$ILanguage {
		constructor(languageTag: string): this;
		displayName: string;
		languageTag: string;
		nativeName: string;
		script: string;
		currentInputMethodLanguageTag: string;
		isWellFormed(languageTag: string): boolean
	}

	declare export class Calendar extends undefined$ICalendar {
		constructor(languages: Windows.Foundation.Collections.IIterable<string>): this;
		constructor(languages: Windows.Foundation.Collections.IIterable<string>, calendar: string, clock: string): this;
		constructor(): this;
		day: number;
		dayOfWeek: Windows.Globalization.DayOfWeek;
		era: number;
		firstDayInThisMonth: number;
		firstEra: number;
		firstHourInThisPeriod: number;
		firstMinuteInThisHour: number;
		firstMonthInThisYear: number;
		firstPeriodInThisDay: number;
		firstSecondInThisMinute: number;
		firstYearInThisEra: number;
		hour: number;
		isDaylightSavingTime: boolean;
		languages: Windows.Foundation.Collections.IVectorView<string>;
		lastDayInThisMonth: number;
		lastEra: number;
		lastHourInThisPeriod: number;
		lastMinuteInThisHour: number;
		lastMonthInThisYear: number;
		lastPeriodInThisDay: number;
		lastSecondInThisMinute: number;
		lastYearInThisEra: number;
		minute: number;
		month: number;
		nanosecond: number;
		numberOfDaysInThisMonth: number;
		numberOfEras: number;
		numberOfHoursInThisPeriod: number;
		numberOfMinutesInThisHour: number;
		numberOfMonthsInThisYear: number;
		numberOfPeriodsInThisDay: number;
		numberOfSecondsInThisMinute: number;
		numberOfYearsInThisEra: number;
		numeralSystem: string;
		period: number;
		resolvedLanguage: string;
		second: number;
		year: number;
		clone(): Windows.Globalization.Calendar;
		setToMin(): void;
		setToMax(): void;
		getCalendarSystem(): string;
		changeCalendarSystem(value: string): void;
		getClock(): string;
		changeClock(value: string): void;
		getDateTime(): Date;
		setDateTime(value: Date): void;
		setToNow(): void;
		addEras(eras: number): void;
		eraAsString(): string;
		eraAsString(idealLength: number): string;
		addYears(years: number): void;
		yearAsString(): string;
		yearAsTruncatedString(remainingDigits: number): string;
		yearAsPaddedString(minDigits: number): string;
		addMonths(months: number): void;
		monthAsString(): string;
		monthAsString(idealLength: number): string;
		monthAsSoloString(): string;
		monthAsSoloString(idealLength: number): string;
		monthAsNumericString(): string;
		monthAsPaddedNumericString(minDigits: number): string;
		addWeeks(weeks: number): void;
		addDays(days: number): void;
		dayAsString(): string;
		dayAsPaddedString(minDigits: number): string;
		dayOfWeekAsString(): string;
		dayOfWeekAsString(idealLength: number): string;
		dayOfWeekAsSoloString(): string;
		dayOfWeekAsSoloString(idealLength: number): string;
		addPeriods(periods: number): void;
		periodAsString(): string;
		periodAsString(idealLength: number): string;
		addHours(hours: number): void;
		hourAsString(): string;
		hourAsPaddedString(minDigits: number): string;
		addMinutes(minutes: number): void;
		minuteAsString(): string;
		minuteAsPaddedString(minDigits: number): string;
		addSeconds(seconds: number): void;
		secondAsString(): string;
		secondAsPaddedString(minDigits: number): string;
		addNanoseconds(nanoseconds: number): void;
		nanosecondAsString(): string;
		nanosecondAsPaddedString(minDigits: number): string;
		compare(other: Windows.Globalization.Calendar): number;
		compareDateTime(other: Date): number;
		copyTo(other: Windows.Globalization.Calendar): void
	}

	declare export class ApplicationLanguages  {
		languages: Windows.Foundation.Collections.IVectorView<string>;
		manifestLanguages: Windows.Foundation.Collections.IVectorView<string>;
		primaryLanguageOverride: string
	}

	
}

declare module 'DateTimeFormatting' {
		declare export interface IDateTimeFormatter {
		calendar: string,
		clock: string,
		geographicRegion: string,
		includeDay: Windows.Globalization.DateTimeFormatting.DayFormat,
		includeDayOfWeek: Windows.Globalization.DateTimeFormatting.DayOfWeekFormat,
		includeHour: Windows.Globalization.DateTimeFormatting.HourFormat,
		includeMinute: Windows.Globalization.DateTimeFormatting.MinuteFormat,
		includeMonth: Windows.Globalization.DateTimeFormatting.MonthFormat,
		includeSecond: Windows.Globalization.DateTimeFormatting.SecondFormat,
		includeYear: Windows.Globalization.DateTimeFormatting.YearFormat,
		languages: Windows.Foundation.Collections.IVectorView<string>,
		numeralSystem: string,
		patterns: Windows.Foundation.Collections.IVectorView<string>,
		resolvedGeographicRegion: string,
		resolvedLanguage: string,
		template: string,
		format(value: Date): string
	}

	declare export interface IDateTimeFormatterFactory {
		createDateTimeFormatter(
		formatTemplate: string
	): Windows.Globalization.DateTimeFormatting.DateTimeFormatter,
		createDateTimeFormatterLanguages(
		formatTemplate: string, languages: Windows.Foundation.Collections.IIterable<string>
	): Windows.Globalization.DateTimeFormatting.DateTimeFormatter,
		createDateTimeFormatterContext(
		formatTemplate: string, languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string, calendar: string, clock: string
	): Windows.Globalization.DateTimeFormatting.DateTimeFormatter,
		createDateTimeFormatterDate(
		yearFormat: Windows.Globalization.DateTimeFormatting.YearFormat, monthFormat: Windows.Globalization.DateTimeFormatting.MonthFormat, dayFormat: Windows.Globalization.DateTimeFormatting.DayFormat, dayOfWeekFormat: Windows.Globalization.DateTimeFormatting.DayOfWeekFormat
	): Windows.Globalization.DateTimeFormatting.DateTimeFormatter,
		createDateTimeFormatterTime(
		hourFormat: Windows.Globalization.DateTimeFormatting.HourFormat, minuteFormat: Windows.Globalization.DateTimeFormatting.MinuteFormat, secondFormat: Windows.Globalization.DateTimeFormatting.SecondFormat
	): Windows.Globalization.DateTimeFormatting.DateTimeFormatter,
		createDateTimeFormatterDateTimeLanguages(
		yearFormat: Windows.Globalization.DateTimeFormatting.YearFormat, monthFormat: Windows.Globalization.DateTimeFormatting.MonthFormat, dayFormat: Windows.Globalization.DateTimeFormatting.DayFormat, dayOfWeekFormat: Windows.Globalization.DateTimeFormatting.DayOfWeekFormat, hourFormat: Windows.Globalization.DateTimeFormatting.HourFormat, minuteFormat: Windows.Globalization.DateTimeFormatting.MinuteFormat, secondFormat: Windows.Globalization.DateTimeFormatting.SecondFormat, languages: Windows.Foundation.Collections.IIterable<string>
	): Windows.Globalization.DateTimeFormatting.DateTimeFormatter,
		createDateTimeFormatterDateTimeContext(
		yearFormat: Windows.Globalization.DateTimeFormatting.YearFormat, monthFormat: Windows.Globalization.DateTimeFormatting.MonthFormat, dayFormat: Windows.Globalization.DateTimeFormatting.DayFormat, dayOfWeekFormat: Windows.Globalization.DateTimeFormatting.DayOfWeekFormat, hourFormat: Windows.Globalization.DateTimeFormatting.HourFormat, minuteFormat: Windows.Globalization.DateTimeFormatting.MinuteFormat, secondFormat: Windows.Globalization.DateTimeFormatting.SecondFormat, languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string, calendar: string, clock: string
	): Windows.Globalization.DateTimeFormatting.DateTimeFormatter
	}

	declare export interface IDateTimeFormatterStatics {
		longDate: Windows.Globalization.DateTimeFormatting.DateTimeFormatter,
		longTime: Windows.Globalization.DateTimeFormatting.DateTimeFormatter,
		shortDate: Windows.Globalization.DateTimeFormatting.DateTimeFormatter,
		shortTime: Windows.Globalization.DateTimeFormatting.DateTimeFormatter
	}

		declare export class DateTimeFormatter extends undefined$IDateTimeFormatter {
		constructor(formatTemplate: string): this;
		constructor(formatTemplate: string, languages: Windows.Foundation.Collections.IIterable<string>): this;
		constructor(formatTemplate: string, languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string, calendar: string, clock: string): this;
		constructor(yearFormat: Windows.Globalization.DateTimeFormatting.YearFormat, monthFormat: Windows.Globalization.DateTimeFormatting.MonthFormat, dayFormat: Windows.Globalization.DateTimeFormatting.DayFormat, dayOfWeekFormat: Windows.Globalization.DateTimeFormatting.DayOfWeekFormat): this;
		constructor(hourFormat: Windows.Globalization.DateTimeFormatting.HourFormat, minuteFormat: Windows.Globalization.DateTimeFormatting.MinuteFormat, secondFormat: Windows.Globalization.DateTimeFormatting.SecondFormat): this;
		constructor(yearFormat: Windows.Globalization.DateTimeFormatting.YearFormat, monthFormat: Windows.Globalization.DateTimeFormatting.MonthFormat, dayFormat: Windows.Globalization.DateTimeFormatting.DayFormat, dayOfWeekFormat: Windows.Globalization.DateTimeFormatting.DayOfWeekFormat, hourFormat: Windows.Globalization.DateTimeFormatting.HourFormat, minuteFormat: Windows.Globalization.DateTimeFormatting.MinuteFormat, secondFormat: Windows.Globalization.DateTimeFormatting.SecondFormat, languages: Windows.Foundation.Collections.IIterable<string>): this;
		constructor(yearFormat: Windows.Globalization.DateTimeFormatting.YearFormat, monthFormat: Windows.Globalization.DateTimeFormatting.MonthFormat, dayFormat: Windows.Globalization.DateTimeFormatting.DayFormat, dayOfWeekFormat: Windows.Globalization.DateTimeFormatting.DayOfWeekFormat, hourFormat: Windows.Globalization.DateTimeFormatting.HourFormat, minuteFormat: Windows.Globalization.DateTimeFormatting.MinuteFormat, secondFormat: Windows.Globalization.DateTimeFormatting.SecondFormat, languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string, calendar: string, clock: string): this;
		calendar: string;
		clock: string;
		geographicRegion: string;
		includeDay: Windows.Globalization.DateTimeFormatting.DayFormat;
		includeDayOfWeek: Windows.Globalization.DateTimeFormatting.DayOfWeekFormat;
		includeHour: Windows.Globalization.DateTimeFormatting.HourFormat;
		includeMinute: Windows.Globalization.DateTimeFormatting.MinuteFormat;
		includeMonth: Windows.Globalization.DateTimeFormatting.MonthFormat;
		includeSecond: Windows.Globalization.DateTimeFormatting.SecondFormat;
		includeYear: Windows.Globalization.DateTimeFormatting.YearFormat;
		languages: Windows.Foundation.Collections.IVectorView<string>;
		numeralSystem: string;
		patterns: Windows.Foundation.Collections.IVectorView<string>;
		resolvedGeographicRegion: string;
		resolvedLanguage: string;
		template: string;
		format(value: Date): string;
		longDate: Windows.Globalization.DateTimeFormatting.DateTimeFormatter;
		longTime: Windows.Globalization.DateTimeFormatting.DateTimeFormatter;
		shortDate: Windows.Globalization.DateTimeFormatting.DateTimeFormatter;
		shortTime: Windows.Globalization.DateTimeFormatting.DateTimeFormatter
	}

	
}

declare module 'NumberFormatting' {
		declare export interface INumberFormatter {
		format(value: number): string
	}

	declare export interface INumberFormatter2 {
		formatInt(value: number): string,
		formatUInt(value: number): string,
		formatDouble(value: number): string
	}

	declare export interface INumberParser {
		parseInt(text: string): number,
		parseUInt(text: string): number,
		parseDouble(text: string): number
	}

	declare export interface INumberFormatterOptions {
		fractionDigits: number,
		geographicRegion: string,
		integerDigits: number,
		isDecimalPointAlwaysDisplayed: boolean,
		isGrouped: boolean,
		languages: Windows.Foundation.Collections.IVectorView<string>,
		numeralSystem: string,
		resolvedGeographicRegion: string,
		resolvedLanguage: string
	}

	declare export interface IDecimalFormatterFactory {
		createDecimalFormatter(
		languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string
	): Windows.Globalization.NumberFormatting.DecimalFormatter
	}

	declare export interface IPercentFormatterFactory {
		createPercentFormatter(
		languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string
	): Windows.Globalization.NumberFormatting.PercentFormatter
	}

	declare export interface IPermilleFormatterFactory {
		createPermilleFormatter(
		languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string
	): Windows.Globalization.NumberFormatting.PermilleFormatter
	}

	declare export interface ICurrencyFormatterFactory {
		createCurrencyFormatterCode(currencyCode: string): Windows.Globalization.NumberFormatting.CurrencyFormatter,
		createCurrencyFormatterCodeContext(
		currencyCode: string, languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string
	): Windows.Globalization.NumberFormatting.CurrencyFormatter
	}

	declare export interface ICurrencyFormatter {
		currency: string
	}

		declare export class DecimalFormatter extends undefined$INumberFormatterOptions {
		constructor(languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string): this;
		constructor(): this;
		fractionDigits: number;
		geographicRegion: string;
		integerDigits: number;
		isDecimalPointAlwaysDisplayed: boolean;
		isGrouped: boolean;
		languages: Windows.Foundation.Collections.IVectorView<string>;
		numeralSystem: string;
		resolvedGeographicRegion: string;
		resolvedLanguage: string;
		format(value: number): string;
		formatInt(value: number): string;
		formatUInt(value: number): string;
		formatDouble(value: number): string;
		parseInt(text: string): number;
		parseUInt(text: string): number;
		parseDouble(text: string): number
	}

	declare export class PercentFormatter extends undefined$INumberFormatterOptions {
		constructor(languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string): this;
		constructor(): this;
		fractionDigits: number;
		geographicRegion: string;
		integerDigits: number;
		isDecimalPointAlwaysDisplayed: boolean;
		isGrouped: boolean;
		languages: Windows.Foundation.Collections.IVectorView<string>;
		numeralSystem: string;
		resolvedGeographicRegion: string;
		resolvedLanguage: string;
		format(value: number): string;
		formatInt(value: number): string;
		formatUInt(value: number): string;
		formatDouble(value: number): string;
		parseInt(text: string): number;
		parseUInt(text: string): number;
		parseDouble(text: string): number
	}

	declare export class PermilleFormatter extends undefined$INumberFormatterOptions {
		constructor(languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string): this;
		constructor(): this;
		fractionDigits: number;
		geographicRegion: string;
		integerDigits: number;
		isDecimalPointAlwaysDisplayed: boolean;
		isGrouped: boolean;
		languages: Windows.Foundation.Collections.IVectorView<string>;
		numeralSystem: string;
		resolvedGeographicRegion: string;
		resolvedLanguage: string;
		format(value: number): string;
		formatInt(value: number): string;
		formatUInt(value: number): string;
		formatDouble(value: number): string;
		parseInt(text: string): number;
		parseUInt(text: string): number;
		parseDouble(text: string): number
	}

	declare export class CurrencyFormatter extends undefined$ICurrencyFormatter {
		constructor(currencyCode: string): this;
		constructor(currencyCode: string, languages: Windows.Foundation.Collections.IIterable<string>, geographicRegion: string): this;
		currency: string;
		fractionDigits: number;
		geographicRegion: string;
		integerDigits: number;
		isDecimalPointAlwaysDisplayed: boolean;
		isGrouped: boolean;
		languages: Windows.Foundation.Collections.IVectorView<string>;
		numeralSystem: string;
		resolvedGeographicRegion: string;
		resolvedLanguage: string;
		format(value: number): string;
		formatInt(value: number): string;
		formatUInt(value: number): string;
		formatDouble(value: number): string;
		parseInt(text: string): number;
		parseUInt(text: string): number;
		parseDouble(text: string): number
	}

	
}

declare module 'Collation' {
		declare export interface ICharacterGrouping {
		first: string,
		label: string
	}

	declare export interface ICharacterGroupings {
		lookup(text: string): string
	}

		declare export class CharacterGrouping extends undefined$ICharacterGrouping {
		first: string;
		label: string
	}

	declare export class CharacterGroupings extends undefined$ICharacterGroupings {
		size: number;
		lookup(text: string): string;
		getAt(index: number): Windows.Globalization.Collation.CharacterGrouping;
		indexOf(
		value: Windows.Globalization.Collation.CharacterGrouping
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.Globalization.Collation.CharacterGrouping[],
		returnValue: number
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Globalization.Collation.CharacterGrouping>;
		toString(): string;
		toLocaleString(): string;
		concat(
		...items: Windows.Globalization.Collation.CharacterGrouping[][]
	): Windows.Globalization.Collation.CharacterGrouping[];
		join(seperator: string): string;
		pop(): Windows.Globalization.Collation.CharacterGrouping;
		push(...items: Windows.Globalization.Collation.CharacterGrouping[]): void;
		reverse(): Windows.Globalization.Collation.CharacterGrouping[];
		shift(): Windows.Globalization.Collation.CharacterGrouping;
		slice(start: number): Windows.Globalization.Collation.CharacterGrouping[];
		slice(
		start: number, end: number
	): Windows.Globalization.Collation.CharacterGrouping[];
		sort(): Windows.Globalization.Collation.CharacterGrouping[];
		sort(
		compareFn: (
		a: Windows.Globalization.Collation.CharacterGrouping, b: Windows.Globalization.Collation.CharacterGrouping
	) => number
	): Windows.Globalization.Collation.CharacterGrouping[];
		splice(start: number): Windows.Globalization.Collation.CharacterGrouping[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Globalization.Collation.CharacterGrouping[]
	): Windows.Globalization.Collation.CharacterGrouping[];
		unshift(...items: Windows.Globalization.Collation.CharacterGrouping[]): number;
		lastIndexOf(searchElement: Windows.Globalization.Collation.CharacterGrouping): number;
		lastIndexOf(
		searchElement: Windows.Globalization.Collation.CharacterGrouping, fromIndex: number
	): number;
		every(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => boolean
	): Windows.Globalization.Collation.CharacterGrouping[];
		filter(
		callbackfn: (
		value: Windows.Globalization.Collation.CharacterGrouping, index: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => boolean, thisArg: any
	): Windows.Globalization.Collation.CharacterGrouping[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Globalization.Collation.CharacterGrouping[]
	) => any, initialValue: any
	): any;
		length: number
	}

	
}

declare module 'Display' {
		declare export interface DisplayPropertiesEventHandler {
		(sender: any): void
	}

	declare export interface IDisplayPropertiesStatics {
		autoRotationPreferences: Windows.Graphics.Display.DisplayOrientations,
		currentOrientation: Windows.Graphics.Display.DisplayOrientations,
		logicalDpi: number,
		nativeOrientation: Windows.Graphics.Display.DisplayOrientations,
		resolutionScale: Windows.Graphics.Display.ResolutionScale,
		stereoEnabled: boolean,
		onorientationchanged: any,
		onlogicaldpichanged: any,
		onstereoenabledchanged: any,
		getColorProfileAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStream>,
		oncolorprofilechanged: any,
		ondisplaycontentsinvalidated: any
	}

	declare export interface IDisplayRequest {
		requestActive(): void,
		requestRelease(): void
	}

		declare export class DisplayProperties  {
		autoRotationPreferences: Windows.Graphics.Display.DisplayOrientations;
		currentOrientation: Windows.Graphics.Display.DisplayOrientations;
		logicalDpi: number;
		nativeOrientation: Windows.Graphics.Display.DisplayOrientations;
		resolutionScale: Windows.Graphics.Display.ResolutionScale;
		stereoEnabled: boolean;
		onorientationchanged: any;
		onlogicaldpichanged: any;
		onstereoenabledchanged: any;
		getColorProfileAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStream>;
		oncolorprofilechanged: any;
		ondisplaycontentsinvalidated: any
	}

	declare export class DisplayRequest extends undefined$IDisplayRequest {
		requestActive(): void;
		requestRelease(): void
	}

	
}

declare module 'Imaging' {
		declare export interface BitmapBounds {
		x: number,
		y: number,
		width: number,
		height: number
	}

	declare export interface IBitmapTransform {
		bounds: Windows.Graphics.Imaging.BitmapBounds,
		flip: Windows.Graphics.Imaging.BitmapFlip,
		interpolationMode: Windows.Graphics.Imaging.BitmapInterpolationMode,
		rotation: Windows.Graphics.Imaging.BitmapRotation,
		scaledHeight: number,
		scaledWidth: number
	}

	declare export interface IBitmapTypedValue {
		type: Windows.Foundation.PropertyType,
		value: any
	}

	declare export interface IBitmapTypedValueFactory {
		create(
		value: any, type: Windows.Foundation.PropertyType
	): Windows.Graphics.Imaging.BitmapTypedValue
	}

	declare export interface IBitmapPropertiesView {
		getPropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapPropertySet>
	}

	declare export interface IBitmapProperties {
		setPropertiesAsync(
		propertiesToSet: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, Windows.Graphics.Imaging.BitmapTypedValue>>
	): Windows.Foundation.IAsyncAction
	}

	declare export interface IPixelDataProvider {
		detachPixelData(): Uint8Array
	}

	declare export interface IBitmapFrame {
		bitmapAlphaMode: Windows.Graphics.Imaging.BitmapAlphaMode,
		bitmapPixelFormat: Windows.Graphics.Imaging.BitmapPixelFormat,
		bitmapProperties: Windows.Graphics.Imaging.BitmapPropertiesView,
		dpiX: number,
		dpiY: number,
		orientedPixelHeight: number,
		orientedPixelWidth: number,
		pixelHeight: number,
		pixelWidth: number,
		getThumbnailAsync(): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.ImageStream>,
		getPixelDataAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.PixelDataProvider>,
		getPixelDataAsync(
		pixelFormat: Windows.Graphics.Imaging.BitmapPixelFormat, alphaMode: Windows.Graphics.Imaging.BitmapAlphaMode, transform: Windows.Graphics.Imaging.BitmapTransform, exifOrientationMode: Windows.Graphics.Imaging.ExifOrientationMode, colorManagementMode: Windows.Graphics.Imaging.ColorManagementMode
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.PixelDataProvider>
	}

	declare export interface IBitmapCodecInformation {
		codecId: string,
		fileExtensions: Windows.Foundation.Collections.IVectorView<string>,
		friendlyName: string,
		mimeTypes: Windows.Foundation.Collections.IVectorView<string>
	}

	declare export interface IBitmapDecoderStatics {
		bmpDecoderId: string,
		gifDecoderId: string,
		icoDecoderId: string,
		jpegDecoderId: string,
		jpegXRDecoderId: string,
		pngDecoderId: string,
		tiffDecoderId: string,
		getDecoderInformationEnumerator(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Graphics.Imaging.BitmapCodecInformation>,
		createAsync(
		stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapDecoder>,
		createAsync(
		decoderId: string, stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapDecoder>
	}

	declare export interface IBitmapDecoder {
		bitmapContainerProperties: Windows.Graphics.Imaging.BitmapPropertiesView,
		decoderInformation: Windows.Graphics.Imaging.BitmapCodecInformation,
		frameCount: number,
		getPreviewAsync(): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.ImageStream>,
		getFrameAsync(
		frameIndex: number
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapFrame>
	}

	declare export interface IBitmapEncoderStatics {
		bmpEncoderId: string,
		gifEncoderId: string,
		jpegEncoderId: string,
		jpegXREncoderId: string,
		pngEncoderId: string,
		tiffEncoderId: string,
		getEncoderInformationEnumerator(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Graphics.Imaging.BitmapCodecInformation>,
		createAsync(
		encoderId: string, stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapEncoder>,
		createAsync(
		encoderId: string, stream: Windows.Storage.Streams.IRandomAccessStream, encodingOptions: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, Windows.Graphics.Imaging.BitmapTypedValue>>
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapEncoder>,
		createForTranscodingAsync(
		stream: Windows.Storage.Streams.IRandomAccessStream, bitmapDecoder: Windows.Graphics.Imaging.BitmapDecoder
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapEncoder>,
		createForInPlacePropertyEncodingAsync(
		bitmapDecoder: Windows.Graphics.Imaging.BitmapDecoder
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapEncoder>
	}

	declare export interface IBitmapEncoder {
		bitmapContainerProperties: Windows.Graphics.Imaging.BitmapProperties,
		bitmapProperties: Windows.Graphics.Imaging.BitmapProperties,
		bitmapTransform: Windows.Graphics.Imaging.BitmapTransform,
		encoderInformation: Windows.Graphics.Imaging.BitmapCodecInformation,
		generatedThumbnailHeight: number,
		generatedThumbnailWidth: number,
		isThumbnailGenerated: boolean,
		setPixelData(
		pixelFormat: Windows.Graphics.Imaging.BitmapPixelFormat, alphaMode: Windows.Graphics.Imaging.BitmapAlphaMode, width: number, height: number, dpiX: number, dpiY: number, pixels: Uint8Array
	): void,
		goToNextFrameAsync(): Windows.Foundation.IAsyncAction,
		goToNextFrameAsync(
		encodingOptions: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, Windows.Graphics.Imaging.BitmapTypedValue>>
	): Windows.Foundation.IAsyncAction,
		flushAsync(): Windows.Foundation.IAsyncAction
	}

		declare export class BitmapTransform extends undefined$IBitmapTransform {
		bounds: Windows.Graphics.Imaging.BitmapBounds;
		flip: Windows.Graphics.Imaging.BitmapFlip;
		interpolationMode: Windows.Graphics.Imaging.BitmapInterpolationMode;
		rotation: Windows.Graphics.Imaging.BitmapRotation;
		scaledHeight: number;
		scaledWidth: number
	}

	declare export class BitmapTypedValue extends undefined$IBitmapTypedValue {
		constructor(value: any, type: Windows.Foundation.PropertyType): this;
		type: Windows.Foundation.PropertyType;
		value: any
	}

	declare export class BitmapPropertySet extends undefined$IMap<string, Windows.Graphics.Imaging.BitmapTypedValue> {
		size: number;
		lookup(key: string): Windows.Graphics.Imaging.BitmapTypedValue;
		hasKey(key: string): boolean;
		getView(
		
	): Windows.Foundation.Collections.IMapView<string, Windows.Graphics.Imaging.BitmapTypedValue>;
		insert(key: string, value: Windows.Graphics.Imaging.BitmapTypedValue): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, Windows.Graphics.Imaging.BitmapTypedValue>>
	}

	declare export class BitmapPropertiesView extends undefined$IBitmapPropertiesView {
		getPropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapPropertySet>
	}

	declare export class BitmapProperties extends undefined$IBitmapProperties {
		setPropertiesAsync(
		propertiesToSet: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, Windows.Graphics.Imaging.BitmapTypedValue>>
	): Windows.Foundation.IAsyncAction;
		getPropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapPropertySet>
	}

	declare export class PixelDataProvider extends undefined$IPixelDataProvider {
		detachPixelData(): Uint8Array
	}

	declare export class ImageStream extends undefined$IRandomAccessStreamWithContentType {
		canRead: boolean;
		canWrite: boolean;
		position: number;
		size: number;
		contentType: string;
		getInputStreamAt(position: number): Windows.Storage.Streams.IInputStream;
		getOutputStreamAt(position: number): Windows.Storage.Streams.IOutputStream;
		seek(position: number): void;
		cloneStream(): Windows.Storage.Streams.IRandomAccessStream;
		dispose(): void;
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		close(): void
	}

	declare export class BitmapFrame extends undefined$IBitmapFrame {
		bitmapAlphaMode: Windows.Graphics.Imaging.BitmapAlphaMode;
		bitmapPixelFormat: Windows.Graphics.Imaging.BitmapPixelFormat;
		bitmapProperties: Windows.Graphics.Imaging.BitmapPropertiesView;
		dpiX: number;
		dpiY: number;
		orientedPixelHeight: number;
		orientedPixelWidth: number;
		pixelHeight: number;
		pixelWidth: number;
		getThumbnailAsync(): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.ImageStream>;
		getPixelDataAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.PixelDataProvider>;
		getPixelDataAsync(
		pixelFormat: Windows.Graphics.Imaging.BitmapPixelFormat, alphaMode: Windows.Graphics.Imaging.BitmapAlphaMode, transform: Windows.Graphics.Imaging.BitmapTransform, exifOrientationMode: Windows.Graphics.Imaging.ExifOrientationMode, colorManagementMode: Windows.Graphics.Imaging.ColorManagementMode
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.PixelDataProvider>
	}

	declare export class BitmapCodecInformation extends undefined$IBitmapCodecInformation {
		codecId: string;
		fileExtensions: Windows.Foundation.Collections.IVectorView<string>;
		friendlyName: string;
		mimeTypes: Windows.Foundation.Collections.IVectorView<string>
	}

	declare export class BitmapDecoder extends undefined$IBitmapDecoder {
		bitmapContainerProperties: Windows.Graphics.Imaging.BitmapPropertiesView;
		decoderInformation: Windows.Graphics.Imaging.BitmapCodecInformation;
		frameCount: number;
		bitmapAlphaMode: Windows.Graphics.Imaging.BitmapAlphaMode;
		bitmapPixelFormat: Windows.Graphics.Imaging.BitmapPixelFormat;
		bitmapProperties: Windows.Graphics.Imaging.BitmapPropertiesView;
		dpiX: number;
		dpiY: number;
		orientedPixelHeight: number;
		orientedPixelWidth: number;
		pixelHeight: number;
		pixelWidth: number;
		getPreviewAsync(): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.ImageStream>;
		getFrameAsync(
		frameIndex: number
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapFrame>;
		getThumbnailAsync(): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.ImageStream>;
		getPixelDataAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.PixelDataProvider>;
		getPixelDataAsync(
		pixelFormat: Windows.Graphics.Imaging.BitmapPixelFormat, alphaMode: Windows.Graphics.Imaging.BitmapAlphaMode, transform: Windows.Graphics.Imaging.BitmapTransform, exifOrientationMode: Windows.Graphics.Imaging.ExifOrientationMode, colorManagementMode: Windows.Graphics.Imaging.ColorManagementMode
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.PixelDataProvider>;
		bmpDecoderId: string;
		gifDecoderId: string;
		icoDecoderId: string;
		jpegDecoderId: string;
		jpegXRDecoderId: string;
		pngDecoderId: string;
		tiffDecoderId: string;
		getDecoderInformationEnumerator(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Graphics.Imaging.BitmapCodecInformation>;
		createAsync(
		stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapDecoder>;
		createAsync(
		decoderId: string, stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapDecoder>
	}

	declare export class BitmapEncoder extends undefined$IBitmapEncoder {
		bitmapContainerProperties: Windows.Graphics.Imaging.BitmapProperties;
		bitmapProperties: Windows.Graphics.Imaging.BitmapProperties;
		bitmapTransform: Windows.Graphics.Imaging.BitmapTransform;
		encoderInformation: Windows.Graphics.Imaging.BitmapCodecInformation;
		generatedThumbnailHeight: number;
		generatedThumbnailWidth: number;
		isThumbnailGenerated: boolean;
		setPixelData(
		pixelFormat: Windows.Graphics.Imaging.BitmapPixelFormat, alphaMode: Windows.Graphics.Imaging.BitmapAlphaMode, width: number, height: number, dpiX: number, dpiY: number, pixels: Uint8Array
	): void;
		goToNextFrameAsync(): Windows.Foundation.IAsyncAction;
		goToNextFrameAsync(
		encodingOptions: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, Windows.Graphics.Imaging.BitmapTypedValue>>
	): Windows.Foundation.IAsyncAction;
		flushAsync(): Windows.Foundation.IAsyncAction;
		bmpEncoderId: string;
		gifEncoderId: string;
		jpegEncoderId: string;
		jpegXREncoderId: string;
		pngEncoderId: string;
		tiffEncoderId: string;
		getEncoderInformationEnumerator(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Graphics.Imaging.BitmapCodecInformation>;
		createAsync(
		encoderId: string, stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapEncoder>;
		createAsync(
		encoderId: string, stream: Windows.Storage.Streams.IRandomAccessStream, encodingOptions: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, Windows.Graphics.Imaging.BitmapTypedValue>>
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapEncoder>;
		createForTranscodingAsync(
		stream: Windows.Storage.Streams.IRandomAccessStream, bitmapDecoder: Windows.Graphics.Imaging.BitmapDecoder
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapEncoder>;
		createForInPlacePropertyEncodingAsync(
		bitmapDecoder: Windows.Graphics.Imaging.BitmapDecoder
	): Windows.Foundation.IAsyncOperation<Windows.Graphics.Imaging.BitmapEncoder>
	}

	
}

declare module 'OptionDetails' {
		declare export interface IPrintOptionDetails {
		errorText: string,
		optionId: string,
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType,
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates,
		value: any,
		trySetValue(value: any): boolean
	}

	declare export interface IPrintNumberOptionDetails {
		maxValue: number,
		minValue: number
	}

	declare export interface IPrintTextOptionDetails {
		maxCharacters: number
	}

	declare export interface IPrintItemListOptionDetails {
		items: Windows.Foundation.Collections.IVectorView<any>
	}

	declare export interface IPrintCustomOptionDetails {
		displayName: string
	}

	declare export interface IPrintCustomTextOptionDetails {
		maxCharacters: number
	}

	declare export interface IPrintCustomItemDetails {
		itemDisplayName: string,
		itemId: string
	}

	declare export interface IPrintCustomItemListOptionDetails {
		addItem(itemId: string, displayName: string): void
	}

	declare export interface IPrintTaskOptionChangedEventArgs {
		optionId: any
	}

	declare export interface IPrintTaskOptionDetails {
		options: Windows.Foundation.Collections.IMapView<string, Windows.Graphics.Printing.OptionDetails.IPrintOptionDetails>,
		createItemListOption(
		optionId: string, displayName: string
	): Windows.Graphics.Printing.OptionDetails.PrintCustomItemListOptionDetails,
		createTextOption(
		optionId: string, displayName: string
	): Windows.Graphics.Printing.OptionDetails.PrintCustomTextOptionDetails,
		onoptionchanged: any,
		onbeginvalidation: any
	}

	declare export interface IPrintTaskOptionDetailsStatic {
		getFromPrintTaskOptions(
		printTaskOptions: Windows.Graphics.Printing.PrintTaskOptions
	): Windows.Graphics.Printing.OptionDetails.PrintTaskOptionDetails
	}

		declare export class PrintCopiesOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		maxValue: number;
		minValue: number;
		trySetValue(value: any): boolean
	}

	declare export class PrintMediaSizeOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintMediaTypeOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintOrientationOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintQualityOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintColorModeOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintDuplexOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintCollationOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintStapleOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintHolePunchOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintBindingOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean
	}

	declare export class PrintCustomTextOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		displayName: string;
		maxCharacters: number;
		trySetValue(value: any): boolean
	}

	declare export class PrintCustomItemDetails extends undefined$IPrintCustomItemDetails {
		itemDisplayName: string;
		itemId: string
	}

	declare export class PrintCustomItemListOptionDetails extends undefined$IPrintOptionDetails {
		errorText: string;
		optionId: string;
		optionType: Windows.Graphics.Printing.OptionDetails.PrintOptionType;
		state: Windows.Graphics.Printing.OptionDetails.PrintOptionStates;
		value: any;
		displayName: string;
		items: Windows.Foundation.Collections.IVectorView<any>;
		trySetValue(value: any): boolean;
		addItem(itemId: string, displayName: string): void
	}

	declare export class PrintTaskOptionChangedEventArgs extends undefined$IPrintTaskOptionChangedEventArgs {
		optionId: any
	}

	declare export class PrintTaskOptionDetails extends undefined$IPrintTaskOptionDetails {
		options: Windows.Foundation.Collections.IMapView<string, Windows.Graphics.Printing.OptionDetails.IPrintOptionDetails>;
		displayedOptions: Windows.Foundation.Collections.IVector<string>;
		createItemListOption(
		optionId: string, displayName: string
	): Windows.Graphics.Printing.OptionDetails.PrintCustomItemListOptionDetails;
		createTextOption(
		optionId: string, displayName: string
	): Windows.Graphics.Printing.OptionDetails.PrintCustomTextOptionDetails;
		onoptionchanged: any;
		onbeginvalidation: any;
		getPageDescription(jobPageNumber: number): Windows.Graphics.Printing.PrintPageDescription;
		getFromPrintTaskOptions(
		printTaskOptions: Windows.Graphics.Printing.PrintTaskOptions
	): Windows.Graphics.Printing.OptionDetails.PrintTaskOptionDetails
	}

	
}

declare module 'Printing' {
		declare export interface PrintPageDescription {
		pageSize: Windows.Foundation.Size,
		imageableRect: Windows.Foundation.Rect,
		dpiX: number,
		dpiY: number
	}

	declare export interface IPrintTaskOptionsCoreProperties {
		binding: Windows.Graphics.Printing.PrintBinding,
		collation: Windows.Graphics.Printing.PrintCollation,
		colorMode: Windows.Graphics.Printing.PrintColorMode,
		duplex: Windows.Graphics.Printing.PrintDuplex,
		holePunch: Windows.Graphics.Printing.PrintHolePunch,
		maxCopies: number,
		mediaSize: Windows.Graphics.Printing.PrintMediaSize,
		mediaType: Windows.Graphics.Printing.PrintMediaType,
		minCopies: number,
		numberOfCopies: number,
		orientation: Windows.Graphics.Printing.PrintOrientation,
		printQuality: Windows.Graphics.Printing.PrintQuality,
		staple: Windows.Graphics.Printing.PrintStaple
	}

	declare export interface IPrintTaskOptionsCoreUIConfiguration {
		displayedOptions: Windows.Foundation.Collections.IVector<string>
	}

	declare export interface IPrintTaskOptionsCore {
		getPageDescription(jobPageNumber: number): Windows.Graphics.Printing.PrintPageDescription
	}

	declare export interface IStandardPrintTaskOptionsStatic {
		binding: string,
		collation: string,
		colorMode: string,
		copies: string,
		duplex: string,
		holePunch: string,
		inputBin: string,
		mediaSize: string,
		mediaType: string,
		nUp: string,
		orientation: string,
		printQuality: string,
		staple: string
	}

	declare export interface IPrintDocumentSource {
		
	}

	declare export interface IPrintTaskProgressingEventArgs {
		documentPageCount: number
	}

	declare export interface IPrintTaskCompletedEventArgs {
		completion: Windows.Graphics.Printing.PrintTaskCompletion
	}

	declare export interface IPrintTask {
		options: Windows.Graphics.Printing.PrintTaskOptions,
		properties: Windows.ApplicationModel.DataTransfer.DataPackagePropertySet,
		source: Windows.Graphics.Printing.IPrintDocumentSource,
		onpreviewing: any,
		onsubmitting: any,
		onprogressing: any,
		oncompleted: any
	}

	declare export interface IPrintTaskSourceRequestedDeferral {
		complete(): void
	}

	declare export interface IPrintTaskSourceRequestedArgs {
		deadline: Date,
		setSource(source: Windows.Graphics.Printing.IPrintDocumentSource): void,
		getDeferral(): Windows.Graphics.Printing.PrintTaskSourceRequestedDeferral
	}

	declare export interface PrintTaskSourceRequestedHandler {
		(args: Windows.Graphics.Printing.PrintTaskSourceRequestedArgs): void
	}

	declare export interface IPrintTaskRequestedDeferral {
		complete(): void
	}

	declare export interface IPrintTaskRequest {
		deadline: Date,
		createPrintTask(
		title: string, handler: Windows.Graphics.Printing.PrintTaskSourceRequestedHandler
	): Windows.Graphics.Printing.PrintTask,
		getDeferral(): Windows.Graphics.Printing.PrintTaskRequestedDeferral
	}

	declare export interface IPrintTaskRequestedEventArgs {
		request: Windows.Graphics.Printing.PrintTaskRequest
	}

	declare export interface IPrintManagerStatic {
		getForCurrentView(): Windows.Graphics.Printing.PrintManager,
		showPrintUIAsync(): Windows.Foundation.IAsyncOperation<boolean>
	}

	declare export interface IPrintManager {
		onprinttaskrequested: any
	}

		declare export class PrintTaskOptions extends undefined$IPrintTaskOptionsCore {
		binding: Windows.Graphics.Printing.PrintBinding;
		collation: Windows.Graphics.Printing.PrintCollation;
		colorMode: Windows.Graphics.Printing.PrintColorMode;
		duplex: Windows.Graphics.Printing.PrintDuplex;
		holePunch: Windows.Graphics.Printing.PrintHolePunch;
		maxCopies: number;
		mediaSize: Windows.Graphics.Printing.PrintMediaSize;
		mediaType: Windows.Graphics.Printing.PrintMediaType;
		minCopies: number;
		numberOfCopies: number;
		orientation: Windows.Graphics.Printing.PrintOrientation;
		printQuality: Windows.Graphics.Printing.PrintQuality;
		staple: Windows.Graphics.Printing.PrintStaple;
		displayedOptions: Windows.Foundation.Collections.IVector<string>;
		getPageDescription(jobPageNumber: number): Windows.Graphics.Printing.PrintPageDescription
	}

	declare export class StandardPrintTaskOptions  {
		binding: string;
		collation: string;
		colorMode: string;
		copies: string;
		duplex: string;
		holePunch: string;
		inputBin: string;
		mediaSize: string;
		mediaType: string;
		nUp: string;
		orientation: string;
		printQuality: string;
		staple: string
	}

	declare export class PrintTaskProgressingEventArgs extends undefined$IPrintTaskProgressingEventArgs {
		documentPageCount: number
	}

	declare export class PrintTaskCompletedEventArgs extends undefined$IPrintTaskCompletedEventArgs {
		completion: Windows.Graphics.Printing.PrintTaskCompletion
	}

	declare export class PrintTask extends undefined$IPrintTask {
		options: Windows.Graphics.Printing.PrintTaskOptions;
		properties: Windows.ApplicationModel.DataTransfer.DataPackagePropertySet;
		source: Windows.Graphics.Printing.IPrintDocumentSource;
		onpreviewing: any;
		onsubmitting: any;
		onprogressing: any;
		oncompleted: any
	}

	declare export class PrintTaskSourceRequestedDeferral extends undefined$IPrintTaskSourceRequestedDeferral {
		complete(): void
	}

	declare export class PrintTaskSourceRequestedArgs extends undefined$IPrintTaskSourceRequestedArgs {
		deadline: Date;
		setSource(source: Windows.Graphics.Printing.IPrintDocumentSource): void;
		getDeferral(): Windows.Graphics.Printing.PrintTaskSourceRequestedDeferral
	}

	declare export class PrintTaskRequestedDeferral extends undefined$IPrintTaskRequestedDeferral {
		complete(): void
	}

	declare export class PrintTaskRequest extends undefined$IPrintTaskRequest {
		deadline: Date;
		createPrintTask(
		title: string, handler: Windows.Graphics.Printing.PrintTaskSourceRequestedHandler
	): Windows.Graphics.Printing.PrintTask;
		getDeferral(): Windows.Graphics.Printing.PrintTaskRequestedDeferral
	}

	declare export class PrintTaskRequestedEventArgs extends undefined$IPrintTaskRequestedEventArgs {
		request: Windows.Graphics.Printing.PrintTaskRequest
	}

	declare export class PrintManager extends undefined$IPrintManager {
		onprinttaskrequested: any;
		getForCurrentView(): Windows.Graphics.Printing.PrintManager;
		showPrintUIAsync(): Windows.Foundation.IAsyncOperation<boolean>
	}

	
}

declare module 'Deployment' {
		declare export interface DeploymentProgress {
		state: Windows.Management.Deployment.DeploymentProgressState,
		percentage: number
	}

	declare export interface IDeploymentResult {
		activityId: string,
		errorText: string,
		extendedErrorCode: number
	}

	declare export interface IPackageUserInformation {
		installState: Windows.Management.Deployment.PackageInstallState,
		userSecurityId: string
	}

	declare export interface IPackageManager {
		addPackageAsync(
		packageUri: Windows.Foundation.Uri, dependencyPackageUris: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, deploymentOptions: Windows.Management.Deployment.DeploymentOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>,
		updatePackageAsync(
		packageUri: Windows.Foundation.Uri, dependencyPackageUris: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, deploymentOptions: Windows.Management.Deployment.DeploymentOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>,
		removePackageAsync(
		packageFullName: string
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>,
		stagePackageAsync(
		packageUri: Windows.Foundation.Uri, dependencyPackageUris: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>,
		registerPackageAsync(
		manifestUri: Windows.Foundation.Uri, dependencyPackageUris: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, deploymentOptions: Windows.Management.Deployment.DeploymentOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>,
		findPackages(): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>,
		findPackagesForUser(
		userSecurityId: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>,
		findPackages(
		packageName: string, packagePublisher: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>,
		findPackagesForUser(
		userSecurityId: string, packageName: string, packagePublisher: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>,
		findUsers(
		packageFullName: string
	): Windows.Foundation.Collections.IIterable<Windows.Management.Deployment.PackageUserInformation>,
		setPackageState(
		packageFullName: string, packageState: Windows.Management.Deployment.PackageState
	): void,
		findPackage(packageFullName: string): Windows.ApplicationModel.Package,
		cleanupPackageForUserAsync(
		packageName: string, userSecurityId: string
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>,
		findPackages(
		packageFamilyName: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>,
		findPackagesForUser(
		userSecurityId: string, packageFamilyName: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>,
		findPackageForUser(
		userSecurityId: string, packageFullName: string
	): Windows.ApplicationModel.Package
	}

		declare export class DeploymentResult extends undefined$IDeploymentResult {
		activityId: string;
		errorText: string;
		extendedErrorCode: number
	}

	declare export class PackageUserInformation extends undefined$IPackageUserInformation {
		installState: Windows.Management.Deployment.PackageInstallState;
		userSecurityId: string
	}

	declare export class PackageManager extends undefined$IPackageManager {
		addPackageAsync(
		packageUri: Windows.Foundation.Uri, dependencyPackageUris: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, deploymentOptions: Windows.Management.Deployment.DeploymentOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>;
		updatePackageAsync(
		packageUri: Windows.Foundation.Uri, dependencyPackageUris: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, deploymentOptions: Windows.Management.Deployment.DeploymentOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>;
		removePackageAsync(
		packageFullName: string
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>;
		stagePackageAsync(
		packageUri: Windows.Foundation.Uri, dependencyPackageUris: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>;
		registerPackageAsync(
		manifestUri: Windows.Foundation.Uri, dependencyPackageUris: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, deploymentOptions: Windows.Management.Deployment.DeploymentOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>;
		findPackages(): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>;
		findPackagesForUser(
		userSecurityId: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>;
		findPackages(
		packageName: string, packagePublisher: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>;
		findPackagesForUser(
		userSecurityId: string, packageName: string, packagePublisher: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>;
		findUsers(
		packageFullName: string
	): Windows.Foundation.Collections.IIterable<Windows.Management.Deployment.PackageUserInformation>;
		setPackageState(
		packageFullName: string, packageState: Windows.Management.Deployment.PackageState
	): void;
		findPackage(packageFullName: string): Windows.ApplicationModel.Package;
		cleanupPackageForUserAsync(
		packageName: string, userSecurityId: string
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Management.Deployment.DeploymentResult, Windows.Management.Deployment.DeploymentProgress>;
		findPackages(
		packageFamilyName: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>;
		findPackagesForUser(
		userSecurityId: string, packageFamilyName: string
	): Windows.Foundation.Collections.IIterable<Windows.ApplicationModel.Package>;
		findPackageForUser(
		userSecurityId: string, packageFullName: string
	): Windows.ApplicationModel.Package
	}

	
}

declare module 'Capture' {
		declare export interface ICameraCaptureUIPhotoCaptureSettings {
		allowCropping: boolean,
		croppedAspectRatio: Windows.Foundation.Size,
		croppedSizeInPixels: Windows.Foundation.Size,
		format: Windows.Media.Capture.CameraCaptureUIPhotoFormat,
		maxResolution: Windows.Media.Capture.CameraCaptureUIMaxPhotoResolution
	}

	declare export interface ICameraCaptureUIVideoCaptureSettings {
		allowTrimming: boolean,
		format: Windows.Media.Capture.CameraCaptureUIVideoFormat,
		maxDurationInSeconds: number,
		maxResolution: Windows.Media.Capture.CameraCaptureUIMaxVideoResolution
	}

	declare export interface ICameraCaptureUI {
		photoSettings: Windows.Media.Capture.CameraCaptureUIPhotoCaptureSettings,
		videoSettings: Windows.Media.Capture.CameraCaptureUIVideoCaptureSettings,
		captureFileAsync(
		mode: Windows.Media.Capture.CameraCaptureUIMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>
	}

	declare export interface ICameraOptionsUIStatics {
		show(mediaCapture: Windows.Media.Capture.MediaCapture): void
	}

	declare export interface IMediaCaptureFailedEventArgs {
		code: number,
		message: string
	}

	declare export interface MediaCaptureFailedEventHandler {
		(sender: Windows.Media.Capture.MediaCapture, errorEventArgs: Windows.Media.Capture.MediaCaptureFailedEventArgs): void
	}

	declare export interface RecordLimitationExceededEventHandler {
		(sender: Windows.Media.Capture.MediaCapture): void
	}

	declare export interface IMediaCaptureInitializationSettings {
		audioDeviceId: string,
		photoCaptureSource: Windows.Media.Capture.PhotoCaptureSource,
		streamingCaptureMode: Windows.Media.Capture.StreamingCaptureMode,
		videoDeviceId: string
	}

	declare export interface IMediaCapture {
		audioDeviceController: Windows.Media.Devices.AudioDeviceController,
		mediaCaptureSettings: Windows.Media.Capture.MediaCaptureSettings,
		videoDeviceController: Windows.Media.Devices.VideoDeviceController,
		initializeAsync(): Windows.Foundation.IAsyncAction,
		initializeAsync(
		mediaCaptureInitializationSettings: Windows.Media.Capture.MediaCaptureInitializationSettings
	): Windows.Foundation.IAsyncAction,
		startRecordToStorageFileAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncAction,
		startRecordToStreamAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncAction,
		startRecordToCustomSinkAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, customMediaSink: Windows.Media.IMediaExtension
	): Windows.Foundation.IAsyncAction,
		startRecordToCustomSinkAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, customSinkActivationId: string, customSinkSettings: Windows.Foundation.Collections.IPropertySet
	): Windows.Foundation.IAsyncAction,
		stopRecordAsync(): Windows.Foundation.IAsyncAction,
		capturePhotoToStorageFileAsync(
		type: Windows.Media.MediaProperties.ImageEncodingProperties, file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncAction,
		capturePhotoToStreamAsync(
		type: Windows.Media.MediaProperties.ImageEncodingProperties, stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncAction,
		addEffectAsync(
		mediaStreamType: Windows.Media.Capture.MediaStreamType, effectActivationID: string, effectSettings: Windows.Foundation.Collections.IPropertySet
	): Windows.Foundation.IAsyncAction,
		clearEffectsAsync(
		mediaStreamType: Windows.Media.Capture.MediaStreamType
	): Windows.Foundation.IAsyncAction,
		setEncoderProperty(
		mediaStreamType: Windows.Media.Capture.MediaStreamType, propertyId: string, propertyValue: any
	): void,
		getEncoderProperty(
		mediaStreamType: Windows.Media.Capture.MediaStreamType, propertyId: string
	): any,
		onfailed: any,
		onrecordlimitationexceeded: any,
		setPreviewMirroring(value: boolean): void,
		getPreviewMirroring(): boolean,
		setPreviewRotation(value: Windows.Media.Capture.VideoRotation): void,
		getPreviewRotation(): Windows.Media.Capture.VideoRotation,
		setRecordRotation(value: Windows.Media.Capture.VideoRotation): void,
		getRecordRotation(): Windows.Media.Capture.VideoRotation
	}

	declare export interface IMediaCaptureVideoPreview {
		startPreviewAsync(): Windows.Foundation.IAsyncAction,
		startPreviewToCustomSinkAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, customMediaSink: Windows.Media.IMediaExtension
	): Windows.Foundation.IAsyncAction,
		startPreviewToCustomSinkAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, customSinkActivationId: string, customSinkSettings: Windows.Foundation.Collections.IPropertySet
	): Windows.Foundation.IAsyncAction,
		stopPreviewAsync(): Windows.Foundation.IAsyncAction
	}

	declare export interface IMediaCaptureSettings {
		audioDeviceId: string,
		photoCaptureSource: Windows.Media.Capture.PhotoCaptureSource,
		streamingCaptureMode: Windows.Media.Capture.StreamingCaptureMode,
		videoDeviceCharacteristic: Windows.Media.Capture.VideoDeviceCharacteristic,
		videoDeviceId: string
	}

		declare export class CameraCaptureUIPhotoCaptureSettings extends undefined$ICameraCaptureUIPhotoCaptureSettings {
		allowCropping: boolean;
		croppedAspectRatio: Windows.Foundation.Size;
		croppedSizeInPixels: Windows.Foundation.Size;
		format: Windows.Media.Capture.CameraCaptureUIPhotoFormat;
		maxResolution: Windows.Media.Capture.CameraCaptureUIMaxPhotoResolution
	}

	declare export class CameraCaptureUIVideoCaptureSettings extends undefined$ICameraCaptureUIVideoCaptureSettings {
		allowTrimming: boolean;
		format: Windows.Media.Capture.CameraCaptureUIVideoFormat;
		maxDurationInSeconds: number;
		maxResolution: Windows.Media.Capture.CameraCaptureUIMaxVideoResolution
	}

	declare export class CameraCaptureUI extends undefined$ICameraCaptureUI {
		photoSettings: Windows.Media.Capture.CameraCaptureUIPhotoCaptureSettings;
		videoSettings: Windows.Media.Capture.CameraCaptureUIVideoCaptureSettings;
		captureFileAsync(
		mode: Windows.Media.Capture.CameraCaptureUIMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>
	}

	declare export class CameraOptionsUI  {
		show(mediaCapture: Windows.Media.Capture.MediaCapture): void
	}

	declare export class MediaCaptureFailedEventArgs extends undefined$IMediaCaptureFailedEventArgs {
		code: number;
		message: string
	}

	declare export class MediaCapture extends undefined$IMediaCapture {
		audioDeviceController: Windows.Media.Devices.AudioDeviceController;
		mediaCaptureSettings: Windows.Media.Capture.MediaCaptureSettings;
		videoDeviceController: Windows.Media.Devices.VideoDeviceController;
		initializeAsync(): Windows.Foundation.IAsyncAction;
		initializeAsync(
		mediaCaptureInitializationSettings: Windows.Media.Capture.MediaCaptureInitializationSettings
	): Windows.Foundation.IAsyncAction;
		startRecordToStorageFileAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncAction;
		startRecordToStreamAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncAction;
		startRecordToCustomSinkAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, customMediaSink: Windows.Media.IMediaExtension
	): Windows.Foundation.IAsyncAction;
		startRecordToCustomSinkAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, customSinkActivationId: string, customSinkSettings: Windows.Foundation.Collections.IPropertySet
	): Windows.Foundation.IAsyncAction;
		stopRecordAsync(): Windows.Foundation.IAsyncAction;
		capturePhotoToStorageFileAsync(
		type: Windows.Media.MediaProperties.ImageEncodingProperties, file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncAction;
		capturePhotoToStreamAsync(
		type: Windows.Media.MediaProperties.ImageEncodingProperties, stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncAction;
		addEffectAsync(
		mediaStreamType: Windows.Media.Capture.MediaStreamType, effectActivationID: string, effectSettings: Windows.Foundation.Collections.IPropertySet
	): Windows.Foundation.IAsyncAction;
		clearEffectsAsync(
		mediaStreamType: Windows.Media.Capture.MediaStreamType
	): Windows.Foundation.IAsyncAction;
		setEncoderProperty(
		mediaStreamType: Windows.Media.Capture.MediaStreamType, propertyId: string, propertyValue: any
	): void;
		getEncoderProperty(
		mediaStreamType: Windows.Media.Capture.MediaStreamType, propertyId: string
	): any;
		onfailed: any;
		onrecordlimitationexceeded: any;
		setPreviewMirroring(value: boolean): void;
		getPreviewMirroring(): boolean;
		setPreviewRotation(value: Windows.Media.Capture.VideoRotation): void;
		getPreviewRotation(): Windows.Media.Capture.VideoRotation;
		setRecordRotation(value: Windows.Media.Capture.VideoRotation): void;
		getRecordRotation(): Windows.Media.Capture.VideoRotation;
		startPreviewAsync(): Windows.Foundation.IAsyncAction;
		startPreviewToCustomSinkAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, customMediaSink: Windows.Media.IMediaExtension
	): Windows.Foundation.IAsyncAction;
		startPreviewToCustomSinkAsync(
		encodingProfile: Windows.Media.MediaProperties.MediaEncodingProfile, customSinkActivationId: string, customSinkSettings: Windows.Foundation.Collections.IPropertySet
	): Windows.Foundation.IAsyncAction;
		stopPreviewAsync(): Windows.Foundation.IAsyncAction
	}

	declare export class MediaCaptureInitializationSettings extends undefined$IMediaCaptureInitializationSettings {
		audioDeviceId: string;
		photoCaptureSource: Windows.Media.Capture.PhotoCaptureSource;
		streamingCaptureMode: Windows.Media.Capture.StreamingCaptureMode;
		videoDeviceId: string
	}

	declare export class MediaCaptureSettings extends undefined$IMediaCaptureSettings {
		audioDeviceId: string;
		photoCaptureSource: Windows.Media.Capture.PhotoCaptureSource;
		streamingCaptureMode: Windows.Media.Capture.StreamingCaptureMode;
		videoDeviceCharacteristic: Windows.Media.Capture.VideoDeviceCharacteristic;
		videoDeviceId: string
	}

	
}

declare module 'Devices' {
		declare export interface IDialRequestedEventArgs {
		contact: any,
		handled(): void
	}

	declare export interface IRedialRequestedEventArgs {
		handled(): void
	}

	declare export interface IKeypadPressedEventArgs {
		telephonyKey: Windows.Media.Devices.TelephonyKey
	}

	declare export interface CallControlEventHandler {
		(sender: Windows.Media.Devices.CallControl): void
	}

	declare export interface DialRequestedEventHandler {
		(sender: Windows.Media.Devices.CallControl, e: Windows.Media.Devices.DialRequestedEventArgs): void
	}

	declare export interface RedialRequestedEventHandler {
		(sender: Windows.Media.Devices.CallControl, e: Windows.Media.Devices.RedialRequestedEventArgs): void
	}

	declare export interface KeypadPressedEventHandler {
		(sender: Windows.Media.Devices.CallControl, e: Windows.Media.Devices.KeypadPressedEventArgs): void
	}

	declare export interface ICallControl {
		hasRinger: boolean,
		indicateNewIncomingCall(enableRinger: boolean, callerId: string): number,
		indicateNewOutgoingCall(): number,
		indicateActiveCall(callToken: number): void,
		endCall(callToken: number): void,
		onanswerrequested: any,
		onhanguprequested: any,
		ondialrequested: any,
		onredialrequested: any,
		onkeypadpressed: any,
		onaudiotransferrequested: any
	}

	declare export interface ICallControlStatics {
		getDefault(): Windows.Media.Devices.CallControl,
		fromId(deviceInterfaceId: string): Windows.Media.Devices.CallControl
	}

	declare export interface IDefaultAudioDeviceChangedEventArgs {
		id: string,
		role: Windows.Media.Devices.AudioDeviceRole
	}

	declare export interface IMediaDeviceStatics {
		getAudioCaptureSelector(): string,
		getAudioRenderSelector(): string,
		getVideoCaptureSelector(): string,
		getDefaultAudioCaptureId(role: Windows.Media.Devices.AudioDeviceRole): string,
		getDefaultAudioRenderId(role: Windows.Media.Devices.AudioDeviceRole): string,
		ondefaultaudiocapturedevicechanged: any,
		ondefaultaudiorenderdevicechanged: any
	}

	declare export interface IMediaDeviceController {
		getAvailableMediaStreamProperties(
		mediaStreamType: Windows.Media.Capture.MediaStreamType
	): Windows.Foundation.Collections.IVectorView<Windows.Media.MediaProperties.IMediaEncodingProperties>,
		getMediaStreamProperties(
		mediaStreamType: Windows.Media.Capture.MediaStreamType
	): Windows.Media.MediaProperties.IMediaEncodingProperties,
		setMediaStreamPropertiesAsync(
		mediaStreamType: Windows.Media.Capture.MediaStreamType, mediaEncodingProperties: Windows.Media.MediaProperties.IMediaEncodingProperties
	): Windows.Foundation.IAsyncAction
	}

	declare export interface IAudioDeviceController {
		muted: boolean,
		volumePercent: number
	}

	declare export interface IVideoDeviceController {
		backlightCompensation: Windows.Media.Devices.MediaDeviceControl,
		brightness: Windows.Media.Devices.MediaDeviceControl,
		contrast: Windows.Media.Devices.MediaDeviceControl,
		exposure: Windows.Media.Devices.MediaDeviceControl,
		focus: Windows.Media.Devices.MediaDeviceControl,
		hue: Windows.Media.Devices.MediaDeviceControl,
		pan: Windows.Media.Devices.MediaDeviceControl,
		roll: Windows.Media.Devices.MediaDeviceControl,
		tilt: Windows.Media.Devices.MediaDeviceControl,
		whiteBalance: Windows.Media.Devices.MediaDeviceControl,
		zoom: Windows.Media.Devices.MediaDeviceControl,
		trySetPowerlineFrequency(value: Windows.Media.Capture.PowerlineFrequency): boolean,
		tryGetPowerlineFrequency(): {
		value: Windows.Media.Capture.PowerlineFrequency,
		succeeded: boolean
	}
	}

	declare export interface IMediaDeviceControl {
		capabilities: Windows.Media.Devices.MediaDeviceControlCapabilities,
		tryGetValue(): {
		value: number,
		succeeded: boolean
	},
		trySetValue(value: number): boolean,
		tryGetAuto(): {
		value: boolean,
		succeeded: boolean
	},
		trySetAuto(value: boolean): boolean
	}

	declare export interface IMediaDeviceControlCapabilities {
		autoModeSupported: boolean,
		default: number,
		max: number,
		min: number,
		step: number,
		supported: boolean
	}

	declare export interface IAdvancedVideoCaptureDeviceController {
		setDeviceProperty(propertyId: string, propertyValue: any): void,
		getDeviceProperty(propertyId: string): any
	}

		declare export class DialRequestedEventArgs extends undefined$IDialRequestedEventArgs {
		contact: any;
		handled(): void
	}

	declare export class RedialRequestedEventArgs extends undefined$IRedialRequestedEventArgs {
		handled(): void
	}

	declare export class KeypadPressedEventArgs extends undefined$IKeypadPressedEventArgs {
		telephonyKey: Windows.Media.Devices.TelephonyKey
	}

	declare export class CallControl extends undefined$ICallControl {
		hasRinger: boolean;
		indicateNewIncomingCall(enableRinger: boolean, callerId: string): number;
		indicateNewOutgoingCall(): number;
		indicateActiveCall(callToken: number): void;
		endCall(callToken: number): void;
		onanswerrequested: any;
		onhanguprequested: any;
		ondialrequested: any;
		onredialrequested: any;
		onkeypadpressed: any;
		onaudiotransferrequested: any;
		getDefault(): Windows.Media.Devices.CallControl;
		fromId(deviceInterfaceId: string): Windows.Media.Devices.CallControl
	}

	declare export class DefaultAudioCaptureDeviceChangedEventArgs extends undefined$IDefaultAudioDeviceChangedEventArgs {
		id: string;
		role: Windows.Media.Devices.AudioDeviceRole
	}

	declare export class DefaultAudioRenderDeviceChangedEventArgs extends undefined$IDefaultAudioDeviceChangedEventArgs {
		id: string;
		role: Windows.Media.Devices.AudioDeviceRole
	}

	declare export class MediaDevice  {
		getAudioCaptureSelector(): string;
		getAudioRenderSelector(): string;
		getVideoCaptureSelector(): string;
		getDefaultAudioCaptureId(role: Windows.Media.Devices.AudioDeviceRole): string;
		getDefaultAudioRenderId(role: Windows.Media.Devices.AudioDeviceRole): string;
		ondefaultaudiocapturedevicechanged: any;
		ondefaultaudiorenderdevicechanged: any
	}

	declare export class AudioDeviceController extends undefined$IAudioDeviceController {
		muted: boolean;
		volumePercent: number;
		getAvailableMediaStreamProperties(
		mediaStreamType: Windows.Media.Capture.MediaStreamType
	): Windows.Foundation.Collections.IVectorView<Windows.Media.MediaProperties.IMediaEncodingProperties>;
		getMediaStreamProperties(
		mediaStreamType: Windows.Media.Capture.MediaStreamType
	): Windows.Media.MediaProperties.IMediaEncodingProperties;
		setMediaStreamPropertiesAsync(
		mediaStreamType: Windows.Media.Capture.MediaStreamType, mediaEncodingProperties: Windows.Media.MediaProperties.IMediaEncodingProperties
	): Windows.Foundation.IAsyncAction
	}

	declare export class VideoDeviceController extends undefined$IVideoDeviceController {
		backlightCompensation: Windows.Media.Devices.MediaDeviceControl;
		brightness: Windows.Media.Devices.MediaDeviceControl;
		contrast: Windows.Media.Devices.MediaDeviceControl;
		exposure: Windows.Media.Devices.MediaDeviceControl;
		focus: Windows.Media.Devices.MediaDeviceControl;
		hue: Windows.Media.Devices.MediaDeviceControl;
		pan: Windows.Media.Devices.MediaDeviceControl;
		roll: Windows.Media.Devices.MediaDeviceControl;
		tilt: Windows.Media.Devices.MediaDeviceControl;
		whiteBalance: Windows.Media.Devices.MediaDeviceControl;
		zoom: Windows.Media.Devices.MediaDeviceControl;
		trySetPowerlineFrequency(value: Windows.Media.Capture.PowerlineFrequency): boolean;
		tryGetPowerlineFrequency(): {
		value: Windows.Media.Capture.PowerlineFrequency,
		succeeded: boolean
	};
		getAvailableMediaStreamProperties(
		mediaStreamType: Windows.Media.Capture.MediaStreamType
	): Windows.Foundation.Collections.IVectorView<Windows.Media.MediaProperties.IMediaEncodingProperties>;
		getMediaStreamProperties(
		mediaStreamType: Windows.Media.Capture.MediaStreamType
	): Windows.Media.MediaProperties.IMediaEncodingProperties;
		setMediaStreamPropertiesAsync(
		mediaStreamType: Windows.Media.Capture.MediaStreamType, mediaEncodingProperties: Windows.Media.MediaProperties.IMediaEncodingProperties
	): Windows.Foundation.IAsyncAction;
		setDeviceProperty(propertyId: string, propertyValue: any): void;
		getDeviceProperty(propertyId: string): any
	}

	declare export class MediaDeviceControl extends undefined$IMediaDeviceControl {
		capabilities: Windows.Media.Devices.MediaDeviceControlCapabilities;
		tryGetValue(): {
		value: number,
		succeeded: boolean
	};
		trySetValue(value: number): boolean;
		tryGetAuto(): {
		value: boolean,
		succeeded: boolean
	};
		trySetAuto(value: boolean): boolean
	}

	declare export class MediaDeviceControlCapabilities extends undefined$IMediaDeviceControlCapabilities {
		autoModeSupported: boolean;
		default: number;
		max: number;
		min: number;
		step: number;
		supported: boolean
	}

	
}

declare module 'Media' {
		declare export interface IMediaControl {
		albumArt: Windows.Foundation.Uri,
		artistName: string,
		isPlaying: boolean,
		soundLevel: Windows.Media.SoundLevel,
		trackName: string,
		onsoundlevelchanged: any,
		onplaypressed: any,
		onpausepressed: any,
		onstoppressed: any,
		onplaypausetogglepressed: any,
		onrecordpressed: any,
		onnexttrackpressed: any,
		onprevioustrackpressed: any,
		onfastforwardpressed: any,
		onrewindpressed: any,
		onchanneluppressed: any,
		onchanneldownpressed: any
	}

	declare export interface IMediaExtension {
		setProperties(configuration: Windows.Foundation.Collections.IPropertySet): void
	}

	declare export interface IMediaExtensionManager {
		registerSchemeHandler(activatableClassId: string, scheme: string): void,
		registerSchemeHandler(
		activatableClassId: string, scheme: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void,
		registerByteStreamHandler(activatableClassId: string, fileExtension: string, mimeType: string): void,
		registerByteStreamHandler(
		activatableClassId: string, fileExtension: string, mimeType: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void,
		registerAudioDecoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void,
		registerAudioDecoder(
		activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void,
		registerAudioEncoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void,
		registerAudioEncoder(
		activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void,
		registerVideoDecoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void,
		registerVideoDecoder(
		activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void,
		registerVideoEncoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void,
		registerVideoEncoder(
		activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void
	}

	declare export interface IVideoEffectsStatics {
		videoStabilization: string
	}

		declare export class MediaControl  {
		albumArt: Windows.Foundation.Uri;
		artistName: string;
		isPlaying: boolean;
		soundLevel: Windows.Media.SoundLevel;
		trackName: string;
		onsoundlevelchanged: any;
		onplaypressed: any;
		onpausepressed: any;
		onstoppressed: any;
		onplaypausetogglepressed: any;
		onrecordpressed: any;
		onnexttrackpressed: any;
		onprevioustrackpressed: any;
		onfastforwardpressed: any;
		onrewindpressed: any;
		onchanneluppressed: any;
		onchanneldownpressed: any
	}

	declare export class MediaExtensionManager extends undefined$IMediaExtensionManager {
		registerSchemeHandler(activatableClassId: string, scheme: string): void;
		registerSchemeHandler(
		activatableClassId: string, scheme: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void;
		registerByteStreamHandler(activatableClassId: string, fileExtension: string, mimeType: string): void;
		registerByteStreamHandler(
		activatableClassId: string, fileExtension: string, mimeType: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void;
		registerAudioDecoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void;
		registerAudioDecoder(
		activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void;
		registerAudioEncoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void;
		registerAudioEncoder(
		activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void;
		registerVideoDecoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void;
		registerVideoDecoder(
		activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void;
		registerVideoEncoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void;
		registerVideoEncoder(
		activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Windows.Foundation.Collections.IPropertySet
	): void
	}

	declare export class VideoEffects  {
		videoStabilization: string
	}

	
}

declare module 'Playlists' {
		declare export interface IPlaylist {
		files: Windows.Foundation.Collections.IVector<Windows.Storage.StorageFile>,
		saveAsync(): Windows.Foundation.IAsyncAction,
		saveAsAsync(
		saveLocation: Windows.Storage.IStorageFolder, desiredName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		saveAsAsync(
		saveLocation: Windows.Storage.IStorageFolder, desiredName: string, option: Windows.Storage.NameCollisionOption, playlistFormat: Windows.Media.Playlists.PlaylistFormat
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>
	}

	declare export interface IPlaylistStatics {
		loadAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Media.Playlists.Playlist>
	}

		declare export class Playlist extends undefined$IPlaylist {
		files: Windows.Foundation.Collections.IVector<Windows.Storage.StorageFile>;
		saveAsync(): Windows.Foundation.IAsyncAction;
		saveAsAsync(
		saveLocation: Windows.Storage.IStorageFolder, desiredName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		saveAsAsync(
		saveLocation: Windows.Storage.IStorageFolder, desiredName: string, option: Windows.Storage.NameCollisionOption, playlistFormat: Windows.Media.Playlists.PlaylistFormat
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		loadAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Media.Playlists.Playlist>
	}

	
}

declare module 'PlayTo' {
		declare export interface IPlayToSource {
		connection: Windows.Media.PlayTo.PlayToConnection,
		next: Windows.Media.PlayTo.PlayToSource,
		playNext(): void
	}

	declare export interface IPlayToConnectionStateChangedEventArgs {
		currentState: Windows.Media.PlayTo.PlayToConnectionState,
		previousState: Windows.Media.PlayTo.PlayToConnectionState
	}

	declare export interface IPlayToConnectionTransferredEventArgs {
		currentSource: Windows.Media.PlayTo.PlayToSource,
		previousSource: Windows.Media.PlayTo.PlayToSource
	}

	declare export interface IPlayToConnectionErrorEventArgs {
		code: Windows.Media.PlayTo.PlayToConnectionError,
		message: string
	}

	declare export interface IPlayToConnection {
		state: Windows.Media.PlayTo.PlayToConnectionState,
		onstatechanged: any,
		ontransferred: any,
		onerror: any
	}

	declare export interface ISourceChangeRequestedEventArgs {
		album: string,
		author: string,
		date: Date,
		description: string,
		genre: string,
		properties: Windows.Foundation.Collections.IMapView<string, any>,
		rating: number,
		stream: Windows.Storage.Streams.IRandomAccessStreamWithContentType,
		thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference,
		title: string
	}

	declare export interface IPlaybackRateChangeRequestedEventArgs {
		rate: number
	}

	declare export interface ICurrentTimeChangeRequestedEventArgs {
		time: number
	}

	declare export interface IMuteChangeRequestedEventArgs {
		mute: boolean
	}

	declare export interface IVolumeChangeRequestedEventArgs {
		volume: number
	}

	declare export interface IPlayToReceiver {
		friendlyName: string,
		properties: Windows.Foundation.Collections.IPropertySet,
		supportsAudio: boolean,
		supportsImage: boolean,
		supportsVideo: boolean,
		onplayrequested: any,
		onpauserequested: any,
		onsourcechangerequested: any,
		onplaybackratechangerequested: any,
		oncurrenttimechangerequested: any,
		onmutechangerequested: any,
		onvolumechangerequested: any,
		ontimeupdaterequested: any,
		onstoprequested: any,
		notifyVolumeChange(volume: number, mute: boolean): void,
		notifyRateChange(rate: number): void,
		notifyLoadedMetadata(): void,
		notifyTimeUpdate(currentTime: number): void,
		notifyDurationChange(duration: number): void,
		notifySeeking(): void,
		notifySeeked(): void,
		notifyPaused(): void,
		notifyPlaying(): void,
		notifyEnded(): void,
		notifyError(): void,
		notifyStopped(): void,
		startAsync(): Windows.Foundation.IAsyncAction,
		stopAsync(): Windows.Foundation.IAsyncAction
	}

	declare export interface IPlayToSourceSelectedEventArgs {
		friendlyName: string,
		icon: Windows.Storage.Streams.IRandomAccessStreamWithContentType,
		supportsAudio: boolean,
		supportsImage: boolean,
		supportsVideo: boolean
	}

	declare export interface IPlayToSourceDeferral {
		complete(): void
	}

	declare export interface IPlayToSourceRequest {
		deadline: Date,
		displayErrorString(errorString: string): void,
		getDeferral(): Windows.Media.PlayTo.PlayToSourceDeferral,
		setSource(value: Windows.Media.PlayTo.PlayToSource): void
	}

	declare export interface IPlayToSourceRequestedEventArgs {
		sourceRequest: Windows.Media.PlayTo.PlayToSourceRequest
	}

	declare export interface IPlayToManager {
		defaultSourceSelection: boolean,
		onsourcerequested: any,
		onsourceselected: any
	}

	declare export interface IPlayToManagerStatics {
		getForCurrentView(): Windows.Media.PlayTo.PlayToManager,
		showPlayToUI(): void
	}

		declare export class PlayToConnection extends undefined$IPlayToConnection {
		state: Windows.Media.PlayTo.PlayToConnectionState;
		onstatechanged: any;
		ontransferred: any;
		onerror: any
	}

	declare export class PlayToSource extends undefined$IPlayToSource {
		connection: Windows.Media.PlayTo.PlayToConnection;
		next: Windows.Media.PlayTo.PlayToSource;
		playNext(): void
	}

	declare export class PlayToConnectionStateChangedEventArgs extends undefined$IPlayToConnectionStateChangedEventArgs {
		currentState: Windows.Media.PlayTo.PlayToConnectionState;
		previousState: Windows.Media.PlayTo.PlayToConnectionState
	}

	declare export class PlayToConnectionTransferredEventArgs extends undefined$IPlayToConnectionTransferredEventArgs {
		currentSource: Windows.Media.PlayTo.PlayToSource;
		previousSource: Windows.Media.PlayTo.PlayToSource
	}

	declare export class PlayToConnectionErrorEventArgs extends undefined$IPlayToConnectionErrorEventArgs {
		code: Windows.Media.PlayTo.PlayToConnectionError;
		message: string
	}

	declare export class SourceChangeRequestedEventArgs extends undefined$ISourceChangeRequestedEventArgs {
		album: string;
		author: string;
		date: Date;
		description: string;
		genre: string;
		properties: Windows.Foundation.Collections.IMapView<string, any>;
		rating: number;
		stream: Windows.Storage.Streams.IRandomAccessStreamWithContentType;
		thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference;
		title: string
	}

	declare export class PlaybackRateChangeRequestedEventArgs extends undefined$IPlaybackRateChangeRequestedEventArgs {
		rate: number
	}

	declare export class CurrentTimeChangeRequestedEventArgs extends undefined$ICurrentTimeChangeRequestedEventArgs {
		time: number
	}

	declare export class MuteChangeRequestedEventArgs extends undefined$IMuteChangeRequestedEventArgs {
		mute: boolean
	}

	declare export class VolumeChangeRequestedEventArgs extends undefined$IVolumeChangeRequestedEventArgs {
		volume: number
	}

	declare export class PlayToReceiver extends undefined$IPlayToReceiver {
		friendlyName: string;
		properties: Windows.Foundation.Collections.IPropertySet;
		supportsAudio: boolean;
		supportsImage: boolean;
		supportsVideo: boolean;
		onplayrequested: any;
		onpauserequested: any;
		onsourcechangerequested: any;
		onplaybackratechangerequested: any;
		oncurrenttimechangerequested: any;
		onmutechangerequested: any;
		onvolumechangerequested: any;
		ontimeupdaterequested: any;
		onstoprequested: any;
		notifyVolumeChange(volume: number, mute: boolean): void;
		notifyRateChange(rate: number): void;
		notifyLoadedMetadata(): void;
		notifyTimeUpdate(currentTime: number): void;
		notifyDurationChange(duration: number): void;
		notifySeeking(): void;
		notifySeeked(): void;
		notifyPaused(): void;
		notifyPlaying(): void;
		notifyEnded(): void;
		notifyError(): void;
		notifyStopped(): void;
		startAsync(): Windows.Foundation.IAsyncAction;
		stopAsync(): Windows.Foundation.IAsyncAction
	}

	declare export class PlayToSourceSelectedEventArgs extends undefined$IPlayToSourceSelectedEventArgs {
		friendlyName: string;
		icon: Windows.Storage.Streams.IRandomAccessStreamWithContentType;
		supportsAudio: boolean;
		supportsImage: boolean;
		supportsVideo: boolean
	}

	declare export class PlayToSourceDeferral extends undefined$IPlayToSourceDeferral {
		complete(): void
	}

	declare export class PlayToSourceRequest extends undefined$IPlayToSourceRequest {
		deadline: Date;
		displayErrorString(errorString: string): void;
		getDeferral(): Windows.Media.PlayTo.PlayToSourceDeferral;
		setSource(value: Windows.Media.PlayTo.PlayToSource): void
	}

	declare export class PlayToSourceRequestedEventArgs extends undefined$IPlayToSourceRequestedEventArgs {
		sourceRequest: Windows.Media.PlayTo.PlayToSourceRequest
	}

	declare export class PlayToManager extends undefined$IPlayToManager {
		defaultSourceSelection: boolean;
		onsourcerequested: any;
		onsourceselected: any;
		getForCurrentView(): Windows.Media.PlayTo.PlayToManager;
		showPlayToUI(): void
	}

	
}

declare module 'MediaProperties' {
		declare export interface IMediaRatio {
		denominator: number,
		numerator: number
	}

	declare export interface IMediaEncodingProperties {
		properties: Windows.Media.MediaProperties.MediaPropertySet,
		subtype: string,
		type: string
	}

	declare export interface IAudioEncodingProperties {
		bitrate: number,
		bitsPerSample: number,
		channelCount: number,
		sampleRate: number
	}

	declare export interface IVideoEncodingProperties {
		bitrate: number,
		frameRate: Windows.Media.MediaProperties.MediaRatio,
		height: number,
		pixelAspectRatio: Windows.Media.MediaProperties.MediaRatio,
		width: number
	}

	declare export interface IImageEncodingProperties {
		height: number,
		width: number
	}

	declare export interface IImageEncodingPropertiesStatics {
		createJpeg(): Windows.Media.MediaProperties.ImageEncodingProperties,
		createPng(): Windows.Media.MediaProperties.ImageEncodingProperties,
		createJpegXR(): Windows.Media.MediaProperties.ImageEncodingProperties
	}

	declare export interface IContainerEncodingProperties {
		
	}

	declare export interface IMediaEncodingProfileStatics {
		createM4a(
		quality: Windows.Media.MediaProperties.AudioEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile,
		createMp3(
		quality: Windows.Media.MediaProperties.AudioEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile,
		createWma(
		quality: Windows.Media.MediaProperties.AudioEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile,
		createMp4(
		quality: Windows.Media.MediaProperties.VideoEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile,
		createWmv(
		quality: Windows.Media.MediaProperties.VideoEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile,
		createFromFileAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Media.MediaProperties.MediaEncodingProfile>,
		createFromStreamAsync(
		stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.Media.MediaProperties.MediaEncodingProfile>
	}

	declare export interface IMediaEncodingProfile {
		audio: Windows.Media.MediaProperties.AudioEncodingProperties,
		container: Windows.Media.MediaProperties.ContainerEncodingProperties,
		video: Windows.Media.MediaProperties.VideoEncodingProperties
	}

		declare export class MediaRatio extends undefined$IMediaRatio {
		denominator: number;
		numerator: number
	}

	declare export class MediaPropertySet extends undefined$IMap<string, any> {
		size: number;
		lookup(key: string): any;
		hasKey(key: string): boolean;
		getView(): Windows.Foundation.Collections.IMapView<string, any>;
		insert(key: string, value: any): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	}

	declare export class AudioEncodingProperties extends undefined$IAudioEncodingProperties {
		bitrate: number;
		bitsPerSample: number;
		channelCount: number;
		sampleRate: number;
		properties: Windows.Media.MediaProperties.MediaPropertySet;
		subtype: string;
		type: string
	}

	declare export class VideoEncodingProperties extends undefined$IVideoEncodingProperties {
		bitrate: number;
		frameRate: Windows.Media.MediaProperties.MediaRatio;
		height: number;
		pixelAspectRatio: Windows.Media.MediaProperties.MediaRatio;
		width: number;
		properties: Windows.Media.MediaProperties.MediaPropertySet;
		subtype: string;
		type: string
	}

	declare export class ImageEncodingProperties extends undefined$IImageEncodingProperties {
		height: number;
		width: number;
		properties: Windows.Media.MediaProperties.MediaPropertySet;
		subtype: string;
		type: string;
		createJpeg(): Windows.Media.MediaProperties.ImageEncodingProperties;
		createPng(): Windows.Media.MediaProperties.ImageEncodingProperties;
		createJpegXR(): Windows.Media.MediaProperties.ImageEncodingProperties
	}

	declare export class ContainerEncodingProperties extends undefined$IContainerEncodingProperties {
		properties: Windows.Media.MediaProperties.MediaPropertySet;
		subtype: string;
		type: string
	}

	declare export class MediaEncodingProfile extends undefined$IMediaEncodingProfile {
		audio: Windows.Media.MediaProperties.AudioEncodingProperties;
		container: Windows.Media.MediaProperties.ContainerEncodingProperties;
		video: Windows.Media.MediaProperties.VideoEncodingProperties;
		createM4a(
		quality: Windows.Media.MediaProperties.AudioEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile;
		createMp3(
		quality: Windows.Media.MediaProperties.AudioEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile;
		createWma(
		quality: Windows.Media.MediaProperties.AudioEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile;
		createMp4(
		quality: Windows.Media.MediaProperties.VideoEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile;
		createWmv(
		quality: Windows.Media.MediaProperties.VideoEncodingQuality
	): Windows.Media.MediaProperties.MediaEncodingProfile;
		createFromFileAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Media.MediaProperties.MediaEncodingProfile>;
		createFromStreamAsync(
		stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.Media.MediaProperties.MediaEncodingProfile>
	}

	
}

declare module 'Protection' {
		declare export interface ServiceRequestedEventHandler {
		(sender: Windows.Media.Protection.MediaProtectionManager, e: Windows.Media.Protection.ServiceRequestedEventArgs): void
	}

	declare export interface RebootNeededEventHandler {
		(sender: Windows.Media.Protection.MediaProtectionManager): void
	}

	declare export interface ComponentLoadFailedEventHandler {
		(sender: Windows.Media.Protection.MediaProtectionManager, e: Windows.Media.Protection.ComponentLoadFailedEventArgs): void
	}

	declare export interface IMediaProtectionManager {
		properties: Windows.Foundation.Collections.IPropertySet,
		onservicerequested: any,
		onrebootneeded: any,
		oncomponentloadfailed: any
	}

	declare export interface IMediaProtectionServiceCompletion {
		complete(success: boolean): void
	}

	declare export interface IServiceRequestedEventArgs {
		completion: Windows.Media.Protection.MediaProtectionServiceCompletion,
		request: Windows.Media.Protection.IMediaProtectionServiceRequest
	}

	declare export interface IMediaProtectionServiceRequest {
		protectionSystem: string,
		type: string
	}

	declare export interface IComponentLoadFailedEventArgs {
		completion: Windows.Media.Protection.MediaProtectionServiceCompletion,
		information: Windows.Media.Protection.RevocationAndRenewalInformation
	}

	declare export interface IRevocationAndRenewalInformation {
		items: Windows.Foundation.Collections.IVector<Windows.Media.Protection.RevocationAndRenewalItem>
	}

	declare export interface IRevocationAndRenewalItem {
		headerHash: string,
		name: string,
		publicKeyHash: string,
		reasons: Windows.Media.Protection.RevocationAndRenewalReasons,
		renewalId: string
	}

	declare export interface IComponentRenewalStatics {
		renewSystemComponentsAsync(
		information: Windows.Media.Protection.RevocationAndRenewalInformation
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Media.Protection.RenewalStatus, number>
	}

		declare export class MediaProtectionManager extends undefined$IMediaProtectionManager {
		properties: Windows.Foundation.Collections.IPropertySet;
		onservicerequested: any;
		onrebootneeded: any;
		oncomponentloadfailed: any
	}

	declare export class ServiceRequestedEventArgs extends undefined$IServiceRequestedEventArgs {
		completion: Windows.Media.Protection.MediaProtectionServiceCompletion;
		request: Windows.Media.Protection.IMediaProtectionServiceRequest
	}

	declare export class ComponentLoadFailedEventArgs extends undefined$IComponentLoadFailedEventArgs {
		completion: Windows.Media.Protection.MediaProtectionServiceCompletion;
		information: Windows.Media.Protection.RevocationAndRenewalInformation
	}

	declare export class MediaProtectionServiceCompletion extends undefined$IMediaProtectionServiceCompletion {
		complete(success: boolean): void
	}

	declare export class RevocationAndRenewalInformation extends undefined$IRevocationAndRenewalInformation {
		items: Windows.Foundation.Collections.IVector<Windows.Media.Protection.RevocationAndRenewalItem>
	}

	declare export class RevocationAndRenewalItem extends undefined$IRevocationAndRenewalItem {
		headerHash: string;
		name: string;
		publicKeyHash: string;
		reasons: Windows.Media.Protection.RevocationAndRenewalReasons;
		renewalId: string
	}

	declare export class ComponentRenewal  {
		renewSystemComponentsAsync(
		information: Windows.Media.Protection.RevocationAndRenewalInformation
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Media.Protection.RenewalStatus, number>
	}

	
}

declare module 'Transcoding' {
		declare export interface IMediaTranscoder {
		alwaysReencode: boolean,
		hardwareAccelerationEnabled: boolean,
		trimStartTime: number,
		trimStopTime: number,
		addAudioEffect(activatableClassId: string): void,
		addAudioEffect(
		activatableClassId: string, effectRequired: boolean, configuration: Windows.Foundation.Collections.IPropertySet
	): void,
		addVideoEffect(activatableClassId: string): void,
		addVideoEffect(
		activatableClassId: string, effectRequired: boolean, configuration: Windows.Foundation.Collections.IPropertySet
	): void,
		clearEffects(): void,
		prepareFileTranscodeAsync(
		source: Windows.Storage.IStorageFile, destination: Windows.Storage.IStorageFile, profile: Windows.Media.MediaProperties.MediaEncodingProfile
	): Windows.Foundation.IAsyncOperation<Windows.Media.Transcoding.PrepareTranscodeResult>,
		prepareStreamTranscodeAsync(
		source: Windows.Storage.Streams.IRandomAccessStream, destination: Windows.Storage.Streams.IRandomAccessStream, profile: Windows.Media.MediaProperties.MediaEncodingProfile
	): Windows.Foundation.IAsyncOperation<Windows.Media.Transcoding.PrepareTranscodeResult>
	}

	declare export interface IPrepareTranscodeResult {
		canTranscode: boolean,
		failureReason: Windows.Media.Transcoding.TranscodeFailureReason,
		transcodeAsync(): Windows.Foundation.IAsyncActionWithProgress<number>
	}

		declare export class PrepareTranscodeResult extends undefined$IPrepareTranscodeResult {
		canTranscode: boolean;
		failureReason: Windows.Media.Transcoding.TranscodeFailureReason;
		transcodeAsync(): Windows.Foundation.IAsyncActionWithProgress<number>
	}

	declare export class MediaTranscoder extends undefined$IMediaTranscoder {
		alwaysReencode: boolean;
		hardwareAccelerationEnabled: boolean;
		trimStartTime: number;
		trimStopTime: number;
		addAudioEffect(activatableClassId: string): void;
		addAudioEffect(
		activatableClassId: string, effectRequired: boolean, configuration: Windows.Foundation.Collections.IPropertySet
	): void;
		addVideoEffect(activatableClassId: string): void;
		addVideoEffect(
		activatableClassId: string, effectRequired: boolean, configuration: Windows.Foundation.Collections.IPropertySet
	): void;
		clearEffects(): void;
		prepareFileTranscodeAsync(
		source: Windows.Storage.IStorageFile, destination: Windows.Storage.IStorageFile, profile: Windows.Media.MediaProperties.MediaEncodingProfile
	): Windows.Foundation.IAsyncOperation<Windows.Media.Transcoding.PrepareTranscodeResult>;
		prepareStreamTranscodeAsync(
		source: Windows.Storage.Streams.IRandomAccessStream, destination: Windows.Storage.Streams.IRandomAccessStream, profile: Windows.Media.MediaProperties.MediaEncodingProfile
	): Windows.Foundation.IAsyncOperation<Windows.Media.Transcoding.PrepareTranscodeResult>
	}

	
}

declare module 'NetworkOperators' {
		declare export interface IMobileBroadbandAccountStatics {
		availableNetworkAccountIds: Windows.Foundation.Collections.IVectorView<string>,
		createFromNetworkAccountId(
		networkAccountId: string
	): Windows.Networking.NetworkOperators.MobileBroadbandAccount
	}

	declare export interface IMobileBroadbandAccount {
		currentDeviceInformation: Windows.Networking.NetworkOperators.MobileBroadbandDeviceInformation,
		currentNetwork: Windows.Networking.NetworkOperators.MobileBroadbandNetwork,
		networkAccountId: string,
		serviceProviderGuid: string,
		serviceProviderName: string
	}

	declare export interface IMobileBroadbandDeviceInformation {
		cellularClass: Windows.Devices.Sms.CellularClass,
		currentRadioState: Windows.Networking.NetworkOperators.MobileBroadbandRadioState,
		customDataClass: string,
		dataClasses: Windows.Networking.NetworkOperators.DataClasses,
		deviceId: string,
		deviceType: Windows.Networking.NetworkOperators.MobileBroadbandDeviceType,
		firmwareInformation: string,
		manufacturer: string,
		mobileEquipmentId: string,
		model: string,
		networkDeviceStatus: Windows.Networking.NetworkOperators.NetworkDeviceStatus,
		simIccId: string,
		subscriberId: string,
		telephoneNumbers: Windows.Foundation.Collections.IVectorView<string>
	}

	declare export interface IMobileBroadbandNetwork {
		accessPointName: string,
		activationNetworkError: number,
		networkAdapter: Windows.Networking.Connectivity.NetworkAdapter,
		networkRegistrationState: Windows.Networking.NetworkOperators.NetworkRegistrationState,
		packetAttachNetworkError: number,
		registeredDataClass: Windows.Networking.NetworkOperators.DataClasses,
		registeredProviderId: string,
		registeredProviderName: string,
		registrationNetworkError: number,
		showConnectionUI(): void
	}

	declare export interface INetworkOperatorNotificationEventDetails {
		encodingType: number,
		message: string,
		networkAccountId: string,
		notificationType: Windows.Networking.NetworkOperators.NetworkOperatorEventMessageType,
		ruleId: string,
		smsMessage: Windows.Devices.Sms.ISmsMessage
	}

	declare export interface IMobileBroadbandAccountEventArgs {
		networkAccountId: string
	}

	declare export interface IMobileBroadbandAccountUpdatedEventArgs {
		hasDeviceInformationChanged: boolean,
		hasNetworkChanged: boolean,
		networkAccountId: string
	}

	declare export interface IMobileBroadbandAccountWatcher {
		status: Windows.Networking.NetworkOperators.MobileBroadbandAccountWatcherStatus,
		onaccountadded: any,
		onaccountupdated: any,
		onaccountremoved: any,
		onenumerationcompleted: any,
		onstopped: any,
		start(): void,
		stop(): void
	}

	declare export interface IHotspotAuthenticationEventDetails {
		eventToken: string
	}

	declare export interface IHotspotAuthenticationContextStatics {
		tryGetAuthenticationContext(
		evenToken: string
	): {
		context: Windows.Networking.NetworkOperators.HotspotAuthenticationContext,
		isValid: boolean
	}
	}

	declare export interface IHotspotAuthenticationContext {
		authenticationUrl: Windows.Foundation.Uri,
		networkAdapter: Windows.Networking.Connectivity.NetworkAdapter,
		redirectMessageUrl: Windows.Foundation.Uri,
		redirectMessageXml: Windows.Data.Xml.Dom.XmlDocument,
		wirelessNetworkId: Uint8Array,
		issueCredentials(
		userName: string, password: string, extraParameters: string, markAsManualConnectOnFailure: boolean
	): void,
		abortAuthentication(markAsManual: boolean): void,
		skipAuthentication(): void,
		triggerAttentionRequired(packageRelativeApplicationId: string, applicationParameters: string): void
	}

	declare export interface IProvisionFromXmlDocumentResults {
		allElementsProvisioned: boolean,
		provisionResultsXml: string
	}

	declare export interface ProfileUsage {
		usageInMegabytes: number,
		lastSyncTime: Date
	}

	declare export interface IProvisionedProfile {
		updateCost(value: Windows.Networking.Connectivity.NetworkCostType): void,
		updateUsage(value: Windows.Networking.NetworkOperators.ProfileUsage): void
	}

	declare export interface IProvisioningAgent {
		provisionFromXmlDocumentAsync(
		provisioningXmlDocument: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.NetworkOperators.ProvisionFromXmlDocumentResults>,
		getProvisionedProfile(
		mediaType: Windows.Networking.NetworkOperators.ProfileMediaType, profileName: string
	): Windows.Networking.NetworkOperators.ProvisionedProfile
	}

	declare export interface IProvisioningAgentStaticMethods {
		createFromNetworkAccountId(
		networkAccountId: string
	): Windows.Networking.NetworkOperators.ProvisioningAgent
	}

	declare export interface IUssdMessage {
		dataCodingScheme: number,
		payloadAsText: string,
		getPayload(): Uint8Array,
		setPayload(value: Uint8Array): void
	}

	declare export interface IUssdMessageFactory {
		createMessage(messageText: string): Windows.Networking.NetworkOperators.UssdMessage
	}

	declare export interface IUssdReply {
		message: Windows.Networking.NetworkOperators.UssdMessage,
		resultCode: Windows.Networking.NetworkOperators.UssdResultCode
	}

	declare export interface IUssdSession {
		sendMessageAndGetReplyAsync(
		message: Windows.Networking.NetworkOperators.UssdMessage
	): Windows.Foundation.IAsyncOperation<Windows.Networking.NetworkOperators.UssdReply>,
		close(): void
	}

	declare export interface IUssdSessionStatics {
		createFromNetworkAccountId(networkAccountId: string): Windows.Networking.NetworkOperators.UssdSession,
		createFromNetworkInterfaceId(networkInterfaceId: string): Windows.Networking.NetworkOperators.UssdSession
	}

		declare export class MobileBroadbandAccount extends undefined$IMobileBroadbandAccount {
		currentDeviceInformation: Windows.Networking.NetworkOperators.MobileBroadbandDeviceInformation;
		currentNetwork: Windows.Networking.NetworkOperators.MobileBroadbandNetwork;
		networkAccountId: string;
		serviceProviderGuid: string;
		serviceProviderName: string;
		availableNetworkAccountIds: Windows.Foundation.Collections.IVectorView<string>;
		createFromNetworkAccountId(
		networkAccountId: string
	): Windows.Networking.NetworkOperators.MobileBroadbandAccount
	}

	declare export class MobileBroadbandNetwork extends undefined$IMobileBroadbandNetwork {
		accessPointName: string;
		activationNetworkError: number;
		networkAdapter: Windows.Networking.Connectivity.NetworkAdapter;
		networkRegistrationState: Windows.Networking.NetworkOperators.NetworkRegistrationState;
		packetAttachNetworkError: number;
		registeredDataClass: Windows.Networking.NetworkOperators.DataClasses;
		registeredProviderId: string;
		registeredProviderName: string;
		registrationNetworkError: number;
		showConnectionUI(): void
	}

	declare export class MobileBroadbandDeviceInformation extends undefined$IMobileBroadbandDeviceInformation {
		cellularClass: Windows.Devices.Sms.CellularClass;
		currentRadioState: Windows.Networking.NetworkOperators.MobileBroadbandRadioState;
		customDataClass: string;
		dataClasses: Windows.Networking.NetworkOperators.DataClasses;
		deviceId: string;
		deviceType: Windows.Networking.NetworkOperators.MobileBroadbandDeviceType;
		firmwareInformation: string;
		manufacturer: string;
		mobileEquipmentId: string;
		model: string;
		networkDeviceStatus: Windows.Networking.NetworkOperators.NetworkDeviceStatus;
		simIccId: string;
		subscriberId: string;
		telephoneNumbers: Windows.Foundation.Collections.IVectorView<string>
	}

	declare export class NetworkOperatorNotificationEventDetails extends undefined$INetworkOperatorNotificationEventDetails {
		encodingType: number;
		message: string;
		networkAccountId: string;
		notificationType: Windows.Networking.NetworkOperators.NetworkOperatorEventMessageType;
		ruleId: string;
		smsMessage: Windows.Devices.Sms.ISmsMessage
	}

	declare export class MobileBroadbandAccountEventArgs extends undefined$IMobileBroadbandAccountEventArgs {
		networkAccountId: string
	}

	declare export class MobileBroadbandAccountUpdatedEventArgs extends undefined$IMobileBroadbandAccountUpdatedEventArgs {
		hasDeviceInformationChanged: boolean;
		hasNetworkChanged: boolean;
		networkAccountId: string
	}

	declare export class MobileBroadbandAccountWatcher extends undefined$IMobileBroadbandAccountWatcher {
		status: Windows.Networking.NetworkOperators.MobileBroadbandAccountWatcherStatus;
		onaccountadded: any;
		onaccountupdated: any;
		onaccountremoved: any;
		onenumerationcompleted: any;
		onstopped: any;
		start(): void;
		stop(): void
	}

	declare export class HotspotAuthenticationEventDetails extends undefined$IHotspotAuthenticationEventDetails {
		eventToken: string
	}

	declare export class HotspotAuthenticationContext extends undefined$IHotspotAuthenticationContext {
		authenticationUrl: Windows.Foundation.Uri;
		networkAdapter: Windows.Networking.Connectivity.NetworkAdapter;
		redirectMessageUrl: Windows.Foundation.Uri;
		redirectMessageXml: Windows.Data.Xml.Dom.XmlDocument;
		wirelessNetworkId: Uint8Array;
		issueCredentials(
		userName: string, password: string, extraParameters: string, markAsManualConnectOnFailure: boolean
	): void;
		abortAuthentication(markAsManual: boolean): void;
		skipAuthentication(): void;
		triggerAttentionRequired(packageRelativeApplicationId: string, applicationParameters: string): void;
		tryGetAuthenticationContext(
		evenToken: string
	): {
		context: Windows.Networking.NetworkOperators.HotspotAuthenticationContext,
		isValid: boolean
	}
	}

	declare export class ProvisionFromXmlDocumentResults extends undefined$IProvisionFromXmlDocumentResults {
		allElementsProvisioned: boolean;
		provisionResultsXml: string
	}

	declare export class ProvisionedProfile extends undefined$IProvisionedProfile {
		updateCost(value: Windows.Networking.Connectivity.NetworkCostType): void;
		updateUsage(value: Windows.Networking.NetworkOperators.ProfileUsage): void
	}

	declare export class ProvisioningAgent extends undefined$IProvisioningAgent {
		provisionFromXmlDocumentAsync(
		provisioningXmlDocument: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.NetworkOperators.ProvisionFromXmlDocumentResults>;
		getProvisionedProfile(
		mediaType: Windows.Networking.NetworkOperators.ProfileMediaType, profileName: string
	): Windows.Networking.NetworkOperators.ProvisionedProfile;
		createFromNetworkAccountId(
		networkAccountId: string
	): Windows.Networking.NetworkOperators.ProvisioningAgent
	}

	declare export class UssdMessage extends undefined$IUssdMessage {
		constructor(messageText: string): this;
		dataCodingScheme: number;
		payloadAsText: string;
		getPayload(): Uint8Array;
		setPayload(value: Uint8Array): void
	}

	declare export class UssdReply extends undefined$IUssdReply {
		message: Windows.Networking.NetworkOperators.UssdMessage;
		resultCode: Windows.Networking.NetworkOperators.UssdResultCode
	}

	declare export class UssdSession extends undefined$IUssdSession {
		sendMessageAndGetReplyAsync(
		message: Windows.Networking.NetworkOperators.UssdMessage
	): Windows.Foundation.IAsyncOperation<Windows.Networking.NetworkOperators.UssdReply>;
		close(): void;
		createFromNetworkAccountId(networkAccountId: string): Windows.Networking.NetworkOperators.UssdSession;
		createFromNetworkInterfaceId(networkInterfaceId: string): Windows.Networking.NetworkOperators.UssdSession
	}

	
}

declare module 'BackgroundTransfer' {
		declare export interface BackgroundDownloadProgress {
		bytesReceived: number,
		totalBytesToReceive: number,
		status: Windows.Networking.BackgroundTransfer.BackgroundTransferStatus,
		hasResponseChanged: boolean,
		hasRestarted: boolean
	}

	declare export interface BackgroundUploadProgress {
		bytesReceived: number,
		bytesSent: number,
		totalBytesToReceive: number,
		totalBytesToSend: number,
		status: Windows.Networking.BackgroundTransfer.BackgroundTransferStatus,
		hasResponseChanged: boolean,
		hasRestarted: boolean
	}

	declare export interface IBackgroundTransferBase {
		costPolicy: Windows.Networking.BackgroundTransfer.BackgroundTransferCostPolicy,
		group: string,
		method: string,
		proxyCredential: Windows.Security.Credentials.PasswordCredential,
		serverCredential: Windows.Security.Credentials.PasswordCredential,
		setRequestHeader(headerName: string, headerValue: string): void
	}

	declare export interface IBackgroundDownloader {
		createDownload(
		uri: Windows.Foundation.Uri, resultFile: Windows.Storage.IStorageFile
	): Windows.Networking.BackgroundTransfer.DownloadOperation,
		createDownload(
		uri: Windows.Foundation.Uri, resultFile: Windows.Storage.IStorageFile, requestBodyFile: Windows.Storage.IStorageFile
	): Windows.Networking.BackgroundTransfer.DownloadOperation,
		createDownloadAsync(
		uri: Windows.Foundation.Uri, resultFile: Windows.Storage.IStorageFile, requestBodyStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.DownloadOperation>
	}

	declare export interface IBackgroundUploader {
		createUpload(
		uri: Windows.Foundation.Uri, sourceFile: Windows.Storage.IStorageFile
	): Windows.Networking.BackgroundTransfer.UploadOperation,
		createUploadFromStreamAsync(
		uri: Windows.Foundation.Uri, sourceStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.UploadOperation>,
		createUploadAsync(
		uri: Windows.Foundation.Uri, parts: Windows.Foundation.Collections.IIterable<Windows.Networking.BackgroundTransfer.BackgroundTransferContentPart>
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.UploadOperation>,
		createUploadAsync(
		uri: Windows.Foundation.Uri, parts: Windows.Foundation.Collections.IIterable<Windows.Networking.BackgroundTransfer.BackgroundTransferContentPart>, subType: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.UploadOperation>,
		createUploadAsync(
		uri: Windows.Foundation.Uri, parts: Windows.Foundation.Collections.IIterable<Windows.Networking.BackgroundTransfer.BackgroundTransferContentPart>, subType: string, boundary: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.UploadOperation>
	}

	declare export interface IBackgroundTransferOperation {
		costPolicy: Windows.Networking.BackgroundTransfer.BackgroundTransferCostPolicy,
		group: string,
		guid: string,
		method: string,
		requestedUri: Windows.Foundation.Uri,
		getResultStreamAt(position: number): Windows.Storage.Streams.IInputStream,
		getResponseInformation(): Windows.Networking.BackgroundTransfer.ResponseInformation
	}

	declare export interface IDownloadOperation {
		progress: Windows.Networking.BackgroundTransfer.BackgroundDownloadProgress,
		resultFile: Windows.Storage.IStorageFile,
		startAsync(
		
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Networking.BackgroundTransfer.DownloadOperation, Windows.Networking.BackgroundTransfer.DownloadOperation>,
		attachAsync(
		
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Networking.BackgroundTransfer.DownloadOperation, Windows.Networking.BackgroundTransfer.DownloadOperation>,
		pause(): void,
		resume(): void
	}

	declare export interface IUploadOperation {
		progress: Windows.Networking.BackgroundTransfer.BackgroundUploadProgress,
		sourceFile: Windows.Storage.IStorageFile,
		startAsync(
		
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Networking.BackgroundTransfer.UploadOperation, Windows.Networking.BackgroundTransfer.UploadOperation>,
		attachAsync(
		
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Networking.BackgroundTransfer.UploadOperation, Windows.Networking.BackgroundTransfer.UploadOperation>
	}

	declare export interface IBackgroundDownloaderStaticMethods {
		getCurrentDownloadsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.BackgroundTransfer.DownloadOperation>>,
		getCurrentDownloadsAsync(
		group: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.BackgroundTransfer.DownloadOperation>>
	}

	declare export interface IBackgroundUploaderStaticMethods {
		getCurrentUploadsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.BackgroundTransfer.UploadOperation>>,
		getCurrentUploadsAsync(
		group: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.BackgroundTransfer.UploadOperation>>
	}

	declare export interface IResponseInformation {
		actualUri: Windows.Foundation.Uri,
		headers: Windows.Foundation.Collections.IMapView<string, string>,
		isResumable: boolean,
		statusCode: number
	}

	declare export interface IBackgroundTransferErrorStaticMethods {
		getStatus(hresult: number): Windows.Web.WebErrorStatus
	}

	declare export interface IBackgroundTransferContentPart {
		setHeader(headerName: string, headerValue: string): void,
		setText(value: string): void,
		setFile(value: Windows.Storage.IStorageFile): void
	}

	declare export interface IBackgroundTransferContentPartFactory {
		createWithName(
		name: string
	): Windows.Networking.BackgroundTransfer.BackgroundTransferContentPart,
		createWithNameAndFileName(
		name: string, fileName: string
	): Windows.Networking.BackgroundTransfer.BackgroundTransferContentPart
	}

		declare export class DownloadOperation extends undefined$IDownloadOperation {
		progress: Windows.Networking.BackgroundTransfer.BackgroundDownloadProgress;
		resultFile: Windows.Storage.IStorageFile;
		costPolicy: Windows.Networking.BackgroundTransfer.BackgroundTransferCostPolicy;
		group: string;
		guid: string;
		method: string;
		requestedUri: Windows.Foundation.Uri;
		startAsync(
		
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Networking.BackgroundTransfer.DownloadOperation, Windows.Networking.BackgroundTransfer.DownloadOperation>;
		attachAsync(
		
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Networking.BackgroundTransfer.DownloadOperation, Windows.Networking.BackgroundTransfer.DownloadOperation>;
		pause(): void;
		resume(): void;
		getResultStreamAt(position: number): Windows.Storage.Streams.IInputStream;
		getResponseInformation(): Windows.Networking.BackgroundTransfer.ResponseInformation
	}

	declare export class UploadOperation extends undefined$IUploadOperation {
		progress: Windows.Networking.BackgroundTransfer.BackgroundUploadProgress;
		sourceFile: Windows.Storage.IStorageFile;
		costPolicy: Windows.Networking.BackgroundTransfer.BackgroundTransferCostPolicy;
		group: string;
		guid: string;
		method: string;
		requestedUri: Windows.Foundation.Uri;
		startAsync(
		
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Networking.BackgroundTransfer.UploadOperation, Windows.Networking.BackgroundTransfer.UploadOperation>;
		attachAsync(
		
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Networking.BackgroundTransfer.UploadOperation, Windows.Networking.BackgroundTransfer.UploadOperation>;
		getResultStreamAt(position: number): Windows.Storage.Streams.IInputStream;
		getResponseInformation(): Windows.Networking.BackgroundTransfer.ResponseInformation
	}

	declare export class BackgroundTransferContentPart extends undefined$IBackgroundTransferContentPart {
		constructor(name: string): this;
		constructor(name: string, fileName: string): this;
		constructor(): this;
		setHeader(headerName: string, headerValue: string): void;
		setText(value: string): void;
		setFile(value: Windows.Storage.IStorageFile): void
	}

	declare export class ResponseInformation extends undefined$IResponseInformation {
		actualUri: Windows.Foundation.Uri;
		headers: Windows.Foundation.Collections.IMapView<string, string>;
		isResumable: boolean;
		statusCode: number
	}

	declare export class BackgroundDownloader extends undefined$IBackgroundDownloader {
		costPolicy: Windows.Networking.BackgroundTransfer.BackgroundTransferCostPolicy;
		group: string;
		method: string;
		proxyCredential: Windows.Security.Credentials.PasswordCredential;
		serverCredential: Windows.Security.Credentials.PasswordCredential;
		createDownload(
		uri: Windows.Foundation.Uri, resultFile: Windows.Storage.IStorageFile
	): Windows.Networking.BackgroundTransfer.DownloadOperation;
		createDownload(
		uri: Windows.Foundation.Uri, resultFile: Windows.Storage.IStorageFile, requestBodyFile: Windows.Storage.IStorageFile
	): Windows.Networking.BackgroundTransfer.DownloadOperation;
		createDownloadAsync(
		uri: Windows.Foundation.Uri, resultFile: Windows.Storage.IStorageFile, requestBodyStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.DownloadOperation>;
		setRequestHeader(headerName: string, headerValue: string): void;
		getCurrentDownloadsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.BackgroundTransfer.DownloadOperation>>;
		getCurrentDownloadsAsync(
		group: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.BackgroundTransfer.DownloadOperation>>
	}

	declare export class BackgroundUploader extends undefined$IBackgroundUploader {
		costPolicy: Windows.Networking.BackgroundTransfer.BackgroundTransferCostPolicy;
		group: string;
		method: string;
		proxyCredential: Windows.Security.Credentials.PasswordCredential;
		serverCredential: Windows.Security.Credentials.PasswordCredential;
		createUpload(
		uri: Windows.Foundation.Uri, sourceFile: Windows.Storage.IStorageFile
	): Windows.Networking.BackgroundTransfer.UploadOperation;
		createUploadFromStreamAsync(
		uri: Windows.Foundation.Uri, sourceStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.UploadOperation>;
		createUploadAsync(
		uri: Windows.Foundation.Uri, parts: Windows.Foundation.Collections.IIterable<Windows.Networking.BackgroundTransfer.BackgroundTransferContentPart>
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.UploadOperation>;
		createUploadAsync(
		uri: Windows.Foundation.Uri, parts: Windows.Foundation.Collections.IIterable<Windows.Networking.BackgroundTransfer.BackgroundTransferContentPart>, subType: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.UploadOperation>;
		createUploadAsync(
		uri: Windows.Foundation.Uri, parts: Windows.Foundation.Collections.IIterable<Windows.Networking.BackgroundTransfer.BackgroundTransferContentPart>, subType: string, boundary: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.BackgroundTransfer.UploadOperation>;
		setRequestHeader(headerName: string, headerValue: string): void;
		getCurrentUploadsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.BackgroundTransfer.UploadOperation>>;
		getCurrentUploadsAsync(
		group: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.BackgroundTransfer.UploadOperation>>
	}

	declare export class BackgroundTransferError  {
		getStatus(hresult: number): Windows.Web.WebErrorStatus
	}

	
}

declare module 'Proximity' {
		declare export interface IProximityMessage {
		data: Windows.Storage.Streams.IBuffer,
		dataAsString: string,
		messageType: string,
		subscriptionId: number
	}

	declare export interface MessageReceivedHandler {
		(sender: Windows.Networking.Proximity.ProximityDevice, message: Windows.Networking.Proximity.ProximityMessage): void
	}

	declare export interface MessageTransmittedHandler {
		(sender: Windows.Networking.Proximity.ProximityDevice, messageId: number): void
	}

	declare export interface DeviceArrivedEventHandler {
		(sender: Windows.Networking.Proximity.ProximityDevice): void
	}

	declare export interface DeviceDepartedEventHandler {
		(sender: Windows.Networking.Proximity.ProximityDevice): void
	}

	declare export interface IProximityDevice {
		bitsPerSecond: number,
		deviceId: string,
		maxMessageBytes: number,
		subscribeForMessage(
		messageType: string, messageReceivedHandler: Windows.Networking.Proximity.MessageReceivedHandler
	): number,
		publishMessage(messageType: string, message: string): number,
		publishMessage(
		messageType: string, message: string, messageTransmittedHandler: Windows.Networking.Proximity.MessageTransmittedHandler
	): number,
		publishBinaryMessage(messageType: string, message: Windows.Storage.Streams.IBuffer): number,
		publishBinaryMessage(
		messageType: string, message: Windows.Storage.Streams.IBuffer, messageTransmittedHandler: Windows.Networking.Proximity.MessageTransmittedHandler
	): number,
		publishUriMessage(message: Windows.Foundation.Uri): number,
		publishUriMessage(
		message: Windows.Foundation.Uri, messageTransmittedHandler: Windows.Networking.Proximity.MessageTransmittedHandler
	): number,
		stopSubscribingForMessage(subscriptionId: number): void,
		stopPublishingMessage(messageId: number): void,
		ondevicearrived: any,
		ondevicedeparted: any
	}

	declare export interface IProximityDeviceStatics {
		getDeviceSelector(): string,
		getDefault(): Windows.Networking.Proximity.ProximityDevice,
		fromId(deviceInterfaceId: string): Windows.Networking.Proximity.ProximityDevice
	}

	declare export interface ITriggeredConnectionStateChangedEventArgs {
		id: number,
		socket: Windows.Networking.Sockets.StreamSocket,
		state: Windows.Networking.Proximity.TriggeredConnectState
	}

	declare export interface IPeerInformation {
		displayName: string
	}

	declare export interface IConnectionRequestedEventArgs {
		peerInformation: Windows.Networking.Proximity.PeerInformation
	}

	declare export interface IPeerFinderStatics {
		allowBluetooth: boolean,
		allowInfrastructure: boolean,
		allowWiFiDirect: boolean,
		alternateIdentities: Windows.Foundation.Collections.IMap<string, string>,
		displayName: string,
		supportedDiscoveryTypes: Windows.Networking.Proximity.PeerDiscoveryTypes,
		start(): void,
		start(peerMessage: string): void,
		stop(): void,
		ontriggeredconnectionstatechanged: any,
		onconnectionrequested: any,
		findAllPeersAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.Proximity.PeerInformation>>,
		connectAsync(
		peerInformation: Windows.Networking.Proximity.PeerInformation
	): Windows.Foundation.IAsyncOperation<Windows.Networking.Sockets.StreamSocket>
	}

		declare export class ProximityMessage extends undefined$IProximityMessage {
		data: Windows.Storage.Streams.IBuffer;
		dataAsString: string;
		messageType: string;
		subscriptionId: number
	}

	declare export class ProximityDevice extends undefined$IProximityDevice {
		bitsPerSecond: number;
		deviceId: string;
		maxMessageBytes: number;
		subscribeForMessage(
		messageType: string, messageReceivedHandler: Windows.Networking.Proximity.MessageReceivedHandler
	): number;
		publishMessage(messageType: string, message: string): number;
		publishMessage(
		messageType: string, message: string, messageTransmittedHandler: Windows.Networking.Proximity.MessageTransmittedHandler
	): number;
		publishBinaryMessage(messageType: string, message: Windows.Storage.Streams.IBuffer): number;
		publishBinaryMessage(
		messageType: string, message: Windows.Storage.Streams.IBuffer, messageTransmittedHandler: Windows.Networking.Proximity.MessageTransmittedHandler
	): number;
		publishUriMessage(message: Windows.Foundation.Uri): number;
		publishUriMessage(
		message: Windows.Foundation.Uri, messageTransmittedHandler: Windows.Networking.Proximity.MessageTransmittedHandler
	): number;
		stopSubscribingForMessage(subscriptionId: number): void;
		stopPublishingMessage(messageId: number): void;
		ondevicearrived: any;
		ondevicedeparted: any;
		getDeviceSelector(): string;
		getDefault(): Windows.Networking.Proximity.ProximityDevice;
		fromId(deviceInterfaceId: string): Windows.Networking.Proximity.ProximityDevice
	}

	declare export class TriggeredConnectionStateChangedEventArgs extends undefined$ITriggeredConnectionStateChangedEventArgs {
		id: number;
		socket: Windows.Networking.Sockets.StreamSocket;
		state: Windows.Networking.Proximity.TriggeredConnectState
	}

	declare export class PeerInformation extends undefined$IPeerInformation {
		displayName: string
	}

	declare export class ConnectionRequestedEventArgs extends undefined$IConnectionRequestedEventArgs {
		peerInformation: Windows.Networking.Proximity.PeerInformation
	}

	declare export class PeerFinder  {
		allowBluetooth: boolean;
		allowInfrastructure: boolean;
		allowWiFiDirect: boolean;
		alternateIdentities: Windows.Foundation.Collections.IMap<string, string>;
		displayName: string;
		supportedDiscoveryTypes: Windows.Networking.Proximity.PeerDiscoveryTypes;
		start(): void;
		start(peerMessage: string): void;
		stop(): void;
		ontriggeredconnectionstatechanged: any;
		onconnectionrequested: any;
		findAllPeersAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.Proximity.PeerInformation>>;
		connectAsync(
		peerInformation: Windows.Networking.Proximity.PeerInformation
	): Windows.Foundation.IAsyncOperation<Windows.Networking.Sockets.StreamSocket>
	}

	
}

declare module 'Sockets' {
		declare export interface IControlChannelTrigger {
		controlChannelTriggerId: string,
		currentKeepAliveIntervalInMinutes: number,
		keepAliveTrigger: Windows.ApplicationModel.Background.IBackgroundTrigger,
		pushNotificationTrigger: Windows.ApplicationModel.Background.IBackgroundTrigger,
		serverKeepAliveIntervalInMinutes: number,
		transportObject: any,
		usingTransport(transport: any): void,
		waitForPushEnabled(): Windows.Networking.Sockets.ControlChannelTriggerStatus,
		decreaseNetworkKeepAliveInterval(): void,
		flushTransport(): void
	}

	declare export interface IControlChannelTriggerFactory {
		createControlChannelTrigger(
		channelId: string, serverKeepAliveIntervalInMinutes: number
	): Windows.Networking.Sockets.ControlChannelTrigger,
		createControlChannelTrigger(
		channelId: string, serverKeepAliveIntervalInMinutes: number, resourceRequestType: Windows.Networking.Sockets.ControlChannelTriggerResourceType
	): Windows.Networking.Sockets.ControlChannelTrigger
	}

	declare export interface IControlChannelTriggerEventDetails {
		controlChannelTrigger: Windows.Networking.Sockets.ControlChannelTrigger
	}

	declare export interface IControlChannelTriggerResetEventDetails {
		hardwareSlotReset: boolean,
		resetReason: Windows.Networking.Sockets.ControlChannelTriggerResetReason,
		softwareSlotReset: boolean
	}

	declare export interface RoundTripTimeStatistics {
		variance: number,
		max: number,
		min: number,
		sum: number
	}

	declare export interface BandwidthStatistics {
		outboundBitsPerSecond: number,
		inboundBitsPerSecond: number,
		outboundBitsPerSecondInstability: number,
		inboundBitsPerSecondInstability: number,
		outboundBandwidthPeaked: boolean,
		inboundBandwidthPeaked: boolean
	}

	declare export interface IDatagramSocketMessageReceivedEventArgs {
		localAddress: Windows.Networking.HostName,
		remoteAddress: Windows.Networking.HostName,
		remotePort: string,
		getDataReader(): Windows.Storage.Streams.DataReader,
		getDataStream(): Windows.Storage.Streams.IInputStream
	}

	declare export interface IMessageWebSocketMessageReceivedEventArgs {
		messageType: Windows.Networking.Sockets.SocketMessageType,
		getDataReader(): Windows.Storage.Streams.DataReader,
		getDataStream(): Windows.Storage.Streams.IInputStream
	}

	declare export interface IWebSocketClosedEventArgs {
		code: number,
		reason: string
	}

	declare export interface IDatagramSocketInformation {
		localAddress: Windows.Networking.HostName,
		localPort: string,
		remoteAddress: Windows.Networking.HostName,
		remotePort: string
	}

	declare export interface IDatagramSocketControl {
		outboundUnicastHopLimit: number,
		qualityOfService: Windows.Networking.Sockets.SocketQualityOfService
	}

	declare export interface IDatagramSocketStatics {
		getEndpointPairsAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.EndpointPair>>,
		getEndpointPairsAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string, sortOptions: Windows.Networking.HostNameSortOptions
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.EndpointPair>>
	}

	declare export interface IDatagramSocket {
		control: Windows.Networking.Sockets.DatagramSocketControl,
		information: Windows.Networking.Sockets.DatagramSocketInformation,
		outputStream: Windows.Storage.Streams.IOutputStream,
		connectAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string
	): Windows.Foundation.IAsyncAction,
		connectAsync(endpointPair: Windows.Networking.EndpointPair): Windows.Foundation.IAsyncAction,
		bindServiceNameAsync(localServiceName: string): Windows.Foundation.IAsyncAction,
		bindEndpointAsync(
		localHostName: Windows.Networking.HostName, localServiceName: string
	): Windows.Foundation.IAsyncAction,
		joinMulticastGroup(host: Windows.Networking.HostName): void,
		getOutputStreamAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IOutputStream>,
		getOutputStreamAsync(
		endpointPair: Windows.Networking.EndpointPair
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IOutputStream>,
		onmessagereceived: any
	}

	declare export interface IStreamSocketInformation {
		bandwidthStatistics: Windows.Networking.Sockets.BandwidthStatistics,
		localAddress: Windows.Networking.HostName,
		localPort: string,
		protectionLevel: Windows.Networking.Sockets.SocketProtectionLevel,
		remoteAddress: Windows.Networking.HostName,
		remoteHostName: Windows.Networking.HostName,
		remotePort: string,
		remoteServiceName: string,
		roundTripTimeStatistics: Windows.Networking.Sockets.RoundTripTimeStatistics,
		sessionKey: Windows.Storage.Streams.IBuffer
	}

	declare export interface IStreamSocketControl {
		keepAlive: boolean,
		noDelay: boolean,
		outboundBufferSizeInBytes: number,
		outboundUnicastHopLimit: number,
		qualityOfService: Windows.Networking.Sockets.SocketQualityOfService
	}

	declare export interface IStreamSocket {
		control: Windows.Networking.Sockets.StreamSocketControl,
		information: Windows.Networking.Sockets.StreamSocketInformation,
		inputStream: Windows.Storage.Streams.IInputStream,
		outputStream: Windows.Storage.Streams.IOutputStream,
		connectAsync(endpointPair: Windows.Networking.EndpointPair): Windows.Foundation.IAsyncAction,
		connectAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string
	): Windows.Foundation.IAsyncAction,
		connectAsync(
		endpointPair: Windows.Networking.EndpointPair, protectionLevel: Windows.Networking.Sockets.SocketProtectionLevel
	): Windows.Foundation.IAsyncAction,
		connectAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string, protectionLevel: Windows.Networking.Sockets.SocketProtectionLevel
	): Windows.Foundation.IAsyncAction,
		upgradeToSslAsync(
		protectionLevel: Windows.Networking.Sockets.SocketProtectionLevel, validationHostName: Windows.Networking.HostName
	): Windows.Foundation.IAsyncAction
	}

	declare export interface IStreamSocketListenerControl {
		qualityOfService: Windows.Networking.Sockets.SocketQualityOfService
	}

	declare export interface IStreamSocketListenerInformation {
		localPort: string
	}

	declare export interface IStreamSocketListenerConnectionReceivedEventArgs {
		socket: Windows.Networking.Sockets.StreamSocket
	}

	declare export interface IStreamSocketListener {
		control: Windows.Networking.Sockets.StreamSocketListenerControl,
		information: Windows.Networking.Sockets.StreamSocketListenerInformation,
		bindServiceNameAsync(localServiceName: string): Windows.Foundation.IAsyncAction,
		bindEndpointAsync(
		localHostName: Windows.Networking.HostName, localServiceName: string
	): Windows.Foundation.IAsyncAction,
		onconnectionreceived: any
	}

	declare export interface IWebSocketControl {
		outboundBufferSizeInBytes: number,
		proxyCredential: Windows.Security.Credentials.PasswordCredential,
		serverCredential: Windows.Security.Credentials.PasswordCredential,
		supportedProtocols: Windows.Foundation.Collections.IVector<string>
	}

	declare export interface IWebSocketInformation {
		bandwidthStatistics: Windows.Networking.Sockets.BandwidthStatistics,
		localAddress: Windows.Networking.HostName,
		protocol: string
	}

	declare export interface IWebSocket {
		outputStream: Windows.Storage.Streams.IOutputStream,
		connectAsync(uri: Windows.Foundation.Uri): Windows.Foundation.IAsyncAction,
		setRequestHeader(headerName: string, headerValue: string): void,
		onclosed: any,
		close(): void,
		close(code: number, reason: string): void
	}

	declare export interface IMessageWebSocketControl {
		maxMessageSize: number,
		messageType: Windows.Networking.Sockets.SocketMessageType
	}

	declare export interface IMessageWebSocket {
		control: Windows.Networking.Sockets.MessageWebSocketControl,
		information: Windows.Networking.Sockets.MessageWebSocketInformation,
		onmessagereceived: any,
		close(): void,
		close(code: number, reason: string): void
	}

	declare export interface IStreamWebSocketControl {
		noDelay: boolean
	}

	declare export interface IStreamWebSocket {
		control: Windows.Networking.Sockets.StreamWebSocketControl,
		information: Windows.Networking.Sockets.StreamWebSocketInformation,
		inputStream: Windows.Storage.Streams.IInputStream,
		close(): void,
		close(code: number, reason: string): void
	}

	declare export interface ISocketErrorStatics {
		getStatus(hresult: number): Windows.Networking.Sockets.SocketErrorStatus
	}

	declare export interface IWebSocketErrorStatics {
		getStatus(hresult: number): Windows.Web.WebErrorStatus
	}

		declare export class ControlChannelTrigger extends undefined$IControlChannelTrigger {
		constructor(channelId: string, serverKeepAliveIntervalInMinutes: number): this;
		constructor(channelId: string, serverKeepAliveIntervalInMinutes: number, resourceRequestType: Windows.Networking.Sockets.ControlChannelTriggerResourceType): this;
		controlChannelTriggerId: string;
		currentKeepAliveIntervalInMinutes: number;
		keepAliveTrigger: Windows.ApplicationModel.Background.IBackgroundTrigger;
		pushNotificationTrigger: Windows.ApplicationModel.Background.IBackgroundTrigger;
		serverKeepAliveIntervalInMinutes: number;
		transportObject: any;
		usingTransport(transport: any): void;
		waitForPushEnabled(): Windows.Networking.Sockets.ControlChannelTriggerStatus;
		decreaseNetworkKeepAliveInterval(): void;
		flushTransport(): void;
		dispose(): void;
		close(): void
	}

	declare export class DatagramSocketControl extends undefined$IDatagramSocketControl {
		outboundUnicastHopLimit: number;
		qualityOfService: Windows.Networking.Sockets.SocketQualityOfService
	}

	declare export class DatagramSocketInformation extends undefined$IDatagramSocketInformation {
		localAddress: Windows.Networking.HostName;
		localPort: string;
		remoteAddress: Windows.Networking.HostName;
		remotePort: string
	}

	declare export class DatagramSocket extends undefined$IDatagramSocket {
		control: Windows.Networking.Sockets.DatagramSocketControl;
		information: Windows.Networking.Sockets.DatagramSocketInformation;
		outputStream: Windows.Storage.Streams.IOutputStream;
		connectAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string
	): Windows.Foundation.IAsyncAction;
		connectAsync(endpointPair: Windows.Networking.EndpointPair): Windows.Foundation.IAsyncAction;
		bindServiceNameAsync(localServiceName: string): Windows.Foundation.IAsyncAction;
		bindEndpointAsync(
		localHostName: Windows.Networking.HostName, localServiceName: string
	): Windows.Foundation.IAsyncAction;
		joinMulticastGroup(host: Windows.Networking.HostName): void;
		getOutputStreamAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IOutputStream>;
		getOutputStreamAsync(
		endpointPair: Windows.Networking.EndpointPair
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IOutputStream>;
		onmessagereceived: any;
		dispose(): void;
		getEndpointPairsAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.EndpointPair>>;
		getEndpointPairsAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string, sortOptions: Windows.Networking.HostNameSortOptions
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Networking.EndpointPair>>;
		close(): void
	}

	declare export class DatagramSocketMessageReceivedEventArgs extends undefined$IDatagramSocketMessageReceivedEventArgs {
		localAddress: Windows.Networking.HostName;
		remoteAddress: Windows.Networking.HostName;
		remotePort: string;
		getDataReader(): Windows.Storage.Streams.DataReader;
		getDataStream(): Windows.Storage.Streams.IInputStream
	}

	declare export class StreamSocketControl extends undefined$IStreamSocketControl {
		keepAlive: boolean;
		noDelay: boolean;
		outboundBufferSizeInBytes: number;
		outboundUnicastHopLimit: number;
		qualityOfService: Windows.Networking.Sockets.SocketQualityOfService
	}

	declare export class StreamSocketInformation extends undefined$IStreamSocketInformation {
		bandwidthStatistics: Windows.Networking.Sockets.BandwidthStatistics;
		localAddress: Windows.Networking.HostName;
		localPort: string;
		protectionLevel: Windows.Networking.Sockets.SocketProtectionLevel;
		remoteAddress: Windows.Networking.HostName;
		remoteHostName: Windows.Networking.HostName;
		remotePort: string;
		remoteServiceName: string;
		roundTripTimeStatistics: Windows.Networking.Sockets.RoundTripTimeStatistics;
		sessionKey: Windows.Storage.Streams.IBuffer
	}

	declare export class StreamSocket extends undefined$IStreamSocket {
		control: Windows.Networking.Sockets.StreamSocketControl;
		information: Windows.Networking.Sockets.StreamSocketInformation;
		inputStream: Windows.Storage.Streams.IInputStream;
		outputStream: Windows.Storage.Streams.IOutputStream;
		connectAsync(endpointPair: Windows.Networking.EndpointPair): Windows.Foundation.IAsyncAction;
		connectAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string
	): Windows.Foundation.IAsyncAction;
		connectAsync(
		endpointPair: Windows.Networking.EndpointPair, protectionLevel: Windows.Networking.Sockets.SocketProtectionLevel
	): Windows.Foundation.IAsyncAction;
		connectAsync(
		remoteHostName: Windows.Networking.HostName, remoteServiceName: string, protectionLevel: Windows.Networking.Sockets.SocketProtectionLevel
	): Windows.Foundation.IAsyncAction;
		upgradeToSslAsync(
		protectionLevel: Windows.Networking.Sockets.SocketProtectionLevel, validationHostName: Windows.Networking.HostName
	): Windows.Foundation.IAsyncAction;
		dispose(): void;
		close(): void
	}

	declare export class StreamSocketListenerControl extends undefined$IStreamSocketListenerControl {
		qualityOfService: Windows.Networking.Sockets.SocketQualityOfService
	}

	declare export class StreamSocketListenerInformation extends undefined$IStreamSocketListenerInformation {
		localPort: string
	}

	declare export class StreamSocketListener extends undefined$IStreamSocketListener {
		control: Windows.Networking.Sockets.StreamSocketListenerControl;
		information: Windows.Networking.Sockets.StreamSocketListenerInformation;
		bindServiceNameAsync(localServiceName: string): Windows.Foundation.IAsyncAction;
		bindEndpointAsync(
		localHostName: Windows.Networking.HostName, localServiceName: string
	): Windows.Foundation.IAsyncAction;
		onconnectionreceived: any;
		dispose(): void;
		close(): void
	}

	declare export class StreamSocketListenerConnectionReceivedEventArgs extends undefined$IStreamSocketListenerConnectionReceivedEventArgs {
		socket: Windows.Networking.Sockets.StreamSocket
	}

	declare export class WebSocketClosedEventArgs extends undefined$IWebSocketClosedEventArgs {
		code: number;
		reason: string
	}

	declare export class MessageWebSocketControl extends undefined$IMessageWebSocketControl {
		maxMessageSize: number;
		messageType: Windows.Networking.Sockets.SocketMessageType;
		outboundBufferSizeInBytes: number;
		proxyCredential: Windows.Security.Credentials.PasswordCredential;
		serverCredential: Windows.Security.Credentials.PasswordCredential;
		supportedProtocols: Windows.Foundation.Collections.IVector<string>
	}

	declare export class MessageWebSocketInformation extends undefined$IWebSocketInformation {
		bandwidthStatistics: Windows.Networking.Sockets.BandwidthStatistics;
		localAddress: Windows.Networking.HostName;
		protocol: string
	}

	declare export class MessageWebSocket extends undefined$IMessageWebSocket {
		control: Windows.Networking.Sockets.MessageWebSocketControl;
		information: Windows.Networking.Sockets.MessageWebSocketInformation;
		outputStream: Windows.Storage.Streams.IOutputStream;
		onmessagereceived: any;
		connectAsync(uri: Windows.Foundation.Uri): Windows.Foundation.IAsyncAction;
		setRequestHeader(headerName: string, headerValue: string): void;
		onclosed: any;
		close(code: number, reason: string): void;
		dispose(): void;
		close(): void
	}

	declare export class MessageWebSocketMessageReceivedEventArgs extends undefined$IMessageWebSocketMessageReceivedEventArgs {
		messageType: Windows.Networking.Sockets.SocketMessageType;
		getDataReader(): Windows.Storage.Streams.DataReader;
		getDataStream(): Windows.Storage.Streams.IInputStream
	}

	declare export class StreamWebSocketControl extends undefined$IStreamWebSocketControl {
		noDelay: boolean;
		outboundBufferSizeInBytes: number;
		proxyCredential: Windows.Security.Credentials.PasswordCredential;
		serverCredential: Windows.Security.Credentials.PasswordCredential;
		supportedProtocols: Windows.Foundation.Collections.IVector<string>
	}

	declare export class StreamWebSocketInformation extends undefined$IWebSocketInformation {
		bandwidthStatistics: Windows.Networking.Sockets.BandwidthStatistics;
		localAddress: Windows.Networking.HostName;
		protocol: string
	}

	declare export class StreamWebSocket extends undefined$IStreamWebSocket {
		control: Windows.Networking.Sockets.StreamWebSocketControl;
		information: Windows.Networking.Sockets.StreamWebSocketInformation;
		inputStream: Windows.Storage.Streams.IInputStream;
		outputStream: Windows.Storage.Streams.IOutputStream;
		connectAsync(uri: Windows.Foundation.Uri): Windows.Foundation.IAsyncAction;
		setRequestHeader(headerName: string, headerValue: string): void;
		onclosed: any;
		close(code: number, reason: string): void;
		dispose(): void;
		close(): void
	}

	declare export class WebSocketKeepAlive extends undefined$IBackgroundTask {
		run(
		taskInstance: Windows.ApplicationModel.Background.IBackgroundTaskInstance
	): void
	}

	declare export class SocketError  {
		getStatus(hresult: number): Windows.Networking.Sockets.SocketErrorStatus
	}

	declare export class WebSocketError  {
		getStatus(hresult: number): Windows.Web.WebErrorStatus
	}

	
}

declare module 'Networking' {
		declare export interface IHostNameStatics {
		compare(value1: string, value2: string): number
	}

	declare export interface IHostName {
		canonicalName: string,
		displayName: string,
		iPInformation: Windows.Networking.Connectivity.IPInformation,
		rawName: string,
		type: Windows.Networking.HostNameType,
		isEqual(hostName: Windows.Networking.HostName): boolean
	}

	declare export interface IHostNameFactory {
		createHostName(hostName: string): Windows.Networking.HostName
	}

	declare export interface IEndpointPair {
		localHostName: Windows.Networking.HostName,
		localServiceName: string,
		remoteHostName: Windows.Networking.HostName,
		remoteServiceName: string
	}

	declare export interface IEndpointPairFactory {
		createEndpointPair(
		localHostName: Windows.Networking.HostName, localServiceName: string, remoteHostName: Windows.Networking.HostName, remoteServiceName: string
	): Windows.Networking.EndpointPair
	}

		declare export class HostName extends undefined$IHostName {
		constructor(hostName: string): this;
		canonicalName: string;
		displayName: string;
		iPInformation: Windows.Networking.Connectivity.IPInformation;
		rawName: string;
		type: Windows.Networking.HostNameType;
		isEqual(hostName: Windows.Networking.HostName): boolean;
		compare(value1: string, value2: string): number
	}

	declare export class EndpointPair extends undefined$IEndpointPair {
		constructor(localHostName: Windows.Networking.HostName, localServiceName: string, remoteHostName: Windows.Networking.HostName, remoteServiceName: string): this;
		localHostName: Windows.Networking.HostName;
		localServiceName: string;
		remoteHostName: Windows.Networking.HostName;
		remoteServiceName: string
	}

	
}

declare module 'Connectivity' {
		declare export interface IDataUsage {
		bytesReceived: number,
		bytesSent: number
	}

	declare export interface IDataPlanUsage {
		lastSyncTime: Date,
		megabytesUsed: number
	}

	declare export interface IDataPlanStatus {
		dataLimitInMegabytes: number,
		dataPlanUsage: Windows.Networking.Connectivity.DataPlanUsage,
		inboundBitsPerSecond: number,
		maxTransferSizeInMegabytes: number,
		nextBillingCycle: Date,
		outboundBitsPerSecond: number
	}

	declare export interface IConnectionCost {
		approachingDataLimit: boolean,
		networkCostType: Windows.Networking.Connectivity.NetworkCostType,
		overDataLimit: boolean,
		roaming: boolean
	}

	declare export interface INetworkSecuritySettings {
		networkAuthenticationType: Windows.Networking.Connectivity.NetworkAuthenticationType,
		networkEncryptionType: Windows.Networking.Connectivity.NetworkEncryptionType
	}

	declare export interface IConnectionProfile {
		networkAdapter: Windows.Networking.Connectivity.NetworkAdapter,
		networkSecuritySettings: Windows.Networking.Connectivity.NetworkSecuritySettings,
		profileName: string,
		getNetworkConnectivityLevel(): Windows.Networking.Connectivity.NetworkConnectivityLevel,
		getNetworkNames(): Windows.Foundation.Collections.IVectorView<string>,
		getConnectionCost(): Windows.Networking.Connectivity.ConnectionCost,
		getDataPlanStatus(): Windows.Networking.Connectivity.DataPlanStatus,
		getLocalUsage(StartTime: Date, EndTime: Date): Windows.Networking.Connectivity.DataUsage,
		getLocalUsage(
		StartTime: Date, EndTime: Date, States: Windows.Networking.Connectivity.RoamingStates
	): Windows.Networking.Connectivity.DataUsage,
		getSignalBars(): Windows.Foundation.IReference<number>
	}

	declare export interface ILanIdentifierData {
		type: number,
		value: Windows.Foundation.Collections.IVectorView<number>
	}

	declare export interface ILanIdentifier {
		infrastructureId: Windows.Networking.Connectivity.LanIdentifierData,
		networkAdapterId: string,
		portId: Windows.Networking.Connectivity.LanIdentifierData
	}

	declare export interface NetworkStatusChangedEventHandler {
		(sender: any): void
	}

	declare export interface INetworkInformationStatics {
		getConnectionProfiles(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Networking.Connectivity.ConnectionProfile>,
		getInternetConnectionProfile(): Windows.Networking.Connectivity.ConnectionProfile,
		getLanIdentifiers(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Networking.Connectivity.LanIdentifier>,
		getHostNames(): Windows.Foundation.Collections.IVectorView<Windows.Networking.HostName>,
		getProxyConfigurationAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Networking.Connectivity.ProxyConfiguration>,
		getSortedEndpointPairs(
		destinationList: Windows.Foundation.Collections.IIterable<Windows.Networking.EndpointPair>, sortOptions: Windows.Networking.HostNameSortOptions
	): Windows.Foundation.Collections.IVectorView<Windows.Networking.EndpointPair>,
		onnetworkstatuschanged: any
	}

	declare export interface INetworkItem {
		networkId: string,
		getNetworkTypes(): Windows.Networking.Connectivity.NetworkTypes
	}

	declare export interface INetworkAdapter {
		ianaInterfaceType: number,
		inboundMaxBitsPerSecond: number,
		networkAdapterId: string,
		networkItem: Windows.Networking.Connectivity.NetworkItem,
		outboundMaxBitsPerSecond: number,
		getConnectedProfileAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Networking.Connectivity.ConnectionProfile>
	}

	declare export interface IIPInformation {
		networkAdapter: Windows.Networking.Connectivity.NetworkAdapter,
		prefixLength: number
	}

	declare export interface IProxyConfiguration {
		canConnectDirectly: boolean,
		proxyUris: Windows.Foundation.Collections.IVectorView<Windows.Foundation.Uri>
	}

		declare export class IPInformation extends undefined$IIPInformation {
		networkAdapter: Windows.Networking.Connectivity.NetworkAdapter;
		prefixLength: number
	}

	declare export class DataPlanUsage extends undefined$IDataPlanUsage {
		lastSyncTime: Date;
		megabytesUsed: number
	}

	declare export class ConnectionCost extends undefined$IConnectionCost {
		approachingDataLimit: boolean;
		networkCostType: Windows.Networking.Connectivity.NetworkCostType;
		overDataLimit: boolean;
		roaming: boolean
	}

	declare export class DataPlanStatus extends undefined$IDataPlanStatus {
		dataLimitInMegabytes: number;
		dataPlanUsage: Windows.Networking.Connectivity.DataPlanUsage;
		inboundBitsPerSecond: number;
		maxTransferSizeInMegabytes: number;
		nextBillingCycle: Date;
		outboundBitsPerSecond: number
	}

	declare export class NetworkAdapter extends undefined$INetworkAdapter {
		ianaInterfaceType: number;
		inboundMaxBitsPerSecond: number;
		networkAdapterId: string;
		networkItem: Windows.Networking.Connectivity.NetworkItem;
		outboundMaxBitsPerSecond: number;
		getConnectedProfileAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Networking.Connectivity.ConnectionProfile>
	}

	declare export class DataUsage extends undefined$IDataUsage {
		bytesReceived: number;
		bytesSent: number
	}

	declare export class NetworkSecuritySettings extends undefined$INetworkSecuritySettings {
		networkAuthenticationType: Windows.Networking.Connectivity.NetworkAuthenticationType;
		networkEncryptionType: Windows.Networking.Connectivity.NetworkEncryptionType
	}

	declare export class LanIdentifierData extends undefined$ILanIdentifierData {
		type: number;
		value: Windows.Foundation.Collections.IVectorView<number>
	}

	declare export class ConnectionProfile extends undefined$IConnectionProfile {
		networkAdapter: Windows.Networking.Connectivity.NetworkAdapter;
		networkSecuritySettings: Windows.Networking.Connectivity.NetworkSecuritySettings;
		profileName: string;
		getNetworkConnectivityLevel(): Windows.Networking.Connectivity.NetworkConnectivityLevel;
		getNetworkNames(): Windows.Foundation.Collections.IVectorView<string>;
		getConnectionCost(): Windows.Networking.Connectivity.ConnectionCost;
		getDataPlanStatus(): Windows.Networking.Connectivity.DataPlanStatus;
		getLocalUsage(StartTime: Date, EndTime: Date): Windows.Networking.Connectivity.DataUsage;
		getLocalUsage(
		StartTime: Date, EndTime: Date, States: Windows.Networking.Connectivity.RoamingStates
	): Windows.Networking.Connectivity.DataUsage;
		getSignalBars(): Windows.Foundation.IReference<number>
	}

	declare export class LanIdentifier extends undefined$ILanIdentifier {
		infrastructureId: Windows.Networking.Connectivity.LanIdentifierData;
		networkAdapterId: string;
		portId: Windows.Networking.Connectivity.LanIdentifierData
	}

	declare export class ProxyConfiguration extends undefined$IProxyConfiguration {
		canConnectDirectly: boolean;
		proxyUris: Windows.Foundation.Collections.IVectorView<Windows.Foundation.Uri>
	}

	declare export class NetworkItem extends undefined$INetworkItem {
		networkId: string;
		getNetworkTypes(): Windows.Networking.Connectivity.NetworkTypes
	}

	declare export class NetworkInformation  {
		getConnectionProfiles(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Networking.Connectivity.ConnectionProfile>;
		getInternetConnectionProfile(): Windows.Networking.Connectivity.ConnectionProfile;
		getLanIdentifiers(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Networking.Connectivity.LanIdentifier>;
		getHostNames(): Windows.Foundation.Collections.IVectorView<Windows.Networking.HostName>;
		getProxyConfigurationAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Networking.Connectivity.ProxyConfiguration>;
		getSortedEndpointPairs(
		destinationList: Windows.Foundation.Collections.IIterable<Windows.Networking.EndpointPair>, sortOptions: Windows.Networking.HostNameSortOptions
	): Windows.Foundation.Collections.IVectorView<Windows.Networking.EndpointPair>;
		onnetworkstatuschanged: any
	}

	
}

declare module 'PushNotifications' {
		declare export interface IPushNotificationChannelManagerStatics {
		createPushNotificationChannelForApplicationAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Networking.PushNotifications.PushNotificationChannel>,
		createPushNotificationChannelForApplicationAsync(
		applicationId: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.PushNotifications.PushNotificationChannel>,
		createPushNotificationChannelForSecondaryTileAsync(
		tileId: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.PushNotifications.PushNotificationChannel>
	}

	declare export interface IPushNotificationChannel {
		expirationTime: Date,
		uri: string,
		close(): void,
		onpushnotificationreceived: any
	}

	declare export interface IPushNotificationReceivedEventArgs {
		badgeNotification: Windows.UI.Notifications.BadgeNotification,
		cancel: boolean,
		notificationType: Windows.Networking.PushNotifications.PushNotificationType,
		rawNotification: Windows.Networking.PushNotifications.RawNotification,
		tileNotification: Windows.UI.Notifications.TileNotification,
		toastNotification: Windows.UI.Notifications.ToastNotification
	}

	declare export interface IRawNotification {
		content: string
	}

		declare export class PushNotificationChannel extends undefined$IPushNotificationChannel {
		expirationTime: Date;
		uri: string;
		close(): void;
		onpushnotificationreceived: any
	}

	declare export class PushNotificationReceivedEventArgs extends undefined$IPushNotificationReceivedEventArgs {
		badgeNotification: Windows.UI.Notifications.BadgeNotification;
		cancel: boolean;
		notificationType: Windows.Networking.PushNotifications.PushNotificationType;
		rawNotification: Windows.Networking.PushNotifications.RawNotification;
		tileNotification: Windows.UI.Notifications.TileNotification;
		toastNotification: Windows.UI.Notifications.ToastNotification
	}

	declare export class RawNotification extends undefined$IRawNotification {
		content: string
	}

	declare export class PushNotificationChannelManager  {
		createPushNotificationChannelForApplicationAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Networking.PushNotifications.PushNotificationChannel>;
		createPushNotificationChannelForApplicationAsync(
		applicationId: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.PushNotifications.PushNotificationChannel>;
		createPushNotificationChannelForSecondaryTileAsync(
		tileId: string
	): Windows.Foundation.IAsyncOperation<Windows.Networking.PushNotifications.PushNotificationChannel>
	}

	
}

declare module 'OnlineId' {
		declare export interface IOnlineIdServiceTicketRequest {
		policy: string,
		service: string
	}

	declare export interface IOnlineIdServiceTicketRequestFactory {
		createOnlineIdServiceTicketRequest(
		service: string, policy: string
	): Windows.Security.Authentication.OnlineId.OnlineIdServiceTicketRequest,
		createOnlineIdServiceTicketRequest(
		service: string
	): Windows.Security.Authentication.OnlineId.OnlineIdServiceTicketRequest
	}

	declare export interface IOnlineIdServiceTicket {
		errorCode: number,
		request: Windows.Security.Authentication.OnlineId.OnlineIdServiceTicketRequest,
		value: string
	}

	declare export interface IUserIdentity {
		firstName: string,
		id: string,
		isBetaAccount: boolean,
		isConfirmedPC: boolean,
		lastName: string,
		safeCustomerId: string,
		signInName: string,
		tickets: Windows.Foundation.Collections.IVectorView<Windows.Security.Authentication.OnlineId.OnlineIdServiceTicket>
	}

	declare export interface IOnlineIdAuthenticator {
		applicationId: string,
		authenticatedSafeCustomerId: string,
		canSignOut: boolean,
		authenticateUserAsync(
		request: Windows.Security.Authentication.OnlineId.OnlineIdServiceTicketRequest
	): Windows.Security.Authentication.OnlineId.UserAuthenticationOperation,
		authenticateUserAsync(
		requests: Windows.Foundation.Collections.IIterable<Windows.Security.Authentication.OnlineId.OnlineIdServiceTicketRequest>, credentialPromptType: Windows.Security.Authentication.OnlineId.CredentialPromptType
	): Windows.Security.Authentication.OnlineId.UserAuthenticationOperation,
		signOutUserAsync(): Windows.Security.Authentication.OnlineId.SignOutUserOperation
	}

		declare export class OnlineIdServiceTicketRequest extends undefined$IOnlineIdServiceTicketRequest {
		constructor(service: string, policy: string): this;
		constructor(service: string): this;
		policy: string;
		service: string
	}

	declare export class OnlineIdServiceTicket extends undefined$IOnlineIdServiceTicket {
		errorCode: number;
		request: Windows.Security.Authentication.OnlineId.OnlineIdServiceTicketRequest;
		value: string
	}

	declare export class UserAuthenticationOperation extends undefined$IAsyncOperation<Windows.Security.Authentication.OnlineId.UserIdentity> {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<Windows.Security.Authentication.OnlineId.UserIdentity>;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): Windows.Security.Authentication.OnlineId.UserIdentity;
		cancel(): void;
		close(): void;
		then<U>(
		success?: (value: Windows.Security.Authentication.OnlineId.UserIdentity) => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (
		value: Windows.Security.Authentication.OnlineId.UserIdentity
	) => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: Windows.Security.Authentication.OnlineId.UserIdentity) => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (
		value: Windows.Security.Authentication.OnlineId.UserIdentity
	) => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: (value: Windows.Security.Authentication.OnlineId.UserIdentity) => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<Windows.Security.Authentication.OnlineId.UserIdentity>,
		getResults(): Windows.Security.Authentication.OnlineId.UserIdentity
	}
	}

	declare export class SignOutUserOperation extends undefined$IAsyncAction {
		completed: Windows.Foundation.AsyncActionCompletedHandler;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): void;
		cancel(): void;
		close(): void;
		then<U>(
		success?: () => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: () => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: () => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: () => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: () => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<any>,
		getResults(): any
	}
	}

	declare export class UserIdentity extends undefined$IUserIdentity {
		firstName: string;
		id: string;
		isBetaAccount: boolean;
		isConfirmedPC: boolean;
		lastName: string;
		safeCustomerId: string;
		signInName: string;
		tickets: Windows.Foundation.Collections.IVectorView<Windows.Security.Authentication.OnlineId.OnlineIdServiceTicket>
	}

	declare export class OnlineIdAuthenticator extends undefined$IOnlineIdAuthenticator {
		applicationId: string;
		authenticatedSafeCustomerId: string;
		canSignOut: boolean;
		authenticateUserAsync(
		request: Windows.Security.Authentication.OnlineId.OnlineIdServiceTicketRequest
	): Windows.Security.Authentication.OnlineId.UserAuthenticationOperation;
		authenticateUserAsync(
		requests: Windows.Foundation.Collections.IIterable<Windows.Security.Authentication.OnlineId.OnlineIdServiceTicketRequest>, credentialPromptType: Windows.Security.Authentication.OnlineId.CredentialPromptType
	): Windows.Security.Authentication.OnlineId.UserAuthenticationOperation;
		signOutUserAsync(): Windows.Security.Authentication.OnlineId.SignOutUserOperation
	}

	
}

declare module 'Web' {
		declare export interface IWebAuthenticationResult {
		responseData: string,
		responseErrorDetail: number,
		responseStatus: Windows.Security.Authentication.Web.WebAuthenticationStatus
	}

	declare export interface IWebAuthenticationBrokerStatics {
		authenticateAsync(
		options: Windows.Security.Authentication.Web.WebAuthenticationOptions, requestUri: Windows.Foundation.Uri, callbackUri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Security.Authentication.Web.WebAuthenticationResult>,
		authenticateAsync(
		options: Windows.Security.Authentication.Web.WebAuthenticationOptions, requestUri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Security.Authentication.Web.WebAuthenticationResult>,
		authenticateAndContinue(requestUri: Windows.Foundation.Uri): void,
		authenticateAndContinue(requestUri: Windows.Foundation.Uri, callbackUri: Windows.Foundation.Uri): void,
		authenticateAndContinue(
		requestUri: Windows.Foundation.Uri, callbackUri: Windows.Foundation.Uri, continuationData: Windows.Foundation.Collections.ValueSet, options: Windows.Security.Authentication.Web.WebAuthenticationOptions
	): void,
		getCurrentApplicationCallbackUri(): Windows.Foundation.Uri
	}

	declare export interface IWebErrorStatics {
		getStatus(hresult: number): Windows.Web.WebErrorStatus
	}

		declare export class WebAuthenticationResult extends undefined$IWebAuthenticationResult {
		responseData: string;
		responseErrorDetail: number;
		responseStatus: Windows.Security.Authentication.Web.WebAuthenticationStatus
	}

	declare export class WebAuthenticationBroker  {
		authenticateAsync(
		options: Windows.Security.Authentication.Web.WebAuthenticationOptions, requestUri: Windows.Foundation.Uri, callbackUri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Security.Authentication.Web.WebAuthenticationResult>;
		authenticateAsync(
		options: Windows.Security.Authentication.Web.WebAuthenticationOptions, requestUri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Security.Authentication.Web.WebAuthenticationResult>;
		authenticateAndContinue(requestUri: Windows.Foundation.Uri): void;
		authenticateAndContinue(requestUri: Windows.Foundation.Uri, callbackUri: Windows.Foundation.Uri): void;
		authenticateAndContinue(
		requestUri: Windows.Foundation.Uri, callbackUri: Windows.Foundation.Uri, continuationData: Windows.Foundation.Collections.ValueSet, options: Windows.Security.Authentication.Web.WebAuthenticationOptions
	): void;
		getCurrentApplicationCallbackUri(): Windows.Foundation.Uri
	}

	declare export class WebError  {
		getStatus(hresult: number): Windows.Web.WebErrorStatus
	}

	
}

declare module 'UI' {
		declare export interface ICredentialPickerOptions {
		alwaysDisplayDialog: boolean,
		authenticationProtocol: Windows.Security.Credentials.UI.AuthenticationProtocol,
		callerSavesCredential: boolean,
		caption: string,
		credentialSaveOption: Windows.Security.Credentials.UI.CredentialSaveOption,
		customAuthenticationProtocol: string,
		errorCode: number,
		message: string,
		previousCredential: Windows.Storage.Streams.IBuffer,
		targetName: string
	}

	declare export interface ICredentialPickerStatics {
		pickAsync(
		options: Windows.Security.Credentials.UI.CredentialPickerOptions
	): Windows.Foundation.IAsyncOperation<Windows.Security.Credentials.UI.CredentialPickerResults>,
		pickAsync(
		targetName: string, message: string
	): Windows.Foundation.IAsyncOperation<Windows.Security.Credentials.UI.CredentialPickerResults>,
		pickAsync(
		targetName: string, message: string, caption: string
	): Windows.Foundation.IAsyncOperation<Windows.Security.Credentials.UI.CredentialPickerResults>
	}

	declare export interface ICredentialPickerResults {
		credential: Windows.Storage.Streams.IBuffer,
		credentialDomainName: string,
		credentialPassword: string,
		credentialSaveOption: Windows.Security.Credentials.UI.CredentialSaveOption,
		credentialSaved: boolean,
		credentialUserName: string,
		errorCode: number
	}

	declare export interface IColors {
		
	}

	declare export interface IColorsStatics {
		aliceBlue: Windows.UI.Color,
		antiqueWhite: Windows.UI.Color,
		aqua: Windows.UI.Color,
		aquamarine: Windows.UI.Color,
		azure: Windows.UI.Color,
		beige: Windows.UI.Color,
		bisque: Windows.UI.Color,
		black: Windows.UI.Color,
		blanchedAlmond: Windows.UI.Color,
		blue: Windows.UI.Color,
		blueViolet: Windows.UI.Color,
		brown: Windows.UI.Color,
		burlyWood: Windows.UI.Color,
		cadetBlue: Windows.UI.Color,
		chartreuse: Windows.UI.Color,
		chocolate: Windows.UI.Color,
		coral: Windows.UI.Color,
		cornflowerBlue: Windows.UI.Color,
		cornsilk: Windows.UI.Color,
		crimson: Windows.UI.Color,
		cyan: Windows.UI.Color,
		darkBlue: Windows.UI.Color,
		darkCyan: Windows.UI.Color,
		darkGoldenrod: Windows.UI.Color,
		darkGray: Windows.UI.Color,
		darkGreen: Windows.UI.Color,
		darkKhaki: Windows.UI.Color,
		darkMagenta: Windows.UI.Color,
		darkOliveGreen: Windows.UI.Color,
		darkOrange: Windows.UI.Color,
		darkOrchid: Windows.UI.Color,
		darkRed: Windows.UI.Color,
		darkSalmon: Windows.UI.Color,
		darkSeaGreen: Windows.UI.Color,
		darkSlateBlue: Windows.UI.Color,
		darkSlateGray: Windows.UI.Color,
		darkTurquoise: Windows.UI.Color,
		darkViolet: Windows.UI.Color,
		deepPink: Windows.UI.Color,
		deepSkyBlue: Windows.UI.Color,
		dimGray: Windows.UI.Color,
		dodgerBlue: Windows.UI.Color,
		firebrick: Windows.UI.Color,
		floralWhite: Windows.UI.Color,
		forestGreen: Windows.UI.Color,
		fuchsia: Windows.UI.Color,
		gainsboro: Windows.UI.Color,
		ghostWhite: Windows.UI.Color,
		gold: Windows.UI.Color,
		goldenrod: Windows.UI.Color,
		gray: Windows.UI.Color,
		green: Windows.UI.Color,
		greenYellow: Windows.UI.Color,
		honeydew: Windows.UI.Color,
		hotPink: Windows.UI.Color,
		indianRed: Windows.UI.Color,
		indigo: Windows.UI.Color,
		ivory: Windows.UI.Color,
		khaki: Windows.UI.Color,
		lavender: Windows.UI.Color,
		lavenderBlush: Windows.UI.Color,
		lawnGreen: Windows.UI.Color,
		lemonChiffon: Windows.UI.Color,
		lightBlue: Windows.UI.Color,
		lightCoral: Windows.UI.Color,
		lightCyan: Windows.UI.Color,
		lightGoldenrodYellow: Windows.UI.Color,
		lightGray: Windows.UI.Color,
		lightGreen: Windows.UI.Color,
		lightPink: Windows.UI.Color,
		lightSalmon: Windows.UI.Color,
		lightSeaGreen: Windows.UI.Color,
		lightSkyBlue: Windows.UI.Color,
		lightSlateGray: Windows.UI.Color,
		lightSteelBlue: Windows.UI.Color,
		lightYellow: Windows.UI.Color,
		lime: Windows.UI.Color,
		limeGreen: Windows.UI.Color,
		linen: Windows.UI.Color,
		magenta: Windows.UI.Color,
		maroon: Windows.UI.Color,
		mediumAquamarine: Windows.UI.Color,
		mediumBlue: Windows.UI.Color,
		mediumOrchid: Windows.UI.Color,
		mediumPurple: Windows.UI.Color,
		mediumSeaGreen: Windows.UI.Color,
		mediumSlateBlue: Windows.UI.Color,
		mediumSpringGreen: Windows.UI.Color,
		mediumTurquoise: Windows.UI.Color,
		mediumVioletRed: Windows.UI.Color,
		midnightBlue: Windows.UI.Color,
		mintCream: Windows.UI.Color,
		mistyRose: Windows.UI.Color,
		moccasin: Windows.UI.Color,
		navajoWhite: Windows.UI.Color,
		navy: Windows.UI.Color,
		oldLace: Windows.UI.Color,
		olive: Windows.UI.Color,
		oliveDrab: Windows.UI.Color,
		orange: Windows.UI.Color,
		orangeRed: Windows.UI.Color,
		orchid: Windows.UI.Color,
		paleGoldenrod: Windows.UI.Color,
		paleGreen: Windows.UI.Color,
		paleTurquoise: Windows.UI.Color,
		paleVioletRed: Windows.UI.Color,
		papayaWhip: Windows.UI.Color,
		peachPuff: Windows.UI.Color,
		peru: Windows.UI.Color,
		pink: Windows.UI.Color,
		plum: Windows.UI.Color,
		powderBlue: Windows.UI.Color,
		purple: Windows.UI.Color,
		red: Windows.UI.Color,
		rosyBrown: Windows.UI.Color,
		royalBlue: Windows.UI.Color,
		saddleBrown: Windows.UI.Color,
		salmon: Windows.UI.Color,
		sandyBrown: Windows.UI.Color,
		seaGreen: Windows.UI.Color,
		seaShell: Windows.UI.Color,
		sienna: Windows.UI.Color,
		silver: Windows.UI.Color,
		skyBlue: Windows.UI.Color,
		slateBlue: Windows.UI.Color,
		slateGray: Windows.UI.Color,
		snow: Windows.UI.Color,
		springGreen: Windows.UI.Color,
		steelBlue: Windows.UI.Color,
		tan: Windows.UI.Color,
		teal: Windows.UI.Color,
		thistle: Windows.UI.Color,
		tomato: Windows.UI.Color,
		transparent: Windows.UI.Color,
		turquoise: Windows.UI.Color,
		violet: Windows.UI.Color,
		wheat: Windows.UI.Color,
		white: Windows.UI.Color,
		whiteSmoke: Windows.UI.Color,
		yellow: Windows.UI.Color,
		yellowGreen: Windows.UI.Color
	}

	declare export interface Color {
		a: number,
		r: number,
		g: number,
		b: number
	}

	declare export interface IColorHelper {
		
	}

	declare export interface IColorHelperStatics {
		fromArgb(a: number, r: number, g: number, b: number): Windows.UI.Color
	}

		declare export class CredentialPickerOptions extends undefined$ICredentialPickerOptions {
		alwaysDisplayDialog: boolean;
		authenticationProtocol: Windows.Security.Credentials.UI.AuthenticationProtocol;
		callerSavesCredential: boolean;
		caption: string;
		credentialSaveOption: Windows.Security.Credentials.UI.CredentialSaveOption;
		customAuthenticationProtocol: string;
		errorCode: number;
		message: string;
		previousCredential: Windows.Storage.Streams.IBuffer;
		targetName: string
	}

	declare export class CredentialPickerResults extends undefined$ICredentialPickerResults {
		credential: Windows.Storage.Streams.IBuffer;
		credentialDomainName: string;
		credentialPassword: string;
		credentialSaveOption: Windows.Security.Credentials.UI.CredentialSaveOption;
		credentialSaved: boolean;
		credentialUserName: string;
		errorCode: number
	}

	declare export class CredentialPicker  {
		pickAsync(
		options: Windows.Security.Credentials.UI.CredentialPickerOptions
	): Windows.Foundation.IAsyncOperation<Windows.Security.Credentials.UI.CredentialPickerResults>;
		pickAsync(
		targetName: string, message: string
	): Windows.Foundation.IAsyncOperation<Windows.Security.Credentials.UI.CredentialPickerResults>;
		pickAsync(
		targetName: string, message: string, caption: string
	): Windows.Foundation.IAsyncOperation<Windows.Security.Credentials.UI.CredentialPickerResults>
	}

	declare export class Colors extends undefined$IColors {
		aliceBlue: Windows.UI.Color;
		antiqueWhite: Windows.UI.Color;
		aqua: Windows.UI.Color;
		aquamarine: Windows.UI.Color;
		azure: Windows.UI.Color;
		beige: Windows.UI.Color;
		bisque: Windows.UI.Color;
		black: Windows.UI.Color;
		blanchedAlmond: Windows.UI.Color;
		blue: Windows.UI.Color;
		blueViolet: Windows.UI.Color;
		brown: Windows.UI.Color;
		burlyWood: Windows.UI.Color;
		cadetBlue: Windows.UI.Color;
		chartreuse: Windows.UI.Color;
		chocolate: Windows.UI.Color;
		coral: Windows.UI.Color;
		cornflowerBlue: Windows.UI.Color;
		cornsilk: Windows.UI.Color;
		crimson: Windows.UI.Color;
		cyan: Windows.UI.Color;
		darkBlue: Windows.UI.Color;
		darkCyan: Windows.UI.Color;
		darkGoldenrod: Windows.UI.Color;
		darkGray: Windows.UI.Color;
		darkGreen: Windows.UI.Color;
		darkKhaki: Windows.UI.Color;
		darkMagenta: Windows.UI.Color;
		darkOliveGreen: Windows.UI.Color;
		darkOrange: Windows.UI.Color;
		darkOrchid: Windows.UI.Color;
		darkRed: Windows.UI.Color;
		darkSalmon: Windows.UI.Color;
		darkSeaGreen: Windows.UI.Color;
		darkSlateBlue: Windows.UI.Color;
		darkSlateGray: Windows.UI.Color;
		darkTurquoise: Windows.UI.Color;
		darkViolet: Windows.UI.Color;
		deepPink: Windows.UI.Color;
		deepSkyBlue: Windows.UI.Color;
		dimGray: Windows.UI.Color;
		dodgerBlue: Windows.UI.Color;
		firebrick: Windows.UI.Color;
		floralWhite: Windows.UI.Color;
		forestGreen: Windows.UI.Color;
		fuchsia: Windows.UI.Color;
		gainsboro: Windows.UI.Color;
		ghostWhite: Windows.UI.Color;
		gold: Windows.UI.Color;
		goldenrod: Windows.UI.Color;
		gray: Windows.UI.Color;
		green: Windows.UI.Color;
		greenYellow: Windows.UI.Color;
		honeydew: Windows.UI.Color;
		hotPink: Windows.UI.Color;
		indianRed: Windows.UI.Color;
		indigo: Windows.UI.Color;
		ivory: Windows.UI.Color;
		khaki: Windows.UI.Color;
		lavender: Windows.UI.Color;
		lavenderBlush: Windows.UI.Color;
		lawnGreen: Windows.UI.Color;
		lemonChiffon: Windows.UI.Color;
		lightBlue: Windows.UI.Color;
		lightCoral: Windows.UI.Color;
		lightCyan: Windows.UI.Color;
		lightGoldenrodYellow: Windows.UI.Color;
		lightGray: Windows.UI.Color;
		lightGreen: Windows.UI.Color;
		lightPink: Windows.UI.Color;
		lightSalmon: Windows.UI.Color;
		lightSeaGreen: Windows.UI.Color;
		lightSkyBlue: Windows.UI.Color;
		lightSlateGray: Windows.UI.Color;
		lightSteelBlue: Windows.UI.Color;
		lightYellow: Windows.UI.Color;
		lime: Windows.UI.Color;
		limeGreen: Windows.UI.Color;
		linen: Windows.UI.Color;
		magenta: Windows.UI.Color;
		maroon: Windows.UI.Color;
		mediumAquamarine: Windows.UI.Color;
		mediumBlue: Windows.UI.Color;
		mediumOrchid: Windows.UI.Color;
		mediumPurple: Windows.UI.Color;
		mediumSeaGreen: Windows.UI.Color;
		mediumSlateBlue: Windows.UI.Color;
		mediumSpringGreen: Windows.UI.Color;
		mediumTurquoise: Windows.UI.Color;
		mediumVioletRed: Windows.UI.Color;
		midnightBlue: Windows.UI.Color;
		mintCream: Windows.UI.Color;
		mistyRose: Windows.UI.Color;
		moccasin: Windows.UI.Color;
		navajoWhite: Windows.UI.Color;
		navy: Windows.UI.Color;
		oldLace: Windows.UI.Color;
		olive: Windows.UI.Color;
		oliveDrab: Windows.UI.Color;
		orange: Windows.UI.Color;
		orangeRed: Windows.UI.Color;
		orchid: Windows.UI.Color;
		paleGoldenrod: Windows.UI.Color;
		paleGreen: Windows.UI.Color;
		paleTurquoise: Windows.UI.Color;
		paleVioletRed: Windows.UI.Color;
		papayaWhip: Windows.UI.Color;
		peachPuff: Windows.UI.Color;
		peru: Windows.UI.Color;
		pink: Windows.UI.Color;
		plum: Windows.UI.Color;
		powderBlue: Windows.UI.Color;
		purple: Windows.UI.Color;
		red: Windows.UI.Color;
		rosyBrown: Windows.UI.Color;
		royalBlue: Windows.UI.Color;
		saddleBrown: Windows.UI.Color;
		salmon: Windows.UI.Color;
		sandyBrown: Windows.UI.Color;
		seaGreen: Windows.UI.Color;
		seaShell: Windows.UI.Color;
		sienna: Windows.UI.Color;
		silver: Windows.UI.Color;
		skyBlue: Windows.UI.Color;
		slateBlue: Windows.UI.Color;
		slateGray: Windows.UI.Color;
		snow: Windows.UI.Color;
		springGreen: Windows.UI.Color;
		steelBlue: Windows.UI.Color;
		tan: Windows.UI.Color;
		teal: Windows.UI.Color;
		thistle: Windows.UI.Color;
		tomato: Windows.UI.Color;
		transparent: Windows.UI.Color;
		turquoise: Windows.UI.Color;
		violet: Windows.UI.Color;
		wheat: Windows.UI.Color;
		white: Windows.UI.Color;
		whiteSmoke: Windows.UI.Color;
		yellow: Windows.UI.Color;
		yellowGreen: Windows.UI.Color
	}

	declare export class ColorHelper extends undefined$IColorHelper {
		fromArgb(a: number, r: number, g: number, b: number): Windows.UI.Color
	}

	
}

declare module 'Credentials' {
		declare export interface IPasswordCredential {
		password: string,
		properties: Windows.Foundation.Collections.IPropertySet,
		resource: string,
		userName: string,
		retrievePassword(): void
	}

	declare export interface ICredentialFactory {
		createPasswordCredential(
		resource: string, userName: string, password: string
	): Windows.Security.Credentials.PasswordCredential
	}

	declare export interface IPasswordVault {
		add(credential: Windows.Security.Credentials.PasswordCredential): void,
		remove(credential: Windows.Security.Credentials.PasswordCredential): void,
		retrieve(
		resource: string, userName: string
	): Windows.Security.Credentials.PasswordCredential,
		findAllByResource(
		resource: string
	): Windows.Foundation.Collections.IVectorView<Windows.Security.Credentials.PasswordCredential>,
		findAllByUserName(
		userName: string
	): Windows.Foundation.Collections.IVectorView<Windows.Security.Credentials.PasswordCredential>,
		retrieveAll(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Security.Credentials.PasswordCredential>
	}

		declare export class PasswordCredential extends undefined$IPasswordCredential {
		constructor(resource: string, userName: string, password: string): this;
		constructor(): this;
		password: string;
		properties: Windows.Foundation.Collections.IPropertySet;
		resource: string;
		userName: string;
		retrievePassword(): void
	}

	declare export class PasswordVault extends undefined$IPasswordVault {
		add(credential: Windows.Security.Credentials.PasswordCredential): void;
		remove(credential: Windows.Security.Credentials.PasswordCredential): void;
		retrieve(
		resource: string, userName: string
	): Windows.Security.Credentials.PasswordCredential;
		findAllByResource(
		resource: string
	): Windows.Foundation.Collections.IVectorView<Windows.Security.Credentials.PasswordCredential>;
		findAllByUserName(
		userName: string
	): Windows.Foundation.Collections.IVectorView<Windows.Security.Credentials.PasswordCredential>;
		retrieveAll(
		
	): Windows.Foundation.Collections.IVectorView<Windows.Security.Credentials.PasswordCredential>
	}

	declare export class PasswordCredentialPropertyStore extends undefined$IPropertySet {
		size: number;
		onmapchanged: any;
		lookup(key: string): any;
		hasKey(key: string): boolean;
		getView(): Windows.Foundation.Collections.IMapView<string, any>;
		insert(key: string, value: any): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	}

	
}

declare module 'Certificates' {
		declare export interface ICertificateRequestProperties {
		exportable: Windows.Security.Cryptography.Certificates.ExportOption,
		friendlyName: string,
		hashAlgorithmName: string,
		keyAlgorithmName: string,
		keyProtectionLevel: Windows.Security.Cryptography.Certificates.KeyProtectionLevel,
		keySize: number,
		keyStorageProviderName: string,
		keyUsages: Windows.Security.Cryptography.Certificates.EnrollKeyUsages,
		subject: string
	}

	declare export interface ICertificateEnrollmentManagerStatics {
		createRequestAsync(
		request: Windows.Security.Cryptography.Certificates.CertificateRequestProperties
	): Windows.Foundation.IAsyncOperation<string>,
		installCertificateAsync(
		certificate: string, installOption: Windows.Security.Cryptography.Certificates.InstallOptions
	): Windows.Foundation.IAsyncAction,
		importPfxDataAsync(
		pfxData: string, password: string, exportable: Windows.Security.Cryptography.Certificates.ExportOption, keyProtectionLevel: Windows.Security.Cryptography.Certificates.KeyProtectionLevel, installOption: Windows.Security.Cryptography.Certificates.InstallOptions, friendlyName: string
	): Windows.Foundation.IAsyncAction
	}

	declare export interface IKeyAlgorithmNamesStatics {
		dsa: string,
		ecdh256: string,
		ecdh384: string,
		ecdh521: string,
		ecdsa256: string,
		ecdsa384: string,
		ecdsa521: string,
		rsa: string
	}

	declare export interface IKeyStorageProviderNamesStatics {
		platformKeyStorageProvider: string,
		smartcardKeyStorageProvider: string,
		softwareKeyStorageProvider: string
	}

		declare export class CertificateRequestProperties extends undefined$ICertificateRequestProperties {
		exportable: Windows.Security.Cryptography.Certificates.ExportOption;
		friendlyName: string;
		hashAlgorithmName: string;
		keyAlgorithmName: string;
		keyProtectionLevel: Windows.Security.Cryptography.Certificates.KeyProtectionLevel;
		keySize: number;
		keyStorageProviderName: string;
		keyUsages: Windows.Security.Cryptography.Certificates.EnrollKeyUsages;
		subject: string
	}

	declare export class CertificateEnrollmentManager  {
		createRequestAsync(
		request: Windows.Security.Cryptography.Certificates.CertificateRequestProperties
	): Windows.Foundation.IAsyncOperation<string>;
		installCertificateAsync(
		certificate: string, installOption: Windows.Security.Cryptography.Certificates.InstallOptions
	): Windows.Foundation.IAsyncAction;
		importPfxDataAsync(
		pfxData: string, password: string, exportable: Windows.Security.Cryptography.Certificates.ExportOption, keyProtectionLevel: Windows.Security.Cryptography.Certificates.KeyProtectionLevel, installOption: Windows.Security.Cryptography.Certificates.InstallOptions, friendlyName: string
	): Windows.Foundation.IAsyncAction
	}

	declare export class KeyAlgorithmNames  {
		dsa: string;
		ecdh256: string;
		ecdh384: string;
		ecdh521: string;
		ecdsa256: string;
		ecdsa384: string;
		ecdsa521: string;
		rsa: string
	}

	declare export class KeyStorageProviderNames  {
		platformKeyStorageProvider: string;
		smartcardKeyStorageProvider: string;
		softwareKeyStorageProvider: string
	}

	
}

declare module 'DataProtection' {
		declare export interface IDataProtectionProvider {
		protectAsync(
		data: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IBuffer>,
		unprotectAsync(
		data: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IBuffer>,
		protectStreamAsync(
		src: Windows.Storage.Streams.IInputStream, dest: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncAction,
		unprotectStreamAsync(
		src: Windows.Storage.Streams.IInputStream, dest: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncAction
	}

	declare export interface IDataProtectionProviderFactory {
		createOverloadExplicit(
		protectionDescriptor: string
	): Windows.Security.Cryptography.DataProtection.DataProtectionProvider
	}

		declare export class DataProtectionProvider extends undefined$IDataProtectionProvider {
		constructor(protectionDescriptor: string): this;
		constructor(): this;
		protectAsync(
		data: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IBuffer>;
		unprotectAsync(
		data: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IBuffer>;
		protectStreamAsync(
		src: Windows.Storage.Streams.IInputStream, dest: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncAction;
		unprotectStreamAsync(
		src: Windows.Storage.Streams.IInputStream, dest: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncAction
	}

	
}

declare module 'Cryptography' {
		declare export interface ICryptographicBufferStatics {
		compare(
		object1: Windows.Storage.Streams.IBuffer, object2: Windows.Storage.Streams.IBuffer
	): boolean,
		generateRandom(length: number): Windows.Storage.Streams.IBuffer,
		generateRandomNumber(): number,
		createFromByteArray(value: Uint8Array): Windows.Storage.Streams.IBuffer,
		copyToByteArray(buffer: Windows.Storage.Streams.IBuffer): Uint8Array,
		decodeFromHexString(value: string): Windows.Storage.Streams.IBuffer,
		encodeToHexString(buffer: Windows.Storage.Streams.IBuffer): string,
		decodeFromBase64String(value: string): Windows.Storage.Streams.IBuffer,
		encodeToBase64String(buffer: Windows.Storage.Streams.IBuffer): string,
		convertStringToBinary(
		value: string, encoding: Windows.Security.Cryptography.BinaryStringEncoding
	): Windows.Storage.Streams.IBuffer,
		convertBinaryToString(
		encoding: Windows.Security.Cryptography.BinaryStringEncoding, buffer: Windows.Storage.Streams.IBuffer
	): string
	}

		declare export class CryptographicBuffer  {
		compare(
		object1: Windows.Storage.Streams.IBuffer, object2: Windows.Storage.Streams.IBuffer
	): boolean;
		generateRandom(length: number): Windows.Storage.Streams.IBuffer;
		generateRandomNumber(): number;
		createFromByteArray(value: Uint8Array): Windows.Storage.Streams.IBuffer;
		copyToByteArray(buffer: Windows.Storage.Streams.IBuffer): Uint8Array;
		decodeFromHexString(value: string): Windows.Storage.Streams.IBuffer;
		encodeToHexString(buffer: Windows.Storage.Streams.IBuffer): string;
		decodeFromBase64String(value: string): Windows.Storage.Streams.IBuffer;
		encodeToBase64String(buffer: Windows.Storage.Streams.IBuffer): string;
		convertStringToBinary(
		value: string, encoding: Windows.Security.Cryptography.BinaryStringEncoding
	): Windows.Storage.Streams.IBuffer;
		convertBinaryToString(
		encoding: Windows.Security.Cryptography.BinaryStringEncoding, buffer: Windows.Storage.Streams.IBuffer
	): string
	}

	
}

declare module 'ExchangeActiveSyncProvisioning' {
		declare export interface IEasClientDeviceInformation {
		friendlyName: string,
		id: string,
		operatingSystem: string,
		systemManufacturer: string,
		systemProductName: string,
		systemSku: string
	}

	declare export interface IEasClientSecurityPolicy {
		disallowConvenienceLogon: boolean,
		maxInactivityTimeLock: number,
		maxPasswordFailedAttempts: number,
		minPasswordComplexCharacters: number,
		minPasswordLength: number,
		passwordExpiration: number,
		passwordHistory: number,
		requireEncryption: boolean,
		checkCompliance(): Windows.Security.ExchangeActiveSyncProvisioning.EasComplianceResults,
		applyAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Security.ExchangeActiveSyncProvisioning.EasComplianceResults>
	}

	declare export interface IEasComplianceResults {
		compliant: boolean,
		disallowConvenienceLogonResult: Windows.Security.ExchangeActiveSyncProvisioning.EasDisallowConvenienceLogonResult,
		maxInactivityTimeLockResult: Windows.Security.ExchangeActiveSyncProvisioning.EasMaxInactivityTimeLockResult,
		maxPasswordFailedAttemptsResult: Windows.Security.ExchangeActiveSyncProvisioning.EasMaxPasswordFailedAttemptsResult,
		minPasswordComplexCharactersResult: Windows.Security.ExchangeActiveSyncProvisioning.EasMinPasswordComplexCharactersResult,
		minPasswordLengthResult: Windows.Security.ExchangeActiveSyncProvisioning.EasMinPasswordLengthResult,
		passwordExpirationResult: Windows.Security.ExchangeActiveSyncProvisioning.EasPasswordExpirationResult,
		passwordHistoryResult: Windows.Security.ExchangeActiveSyncProvisioning.EasPasswordHistoryResult,
		requireEncryptionResult: Windows.Security.ExchangeActiveSyncProvisioning.EasRequireEncryptionResult
	}

		declare export class EasComplianceResults extends undefined$IEasComplianceResults {
		compliant: boolean;
		disallowConvenienceLogonResult: Windows.Security.ExchangeActiveSyncProvisioning.EasDisallowConvenienceLogonResult;
		maxInactivityTimeLockResult: Windows.Security.ExchangeActiveSyncProvisioning.EasMaxInactivityTimeLockResult;
		maxPasswordFailedAttemptsResult: Windows.Security.ExchangeActiveSyncProvisioning.EasMaxPasswordFailedAttemptsResult;
		minPasswordComplexCharactersResult: Windows.Security.ExchangeActiveSyncProvisioning.EasMinPasswordComplexCharactersResult;
		minPasswordLengthResult: Windows.Security.ExchangeActiveSyncProvisioning.EasMinPasswordLengthResult;
		passwordExpirationResult: Windows.Security.ExchangeActiveSyncProvisioning.EasPasswordExpirationResult;
		passwordHistoryResult: Windows.Security.ExchangeActiveSyncProvisioning.EasPasswordHistoryResult;
		requireEncryptionResult: Windows.Security.ExchangeActiveSyncProvisioning.EasRequireEncryptionResult
	}

	declare export class EasClientSecurityPolicy extends undefined$IEasClientSecurityPolicy {
		disallowConvenienceLogon: boolean;
		maxInactivityTimeLock: number;
		maxPasswordFailedAttempts: number;
		minPasswordComplexCharacters: number;
		minPasswordLength: number;
		passwordExpiration: number;
		passwordHistory: number;
		requireEncryption: boolean;
		checkCompliance(): Windows.Security.ExchangeActiveSyncProvisioning.EasComplianceResults;
		applyAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Security.ExchangeActiveSyncProvisioning.EasComplianceResults>
	}

	declare export class EasClientDeviceInformation extends undefined$IEasClientDeviceInformation {
		friendlyName: string;
		id: string;
		operatingSystem: string;
		systemManufacturer: string;
		systemProductName: string;
		systemSku: string
	}

	
}

declare module 'Streams' {
		declare export interface IDataReader {
		byteOrder: Windows.Storage.Streams.ByteOrder,
		inputStreamOptions: Windows.Storage.Streams.InputStreamOptions,
		unconsumedBufferLength: number,
		unicodeEncoding: Windows.Storage.Streams.UnicodeEncoding,
		readByte(): number,
		readBytes(value: number[]): void,
		readBytes(value: Uint8Array): void,
		readBuffer(length: number): Windows.Storage.Streams.IBuffer,
		readBoolean(): boolean,
		readGuid(): string,
		readInt16(): number,
		readInt32(): number,
		readInt64(): number,
		readUInt16(): number,
		readUInt32(): number,
		readUInt64(): number,
		readSingle(): number,
		readDouble(): number,
		readString(codeUnitCount: number): string,
		readDateTime(): Date,
		readTimeSpan(): number,
		loadAsync(count: number): Windows.Storage.Streams.DataReaderLoadOperation,
		detachBuffer(): Windows.Storage.Streams.IBuffer,
		detachStream(): Windows.Storage.Streams.IInputStream
	}

	declare export interface IDataReaderFactory {
		createDataReader(
		inputStream: Windows.Storage.Streams.IInputStream
	): Windows.Storage.Streams.DataReader
	}

	declare export interface IDataReaderStatics {
		fromBuffer(buffer: Windows.Storage.Streams.IBuffer): Windows.Storage.Streams.DataReader
	}

	declare export interface IDataWriter {
		byteOrder: Windows.Storage.Streams.ByteOrder,
		unicodeEncoding: Windows.Storage.Streams.UnicodeEncoding,
		unstoredBufferLength: number,
		writeByte(value: number): void,
		writeBytes(value: number[]): void,
		writeBytes(value: Uint8Array): void,
		writeBuffer(buffer: Windows.Storage.Streams.IBuffer): void,
		writeBuffer(buffer: Windows.Storage.Streams.IBuffer, start: number, count: number): void,
		writeBoolean(value: boolean): void,
		writeGuid(value: string): void,
		writeInt16(value: number): void,
		writeInt32(value: number): void,
		writeInt64(value: number): void,
		writeUInt16(value: number): void,
		writeUInt32(value: number): void,
		writeUInt64(value: number): void,
		writeSingle(value: number): void,
		writeDouble(value: number): void,
		writeDateTime(value: Date): void,
		writeTimeSpan(value: number): void,
		writeString(value: string): number,
		measureString(value: string): number,
		storeAsync(): Windows.Storage.Streams.DataWriterStoreOperation,
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>,
		detachBuffer(): Windows.Storage.Streams.IBuffer,
		detachStream(): Windows.Storage.Streams.IOutputStream
	}

	declare export interface IDataWriterFactory {
		createDataWriter(
		outputStream: Windows.Storage.Streams.IOutputStream
	): Windows.Storage.Streams.DataWriter
	}

	declare export interface IRandomAccessStreamStatics {
		copyAsync(
		source: Windows.Storage.Streams.IInputStream, destination: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>,
		copyAsync(
		source: Windows.Storage.Streams.IInputStream, destination: Windows.Storage.Streams.IOutputStream, bytesToCopy: number
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>,
		copyAndCloseAsync(
		source: Windows.Storage.Streams.IInputStream, destination: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>
	}

	declare export interface IBufferFactory {
		create(capacity: number): Windows.Storage.Streams.Buffer
	}

	declare export interface IBuffer {
		capacity: number,
		length: number
	}

	declare export interface IContentTypeProvider {
		contentType: string
	}

	declare export interface IRandomAccessStreamReference {
		openReadAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStreamWithContentType>
	}

	declare export interface IInputStreamReference {
		openSequentialReadAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IInputStream>
	}

	declare export interface IRandomAccessStreamReferenceStatics {
		createFromFile(
		file: Windows.Storage.IStorageFile
	): Windows.Storage.Streams.RandomAccessStreamReference,
		createFromUri(
		uri: Windows.Foundation.Uri
	): Windows.Storage.Streams.RandomAccessStreamReference,
		createFromStream(
		stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Storage.Streams.RandomAccessStreamReference
	}

	declare export interface IInputStream {
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>
	}

	declare export interface IOutputStream {
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>,
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>
	}

	declare export interface IRandomAccessStream {
		canRead: boolean,
		canWrite: boolean,
		position: number,
		size: number,
		getInputStreamAt(position: number): Windows.Storage.Streams.IInputStream,
		getOutputStreamAt(position: number): Windows.Storage.Streams.IOutputStream,
		seek(position: number): void,
		cloneStream(): Windows.Storage.Streams.IRandomAccessStream
	}

	declare export interface IRandomAccessStreamWithContentType {
		
	}

		declare export class DataReaderLoadOperation extends undefined$IAsyncOperation<number> {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<number>;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): number;
		cancel(): void;
		close(): void;
		then<U>(
		success?: (value: number) => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: number) => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: number) => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: number) => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: (value: number) => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<number>,
		getResults(): number
	}
	}

	declare export class DataReader extends undefined$IDataReader {
		constructor(inputStream: Windows.Storage.Streams.IInputStream): this;
		byteOrder: Windows.Storage.Streams.ByteOrder;
		inputStreamOptions: Windows.Storage.Streams.InputStreamOptions;
		unconsumedBufferLength: number;
		unicodeEncoding: Windows.Storage.Streams.UnicodeEncoding;
		readByte(): number;
		readBytes(value: number[]): void;
		readBytes(value: Uint8Array): void;
		readBuffer(length: number): Windows.Storage.Streams.IBuffer;
		readBoolean(): boolean;
		readGuid(): string;
		readInt16(): number;
		readInt32(): number;
		readInt64(): number;
		readUInt16(): number;
		readUInt32(): number;
		readUInt64(): number;
		readSingle(): number;
		readDouble(): number;
		readString(codeUnitCount: number): string;
		readDateTime(): Date;
		readTimeSpan(): number;
		loadAsync(count: number): Windows.Storage.Streams.DataReaderLoadOperation;
		detachBuffer(): Windows.Storage.Streams.IBuffer;
		detachStream(): Windows.Storage.Streams.IInputStream;
		dispose(): void;
		fromBuffer(buffer: Windows.Storage.Streams.IBuffer): Windows.Storage.Streams.DataReader;
		close(): void
	}

	declare export class DataWriterStoreOperation extends undefined$IAsyncOperation<number> {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<number>;
		errorCode: number;
		id: number;
		status: Windows.Foundation.AsyncStatus;
		getResults(): number;
		cancel(): void;
		close(): void;
		then<U>(
		success?: (value: number) => U, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: number) => Windows.Foundation.IPromise<U>, error?: (error: any) => U, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: number) => U, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		then<U>(
		success?: (value: number) => Windows.Foundation.IPromise<U>, error?: (error: any) => Windows.Foundation.IPromise<U>, progress?: (progress: any) => void
	): Windows.Foundation.IPromise<U>;
		done<U>(
		success?: (value: number) => any, error?: (error: any) => any, progress?: (progress: any) => void
	): void;
		operation: {
		completed: Windows.Foundation.AsyncOperationCompletedHandler<number>,
		getResults(): number
	}
	}

	declare export class DataWriter extends undefined$IDataWriter {
		constructor(outputStream: Windows.Storage.Streams.IOutputStream): this;
		constructor(): this;
		byteOrder: Windows.Storage.Streams.ByteOrder;
		unicodeEncoding: Windows.Storage.Streams.UnicodeEncoding;
		unstoredBufferLength: number;
		writeByte(value: number): void;
		writeBytes(value: number[]): void;
		writeBytes(value: Uint8Array): void;
		writeBuffer(buffer: Windows.Storage.Streams.IBuffer): void;
		writeBuffer(buffer: Windows.Storage.Streams.IBuffer, start: number, count: number): void;
		writeBoolean(value: boolean): void;
		writeGuid(value: string): void;
		writeInt16(value: number): void;
		writeInt32(value: number): void;
		writeInt64(value: number): void;
		writeUInt16(value: number): void;
		writeUInt32(value: number): void;
		writeUInt64(value: number): void;
		writeSingle(value: number): void;
		writeDouble(value: number): void;
		writeDateTime(value: Date): void;
		writeTimeSpan(value: number): void;
		writeString(value: string): number;
		measureString(value: string): number;
		storeAsync(): Windows.Storage.Streams.DataWriterStoreOperation;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		detachBuffer(): Windows.Storage.Streams.IBuffer;
		detachStream(): Windows.Storage.Streams.IOutputStream;
		dispose(): void;
		close(): void
	}

	declare export class RandomAccessStream  {
		copyAsync(
		source: Windows.Storage.Streams.IInputStream, destination: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		copyAsync(
		source: Windows.Storage.Streams.IInputStream, destination: Windows.Storage.Streams.IOutputStream, bytesToCopy: number
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		copyAndCloseAsync(
		source: Windows.Storage.Streams.IInputStream, destination: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>
	}

	declare export class Buffer extends undefined$IBuffer {
		constructor(capacity: number): this;
		capacity: number;
		length: number
	}

	declare export class RandomAccessStreamReference extends undefined$IRandomAccessStreamReference {
		openReadAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStreamWithContentType>;
		createFromFile(
		file: Windows.Storage.IStorageFile
	): Windows.Storage.Streams.RandomAccessStreamReference;
		createFromUri(
		uri: Windows.Foundation.Uri
	): Windows.Storage.Streams.RandomAccessStreamReference;
		createFromStream(
		stream: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Storage.Streams.RandomAccessStreamReference
	}

	declare export class FileRandomAccessStream extends undefined$IRandomAccessStream {
		canRead: boolean;
		canWrite: boolean;
		position: number;
		size: number;
		getInputStreamAt(position: number): Windows.Storage.Streams.IInputStream;
		getOutputStreamAt(position: number): Windows.Storage.Streams.IOutputStream;
		seek(position: number): void;
		cloneStream(): Windows.Storage.Streams.IRandomAccessStream;
		dispose(): void;
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		close(): void
	}

	declare export class FileInputStream extends undefined$IInputStream {
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
		dispose(): void;
		close(): void
	}

	declare export class FileOutputStream extends undefined$IOutputStream {
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		dispose(): void;
		close(): void
	}

	declare export class RandomAccessStreamOverStream extends undefined$IRandomAccessStream {
		canRead: boolean;
		canWrite: boolean;
		position: number;
		size: number;
		getInputStreamAt(position: number): Windows.Storage.Streams.IInputStream;
		getOutputStreamAt(position: number): Windows.Storage.Streams.IOutputStream;
		seek(position: number): void;
		cloneStream(): Windows.Storage.Streams.IRandomAccessStream;
		dispose(): void;
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		close(): void
	}

	declare export class InputStreamOverStream extends undefined$IInputStream {
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
		dispose(): void;
		close(): void
	}

	declare export class OutputStreamOverStream extends undefined$IOutputStream {
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		dispose(): void;
		close(): void
	}

	declare export class InMemoryRandomAccessStream extends undefined$IRandomAccessStream {
		canRead: boolean;
		canWrite: boolean;
		position: number;
		size: number;
		getInputStreamAt(position: number): Windows.Storage.Streams.IInputStream;
		getOutputStreamAt(position: number): Windows.Storage.Streams.IOutputStream;
		seek(position: number): void;
		cloneStream(): Windows.Storage.Streams.IRandomAccessStream;
		dispose(): void;
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		close(): void
	}

	
}

declare module 'FileProperties' {
		declare export interface IThumbnailProperties {
		originalHeight: number,
		originalWidth: number,
		returnedSmallerCachedSize: boolean,
		type: Windows.Storage.FileProperties.ThumbnailType
	}

	declare export interface IStorageItemExtraProperties {
		retrievePropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IMap<string, any>>,
		savePropertiesAsync(
		propertiesToSave: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	): Windows.Foundation.IAsyncAction,
		savePropertiesAsync(): Windows.Foundation.IAsyncAction
	}

	declare export interface IStorageItemContentProperties {
		getMusicPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.MusicProperties>,
		getVideoPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.VideoProperties>,
		getImagePropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.ImageProperties>,
		getDocumentPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.DocumentProperties>
	}

	declare export interface IMusicProperties {
		album: string,
		albumArtist: string,
		artist: string,
		bitrate: number,
		composers: Windows.Foundation.Collections.IVector<string>,
		conductors: Windows.Foundation.Collections.IVector<string>,
		duration: number,
		genre: Windows.Foundation.Collections.IVector<string>,
		producers: Windows.Foundation.Collections.IVector<string>,
		publisher: string,
		rating: number,
		subtitle: string,
		title: string,
		trackNumber: number,
		writers: Windows.Foundation.Collections.IVector<string>,
		year: number
	}

	declare export interface IImageProperties {
		cameraManufacturer: string,
		cameraModel: string,
		dateTaken: Date,
		height: number,
		keywords: Windows.Foundation.Collections.IVector<string>,
		latitude: number,
		longitude: number,
		orientation: Windows.Storage.FileProperties.PhotoOrientation,
		peopleNames: Windows.Foundation.Collections.IVectorView<string>,
		rating: number,
		title: string,
		width: number
	}

	declare export interface IVideoProperties {
		bitrate: number,
		directors: Windows.Foundation.Collections.IVector<string>,
		duration: number,
		height: number,
		keywords: Windows.Foundation.Collections.IVector<string>,
		latitude: number,
		longitude: number,
		orientation: Windows.Storage.FileProperties.VideoOrientation,
		producers: Windows.Foundation.Collections.IVector<string>,
		publisher: string,
		rating: number,
		subtitle: string,
		title: string,
		width: number,
		writers: Windows.Foundation.Collections.IVector<string>,
		year: number
	}

	declare export interface IDocumentProperties {
		author: Windows.Foundation.Collections.IVector<string>,
		comment: string,
		keywords: Windows.Foundation.Collections.IVector<string>,
		title: string
	}

	declare export interface IBasicProperties {
		dateModified: Date,
		itemDate: Date,
		size: number
	}

		declare export class StorageItemThumbnail extends undefined$IRandomAccessStreamWithContentType {
		canRead: boolean;
		canWrite: boolean;
		position: number;
		size: number;
		contentType: string;
		originalHeight: number;
		originalWidth: number;
		returnedSmallerCachedSize: boolean;
		type: Windows.Storage.FileProperties.ThumbnailType;
		getInputStreamAt(position: number): Windows.Storage.Streams.IInputStream;
		getOutputStreamAt(position: number): Windows.Storage.Streams.IOutputStream;
		seek(position: number): void;
		cloneStream(): Windows.Storage.Streams.IRandomAccessStream;
		dispose(): void;
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		close(): void
	}

	declare export class MusicProperties extends undefined$IMusicProperties {
		album: string;
		albumArtist: string;
		artist: string;
		bitrate: number;
		composers: Windows.Foundation.Collections.IVector<string>;
		conductors: Windows.Foundation.Collections.IVector<string>;
		duration: number;
		genre: Windows.Foundation.Collections.IVector<string>;
		producers: Windows.Foundation.Collections.IVector<string>;
		publisher: string;
		rating: number;
		subtitle: string;
		title: string;
		trackNumber: number;
		writers: Windows.Foundation.Collections.IVector<string>;
		year: number;
		retrievePropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IMap<string, any>>;
		savePropertiesAsync(
		propertiesToSave: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	): Windows.Foundation.IAsyncAction;
		savePropertiesAsync(): Windows.Foundation.IAsyncAction
	}

	declare export class VideoProperties extends undefined$IVideoProperties {
		bitrate: number;
		directors: Windows.Foundation.Collections.IVector<string>;
		duration: number;
		height: number;
		keywords: Windows.Foundation.Collections.IVector<string>;
		latitude: number;
		longitude: number;
		orientation: Windows.Storage.FileProperties.VideoOrientation;
		producers: Windows.Foundation.Collections.IVector<string>;
		publisher: string;
		rating: number;
		subtitle: string;
		title: string;
		width: number;
		writers: Windows.Foundation.Collections.IVector<string>;
		year: number;
		retrievePropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IMap<string, any>>;
		savePropertiesAsync(
		propertiesToSave: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	): Windows.Foundation.IAsyncAction;
		savePropertiesAsync(): Windows.Foundation.IAsyncAction
	}

	declare export class ImageProperties extends undefined$IImageProperties {
		cameraManufacturer: string;
		cameraModel: string;
		dateTaken: Date;
		height: number;
		keywords: Windows.Foundation.Collections.IVector<string>;
		latitude: number;
		longitude: number;
		orientation: Windows.Storage.FileProperties.PhotoOrientation;
		peopleNames: Windows.Foundation.Collections.IVectorView<string>;
		rating: number;
		title: string;
		width: number;
		retrievePropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IMap<string, any>>;
		savePropertiesAsync(
		propertiesToSave: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	): Windows.Foundation.IAsyncAction;
		savePropertiesAsync(): Windows.Foundation.IAsyncAction
	}

	declare export class DocumentProperties extends undefined$IDocumentProperties {
		author: Windows.Foundation.Collections.IVector<string>;
		comment: string;
		keywords: Windows.Foundation.Collections.IVector<string>;
		title: string;
		retrievePropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IMap<string, any>>;
		savePropertiesAsync(
		propertiesToSave: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	): Windows.Foundation.IAsyncAction;
		savePropertiesAsync(): Windows.Foundation.IAsyncAction
	}

	declare export class StorageItemContentProperties extends undefined$IStorageItemContentProperties {
		getMusicPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.MusicProperties>;
		getVideoPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.VideoProperties>;
		getImagePropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.ImageProperties>;
		getDocumentPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.DocumentProperties>;
		retrievePropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IMap<string, any>>;
		savePropertiesAsync(
		propertiesToSave: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	): Windows.Foundation.IAsyncAction;
		savePropertiesAsync(): Windows.Foundation.IAsyncAction
	}

	declare export class BasicProperties extends undefined$IBasicProperties {
		dateModified: Date;
		itemDate: Date;
		size: number;
		retrievePropertiesAsync(
		propertiesToRetrieve: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IMap<string, any>>;
		savePropertiesAsync(
		propertiesToSave: Windows.Foundation.Collections.IIterable<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	): Windows.Foundation.IAsyncAction;
		savePropertiesAsync(): Windows.Foundation.IAsyncAction
	}

	
}

declare module 'Storage' {
		declare export interface IKnownFoldersStatics {
		documentsLibrary: Windows.Storage.StorageFolder,
		homeGroup: Windows.Storage.StorageFolder,
		mediaServerDevices: Windows.Storage.StorageFolder,
		musicLibrary: Windows.Storage.StorageFolder,
		picturesLibrary: Windows.Storage.StorageFolder,
		removableDevices: Windows.Storage.StorageFolder,
		videosLibrary: Windows.Storage.StorageFolder
	}

	declare export interface IDownloadsFolderStatics {
		createFileAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		createFolderAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>,
		createFileAsync(
		desiredName: string, option: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		createFolderAsync(
		desiredName: string, option: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>
	}

	declare export interface IStreamedFileDataRequest {
		failAndClose(failureMode: Windows.Storage.StreamedFileFailureMode): void
	}

	declare export interface StreamedFileDataRequestedHandler {
		(stream: Windows.Storage.StreamedFileDataRequest): void
	}

	declare export interface IStorageFileStatics {
		getFileFromPathAsync(path: string): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		getFileFromApplicationUriAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		createStreamedFileAsync(
		displayNameWithExtension: string, dataRequested: Windows.Storage.StreamedFileDataRequestedHandler, thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		replaceWithStreamedFileAsync(
		fileToReplace: Windows.Storage.IStorageFile, dataRequested: Windows.Storage.StreamedFileDataRequestedHandler, thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		createStreamedFileFromUriAsync(
		displayNameWithExtension: string, uri: Windows.Foundation.Uri, thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		replaceWithStreamedFileFromUriAsync(
		fileToReplace: Windows.Storage.IStorageFile, uri: Windows.Foundation.Uri, thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>
	}

	declare export interface IStorageItem {
		attributes: Windows.Storage.FileAttributes,
		dateCreated: Date,
		name: string,
		path: string,
		renameAsync(desiredName: string): Windows.Foundation.IAsyncAction,
		renameAsync(
		desiredName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncAction,
		deleteAsync(): Windows.Foundation.IAsyncAction,
		deleteAsync(option: Windows.Storage.StorageDeleteOption): Windows.Foundation.IAsyncAction,
		getBasicPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.BasicProperties>,
		isOfType(type: Windows.Storage.StorageItemTypes): boolean
	}

	declare export interface IStorageFolder {
		createFileAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		createFileAsync(
		desiredName: string, options: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		createFolderAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>,
		createFolderAsync(
		desiredName: string, options: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>,
		getFileAsync(name: string): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		getFolderAsync(
		name: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>,
		getItemAsync(name: string): Windows.Foundation.IAsyncOperation<Windows.Storage.IStorageItem>,
		getFilesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>,
		getFoldersAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>,
		getItemsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>,
		getItemsAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>
	}

	declare export interface IStorageFolder2 {
		tryGetItemAsync(name: string): Windows.Foundation.IAsyncOperation<IStorageItem>
	}

	declare export interface IStorageFile {
		contentType: string,
		fileType: string,
		openAsync(
		accessMode: Windows.Storage.FileAccessMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStream>,
		openTransactedWriteAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageStreamTransaction>,
		copyAsync(
		destinationFolder: Windows.Storage.IStorageFolder
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		copyAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		copyAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		copyAndReplaceAsync(fileToReplace: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction,
		moveAsync(
		destinationFolder: Windows.Storage.IStorageFolder
	): Windows.Foundation.IAsyncAction,
		moveAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string
	): Windows.Foundation.IAsyncAction,
		moveAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncAction,
		moveAndReplaceAsync(fileToReplace: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction
	}

	declare export interface IStorageFolderStatics {
		getFolderFromPathAsync(
		path: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>
	}

	declare export interface IStorageItemProperties {
		displayName: string,
		displayType: string,
		folderRelativeId: string,
		properties: Windows.Storage.FileProperties.StorageItemContentProperties,
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>,
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>,
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number, options: Windows.Storage.FileProperties.ThumbnailOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>
	}

	declare export interface IFileIOStatics {
		readTextAsync(file: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncOperation<string>,
		readTextAsync(
		file: Windows.Storage.IStorageFile, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncOperation<string>,
		writeTextAsync(
		file: Windows.Storage.IStorageFile, contents: string
	): Windows.Foundation.IAsyncAction,
		writeTextAsync(
		file: Windows.Storage.IStorageFile, contents: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction,
		appendTextAsync(
		file: Windows.Storage.IStorageFile, contents: string
	): Windows.Foundation.IAsyncAction,
		appendTextAsync(
		file: Windows.Storage.IStorageFile, contents: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction,
		readLinesAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVector<string>>,
		readLinesAsync(
		file: Windows.Storage.IStorageFile, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVector<string>>,
		writeLinesAsync(
		file: Windows.Storage.IStorageFile, lines: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncAction,
		writeLinesAsync(
		file: Windows.Storage.IStorageFile, lines: Windows.Foundation.Collections.IIterable<string>, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction,
		appendLinesAsync(
		file: Windows.Storage.IStorageFile, lines: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncAction,
		appendLinesAsync(
		file: Windows.Storage.IStorageFile, lines: Windows.Foundation.Collections.IIterable<string>, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction,
		readBufferAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IBuffer>,
		writeBufferAsync(
		file: Windows.Storage.IStorageFile, buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncAction,
		writeBytesAsync(
		file: Windows.Storage.IStorageFile, buffer: Uint8Array
	): Windows.Foundation.IAsyncAction
	}

	declare export interface IPathIOStatics {
		readTextAsync(absolutePath: string): Windows.Foundation.IAsyncOperation<string>,
		readTextAsync(
		absolutePath: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncOperation<string>,
		writeTextAsync(absolutePath: string, contents: string): Windows.Foundation.IAsyncAction,
		writeTextAsync(
		absolutePath: string, contents: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction,
		appendTextAsync(absolutePath: string, contents: string): Windows.Foundation.IAsyncAction,
		appendTextAsync(
		absolutePath: string, contents: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction,
		readLinesAsync(
		absolutePath: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVector<string>>,
		readLinesAsync(
		absolutePath: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVector<string>>,
		writeLinesAsync(
		absolutePath: string, lines: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncAction,
		writeLinesAsync(
		absolutePath: string, lines: Windows.Foundation.Collections.IIterable<string>, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction,
		appendLinesAsync(
		absolutePath: string, lines: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncAction,
		appendLinesAsync(
		absolutePath: string, lines: Windows.Foundation.Collections.IIterable<string>, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction,
		readBufferAsync(
		absolutePath: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IBuffer>,
		writeBufferAsync(
		absolutePath: string, buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncAction,
		writeBytesAsync(absolutePath: string, buffer: Uint8Array): Windows.Foundation.IAsyncAction
	}

	declare export interface ICachedFileManagerStatics {
		deferUpdates(file: Windows.Storage.IStorageFile): void,
		completeUpdatesAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Provider.FileUpdateStatus>
	}

	declare export interface IStorageStreamTransaction {
		stream: Windows.Storage.Streams.IRandomAccessStream,
		commitAsync(): Windows.Foundation.IAsyncAction
	}

	declare export interface IApplicationDataStatics {
		current: Windows.Storage.ApplicationData
	}

	declare export interface IApplicationData {
		localFolder: Windows.Storage.StorageFolder,
		localSettings: Windows.Storage.ApplicationDataContainer,
		roamingFolder: Windows.Storage.StorageFolder,
		roamingSettings: Windows.Storage.ApplicationDataContainer,
		roamingStorageQuota: number,
		temporaryFolder: Windows.Storage.StorageFolder,
		version: number,
		setVersionAsync(
		desiredVersion: number, handler: Windows.Storage.ApplicationDataSetVersionHandler
	): Windows.Foundation.IAsyncAction,
		clearAsync(): Windows.Foundation.IAsyncAction,
		clearAsync(
		locality: Windows.Storage.ApplicationDataLocality
	): Windows.Foundation.IAsyncAction,
		ondatachanged: any,
		signalDataChanged(): void
	}

	declare export interface ApplicationDataSetVersionHandler {
		(setVersionRequest: Windows.Storage.SetVersionRequest): void
	}

	declare export interface ISetVersionRequest {
		currentVersion: number,
		desiredVersion: number,
		getDeferral(): Windows.Storage.SetVersionDeferral
	}

	declare export interface ISetVersionDeferral {
		complete(): void
	}

	declare export interface IApplicationDataContainer {
		containers: Windows.Foundation.Collections.IMapView<string, Windows.Storage.ApplicationDataContainer>,
		locality: Windows.Storage.ApplicationDataLocality,
		name: string,
		values: Windows.Foundation.Collections.IPropertySet,
		createContainer(
		name: string, disposition: Windows.Storage.ApplicationDataCreateDisposition
	): Windows.Storage.ApplicationDataContainer,
		deleteContainer(name: string): void
	}

		declare export class StorageFolder extends undefined$IStorageFolder {
		attributes: Windows.Storage.FileAttributes;
		dateCreated: Date;
		name: string;
		path: string;
		displayName: string;
		displayType: string;
		folderRelativeId: string;
		properties: Windows.Storage.FileProperties.StorageItemContentProperties;
		createFileAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		createFileAsync(
		desiredName: string, options: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		createFolderAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		createFolderAsync(
		desiredName: string, options: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		getFileAsync(name: string): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		getFolderAsync(
		name: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		getItemAsync(name: string): Windows.Foundation.IAsyncOperation<Windows.Storage.IStorageItem>;
		getFilesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>;
		getFoldersAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>;
		getItemsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>;
		renameAsync(desiredName: string): Windows.Foundation.IAsyncAction;
		renameAsync(
		desiredName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncAction;
		deleteAsync(): Windows.Foundation.IAsyncAction;
		deleteAsync(option: Windows.Storage.StorageDeleteOption): Windows.Foundation.IAsyncAction;
		getBasicPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.BasicProperties>;
		isOfType(type: Windows.Storage.StorageItemTypes): boolean;
		getIndexedStateAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.Search.IndexedState>;
		createFileQuery(): Windows.Storage.Search.StorageFileQueryResult;
		createFileQuery(
		query: Windows.Storage.Search.CommonFileQuery
	): Windows.Storage.Search.StorageFileQueryResult;
		createFileQueryWithOptions(
		queryOptions: Windows.Storage.Search.QueryOptions
	): Windows.Storage.Search.StorageFileQueryResult;
		createFolderQuery(): Windows.Storage.Search.StorageFolderQueryResult;
		createFolderQuery(
		query: Windows.Storage.Search.CommonFolderQuery
	): Windows.Storage.Search.StorageFolderQueryResult;
		createFolderQueryWithOptions(
		queryOptions: Windows.Storage.Search.QueryOptions
	): Windows.Storage.Search.StorageFolderQueryResult;
		createItemQuery(): Windows.Storage.Search.StorageItemQueryResult;
		createItemQueryWithOptions(
		queryOptions: Windows.Storage.Search.QueryOptions
	): Windows.Storage.Search.StorageItemQueryResult;
		getFilesAsync(
		query: Windows.Storage.Search.CommonFileQuery, startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>;
		getFilesAsync(
		query: Windows.Storage.Search.CommonFileQuery
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>;
		getFoldersAsync(
		query: Windows.Storage.Search.CommonFolderQuery, startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>;
		getFoldersAsync(
		query: Windows.Storage.Search.CommonFolderQuery
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>;
		getItemsAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>;
		areQueryOptionsSupported(queryOptions: Windows.Storage.Search.QueryOptions): boolean;
		isCommonFolderQuerySupported(query: Windows.Storage.Search.CommonFolderQuery): boolean;
		isCommonFileQuerySupported(query: Windows.Storage.Search.CommonFileQuery): boolean;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number, options: Windows.Storage.FileProperties.ThumbnailOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getFolderFromPathAsync(
		path: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		tryGetItemAsync(name: string): Windows.Foundation.IAsyncOperation<IStorageItem>
	}

	declare export class KnownFolders  {
		documentsLibrary: Windows.Storage.StorageFolder;
		homeGroup: Windows.Storage.StorageFolder;
		mediaServerDevices: Windows.Storage.StorageFolder;
		musicLibrary: Windows.Storage.StorageFolder;
		picturesLibrary: Windows.Storage.StorageFolder;
		removableDevices: Windows.Storage.StorageFolder;
		videosLibrary: Windows.Storage.StorageFolder
	}

	declare export class StorageFile extends undefined$IStorageFile {
		contentType: string;
		fileType: string;
		attributes: Windows.Storage.FileAttributes;
		dateCreated: Date;
		name: string;
		path: string;
		displayName: string;
		displayType: string;
		folderRelativeId: string;
		properties: Windows.Storage.FileProperties.StorageItemContentProperties;
		openAsync(
		accessMode: Windows.Storage.FileAccessMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStream>;
		openTransactedWriteAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageStreamTransaction>;
		copyAsync(
		destinationFolder: Windows.Storage.IStorageFolder
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		copyAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		copyAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		copyAndReplaceAsync(fileToReplace: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction;
		moveAsync(
		destinationFolder: Windows.Storage.IStorageFolder
	): Windows.Foundation.IAsyncAction;
		moveAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string
	): Windows.Foundation.IAsyncAction;
		moveAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncAction;
		moveAndReplaceAsync(fileToReplace: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction;
		renameAsync(desiredName: string): Windows.Foundation.IAsyncAction;
		renameAsync(
		desiredName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncAction;
		deleteAsync(): Windows.Foundation.IAsyncAction;
		deleteAsync(option: Windows.Storage.StorageDeleteOption): Windows.Foundation.IAsyncAction;
		getBasicPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.BasicProperties>;
		isOfType(type: Windows.Storage.StorageItemTypes): boolean;
		openReadAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStreamWithContentType>;
		openSequentialReadAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IInputStream>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number, options: Windows.Storage.FileProperties.ThumbnailOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getFileFromPathAsync(path: string): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		getFileFromApplicationUriAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		createStreamedFileAsync(
		displayNameWithExtension: string, dataRequested: Windows.Storage.StreamedFileDataRequestedHandler, thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		replaceWithStreamedFileAsync(
		fileToReplace: Windows.Storage.IStorageFile, dataRequested: Windows.Storage.StreamedFileDataRequestedHandler, thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		createStreamedFileFromUriAsync(
		displayNameWithExtension: string, uri: Windows.Foundation.Uri, thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		replaceWithStreamedFileFromUriAsync(
		fileToReplace: Windows.Storage.IStorageFile, uri: Windows.Foundation.Uri, thumbnail: Windows.Storage.Streams.IRandomAccessStreamReference
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>
	}

	declare export class DownloadsFolder  {
		createFileAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		createFolderAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		createFileAsync(
		desiredName: string, option: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		createFolderAsync(
		desiredName: string, option: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>
	}

	declare export class StreamedFileDataRequest extends undefined$IOutputStream {
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		dispose(): void;
		failAndClose(failureMode: Windows.Storage.StreamedFileFailureMode): void;
		close(): void
	}

	declare export class StorageStreamTransaction extends undefined$IStorageStreamTransaction {
		stream: Windows.Storage.Streams.IRandomAccessStream;
		commitAsync(): Windows.Foundation.IAsyncAction;
		dispose(): void;
		close(): void
	}

	declare export class FileIO  {
		readTextAsync(file: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncOperation<string>;
		readTextAsync(
		file: Windows.Storage.IStorageFile, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncOperation<string>;
		writeTextAsync(
		file: Windows.Storage.IStorageFile, contents: string
	): Windows.Foundation.IAsyncAction;
		writeTextAsync(
		file: Windows.Storage.IStorageFile, contents: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction;
		appendTextAsync(
		file: Windows.Storage.IStorageFile, contents: string
	): Windows.Foundation.IAsyncAction;
		appendTextAsync(
		file: Windows.Storage.IStorageFile, contents: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction;
		readLinesAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVector<string>>;
		readLinesAsync(
		file: Windows.Storage.IStorageFile, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVector<string>>;
		writeLinesAsync(
		file: Windows.Storage.IStorageFile, lines: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncAction;
		writeLinesAsync(
		file: Windows.Storage.IStorageFile, lines: Windows.Foundation.Collections.IIterable<string>, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction;
		appendLinesAsync(
		file: Windows.Storage.IStorageFile, lines: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncAction;
		appendLinesAsync(
		file: Windows.Storage.IStorageFile, lines: Windows.Foundation.Collections.IIterable<string>, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction;
		readBufferAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IBuffer>;
		writeBufferAsync(
		file: Windows.Storage.IStorageFile, buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncAction;
		writeBytesAsync(
		file: Windows.Storage.IStorageFile, buffer: Uint8Array
	): Windows.Foundation.IAsyncAction
	}

	declare export class PathIO  {
		readTextAsync(absolutePath: string): Windows.Foundation.IAsyncOperation<string>;
		readTextAsync(
		absolutePath: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncOperation<string>;
		writeTextAsync(absolutePath: string, contents: string): Windows.Foundation.IAsyncAction;
		writeTextAsync(
		absolutePath: string, contents: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction;
		appendTextAsync(absolutePath: string, contents: string): Windows.Foundation.IAsyncAction;
		appendTextAsync(
		absolutePath: string, contents: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction;
		readLinesAsync(
		absolutePath: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVector<string>>;
		readLinesAsync(
		absolutePath: string, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVector<string>>;
		writeLinesAsync(
		absolutePath: string, lines: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncAction;
		writeLinesAsync(
		absolutePath: string, lines: Windows.Foundation.Collections.IIterable<string>, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction;
		appendLinesAsync(
		absolutePath: string, lines: Windows.Foundation.Collections.IIterable<string>
	): Windows.Foundation.IAsyncAction;
		appendLinesAsync(
		absolutePath: string, lines: Windows.Foundation.Collections.IIterable<string>, encoding: Windows.Storage.Streams.UnicodeEncoding
	): Windows.Foundation.IAsyncAction;
		readBufferAsync(
		absolutePath: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IBuffer>;
		writeBufferAsync(
		absolutePath: string, buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncAction;
		writeBytesAsync(absolutePath: string, buffer: Uint8Array): Windows.Foundation.IAsyncAction
	}

	declare export class CachedFileManager  {
		deferUpdates(file: Windows.Storage.IStorageFile): void;
		completeUpdatesAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Provider.FileUpdateStatus>
	}

	declare export class ApplicationData extends undefined$IApplicationData {
		localFolder: Windows.Storage.StorageFolder;
		localSettings: Windows.Storage.ApplicationDataContainer;
		roamingFolder: Windows.Storage.StorageFolder;
		roamingSettings: Windows.Storage.ApplicationDataContainer;
		roamingStorageQuota: number;
		temporaryFolder: Windows.Storage.StorageFolder;
		version: number;
		setVersionAsync(
		desiredVersion: number, handler: Windows.Storage.ApplicationDataSetVersionHandler
	): Windows.Foundation.IAsyncAction;
		clearAsync(): Windows.Foundation.IAsyncAction;
		clearAsync(
		locality: Windows.Storage.ApplicationDataLocality
	): Windows.Foundation.IAsyncAction;
		ondatachanged: any;
		signalDataChanged(): void;
		current: Windows.Storage.ApplicationData
	}

	declare export class SetVersionRequest extends undefined$ISetVersionRequest {
		currentVersion: number;
		desiredVersion: number;
		getDeferral(): Windows.Storage.SetVersionDeferral
	}

	declare export class ApplicationDataContainer extends undefined$IApplicationDataContainer {
		containers: Windows.Foundation.Collections.IMapView<string, Windows.Storage.ApplicationDataContainer>;
		locality: Windows.Storage.ApplicationDataLocality;
		name: string;
		values: Windows.Foundation.Collections.IPropertySet;
		createContainer(
		name: string, disposition: Windows.Storage.ApplicationDataCreateDisposition
	): Windows.Storage.ApplicationDataContainer;
		deleteContainer(name: string): void
	}

	declare export class SetVersionDeferral extends undefined$ISetVersionDeferral {
		complete(): void
	}

	declare export class ApplicationDataContainerSettings extends undefined$IPropertySet {
		size: number;
		onmapchanged: any;
		lookup(key: string): any;
		hasKey(key: string): boolean;
		getView(): Windows.Foundation.Collections.IMapView<string, any>;
		insert(key: string, value: any): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	}

	declare export class ApplicationDataCompositeValue extends undefined$IPropertySet {
		size: number;
		onmapchanged: any;
		lookup(key: string): any;
		hasKey(key: string): boolean;
		getView(): Windows.Foundation.Collections.IMapView<string, any>;
		insert(key: string, value: any): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, any>>
	}

	
}

declare module 'AccessCache' {
		declare export interface AccessListEntry {
		token: string,
		metadata: string
	}

	declare export interface IItemRemovedEventArgs {
		removedEntry: Windows.Storage.AccessCache.AccessListEntry
	}

	declare export interface IStorageItemAccessList {
		entries: Windows.Storage.AccessCache.AccessListEntryView,
		maximumItemsAllowed: number,
		add(file: Windows.Storage.IStorageItem): string,
		add(file: Windows.Storage.IStorageItem, metadata: string): string,
		addOrReplace(token: string, file: Windows.Storage.IStorageItem): void,
		addOrReplace(token: string, file: Windows.Storage.IStorageItem, metadata: string): void,
		getItemAsync(
		token: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.IStorageItem>,
		getFileAsync(token: string): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		getFolderAsync(
		token: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>,
		getItemAsync(
		token: string, options: Windows.Storage.AccessCache.AccessCacheOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.IStorageItem>,
		getFileAsync(
		token: string, options: Windows.Storage.AccessCache.AccessCacheOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>,
		getFolderAsync(
		token: string, options: Windows.Storage.AccessCache.AccessCacheOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>,
		remove(token: string): void,
		containsItem(token: string): boolean,
		clear(): void,
		checkAccess(file: Windows.Storage.IStorageItem): boolean
	}

	declare export interface IStorageItemMostRecentlyUsedList {
		onitemremoved: any
	}

	declare export interface IStorageApplicationPermissionsStatics {
		futureAccessList: Windows.Storage.AccessCache.StorageItemAccessList,
		mostRecentlyUsedList: Windows.Storage.AccessCache.StorageItemMostRecentlyUsedList
	}

		declare export class AccessListEntryView extends undefined$IVectorView<Windows.Storage.AccessCache.AccessListEntry> {
		size: number;
		getAt(index: number): Windows.Storage.AccessCache.AccessListEntry;
		indexOf(
		value: Windows.Storage.AccessCache.AccessListEntry
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.Storage.AccessCache.AccessListEntry[],
		returnValue: number
	};
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Storage.AccessCache.AccessListEntry>;
		toString(): string;
		toLocaleString(): string;
		concat(
		...items: Windows.Storage.AccessCache.AccessListEntry[][]
	): Windows.Storage.AccessCache.AccessListEntry[];
		join(seperator: string): string;
		pop(): Windows.Storage.AccessCache.AccessListEntry;
		push(...items: Windows.Storage.AccessCache.AccessListEntry[]): void;
		reverse(): Windows.Storage.AccessCache.AccessListEntry[];
		shift(): Windows.Storage.AccessCache.AccessListEntry;
		slice(start: number): Windows.Storage.AccessCache.AccessListEntry[];
		slice(start: number, end: number): Windows.Storage.AccessCache.AccessListEntry[];
		sort(): Windows.Storage.AccessCache.AccessListEntry[];
		sort(
		compareFn: (
		a: Windows.Storage.AccessCache.AccessListEntry, b: Windows.Storage.AccessCache.AccessListEntry
	) => number
	): Windows.Storage.AccessCache.AccessListEntry[];
		splice(start: number): Windows.Storage.AccessCache.AccessListEntry[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Storage.AccessCache.AccessListEntry[]
	): Windows.Storage.AccessCache.AccessListEntry[];
		unshift(...items: Windows.Storage.AccessCache.AccessListEntry[]): number;
		lastIndexOf(searchElement: Windows.Storage.AccessCache.AccessListEntry): number;
		lastIndexOf(
		searchElement: Windows.Storage.AccessCache.AccessListEntry, fromIndex: number
	): number;
		every(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => boolean
	): Windows.Storage.AccessCache.AccessListEntry[];
		filter(
		callbackfn: (
		value: Windows.Storage.AccessCache.AccessListEntry, index: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => boolean, thisArg: any
	): Windows.Storage.AccessCache.AccessListEntry[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.AccessCache.AccessListEntry[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class StorageItemMostRecentlyUsedList extends undefined$IStorageItemMostRecentlyUsedList {
		entries: Windows.Storage.AccessCache.AccessListEntryView;
		maximumItemsAllowed: number;
		onitemremoved: any;
		add(file: Windows.Storage.IStorageItem): string;
		add(file: Windows.Storage.IStorageItem, metadata: string): string;
		addOrReplace(token: string, file: Windows.Storage.IStorageItem): void;
		addOrReplace(token: string, file: Windows.Storage.IStorageItem, metadata: string): void;
		getItemAsync(
		token: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.IStorageItem>;
		getFileAsync(token: string): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		getFolderAsync(
		token: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		getItemAsync(
		token: string, options: Windows.Storage.AccessCache.AccessCacheOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.IStorageItem>;
		getFileAsync(
		token: string, options: Windows.Storage.AccessCache.AccessCacheOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		getFolderAsync(
		token: string, options: Windows.Storage.AccessCache.AccessCacheOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		remove(token: string): void;
		containsItem(token: string): boolean;
		clear(): void;
		checkAccess(file: Windows.Storage.IStorageItem): boolean
	}

	declare export class ItemRemovedEventArgs extends undefined$IItemRemovedEventArgs {
		removedEntry: Windows.Storage.AccessCache.AccessListEntry
	}

	declare export class StorageItemAccessList extends undefined$IStorageItemAccessList {
		entries: Windows.Storage.AccessCache.AccessListEntryView;
		maximumItemsAllowed: number;
		add(file: Windows.Storage.IStorageItem): string;
		add(file: Windows.Storage.IStorageItem, metadata: string): string;
		addOrReplace(token: string, file: Windows.Storage.IStorageItem): void;
		addOrReplace(token: string, file: Windows.Storage.IStorageItem, metadata: string): void;
		getItemAsync(
		token: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.IStorageItem>;
		getFileAsync(token: string): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		getFolderAsync(
		token: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		getItemAsync(
		token: string, options: Windows.Storage.AccessCache.AccessCacheOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.IStorageItem>;
		getFileAsync(
		token: string, options: Windows.Storage.AccessCache.AccessCacheOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		getFolderAsync(
		token: string, options: Windows.Storage.AccessCache.AccessCacheOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		remove(token: string): void;
		containsItem(token: string): boolean;
		clear(): void;
		checkAccess(file: Windows.Storage.IStorageItem): boolean
	}

	declare export class StorageApplicationPermissions  {
		futureAccessList: Windows.Storage.AccessCache.StorageItemAccessList;
		mostRecentlyUsedList: Windows.Storage.AccessCache.StorageItemMostRecentlyUsedList
	}

	
}

declare module 'BulkAccess' {
		declare export interface IStorageItemInformation {
		basicProperties: Windows.Storage.FileProperties.BasicProperties,
		documentProperties: Windows.Storage.FileProperties.DocumentProperties,
		imageProperties: Windows.Storage.FileProperties.ImageProperties,
		musicProperties: Windows.Storage.FileProperties.MusicProperties,
		thumbnail: Windows.Storage.FileProperties.StorageItemThumbnail,
		videoProperties: Windows.Storage.FileProperties.VideoProperties,
		onthumbnailupdated: any,
		onpropertiesupdated: any
	}

	declare export interface IFileInformationFactoryFactory {
		createWithMode(
		queryResult: Windows.Storage.Search.IStorageQueryResultBase, mode: Windows.Storage.FileProperties.ThumbnailMode
	): Windows.Storage.BulkAccess.FileInformationFactory,
		createWithModeAndSize(
		queryResult: Windows.Storage.Search.IStorageQueryResultBase, mode: Windows.Storage.FileProperties.ThumbnailMode, requestedThumbnailSize: number
	): Windows.Storage.BulkAccess.FileInformationFactory,
		createWithModeAndSizeAndOptions(
		queryResult: Windows.Storage.Search.IStorageQueryResultBase, mode: Windows.Storage.FileProperties.ThumbnailMode, requestedThumbnailSize: number, thumbnailOptions: Windows.Storage.FileProperties.ThumbnailOptions
	): Windows.Storage.BulkAccess.FileInformationFactory,
		createWithModeAndSizeAndOptionsAndFlags(
		queryResult: Windows.Storage.Search.IStorageQueryResultBase, mode: Windows.Storage.FileProperties.ThumbnailMode, requestedThumbnailSize: number, thumbnailOptions: Windows.Storage.FileProperties.ThumbnailOptions, delayLoad: boolean
	): Windows.Storage.BulkAccess.FileInformationFactory
	}

	declare export interface IFileInformationFactory {
		getItemsAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.IStorageItemInformation>>,
		getItemsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.IStorageItemInformation>>,
		getFilesAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.FileInformation>>,
		getFilesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.FileInformation>>,
		getFoldersAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.FolderInformation>>,
		getFoldersAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.FolderInformation>>,
		getVirtualizedItemsVector(): any,
		getVirtualizedFilesVector(): any,
		getVirtualizedFoldersVector(): any
	}

		declare export class FileInformationFactory extends undefined$IFileInformationFactory {
		constructor(queryResult: Windows.Storage.Search.IStorageQueryResultBase, mode: Windows.Storage.FileProperties.ThumbnailMode): this;
		constructor(queryResult: Windows.Storage.Search.IStorageQueryResultBase, mode: Windows.Storage.FileProperties.ThumbnailMode, requestedThumbnailSize: number): this;
		constructor(queryResult: Windows.Storage.Search.IStorageQueryResultBase, mode: Windows.Storage.FileProperties.ThumbnailMode, requestedThumbnailSize: number, thumbnailOptions: Windows.Storage.FileProperties.ThumbnailOptions): this;
		constructor(queryResult: Windows.Storage.Search.IStorageQueryResultBase, mode: Windows.Storage.FileProperties.ThumbnailMode, requestedThumbnailSize: number, thumbnailOptions: Windows.Storage.FileProperties.ThumbnailOptions, delayLoad: boolean): this;
		getItemsAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.IStorageItemInformation>>;
		getItemsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.IStorageItemInformation>>;
		getFilesAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.FileInformation>>;
		getFilesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.FileInformation>>;
		getFoldersAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.FolderInformation>>;
		getFoldersAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.BulkAccess.FolderInformation>>;
		getVirtualizedItemsVector(): any;
		getVirtualizedFilesVector(): any;
		getVirtualizedFoldersVector(): any
	}

	declare export class FileInformation extends undefined$IStorageItemInformation {
		basicProperties: Windows.Storage.FileProperties.BasicProperties;
		documentProperties: Windows.Storage.FileProperties.DocumentProperties;
		imageProperties: Windows.Storage.FileProperties.ImageProperties;
		musicProperties: Windows.Storage.FileProperties.MusicProperties;
		thumbnail: Windows.Storage.FileProperties.StorageItemThumbnail;
		videoProperties: Windows.Storage.FileProperties.VideoProperties;
		contentType: string;
		fileType: string;
		attributes: Windows.Storage.FileAttributes;
		dateCreated: Date;
		name: string;
		path: string;
		displayName: string;
		displayType: string;
		folderRelativeId: string;
		properties: Windows.Storage.FileProperties.StorageItemContentProperties;
		onthumbnailupdated: any;
		onpropertiesupdated: any;
		openAsync(
		accessMode: Windows.Storage.FileAccessMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStream>;
		openTransactedWriteAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageStreamTransaction>;
		copyAsync(
		destinationFolder: Windows.Storage.IStorageFolder
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		copyAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		copyAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		copyAndReplaceAsync(fileToReplace: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction;
		moveAsync(
		destinationFolder: Windows.Storage.IStorageFolder
	): Windows.Foundation.IAsyncAction;
		moveAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string
	): Windows.Foundation.IAsyncAction;
		moveAsync(
		destinationFolder: Windows.Storage.IStorageFolder, desiredNewName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncAction;
		moveAndReplaceAsync(fileToReplace: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction;
		renameAsync(desiredName: string): Windows.Foundation.IAsyncAction;
		renameAsync(
		desiredName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncAction;
		deleteAsync(): Windows.Foundation.IAsyncAction;
		deleteAsync(option: Windows.Storage.StorageDeleteOption): Windows.Foundation.IAsyncAction;
		getBasicPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.BasicProperties>;
		isOfType(type: Windows.Storage.StorageItemTypes): boolean;
		openReadAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IRandomAccessStreamWithContentType>;
		openSequentialReadAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.Streams.IInputStream>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number, options: Windows.Storage.FileProperties.ThumbnailOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>
	}

	declare export class FolderInformation extends undefined$IStorageItemInformation {
		basicProperties: Windows.Storage.FileProperties.BasicProperties;
		documentProperties: Windows.Storage.FileProperties.DocumentProperties;
		imageProperties: Windows.Storage.FileProperties.ImageProperties;
		musicProperties: Windows.Storage.FileProperties.MusicProperties;
		thumbnail: Windows.Storage.FileProperties.StorageItemThumbnail;
		videoProperties: Windows.Storage.FileProperties.VideoProperties;
		attributes: Windows.Storage.FileAttributes;
		dateCreated: Date;
		name: string;
		path: string;
		displayName: string;
		displayType: string;
		folderRelativeId: string;
		properties: Windows.Storage.FileProperties.StorageItemContentProperties;
		onthumbnailupdated: any;
		onpropertiesupdated: any;
		createFileAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		createFileAsync(
		desiredName: string, options: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		createFolderAsync(
		desiredName: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		createFolderAsync(
		desiredName: string, options: Windows.Storage.CreationCollisionOption
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		getFileAsync(name: string): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		getFolderAsync(
		name: string
	): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>;
		getItemAsync(name: string): Windows.Foundation.IAsyncOperation<Windows.Storage.IStorageItem>;
		getFilesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>;
		getFoldersAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>;
		getItemsAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>;
		renameAsync(desiredName: string): Windows.Foundation.IAsyncAction;
		renameAsync(
		desiredName: string, option: Windows.Storage.NameCollisionOption
	): Windows.Foundation.IAsyncAction;
		deleteAsync(): Windows.Foundation.IAsyncAction;
		deleteAsync(option: Windows.Storage.StorageDeleteOption): Windows.Foundation.IAsyncAction;
		getBasicPropertiesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.BasicProperties>;
		isOfType(type: Windows.Storage.StorageItemTypes): boolean;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getThumbnailAsync(
		mode: Windows.Storage.FileProperties.ThumbnailMode, requestedSize: number, options: Windows.Storage.FileProperties.ThumbnailOptions
	): Windows.Foundation.IAsyncOperation<Windows.Storage.FileProperties.StorageItemThumbnail>;
		getIndexedStateAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.Search.IndexedState>;
		createFileQuery(): Windows.Storage.Search.StorageFileQueryResult;
		createFileQuery(
		query: Windows.Storage.Search.CommonFileQuery
	): Windows.Storage.Search.StorageFileQueryResult;
		createFileQueryWithOptions(
		queryOptions: Windows.Storage.Search.QueryOptions
	): Windows.Storage.Search.StorageFileQueryResult;
		createFolderQuery(): Windows.Storage.Search.StorageFolderQueryResult;
		createFolderQuery(
		query: Windows.Storage.Search.CommonFolderQuery
	): Windows.Storage.Search.StorageFolderQueryResult;
		createFolderQueryWithOptions(
		queryOptions: Windows.Storage.Search.QueryOptions
	): Windows.Storage.Search.StorageFolderQueryResult;
		createItemQuery(): Windows.Storage.Search.StorageItemQueryResult;
		createItemQueryWithOptions(
		queryOptions: Windows.Storage.Search.QueryOptions
	): Windows.Storage.Search.StorageItemQueryResult;
		getFilesAsync(
		query: Windows.Storage.Search.CommonFileQuery, startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>;
		getFilesAsync(
		query: Windows.Storage.Search.CommonFileQuery
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>;
		getFoldersAsync(
		query: Windows.Storage.Search.CommonFolderQuery, startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>;
		getFoldersAsync(
		query: Windows.Storage.Search.CommonFolderQuery
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFolder>>;
		getItemsAsync(
		startIndex: number, maxItemsToRetrieve: number
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>>;
		areQueryOptionsSupported(queryOptions: Windows.Storage.Search.QueryOptions): boolean;
		isCommonFolderQuerySupported(query: Windows.Storage.Search.CommonFolderQuery): boolean;
		isCommonFileQuerySupported(query: Windows.Storage.Search.CommonFileQuery): boolean
	}

	
}

declare module 'Pickers' {
		declare export interface IFileOpenPicker {
		commitButtonText: string,
		continuationData: Windows.Foundation.Collections.ValueSet,
		fileTypeFilter: Windows.Foundation.Collections.IVector<string>,
		settingsIdentifier: string,
		suggestedStartLocation: Windows.Storage.Pickers.PickerLocationId,
		viewMode: Windows.Storage.Pickers.PickerViewMode,
		pickMultipleFilesAndContinue(): void,
		pickMultipleFilesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>,
		pickSingleFileAndContinue(): void,
		pickSingleFileAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>
	}

	declare export interface IFileSavePicker {
		commitButtonText: string,
		continuationData: Windows.Foundation.Collections.ValueSet,
		defaultFileExtension: string,
		fileTypeChoices: Windows.Foundation.Collections.IMap<string, Windows.Foundation.Collections.IVector<string>>,
		settingsIdentifier: string,
		suggestedFileName: string,
		suggestedSaveFile: Windows.Storage.StorageFile,
		suggestedStartLocation: Windows.Storage.Pickers.PickerLocationId,
		pickSaveFileAndContinue(): void,
		pickSaveFileAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>
	}

	declare export interface IFolderPicker {
		commitButtonText: string,
		continuationData: Windows.Foundation.Collections.ValueSet,
		fileTypeFilter: Windows.Foundation.Collections.IVector<string>,
		settingsIdentifier: string,
		suggestedStartLocation: Windows.Storage.Pickers.PickerLocationId,
		viewMode: Windows.Storage.Pickers.PickerViewMode,
		pickFolderAndContinue(): void,
		pickSingleFolderAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>
	}

		declare export class FilePickerSelectedFilesArray extends undefined$IVectorView<Windows.Storage.StorageFile> {
		size: number;
		getAt(index: number): Windows.Storage.StorageFile;
		indexOf(
		value: Windows.Storage.StorageFile
	): {
		index: number,
		returnValue: boolean
	};
		getMany(
		startIndex: number
	): {
		items: Windows.Storage.StorageFile[],
		returnValue: number
	};
		first(): Windows.Foundation.Collections.IIterator<Windows.Storage.StorageFile>;
		toString(): string;
		toLocaleString(): string;
		concat(...items: Windows.Storage.StorageFile[][]): Windows.Storage.StorageFile[];
		join(seperator: string): string;
		pop(): Windows.Storage.StorageFile;
		push(...items: Windows.Storage.StorageFile[]): void;
		reverse(): Windows.Storage.StorageFile[];
		shift(): Windows.Storage.StorageFile;
		slice(start: number): Windows.Storage.StorageFile[];
		slice(start: number, end: number): Windows.Storage.StorageFile[];
		sort(): Windows.Storage.StorageFile[];
		sort(
		compareFn: (a: Windows.Storage.StorageFile, b: Windows.Storage.StorageFile) => number
	): Windows.Storage.StorageFile[];
		splice(start: number): Windows.Storage.StorageFile[];
		splice(
		start: number, deleteCount: number, ...items: Windows.Storage.StorageFile[]
	): Windows.Storage.StorageFile[];
		unshift(...items: Windows.Storage.StorageFile[]): number;
		lastIndexOf(searchElement: Windows.Storage.StorageFile): number;
		lastIndexOf(searchElement: Windows.Storage.StorageFile, fromIndex: number): number;
		every(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => boolean
	): boolean;
		every(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => boolean
	): boolean;
		some(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => boolean, thisArg: any
	): boolean;
		forEach(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => void
	): void;
		forEach(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => void, thisArg: any
	): void;
		map(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => any
	): any[];
		map(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => boolean
	): Windows.Storage.StorageFile[];
		filter(
		callbackfn: (
		value: Windows.Storage.StorageFile, index: number, array: Windows.Storage.StorageFile[]
	) => boolean, thisArg: any
	): Windows.Storage.StorageFile[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.StorageFile[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.StorageFile[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.StorageFile[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: Windows.Storage.StorageFile[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class FilePickerFileTypesOrderedMap extends undefined$IMap<string, Windows.Foundation.Collections.IVector<string>> {
		size: number;
		lookup(key: string): Windows.Foundation.Collections.IVector<string>;
		hasKey(key: string): boolean;
		getView(
		
	): Windows.Foundation.Collections.IMapView<string, Windows.Foundation.Collections.IVector<string>>;
		insert(key: string, value: Windows.Foundation.Collections.IVector<string>): boolean;
		remove(key: string): void;
		clear(): void;
		first(
		
	): Windows.Foundation.Collections.IIterator<Windows.Foundation.Collections.IKeyValuePair<string, Windows.Foundation.Collections.IVector<string>>>
	}

	declare export class FileExtensionVector extends undefined$IVector<string> {
		size: number;
		getAt(index: number): string;
		getView(): Windows.Foundation.Collections.IVectorView<string>;
		indexOf(value: string): {
		index: number,
		returnValue: boolean
	};
		setAt(index: number, value: string): void;
		insertAt(index: number, value: string): void;
		removeAt(index: number): void;
		append(value: string): void;
		removeAtEnd(): void;
		clear(): void;
		getMany(startIndex: number): {
		items: string[],
		returnValue: number
	};
		replaceAll(items: string[]): void;
		first(): Windows.Foundation.Collections.IIterator<string>;
		toString(): string;
		toLocaleString(): string;
		concat(...items: string[][]): string[];
		join(seperator: string): string;
		pop(): string;
		push(...items: string[]): void;
		reverse(): string[];
		shift(): string;
		slice(start: number): string[];
		slice(start: number, end: number): string[];
		sort(): string[];
		sort(compareFn: (a: string, b: string) => number): string[];
		splice(start: number): string[];
		splice(start: number, deleteCount: number, ...items: string[]): string[];
		unshift(...items: string[]): number;
		lastIndexOf(searchElement: string): number;
		lastIndexOf(searchElement: string, fromIndex: number): number;
		every(
		callbackfn: (value: string, index: number, array: string[]) => boolean
	): boolean;
		every(
		callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg: any
	): boolean;
		some(
		callbackfn: (value: string, index: number, array: string[]) => boolean
	): boolean;
		some(
		callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg: any
	): boolean;
		forEach(callbackfn: (value: string, index: number, array: string[]) => void): void;
		forEach(
		callbackfn: (value: string, index: number, array: string[]) => void, thisArg: any
	): void;
		map(callbackfn: (value: string, index: number, array: string[]) => any): any[];
		map(
		callbackfn: (value: string, index: number, array: string[]) => any, thisArg: any
	): any[];
		filter(
		callbackfn: (value: string, index: number, array: string[]) => boolean
	): string[];
		filter(
		callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg: any
	): string[];
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: string[]
	) => any
	): any;
		reduce(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: string[]
	) => any, initialValue: any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: string[]
	) => any
	): any;
		reduceRight(
		callbackfn: (
		previousValue: any, currentValue: any, currentIndex: number, array: string[]
	) => any, initialValue: any
	): any;
		length: number
	}

	declare export class FileOpenPicker extends undefined$IFileOpenPicker {
		commitButtonText: string;
		fileTypeFilter: Windows.Foundation.Collections.IVector<string>;
		settingsIdentifier: string;
		suggestedStartLocation: Windows.Storage.Pickers.PickerLocationId;
		viewMode: Windows.Storage.Pickers.PickerViewMode;
		continuationData: Windows.Foundation.Collections.ValueSet;
		pickSingleFileAndContinue(): void;
		pickSingleFileAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>;
		pickMultipleFilesAndContinue(): void;
		pickMultipleFilesAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.Storage.StorageFile>>
	}

	declare export class FileSavePicker extends undefined$IFileSavePicker {
		commitButtonText: string;
		defaultFileExtension: string;
		fileTypeChoices: Windows.Foundation.Collections.IMap<string, Windows.Foundation.Collections.IVector<string>>;
		settingsIdentifier: string;
		suggestedFileName: string;
		suggestedSaveFile: Windows.Storage.StorageFile;
		suggestedStartLocation: Windows.Storage.Pickers.PickerLocationId;
		continuationData: Windows.Foundation.Collections.ValueSet;
		pickSaveFileAndContinue(): void;
		pickSaveFileAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFile>
	}

	declare export class FolderPicker extends undefined$IFolderPicker {
		commitButtonText: string;
		fileTypeFilter: Windows.Foundation.Collections.IVector<string>;
		settingsIdentifier: string;
		suggestedStartLocation: Windows.Storage.Pickers.PickerLocationId;
		viewMode: Windows.Storage.Pickers.PickerViewMode;
		continuationData: Windows.Foundation.Collections.ValueSet;
		pickFolderAndContinue(): void;
		pickSingleFolderAsync(): Windows.Foundation.IAsyncOperation<Windows.Storage.StorageFolder>
	}

	
}

declare module 'Compression' {
		declare export interface ICompressor {
		finishAsync(): Windows.Foundation.IAsyncOperation<boolean>,
		detachStream(): Windows.Storage.Streams.IOutputStream
	}

	declare export interface IDecompressor {
		detachStream(): Windows.Storage.Streams.IInputStream
	}

	declare export interface ICompressorFactory {
		createCompressor(
		underlyingStream: Windows.Storage.Streams.IOutputStream
	): Windows.Storage.Compression.Compressor,
		createCompressorEx(
		underlyingStream: Windows.Storage.Streams.IOutputStream, algorithm: Windows.Storage.Compression.CompressAlgorithm, blockSize: number
	): Windows.Storage.Compression.Compressor
	}

	declare export interface IDecompressorFactory {
		createDecompressor(
		underlyingStream: Windows.Storage.Streams.IInputStream
	): Windows.Storage.Compression.Decompressor
	}

		declare export class Compressor extends undefined$ICompressor {
		constructor(underlyingStream: Windows.Storage.Streams.IOutputStream): this;
		constructor(underlyingStream: Windows.Storage.Streams.IOutputStream, algorithm: Windows.Storage.Compression.CompressAlgorithm, blockSize: number): this;
		finishAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		detachStream(): Windows.Storage.Streams.IOutputStream;
		writeAsync(
		buffer: Windows.Storage.Streams.IBuffer
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		flushAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		dispose(): void;
		close(): void
	}

	declare export class Decompressor extends undefined$IDecompressor {
		constructor(underlyingStream: Windows.Storage.Streams.IInputStream): this;
		detachStream(): Windows.Storage.Streams.IInputStream;
		readAsync(
		buffer: Windows.Storage.Streams.IBuffer, count: number, options: Windows.Storage.Streams.InputStreamOptions
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IBuffer, number>;
		dispose(): void;
		close(): void
	}

	
}

declare module 'Profile' {
		declare export interface IHardwareToken {
		certificate: Windows.Storage.Streams.IBuffer,
		id: Windows.Storage.Streams.IBuffer,
		signature: Windows.Storage.Streams.IBuffer
	}

	declare export interface IHardwareIdentificationStatics {
		getPackageSpecificToken(nonce: Windows.Storage.Streams.IBuffer): Windows.System.Profile.HardwareToken
	}

		declare export class HardwareToken extends undefined$IHardwareToken {
		certificate: Windows.Storage.Streams.IBuffer;
		id: Windows.Storage.Streams.IBuffer;
		signature: Windows.Storage.Streams.IBuffer
	}

	declare export class HardwareIdentification  {
		getPackageSpecificToken(nonce: Windows.Storage.Streams.IBuffer): Windows.System.Profile.HardwareToken
	}

	
}

declare module 'Threading' {
		declare export interface TimerElapsedHandler {
		(timer: Windows.System.Threading.ThreadPoolTimer): void
	}

	declare export interface TimerDestroyedHandler {
		(timer: Windows.System.Threading.ThreadPoolTimer): void
	}

	declare export interface WorkItemHandler {
		(operation: Windows.Foundation.IAsyncAction): void
	}

	declare export interface IThreadPoolStatics {
		runAsync(
		handler: Windows.System.Threading.WorkItemHandler
	): Windows.Foundation.IAsyncAction,
		runAsync(
		handler: Windows.System.Threading.WorkItemHandler, priority: Windows.System.Threading.WorkItemPriority
	): Windows.Foundation.IAsyncAction,
		runAsync(
		handler: Windows.System.Threading.WorkItemHandler, priority: Windows.System.Threading.WorkItemPriority, options: Windows.System.Threading.WorkItemOptions
	): Windows.Foundation.IAsyncAction
	}

	declare export interface IThreadPoolTimer {
		delay: number,
		period: number,
		cancel(): void
	}

	declare export interface IThreadPoolTimerStatics {
		createPeriodicTimer(
		handler: Windows.System.Threading.TimerElapsedHandler, period: number
	): Windows.System.Threading.ThreadPoolTimer,
		createTimer(
		handler: Windows.System.Threading.TimerElapsedHandler, delay: number
	): Windows.System.Threading.ThreadPoolTimer,
		createPeriodicTimer(
		handler: Windows.System.Threading.TimerElapsedHandler, period: number, destroyed: Windows.System.Threading.TimerDestroyedHandler
	): Windows.System.Threading.ThreadPoolTimer,
		createTimer(
		handler: Windows.System.Threading.TimerElapsedHandler, delay: number, destroyed: Windows.System.Threading.TimerDestroyedHandler
	): Windows.System.Threading.ThreadPoolTimer
	}

		declare export class ThreadPoolTimer extends undefined$IThreadPoolTimer {
		delay: number;
		period: number;
		cancel(): void;
		createPeriodicTimer(
		handler: Windows.System.Threading.TimerElapsedHandler, period: number
	): Windows.System.Threading.ThreadPoolTimer;
		createTimer(
		handler: Windows.System.Threading.TimerElapsedHandler, delay: number
	): Windows.System.Threading.ThreadPoolTimer;
		createPeriodicTimer(
		handler: Windows.System.Threading.TimerElapsedHandler, period: number, destroyed: Windows.System.Threading.TimerDestroyedHandler
	): Windows.System.Threading.ThreadPoolTimer;
		createTimer(
		handler: Windows.System.Threading.TimerElapsedHandler, delay: number, destroyed: Windows.System.Threading.TimerDestroyedHandler
	): Windows.System.Threading.ThreadPoolTimer
	}

	declare export class ThreadPool  {
		runAsync(
		handler: Windows.System.Threading.WorkItemHandler
	): Windows.Foundation.IAsyncAction;
		runAsync(
		handler: Windows.System.Threading.WorkItemHandler, priority: Windows.System.Threading.WorkItemPriority
	): Windows.Foundation.IAsyncAction;
		runAsync(
		handler: Windows.System.Threading.WorkItemHandler, priority: Windows.System.Threading.WorkItemPriority, options: Windows.System.Threading.WorkItemOptions
	): Windows.Foundation.IAsyncAction
	}

	
}

declare module 'UserProfile' {
		declare export interface IUserInformationStatics {
		accountPictureChangeEnabled: boolean,
		nameAccessAllowed: boolean,
		getAccountPicture(
		kind: Windows.System.UserProfile.AccountPictureKind
	): Windows.Storage.IStorageFile,
		setAccountPictureAsync(
		image: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.System.UserProfile.SetAccountPictureResult>,
		setAccountPicturesAsync(
		smallImage: Windows.Storage.IStorageFile, largeImage: Windows.Storage.IStorageFile, video: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.System.UserProfile.SetAccountPictureResult>,
		setAccountPictureFromStreamAsync(
		image: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.System.UserProfile.SetAccountPictureResult>,
		setAccountPicturesFromStreamsAsync(
		smallImage: Windows.Storage.Streams.IRandomAccessStream, largeImage: Windows.Storage.Streams.IRandomAccessStream, video: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.System.UserProfile.SetAccountPictureResult>,
		onaccountpicturechanged: any,
		getDisplayNameAsync(): Windows.Foundation.IAsyncOperation<string>,
		getFirstNameAsync(): Windows.Foundation.IAsyncOperation<string>,
		getLastNameAsync(): Windows.Foundation.IAsyncOperation<string>,
		getPrincipalNameAsync(): Windows.Foundation.IAsyncOperation<string>,
		getSessionInitiationProtocolUriAsync(): Windows.Foundation.IAsyncOperation<Windows.Foundation.Uri>,
		getDomainNameAsync(): Windows.Foundation.IAsyncOperation<string>
	}

	declare export interface ILockScreenStatics {
		originalImageFile: Windows.Foundation.Uri,
		getImageStream(): Windows.Storage.Streams.IRandomAccessStream,
		setImageFileAsync(value: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction,
		setImageStreamAsync(
		value: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncAction
	}

	declare export interface IGlobalizationPreferencesStatics {
		calendars: Windows.Foundation.Collections.IVectorView<string>,
		clocks: Windows.Foundation.Collections.IVectorView<string>,
		currencies: Windows.Foundation.Collections.IVectorView<string>,
		homeGeographicRegion: string,
		languages: Windows.Foundation.Collections.IVectorView<string>,
		weekStartsOn: Windows.Globalization.DayOfWeek
	}

		declare export class UserInformation  {
		accountPictureChangeEnabled: boolean;
		nameAccessAllowed: boolean;
		getAccountPicture(
		kind: Windows.System.UserProfile.AccountPictureKind
	): Windows.Storage.IStorageFile;
		setAccountPictureAsync(
		image: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.System.UserProfile.SetAccountPictureResult>;
		setAccountPicturesAsync(
		smallImage: Windows.Storage.IStorageFile, largeImage: Windows.Storage.IStorageFile, video: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<Windows.System.UserProfile.SetAccountPictureResult>;
		setAccountPictureFromStreamAsync(
		image: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.System.UserProfile.SetAccountPictureResult>;
		setAccountPicturesFromStreamsAsync(
		smallImage: Windows.Storage.Streams.IRandomAccessStream, largeImage: Windows.Storage.Streams.IRandomAccessStream, video: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncOperation<Windows.System.UserProfile.SetAccountPictureResult>;
		onaccountpicturechanged: any;
		getDisplayNameAsync(): Windows.Foundation.IAsyncOperation<string>;
		getFirstNameAsync(): Windows.Foundation.IAsyncOperation<string>;
		getLastNameAsync(): Windows.Foundation.IAsyncOperation<string>;
		getPrincipalNameAsync(): Windows.Foundation.IAsyncOperation<string>;
		getSessionInitiationProtocolUriAsync(): Windows.Foundation.IAsyncOperation<Windows.Foundation.Uri>;
		getDomainNameAsync(): Windows.Foundation.IAsyncOperation<string>
	}

	declare export class LockScreen  {
		originalImageFile: Windows.Foundation.Uri;
		getImageStream(): Windows.Storage.Streams.IRandomAccessStream;
		setImageFileAsync(value: Windows.Storage.IStorageFile): Windows.Foundation.IAsyncAction;
		setImageStreamAsync(
		value: Windows.Storage.Streams.IRandomAccessStream
	): Windows.Foundation.IAsyncAction
	}

	declare export class GlobalizationPreferences  {
		calendars: Windows.Foundation.Collections.IVectorView<string>;
		clocks: Windows.Foundation.Collections.IVectorView<string>;
		currencies: Windows.Foundation.Collections.IVectorView<string>;
		homeGeographicRegion: string;
		languages: Windows.Foundation.Collections.IVectorView<string>;
		weekStartsOn: Windows.Globalization.DayOfWeek
	}

	
}

declare module 'System' {
		declare export interface ILauncherUIOptions {
		invocationPoint: Windows.Foundation.Point,
		preferredPlacement: Windows.UI.Popups.Placement,
		selectionRect: Windows.Foundation.Rect
	}

	declare export interface ILauncherOptions {
		contentType: string,
		desiredRemainingView: Windows.UI.ViewManagement.ViewSizePreference,
		displayApplicationPicker: boolean,
		fallbackUri: Windows.Foundation.Uri,
		preferredApplicationDisplayName: string,
		preferredApplicationPackageFamilyName: string,
		treatAsUntrusted: boolean,
		uI: Windows.System.LauncherUIOptions
	}

	declare export interface ILauncherStatics {
		launchFileAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<boolean>,
		launchFileAsync(
		file: Windows.Storage.IStorageFile, options: Windows.System.LauncherOptions
	): Windows.Foundation.IAsyncOperation<boolean>,
		launchUriAsync(uri: Windows.Foundation.Uri): Windows.Foundation.IAsyncOperation<boolean>,
		launchUriAsync(
		uri: Windows.Foundation.Uri, options: Windows.System.LauncherOptions
	): Windows.Foundation.IAsyncOperation<boolean>
	}

		declare export class LauncherUIOptions extends undefined$ILauncherUIOptions {
		invocationPoint: Windows.Foundation.Point;
		preferredPlacement: Windows.UI.Popups.Placement;
		selectionRect: Windows.Foundation.Rect
	}

	declare export class LauncherOptions extends undefined$ILauncherOptions {
		contentType: string;
		desiredRemainingView: Windows.UI.ViewManagement.ViewSizePreference;
		displayApplicationPicker: boolean;
		fallbackUri: Windows.Foundation.Uri;
		preferredApplicationDisplayName: string;
		preferredApplicationPackageFamilyName: string;
		treatAsUntrusted: boolean;
		uI: Windows.System.LauncherUIOptions
	}

	declare export class Launcher  {
		launchFileAsync(
		file: Windows.Storage.IStorageFile
	): Windows.Foundation.IAsyncOperation<boolean>;
		launchFileAsync(
		file: Windows.Storage.IStorageFile, options: Windows.System.LauncherOptions
	): Windows.Foundation.IAsyncOperation<boolean>;
		launchUriAsync(uri: Windows.Foundation.Uri): Windows.Foundation.IAsyncOperation<boolean>;
		launchUriAsync(
		uri: Windows.Foundation.Uri, options: Windows.System.LauncherOptions
	): Windows.Foundation.IAsyncOperation<boolean>
	}

	
}

declare module 'RemoteDesktop' {
		declare export interface IInteractiveSessionStatics {
		isRemote: boolean
	}

		declare export class InteractiveSession  {
		isRemote: boolean
	}

	
}

declare module 'ApplicationSettings' {
		declare export interface ISettingsCommandFactory {
		create(
		settingsCommandId: any, label: string, handler: Windows.UI.Popups.UICommandInvokedHandler
	): Windows.UI.ApplicationSettings.SettingsCommand
	}

	declare export interface ISettingsPaneCommandsRequest {
		applicationCommands: Windows.Foundation.Collections.IVector<Windows.UI.ApplicationSettings.SettingsCommand>
	}

	declare export interface ISettingsPaneCommandsRequestedEventArgs {
		request: Windows.UI.ApplicationSettings.SettingsPaneCommandsRequest
	}

	declare export interface ISettingsPaneStatics {
		edge: Windows.UI.ApplicationSettings.SettingsEdgeLocation,
		getForCurrentView(): Windows.UI.ApplicationSettings.SettingsPane,
		show(): void
	}

	declare export interface ISettingsPane {
		oncommandsrequested: any
	}

		declare export class SettingsCommand extends undefined$IUICommand {
		constructor(settingsCommandId: any, label: string, handler: Windows.UI.Popups.UICommandInvokedHandler): this;
		id: any;
		invoked: Windows.UI.Popups.UICommandInvokedHandler;
		label: string
	}

	declare export class SettingsPaneCommandsRequest extends undefined$ISettingsPaneCommandsRequest {
		applicationCommands: Windows.Foundation.Collections.IVector<Windows.UI.ApplicationSettings.SettingsCommand>
	}

	declare export class SettingsPaneCommandsRequestedEventArgs extends undefined$ISettingsPaneCommandsRequestedEventArgs {
		request: Windows.UI.ApplicationSettings.SettingsPaneCommandsRequest
	}

	declare export class SettingsPane extends undefined$ISettingsPane {
		oncommandsrequested: any;
		edge: Windows.UI.ApplicationSettings.SettingsEdgeLocation;
		getForCurrentView(): Windows.UI.ApplicationSettings.SettingsPane;
		show(): void
	}

	
}

declare module 'ViewManagement' {
		declare export interface IInputPaneVisibilityEventArgs {
		ensuredFocusedElementInView: boolean,
		occludedRect: Windows.Foundation.Rect
	}

	declare export interface IInputPane {
		occludedRect: Windows.Foundation.Rect,
		onshowing: any,
		onhiding: any
	}

	declare export interface IInputPaneStatics {
		getForCurrentView(): Windows.UI.ViewManagement.InputPane
	}

	declare export interface IAccessibilitySettings {
		highContrast: boolean,
		highContrastScheme: string,
		onhighcontrastchanged: any
	}

	declare export interface IUISettings {
		animationsEnabled: boolean,
		caretBlinkRate: number,
		caretBrowsingEnabled: boolean,
		caretWidth: number,
		cursorSize: Windows.Foundation.Size,
		doubleClickTime: number,
		handPreference: Windows.UI.ViewManagement.HandPreference,
		messageDuration: number,
		mouseHoverTime: number,
		scrollBarArrowSize: Windows.Foundation.Size,
		scrollBarSize: Windows.Foundation.Size,
		scrollBarThumbBoxSize: Windows.Foundation.Size,
		uIElementColor(desiredElement: Windows.UI.ViewManagement.UIElementType): Windows.UI.Color
	}

		declare export class ApplicationView  {
		getForCurrentView(): ApplicationView;
		tryUnsnap(): boolean;
		value: Windows.UI.ViewManagement.ApplicationViewState;
		terminateAppOnFinalViewClose: boolean;
		orientation: ApplicationViewOrientation;
		title: string;
		isScreenCaptureEnabled: boolean;
		isOnLockScreen: boolean;
		isFullScreen: boolean;
		id: number;
		adjacentToRightDisplayEdge: boolean;
		adjacentToLeftDisplayEdge: number;
		titleBar: ApplicationViewTitleBar
	}

	declare export class InputPaneVisibilityEventArgs extends undefined$IInputPaneVisibilityEventArgs {
		ensuredFocusedElementInView: boolean;
		occludedRect: Windows.Foundation.Rect
	}

	declare export class InputPane extends undefined$IInputPane {
		occludedRect: Windows.Foundation.Rect;
		onshowing: any;
		onhiding: any;
		getForCurrentView(): Windows.UI.ViewManagement.InputPane
	}

	declare export class AccessibilitySettings extends undefined$IAccessibilitySettings {
		highContrast: boolean;
		highContrastScheme: string;
		onhighcontrastchanged: any
	}

	declare export class UISettings extends undefined$IUISettings {
		animationsEnabled: boolean;
		caretBlinkRate: number;
		caretBrowsingEnabled: boolean;
		caretWidth: number;
		cursorSize: Windows.Foundation.Size;
		doubleClickTime: number;
		handPreference: Windows.UI.ViewManagement.HandPreference;
		messageDuration: number;
		mouseHoverTime: number;
		scrollBarArrowSize: Windows.Foundation.Size;
		scrollBarSize: Windows.Foundation.Size;
		scrollBarThumbBoxSize: Windows.Foundation.Size;
		uIElementColor(desiredElement: Windows.UI.ViewManagement.UIElementType): Windows.UI.Color
	}

	declare export class ApplicationViewTitleBar  {
		backgroundColor: Color;
		buttonBackgroundColor: Color;
		buttonForegroundColor: Color;
		buttonHoverBackgroundColor: Color;
		buttonHoverForegroundColor: Color;
		buttonInactiveBackgroundColor: Color;
		buttonInactiveForegroundColor: Color;
		buttonPressedBackgroundColor: Color;
		buttonPressedForegroundColor: Color;
		foregroundColor: Color;
		inactiveBackgroundColor: Color;
		inactiveForegroundColor: Color
	}

	
}

declare module 'Popups' {
		declare export interface IMessageDialog {
		cancelCommandIndex: number,
		commands: Windows.Foundation.Collections.IVector<Windows.UI.Popups.IUICommand>,
		content: string,
		defaultCommandIndex: number,
		options: Windows.UI.Popups.MessageDialogOptions,
		title: string,
		showAsync(): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>
	}

	declare export interface IMessageDialogFactory {
		create(content: string): Windows.UI.Popups.MessageDialog,
		createWithTitle(content: string, title: string): Windows.UI.Popups.MessageDialog
	}

	declare export interface UICommandInvokedHandler {
		(command: Windows.UI.Popups.IUICommand): void
	}

	declare export interface IUICommand {
		id: any,
		invoked: Windows.UI.Popups.UICommandInvokedHandler,
		label: string
	}

	declare export interface IUICommandFactory {
		create(label: string): Windows.UI.Popups.UICommand,
		createWithHandler(
		label: string, action: Windows.UI.Popups.UICommandInvokedHandler
	): Windows.UI.Popups.UICommand,
		createWithHandlerAndId(
		label: string, action: Windows.UI.Popups.UICommandInvokedHandler, commandId: any
	): Windows.UI.Popups.UICommand
	}

	declare export interface IPopupMenu {
		commands: Windows.Foundation.Collections.IVector<Windows.UI.Popups.IUICommand>,
		showAsync(
		invocationPoint: Windows.Foundation.Point
	): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>,
		showForSelectionAsync(
		selection: Windows.Foundation.Rect
	): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>,
		showForSelectionAsync(
		selection: Windows.Foundation.Rect, preferredPlacement: Windows.UI.Popups.Placement
	): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>
	}

		declare export class MessageDialog extends undefined$IMessageDialog {
		constructor(content: string): this;
		constructor(content: string, title: string): this;
		cancelCommandIndex: number;
		commands: Windows.Foundation.Collections.IVector<Windows.UI.Popups.IUICommand>;
		content: string;
		defaultCommandIndex: number;
		options: Windows.UI.Popups.MessageDialogOptions;
		title: string;
		showAsync(): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>
	}

	declare export class UICommand extends undefined$IUICommand {
		constructor(label: string): this;
		constructor(label: string, action: Windows.UI.Popups.UICommandInvokedHandler): this;
		constructor(label: string, action: Windows.UI.Popups.UICommandInvokedHandler, commandId: any): this;
		constructor(): this;
		id: any;
		invoked: Windows.UI.Popups.UICommandInvokedHandler;
		label: string
	}

	declare export class UICommandSeparator extends undefined$IUICommand {
		id: any;
		invoked: Windows.UI.Popups.UICommandInvokedHandler;
		label: string
	}

	declare export class PopupMenu extends undefined$IPopupMenu {
		commands: Windows.Foundation.Collections.IVector<Windows.UI.Popups.IUICommand>;
		showAsync(
		invocationPoint: Windows.Foundation.Point
	): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>;
		showForSelectionAsync(
		selection: Windows.Foundation.Rect
	): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>;
		showForSelectionAsync(
		selection: Windows.Foundation.Rect, preferredPlacement: Windows.UI.Popups.Placement
	): Windows.Foundation.IAsyncOperation<Windows.UI.Popups.IUICommand>
	}

	
}

declare module 'StartScreen' {
		declare export interface ISecondaryTile {
		arguments: string,
		backgroundColor: Windows.UI.Color,
		displayName: string,
		foregroundText: Windows.UI.StartScreen.ForegroundText,
		lockScreenBadgeLogo: Windows.Foundation.Uri,
		lockScreenDisplayBadgeAndTileText: boolean,
		logo: Windows.Foundation.Uri,
		shortName: string,
		smallLogo: Windows.Foundation.Uri,
		tileId: string,
		tileOptions: Windows.UI.StartScreen.TileOptions,
		wideLogo: Windows.Foundation.Uri,
		requestCreateAsync(): Windows.Foundation.IAsyncOperation<boolean>,
		requestCreateAsync(
		invocationPoint: Windows.Foundation.Point
	): Windows.Foundation.IAsyncOperation<boolean>,
		requestCreateForSelectionAsync(
		selection: Windows.Foundation.Rect
	): Windows.Foundation.IAsyncOperation<boolean>,
		requestCreateForSelectionAsync(
		selection: Windows.Foundation.Rect, preferredPlacement: Windows.UI.Popups.Placement
	): Windows.Foundation.IAsyncOperation<boolean>,
		requestDeleteAsync(): Windows.Foundation.IAsyncOperation<boolean>,
		requestDeleteAsync(
		invocationPoint: Windows.Foundation.Point
	): Windows.Foundation.IAsyncOperation<boolean>,
		requestDeleteForSelectionAsync(
		selection: Windows.Foundation.Rect
	): Windows.Foundation.IAsyncOperation<boolean>,
		requestDeleteForSelectionAsync(
		selection: Windows.Foundation.Rect, preferredPlacement: Windows.UI.Popups.Placement
	): Windows.Foundation.IAsyncOperation<boolean>,
		updateAsync(): Windows.Foundation.IAsyncOperation<boolean>
	}

	declare export interface ISecondaryTileFactory {
		createTile(
		tileId: string, shortName: string, displayName: string, arguments: string, tileOptions: Windows.UI.StartScreen.TileOptions, logoReference: Windows.Foundation.Uri
	): Windows.UI.StartScreen.SecondaryTile,
		createWideTile(
		tileId: string, shortName: string, displayName: string, arguments: string, tileOptions: Windows.UI.StartScreen.TileOptions, logoReference: Windows.Foundation.Uri, wideLogoReference: Windows.Foundation.Uri
	): Windows.UI.StartScreen.SecondaryTile,
		createWithId(tileId: string): Windows.UI.StartScreen.SecondaryTile
	}

	declare export interface ISecondaryTileStatics {
		exists(tileId: string): boolean,
		findAllAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.StartScreen.SecondaryTile>>,
		findAllAsync(
		applicationId: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.StartScreen.SecondaryTile>>,
		findAllForPackageAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.StartScreen.SecondaryTile>>
	}

		declare export class SecondaryTile extends undefined$ISecondaryTile {
		constructor(tileId: string, shortName: string, displayName: string, args: string, tileOptions: Windows.UI.StartScreen.TileOptions, logoReference: Windows.Foundation.Uri): this;
		constructor(tileId: string, shortName: string, displayName: string, args: string, tileOptions: Windows.UI.StartScreen.TileOptions, logoReference: Windows.Foundation.Uri, wideLogoReference: Windows.Foundation.Uri): this;
		constructor(tileId: string): this;
		constructor(): this;
		arguments: string;
		backgroundColor: Windows.UI.Color;
		displayName: string;
		foregroundText: Windows.UI.StartScreen.ForegroundText;
		lockScreenBadgeLogo: Windows.Foundation.Uri;
		lockScreenDisplayBadgeAndTileText: boolean;
		logo: Windows.Foundation.Uri;
		shortName: string;
		smallLogo: Windows.Foundation.Uri;
		tileId: string;
		tileOptions: Windows.UI.StartScreen.TileOptions;
		wideLogo: Windows.Foundation.Uri;
		requestCreateAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		requestCreateAsync(
		invocationPoint: Windows.Foundation.Point
	): Windows.Foundation.IAsyncOperation<boolean>;
		requestCreateForSelectionAsync(
		selection: Windows.Foundation.Rect
	): Windows.Foundation.IAsyncOperation<boolean>;
		requestCreateForSelectionAsync(
		selection: Windows.Foundation.Rect, preferredPlacement: Windows.UI.Popups.Placement
	): Windows.Foundation.IAsyncOperation<boolean>;
		requestDeleteAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		requestDeleteAsync(
		invocationPoint: Windows.Foundation.Point
	): Windows.Foundation.IAsyncOperation<boolean>;
		requestDeleteForSelectionAsync(
		selection: Windows.Foundation.Rect
	): Windows.Foundation.IAsyncOperation<boolean>;
		requestDeleteForSelectionAsync(
		selection: Windows.Foundation.Rect, preferredPlacement: Windows.UI.Popups.Placement
	): Windows.Foundation.IAsyncOperation<boolean>;
		updateAsync(): Windows.Foundation.IAsyncOperation<boolean>;
		exists(tileId: string): boolean;
		findAllAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.StartScreen.SecondaryTile>>;
		findAllAsync(
		applicationId: string
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.StartScreen.SecondaryTile>>;
		findAllForPackageAsync(
		
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.StartScreen.SecondaryTile>>
	}

	
}

declare module 'Text' {
		declare export interface ITextConstantsStatics {
		autoColor: Windows.UI.Color,
		maxUnitCount: number,
		minUnitCount: number,
		undefinedColor: Windows.UI.Color,
		undefinedFloatValue: number,
		undefinedFontStretch: Windows.UI.Text.FontStretch,
		undefinedFontStyle: Windows.UI.Text.FontStyle,
		undefinedInt32Value: number
	}

	declare export interface ITextDocument {
		caretType: Windows.UI.Text.CaretType,
		defaultTabStop: number,
		selection: Windows.UI.Text.ITextSelection,
		undoLimit: number,
		canCopy(): boolean,
		canPaste(): boolean,
		canRedo(): boolean,
		canUndo(): boolean,
		applyDisplayUpdates(): number,
		batchDisplayUpdates(): number,
		beginUndoGroup(): void,
		endUndoGroup(): void,
		getDefaultCharacterFormat(): Windows.UI.Text.ITextCharacterFormat,
		getDefaultParagraphFormat(): Windows.UI.Text.ITextParagraphFormat,
		getRange(startPosition: number, endPosition: number): Windows.UI.Text.ITextRange,
		getRangeFromPoint(
		point: Windows.Foundation.Point, options: Windows.UI.Text.PointOptions
	): Windows.UI.Text.ITextRange,
		getText(options: Windows.UI.Text.TextGetOptions): string,
		loadFromStream(
		options: Windows.UI.Text.TextSetOptions, value: Windows.Storage.Streams.IRandomAccessStream
	): void,
		redo(): void,
		saveToStream(
		options: Windows.UI.Text.TextGetOptions, value: Windows.Storage.Streams.IRandomAccessStream
	): void,
		setDefaultCharacterFormat(value: Windows.UI.Text.ITextCharacterFormat): void,
		setDefaultParagraphFormat(value: Windows.UI.Text.ITextParagraphFormat): void,
		setText(options: Windows.UI.Text.TextSetOptions, value: string): void,
		undo(): void
	}

	declare export interface ITextRange {
		character: string,
		characterFormat: Windows.UI.Text.ITextCharacterFormat,
		endPosition: number,
		formattedText: Windows.UI.Text.ITextRange,
		gravity: Windows.UI.Text.RangeGravity,
		length: number,
		link: string,
		paragraphFormat: Windows.UI.Text.ITextParagraphFormat,
		startPosition: number,
		storyLength: number,
		text: string,
		canPaste(format: number): boolean,
		changeCase(value: Windows.UI.Text.LetterCase): void,
		collapse(value: boolean): void,
		copy(): void,
		cut(): void,
		delete_(unit: Windows.UI.Text.TextRangeUnit, count: number): number,
		endOf(unit: Windows.UI.Text.TextRangeUnit, extend: boolean): number,
		expand(unit: Windows.UI.Text.TextRangeUnit): number,
		findText(
		value: string, scanLength: number, options: Windows.UI.Text.FindOptions
	): number,
		getCharacterUtf32(offset: number): number,
		getClone(): Windows.UI.Text.ITextRange,
		getIndex(unit: Windows.UI.Text.TextRangeUnit): number,
		getPoint(
		horizontalAlign: Windows.UI.Text.HorizontalCharacterAlignment, verticalAlign: Windows.UI.Text.VerticalCharacterAlignment, options: Windows.UI.Text.PointOptions
	): Windows.Foundation.Point,
		getRect(
		options: Windows.UI.Text.PointOptions
	): {
		rect: Windows.Foundation.Rect,
		hit: number
	},
		getText(options: Windows.UI.Text.TextGetOptions): string,
		getTextViaStream(
		options: Windows.UI.Text.TextGetOptions, value: Windows.Storage.Streams.IRandomAccessStream
	): void,
		inRange(range: Windows.UI.Text.ITextRange): boolean,
		insertImage(
		width: number, height: number, ascent: number, verticalAlign: Windows.UI.Text.VerticalCharacterAlignment, alternateText: string, value: Windows.Storage.Streams.IRandomAccessStream
	): void,
		inStory(range: Windows.UI.Text.ITextRange): boolean,
		isEqual(range: Windows.UI.Text.ITextRange): boolean,
		move(unit: Windows.UI.Text.TextRangeUnit, count: number): number,
		moveEnd(unit: Windows.UI.Text.TextRangeUnit, count: number): number,
		moveStart(unit: Windows.UI.Text.TextRangeUnit, count: number): number,
		paste(format: number): void,
		scrollIntoView(value: Windows.UI.Text.PointOptions): void,
		matchSelection(): void,
		setIndex(unit: Windows.UI.Text.TextRangeUnit, index: number, extend: boolean): void,
		setPoint(
		point: Windows.Foundation.Point, options: Windows.UI.Text.PointOptions, extend: boolean
	): void,
		setRange(startPosition: number, endPosition: number): void,
		setText(options: Windows.UI.Text.TextSetOptions, value: string): void,
		setTextViaStream(
		options: Windows.UI.Text.TextSetOptions, value: Windows.Storage.Streams.IRandomAccessStream
	): void,
		startOf(unit: Windows.UI.Text.TextRangeUnit, extend: boolean): number
	}

	declare export interface ITextSelection {
		options: Windows.UI.Text.SelectionOptions,
		type: Windows.UI.Text.SelectionType,
		endKey(unit: Windows.UI.Text.TextRangeUnit, extend: boolean): number,
		homeKey(unit: Windows.UI.Text.TextRangeUnit, extend: boolean): number,
		moveDown(unit: Windows.UI.Text.TextRangeUnit, count: number, extend: boolean): number,
		moveLeft(unit: Windows.UI.Text.TextRangeUnit, count: number, extend: boolean): number,
		moveRight(unit: Windows.UI.Text.TextRangeUnit, count: number, extend: boolean): number,
		moveUp(unit: Windows.UI.Text.TextRangeUnit, count: number, extend: boolean): number,
		typeText(value: string): void
	}

	declare export interface ITextCharacterFormat {
		allCaps: Windows.UI.Text.FormatEffect,
		backgroundColor: Windows.UI.Color,
		bold: Windows.UI.Text.FormatEffect,
		fontStretch: Windows.UI.Text.FontStretch,
		fontStyle: Windows.UI.Text.FontStyle,
		foregroundColor: Windows.UI.Color,
		hidden: Windows.UI.Text.FormatEffect,
		italic: Windows.UI.Text.FormatEffect,
		kerning: number,
		languageTag: string,
		linkType: Windows.UI.Text.LinkType,
		name: string,
		outline: Windows.UI.Text.FormatEffect,
		position: number,
		protectedText: Windows.UI.Text.FormatEffect,
		size: number,
		smallCaps: Windows.UI.Text.FormatEffect,
		spacing: number,
		strikethrough: Windows.UI.Text.FormatEffect,
		subscript: Windows.UI.Text.FormatEffect,
		superscript: Windows.UI.Text.FormatEffect,
		textScript: Windows.UI.Text.TextScript,
		underline: Windows.UI.Text.UnderlineType,
		weight: number,
		setClone(value: Windows.UI.Text.ITextCharacterFormat): void,
		getClone(): Windows.UI.Text.ITextCharacterFormat,
		isEqual(format: Windows.UI.Text.ITextCharacterFormat): boolean
	}

	declare export interface ITextParagraphFormat {
		alignment: Windows.UI.Text.ParagraphAlignment,
		firstLineIndent: number,
		keepTogether: Windows.UI.Text.FormatEffect,
		keepWithNext: Windows.UI.Text.FormatEffect,
		leftIndent: number,
		lineSpacing: number,
		lineSpacingRule: Windows.UI.Text.LineSpacingRule,
		listAlignment: Windows.UI.Text.MarkerAlignment,
		listLevelIndex: number,
		listStart: number,
		listStyle: Windows.UI.Text.MarkerStyle,
		listTab: number,
		listType: Windows.UI.Text.MarkerType,
		noLineNumber: Windows.UI.Text.FormatEffect,
		pageBreakBefore: Windows.UI.Text.FormatEffect,
		rightIndent: number,
		rightToLeft: Windows.UI.Text.FormatEffect,
		spaceAfter: number,
		spaceBefore: number,
		style: Windows.UI.Text.ParagraphStyle,
		tabCount: number,
		widowControl: Windows.UI.Text.FormatEffect,
		addTab(
		position: number, align: Windows.UI.Text.TabAlignment, leader: Windows.UI.Text.TabLeader
	): void,
		clearAllTabs(): void,
		deleteTab(position: number): void,
		getClone(): Windows.UI.Text.ITextParagraphFormat,
		getTab(
		index: number
	): {
		position: number,
		align: Windows.UI.Text.TabAlignment,
		leader: Windows.UI.Text.TabLeader
	},
		isEqual(format: Windows.UI.Text.ITextParagraphFormat): boolean,
		setClone(format: Windows.UI.Text.ITextParagraphFormat): void,
		setIndents(start: number, left: number, right: number): void,
		setLineSpacing(rule: Windows.UI.Text.LineSpacingRule, spacing: number): void
	}

	declare export interface FontWeight {
		weight: number
	}

	declare export interface IFontWeights {
		
	}

	declare export interface IFontWeightsStatics {
		black: Windows.UI.Text.FontWeight,
		bold: Windows.UI.Text.FontWeight,
		extraBlack: Windows.UI.Text.FontWeight,
		extraBold: Windows.UI.Text.FontWeight,
		extraLight: Windows.UI.Text.FontWeight,
		light: Windows.UI.Text.FontWeight,
		medium: Windows.UI.Text.FontWeight,
		normal: Windows.UI.Text.FontWeight,
		semiBold: Windows.UI.Text.FontWeight,
		semiLight: Windows.UI.Text.FontWeight,
		thin: Windows.UI.Text.FontWeight
	}

		declare export class TextConstants  {
		autoColor: Windows.UI.Color;
		maxUnitCount: number;
		minUnitCount: number;
		undefinedColor: Windows.UI.Color;
		undefinedFloatValue: number;
		undefinedFontStretch: Windows.UI.Text.FontStretch;
		undefinedFontStyle: Windows.UI.Text.FontStyle;
		undefinedInt32Value: number
	}

	declare export class FontWeights extends undefined$IFontWeights {
		black: Windows.UI.Text.FontWeight;
		bold: Windows.UI.Text.FontWeight;
		extraBlack: Windows.UI.Text.FontWeight;
		extraBold: Windows.UI.Text.FontWeight;
		extraLight: Windows.UI.Text.FontWeight;
		light: Windows.UI.Text.FontWeight;
		medium: Windows.UI.Text.FontWeight;
		normal: Windows.UI.Text.FontWeight;
		semiBold: Windows.UI.Text.FontWeight;
		semiLight: Windows.UI.Text.FontWeight;
		thin: Windows.UI.Text.FontWeight
	}

	
}

declare module 'AnimationMetrics' {
		declare export interface IPropertyAnimation {
		control1: Windows.Foundation.Point,
		control2: Windows.Foundation.Point,
		delay: number,
		duration: number,
		type: Windows.UI.Core.AnimationMetrics.PropertyAnimationType
	}

	declare export interface IScaleAnimation {
		finalScaleX: number,
		finalScaleY: number,
		initialScaleX: number,
		initialScaleY: number,
		normalizedOrigin: Windows.Foundation.Point
	}

	declare export interface IOpacityAnimation {
		finalOpacity: number,
		initialOpacity: number
	}

	declare export interface IAnimationDescription {
		animations: Windows.Foundation.Collections.IVectorView<Windows.UI.Core.AnimationMetrics.IPropertyAnimation>,
		delayLimit: number,
		staggerDelay: number,
		staggerDelayFactor: number,
		zOrder: number
	}

	declare export interface IAnimationDescriptionFactory {
		createInstance(
		effect: Windows.UI.Core.AnimationMetrics.AnimationEffect, target: Windows.UI.Core.AnimationMetrics.AnimationEffectTarget
	): Windows.UI.Core.AnimationMetrics.AnimationDescription
	}

		declare export class AnimationDescription extends undefined$IAnimationDescription {
		constructor(effect: Windows.UI.Core.AnimationMetrics.AnimationEffect, target: Windows.UI.Core.AnimationMetrics.AnimationEffectTarget): this;
		animations: Windows.Foundation.Collections.IVectorView<Windows.UI.Core.AnimationMetrics.IPropertyAnimation>;
		delayLimit: number;
		staggerDelay: number;
		staggerDelayFactor: number;
		zOrder: number
	}

	declare export class PropertyAnimation extends undefined$IPropertyAnimation {
		control1: Windows.Foundation.Point;
		control2: Windows.Foundation.Point;
		delay: number;
		duration: number;
		type: Windows.UI.Core.AnimationMetrics.PropertyAnimationType
	}

	declare export class ScaleAnimation extends undefined$IScaleAnimation {
		finalScaleX: number;
		finalScaleY: number;
		initialScaleX: number;
		initialScaleY: number;
		normalizedOrigin: Windows.Foundation.Point;
		control1: Windows.Foundation.Point;
		control2: Windows.Foundation.Point;
		delay: number;
		duration: number;
		type: Windows.UI.Core.AnimationMetrics.PropertyAnimationType
	}

	declare export class TranslationAnimation extends undefined$IPropertyAnimation {
		control1: Windows.Foundation.Point;
		control2: Windows.Foundation.Point;
		delay: number;
		duration: number;
		type: Windows.UI.Core.AnimationMetrics.PropertyAnimationType
	}

	declare export class OpacityAnimation extends undefined$IOpacityAnimation {
		finalOpacity: number;
		initialOpacity: number;
		control1: Windows.Foundation.Point;
		control2: Windows.Foundation.Point;
		delay: number;
		duration: number;
		type: Windows.UI.Core.AnimationMetrics.PropertyAnimationType
	}

	
}

declare module 'Inking' {
		declare export interface IInkDrawingAttributes {
		color: Windows.UI.Color,
		fitToCurve: boolean,
		ignorePressure: boolean,
		penTip: Windows.UI.Input.Inking.PenTipShape,
		size: Windows.Foundation.Size
	}

	declare export interface IInkStrokeRenderingSegment {
		bezierControlPoint1: Windows.Foundation.Point,
		bezierControlPoint2: Windows.Foundation.Point,
		position: Windows.Foundation.Point,
		pressure: number,
		tiltX: number,
		tiltY: number,
		twist: number
	}

	declare export interface IInkStroke {
		boundingRect: Windows.Foundation.Rect,
		drawingAttributes: Windows.UI.Input.Inking.InkDrawingAttributes,
		recognized: boolean,
		selected: boolean,
		getRenderingSegments(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkStrokeRenderingSegment>,
		clone(): Windows.UI.Input.Inking.InkStroke
	}

	declare export interface IInkStrokeBuilder {
		beginStroke(pointerPoint: Windows.UI.Input.PointerPoint): void,
		appendToStroke(pointerPoint: Windows.UI.Input.PointerPoint): Windows.UI.Input.PointerPoint,
		endStroke(pointerPoint: Windows.UI.Input.PointerPoint): Windows.UI.Input.Inking.InkStroke,
		createStroke(
		points: Windows.Foundation.Collections.IIterable<Windows.Foundation.Point>
	): Windows.UI.Input.Inking.InkStroke,
		setDefaultDrawingAttributes(drawingAttributes: Windows.UI.Input.Inking.InkDrawingAttributes): void
	}

	declare export interface IInkRecognitionResult {
		boundingRect: Windows.Foundation.Rect,
		getTextCandidates(): Windows.Foundation.Collections.IVectorView<string>,
		getStrokes(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkStroke>
	}

	declare export interface IInkStrokeContainer {
		boundingRect: Windows.Foundation.Rect,
		addStroke(stroke: Windows.UI.Input.Inking.InkStroke): void,
		deleteSelected(): Windows.Foundation.Rect,
		moveSelected(translation: Windows.Foundation.Point): Windows.Foundation.Rect,
		selectWithPolyLine(
		polyline: Windows.Foundation.Collections.IIterable<Windows.Foundation.Point>
	): Windows.Foundation.Rect,
		selectWithLine(
		from: Windows.Foundation.Point, to: Windows.Foundation.Point
	): Windows.Foundation.Rect,
		copySelectedToClipboard(): void,
		pasteFromClipboard(position: Windows.Foundation.Point): Windows.Foundation.Rect,
		canPasteFromClipboard(): boolean,
		loadAsync(
		inputStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncActionWithProgress<number>,
		saveAsync(
		outputStream: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>,
		updateRecognitionResults(
		recognitionResults: Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>
	): void,
		getStrokes(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkStroke>,
		getRecognitionResults(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>
	}

	declare export interface IInkRecognizer {
		name: string
	}

	declare export interface IInkRecognizerContainer {
		setDefaultRecognizer(recognizer: Windows.UI.Input.Inking.InkRecognizer): void,
		recognizeAsync(
		strokeCollection: Windows.UI.Input.Inking.InkStrokeContainer, recognitionTarget: Windows.UI.Input.Inking.InkRecognitionTarget
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>>,
		getRecognizers(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognizer>
	}

	declare export interface IInkManager {
		mode: Windows.UI.Input.Inking.InkManipulationMode,
		processPointerDown(pointerPoint: Windows.UI.Input.PointerPoint): void,
		processPointerUpdate(pointerPoint: Windows.UI.Input.PointerPoint): any,
		processPointerUp(pointerPoint: Windows.UI.Input.PointerPoint): Windows.Foundation.Rect,
		setDefaultDrawingAttributes(drawingAttributes: Windows.UI.Input.Inking.InkDrawingAttributes): void,
		recognizeAsync(
		strokeCollection: Windows.UI.Input.Inking.InkStrokeContainer, recognitionTarget: Windows.UI.Input.Inking.InkRecognitionTarget
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>>,
		recognizeAsync(
		recognitionTarget: Windows.UI.Input.Inking.InkRecognitionTarget
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>>
	}

		declare export class InkDrawingAttributes extends undefined$IInkDrawingAttributes {
		color: Windows.UI.Color;
		fitToCurve: boolean;
		ignorePressure: boolean;
		penTip: Windows.UI.Input.Inking.PenTipShape;
		size: Windows.Foundation.Size
	}

	declare export class InkStrokeRenderingSegment extends undefined$IInkStrokeRenderingSegment {
		bezierControlPoint1: Windows.Foundation.Point;
		bezierControlPoint2: Windows.Foundation.Point;
		position: Windows.Foundation.Point;
		pressure: number;
		tiltX: number;
		tiltY: number;
		twist: number
	}

	declare export class InkStroke extends undefined$IInkStroke {
		boundingRect: Windows.Foundation.Rect;
		drawingAttributes: Windows.UI.Input.Inking.InkDrawingAttributes;
		recognized: boolean;
		selected: boolean;
		getRenderingSegments(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkStrokeRenderingSegment>;
		clone(): Windows.UI.Input.Inking.InkStroke
	}

	declare export class InkStrokeBuilder extends undefined$IInkStrokeBuilder {
		beginStroke(pointerPoint: Windows.UI.Input.PointerPoint): void;
		appendToStroke(pointerPoint: Windows.UI.Input.PointerPoint): Windows.UI.Input.PointerPoint;
		endStroke(pointerPoint: Windows.UI.Input.PointerPoint): Windows.UI.Input.Inking.InkStroke;
		createStroke(
		points: Windows.Foundation.Collections.IIterable<Windows.Foundation.Point>
	): Windows.UI.Input.Inking.InkStroke;
		setDefaultDrawingAttributes(drawingAttributes: Windows.UI.Input.Inking.InkDrawingAttributes): void
	}

	declare export class InkRecognitionResult extends undefined$IInkRecognitionResult {
		boundingRect: Windows.Foundation.Rect;
		getTextCandidates(): Windows.Foundation.Collections.IVectorView<string>;
		getStrokes(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkStroke>
	}

	declare export class InkStrokeContainer extends undefined$IInkStrokeContainer {
		boundingRect: Windows.Foundation.Rect;
		addStroke(stroke: Windows.UI.Input.Inking.InkStroke): void;
		deleteSelected(): Windows.Foundation.Rect;
		moveSelected(translation: Windows.Foundation.Point): Windows.Foundation.Rect;
		selectWithPolyLine(
		polyline: Windows.Foundation.Collections.IIterable<Windows.Foundation.Point>
	): Windows.Foundation.Rect;
		selectWithLine(
		from: Windows.Foundation.Point, to: Windows.Foundation.Point
	): Windows.Foundation.Rect;
		copySelectedToClipboard(): void;
		pasteFromClipboard(position: Windows.Foundation.Point): Windows.Foundation.Rect;
		canPasteFromClipboard(): boolean;
		loadAsync(
		inputStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncActionWithProgress<number>;
		saveAsync(
		outputStream: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		updateRecognitionResults(
		recognitionResults: Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>
	): void;
		getStrokes(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkStroke>;
		getRecognitionResults(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>
	}

	declare export class InkRecognizer extends undefined$IInkRecognizer {
		name: string
	}

	declare export class InkRecognizerContainer extends undefined$IInkRecognizerContainer {
		setDefaultRecognizer(recognizer: Windows.UI.Input.Inking.InkRecognizer): void;
		recognizeAsync(
		strokeCollection: Windows.UI.Input.Inking.InkStrokeContainer, recognitionTarget: Windows.UI.Input.Inking.InkRecognitionTarget
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>>;
		getRecognizers(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognizer>
	}

	declare export class InkManager extends undefined$IInkManager {
		mode: Windows.UI.Input.Inking.InkManipulationMode;
		boundingRect: Windows.Foundation.Rect;
		processPointerDown(pointerPoint: Windows.UI.Input.PointerPoint): void;
		processPointerUpdate(pointerPoint: Windows.UI.Input.PointerPoint): any;
		processPointerUp(pointerPoint: Windows.UI.Input.PointerPoint): Windows.Foundation.Rect;
		setDefaultDrawingAttributes(drawingAttributes: Windows.UI.Input.Inking.InkDrawingAttributes): void;
		recognizeAsync(
		recognitionTarget: Windows.UI.Input.Inking.InkRecognitionTarget
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>>;
		addStroke(stroke: Windows.UI.Input.Inking.InkStroke): void;
		deleteSelected(): Windows.Foundation.Rect;
		moveSelected(translation: Windows.Foundation.Point): Windows.Foundation.Rect;
		selectWithPolyLine(
		polyline: Windows.Foundation.Collections.IIterable<Windows.Foundation.Point>
	): Windows.Foundation.Rect;
		selectWithLine(
		from: Windows.Foundation.Point, to: Windows.Foundation.Point
	): Windows.Foundation.Rect;
		copySelectedToClipboard(): void;
		pasteFromClipboard(position: Windows.Foundation.Point): Windows.Foundation.Rect;
		canPasteFromClipboard(): boolean;
		loadAsync(
		inputStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncActionWithProgress<number>;
		saveAsync(
		outputStream: Windows.Storage.Streams.IOutputStream
	): Windows.Foundation.IAsyncOperationWithProgress<number, number>;
		updateRecognitionResults(
		recognitionResults: Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>
	): void;
		getStrokes(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkStroke>;
		getRecognitionResults(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>;
		setDefaultRecognizer(recognizer: Windows.UI.Input.Inking.InkRecognizer): void;
		recognizeAsync(
		strokeCollection: Windows.UI.Input.Inking.InkStrokeContainer, recognitionTarget: Windows.UI.Input.Inking.InkRecognitionTarget
	): Windows.Foundation.IAsyncOperation<Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognitionResult>>;
		getRecognizers(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Input.Inking.InkRecognizer>
	}

	
}

declare module 'WebUI' {
		declare export interface IActivatedDeferral {
		complete(): void
	}

	declare export interface IActivatedOperation {
		getDeferral(): Windows.UI.WebUI.ActivatedDeferral
	}

	declare export interface IActivatedEventArgsDeferral {
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export interface ActivatedEventHandler {
		(sender: any, eventArgs: Windows.ApplicationModel.Activation.IActivatedEventArgs): void
	}

	declare export interface ResumingEventHandler {
		(sender: any): void
	}

	declare export interface SuspendingEventHandler {
		(sender: any, e: Windows.ApplicationModel.ISuspendingEventArgs): void
	}

	declare export interface NavigatedEventHandler {
		(sender: any, e: Windows.UI.WebUI.IWebUINavigatedEventArgs): void
	}

	declare export interface IWebUINavigatedEventArgs {
		navigatedOperation: Windows.UI.WebUI.WebUINavigatedOperation
	}

	declare export interface IWebUIBackgroundTaskInstance {
		succeeded: boolean
	}

	declare export interface IWebUIBackgroundTaskInstanceStatics {
		current: Windows.UI.WebUI.IWebUIBackgroundTaskInstance
	}

	declare export interface IWebUINavigatedDeferral {
		complete(): void
	}

	declare export interface IWebUINavigatedOperation {
		getDeferral(): Windows.UI.WebUI.WebUINavigatedDeferral
	}

	declare export interface IWebUIActivationStatics {
		onactivated: any,
		onsuspending: any,
		onresuming: any,
		onnavigated: any
	}

		declare export class ActivatedDeferral extends undefined$IActivatedDeferral {
		complete(): void
	}

	declare export class ActivatedOperation extends undefined$IActivatedOperation {
		getDeferral(): Windows.UI.WebUI.ActivatedDeferral
	}

	declare export class WebUILaunchActivatedEventArgs extends undefined$ILaunchActivatedEventArgs {
		arguments: string;
		tileId: string;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUISearchActivatedEventArgs extends undefined$ISearchActivatedEventArgs {
		language: string;
		queryText: string;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUIShareTargetActivatedEventArgs extends undefined$IShareTargetActivatedEventArgs {
		shareOperation: Windows.ApplicationModel.DataTransfer.ShareTarget.ShareOperation;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUIFileActivatedEventArgs extends undefined$IFileActivatedEventArgs {
		files: Windows.Foundation.Collections.IVectorView<Windows.Storage.IStorageItem>;
		verb: string;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUIProtocolActivatedEventArgs extends undefined$IProtocolActivatedEventArgs {
		uri: Windows.Foundation.Uri;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUIFileOpenPickerActivatedEventArgs extends undefined$IFileOpenPickerActivatedEventArgs {
		fileOpenPickerUI: Windows.Storage.Pickers.Provider.FileOpenPickerUI;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUIFileSavePickerActivatedEventArgs extends undefined$IFileSavePickerActivatedEventArgs {
		fileSavePickerUI: Windows.Storage.Pickers.Provider.FileSavePickerUI;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUICachedFileUpdaterActivatedEventArgs extends undefined$ICachedFileUpdaterActivatedEventArgs {
		cachedFileUpdaterUI: Windows.Storage.Provider.CachedFileUpdaterUI;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUIContactPickerActivatedEventArgs extends undefined$IContactPickerActivatedEventArgs {
		contactPickerUI: Windows.ApplicationModel.Contacts.Provider.ContactPickerUI;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUIDeviceActivatedEventArgs extends undefined$IDeviceActivatedEventArgs {
		deviceInformationId: string;
		verb: string;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUIPrintTaskSettingsActivatedEventArgs extends undefined$IPrintTaskSettingsActivatedEventArgs {
		configuration: Windows.Devices.Printers.Extensions.PrintTaskConfiguration;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUICameraSettingsActivatedEventArgs extends undefined$ICameraSettingsActivatedEventArgs {
		videoDeviceController: any;
		videoDeviceExtension: any;
		kind: Windows.ApplicationModel.Activation.ActivationKind;
		previousExecutionState: Windows.ApplicationModel.Activation.ApplicationExecutionState;
		splashScreen: Windows.ApplicationModel.Activation.SplashScreen;
		activatedOperation: Windows.UI.WebUI.ActivatedOperation
	}

	declare export class WebUINavigatedOperation extends undefined$IWebUINavigatedOperation {
		getDeferral(): Windows.UI.WebUI.WebUINavigatedDeferral
	}

	declare export class SuspendingDeferral extends undefined$ISuspendingDeferral {
		complete(): void
	}

	declare export class SuspendingOperation extends undefined$ISuspendingOperation {
		deadline: Date;
		getDeferral(): Windows.ApplicationModel.SuspendingDeferral
	}

	declare export class SuspendingEventArgs extends undefined$ISuspendingEventArgs {
		suspendingOperation: Windows.ApplicationModel.SuspendingOperation
	}

	declare export class WebUIBackgroundTaskInstanceRuntimeClass extends undefined$IWebUIBackgroundTaskInstance {
		succeeded: boolean;
		instanceId: string;
		progress: number;
		suspendedCount: number;
		task: Windows.ApplicationModel.Background.BackgroundTaskRegistration;
		triggerDetails: any;
		oncanceled: any;
		getDeferral(): Windows.ApplicationModel.Background.BackgroundTaskDeferral
	}

	declare export class WebUIBackgroundTaskInstance  {
		current: Windows.UI.WebUI.IWebUIBackgroundTaskInstance
	}

	declare export class WebUINavigatedDeferral extends undefined$IWebUINavigatedDeferral {
		complete(): void
	}

	declare export class WebUINavigatedEventArgs extends undefined$IWebUINavigatedEventArgs {
		navigatedOperation: Windows.UI.WebUI.WebUINavigatedOperation
	}

	declare export class WebUIApplication  {
		onactivated: any;
		onsuspending: any;
		onresuming: any;
		onnavigated: any
	}

	
}

declare module 'Notifications' {
		declare export interface IToastDismissedEventArgs {
		reason: Windows.UI.Notifications.ToastDismissalReason
	}

	declare export interface IToastFailedEventArgs {
		errorCode: number
	}

	declare export interface ITileUpdateManagerStatics {
		createTileUpdaterForApplication(): Windows.UI.Notifications.TileUpdater,
		createTileUpdaterForApplication(applicationId: string): Windows.UI.Notifications.TileUpdater,
		createTileUpdaterForSecondaryTile(tileId: string): Windows.UI.Notifications.TileUpdater,
		getTemplateContent(
		type: Windows.UI.Notifications.TileTemplateType
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export interface ITileUpdater {
		setting: Windows.UI.Notifications.NotificationSetting,
		update(notification: Windows.UI.Notifications.TileNotification): void,
		clear(): void,
		enableNotificationQueue(enable: boolean): void,
		addToSchedule(scheduledTile: Windows.UI.Notifications.ScheduledTileNotification): void,
		removeFromSchedule(scheduledTile: Windows.UI.Notifications.ScheduledTileNotification): void,
		getScheduledTileNotifications(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Notifications.ScheduledTileNotification>,
		startPeriodicUpdate(
		tileContent: Windows.Foundation.Uri, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void,
		startPeriodicUpdate(
		tileContent: Windows.Foundation.Uri, startTime: Date, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void,
		stopPeriodicUpdate(): void,
		startPeriodicUpdateBatch(
		tileContents: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void,
		startPeriodicUpdateBatch(
		tileContents: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, startTime: Date, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void
	}

	declare export interface IBadgeUpdateManagerStatics {
		createBadgeUpdaterForApplication(): Windows.UI.Notifications.BadgeUpdater,
		createBadgeUpdaterForApplication(applicationId: string): Windows.UI.Notifications.BadgeUpdater,
		createBadgeUpdaterForSecondaryTile(tileId: string): Windows.UI.Notifications.BadgeUpdater,
		getTemplateContent(
		type: Windows.UI.Notifications.BadgeTemplateType
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export interface IBadgeUpdater {
		update(notification: Windows.UI.Notifications.BadgeNotification): void,
		clear(): void,
		startPeriodicUpdate(
		badgeContent: Windows.Foundation.Uri, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void,
		startPeriodicUpdate(
		badgeContent: Windows.Foundation.Uri, startTime: Date, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void,
		stopPeriodicUpdate(): void
	}

	declare export interface IToastNotificationManagerStatics {
		createToastNotifier(): Windows.UI.Notifications.ToastNotifier,
		createToastNotifier(applicationId: string): Windows.UI.Notifications.ToastNotifier,
		getTemplateContent(
		type: Windows.UI.Notifications.ToastTemplateType
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export interface IToastNotifier {
		setting: Windows.UI.Notifications.NotificationSetting,
		show(notification: Windows.UI.Notifications.ToastNotification): void,
		hide(notification: Windows.UI.Notifications.ToastNotification): void,
		addToSchedule(scheduledToast: Windows.UI.Notifications.ScheduledToastNotification): void,
		removeFromSchedule(scheduledToast: Windows.UI.Notifications.ScheduledToastNotification): void,
		getScheduledToastNotifications(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Notifications.ScheduledToastNotification>
	}

	declare export interface ITileNotificationFactory {
		createTileNotification(
		content: Windows.Data.Xml.Dom.XmlDocument
	): Windows.UI.Notifications.TileNotification
	}

	declare export interface ITileNotification {
		content: Windows.Data.Xml.Dom.XmlDocument,
		expirationTime: Date,
		tag: string
	}

	declare export interface IBadgeNotificationFactory {
		createBadgeNotification(
		content: Windows.Data.Xml.Dom.XmlDocument
	): Windows.UI.Notifications.BadgeNotification
	}

	declare export interface IBadgeNotification {
		content: Windows.Data.Xml.Dom.XmlDocument,
		expirationTime: Date
	}

	declare export interface IToastNotificationFactory {
		createToastNotification(
		content: Windows.Data.Xml.Dom.XmlDocument
	): Windows.UI.Notifications.ToastNotification
	}

	declare export interface IToastNotification {
		content: Windows.Data.Xml.Dom.XmlDocument,
		expirationTime: Date,
		ondismissed: any,
		onactivated: any,
		onfailed: any
	}

	declare export interface IScheduledToastNotificationFactory {
		createScheduledToastNotification(
		content: Windows.Data.Xml.Dom.XmlDocument, deliveryTime: Date
	): Windows.UI.Notifications.ScheduledToastNotification,
		createScheduledToastNotification(
		content: Windows.Data.Xml.Dom.XmlDocument, deliveryTime: Date, snoozeInterval: number, maximumSnoozeCount: number
	): Windows.UI.Notifications.ScheduledToastNotification
	}

	declare export interface IScheduledToastNotification {
		content: Windows.Data.Xml.Dom.XmlDocument,
		deliveryTime: Date,
		id: string,
		maximumSnoozeCount: number,
		snoozeInterval: number
	}

	declare export interface IScheduledTileNotificationFactory {
		createScheduledTileNotification(
		content: Windows.Data.Xml.Dom.XmlDocument, deliveryTime: Date
	): Windows.UI.Notifications.ScheduledTileNotification
	}

	declare export interface IScheduledTileNotification {
		content: Windows.Data.Xml.Dom.XmlDocument,
		deliveryTime: Date,
		expirationTime: Date,
		id: string,
		tag: string
	}

		declare export class TileUpdater extends undefined$ITileUpdater {
		setting: Windows.UI.Notifications.NotificationSetting;
		update(notification: Windows.UI.Notifications.TileNotification): void;
		clear(): void;
		enableNotificationQueue(enable: boolean): void;
		addToSchedule(scheduledTile: Windows.UI.Notifications.ScheduledTileNotification): void;
		removeFromSchedule(scheduledTile: Windows.UI.Notifications.ScheduledTileNotification): void;
		getScheduledTileNotifications(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Notifications.ScheduledTileNotification>;
		startPeriodicUpdate(
		tileContent: Windows.Foundation.Uri, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void;
		startPeriodicUpdate(
		tileContent: Windows.Foundation.Uri, startTime: Date, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void;
		stopPeriodicUpdate(): void;
		startPeriodicUpdateBatch(
		tileContents: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void;
		startPeriodicUpdateBatch(
		tileContents: Windows.Foundation.Collections.IIterable<Windows.Foundation.Uri>, startTime: Date, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void
	}

	declare export class TileNotification extends undefined$ITileNotification {
		constructor(content: Windows.Data.Xml.Dom.XmlDocument): this;
		content: Windows.Data.Xml.Dom.XmlDocument;
		expirationTime: Date;
		tag: string
	}

	declare export class ScheduledTileNotification extends undefined$IScheduledTileNotification {
		constructor(content: Windows.Data.Xml.Dom.XmlDocument, deliveryTime: Date): this;
		content: Windows.Data.Xml.Dom.XmlDocument;
		deliveryTime: Date;
		expirationTime: Date;
		id: string;
		tag: string
	}

	declare export class BadgeUpdater extends undefined$IBadgeUpdater {
		update(notification: Windows.UI.Notifications.BadgeNotification): void;
		clear(): void;
		startPeriodicUpdate(
		badgeContent: Windows.Foundation.Uri, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void;
		startPeriodicUpdate(
		badgeContent: Windows.Foundation.Uri, startTime: Date, requestedInterval: Windows.UI.Notifications.PeriodicUpdateRecurrence
	): void;
		stopPeriodicUpdate(): void
	}

	declare export class BadgeNotification extends undefined$IBadgeNotification {
		constructor(content: Windows.Data.Xml.Dom.XmlDocument): this;
		content: Windows.Data.Xml.Dom.XmlDocument;
		expirationTime: Date
	}

	declare export class ToastNotifier extends undefined$IToastNotifier {
		setting: Windows.UI.Notifications.NotificationSetting;
		show(notification: Windows.UI.Notifications.ToastNotification): void;
		hide(notification: Windows.UI.Notifications.ToastNotification): void;
		addToSchedule(scheduledToast: Windows.UI.Notifications.ScheduledToastNotification): void;
		removeFromSchedule(scheduledToast: Windows.UI.Notifications.ScheduledToastNotification): void;
		getScheduledToastNotifications(
		
	): Windows.Foundation.Collections.IVectorView<Windows.UI.Notifications.ScheduledToastNotification>
	}

	declare export class ToastNotification extends undefined$IToastNotification {
		constructor(content: Windows.Data.Xml.Dom.XmlDocument): this;
		content: Windows.Data.Xml.Dom.XmlDocument;
		expirationTime: Date;
		ondismissed: any;
		onactivated: any;
		onfailed: any
	}

	declare export class ScheduledToastNotification extends undefined$IScheduledToastNotification {
		constructor(content: Windows.Data.Xml.Dom.XmlDocument, deliveryTime: Date): this;
		constructor(content: Windows.Data.Xml.Dom.XmlDocument, deliveryTime: Date, snoozeInterval: number, maximumSnoozeCount: number): this;
		content: Windows.Data.Xml.Dom.XmlDocument;
		deliveryTime: Date;
		id: string;
		maximumSnoozeCount: number;
		snoozeInterval: number
	}

	declare export class ToastDismissedEventArgs extends undefined$IToastDismissedEventArgs {
		reason: Windows.UI.Notifications.ToastDismissalReason
	}

	declare export class ToastFailedEventArgs extends undefined$IToastFailedEventArgs {
		errorCode: number
	}

	declare export class TileUpdateManager  {
		createTileUpdaterForApplication(): Windows.UI.Notifications.TileUpdater;
		createTileUpdaterForApplication(applicationId: string): Windows.UI.Notifications.TileUpdater;
		createTileUpdaterForSecondaryTile(tileId: string): Windows.UI.Notifications.TileUpdater;
		getTemplateContent(
		type: Windows.UI.Notifications.TileTemplateType
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class BadgeUpdateManager  {
		createBadgeUpdaterForApplication(): Windows.UI.Notifications.BadgeUpdater;
		createBadgeUpdaterForApplication(applicationId: string): Windows.UI.Notifications.BadgeUpdater;
		createBadgeUpdaterForSecondaryTile(tileId: string): Windows.UI.Notifications.BadgeUpdater;
		getTemplateContent(
		type: Windows.UI.Notifications.BadgeTemplateType
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class ToastNotificationManager  {
		createToastNotifier(): Windows.UI.Notifications.ToastNotifier;
		createToastNotifier(applicationId: string): Windows.UI.Notifications.ToastNotifier;
		getTemplateContent(
		type: Windows.UI.Notifications.ToastTemplateType
	): Windows.Data.Xml.Dom.XmlDocument
	}

	
}

declare module 'Syndication' {
		declare export interface RetrievalProgress {
		bytesRetrieved: number,
		totalBytesToRetrieve: number
	}

	declare export interface TransferProgress {
		bytesSent: number,
		totalBytesToSend: number,
		bytesRetrieved: number,
		totalBytesToRetrieve: number
	}

	declare export interface ISyndicationAttribute {
		name: string,
		namespace: string,
		value: string
	}

	declare export interface ISyndicationAttributeFactory {
		createSyndicationAttribute(
		attributeName: string, attributeNamespace: string, attributeValue: string
	): Windows.Web.Syndication.SyndicationAttribute
	}

	declare export interface ISyndicationNode {
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>,
		baseUri: Windows.Foundation.Uri,
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>,
		language: string,
		nodeName: string,
		nodeNamespace: string,
		nodeValue: string,
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export interface ISyndicationNodeFactory {
		createSyndicationNode(
		nodeName: string, nodeNamespace: string, nodeValue: string
	): Windows.Web.Syndication.SyndicationNode
	}

	declare export interface ISyndicationGenerator {
		text: string,
		uri: Windows.Foundation.Uri,
		version: string
	}

	declare export interface ISyndicationGeneratorFactory {
		createSyndicationGenerator(text: string): Windows.Web.Syndication.SyndicationGenerator
	}

	declare export interface ISyndicationText {
		text: string,
		type: string,
		xml: Windows.Data.Xml.Dom.XmlDocument
	}

	declare export interface ISyndicationTextFactory {
		createSyndicationText(text: string): Windows.Web.Syndication.SyndicationText,
		createSyndicationText(
		text: string, type: Windows.Web.Syndication.SyndicationTextType
	): Windows.Web.Syndication.SyndicationText
	}

	declare export interface ISyndicationContent {
		sourceUri: Windows.Foundation.Uri
	}

	declare export interface ISyndicationContentFactory {
		createSyndicationContent(
		text: string, type: Windows.Web.Syndication.SyndicationTextType
	): Windows.Web.Syndication.SyndicationContent,
		createSyndicationContent(sourceUri: Windows.Foundation.Uri): Windows.Web.Syndication.SyndicationContent
	}

	declare export interface ISyndicationLink {
		length: number,
		mediaType: string,
		relationship: string,
		resourceLanguage: string,
		title: string,
		uri: Windows.Foundation.Uri
	}

	declare export interface ISyndicationLinkFactory {
		createSyndicationLink(uri: Windows.Foundation.Uri): Windows.Web.Syndication.SyndicationLink,
		createSyndicationLink(
		uri: Windows.Foundation.Uri, relationship: string, title: string, mediaType: string, length: number
	): Windows.Web.Syndication.SyndicationLink
	}

	declare export interface ISyndicationPerson {
		email: string,
		name: string,
		uri: Windows.Foundation.Uri
	}

	declare export interface ISyndicationPersonFactory {
		createSyndicationPerson(name: string): Windows.Web.Syndication.SyndicationPerson,
		createSyndicationPerson(
		name: string, email: string, uri: Windows.Foundation.Uri
	): Windows.Web.Syndication.SyndicationPerson
	}

	declare export interface ISyndicationCategory {
		label: string,
		scheme: string,
		term: string
	}

	declare export interface ISyndicationCategoryFactory {
		createSyndicationCategory(term: string): Windows.Web.Syndication.SyndicationCategory,
		createSyndicationCategory(
		term: string, scheme: string, label: string
	): Windows.Web.Syndication.SyndicationCategory
	}

	declare export interface ISyndicationItem {
		authors: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationPerson>,
		categories: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationCategory>,
		commentsUri: Windows.Foundation.Uri,
		content: Windows.Web.Syndication.SyndicationContent,
		contributors: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationPerson>,
		eTag: string,
		editMediaUri: Windows.Foundation.Uri,
		editUri: Windows.Foundation.Uri,
		id: string,
		itemUri: Windows.Foundation.Uri,
		lastUpdatedTime: Date,
		links: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationLink>,
		publishedDate: Date,
		rights: Windows.Web.Syndication.ISyndicationText,
		source: Windows.Web.Syndication.SyndicationFeed,
		summary: Windows.Web.Syndication.ISyndicationText,
		title: Windows.Web.Syndication.ISyndicationText,
		load(item: string): void,
		loadFromXml(itemDocument: Windows.Data.Xml.Dom.XmlDocument): void
	}

	declare export interface ISyndicationItemFactory {
		createSyndicationItem(
		title: string, content: Windows.Web.Syndication.SyndicationContent, uri: Windows.Foundation.Uri
	): Windows.Web.Syndication.SyndicationItem
	}

	declare export interface ISyndicationFeed {
		authors: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationPerson>,
		categories: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationCategory>,
		contributors: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationPerson>,
		firstUri: Windows.Foundation.Uri,
		generator: Windows.Web.Syndication.SyndicationGenerator,
		iconUri: Windows.Foundation.Uri,
		id: string,
		imageUri: Windows.Foundation.Uri,
		items: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationItem>,
		lastUpdatedTime: Date,
		lastUri: Windows.Foundation.Uri,
		links: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationLink>,
		nextUri: Windows.Foundation.Uri,
		previousUri: Windows.Foundation.Uri,
		rights: Windows.Web.Syndication.ISyndicationText,
		sourceFormat: Windows.Web.Syndication.SyndicationFormat,
		subtitle: Windows.Web.Syndication.ISyndicationText,
		title: Windows.Web.Syndication.ISyndicationText,
		load(feed: string): void,
		loadFromXml(feedDocument: Windows.Data.Xml.Dom.XmlDocument): void
	}

	declare export interface ISyndicationFeedFactory {
		createSyndicationFeed(
		title: string, subtitle: string, uri: Windows.Foundation.Uri
	): Windows.Web.Syndication.SyndicationFeed
	}

	declare export interface ISyndicationClient {
		bypassCacheOnRetrieve: boolean,
		maxResponseBufferSize: number,
		proxyCredential: Windows.Security.Credentials.PasswordCredential,
		serverCredential: Windows.Security.Credentials.PasswordCredential,
		timeout: number,
		setRequestHeader(name: string, value: string): void,
		retrieveFeedAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.Syndication.SyndicationFeed, Windows.Web.Syndication.RetrievalProgress>
	}

	declare export interface ISyndicationClientFactory {
		createSyndicationClient(
		serverCredential: Windows.Security.Credentials.PasswordCredential
	): Windows.Web.Syndication.SyndicationClient
	}

	declare export interface ISyndicationErrorStatics {
		getStatus(hresult: number): Windows.Web.Syndication.SyndicationErrorStatus
	}

		declare export class SyndicationAttribute extends undefined$ISyndicationAttribute {
		constructor(attributeName: string, attributeNamespace: string, attributeValue: string): this;
		constructor(): this;
		name: string;
		namespace: string;
		value: string
	}

	declare export class SyndicationNode extends undefined$ISyndicationNode {
		constructor(nodeName: string, nodeNamespace: string, nodeValue: string): this;
		constructor(): this;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class SyndicationGenerator extends undefined$ISyndicationGenerator {
		constructor(text: string): this;
		constructor(): this;
		text: string;
		uri: Windows.Foundation.Uri;
		version: string;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class SyndicationText extends undefined$ISyndicationText {
		constructor(text: string): this;
		constructor(text: string, type: Windows.Web.Syndication.SyndicationTextType): this;
		constructor(): this;
		text: string;
		type: string;
		xml: Windows.Data.Xml.Dom.XmlDocument;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class SyndicationContent extends undefined$ISyndicationText {
		constructor(text: string, type: Windows.Web.Syndication.SyndicationTextType): this;
		constructor(sourceUri: Windows.Foundation.Uri): this;
		constructor(): this;
		text: string;
		type: string;
		xml: Windows.Data.Xml.Dom.XmlDocument;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		sourceUri: Windows.Foundation.Uri;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class SyndicationLink extends undefined$ISyndicationLink {
		constructor(uri: Windows.Foundation.Uri): this;
		constructor(uri: Windows.Foundation.Uri, relationship: string, title: string, mediaType: string, length: number): this;
		constructor(): this;
		length: number;
		mediaType: string;
		relationship: string;
		resourceLanguage: string;
		title: string;
		uri: Windows.Foundation.Uri;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class SyndicationPerson extends undefined$ISyndicationPerson {
		constructor(name: string): this;
		constructor(name: string, email: string, uri: Windows.Foundation.Uri): this;
		constructor(): this;
		email: string;
		name: string;
		uri: Windows.Foundation.Uri;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class SyndicationCategory extends undefined$ISyndicationCategory {
		constructor(term: string): this;
		constructor(term: string, scheme: string, label: string): this;
		constructor(): this;
		label: string;
		scheme: string;
		term: string;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class SyndicationFeed extends undefined$ISyndicationFeed {
		constructor(title: string, subtitle: string, uri: Windows.Foundation.Uri): this;
		constructor(): this;
		authors: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationPerson>;
		categories: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationCategory>;
		contributors: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationPerson>;
		firstUri: Windows.Foundation.Uri;
		generator: Windows.Web.Syndication.SyndicationGenerator;
		iconUri: Windows.Foundation.Uri;
		id: string;
		imageUri: Windows.Foundation.Uri;
		items: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationItem>;
		lastUpdatedTime: Date;
		lastUri: Windows.Foundation.Uri;
		links: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationLink>;
		nextUri: Windows.Foundation.Uri;
		previousUri: Windows.Foundation.Uri;
		rights: Windows.Web.Syndication.ISyndicationText;
		sourceFormat: Windows.Web.Syndication.SyndicationFormat;
		subtitle: Windows.Web.Syndication.ISyndicationText;
		title: Windows.Web.Syndication.ISyndicationText;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		load(feed: string): void;
		loadFromXml(feedDocument: Windows.Data.Xml.Dom.XmlDocument): void;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class SyndicationItem extends undefined$ISyndicationItem {
		constructor(title: string, content: Windows.Web.Syndication.SyndicationContent, uri: Windows.Foundation.Uri): this;
		constructor(): this;
		authors: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationPerson>;
		categories: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationCategory>;
		commentsUri: Windows.Foundation.Uri;
		content: Windows.Web.Syndication.SyndicationContent;
		contributors: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationPerson>;
		eTag: string;
		editMediaUri: Windows.Foundation.Uri;
		editUri: Windows.Foundation.Uri;
		id: string;
		itemUri: Windows.Foundation.Uri;
		lastUpdatedTime: Date;
		links: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationLink>;
		publishedDate: Date;
		rights: Windows.Web.Syndication.ISyndicationText;
		source: Windows.Web.Syndication.SyndicationFeed;
		summary: Windows.Web.Syndication.ISyndicationText;
		title: Windows.Web.Syndication.ISyndicationText;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		load(item: string): void;
		loadFromXml(itemDocument: Windows.Data.Xml.Dom.XmlDocument): void;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class SyndicationClient extends undefined$ISyndicationClient {
		constructor(serverCredential: Windows.Security.Credentials.PasswordCredential): this;
		constructor(): this;
		bypassCacheOnRetrieve: boolean;
		maxResponseBufferSize: number;
		proxyCredential: Windows.Security.Credentials.PasswordCredential;
		serverCredential: Windows.Security.Credentials.PasswordCredential;
		timeout: number;
		setRequestHeader(name: string, value: string): void;
		retrieveFeedAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.Syndication.SyndicationFeed, Windows.Web.Syndication.RetrievalProgress>
	}

	declare export class SyndicationError  {
		getStatus(hresult: number): Windows.Web.Syndication.SyndicationErrorStatus
	}

	
}

declare module 'AtomPub' {
		declare export interface IResourceCollection {
		accepts: Windows.Foundation.Collections.IVectorView<string>,
		categories: Windows.Foundation.Collections.IVectorView<Windows.Web.Syndication.SyndicationCategory>,
		title: Windows.Web.Syndication.ISyndicationText,
		uri: Windows.Foundation.Uri
	}

	declare export interface IWorkspace {
		collections: Windows.Foundation.Collections.IVectorView<Windows.Web.AtomPub.ResourceCollection>,
		title: Windows.Web.Syndication.ISyndicationText
	}

	declare export interface IServiceDocument {
		workspaces: Windows.Foundation.Collections.IVectorView<Windows.Web.AtomPub.Workspace>
	}

	declare export interface IAtomPubClient {
		retrieveServiceDocumentAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.AtomPub.ServiceDocument, Windows.Web.Syndication.RetrievalProgress>,
		retrieveMediaResourceAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IInputStream, Windows.Web.Syndication.RetrievalProgress>,
		retrieveResourceAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.Syndication.SyndicationItem, Windows.Web.Syndication.RetrievalProgress>,
		createResourceAsync(
		uri: Windows.Foundation.Uri, description: string, item: Windows.Web.Syndication.SyndicationItem
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.Syndication.SyndicationItem, Windows.Web.Syndication.TransferProgress>,
		createMediaResourceAsync(
		uri: Windows.Foundation.Uri, mediaType: string, description: string, mediaStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.Syndication.SyndicationItem, Windows.Web.Syndication.TransferProgress>,
		updateMediaResourceAsync(
		uri: Windows.Foundation.Uri, mediaType: string, mediaStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>,
		updateResourceAsync(
		uri: Windows.Foundation.Uri, item: Windows.Web.Syndication.SyndicationItem
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>,
		updateResourceItemAsync(
		item: Windows.Web.Syndication.SyndicationItem
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>,
		deleteResourceAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>,
		deleteResourceItemAsync(
		item: Windows.Web.Syndication.SyndicationItem
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>,
		cancelAsyncOperations(): void
	}

	declare export interface IAtomPubClientFactory {
		createAtomPubClientWithCredentials(
		serverCredential: Windows.Security.Credentials.PasswordCredential
	): Windows.Web.AtomPub.AtomPubClient
	}

		declare export class ResourceCollection extends undefined$IResourceCollection {
		accepts: Windows.Foundation.Collections.IVectorView<string>;
		categories: Windows.Foundation.Collections.IVectorView<Windows.Web.Syndication.SyndicationCategory>;
		title: Windows.Web.Syndication.ISyndicationText;
		uri: Windows.Foundation.Uri;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class Workspace extends undefined$IWorkspace {
		collections: Windows.Foundation.Collections.IVectorView<Windows.Web.AtomPub.ResourceCollection>;
		title: Windows.Web.Syndication.ISyndicationText;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class ServiceDocument extends undefined$IServiceDocument {
		workspaces: Windows.Foundation.Collections.IVectorView<Windows.Web.AtomPub.Workspace>;
		attributeExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.SyndicationAttribute>;
		baseUri: Windows.Foundation.Uri;
		elementExtensions: Windows.Foundation.Collections.IVector<Windows.Web.Syndication.ISyndicationNode>;
		language: string;
		nodeName: string;
		nodeNamespace: string;
		nodeValue: string;
		getXmlDocument(
		format: Windows.Web.Syndication.SyndicationFormat
	): Windows.Data.Xml.Dom.XmlDocument
	}

	declare export class AtomPubClient extends undefined$IAtomPubClient {
		constructor(serverCredential: Windows.Security.Credentials.PasswordCredential): this;
		constructor(): this;
		bypassCacheOnRetrieve: boolean;
		maxResponseBufferSize: number;
		proxyCredential: Windows.Security.Credentials.PasswordCredential;
		serverCredential: Windows.Security.Credentials.PasswordCredential;
		timeout: number;
		retrieveServiceDocumentAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.AtomPub.ServiceDocument, Windows.Web.Syndication.RetrievalProgress>;
		retrieveMediaResourceAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Storage.Streams.IInputStream, Windows.Web.Syndication.RetrievalProgress>;
		retrieveResourceAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.Syndication.SyndicationItem, Windows.Web.Syndication.RetrievalProgress>;
		createResourceAsync(
		uri: Windows.Foundation.Uri, description: string, item: Windows.Web.Syndication.SyndicationItem
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.Syndication.SyndicationItem, Windows.Web.Syndication.TransferProgress>;
		createMediaResourceAsync(
		uri: Windows.Foundation.Uri, mediaType: string, description: string, mediaStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.Syndication.SyndicationItem, Windows.Web.Syndication.TransferProgress>;
		updateMediaResourceAsync(
		uri: Windows.Foundation.Uri, mediaType: string, mediaStream: Windows.Storage.Streams.IInputStream
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>;
		updateResourceAsync(
		uri: Windows.Foundation.Uri, item: Windows.Web.Syndication.SyndicationItem
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>;
		updateResourceItemAsync(
		item: Windows.Web.Syndication.SyndicationItem
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>;
		deleteResourceAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>;
		deleteResourceItemAsync(
		item: Windows.Web.Syndication.SyndicationItem
	): Windows.Foundation.IAsyncActionWithProgress<Windows.Web.Syndication.TransferProgress>;
		cancelAsyncOperations(): void;
		setRequestHeader(name: string, value: string): void;
		retrieveFeedAsync(
		uri: Windows.Foundation.Uri
	): Windows.Foundation.IAsyncOperationWithProgress<Windows.Web.Syndication.SyndicationFeed, Windows.Web.Syndication.RetrievalProgress>
	}

	
}
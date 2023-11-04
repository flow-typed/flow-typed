// Typescript Built-in Types

declare interface TypeScript$IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}

// zen-observable-ts

declare interface ZenObservable$SubscriptionObserver<T> {
  closed: boolean;
  next(value: T): void;
  error(errorValue: any): void;
  complete(): void;
}
declare interface ZenObservable$Subscription {
  closed: boolean;
  unsubscribe(): void;
}
declare type ZenObservable$Subscriber<T> = (
  observer: ZenObservable$SubscriptionObserver<T>,
) => void | (() => void) | ZenObservable$Subscription;
declare interface ZenObservable$Observer<T> {
  start?: (subscription: ZenObservable$Subscription) => any;
  next?: (value: T) => void;
  error?: (errorValue: any) => void;
  complete?: () => void;
};
declare type ZenObservable$ObservableSubscription = any;
declare interface ZenObservable$ObservableLike<T> {
  subscribe?: ZenObservable$Subscriber<T>;
}
declare class ZenObservable$Observable<T> {
  constructor(subscriber: ZenObservable$Subscriber<T>): ZenObservable$Observable<T>;
  static call<R>(instance: ZenObservable$Observable<R>, subscriber: ZenObservable$Subscriber<R>): void;
  static apply<R>(instance: ZenObservable$Observable<R>, args: TypeScript$IArguments | [ZenObservable$Subscriber<R>]): void;

  subscribe(observer: ZenObservable$Observer<T>): ZenObservable$ObservableSubscription;
  subscribe(
    onNext: (value: T) => void,
    onError?: (error: any) => void,
    onComplete?: () => void
  ): ZenObservable$ObservableSubscription;

  forEach(callback: (value: T) => void): Promise<void>;
  map<R>(callback: (value: T) => R): ZenObservable$Observable<R>;
  filter(callback: (value: T) => boolean): ZenObservable$Observable<T>;
  reduce(callback: (previousValue: T, currentValue: T) => T, initialValue?: T): ZenObservable$Observable<T>;
  reduce<R>(callback: (previousValue: R, currentValue: T) => R, initialValue?: R): ZenObservable$Observable<R>;
  flatMap<R>(callback: (value: T) => ZenObservable$ObservableLike<R>): ZenObservable$Observable<R>;
  concat<R>(...observable: Array<ZenObservable$Observable<R>>): ZenObservable$Observable<R>;

  static from<R>(observable: ZenObservable$Observable<R> | ZenObservable$ObservableLike<R> | $ReadOnlyArray<R>): ZenObservable$Observable<R>;
  static of<R>(...items: R[]): ZenObservable$Observable<R>;
}

// graphql

declare class GraphQL$GraphQLError extends Error {}
declare type GraphQL$DocumentNode = Object;
declare interface GraphQL$ObjMap<T> {
  [key: string]: T;
}
declare interface GraphQL$ExecutionResult<
  TData = GraphQL$ObjMap<any>,
  TExtensions = GraphQL$ObjMap<any>,
> {
  errors?: $ReadOnlyArray<GraphQL$GraphQLError>;
  data?: TData | null;
  extensions?: TExtensions;
}

// @apollo/client/link/core/types.d.ts
// Globals to support global ApolloLink class
declare interface ApolloClient$Operation {
  query: GraphQL$DocumentNode;
  variables: { [key: string]: any, ... };
  operationName: string;
  extensions: { [key: string]: any, ... };
  setContext: (context: { [key: string]: any, ... }) => {
    [key: string]: any,
    ...,
  };
  getContext: () => { [key: string]: any, ... };
}
declare type ApolloClient$Path = $ReadOnlyArray<string | number>;
declare type ApolloClient$Data<T> = T | null | void;
declare type ApolloClient$SingleExecutionResult<
  TData = { [key: string]: any, ... },
  TContext = { [key: string]: any, ... },
  TExtensions = { [key: string]: any, ... }
> = {
  data?: ApolloClient$Data<TData>,
  context?: TContext,
  ...
} & GraphQL$ExecutionResult<TData, TExtensions>;
declare interface ApolloClient$ExecutionPatchResultBase {
  hasNext?: boolean;
}
declare interface ApolloClient$IncrementalPayload<TData, TExtensions> {
  data: ApolloClient$Data<TData>;
  label?: string;
  path: ApolloClient$Path;
  errors?: $ReadOnlyArray<GraphQL$GraphQLError>;
  extensions?: TExtensions;
}
declare type ApolloClient$ExecutionPatchIncrementalResult<
  TData = { [key: string]: any, ... },
  TExtensions = { [key: string]: any, ... }
> = {
  incremental?: ApolloClient$IncrementalPayload<TData, TExtensions>[],
  data?: empty,
  errors?: empty,
  extensions?: empty,
  ...
} & ApolloClient$ExecutionPatchResultBase;
declare type ApolloClient$ExecutionPatchInitialResult<
  TData = { [key: string]: any, ... },
  TExtensions = { [key: string]: any, ... }
> = {
  data: ApolloClient$Data<TData>,
  incremental?: empty,
  errors?: $ReadOnlyArray<GraphQL$GraphQLError>,
  extensions?: TExtensions,
  ...
} & ApolloClient$ExecutionPatchResultBase;
declare type ApolloClient$ExecutionPatchResult<
  TData = { [key: string]: any, ... },
  TExtensions = { [key: string]: any, ... }
> = ApolloClient$ExecutionPatchInitialResult<TData, TExtensions> | ApolloClient$ExecutionPatchIncrementalResult<TData, TExtensions>;
declare type ApolloClient$FetchResult<
  TData = { [key: string]: any, ... },
  TContext = { [key: string]: any, ... },
  TExtensions = { [key: string]: any, ... }
> = ApolloClient$SingleExecutionResult<TData, TContext, TExtensions> | ApolloClient$ExecutionPatchResult<TData, TExtensions>;

declare type ApolloClient$NextLink = (operation: ApolloClient$Operation) => ZenObservable$Observable<ApolloClient$FetchResult<>>;
declare interface ApolloClient$GraphQLRequest {
  query: GraphQL$DocumentNode;
  variables?: Object;
  operationName?: string;
  context?: Object;
  extensions?: Object;
}
declare type ApolloClient$RequestHandler = (operation: ApolloClient$Operation, forward: ApolloClient$NextLink) => ZenObservable$Observable<ApolloClient$FetchResult<>> | null;

declare module "@apollo/client" {
  import type { ApolloLink } from "@apollo/client/link/core";

  // External Types

  // React

  import type { Component, ComponentType, Context, Node } from "react";

  // ts-invariant

  declare class InvariantError extends Error {
    framesToPop: number;
    name: string;
    constructor(message?: string | number): this;
  }

  // import ... from "graphql";

  declare type DirectiveNode = Object;
  declare type FieldNode = Object;
  declare type VariableNode = Object;
  declare type InlineFragmentNode = Object;
  declare type ValueNode = Object;
  declare type SelectionNode = Object;
  declare type NameNode = Object;
  declare type SelectionSetNode = Object;
  declare type Location = Object;
  declare type DefinitionNode = Object;
  declare type VariableDefinitionNode = Object;
  declare type FragmentDefinitionNode = Object;
  declare type ASTNode = Object;
  declare function print(ast: ASTNode): string;

  // import { TypedDocumentNode } from "@graphql-typed-document-node/core";
  declare type TypedDocumentNode<Result = { [key: string]: any }, Variables = { [key: string]: any }> = {|
    ...GraphQL$DocumentNode,

    /**
     * This type is used to ensure that the variables you pass in to the query are assignable to Variables
     * and that the Result is assignable to whatever you pass your result to. The method is never actually
     * implemented, but the type is valid because we list it as optional
     */
    __apiType?: (variables: Variables) => Result,
  |};
  declare export type GraphQLSchema = Object;

  // import { Trie } from "@wry/trie";
  declare type Trie = Object;

  declare export * from "@apollo/client/link/core";

  // @apollo/client/errors/index.d.ts

  declare export function isApolloError(err: Error): boolean;
  declare export type GraphQLErrors = $ReadOnlyArray<GraphQL$GraphQLError>;
  declare export type NetworkError = Error | ServerParseError | ServerError | null;
  declare export class ApolloError mixins Error {
    message: string;
    graphQLErrors: GraphQLErrors;
    clientErrors: $ReadOnlyArray<Error>;
    networkError: Error | ServerParseError | ServerError | null;
    extraInfo: any;
    constructor(x: {
      graphQLErrors?: $ReadOnlyArray<GraphQL$GraphQLError>,
      clientErrors?: $ReadOnlyArray<Error>,
      networkError?: Error | ServerParseError | ServerError | null,
      errorMessage?: string,
      extraInfo?: any,
      ...
    }): this;
  }

  // @apollo/client/utilities/graphql/fragments.d.ts

  declare export function getFragmentQueryDocument(document: GraphQL$DocumentNode, fragmentName?: string): GraphQL$DocumentNode;
  declare export interface FragmentMap {
    [fragmentName: string]: FragmentDefinitionNode;
  }
  declare export type FragmentMapFunction = (fragmentName: string) => FragmentDefinitionNode | null;
  declare export function createFragmentMap(fragments?: FragmentDefinitionNode[]): FragmentMap;
  declare export function getFragmentFromSelection(
    selection: SelectionNode,
    fragmentMap?: FragmentMap | FragmentMapFunction
  ): InlineFragmentNode | FragmentDefinitionNode | null;

  // @apollo/client/utilities/graphql/storeUtils.d.ts

  declare export interface Reference {
    +__ref: string;
  }
  declare export function makeReference(id: string): Reference;
  declare export function isReference(obj: any): boolean;
  declare export type StoreValue = number | string | string[] | Reference | Reference[] | null | void | void | Object;
  declare export interface StoreObject {
    __typename?: string;
    [storeFieldName: string]: StoreValue;
  }
  declare export function isGraphQL$DocumentNode(value: any): boolean;
  declare export function valueToObjectRepresentation(
    argObj: any,
    name: NameNode,
    value: ValueNode,
    variables?: Object
  ): void;
  declare export function storeKeyNameFromField(field: FieldNode, variables?: Object): string;
  declare export type Directives = {
    [directiveName: string]: {
      [argName: string]: any,
    },
  };
  declare export var getStoreKeyName: ((
    fieldName: string,
    args?: { ... } | null,
    directives?: Directives
  ) => string) & {|
    setStringify(s: typeof stringify): (value: any) => string,
  |};
  declare export var stringify: (value: any) => string;
  declare export function argumentsObjectFromField(
    field: FieldNode | DirectiveNode,
    variables?: { [key: string]: any, ... }
  ): Object | null;
  declare export function resultKeyNameFromField(field: FieldNode): string;
  declare export function getTypenameFromResult(
    result: { [key: string]: any, ... },
    selectionSet: SelectionSetNode,
    fragmentMap?: FragmentMap
  ): string | void;
  declare export function isField(selection: SelectionNode): boolean;
  declare export function isInlineFragment(selection: SelectionNode): boolean;
  declare export type VariableValue = (node: VariableNode) => any;

  // @apollo/client/cache/core/types/Cache.d.ts

  declare type Cache$DiffResult<T> = DataProxy$DiffResult<T>;
  declare type Cache$ReadQueryOptions<TData, TVariables> = DataProxy$ReadQueryOptions<TData, TVariables>;
  declare type Cache$ReadFragmentOptions<TData, TVariables> = DataProxy$ReadFragmentOptions<TData, TVariables>;
  declare type Cache$WriteQueryOptions<TData, TVariables> = DataProxy$WriteQueryOptions<TData, TVariables>;
  declare type Cache$WriteFragmentOptions<TData, TVariables> = DataProxy$WriteFragmentOptions<TData, TVariables>;
  declare type Cache$UpdateQueryOptions<TData, TVariables> = DataProxy$UpdateQueryOptions<TData, TVariables>;
  declare type Cache$UpdateFragmentOptions<TData, TVariables> = DataProxy$UpdateFragmentOptions<TData, TVariables>;

  declare export var Cache: typeof npm$namespace$Cache;

  declare export var npm$namespace$Cache: {|
    EvictOptions: Class<Cache$EvictOptions>,
    ResetOptions: Class<Cache$ResetOptions>,
    ModifyOptions: Class<Cache$ModifyOptions>,
  |};
  declare export type Cache$WatchCallback<TData = any> = (
    diff: Cache$DiffResult<TData>,
    lastDiff?: Cache$DiffResult<TData>
  ) => void;

  declare export type Cache$ReadOptions<TVariables = any, TData = any> = {
    rootId?: string,
    previousResult?: any,
    optimistic: boolean,
    returnPartialData?: boolean,
    canonizeResults?: boolean,
    ...
  } & DataProxy$Query<TVariables, TData>;

  declare export type Cache$WriteOptions<TResult = any, TVariables = any> = {
    dataId?: string,
    result: TResult,
    ...
  } & $Diff<DataProxy$Query<TVariables, TResult>, {| id: any |}> &
    $Diff<DataProxy$WriteOptions<TResult>, {| data: any |}>;

  declare export type Cache$DiffOptions<TData = any, TVariables = any> = { ... } & $Diff<
    Cache$ReadOptions<TVariables, TData>,
    {| rootId: any |}
  >;

  declare export type Cache$WatchOptions<TData = any, TVariables = any> = {
    watcher?: { [key: string]: any },
    immediate?: boolean,
    callback: Cache$WatchCallback<TData>,
    lastDiff?: Cache$DiffResult<TData>,
    ...
  } & Cache$DiffOptions<TData, TVariables>;

  declare export interface Cache$EvictOptions {
    id?: string;
    fieldName?: string;
    args?: { [key: string]: any, ... };
    broadcast?: boolean;
  }

  declare export interface Cache$ResetOptions {
    discardWatches?: boolean;
  }

  declare export interface Cache$ModifyOptions {
    id?: string;
    fields: Modifiers | Modifier<any>;
    optimistic?: boolean;
    broadcast?: boolean;
  }

  declare export interface Cache$BatchOptions<TCache, TUpdateResult = void> {
    update(cache: TCache): TUpdateResult;
    optimistic?: string | boolean;
    removeOptimistic?: string;
    onWatchUpdated?: (
      watch: Cache$WatchOptions<>,
      diff: Cache$DiffResult<any>,
      lastDiff: Cache$DiffResult<any> | void
    ) => any;
  }

  // @apollo/client/cache/inmemory/entityStore.d.ts

  declare export class EntityStore implements NormalizedCache {
    +policies: Policies;
    +group: CacheGroup;
    data: NormalizedCacheObject;
    constructor(policies: Policies, group: CacheGroup): this;
    addLayer(layerId: string, replay: (layer: EntityStore) => any): Layer;
    removeLayer(layerId: string): EntityStore;
    toObject(): NormalizedCacheObject;
    has(dataId: string): boolean;
    get(dataId: string, fieldName: string): StoreValue;
    lookup(dataId: string, dependOnExistence?: boolean): StoreObject | void;
    merge(older: string | StoreObject, newer: StoreObject | string): void;
    modify(dataId: string, fields: Modifier<any> | Modifiers): boolean;
    delete(dataId: string, fieldName?: string, args?: { [key: string]: any, ... }): boolean;
    evict(options: Cache$EvictOptions, limit: EntityStore): boolean;
    clear(): void;
    extract(): NormalizedCacheObject;
    replace(newData: NormalizedCacheObject | null): void;
    getStorage(idOrObj: string | StoreObject, ...storeFieldNames: (string | number)[]): StorageType;
    retain(rootId: string): number;
    release(rootId: string): number;
    getRootIdSet(ids?: Set<string>): Set<string>;
    gc(): string[];
    findChildRefIds(dataId: string): { [key: string]: true, ... };
    makeCacheKey(...args: any[]): { [key: string]: any };
    getFieldValue: <T>(objectOrReference: StoreObject | Reference | void, storeFieldName: string) => SafeReadonly<T>;
    canRead: CanReadFunction;
    toReference: ToReferenceFunction;
    static Root: typeof EntityStore$Root;
  }

  declare export class EntityStore$Root mixins EntityStore {
    constructor(x: {
      policies: Policies,
      resultCaching?: boolean,
      seed?: NormalizedCacheObject,
      ...
    }): EntityStore$Root;
    +stump: Stump;
    addLayer(layerId: string, replay: (layer: EntityStore) => any): Layer;
    removeLayer(): EntityStore$Root;
    +storageTrie: Trie<StorageType>;
    getStorage(): StorageType;
  }

  declare export type FieldValueGetter = $PropertyType<EntityStore, "getFieldValue">;
  declare export class CacheGroup {
    +caching: boolean;
    keyMaker: Trie<{ [key: string]: any }>;
    constructor(caching: boolean, parent?: CacheGroup | null): this;
    resetCaching(): void;
    depend(dataId: string, storeFieldName: string): void;
    dirty(dataId: string, storeFieldName: string): void;
  }
  declare export function maybeDependOnExistenceOfEntity(store: NormalizedCache, entityId: string): void;
  declare export class Layer mixins EntityStore {
    +id: string;
    +parent: EntityStore;
    +replay: (layer: EntityStore) => any;
    +group: CacheGroup;
    constructor(id: string, parent: EntityStore, replay: (layer: EntityStore) => any, group: CacheGroup): this;
    addLayer(layerId: string, replay: (layer: EntityStore) => any): Layer;
    removeLayer(layerId: string): EntityStore;
    toObject(): NormalizedCacheObject;
    findChildRefIds(dataId: string): { [key: string]: true, ... };
    getStorage(): StorageType;
  }
  declare export class Stump mixins Layer {
    constructor(root: EntityStore$Root): this;
    removeLayer(): EntityStore;
    merge(): any;
  }
  declare export function supportsResultCaching(store: any): boolean;

  // @apollo/client/cache/inmemory/fragmentRegistry.d.ts

  declare export interface FragmentRegistryAPI {
    register(...fragments: GraphQL$DocumentNode[]): FragmentRegistryAPI;
    lookup(fragmentName: string): FragmentDefinitionNode | null;
    transform<D: GraphQL$DocumentNode>(document: D): D;
  }
  declare export function createFragmentRegistry(...fragments: GraphQL$DocumentNode[]): FragmentRegistryAPI;

  // @apollo/client/cache/inmemory/types.d.ts

  declare export type IdGetterObj = {
    __typename?: string,
    id?: string,
    _id?: string,
    ...
  } & Object;
  declare export type IdGetter = (value: IdGetterObj) => string | void;
  declare export interface NormalizedCache {
    has(dataId: string): boolean;
    get(dataId: string, fieldName: string): StoreValue;
    merge(olderId: string, newerObject: StoreObject): void;
    merge(olderObject: StoreObject, newerId: string): void;
    modify(dataId: string, fields: Modifiers | Modifier<any>): boolean;
    delete(dataId: string, fieldName?: string): boolean;
    clear(): void;
    toObject(): NormalizedCacheObject;
    replace(newData: NormalizedCacheObject): void;
    retain(rootId: string): number;
    release(rootId: string): number;
    getFieldValue: FieldValueGetter;
    toReference: ToReferenceFunction;
    canRead: CanReadFunction;
    getStorage(idOrObj: string | StoreObject, ...storeFieldNames: (string | number)[]): StorageType;
  }
  declare export interface NormalizedCacheObject {
    __META?: {
      extraRootIds: string[],
      ...
    };
    [dataId: string]: StoreObject | void;
  }
  declare export type OptimisticStoreItem = {
    id: string,
    data: NormalizedCacheObject,
    transaction: Transaction<NormalizedCacheObject>,
    ...
  };
  declare export type ReadQueryOptions = {
    store: NormalizedCache,
    query: GraphQL$DocumentNode,
    variables?: Object,
    previousResult?: any,
    canonizeResults?: boolean,
    rootId?: string,
    config?: ApolloReducerConfig,
    ...
  };
  declare export type DiffQueryAgainstStoreOptions = {
    ...ReadQueryOptions,
    returnPartialData?: boolean,
    ...
  };
  declare export type ApolloReducerConfig = {
    dataIdFromObject?: KeyFieldsFunction,
    addTypename?: boolean,
    ...
  };
  declare export type InMemoryCacheConfig = {
    resultCaching?: boolean,
    possibleTypes?: PossibleTypesMap,
    typePolicies?: TypePolicies,
    resultCacheMaxSize?: number,
    canonizeResults?: boolean,
    fragments?: FragmentRegistryAPI,
    ...
  } & ApolloReducerConfig;
  declare export interface MergeInfo {
    field: FieldNode;
    typename: string | void;
    merge: FieldMergeFunction<>;
  }
  declare export interface MergeTree {
    info?: MergeInfo;
    map: Map<string | number, MergeTree>;
  }
  declare export interface ReadMergeModifyContext {
    store: NormalizedCache;
    variables?: { [key: string]: any, ... };
    varString?: string;
  }

  // @apollo/client/cache/inmemory/reactiveVars.d.ts

  declare export interface ReactiveVar<T> {
    (newValue?: T): T;
    onNextChange(listener: ReactiveListener<T>): () => void;
    attachCache(cache: ApolloCache<any>): ReactiveVar<T>;
    forgetCache(cache: ApolloCache<any>): boolean;
  }
  declare export type ReactiveListener<T> = (value: T) => any;
  declare export var cacheSlot: {
    +id: string,
    hasValue(): boolean,
    getValue(): ApolloCache<any> | void,
    withValue<TResult, TArgs: any[], TThis>(
      value: ApolloCache<any>,
      callback: (...args: TArgs) => TResult,
      args?: TArgs | void,
      thisArg?: TThis | void
    ): TResult,
    ...
  };
  declare export function forgetCache(cache: ApolloCache<any>): void;
  declare export function recallCache(cache: ApolloCache<any>): void;
  declare export function makeVar<T>(value: T): ReactiveVar<T>;

  // @apollo/client/cache/inmemory/inMemoryCache.d.ts

  declare export type BroadcastOptions = {|
    optimistic?: string | boolean;
    onWatchUpdated?: (
      watch: Cache$WatchOptions<>,
      diff: Cache$DiffResult<any>,
      lastDiff: Cache$DiffResult<any> | void
    ) => any;
  |};
  declare export class InMemoryCache mixins ApolloCache<NormalizedCacheObject> {
    config: InMemoryCacheConfig;
    +policies: Policies;
    +makeVar: typeof makeVar;
    constructor(config?: InMemoryCacheConfig): this;
    restore(data: NormalizedCacheObject): this;
    extract(optimistic?: boolean): NormalizedCacheObject;
    read<TData, TVariables>(options: Cache$ReadOptions<TVariables, TData>): TData | null;
    write<TData, TVariables>(write: Cache$WriteOptions<TData, TVariables>): Reference | void;
    modify(options: Cache$ModifyOptions): boolean;
    diff<TData, TVariables>(options: Cache$DiffOptions<TData, TVariables>): Cache$DiffResult<TData>;
    watch<TData, TVariables>(watch: Cache$WatchOptions<TData, TVariables>): () => void;
    gc(options?: {
      resetResultCache?: boolean,
      resetResultIdentities?: boolean,
      ...
    }): string[];
    retain(rootId: string, optimistic?: boolean): number;
    release(rootId: string, optimistic?: boolean): number;
    identify(object: StoreObject | Reference): string | void;
    evict(options: Cache$EvictOptions): boolean;
    reset(options?: Cache$ResetOptions): Promise<void>;
    removeOptimistic(idToRemove: string): void;
    batch<TUpdateResult>(options: Cache$BatchOptions<ApolloCache<NormalizedCacheObject>, TUpdateResult>): TUpdateResult;
    performTransaction(update: (cache: InMemoryCache) => any, optimisticId?: string | null): any;
    transformDocument(document: GraphQL$DocumentNode): GraphQL$DocumentNode;
    transformForLink(document: GraphQL$DocumentNode): GraphQL$DocumentNode;
    broadcastWatches(options?: BroadcastOptions): void;
  }

  // @apollo/client/cache/inmemory/object-canon.d.ts

  declare export class ObjectCanon {
    isKnown(value: any): boolean;
    pass<T>(value: T): T;
    admit<T>(value: T): T;
    +empty: { ... };
  }
  declare export var canonicalStringify: ((value: any) => string) & {|
    reset: typeof resetCanonicalStringify,
  |};
  declare export function resetCanonicalStringify(): void;

  // @apollo/client/cache/inmemory/readFromStore.d.ts

  declare export type VariableMap = {
    [name: string]: any,
  };
  declare export type ExecResult<R = any> = {
    result: R,
    missing?: MissingTree,
    ...
  };
  declare export interface StoreReaderConfig {
    cache: InMemoryCache;
    addTypename?: boolean;
    resultCacheMaxSize?: number;
    canonizeResults?: boolean;
    canon?: ObjectCanon;
    fragments?: $PropertyType<InMemoryCacheConfig, "fragments">;
  }
  declare export class StoreReader {
    canon: ObjectCanon;
    resetCanon(): void;
    constructor(config: StoreReaderConfig): this;
    diffQueryAgainstStore<T>(x: DiffQueryAgainstStoreOptions): Cache$DiffResult<T>;
    isFresh(
      result: { [key: string]: any, ... },
      parent: StoreObject | Reference,
      selectionSet: SelectionSetNode,
      context: ReadMergeModifyContext
    ): boolean;
  }

  // @apollo/client/cache/inmemory/writeToStore.d.ts

  declare export type WriteContext = {
    +written: {
      [dataId: string]: SelectionSetNode[],
    },
    +fragmentMap: FragmentMap,
    lookupFragment: FragmentMapFunction,
    merge<T>(existing: T, incoming: T): T,
    overwrite: boolean,
    incomingById: Map<
      string,
      {
        storeObject: StoreObject,
        mergeTree?: MergeTree,
        fieldNodeSet: Set<FieldNode>,
        ...
      }
    >,
    clientOnly: boolean,
    deferred: boolean,
    flavors: Map<string, FlavorableWriteContext>,
    ...
  } & ReadMergeModifyContext;
  declare export type FlavorableWriteContext = {|
    clientOnly: boolean,
    deferred: boolean,
    flavors: Map<string, FlavorableWriteContext>,
  |}
  declare export interface WriteOptions<TResult = any, TVariables = any>
    // extends $Diff<DataProxy$Query<TVariables, TResult>, {| id: any |}>, $Diff<DataProxy$WriteOptions<TResult>, {| data: any |}>
  {
    dataId?: string;
    result: TResult;
  }
  declare export class StoreWriter {
    +cache: InMemoryCache;
    constructor(
      cache: InMemoryCache,
      reader?: StoreReader | void,
      fragments?: FragmentRegistryAPI | void
    ): this;
    writeToStore(store: NormalizedCache, x: WriteOptions<>): Reference | void;
  }

  // @apollo/client/cache/inmemory/policies.d.ts

  declare export type TypePolicies = {
    [__typename: string]: TypePolicy,
  };
  declare export type KeySpecifier = $ReadOnlyArray<string | KeySpecifier>;
  declare export type KeyFieldsContext = {
    typename: string | void,
    storeObject: StoreObject,
    readField: ReadFieldFunction,
    selectionSet?: SelectionSetNode,
    fragmentMap?: FragmentMap,
    keyObject?: { [key: string]: any, ... },
    ...
  };
  declare export type KeyFieldsFunction = (
    object: $ReadOnly<StoreObject>,
    context: KeyFieldsContext
  ) => KeySpecifier | false | $Call<<R>((...args: any[]) => R) => R, IdGetter>;
  declare export type TypePolicy = {
    keyFields?: KeySpecifier | KeyFieldsFunction | false,
    merge?: FieldMergeFunction<> | boolean,
    queryType?: true,
    mutationType?: true,
    subscriptionType?: true,
    fields?: {
      [fieldName: string]: FieldPolicy<any> | FieldReadFunction<any>,
    },
    ...
  };
  declare export type KeyArgsFunction = (
    args: { [key: string]: any, ... } | null,
    context: {
      typename: string,
      fieldName: string,
      field: FieldNode | null,
      variables?: { [key: string]: any, ... },
      ...
    }
  ) => KeySpecifier | false | $Call<<R>((...args: any[]) => R) => R, IdGetter>;
  declare export type FieldPolicy<
    TExisting = any,
    TIncoming = TExisting,
    TReadResult = TIncoming,
    TOptions: FieldFunctionOptions<> = FieldFunctionOptions<>
  > = {
    keyArgs?: KeySpecifier | KeyArgsFunction | false,
    read?: FieldReadFunction<TExisting, TReadResult, TOptions>,
    merge?: FieldMergeFunction<TExisting, TIncoming, TOptions> | boolean,
    ...
  };
  declare export type StorageType = { [key: string]: any, ... };
  declare export interface FieldFunctionOptions<
    TArgs = { [key: string]: any, ... },
    TVars = { [key: string]: any, ... }
  > {
    args: TArgs | null;
    fieldName: string;
    storeFieldName: string;
    field: FieldNode | null;
    variables?: TVars;
    isReference: typeof isReference;
    toReference: ToReferenceFunction;
    storage: StorageType;
    cache: InMemoryCache;
    readField: ReadFieldFunction;
    canRead: CanReadFunction;
    mergeObjects: MergeObjectsFunction;
  }
  declare export type MergeObjectsFunction = <T: StoreObject | Reference>(existing: T, incoming: T) => T;
  declare export type FieldReadFunction<
    TExisting = any,
    TReadResult = TExisting,
    TOptions: FieldFunctionOptions<> = FieldFunctionOptions<>
  > = (existing: SafeReadonly<TExisting> | void, options: TOptions) => TReadResult | void;
  declare export type FieldMergeFunction<
    TExisting = any,
    TIncoming = TExisting,
    TOptions: FieldFunctionOptions<> = FieldFunctionOptions<>
  > = (
    existing: SafeReadonly<TExisting> | void,
    incoming: SafeReadonly<TIncoming>,
    options: TOptions
  ) => SafeReadonly<TExisting>;
  declare export type PossibleTypesMap = {
    [supertype: string]: string[],
  };
  declare export class Policies {
    +cache: InMemoryCache;
    +rootIdsByTypename: { [key: string]: string, ... };
    +rootTypenamesById: { [key: string]: string, ... };
    +usingPossibleTypes: false;
    constructor(config: {
      cache: InMemoryCache,
      dataIdFromObject?: KeyFieldsFunction,
      possibleTypes?: PossibleTypesMap,
      typePolicies?: TypePolicies,
      ...
    }): this;
    identify(
      object: StoreObject,
      partialContext?: $Rest<KeyFieldsContext, { ... }>
    ): [string | void, StoreObject | void];
    addTypePolicies(typePolicies: TypePolicies): void;
    addPossibleTypes(possibleTypes: PossibleTypesMap): void;
    fragmentMatches(
      fragment: InlineFragmentNode | FragmentDefinitionNode,
      typename: string | void,
      result?: { [key: string]: any, ... },
      variables?: { [key: string]: any, ... }
    ): boolean;
    hasKeyArgs(typename: string | void, fieldName: string): boolean;
    getStoreFieldName(fieldSpec: FieldSpecifier): string;
    readField<V>(options: ReadFieldOptions, context: ReadMergeModifyContext): SafeReadonly<V> | void;
    getReadFunction(typename: string | void, fieldName: string): FieldReadFunction<> | void;
    getMergeFunction(
      parentTypename: string | void,
      fieldName: string,
      childTypename: string | void
    ): FieldMergeFunction<> | void;
    runMergeFunction(
      existing: StoreValue,
      incoming: StoreValue,
      x: MergeInfo,
      context: WriteContext,
      storage?: StorageType
    ): any;
  }
  declare export function normalizeReadFieldOptions(
    readFieldArgs: TypeScript$IArguments,
    objectOrReference: StoreObject | Reference | void,
    variables?: $PropertyType<ReadMergeModifyContext, "variables">
  ): ReadFieldOptions;

  // @apollo/client/cache/core/types/common.d.ts

  // see https://gist.github.com/thecotne/6e5969f4aaf8f253985ed36b30ac9fe0
  declare export type $FlowGen$If<X: boolean, Then, Else = empty> = $Call<
    ((true, Then, Else) => Then) & ((false, Then, Else) => Else),
    X,
    Then,
    Else
  >;

  declare export type $FlowGen$Assignable<A, B> = $Call<((...r: [B]) => true) & ((...r: [A]) => false), A>;

  declare export type SafeReadonly<T> = $FlowGen$If<$FlowGen$Assignable<T, { [key: string]: any }>, $ReadOnly<T>, T>;
  declare export type MissingTree =
    | string
    | {
    [key: string]: MissingTree,
  };
  declare export class MissingFieldError mixins Error {
    +path: MissingTree | Array<string | number>;
    +query: GraphQL$DocumentNode;
    +variables?: { [key: string]: any, ... } | void;
    constructor(
      message: string,
      path: MissingTree | Array<string | number>,
      query: GraphQL$DocumentNode,
      variables?: { [key: string]: any, ... } | void
    ): this;
    +missing: MissingTree;
  }
  declare export interface FieldSpecifier {
    typename?: string;
    fieldName: string;
    field?: FieldNode;
    args?: { [key: string]: any, ... };
    variables?: { [key: string]: any, ... };
  }
  declare export type ReadFieldOptions = {
    from?: StoreObject | Reference,
    ...
  } & FieldSpecifier;
  declare export interface ReadFieldFunction {
    <V>(options: ReadFieldOptions): SafeReadonly<V> | void;
    <V>(fieldName: string, from?: StoreObject | Reference): SafeReadonly<V> | void;
  }
  declare export type ToReferenceFunction = (
    objOrIdOrRef: StoreObject | string | Reference,
    mergeIntoStore?: boolean
  ) => Reference | void;
  declare export type CanReadFunction = (value: StoreValue) => boolean;
  declare export type Modifier<T> = (
    value: T,
    details: {
      DELETE: any,
      INVALIDATE: any,
      fieldName: string,
      storeFieldName: string,
      readField: ReadFieldFunction,
      canRead: CanReadFunction,
      isReference: typeof isReference,
      toReference: ToReferenceFunction,
      storage: StorageType,
      ...
    }
  ) => T;
  declare export type Modifiers = {
    [fieldName: string]: Modifier<any>,
  };

  // @apollo/client/cache/core/types/DataProxy.d.ts

  declare export interface DataProxy$Fragment<TVariables, TData> {
    id?: string;
    fragment: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>;
    fragmentName?: string;
    variables?: TVariables;
  }

  declare export type DataProxy$ReadQueryOptions<TData, TVariables> = {
    returnPartialData?: boolean,
    optimistic?: boolean,
    canonizeResults?: boolean,
    ...
  } & DataProxy$Query<TVariables, TData>;

  declare export type DataProxy$ReadFragmentOptions<TData, TVariables> = {
    returnPartialData?: boolean,
    optimistic?: boolean,
    canonizeResults?: boolean,
    ...
  } & DataProxy$Fragment<TVariables, TData>;

  declare export interface DataProxy$WriteOptions<TData> {
    data: TData;
    broadcast?: boolean;
    overwrite?: boolean;
  }

  declare export type DataProxy$WriteQueryOptions<TData, TVariables> = { ... } & DataProxy$Query<TVariables, TData> &
    DataProxy$WriteOptions<TData>;

  declare export type DataProxy$WriteFragmentOptions<TData, TVariables> = { ... } & DataProxy$Fragment<
    TVariables,
    TData
  > &
    DataProxy$WriteOptions<TData>;

  declare export type DataProxy$UpdateQueryOptions<TData, TVariables> = { ... } & $Diff<
    {|
      ...DataProxy$ReadQueryOptions<TData, TVariables>,
      ...DataProxy$WriteQueryOptions<TData, TVariables>,
    |},
    {| data: any |}
  >;

  declare export type DataProxy$UpdateFragmentOptions<TData, TVariables> = { ... } & $Diff<
    {|
      ...DataProxy$ReadFragmentOptions<TData, TVariables>,
      ...DataProxy$WriteFragmentOptions<TData, TVariables>,
    |},
    {| data: any |}
  >;

  declare export type DataProxy$DiffResult<T> = {
    result?: T,
    complete?: boolean,
    missing?: MissingFieldError[],
    fromOptimisticTransaction?: boolean,
    ...
  };

  declare export interface DataProxy$Query<TVariables, TData> {
    query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>;
    variables?: TVariables;
    id?: string;
  }
  declare export interface DataProxy {
    readQuery<QueryType, TVariables>(
      options: DataProxy$ReadQueryOptions<QueryType, TVariables>,
      optimistic?: boolean
    ): QueryType | null;
    readFragment<FragmentType, TVariables>(
      options: DataProxy$ReadFragmentOptions<FragmentType, TVariables>,
      optimistic?: boolean
    ): FragmentType | null;
    writeQuery<TData, TVariables>(x: Cache$WriteQueryOptions<TData, TVariables>): Reference | void;
    writeFragment<TData, TVariables>(x: Cache$WriteFragmentOptions<TData, TVariables>): Reference | void;
  }

  // @apollo/client/cache/core/cache.d.ts

  declare export type Transaction<T> = (c: ApolloCache<T>) => void;
  declare export class ApolloCache<TSerialized> implements DataProxy {
    read<TData, TVariables>(query: Cache$ReadOptions<TVariables, TData>): TData | null;
    write<TData, TVariables>(write: Cache$WriteOptions<TData, TVariables>): Reference | void;
    diff<TData, TVariables>(options: Cache$DiffOptions<TData, TVariables>): Cache$DiffResult<TData>;
    watch<TData, TVariables>(watch: Cache$WatchOptions<TData, TVariables>): () => void;
    reset(options?: Cache$ResetOptions): Promise<void>;
    evict(options: Cache$EvictOptions): boolean;
    restore(serializedState: TSerialized): ApolloCache<TSerialized>;
    extract(optimistic?: boolean): TSerialized;
    removeOptimistic(id: string): void;
    batch<U>(options: Cache$BatchOptions<ApolloCache<TSerialized>, U>): U;
    performTransaction(transaction: Transaction<TSerialized>, optimisticId?: string | null): void;
    recordOptimisticTransaction(transaction: Transaction<TSerialized>, optimisticId: string): void;
    transformDocument(document: GraphQL$DocumentNode): GraphQL$DocumentNode;
    transformForLink(document: GraphQL$DocumentNode): GraphQL$DocumentNode;
    identify(object: StoreObject | Reference): string | void;
    gc(): string[];
    modify(options: Cache$ModifyOptions): boolean;
    readQuery<QueryType, TVariables>(
      options: DataProxy$ReadQueryOptions<QueryType, TVariables>,
      optimistic?: boolean
    ): QueryType | null;
    readFragment<FragmentType, TVariables>(
      options: DataProxy$ReadFragmentOptions<FragmentType, TVariables>,
      optimistic?: boolean
    ): FragmentType | null;
    writeQuery<TData, TVariables>(x: Cache$WriteQueryOptions<TData, TVariables>): Reference | void;
    writeFragment<TData, TVariables>(x: Cache$WriteFragmentOptions<TData, TVariables>): Reference | void;
    updateQuery<TData, TVariables>(
      options: Cache$UpdateQueryOptions<TData, TVariables>,
      update: (data: TData | null) => TData | null | void
    ): TData | null;
    updateFragment<TData, TVariables>(
      options: Cache$UpdateFragmentOptions<TData, TVariables>,
      update: (data: TData | null) => TData | null | void
    ): TData | null;
  }

  // @apollo/client/core/QueryInfo.d.ts

  declare export type QueryStoreValue = {|
    variables?: { [key: string]: any, ... };
    networkStatus?: $Values<typeof NetworkStatus>;
    networkError?: Error | null;
    graphQLErrors?: $ReadOnlyArray<GraphQL$GraphQLError>;
  |};
  declare export var CacheWriteBehavior: {|
    +FORBID: 0,
    +OVERWRITE: 1,
    +MERGE: 2,
  |};
  declare export class QueryInfo {
    +queryId: string;
    listeners: Set<QueryListener>;
    document: GraphQL$DocumentNode | null;
    lastRequestId: number;
    subscriptions: Set<ZenObservable$ObservableSubscription>;
    variables?: { [key: string]: any, ... };
    networkStatus?: $Values<typeof NetworkStatus>;
    networkError?: Error | null;
    graphQLErrors?: $ReadOnlyArray<GraphQL$GraphQLError>;
    stopped: boolean;
    constructor(queryManager: QueryManager<any>, queryId?: string): this;
    init(query: {
      document: GraphQL$DocumentNode,
      variables: { [key: string]: any, ... } | void,
      networkStatus?: $Values<typeof NetworkStatus>,
      observableQuery?: ObservableQuery<any>,
      lastRequestId?: number,
      ...
    }): this;
    reset(): void;
    getDiff(variables?: { [key: string]: any, ... } | void): Cache$DiffResult<any>;
    setDiff(diff: Cache$DiffResult<any> | null): void;
    +observableQuery: ObservableQuery<any> | null;
    setObservableQuery(oq: ObservableQuery<any> | null): void;
    notify(): void;
    stop(): void;
    resetLastWrite(): void;
    markResult<T>(
      result: ApolloClient$FetchResult<T>,
      document: GraphQL$DocumentNode,
      options: {|
        fetchPolicy?: WatchQueryFetchPolicy;
        variables?: OperationVariables;
        errorPolicy?: ErrorPolicy;
      |},
      cacheWriteBehavior: $Values<typeof CacheWriteBehavior>
    ): void;
    markReady(): $Values<typeof NetworkStatus>;
    markError(error: ApolloError): ApolloError;
  }
  declare export function shouldWriteResult<T>(result: ApolloClient$FetchResult<T>, errorPolicy?: ErrorPolicy): boolean;

  // @apollo/client/utilities/observables/Concast.d.ts

  declare export type MaybeAsync<T> = T | Promise<T>;
  declare export type Source<T> = MaybeAsync<ZenObservable$Observable<T>>;
  declare export type ConcastSourcesIterable<T> = Iterable<Source<T>>;
  declare export type ConcastSourcesArray<T> = Array<Source<T>>;
  declare export class Concast<T> mixins ZenObservable$Observable<T> {
    constructor(sources: MaybeAsync<ConcastSourcesIterable<T>> | ZenObservable$Subscriber<T>): this;
    addObserver(observer: ZenObservable$Observer<T>): void;
    removeObserver(observer: ZenObservable$Observer<T>): void;
    +promise: Promise<T>;
    beforeNext(callback: NextResultListener): void;
    cancel: (reason: any) => void;
  }
  declare export type NextResultListener = (method: "next" | "error" | "complete", arg?: any) => any;

  // @apollo/client/core/watchQueryOptions.d.ts

  declare export type FetchPolicy = "cache-first" | "network-only" | "cache-only" | "no-cache" | "standby";
  declare export type WatchQueryFetchPolicy = FetchPolicy | "cache-and-network";
  declare export type MutationFetchPolicy = "network-only" | "no-cache";
  declare export type RefetchWritePolicy = "merge" | "overwrite";
  declare export type ErrorPolicy = "none" | "ignore" | "all";
  declare export interface QueryOptions<TVariables = OperationVariables, TData = any> {
    query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>;
    variables?: TVariables;
    errorPolicy?: ErrorPolicy;
    context?: any;
    fetchPolicy?: FetchPolicy;
    pollInterval?: number;
    notifyOnNetworkStatusChange?: boolean;
    returnPartialData?: boolean;
    partialRefetch?: boolean;
    canonizeResults?: boolean;
  }
  declare export type WatchQueryOptions<TVariables = OperationVariables, TData = any> = {
    fetchPolicy?: WatchQueryFetchPolicy,
    nextFetchPolicy?:
      | WatchQueryFetchPolicy
      | ((
      currentFetchPolicy: WatchQueryFetchPolicy,
      context: NextFetchPolicyContext<TData, TVariables>
    ) => WatchQueryFetchPolicy),
    initialFetchPolicy?: WatchQueryFetchPolicy,
    refetchWritePolicy?: RefetchWritePolicy,
    ...
  } & $Diff<QueryOptions<TVariables, TData>, {| fetchPolicy: any |}>;
  declare export interface NextFetchPolicyContext<TData, TVariables> {
    reason: "after-fetch" | "variables-changed";
    observable: ObservableQuery<TData, TVariables>;
    options: WatchQueryOptions<TVariables, TData>;
    initialFetchPolicy: WatchQueryFetchPolicy;
  }
  declare export type FetchMoreQueryOptions<TVariables, TData = any> = {|
    query?: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    variables?: $Rest<TVariables, { ... }>,
    context?: any
  |};
  declare export type UpdateQueryFn<
    TData = any,
    TSubscriptionVariables = OperationVariables,
    TSubscriptionData = TData
  > = (
    previousQueryResult: TData,
    options: {
      subscriptionData: {
        data: TSubscriptionData,
        ...
      },
      variables?: TSubscriptionVariables,
      ...
    }
  ) => TData;
  declare export type SubscribeToMoreOptions<
    TData = any,
    TSubscriptionVariables = OperationVariables,
    TSubscriptionData = TData
  > = {
    document: GraphQL$DocumentNode | TypedDocumentNode<TSubscriptionData, TSubscriptionVariables>,
    variables?: TSubscriptionVariables,
    updateQuery?: UpdateQueryFn<TData, TSubscriptionVariables, TSubscriptionData>,
    onError?: (error: Error) => void,
    context?: DefaultContext,
    ...
  };
  declare export interface SubscriptionOptions<TVariables = OperationVariables, TData = any> {
    query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>;
    variables?: TVariables;
    fetchPolicy?: FetchPolicy;
    errorPolicy?: ErrorPolicy;
    context?: DefaultContext;
  }
  declare export interface MutationBaseOptions<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > {
    optimisticResponse?: TData | ((vars: TVariables) => TData);
    updateQueries?: MutationQueryReducersMap<TData>;
    refetchQueries?: ((result: ApolloClient$FetchResult<TData>) => InternalRefetchQueriesInclude) | InternalRefetchQueriesInclude;
    awaitRefetchQueries?: boolean;
    update?: MutationUpdaterFunction<TData, TVariables, TContext, TCache>;
    onQueryUpdated?: OnQueryUpdated<any>;
    errorPolicy?: ErrorPolicy;
    variables?: TVariables;
    context?: TContext;
  }
  declare export type MutationOptions<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > = {
    mutation: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    fetchPolicy?: MutationFetchPolicy,
    keepRootFields?: boolean,
    ...
  } & MutationBaseOptions<TData, TVariables, TContext, TCache>;

  // @apollo/client/core/networkStatus.d.ts

  declare export var NetworkStatus: {|
    +loading: 1,
    +setVariables: 2,
    +fetchMore: 3,
    +refetch: 4,
    +poll: 6,
    +ready: 7,
    +error: 8,
  |};
  declare export function isNetworkRequestInFlight(networkStatus?: $Values<typeof NetworkStatus>): boolean;

  // @apollo/client/core/LocalState.d.ts

  declare export type Resolver = (
    rootValue?: any,
    args?: any,
    context?: any,
    info?: {
      field: FieldNode,
      fragmentMap: FragmentMap,
      ...
    }
  ) => any;
  declare export type FragmentMatcher = (rootValue: any, typeCondition: string, context: any) => boolean;
  declare export type ExecContext = {
    fragmentMap: FragmentMap,
    context: any,
    variables: VariableMap,
    fragmentMatcher: FragmentMatcher,
    defaultOperationType: string,
    exportedVariables: { [key: string]: any, ... },
    onlyRunForcedResolvers: boolean,
    ...
  };
  declare export type LocalStateOptions<TCacheShape> = {
    cache: ApolloCache<TCacheShape>,
    client?: ApolloClient<TCacheShape>,
    resolvers?: Resolvers | Resolvers[],
    fragmentMatcher?: FragmentMatcher,
    ...
  };
  declare export class LocalState<TCacheShape> {
    constructor(x: LocalStateOptions<TCacheShape>): this;
    addResolvers(resolvers: Resolvers | Resolvers[]): void;
    setResolvers(resolvers: Resolvers | Resolvers[]): void;
    getResolvers(): Resolvers;
    runResolvers<TData>(x: {
      document: GraphQL$DocumentNode | null,
      remoteResult: ApolloClient$FetchResult<TData>,
      context?: { [key: string]: any, ... },
      variables?: { [key: string]: any, ... },
      onlyRunForcedResolvers?: boolean,
      ...
    }): Promise<ApolloClient$FetchResult<TData>>;
    setFragmentMatcher(fragmentMatcher: FragmentMatcher): void;
    getFragmentMatcher(): FragmentMatcher;
    clientQuery(document: GraphQL$DocumentNode): GraphQL$DocumentNode | null;
    serverQuery(document: GraphQL$DocumentNode): GraphQL$DocumentNode | null;
    prepareContext(context?: { [key: string]: any, ... }): {
      cache: ApolloCache<TCacheShape>,
      getCacheKey(obj: StoreObject): string | void,
      ...
    };
    addExportedVariables(
      document: GraphQL$DocumentNode,
      variables?: OperationVariables,
      context?: { ... }
    ): Promise<{
      [x: string]: any,
    }>;
    shouldForceResolvers(document: ASTNode): boolean;
  }

  // @apollo/client/core/QueryManager.d.ts

  declare export interface MutationStoreValue {
    mutation: GraphQL$DocumentNode;
    variables: { [key: string]: any, ... };
    loading: boolean;
    error: Error | null;
  }
  declare export type UpdateQueries<TData> = $PropertyType<MutationOptions<TData, any, any>, "updateQueries">;
  declare export interface TransformCacheEntry {
    document: GraphQL$DocumentNode;
    hasClientExports: boolean;
    hasForcedResolvers: boolean;
    clientQuery: GraphQL$DocumentNode | null;
    serverQuery: GraphQL$DocumentNode | null;
    defaultVars: OperationVariables;
    asQuery: GraphQL$DocumentNode;
  }
  declare export class QueryManager<TStore> {
    cache: ApolloCache<TStore>;
    link: ApolloLink;
    defaultOptions: DefaultOptions;
    +assumeImmutableResults: boolean;
    +ssrMode: boolean;
    mutationStore?: {
      [mutationId: string]: MutationStoreValue,
    };
    constructor(x: {
      cache: ApolloCache<TStore>,
      link: ApolloLink,
      defaultOptions?: DefaultOptions,
      queryDeduplication?: boolean,
      onBroadcast?: () => void,
      ssrMode?: boolean,
      clientAwareness?: { [key: string]: string, ... },
      localState?: LocalState<TStore>,
      assumeImmutableResults?: boolean,
      ...
    }): this;
    stop(): void;
    mutate<TData, TVariables, TContext, TCache: ApolloCache<any>>(
      x: MutationOptions<TData, TVariables, TContext>
    ): Promise<ApolloClient$FetchResult<TData>>;
    markMutationResult<TData, TVariables, TContext, TCache: ApolloCache<any>>(
      mutation: {
        mutationId: string,
        result: ApolloClient$FetchResult<TData>,
        document: GraphQL$DocumentNode,
        variables?: TVariables,
        fetchPolicy?: MutationFetchPolicy,
        errorPolicy: ErrorPolicy,
        context?: TContext,
        updateQueries: UpdateQueries<TData>,
        update?: MutationUpdaterFunction<TData, TVariables, TContext, TCache>,
        awaitRefetchQueries?: boolean,
        refetchQueries?: InternalRefetchQueriesInclude,
        removeOptimistic?: string,
        onQueryUpdated?: OnQueryUpdated<any>,
        keepRootFields?: boolean,
        ...
      },
      cache?: ApolloCache<TStore>
    ): Promise<ApolloClient$FetchResult<TData>>;
    markMutationOptimistic<TData, TVariables, TContext, TCache: ApolloCache<any>>(
      optimisticResponse: any,
      mutation: {
        mutationId: string,
        document: GraphQL$DocumentNode,
        variables?: TVariables,
        fetchPolicy?: MutationFetchPolicy,
        errorPolicy: ErrorPolicy,
        context?: TContext,
        updateQueries: UpdateQueries<TData>,
        update?: MutationUpdaterFunction<TData, TVariables, TContext, TCache>,
        keepRootFields?: boolean,
        ...
      }
    ): void;
    fetchQuery<TData, TVars>(
      queryId: string,
      options: WatchQueryOptions<TVars, TData>,
      networkStatus?: $Values<typeof NetworkStatus>
    ): Promise<ApolloQueryResult<TData>>;
    getQueryStore(): { [key: string]: QueryStoreValue, ... };
    resetErrors(queryId: string): void;
    transform(document: GraphQL$DocumentNode): TransformCacheEntry;
    watchQuery<T, TVariables>(options: WatchQueryOptions<TVariables, T>): ObservableQuery<T, TVariables>;
    query<TData, TVars>(options: QueryOptions<TVars, TData>, queryId?: string): Promise<ApolloQueryResult<TData>>;
    generateQueryId(): string;
    generateRequestId(): number;
    generateMutationId(): string;
    stopQueryInStore(queryId: string): void;
    clearStore(options?: Cache.ResetOptions): Promise<void>;
    getObservableQueries(
      include?: InternalRefetchQueriesInclude
    ): Map<string, ObservableQuery<any, OperationVariables>>;
    reFetchObservableQueries(includeStandby?: boolean): Promise<ApolloQueryResult<any>[]>;
    setObservableQuery(observableQuery: ObservableQuery<any, any>): void;
    startGraphQLSubscription<T>(x: SubscriptionOptions<>): ZenObservable$Observable<ApolloClient$FetchResult<T>>;
    stopQuery(queryId: string): void;
    removeQuery(queryId: string): void;
    broadcastQueries(): void;
    getLocalState(): LocalState<TStore>;
    fetchQueryObservable<TData, TVars>(
      queryId: string,
      options: WatchQueryOptions<TVars, TData>,
      networkStatus?: $Values<typeof NetworkStatus>
    ): Concast<ApolloQueryResult<TData>>;
    refetchQueries<TResult>(
      x: InternalRefetchQueriesOptions<ApolloCache<TStore>, TResult>
    ): InternalRefetchQueriesMap<TResult>;
  }

  // @apollo/client/core/ObservableQuery.d.ts

  declare export interface FetchMoreOptions<TData = any, TVariables = OperationVariables> {
    updateQuery?: (
      previousQueryResult: TData,
      options: {
        fetchMoreResult?: TData,
        variables?: TVariables,
        ...
      }
    ) => TData;
  }
  declare export interface UpdateQueryOptions<TVariables> {
    variables?: TVariables;
  }
  declare export class ObservableQuery<TData = any, TVariables = OperationVariables>
    mixins ZenObservable$Observable<ApolloQueryResult<TData>> {
    +options: WatchQueryOptions<TVariables, TData>;
    +queryId: string;
    +queryName?: string;
    query: TypedDocumentNode<TData, TVariables>;
    variables: TVariables | void;
    constructor(x: {
      queryManager: QueryManager<any>,
      queryInfo: QueryInfo,
      options: WatchQueryOptions<TVariables, TData>,
      ...
    }): this;
    result(): Promise<ApolloQueryResult<TData>>;
    getCurrentResult(saveAsLastResult?: boolean): ApolloQueryResult<TData>;
    isDifferentFromLastResult(newResult: ApolloQueryResult<TData>, variables?: TVariables): boolean | void;
    getLastResult(variablesMustMatch?: boolean): ApolloQueryResult<TData> | void;
    getLastError(variablesMustMatch?: boolean): ApolloError | void;
    resetLastResults(): void;
    resetQueryStoreErrors(): void;
    refetch(variables?: $Rest<TVariables, { ... }>): Promise<ApolloQueryResult<TData>>;
    fetchMore<TFetchData, TFetchVars>(fetchMoreOptions: {
      ...FetchMoreQueryOptions<TFetchVars, TFetchData>,
      updateQuery?: (
        previousQueryResult: TData,
        options: {
          fetchMoreResult: TFetchData,
          variables: TFetchVars,
          ...
        }
      ) => TData,
      ...
    }): Promise<ApolloQueryResult<TFetchData>>;
    subscribeToMore<TSubscriptionData, TSubscriptionVariables>(
      options: SubscribeToMoreOptions<TData, TSubscriptionVariables, TSubscriptionData>
    ): () => void;
    setOptions(newOptions: $Rest<WatchQueryOptions<TVariables, TData>, { ... }>): Promise<ApolloQueryResult<TData>>;
    setVariables(variables: TVariables): Promise<ApolloQueryResult<TData> | void>;
    updateQuery<TVars>(
      mapFn: (previousQueryResult: TData, options: OperationVariables) => TData
    ): void;
    startPolling(pollInterval: number): void;
    stopPolling(): void;
    reobserve(
      newOptions?: $Rest<WatchQueryOptions<TVariables, TData>, { ... }>,
      newNetworkStatus?: $Values<typeof NetworkStatus>
    ): Promise<ApolloQueryResult<TData>>;
    hasObservers(): boolean;
  }
  declare export function reobserveCacheFirst<TData, TVars>(
    obsQuery: ObservableQuery<TData, TVars>
  ): Promise<ApolloQueryResult<TData>>;
  declare export function logMissingFieldErrors(missing: MissingFieldError[] | MissingTree | void): void;

  // @apollo/client/core/types.d.ts

  declare export type DefaultContext = { [key: string]: any, ... };
  declare export type QueryListener = (queryInfo: QueryInfo) => void;
  declare export type OnQueryUpdated<TResult> = (
    observableQuery: ObservableQuery<any>,
    diff: Cache$DiffResult<any>,
    lastDiff: Cache$DiffResult<any> | void
  ) => boolean | TResult;
  declare export type RefetchQueryDescriptor = string | GraphQL$DocumentNode;
  declare export type InternalRefetchQueryDescriptor = RefetchQueryDescriptor | QueryOptions<>;
  declare export type RefetchQueriesIncludeShorthand = "all" | "active";
  declare export type RefetchQueriesInclude = RefetchQueryDescriptor[] | RefetchQueriesIncludeShorthand;
  declare export type InternalRefetchQueriesInclude = InternalRefetchQueryDescriptor[] | RefetchQueriesIncludeShorthand;
  declare export interface RefetchQueriesOptions<TCache: ApolloCache<any>, TResult> {
    updateCache?: (cache: TCache) => void;
    include?: RefetchQueriesInclude;
    optimistic?: boolean;
    onQueryUpdated?: OnQueryUpdated<TResult> | null;
  }
  // export declare type RefetchQueriesPromiseResults<TResult> = IsStrictlyAny<TResult> extends true ? any[] : TResult extends boolean ? ApolloQueryResult<any>[] : TResult extends PromiseLike<infer U> ? U[] : TResult[];
  declare export type RefetchQueriesPromiseResults<TResult> = TResult[];
  declare export type RefetchQueriesResult<TResult> = {
    queries: ObservableQuery<any>[],
    results: InternalRefetchQueriesResult<TResult>[],
    ...
  } & Promise<void>;
  declare export type InternalRefetchQueriesOptions<TCache: ApolloCache<any>, TResult> = {
    include?: InternalRefetchQueriesInclude,
    removeOptimistic?: string,
    ...
  } & $Diff<RefetchQueriesOptions<TCache, TResult>, {| include: any |}>;
  declare export type InternalRefetchQueriesResult<TResult> = $FlowGen$If<
    $FlowGen$Assignable<TResult, boolean>,
    Promise<ApolloQueryResult<any>>,
    TResult
  >;
  declare export type InternalRefetchQueriesMap<TResult> = Map<
    ObservableQuery<any>,
    InternalRefetchQueriesResult<TResult>
  >;
  declare export type OperationVariables = { [key: string]: any, ... };
  declare export type ApolloQueryResult<T> = {
    data: T,
    errors?: $ReadOnlyArray<GraphQL$GraphQLError>,
    error?: ApolloError,
    loading: boolean,
    networkStatus: $Values<typeof NetworkStatus>,
    partial?: boolean,
    ...
  };
  declare export type MutationQueryReducer<T> = (
    previousResult: { [key: string]: any, ... },
    options: {
      mutationResult: ApolloClient$FetchResult<T>,
      queryName: string | void,
      queryVariables: { [key: string]: any, ... },
      ...
    }
  ) => { [key: string]: any, ... };
  declare export type MutationQueryReducersMap<
    T = {
      [key: string]: any,
    }
  > = {
    [queryName: string]: MutationQueryReducer<T>,
  };
  declare export type MutationUpdaterFn<
    T = {
      [key: string]: any,
    }
  > = (cache: ApolloCache<T>, mutationResult: ApolloClient$FetchResult<T>) => void;
  declare export type MutationUpdaterFunction<TData, TVariables, TContext, TCache: ApolloCache<any>> = (
    cache: TCache,
    result: $Diff<ApolloClient$FetchResult<TData>, {| context: any |}>,
    options: {
      context?: TContext,
      variables?: TVariables,
      ...
    }
  ) => void;
  declare export interface Resolvers {
    [key: string]: {
      [field: string]: Resolver,
    };
  }

  // @apollo/client/core/ApolloClient.d.ts

  declare export interface DefaultOptions {
    watchQuery?: $Rest<WatchQueryOptions<any, any>, { ... }>;
    query?: $Rest<QueryOptions<any, any>, { ... }>;
    mutate?: $Rest<MutationOptions<any, any, any>, { ... }>;
  }
  declare export type ApolloClientOptions<TCacheShape> = {
    uri?: string | UriFunction,
    credentials?: string,
    headers?: { [key: string]: string, ... },
    link?: ApolloLink,
    cache: ApolloCache<TCacheShape>,
    ssrForceFetchDelay?: number,
    ssrMode?: boolean,
    connectToDevTools?: boolean,
    queryDeduplication?: boolean,
    defaultOptions?: DefaultOptions,
    assumeImmutableResults?: boolean,
    resolvers?: Resolvers | Resolvers[],
    typeDefs?: string | string[] | GraphQL$DocumentNode | GraphQL$DocumentNode[],
    fragmentMatcher?: FragmentMatcher,
    name?: string,
    version?: string,
    ...
  };
  declare export class ApolloClient<TCacheShape> implements DataProxy {
    link: ApolloLink;
    cache: ApolloCache<TCacheShape>;
    disableNetworkFetches: boolean;
    version: string;
    queryDeduplication: boolean;
    defaultOptions: DefaultOptions;
    +typeDefs: $PropertyType<ApolloClientOptions<TCacheShape>, "typeDefs">;
    constructor(options: ApolloClientOptions<TCacheShape>): this;
    stop(): void;
    watchQuery<T, TVariables>(options: WatchQueryOptions<TVariables, T>): ObservableQuery<T, TVariables>;
    query<T, TVariables>(options: QueryOptions<TVariables, T>): Promise<ApolloQueryResult<T>>;
    mutate<
      TData = any,
      TVariables = OperationVariables,
      TContext = DefaultContext,
      TCache: ApolloCache<any> = ApolloCache<any>
    >(
      options: MutationOptions<TData, TVariables, TContext>
    ): Promise<ApolloClient$FetchResult<TData>>;
    subscribe<T, TVariables>(options: SubscriptionOptions<TVariables, T>): ZenObservable$Observable<ApolloClient$FetchResult<T>>;
    readQuery<QueryType, TVariables>(options: DataProxy$ReadQueryOptions<QueryType, TVariables>, optimistic?: boolean): QueryType | null;
    readFragment<TData, TVariables>(options: DataProxy$ReadFragmentOptions<TData, TVariables>, optimistic?: boolean): TData | null;
    writeQuery<TData, TVariables>(options: Cache$WriteQueryOptions<TData, TVariables>): void;
    writeFragment<TData, TVariables>(options: Cache$WriteFragmentOptions<TData, TVariables>): void;
    __actionHookForDevTools(cb: () => any): void;
    __requestRaw(payload: ApolloClient$GraphQLRequest): ZenObservable$Observable<GraphQL$ExecutionResult<>>;
    resetStore(): Promise<ApolloQueryResult<any>[] | null>;
    clearStore(): Promise<any[]>;
    onResetStore(cb: () => Promise<any>): () => void;
    onClearStore(cb: () => Promise<any>): () => void;
    reFetchObservableQueries(includeStandby?: boolean): Promise<ApolloQueryResult<any>[]>;
    refetchQueries<TCache: ApolloCache<any>, TResult>(
      options: RefetchQueriesOptions<TCache, TResult>
    ): RefetchQueriesResult<TResult>;
    getObservableQueries(include?: RefetchQueriesInclude): Map<string, ObservableQuery<any>>;
    extract(optimistic?: boolean): TCacheShape;
    restore(serializedState: TCacheShape): ApolloCache<TCacheShape>;
    addResolvers(resolvers: Resolvers | Resolvers[]): void;
    setResolvers(resolvers: Resolvers | Resolvers[]): void;
    getResolvers(): Resolvers;
    setLocalStateFragmentMatcher(fragmentMatcher: FragmentMatcher): void;
    setLink(newLink: ApolloLink): void;
  }

  // @apollo/client/react/components/Mutation.d.ts

  declare export function Mutation<TData = any, TVariables = OperationVariables>(
    props: MutationComponentOptions<TData, TVariables>
  ): Node;

  // @apollo/client/react/components/Query.d.ts

  declare export function Query<TData = any, TVariables = OperationVariables>(
    props: QueryComponentOptions<TData, TVariables>
  ): Node;

  // @apollo/client/react/components/Subscription.d.ts

  declare export function Subscription<TData = any, TVariables = OperationVariables>(
    props: SubscriptionComponentOptions<TData, TVariables>
  ): Node;

  // @apollo/client/react/components/types.d.ts

  declare export type QueryComponentOptions<TData = any, TVariables = OperationVariables> = {
    children: (result: QueryResult<TData, TVariables>) => React$Node | null,
    query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    ...
  } & QueryFunctionOptions<TData, TVariables>;
  declare export type MutationComponentOptions<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > = {
    mutation: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    children: (
      mutateFunction: MutationFunction<TData, TVariables, TContext>,
      result: MutationResult<TData>
    ) => React$Node | null,
    ...
  } & BaseMutationOptions<TData, TVariables, TContext, TCache>;
  declare export type SubscriptionComponentOptions<TData = any, TVariables = OperationVariables> = {
    subscription: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    children?: null | ((result: SubscriptionResult<TData>) => React$Node | null),
    ...
  } & BaseSubscriptionOptions<TData, TVariables>;

  // @apollo/client/react/context/ApolloConsumer.d.ts

  declare export interface ApolloConsumerProps {
    children: (client: ApolloClient<{ [key: string]: any }>) => Node | null;
  }
  declare export var ApolloConsumer: ComponentType<ApolloConsumerProps>;

  // @apollo/client/react/context/ApolloContext.d.ts

  declare export interface ApolloContextValue {
    client?: ApolloClient<{ [key: string]: any }>;
    renderPromises?: RenderPromises;
  }
  declare export function getApolloContext(): Context<ApolloContextValue>;

  // @apollo/client/react/context/ApolloProvider.d.ts

  declare export interface ApolloProviderProps<TCache> {
    client: ApolloClient<TCache>;
    children: Node | Node[] | null;
  }
  declare export var ApolloProvider: ComponentType<ApolloProviderProps<any>>;

  // @apollo/client/react/hoc/graphql.d.ts

  declare export function graphql<TProps: { ... }, TData, TGraphQLVariables, TChildProps>(
    document: GraphQL$DocumentNode,
    operationOptions?: OperationOption<TProps, TData, TGraphQLVariables, TChildProps>
  ): (WrappedComponent: React$ComponentType<{| ...TProps, ...TChildProps |}>) => React$Component<TProps>;

  // @apollo/client/react/hoc/hoc-utils.d.ts

  declare export var defaultMapPropsToOptions: () => { ... };
  declare export var defaultMapResultToProps: <P>(props: P) => P;
  declare export var defaultMapPropsToSkip: () => boolean;
  declare export function getDisplayName<P>(WrappedComponent: ComponentType<P>): string;
  declare export function calculateVariablesFromProps<TProps>(
    operation: IDocumentDefinition,
    props: TProps
  ): OperationVariables;
  declare export type RefSetter<TChildProps> = (ref: Component<TChildProps>) => void | void;
  declare export class GraphQLBase<TProps, TChildProps, TState = any> extends React$Component<TProps, TState> {
    withRef: boolean;
    constructor(props: TProps): this;
    getWrappedInstance(): Component<TChildProps, any> | void;
    setWrappedInstance(ref: Component<TChildProps>): void;
  }

  // @apollo/client/react/hoc/mutation-hoc.d.ts

  declare export function withMutation<
    TProps: { ... },
    TData: { [key: string]: any, ... },
    TGraphQLVariables,
    TChildProps,
    TContext,
    TCache: ApolloCache<any>
  >(
    document: GraphQL$DocumentNode,
    operationOptions?: OperationOption<TProps, TData, TGraphQLVariables, TChildProps>
  ): (WrappedComponent: ComponentType<{| ...TProps, ...TChildProps |}>) => Component<TProps>;

  // @apollo/client/react/hoc/query-hoc.d.ts

  declare export function withQuery<TProps: { ... }, TData, TGraphQLVariables, TChildProps>(
    document: GraphQL$DocumentNode,
    operationOptions?: OperationOption<TProps, TData, TGraphQLVariables, TChildProps>
  ): (WrappedComponent: ComponentType<{| ...TProps, ...TChildProps |}>) => Component<TProps>;

  // @apollo/client/react/hoc/subscription-hoc.d.ts

  declare function withSubscription<TProps: { ... }, TData, TGraphQLVariables, TChildProps>(
    document: GraphQL$DocumentNode,
    operationOptions?: OperationOption<TProps, TData, TGraphQLVariables, TChildProps>
  ): (WrappedComponent: ComponentType<{| ...TProps, ...TChildProps |}>) => Component<TProps>;

  // @apollo/client/react/hoc/types.d.ts

  declare export interface QueryControls<TData = any, TGraphQLVariables = OperationVariables> {
    error?: ApolloError;
    networkStatus: number;
    loading: boolean;
    variables: TGraphQLVariables;
    fetchMore: (fetchMoreOptions: {|
      ...FetchMoreQueryOptions<TGraphQLVariables, TData>,
      ...FetchMoreOptions<TData, TGraphQLVariables>,
    |}) => Promise<ApolloQueryResult<TData>>;
    refetch: (variables?: TGraphQLVariables) => Promise<ApolloQueryResult<TData>>;
    startPolling: (pollInterval: number) => void;
    stopPolling: () => void;
    subscribeToMore: (options: SubscribeToMoreOptions<>) => () => void;
    updateQuery: (mapFn: (previousQueryResult: any, options: UpdateQueryOptions<any>) => any) => void;
  }
  declare export type DataValue<TData, TGraphQLVariables = OperationVariables> = {|
    ...QueryControls<TData, TGraphQLVariables>,
    ...$Rest<TData, { ... }>,
  |};
  declare export interface DataProps<TData, TGraphQLVariables = OperationVariables> {
    data: DataValue<TData, TGraphQLVariables>;
  }
  declare export interface MutateProps<TData = any, TGraphQLVariables = OperationVariables> {
    mutate: MutationFunction<TData, TGraphQLVariables>;
    result: MutationResult<TData>;
  }
  declare export type ChildProps<TProps = { ... }, TData = { ... }, TGraphQLVariables = OperationVariables> = {|
    ...TProps,
    ...$Rest<DataProps<TData, TGraphQLVariables>, { ... }>,
    ...$Rest<MutateProps<TData, TGraphQLVariables>, { ... }>,
  |};
  declare export type ChildDataProps<TProps = { ... }, TData = { ... }, TGraphQLVariables = OperationVariables> = {|
    ...TProps,
    ...DataProps<TData, TGraphQLVariables>,
  |};
  declare export type ChildMutateProps<TProps = { ... }, TData = { ... }, TGraphQLVariables = OperationVariables> = {|
    ...TProps,
    ...MutateProps<TData, TGraphQLVariables>,
  |};
  declare export type OptionProps<TProps = any, TData = any, TGraphQLVariables = OperationVariables> = {
    ownProps: TProps,
    ...
  } & $Rest<DataProps<TData, TGraphQLVariables>, { ... }> &
    $Rest<MutateProps<TData, TGraphQLVariables>, { ... }>;
  declare export interface OperationOption<
    TProps,
    TData,
    TGraphQLVariables = OperationVariables,
    TChildProps = ChildProps<TProps, TData, TGraphQLVariables>,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > {
    options?:
      | BaseQueryOptions<TGraphQLVariables>
      | BaseMutationOptions<TData, TGraphQLVariables, TContext, TCache>
      | ((
      props: TProps
    ) => BaseQueryOptions<TGraphQLVariables> | BaseMutationOptions<TData, TGraphQLVariables, TContext, TCache>);
    props?: (props: OptionProps<TProps, TData, TGraphQLVariables>, lastProps?: TChildProps | void) => TChildProps;
    skip?: boolean | ((props: TProps) => boolean);
    name?: string;
    withRef?: boolean;
    shouldResubscribe?: (props: TProps, nextProps: TProps) => boolean;
    alias?: string;
  }
  declare export type WithApolloClient<P> = {
    ...P,
    client?: ApolloClient<any>,
    ...
  };

  // @apollo/client/react/hoc/withApollo.d.ts

  declare export function withApollo<TProps, TResult>(
    WrappedComponent: ComponentType<WithApolloClient<$Diff<TProps, {| client: any |}>>>,
    operationOptions?: OperationOption<TProps, TResult>
  ): Component<$Diff<TProps, {| client: any |}>>;

  // @apollo/client/react/hooks/useApolloClient.d.ts

  declare export function useApolloClient(
    override?: ApolloClient<{ [key: string]: any }>
  ): ApolloClient<{ [key: string]: any }>;

  // @apollo/client/react/hooks/useFragment.d.ts

  declare export type UseFragmentOptions<TData, TVars> = {
    from: StoreObject | Reference | string,
    optimistic?: boolean,
    ...
  } & $Diff<Cache$DiffOptions<TData, TVars>, {| id: any, query: any, optimistic: any, previousResult: any |}> &
    $Diff<Cache$ReadFragmentOptions<TData, TVars>, {| id: any |}>;
  declare export interface UseFragmentResult<TData> {
    data: TData | void;
    complete: boolean;
    missing?: MissingTree;
  }
  declare export function useFragment_experimental<TData, TVars>(
    options: UseFragmentOptions<TData, TVars>
  ): UseFragmentResult<TData>;

  // @apollo/client/react/hooks/useLazyQuery.d.ts

  declare export function useLazyQuery<TData, TVariables>(
    query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    options?: LazyQueryHookOptions<TData, TVariables>
  ): LazyQueryResultTuple<TData, TVariables>;

  // @apollo/client/react/hooks/useMutation.d.ts

  declare export function useMutation<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  >(
    mutation: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    options?: MutationHookOptions<TData, TVariables, TContext>
  ): MutationTuple<TData, TVariables, TContext, TCache>;

  // @apollo/client/react/hooks/useQuery.d.ts

  declare export function useQuery<TData, TVariables>(
    query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    options?: QueryHookOptions<TData, TVariables>
  ): QueryResult<TData, TVariables>;
  declare export function useInternalState<TData, TVariables>(
    client: ApolloClient<any>,
    query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>
  ): InternalState<TData, TVariables>;
  declare export class InternalState<TData, TVariables> {
    +client: $Call<<R>((...args: any[]) => R) => R, typeof useApolloClient>;
    +query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>;
    constructor(
      client: $Call<<R>((...args: any[]) => R) => R, typeof useApolloClient>,
      query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
      previous?: InternalState<TData, TVariables>
    ): this;
    forceUpdate(): void;
    asyncUpdate(): Promise<QueryResult<TData, TVariables>>;
    useQuery(options: QueryHookOptions<TData, TVariables>): QueryResult<TData, TVariables>;
    getDefaultFetchPolicy(): WatchQueryFetchPolicy;
    toQueryResult(result: ApolloQueryResult<TData>): QueryResult<TData, TVariables>;
  }

  // @apollo/client/react/hooks/useReactiveVar.d.ts

  declare export function useReactiveVar<T>(rv: ReactiveVar<T>): T;

  // @apollo/client/react/hooks/useSubscription.d.ts

  declare export function useSubscription<TData, TVariables>(
    subscription: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    options?: SubscriptionHookOptions<TData, TVariables>
  ): SubscriptionResult<TData, any>;

  // @apollo/client/react/parser/index.d.ts

  declare export var DocumentType: {|
    +Query: 0,
    +Mutation: 1,
    +Subscription: 2,
  |};
  declare export interface IDocumentDefinition {
    type: $Values<typeof DocumentType>;
    name: string;
    variables: $ReadOnlyArray<VariableDefinitionNode>;
  }
  declare export function operationName(type: $Values<typeof DocumentType>): string;
  declare export function parser(document: GraphQL$DocumentNode): IDocumentDefinition;
  declare export function verifyDocumentType(document: GraphQL$DocumentNode, type: $Values<typeof DocumentType>): void;

  // @apollo/client/react/ssr/getDataFromTree.d.ts

  declare export function getDataFromTree(
    tree: Node,
    context?: {
      [key: string]: any,
    }
  ): Promise<string>;
  declare export type GetMarkupFromTreeOptions = {
    tree: Node,
    context?: {
      [key: string]: any,
    },
    renderFunction?: (tree: Element<any>) => string | Promise<string>,
    ...
  };
  declare export function getMarkupFromTree(x: GetMarkupFromTreeOptions): Promise<string>;

  // @apollo/client/react/ssr/RenderPromises.d.ts

  declare export interface QueryData {
    getOptions(): any;
    fetchData(): Promise<void>;
  }
  declare export class RenderPromises {
    stop(): void;
    registerSSRObservable<TData, TVariables>(observable: ObservableQuery<any, TVariables>): void;
    getSSRObservable<TData, TVariables>(
      props: QueryDataOptions<TData, TVariables>
    ): ObservableQuery<any, TVariables> | null;
    addQueryPromise(queryInstance: QueryData, finish?: () => Node): Node;
    addObservableQueryPromise<TData, TVariables>(
      obsQuery: ObservableQuery<TData, TVariables>
    ): Node;
    hasPromises(): boolean;
    consumeAndAwaitPromises(): Promise<any[]>;
  }

  // @apollo/client/react/ssr/RenderPromises.d.ts

  declare export function renderToStringWithData(component: Element<any>): Promise<string>;

  // @apollo/client/react/types/types.d.ts

  declare export type CommonOptions<TOptions> = {
    ...TOptions,
    client?: ApolloClient<{ [key: string]: any }>,
    ...
  };
  declare export type BaseQueryOptions<TVariables = OperationVariables> = {
    ssr?: boolean,
    client?: ApolloClient<any>,
    context?: DefaultContext,
    ...
  } & $Diff<WatchQueryOptions<TVariables>, {| query: any |}>;
  declare export type QueryFunctionOptions<TData = any, TVariables = OperationVariables> = {
    skip?: boolean,
    onCompleted?: (data: TData) => void,
    onError?: (error: ApolloError) => void,
    defaultOptions?: $Rest<WatchQueryOptions<TVariables, TData>, { ... }>,
    ...
  } & BaseQueryOptions<TVariables>;
  declare export type ObservableQueryFields<TData, TVariables> = {|
    startPolling(pollInterval: number): void;
    stopPolling(): void;
    subscribeToMore<TSubscriptionData, TSubscriptionVariables>(
      options: SubscribeToMoreOptions<TData, TSubscriptionVariables, TSubscriptionData>
    ): () => void;
    updateQuery<TVars>(
      mapFn: (previousQueryResult: TData, options: OperationVariables) => TData
    ): void;
    refetch(variables?: $Rest<TVariables, { ... }>): Promise<ApolloQueryResult<TData>>;
    reobserve(
      newOptions?: $Rest<WatchQueryOptions<TVariables, TData>, { ... }>,
      newNetworkStatus?: $Values<typeof NetworkStatus>
    ): Promise<ApolloQueryResult<TData>>;
    variables: TVariables | void;
    fetchMore<TFetchData, TFetchVars>(fetchMoreOptions: {
      ...FetchMoreQueryOptions<TFetchVars, TFetchData>,
      updateQuery?: (
        previousQueryResult: TData,
        options: {
          fetchMoreResult: TFetchData,
          variables: TFetchVars,
          ...
        }
      ) => TData,
      ...
    }): Promise<ApolloQueryResult<TFetchData>>;
  |};
  declare export type QueryResult<TData = any, TVariables = OperationVariables> = {
    client: ApolloClient<any>,
    observable: ObservableQuery<TData, TVariables>,
    data: TData | void,
    previousData?: TData,
    error?: ApolloError,
    loading: boolean,
    networkStatus: typeof NetworkStatus,
    called: boolean,
    ...
  } & ObservableQueryFields<TData, TVariables>;
  declare export type QueryDataOptions<TData = any, TVariables = OperationVariables> = {
    children?: (result: QueryResult<TData, TVariables>) => Node,
    query: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    ...
  } & QueryFunctionOptions<TData, TVariables>;
  declare export type QueryHookOptions<TData = any, TVariables = OperationVariables> = {
    query?: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    ...
  } & QueryFunctionOptions<TData, TVariables>;
  declare export type LazyQueryHookOptions<TData = any, TVariables = OperationVariables> = { ... } & $Diff<
    QueryHookOptions<TData, TVariables>,
    {| skip: any |}
  >;
  declare export interface QueryLazyOptions<TVariables> {
    variables?: TVariables;
    context?: DefaultContext;
  }
  declare export type LazyQueryResult<TData, TVariables> = QueryResult<TData, TVariables>;
  declare export type QueryTuple<TData, TVariables> = LazyQueryResultTuple<TData, TVariables>;
  declare export type LazyQueryExecFunction<TData, TVariables> = (
    options?: $Rest<LazyQueryHookOptions<TData, TVariables>, { ... }>
  ) => Promise<QueryResult<TData, TVariables>>;
  declare export type LazyQueryResultTuple<TData, TVariables> = [
    LazyQueryExecFunction<TData, TVariables>,
    QueryResult<TData, TVariables>
  ];
  declare export type RefetchQueriesFunction = (...args: any[]) => InternalRefetchQueriesInclude;
  declare export type BaseMutationOptions<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > = {
    client?: ApolloClient<{ [key: string]: any }>,
    notifyOnNetworkStatusChange?: boolean,
    onCompleted?: (data: TData, clientOptions?: BaseMutationOptions<>) => void,
    onError?: (error: ApolloError, clientOptions?: BaseMutationOptions<>) => void,
    ignoreResults?: boolean,
    ...
  } & $Diff<MutationOptions<TData, TVariables, TContext, TCache>, {| mutation: any |}>;
  declare export type MutationFunctionOptions<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > = {
    mutation?: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    ...
  } & BaseMutationOptions<TData, TVariables, TContext, TCache>;
  declare export interface MutationResult<TData = any> {
    data?: TData | null;
    error?: ApolloError;
    loading: boolean;
    called: boolean;
    client: ApolloClient<{ [key: string]: any }>;
    reset(): void;
  }
  declare export type MutationFunction<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > = (options?: MutationFunctionOptions<TData, TVariables, TContext, TCache>) => Promise<ApolloClient$FetchResult<TData>>;
  declare export type MutationHookOptions<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > = {
    mutation?: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    ...
  } & BaseMutationOptions<TData, TVariables, TContext, TCache>;
  declare export type MutationDataOptions<
    TData = any,
    TVariables = OperationVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > = {
    mutation: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    ...
  } & BaseMutationOptions<TData, TVariables, TContext, TCache>;
  declare export type MutationTuple<
    TData,
    TVariables,
    TContext = DefaultContext,
    TCache: ApolloCache<any> = ApolloCache<any>
  > = [
    (options?: MutationFunctionOptions<TData, TVariables, TContext, TCache>) => Promise<ApolloClient$FetchResult<TData>>,
    MutationResult<TData>
  ];
  declare export interface OnDataOptions<TData = any> {
    client: ApolloClient<{ [key: string]: any }>;
    data: SubscriptionResult<TData>;
  }
  declare export interface OnSubscriptionDataOptions<TData = any> {
    client: ApolloClient<{ [key: string]: any }>;
    subscriptionData: SubscriptionResult<TData>;
  }
  declare export interface BaseSubscriptionOptions<TData = any, TVariables = OperationVariables> {
    variables?: TVariables;
    fetchPolicy?: FetchPolicy;
    shouldResubscribe?: boolean | ((options: BaseSubscriptionOptions<TData, TVariables>) => boolean);
    client?: ApolloClient<{ [key: string]: any }>;
    skip?: boolean;
    context?: DefaultContext;
    onComplete?: () => void;
    onData?: (options: OnDataOptions<TData>) => any;
    onSubscriptionData?: (options: OnSubscriptionDataOptions<TData>) => any;
    onError?: (error: ApolloError) => void;
    onSubscriptionComplete?: () => void;
  }
  declare export interface SubscriptionResult<TData = any, TVariables = any> {
    loading: boolean;
    data?: TData;
    error?: ApolloError;
    variables?: TVariables;
  }
  declare export type SubscriptionHookOptions<TData = any, TVariables = OperationVariables> = {
    subscription?: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    ...
  } & BaseSubscriptionOptions<TData, TVariables>;
  declare export type SubscriptionDataOptions<TData = any, TVariables = OperationVariables> = {
    subscription: GraphQL$DocumentNode | TypedDocumentNode<TData, TVariables>,
    children?: null | ((result: SubscriptionResult<TData>) => React$Node | null),
    ...
  } & BaseSubscriptionOptions<TData, TVariables>;
  declare export interface SubscriptionCurrentObservable {
    query?: ZenObservable$Observable<any>;
    subscription?: ZenObservable$ObservableSubscription;
  }

  // @apollo/client/link/http/iterators/async.d.ts

  declare export function asyncIterator<T>(source: AsyncIterator<T>): AsyncIterator<T>;

  // @apollo/client/link/http/iterators/promise.d.ts

  declare export function promiseIterator<T>(promise: Promise<ArrayBuffer>): AsyncIterator<T>;

  // @apollo/client/link/http/checkFetcher.d.ts

  declare export var checkFetcher: (fetcher: typeof fetch | void) => void;

  // @apollo/client/link/http/createHttpLink.d.ts

  declare export var createHttpLink: (linkOptions?: HttpOptions) => ApolloLink;

  // @apollo/client/link/http/createSignalIfSupported.d.ts

  declare export var createSignalIfSupported: () =>
    | {
    controller: boolean,
    signal: boolean,
    ...
  }
    | {
    controller: AbortController,
    signal: AbortSignal,
    ...
  };

  // @apollo/client/link/http/HttpLink.d.ts

  // $FlowFixMe[type-as-value] See https://stackoverflow.com/questions/74525879/flowtype-libdefs-how-to-export-a-class-definition-from-one-module-and-extend
  declare export class HttpLink extends ApolloLink {
    options: HttpOptions;
    requester: ApolloClient$RequestHandler;
    constructor(options?: HttpOptions): this;
  }

  // @apollo/client/link/http/parseAndCheckHttpResponse.d.ts

  declare export type ServerParseError = Error & {|
    response: Response,
    statusCode: number,
    bodyText: string,
  |};
  declare export function readMultipartBody<T>(response: Response, observer: ZenObservable$Observer<T>): Promise<void>;
  declare export function parseHeaders(
    headerText: string
  ): {
    [key: string]: string,
    ...,
  };
  declare export function parseJsonBody<T>(response: Response, bodyText: string): T;
  declare export function handleError(err: any, observer: ZenObservable$Observer<any>): void;
  declare export function readJsonBody<T>(response: Response, operation: ApolloClient$Operation, observer: ZenObservable$Observer<T>): void;
  declare export function parseAndCheckHttpResponse(
    operations: ApolloClient$Operation | ApolloClient$Operation[]
  ): (response: Response) => Promise<any>;

  // @apollo/client/link/http/rewriteURIForGET.d.ts

  declare export function rewriteURIForGET(
    chosenURI: string,
    body: Body
  ):
    | {
    parseError: any,
    newURI?: void,
    ...
  }
    | {
    newURI: string,
    parseError?: void,
    ...
  };

  // @apollo/client/link/http/selectHttpOptionsAndBody.d.ts

  declare export interface Printer {
    (node: ASTNode, originalPrint: typeof print): string;
  }
  declare export interface UriFunction {
    (operation: ApolloClient$Operation): string;
  }
  declare export interface Body {
    query?: string;
    operationName?: string;
    variables?: { [key: string]: any, ... };
    extensions?: { [key: string]: any, ... };
  }
  declare export type HttpOptions = {|
    uri?: string | UriFunction,
    includeExtensions?: boolean,
    fetch?: typeof fetch,
    headers?: any,
    preserveHeaderCase?: boolean,
    credentials?: string,
    fetchOptions?: any,
    useGETForQueries?: boolean,
    includeUnusedVariables?: boolean,
    print?: Printer,
  |};
  declare export interface HttpQueryOptions {
    includeQuery?: boolean;
    includeExtensions?: boolean;
    preserveHeaderCase?: boolean;
  }
  declare export interface HttpConfig {
    http?: HttpQueryOptions;
    options?: any;
    headers?: any;
    credentials?: any;
  }
  declare export var fallbackHttpConfig: {
    http: HttpQueryOptions,
    headers: {
      accept: string,
      "content-type": string,
      ...
    },
    options: {
      method: string,
      ...
    },
    ...
  };
  declare export var defaultPrinter: Printer;
  declare export function selectHttpOptionsAndBody(
    operation: ApolloClient$Operation,
    fallbackConfig: HttpConfig,
    ...configs: Array<HttpConfig>
  ): {
    options: HttpConfig & { [key: string]: any, ... },
    body: Body,
    ...
  };
  declare export function selectHttpOptionsAndBodyInternal(
    operation: ApolloClient$Operation,
    printer: Printer,
    ...configs: HttpConfig[]
  ): {
    options: HttpConfig & { [key: string]: any, ... },
    body: Body,
    ...
  };

  // @apollo/client/link/http/selectURI.d.ts

  declare export var selectURI: (
    operation: ApolloClient$Operation,
    fallbackURI?: string | ((operation: ApolloClient$Operation) => string) | void
  ) => any;

  // @apollo/client/link/http/serializeFetchParameter.d.ts

  declare export type ClientParseError = {
    ...InvariantError,
    parseError: Error,
    ...
  };
  declare export var serializeFetchParameter: (p: any, label: string) => string;

  // @apollo/client/link/utils/createOperation.d.ts

  declare function createOperation(starting: any, operation: ApolloClient$GraphQLRequest): ApolloClient$Operation;

  // @apollo/client/link/utils/fromError.d.ts

  declare function fromError<T>(errorValue: any): ZenObservable$Observable<T>;

  // @apollo/client/link/utils/fromPromise.d.ts

  declare function fromPromise<T>(promise: Promise<T>): ZenObservable$Observable<T>;

  // @apollo/client/link/utils/throwServerError.d.ts

  declare type ServerError = Error & {
    ...Error,
    response: Response,
    result: { [key: string]: any, ... },
    statusCode: number,
    ...
  };
  declare var throwServerError: (response: Response, result: any, message: string) => empty;

  // @apollo/client/link/utils/toPromise.d.ts

  declare function toPromise<R>(observable: ZenObservable$Observable<R>): Promise<R>;

  // @apollo/client/link/utils/transformOperation.d.ts

  declare function transformOperation(operation: ApolloClient$GraphQLRequest): ApolloClient$GraphQLRequest;

  // @apollo/client/link/utils/validateOperation.d.ts

  declare function validateOperation(operation: ApolloClient$GraphQLRequest): ApolloClient$GraphQLRequest;
}

declare module "@apollo/client/link/batch" {
  import type { ApolloLink } from "@apollo/client/link/core";

  // @apollo/client/link/batch/batching.d.ts

  declare export type BatchHandler = (
    operations: ApolloClient$Operation[],
    forward?: (ApolloClient$NextLink | void)[]
  ) => ZenObservable$Observable<ApolloClient$FetchResult<>[]> | null;
  declare export interface BatchableRequest {
    operation: ApolloClient$Operation;
    forward?: ApolloClient$NextLink;
  }
  declare export class OperationBatcher {
    constructor(x: {
      batchDebounce?: boolean,
      batchInterval?: number,
      batchMax?: number,
      batchHandler: BatchHandler,
      batchKey?: (operation: ApolloClient$Operation) => string,
      ...
    }): this;
    enqueueRequest(request: BatchableRequest): ZenObservable$Observable<ApolloClient$FetchResult<>>;
    consumeQueue(key?: string): (ZenObservable$Observable<ApolloClient$FetchResult<>> | void)[] | void;
  }

  // @apollo/client/link/batch/batchLink.d.ts

  declare export interface BatchLink$Options {
    batchInterval?: number;
    batchDebounce?: boolean;
    batchMax?: number;
    batchHandler?: BatchHandler;
    batchKey?: (operation: ApolloClient$Operation) => string;
  }

  // $FlowFixMe[type-as-value] See https://stackoverflow.com/questions/74525879/flowtype-libdefs-how-to-export-a-class-definition-from-one-module-and-extend
  declare export class BatchLink extends ApolloLink {
    constructor(fetchParams?: BatchLink$Options): this;
    request(operation: ApolloClient$Operation, forward?: ApolloClient$NextLink): ZenObservable$Observable<ApolloClient$FetchResult<>> | null;
  }
}

declare module "@apollo/client/link/batch-http" {
  import type { HttpOptions } from "@apollo/client";
  import type { ApolloLink } from "@apollo/client/link/core";

  // @apollo/client/link/batch-http/batchHttpLink.d.ts

  declare export type BatchHttpLink$Options = {|
    batchInterval?: number,
    batchDebounce?: boolean,
    batchMax?: number,
    batchKey?: (operation: ApolloClient$Operation) => string,
    ...HttpOptions,
  |};

  // $FlowFixMe[type-as-value] See https://stackoverflow.com/questions/74525879/flowtype-libdefs-how-to-export-a-class-definition-from-one-module-and-extend
  declare export class BatchHttpLink extends ApolloLink {
    constructor(fetchParams?: BatchHttpLink$Options): this;
    request(operation: ApolloClient$Operation): ZenObservable$Observable<ApolloClient$FetchResult<>> | null;
  }
}

declare module "@apollo/client/link/context" {
  import type { ApolloLink } from "@apollo/client/link/core";

  // @apollo/client/link/context/index.d.ts

  declare export type ContextSetter = (operation: ApolloClient$GraphQLRequest, prevContext: any) => Promise<any> | any;
  declare export function setContext(setter: ContextSetter): ApolloLink;
}

declare module "@apollo/client/link/core" {
  // @apollo/client/link/core/ApolloLink.d.ts

  declare export class ApolloLink {
    static empty(): ApolloLink;
    static from(links: (ApolloLink | ApolloClient$RequestHandler)[]): ApolloLink;
    static split(
      test: (op: ApolloClient$Operation) => boolean,
      left: ApolloLink | ApolloClient$RequestHandler,
      right?: ApolloLink | ApolloClient$RequestHandler
    ): ApolloLink;
    static execute(link: ApolloLink, operation: ApolloClient$GraphQLRequest): ZenObservable$Observable<ApolloClient$FetchResult<>>;
    static concat(first: ApolloLink | ApolloClient$RequestHandler, second: ApolloLink | ApolloClient$RequestHandler): ApolloLink;
    constructor(request?: ApolloClient$RequestHandler): this;
    split(
      test: (op: ApolloClient$Operation) => boolean,
      left: ApolloLink | ApolloClient$RequestHandler,
      right?: ApolloLink | ApolloClient$RequestHandler
    ): ApolloLink;
    concat(next: ApolloLink | ApolloClient$RequestHandler): ApolloLink;
    request(operation: ApolloClient$Operation, forward?: ApolloClient$NextLink): ZenObservable$Observable<ApolloClient$FetchResult<>> | null;
    onError(error: any, observer?: ZenObservable$Observer<ApolloClient$FetchResult<>>): false | void;
    setOnError(
      fn: (error: any, observer?: ZenObservable$Observer<ApolloClient$FetchResult<>>) => false | void,
    ): this;
  }

  // @apollo/client/link/core/types.d.ts

  declare export type Path = ApolloClient$Path;
  declare export type Data<T> = ApolloClient$Data<T>;
  declare export interface ExecutionPatchResultBase extends ApolloClient$ExecutionPatchResultBase {}
  declare export type ExecutionPatchInitialResult<
    TData = { [key: string]: any, ... },
    TExtensions = { [key: string]: any, ... }
  > = ApolloClient$ExecutionPatchInitialResult<TData, TExtensions>;
  declare export interface IncrementalPayload<TData, TExtensions> extends ApolloClient$IncrementalPayload<TData, TExtensions> {}
  declare export type ExecutionPatchIncrementalResult<
    TData = { [key: string]: any, ... },
    TExtensions = { [key: string]: any, ... }
  > = ApolloClient$ExecutionPatchIncrementalResult<TData, TExtensions>;
  declare export type ExecutionPatchResult<
    TData = { [key: string]: any, ... },
    TExtensions = { [key: string]: any, ... }
  > = ApolloClient$ExecutionPatchResult<TData, TExtensions>;
  declare export interface GraphQLRequest extends ApolloClient$GraphQLRequest {}
  declare export interface Operation extends ApolloClient$Operation {}
  declare export type SingleExecutionResult<
    TData = { [key: string]: any, ... },
    TContext = { [key: string]: any, ... },
    TExtensions = { [key: string]: any, ... }
  > = ApolloClient$SingleExecutionResult<TData, TContext, TExtensions>;
  declare export type FetchResult<
    TData = { [key: string]: any, ... },
    TContext = { [key: string]: any, ... },
    TExtensions = { [key: string]: any, ... }
  > = ApolloClient$FetchResult<TData, TContext, TExtensions>
  declare export type NextLink = ApolloClient$NextLink;
  declare export type RequestHandler = ApolloClient$RequestHandler;
}

declare module "@apollo/client/link/error" {
  import type { GraphQLErrors, NetworkError } from "@apollo/client";
  import type { ApolloLink } from "@apollo/client/link/core";

  // @apollo/client/link/error/index.d.ts

  declare export interface ErrorResponse {
    graphQLErrors?: GraphQLErrors;
    networkError?: NetworkError;
    response?: GraphQL$ExecutionResult<>;
    operation: ApolloClient$Operation;
    forward: ApolloClient$NextLink;
  }

  declare export var npm$namespace$ErrorLink: {|
    ErrorHandler: Class<ErrorLink$ErrorHandler>,
  |};
  declare export interface ErrorLink$ErrorHandler {
    (error: ErrorResponse): ZenObservable$Observable<ApolloClient$FetchResult<>> | void;
  }
  declare export var ErrorHandler: ErrorLink$ErrorHandler;
  declare export function onError(errorHandler: ErrorLink$ErrorHandler): ApolloLink;

  // $FlowFixMe[type-as-value] See https://stackoverflow.com/questions/74525879/flowtype-libdefs-how-to-export-a-class-definition-from-one-module-and-extend
  declare export class ErrorLink extends ApolloLink {
    constructor(errorHandler: ErrorLink$ErrorHandler): this;
    request(operation: ApolloClient$Operation, forward?: ApolloClient$NextLink): ZenObservable$Observable<ApolloClient$FetchResult<>> | null;
  }
}

declare module "@apollo/client/link/persisted-queries" {
  import type { NetworkError } from "@apollo/client";
  import type { ApolloLink } from "@apollo/client/link/core";

  // @apollo/client/link/persisted-queries/index.d.ts

  declare export var VERSION: 1;
  declare export interface ErrorResponse {
    graphQLErrors?: $ReadOnlyArray<GraphQL$GraphQLError>;
    networkError?: NetworkError;
    response?: GraphQL$ExecutionResult<>;
    operation: ApolloClient$Operation;
  }
  declare type SHA256Function = (...args: any[]) => string | Promise<string>;
  declare type GenerateHashFunction = (document: GraphQL$DocumentNode) => string | Promise<string>;
  declare var PersistedQueryLink: typeof npm$namespace$PersistedQueryLink;

  declare var npm$namespace$PersistedQueryLink: {|
    BaseOptions: Class<PersistedQueryLink$BaseOptions>,
    SHA256Options: Class<PersistedQueryLink$SHA256Options>,
    GenerateHashOptions: Class<PersistedQueryLink$GenerateHashOptions>,
  |};
  declare interface PersistedQueryLink$BaseOptions {
    disable?: (error: ErrorResponse) => boolean;
    useGETForHashedQueries?: boolean;
  }

  declare type PersistedQueryLink$SHA256Options = {
    sha256: SHA256Function,
    generateHash?: empty,
    ...
  } & PersistedQueryLink$BaseOptions;

  declare type PersistedQueryLink$GenerateHashOptions = {
    sha256?: empty,
    generateHash: GenerateHashFunction,
    ...
  } & PersistedQueryLink$BaseOptions;

  declare export type PersistedQueryLink$Options =
    | PersistedQueryLink$SHA256Options
    | PersistedQueryLink$GenerateHashOptions;

  declare export var createPersistedQueryLink: (options: PersistedQueryLink$Options) => ApolloLink;
}

declare module "@apollo/client/link/retry" {
  import type { ApolloLink } from "@apollo/client/link/core";

  // @apollo/client/link/retry/delayFunction.d.ts

  declare export interface DelayFunction {
    (count: number, operation: ApolloClient$Operation, error: any): number;
  }
  declare export interface DelayFunctionOptions {
    initial?: number;
    max?: number;
    jitter?: boolean;
  }
  declare export function buildDelayFunction(delayOptions?: DelayFunctionOptions): DelayFunction;

  // @apollo/client/link/retry/retryFunction.d.ts

  declare export interface RetryFunction {
    (count: number, operation: ApolloClient$Operation, error: any): boolean | Promise<boolean>;
  }
  declare export interface RetryFunctionOptions {
    max?: number;
    retryIf?: (error: any, operation: ApolloClient$Operation) => boolean | Promise<boolean>;
  }
  declare export function buildRetryFunction(retryOptions?: RetryFunctionOptions): RetryFunction;

  // @apollo/client/link/retry/retryLink.d.ts

  declare export interface RetryLink$Options {
    delay?: DelayFunctionOptions | DelayFunction;
    attempts?: RetryFunctionOptions | RetryFunction;
  }

  // $FlowFixMe[type-as-value] See https://stackoverflow.com/questions/74525879/flowtype-libdefs-how-to-export-a-class-definition-from-one-module-and-extend
  declare export class RetryLink extends ApolloLink {
    constructor(options?: RetryLink$Options): this;
    request(operation: ApolloClient$Operation, nextLink?: ApolloClient$NextLink): ZenObservable$Observable<ApolloClient$FetchResult<>>;
  }
}

declare module "@apollo/client/link/schema" {
  import type { GraphQLSchema } from "@apollo/client";

  // @apollo/client/link/schema/index.d.ts

  declare export var SchemaLink: typeof npm$namespace$SchemaLink;

  declare var npm$namespace$SchemaLink: {|
    SchemaLink: typeof SchemaLink$SchemaLink,
  |};
  declare export class SchemaLink$SchemaLink {
    constructor(options: SchemaLink$Options): this;
    request(operation: ApolloClient$Operation): ZenObservable$Observable<ApolloClient$FetchResult<>>;
  }
  declare export type SchemaLink$ResolverContext = { ... };
  declare export type SchemaLink$ResolverContextFunction = (operation: ApolloClient$Operation) => SchemaLink$ResolverContext | Promise<SchemaLink$ResolverContext>;
  declare export interface SchemaLink$Options {
    schema: GraphQLSchema;
    rootValue?: any;
    context?: SchemaLink$ResolverContext | SchemaLink$ResolverContextFunction;
    validate?: boolean;
  }
}

declare module "@apollo/client/link/subscriptions" {
  import type { GraphQLSchema } from "@apollo/client";
  import type { ApolloLink } from "@apollo/client/link/core";

  // @apollo/client/link/subscriptions/index.d.ts

  declare var npm$namespace$SchemaLink: {|
    Options: Class<SchemaLink$Options>,
  |};
  declare type SchemaLink$ResolverContext = { [key: string]: any, ... };

  declare type SchemaLink$ResolverContextFunction = (
    operation: ApolloClient$Operation
  ) => SchemaLink$ResolverContext | Promise<SchemaLink$ResolverContext>;

  declare interface SchemaLink$Options {
    schema: GraphQLSchema;
    rootValue?: any;
    context?: SchemaLink$ResolverContext | SchemaLink$ResolverContextFunction;
    validate?: boolean;
  }

  // $FlowFixMe[type-as-value] See https://stackoverflow.com/questions/74525879/flowtype-libdefs-how-to-export-a-class-definition-from-one-module-and-extend
  declare export class SchemaLink extends ApolloLink {
    schema: $PropertyType<SchemaLink$Options, "schema">;
    rootValue: $PropertyType<SchemaLink$Options, "rootValue">;
    context: $PropertyType<SchemaLink$Options, "context">;
    validate: boolean;
    constructor(options: SchemaLink$Options): this;
    request(operation: ApolloClient$Operation): ZenObservable$Observable<ApolloClient$FetchResult<>>;
  }
}

declare module "@apollo/client/link/ws" {
  import type { ApolloLink } from "@apollo/client/link/core";

  // @apollo/client/link/ws/index.d.ts

  declare var npm$namespace$WebSocketLink: {|
    Configuration: Class<WebSocketLink$Configuration>,
  |};
  declare interface WebSocketLink$Configuration {
    uri: string;
    options?: any;
    webSocketImpl?: any;
  }
  declare export var WebSocketParams: WebSocketLink$Configuration;

  // $FlowFixMe[type-as-value] See https://stackoverflow.com/questions/74525879/flowtype-libdefs-how-to-export-a-class-definition-from-one-module-and-extend
  declare export class WebSocketLink extends ApolloLink {
    constructor(paramsOrClient: WebSocketLink$Configuration): this;
    request(operation: ApolloClient$Operation): ZenObservable$Observable<ApolloClient$FetchResult<>> | null;
  }
}

declare module "@apollo/client/testing" {
  import type { ApolloCache, ApolloClient, ApolloQueryResult, DefaultOptions, NormalizedCacheObject, ObservableQuery, QueryManager, Resolvers } from "@apollo/client";
  import type { ApolloLink } from "@apollo/client/link/core";

  // Typescript built-in type
  declare type RequestInit = any;

  // @apollo/client/testing/core/mocking/mockClient.d.ts

  declare function createMockClient<TData>(
    data: TData,
    query: GraphQL$DocumentNode,
    variables?: { ... }
  ): ApolloClient<NormalizedCacheObject>;

  // @apollo/client/testing/core/mocking/mockFetch.d.ts

  declare interface MockedIResponse {
    ok: boolean;
    status: number;
    statusText?: string;
    json(): Promise<Object>;
  }
  declare interface MockedFetchResponse {
    url: string;
    opts: RequestInit;
    result: MockedIResponse;
    delay?: number;
  }
  declare function createMockedIResponse(result: Object, options?: any): MockedIResponse;
  declare class MockFetch {
    constructor(...mockedResponses: MockedFetchResponse[]): this;
    addMockedResponse(mockedResponse: MockedFetchResponse): void;
    fetch(url: string, opts: RequestInit): Promise<mixed>;
    fetchParamsToKey(url: string, opts: RequestInit): string;
    getFetch(): any;
  }
  declare function createMockFetch(...mockedResponses: MockedFetchResponse[]): any;

  // @apollo/client/testing/core/mocking/mockLink.d.ts

  declare type ResultFunction<T> = () => T;
  declare type MockedResponse<TData = { [key: string]: any, ... }> = {|
    request: ApolloClient$GraphQLRequest;
    result?: ApolloClient$FetchResult<TData> | ResultFunction<ApolloClient$FetchResult<TData>>;
    error?: Error;
    delay?: number;
    newData?: ResultFunction<ApolloClient$FetchResult<>>;
  |};

  // $FlowFixMe[type-as-value] See https://stackoverflow.com/questions/74525879/flowtype-libdefs-how-to-export-a-class-definition-from-one-module-and-extend
  declare class MockLink extends ApolloLink {
    operation: ApolloClient$Operation;
    addTypename: Boolean;
    constructor(mockedResponses: $ReadOnlyArray<MockedResponse<>>, addTypename?: Boolean): this;
    addMockedResponse(mockedResponse: MockedResponse<>): void;
    request(operation: ApolloClient$Operation): ZenObservable$Observable<ApolloClient$FetchResult<>> | null;
  }
  declare type MockApolloLink = {
    operation?: ApolloClient$Operation,
    ...
  } & ApolloLink;
  declare function mockSingleLink(...mockedResponses: Array<any>): MockApolloLink;

  // @apollo/client/testing/core/mocking/mockQueryManager.d.ts

  declare var _default: (
    reject: (reason: any) => any,
    ...mockedResponses: MockedResponse<>[]
  ) => QueryManager<NormalizedCacheObject>;
  declare export default typeof _default;

  // @apollo/client/testing/core/mocking/mockSubscriptionLink.d.ts

  declare interface MockedSubscription {
    request: ApolloClient$Operation;
  }
  declare interface MockedSubscriptionResult {
    result?: ApolloClient$FetchResult<>;
    error?: Error;
    delay?: number;
  }

  // $FlowFixMe[type-as-value] See https://stackoverflow.com/questions/74525879/flowtype-libdefs-how-to-export-a-class-definition-from-one-module-and-extend
  declare class MockSubscriptionLink extends ApolloLink {
    unsubscribers: any[];
    setups: any[];
    operation: ApolloClient$Operation;
    constructor(): this;
    request(
      operation: ApolloClient$Operation
    ): ZenObservable$Observable<ApolloClient$FetchResult<{ [key: string]: any, ... }, { [key: string]: any, ... }, { [key: string]: any, ... }>>;
    simulateResult(result: MockedSubscriptionResult, complete?: boolean): void;
    simulateComplete(): void;
    onSetup(listener: any): void;
    onUnsubscribe(listener: any): void;
  }
  declare function mockObservableLink(): MockSubscriptionLink;

  // @apollo/client/testing/core/observableToPromise.d.ts

  declare type Options = {
    observable: ObservableQuery<any>,
    shouldResolve?: boolean,
    wait?: number,
    errorCallbacks?: ((error: Error) => any)[],
    ...
  };
  declare type ResultCallback = (result: ApolloQueryResult<any>) => any;
  declare function observableToPromiseAndSubscription(
    x: Options,
    ...cbs: ResultCallback[]
  ): {
    promise: Promise<any[]>,
    subscription: ZenObservable$ObservableSubscription,
    ...
  };

  // @apollo/client/testing/core/subscribeAndCount.d.ts

  declare function subscribeAndCount<TResult>(
    reject: (reason: any) => any,
    observable: ZenObservable$Observable<TResult>,
    cb: (handleCount: number, result: TResult) => any
  ): ZenObservable$ObservableSubscription;

  // @apollo/client/testing/core/withConsoleSpy.d.ts

  declare function withErrorSpy<TArgs: any[], TResult>(it: (...args: TArgs) => TResult, ...args: TArgs): TResult;
  declare function withWarningSpy<TArgs: any[], TResult>(it: (...args: TArgs) => TResult, ...args: TArgs): TResult;
  declare function withLogSpy<TArgs: any[], TResult>(it: (...args: TArgs) => TResult, ...args: TArgs): TResult;

  // @apollo/client/testing/core/wrap.d.ts

  declare function withError(func: Function, regex: RegExp): any;

  // @apollo/client/testing/react/MockedProvider.d.ts

  declare type MockedProviderProps<TSerializedCache = { ... }> = {|
    mocks?: $ReadOnlyArray<MockedResponse<>>;
    addTypename?: boolean;
    defaultOptions?: DefaultOptions;
    cache?: ApolloCache<TSerializedCache>;
    resolvers?: Resolvers;
    childProps?: { [key: string]: any };
    children?: any;
    link?: ApolloLink;
  |};
  declare interface MockedProviderState {
    client: ApolloClient<any>;
  }
  declare export class MockedProvider mixins React$Component<MockedProviderProps<>, MockedProviderState> {
    static defaultProps: MockedProviderProps<>;
    constructor(props: MockedProviderProps<>): this;
    render(): React$Node | null;
    componentWillUnmount(): void;
  }
}

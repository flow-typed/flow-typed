declare module '@apollo/react-hooks' {
  import type { ComponentType, Element, Node } from 'react';

  /* start graphql types */
  declare type DocumentNode = any;
  declare type GraphQLError = any;
  /* end graphql types */

  /* start @apollo/react-common types */
  declare export type ApolloProviderProps<TCache> = {
    client: ApolloClient<TCache>,
    children: Node | Node[] | null,
  };

  declare export class ApolloProvider<TCache> extends React$Component<
    ApolloProviderProps<TCache>
  > {
    childContextTypes: {
      client: ApolloClient<TCache>,
      operations: Map<string, { query: DocumentNode, variables: any }>,
    };

    getChildContext(): {
      client: ApolloClient<TCache>,
      operations: Map<string, { query: DocumentNode, variables: any }>,
    };
  }

  declare export interface ApolloConsumerProps {
    children: (client: ApolloClient<any>) => Node;
  }

  declare export class ApolloConsumer extends React$Component<ApolloConsumerProps> {}

  declare export function getApolloContext<T>(): T;
  declare export function resetApolloContext(): void;
  /* end @apollo/react-common types */

  /* start @apollo/react-hooks types */
  declare type Record<T, U> = { [key: $Keys<T>]: U };

  declare export function useQuery<TData, TVariables>(
    query: DocumentNode,
    options?: QueryHookOptions<TData, TVariables>
  ): QueryResult<TData, TVariables>;

  declare export function useLazyQuery<TData, TVariables>(
    query: DocumentNode,
    options?: LazyQueryHookOptions<TData, TVariables>
  ): QueryTuple<TData, TVariables>;

  declare export function useSubscription<TData, TVariables>(
    query: DocumentNode,
    options?: SubscriptionHookOptions<TData, TVariables>
  ): QueryResult<TData, TVariables>;

  declare export function useMutation<TData, TVariables>(
    query: DocumentNode,
    options?: MutationHookOptions<TData, TVariables>
  ): MutationTuple<TData, TVariables>;

  declare export function useApolloClient<T>(): ApolloClient<T>;

  declare export class RenderPromises {
    registerSSRObservable<TData, TVariables>(
      observable: ObservableQuery<any, TVariables>,
      props: QueryOptions<TData, TVariables>
    ): void;
    addQueryPromise<TData, TVariables>(
      queryInstance: QueryData<TData, TVariables>,
      finish: () => Node
    ): Node;
    hasPromises(): boolean;
    consumeAndAwaitPromises(): Promise<void>;
  }

  declare export class QueryData<TData, TVariables> {
    execute(): QueryResult<TData, TVariables>;
    executeLazy(): QueryTuple<TData, TVariables>;
    fetchData(): Promise<ApolloQueryResult<any>> | boolean;
    afterExecute({ lazy?: boolean }): any;
    cleanup(): void;
    getOptions(): any;
  }

  /* Common types */
  declare export type CommonOptions<TOptions> = TOptions & {
    client?: ApolloClient<any>,
  };

  /* Query types */
  declare export type QueryOptions<TData, TVariables> = QueryFunctionOptions<
    TData,
    TVariables
  > & {
    children?: (result: QueryResult<TData, TVariables>) => Node,
    query: DocumentNode,
  };

  declare export type QueryHookOptions<
    TData,
    TVariables
  > = QueryFunctionOptions<TData, TVariables> & {
    query?: DocumentNode,
  };

  declare export type LazyQueryHookOptions<TData, TVariables> = $Diff<
    QueryFunctionOptions<TData, TVariables>,
    { skip: any }
  > & {
    query?: DocumentNode,
  };

  declare export type QueryPreviousData<TData, TVariables> = {
    client?: ApolloClient<any>,
    query?: DocumentNode,
    observableQueryOptions?: {},
    result?: ApolloQueryResult<TData> | null,
    loading?: boolean,
    options?: QueryOptions<TData, TVariables>,
  };

  declare export type QueryCurrentObservable<TData, TVariables> = {
    query?: ObservableQuery<TData, TVariables> | null,
    subscription?: ZenObservableSubscription,
  };

  declare export type QueryLazyOptions<TVariables> = {
    variables?: TVariables,
    context?: Context,
  };

  declare export type QueryTuple<TData, TVariables> = [
    (options?: QueryLazyOptions<TVariables>) => void,
    QueryResult<TData, TVariables>,
  ];

  /* Mutation types */
  declare export type MutationHookOptions<
    TData,
    TVariables
  > = BaseMutationOptions<TData, TVariables> & {
    mutation?: DocumentNode,
  };

  declare export type MutationOptions<TData, TVariables> = BaseMutationOptions<
    TData,
    TVariables
  > & {
    mutation: DocumentNode,
  };

  declare export type MutationTuple<TData, TVariables> = [
    (
      options?: MutationFunctionOptions<TData, TVariables>
    ) => Promise<ExecutionResult<TData>>,
    MutationResult<TData>,
  ];

  /* Subscription types */
  declare export type SubscriptionHookOptions<
    TData,
    TVariables
  > = BaseSubscriptionOptions<TData, TVariables> & {
    subscription?: DocumentNode,
  };

  declare export type SubscriptionOptions<
    TData,
    TVariables
  > = BaseSubscriptionOptions<TData, TVariables> & {
    subscription: DocumentNode,
    children?:
      | null
      | ((result: SubscriptionResult<TData>) => Element<any> | null),
  };

  declare export type SubscriptionCurrentObservable = {
    query?: Observable<any>,
    subscription?: ZenObservableSubscription,
  };

  /* Common types */
  declare export type OperationVariables = Record<string, any>;

  declare export type Context = Record<string, any>;

  declare export type ExecutionResult<T = Record<string, any>> = {
    data?: T,
    extensions?: Record<string, any>,
    errors?: GraphQLError[],
  };

  /* Query types */
  declare export type BaseQueryOptions<TVariables> = {
    ssr?: boolean,
    variables?: TVariables,
    fetchPolicy?: FetchPolicy,
    errorPolicy?: ErrorPolicy,
    pollInterval?: number,
    client?: ApolloClient<any>,
    notifyOnNetworkStatusChange?: boolean,
    context?: Context,
    partialRefetch?: boolean,
    returnPartialData?: boolean,
  };

  declare export type QueryFunctionOptions<
    TData,
    TVariables
  > = BaseQueryOptions<TVariables> & {
    displayName?: string,
    skip?: boolean,
    onCompleted?: (data: TData) => void,
    onError?: (error: ApolloError) => void,
  };

  declare export type ObservableQueryFields<TData, TVariables> = {
    startPolling: $PropertyType<
      ObservableQuery<TData, TVariables>,
      'startPolling'
    >,
    stopPolling: $PropertyType<
      ObservableQuery<TData, TVariables>,
      'stopPolling'
    >,
    subscribeToMore: $PropertyType<
      ObservableQuery<TData, TVariables>,
      'subscribeToMore'
    >,
    updateQuery: $PropertyType<
      ObservableQuery<TData, TVariables>,
      'updateQuery'
    >,
    refetch: $PropertyType<ObservableQuery<TData, TVariables>, 'refetch'>,
    variables: $PropertyType<ObservableQuery<TData, TVariables>, 'variables'>,
    fetchMore: (<TVariables>(
      fetchMoreOptions: FetchMoreQueryOptions<TVariables> &
        FetchMoreOptions<TData, TVariables>
    ) => Promise<ApolloQueryResult<TData>>) &
      (<TData2, TVariables2>(
        fetchMoreOptions: {
          query?: DocumentNode,
        } & FetchMoreQueryOptions<TVariables2> &
          FetchMoreOptions<TData2, TVariables2>
      ) => Promise<ApolloQueryResult<TData2>>),
  };

  declare export type QueryResult<TData, TVariables> = ObservableQueryFields<
    TData,
    TVariables
  > & {
    client: ApolloClient<any>,
    data: ?TData,
    error?: ApolloError,
    loading: boolean,
    networkStatus: NetworkStatus,
    called: boolean,
  };

  /* Mutation types */
  declare export type RefetchQueriesFunction = (
    ...args: any[]
  ) => Array<string | PureQueryOptions>;

  declare export type BaseMutationOptions<TData, TVariables> = {
    variables?: TVariables,
    optimisticResponse?: TData | ((vars: TVariables) => TData),
    refetchQueries?: Array<string | PureQueryOptions> | RefetchQueriesFunction,
    awaitRefetchQueries?: boolean,
    errorPolicy?: ErrorPolicy,
    update?: MutationUpdaterFn<TData>,
    client?: ApolloClient<any>,
    notifyOnNetworkStatusChange?: boolean,
    context?: Context,
    onCompleted?: (data: TData) => void,
    onError?: (error: ApolloError) => void,
    fetchPolicy?: FetchPolicy,
    ignoreResults?: boolean,
  };

  declare export type MutationFunctionOptions<TData, TVariables> = {
    variables?: TVariables,
    optimisticResponse?: TData | ((vars: TVariables | {}) => TData),
    refetchQueries?: Array<string | PureQueryOptions> | RefetchQueriesFunction,
    awaitRefetchQueries?: boolean,
    update?: MutationUpdaterFn<TData>,
    context?: Context,
    fetchPolicy?: FetchPolicy,
  };

  declare export type MutationResult<TData> = {
    data?: TData,
    error?: ApolloError,
    loading: boolean,
    called: boolean,
    client?: ApolloClient<any>,
  };

  declare export type MutationFetchResult<
    TData = Record<string, any>,
    C = Record<string, any>,
    E = Record<string, any>
  > = ExecutionResult<TData> & {
    extensions?: E,
    context?: C,
  };

  declare export type MutationFunction<TData, TVariables> = (
    options?: MutationFunctionOptions<TData, TVariables>
  ) => Promise<MutationFetchResult<TData>>;

  /* Subscription types */
  declare export type OnSubscriptionDataOptions<TData> = {
    client: ApolloClient<any>,
    subscriptionData: SubscriptionResult<TData>,
  };

  declare export type BaseSubscriptionOptions<TData, TVariables> = {
    variables?: TVariables,
    fetchPolicy?: FetchPolicy,
    shouldResubscribe?:
      | boolean
      | ((options: BaseSubscriptionOptions<TData, TVariables>) => boolean),
    client?: ApolloClient<any>,
    onSubscriptionData?: (options: OnSubscriptionDataOptions<TData>) => any,
    onSubscriptionComplete?: () => void,
  };

  declare export type SubscriptionResult<TData> = {
    loading: boolean,
    data?: TData,
    error?: ApolloError,
  };

  /* end @apollo/react-hooks types */

  /* start apollo-client types */

  declare class ObservableQuery<T, V = { [key: string]: any }> extends Observable<ApolloQueryResult<T>> {
    options: WatchQueryOptions;
    queryId: string;
    variables: V;
    isCurrentlyPolling: boolean;
    shouldSubscribe: boolean;
    isTornDown: boolean;
    scheduler: QueryScheduler<any>;
    queryManager: QueryManager<any>;
    observers: Observer<ApolloQueryResult<T>>[];
    subscriptionHandles: SubscriptionLINK[];
    lastResult: ApolloQueryResult<T>;
    lastError: ApolloError;
    lastVariables: V;

    constructor(data: {
      scheduler: QueryScheduler<any>,
      options: WatchQueryOptions,
      shouldSubscribe?: boolean,
    }): this;

    result(): Promise<ApolloQueryResult<T>>;
    currentResult(): ApolloCurrentResult<T>;
    getLastResult(): ApolloQueryResult<T>;
    getLastError(): ApolloError;
    resetLastResults(): void;
    refetch(variables?: V): Promise<ApolloQueryResult<T>>;
    fetchMore(
      fetchMoreOptions: FetchMoreQueryOptions<any> & FetchMoreOptions<any, any>
    ): Promise<ApolloQueryResult<T>>;
    subscribeToMore(options: SubscribeToMoreOptions<any, any>): () => void;
    setOptions(
      opts: ModifiableWatchQueryOptions
    ): Promise<ApolloQueryResult<T>>;
    setVariables(
      variables: V,
      tryFetch?: boolean,
      fetchResults?: boolean
    ): Promise<ApolloQueryResult<T>>;
    updateQuery(
      mapFn: (previousQueryResult: any, options: UpdateQueryOptions) => any
    ): void;
    stopPolling(): void;
    startPolling(pollInterval: number): void;
  }

  declare class QueryManager<TStore> {
    scheduler: QueryScheduler<TStore>;
    link: ApolloLink;
    mutationStore: MutationStore;
    queryStore: QueryStore;
    dataStore: DataStore<TStore>;

    constructor({
      link: ApolloLink,
      queryDeduplication?: boolean,
      store: DataStore<TStore>,
      onBroadcast?: () => void,
      ssrMode?: boolean,
    }): this;

    mutate<T>(options: MutationOptions<>): Promise<FetchResult<T>>;
    fetchQuery<T>(
      queryId: string,
      options: WatchQueryOptions,
      fetchType?: FetchType,
      fetchMoreForQueryId?: string
    ): Promise<FetchResult<T>>;
    queryListenerForObserver<T>(
      queryId: string,
      options: WatchQueryOptions,
      observer: Observer<ApolloQueryResult<T>>
    ): QueryListener;
    watchQuery<T>(
      options: WatchQueryOptions,
      shouldSubscribe?: boolean
    ): ObservableQuery<T>;
    query<T>(options: WatchQueryOptions): Promise<ApolloQueryResult<T>>;
    generateQueryId(): string;
    stopQueryInStore(queryId: string): void;
    addQueryListener(queryId: string, listener: QueryListener): void;
    updateQueryWatch(
      queryId: string,
      document: DocumentNode,
      options: WatchQueryOptions
    ): void;
    addFetchQueryPromise<T>(
      requestId: number,
      promise: Promise<ApolloQueryResult<T>>,
      resolve: (result: ApolloQueryResult<T>) => void,
      reject: (error: Error) => void
    ): void;
    removeFetchQueryPromise(requestId: number): void;
    addObservableQuery<T>(
      queryId: string,
      observableQuery: ObservableQuery<T>
    ): void;
    removeObservableQuery(queryId: string): void;
    clearStore(): Promise<void>;
    resetStore(): Promise<ApolloQueryResult<any>[]>;
  }

  declare class QueryStore {
    getStore(): { [queryId: string]: QueryStoreValue };
    get(queryId: string): QueryStoreValue;
    initQuery(query: {
      queryId: string,
      document: DocumentNode,
      storePreviousVariables: boolean,
      variables: any,
      isPoll: boolean,
      isRefetch: boolean,
      metadata: any,
      fetchMoreForQueryId: string | void,
    }): void;
    markQueryResult(
      queryId: string,
      result: ExecutionResult<>,
      fetchMoreForQueryId: string | void
    ): void;
    markQueryError(
      queryId: string,
      error: Error,
      fetchMoreForQueryId: string | void
    ): void;
    markQueryResultClient(queryId: string, complete: boolean): void;
    stopQuery(queryId: string): void;
    reset(observableQueryIds: string[]): void;
  }

  declare class QueryScheduler<TCacheShape> {
    inFlightQueries: { [queryId: string]: WatchQueryOptions };
    registeredQueries: { [queryId: string]: WatchQueryOptions };
    intervalQueries: { [interval: number]: string[] };
    queryManager: QueryManager<TCacheShape>;
    constructor({
      queryManager: QueryManager<TCacheShape>,
      ssrMode?: boolean,
    }): this;
    checkInFlight(queryId: string): ?boolean;
    fetchQuery<T>(
      queryId: string,
      options: WatchQueryOptions,
      fetchType: FetchType
    ): Promise<FetchResult<T>>;
    startPollingQuery<T>(
      options: WatchQueryOptions,
      queryId: string,
      listener?: QueryListener
    ): string;
    stopPollingQuery(queryId: string): void;
    fetchQueriesOnInterval<T>(interval: number): void;
    addQueryOnInterval<T>(
      queryId: string,
      queryOptions: WatchQueryOptions
    ): void;
    registerPollingQuery<T>(
      queryOptions: WatchQueryOptions
    ): ObservableQuery<T>;
    markMutationError(mutationId: string, error: Error): void;
    reset(): void;
  }

  declare class DataStore<TSerialized> {
    constructor(initialCache: ApolloCache<TSerialized>): this;
    getCache(): ApolloCache<TSerialized>;
    markQueryResult(
      result: ExecutionResult<>,
      document: DocumentNode,
      variables: any,
      fetchMoreForQueryId: string | void,
      ignoreErrors?: boolean
    ): void;
    markSubscriptionResult(
      result: ExecutionResult<>,
      document: DocumentNode,
      variables: any
    ): void;
    markMutationInit(mutation: {
      mutationId: string,
      document: DocumentNode,
      variables: any,
      updateQueries: { [queryId: string]: QueryWithUpdater },
      update: ((proxy: DataProxy, mutationResult: any) => void) | void,
      optimisticResponse: any,
    }): void;
    markMutationResult(mutation: {
      mutationId: string,
      result: ExecutionResult<>,
      document: DocumentNode,
      variables: any,
      updateQueries: { [queryId: string]: QueryWithUpdater },
      update: ((proxy: DataProxy, mutationResult: any) => void) | void,
    }): void;
    markMutationComplete({
      mutationId: string,
      optimisticResponse?: any,
    }): void;
    markUpdateQueryResult(
      document: DocumentNode,
      variables: any,
      newResult: any
    ): void;
    reset(): Promise<void>;
  }

  declare type QueryWithUpdater = {
    updater: MutationQueryReducer<any>,
    query: QueryStoreValue,
  };

  declare interface MutationStoreValue {
    mutationString: string;
    variables: any;
    loading: boolean;
    error: Error | null;
  }

  declare class MutationStore {
    getStore(): { [mutationId: string]: MutationStoreValue };
    get(mutationId: string): MutationStoreValue;
    initMutation(
      mutationId: string,
      mutationString: string,
      variables: any
    ): void;
  }

  declare interface FetchMoreOptions<TData, TVariables> {
    updateQuery: (
      previousQueryResult: TData,
      options: {
        fetchMoreResult?: TData,
        variables: TVariables,
      }
    ) => TData;
  }

  declare interface UpdateQueryOptions {
    variables?: any;
  }

  declare type ApolloCurrentResult<T> = {
    data: T | {},
    errors?: Array<GraphQLError>,
    loading: boolean,
    networkStatus: NetworkStatus,
    error?: ApolloError,
    partial?: boolean,
  };

  declare type ModifiableWatchQueryOptions = {
    variables?: { [key: string]: any },
    pollInterval?: number,
    fetchPolicy?: FetchPolicy,
    errorPolicy?: ErrorPolicy,
    fetchResults?: boolean,
    notifyOnNetworkStatusChange?: boolean,
  };

  declare type WatchQueryOptions = {
    ...$Exact<ModifiableWatchQueryOptions>,
    query: DocumentNode,
    metadata?: any,
    context?: any,
  };

  declare type RefetchQueryDescription = Array<string | PureQueryOptions>;

  declare interface MutationBaseOptions<T = { [key: string]: any }> {
    optimisticResponse?: any;
    updateQueries?: MutationQueryReducersMap<T>;
    optimisticResponse?: any;
    refetchQueries?:
      | ((result: ExecutionResult<>) => RefetchQueryDescription)
      | RefetchQueryDescription;
    update?: MutationUpdaterFn<T>;
    errorPolicy?: ErrorPolicy;
    variables?: any;
  }

  declare type FetchPolicy =
    | 'cache-first'
    | 'cache-and-network'
    | 'network-only'
    | 'cache-only'
    | 'no-cache'
    | 'standby';

  declare type ErrorPolicy = 'none' | 'ignore' | 'all';

  declare interface FetchMoreQueryOptions<TVariables> {
    variables: $Shape<TVariables>;
  }

  declare type SubscribeToMoreOptions<
    TData,
    TSubscriptionData,
    TSubscriptionVariables = void
  > = {
    document?: DocumentNode,
    variables?: TSubscriptionVariables,
    updateQuery?: (
      previousResult: TData,
      result: {
        subscriptionData: { data?: TSubscriptionData },
        variables: TSubscriptionVariables,
      }
    ) => TData,
    onError?: (error: Error) => void,
  };

  declare type MutationUpdaterFn<T = OperationVariables> = (
    proxy: DataProxy,
    mutationResult: FetchResult<T>
  ) => void;

  declare type NetworkStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  declare type QueryListener = (
    queryStoreValue: QueryStoreValue,
    newData?: any
  ) => void;

  declare type QueryStoreValue = {
    document: DocumentNode,
    variables: any,
    previousVariables: any,
    networkStatus: NetworkStatus,
    networkError: Error | null,
    graphQLErrors: GraphQLError[],
    metadata: any,
  };

  declare type PureQueryOptions = {
    query: DocumentNode,
    variables?: { [key: string]: any },
  };

  declare type ApolloQueryResult<T> = {
    data: T,
    errors?: Array<GraphQLError>,
    loading: boolean,
    networkStatus: NetworkStatus,
    stale: boolean,
  };

  declare type FetchType = 1 | 2 | 3;

  declare type MutationQueryReducer<T> = (
    previousResult: { [key: string]: any },
    options: {
      mutationResult: FetchResult<T>,
      queryName: string | void,
      queryVariables: { [key: string]: any },
    }
  ) => { [key: string]: any };

  declare type MutationQueryReducersMap<T = { [key: string]: any }> = {
    [queryName: string]: MutationQueryReducer<T>,
  };

  declare class $ApolloError extends Error {
    message: string;
    graphQLErrors: Array<GraphQLError>;
    networkError: Error | null;
    extraInfo: any;
    constructor(info: ErrorConstructor): this;
  }
  declare export type ApolloError = $ApolloError;

  declare interface ErrorConstructor {
    graphQLErrors?: Array<GraphQLError>;
    networkError?: Error | null;
    errorMessage?: string;
    extraInfo?: any;
  }

  declare interface DefaultOptions {
    +watchQuery?: ModifiableWatchQueryOptions;
    +query?: ModifiableWatchQueryOptions;
    +mutate?: MutationBaseOptions<>;
  }

  declare type ApolloClientOptions<TCacheShape> = {
    link: ApolloLink,
    cache: ApolloCache<TCacheShape>,
    ssrMode?: boolean,
    ssrForceFetchDelay?: number,
    connectToDevTools?: boolean,
    queryDeduplication?: boolean,
    defaultOptions?: DefaultOptions,
  };

  declare class ApolloClient<TCacheShape> {
    link: ApolloLink;
    store: DataStore<TCacheShape>;
    cache: ApolloCache<TCacheShape>;
    queryManager: QueryManager<TCacheShape>;
    disableNetworkFetches: boolean;
    version: string;
    queryDeduplication: boolean;
    defaultOptions: DefaultOptions;
    devToolsHookCb: any;
    proxy: ApolloCache<TCacheShape> | void;
    ssrMode: boolean;
    resetStoreCallbacks: Array<() => Promise<any>>;

    constructor(options: ApolloClientOptions<TCacheShape>): this;
    watchQuery<T>(options: WatchQueryOptions): ObservableQuery<T>;
    query<T>(options: WatchQueryOptions): Promise<ApolloQueryResult<T>>;
    mutate<T>(options: MutationOptions<T>): Promise<FetchResult<T>>;
    subscribe<T, D>(options: SubscriptionOptions<T, D>): Observable<any>;
    readQuery<T, D>(options: DataProxyReadQueryOptions<D>): T | null;
    readFragment<TData, TVariables>(
      options: DataProxyReadFragmentOptions<TVariables>
    ): TData | null;
    writeQuery<TData, TVariables>(
      options: DataProxyWriteQueryOptions<TData, TVariables>
    ): void;
    writeFragment<TData, TVariables>(
      options: DataProxyWriteFragmentOptions<TData, TVariables>
    ): void;
    writeData<TData>(options: DataProxyWriteDataOptions<TData>): void;
    __actionHookForDevTools(cb: () => any): void;
    __requestRaw(payload: GraphQLRequest): Observable<ExecutionResult<>>;
    initQueryManager(): void;
    resetStore(): Promise<Array<ApolloQueryResult<any>> | null>;
    onResetStore(cb: () => Promise<any>): () => void;
    reFetchObservableQueries(
      includeStandby?: boolean
    ): Promise<ApolloQueryResult<any>[]> | Promise<null>;
    extract(optimistic?: boolean): TCacheShape;
    restore(serializedState: TCacheShape): ApolloCache<TCacheShape>;
  }

  /* apollo-link types */
  declare class ApolloLink {
    constructor(request?: RequestHandler): this;

    static empty(): ApolloLink;
    static from(links: Array<ApolloLink>): ApolloLink;
    static split(
      test: (op: Operation) => boolean,
      left: ApolloLink | RequestHandler,
      right: ApolloLink | RequestHandler
    ): ApolloLink;
    static execute(
      link: ApolloLink,
      operation: GraphQLRequest
    ): Observable<FetchResult<>>;

    split(
      test: (op: Operation) => boolean,
      left: ApolloLink | RequestHandler,
      right: ApolloLink | RequestHandler
    ): ApolloLink;

    concat(next: ApolloLink | RequestHandler): ApolloLink;

    request(
      operation: Operation,
      forward?: NextLink
    ): Observable<FetchResult<>> | null;
  }

  declare interface GraphQLRequest {
    query: DocumentNode;
    variables?: { [key: string]: any };
    operationName?: string;
    context?: { [key: string]: any };
    extensions?: { [key: string]: any };
  }

  declare interface Operation {
    query: DocumentNode;
    variables: { [key: string]: any };
    operationName: string;
    extensions: { [key: string]: any };
    setContext: (context: { [key: string]: any }) => { [key: string]: any };
    getContext: () => { [key: string]: any };
    toKey: () => string;
  }

  declare type FetchResult<
    C = { [key: string]: any },
    E = { [key: string]: any }
  > = ExecutionResult<C> & { extension?: E, context?: C };

  declare type NextLink = (operation: Operation) => Observable<FetchResult<>>;

  declare type RequestHandler = (
    operation: Operation,
    forward?: NextLink
  ) => Observable<FetchResult<>> | null;

  declare class Observable<T> {
    subscribe(
      observerOrNext: ((value: T) => void) | ZenObservableObserver<T>,
      error?: (error: any) => void,
      complete?: () => void
    ): ZenObservableSubscription;

    forEach(fn: (value: T) => void): Promise<void>;

    map<R>(fn: (value: T) => R): Observable<R>;

    filter(fn: (value: T) => boolean): Observable<T>;

    reduce<R>(
      fn: (previousValue: R | T, currentValue: T) => R | T,
      initialValue?: R | T
    ): Observable<R | T>;

    flatMap<R>(fn: (value: T) => ZenObservableObservableLike<R>): Observable<R>;

    from<R>(
      observable: Observable<R> | ZenObservableObservableLike<R> | Array<R>
    ): Observable<R>;

    of<R>(...args: Array<R>): Observable<R>;
  }

  declare interface Observer<T> {
    start?: (subscription: SubscriptionLINK) => any;
    next?: (value: T) => void;
    error?: (errorValue: any) => void;
    complete?: () => void;
  }

  declare interface SubscriptionLINK {
    closed: boolean;
    unsubscribe(): void;
  }

  declare interface ZenObservableSubscriptionObserver<T> {
    closed: boolean;
    next(value: T): void;
    error(errorValue: any): void;
    complete(): void;
  }

  declare interface ZenObservableSubscription {
    closed: boolean;
    unsubscribe(): void;
  }

  declare interface ZenObservableObserver<T> {
    start?: (subscription: ZenObservableSubscription) => any;
    next?: (value: T) => void;
    error?: (errorValue: any) => void;
    complete?: () => void;
  }

  declare type ZenObservableSubscriber<T> = (
    observer: ZenObservableSubscriptionObserver<T>
  ) => void | (() => void) | SubscriptionLINK;

  declare interface ZenObservableObservableLike<T> {
    subscribe?: ZenObservableSubscriber<T>;
  }
  /* apollo-link types */

  /* apollo-cache types */
  declare class ApolloCache<TSerialized> {
    read<T>(query: CacheReadOptions): T | null;
    write(write: CacheWriteOptions): void;
    diff<T>(query: CacheDiffOptions): CacheDiffResult<T>;
    watch(watch: CacheWatchOptions): () => void;
    evict(query: CacheEvictOptions): CacheEvictionResult;
    reset(): Promise<void>;

    restore(serializedState: TSerialized): ApolloCache<TSerialized>;
    extract(optimistic?: boolean): TSerialized;

    removeOptimistic(id: string): void;

    performTransaction(transaction: Transaction<TSerialized>): void;
    recordOptimisticTransaction(
      transaction: Transaction<TSerialized>,
      id: string
    ): void;

    transformDocument(document: DocumentNode): DocumentNode;
    transformForLink(document: DocumentNode): DocumentNode;

    readQuery<QueryType, TVariables>(
      options: DataProxyReadQueryOptions<TVariables>,
      optimistic?: boolean
    ): QueryType | null;
    readFragment<FragmentType, TVariables>(
      options: DataProxyReadFragmentOptions<TVariables>,
      optimistic?: boolean
    ): FragmentType | null;
    writeQuery<TData, TVariables>(
      options: CacheWriteQueryOptions<TData, TVariables>
    ): void;
    writeFragment<TData, TVariables>(
      options: CacheWriteFragmentOptions<TData, TVariables>
    ): void;
    writeData<TData>(options: CacheWriteDataOptions<TData>): void;
  }

  declare type Transaction<T> = (c: ApolloCache<T>) => void;

  declare type CacheWatchCallback = (newData: any) => void;

  declare interface CacheEvictionResult {
    success: boolean;
  }

  declare interface CacheReadOptions extends DataProxyReadQueryOptions {
    rootId?: string;
    previousResult?: any;
    optimistic: boolean;
  }

  declare interface CacheWriteOptions extends DataProxyReadQueryOptions {
    dataId: string;
    result: any;
  }

  declare interface CacheDiffOptions extends CacheReadOptions {
    returnPartialData?: boolean;
  }

  declare interface CacheWatchOptions extends CacheReadOptions {
    callback: CacheWatchCallback;
  }

  declare interface CacheEvictOptions extends DataProxyReadQueryOptions {
    rootId?: string;
  }

  declare type CacheDiffResult<T> = DataProxyDiffResult<T>;
  declare type CacheWriteQueryOptions<
    TData,
    TVariables
  > = DataProxyWriteQueryOptions<TData, TVariables>;
  declare type CacheWriteFragmentOptions<
    TData,
    TVariables
  > = DataProxyWriteFragmentOptions<TData, TVariables>;
  declare type CacheWriteDataOptions<TData> = DataProxyWriteDataOptions<TData>;

  declare interface DataProxyReadQueryOptions<TVariables> {
    query: DocumentNode;
    variables?: TVariables;
  }

  declare interface DataProxyReadFragmentOptions<TVariables> {
    id: string;
    fragment: DocumentNode;
    fragmentName?: string;
    variables?: TVariables;
  }

  declare interface DataProxyWriteQueryOptions<TData, TVariables> {
    data: TData;
    query: DocumentNode;
    variables?: TVariables;
  }

  declare interface DataProxyWriteFragmentOptions<TData, TVariables> {
    data: TData;
    id: string;
    fragment: DocumentNode;
    fragmentName?: string;
    variables?: TVariables;
  }

  declare interface DataProxyWriteDataOptions<TData> {
    data: TData;
    id?: string;
  }

  declare type DataProxyDiffResult<T> = {
    result?: T,
    complete?: boolean,
  };

  declare interface DataProxy {
    readQuery<QueryType, TVariables>(
      options: DataProxyReadQueryOptions<TVariables>,
      optimistic?: boolean
    ): QueryType | null;
    readFragment<FragmentType, TVariables>(
      options: DataProxyReadFragmentOptions<TVariables>,
      optimistic?: boolean
    ): FragmentType | null;
    writeQuery<TData, TVariables>(
      options: DataProxyWriteQueryOptions<TData, TVariables>
    ): void;
    writeFragment<TData, TVariables>(
      options: DataProxyWriteFragmentOptions<TData, TVariables>
    ): void;
    writeData<TData>(options: DataProxyWriteDataOptions<TData>): void;
  }
  /* End apollo-cache types */
  /* end apollo-client types */
}

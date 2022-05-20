// @flow

declare module "react-query" {
  declare export class Subscribable<TListener> {
    subscribe(listener?: TListener): () => void;
    hasListeners(): boolean;
  }
  declare export type QueryCacheListener = (query?: Query<any, any, any>) => void;

  declare export class QueryCache extends Subscribable<QueryCacheListener> {
    build<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      client: QueryClient,
      options: QueryOptions<TQueryFnData, TError, TData>,
      state?: QueryState<TData, TError>
    ): Query<TQueryFnData, TError, TData>;
    add(query: Query<any, any, any>): void;
    remove(query: Query<any, any, any>): void;
    clear(): void;
    get<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      queryHash: string
    ): ?Query<TQueryFnData, TError, TData>;
    getAll(): Query<any, any, any>[];
    find<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      queryKey: QueryKey,
      filters?: QueryFilters
    ): ?Query<TQueryFnData, TError, TData>;
    findAll<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      queryKey?: QueryKey,
      filters?: QueryFilters
    ): Query<TQueryFnData, TError, TData>[];
    findAll<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      filters?: QueryFilters
    ): Query<TQueryFnData, TError, TData>[];
    notify<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      query?: Query<TQueryFnData, TError, TData>
    ): void;
    onFocus(): void;
    onOnline(): void;
  }

  declare export type QueryFilters = {|
    /**
     * Include or exclude active queries
     */
    active?: boolean,
    /**
     * Match query key exactly
     */
    exact?: boolean,
    /**
     * Include or exclude inactive queries
     */
    inactive?: boolean,
    /**
     * Include queries matching this predicate function
     */
    predicate?: <TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      query: Query<TQueryFnData, TError, TData>
    ) => boolean,
    /**
     * Include queries matching this query key
     */
    queryKey?: QueryKey,
    /**
     * Include or exclude stale queries
     */
    stale?: boolean,
    /**
     * Include or exclude fetching queries
     */
    fetching?: boolean,
  |};
  declare export type InvalidateQueryFilters = {|
    ...QueryFilters,
    refetchActive?: boolean,
    refetchInactive?: boolean,
  |};

  declare export type QueryClientConfig = {|
    queryCache?: QueryCache,
    mutationCache?: MutationCache,
    defaultOptions?: DefaultOptions,
  |};

  declare export class QueryClient {
    constructor(config?: QueryClientConfig): this;
    mount(): void;
    unmount(): void;

    isFetching(filters?: QueryFilters): number;
    isFetching(queryKey?: QueryKey, filters?: QueryFilters): number;

    getQueryData<TData>(queryKey: QueryKey, filters?: QueryFilters): void | TData;
    setQueryData<TData>(
      queryKey: QueryKey,
      updater: Updater<?TData, TData>,
      options?: SetDataOptions
    ): TData;
    getQueryState<TData = mixed, TError = mixed>(
      queryKey: QueryKey,
      filters?: QueryFilters
    ): ?QueryState<TData, TError>;

    removeQueries(filters?: QueryFilters): void;
    removeQueries(queryKey?: QueryKey, filters?: QueryFilters): void;

    cancelQueries(
      filters?: QueryFilters,
      options?: CancelOptions
    ): Promise<void>;
    cancelQueries(
      queryKey?: QueryKey,
      filters?: QueryFilters,
      options?: CancelOptions
    ): Promise<void>;

    invalidateQueries(
      filters?: InvalidateQueryFilters,
      options?: InvalidateOptions
    ): Promise<void>;
    invalidateQueries(
      queryKey: QueryKey,
      filters?: InvalidateQueryFilters,
      options?: InvalidateOptions
    ): Promise<void>;

    refetchQueries(
      filters?: QueryFilters,
      options?: RefetchOptions
    ): Promise<void>;
    refetchQueries(
      queryKey: QueryKey,
      filters?: QueryFilters,
      options?: RefetchOptions
    ): Promise<void>;

    fetchQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      options: FetchQueryOptions<TQueryFnData, TError, TData>
    ): Promise<TData>;
    fetchQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      queryKey: QueryKey,
      options?: FetchQueryOptions<TQueryFnData, TError, TData>
    ): Promise<TData>;
    fetchQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      queryKey: QueryKey,
      queryFn: QueryFunction<TQueryFnData | TData>,
      options?: FetchQueryOptions<TQueryFnData, TError, TData>
    ): Promise<TData>;

    prefetchQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      options: FetchQueryOptions<TQueryFnData, TError, TData>
    ): Promise<void>;
    prefetchQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      queryKey: QueryKey,
      options?: FetchQueryOptions<TQueryFnData, TError, TData>
    ): Promise<void>;
    prefetchQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData>(
      queryKey: QueryKey,
      queryFn: QueryFunction<TQueryFnData>,
      options?: FetchQueryOptions<TQueryFnData, TError, TData>
    ): Promise<void>;

    cancelMutations(): Promise<void>;
    resumePausedMutations(): Promise<void>;
    executeMutation<TData, TError, TVariables, TContext>(
      options: MutationOptions<TData, TError, TVariables, TContext>
    ): Promise<TData>;

    getQueryCache(): QueryCache;
    getMutationCache(): MutationCache;
    getDefaultOptions(): DefaultOptions;
    setDefaultOptions(options: DefaultOptions): void;
    setQueryDefaults(
      queryKey: QueryKey,
      options: QueryObserverOptions<any, any, any, any, any>
    ): void;
    getQueryDefaults(
      queryKey?: QueryKey
    ): ?QueryObserverOptions<any, any, any, any, any>;
    setMutationDefaults(
      mutationKey: MutationKey,
      options: MutationObserverOptions<any, any, any, any>
    ): void;
    getMutationDefaults(
      mutationKey?: MutationKey
    ): ?MutationObserverOptions<any, any, any, any>;
    defaultQueryOptions<T: QueryOptions<any, any, any>>(options?: T): T;
    defaultQueryObserverOptions<T: QueryObserverOptions<any, any, any, any, any>>(
      options?: T
    ): T;
    defaultMutationOptions<T: MutationOptions<any, any, any, any>>(
      options?: T
    ): T;
    clear(): void;
  }

  declare export type CancelOptions = {|
    revert?: boolean,
    silent?: boolean,
  |};
  declare export type ResultOptions = {|
    throwOnError?: boolean,
    cancelRefetch?: boolean,
  |};
  declare export type RefetchOptions = ResultOptions;
  declare export type InvalidateOptions = ResultOptions;
  declare export type FetchNextPageOptions<T> = {|
    ...ResultOptions,
    pageParam?: T,
  |};
  declare export type FetchPreviousPageOptions<T> = FetchNextPageOptions<T>;

  // retry related
  declare export type RetryValue<TError = mixed> =
    | boolean
    | number
    | ShouldRetryFunction<TError>;
  declare export type ShouldRetryFunction<TError = mixed> = (
    failureCount: number,
    error: TError
  ) => boolean;
  declare export type RetryDelayValue<TError = mixed> =
    | number
    | RetryDelayFunction<TError>;
  declare export type RetryDelayFunction<TError> = (
    failureCount: number,
    error: TError
  ) => number;

  // updater
  declare export type DataUpdateFunction<TInput, TOutput> = (input: TInput) => TOutput;
  declare export type Updater<TInput, TOutput> =
    | TOutput
    | DataUpdateFunction<TInput, TOutput>;

  // Action
  declare export type FailedAction = {|
    type: "failed",
  |};

  declare export type FetchAction = {|
    type: "fetch",
    meta?: mixed,
  |};

  declare export type SuccessAction<TData> = {|
    data: void | TData,
    type: "success",
    dataUpdatedAt?: number,
  |};

  declare export type ErrorAction<TError = mixed> = {|
    type: "error",
    error: TError,
  |};

  declare export type InvalidateAction = {|
    type: "invalidate",
  |};

  declare export type PauseAction = {|
    type: "pause",
  |};

  declare export type ContinueAction = {|
    type: "continue",
  |};

  declare export type SetStateAction<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> = {|
    type: "setState",
    state: MutationState<TData, TError, TVariables, TContext>,
  |};

  declare export type SetQueryStateAction<TData = mixed, TError = mixed> = {|
    type: "setState",
    state: QueryState<TData, TError>,
  |};

  declare export type Action<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> =
    | ContinueAction
    | ErrorAction<TError>
    | FailedAction
    | LoadingAction<TVariables, TContext>
    | PauseAction
    | SetStateAction<TData, TError, TVariables, TContext>
    | SuccessAction<TData>;

  declare export type QueryAction<TData = mixed, TError = mixed> =
    | ContinueAction
    | ErrorAction<TError>
    | FailedAction
    | FetchAction
    | InvalidateAction
    | PauseAction
    | SetQueryStateAction<TData, TError>
    | SuccessAction<TData>;

  // query types
  declare export type FetchOptions = {|
    cancelRefresh?: boolean,
    meta?: mixed,
  |};
  declare export type FetchContext<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData> = {|
    fetchFn: () => mixed | Promise<mixed>,
    fetchOptions?: FetchOptions,
    options: QueryOptions<TQueryFnData, TError, TData>,
    queryKey: QueryKey,
    state: QueryState<TData, TError>,
  |};
  declare export type QueryBehavior<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData> = {|
    onFetch: (context: FetchContext<TQueryFnData, TError, TData>) => void,
  |};
  declare export type QueryConfig<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData> = {|
    cache: QueryCache,
    queryKey: QueryKey,
    queryHash: string,
    options?: QueryOptions<TQueryFnData, TError, TData>,
    defaultOptions?: QueryOptions<TQueryFnData, TError, TData>,
    state?: QueryState<TData, TError>,
  |};
  declare export type EnumStatus = "idle" | "loading" | "success" | "error";
  declare export type QueryStatus = EnumStatus;
  declare export type QueryState<TData = mixed, TError = mixed> = {|
    data: void | TData,
    dataUpdateCount: number,
    dataUpdatedAt: number,
    error: TError | null,
    errorUpdateCount: number,
    errorUpdatedAt: number,
    fetchFailureCount: number,
    fetchMeta: mixed,
    isFetching: boolean,
    isInvalidated: boolean,
    isPaused: boolean,
    status: QueryStatus,
  |};

  declare export type InitialDataFunction<TData> = () => void | TData;
  declare export type QueryKey = string | mixed[] | $ReadOnlyArray<mixed>;
  declare export type PageParam = mixed;
  declare export type QueryKeyHashFunction<TQueryKey = QueryKey> = (queryKey: TQueryKey) => string;
  declare export type QueryFunctionContext<TQueryKey = QueryKey, TPageParam = PageParam> = {|
    queryKey: TQueryKey,
    pageParam?: TPageParam,
  |};
  declare export type QueryFunction<TQueryFnData, TQueryKey = QueryKey, TPageParam = PageParam> = (context: QueryFunctionContext<TQueryKey, TPageParam>) => Promise<TQueryFnData> | TQueryFnData;
  declare export type GetPreviousPageParamFunction<TQueryFnData = mixed, U = mixed> = (
    firstPage: TQueryFnData,
    allPages: TQueryFnData[]
  ) => U;
  declare export type GetNextPageParamFunction<TQueryFnData = mixed, U = mixed> = (
    lastPage: TQueryFnData,
    allPages: TQueryFnData[]
  ) => U;
  declare export type QueryOptions<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryKey = QueryKey> = {|
    retry?: RetryValue<TError>,
    retryDelay?: RetryDelayValue<TError>,
    cacheTime?: number,
    isDataEqual?: (oldData: void | TData, newData: TData) => boolean,
    queryFn?: QueryFunction<TQueryFnData, TQueryKey>,
    queryHash?: string,
    queryKey?: TQueryKey,
    queryKeyHashFn?: QueryKeyHashFunction<TQueryKey>,
    initialData?: TData | InitialDataFunction<TData>,
    behavior?: QueryBehavior<TQueryFnData, TError, TData>,
    /**
     * Set this to `false` to disable structural sharing between query results.
     * Defaults to `true`.
     */
    structuralSharing?: boolean,
    /**
     * This function can be set to automatically get the previous cursor for infinite queries.
     * The result will also be used to determine the value of `hasPreviousPage`.
     */
    getPreviousPageParam?: GetPreviousPageParamFunction<TQueryFnData, any>,
    /**
     * This function can be set to automatically get the next cursor for infinite queries.
     * The result will also be used to determine the value of `hasNextPage`.
     */
    getNextPageParam?: GetNextPageParamFunction<TQueryFnData, any>,
  |};
  declare export type FetchQueryOptions<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryKey = QueryKey> = {|
    ...QueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    staleTime?: number,
  |};
  declare export type PlaceholderDataFunction<TResult> = () => void | TResult;

  declare export type QueryObserverOptions<
    TQueryFnData,
    TError = mixed,
    TData = TQueryFnData,
    TQueryData = TQueryFnData,
    TQueryKey = QueryKey,
  > = {|
    ...QueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    /**
     * Set this to `false` to disable automatic refetching when the query mounts or changes query keys.
     * To refetch the query, use the `refetch` method returned from the `useQuery` instance.
     * Defaults to `true`.
     */
    enabled?: boolean,
    /**
     * The time in milliseconds after data is considered stale.
     * If set to `Infinity`, the data will never be considered stale.
     */
    staleTime?: number,
    /**
     * If set to a number, the query will continuously refetch at this frequency in milliseconds.
     * Defaults to `false`.
     */
    refetchInterval?: number | false,
    /**
     * If set to `true`, the query will continue to refetch while their tab/window is in the background.
     * Defaults to `false`.
     */
    refetchIntervalInBackground?: boolean,
    /**
     * If set to `true`, the query will refetch on window focus if the data is stale.
     * If set to `false`, the query will not refetch on window focus.
     * If set to `'always'`, the query will always refetch on window focus.
     * Defaults to `true`.
     */
    refetchOnWindowFocus?: boolean | "always",
    /**
     * If set to `true`, the query will refetch on reconnect if the data is stale.
     * If set to `false`, the query will not refetch on reconnect.
     * If set to `'always'`, the query will always refetch on reconnect.
     * Defaults to `true`.
     */
    refetchOnReconnect?: boolean | "always",
    /**
     * If set to `true`, the query will refetch on mount if the data is stale.
     * If set to `false`, will disable additional instances of a query to trigger background refetches.
     * If set to `'always'`, the query will always refetch on mount.
     * Defaults to `true`.
     */
    refetchOnMount?: boolean | "always",
    /**
     * If set to `false`, the query will not be retried on mount if it contains an error.
     * Defaults to `true`.
     */
    retryOnMount?: boolean,
    /**
     * If set, the component will only re-render if any of the listed properties change.
     * When set to `['data', 'error']`, the component will only re-render when the `data` or `error` properties change.
     */
    notifyOnChangeProps?: string[] | "tracked",
    /**
     * If set, the component will not re-render if any of the listed properties change.
     */
    notifyOnChangePropsExclusions?: string[],
    /**
     * This callback will fire any time the query successfully fetches new data.
     */
    onSuccess?: (data: TData) => void,
    /**
     * This callback will fire if the query encounters an error and will be passed the error.
     */
    onError?: (err: TError) => void,
    /**
     * This callback will fire any time the query is either successfully fetched or errors and be passed either the data or error.
     */
    onSettled?: (data: void | TData, error: TError | null) => void,
    /**
     * Whether errors should be thrown instead of setting the `error` property.
     * Defaults to `false`.
     */
    useErrorBoundary?: boolean,
    /**
     * This option can be used to transform or select a part of the data returned by the query function.
     */
    select?: (data: TQueryData) => TData,
    /**
     * If set to `true`, the query will suspend when `status === 'loading'`
     * and throw errors when `status === 'error'`.
     * Defaults to `false`.
     */
    suspense?: boolean,
    /**
     * Set this to `true` to keep the previous `data` when fetching based on a new query key.
     * Defaults to `false`.
     */
    keepPreviousData?: boolean,
    /**
     * If set, this value will be used as the placeholder data for this particular query observer while the query is still in the `loading` data and no initialData has been provided.
     */
    placeholderData?: TData | PlaceholderDataFunction<TData>,
  |};

  declare export type InfiniteQueryObserverOptions<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey = QueryKey> =
    QueryObserverOptions<
      TQueryFnData,
      TError,
      InfiniteData<TData>,
      InfiniteData<TQueryData>,
      TQueryKey,
    >;

  declare export type QueryObserverBaseResult<TData = mixed, TError = mixed> = {|
    data: void | TData,
    dataUpdatedAt: number,
    error: TError | null,
    errorUpdatedAt: number,
    failureCount: number,
    isError: boolean,
    isFetched: boolean,
    isFetchedAfterMount: boolean,
    isFetching: boolean,
    isIdle: boolean,
    isLoading: boolean,
    isLoadingError: boolean,
    isPlaceholderData: boolean,
    isPreviousData: boolean,
    isRefetchError: boolean,
    isStale: boolean,
    isSuccess: boolean,
    refetch: (
      options?: RefetchOptions
    ) => Promise<QueryObserverResult<TData, TError>>,
    remove: () => void,
    status: QueryStatus,
  |};

  declare export type QueryObserverIdleResult<TData = mixed, TError = mixed> = {|
    ...QueryObserverBaseResult<TData, TError>,
    error: null,
    isError: false,
    isIdle: true,
    isLoading: false,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: false,
    status: "idle",
  |};

  declare export type QueryObserverLoadingResult<TData = mixed, TError = mixed> = {|
    ...QueryObserverBaseResult<TData, TError>,
    error: null,
    isError: false,
    isIdle: false,
    isLoading: true,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: false,
    status: "loading",
  |};

  declare export type QueryObserverLoadingErrorResult<TData = mixed, TError = mixed> = {|
    ...QueryObserverBaseResult<TData, TError>,
    error: TError,
    isError: true,
    isIdle: false,
    isLoading: false,
    isLoadingError: true,
    isRefetchError: false,
    isSuccess: false,
    status: "error",
  |};

  declare export type QueryObserverRefetchErrorResult<TData = mixed, TError = mixed> = {|
    ...QueryObserverBaseResult<TData, TError>,
    data: TData,
    error: TError,
    isError: true,
    isIdle: false,
    isLoading: false,
    isLoadingError: false,
    isRefetchError: true,
    isSuccess: false,
    status: "error",
  |};

  declare export type QueryObserverSuccessResult<TData = mixed, TError = mixed> = {|
    ...QueryObserverBaseResult<TData, TError>,
    data: TData,
    error: null,
    isError: false,
    isIdle: false,
    isLoading: false,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: true,
    status: "success",
  |};

  // exported for testing
  declare export type QueryObserverResult<TData = mixed, TError = mixed> =
    | QueryObserverIdleResult<TData, TError>
    | QueryObserverLoadingErrorResult<TData, TError>
    | QueryObserverLoadingResult<TData, TError>
    | QueryObserverRefetchErrorResult<TData, TError>
    | QueryObserverSuccessResult<TData, TError>;

  declare export type InfiniteData<TData> = {|
    pages: TData[],
    pageParams: mixed[],
  |};

  declare export type InfiniteQueryObserverBaseResult<TData = mixed, TError = mixed> = {|
    ...QueryObserverBaseResult<InfiniteData<TData>, TError>,
    fetchNextPage: (
      options?: FetchNextPageOptions<mixed>
    ) => Promise<InfiniteQueryObserverResult<TData, TError>>,
    fetchPreviousPage: (
      options?: FetchPreviousPageOptions<mixed>
    ) => Promise<InfiniteQueryObserverResult<TData, TError>>,
    hasNextPage?: boolean,
    hasPreviousPage?: boolean,
    isFetchingNextPage: boolean,
    isFetchingPreviousPage: boolean,
  |};

  declare export type InfiniteQueryObserverIdleResult<TData = mixed, TError = mixed> = {|
    ...InfiniteQueryObserverBaseResult<TData, TError>,
    error: null,
    isError: false,
    isIdle: true,
    isLoading: false,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: false,
    status: "idle",
  |};

  declare export type InfiniteQueryObserverLoadingResult<TData = mixed, TError = mixed> = {|
    ...InfiniteQueryObserverBaseResult<TData, TError>,
    error: null,
    isError: false,
    isIdle: false,
    isLoading: true,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: false,
    status: "loading",
  |};

  declare export type InfiniteQueryObserverLoadingErrorResult<TData = mixed, TError = mixed> = {|
    ...InfiniteQueryObserverBaseResult<TData, TError>,
    error: TError,
    isError: true,
    isIdle: false,
    isLoading: false,
    isLoadingError: true,
    isRefetchError: false,
    isSuccess: false,
    status: "error",
  |};

  declare export type InfiniteQueryObserverRefetchErrorResult<TData = mixed, TError = mixed> = {|
    ...InfiniteQueryObserverBaseResult<TData, TError>,
    data: InfiniteData<TData>,
    error: TError,
    isError: true,
    isIdle: false,
    isLoading: false,
    isLoadingError: false,
    isRefetchError: true,
    isSuccess: false,
    status: "error",
  |};

  declare export type InfiniteQueryObserverSuccessResult<TData = mixed, TError = mixed> = {|
    ...InfiniteQueryObserverBaseResult<TData, TError>,
    data: InfiniteData<TData>,
    error: null,
    isError: false,
    isIdle: false,
    isLoading: false,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: true,
    status: "success",
  |};

  declare export type InfiniteQueryObserverResult<TData = mixed, TError = mixed> =
    | InfiniteQueryObserverIdleResult<TData, TError>
    | InfiniteQueryObserverLoadingErrorResult<TData, TError>
    | InfiniteQueryObserverLoadingResult<TData, TError>
    | InfiniteQueryObserverRefetchErrorResult<TData, TError>
    | InfiniteQueryObserverSuccessResult<TData, TError>;

  declare export type QueryObserverListener<TData = mixed, TError = mixed> = (
    result: QueryObserverResult<TData, TError>
  ) => void;

  declare export type ObserverFetchOptions = {|
    ...FetchOptions,
    throwOnError?: boolean,
  |};

  declare export class QueryObserver<
      TQueryFnData = mixed,
      TError = mixed,
      TData = TQueryFnData,
      TQueryKey = QueryKey,
      TPageParam = PageParam,
    >
    extends Subscribable<QueryObserverListener<TData, TError>> {
    +options: QueryObserverOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>;

    constructor(
      client: QueryClient,
      options: QueryObserverOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>
    ): this;

    willLoadOnMount(): boolean;
    willRefetchOnMount(): boolean;
    willFetchOnMount(): boolean;
    willFetchOnReconnect(): boolean;
    willFetchOnWindowFocus(): boolean;
    destroy(): void;
    setOptions(
      options?: QueryObserverOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>
    ): void;
    getCurrentResult(): QueryObserverResult<TData, TError>;
    getNextResult(
      options?: ResultOptions
    ): Promise<QueryObserverResult<TData, TError>>;
    getCurrentQuery(): Query<TQueryFnData, TError, TData>;
    remove(): void;
    refetch(
      options?: RefetchOptions
    ): Promise<QueryObserverResult<TData, TError>>;
    onQueryUpdate(action: Action<TData, TError>): void;
  }

  declare export type QueriesObserverListener<TData = mixed, TError = mixed> = (
    result: $ReadOnlyArray<QueryObserverResult<TData, TError>>
  ) => void;
  declare export class QueriesObserver<
      TQueryFnData,
      TError = mixed,
      TData = TQueryFnData,
      TQueryKey = QueryKey,
    >
    extends Subscribable<QueriesObserverListener<TData, TError>> {
    constructor(
      client: QueryClient,
      queries?: QueryObserverOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>[]
    ): this;
    destroy(): void;
    setQueries(
      queries: QueryObserverOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>[]
    ): void;
    getCurrentResult(): QueryObserverResult<TData, TError>[];
  }

  declare export type InfiniteQueryObserverListener<TData = mixed, TError = mixed> = (
    result: InfiniteQueryObserverResult<TData, TError>
  ) => void;

  declare export class InfiniteQueryObserver<
      TQueryFnData = mixed,
      TError = mixed,
      TData = TQueryFnData,
      TQueryKey = QueryKey,
    >
    extends Subscribable<InfiniteQueryObserverListener<TData, TError>> {
    constructor(
      client: QueryClient,
      options: InfiniteQueryObserverOptions<
        TQueryFnData,
        TError,
        TData,
        TQueryFnData,
        TQueryKey
      >
    ): this;

    // Type override
    subscribe(
      listener?: InfiniteQueryObserverListener<TData, TError>
    ): () => void;

    // Type override
    getCurrentResult(): InfiniteQueryObserverResult<TData, TError>;

    willLoadOnMount(): boolean;
    willRefetchOnMount(): boolean;
    willFetchOnMount(): boolean;
    willFetchOnReconnect(): boolean;
    willFetchOnWindowFocus(): boolean;
    destroy(): void;
    getCurrentResult(): InfiniteQueryObserverResult<TData, TError>;
    getNextResult(
      options?: ResultOptions
    ): Promise<InfiniteQueryObserverResult<TData, TError>>;
    getCurrentQuery(): Query<TQueryFnData, TError, TData>;
    remove(): void;
    refetch(
      options?: RefetchOptions
    ): Promise<InfiniteQueryObserverResult<TData, TError>>;
    onQueryUpdate(action: Action<TData, TError>): void;

    ////////////////////

    setOptions(
      options?: InfiniteQueryObserverOptions<
        TQueryFnData,
        TError,
        TData,
        TQueryFnData,
        TQueryKey
      >
    ): void;
    fetchNextPage<T>(
      options?: FetchNextPageOptions<T>
    ): Promise<InfiniteQueryObserverResult<TData, TError>>;
    fetchPreviousPage<T>(
      options?: FetchPreviousPageOptions<T>
    ): Promise<InfiniteQueryObserverResult<TData, TError>>;
  }

  declare export type SetDataOptions = {| updatedAt?: number |};

  declare export class Query<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryKey = QueryKey> {
    +queryKey: QueryKey;
    +queryHash: string;
    +options: QueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    +state: QueryState<TData, TError>;
    +cacheTime: number;

    constructor(config: QueryConfig<TQueryFnData, TError, TData>): this;
    setDefaultOptions(options: QueryOptions<TQueryFnData, TError, TData, TQueryKey>): void;
    setData(updater: Updater<?TData, TData>, options?: SetDataOptions): TData;
    setState(state: QueryState<TData, TError>): void;
    cancel(options?: CancelOptions): Promise<void>;
    destroy(): void;
    isActive(): boolean;
    isFetching(): boolean;
    isStale(): boolean;
    isStaleByTime(staleTime?: number): boolean;
    onFocus(): void;
    onOnline(): void;
    addObserver(observer: QueryObserver<any, any, any, any>): void;
    removeObserver(observer: QueryObserver<any, any, any, any>): void;
    invalidate(): void;
    fetch(
      options?: QueryOptions<TQueryFnData, TError, TData, TQueryKey>,
      fetchOptions?: FetchOptions
    ): Promise<TData>;
  }

  /**
   *
   * Mutations
   *
   */

  declare export type MutationConfig<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> = {|
    mutationId: number,
    mutationCache: MutationCache,
    options: MutationOptions<TData, TError, TVariables, TContext>,
    defaultOptions?: MutationOptions<TData, TError, TVariables, TContext>,
    state?: MutationState<TData, TError, TVariables, TContext>,
  |};

  declare export type MutationKey = QueryKey;
  declare export type MutationStatus = EnumStatus;

  declare export type MutationFunction<TData, TVariables> = (
    variables: TVariables
  ) => Promise<TData>;

  declare export type MutationOptions<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> = {|
    mutationFn?: MutationFunction<TData, TVariables>,
    mutationKey?: MutationKey,
    variables?: TVariables,
    onMutate?: (variables: TVariables) => Promise<TContext> | TContext,
    onSuccess?: (
      data: TData,
      variables: TVariables,
      context: TContext
    ) => Promise<void> | void,
    onError?: (
      error: TError,
      variables: TVariables,
      context: TContext
    ) => Promise<void> | void,
    onSettled?: (
      data: void | TData,
      error: TError | null,
      variables: TVariables,
      context: TContext
    ) => Promise<void> | void,
    retry?: RetryValue<TError>,
    retryDelay?: RetryDelayValue<TError>,
  |};

  declare export type MutationObserverOptions<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  > = {|
    ...MutationOptions<TData, TError, TVariables, TContext>,
    useErrorBoundary?: boolean,
  |};

  declare export type MutateOptions<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> = {|
    onSuccess?: (
      data: TData,
      variables: TVariables,
      context: TContext
    ) => Promise<void> | void,
    onError?: (
      error: TError,
      variables: TVariables,
      context: void | TContext
    ) => Promise<void> | void,
    onSettled?: (
      data: void | TData,
      error: TError | null,
      variables: TVariables,
      context: void | TContext
    ) => Promise<void> | void,
  |};

  declare export type MutateFunction<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> = (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>
  ) => Promise<TData>;

  declare export type MutationObserverResult<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  > = {|
    ...MutationState<TData, TError, TVariables, TContext>,
    isError: boolean,
    isIdle: boolean,
    isLoading: boolean,
    isSuccess: boolean,
    mutate: MutateFunction<TData, TError, TVariables, TContext>,
    reset: () => void,
  |};

  declare export type DefaultOptions = {|
    queries?: QueryObserverOptions<any, any, any, any, any>,
    mutations?: MutationObserverOptions<any, any, any, any>,
  |};
  declare export type MutationState<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> = {|
    context: void | TContext,
    data: void | TData,
    error: TError | null,
    failureCount: number,
    isPaused: boolean,
    status: MutationStatus,
    variables: void | TVariables,
  |};

  declare export type LoadingAction<TVariables, TContext> = {|
    type: "loading",
    variables?: TVariables,
    context?: TContext,
  |};

  declare export type SetMutationStateAction<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  > = {|
    type: "setState",
    state: MutationState<TData, TError, TVariables, TContext>,
  |};

  declare export type MutationAction<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> =
    | ContinueAction
    | ErrorAction<TError>
    | FailedAction
    | LoadingAction<TVariables, TContext>
    | PauseAction
    | SetMutationStateAction<TData, TError, TVariables, TContext>
    | SuccessAction<TData>;

  declare export class Mutation<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> {
    +state: MutationState<TData, TError, TVariables, TContext>;
    +options: MutationOptions<TData, TError, TVariables, TContext>;
    +mutationId: number;
    constructor(
      config: MutationConfig<TData, TError, TVariables, TContext>
    ): this;
    setState(state: MutationState<TData, TError, TVariables, TContext>): void;
    addObserver(observer: MutationObserver<any, any, any, any>): void;
    removeObserver(observer: MutationObserver<any, any, any, any>): void;
    cancel(): Promise<void>;
    continue(): Promise<TData>;
    execute(): Promise<TData>;
  }

  declare export type MutationObserverListener<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  > = (
    result: MutationObserverResult<TData, TError, TVariables, TContext>
  ) => void;
  declare export class MutationObserver<
      TData = mixed,
      TError = mixed,
      TVariables = mixed,
      TContext = mixed,
    >
    extends
      Subscribable<
        MutationObserverListener<TData, TError, TVariables, TContext>
      > {
    +options: MutationObserverOptions<TData, TError, TVariables, TContext>;
    constructor(
      client: QueryClient,
      options: MutationObserverOptions<TData, TError, TVariables, TContext>
    ): this;
    setOptions(
      options?: MutationObserverOptions<TData, TError, TVariables, TContext>
    ): void;
    onMutationUpdate(action: Action<TData, TError, TVariables, TContext>): void;
    getCurrentResult(): MutationObserverResult<
      TData,
      TError,
      TVariables,
      TContext
    >;
    reset(): void;
    mutate(
      variables?: TVariables,
      options?: MutateOptions<TData, TError, TVariables, TContext>
    ): Promise<TData>;
  }

  declare export type MutationCacheListener = (
    mutation?: Mutation<any, any, any, any>
  ) => void;
  declare export class MutationCache
    extends Subscribable<MutationCacheListener> {
    build<TData, TError, TVariables, TContext>(
      client: QueryClient,
      options: MutationOptions<TData, TError, TVariables, TContext>,
      state?: MutationState<TData, TError, TVariables, TContext>
    ): Mutation<TData, TError, TVariables, TContext>;
    add(mutation: Mutation<any, any, any, any>): void;
    remove(mutation: Mutation<any, any, any, any>): void;
    clear(): void;
    getAll(): Mutation<any, any, any, any>[];
    notify(mutation?: Mutation<any, any, any, any>): void;
    onFocus(): void;
    onOnline(): void;
    resumePausedMutations(): Promise<void>;
  }

  declare export type UseBaseQueryOptions<
    TQueryFnData = mixed,
    TError = mixed,
    TData = TQueryFnData,
    TQueryKey = QueryKey,
  > = QueryObserverOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>;

  declare export type UseQueryOptions<
    TQueryFnData = mixed,
    TError = mixed,
    TData = TQueryFnData,
    TQueryKey = QueryKey,
  > = UseBaseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;

  declare export type UseInfiniteQueryOptions<
    TQueryFnData = mixed,
    TError = mixed,
    TData = TQueryFnData,
    TQueryKey = QueryKey,
  > = InfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>;

  declare export type UseBaseQueryResult<TData = mixed, TError = mixed> = QueryObserverResult<
    TData,
    TError>;

  declare export type UseQueryResult<TData = mixed, TError = mixed> = UseBaseQueryResult<
    TData,
    TError>;

  declare export type UseInfiniteQueryResult<
    TData,
    TError
  > = InfiniteQueryObserverResult<TData, TError>;

  declare export type UseMutationOptions<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  > = {|
    mutationKey?: MutationKey,
    onMutate?: (variables: TVariables) => Promise<TContext> | TContext,
    onSuccess?: (
      data: TData,
      variables: TVariables,
      context: ?TContext
    ) => Promise<void> | void,
    onError?: (
      error: TError,
      variables: TVariables,
      context: ?TContext
    ) => Promise<void> | void,
    onSettled?: (
      data: void | TData,
      error: TError | null,
      variables: TVariables,
      context: ?TContext
    ) => Promise<void> | void,
    retry?: RetryValue<TError>,
    retryDelay?: RetryDelayValue<TError>,
    useErrorBoundary?: boolean,
  |};

  declare export type UseMutateFunction<TData = mixed, TError = mixed, TVariables = mixed, TContext = mixed> = (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>
  ) => void;

  declare export type UseMutateAsyncFunction<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  > = (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>
  ) => Promise<TData>;

  declare export type UseMutationResult<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  > = {|
    context: ?TContext,
    data: void | TData,
    error: TError | null,
    failureCount: number,
    isError: boolean,
    isIdle: boolean,
    isLoading: boolean,
    isPaused: boolean,
    isSuccess: boolean,
    mutate: UseMutateFunction<TData, TError, TVariables, TContext>,
    mutateAsync: UseMutateAsyncFunction<TData, TError, TVariables, TContext>,
    reset: () => void,
    status: MutationStatus,
    variables: ?TVariables,
  |};

  declare export function useQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryKey = QueryKey>(
    options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
  ): UseQueryResult<TData, TError>;
  declare export function useQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryKey = QueryKey>(
    queryKey: TQueryKey,
    options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
  ): UseQueryResult<TData, TError>;
  declare export function useQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryKey = QueryKey>(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
  ): UseQueryResult<TData, TError>;

  declare export function useQueries<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryKey = QueryKey>(
    queries: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>[]
  ): UseQueryResult<TData, TError>[];

  declare export function useInfiniteQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryKey = QueryKey>(options: UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>): UseInfiniteQueryResult<TData, TError>;
  declare export function useInfiniteQuery<TQueryFnData = mixed, TError = mixed, TData = TQueryFnData, TQueryKey = QueryKey>(
    queryKey: TQueryKey,
    options?: UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>
  ): UseInfiniteQueryResult<TData, TError>;
  declare export function useInfiniteQuery<
    TQueryFnData = mixed,
    TError = mixed,
    TData = TQueryFnData,
    TQueryKey = QueryKey
  >(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>
  ): UseInfiniteQueryResult<TData, TError>;

  declare export function useMutation<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  >(
    options: UseMutationOptions<TData, TError, TVariables, TContext>
  ): UseMutationResult<TData, TError, TVariables, TContext>;
  declare export function useMutation<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  >(
    mutationFn: MutationFunction<TData, TVariables>,
    options?: UseMutationOptions<TData, TError, TVariables, TContext>
  ): UseMutationResult<TData, TError, TVariables, TContext>;
  declare export function useMutation<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  >(
    mutationKey: MutationKey,
    options?: UseMutationOptions<TData, TError, TVariables, TContext>
  ): UseMutationResult<TData, TError, TVariables, TContext>;
  declare export function useMutation<
    TData = mixed,
    TError = mixed,
    TVariables = mixed,
    TContext = mixed,
  >(
    mutationKey: MutationKey,
    mutationFn?: MutationFunction<TData, TVariables>,
    options?: UseMutationOptions<TData, TError, TVariables, TContext>
  ): UseMutationResult<TData, TError, TVariables, TContext>;

  declare export function useIsFetching(filters?: QueryFilters): number;
  declare export function useIsFetching(
    queryKey?: QueryKey,
    filters?: QueryFilters
  ): number;

  declare export function useQueryClient(): QueryClient;
  declare export class QueryClientProvider
    extends
      React$Component<{|
        client: QueryClient,
        children?: React$Node,
      |}> {}

  declare export type QueryErrorResetBoundaryValue = {|
    clearReset: () => void,
    isReset: () => boolean,
    reset: () => void,
  |};
  declare export function useQueryErrorResetBoundary(): QueryErrorResetBoundaryValue;
  declare export class QueryErrorResetBoundary
    extends
      React$Component<{|
        children:
          | React$Node
          | ((value: QueryErrorResetBoundaryValue) => React$Node),
      |}> {}
  declare export function setLogger(logger: {|
    log: (...args: mixed[]) => void,
    warn: (...args: mixed[]) => void,
    error: (...args: mixed[]) => void,
  |}): void;

  declare export type NotifyCallback = () => void;
  declare export type NotifyFunction = (callback: () => void) => void;
  declare export type BatchNotifyFunction = (callback: () => void) => void;

  declare export class NotifyManager {
    batch<T>(callback: () => T): T;
    schedule(callback: NotifyCallback): void;
    batchCalls<T>(callback: T): T;
    flush(): void;

    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction(fn: NotifyFunction): void;

    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction(fn: BatchNotifyFunction): void;
  }
  declare export var notifyManager: NotifyManager;
  declare export var focusManager: {|
    setEventListener(
      setup: (onFocus: () => void) => (focused?: boolean) => void
    ): void,
    setFocused(focused?: boolean): void,
    isFocused: boolean,
  |};
  declare export var onlineManager: {|
    setEventListener(
      setup: (setOnline: () => void) => (online?: boolean) => void
    ): void,
    setOnline(online?: boolean): void,
    isOnline: boolean,
  |};
  declare export function hashQueryKey(queryKey: QueryKey): string;
  declare export function isError(value: any): boolean;
  declare export function isCancelledError(value: any): boolean;
}

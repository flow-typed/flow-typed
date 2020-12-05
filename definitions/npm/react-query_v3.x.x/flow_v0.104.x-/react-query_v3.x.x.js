// @flow

// NOTE: useInfiniteQuery is currently very poorly typed. The relevant type definitions have been
// commented out. useInfiniteQuery will accept `any` config options return `any`.

declare module "react-query" {
  declare class Subscribable<TListener> {
    subscribe(listener?: TListener): () => void;
    hasListeners(): boolean;
  }
  declare type QueryCacheListener = (query?: Query<any, any, any>) => void;

  declare export class QueryCache extends Subscribable<QueryCacheListener> {
    build<TData, TError: Error, TQueryFnData: TData>(
      client: QueryClient,
      options: QueryOptions<TData, TError, TQueryFnData>,
      state?: QueryState<TData, TError>
    ): Query<TData, TError, TQueryFnData>;
    add(query: Query<any, any, any>): void;
    remove(query: Query<any, any, any>): void;
    clear(): void;
    get<TData, TError: Error, TQueryFnData: TData>(
      queryHash: string
    ): ?Query<TData, TError, TQueryFnData>;
    getAll(): Query<any, any, any>[];
    find<TData, TError: Error, TQueryFnData: TData>(
      queryKey: QueryKey,
      filters?: QueryFilters
    ): ?Query<TData, TError, TQueryFnData>;
    findAll<TData, TError: Error, TQueryFnData: TData>(
      queryKey?: QueryKey,
      filters?: QueryFilters
    ): Query<TData, TError, TQueryFnData>[];
    findAll<TData, TError: Error, TQueryFnData: TData>(
      filters?: QueryFilters
    ): Query<TData, TError, TQueryFnData>[];
    notify<TData, TError: Error, TQueryFnData: TData>(
      query?: Query<TData, TError, TQueryFnData>
    ): void;
    onFocus(): void;
    onOnline(): void;
  }

  declare type QueryFilters = {|
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
    predicate?: <TData, TError: Error, TQueryFnData: TData>(
      query: Query<TData, TError, TQueryFnData>
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
  declare type InvalidateQueryFilters = {|
    ...QueryFilters,
    refetchActive?: boolean,
    refetchInactive?: boolean,
  |};

  declare type QueryClientConfig = {|
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

    getQueryData<TData>(queryKey: QueryKey, filters?: QueryFilters): ?TData;
    setQueryData<TData>(
      queryKey: QueryKey,
      updater: Updater<?TData, TData>,
      options?: SetDataOptions
    ): TData;
    getQueryState<TData, TError: Error>(
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

    fetchQuery<TData, TError: Error, TQueryFnData: TData>(
      options: FetchQueryOptions<TData, TError, TQueryFnData>
    ): Promise<TData>;
    fetchQuery<TData, TError: Error, TQueryFnData: TData>(
      queryKey: QueryKey,
      options?: FetchQueryOptions<TData, TError, TQueryFnData>
    ): Promise<TData>;
    fetchQuery<TData, TError: Error, TQueryFnData: TData>(
      queryKey: QueryKey,
      queryFn: QueryFunction<TQueryFnData | TData>,
      options?: FetchQueryOptions<TData, TError, TQueryFnData>
    ): Promise<TData>;

    prefetchQuery<TData, TError: Error, TQueryFnData: TData>(
      options: FetchQueryOptions<TData, TError, TQueryFnData>
    ): Promise<void>;
    prefetchQuery<TData, TError: Error, TQueryFnData: TData>(
      queryKey: QueryKey,
      options?: FetchQueryOptions<TData, TError, TQueryFnData>
    ): Promise<void>;
    prefetchQuery<TData, TError: Error, TQueryFnData: TData>(
      queryKey: QueryKey,
      queryFn: QueryFunction<TQueryFnData>,
      options?: FetchQueryOptions<TData, TError, TQueryFnData>
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
      options: QueryObserverOptions<any, any, any, any>
    ): void;
    getQueryDefaults(
      queryKey?: QueryKey
    ): ?QueryObserverOptions<any, any, any, any>;
    setMutationDefaults(
      mutationKey: MutationKey,
      options: MutationObserverOptions<any, any, any, any>
    ): void;
    getMutationDefaults(
      mutationKey?: MutationKey
    ): ?MutationObserverOptions<any, any, any, any>;
    defaultQueryOptions<T: QueryOptions<any, any, any>>(options?: T): T;
    defaultQueryObserverOptions<T: QueryObserverOptions<any, any, any, any>>(
      options?: T
    ): T;
    defaultMutationOptions<T: MutationOptions<any, any, any, any>>(
      options?: T
    ): T;
    clear(): void;
  }

  declare type CancelOptions = {|
    revert?: boolean,
    silent?: boolean,
  |};
  declare type ResultOptions = {|
    throwOnError?: boolean,
    cancelRefetch?: boolean,
  |};
  declare type RefetchOptions = ResultOptions;
  declare type InvalidateOptions = ResultOptions;
  declare type FetchNextPageOptions<T> = {|
    ...ResultOptions,
    pageParam?: T,
  |};
  declare type FetchPreviousPageOptions<T> = FetchNextPageOptions<T>;

  // retry related
  declare type RetryValue<TError: Error> =
    | boolean
    | number
    | ShouldRetryFunction<TError>;
  declare type ShouldRetryFunction<TError: Error> = (
    failureCount: number,
    error: TError
  ) => boolean;
  declare type RetryDelayValue<TError: Error> =
    | number
    | RetryDelayFunction<TError>;
  declare type RetryDelayFunction<TError> = (
    failureCount: number,
    error: TError
  ) => number;

  // updater
  declare type DataUpdateFunction<TInput, TOutput> = (input: TInput) => TOutput;
  declare type Updater<TInput, TOutput> =
    | TOutput
    | DataUpdateFunction<TInput, TOutput>;

  // Action
  declare type FailedAction = {|
    type: "failed",
  |};

  declare type FetchAction = {|
    type: "fetch",
    meta?: mixed,
  |};

  declare type SuccessAction<TData> = {|
    data: ?TData,
    type: "success",
    dataUpdatedAt?: number,
  |};

  declare type ErrorAction<TError: Error> = {|
    type: "error",
    error: TError,
  |};

  declare type InvalidateAction = {|
    type: "invalidate",
  |};

  declare type PauseAction = {|
    type: "pause",
  |};

  declare type ContinueAction = {|
    type: "continue",
  |};

  declare type SetStateAction<TData, TError: Error, TVariables, TContext> = {|
    type: "setState",
    state: MutationState<TData, TError, TVariables, TContext>,
  |};

  declare type SetQueryStateAction<TData, TError: Error> = {|
    type: "setState",
    state: QueryState<TData, TError>,
  |};

  declare export type Action<TData, TError: Error, TVariables, TContext> =
    | ContinueAction
    | ErrorAction<TError>
    | FailedAction
    | LoadingAction<TVariables, TContext>
    | PauseAction
    | SetStateAction<TData, TError, TVariables, TContext>
    | SuccessAction<TData>;

  declare export type QueryAction<TData, TError: Error> =
    | ContinueAction
    | ErrorAction<TError>
    | FailedAction
    | FetchAction
    | InvalidateAction
    | PauseAction
    | SetQueryStateAction<TData, TError>
    | SuccessAction<TData>;

  // query types
  declare type FetchOptions = {|
    cancelRefresh?: boolean,
    meta?: mixed,
  |};
  declare type FetchContext<TData, TError: Error, TQueryFnData: TData> = {|
    fetchFn: () => mixed | Promise<mixed>,
    fetchOptions?: FetchOptions,
    options: QueryOptions<TData, TError, TQueryFnData>,
    queryKey: QueryKey,
    state: QueryState<TData, TError>,
  |};
  declare type QueryBehavior<TData, TError: Error, TQueryFnData: TData> = {|
    onFetch: (context: FetchContext<TData, TError, TQueryFnData>) => void,
  |};
  declare type QueryConfig<TData, TError: Error, TQueryFnData: TData> = {|
    cache: QueryCache,
    queryKey: QueryKey,
    queryHash: string,
    options?: QueryOptions<TData, TError, TQueryFnData>,
    defaultOptions?: QueryOptions<TData, TError, TQueryFnData>,
    state?: QueryState<TData, TError>,
  |};
  declare type EnumStatus = "idle" | "loading" | "success" | "error";
  declare export type QueryStatus = EnumStatus;
  declare type QueryState<TData, TError: Error> = {|
    data: ?TData,
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

  declare type InitialDataFunction<T> = () => ?T;
  declare type QueryKey = string | mixed[];
  declare type QueryKeyHashFunction = (queryKey: QueryKey) => string;
  declare type QueryFunctionContext<TQueryKey: QueryKey, TPageParam> = {|
    queryKey: TQueryKey,
    pageParam?: TPageParam,
  |};
  declare type QueryFunction<T> = (
    context: QueryFunctionContext<QueryKey, any>
  ) => Promise<T> | T;
  declare type GetPreviousPageParamFunction<TQueryFnData, U> = (
    firstPage: TQueryFnData,
    allPages: TQueryFnData[]
  ) => U;
  declare type GetNextPageParamFunction<TQueryFnData, U> = (
    lastPage: TQueryFnData,
    allPages: TQueryFnData[]
  ) => U;
  declare type QueryOptions<TData, TError: Error, TQueryFnData: TData> = {|
    retry?: RetryValue<TError>,
    retryDelay?: RetryDelayValue<TError>,
    cacheTime?: number,
    isDataEqual?: (oldData: ?TData, newData: TData) => boolean,
    queryFn?: QueryFunction<TQueryFnData>,
    queryHash?: string,
    queryKey?: QueryKey,
    queryKeyHashFn?: QueryKeyHashFunction,
    initialData?: TData | InitialDataFunction<TData>,
    behavior?: QueryBehavior<TData, TError, TQueryFnData>,
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
  declare export type FetchQueryOptions<TData, TError: Error, TQueryFnData: TData> = {|
    ...QueryOptions<TData, TError, TQueryFnData>,
    staleTime?: number,
  |};
  declare type PlaceholderDataFunction<TResult> = () => ?TResult;

  declare export type QueryObserverOptions<
    TData,
    TError: Error,
    TQueryFnData: TData,
    TQueryData: TQueryFnData
  > = {|
    ...QueryOptions<TData, TError, TQueryFnData>,
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
    notifyOnChangeProps?: string[], // TODO: was Array<$Keys<InfiniteQueryObserverResult<_, _>>>,
    /**
     * If set, the component will not re-render if any of the listed properties change.
     */
    notifyOnChangePropsExclusions?: string[], // TODO: was Array<$Keys<InfiniteQueryObserverResult<_, _>>>,
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
    onSettled?: (data: ?TData, error: TError | null) => void,
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

  // declare type InfiniteQueryObserverOptions<TData, TError: Error, TQueryFnData: TData, TQueryData: TQueryFnData> = QueryObserverOptions<InfiniteData<TData>,
  //   TError,
  //   TQueryFnData,
  //   InfiniteData<TQueryData>>;

  declare type QueryObserverBaseResult<TData, TError: Error> = {|
    data: ?TData,
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

  declare type QueryObserverIdleResult<TData, TError: Error> = {|
    ...QueryObserverBaseResult<TData, TError>,
    // data: null, // TODO should be undefined
    error: null,
    isError: false,
    isIdle: true,
    isLoading: false,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: false,
    status: "idle",
  |};

  declare type QueryObserverLoadingResult<TData, TError: Error> = {|
    ...QueryObserverBaseResult<TData, TError>,
    // data: null, // TODO should be undefined
    error: null,
    isError: false,
    isIdle: false,
    isLoading: true,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: false,
    status: "loading",
  |};

  declare type QueryObserverLoadingErrorResult<TData, TError: Error> = {|
    ...QueryObserverBaseResult<TData, TError>,
    // data: null, // TODO should be undefined
    error: TError,
    isError: true,
    isIdle: false,
    isLoading: false,
    isLoadingError: true,
    isRefetchError: false,
    isSuccess: false,
    status: "error",
  |};

  declare type QueryObserverRefetchErrorResult<TData, TError: Error> = {|
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

  declare type QueryObserverSuccessResult<TData, TError: Error> = {|
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
  declare export type QueryObserverResult<TData, TError: Error> =
    | QueryObserverIdleResult<TData, TError>
    | QueryObserverLoadingErrorResult<TData, TError>
    | QueryObserverLoadingResult<TData, TError>
    | QueryObserverRefetchErrorResult<TData, TError>
    | QueryObserverSuccessResult<TData, TError>;

  // declare type InfiniteData<TData> = {|
  //   pages: TData[],
  //   pageParams: mixed[],
  // |};
  // declare type InfiniteQueryObserverBaseResult<TData, TError: Error> = {|
  //   ...QueryObserverBaseResult<InfiniteData<TData>, TError>,
  //   fetchNextPage: (
  //     options?: FetchNextPageOptions<*>
  //   ) => Promise<InfiniteQueryObserverResult<TData, TError>>,
  //   fetchPreviousPage: (
  //     options?: FetchPreviousPageOptions<*>
  //   ) => Promise<InfiniteQueryObserverResult<TData, TError>>,
  //   hasNextPage?: boolean,
  //   hasPreviousPage?: boolean,
  //   isFetchingNextPage: boolean,
  //   isFetchingPreviousPage: boolean,
  // |};

  // declare type InfiniteQueryObserverIdleResult<TData, TError: Error> = {|
  //   ...InfiniteQueryObserverBaseResult<TData, TError>,
  //   data: null, // TODO should be undefined
  //   error: null,
  //   isError: false,
  //   isIdle: true,
  //   isLoading: false,
  //   isLoadingError: false,
  //   isRefetchError: false,
  //   isSuccess: false,
  //   status: "idle",
  // |};

  // declare type InfiniteQueryObserverLoadingResult<TData, TError: Error> = {|
  //   ...InfiniteQueryObserverBaseResult<TData, TError>,
  //   data: null, // TODO should be undefined
  //   error: null,
  //   isError: false,
  //   isIdle: false,
  //   isLoading: true,
  //   isLoadingError: false,
  //   isRefetchError: false,
  //   isSuccess: false,
  //   status: "loading",
  // |};

  // declare type InfiniteQueryObserverLoadingErrorResult<TData, TError: Error> = {|
  //   ...InfiniteQueryObserverBaseResult<TData, TError>,
  //   data: null, // TODO should be undefined
  //   error: TError,
  //   isError: true,
  //   isIdle: false,
  //   isLoading: false,
  //   isLoadingError: true,
  //   isRefetchError: false,
  //   isSuccess: false,
  //   status: "error",
  // |};

  // declare type InfiniteQueryObserverRefetchErrorResult<TData, TError: Error> = {|
  //   ...InfiniteQueryObserverBaseResult<TData, TError>,
  //   data: InfiniteData<TData>,
  //   error: TError,
  //   isError: true,
  //   isIdle: false,
  //   isLoading: false,
  //   isLoadingError: false,
  //   isRefetchError: true,
  //   isSuccess: false,
  //   status: "error",
  // |};

  // declare type InfiniteQueryObserverSuccessResult<TData, TError: Error> = {|
  //   ...InfiniteQueryObserverBaseResult<TData, TError>,
  //   data: InfiniteData<TData>,
  //   error: null,
  //   isError: false,
  //   isIdle: false,
  //   isLoading: false,
  //   isLoadingError: false,
  //   isRefetchError: false,
  //   isSuccess: true,
  //   status: "success",
  // |};

  // declare type InfiniteQueryObserverResult<TData, TError: Error> =
  //   | InfiniteQueryObserverIdleResult<TData, TError>
  //   | InfiniteQueryObserverLoadingErrorResult<TData, TError>
  //   | InfiniteQueryObserverLoadingResult<TData, TError>
  //   | InfiniteQueryObserverRefetchErrorResult<TData, TError>
  //   | InfiniteQueryObserverSuccessResult<TData, TError>;

  declare type QueryObserverListener<TData, TError: Error> = (
    result: QueryObserverResult<TData, TError>
  ) => void;

  declare type ObserverFetchOptions = {|
    ...FetchOptions,
    throwOnError?: boolean,
  |};

  declare export class QueryObserver<
      TData,
      TError: Error,
      TQueryFnData: TData,
      TQueryData
    >
    extends Subscribable<QueryObserverListener<TData, TError>> {
    +options: QueryObserverOptions<TData, TError, TQueryFnData, TQueryData>;

    constructor(
      client: QueryClient,
      options: QueryObserverOptions<TData, TError, TQueryFnData, TQueryData>
    ): this;

    willLoadOnMount(): boolean;
    willRefetchOnMount(): boolean;
    willFetchOnMount(): boolean;
    willFetchOnReconnect(): boolean;
    willFetchOnWindowFocus(): boolean;
    destroy(): void;
    setOptions(
      options?: QueryObserverOptions<TData, TError, TQueryFnData, TQueryData>
    ): void;
    getCurrentResult(): QueryObserverResult<TData, TError>;
    getNextResult(
      options?: ResultOptions
    ): Promise<QueryObserverResult<TData, TError>>;
    getCurrentQuery(): Query<TQueryData, TError, TQueryFnData>;
    remove(): void;
    refetch(
      options?: RefetchOptions
    ): Promise<QueryObserverResult<TData, TError>>;
    onQueryUpdate(action: Action<TData, TError>): void;
  }

  declare type QueriesObserverListener<TData, TError: Error> = (
    result: $ReadOnlyArray<QueryObserverResult<TData, TError>>
  ) => void;
  declare export class QueriesObserver<
      TData,
      TError: Error,
      TQueryFnData: TData,
      TQueryData
    >
    extends Subscribable<QueriesObserverListener<TData, TError>> {
    constructor(
      client: QueryClient,
      queries?: QueryObserverOptions<TData, TError, TQueryFnData, TQueryData>[]
    ): this;
    destroy(): void;
    setQueries(
      queries: QueryObserverOptions<TData, TError, TQueryFnData, TQueryData>[]
    ): void;
    getCurrentResult(): QueryObserverResult<TData, TError>[];
  }

  // declare type InfiniteQueryObserverListener<TData, TError: Error> = (
  //   result: InfiniteQueryObserverResult<TData, TError>
  // ) => void;

  // declare export class InfiniteQueryObserver<
  //     TData,
  //     TError: Error,
  //     TQueryFnData: TData,
  //     TQueryData: TQueryFnData
  //   >
  //   extends
  //     QueryObserver<
  //       InfiniteData<TData>,
  //       TError,
  //       TQueryFnData,
  //       InfiniteData<TQueryData>
  //     > {
  //   constructor(
  //     client: QueryClient,
  //     options: InfiniteQueryObserverOptions<
  //       InfiniteData<TData>,
  //       TError,
  //       TQueryFnData,
  //       InfiniteData<TQueryData>
  //     >
  //   ): this;

  //   // Type override
  //   subscribe(
  //     listener?: InfiniteQueryObserverListener<InfiniteData<TData>, TError>
  //   ): () => void;

  //   // Type override
  //   getCurrentResult(): InfiniteQueryObserverResult<InfiniteData<TData>, TError>;

  //   setOptions(
  //     options?: InfiniteQueryObserverOptions<
  //       InfiniteData<TData>,
  //       TError,
  //       TQueryFnData,
  //       TQueryData
  //     >
  //   ): void;
  //   fetchNextPage<T>(
  //     options?: FetchNextPageOptions<T>
  //   ): Promise<InfiniteQueryObserverResult<TData, TError>>;
  //   fetchPreviousPage<T>(
  //     options?: FetchPreviousPageOptions<T>
  //   ): Promise<InfiniteQueryObserverResult<TData, TError>>;
  // }

  declare type SetDataOptions = {| updatedAt?: number |};

  declare class Query<TData, TError: Error, TQueryFnData: TData> {
    +queryKey: QueryKey;
    +queryHash: string;
    +options: QueryOptions<TData, TError, TQueryFnData>;
    +state: QueryState<TData, TError>;
    +cacheTime: number;

    constructor(config: QueryConfig<TData, TError, TQueryFnData>): this;
    setDefaultOptions(options: QueryOptions<TData, TError, TQueryFnData>): void;
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
      options?: QueryOptions<TData, TError, TQueryFnData>,
      fetchOptions?: FetchOptions
    ): Promise<TData>;
  }

  /**
   *
   * Mutations
   *
   */

  declare type MutationConfig<TData, TError: Error, TVariables, TContext> = {|
    mutationId: number,
    mutationCache: MutationCache,
    options: MutationOptions<TData, TError, TVariables, TContext>,
    defaultOptions?: MutationOptions<TData, TError, TVariables, TContext>,
    state?: MutationState<TData, TError, TVariables, TContext>,
  |};

  declare type MutationKey = QueryKey;
  declare export type MutationStatus = EnumStatus;

  declare type MutationFunction<TData, TVariables> = (
    variables: TVariables
  ) => Promise<TData>;

  declare type MutationOptions<TData, TError: Error, TVariables, TContext> = {|
    mutationFn?: MutationFunction<TData, TVariables>,
    mutationKey?: MutationKey,
    variables?: TVariables,
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
      data: ?TData,
      error: TError | null,
      variables: TVariables,
      context: ?TContext
    ) => Promise<void> | void,
    retry?: RetryValue<TError>,
    retryDelay?: RetryDelayValue<TError>,
  |};

  declare type MutationObserverOptions<
    TData,
    TError: Error,
    TVariables,
    TContext
  > = {|
    ...MutationOptions<TData, TError, TVariables, TContext>,
    useErrorBoundary?: boolean,
  |};

  declare type MutateOptions<TData, TError: Error, TVariables, TContext> = {|
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
      data: ?TData,
      error: TError | null,
      variables: TVariables,
      context: ?TContext
    ) => Promise<void> | void,
  |};

  declare type MutateFunction<TData, TError: Error, TVariables, TContext> = (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>
  ) => Promise<TData>;

  declare type MutationObserverResult<
    TData,
    TError: Error,
    TVariables,
    TContext
  > = {|
    ...MutationState<TData, TError, TVariables, TContext>,
    isError: boolean,
    isIdle: boolean,
    isLoading: boolean,
    isSuccess: boolean,
    mutate: MutateFunction<TData, TError, TVariables, TContext>,
    reset: () => void,
  |};

  declare type DefaultOptions = {|
    queries?: QueryObserverOptions<any, any, any, any>,
    mutations?: MutationObserverOptions<any, any, any, any>,
  |};
  declare type MutationState<TData, TError: Error, TVariables, TContext> = {|
    context: ?TContext,
    data: ?TData,
    error: TError | null,
    failureCount: number,
    isPaused: boolean,
    status: MutationStatus,
    variables: ?TVariables,
  |};

  declare type LoadingAction<TVariables, TContext> = {|
    type: "loading",
    variables?: TVariables,
    context?: TContext,
  |};

  declare type SetMutationStateAction<
    TData,
    TError: Error,
    TVariables,
    TContext
  > = {|
    type: "setState",
    state: MutationState<TData, TError, TVariables, TContext>,
  |};

  declare type MutationAction<TData, TError: Error, TVariables, TContext> =
    | ContinueAction
    | ErrorAction<TError>
    | FailedAction
    | LoadingAction<TVariables, TContext>
    | PauseAction
    | SetMutationStateAction<TData, TError, TVariables, TContext>
    | SuccessAction<TData>;

  declare export class Mutation<TData, TError: Error, TVariables, TContext> {
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

  declare type MutationObserverListener<
    TData,
    TError: Error,
    TVariables,
    TContext
  > = (
    result: MutationObserverResult<TData, TError, TVariables, TContext>
  ) => void;
  declare export class MutationObserver<
      TData,
      TError: Error,
      TVariables,
      TContext
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

  declare type MutationCacheListener = (
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

  declare type UseBaseQueryOptions<
    TData,
    TError: Error,
    TQueryFnData: TData,
    TQueryData: TQueryFnData
  > = QueryObserverOptions<TData, TError, TQueryFnData, TQueryData>;

  declare export type UseQueryOptions<
    TData,
    TError: Error,
    TQueryFnData: TData
  > = UseBaseQueryOptions<TData, TError, TQueryFnData, TQueryFnData>;

  // declare type UseInfiniteQueryOptions<
  //   TData,
  //   TError,
  //   TQueryFnData: TData,
  //   TQueryData: TQueryFnData
  // > = InfiniteQueryObserverOptions<TData, TError, TQueryFnData, TQueryData>;

  declare type UseBaseQueryResult<TData, TError: Error> = QueryObserverResult<
    TData,
    TError>;

  declare export type UseQueryResult<TData, TError: Error> = UseBaseQueryResult<
    TData,
    TError>;

  // declare type UseInfiniteQueryResult<
  //   TData,
  //   TError
  // > = InfiniteQueryObserverResult<TData, TError>;

  declare type UseMutationOptions<
    TData,
    TError: Error,
    TVariables,
    TContext
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
      data: ?TData,
      error: TError | null,
      variables: TVariables,
      context: ?TContext
    ) => Promise<void> | void,
    retry?: RetryValue<TError>,
    retryDelay?: RetryDelayValue<TError>,
    useErrorBoundary?: boolean,
  |};

  declare type UseMutateFunction<TData, TError: Error, TVariables, TContext> = (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>
  ) => void;

  declare type UseMutateAsyncFunction<
    TData,
    TError: Error,
    TVariables,
    TContext
  > = (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>
  ) => Promise<TData>;

  declare export type UseMutationResult<
    TData,
    TError: Error,
    TVariables,
    TContext
  > = {|
    context: ?TContext,
    data: ?TData,
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

  declare export function useQuery<TData, TError: Error, TQueryFnData: TData>(
    options: UseQueryOptions<TData, TError, TQueryFnData>
  ): UseQueryResult<TData, TError>;
  declare export function useQuery<TData, TError: Error, TQueryFnData: TData>(
    queryKey: QueryKey,
    options?: UseQueryOptions<TData, TError, TQueryFnData>
  ): UseQueryResult<TData, TError>;
  declare export function useQuery<TData, TError: Error, TQueryFnData: TData>(
    queryKey: QueryKey,
    queryFn: QueryFunction<TQueryFnData>,
    options?: UseQueryOptions<TData, TError, TQueryFnData>
  ): UseQueryResult<TData, TError>;

  declare export function useQueries<TData, TError: Error, TQueryFnData: TData>(
    queries: UseQueryOptions<TData, TError, TQueryFnData>[]
  ): UseQueryResult<TData, TError>[];

  // stub until bugs can be worked out:
  declare export function useInfiniteQuery(options: any): any;
  declare export function useInfiniteQuery(
    queryKey: QueryKey,
    options?: any
  ): any;
  declare export function useInfiniteQuery<
    TData,
    TError: Error,
    TQueryFnData: TData
  >(
    queryKey: QueryKey,
    queryFn: QueryFunction<TData | TQueryFnData>,
    options?: any
  ): any;

  // declare export function useInfiniteQuery<TData, TError: Error, TQueryFnData: TData>(
  //   options: UseInfiniteQueryOptions<TData, TError, TQueryFnData>
  // ): UseInfiniteQueryResult<TData, TError>;
  // declare export function useInfiniteQuery<TData, TError: Error, TQueryFnData: TData>(
  //   queryKey: QueryKey,
  //   options?: UseInfiniteQueryOptions<TData, TError, TQueryFnData>
  // ): UseInfiniteQueryResult<TData, TError>;
  // declare export function useInfiniteQuery<TData, TError: Error, TQueryFnData: TData>(
  //   queryKey: QueryKey,
  //   queryFn: QueryFunction<TQueryFnData | TData>,
  //   options?: UseInfiniteQueryOptions<TData, TError, TQueryFnData>
  // ): UseInfiniteQueryResult<TData, TError>;

  declare export function useMutation<
    TData,
    TError: Error,
    TVariables,
    TContext
  >(
    options: UseMutationOptions<TData, TError, TVariables, TContext>
  ): UseMutationResult<TData, TError, TVariables, TContext>;
  declare export function useMutation<
    TData,
    TError: Error,
    TVariables,
    TContext
  >(
    mutationFn: MutationFunction<TData, TVariables>,
    options?: UseMutationOptions<TData, TError, TVariables, TContext>
  ): UseMutationResult<TData, TError, TVariables, TContext>;
  declare export function useMutation<
    TData,
    TError: Error,
    TVariables,
    TContext
  >(
    mutationKey: MutationKey,
    options?: UseMutationOptions<TData, TError, TVariables, TContext>
  ): UseMutationResult<TData, TError, TVariables, TContext>;
  declare export function useMutation<
    TData,
    TError: Error,
    TVariables,
    TContext
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

  declare type QueryErrorResetBoundaryValue = {|
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

  declare type NotifyCallback = () => void;
  declare type NotifyFunction = (callback: () => void) => void;
  declare type BatchNotifyFunction = (callback: () => void) => void;

  declare class NotifyManager {
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

declare module "@tanstack/react-query" {
  declare type QueryFunctionContext = { [key: string]: any };

  declare type UseQueryOptions<TData> = {|
    queryKey: Array<any>,
    queryFn?: (context: QueryFunctionContext) => Promise<TData>,
    cacheTime?: any,
    enabled?: any,
    networkMode?: any,
    initialData?: any,
    initialDataUpdatedAt?: any,
    keepPreviousData?: any,
    meta?: any,
    notifyOnChangeProps?: any,
    onError?: any,
    onSettled?: any,
    onSuccess?: any,
    placeholderData?: any,
    queryKeyHashFn?: any,
    refetchInterval?: any,
    refetchIntervalInBackground?: any,
    refetchOnMount?: any,
    refetchOnReconnect?: any,
    refetchOnWindowFocus?: any,
    retry?: any,
    retryOnMount?: any,
    retryDelay?: any,
    select?: any,
    staleTime?: any,
    structuralSharing?: any,
    suspense?: any,
    useErrorBoundary?: any,
  |};

  declare type UseQueryReturn<TData, TError> = {|
    isLoading: boolean,
    data: TData,
    dataUpdatedAt: number,
    error: null | TError,
    errorUpdatedAt: number,
    failureCount: number,
    failureReason: null | TError,
    fetchStatus: any,
    isError: boolean,
    isFetched: boolean,
    isFetchedAfterMount: boolean,
    isFetching: boolean,
    isInitialLoading: boolean,
    isLoadingError: boolean,
    isPaused: boolean,
    isPending: boolean,
    isPlaceholderData: boolean,
    isRefetchError: boolean,
    isRefetching: boolean,
    isStale: boolean,
    isSuccess: boolean,
    refetch: any,
    status: string,
  |};

  declare type UseMutationOptions<TData, TError> = {|
    mutationKey: Array<string>,
    mutationFn: () => Promise<TData>,
    onSuccess?: (data: TData, variables: any) => Promise<any>,
    onError?: (error: TError) => Promise<any>,
    onSettled?: (data: TData | void, error: TError | null, variables: any) => Promise<any>,
    onMutate?: () => Promise<any>,
    cacheTime?: any,
    mutationKey?: any,
    networkMode?: any,
    retry?: any,
    retryDelay?: any,
    useErrorBoundary?: any,
    meta?: any,
  |}

  declare type UseMutationReturn<TData, TError> = {|
    data: TData | void,
    error: TError | null,
    isError: boolean,
    isIdle: boolean,
    isLoading: boolean,
    isPaused: boolean,
    isSuccess: boolean,
    failureCount: number,
    failureReason: TError | null,
    mutate: (
      variables: any,
      options?: {|
        onError?: (error: TError) => Promise<any>,
        onSettled?: (data: TData | void, error: TError | null, variables: any) => Promise<any>,
        onSuccess?: (data: TData, variables: any) => Promise<any>,
      |}
    ) => Promise<any>,
    mutateAsync: (
      variables: any,
      options?: {|
        onError?: (error: TError) => Promise<any>,
        onSettled?: (data: TData | void, error: TError | null, variables: any) => Promise<any>,
        onSuccess?: (data: TData, variables: any) => Promise<any>,
      |}
    ) => Promise<TData>,
    reset: () => void,
    status: string,
  |};

  declare class QueryClient {
    queryCache?: any,
    mutationCache?: any,
    defaultOptions?: any,
  }

  declare type QueryClientProviderOptions = {|
    client: QueryClient,
    children?: React$Node,
  |};

  declare module.exports: {|
    useQuery: <T = any, E = any>(queryOptions: UseQueryOptions<T>) => UseQueryReturn<T,E>,
    useMutation: <T = any, E = any>(options: UseMutationOptions<T,E>) => UseMutationReturn<T,E>,
    QueryClientProvider: (options: QueryClientProviderOptions) => React$Node,
    QueryClient: typeof QueryClient,
    useQueries: any,
    useInfiniteQuery: any,
    useIsFetching: any,
    useIsMutating: any,
    useMutationState: any,
    useSuspenseQuery: any,
    useSuspenseInfiniteQuery: any,
    useSuspenseQueries: any,
    useQueryClient: any,
    queryOptions: any,
    infiniteQueryOptions: any,
    QueryCache: any,
    MutationCache: any,
    QueryObserver: any,
    InfiniteQueryObserver: any,
    QueriesObserver: any,
    QueryErrorResetBoundary: any,
    useQueryErrorResetBoundary: any,
    focusManager: any,
    onlineManager: any,
    hydration: any,
  |};
}

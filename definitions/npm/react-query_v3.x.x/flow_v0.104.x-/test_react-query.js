// @flow
import { describe, it } from "flow-typed-test";
import * as React from "react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
  type QueryObserverResult,
  focusManager,
  hashQueryKey,
  isCancelledError,
  isError,
  onlineManager,
  setLogger,
  useInfiniteQuery,
  useIsFetching,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
  useQueryErrorResetBoundary,
} from "react-query";

describe("react-query", () => {
  const dummyQueryFilters = {
    active: true,
    exact: true,
    inactive: false,
    stale: false,
    fetching: true,
    predicate: () => true,
    queryKey: "key",
  };
  const dummyInvalidateQueryFilters = {
    active: true,
    exact: true,
    inactive: false,
    stale: false,
    fetching: true,
    predicate: () => true,
    queryKey: "key",
    refetchActive: false,
    refetchInactive: true,
  };

  it("useIsFetching", () => {
    (useIsFetching(dummyQueryFilters): number);
    (useIsFetching("key", dummyQueryFilters): number);

    // $FlowExpectedError[incompatible-call]
    useIsFetching(() => {});
  });

  // basically not implemented. See comment at the top of the libdef file
  it("useInfiniteQuery", () => {
    // overloaded method calls
    useInfiniteQuery({});
    useInfiniteQuery("key", {});
    useInfiniteQuery("key", () => true, {});

    // should be an expected error but poorly typed
    useInfiniteQuery(() => true);
    // should be an expected error but poorly typed
    useInfiniteQuery("key", []);
    // should be an expected error but poorly typed
    useInfiniteQuery("key", () => true, []);

    (useInfiniteQuery({}): any); // poorly typed
  });

  // somewhat copied from the react-query unit tests https://github.com/tannerlinsley/react-query/tree/master/src/react/tests
  it("useQuery", () => {
    // overloaded method calls
    useQuery({});
    useQuery("key", {});
    useQuery("key", () => true, {});

    // $FlowExpectedError[incompatible-call]
    useQuery(() => true);
    // $FlowExpectedError[incompatible-call]
    useQuery("key", []);
    // $FlowExpectedError[incompatible-call]
    useQuery("key", () => true, []);

    const noQueryFn = useQuery("key");
    (noQueryFn.data: any);
    (noQueryFn.error: Error | null);

    // it should infer the result type from the query function
    const fromQueryFn = useQuery("key", () => "test");
    (fromQueryFn.data: ?string);
    (fromQueryFn.error: any);
    (fromQueryFn.status: string);
    (fromQueryFn.isIdle: boolean);
    (fromQueryFn.isLoading: boolean);
    (fromQueryFn.isSuccess: boolean);
    (fromQueryFn.isError: boolean);
    (fromQueryFn.isLoadingError: boolean);
    (fromQueryFn.isRefetchError: boolean);
    (fromQueryFn.isStale: boolean);
    (fromQueryFn.isPlaceholderData: boolean);
    (fromQueryFn.isPreviousData: boolean);
    (fromQueryFn.isFetched: boolean);
    (fromQueryFn.isFetchedAfterMount: boolean);
    (fromQueryFn.isFetching: boolean);
    (fromQueryFn.dataUpdatedAt: number);
    (fromQueryFn.errorUpdatedAt: number);
    (fromQueryFn.failureCount: number);
    (fromQueryFn.refetch: (options?: {|
      throwOnError?: boolean,
      cancelRefetch?: boolean,
    |}) => Promise<QueryObserverResult<string, Error>>);
    (fromQueryFn.remove: () => void);

    // it should be possible to specify the result type
    const withResult = useQuery<string, _, _>("key", () => "test");
    (withResult.data: ?string);
    (withResult.error: Error | null);

    // it should be possible to specify the error type
    const withError = useQuery<string, ReferenceError, _>("key", () => "test");
    (withError.data: ?string);
    (withError.error: ReferenceError | null);

    // it should provide the result type in the configuration
    useQuery(["key"], async () => true, {
      onSuccess: (data) => {
        (data: boolean | Promise<boolean>);
      },
      onSettled: (data) => {
        (data: ?boolean | Promise<?boolean>);
      },
    });

    // should error when the query function result does not match with the specified type
    // $FlowExpectedError[incompatible-call]
    useQuery<number, _, _>("key", () => "test");

    // it should infer the result type from a generic query function
    function queryFn<T: string>(a?: T): Promise<T> {
      // force cast
      const out = (("": any): Promise<T>);
      return out;
    }

    const fromGenericQueryFn = useQuery("key", () => queryFn());
    (fromGenericQueryFn.data: ?string);
    (fromGenericQueryFn.error: Error | null);

    const fromGenericOptionsQueryFn = useQuery({
      queryKey: "key",
      queryFn: () => queryFn(),
    });
    (fromGenericOptionsQueryFn.data: ?string);
    (fromGenericOptionsQueryFn.error: Error | null);

    // All input options
    useQuery({
      queryKey: "key",
      queryFn: () => 10,
      enabled: true,
      retry: true,
      retryOnMount: true,
      retryDelay: 1,
      staleTime: Infinity,
      cacheTime: 5,
      refetchInterval: false,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchOnMount: true,
      retryOnMount: false,
      notifyOnChangeProps: ["foo", "bar"],
      notifyOnChangePropsExclusions: ["baz"],
      onSuccess: (data) => {
        (data: number);
      },
      onError: (error) => {
        (error: Error);
      },
      onSettled: (data, error) => {
        (data: ?number);
        (error: Error | null);
      },
      useErrorBoundary: false,
      select: (data) => data,
      suspense: false,
      keepPreviousData: false,
      placeholderData: 0,
    });

    // retry
    useQuery({
      queryKey: "key",
      queryFn: () => true,
      retry: 4,
    });
    useQuery({
      queryKey: "key",
      queryFn: () => true,
      retry: (failureCount, error) => {
        (failureCount: number);
        (error: Error);
        return true;
      },
    });
    // $FlowExpectedError[incompatible-call]
    useQuery({
      queryKey: "key",
      queryFn: () => true,
      retry: "wrong",
    });

    // retryDelay
    useQuery({
      queryKey: "key",
      queryFn: () => true,
      retryDelay: (failureCount, error) => {
        (failureCount: number);
        (error: Error);
        return 10;
      },
    });

    // refetchInterval
    useQuery({
      queryKey: "key",
      queryFn: () => true,
      refetchInterval: 10,
    });

    // the "always" types
    useQuery({
      queryKey: "key",
      queryFn: () => true,
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      refetchOnMount: "always",
    });
    // $FlowExpectedError[incompatible-call]
    useQuery({
      queryKey: "key",
      queryFn: () => true,
      refetchOnWindowFocus: "sometimes",
    });
    // $FlowExpectedError[incompatible-call]
    useQuery({
      queryKey: "key",
      queryFn: () => true,
      refetchOnReconnect: "sometimes",
    });
    // $FlowExpectedError[incompatible-call]
    useQuery({
      queryKey: "key",
      queryFn: () => true,
      refetchOnMount: "sometimes",
    });

    // placeholderData
    useQuery({
      queryKey: "key",
      queryFn: (): string => "string",
      placeholderData: () => "diffString",
    });
    useQuery<string, _, _>({
      queryKey: "key",
      queryFn: () => "string",
      // $FlowExpectedError[incompatible-call]
      placeholderData: () => 10,
    });
  });

  it("useQueries", () => {
    // $FlowExpectedError[extra-arg]
    // $FlowExpectedError[incompatible-call]
    useQueries<string, _, _>("key", () => "string");

    // $FlowExpectedError[incompatible-call]
    useQueries<string, _, _>({ queryKey: "key", queryFn: () => "string" });

    const out = useQueries<boolean, _, _>([
      { queryKey: "key", queryFn: () => true },
      { queryKey: "key2", queryFn: () => false },
    ]);
    (out[0].data: ?boolean);
    (out[1].data: ?boolean);
    (out[0].error: Error | null);
    (out[1].error: Error | null);
  });

  it("useMutation", () => {
    // overloaded method calls
    useMutation({});
    useMutation("key");
    useMutation(["key"]);
    useMutation("key", {});
    useMutation((params) => Promise.resolve("hi"));
    useMutation((params) => Promise.resolve("hi"), {});
    useMutation("key", (params) => Promise.resolve("hi"));
    useMutation("key", (params) => Promise.resolve("hi"), {});

    const out = useMutation<string, _, {| doThing: boolean |}, number>(
      () => Promise.resolve("hi"),
      {
        mutationKey: "key",
        onMutate: (params) => {
          (params.doThing: boolean);

          return 10;
        },
        onSuccess: (data, variables, context) => {
          (data: string);
          (variables: {| doThing: boolean |});
          (context: ?number);
        },
        onError: (error, variables, context) => {
          (error: Error | null);
          (variables: {| doThing: boolean |});
          (context: ?number);
        },
        onSettled: (data, error, variables, context) => {
          (data: ?string);
          (error: Error | null);
          (variables: {| doThing: boolean |});
          (context: ?number);
        },
        retry: true,
        retryDelay: 10,
      }
    );
    (out.context: ?number);
    (out.data: ?string);
    (out.error: Error | null);
    (out.failureCount: number);
    (out.isError: boolean);
    (out.isIdle: boolean);
    (out.isLoading: boolean);
    (out.isPaused: boolean);
    (out.isSuccess: boolean);
    (out.mutate: ({| doThing: boolean |}) => void);
    (out.mutateAsync: ({| doThing: boolean |}) => Promise<string>);
    (out.reset: () => void);
    (out.status: "idle" | "loading" | "success" | "error");
    (out.variables: ?{| doThing: boolean |});

    // onMutate
    useMutation<_, _, string, string>(() => Promise.resolve("hi"), {
      onMutate: (aString) => {
        (aString: string);

        // $FlowExpectedError[incompatible-call]
        return 10;
      },
    });

    // retry
    useMutation({
      retry: false,
    });
    useMutation({ retry: 10 });
    useMutation<_, ReferenceError, _, _>({
      retry: (failureCount, error) => {
        (failureCount: number);
        (error: ReferenceError);

        return true;
      },
    });
    // $FlowExpectedError[incompatible-call]
    useMutation({ retry: "string" });
    // $FlowExpectedError[incompatible-call]
    useMutation({ retry: () => "string" });

    // retryDelay
    useMutation<_, ReferenceError, _, _>({
      retryDelay: (failureCount, error) => {
        (failureCount: number);
        (error: ReferenceError);
        return 10;
      },
    });
    // $FlowExpectedError[incompatible-call]
    useMutation({ retryDelay: () => "string" });
  });

  it("useQueryErrorResetBoundary", () => {
    (useQueryErrorResetBoundary(): {|
      clearReset: () => void,
      isReset: () => boolean,
      reset: () => void,
    |});
  });

  it("QueryErrorResetBoundary", () => {
    () => (
      <QueryErrorResetBoundary>
        <div />
      </QueryErrorResetBoundary>
    );

    () => (
      <QueryErrorResetBoundary>
        {(value) => {
          (value: {|
            clearReset: () => void,
            isReset: () => boolean,
            reset: () => void,
          |});

          return null;
        }}
      </QueryErrorResetBoundary>
    );

    // $FlowExpectedError[prop-missing]
    () => <QueryErrorResetBoundary />;
  });

  it("useQueryClient", () => {
    const queryClient = useQueryClient();

    (queryClient: QueryClient);
  });

  it("QueryClient", () => {
    const queryCache = new QueryCache();
    const mutationCache = new MutationCache();

    new QueryClient();
    const queryClient = new QueryClient({
      queryCache,
      mutationCache,
      defaultOptions: {
        queries: {},
        mutations: {},
      },
    });

    (queryClient.mount: () => void);
    (queryClient.unmount: () => void);
    (queryClient.isFetching: () => number);
    (queryClient.isFetching("key"): number);
    (queryClient.isFetching("key", dummyQueryFilters): number);
    (queryClient.getQueryData<boolean>("key"): ?boolean);
    (queryClient.getQueryData<string>("key", dummyQueryFilters): ?string);
    // $FlowExpectedError[prop-missing]
    queryClient.getQueryData(["key"], { invalidOption: "foo" });
    queryClient.setQueryData("key", "foo", { updatedAt: 500000 });
    (queryClient.setQueryData<string>("key", (old) => {
      (old: ?string);
      return "foo";
    }): string);
    // $FlowExpectedError[incompatible-call]
    (queryClient.setQueryData<string>("key", (old) => 10): string);
    const queryState = queryClient.getQueryState<number, *>("key");
    (queryState?.data: ?number);
    (queryClient.removeQueries: () => void);
    (queryClient.removeQueries("key", dummyQueryFilters): void);
    (queryClient.cancelQueries(dummyQueryFilters): Promise<void>);
    (queryClient.cancelQueries("key", dummyQueryFilters): Promise<void>);
    (queryClient.refetchQueries(dummyQueryFilters, {
      throwOnError: false,
      cancelRefetch: false,
    }): Promise<void>);
    (queryClient.refetchQueries("key", dummyQueryFilters, {
      throwOnError: false,
      cancelRefetch: false,
    }): Promise<void>);
    (queryClient.invalidateQueries(dummyInvalidateQueryFilters): Promise<void>);
    (queryClient.invalidateQueries(
      "key",
      dummyInvalidateQueryFilters
    ): Promise<void>);

    // fetchQuery
    queryClient.fetchQuery({});
    queryClient.fetchQuery("key", {});
    queryClient.fetchQuery("key", () => true, {});
    // $FlowExpectedError[incompatible-call]
    queryClient.fetchQuery(() => true);
    // $FlowExpectedError[incompatible-call]
    queryClient.fetchQuery("key", []);
    // $FlowExpectedError[incompatible-call]
    queryClient.fetchQuery("key", () => true, []);

    // prefetchQuery
    queryClient.prefetchQuery({});
    queryClient.prefetchQuery("key", {});
    queryClient.prefetchQuery("key", () => true, {});
    // $FlowExpectedError[incompatible-call]
    queryClient.prefetchQuery(() => true);
    // $FlowExpectedError[incompatible-call]
    queryClient.prefetchQuery("key", []);
    // $FlowExpectedError[incompatible-call]
    queryClient.prefetchQuery("key", () => true, []);

    (queryClient.cancelMutations: () => Promise<void>);
    (queryClient.resumePausedMutations: () => Promise<void>);
    (queryClient.executeMutation<string, _, _, _>({}): Promise<string>);
    (queryClient.getQueryCache: () => QueryCache);
    (queryClient.getMutationCache: () => MutationCache);
    queryClient.getDefaultOptions();
    (queryClient.setDefaultOptions({}): void);
    queryClient.setQueryDefaults("key", {});
    queryClient.getQueryDefaults("key");
    queryClient.setMutationDefaults("key", {});
    queryClient.getMutationDefaults("key");
    (queryClient.clear: () => void);
  });

  it("QueryClientProvider", () => {
    const queryClient = useQueryClient();
    (queryClient: QueryClient);

    // $FlowExpectedError[prop-missing]
    () => <QueryClientProvider />;
    () => (
      <QueryClientProvider client={queryClient}>
        <div></div>
      </QueryClientProvider>
    );
  });

  it("focusManager", () => {
    (focusManager.isFocused: boolean);
    focusManager.setEventListener((handleFocus) => {
      (handleFocus: () => void);

      return (isFocused) => {
        (isFocused: ?boolean);
      };
    });
    // $FlowExpectedError[incompatible-call]
    focusManager.setEventListener(true);
  });

  it("onlineManager", () => {
    (onlineManager.setEventListener((setOnline) => {
      (setOnline: () => void);

      return () => {};
    }): void);
    (onlineManager.setOnline(): void);
    (onlineManager.setOnline(true): void);
    // $FlowExpectedError[incompatible-call]
    onlineManager.setOnline("string");
    (onlineManager.isOnline: boolean);
  });

  it("hashQueryKey", () => {
    (hashQueryKey("key"): string);
    (hashQueryKey(["foo", { a: 4 }, 4, null]): string);

    // $FlowExpectedError[incompatible-call]
    hashQueryKey(() => {});
    // $FlowExpectedError[incompatible-call]
    hashQueryKey({});
  });

  it("isCancelledError", () => {
    (isCancelledError(4): boolean);
    (isCancelledError(new Error("msg")): boolean);
    (isCancelledError({}): boolean);
    (isCancelledError(() => {}): boolean);
  });

  it("isError", () => {
    (isError(4): boolean);
    (isError(new Error("msg")): boolean);
    (isError({}): boolean);
    (isError(() => {}): boolean);
  });

  it("setLogger", () => {
    setLogger({
      log: (...args: mixed[]) => {},
      warn: (...args: mixed[]) => {},
      error: (...args: mixed[]) => {},
    });

    // $FlowExpectedError[prop-missing]
    setLogger({ logg: () => {} });
    // $FlowExpectedError[prop-missing]
    setLogger({ log: () => {}, warn: () => {} });
  });
});

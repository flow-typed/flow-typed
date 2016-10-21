import type { ApolloQueryResult, ApolloStateSelector } from 'apollo-client';
import type { NormalizedCache } from 'apollo-client/data/store';
import type { QueryStore, QueryStoreValue } from 'apollo-client/queries/store';
import type { MutationStore } from 'apollo-client/mutations/store';
import type { OptimisticStore } from 'apollo-client/optimistic-data/store';
import type { ApolloAction } from 'apollo-client/actions';
import type { NetworkInterface, createNetworkInterface, addQueryMerging } from 'apollo-client/networkInterface';
import type { Document, FragmentDefinition, SelectionSet, OperationDefinition, Field, FragmentSpread, VariableDefinition, Variable, GraphQLResult, InlineFragment, GraphQLError, RequestInit } from 'graphql';
import type { QueryScheduler } from 'apollo-client/scheduler';
import type { print } from 'graphql-tag/printer';
import type { createApolloStore, ApolloStore, createApolloReducer, ApolloReducerConfig, Store } from 'apollo-client/store';
import type { QueryManager, SubscriptionOptions, ResultComparator, ResultTransformer } from 'apollo-client/QueryManager';
import type { ObservableQuery } from 'apollo-client/ObservableQuery';
import type { Observer, Observable, Subscription } from 'apollo-client/util/Observable';
import type { WatchQueryOptions, FetchMoreQueryOptions, ModifiableWatchQueryOptions } from 'apollo-client/watchQueryOptions';
import type { readQueryFromStore, readFragmentFromStore } from 'apollo-client/data/readFromStore';
import type { writeQueryToStore, writeFragmentToStore } from 'apollo-client/data/writeToStore';
import type { IdGetter } from 'apollo-client/data/extensions';
import type { QueryTransformer, addTypenameToSelectionSet } from 'apollo-client/queries/queryTransform';
import type { MutationBehavior, MutationBehaviorReducerMap, MutationQueryReducersMap } from 'apollo-client/data/mutationResults';
import type { createFragmentMap, FragmentMap } from 'apollo-client/queries/getFromAST';
import type { ApolloError } from 'apollo-client/errors';
import type { MiddlewareInterface } from 'apollo-client/middleware';
import type { AfterwareInterface } from 'apollo-client/afterware';

declare module 'apollo-client' {
  declare type ApolloQueryResult = {
      data: any;
      loading: boolean;
  };
  declare type ApolloStateSelector = (state: any) => Store;
  declare export function createFragment(doc: Document, fragments?: FragmentDefinition[]): FragmentDefinition[];
  declare export function disableFragmentWarnings(): void;
  declare export function enableFragmentWarnings(): void;
  declare export function clearFragmentDefinitions(): void;
  declare export default class ApolloClient {
      networkInterface: NetworkInterface;
      store: ApolloStore;
      reduxRootKey: string;
      reduxRootSelector: ApolloStateSelector | null;
      initialState: any;
      queryManager: QueryManager;
      reducerConfig: ApolloReducerConfig;
      queryTransformer: QueryTransformer;
      resultTransformer: ResultTransformer;
      resultComparator: ResultComparator;
      shouldBatch: boolean;
      shouldForceFetch: boolean;
      dataId: IdGetter;
      fieldWithArgs: (fieldName: string, args?: Object) => string;
      batchInterval: number;
      constructor(options?: {
          networkInterface?: NetworkInterface;
          reduxRootKey?: string;
          reduxRootSelector?: string | ApolloStateSelector;
          initialState?: any;
          dataIdFromObject?: IdGetter;
          queryTransformer?: QueryTransformer;
          resultTransformer?: ResultTransformer;
          resultComparator?: ResultComparator;
          shouldBatch?: boolean;
          ssrMode?: boolean;
          ssrForceFetchDelay?: number;
          mutationBehaviorReducers?: MutationBehaviorReducerMap;
          batchInterval?: number;
      }): this;
      watchQuery(options: WatchQueryOptions): ObservableQuery;
      query(options: WatchQueryOptions): Promise<ApolloQueryResult>;
      mutate(options: {
          mutation: Document;
          variables?: Object;
          resultBehaviors?: MutationBehavior[];
          fragments?: FragmentDefinition[];
          optimisticResponse?: Object;
          updateQueries?: MutationQueryReducersMap;
          refetchQueries?: string[];
      }): Promise<ApolloQueryResult>;
      subscribe(options: SubscriptionOptions): Observable<any>;
      reducer(): Function;
      middleware: () => (store: ApolloStore) => (next: any) => (action: any) => any;
      initStore(): void;
      resetStore(): void;
      setStore(store: ApolloStore): void;
  }
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'apollo-client/actions' {
  declare module.exports: any;
}

declare module 'apollo-client/afterware' {
  declare type AfterwareResponse = {
      response: any;
      options: RequestInit;
  }
  declare type AfterwareInterface = {
      applyAfterware(response: AfterwareResponse, next: Function): any;
  }
}

declare module 'apollo-client/batchedNetworkInterface' {
  declare module.exports: any;
}

declare module 'apollo-client/batching' {
  declare module.exports: any;
}

declare module 'apollo-client/batching/queryMerging' {
  declare export function mergeRequests(requests: Request[]): Request;
  declare export function unpackMergedResult(result: GraphQLResult, childRequests: Request[]): GraphQLResult[];
  declare type UnpackOptions = {
      request: Request;
      data: Object;
      selectionSet?: SelectionSet;
      queryIndex: number;
      startIndex: number;
      fragmentMap: FragmentMap;
      topLevel: boolean;
  };
  declare export function unpackDataForRequest(options: UnpackOptions): {
      newIndex: number;
      unpackedData: Object;
  };
  declare export function mergeQueryDocuments(childQueryDocs: Document[]): Document;
  declare export function addVariablesToRoot(rootVariables: {
      [key: string]: any;
  }, childVariables: {
      [key: string]: any;
  }, childQueryDoc: Document, childQueryDocIndex: number): {
      [key: string]: any;
  };
  declare export function addQueryToRoot(rootQueryDoc: Document, childQueryDoc: Document, childQueryDocIndex: number): Document;
  declare export function createEmptyRootQueryDoc(rootQueryName?: string): Document;
  declare export function renameFragmentSpreads(selSet: SelectionSet, aliasName: string): SelectionSet;
  declare export function renameVariables(selSet: SelectionSet, aliasName: string): SelectionSet;
  declare export function applyAliasNameToVariableDefinition(vDef: VariableDefinition, aliasName: string): VariableDefinition;
  declare export function applyAliasNameToDocument(document: Document, aliasName: string): Document;
  declare export function applyAliasNameToFragment(fragment: FragmentDefinition, aliasName: string, startIndex: number): FragmentDefinition;
  declare export function applyAliasNameToTopLevelFields(childQuery: OperationDefinition, aliasName: string, startIndex: number): OperationDefinition;
  declare export function getVariableAliasName(varNode: Variable, aliasName: string): string;
  declare export function getFragmentAliasName(fragment: FragmentDefinition | FragmentSpread, queryAliasName: string): string;
  declare export function getOperationDefinitionName(operationDef: OperationDefinition, requestIndex: number): string;
  declare export function aliasField(field: Field, alias: string): Field;
  declare export function addPrefixToQuery(prefix: string, query: OperationDefinition): OperationDefinition;
  declare export function addPrefixToVariables(prefix: string, variables: {
      [key: string]: any;
  }): {
      [key: string]: any;
  };

}

declare module 'apollo-client/data/diffAgainstStore' {
  declare module.exports: any;
}

declare module 'apollo-client/data/extensions' {
  declare module.exports: any;
}

declare module 'apollo-client/data/mutationResults' {
  declare module.exports: any;
}

declare module 'apollo-client/data/readFromStore' {
  declare module.exports: any;
}

declare module 'apollo-client/data/replaceQueryResults' {
  declare module.exports: any;
}

declare module 'apollo-client/data/scopeQuery' {
  declare module.exports: any;
}

declare module 'apollo-client/data/store' {
  declare type NormalizedCache = {
      [dataId: string]: StoreObject;
  }
  declare type StoreObject = {
      __typename?: string;
      [storeFieldKey: string]: StoreValue;
  }
  declare type IdValue = {
      type: 'id';
      id: string;
      generated: boolean;
  }
  declare type JsonValue = {
      type: 'json';
      json: any;
  }
  declare type StoreValue = number | string | string[] | IdValue | JsonValue | void;
  declare export function isIdValue(idObject: StoreValue): IdValue;
  declare export function isJsonValue(jsonObject: StoreValue): JsonValue;
  declare export function data(previousState: NormalizedCache, action: ApolloAction, queries: QueryStore, mutations: MutationStore, config: ApolloReducerConfig): NormalizedCache;
}

declare module 'apollo-client/data/storeUtils' {
  declare export function storeKeyNameFromField(field: Field, variables?: Object): string;
  declare export function storeKeyNameFromFieldNameAndArgs(fieldName: string, args?: Object): string;
  declare export function resultKeyNameFromField(field: Field): string;
  declare export function isField(selection: Selection): Field;
  declare export function isInlineFragment(selection: Selection): InlineFragment;
  declare export function graphQLResultHasError(result: GraphQLResult): number;
}

declare module 'apollo-client/data/writeToStore' {
  declare module.exports: any;
}

declare module 'apollo-client/errors' {
  declare export class ApolloError extends Error {
      message: string;
      graphQLErrors: GraphQLError[];
      networkError: Error;
      extraInfo: any;
      constructor(options: {
          graphQLErrors?: GraphQLError[];
          networkError?: Error;
          errorMessage?: string;
          extraInfo?: any;
      }): this;
  }
}

declare module 'apollo-client/middleware' {
  declare module.exports: any;
}

declare module 'apollo-client/mutations/store' {
  declare module.exports: any;
}

declare module 'apollo-client/networkInterface' {
  declare type Request = {
      debugName?: string;
      query?: Document;
      variables?: Object;
      operationName?: string;
      [additionalKey: string]: any;
  }
  declare type PrintedRequest = {
      debugName?: string;
      query?: string;
      variables?: Object;
      operationName?: string;
  }
  declare interface NetworkInterface {
      [others: string]: any;
      query(request: Request): Promise<GraphQLResult>;
  }
  declare type SubscriptionNetworkInterface = NetworkInterface & {
      subscribe(request: Request, handler: (error: any, result: any) => void): number;
      unsubscribe(id: Number): void;
  }
  declare type BatchedNetworkInterface = NetworkInterface & {
      batchQuery(requests: Request[]): Promise<GraphQLResult[]>;
  }
  declare type HTTPNetworkInterface = BatchedNetworkInterface & {
      _uri: string;
      _opts: RequestInit;
      _middlewares: MiddlewareInterface[];
      _afterwares: AfterwareInterface[];
      use(middlewares: MiddlewareInterface[]): any;
      useAfter(afterwares: AfterwareInterface[]): any;
  }
  declare type RequestAndOptions = {
      request: Request;
      options: RequestInit;
  }
  declare type ResponseAndOptions = {
      response: any;
      options: RequestInit;
  }
  declare export function addQueryMerging(networkInterface: NetworkInterface): BatchedNetworkInterface;
  declare export function printRequest(request: Request): PrintedRequest;
  declare export class HTTPFetchNetworkInterface {
      _uri: string;
      _opts: RequestInit;
      _middlewares: MiddlewareInterface[];
      _afterwares: AfterwareInterface[];
      constructor(uri: string, opts?: RequestInit): void;
      applyMiddlewares(requestAndOptions: RequestAndOptions): Promise<RequestAndOptions>;
      applyAfterwares(responseAndOptions: ResponseAndOptions): Promise<ResponseAndOptions>;
      fetchFromRemoteEndpoint(requestAndOptions: RequestAndOptions): Promise<any>;
      query(request: Request): Promise<GraphQLResult>;
      use(middlewares: MiddlewareInterface[]): void;
      useAfter(afterwares: AfterwareInterface[]): void;
  }
  declare type NetworkInterfaceOptions = {
      uri: string;
      opts?: RequestInit;
      transportBatching?: boolean;
  }
  declare export function createNetworkInterface(interfaceOpts: (NetworkInterfaceOptions | string), backOpts?: RequestInit): HTTPNetworkInterface;

}

declare module 'apollo-client/ObservableQuery' {
  declare type FetchMoreOptions = {
      updateQuery: (previousQueryResult: Object, options: {
          fetchMoreResult: Object;
          queryVariables: Object;
      }) => Object;
  }
  declare type UpdateQueryOptions = {
      queryVariables: Object;
  }
  declare export default class ObservableQuery {
      refetch: (variables?: any) => Promise<ApolloQueryResult>;
      setOptions: (options: ModifiableWatchQueryOptions) => Promise<ApolloQueryResult>;
      _setOptionsNoResult: (options: ModifiableWatchQueryOptions) => void;
      setVariables: (variables: any) => Promise<ApolloQueryResult>;
      _setVariablesNoResult: (variables: any) => void;
      fetchMore: (options: FetchMoreQueryOptions & FetchMoreOptions) => Promise<any>;
      updateQuery: (mapFn: (previousQueryResult: any, options: UpdateQueryOptions) => any) => void;
      stopPolling: () => void;
      startPolling: (p: number) => void;
      options: WatchQueryOptions;
      queryId: string;
      variables: {
          [key: string]: any;
      };
      constructor(options: {
          scheduler: QueryScheduler;
          options: WatchQueryOptions;
          shouldSubscribe?: boolean;
      }): this;
      result(): Promise<ApolloQueryResult>;
      currentResult(): ApolloQueryResult;
  }
}

declare module 'apollo-client/optimistic-data/store' {
  declare module.exports: any;
}

declare module 'apollo-client/queries/directives' {
  declare module.exports: any;
}

declare module 'apollo-client/queries/getFromAST' {
  declare export function getMutationDefinition(doc: Document): OperationDefinition;
  declare export function checkDocument(doc: Document): void;
  declare export function getOperationName(doc: Document): string;
  declare export function getFragmentDefinitions(doc: Document): FragmentDefinition[];
  declare export function getQueryDefinition(doc: Document): OperationDefinition;
  declare export function getFragmentDefinition(doc: Document): FragmentDefinition;
  declare type FragmentMap = {
      [fragmentName: string]: FragmentDefinition;
  }
  declare export function createFragmentMap(fragments?: FragmentDefinition[]): FragmentMap;
  declare export function addFragmentsToDocument(queryDoc: Document, fragments: FragmentDefinition[]): Document;

}

declare module 'apollo-client/queries/queryTransform' {
  declare module.exports: any;
}

declare module 'apollo-client/queries/store' {
  declare type QueryStore = {
      [queryId: string]: QueryStoreValue;
  }
  declare type QueryStoreValue = {
      queryString: string;
      query: SelectionSetWithRoot;
      minimizedQueryString: string;
      minimizedQuery: SelectionSetWithRoot;
      variables: Object;
      previousVariables: Object;
      loading: boolean;
      stopped: boolean;
      networkError: Error;
      graphQLErrors: GraphQLError[];
      forceFetch: boolean;
      returnPartialData: boolean;
      lastRequestId: number;
      fragmentMap: FragmentMap;
  }
  declare type SelectionSetWithRoot = {
      id: string;
      typeName: string;
      selectionSet: SelectionSet;
  }
  declare export function queries(previousState: QueryStore, action: ApolloAction): QueryStore;

}

declare module 'apollo-client/QueryManager' {
  declare type QueryListener = (queryStoreValue: QueryStoreValue) => void;
  declare type SubscriptionOptions = {
      query: Document;
      variables?: {
          [key: string]: any;
      };
      fragments?: FragmentDefinition[];
  }
  declare type ResultTransformer = (resultData: ApolloQueryResult) => ApolloQueryResult;
  declare type ResultComparator = (result1: ApolloQueryResult, result2: ApolloQueryResult) => boolean;
  declare export class QueryManager {
      pollingTimers: {
          [queryId: string]: any;
      };
      scheduler: QueryScheduler;
      store: ApolloStore;
      constructor(options: {
          networkInterface: NetworkInterface;
          store: ApolloStore;
          reduxRootSelector: ApolloStateSelector;
          queryTransformer?: QueryTransformer;
          resultTransformer?: ResultTransformer;
          resultComparator?: ResultComparator;
          shouldBatch?: Boolean;
          batchInterval?: number;
      }): this;
      broadcastNewStore(store: any): void;
      mutate(options: {
          mutation: Document;
          variables?: Object;
          resultBehaviors?: MutationBehavior[];
          fragments?: FragmentDefinition[];
          optimisticResponse?: Object;
          updateQueries?: MutationQueryReducersMap;
          refetchQueries?: string[];
      }): Promise<ApolloQueryResult>;
      queryListenerForObserver(queryId: string, options: WatchQueryOptions, observer: Observer<ApolloQueryResult>): QueryListener;
      watchQuery(options: WatchQueryOptions, shouldSubscribe?: boolean): ObservableQuery;
      query(options: WatchQueryOptions): Promise<ApolloQueryResult>;
      fetchQuery(queryId: string, options: WatchQueryOptions): Promise<ApolloQueryResult>;
      generateQueryId(): string;
      stopQueryInStore(queryId: string): void;
      getApolloState(): Store;
      getDataWithOptimisticResults(): NormalizedCache;
      addQueryListener(queryId: string, listener: QueryListener): void;
      addFetchQueryPromise(requestId: number, promise: Promise<ApolloQueryResult>, resolve: (result: ApolloQueryResult) => void, reject: (error: Error) => void): void;
      removeFetchQueryPromise(requestId: number): void;
      addObservableQuery(queryId: string, observableQuery: ObservableQuery): void;
      addQuerySubscription(queryId: string, querySubscription: Subscription): void;
      removeObservableQuery(queryId: string): void;
      resetStore(): void;
      startQuery(queryId: string, options: WatchQueryOptions, listener: QueryListener): string;
      startGraphQLSubscription(options: SubscriptionOptions): Observable<any>;
      stopQuery(queryId: string): void;
      getCurrentQueryResult(observableQuery: ObservableQuery, isOptimistic?: boolean): {
          data: Object;
          partial: boolean;
      };
      getQueryWithPreviousResult(queryIdOrObservable: string | ObservableQuery, isOptimistic?: boolean): {
          previousResult: Object;
          queryVariables: {
              [key: string]: any;
          };
          querySelectionSet: SelectionSet;
          queryFragments: FragmentDefinition[];
      };
      transformResult(result: ApolloQueryResult): ApolloQueryResult;
  }
}

declare module 'apollo-client/queryPrinting' {
  declare module.exports: any;
}

declare module 'apollo-client/scheduler' {
  declare module.exports: any;
}

declare module 'apollo-client/store' {

  declare type Store = {
      data: NormalizedCache;
      queries: QueryStore;
      mutations: MutationStore;
      optimistic: OptimisticStore;
  }
  declare type ApolloStore = {
      dispatch: (action: ApolloAction) => void;
      getState: () => any;
  }
  declare export function createApolloReducer(config: ApolloReducerConfig): Function;
  declare export function createApolloStore(options?: {
      reduxRootKey?: string;
      initialState?: any;
      config?: ApolloReducerConfig;
      reportCrashes?: boolean;
  }): ApolloStore;
  declare type ApolloReducerConfig = {
      dataIdFromObject?: IdGetter;
      mutationBehaviorReducers?: MutationBehaviorReducerMap;
  }
  declare export function getDataWithOptimisticResults(store: Store): NormalizedCache;

}

declare module 'apollo-client/util/errorHandling' {
  declare export function tryFunctionOrLogError(f: Function): any;
}

declare module 'apollo-client/util/Observable' {
  declare type CleanupFunction = () => void;
  declare type SubscriberFunction<T> = (observer: Observer<T>) => (Subscription | CleanupFunction);
  declare export class Observable<T> {
      constructor(subscriberFunction: SubscriberFunction<T>): this;
      subscribe(observer: Observer<T>): Subscription;
  }
  declare type Observer<T> = {
      next?: (value: T) => void;
      error?: (error: Error) => void;
      complete?: () => void;
  }
  declare type Subscription = {
      unsubscribe: CleanupFunction;
  }
}

declare module 'apollo-client/watchQueryOptions' {
  declare type ModifiableWatchQueryOptions = {
      variables?: {
          [key: string]: any;
      };
      forceFetch?: boolean;
      returnPartialData?: boolean;
      noFetch?: boolean;
      pollInterval?: number;
  }
  declare type WatchQueryOptions = ModifiableWatchQueryOptions & {
      query: Document;
      fragments?: FragmentDefinition[];
  }
  declare type FetchMoreQueryOptions = {
      query?: Document;
      variables?: {
          [key: string]: any;
      };
  }
  declare type GraphQLSubscriptionOptions = {
      subscription: Document;
      variables?: {
          [key: string]: any;
      };
      fragments?: FragmentDefinition[];
      updateQuery: (previousQueryResult: Object, options: {
          subscriptionResult: Object;
          queryVariables: Object;
      }) => Object;
  }

}

// Filename aliases
declare module 'apollo-client/actions.js' {
  declare module.exports: $Exports<'apollo-client/actions'>;
}
declare module 'apollo-client/afterware.js' {
  declare module.exports: $Exports<'apollo-client/afterware'>;
}
declare module 'apollo-client/batchedNetworkInterface.js' {
  declare module.exports: $Exports<'apollo-client/batchedNetworkInterface'>;
}
declare module 'apollo-client/batching.js' {
  declare module.exports: $Exports<'apollo-client/batching'>;
}
declare module 'apollo-client/batching/queryMerging.js' {
  declare module.exports: $Exports<'apollo-client/batching/queryMerging'>;
}
declare module 'apollo-client/data/diffAgainstStore.js' {
  declare module.exports: $Exports<'apollo-client/data/diffAgainstStore'>;
}
declare module 'apollo-client/data/extensions.js' {
  declare module.exports: $Exports<'apollo-client/data/extensions'>;
}
declare module 'apollo-client/data/mutationResults.js' {
  declare module.exports: $Exports<'apollo-client/data/mutationResults'>;
}
declare module 'apollo-client/data/readFromStore.js' {
  declare module.exports: $Exports<'apollo-client/data/readFromStore'>;
}
declare module 'apollo-client/data/replaceQueryResults.js' {
  declare module.exports: $Exports<'apollo-client/data/replaceQueryResults'>;
}
declare module 'apollo-client/data/scopeQuery.js' {
  declare module.exports: $Exports<'apollo-client/data/scopeQuery'>;
}
declare module 'apollo-client/data/store.js' {
  declare module.exports: $Exports<'apollo-client/data/store'>;
}
declare module 'apollo-client/data/storeUtils.js' {
  declare module.exports: $Exports<'apollo-client/data/storeUtils'>;
}
declare module 'apollo-client/data/writeToStore.js' {
  declare module.exports: $Exports<'apollo-client/data/writeToStore'>;
}
declare module 'apollo-client/errors.js' {
  declare module.exports: $Exports<'apollo-client/errors'>;
}
declare module 'apollo-client/index' {
  declare module.exports: $Exports<'apollo-client'>;
}
declare module 'apollo-client/index.js' {
  declare module.exports: $Exports<'apollo-client'>;
}
declare module 'apollo-client/middleware.js' {
  declare module.exports: $Exports<'apollo-client/middleware'>;
}
declare module 'apollo-client/mutations/store.js' {
  declare module.exports: $Exports<'apollo-client/mutations/store'>;
}
declare module 'apollo-client/networkInterface.js' {
  declare module.exports: $Exports<'apollo-client/networkInterface'>;
}
declare module 'apollo-client/ObservableQuery.js' {
  declare module.exports: $Exports<'apollo-client/ObservableQuery'>;
}
declare module 'apollo-client/optimistic-data/store.js' {
  declare module.exports: $Exports<'apollo-client/optimistic-data/store'>;
}
declare module 'apollo-client/queries/directives.js' {
  declare module.exports: $Exports<'apollo-client/queries/directives'>;
}
declare module 'apollo-client/queries/getFromAST.js' {
  declare module.exports: $Exports<'apollo-client/queries/getFromAST'>;
}
declare module 'apollo-client/queries/queryTransform.js' {
  declare module.exports: $Exports<'apollo-client/queries/queryTransform'>;
}
declare module 'apollo-client/queries/store.js' {
  declare module.exports: $Exports<'apollo-client/queries/store'>;
}
declare module 'apollo-client/QueryManager.js' {
  declare module.exports: $Exports<'apollo-client/QueryManager'>;
}
declare module 'apollo-client/queryPrinting.js' {
  declare module.exports: $Exports<'apollo-client/queryPrinting'>;
}
declare module 'apollo-client/scheduler.js' {
  declare module.exports: $Exports<'apollo-client/scheduler'>;
}
declare module 'apollo-client/store.js' {
  declare module.exports: $Exports<'apollo-client/store'>;
}
declare module 'apollo-client/util/errorHandling.js' {
  declare module.exports: $Exports<'apollo-client/util/errorHandling'>;
}
declare module 'apollo-client/util/Observable.js' {
  declare module.exports: $Exports<'apollo-client/util/Observable'>;
}
declare module 'apollo-client/watchQueryOptions.js' {
  declare module.exports: $Exports<'apollo-client/watchQueryOptions'>;
}

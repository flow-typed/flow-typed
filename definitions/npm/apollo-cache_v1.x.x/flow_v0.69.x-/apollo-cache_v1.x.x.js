// Global defenition to use in other libdefs

declare type $npm$graphql$DocumentNode = any;

declare type $npm$apolloCache$DataProxy$Query<TVariables> = $ReadOnly<{|
  query: $npm$graphql$DocumentNode,
  variables?: TVariables,
|}>;

declare type $npm$apolloCache$DataProxy$Fragment<TVariables> = $ReadOnly<{|
  id: string,
  fragment: $npm$graphql$DocumentNode,
  fragmentName?: string,
  variables?: TVariables,
|}>;

declare type $npm$apolloCache$DataProxy$WriteQueryOptions<
  TData,
  TVariables
> = $ReadOnly<{|
  ...$npm$apolloCache$DataProxy$Query<TVariables>,
  data: TData,
|}>;

declare type $npm$apolloCache$DataProxy$WriteFragmentOptions<
  TData,
  TVariables
> = $ReadOnly<{|
  ...$npm$apolloCache$DataProxy$Fragment<TVariables>,
  data: TData,
|}>;

declare type $npm$apolloCache$DataProxy$WriteDataOptions<TData> = $ReadOnly<{|
  data: TData,
  id?: string,
|}>;

declare type $npm$apolloCache$DataProxy$DiffResult<T> = $ReadOnly<{|
  result?: T,
  complete?: boolean,
|}>;

declare interface $npm$apolloCache$DataProxy {
  readQuery<QueryType, TVariables>(
    options: $npm$apolloCache$DataProxy$Query<TVariables>,
    optimistic?: boolean
  ): QueryType | null;
  readFragment<FragmentType, TVariables>(
    options: $npm$apolloCache$DataProxy$Fragment<TVariables>,
    optimistic?: boolean
  ): FragmentType | null;
  writeQuery<TData, TVariables>(
    options: $npm$apolloCache$DataProxy$WriteQueryOptions<TData, TVariables>
  ): void;
  writeFragment<TData, TVariables>(
    options: $npm$apolloCache$DataProxy$WriteFragmentOptions<TData, TVariables>
  ): void;
  writeData<TData>(options: $npm$apolloCache$DataProxy$WriteDataOptions<TData>): void;
}

declare module 'apollo-cache/lib/types/DataProxy.js' {
  declare export type DataProxy$Query<
    TVariables
  > = $npm$apolloCache$DataProxy$Query<TVariables>;

  declare export type DataProxy$Fragment<
    TVariables
  > = $npm$apolloCache$DataProxy$Fragment<TVariables>;

  declare export type DataProxy$WriteQueryOptions<
    TData,
    TVariables
  > = $npm$apolloCache$DataProxy$WriteQueryOptions<TData, TVariables>;

  declare export type DataProxy$WriteFragmentOptions<
    TData,
    TVariables
  > = $npm$apolloCache$DataProxy$WriteFragmentOptions<TData, TVariables>;

  declare export type DataProxy$WriteDataOptions<
    TData
  > = $npm$apolloCache$DataProxy$WriteDataOptions<TData>;

  declare export type DataProxy$DiffResult<
    T
  > = $npm$apolloCache$DataProxy$DiffResult<T>;

  declare export interface DataProxy extends $npm$apolloCache$DataProxy {}
}

///////////////////////////////////////////////////////////////

declare type $npm$apolloCache$Cache$WatchCallback = (newData: any) => mixed;

declare type $npm$apolloCache$Cache$EvictionResult = $ReadOnly<{|
  success: boolean,
|}>;

declare type $npm$apolloCache$Cache$ReadOptions<TVariables> = $ReadOnly<{|
  ...$npm$apolloCache$DataProxy$Query<TVariables>,
  rootId?: string,
  previousResult?: any,
  optimistic: boolean,
|}>;

declare type $npm$apolloCache$Cache$WriteOptions<
  TResult,
  TVariables
> = $ReadOnly<{|
  ...$npm$apolloCache$DataProxy$Query<TVariables>,
  dataId: string,
  result: TResult,
|}>;

declare type $npm$apolloCache$Cache$DiffOptions = $ReadOnly<{|
  ...$npm$apolloCache$Cache$ReadOptions<any>,
  returnPartialData?: boolean,
|}>;

declare type $npm$apolloCache$Cache$WatchOptions = $ReadOnly<{|
  ...$npm$apolloCache$Cache$ReadOptions<any>,
  callback: $npm$apolloCache$Cache$WatchCallback,
|}>;

declare type $npm$apolloCache$Cache$EvictOptions<TVariables> = $ReadOnly<{|
  ...$npm$apolloCache$DataProxy$Query<TVariables>,
  rootId?: string,
|}>;

declare module 'apollo-cache/lib/types/Cache.js' {
  declare export type Cache$WatchCallback = $npm$apolloCache$Cache$WatchCallback;
  declare export type Cache$EvictionResult = $npm$apolloCache$Cache$EvictionResult;
  declare export type Cache$ReadOptions<
    TVariables
  > = $npm$apolloCache$Cache$ReadOptions<TVariables>;
  declare export type Cache$WriteOptions<
    TResult,
    TVariables
  > = $npm$apolloCache$Cache$WriteOptions<TResult, TVariables>;
  declare export type Cache$DiffOptions = $npm$apolloCache$Cache$DiffOptions;
  declare export type Cache$WatchOptions = $npm$apolloCache$Cache$WatchOptions;
  declare export type Cache$EvictOptions<
    TVariables
  > = $npm$apolloCache$Cache$EvictOptions<TVariables>;
}

///////////////////////////////////////////////////////////

declare class $npm$apolloCache$ApolloCache
  implements $npm$apolloCache$DataProxy {
  transformDocument(
    document: $npm$graphql$DocumentNode
  ): $npm$graphql$DocumentNode;
  transformForLink(
    document: $npm$graphql$DocumentNode
  ): $npm$graphql$DocumentNode;
  readQuery<QueryType, TVariables>(
    options: $npm$apolloCache$DataProxy$Query<TVariables>,
    optimistic?: boolean
  ): QueryType | null;
  readFragment<FragmentType, TVariables>(
    options: $npm$apolloCache$DataProxy$Fragment<TVariables>,
    optimistic?: boolean
  ): FragmentType | null;
  writeQuery<TData, TVariables>(
    options: $npm$apolloCache$DataProxy$WriteQueryOptions<TData, TVariables>
  ): void;
  writeFragment<TData, TVariables>(
    options: $npm$apolloCache$DataProxy$WriteFragmentOptions<TData, TVariables>
  ): void;
  writeData<TData>(
    options: $npm$apolloCache$DataProxy$WriteDataOptions<TData>
  ): void;
}

declare type $npm$apolloCache$Transaction = (
  c: $npm$apolloCache$ApolloCache
) => void;

declare module 'apollo-cache/lib/cache.js' {
  declare export type Transaction = $npm$apolloCache$Transaction;
  declare export var ApolloCache: Class<$npm$apolloCache$ApolloCache>;
}

declare module 'apollo-cache' {
  declare export * from 'apollo-cache/lib/types/DataProxy.js'
  declare export * from 'apollo-cache/lib/types/Cache.js'
  declare export * from 'apollo-cache/lib/cache.js'
}

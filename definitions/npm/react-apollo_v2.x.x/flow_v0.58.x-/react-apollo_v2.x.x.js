// @flow
import type {
  ApolloClient,
  FetchResult,
  DataProxy,
  MutationQueryReducersMap,
  ApolloQueryResult,
  ApolloError,
  FetchPolicy,
  FetchMoreOptions,
  UpdateQueryOptions,
  FetchMoreQueryOptions,
  SubscribeToMoreOptions,
  PureQueryOptions,
  MutationUpdaterFn,
} from 'apollo-client';
import type { DocumentNode, VariableDefinitionNode } from 'graphql';

declare module 'react-apollo' {
  declare export type NetworkStatus = 1 | 2 | 3 | 4 | 6 | 7 | 8;

  declare export interface ProviderProps {
    client: ApolloClient;
  }

  declare export class ApolloProvider extends React$Component<ProviderProps> {
    childContextTypes: {
      client: ApolloClient,
    };
    contextTypes: {
      client: ApolloClient,
    };
    getChildContext(): {
      client: ApolloClient,
    };
    render(): React$Element<*>;
  }

  declare export type MutationFunc<TResult, TVariables> = (
    opts: MutationOpts<TVariables>
  ) => Promise<ApolloQueryResult<TResult>>;

  declare export type GraphqlData<TResult, TVariables> = GraphqlQueryControls &
    TResult & {
      variables: TVariables,
      refetch: (variables?: TVariables) => Promise<ApolloQueryResult<any>>,
    };

  declare export type ChildProps<
    TOwnProps,
    TResult,
    TVariables: Object = {}
  > = {
    data: GraphqlData<TResult, TVariables>,
    mutate: MutationFunc<TResult, TVariables>,
  } & TOwnProps;

  // back compat
  declare export type DefaultChildProps<P, R> = ChildProps<P, R, {}>;

  declare export type ErrorPolicy = 'none' | 'ignore' | 'all';

  declare export type RefetchQueriesProviderFn = (
    ...args: any[]
  ) => string[] | PureQueryOptions[];

  declare export type MutationOpts<TVariables> = {
    variables?: TVariables,
    optimisticResponse?: Object,
    refetchQueries?: string[] | PureQueryOptions[] | RefetchQueriesProviderFn,
    update?: MutationUpdaterFn<*>,
    errorPolicy?: ErrorPolicy,
    $call?: empty, // Not function
  };

  declare export type QueryOpts<TVariables> = {
    ssr?: boolean,
    variables?: TVariables,
    fetchPolicy?: FetchPolicy,
    pollInterval?: number,
    skip?: boolean,
    errorPolicy?: ErrorPolicy,
    $call?: empty, // Not function
  };

  declare export interface GraphqlQueryControls {
    error?: ApolloError | any; // Added optional `any` to satisfy Flow < 0.62
    networkStatus: NetworkStatus;
    loading: boolean;
    variables: Object;
    fetchMore: (
      fetchMoreOptions: FetchMoreQueryOptions & FetchMoreOptions
    ) => Promise<ApolloQueryResult<any>>;
    refetch: (variables?: Object) => Promise<ApolloQueryResult<any>>;
    startPolling: (pollInterval: number) => void;
    stopPolling: () => void;
    subscribeToMore: (options: SubscribeToMoreOptions) => () => void;
    updateQuery: (
      mapFn: (previousQueryResult: any, options: UpdateQueryOptions) => any
    ) => void;
  }

  declare export interface OptionProps<TProps, TResult, TVariables> {
    ownProps: TProps;
    data: GraphqlData<TResult, TVariables>;
    mutate: MutationFunc<TResult, TVariables>;
  }

  declare export type OptionDescription<TProps, TVariables> =
    | QueryOpts<TVariables>
    | MutationOpts<TVariables>
    | ((props: TProps) => QueryOpts<TVariables> | MutationOpts<TVariables>);

  declare export type NamedProps<P, R> = P & {
    ownProps: R,
  };

  declare export interface OperationOption<
    TResult: {},
    TProps: {},
    TChildProps: {},
    TVariables: {}
  > {
    +options?: OptionDescription<TProps, TVariables>;
    props?: (
      props: OptionProps<TProps, TResult, TVariables>
    ) => TChildProps | ChildProps<TProps, TResult, TVariables>;
    +skip?: boolean | ((props: any) => boolean);
    name?: string;
    withRef?: boolean;
    shouldResubscribe?: (props: TProps, nextProps: TProps) => boolean;
    alias?: string;
  }

  // Third argument of TMergedProps should be TVariables, but generics order
  // is preserved for backward compatibility.
  declare export interface OperationComponent<
    TResult: Object = {},
    TOwnProps: Object = {},
    TMergedProps: Object = ChildProps<TOwnProps, TResult, {}>,
    TVariables: Object = {}
  > {
    (
      component: React$ComponentType<TMergedProps>
    ): React$ComponentType<TOwnProps>;
  }

  declare export function graphql<TResult, TProps, TChildProps, TVariables>(
    document: DocumentNode,
    operationOptions?: OperationOption<TResult, TProps, TChildProps, TVariables>
  ): OperationComponent<TResult, TProps, TChildProps, TVariables>;

  declare type WithApolloOptions = {
    withRef?: boolean,
  };

  declare export function withApollo<TProps>(
    component: React$ComponentType<{ client: ApolloClient } & TProps>,
    operationOptions?: WithApolloOptions
  ): React$ComponentType<TProps>;

  declare export interface IDocumentDefinition {
    type: DocumentType;
    name: string;
    variables: VariableDefinitionNode[];
  }

  declare export function parser(document: DocumentNode): IDocumentDefinition;

  declare export interface Context {
    client?: ApolloClient;
    [key: string]: any;
  }

  declare export interface QueryTreeArgument {
    rootElement: React$Element<*>;
    rootContext?: Context;
  }

  declare export interface QueryResult {
    query: Promise<ApolloQueryResult<mixed>>;
    element: React$Element<*>;
    context: Context;
  }

  declare export function walkTree(
    element: React$Element<*>,
    context: Context,
    visitor: (
      element: React$Element<*>,
      instance: any,
      context: Context
    ) => boolean | void
  ): void;

  declare export function getDataFromTree(
    rootElement: React$Element<*>,
    rootContext?: any,
    fetchRoot?: boolean
  ): Promise<void>;

  declare export function renderToStringWithData(
    component: React$Element<*>
  ): Promise<string>;

  declare export function cleanupApolloState(apolloState: any): void;

  declare type QueryRenderPropFunction<TData, TVariables> = ({
    data: TData,
    loading: boolean,
    error: ?ApolloError,
    variables: TVariables,
    networkStatus: NetworkStatus,
    refetch: (variables?: TVariables) => Promise<mixed>,
    fetchMore: ({query?: DocumentNode, variables?: TVariables, updateQuery: Function}) => Promise<mixed>,
    load: () => void,
    startPolling: (interval: number) => void,
    stopPolling: (interval: number) => void,
    subscribeToMore: (options: {document?: DocumentNode, variables?: TVariables, updateQuery?: Function, onError?: Function}) => () => void,
    updateQuery: (previousResult: TData, options?: {variables: TVariables}) => TData,
    client: ApolloClient
  }) => React$Node

  declare export class Query<TData> extends React$Component<{
    query: DocumentNode,
    children: QueryRenderPropFunction<TData, {[string]: any}>,
    variables?: {[string]: any},
    pollInterval?: number,
    notifyOnNetworkStatusChange?: boolean,
    fetchPolicy?: FetchPolicy,
    errorPolicty?: ErrorPolicy,
    ssr?: boolean,
    displayName?: string,
    delay?: boolean,
    context?: {[string]: any}
  }> {}

  declare type MutateFunction = (options: {
    variables?: {[string]: any},
    optimisticResponse?: Object,
    refetchQueries?: (mutationResult: FetchResult) => Array<{query: DocumentNode, variables: {[string]: any}}>,
    update?: (cache: DataProxy, mutationResult: FetchResult) => any
  }) => Promise<*>

  declare type MutationRenderPropFunction<TData> = (mutate: MutateFunction, result: {loading: boolean, error: ?ApolloError, data: TData}) => React$Node
    declare export class Mutation<TData> extends React$Component<{
    mutation: DocumentNode,
    children: MutationRenderPropFunction<TData>,
    variables?: {[string]: any},
    update?: (cache: DataProxy, mutationResult: FetchResult) => any,
    ignoreResults?: boolean,
    optimisticResponse?: Object,
    refetchQueries?: (mutationResult: FetchResult) => Array<{query: DocumentNode, variables: {[string]: any}}>,
    onCompleted?: (data: TData) => void,
    onError?: (error: ApolloError) => void,
    context?: {[string]: any}
  }> {}


}

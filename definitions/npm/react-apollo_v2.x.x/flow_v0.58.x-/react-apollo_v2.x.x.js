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

  declare export interface ApolloConsumerProps {
    children: (client: ApolloClient) => React$Node;
  }

  declare export class ApolloConsumer extends React$Component<ApolloConsumerProps> {
    render(): React$Node;
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

  declare export interface OperationComponent<
    TResult: Object = {},
    TOwnProps: Object = {},
    TVariables: Object = {},
    TMergedProps: Object = ChildProps<TOwnProps, TResult, TVariables>
    > {
    (
      component: React$ComponentType<TMergedProps>
    ): React$ComponentType<TOwnProps>;
  }

  declare export function graphql<TResult, TProps, TVariables, TChildProps>(
    document: DocumentNode,
    operationOptions?: OperationOption<TResult, TProps, TChildProps, TVariables>
  ): OperationComponent<TResult, TProps, TVariables, TChildProps>;

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

  declare export type QueryRenderProps<TData, TVariables> = {
    data?: TData | {||},
    loading: boolean,
    error?: ApolloError,
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
  }

  declare export type QueryRenderPropFunction<TData, TVariables> = (QueryRenderProps<TData, TVariables>) => React$Node

  declare export class Query<TData, TVariables> extends React$Component<{
    query: DocumentNode,
    children: QueryRenderPropFunction<TData, TVariables>,
    variables?: TVariables,
    pollInterval?: number,
    notifyOnNetworkStatusChange?: boolean,
    fetchPolicy?: FetchPolicy,
    errorPolicy?: ErrorPolicy,
    ssr?: boolean,
    displayName?: string,
    delay?: boolean,
    context?: {[string]: any}
  }> {}

  declare type SubscriptionResult<TData> = {
    loading: boolean,
    data?: TData,
    error?: ApolloError,
  }

  declare type SubscriptionProps<TData> = {
    subscription: DocumentNode,
    variables?: { [string]: any },
    shouldResubscribe?: boolean | (SubscriptionProps<TData>, SubscriptionProps<TData>) => boolean,
    children: (result: SubscriptionResult<TData>) => React$Node,
  }

  declare export class Subscription<TData> extends React$Component<SubscriptionProps<TData>> {}

  declare export type MutationFunction<TVariables> = (options: {
    variables?: TVariables,
    optimisticResponse?: Object,
    refetchQueries?: (mutationResult: FetchResult) => Array<{query: DocumentNode, variables: {[string]: any}}>,
    update?: (cache: DataProxy, mutationResult: FetchResult) => any
  }) => Promise<*>

  declare export type MutationResult<TData> = {loading: boolean, error?: ApolloError, data?: TData}

  declare export type MutationRenderPropFunction<TData, TVariables> = (mutate: MutationFunction<TVariables>, result: MutationResult<TData>) => React$Node

  declare export class Mutation<TData, TVariables> extends React$Component<{
    mutation: DocumentNode,
    children: MutationRenderPropFunction<TData, TVariables>,
    variables?: TVariables,
    update?: (cache: DataProxy, mutationResult: FetchResult) => any,
    ignoreResults?: boolean,
    optimisticResponse?: Object,
    refetchQueries?: (mutationResult: FetchResult) => Array<{query: DocumentNode, variables: TVariables}>,
    onCompleted?: (data: TData) => void,
    onError?: (error: ApolloError) => void,
    context?: {[string]: any}
  }> {}

}

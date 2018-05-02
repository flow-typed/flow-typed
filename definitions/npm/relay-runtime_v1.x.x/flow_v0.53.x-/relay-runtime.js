/* @flow */
import type { ConcreteFragmentDefinition, ConcreteOperationDefinition, RelayQL } from 'react-relay';

declare module 'react-runtime' {
  declare export type ConcreteVariable = {
    kind: 'Variable',
    name: string,
    type: ?string,
    variableName: string,
  };
  declare export type ConcreteLiteral = {
    kind: 'Literal',
    name: string,
    type: ?string,
    value: mixed,
  };
  declare export type ConcreteArgument = ConcreteLiteral | ConcreteVariable;
  declare export type ConcreteDeferrableFragmentSpread = {
    kind: 'DeferrableFragmentSpread',
    name: string,
    args: ?Array<ConcreteArgument>,
    rootFieldVariable: string,
    storageKey: string,
  };

  declare export type ConcreteCondition = {
    kind: 'Condition',
    passingValue: boolean,
    condition: string,
    selections: Array<ConcreteSelection>,
  };

  declare export type ConcreteScalarField = {
    kind: 'ScalarField',
    alias: ?string,
    name: string,
    args: ?Array<ConcreteArgument>,
    storageKey: ?string,
  };

  declare export type ConcreteLinkedField = {
    kind: 'LinkedField',
    alias: ?string,
    name: string,
    storageKey: ?string,
    args: ?Array<ConcreteArgument>,
    concreteType: ?string,
    plural: boolean,
    selections: Array<ConcreteSelection>,
  };

  declare export type ConcreteField = ConcreteScalarField | ConcreteLinkedField;

  declare export type ConcreteFragmentSpread = {
    kind: 'FragmentSpread',
    name: string,
    args: ?Array<ConcreteArgument>,
  };

  declare export type ConcreteScalarHandle = {
    kind: 'ScalarHandle',
    alias: ?string,
    name: string,
    args: ?Array<ConcreteArgument>,
    handle: string,
    key: string,
    filters: ?Array<string>,
  };

  declare export type ConcreteLinkedHandle = {
    kind: 'LinkedHandle',
    alias: ?string,
    name: string,
    args: ?Array<ConcreteArgument>,
    handle: string,
    key: string,
    filters: ?Array<string>,
  };

  declare export type ConcreteHandle = ConcreteScalarHandle | ConcreteLinkedHandle;

  declare export type ConcreteInlineFragment = {
    kind: 'InlineFragment',
    selections: Array<ConcreteSelection>,
    type: string,
  };

  declare export type ConcreteSelection =
    | ConcreteCondition
    | ConcreteDeferrableFragmentSpread
    | ConcreteField
    | ConcreteFragmentSpread
    | ConcreteHandle
    | ConcreteInlineFragment;

  declare export type ConcreteRootArgument = {
    kind: 'RootArgument',
    name: string,
    type: ?string,
  };

  declare export type ConcreteLocalArgument = {
    kind: 'LocalArgument',
    name: string,
    type: string,
    defaultValue: mixed,
  };

  declare export type ConcreteArgumentDefinition = ConcreteLocalArgument | ConcreteRootArgument;

  declare export type ConcreteFragment = {
    kind: 'Fragment',
    name: string,
    type: string,
    metadata: ?{ [key: string]: mixed },
    argumentDefinitions: Array<ConcreteArgumentDefinition>,
    selections: Array<ConcreteSelection>,
  };

  declare export type ConcreteNonDeferrableOperation = {
    kind: 'Operation',
    name: string,
    argumentDefinitions: Array<ConcreteLocalArgument>,
    selections: Array<ConcreteSelection>,
  };

  declare export type ConcreteRequest = {
    kind: 'Request',
    operationKind: 'mutation' | 'query' | 'subscription',
    name: string,
    id: ?string,
    text: ?string,
    metadata: { [key: string]: mixed },
    fragment: ConcreteFragment,
    operation: ConcreteNonDeferrableOperation,
  };

  /**
   * Argument in the provided operation to be derived via the results of
   * other requests in the batch.
   */
  declare export type ArgumentDependency = {|
    // The name of the argument to provide.
    name: string,
    // The name of the request in this batch to wait for a result from.
    // This may be the same request for recursive requests (in which case
    // the initial value will be null).
    fromRequestName: string,
    // The JSONPath into the dependent request at which the value for this
    // argument is found.
    fromRequestPath?: string,
    // Exported variable from the query this depends on. Should only use one of
    // fromRequestImport or fromRequestPath
    fromRequestImport?: string,
    // If the result is a list of values, should it use the first value, last
    // value, all values in the list, or trigger a new instance of this
    // request for each item in the list.
    ifList?: 'first' | 'last' | 'all' | 'each',
    // If the result is null, should it result in an error, allow the null
    // value to be provided, or skip execution of this request.
    ifNull?: 'error' | 'allow' | 'skip',
    // If this argument is dependent on itself, how many times may this
    // request execute before completing.
    maxRecurse?: number,
  |};

  declare export type ConcreteDeferrableOperation = {
    kind: 'DeferrableOperation',
    name: string,
    argumentDefinitions: Array<ConcreteLocalArgument>,
    selections: Array<ConcreteSelection>,
    fragmentName: string,
    rootFieldVariable: string,
  };

  /**
   * Represents a single operation used to processing and normalize runtime
   * request results.
   */
  declare export type ConcreteOperation = ConcreteNonDeferrableOperation | ConcreteDeferrableOperation;

  declare export type ConcreteBatchRequest = {
    kind: 'BatchRequest',
    operationKind: 'mutation' | 'query' | 'subscription',
    name: string,
    metadata: { [key: string]: mixed },
    fragment: ConcreteFragment,
    requests: Array<{
      name: string,
      id: ?string,
      text: ?string,
      // Arguments in the provided operation to be derived via the results of
      // other requests in this batch.
      argumentDependencies: ?Array<ArgumentDependency>,
      operation: ConcreteOperation | ConcreteDeferrableOperation,
    }>,
  };

  declare export type RequestNode = ConcreteRequest | ConcreteBatchRequest;

  declare export opaque type FragmentReference: empty;

  // The type of a graphql`...` tagged template expression.
  declare export type GraphQLTaggedNode =
    | (() => ConcreteFragment | RequestNode)
    | {
        modern: () => ConcreteFragment | RequestNode,
        classic: RelayQL => ConcreteFragmentDefinition | ConcreteOperationDefinition,
      };

  declare export type Environment = any;

  // Variables
  declare export type Variables = { [name: string]: $FlowFixMe };

  declare export type RerunParam = {
    param: string,
    import?: ?string,
    target?: ?string,
    max_runs: number,
  };

  /**
   * Settings for how a query response may be cached.
   *
   * - `force`: causes a query to be issued unconditionally, irrespective of the
   *   state of any configured response cache.
   * - `poll`: causes a query to live update by polling at the specified interval
   *   in milliseconds. (This value will be passed to setTimeout.)
   * - `rerunParamExperimental`: causes the query to be run with the experimental
   *   batch API on Network interfaces and GraphQL servers that support it.
   * - `metadata`: user-supplied metadata.
   */
  declare export type CacheConfig = {
    force?: ?boolean,
    poll?: ?number,
    rerunParamExperimental?: ?RerunParam,
    metadata?: { [key: string]: mixed },
  };

  // $FlowFixMe(>=0.66.0) this is compatible with classic api see D4658012
  declare export type Uploadable = File | Blob;
  // $FlowFixMe this is compatible with classic api see D4658012
  declare export type UploadableMap = { [key: string]: Uploadable };

  /**
   * Represents any resource that must be explicitly disposed of. The most common
   * use-case is as a return value for subscriptions, where calling `dispose()`
   * would cancel the subscription.
   */
  declare export type Disposable = {
    dispose(): void,
  };
}

import type { ConcreteFragment, RequestNode, FragmentReference, Environment as IEnvironment } from 'relay-runtime';

declare module "react-relay" {
  import type { ComponentType, ElementConfig } from 'react';

  declare type RerunParam = {
    param: string,
    import?: ?string,
    target?: ?string,
    max_runs: number,
  };

  // $FlowFixMe(>=0.66.0) this is compatible with classic api see D4658012
  declare type Uploadable = File | Blob;
  // $FlowFixMe this is compatible with classic api see D4658012
  declare type UploadableMap = { [key: string]: Uploadable };

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
  declare type CacheConfig = {
    force?: ?boolean,
    poll?: ?number,
    rerunParamExperimental?: ?RerunParam,
    metadata?: { [key: string]: mixed },
  };

  // Variables
  declare type Variables = { [name: string]: $FlowFixMe };

  declare type ConcreteLocalArgumentDefinition = {
    kind: 'LocalArgument',
    name: string,
    defaultValue: mixed,
  };

  declare type ConcreteRootArgumentDefinition = {
    kind: 'RootArgument',
    name: string,
  };

  declare type ConcreteArgumentDefinition = ConcreteLocalArgumentDefinition | ConcreteRootArgumentDefinition;

  declare type ConcreteFragmentDefinition = {
    kind: 'FragmentDefinition',
    argumentDefinitions: Array<ConcreteArgumentDefinition>,
    node: ConcreteFragment,
  };

  declare type ConcreteBatchCallVariable = {
    jsonPath: string,
    kind: 'BatchCallVariable',
    sourceQueryID: string,
  };

  declare type ConcreteCallValue = {
    callValue: mixed,
    kind: 'CallValue',
  };

  declare type ConcreteCallVariable = {
    callVariableName: string,
    kind: 'CallVariable',
  };

  declare type ConcreteValue =
    | ConcreteBatchCallVariable
    | ConcreteCallValue
    | ConcreteCallVariable
    | Array<ConcreteCallValue | ConcreteCallVariable>;

  declare type ConcreteCall = {
    kind: 'Call',
    metadata: {
      type?: ?string,
    },
    name: string,
    value: ?ConcreteValue,
  };

  declare type ConcreteDirectiveValue =
    | ConcreteCallValue
    | ConcreteCallVariable
    | Array<ConcreteCallValue | ConcreteCallVariable>;

  declare type ConcreteDirectiveArgument = {
    name: string,
    value: ?ConcreteDirectiveValue,
  };

  declare type ConcreteDirective = {
    args: Array<ConcreteDirectiveArgument>,
    kind: 'Directive',
    name: string,
  };

  declare type ConcreteFieldMetadata = {
    canHaveSubselections?: ?boolean,
    inferredPrimaryKey?: ?string,
    inferredRootCallName?: ?string,
    isAbstract?: boolean,
    isConnection?: boolean,
    isConnectionWithoutNodeID?: boolean,
    isFindable?: boolean,
    isGenerated?: boolean,
    isPlural?: boolean,
    isRequisite?: boolean,
  };

  declare type ConcreteField = {
    alias?: ?string,
    calls?: ?Array<ConcreteCall>,
    children?: ?Array<?ConcreteSelection>,
    directives?: ?Array<ConcreteDirective>,
    fieldName: string,
    kind: 'Field',
    metadata: ConcreteFieldMetadata,
    type: string,
  };

  declare type VariableMapping = { [key: string]: mixed };

  declare type ConcreteFragmentSpread = {
    kind: 'FragmentSpread',
    args: VariableMapping,
    fragment: ConcreteFragmentDefinition,
  };

  declare type ConcreteSelection = ConcreteField | ConcreteFragment | ConcreteFragmentSpread;

  declare type ConcreteSubscription = {
    calls: Array<ConcreteCall>,
    children?: ?Array<?ConcreteSelection>,
    directives?: ?Array<ConcreteDirective>,
    kind: 'Subscription',
    name: string,
    responseType: string,
    metadata: {
      inputType?: ?string,
    },
  };

  declare type ConcreteMutation = {
    calls: Array<ConcreteCall>,
    children?: ?Array<?ConcreteSelection>,
    directives?: ?Array<ConcreteDirective>,
    kind: 'Mutation',
    metadata: {
      inputType?: ?string,
    },
    name: string,
    responseType: string,
  };

  /**
   * The output of a graphql-tagged operation definition.
   */
  declare type ConcreteOperationDefinition = {
    kind: 'OperationDefinition',
    argumentDefinitions: Array<ConcreteLocalArgumentDefinition>,
    name: string,
    operation: 'mutation' | 'query' | 'subscription',
    node: ConcreteFragment | ConcreteMutation | ConcreteSubscription,
  };

  declare type RelayConcreteNode = mixed;

  declare export function RelayQL(strings: Array<string>, ...substitutions: Array<any>): RelayConcreteNode;

  // The type of a graphql`...` tagged template expression.
  declare type GraphQLTaggedNode =
    | (() => ConcreteFragment | RequestNode)
    | {
        modern: () => ConcreteFragment | RequestNode,
        classic: RelayQL => ConcreteFragmentDefinition | ConcreteOperationDefinition,
      };

  declare type GeneratedNodeMap = { [key: string]: GraphQLTaggedNode };

  declare type RelayProp = {
    environment: IEnvironment,
  };

  /**
   * A utility type which takes the type of a fragment's data (typically found in
   * a relay generated file) and returns a fragment reference type. This is used
   * when the input to a Relay component needs to be explicitly typed:
   *
   *   // ExampleComponent.js
   *   import type {ExampleComponent_data} from './generated/ExampleComponent_data.graphql';
   *   type Props = {
   *     title: string,
   *     data: ExampleComponent_data,
   *   };
   *
   *   export default createFragmentContainer(
   *     (props: Props) => <div>{props.title}, {props.data.someField}</div>,
   *     graphql`
   *       fragment ExampleComponent_data on SomeType {
   *         someField
   *       }`
   *   );
   *
   *   // ExampleUsage.js
   *   import type {ExampleComponent_data} from './generated/ExampleComponent_data.graphql';
   *   type Props = {
   *     title: string,
   *     data: $FragmentRef<ExampleComponent_data>,
   *   };
   *
   *   export default function ExampleUsage(props: Props) {
   *     return <ExampleComponent {...props} />
   *   }
   *
   */
  declare type $FragmentRef<T> = {
    +$fragmentRefs: $PropertyType<T, '$refType'>,
  };

  /**
   * A utility type that takes the Props of a component and the type of
   * `props.relay` and returns the props of the container.
   */
  declare type $RelayProps<Props, RelayPropT> = $ObjMap<
    $Diff<Props, { relay: RelayPropT | void }>,
    (<T: { +$refType: empty }>(T) => T) &
      (<T: { +$refType: empty }>(?T) => ?T) &
      (<TRef: FragmentReference, T: { +$refType: TRef }>(T) => $FragmentRef<T>) &
      (<TRef: FragmentReference, T: { +$refType: TRef }>(?T) => ?$FragmentRef<T>) &
      (<TRef: FragmentReference, T: { +$refType: TRef }>($ReadOnlyArray<T>) => $ReadOnlyArray<$FragmentRef<T>>) &
      (<TRef: FragmentReference, T: { +$refType: TRef }>(?$ReadOnlyArray<T>) => ?$ReadOnlyArray<$FragmentRef<T>>) &
      (<TRef: FragmentReference, T: { +$refType: TRef }>($ReadOnlyArray<?T>) => $ReadOnlyArray<?$FragmentRef<T>>) &
      (<TRef: FragmentReference, T: { +$refType: TRef }>(?$ReadOnlyArray<?T>) => ?$ReadOnlyArray<?$FragmentRef<T>>) &
      (<T>(T) => T),
  >;

  declare export function createFragmentContainer<Props: {}, TComponent: ComponentType<Props>>(
    Component: TComponent,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
  ): ComponentType<$RelayProps<ElementConfig<TComponent>, RelayProp>>;

  /**
   * A Subscription object is returned from .subscribe(), which can be
   * unsubscribed or checked to see if the resulting subscription has closed.
   */
  declare type Subscription = {|
    +unsubscribe: () => void,
    +closed: boolean,
  |};

  /**
   * An Observer is an object of optional callback functions provided to
   * .subscribe(). Each callback function is invoked when that event occurs.
   */
  declare type Observer<-T> = {|
    +start?: ?(Subscription) => mixed,
    +next?: ?(T) => mixed,
    +error?: ?(Error) => mixed,
    +complete?: ?() => mixed,
    +unsubscribe?: ?(Subscription) => mixed,
  |};

  declare type ObserverOrCallback = Observer<void> | ((error: ?Error) => mixed);

  declare type RefetchOptions = {
    force?: boolean,
    rerunParamExperimental?: RerunParam,
  };

  /**
   * Represents any resource that must be explicitly disposed of. The most common
   * use-case is as a return value for subscriptions, where calling `dispose()`
   * would cancel the subscription.
   */
  declare type Disposable = {
    dispose(): void,
  };

  declare type RelayRefetchProp = RelayProp & {
    refetch: (
      refetchVariables: Variables | ((fragmentVariables: Variables) => Variables),
      renderVariables: ?Variables,
      observerOrCallback: ?ObserverOrCallback,
      options?: RefetchOptions,
    ) => Disposable,
  };

  declare export function createRefetchContainer<Props: {}, TComponent: ComponentType<Props>>(
    Component: TComponent,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
    taggedNode: GraphQLTaggedNode,
  ): ComponentType<$RelayProps<ElementConfig<TComponent>, RelayRefetchProp>>;

  /**
   * Runtime function to correspond to the `graphql` tagged template function.
   * All calls to this function should be transformed by the plugin.
   */
  declare export function graphql(strings: Array<string>): GraphQLTaggedNode;

  declare type QueryRendererProps = {
    cacheConfig?: ?CacheConfig,
    // dataFrom?: DataFrom,
    // environment: IEnvironment | ClassicEnvironment,
    query: ?GraphQLTaggedNode,
    // render: (renderProps: RenderProps) => React.Node,
    variables: Variables,
  };

  declare type QueryRendererState = {
    // prevPropsEnvironment: IEnvironment | ClassicEnvironment,
    prevPropsVariables: Variables,
    prevQuery: ?GraphQLTaggedNode,
    // queryFetcher: ReactRelayQueryFetcher,
    // relayContextEnvironment: IEnvironment | ClassicEnvironment,
    relayContextVariables: Variables,
    // renderProps: RenderProps,
    // retryCallbacks: RetryCallbacks,
  };

  declare export class QueryRenderer extends React.Component<QueryRendererProps, QueryRendererState> {}
}

declare module "react-relay/compat" {
  declare module.exports: any;
}

declare module "react-relay/classic" {
  declare module.exports: any;
}

declare module 'react-relay/lib/assertFragmentMap' {
  declare module.exports: any;
}

declare module 'react-relay/lib/buildReactRelayContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/buildRQL' {
  declare module.exports: any;
}

declare module 'react-relay/lib/callsFromGraphQL' {
  declare module.exports: any;
}

declare module 'react-relay/lib/callsToGraphQL' {
  declare module.exports: any;
}

declare module 'react-relay/lib/checkRelayQueryData' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ConcreteQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/containsRelayQueryRootCall' {
  declare module.exports: any;
}

declare module 'react-relay/lib/createRelayQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/dedent' {
  declare module.exports: any;
}

declare module 'react-relay/lib/deepFreeze' {
  declare module.exports: any;
}

declare module 'react-relay/lib/diffRelayQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/directivesToGraphQL' {
  declare module.exports: any;
}

declare module 'react-relay/lib/filterExclusiveKeys' {
  declare module.exports: any;
}

declare module 'react-relay/lib/filterRelayQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/findRelayQueryLeaves' {
  declare module.exports: any;
}

declare module 'react-relay/lib/flattenRelayQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/flattenSplitRelayQueries' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ForceRelayClassicContext' {
  declare module.exports: any;
}

declare module 'react-relay/lib/forEachRootCallArg' {
  declare module.exports: any;
}

declare module 'react-relay/lib/formatStorageKey' {
  declare module.exports: any;
}

declare module 'react-relay/lib/fromGraphQL' {
  declare module.exports: any;
}

declare module 'react-relay/lib/generateClientEdgeID' {
  declare module.exports: any;
}

declare module 'react-relay/lib/generateClientID' {
  declare module.exports: any;
}

declare module 'react-relay/lib/generateConcreteFragmentID' {
  declare module.exports: any;
}

declare module 'react-relay/lib/generateForceIndex' {
  declare module.exports: any;
}

declare module 'react-relay/lib/generateRQLFieldAlias' {
  declare module.exports: any;
}

declare module 'react-relay/lib/getRangeBehavior' {
  declare module.exports: any;
}

declare module 'react-relay/lib/getRelayHandleKey' {
  declare module.exports: any;
}

declare module 'react-relay/lib/getRelayQueries' {
  declare module.exports: any;
}

declare module 'react-relay/lib/GraphQLMutatorConstants' {
  declare module.exports: any;
}

declare module 'react-relay/lib/GraphQLQueryRunner' {
  declare module.exports: any;
}

declare module 'react-relay/lib/GraphQLRange' {
  declare module.exports: any;
}

declare module 'react-relay/lib/GraphQLSegment' {
  declare module.exports: any;
}

declare module 'react-relay/lib/GraphQLStoreChangeEmitter' {
  declare module.exports: any;
}

declare module 'react-relay/lib/GraphQLStoreQueryResolver' {
  declare module.exports: any;
}

declare module 'react-relay/lib/GraphQLStoreRangeUtils' {
  declare module.exports: any;
}

declare module 'react-relay/lib/intersectRelayQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/isClassicRelayContext' {
  declare module.exports: any;
}

declare module 'react-relay/lib/isClassicRelayEnvironment' {
  declare module.exports: any;
}

declare module 'react-relay/lib/isCompatibleRelayFragmentType' {
  declare module.exports: any;
}

declare module 'react-relay/lib/isRelayContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/isRelayContext' {
  declare module.exports: any;
}

declare module 'react-relay/lib/isRelayEnvironment' {
  declare module.exports: any;
}

declare module 'react-relay/lib/isRelayModernContext' {
  declare module.exports: any;
}

declare module 'react-relay/lib/isRelayVariables' {
  declare module.exports: any;
}

declare module 'react-relay/lib/isScalarAndEqual' {
  declare module.exports: any;
}

declare module 'react-relay/lib/prettyStringify' {
  declare module.exports: any;
}

declare module 'react-relay/lib/printRelayOSSQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/printRelayQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/QueryBuilder' {
  declare module.exports: any;
}

declare module 'react-relay/lib/rangeOperationToMetadataKey' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayClassicExports' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayCompatContainerBuilder' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayCompatPublic' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayContainerProfiler' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayFragmentContainer-flowtest' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayFragmentContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayFragmentMockRenderer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayPaginationContainer-flowtest' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayPaginationContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayPropTypes' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayPublic' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayQueryRenderer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayRefetchContainer-flowtest' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayRefetchContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/ReactRelayTypes' {
  declare module.exports: any;
}

declare module 'react-relay/lib/readRelayQueryData' {
  declare module.exports: any;
}

declare module 'react-relay/lib/recycleNodesInto' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayCacheProcessor' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayChangeTracker' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayClassicCore' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayClassicRecordState' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayCombinedEnvironmentTypes' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayCompatContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayCompatEnvironment' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayCompatMutations' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayCompatPaginationContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayCompatRefetchContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayCompatTypes' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayConcreteNode' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayConnectionInterface' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayContainerComparators' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayContainerProxy' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayContainerUtils' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayDefaultHandleKey' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayDefaultNetworkLayer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayEnvironment' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayEnvironmentSerializer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayEnvironmentTypes' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayError' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayEventStatus' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayFetchMode' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayFragmentPointer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayFragmentReference' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayFragmentSpecResolver' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayGarbageCollection' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayGarbageCollector' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayGraphQLMutation' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayGraphQLTag' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayInternals' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayInternalTypes' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMetaRoute' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMetricsRecorder' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMockRenderer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMutation' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMutationDebugPrinter' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMutationQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMutationQueue' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMutationRequest' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMutationTracker' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMutationTransaction' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMutationTransactionStatus' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayMutationType' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayNetworkDebug' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayNetworkLayer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayNodeInterface' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayOperationSelector' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayOptimisticMutationUtils' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayOSSConnectionInterface' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayPendingQueryTracker' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayProfiler' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayPropTypes' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayPublic' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQL_GENERATED' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQL' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQueryCaching' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQueryConfig' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQueryPath' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQueryRequest' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQueryResultObservable' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQueryTracker' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQueryTransform' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQueryVisitor' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayQueryWriter' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayReadyState' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayReadyStateRenderer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayRecord' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayRecordStatusMap' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayRecordStore' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayRecordWriter' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayRefQueryDescriptor' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayRenderer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayRootContainer' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayRoute' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayRouteFragment' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelaySelector' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayShallowMock' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayStore' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayStoreConstants' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayStoreData' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayTaskQueue' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayTypes' {
  declare module.exports: any;
}

declare module 'react-relay/lib/relayUnstableBatchedUpdates' {
  declare module.exports: any;
}

declare module 'react-relay/lib/relayUnstableBatchedUpdates.native' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayVariable' {
  declare module.exports: any;
}

declare module 'react-relay/lib/RelayVariables' {
  declare module.exports: any;
}

declare module 'react-relay/lib/restoreRelayCacheData' {
  declare module.exports: any;
}

declare module 'react-relay/lib/serializeRelayQueryCall' {
  declare module.exports: any;
}

declare module 'react-relay/lib/simpleClone' {
  declare module.exports: any;
}

declare module 'react-relay/lib/splitDeferredRelayQueries' {
  declare module.exports: any;
}

declare module 'react-relay/lib/stableJSONStringify' {
  declare module.exports: any;
}

declare module 'react-relay/lib/stableStringify' {
  declare module.exports: any;
}

declare module 'react-relay/lib/testEditDistance' {
  declare module.exports: any;
}

declare module 'react-relay/lib/throwFailedPromise' {
  declare module.exports: any;
}

declare module 'react-relay/lib/toGraphQL' {
  declare module.exports: any;
}

declare module 'react-relay/lib/transformRelayQueryPayload' {
  declare module.exports: any;
}

declare module 'react-relay/lib/validateMutationConfig' {
  declare module.exports: any;
}

declare module 'react-relay/lib/validateRelayReadQuery' {
  declare module.exports: any;
}

declare module 'react-relay/lib/writeRelayQueryPayload' {
  declare module.exports: any;
}

declare module 'react-relay/lib/writeRelayUpdatePayload' {
  declare module.exports: any;
}

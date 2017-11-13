declare module "relay-runtime" {
  import type {
    RecordSourceProxy,
    RecordProxy,
    Variables,
    DataID,
    HandleFieldPayload
  } from "react-relay";

  declare type RelayConnectionHandler = {
    buildConnectionEdge: (
      store: RecordSourceProxy,
      connection: RecordProxy,
      edge: ?RecordProxy
    ) => ?RecordProxy,
    createEdge: (
      store: RecordSourceProxy,
      record: RecordProxy,
      node: RecordProxy,
      edgeType: string
    ) => RecordProxy,
    deleteNode: (record: RecordProxy, nodeID: DataID) => void,
    getConnection: (
      record: RecordProxy,
      key: string,
      filters?: ?Variables
    ) => ?RecordProxy,
    insertEdgeAfter: (
      record: RecordProxy,
      newEdge: RecordProxy,
      cursor?: ?string
    ) => void,
    insertEdgeBefore: (
      record: RecordProxy,
      newEdge: RecordProxy,
      cursor?: ?string
    ) => void,
    update: (store: RecordSourceProxy, payload: HandleFieldPayload) => void
  };
  declare export type ConnectionHandler = RelayConnectionHandler;

  declare export type ConcreteLiteral = {
    kind: "Literal",
    name: string,
    type: ?string,
    value: mixed
  };

  declare export type ConcreteVariable = {
    kind: "Variable",
    name: string,
    type: ?string,
    variableName: string
  };

  declare export type ConcreteLocalArgument = {
    kind: "LocalArgument",
    name: string,
    type: string,
    defaultValue: mixed
  };

  declare export type ConcreteRootArgument = {
    kind: "RootArgument",
    name: string,
    type: ?string
  };

  declare export type ConcreteArgument = ConcreteLiteral | ConcreteVariable;
  declare export type ConcreteArgumentDefinition =
    | ConcreteLocalArgument
    | ConcreteRootArgument;

  declare export type ConcreteCondition = {
    kind: "Condition",
    passingValue: boolean,
    condition: string,
    selections: Array<ConcreteSelection>
  };

  declare export type ConcreteScalarField = {
    kind: "ScalarField",
    alias: ?string,
    name: string,
    args: ?Array<ConcreteArgument>,
    storageKey: ?string
  };

  declare export type ConcreteLinkedField = {
    kind: "LinkedField",
    alias: ?string,
    name: string,
    storageKey: ?string,
    args: ?Array<ConcreteArgument>,
    concreteType: ?string,
    plural: boolean,
    selections: Array<ConcreteSelection>
  };

  declare export type ConcreteField = ConcreteScalarField | ConcreteLinkedField;

  declare export type ConcreteFragmentSpread = {
    kind: "FragmentSpread",
    name: string,
    args: ?Array<ConcreteArgument>
  };

  declare export type ConcreteScalarHandle = {
    kind: "ScalarHandle",
    alias: ?string,
    name: string,
    args: ?Array<ConcreteArgument>,
    handle: string,
    key: string,
    filters: ?Array<string>
  };

  declare export type ConcreteLinkedHandle = {
    kind: "LinkedHandle",
    alias: ?string,
    name: string,
    args: ?Array<ConcreteArgument>,
    handle: string,
    key: string,
    filters: ?Array<string>
  };

  declare export type ConcreteHandle =
    | ConcreteScalarHandle
    | ConcreteLinkedHandle;

  declare export type ConcreteInlineFragment = {
    kind: "InlineFragment",
    selections: Array<ConcreteSelection>,
    type: string
  };

  declare export type ConcreteSelection =
    | ConcreteCondition
    | ConcreteField
    | ConcreteFragmentSpread
    | ConcreteHandle
    | ConcreteInlineFragment;

  declare export type ConcreteFragment = {
    kind: "Fragment",
    name: string,
    type: string,
    metadata: ?{ [key: string]: mixed },
    argumentDefinitions: Array<ConcreteArgumentDefinition>,
    selections: Array<ConcreteSelection>
  };

  // declare type ConcreteBatch = any;

  declare export type ConcreteRoot = {
    argumentDefinitions: Array<ConcreteLocalArgument>,
    kind: "Root",
    name: string,
    operation: "mutation" | "query" | "subscription",
    selections: Array<ConcreteSelection>
  };

  declare export type ConcreteBatch = {
    kind: "Batch",
    fragment: ConcreteFragment,
    id: ?string,
    metadata: { [key: string]: mixed },
    name: string,
    query: ConcreteRoot,
    text: ?string
  };

  // TODO - fix this
  declare export class Environment {}
  declare export class Network {}
  declare export class RecordSource {}
  declare export class Store {}
}

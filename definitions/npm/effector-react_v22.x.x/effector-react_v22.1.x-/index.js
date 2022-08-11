//@flow strict

import type {
  ComponentType,
  Component,
  ElementConfig,
  Node,
  Context as ContextType,
} from 'react';
import type { Store, Event } from 'effector';

export type StoreConsumer<State> = ComponentType<{|
  children: (state: State) => Node,
|}>;

export type StoreComponent<State> = ComponentType<{|
  children: (state: State) => Node,
|}>;

export type Gate<Props = {||}> = Class<Component<Props, {||}>> & {|
  open: Event<Props>,
  close: Event<Props>,
  status: Store<boolean>,
  state: Store<Props>,
|};

export type StoreView<State, Props = {||}> = ComponentType<Props> & {|
  mounted: Event<{|
    props: Props,
    state: State,
  |}>,
  unmounted: Event<{|
    props: Props,
    state: State,
  |}>,
|};

declare export function useStore<State>(store: Store<State>): State;
declare export function useStoreMap<
  State,
  Result,
  Keys: $ReadOnlyArray<any>
>(opts: {|
  +store: Store<State>,
  +keys: Keys,
  fn(state: State, keys: Keys): Result,
|}): Result;
declare export function useList<T>(
  list: Store<T[]> | Store<$ReadOnlyArray<T>>,
  renderItem:
    | {|
        +keys?: any[],
        fn(item: T, index: number): Node,
      |}
    | ((item: T, index: number) => Node)
): Node;
declare export function useGate<Props>(Gate: Gate<Props>, props?: Props): void;

declare export function createGate<Props: { ... }>(name?: string): Gate<Props>;
declare export function createGate<Props>(
  name: string,
  defaultState: Props
): Gate<Props>;

declare export function createComponent<
  Props,
  Shape: { +[key: string]: Store<any> | any, ... }
>(
  store: Shape,
  view: (
    props: Props,
    state: $ObjMap<
      Shape,
      //prettier-ignore
      <S>(field: Store<S> | S) => S
    >
  ) => Node
): StoreView<
  $ObjMap<
    Shape,
    //prettier-ignore
    <S>(field: Store<S> | S) => S
  >,
  Props
>;
declare export function createComponent<Props, State>(
  store: Store<State>,
  view: (props: Props, state: State) => Node
): StoreView<State, Props>;

declare export function createContextComponent<Props, State, Context>(
  store: Store<State>,
  context: ContextType<Context>,
  view: (props: Props, state: State, context: Context) => Node
): ComponentType<Props>;

declare export function connect<
  State: { [key: string]: any, ... },
  Com: ComponentType<*>
>(
  Component: Com
): (
  store: Store<State>
) => ComponentType<$Exact<$Diff<ElementConfig<Com>, State>>>;

declare export function createStoreConsumer<State>(
  store: Store<State>
): StoreConsumer<State>;

declare export function createReactState<
  State: { [key: string]: any, ... },
  Com: ComponentType<*>
>(
  store: Store<State>,
  Component: Com
): ComponentType<$Exact<$Diff<ElementConfig<Com>, State>>>;

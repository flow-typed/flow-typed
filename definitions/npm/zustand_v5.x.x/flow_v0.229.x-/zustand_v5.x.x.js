/* @flow */

/**
 * Reference:
 * https://zustand.docs.pmnd.rs/apis/create-store
 */

/**
 * Core api
 */

type zustand$SetStateInternal<S> =
  & ((
    partial: S | Partial<S> | (S => S | Partial<S>),
    replace?: false
  ) => void)
  & ((
    state: S | (S => S),
    replace: true
  ) => void)

type zustand$StoreApi<S> = {
  getInitialState: () => S,
  getState: () => S,
  setState: zustand$SetStateInternal<S>,
}

type zustand$CreateState<S> = (
  setState: zustand$SetStateInternal<S>,
  getState: () => S,
  api: zustand$StoreApi<S>
) => S

declare module 'zustand/vanilla.js' {
  declare export type StoreApi<S> = zustand$StoreApi<S>
  declare export function createStore<S>(
    createState: zustand$CreateState<S>
  ): zustand$StoreApi<S>
  declare export function createStore<S>(): (
    createState: zustand$CreateState<S>
  ) => zustand$StoreApi<S>
}
declare module 'zustand/vanilla.mjs' {
  declare export type StoreApi<S> = zustand$StoreApi<S>
  declare export function createStore<S>(
    createState: zustand$CreateState<S>
  ): zustand$StoreApi<S>
  declare export function createStore<S>(): (
    createState: zustand$CreateState<S>
  ) => zustand$StoreApi<S>
}
declare module 'zustand/vanilla' {
  declare export type StoreApi<S> = zustand$StoreApi<S>
  declare export function createStore<S>(
    createState: zustand$CreateState<S>
  ): zustand$StoreApi<S>
  declare export function createStore<S>(): (
    createState: zustand$CreateState<S>
  ) => zustand$StoreApi<S>
}

type zustand$UseBoundStore<S> =
  & (() => S)
  & (<F>(selector: S => F) => F)

declare module 'zustand/react.js' {
  declare export type UseBoundStore<S> = zustand$UseBoundStore<S>
  declare export function create<S>(createState: zustand$CreateState<S>): zustand$UseBoundStore<S>
  declare export function useStore<S>(api: zustand$StoreApi<S>): S
  declare export function useStore<S, F>(api: zustand$StoreApi<S>, selector: S => F): F
}
declare module 'zustand/react.mjs' {
  declare export type UseBoundStore<S> = zustand$UseBoundStore<S>
  declare export function create<S>(createState: zustand$CreateState<S>): zustand$UseBoundStore<S>
  declare export function useStore<S>(api: zustand$StoreApi<S>): S
  declare export function useStore<S, F>(api: zustand$StoreApi<S>, selector: S => F): F
}
declare module 'zustand/react' {
  declare export type UseBoundStore<S> = zustand$UseBoundStore<S>
  declare export function create<S>(createState: zustand$CreateState<S>): zustand$UseBoundStore<S>
  declare export function useStore<S>(api: zustand$StoreApi<S>): S
  declare export function useStore<S, F>(api: zustand$StoreApi<S>, selector: S => F): F
}

/**
 * Aliases
 */

declare module 'zustand/index.js' {
  declare export * from 'zustand/vanilla.js'
  declare export * from 'zustand/react.js'
}
declare module 'zustand/index.mjs' {
  declare export * from 'zustand/vanilla.mjs'
  declare export * from 'zustand/react.mjs'
}
declare module 'zustand/index' {
  declare export * from 'zustand/vanilla'
  declare export * from 'zustand/react'
}

declare module 'zustand' {
  declare export * from 'zustand/vanilla'
  declare export * from 'zustand/react'
}

/**
 * Shallow
 */

declare module 'zustand/vanilla/shallow.js' {
  declare export function shallow(a: mixed, b: mixed): boolean
}
declare module 'zustand/vanilla/shallow.mjs' {
  declare export function shallow(a: mixed, b: mixed): boolean
}
declare module 'zustand/vanilla/shallow' {
  declare export function shallow(a: mixed, b: mixed): boolean
}

declare module 'zustand/react/shallow.js' {
  declare export function useShallow<S, F>(selector: S => F): (state: S) => F
}
declare module 'zustand/react/shallow.mjs' {
  declare export function useShallow<S, F>(selector: S => F): (state: S) => F
}
declare module 'zustand/react/shallow' {
  declare export function useShallow<S, F>(selector: S => F): (state: S) => F
}

declare module 'zustand/shallow.js' {
  declare export * from 'zustand/vanilla/shallow.js'
  declare export * from 'zustand/react/shallow.js'
}
declare module 'zustand/shallow.mjs' {
  declare export * from 'zustand/vanilla/shallow.mjs'
  declare export * from 'zustand/react/shallow.mjs'
}
declare module 'zustand/shallow' {
  declare export * from 'zustand/vanilla/shallow'
  declare export * from 'zustand/react/shallow'
}

/**
 * Traditional
 */

type zustand$UseBoundStoreWithEquality<S> =
  & (() => S)
  & (<F>(selector: S => F, equality?: (a: S, b: S) => boolean) => F)

declare module 'zustand/traditional.js' {
  declare export function createWithEqualityFn<S>(
    createState: zustand$CreateState<S>,
    equality?: (a: S, b: S) => boolean
  ): zustand$UseBoundStoreWithEquality<S>
  declare export function useStoreWithEqualityFn<S, F>(
    api: zustand$StoreApi<S>,
    selector: (state: S) => F,
    equality?: (a: S, b: S) => boolean
  ): F
}
declare module 'zustand/traditional.mjs' {
  declare export function createWithEqualityFn<S>(
    createState: zustand$CreateState<S>,
    equality?: (a: S, b: S) => boolean
  ): zustand$UseBoundStoreWithEquality<S>
  declare export function useStoreWithEqualityFn<S, F>(
    api: zustand$StoreApi<S>,
    selector: (state: S) => F,
    equality?: (a: S, b: S) => boolean
  ): F
}
declare module 'zustand/traditional' {
  declare export function createWithEqualityFn<S>(
    createState: zustand$CreateState<S>,
    equality?: () => boolean
  ): zustand$UseBoundStoreWithEquality<S>
  declare export function useStoreWithEqualityFn<S, F>(
    api: zustand$StoreApi<S>,
    selector: (state: S) => F,
    equality?: (a: S, b: S) => boolean
  ): F
}

/**
 * Middlewares
 */

type zustand$CreateReduxState<S, A> =
  zustand$CreateState<S & { dispatch: (action: A) => A }>

type zustand$StorageValue<S> = {
  state: S,
  version?: number
}

type zustand$PersistStorage<S> = {
  getItem: (name: string) => zustand$StorageValue<S>,
  setItem: (name: string, value: zustand$StorageValue<S>) => mixed,
  removeItem: (name: string) => mixed,
}

type zustand$StateStorage = {
  getItem: (key: string) => string | null,
  removeItem(key: string): void,
  setItem(key: string, value: string): void
}

type zustand$DevtoolsOptions = {
  /**
   * A custom identifier for the connection in the Redux DevTools.
   */
  name?: string,
  /**
   * Defaults to `true` when is on development mode, and defaults to `false` when is on production mode. Enables or disables the Redux DevTools integration for this store.
   */
  enabled?: boolean,
  /**
   * Defaults to `anonymous`. A string to use as the action type for anonymous mutations in the Redux DevTools.
   */
  anonymousActionType?: string,
  /**
   * A custom identifier for the store in the Redux DevTools.
   */
  store?: string,
}

type zustand$PersistOptions<S, PersistedState = S> = {
  /**
   * Name of the storage (must be unique)
   */
  name: string,
  /**
   * Use a custom persist storage.
   *
   * Combining `createJSONStorage` helps creating a persist storage
   * with JSON.parse and JSON.stringify.
   *
   * @default createJSONStorage(() => localStorage)
   */
  storage?: zustand$PersistStorage<PersistedState>,
  /**
   * Filter the persisted value.
   */
  partialize?: (state: S) => PersistedState,
  /**
   * A function returning another (optional) function.
   * The main function will be called before the state rehydration.
   * The returned function will be called after the state rehydration or when an error occurred.
   */
  onRehydrateStorage?: (state: S) => ((state?: S, error?: mixed) => void) | void,
  /**
   * If the stored state's version mismatch the one specified here, the storage will not be used.
   * This is useful when adding a breaking change to your store.
   */
  version?: number,
  /**
   * A function to perform persisted state migration.
   * This function will be called when persisted state versions mismatch with the one specified here.
   */
  migrate?: (persistedState: mixed, version: number) => PersistedState | Promise<PersistedState>,
  /**
   * A function to perform custom hydration merges when combining the stored state with the current one.
   * By default, this function does a shallow merge.
   */
  merge?: (persistedState: mixed, currentState: S) => S,
  /**
   * An optional boolean that will prevent the persist middleware from triggering hydration on initialization,
   * This allows you to call `rehydrate()` at a specific point in your apps rendering life-cycle.
   *
   * This is useful in SSR application.
   *
   * @default false
   */
  skipHydration?: boolean
}

type zustand$JsonStorageOptions = {
  /**
   * Is a function that is passed to `JSON.parse` to deserialize the data.
   */
  reviver?: (key: string, value: mixed) => mixed,
  /**
   * Is a function that is passed to `JSON.stringify` to serialize the data.
   */
  replacer?: (key: string, value: mixed) => mixed
}

declare module 'zustand/middleware.js' {
  declare export type CreateReduxState<S, A> = zustand$CreateReduxState<S, A>
  declare export function combine<S, T>(
    initialState: T,
    createState: zustand$CreateState<S>
  ): zustand$CreateState<S & T>
  declare export function createJSONStorage<S>(
    getStorage: () => zustand$StateStorage,
    options?: zustand$JsonStorageOptions
  ): zustand$PersistStorage<S>
  declare export function devtools<S>(
    createState: zustand$CreateState<S>,
    devtoolsOptions?: zustand$DevtoolsOptions
  ): zustand$CreateState<S>
  declare export function persist<S>(
    createState: zustand$CreateState<S>,
    persistOptions?: zustand$PersistOptions<S>
  ): zustand$CreateState<S>
  declare export function redux<S, A>(
    reducer: (state: S, action: A) => S,
    initialState: S
  ): zustand$CreateReduxState<S, A>
  declare export function subscribeWithSelector<S>(
    createState: zustand$CreateState<S>,
  ): zustand$CreateState<S>
}
declare module 'zustand/middleware.mjs' {
  declare export type CreateReduxState<S, A> = zustand$CreateReduxState<S, A>
  declare export function combine<S, T>(
    initialState: T,
    createState: zustand$CreateState<S>
  ): zustand$CreateState<S & T>
  declare export function createJSONStorage<S>(
    getStorage: () => zustand$StateStorage,
    options?: zustand$JsonStorageOptions
  ): zustand$PersistStorage<S>
  declare export function devtools<S>(
    createState: zustand$CreateState<S>,
    devtoolsOptions?: zustand$DevtoolsOptions
  ): zustand$CreateState<S>
  declare export function persist<S>(
    createState: zustand$CreateState<S>,
    persistOptions?: zustand$PersistOptions<S>
  ): zustand$CreateState<S>
  declare export function redux<S, A>(
    reducer: (state: S, action: A) => S,
    initialState: S
  ): zustand$CreateReduxState<S, A>
  declare export function subscribeWithSelector<S>(
    createState: zustand$CreateState<S>,
  ): zustand$CreateState<S>
}
declare module 'zustand/middleware' {
  declare export type CreateReduxState<S, A> = zustand$CreateReduxState<S, A>
  declare export function combine<S, T>(
    initialState: T,
    createState: zustand$CreateState<S>
  ): zustand$CreateState<S & T>
  declare export function createJSONStorage<S>(
    getStorage: () => zustand$StateStorage,
    options?: zustand$JsonStorageOptions
  ): zustand$PersistStorage<S>
  declare export function devtools<S>(
    createState: zustand$CreateState<S>,
    devtoolsOptions?: zustand$DevtoolsOptions
  ): zustand$CreateState<S>
  declare export function persist<S>(
    createState: zustand$CreateState<S>,
    persistOptions?: zustand$PersistOptions<S>
  ): zustand$CreateState<S>
  declare export function redux<S, A>(
    reducer: (state: S, action: A) => S,
    initialState: S
  ): zustand$CreateReduxState<S, A>
  declare export function subscribeWithSelector<S>(
    createState: zustand$CreateState<S>,
  ): zustand$CreateState<S>
}

declare module 'zustand/middleware/immer.js' {
  declare export function immer<S>(
    createState: zustand$CreateState<S>,
  ): zustand$CreateState<S>
}
declare module 'zustand/middleware/immer.mjs' {
  declare export function immer<S>(
    createState: zustand$CreateState<S>,
  ): zustand$CreateState<S>
}
declare module 'zustand/middleware/immer' {
  declare export function immer<S>(
    createState: zustand$CreateState<S>,
  ): zustand$CreateState<S>
}

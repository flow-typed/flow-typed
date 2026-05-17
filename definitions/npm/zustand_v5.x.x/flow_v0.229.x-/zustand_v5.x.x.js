/* @flow */

/**
 * Reference:
 * https://zustand.docs.pmnd.rs/apis/create-store
 */

/**
 * Core api
 */

declare module 'zustand/vanilla' {
  declare export type SetStateInternal<S> =
    & ((
      partial: S | Partial<S> | (S => S | Partial<S>),
      replace?: false
    ) => void)
    & ((
      state: S | (S => S),
      replace: true
    ) => void)
  declare export type StoreApi<S> = $ReadOnly<{|
    getInitialState: () => S,
    getState: () => S,
    setState: SetStateInternal<S>,
  |}>
  declare export type CreateState<S> = (
    setState: SetStateInternal<S>,
    getState: () => S,
    api: StoreApi<S>
  ) => S

  declare export function createStore<S>(
    createState: CreateState<S>
  ): StoreApi<S>
  declare export function createStore<S>(): (
    createState: CreateState<S>
  ) => StoreApi<S>
}
declare module 'zustand/vanilla.js' {
  declare export * from 'zustand/vanilla'
}
declare module 'zustand/vanilla.mjs' {
  declare export * from 'zustand/vanilla'
}

declare module 'zustand/react' {
  import type { CreateState, StoreApi } from 'zustand/vanilla'

  declare export type UseBoundStore<S> =
    & (() => S)
    & (<F>(selector: S => F) => F)

  declare export function create<S>(createState: CreateState<S>): UseBoundStore<S>
  declare export function useStore<S>(api: StoreApi<S>): S
  declare export function useStore<S, F>(api: StoreApi<S>, selector: S => F): F
}
declare module 'zustand/react.js' {
  declare export * from 'zustand/react'
}
declare module 'zustand/react.mjs' {
  declare export * from 'zustand/react'
}

declare module 'zustand/index' {
  declare export * from 'zustand/vanilla'
  declare export * from 'zustand/react'
}
declare module 'zustand/index.js' {
  declare export * from 'zustand/index'
}
declare module 'zustand/index.mjs' {
  declare export * from 'zustand/index'
}

declare module 'zustand' {
  declare export * from 'zustand/vanilla'
  declare export * from 'zustand/react'
}

/**
 * Shallow
 */

declare module 'zustand/vanilla/shallow' {
  declare export function shallow(a: mixed, b: mixed): boolean
}
declare module 'zustand/vanilla/shallow.js' {
  declare export * from 'zustand/vanilla/shallow'
}
declare module 'zustand/vanilla/shallow.mjs' {
  declare export * from 'zustand/vanilla/shallow'
}

declare module 'zustand/react/shallow' {
  declare export function useShallow<S, F>(selector: S => F): (state: S) => F
}
declare module 'zustand/react/shallow.js' {
  declare export * from 'zustand/react/shallow'
}
declare module 'zustand/react/shallow.mjs' {
  declare export * from 'zustand/react/shallow'
}

/**
 * Traditional
 */

declare module 'zustand/traditional' {
  import type { CreateState, StoreApi } from 'zustand/vanilla'

  declare type UseBoundStoreWithEquality<S> =
    & (() => S)
    & (<F>(selector: S => F, equality?: (a: S, b: S) => boolean) => F)

  declare export function createWithEqualityFn<S>(
    createState: CreateState<S>,
    equality?: (a: S, b: S) => boolean
  ): UseBoundStoreWithEquality<S>
  declare export function useStoreWithEqualityFn<S, F>(
    api: StoreApi<S>,
    selector: (state: S) => F,
    equality?: (a: S, b: S) => boolean
  ): F
}
declare module 'zustand/traditional.js' {
  declare export * from 'zustand/traditional'
}
declare module 'zustand/traditional.mjs' {
  declare export * from 'zustand/traditional'
}

/**
 * Middlewares
 */

declare module 'zustand/middleware' {
  import type { CreateState, SetStateInternal, StoreApi } from 'zustand/vanilla'

  declare export type CreateReduxState<S, A> = CreateState<{| ...S, dispatch: (action: A) => A |}>
  declare export type UseBoundReduxStore<S, A> =
    & (() => {|...S, dispatch: (action: A) => A |})
    & (<F>(selector: {|...S, dispatch: (action: A) => A |} => F) => F)

  type StorageValue<S> = {|
    state: S,
    version?: number
  |}

  type PersistStorage<S> = {|
    getItem: (name: string) => StorageValue<S>,
    setItem: (name: string, value: StorageValue<S>) => mixed,
    removeItem: (name: string) => mixed,
  |}

  type StateStorage = {|
    getItem: (key: string) => string | null,
    removeItem(key: string): void,
    setItem(key: string, value: string): void
  |}

  type DevtoolsOptions = {|
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
  |}

  type PersistOptions<S, PersistedState = S> = {|
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
    storage?: PersistStorage<PersistedState>,
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
  |}

  type JsonStorageOptions = {|
    /**
     * Is a function that is passed to `JSON.parse` to deserialize the data.
     */
    reviver?: (key: string, value: mixed) => mixed,
    /**
     * Is a function that is passed to `JSON.stringify` to serialize the data.
     */
    replacer?: (key: string, value: mixed) => mixed
  |}

  declare export function combine<S, T, R = {|...S, ...T|}>(
    initialState: T,
    createState: (
      setState: SetStateInternal<R>,
      getState: () => R,
      api: StoreApi<R>
    ) => T
  ): CreateState<R>
  declare export function createJSONStorage<S>(
    getStorage: () => StateStorage,
    options?: JsonStorageOptions
  ): PersistStorage<S>
  declare export function devtools<S>(
    createState: CreateState<S>,
    devtoolsOptions?: DevtoolsOptions
  ): CreateState<S>
  declare export function persist<S>(
    createState: CreateState<S>,
    persistOptions?: PersistOptions<S>
  ): CreateState<S>
  declare export function redux<S, A>(
    reducer: (state: S, action: A) => S,
    initialState: S
  ): CreateReduxState<S, A>
  declare export function subscribeWithSelector<S>(
    createState: CreateState<S>,
  ): CreateState<S>
}
declare module 'zustand/middleware.js' {
  declare export * from 'zustand/middleware'
}
declare module 'zustand/middleware.mjs' {
  declare export * from 'zustand/middleware'
}

declare module 'zustand/middleware/immer' {
  import type { CreateState } from 'zustand/vanilla'

  declare export function immer<S>(
    createState: CreateState<S>,
  ): CreateState<S>
}
declare module 'zustand/middleware/immer.js' {
  declare export * from 'zustand/middleware/immer'
}
declare module 'zustand/middleware/immer.mjs' {
  declare export * from 'zustand/middleware/immer'
}

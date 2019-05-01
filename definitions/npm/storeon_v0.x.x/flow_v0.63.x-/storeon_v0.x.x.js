
type $npm$storeon$PropertyKey = string | number | Symbol;

type $npm$storeon$Dispatch = (event: $npm$storeon$PropertyKey, data?: any) => void;

type $npm$storeon$Store<State> = {
    on: (
        event: $npm$storeon$PropertyKey,
        handler: (state: State, data: any) => $Shape<State> | Promise<void> | null
    ) => () => void;
    dispatch: $npm$storeon$Dispatch;
    get: () => State;
}

type $npm$storeon$Module<State> = (store: $npm$storeon$Store<State>) => void;

declare function $npm$storeon$createStore<State>(
    modules: Array<$npm$storeon$Module<State> | false>
): $npm$storeon$Store<State>;

type $npm$storeon$StoreData<State: {}> = {
    dispatch: $npm$storeon$Dispatch;
} & State;

declare function $npm$storeon$useStoreon<State: {}>(
    ...keys: Array<$Keys<State>>
): $npm$storeon$StoreData<State>;

declare var $npm$storeon$StoreContext: React$Context<$npm$storeon$Store<*>>;

declare function $npm$storeon$omit<
    O, P, A, B, C, D, E
    >(O, P): $Exact<$Call<
    & (([A]) => {
    ...$Exact<$ObjMapi<O,
        & (<K: A, V>(K, V) => void)
        & (<K, V>(K, V) => V)
        >>,
})
    & (([A, B]) => {
    ...$Exact<$ObjMapi<O,
        & (<K: A | B, V>(K, V) => void)
        & (<K, V>(K, V) => V)
        >>,
})
    & (([A, B, C]) => {
    ...$Exact<$ObjMapi<O,
        & (<K: A | B | C, V>(K, V) => void)
        & (<K, V>(K, V) => V)
        >>,
})
    & (([A, B, C, D]) => {
    ...$Exact<$ObjMapi<O,
        & (<K: A | B | C | D, V>(K, V) => void)
        & (<K, V>(K, V) => V)
        >>,
})
    & (([A, B, C, D, E]) => {
    ...$Exact<$ObjMapi<O,
        & (<K: A | B | C | D | E, V>(K, V) => void)
        & (<K, V>(K, V) => V)
        >>,
})
    , P>>

declare type $npm$storeon$_Omit = typeof $npm$storeon$omit;

declare type $npm$storeon$Omit<O, P> = $Call<$npm$storeon$_Omit, O, P>

declare function $npm$storeon$connect<C>(
    ...keysOrComponent: Array<$Keys<C> | React$ComponentType<C>>
): React$ComponentType<$Shape<$npm$storeon$Omit<C, ["dispatch"]>>>;

declare module "storeon" {
    declare type Module<T> = $npm$storeon$Module<T>;
    declare type Store<T> = $npm$storeon$Store<T>;
    declare type Dispatch = $npm$storeon$Dispatch;

    declare module.exports: typeof $npm$storeon$createStore;
}

declare module "storeon/react" {
    declare module.exports: typeof $npm$storeon$useStoreon;
}

declare module "storeon/react/context" {

    declare module.exports: typeof $npm$storeon$StoreContext;
}

declare module "storeon/react/connect" {
    declare module.exports: typeof $npm$storeon$connect;
}

declare module "storeon/preact" {
    declare module.exports: typeof $npm$storeon$useStoreon;
}

declare module "storeon/preact/context" {

    declare module.exports: typeof $npm$storeon$StoreContext;
}

declare module "storeon/preact/connect" {
    declare module.exports: typeof $npm$storeon$connect;
}

declare module "storeon/devtools" {
    declare module.exports: {
        <State>(store: $npm$storeon$Store<State>): void;
        (): <State>(store: $npm$storeon$Store<State>) => void;
    };
}

declare module "storeon/devtools/logger.browser" {
    declare module.exports: $npm$storeon$Module<*>;
}

declare module "storeon/devtools/logger" {
    declare module.exports: $npm$storeon$Module<*>;
}


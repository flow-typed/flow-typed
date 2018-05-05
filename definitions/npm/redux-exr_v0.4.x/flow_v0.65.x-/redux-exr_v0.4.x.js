
declare module 'redux-exr'
{
  declare type Reducer<S, A> = (state: S, action: A) => S;

  declare export function makePlainReducer<S, A>(initialState: S, reducer: Reducer<S, A>): Reducer<S, A>;

  declare type ExReducerDependencies = Object; // TODO
  declare type ExReducerDependenciesChanges = Object; // TODO
  declare type ExReducerDependenciesSpec = Object; // TODO

  declare type ExReducer<S, A> = (
    state: S,
    action: A,
    dependencies: ExReducerDependencies,
    changes: ExReducerDependenciesChanges,
  ) => S;

  declare export function makeExReducer<S, A>(
    initialState: S,
    dependenciesSpec: ExReducerDependenciesSpec,
    reducer: ExReducer<S, A>,
  ): ExReducer<S, A>;

  declare type ExReducerTree = {
    [key: string]: Reducer<*, *> | ExReducer<*, *> | ExReducerTree,
  };

  declare export function exCombineReducers(tree: ExReducerTree): <S, A>(rootState: S, action: A) => S;
};

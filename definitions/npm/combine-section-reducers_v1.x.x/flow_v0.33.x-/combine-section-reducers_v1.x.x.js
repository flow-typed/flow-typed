declare module 'combine-section-reducers' {

  /*
    S = State
    A = Action
    E = EntireState
  */

  declare type Reducer<S, A> = (state: S, action: A, ...rest: any) => S;
  declare type SectionReducer<S, A, E> = (state: S, action: A, entireState?: E) => S;
  declare type CombinedSectionReducer<S, A, E> = (state: $Shape<S> & {} | void, action: A, entireState?: E) => S;
  declare function combineSectionReducers<O: Object, A, E>(reducers: O): CombinedSectionReducer<$ObjMap<O, <S>(r: Reducer<S, any>) => S>, A, E>;
  declare module.exports: typeof combineSectionReducers;

}

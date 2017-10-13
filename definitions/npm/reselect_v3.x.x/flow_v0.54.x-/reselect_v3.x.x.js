// derived from the official typescript definitions found on the reselect repository
// https://github.com/reactjs/reselect/blob/master/src/index.d.ts
declare module "reselect" {
  declare type Selector<S, P, R> = (state: S, props: P, ...args: any[]) => R;

  declare type OutputSelector<S, P, R, C> = Selector<S, P, R> & {
    resultFunc: C,
    recomputations: () => number,
    resetRecomputations: () => number
  };

  declare type SelectorCreator = {
    /* one selector */
    <S, P, R1, T>(
      selector: Selector<S, P, R1>,
      combiner: (res: R1) => T
    ): OutputSelector<S, P, T, (res: R1) => T>,

    /* two selectors */
    <S, P, R1, R2, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      combiner: (res1: R1, res2: R2) => T
    ): OutputSelector<S, P, T, (res1: R1, res2: R2) => T>,

    /* three selectors */
    <S, P, R1, R2, R3, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      combiner: (res1: R1, res2: R2, res3: R3) => T
    ): OutputSelector<S, P, T, (res1: R1, res2: R2, res3: R3) => T>,

    /* four selectors */
    <S, P, R1, R2, R3, R4, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      selector4: Selector<S, P, R4>,
      combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T
    ): OutputSelector<S, P, T, (res1: R1, res2: R2, res3: R3, res4: R4) => T>,

    /* five selectors */
    <S, P, R1, R2, R3, R4, R5, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      selector4: Selector<S, P, R4>,
      selector5: Selector<S, P, R5>,
      combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T
    ): OutputSelector<
      S,
      P,
      T,
      (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T
    >,

    /* six selectors */
    <S, P, R1, R2, R3, R4, R5, R6, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      selector4: Selector<S, P, R4>,
      selector5: Selector<S, P, R5>,
      selector6: Selector<S, P, R6>,
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
    >,

    /* seven selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      selector4: Selector<S, P, R4>,
      selector5: Selector<S, P, R5>,
      selector6: Selector<S, P, R6>,
      selector7: Selector<S, P, R7>,
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7
      ) => T
    >,

    /* eight selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      selector4: Selector<S, P, R4>,
      selector5: Selector<S, P, R5>,
      selector6: Selector<S, P, R6>,
      selector7: Selector<S, P, R7>,
      selector8: Selector<S, P, R8>,
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8
      ) => T
    >,

    /* nine selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      selector4: Selector<S, P, R4>,
      selector5: Selector<S, P, R5>,
      selector6: Selector<S, P, R6>,
      selector7: Selector<S, P, R7>,
      selector8: Selector<S, P, R8>,
      selector9: Selector<S, P, R9>,
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9
      ) => T
    >,

    /* ten selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      selector4: Selector<S, P, R4>,
      selector5: Selector<S, P, R5>,
      selector6: Selector<S, P, R6>,
      selector7: Selector<S, P, R7>,
      selector8: Selector<S, P, R8>,
      selector9: Selector<S, P, R9>,
      selector10: Selector<S, P, R10>,
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10
      ) => T
    >,

    /* eleven selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      selector4: Selector<S, P, R4>,
      selector5: Selector<S, P, R5>,
      selector6: Selector<S, P, R6>,
      selector7: Selector<S, P, R7>,
      selector8: Selector<S, P, R8>,
      selector9: Selector<S, P, R9>,
      selector10: Selector<S, P, R10>,
      selector11: Selector<S, P, R11>,
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10,
        res11: R11
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10,
        res11: R11
      ) => T
    >,

    /* twelve selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
      selector1: Selector<S, P, R1>,
      selector2: Selector<S, P, R2>,
      selector3: Selector<S, P, R3>,
      selector4: Selector<S, P, R4>,
      selector5: Selector<S, P, R5>,
      selector6: Selector<S, P, R6>,
      selector7: Selector<S, P, R7>,
      selector8: Selector<S, P, R8>,
      selector9: Selector<S, P, R9>,
      selector10: Selector<S, P, R10>,
      selector11: Selector<S, P, R11>,
      selector12: Selector<S, P, R12>,
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10,
        res11: R11,
        res12: R12
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10,
        res11: R11,
        res12: R12
      ) => T
    >,

    /* array argument */
    /* one selector */
    <S, P, R1, T>(
      selectors: [Selector<S, P, R1>],
      combiner: (res: R1) => T
    ): OutputSelector<S, P, T, (res: R1) => T>,

    /* two selectors */
    <S, P, R1, R2, T>(
      selectors: [Selector<S, P, R1>, Selector<S, P, R2>],
      combiner: (res1: R1, res2: R2) => T
    ): OutputSelector<S, P, T, (res1: R1, res2: R2) => T>,

    /* three selectors */
    <S, P, R1, R2, R3, T>(
      selectors: [Selector<S, P, R1>, Selector<S, P, R2>, Selector<S, P, R3>],
      combiner: (res1: R1, res2: R2, res3: R3) => T
    ): OutputSelector<S, P, T, (res1: R1, res2: R2, res3: R3) => T>,

    /* four selectors */
    <S, P, R1, R2, R3, R4, T>(
      selectors: [
        Selector<S, P, R1>,
        Selector<S, P, R2>,
        Selector<S, P, R3>,
        Selector<S, P, R4>
      ],
      combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T
    ): OutputSelector<S, P, T, (res1: R1, res2: R2, res3: R3, res4: R4) => T>,

    /* five selectors */
    <S, P, R1, R2, R3, R4, R5, T>(
      selectors: [
        Selector<S, P, R1>,
        Selector<S, P, R2>,
        Selector<S, P, R3>,
        Selector<S, P, R4>,
        Selector<S, P, R5>
      ],
      combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T
    ): OutputSelector<
      S,
      P,
      T,
      (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T
    >,

    /* six selectors */
    <S, P, R1, R2, R3, R4, R5, R6, T>(
      selectors: [
        Selector<S, P, R1>,
        Selector<S, P, R2>,
        Selector<S, P, R3>,
        Selector<S, P, R4>,
        Selector<S, P, R5>,
        Selector<S, P, R6>
      ],
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T
    >,

    /* seven selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, T>(
      selectors: [
        Selector<S, P, R1>,
        Selector<S, P, R2>,
        Selector<S, P, R3>,
        Selector<S, P, R4>,
        Selector<S, P, R5>,
        Selector<S, P, R6>,
        Selector<S, P, R7>
      ],
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7
      ) => T
    >,

    /* eight selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, T>(
      selectors: [
        Selector<S, P, R1>,
        Selector<S, P, R2>,
        Selector<S, P, R3>,
        Selector<S, P, R4>,
        Selector<S, P, R5>,
        Selector<S, P, R6>,
        Selector<S, P, R7>,
        Selector<S, P, R8>
      ],
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8
      ) => T
    >,

    /* nine selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, T>(
      selectors: [
        Selector<S, P, R1>,
        Selector<S, P, R2>,
        Selector<S, P, R3>,
        Selector<S, P, R4>,
        Selector<S, P, R5>,
        Selector<S, P, R6>,
        Selector<S, P, R7>,
        Selector<S, P, R8>,
        Selector<S, P, R9>
      ],
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9
      ) => T
    >,

    /* ten selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
      selectors: [
        Selector<S, P, R1>,
        Selector<S, P, R2>,
        Selector<S, P, R3>,
        Selector<S, P, R4>,
        Selector<S, P, R5>,
        Selector<S, P, R6>,
        Selector<S, P, R7>,
        Selector<S, P, R8>,
        Selector<S, P, R9>,
        Selector<S, P, R10>
      ],
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10
      ) => T
    >,

    /* eleven selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
      selectors: [
        Selector<S, P, R1>,
        Selector<S, P, R2>,
        Selector<S, P, R3>,
        Selector<S, P, R4>,
        Selector<S, P, R5>,
        Selector<S, P, R6>,
        Selector<S, P, R7>,
        Selector<S, P, R8>,
        Selector<S, P, R9>,
        Selector<S, P, R10>,
        Selector<S, P, R11>
      ],
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10,
        res11: R11
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10,
        res11: R11
      ) => T
    >,

    /* twelve selectors */
    <S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
      selectors: [
        Selector<S, P, R1>,
        Selector<S, P, R2>,
        Selector<S, P, R3>,
        Selector<S, P, R4>,
        Selector<S, P, R5>,
        Selector<S, P, R6>,
        Selector<S, P, R7>,
        Selector<S, P, R8>,
        Selector<S, P, R9>,
        Selector<S, P, R10>,
        Selector<S, P, R11>,
        Selector<S, P, R12>
      ],
      combiner: (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10,
        res11: R11,
        res12: R12
      ) => T
    ): OutputSelector<
      S,
      P,
      T,
      (
        res1: R1,
        res2: R2,
        res3: R3,
        res4: R4,
        res5: R5,
        res6: R6,
        res7: R7,
        res8: R8,
        res9: R9,
        res10: R10,
        res11: R11,
        res12: R12
      ) => T
    >
  };
  declare type StructuredSelectorCreator = {
    <S, P, T>(
      selectors: { [$Keys<T>]: Selector<S, P, *> },
      selectorCreator?: SelectorCreator
    ): Selector<S, P, T>
  };

  declare type CreateSelectorCreator = {
    (memoize: <F: Function>(func: F) => F): SelectorCreator,

    <O1>(
      memoize: <F: Function>(func: F, option1: O1) => F,
      option1: O1
    ): SelectorCreator,

    <O1, O2>(
      memoize: <F: Function>(func: F, option1: O1, option2: O2) => F,
      option1: O1,
      option2: O2
    ): SelectorCreator,

    <O1, O2, O3>(
      memoize: <F: Function>(
        func: F,
        option1: O1,
        option2: O2,
        option3: O3,
        ...rest: any[]
      ) => F,
      option1: O1,
      option2: O2,
      option3: O3,
      ...rest: any[]
    ): SelectorCreator
  };

  declare class Reselect {
    createSelector: SelectorCreator,

    defaultMemoize<F: Function>(
      func: F,
      equalityCheck?: <T>(a: T, b: T, index: number) => boolean
    ): F,

    createSelectorCreator: CreateSelectorCreator,

    createStructuredSelector: StructuredSelectorCreator
  }
  declare var exports: Reselect;
}

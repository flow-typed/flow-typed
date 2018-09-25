
declare module "redux-saga/effects" {
  declare export type CallEffect<
    Context,
    Fn: Function,
    Args: $ReadonlyArray<*>
  > = $ReadOnly<{|
    type: "CALL",
    payload: $ReadOnly<{|
      context: Context,
      fn: Fn,
      args: Args
    |}>
  |}>;

  declare export var call: {
    // normal calls
    <R, Fn: () => R>(fn: Fn): CallEffect<null, Fn, []>,
    <R, T1, Fn: (t1: T1) => R>(fn: Fn, t1: T1): CallEffect<null, Fn, [T1]>,
    <R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      fn: Fn,
      t1: T1,
      t2: T2
    ): CallEffect<null, Fn, [T1, T2]>,
    <R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): CallEffect<null, Fn, [T1, T2, T3]>,
    <R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): CallEffect<null, Fn, [T1, T2, T3, T4]>,
    <R, T1, T2, T3, T4, T5, Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5, T6]>,

    // with context
    <Ctx, R, Fn: () => R>(cfn: [Ctx, Fn]): CallEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: (t1: T1) => R>(
      cfn: [Ctx, Fn],
      t1: T1
    ): CallEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2
    ): CallEffect<Ctx, Fn, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3
    ): CallEffect<Ctx, Fn, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>
  };

  declare export var apply: {
    <Ctx, R, Fn: () => R>(ctx: Ctx, fn: Fn): CallEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: (t1: T1) => R>(
      ctx: Ctx,
      fn: Fn,
      t1: T1
    ): CallEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2
    ): CallEffect<Ctx, Fn, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): CallEffect<Ctx, Fn, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
    >(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>
  };
}

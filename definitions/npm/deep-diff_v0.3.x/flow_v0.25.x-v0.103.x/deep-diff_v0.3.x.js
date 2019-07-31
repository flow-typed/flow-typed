declare module 'deep-diff' {
  declare type Difference =
  | {kind: "N", path: Array<string>, rhs: mixed}
  | {kind: "D", path: Array<string>, lhs: mixed}
  | {kind: "E", path: Array<string>, lhs: mixed, rhs: mixed}
  | {kind: "A", path: Array<string>, index: number, item: Difference}
  declare type PrefilterFn = (path: Array<string>, key: string) => bool|void
  declare module.exports: {
    (lhs: mixed, rhs: mixed, prefilter?: PrefilterFn, acc?: Array<mixed>): ?Array<Difference>,
    diff(lhs: mixed, rhs: mixed, prefilter?: PrefilterFn, acc?: Array<mixed>): ?Array<Difference>,
    observableDiff(lhs: mixed, rhs: mixed, observerFn: Function): void,
    applyChange(lhs: mixed, rhs: mixed, difference: Difference): void,
    revertChange(lhs: mixed, rhs: mixed, difference: Difference): void
  }
}

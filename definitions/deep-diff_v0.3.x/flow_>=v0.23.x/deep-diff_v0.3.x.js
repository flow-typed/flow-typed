type npm$deepDiff$Difference =
| {kind: "N", path: Array<string>, rhs: mixed}
| {kind: "D", path: Array<string>, lhs: mixed}
| {kind: "E", path: Array<string>, lhs: mixed, rhs: mixed}
| {kind: "A", path: Array<string>, index: number, item: npm$deepDiff$Difference}

type npm$deepDiff$PrefilterFn = (path: Array<string>, key: string) => bool|void;

declare module 'deep-diff' {
  declare var exports: {
    (lhs: mixed, rhs: mixed, prefilter?: npm$deepDiff$PrefilterFn, acc?: Array<mixed>): ?Array<npm$deepDiff$Difference>,
    diff(lhs: mixed, rhs: mixed, prefilter?: npm$deepDiff$PrefilterFn, acc?: Array<mixed>): ?Array<npm$deepDiff$Difference>,
    observableDiff(lhs: mixed, rhs: mixed, observerFn: Function): void,
    applyChange(lhs: mixed, rhs: mixed, difference: npm$deepDiff$Difference): void,
    revertChange(lhs: mixed, rhs: mixed, difference: npm$deepDiff$Difference): void
  }
}

type Difference = {
  kind: 'N'|'D'|'E'|'A',
  path: string[],
  lhs: ?any,
  rhs: ?any,
  index?: number,
  item?: Difference,
}

type PrefilterFn = (path: Array<string>, key: string) => bool|void;

declare module 'deep-diff' {
  declare function exports(lhs: any, rhs: any, prefilter?: PrefilterFn, acc?: Array<any>): ?Array<Difference>;
  declare function diff(lhs: any, rhs: any, prefilter?: PrefilterFn, acc?: Array<any>): ?Array<Difference>;
  declare function observableDiff(lhs: any, rhs: any, observerFn: Function): void;
  declare function applyChange(lhs: any, rhs: any, difference: Difference): void;
  declare function revertChange(lhs: any, rhs: any, difference: Difference): void;
}

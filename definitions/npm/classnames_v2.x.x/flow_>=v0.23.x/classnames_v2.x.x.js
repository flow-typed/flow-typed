type $npm$classnames$Classes =
  string |
  // We need both of these because if we just have the latter it won't accept objects typed
  // explicitly as the former, due to mutation concerns.
  {[className: string]: boolean } |
  {[className: string]: ?boolean } |
  Array<string> |
  void |
  null

declare module 'classnames' {
  declare function exports(
    ...classes: Array<$npm$classnames$Classes>
  ): string;
}

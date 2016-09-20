type $npm$classnames$Classes =
  string |
  {[className: string]: ?boolean } |
  Array<string> |
  void |
  null

declare module 'classnames' {
  declare function exports(
    ...classes: Array<$npm$classnames$Classes>
  ): string;
}

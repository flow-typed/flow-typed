
type $npm$classnames$Classes = string | {[className: string]: bool } | Array<string>

declare module 'classnames' {
  declare function exports(
    ...classes: Array<$npm$classnames$Classes>
  ): string;
}


type $npm$classnames$Classes = string | [class: string]: bool } | Array<string>

declare module 'classnames' {
  declare function exports(
    ...classes: Array<$npm$classnames$Classes>
  ): string;
}

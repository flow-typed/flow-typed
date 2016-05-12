
type Classes = string | [class: string]: bool } | Array<string>

declare module 'classnames' {
  declare function exports(
    ...classes: Array<Classes>
  ): string;
}

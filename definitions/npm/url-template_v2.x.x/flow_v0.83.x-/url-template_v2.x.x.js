declare module 'url-template' {
  declare export type Expand = (any) => string;

  declare export type Parse = (string) => {|
    expand: Expand
  |};

  declare module.exports: {|
    parse: Parse,
  |}
}

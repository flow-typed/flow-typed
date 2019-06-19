declare module 'indent-string' {
  declare module.exports: (
    input: string,
    count?: number,
    opts?: {|
      +includeEmptyLines?: bool,
      +indent?: string,
    |}
  ) => string;
}

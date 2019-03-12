declare function saveAs(
  data: Blob | File | string,
  filename?: string,
  options?: {| autoBom: boolean |}
): void;

declare module 'file-saver' {
  declare module.exports: typeof saveAs;
}

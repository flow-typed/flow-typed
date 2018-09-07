declare module 'element-ready' {
  declare export type Options = {|
      target?: Document | DocumentFragment | Element,
  |}

  // TODO: Replace `Promise<HTMLElement>` with PCancelable
  declare export default function elementReady(
      selector: string,
      options?: ?Options
  ): Promise<HTMLElement>
}

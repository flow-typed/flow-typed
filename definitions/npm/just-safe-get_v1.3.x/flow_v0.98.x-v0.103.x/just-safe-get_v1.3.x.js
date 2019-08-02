declare module 'just-safe-get' {
  declare export default function get(
    obj: mixed,
    key: string | Array<string>
  ): mixed;

  declare export default function get<TReturn>(
    obj: mixed,
    key: string | Array<string>
  ): TReturn;
}
